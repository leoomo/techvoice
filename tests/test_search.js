/**
 * Unit Test for Step 7.6: Full-Text Search and Safe Highlighting
 */

const assert = require('assert');
require('./test_helpers');
const app = require('../js/app');

console.log('--- Running test_search.js ---');

assert(app.escapeHtml, 'escapeHtml should be exported');
assert(app.highlightMatches, 'highlightMatches should be exported');
assert(app.SearchEngine, 'SearchEngine should be exported');

// Test Case 1 (XSS Protection): Searching <img> does not emit raw tags
const rawXssText = 'Dangerous <img src=x onerror=alert(1)> tag';
const xssResult = app.highlightMatches(rawXssText, 'img');
assert(!xssResult.includes('<img'), 'Should not contain raw <img> tag');
assert(xssResult.includes('&lt;'), 'Should escape angle brackets to &lt;');
assert(xssResult.includes('<mark class="search-highlight">img</mark>'), 'Should highlight "img" inside mark tag');

// Test Case 2 (Entity Protection): Matches before & after entity are safe
const entityText = 'Agents & Multi-Agent systems';
const entityResult = app.highlightMatches(entityText, 'agent');
assert(entityResult.includes('&amp;'), 'Should preserve safe &amp; entity');
assert(entityResult.includes('<mark class="search-highlight">Agent</mark>'), 'Should highlight capitalized Agent');

// Test Case 3 (Case-insensitivity & multiple occurrences)
const multiText = 'Agent alpha meets another agent beta';
const multiResult = app.highlightMatches(multiText, 'agent');
const matchCount = (multiResult.match(/<mark class="search-highlight">/g) || []).length;
assert.strictEqual(matchCount, 2, 'Should highlight all occurrences of agent');

// Test Case 4 (Empty query & Empty results)
assert.strictEqual(app.SearchEngine.search('').length, 0, 'Empty search string returns 0 results');
assert.strictEqual(app.SearchEngine.search('   ').length, 0, 'Whitespace only search returns 0 results');
const noMatch = app.SearchEngine.search('xyzNonExistentKeyword999');
assert(Array.isArray(noMatch) && noMatch.length === 0, 'Non-matching keyword returns empty array');

// Test Case 5 (Cross-chapter search with pre-populated chapters)
window.CHAPTER_DATA_introduction = [
  { id: 1, start: 0, end: 5, en: 'Intro to Autonomous Agents', zh: '自主智能体引言' },
  { id: 2, start: 5.1, end: 10, en: 'History of AI', zh: '人工智能历史' }
];
window.CHAPTER_DATA_chapter1 = [
  { id: 10, start: 20, end: 25, en: 'Building an Agent from scratch', zh: '从零构建智能体' },
  { id: 11, start: 25.1, end: 30, en: 'LLM Foundations', zh: '大语言模型基础' }
];

const agentResults = app.SearchEngine.search('Agent');
assert(agentResults.length >= 2, 'Should match cues across both introduction and chapter1');
const chIntroMatch = agentResults.find(r => r.chapterKey === 'introduction');
const ch1Match = agentResults.find(r => r.chapterKey === 'chapter1');
assert(chIntroMatch, 'Should find match in introduction');
assert(ch1Match, 'Should find match in chapter1');
assert.strictEqual(ch1Match.cueId, 10);
assert.strictEqual(ch1Match.start, 20);
assert(ch1Match.enHighlighted.includes('<mark class="search-highlight">Agent</mark>'), 'Search result should have highlighted en text');

// Test Case 6 (Truncation protection: cap at MAX_SEARCH_RESULTS = 50)
const originalMeta = window.CHAPTERS_META;
window.CHAPTER_DATA_chapter1 = [];
for (let i = 0; i < 100; i++) {
  window.CHAPTER_DATA_chapter1.push({ id: 100 + i, start: i, end: i + 1, en: `Repeating Agent cue ${i}`, zh: `智能体重复句子 ${i}` });
}
const cappedResults = app.SearchEngine.search('Agent');
assert.strictEqual(cappedResults.length, 50, 'Search results should be capped at 50 to prevent DOM overload');

console.log('✅ test_search.js passed all assertions!');
