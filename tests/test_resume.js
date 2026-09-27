/**
 * Unit Test for Step 7.1: Playback Position Auto-Resume and Toast System
 */

const assert = require('assert');
require('./test_helpers');
const app = require('../js/app');

console.log('--- Running test_resume.js ---');

// Test Case 1: showToast creates a toast element with message and action
assert(typeof app.showToast === 'function', 'showToast should be exported as a function');
const toast = app.showToast('Test Message', {
  actionLabel: 'Click Me',
  onAction: () => { toast._actionClicked = true; }
});
assert(toast, 'showToast should return a toast DOM element');
assert(toast.textContent.includes('Test Message'), 'Toast should contain the message text');

// Test Case 2: Save and Resume within valid range (5 <= pos <= duration - 5)
localStorage.clear();
localStorage.setItem('ai_agent_pos_introduction', '120.5');

// Mock state and check shouldResumePosition helper
assert(typeof app.checkAndResumePosition === 'function', 'checkAndResumePosition should be exported');

let resumed = app.checkAndResumePosition('introduction', 1000);
assert.strictEqual(resumed, 120.5, 'Should return resumed position 120.5 for valid stored time');

// Test Case 3: Threshold protection (< 5s should not resume)
localStorage.setItem('ai_agent_pos_introduction', '3.2');
resumed = app.checkAndResumePosition('introduction', 1000);
assert.strictEqual(resumed, null, 'Should not resume if stored time < 5s');

// Test Case 4: End-of-chapter threshold protection (>= duration - 5s should not resume)
localStorage.setItem('ai_agent_pos_introduction', '998');
resumed = app.checkAndResumePosition('introduction', 1000);
assert.strictEqual(resumed, null, 'Should not resume if stored time >= duration - 5s');

// Test Case 5: Reset playback position removes key
localStorage.setItem('ai_agent_pos_introduction', '300');
app.resetChapterPosition('introduction');
assert.strictEqual(localStorage.getItem('ai_agent_pos_introduction'), null, 'Key should be deleted after reset');

// Test Case 6: Isolation across chapters
localStorage.setItem('ai_agent_pos_chapter1', '450');
localStorage.setItem('ai_agent_pos_chapter2', '800');
assert.strictEqual(app.checkAndResumePosition('chapter1', 1000), 450);
assert.strictEqual(app.checkAndResumePosition('chapter2', 1000), 800);

console.log('✅ test_resume.js passed all assertions!');
