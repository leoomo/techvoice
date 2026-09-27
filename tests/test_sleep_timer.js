/**
 * Unit Test for Step 7.7: Sleep Timer and Smooth Fade-out
 */

const assert = require('assert');
require('./test_helpers');
const app = require('../js/app');

console.log('--- Running test_sleep_timer.js ---');

assert(app.SleepTimer, 'SleepTimer should be exported');
const timer = app.SleepTimer;
const audio = document.getElementById('audio-element');

// Test Case 1: Start 15m timer
timer.start('15m');
assert.strictEqual(timer.mode, '15m');
assert.strictEqual(timer.remainingSeconds, 900, '15m should initialize to 900 seconds');
timer.stop();

// Test Case 2: A-B Loop mutual exclusivity guard
app.state.repeatCurrent = true;
timer.start('30m');
assert.strictEqual(timer.remainingSeconds, 1800, '30m should initialize to 1800 seconds');
assert.strictEqual(app.state.repeatCurrent, false, 'A-B Loop should be disabled when sleep timer is activated');
timer.stop();

// Test Case 3: Volume linear fade-out in final 10s and auto-pause at 0s
timer.start('15m');
timer.originalVolume = 1.0;
audio.volume = 1.0;
timer.remainingSeconds = 6;
timer.tick(); // remainingSeconds becomes 5
assert.strictEqual(timer.remainingSeconds, 5);
assert.strictEqual(audio.volume, 0.5, 'Volume should scale proportionally to 5 / 10 = 0.5');

timer.remainingSeconds = 1;
timer.tick(); // remainingSeconds becomes 0 -> trigger pause & cleanup
assert(audio.paused, 'Audio should be paused at 0s');
assert.strictEqual(audio.volume, 1.0, 'Audio volume should be restored to original volume after stopping');
assert.strictEqual(timer.remainingSeconds, null, 'Timer remaining seconds should be reset to null');

// Test Case 4: Manual stop restores volume and clears interval
timer.start('45m');
assert.strictEqual(timer.remainingSeconds, 2700);
audio.volume = 0.3; // simulate temporary volume change
timer.stop(true);
assert.strictEqual(timer.mode, null);
assert.strictEqual(timer.remainingSeconds, null);
assert.strictEqual(timer.intervalId, null);
assert.strictEqual(audio.volume, 1.0, 'Volume should be restored on manual stop');

console.log('✅ test_sleep_timer.js passed all assertions!');
