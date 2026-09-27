/**
 * Unit Test for Step 7.3: Audio Stream Buffering Progress Bar Calculation
 */

const assert = require('assert');
require('./test_helpers');
const app = require('../js/app');

console.log('--- Running test_buffer_calc.js ---');

assert(typeof app.calculateBufferPercent === 'function', 'calculateBufferPercent should be exported');

// Helper to mock TimeRanges
function createTimeRanges(ranges = []) {
  return {
    length: ranges.length,
    start(i) { return ranges[i][0]; },
    end(i) { return ranges[i][1]; }
  };
}

// Test Case 1: Empty buffer
assert.strictEqual(app.calculateBufferPercent(10, createTimeRanges([]), 100), 0);

// Test Case 2: Current time in first range [0, 30] out of 100s
const singleRange = createTimeRanges([[0, 30]]);
assert.strictEqual(app.calculateBufferPercent(10, singleRange, 100), 30);

// Test Case 3: Current time in second range [0, 10], [20, 60] with currentTime=35
const multiRange = createTimeRanges([[0, 10], [20, 60]]);
assert.strictEqual(app.calculateBufferPercent(35, multiRange, 100), 60);

// Test Case 4: Clamp protection
const overflowRange = createTimeRanges([[0, 150]]);
assert.strictEqual(app.calculateBufferPercent(50, overflowRange, 100), 100);

// Test Case 5: Invalid/zero duration
assert.strictEqual(app.calculateBufferPercent(10, singleRange, 0), 0);
assert.strictEqual(app.calculateBufferPercent(10, singleRange, NaN), 0);

console.log('✅ test_buffer_calc.js passed all assertions!');
