/**
 * Unit Test for Step 7.4: Timestamp Deep Linking and Sentence Sharing
 */

const assert = require('assert');
require('./test_helpers');
const app = require('../js/app');

console.log('--- Running test_deeplink.js ---');

assert(typeof app.parseLocationHash === 'function', 'parseLocationHash should be exported');
assert(typeof app.generateDeepLink === 'function', 'generateDeepLink should be exported');

// Test Case 1: Standard plain chapter
const res1 = app.parseLocationHash('#chapter1');
assert.strictEqual(res1.chapterKey, 'chapter1');
assert.strictEqual(res1.seekTime, null);
assert.strictEqual(res1.cueId, null);

// Test Case 2: Chapter with query parameter ?t=150.5
const res2 = app.parseLocationHash('#chapter2?t=150.5');
assert.strictEqual(res2.chapterKey, 'chapter2');
assert.strictEqual(res2.seekTime, 150.5);
assert.strictEqual(res2.cueId, null);

// Test Case 3: Chapter with dash cueId #chapter2-cue_15 (verifying non-greedy capture)
const res3 = app.parseLocationHash('#chapter2-cue_15');
assert.strictEqual(res3.chapterKey, 'chapter2');
assert.strictEqual(res3.seekTime, null);
assert.strictEqual(res3.cueId, 'cue_15');

// Test Case 4: Combined query parameters #chapter3?cue=cue_20&t=45
const res4 = app.parseLocationHash('#chapter3?cue=cue_20&t=45');
assert.strictEqual(res4.chapterKey, 'chapter3');
assert.strictEqual(res4.seekTime, 45);
assert.strictEqual(res4.cueId, 'cue_20');

// Test Case 5: Deep link generation
const link = app.generateDeepLink('chapter5', 123.4, 42);
assert(link.includes('#chapter5?t=123.4'), 'Should generate standard timestamp query');

// Test Case 6: Copy text fallback helper
assert(typeof app.copyTextToClipboard === 'function', 'copyTextToClipboard should be exported');
return app.copyTextToClipboard(link).then(success => {
  assert.strictEqual(success, true, 'copyTextToClipboard should resolve true on success');
  console.log('✅ test_deeplink.js passed all assertions!');
});
