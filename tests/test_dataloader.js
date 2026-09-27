/**
 * Unit Test for Step 7.5: Dynamic Data Loader and Lazy Script Loading
 */

const assert = require('assert');
require('./test_helpers');
const app = require('../js/app');

console.log('--- Running test_dataloader.js ---');

assert(app.DynamicDataLoader, 'DynamicDataLoader should be exported');
const loader = app.DynamicDataLoader;

// Test Case 1: Already loaded chapter resolves immediately
window.CHAPTER_DATA_introduction = [{ id: 1, start: 0, end: 5, en: 'Intro', zh: '引言' }];
loader.loadedChapters.add('introduction');

return loader.loadChapterData('introduction').then(data => {
  assert(data, 'Should return data for introduction');
  assert.strictEqual(data[0].en, 'Intro');

  // Test Case 2: Unloaded chapter triggers script tag creation
  let createdScript = null;
  const originalCreateElement = document.createElement;
  document.createElement = (tag) => {
    const el = originalCreateElement(tag);
    if (tag === 'script') {
      createdScript = el;
      setTimeout(() => {
        window.CHAPTER_DATA_chapter1 = [{ id: 10, start: 20, end: 25, en: 'Ch1 test', zh: '测试' }];
        if (el.onload) el.onload();
      }, 10);
    }
    return el;
  };

  const p1 = loader.loadChapterData('chapter1');
  assert(createdScript, 'Script element should be created');
  assert(createdScript.src.includes('data/chapter1.js'), 'Script src should target data/chapter1.js');

  // Test Case 3: Concurrent duplicate request reuses existing promise
  const p2 = loader.loadChapterData('chapter1');
  assert.strictEqual(p1, p2, 'Concurrent requests for the same chapter should return the identical promise');

  return Promise.all([p1, p2]).then(([d1, d2]) => {
    assert.strictEqual(d1, d2);
    assert.strictEqual(d1[0].en, 'Ch1 test');
    assert(loader.isLoaded('chapter1'), 'chapter1 should now be marked as loaded');

    // Test Case 4: Failure handling allows retry
    document.createElement = (tag) => {
      const el = originalCreateElement(tag);
      if (tag === 'script') {
        setTimeout(() => {
          if (el.onerror) el.onerror(new Error('Network error'));
        }, 10);
      }
      return el;
    };

    return loader.loadChapterData('chapter_fail').catch(err => {
      assert(err, 'Should reject on script load error');
      assert(!loader.isLoaded('chapter_fail'), 'Failed chapter should not be marked loaded');
      assert(!loader.loadingPromises.has('chapter_fail'), 'Failed promise should be cleaned up from map');
      console.log('✅ test_dataloader.js passed all assertions!');
    });
  });
});
