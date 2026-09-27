/**
 * Unit Tests for Global Echo / Shadowing Learning Mode
 * Step 1: Listen at normal speed -> Step 2: Echo in mind (silent gap) -> Step 3: Shadow at 0.85x -> Auto-advance to Next Cue
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

// Test Case 2: Initial state & duration calculation
assert.strictEqual(echo.mode, false, 'Default echo mode should be off');
assert.strictEqual(echo.step, 'IDLE', 'Default step should be IDLE');

const cue1 = app.state.cues[0];
const cue2 = app.state.cues[1];
const pauseDur = echo.calcEchoDuration(cue1);
assert(pauseDur >= 1.8 && pauseDur <= 3.5, `Echo pause duration should be clamped between 1.8s and 3.5s, got: ${pauseDur}`);

// Test Case 3: Triggering Echo from any cue starts Global Shadowing Stream
echo.startSingleCue(cue1);
assert.strictEqual(echo.mode, true, 'Triggering from a cue must enable global echo mode');
assert.strictEqual(echo.step, 'LISTEN', 'Starting cue should set step to LISTEN');
assert.strictEqual(echo.activeCue.id, cue1.id, 'activeCue should match target cue');
assert.strictEqual(audio.playbackRate, 1.0, 'Listen stage should use user playback rate');

// Test Case 4: Reaching cue end triggers Echo (Silent Gap without breaking audio session)
echo.onTimeUpdate(cue1.end + 0.05, cue1);
assert.strictEqual(echo.step, 'ECHO', 'Crossing cue end in LISTEN stage should transition to ECHO stage');
assert.strictEqual(audio.volume, 0, 'Audio volume must be 0 for silence without killing audio session');
assert(echo.timerId !== null, 'Timer must be scheduled for silent pause');

// Test Case 5: Echo duration expires -> Transitions to Shadow (0.85x)
echo.triggerShadow(); // Trigger shadow step
assert.strictEqual(echo.step, 'SHADOW', 'Step should transition to SHADOW');
assert.strictEqual(audio.volume, 1.0, 'Volume must be restored to 1.0 for shadowing');
assert.strictEqual(audio.playbackRate, 0.85, 'Shadow step should slow down playbackRate to 0.85x');
assert(Math.abs(audio.currentTime - (cue1.start + 0.02)) < 0.05, 'Audio should rewind to cue start for shadowing');

// Test Case 6: Shadow stage finishes -> MUST AUTOMATICALLY ADVANCE to Cue 2 in Global Mode!
echo.onTimeUpdate(cue1.end + 0.05, cue1);
assert.strictEqual(echo.mode, true, 'Global mode must remain active across sentences');
assert.strictEqual(echo.step, 'LISTEN', 'Should start LISTEN step for next sentence');
assert.strictEqual(echo.activeCue.id, cue2.id, 'Active cue must automatically advance to Cue 2!');
assert.strictEqual(audio.playbackRate, 1.0, 'Playback rate must be restored to original 1.0 for Cue 2');
assert.strictEqual(audio.volume, 1.0, 'Volume must be 1.0 for Cue 2');

// Test Case 7: Cue 2 completes Listen -> Echo -> Shadow smoothly
echo.onTimeUpdate(cue2.end + 0.05, cue2);
assert.strictEqual(echo.step, 'ECHO');
echo.triggerShadow();
assert.strictEqual(echo.step, 'SHADOW');
assert.strictEqual(audio.playbackRate, 0.85);

// Test Case 8: Mutual Exclusivity with A-B Loop
app.state.repeatCurrent = true;
echo.toggleMode(true);
assert.strictEqual(app.state.repeatCurrent, false, 'Activating Echo mode must disable repeatCurrent (A-B loop)');

// Test Case 9: Interruption & Emergency Cancel
echo.startContinuous(cue1);
echo.onTimeUpdate(cue1.end + 0.05, cue1); // now in ECHO with volume = 0
assert.strictEqual(echo.step, 'ECHO');
echo.cancelEcho();
assert.strictEqual(echo.step, 'IDLE', 'cancelEcho must reset step to IDLE');
assert.strictEqual(echo.timerId, null, 'cancelEcho must clear any pending timer');
assert.strictEqual(audio.playbackRate, 1.0, 'cancelEcho must guarantee playback rate is restored');
assert.strictEqual(audio.volume, 1.0, 'cancelEcho must guarantee volume is restored');

// Test Case 10: Keyboard shortcut 'E'
echo.toggleMode(false);
const eventE = { code: 'KeyE', key: 'e', preventDefault: () => {} };
app.handleKeyboardShortcut(eventE);
assert.strictEqual(echo.mode, true, 'Pressing E should toggle echo mode on');
app.handleKeyboardShortcut(eventE);
assert.strictEqual(echo.mode, false, 'Pressing E again should toggle echo mode off');

console.log('✅ test_echo_mode.js passed all assertions!');
