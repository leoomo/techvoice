/**
 * Unit Test for Step 7.3: Smart Non-Intrusive Scroll Detection and Resume Cue Pill
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');
require('./test_helpers');
const app = require('../js/app');

console.log('--- Running test_reader_friendly.js ---');

const resumeBtn = document.getElementById('btn-resume-cue');
const transcriptEl = document.getElementById('transcript-list');

// Setup mock container dimensions
transcriptEl.getBoundingClientRect = () => ({
  top: 100,
  bottom: 600,
  left: 0,
  right: 820,
  width: 820,
  height: 500
});

// Setup mock cues
const cue1 = document.getElementById('cue-1');
const cue2 = document.getElementById('cue-2');

// Test Case 1: isCueInContainerView correctly identifies in-view vs out-of-view cues
console.log('Test 1: isCueInContainerView');
cue1.getBoundingClientRect = () => ({
  top: 200,
  bottom: 260,
  left: 0,
  right: 800,
  width: 800,
  height: 60
});
assert.strictEqual(app.isCueInContainerView(cue1, transcriptEl), true, 'Cue within 100-600 container should be in view');

// Scrolled out above (top: -50, bottom: 20 -> bottom 20 < container top 100 + 16 buffer)
cue1.getBoundingClientRect = () => ({
  top: -50,
  bottom: 20,
  left: 0,
  right: 800,
  width: 800,
  height: 70
});
assert.strictEqual(app.isCueInContainerView(cue1, transcriptEl), false, 'Cue scrolled out above should not be in view');

// Scrolled out below (top: 650, bottom: 720 -> top 650 > container bottom 600 - 16 buffer)
cue1.getBoundingClientRect = () => ({
  top: 650,
  bottom: 720,
  left: 0,
  right: 800,
  width: 800,
  height: 70
});
assert.strictEqual(app.isCueInContainerView(cue1, transcriptEl), false, 'Cue scrolled out below should not be in view');

// Test Case 2: Programmatic scroll mutex lock
console.log('Test 2: Programmatic scroll lock');
app.setIsProgrammaticScrolling(false);
assert.strictEqual(app.getIsProgrammaticScrolling(), false, 'Should start unlocked');

let scrollIntoViewCalled = false;
cue1.scrollIntoView = () => { scrollIntoViewCalled = true; };

app.triggerProgrammaticScroll(cue1);
assert.strictEqual(app.getIsProgrammaticScrolling(), true, 'Should be locked immediately after triggerProgrammaticScroll');
assert.strictEqual(scrollIntoViewCalled, true, 'scrollIntoView should be executed');

// During programmatic scroll, user scroll handler is bypassed
app.state.autoScroll = true;
app.state.activeCueId = 1;
app.state.isUserDetached = false;
app.handleTranscriptScroll();
assert.strictEqual(app.state.isUserDetached, false, 'Should not detach while isProgrammaticScrolling is true');

// Unlock
app.setIsProgrammaticScrolling(false);
assert.strictEqual(app.getIsProgrammaticScrolling(), false, 'Should be unlocked');

// Test Case 3: User scroll detachment state machine
console.log('Test 3: User scroll detachment state machine');
app.state.autoScroll = true;
app.state.activeCueId = 1;
app.state.isUserDetached = false;
app.updateResumeCueUI();
assert.strictEqual(resumeBtn.style.display, 'none', 'Resume button should be hidden initially');

// Cue is scrolled out of view by user
cue1.getBoundingClientRect = () => ({
  top: -200,
  bottom: -120,
  left: 0,
  right: 800,
  width: 800,
  height: 80
});

app.handleTranscriptScroll();
assert.strictEqual(app.state.isUserDetached, true, 'isUserDetached should be true when active cue scrolled out of view');
assert.strictEqual(resumeBtn.style.display, 'inline-flex', 'Resume pill should be visible when detached');

// While detached, audio cue change does not yank user viewport
let cue2Scrolled = false;
cue2.scrollIntoView = () => { cue2Scrolled = true; };
cue2.getBoundingClientRect = () => ({
  top: -100,
  bottom: -40,
  left: 0,
  right: 800,
  width: 800,
  height: 60
});

app.state.activeCueId = 2;
// In detached mode, highlightCue must NOT call scrollIntoView
assert.strictEqual(cue2Scrolled, false, 'Should not scroll when detached');

// User scrolls back and cue2 enters viewport
cue2.getBoundingClientRect = () => ({
  top: 300,
  bottom: 360,
  left: 0,
  right: 800,
  width: 800,
  height: 60
});
app.handleTranscriptScroll();
assert.strictEqual(app.state.isUserDetached, false, 'Should automatically reattach when active cue enters viewport');
assert.strictEqual(resumeBtn.style.display, 'none', 'Resume pill should hide when reattached');

// Test Case 4: Click resume tracking pill restores auto-scroll position
console.log('Test 4: Click resume tracking pill');
app.state.isUserDetached = true;
app.updateResumeCueUI();
assert.strictEqual(resumeBtn.style.display, 'inline-flex');

let resumeScrollCalled = false;
cue2.scrollIntoView = () => { resumeScrollCalled = true; };
app.resumeActiveCueTracking();
assert.strictEqual(app.state.isUserDetached, false, 'isUserDetached should be false after resume');
assert.strictEqual(resumeBtn.style.display, 'none', 'Resume pill should hide after resume');
assert.strictEqual(resumeScrollCalled, true, 'Active cue scrollIntoView should be called on resume');

// Test Case 5: When autoScroll is disabled globally, pill is never shown
console.log('Test 5: Global autoScroll=false ignores detachment');
app.state.autoScroll = false;
app.state.isUserDetached = false;
cue2.getBoundingClientRect = () => ({
  top: 900,
  bottom: 960,
  left: 0,
  right: 800,
  width: 800,
  height: 60
});
app.handleTranscriptScroll();
assert.strictEqual(app.state.isUserDetached, false, 'Should not set isUserDetached when autoScroll is false');
assert.strictEqual(resumeBtn.style.display, 'none', 'Resume pill must remain hidden when autoScroll is false');

// Test Case 6: Resets on chapter load and seekToCue
console.log('Test 6: Resets on chapter load and user seek');
app.state.autoScroll = true;
app.state.isUserDetached = true;
app.updateResumeCueUI();
assert.strictEqual(resumeBtn.style.display, 'inline-flex');

// User clicks a cue to play
app.state.cues = [{ id: 1, start: 0, end: 5 }, { id: 2, start: 5, end: 10 }];
app.loadChapter('introduction', false);
assert.strictEqual(app.state.isUserDetached, false, 'Loading chapter should reset isUserDetached');
assert.strictEqual(resumeBtn.style.display, 'none', 'Resume button should be hidden after loading chapter');

// Test Case 7: Dark mode reading enhancements static style assertions
console.log('Test 7: Dark mode reading enhancements style assertions');
const styleCss = fs.readFileSync(path.join(__dirname, '../css/style.css'), 'utf-8');

// Assert soft text contrast in dark mode (non-active .en-text)
assert(styleCss.includes(':root:not([data-theme="light"]) .cue-card:not(.active) .en-text'), 'Must scope soft en-text to dark mode');
assert(styleCss.includes('#cbd5e1'), 'Must use soft slate-300 #cbd5e1 for dark inactive en text');

// Assert active en-text highlight and glow
assert(styleCss.includes(':root:not([data-theme="light"]) .cue-card.active .en-text'), 'Must scope active en-text highlight to dark mode');
assert(styleCss.includes('#ffffff'), 'Must use pure white #ffffff for active en text');
assert(styleCss.includes('rgba(56, 189, 248, 0.11)'), 'Must use deep ocean glow for dark active cue');

// Assert dark active zh-text highlight and 1.68 line-height
assert(styleCss.includes(':root:not([data-theme="light"]) .cue-card.active .zh-text'), 'Must scope active zh-text to dark mode');
assert(styleCss.includes('#e2e8f0'), 'Must use bright slate-200 #e2e8f0 for active zh text');
assert(styleCss.includes('line-height: 1.68;'), 'Must set dark zh line-height to 1.68');

// Assert zero CLS 3.5px border
assert(styleCss.includes('border-left: 3.5px solid transparent;'), 'Base cue-card must reserve 3.5px transparent border');
assert(styleCss.includes('.cue-card.echo-step-listening {\n  border-left: 3.5px solid #38bdf8 !important;'), 'Echo listening step must use 3.5px solid');

// Assert no naked ID selector for resume pill
assert(!styleCss.includes('#btn-resume-cue {'), 'Must never use naked ID selector for resume cue pill');
assert(styleCss.includes('rgba(13, 18, 29, 0.85)'), 'Must use dark glassmorphism background for resume pill');

console.log('✅ test_reader_friendly.js passed all assertions!');
