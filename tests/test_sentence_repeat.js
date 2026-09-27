/**
 * Comprehensive Unit & Regression Test for Single Sentence Repeat (A-B Loop)
 * Tests contiguous cue boundaries, multi-round loops, deliberate seeking, and toggle off.
 */

const assert = require('assert');
require('./test_helpers');
const app = require('../js/app');

console.log('--- Running test_sentence_repeat.js ---');

const audio = document.getElementById('audio-element');

// Setup two contiguous cues (exactly like real subtitle data where cue2.start == cue1.end)
app.state.cues = [
  { id: 1, start: 1.0, end: 5.0, en: 'First sentence', zh: '第一句' },
  { id: 2, start: 5.0, end: 10.0, en: 'Second sentence', zh: '第二句' }
];

// Test Case 1: Normal boundary overshoot rewinds to cue 1
const cue1 = app.state.cues[0];
app.state.activeCueId = cue1.id;
app.state.repeatCurrent = true;
audio.currentTime = 4.8;
audio.dispatchEvent({ type: 'timeupdate' });
assert.strictEqual(app.state.activeCueId, 1, 'Cue 1 should be active at 4.8s');

// Crossing cue end tick
audio.currentTime = 5.1;
audio.dispatchEvent({ type: 'timeupdate' });
assert(
  audio.currentTime >= 1.0 && audio.currentTime <= 1.1,
  `Audio should rewind to Cue 1 start (1.05s), got: ${audio.currentTime}`
);
assert.strictEqual(app.state.activeCueId, 1, 'Active cue should stay Cue 1');

// Test Case 2: Multi-round repetition
audio.currentTime = 4.9;
audio.dispatchEvent({ type: 'timeupdate' });
assert.strictEqual(app.state.activeCueId, 1);

audio.currentTime = 5.2; // second round overshoot
audio.dispatchEvent({ type: 'timeupdate' });
assert(
  audio.currentTime >= 1.0 && audio.currentTime <= 1.1,
  `Second round should rewind to Cue 1 start, got: ${audio.currentTime}`
);
assert.strictEqual(app.state.activeCueId, 1);

// Test Case 3: Deliberate seek to Cue 2 updates repeat target to Cue 2
audio.currentTime = 7.0; // inside Cue 2 (5.0 ~ 10.0s, > 5.0 + 1.5s seek threshold)
audio.dispatchEvent({ type: 'timeupdate' });
assert.strictEqual(app.state.activeCueId, 2, 'Seeking into Cue 2 should update activeCueId to 2');

// When Cue 2 reaches end (10.1s), it should now loop Cue 2!
audio.currentTime = 10.1;
audio.dispatchEvent({ type: 'timeupdate' });
assert(
  audio.currentTime >= 5.0 && audio.currentTime <= 5.1,
  `Audio should rewind to Cue 2 start (5.05s), got: ${audio.currentTime}`
);
assert.strictEqual(app.state.activeCueId, 2, 'Active cue should stay Cue 2 after rewinding');

// Test Case 4: Audio ended event rewinds and replays active cue
audio.dispatchEvent({ type: 'ended' });
assert(
  audio.currentTime >= 5.0 && audio.currentTime <= 5.1,
  'Audio ended should rewind back to active cue start'
);

// Test Case 5: Turning off repeat allows natural advancement
app.state.repeatCurrent = false;
audio.currentTime = 4.8;
audio.dispatchEvent({ type: 'timeupdate' });
assert.strictEqual(app.state.activeCueId, 1);

audio.currentTime = 5.1;
audio.dispatchEvent({ type: 'timeupdate' });
assert.strictEqual(app.state.activeCueId, 2, 'With repeat OFF, crossing boundary advances to Cue 2');
assert.strictEqual(audio.currentTime, 5.1, 'Audio position should not be rewound when repeat is OFF');

console.log('✅ test_sentence_repeat.js passed all 5 assertions!');

// Test Case 6: getCueCutoff Precision & Lead-in Anti-Leakage Buffer
assert(typeof app.getCueCutoff === 'function', 'getCueCutoff must be exported');

// Contiguous cues
const contigCutoff = app.getCueCutoff(cue1);
assert(contigCutoff <= 5.0 - 0.08, `Contiguous cutoff must precede next cue start by at least 80ms, got: ${contigCutoff}`);

// Real-world Overlapping cues (e.g. Cue 1 ends at 1.825s, but Cue 2 starts at 1.775s!)
app.state.cues = [
  { id: 101, start: 0.1, end: 1.825, en: 'Introduction .', zh: '引言。' },
  { id: 102, start: 1.775, end: 12.287, en: 'From August to October...', zh: '2025年8月至10月...' }
];
const overlapCutoff = app.getCueCutoff(app.state.cues[0]);
// Cutoff MUST be calculated relative to nextCue.start (1.775s), not cue1.end (1.825s)!
assert(
  overlapCutoff <= 1.775 - 0.08,
  `Overlapping cutoff must precede next cue start (1.775s) by at least 80ms, got: ${overlapCutoff}`
);

// Test Case 7: Overlapping Cue Loop Rewinds Before Next Cue First Sound
app.state.activeCueId = 101;
app.state.repeatCurrent = true;

// Before cutoff (e.g. 1.5s): remains inside cue 101
audio.currentTime = 1.5;
audio.dispatchEvent({ type: 'timeupdate' });
assert.strictEqual(app.state.activeCueId, 101);
assert.strictEqual(audio.currentTime, 1.5);

// Reaching cutoff (e.g. 1.70s, which is < 1.775s next cue start):
// Audio MUST rewind BEFORE touching 1.775s!
audio.currentTime = overlapCutoff + 0.01;
audio.dispatchEvent({ type: 'timeupdate' });
assert(
  audio.currentTime >= 0.1 && audio.currentTime <= 0.15,
  `Audio must rewind to cue 101 start (0.12s) before touching next cue start (1.775s), got: ${audio.currentTime}`
);
assert.strictEqual(app.state.activeCueId, 101, 'Active cue must stay 101');

// Test Case 8: Boundary monitor lifecycle & sync
assert(typeof app.startBoundaryMonitor === 'function');
assert(typeof app.stopBoundaryMonitor === 'function');
assert(typeof app.syncBoundaryMonitor === 'function');

app.startBoundaryMonitor();
app.stopBoundaryMonitor();

console.log('✅ test_sentence_repeat.js passed all 8 assertions including anti-leakage protection!');
