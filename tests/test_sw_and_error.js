/**
 * Unit Test for Step 7.9: Service Worker Cache v3 and Audio Error Handling
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');
require('./test_helpers');
const app = require('../js/app');

console.log('--- Running test_sw_and_error.js ---');

// Test Case 1: sw.js CACHE_SHELL_NAME bump to v3
const swContent = fs.readFileSync(path.join(__dirname, '../sw.js'), 'utf-8');
const cacheNameMatch = swContent.match(/const\s+CACHE_SHELL_NAME\s*=\s*['"]([^'"]+)['"]/);
assert(cacheNameMatch, 'sw.js should define CACHE_SHELL_NAME');
assert.strictEqual(cacheNameMatch[1], 'ai-agent-shell-v3', 'CACHE_SHELL_NAME must be ai-agent-shell-v3');

// Test Case 2: STATIC_ASSETS excludes lazy chapter scripts
assert(swContent.includes("'data/chapters_meta.js'"), 'STATIC_ASSETS should keep chapters_meta.js');
assert(swContent.includes("'data/introduction.js'"), 'STATIC_ASSETS should keep introduction.js');
assert(!swContent.includes("'data/chapter1.js'"), 'STATIC_ASSETS must remove lazy loaded chapter1.js');
assert(!swContent.includes("'data/chapter10.js'"), 'STATIC_ASSETS must remove lazy loaded chapter10.js');
assert(!swContent.includes("'data/afterword.js'"), 'STATIC_ASSETS must remove lazy loaded afterword.js');

// Test Case 3: Audio error listener triggers recovery toast
const audio = document.getElementById('audio-element');
audio.src = 'https://example.com/audio/chapter1.mp3';

let toastShown = false;
let retryActionProvided = false;

// Mock showToast hook
const originalShowToast = app.showToast;
app.showToast = (msg, options) => {
  toastShown = true;
  if (options && options.actionLabel && typeof options.onAction === 'function') {
    retryActionProvided = true;
  }
  return originalShowToast(msg, options);
};

// Dispatch audio error event
audio.dispatchEvent({ type: 'error' });

assert(toastShown, 'Audio error should trigger a Toast notification');
assert(retryActionProvided, 'Audio error toast should provide a retry action callback');

console.log('✅ test_sw_and_error.js passed all assertions!');
