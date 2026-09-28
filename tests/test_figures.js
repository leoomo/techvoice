/**
 * Unit & Integration Tests for Article Figures & Lightbox
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');
require('./test_helpers');
require('../data/figures_meta.js');
const app = require('../js/app');

console.log('--- Running test_figures.js ---');

// Test 1: FIGURES_META integrity and total count (114)
console.log('Test 1: FIGURES_META schema and total count');
const m = window.FIGURES_META;
assert(m, 'window.FIGURES_META should be defined');
assert(m.introduction && m.chapter1 && m.chapter2, 'Should contain main chapters');
const totalFigs = Object.values(m).reduce((s, arr) => s + arr.length, 0);
assert.strictEqual(totalFigs, 114, 'Total mapped figures across all chapters must be exactly 114');

// Verify format of figure entries
const f1 = m.chapter1[0];
assert(f1.fig_id, 'fig_id required');
assert(f1.cue_id > 0, 'valid cue_id required');
assert(f1.num, 'figure num required');
assert(f1.title_zh, 'title_zh required');
assert(f1.title_en, 'title_en required');
assert(f1.file, 'file required');

// Test 2: Assets existence and fig2-7.png compression
console.log('Test 2: Asset files existence and optimization');
const zhFiles = fs.readdirSync(path.join(__dirname, '../assets/figures/zh'));
const enFiles = fs.readdirSync(path.join(__dirname, '../assets/figures/en'));
assert(zhFiles.length >= 135, 'ZH figures directory should contain at least 135 files');
assert(enFiles.length >= 135, 'EN figures directory should contain at least 135 files');
assert(fs.existsSync(path.join(__dirname, '../assets/figures/zh/n8n-workflow.png')), 'n8n-workflow.png must exist');
const fig27Size = fs.statSync(path.join(__dirname, '../assets/figures/zh/fig2-7.png')).size;
assert(fig27Size < 350000, 'fig2-7.png must be compressed under 350KB');

// Test 3: reader.html script mounting
console.log('Test 3: reader.html script mounting');
const readerHtml = fs.readFileSync(path.join(__dirname, '../reader.html'), 'utf8');
assert(readerHtml.includes('<script src="data/figures_meta.js"></script>'), 'reader.html must mount data/figures_meta.js');

// Test 4: renderTranscript renders .cue-figure-card
console.log('Test 4: renderTranscript mounts inline figure card');
const ch1Meta = window.CHAPTERS_META.find(c => c.key === 'chapter1');
app.state.currentChapterKey = 'chapter1';
const targetFig = window.FIGURES_META.chapter1[0];
app.state.cues = [
  { id: 1, start: 0, end: 5, en: 'Intro', zh: '引言' },
  { id: targetFig.cue_id, start: 50, end: 60, en: 'As illustrated in Figure 1-1', zh: '如图1-1所示' }
];
app.renderTranscript(ch1Meta);

const transcriptEl = document.getElementById('transcript-list');
const fig1Card = transcriptEl.querySelector(`[data-fig-id="${targetFig.fig_id}"]`);
assert(fig1Card, `Card for ${targetFig.fig_id} should be rendered in transcript`);
assert(fig1Card.className.includes('cue-figure-card'), 'Should have class cue-figure-card');

// Verify cue without figure does NOT have .cue-figure-card
const cue1 = document.getElementById('cue-1');
assert(cue1, 'cue-1 should exist');
const cue1Fig = cue1.querySelector('.cue-figure-card');
assert(!cue1Fig || !cue1Fig.className || !cue1Fig.className.includes('cue-figure-card'), 'cue-1 should not have a figure card');

// Test 5: Click isolation guard (closest .cue-figure-card prevents seekToCue)
console.log('Test 5: Click isolation guard prevents audio seek');
let seekCalled = false;
const origSeek = app.seekToCue;
app.seekToCue = () => { seekCalled = true; };

// Simulate click on figure card inside cue card
const mockEvent = {
  target: fig1Card,
  stopPropagation: () => {}
};
// Trigger cue card click listener
const targetCueCard = document.getElementById(`cue-${targetFig.cue_id}`);
assert(targetCueCard, `cue-${targetFig.cue_id} card should exist`);
targetCueCard.dispatchEvent(mockEvent);

assert.strictEqual(seekCalled, false, 'Clicking on figure card must NOT trigger audio seek');
app.seekToCue = origSeek;

console.log('✅ test_figures.js (Phase 1) passed all assertions!');
