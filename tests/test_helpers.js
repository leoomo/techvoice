/**
 * AI Agents in Depth - Test Infrastructure & Mock Helper
 * Provides a lightweight, headless browser environment mock for Node.js test execution.
 */

// 1. Mock LocalStorage
class LocalStorageMock {
  constructor() {
    this.store = {};
  }
  clear() {
    this.store = {};
  }
  getItem(key) {
    return Object.prototype.hasOwnProperty.call(this.store, key) ? this.store[key] : null;
  }
  setItem(key, value) {
    this.store[key] = String(value);
  }
  removeItem(key) {
    delete this.store[key];
  }
}

// 2. Mock Audio Element
class AudioMock {
  constructor() {
    this.src = '';
    this.currentTime = 0;
    this.duration = 1000;
    this.paused = true;
    this.volume = 1.0;
    this.playbackRate = 1.0;
    this.buffered = {
      length: 0,
      ranges: [],
      start(i) { return this.ranges[i] ? this.ranges[i][0] : 0; },
      end(i) { return this.ranges[i] ? this.ranges[i][1] : 0; }
    };
    this.listeners = {};
  }
  addEventListener(event, fn) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(fn);
  }
  removeEventListener(event, fn) {
    if (!this.listeners[event]) return;
    this.listeners[event] = this.listeners[event].filter(cb => cb !== fn);
  }
  dispatchEvent(event) {
    const list = this.listeners[event.type || event] || [];
    for (const fn of list) {
      fn(event);
    }
  }
  play() {
    this.paused = false;
    this.dispatchEvent({ type: 'play' });
    return Promise.resolve();
  }
  pause() {
    this.paused = true;
    this.dispatchEvent({ type: 'pause' });
  }
  load() {
    this.dispatchEvent({ type: 'loadedmetadata' });
  }
}

// 3. Mock DOM Element
class DOMElementMock {
  constructor(id, tagName = 'div') {
    this.id = id;
    this.tagName = tagName.toUpperCase();
    this.className = '';
    this.classList = {
      classes: new Set(),
      add: (c) => this.classList.classes.add(c),
      remove: (c) => this.classList.classes.delete(c),
      toggle: (c, force) => {
        if (force === undefined) {
          if (this.classList.classes.has(c)) {
            this.classList.classes.delete(c);
            return false;
          }
          this.classList.classes.add(c);
          return true;
        }
        if (force) this.classList.classes.add(c);
        else this.classList.classes.delete(c);
        return force;
      },
      contains: (c) => this.classList.classes.has(c)
    };
    this.style = {};
    this.value = '';
    this.innerHTML = '';
    this._textContent = '';
    this.children = [];
    this.listeners = {};
  }
  get textContent() {
    if (this._textContent) return this._textContent;
    if (this.children.length > 0) {
      return this.children.map(c => c.textContent || '').join(' ');
    }
    return '';
  }
  set textContent(v) {
    this._textContent = String(v);
  }
  setAttribute(k, v) { this[k] = v; }
  getAttribute(k) { return this[k] || null; }
  appendChild(child) { this.children.push(child); return child; }
  removeChild(child) { this.children = this.children.filter(c => c !== child); }
  addEventListener(event, fn) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(fn);
  }
  dispatchEvent(event) {
    const list = this.listeners[event.type || event] || [];
    for (const fn of list) fn(event);
  }
  querySelector(sel) {
    if (this._qsMap && this._qsMap[sel]) return this._qsMap[sel];
    // Return a dummy element if selector matches a common class or tag
    const el = new DOMElementMock(`mock-qs-${sel}`);
    if (!this._qsMap) this._qsMap = {};
    this._qsMap[sel] = el;
    return el;
  }
  querySelectorAll(sel) {
    return [this.querySelector(sel)];
  }
  scrollIntoView() {}
}

// Setup Global Environment if in Node.js
if (typeof global !== 'undefined') {
  global.localStorage = new LocalStorageMock();
  global.Audio = AudioMock;

  const elementsMap = new Map();
  const mockAudio = new AudioMock();
  elementsMap.set('audio-element', mockAudio);

  function getOrCreateElement(id, tag = 'div') {
    if (id === 'audio-element') return mockAudio;
    if (!elementsMap.has(id)) {
      elementsMap.set(id, new DOMElementMock(id, tag));
    }
    return elementsMap.get(id);
  }

  global.document = {
    getElementById: (id) => getOrCreateElement(id),
    createElement: (tag) => new DOMElementMock(`mock-${Math.random()}`, tag),
    querySelectorAll: () => [],
    querySelector: () => null,
    head: new DOMElementMock('head', 'head'),
    body: new DOMElementMock('body', 'body'),
    documentElement: new DOMElementMock('html', 'html'),
    addEventListener: () => {},
    removeEventListener: () => {}
  };

  global.window = {
    location: { hash: '', href: 'http://localhost/' },
    addEventListener: () => {},
    removeEventListener: () => {},
    innerWidth: 1200,
    innerHeight: 800,
    CHAPTERS_META: [
      { key: 'introduction', name: 'Introduction', title_en: 'Intro', title_zh: '引言', duration_sec: 1000, duration_str: '16:40', audio: 'intro.mp3', cues_count: 50, sections: [] },
      { key: 'chapter1', name: 'Chapter 1', title_en: 'Getting Started', title_zh: '初识', duration_sec: 2000, duration_str: '33:20', audio: 'ch1.mp3', cues_count: 100, sections: [] }
    ],
    CHAPTER_DATA_introduction: [
      { id: 1, start: 0, end: 5, en: 'Hello Agent world', zh: '你好智能体世界' },
      { id: 2, start: 5.1, end: 10, en: 'ReAct pattern is useful', zh: 'ReAct 模式非常有用' }
    ],
    TechVoiceI18N: {
      getLang: () => 'zh'
    }
  };

  const actionHandlers = {};
  const mockMediaSession = {
    metadata: null,
    _actions: actionHandlers,
    setActionHandler: (act, fn) => { actionHandlers[act] = fn; },
    setPositionState: () => {}
  };

  const mockClipboard = {
    writeText: (t) => Promise.resolve(t)
  };

  try {
    Object.defineProperty(global.navigator, 'clipboard', {
      value: mockClipboard,
      writable: true,
      configurable: true
    });
  } catch (e) {
    global.navigator.clipboard = mockClipboard;
  }

  try {
    Object.defineProperty(global.navigator, 'mediaSession', {
      value: mockMediaSession,
      writable: true,
      configurable: true
    });
  } catch (e) {
    global.navigator.mediaSession = mockMediaSession;
  }
}

module.exports = {
  LocalStorageMock,
  AudioMock,
  DOMElementMock
};
