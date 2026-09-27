/**
 * Unit Tests for Global 3-Pass Shadowing & Mastery Learning Mode
 * Pass 1: Listen (1.0x full sentence) -> Pass 2: Shadow (0.85x full sentence) -> Pass 3: Review (1.0x full sentence) -> Auto-advance to Next Cue
 */

const assert = require('assert');
require('./test_helpers');
const app = require('../js/app');

console.log('--- Running test_echo_mode.js ---');

// Test Case 1: Export verification
assert(app.EchoController, 'EchoController should be exported');
const echo = app.EchoController;
const audio = document.getElementById('audio-element');

// Reset state
app.state.playbackRate = 1.0;
audio.playbackRate = 1.0;
audio.volume = 1.0;
app.state.cues = [
  { id: 1, start: 0, end: 4, en: 'First sentence of agent architecture.', zh: '智能体架构第一句。' },
  { id: 2, start: 4.5, end: 9, en: 'Second sentence for continuous echo.', zh: '连续回音第二句。' }
];

// Test Case 2: Initial state
assert.strictEqual(echo.mode, false, 'Default echo mode should be off');
assert.strictEqual(echo.step, 'IDLE', 'Default step should be IDLE');

const cue1 = app.state.cues[0];
const cue2 = app.state.cues[1];

// Test Case 3: Triggering Echo from any cue starts Global Shadowing Stream (Pass 1: LISTEN)
echo.startSingleCue(cue1);
assert.strictEqual(echo.mode, true, 'Triggering from a cue must enable global echo mode');
assert.strictEqual(echo.step, 'LISTEN', 'Starting cue should set step to LISTEN (Pass 1)');
assert.strictEqual(echo.activeCue.id, cue1.id, 'activeCue should match target cue');
assert.strictEqual(audio.playbackRate, 1.0, 'Listen stage should use user playback rate (1.0x)');
echo.isSeeking = false; // reset seek lock after initiation

// Test Case 4: Reaching cue 1 end in LISTEN -> Transitions to Pass 2: SHADOW (0.85x, Full Sentence!)
echo.onTimeUpdate(cue1.end + 0.05, cue1);
assert.strictEqual(echo.step, 'SHADOW', 'Crossing cue end in LISTEN stage should transition to SHADOW stage (Pass 2)');
assert.strictEqual(audio.playbackRate, 0.85, 'Shadow step must slow down playbackRate to 0.85x for comfortable mimicking');
assert(Math.abs(audio.currentTime - (cue1.start + 0.02)) < 0.05, 'Audio should rewind to cue start for full shadow playback');
echo.isSeeking = false; // simulate seek complete

// Test Case 5: Reaching cue 1 end in SHADOW -> Transitions to Pass 3: REVIEW (1.0x, Full Sentence!)
echo.onTimeUpdate(cue1.end + 0.05, cue1);
assert.strictEqual(echo.step, 'REVIEW', 'Crossing cue end in SHADOW stage should transition to REVIEW stage (Pass 3)');
assert.strictEqual(audio.playbackRate, 1.0, 'Review step must restore playbackRate to 1.0x for consolidated repetition');
assert(Math.abs(audio.currentTime - (cue1.start + 0.02)) < 0.05, 'Audio should rewind to cue start for full review playback');
echo.isSeeking = false; // simulate seek complete

// Test Case 6: Review stage finishes -> MUST AUTOMATICALLY ADVANCE to Cue 2 in Global Mode!
echo.onTimeUpdate(cue1.end + 0.05, cue1);
assert.strictEqual(echo.mode, true, 'Global mode must remain active across sentences');
assert.strictEqual(echo.step, 'LISTEN', 'Should start LISTEN step for next sentence (Cue 2 Pass 1)');
assert.strictEqual(echo.activeCue.id, cue2.id, 'Active cue must automatically advance to Cue 2!');
assert.strictEqual(audio.playbackRate, 1.0, 'Playback rate must be restored to original 1.0 for Cue 2');
echo.isSeeking = false;

// Test Case 7: Cue 2 completes Pass 1 (Listen) -> Pass 2 (Shadow) -> Pass 3 (Review)
echo.onTimeUpdate(cue2.end + 0.05, cue2);
assert.strictEqual(echo.step, 'SHADOW', 'Cue 2 advances to Pass 2 (Shadow 0.85x)');
assert.strictEqual(audio.playbackRate, 0.85);
echo.isSeeking = false;

echo.onTimeUpdate(cue2.end + 0.05, cue2);
assert.strictEqual(echo.step, 'REVIEW', 'Cue 2 advances to Pass 3 (Review 1.0x)');
assert.strictEqual(audio.playbackRate, 1.0);
echo.isSeeking = false;

// Test Case 8: Mutual Exclusivity with A-B Loop
app.state.repeatCurrent = true;
echo.toggleMode(true);
assert.strictEqual(app.state.repeatCurrent, false, 'Activating Echo mode must disable repeatCurrent (A-B loop)');

// Test Case 9: Interruption & Emergency Cancel
echo.startContinuous(cue1);
echo.isSeeking = false;
assert.strictEqual(echo.step, 'LISTEN');
echo.cancelEcho();
assert.strictEqual(echo.step, 'IDLE', 'cancelEcho must reset step to IDLE');
assert.strictEqual(audio.playbackRate, 1.0, 'cancelEcho must guarantee playback rate is restored');

// Test Case 10: Keyboard shortcut 'E'
echo.toggleMode(false);
const eventE = { code: 'KeyE', key: 'e', preventDefault: () => {} };
app.handleKeyboardShortcut(eventE);
assert.strictEqual(echo.mode, true, 'Pressing E should toggle echo mode on');
app.handleKeyboardShortcut(eventE);
assert.strictEqual(echo.mode, false, 'Pressing E again should toggle echo mode off');

console.log('✅ test_echo_mode.js passed all assertions!');
