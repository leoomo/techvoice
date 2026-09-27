/**
 * Unit Tests for Echo Learning Mode (Prof. Karen Chung's Echo Method)
 * Step 1: Listen at normal speed -> Step 2: Echo in mind (silent pause) -> Step 3: Shadow at 0.85x
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
app.state.cues = [
  { id: 1, start: 0, end: 4, en: 'First sentence of agent architecture.', zh: '智能体架构第一句。' },
  { id: 2, start: 4.5, end: 9, en: 'Second sentence for continuous echo.', zh: '连续回音第二句。' }
];

// Test Case 2: Initial state & duration calculation
assert.strictEqual(echo.mode, false, 'Default echo mode should be off');
assert.strictEqual(echo.step, 'IDLE', 'Default step should be IDLE');

const cue1 = app.state.cues[0];
const pauseDur = echo.calcEchoDuration(cue1);
assert(pauseDur >= 1.8 && pauseDur <= 3.5, `Echo pause duration should be clamped between 1.8s and 3.5s, got: ${pauseDur}`);

// Test Case 3: Single Cue Echo Trigger & Listen Stage
echo.startSingleCue(cue1);
assert.strictEqual(echo.step, 'LISTEN', 'Starting single cue should set step to LISTEN');
assert.strictEqual(echo.singleCueId, cue1.id, 'singleCueId should match target cue');
assert.strictEqual(audio.currentTime, cue1.start, 'Audio should seek to cue start');
assert.strictEqual(audio.playbackRate, 1.0, 'Listen stage should use user playback rate');

// Test Case 4: Reaching cue end triggers Echo (Silent Pause)
echo.onTimeUpdate(cue1.end + 0.05, cue1);
assert.strictEqual(echo.step, 'ECHO', 'Crossing cue end in LISTEN stage should transition to ECHO stage');
assert.strictEqual(audio.paused, true, 'Audio must be paused during silent echo stage');
assert(echo.timerId !== null, 'Timer must be scheduled for silent pause');

// Test Case 5: Echo duration expires -> Transitions to Shadow (0.85x)
echo.triggerShadow(); // Trigger shadow step
assert.strictEqual(echo.step, 'SHADOW', 'Step should transition to SHADOW');
assert.strictEqual(audio.playbackRate, 0.85, 'Shadow step should slow down playbackRate to 0.85x');
assert(Math.abs(audio.currentTime - (cue1.start + 0.02)) < 0.05, 'Audio should rewind to cue start for shadowing');
assert.strictEqual(audio.paused, false, 'Audio should start playing for shadowing');

// Test Case 6: Shadow stage finishes for Single Cue Echo
echo.onTimeUpdate(cue1.end + 0.05, cue1);
assert.strictEqual(echo.step, 'IDLE', 'Single cue echo should finish and return to IDLE');
assert.strictEqual(echo.singleCueId, null, 'singleCueId should be reset to null');
assert.strictEqual(audio.playbackRate, 1.0, 'Playback rate must be restored to original user rate 1.0');
assert.strictEqual(audio.paused, true, 'Audio should pause after single cue echo completes');

// Test Case 7: Continuous Echo Stream Mode & Sequential Transition
echo.toggleMode(true);
assert.strictEqual(echo.mode, true, 'Echo continuous mode should be enabled');

// Start from cue 1 in continuous mode
echo.startContinuous(cue1);
assert.strictEqual(echo.step, 'LISTEN');

// Listen -> Echo
echo.onTimeUpdate(cue1.end + 0.05, cue1);
assert.strictEqual(echo.step, 'ECHO');

// Echo -> Shadow
echo.triggerShadow();
assert.strictEqual(echo.step, 'SHADOW');
assert.strictEqual(audio.playbackRate, 0.85);

// Shadow ends -> in continuous mode, should advance to cue 2
const cue2 = app.state.cues[1];
echo.onTimeUpdate(cue1.end + 0.05, cue1);
assert.strictEqual(echo.step, 'LISTEN', 'In continuous mode, finishing shadow should start LISTEN for next cue');
assert.strictEqual(echo.activeCue.id, cue2.id, 'Active cue should advance to cue 2');
assert.strictEqual(audio.playbackRate, 1.0, 'Playback rate should be restored to normal user rate for next cue');

// Test Case 8: Mutual Exclusivity with A-B Loop
app.state.repeatCurrent = true;
echo.toggleMode(true);
assert.strictEqual(app.state.repeatCurrent, false, 'Activating Echo mode must disable repeatCurrent (A-B loop)');

// Test Case 9: Interruption & Emergency Cancel
echo.startSingleCue(cue1);
echo.onTimeUpdate(cue1.end + 0.05, cue1); // now in ECHO with active timer
assert.strictEqual(echo.step, 'ECHO');
echo.cancelEcho();
assert.strictEqual(echo.step, 'IDLE', 'cancelEcho must reset step to IDLE');
assert.strictEqual(echo.timerId, null, 'cancelEcho must clear any pending timer');
assert.strictEqual(audio.playbackRate, 1.0, 'cancelEcho must guarantee playback rate is restored');

// Test Case 10: Keyboard shortcut 'E'
echo.toggleMode(false);
const eventE = { code: 'KeyE', key: 'e', preventDefault: () => {} };
app.handleKeyboardShortcut(eventE);
assert.strictEqual(echo.mode, true, 'Pressing E should toggle echo mode on');
app.handleKeyboardShortcut(eventE);
assert.strictEqual(echo.mode, false, 'Pressing E again should toggle echo mode off');

console.log('✅ test_echo_mode.js passed all assertions!');
