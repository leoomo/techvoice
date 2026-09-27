/**
 * Unit Test for Step 7.8: Keyboard Shortcuts with Focus Isolation and Speed/Mute Controls
 */

const assert = require('assert');
require('./test_helpers');
const app = require('../js/app');

console.log('--- Running test_shortcuts.js ---');

assert(app.handleKeyboardShortcut, 'handleKeyboardShortcut should be exported');
const audio = document.getElementById('audio-element');
const speedSelect = document.getElementById('speed-select');

// Test Case 1 (Input Focus Isolation): INPUT element blocks Space, M, ArrowDown
const inputEl = new (require('./test_helpers').DOMElementMock)('test-input', 'input');
document.activeElement = inputEl;

audio.paused = true;
audio.volume = 1.0;

// Simulate Space while input focused
app.handleKeyboardShortcut({
  code: 'Space',
  key: ' ',
  target: inputEl,
  preventDefault: () => {}
});
assert.strictEqual(audio.paused, true, 'Space while typing in input must not trigger play/pause');

// Simulate M while input focused
app.handleKeyboardShortcut({
  code: 'KeyM',
  key: 'm',
  target: inputEl,
  preventDefault: () => {}
});
assert.strictEqual(audio.volume, 1.0, 'M while typing in input must not trigger mute');

// Test Case 2 (Allowed keys while typing): Escape and Cmd+K must pass through
let modalClosed = false;
const searchModal = document.getElementById('modal-search');
searchModal.classList.add('active');

app.handleKeyboardShortcut({
  code: 'Escape',
  key: 'Escape',
  target: inputEl,
  preventDefault: () => {}
});
assert(!searchModal.classList.contains('active'), 'Escape while typing in input should close open modal');

// Test Case 3 (Speed Control [ and ] with Clamping)
document.activeElement = document.body;
app.setPlaybackRate(1.0);
assert.strictEqual(app.state.playbackRate, 1.0);

// Increase speed with ]
app.handleKeyboardShortcut({
  code: 'BracketRight',
  key: ']',
  target: document.body,
  preventDefault: () => {}
});
assert.strictEqual(app.state.playbackRate, 1.25, '] should step speed to 1.25');

// Step up to max clamp
app.setPlaybackRate(1.75);
app.handleKeyboardShortcut({
  code: 'BracketRight',
  key: ']',
  target: document.body,
  preventDefault: () => {}
});
assert.strictEqual(app.state.playbackRate, 1.75, '] should not exceed maximum rate 1.75x');

// Decrease speed with [
app.handleKeyboardShortcut({
  code: 'BracketLeft',
  key: '[',
  target: document.body,
  preventDefault: () => {}
});
assert.strictEqual(app.state.playbackRate, 1.5, '[ should step speed down to 1.5');

// Step down to min clamp
app.setPlaybackRate(0.75);
app.handleKeyboardShortcut({
  code: 'BracketLeft',
  key: '[',
  target: document.body,
  preventDefault: () => {}
});
assert.strictEqual(app.state.playbackRate, 0.75, '[ should not go below minimum rate 0.75x');

// Test Case 4 (Mute Toggle with M)
audio.volume = 0.8;
app.handleKeyboardShortcut({
  code: 'KeyM',
  key: 'm',
  target: document.body,
  preventDefault: () => {}
});
assert.strictEqual(audio.volume, 0, 'First M press should mute volume to 0');

app.handleKeyboardShortcut({
  code: 'KeyM',
  key: 'm',
  target: document.body,
  preventDefault: () => {}
});
assert.strictEqual(audio.volume, 0.8, 'Second M press should restore volume to previous 0.8');

console.log('✅ test_shortcuts.js passed all assertions!');
