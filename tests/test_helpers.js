/**
 * AI Agents in Depth - Test Infrastructure & Mock Helper
 * Provides a lightweight, headless browser environment mock for Node.js test execution.
 */

// Global element registry for mock DOM
const elementsMap = new Map();

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
    this._id = id;
    this.tagName = tagName.toUpperCase();
    this.className = '';
    this.dataset = {};
    if (id && typeof elementsMap !== 'undefined') {
      elementsMap.set(id, this);
    }
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
    this._innerHTML = '';
    this._textContent = '';
    this.children = [];
    this.listeners = {};
    this.scrollTop = 0;
    this.scrollHeight = 1000;
    this.clientHeight = 500;
  }
  get id() {
    return this._id;
  }
  set id(val) {
    this._id = val;
    if (val && typeof elementsMap !== 'undefined') {
      elementsMap.set(val, this);
    }
  }
  get innerHTML() {
    return this._innerHTML || '';
  }
  set innerHTML(html) {
    this._innerHTML = html;
    this.children = [];
    if (typeof html === 'string') {
      const subTagRegex = /<([a-z0-9]+)([^>]*)>/gi;
      const classRegex = /class=["']([^"']+)["']/i;
      const idRegex = /id=["']([^"']+)["']/i;
      let match;
      while ((match = subTagRegex.exec(html)) !== null) {
        const tagName = match[1];
        const attrs = match[2];
        const cMatch = attrs.match(classRegex);
        const iMatch = attrs.match(idRegex);
        if (cMatch || iMatch) {
          const child = new DOMElementMock(iMatch ? iMatch[1] : `mock-${Math.random()}`, tagName);
          if (cMatch) child.className = cMatch[1];
          child.parentElement = this;
          this.children.push(child);
        }
      }
    }
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
  setAttribute(k, v) {
    this[k] = v;
    if (k && k.startsWith('data-')) {
      const prop = k.slice(5).replace(/-([a-z])/g, (_, c) => c.toUpperCase());
      this.dataset[prop] = String(v);
    }
  }
  getAttribute(k) { return this[k] || null; }
  appendChild(child) {
    if (child) child.parentElement = this;
    this.children.push(child);
    return child;
  }
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
    // Search children recursively
    const match = (el) => {
      if (!el) return false;
      if (sel.startsWith('.')) {
        const cls = sel.slice(1);
        if (el.className && el.className.split(/\s+/).includes(cls)) return true;
        if (el.classList && el.classList.contains && el.classList.contains(cls)) return true;
      } else if (sel.startsWith('#')) {
        if (el.id === sel.slice(1)) return true;
      } else if (sel.startsWith('[') && sel.endsWith(']')) {
        const parts = sel.slice(1, -1).split('=');
        const k = parts[0].trim();
        const v = parts[1] ? parts[1].replace(/["']/g, '').trim() : null;
        if (v === null) return el[k] !== undefined || (el.dataset && el.dataset[k] !== undefined);
        if (k.startsWith('data-')) {
          const dk = k.slice(5).replace(/-([a-z])/g, (_, c) => c.toUpperCase());
          return el.dataset && el.dataset[dk] === v;
        }
        return el[k] === v || (typeof el.getAttribute === 'function' && el.getAttribute(k) === v);
      } else if (el.tagName && el.tagName.toLowerCase() === sel.toLowerCase()) {
        return true;
      }
      return false;
    };

    const traverse = (parent) => {
      if (!parent.children) return null;
      for (const child of parent.children) {
        if (match(child)) return child;
        const res = traverse(child);
        if (res) return res;
      }
      return null;
    };

    const found = traverse(this);
    if (found) return found;

    // Return dummy element fallback if selector matches a common class or tag
    const el = new DOMElementMock(`mock-qs-${sel}`);
    if (!this._qsMap) this._qsMap = {};
    this._qsMap[sel] = el;
    return el;
  }
  querySelectorAll(sel) {
    return [this.querySelector(sel)];
  }
  closest(sel) {
    if (this._closestMap && this._closestMap[sel]) return this._closestMap[sel];
    if (sel.startsWith('.')) {
      const cls = sel.slice(1);
      if (this.className && this.className.includes(cls)) return this;
      if (this.classList && this.classList.contains && this.classList.contains(cls)) return this;
    }
    if (this.parentElement && typeof this.parentElement.closest === 'function') {
      return this.parentElement.closest(sel);
    }
    return null;
  }
  scrollIntoView() {}
  getBoundingClientRect() {
    if (this._rect) return this._rect;
    return { top: 0, bottom: 50, left: 0, right: 100, width: 100, height: 50 };
  }
}

// Setup Global Environment if in Node.js
if (typeof global !== 'undefined') {
  global.localStorage = new LocalStorageMock();
  global.Audio = AudioMock;

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
    querySelectorAll: (sel) => {
      const results = [];
      for (const el of elementsMap.values()) {
        if (!el || !el.classList || !el.classList.contains) continue;
        if (sel === '.modal-overlay.active' && el.classList.contains('active')) {
          results.push(el);
        } else if (sel.startsWith('.') && el.classList.contains(sel.slice(1))) {
          results.push(el);
        }
      }
      return results;
    },
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
