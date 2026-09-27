/**
 * Unit Test for Step 7.2: MediaSession API Integration
 */

const assert = require('assert');
require('./test_helpers');
const app = require('../js/app');

console.log('--- Running test_mediasession.js ---');

assert(typeof app.updateMediaSession === 'function', 'updateMediaSession should be exported');

// Test Case 1: Graceful fallback when mediaSession is absent
const originalMediaSession = navigator.mediaSession;
try {
  delete navigator.mediaSession;
} catch (e) {
  navigator.mediaSession = undefined;
}
assert.doesNotThrow(() => {
  app.updateMediaSession({
    name: 'Chapter 1',
    title_en: 'Getting Started',
    title_zh: '初识',
    duration_sec: 1000
  });
}, 'Should not throw when mediaSession is undefined');

try {
  Object.defineProperty(navigator, 'mediaSession', {
    value: originalMediaSession,
    writable: true,
    configurable: true
  });
} catch (e) {
  navigator.mediaSession = originalMediaSession;
}

// Test Case 2: Proper metadata assignment
const sampleMeta = {
  name: 'Chapter 2',
  title_en: 'Context Engineering',
  title_zh: '上下文工程',
  duration_sec: 2500
};

app.updateMediaSession(sampleMeta);
assert(navigator.mediaSession.metadata, 'metadata object should be set');
assert(navigator.mediaSession.metadata.title.includes('Context Engineering'), 'metadata.title should contain chapter title');
assert(navigator.mediaSession.metadata.album.includes('AI Agents in Depth'), 'metadata.album should contain book title');
assert.strictEqual(navigator.mediaSession.metadata.artist, '李博杰 · Bojie Li', 'metadata.artist should match author');

// Test Case 3: Action handlers registered
const registeredActions = navigator.mediaSession._actions || {};
assert(typeof registeredActions['play'] === 'function', 'play action should be registered');
assert(typeof registeredActions['pause'] === 'function', 'pause action should be registered');
assert(typeof registeredActions['previoustrack'] === 'function', 'previoustrack action should be registered');
assert(typeof registeredActions['nexttrack'] === 'function', 'nexttrack action should be registered');
assert(typeof registeredActions['seekbackward'] === 'function', 'seekbackward action should be registered');
assert(typeof registeredActions['seekforward'] === 'function', 'seekforward action should be registered');

// Test Case 4: Sync position state safely
assert(typeof app.syncMediaPositionState === 'function', 'syncMediaPositionState should be exported');
let positionStateCalled = false;
navigator.mediaSession.setPositionState = (state) => {
  positionStateCalled = true;
  assert(state.duration >= 0, 'duration must be non-negative');
  assert(state.position >= 0, 'position must be non-negative');
};

app.syncMediaPositionState(50, 1000, 1.0);
assert(positionStateCalled, 'setPositionState should be called when valid parameters provided');

// Invalid duration should safely skip
positionStateCalled = false;
app.syncMediaPositionState(0, 0, 1.0);
assert.strictEqual(positionStateCalled, false, 'setPositionState should be skipped when duration <= 0');

console.log('✅ test_mediasession.js passed all assertions!');
