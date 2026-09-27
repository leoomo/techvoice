/**
 * AI Agents in Depth - Audio Listening & Bilingual Learning Platform
 * Core Single-Page Application (SPA) Controller with i18n coordination
 */

(function () {
  'use strict';

  // State Management
  const state = {
    currentChapterKey: 'introduction',
    cues: [],
    activeCueId: null,
    isPlaying: false,
    repeatCurrent: false,
    autoScroll: true,
    viewMode: 'en', // 'en' | 'bilingual' | 'zh'
    playbackRate: 1.0,
    theme: 'dark',
    cachedChapters: new Set(),
    isCaching: false,
    preloadedNextChapterKey: null,
    activeSectionCueId: null
  };

  // DOM Elements
  const audio = document.getElementById('audio-element');
  const transcriptEl = document.getElementById('transcript-list');
  const chapterNavEl = document.getElementById('chapter-nav-list');
  const currentChapterTitleEl = document.getElementById('current-chapter-title');
  const playBtn = document.getElementById('btn-play');
  const playIcon = document.getElementById('play-icon');
  const prevCueBtn = document.getElementById('btn-prev-cue');
  const nextCueBtn = document.getElementById('btn-next-cue');
  const rewindBtn = document.getElementById('btn-rewind');
  const forwardBtn = document.getElementById('btn-forward');
  const repeatBtn = document.getElementById('btn-repeat');
  const echoModeBtn = document.getElementById('btn-echo-mode');
  const seekBar = document.getElementById('seek-bar');
  const bufferBarEl = document.getElementById('seek-buffer-bar');
  const curTimeEl = document.getElementById('time-current');
  const totalTimeEl = document.getElementById('time-total');
  const speedSelect = document.getElementById('speed-select');
  const timerSelect = document.getElementById('timer-select');
  const autoScrollBtn = document.getElementById('btn-autoscroll');
  const autoScrollIcon = document.getElementById('autoscroll-icon');
  const autoScrollText = document.getElementById('autoscroll-text');
  const cacheBtn = document.getElementById('btn-cache-chapter');
  const cacheIcon = document.getElementById('cache-icon');
  const cacheText = document.getElementById('cache-text');
  const themeToggleBtn = document.getElementById('btn-theme-toggle');
  const sidebarEl = document.getElementById('sidebar');
  const sidebarToggleBtn = document.getElementById('btn-sidebar-toggle');
  const sidebarCloseBtn = document.getElementById('btn-sidebar-close');
  const sidebarBackdrop = document.getElementById('sidebar-backdrop');

  function openSidebar() {
    if (!sidebarEl) return;
    sidebarEl.classList.add('open');
    if (sidebarBackdrop) sidebarBackdrop.classList.add('active');
    document.body.classList.add('sidebar-open');
    if (sidebarToggleBtn) sidebarToggleBtn.setAttribute('aria-expanded', 'true');
  }

  function closeSidebar() {
    if (!sidebarEl) return;
    sidebarEl.classList.remove('open');
    if (sidebarBackdrop) sidebarBackdrop.classList.remove('active');
    document.body.classList.remove('sidebar-open');
    if (sidebarToggleBtn) sidebarToggleBtn.setAttribute('aria-expanded', 'false');
  }

  function toggleSidebar() {
    if (!sidebarEl) return;
    if (sidebarEl.classList.contains('open')) {
      closeSidebar();
    } else {
      openSidebar();
    }
  }
  
  // Modals
  const sponsorModal = document.getElementById('modal-sponsor');
  const aboutModal = document.getElementById('modal-about');
  const shortcutsModal = document.getElementById('modal-shortcuts');
  const searchModal = document.getElementById('modal-search');
  const searchInputEl = document.getElementById('search-input');
  const searchResultsListEl = document.getElementById('search-results-list');
  const searchResultsCountEl = document.getElementById('search-results-count');
  const searchEmptyStateEl = document.getElementById('search-empty-state');
  const btnSearchOpen = document.getElementById('btn-search');
  const btnSearchClose = document.getElementById('btn-search-close');

  function isZhLang() {
    return window.TechVoiceI18N ? window.TechVoiceI18N.getLang() === 'zh' : true;
  }

  function resolveAudioUrl(audioPath) {
    if (!audioPath) return '';
    if (audioPath.startsWith('http://') || audioPath.startsWith('https://')) {
      return audioPath;
    }
    const base = window.AUDIO_BASE_URL || '';
    if (base) {
      return base.endsWith('/') ? base + audioPath : base + '/' + audioPath;
    }
    return audioPath;
  }

  // Pure Vector SVGs for UI components
  const SVGS = {
    play: `<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><polygon points="6 3 20 12 6 21 6 3"/></svg>`,
    pause: `<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>`,
    sun: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`,
    moon: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
    repeat: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>`,
    echo: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z"/><path d="M19 10v1a7 7 0 0 1-14 0v-1"/><path d="M12 18v4"/><path d="M8 22h8"/></svg>`,
    cacheDefault: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
    cacheDone: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    cacheLoading: `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>`,
    check: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    cross: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
    share: `<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`
  };

  function updateThemeUI() {
    if (!themeToggleBtn) return;
    themeToggleBtn.innerHTML = state.theme === 'light' ? SVGS.moon : SVGS.sun;
  }

  function setPlayIcon(playing) {
    if (!playIcon) return;
    playIcon.innerHTML = playing ? SVGS.pause : SVGS.play;
  }

  function updateAutoScrollUI() {
    if (!autoScrollBtn) return;
    const isZh = isZhLang();
    autoScrollBtn.classList.toggle('active', state.autoScroll);
    const label = state.autoScroll
      ? (isZh ? '自动跟随: ON' : 'Auto-scroll: ON')
      : (isZh ? '自动跟随: OFF' : 'Auto-scroll: OFF');
    if (autoScrollText) {
      autoScrollText.textContent = label;
    } else {
      autoScrollBtn.textContent = label;
    }
    if (autoScrollIcon) {
      autoScrollIcon.innerHTML = state.autoScroll ? SVGS.check : SVGS.cross;
    }
    autoScrollBtn.title = isZh
      ? (state.autoScroll ? '字幕自动平滑滚动已开启（点击可关闭）' : '字幕自动平滑滚动已关闭（点击可开启）')
      : (state.autoScroll ? 'Auto-scroll is ON (Click to disable)' : 'Auto-scroll is OFF (Click to enable)');
  }

  // Format seconds to mm:ss or hh:mm:ss
  function formatTime(sec) {
    if (isNaN(sec) || sec < 0) return '00:00';
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    const s = Math.floor(sec % 60);
    if (h > 0) {
      return `${h}:${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
    }
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  }

  // Toast Notification Manager
  function showToast(message, options = {}) {
    if (typeof document === 'undefined') return null;
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast-item';

    const msgSpan = document.createElement('span');
    msgSpan.className = 'toast-msg';
    msgSpan.textContent = message;
    toast.appendChild(msgSpan);

    if (options.actionLabel && typeof options.onAction === 'function') {
      const actionBtn = document.createElement('button');
      actionBtn.className = 'toast-action-btn';
      actionBtn.textContent = options.actionLabel;
      actionBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        options.onAction();
        removeToast();
      });
      toast.appendChild(actionBtn);
    }

    const closeBtn = document.createElement('button');
    closeBtn.className = 'toast-close-btn';
    closeBtn.innerHTML = '&times;';
    closeBtn.setAttribute('aria-label', 'Close');
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      removeToast();
    });
    toast.appendChild(closeBtn);

    container.appendChild(toast);

    let timer = setTimeout(removeToast, options.duration || 4500);

    function removeToast() {
      clearTimeout(timer);
      toast.classList.add('hiding');
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 300);
    }

    return toast;
  }

  // Playback Position Persistence & Auto-Resume
  let lastPositionSaveTime = 0;

  function savePosition(chapterKey, time, immediate = false) {
    if (!chapterKey || isNaN(time) || time < 5) return;
    const now = Date.now();
    if (immediate || now - lastPositionSaveTime >= 2000) {
      lastPositionSaveTime = now;
      try {
        localStorage.setItem(`ai_agent_pos_${chapterKey}`, time.toFixed(1));
      } catch (e) {}
    }
  }

  function checkAndResumePosition(chapterKey, duration) {
    try {
      const saved = localStorage.getItem(`ai_agent_pos_${chapterKey}`);
      if (!saved) return null;
      const pos = parseFloat(saved);
      if (isNaN(pos) || pos < 5) return null;
      if (duration && pos >= duration - 5) return null;
      return pos;
    } catch (e) {
      return null;
    }
  }

  function resetChapterPosition(chapterKey) {
    try {
      localStorage.removeItem(`ai_agent_pos_${chapterKey}`);
    } catch (e) {}
  }

  // MediaSession API Integration (Lock Screen, Bluetooth Headset, Automotive)
  function updateMediaSession(meta) {
    if (typeof navigator === 'undefined' || !('mediaSession' in navigator) || !navigator.mediaSession) return;
    if (!meta) return;

    try {
      const isZh = isZhLang();
      const chapterTitle = isZh ? `${meta.name}: ${meta.title_zh} (${meta.title_en})` : `${meta.name}: ${meta.title_en}`;
      const MediaMetadataClass = (typeof window !== 'undefined' && window.MediaMetadata) || (typeof global !== 'undefined' && global.MediaMetadata) || function(data) { Object.assign(this, data); };
      
      navigator.mediaSession.metadata = new MediaMetadataClass({
        title: chapterTitle,
        artist: '李博杰 · Bojie Li',
        album: '深入理解 AI Agent · AI Agents in Depth',
        artwork: [
          { src: 'assets/icon.svg', sizes: '512x512', type: 'image/svg+xml' }
        ]
      });

      // Register standard action handlers
      const actionMap = {
        play: () => { if (audio.paused) audio.play(); },
        pause: () => { if (!audio.paused) audio.pause(); },
        seekbackward: (details) => {
          const offset = (details && details.seekOffset) || 5;
          audio.currentTime = Math.max(0, audio.currentTime - offset);
        },
        seekforward: (details) => {
          const offset = (details && details.seekOffset) || 5;
          audio.currentTime = Math.min(audio.duration || 99999, audio.currentTime + offset);
        },
        previoustrack: () => {
          const idx = window.CHAPTERS_META.findIndex(c => c.key === state.currentChapterKey);
          if (idx > 0) {
            loadChapter(window.CHAPTERS_META[idx - 1].key, true);
          }
        },
        nexttrack: () => {
          const idx = window.CHAPTERS_META.findIndex(c => c.key === state.currentChapterKey);
          if (idx < window.CHAPTERS_META.length - 1) {
            loadChapter(window.CHAPTERS_META[idx + 1].key, true);
          }
        },
        seekto: (details) => {
          if (details && details.seekTime != null) {
            audio.currentTime = Math.min(Math.max(0, details.seekTime), audio.duration || 99999);
          }
        }
      };

      for (const [action, handler] of Object.entries(actionMap)) {
        try {
          navigator.mediaSession.setActionHandler(action, handler);
        } catch (e) {}
      }
    } catch (err) {
      console.warn('MediaSession metadata update error:', err);
    }
  }

  function syncMediaPositionState(pos, duration, rate) {
    if (typeof navigator === 'undefined' || !('mediaSession' in navigator) || !navigator.mediaSession) return;
    if (typeof navigator.mediaSession.setPositionState !== 'function') return;
    if (!duration || duration <= 0 || isNaN(duration) || isNaN(pos) || pos < 0) return;

    try {
      navigator.mediaSession.setPositionState({
        duration: duration,
        playbackRate: rate || state.playbackRate || 1.0,
        position: Math.min(pos, duration)
      });
    } catch (e) {}
  }

  // Audio Stream Buffer Progress Calculation
  function calculateBufferPercent(curTime, buffered, duration) {
    if (!duration || duration <= 0 || isNaN(duration) || !buffered || buffered.length === 0) {
      return 0;
    }
    let bufferEnd = 0;
    for (let i = 0; i < buffered.length; i++) {
      const start = buffered.start(i);
      const end = buffered.end(i);
      if (curTime >= start && curTime <= end) {
        bufferEnd = end;
        break;
      } else if (start <= curTime) {
        bufferEnd = Math.max(bufferEnd, end);
      } else if (bufferEnd === 0 && i === 0 && start === 0) {
        bufferEnd = end;
      }
    }
    if (bufferEnd === 0 && buffered.length > 0) {
      bufferEnd = buffered.end(buffered.length - 1);
    }
    const pct = Math.min(100, Math.max(0, (bufferEnd / duration) * 100));
    return Math.round(pct * 10) / 10;
  }

  function updateBufferProgress() {
    if (!bufferBarEl || !audio) return;
    const pct = calculateBufferPercent(audio.currentTime, audio.buffered, audio.duration);
    bufferBarEl.style.width = `${pct}%`;
  }




  // Timestamp Deep Linking and Sentence Sharing
  function parseLocationHash(hashStr) {
    if (!hashStr) return { chapterKey: null, seekTime: null, cueId: null };
    const raw = hashStr.startsWith('#') ? hashStr.slice(1) : hashStr;
    if (!raw) return { chapterKey: null, seekTime: null, cueId: null };

    let chapterKey = null;
    let cueId = null;
    let seekTime = null;

    // Extract query part if present (?t=123 or ?cue=456)
    const qIdx = raw.indexOf('?');
    let mainPart = raw;
    let queryPart = '';
    if (qIdx !== -1) {
      mainPart = raw.slice(0, qIdx);
      queryPart = raw.slice(qIdx + 1);
    }

    // Parse mainPart: could be chapter2 or chapter2-cue_15 or chapter2-15
    const dashMatch = mainPart.match(/^([a-zA-Z0-9]+)(?:-(cue_?[a-zA-Z0-9_]+|[0-9]+))?$/);
    if (dashMatch) {
      chapterKey = dashMatch[1];
      if (dashMatch[2]) {
        cueId = dashMatch[2];
      }
    } else {
      chapterKey = mainPart;
    }

    if (queryPart) {
      const params = new URLSearchParams(queryPart);
      if (params.has('t') || params.has('time')) {
        const t = parseFloat(params.get('t') || params.get('time'));
        if (!isNaN(t) && t >= 0) seekTime = t;
      }
      if (params.has('cue')) {
        cueId = params.get('cue');
      }
    }

    return { chapterKey, seekTime, cueId };
  }

  function generateDeepLink(chapterKey, seekTime, cueId) {
    const origin = (typeof window !== 'undefined' && window.location) 
      ? `${window.location.origin}${window.location.pathname}`
      : 'reader.html';
    const tParam = (seekTime != null && !isNaN(seekTime)) ? `?t=${seekTime.toFixed(1)}` : '';
    return `${origin}#${chapterKey}${tParam}`;
  }

  async function copyTextToClipboard(text) {
    if (typeof navigator !== 'undefined' && navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (e) {}
    }
    if (typeof document !== 'undefined' && typeof document.execCommand === 'function') {
      try {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        const res = document.execCommand('copy');
        document.body.removeChild(ta);
        return !!res;
      } catch (err) {}
    }
    return false;
  }

  // Initialize Preferences from LocalStorage
  function loadPreferences() {
    try {
      const savedTheme = localStorage.getItem('ai_agent_theme');
      if (savedTheme) {
        state.theme = savedTheme;
        document.documentElement.setAttribute('data-theme', savedTheme);
      }
      updateThemeUI();

      const savedMode = localStorage.getItem('ai_agent_view_mode') || 'en';
      setViewMode(savedMode);

      const savedRate = localStorage.getItem('ai_agent_rate');
      if (savedRate) {
        state.playbackRate = parseFloat(savedRate);
        speedSelect.value = savedRate;
        audio.playbackRate = state.playbackRate;
      }

      // Check URL hash for chapter and deep link parameters
      const parsed = parseLocationHash(window.location.hash);
      const validMeta = parsed.chapterKey ? window.CHAPTERS_META.find(c => c.key === parsed.chapterKey) : null;
      if (validMeta) {
        state.currentChapterKey = parsed.chapterKey;
        if (parsed.seekTime != null) {
          state.pendingDeepLinkTime = parsed.seekTime;
        }
      } else {
        const savedCh = localStorage.getItem('ai_agent_current_chapter');
        if (savedCh && window.CHAPTERS_META.find(c => c.key === savedCh)) {
          state.currentChapterKey = savedCh;
        }
      }

      const savedAutoScroll = localStorage.getItem('ai_agent_autoscroll');
      if (savedAutoScroll !== null) {
        state.autoScroll = savedAutoScroll === '1';
      }
      updateAutoScrollUI();
    } catch (e) {
      console.warn('LocalStorage access warning:', e);
    }
  }

  // Set Theme
  function toggleTheme() {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', state.theme);
    updateThemeUI();
    try {
      localStorage.setItem('ai_agent_theme', state.theme);
    } catch (e) {}
  }

  // Set View Mode (Bilingual / English / Chinese)
  function setViewMode(mode) {
    state.viewMode = mode;
    document.body.classList.remove('hide-zh', 'hide-en');
    if (mode === 'en') {
      document.body.classList.add('hide-zh');
    } else if (mode === 'zh') {
      document.body.classList.add('hide-en');
    }
    document.querySelectorAll('.view-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.mode === mode);
    });
    try {
      localStorage.setItem('ai_agent_view_mode', mode);
    } catch (e) {}
  }

  // Render Sidebar Chapter Navigation
  function renderChapterNav() {
    chapterNavEl.innerHTML = '';
    const isZh = isZhLang();

    window.CHAPTERS_META.forEach(ch => {
      const isCur = ch.key === state.currentChapterKey;
      const item = document.createElement('a');
      item.className = `nav-item ${isCur ? 'active' : ''}`;
      item.id = `nav-item-${ch.key}`;
      item.href = `#${ch.key}`;
      
      const numLabel = ch.num === 0 ? 'Intro' : (ch.num === 11 ? 'End' : `Ch ${ch.num}`);
      const titleDisplay = isZh ? `${ch.title_zh} (${ch.title_en})` : ch.title_en;
      const countLabel = isZh ? `${ch.cues_count} 句` : `${ch.cues_count} cues`;
      const isCached = state.cachedChapters.has(ch.key);
      const offlineBadge = isCached ? `<span class="nav-item-offline-badge"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block; vertical-align:middle; margin-right:2px;"><polyline points="20 6 9 17 4 12"/></svg>${isZh ? '已离线' : 'Offline'}</span>` : '';

      item.innerHTML = `
        <span class="nav-item-num">${numLabel}</span>
        <div class="nav-item-content">
          <span class="nav-item-title">${titleDisplay} ${offlineBadge}</span>
          <div class="nav-item-meta">
            <span>${ch.duration_str}</span>
            <span>·</span>
            <span>${countLabel}</span>
          </div>
        </div>
      `;

      item.addEventListener('click', (e) => {
        e.preventDefault();
        loadChapter(ch.key, true);
        if (window.innerWidth <= 900) {
          closeSidebar();
        }
      });
      chapterNavEl.appendChild(item);

      // Render Sub-chapters under active chapter
      if (isCur && ch.sections && ch.sections.length > 0) {
        const subNav = document.createElement('div');
        subNav.className = 'sub-chapter-nav';
        subNav.id = `sub-nav-${ch.key}`;

        ch.sections.forEach(sec => {
          const subItem = document.createElement('a');
          const isL3 = sec.level === 3;
          subItem.className = `sub-nav-item ${isL3 ? 'level-3' : 'level-2'} ${sec.cue_id === state.activeSectionCueId ? 'active' : ''}`;
          subItem.id = `sub-nav-sec-${sec.cue_id}`;
          subItem.dataset.cueId = sec.cue_id;
          subItem.href = `#cue-${sec.cue_id}`;
          const secTitle = isZh ? sec.title_zh : sec.title_en;
          const numBadge = sec.num ? `<span class="sub-nav-num">${sec.num}</span>` : '';

          subItem.innerHTML = `
            ${numBadge}
            <span class="sub-nav-title" title="${secTitle}">${secTitle}</span>
            <span class="sub-nav-time">${sec.time_str}</span>
          `;

          subItem.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const targetCue = state.cues.find(c => c.id === sec.cue_id) || { start: sec.start, id: sec.cue_id };
            seekToCue(targetCue);
            if (window.innerWidth <= 900) {
              closeSidebar();
            }
          });

          subNav.appendChild(subItem);
        });

        chapterNavEl.appendChild(subNav);
      }
    });
  }

  // Dynamic Data Loader for On-Demand Chapter Scripts
  const DynamicDataLoader = {
    loadedChapters: new Set(),
    loadingPromises: new Map(),

    isLoaded(key) {
      return this.loadedChapters.has(key);
    },

    loadChapterData(key) {
      const dataVar = `CHAPTER_DATA_${key}`;
      if (this.loadedChapters.has(key)) {
        return Promise.resolve((typeof window !== 'undefined' && window[dataVar]) || []);
      }
      if (typeof window !== 'undefined' && window[dataVar]) {
        this.loadedChapters.add(key);
        return Promise.resolve(window[dataVar]);
      }
      if (this.loadingPromises.has(key)) {
        return this.loadingPromises.get(key);
      }

      const promise = new Promise((resolve, reject) => {
        if (typeof document === 'undefined') {
          return resolve([]);
        }
        const script = document.createElement('script');
        script.src = `data/${key}.js`;
        script.async = true;
        script.onload = () => {
          this.loadingPromises.delete(key);
          this.loadedChapters.add(key);
          resolve((typeof window !== 'undefined' && window[dataVar]) || []);
        };
        script.onerror = (err) => {
          this.loadingPromises.delete(key);
          if (script.parentNode) {
            script.parentNode.removeChild(script);
          }
          reject(err || new Error(`Failed to load chapter data for ${key}`));
        };
        const parent = document.head || document.body || document.documentElement;
        if (parent && parent.appendChild) {
          parent.appendChild(script);
        }
      });

      this.loadingPromises.set(key, promise);
      return promise;
    },

    loadAll() {
      if (typeof window === 'undefined' || !window.CHAPTERS_META) return Promise.resolve([]);
      return Promise.all(
        window.CHAPTERS_META.map(ch => this.loadChapterData(ch.key).catch(e => {
          console.warn(`Failed to preload ${ch.key}:`, e);
          return [];
        }))
      );
    }
  };

  // HTML escaping helper for safe markup rendering
  function escapeHtml(str) {
    if (!str) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  // Safe keyword highlighting: escapes non-matching and matching segments, protects entities & prevents XSS
  function highlightMatches(text, keyword) {
    if (!text) return '';
    if (!keyword || !keyword.trim()) return escapeHtml(text);

    const q = keyword.trim().toLowerCase();
    const lower = text.toLowerCase();
    let result = '';
    let lastIndex = 0;
    let matchIndex = lower.indexOf(q, lastIndex);

    if (matchIndex === -1) {
      return escapeHtml(text);
    }

    while (matchIndex !== -1) {
      result += escapeHtml(text.slice(lastIndex, matchIndex));
      const matchText = text.slice(matchIndex, matchIndex + q.length);
      result += `<mark class="search-highlight">${escapeHtml(matchText)}</mark>`;
      lastIndex = matchIndex + q.length;
      matchIndex = lower.indexOf(q, lastIndex);
    }
    result += escapeHtml(text.slice(lastIndex));
    return result;
  }

  const MAX_SEARCH_RESULTS = 50;

  const SearchEngine = {
    isPreheated: false,

    preheat() {
      if (this.isPreheated) return Promise.resolve();
      this.isPreheated = true;
      return DynamicDataLoader.loadAll();
    },

    search(query) {
      if (!query || typeof query !== 'string') return [];
      const q = query.trim().toLowerCase();
      if (!q) return [];

      const results = [];
      const chapters = (typeof window !== 'undefined' && window.CHAPTERS_META) || [];

      for (const ch of chapters) {
        const dataVar = `CHAPTER_DATA_${ch.key}`;
        const cues = (typeof window !== 'undefined' && window[dataVar]) || [];
        for (const cue of cues) {
          const enMatch = cue.en && cue.en.toLowerCase().includes(q);
          const zhMatch = cue.zh && cue.zh.toLowerCase().includes(q);
          if (enMatch || zhMatch) {
            results.push({
              chapterKey: ch.key,
              chapterName: ch.name,
              chapterTitleEn: ch.title_en,
              chapterTitleZh: ch.title_zh,
              cueId: cue.id,
              start: cue.start,
              end: cue.end,
              en: cue.en,
              zh: cue.zh,
              enHighlighted: highlightMatches(cue.en || '', q),
              zhHighlighted: highlightMatches(cue.zh || '', q)
            });
            if (results.length >= MAX_SEARCH_RESULTS) {
              return results;
            }
          }
        }
      }
      return results;
    }
  };

  // Sleep Timer Controller with Volume Fade-out and A-B Loop Guard
  const SleepTimer = {
    mode: null,
    remainingSeconds: null,
    intervalId: null,
    originalVolume: 1.0,

    start(mode) {
      if (!mode || mode === 'off') {
        this.stop(true);
        const isZh = isZhLang();
        showToast(isZh ? '睡眠定时已关闭' : 'Sleep timer turned off');
        return;
      }

      // Mutual exclusivity guard: disable A-B Loop & Echo mode if active
      if (typeof EchoController !== 'undefined' && EchoController.isActive()) {
        EchoController.toggleMode(false);
      }
      if (state.repeatCurrent) {
        state.repeatCurrent = false;
        if (repeatBtn) repeatBtn.classList.remove('active');
        const isZh = isZhLang();
        showToast(isZh ? '已自动解除单句复读以启用睡眠定时' : 'A-B Loop disabled for sleep timer');
      }

      this.stop(false);
      this.mode = mode;
      this.originalVolume = (audio && typeof audio.volume === 'number') ? audio.volume : 1.0;

      if (mode === '15m') this.remainingSeconds = 15 * 60;
      else if (mode === '30m') this.remainingSeconds = 30 * 60;
      else if (mode === '45m') this.remainingSeconds = 45 * 60;
      else if (mode === 'end_of_chapter') {
        const duration = (audio && audio.duration) || 0;
        const current = (audio && audio.currentTime) || 0;
        this.remainingSeconds = Math.max(1, Math.round(duration - current));
      }

      this.updateUI();

      if (typeof window !== 'undefined') {
        this.intervalId = setInterval(() => this.tick(), 1000);
      }

      const isZh = isZhLang();
      const modeNames = {
        '15m': isZh ? '15 分钟' : '15 min',
        '30m': isZh ? '30 分钟' : '30 min',
        '45m': isZh ? '45 分钟' : '45 min',
        'end_of_chapter': isZh ? '播完本章' : 'End of Chapter'
      };
      showToast(`${isZh ? '睡眠定时已设为: ' : 'Sleep timer set to: '}${modeNames[mode] || mode}`);
    },

    tick() {
      if (this.remainingSeconds == null) return;
      this.remainingSeconds--;

      // Linear volume fade-out in final 10 seconds
      if (this.remainingSeconds <= 10 && this.remainingSeconds > 0) {
        if (audio) {
          audio.volume = Math.max(0, this.originalVolume * (this.remainingSeconds / 10));
        }
      }

      if (this.remainingSeconds <= 0) {
        if (audio) {
          audio.pause();
          audio.volume = this.originalVolume;
        }
        const isZh = isZhLang();
        showToast(isZh ? '睡眠定时结束，已暂停播放' : 'Sleep timer completed, playback paused');
        this.stop(false);
        return;
      }

      this.updateUI();
    },

    stop(restoreVolume = true) {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
      this.mode = null;
      this.remainingSeconds = null;
      if (restoreVolume && audio) {
        audio.volume = this.originalVolume;
      }
      if (typeof EchoController !== 'undefined' && EchoController.step !== 'IDLE') {
        EchoController.cancelEcho();
      }
      this.updateUI();
    },

    updateUI() {
      const select = document.getElementById('timer-select');
      if (select) {
        if (!this.mode) {
          select.value = 'off';
          select.classList.remove('active');
        } else {
          select.value = this.mode;
          select.classList.add('active');
        }
      }
    }
  };

  // Echo Method (Prof. Karen Chung's 3-step loop) Controller
  const EchoController = {
    mode: false,
    singleCueId: null,
    step: 'IDLE', // 'IDLE' | 'LISTEN' | 'ECHO' | 'SHADOW'
    timerId: null,
    activeCue: null,

    isActive() {
      return this.mode || this.singleCueId !== null || this.step !== 'IDLE';
    },

    calcEchoDuration(cue) {
      if (!cue) return 2.0;
      const raw = (cue.end - cue.start) * 0.75;
      return Math.max(1.8, Math.min(3.5, raw));
    },

    toggleMode(forceState) {
      const target = (typeof forceState === 'boolean') ? forceState : !this.mode;
      this.mode = target;

      const isZh = isZhLang();
      if (this.mode) {
        if (state.repeatCurrent) {
          state.repeatCurrent = false;
          if (repeatBtn) repeatBtn.classList.remove('active');
          showToast(isZh ? '已自动解除单句复读并开启回音模式' : 'A-B Loop disabled, Echo mode enabled');
        } else {
          showToast(isZh ? '回音精听模式已开启（原速听 -> 留白想 -> 0.85x开口跟读）' : 'Echo mode enabled (Listen -> Echo -> Shadow at 0.85x)');
        }
        if (echoModeBtn) echoModeBtn.classList.add('active');

        const curCue = state.cues.find(c => c.id === state.activeCueId) || state.cues[0];
        if (curCue && !audio.paused && this.step === 'IDLE') {
          this.startContinuous(curCue);
        }
      } else {
        this.cancelEcho(true);
        if (echoModeBtn) echoModeBtn.classList.remove('active');
        showToast(isZh ? '回音精听模式已关闭' : 'Echo mode disabled');
      }
    },

    startSingleCue(cue) {
      if (!cue) return;
      if (state.repeatCurrent) {
        state.repeatCurrent = false;
        if (repeatBtn) repeatBtn.classList.remove('active');
      }
      this.cancelEcho(false);
      this.singleCueId = cue.id;
      this.activeCue = cue;
      this.step = 'LISTEN';
      audio.playbackRate = state.playbackRate;
      audio.currentTime = cue.start;
      if (audio.paused) {
        audio.play().catch(err => console.log(err));
      }
      this.updateVisuals(cue);
      highlightCue(cue.id, true);
    },

    startContinuous(cue) {
      if (!cue) return;
      this.singleCueId = null;
      this.activeCue = cue;
      this.step = 'LISTEN';
      audio.playbackRate = state.playbackRate;
      audio.currentTime = cue.start;
      if (audio.paused) {
        audio.play().catch(err => console.log(err));
      }
      this.updateVisuals(cue);
      highlightCue(cue.id, true);
    },

    onTimeUpdate(curTime, currentCue) {
      const targetCue = this.activeCue || currentCue;
      if (!targetCue) return;
      if (this.step === 'LISTEN') {
        if (curTime >= targetCue.end) {
          this.enterEchoStep(targetCue);
        }
      } else if (this.step === 'SHADOW') {
        if (curTime >= targetCue.end) {
          this.finishShadowStep(targetCue);
        }
      }
    },

    enterEchoStep(cue) {
      this.step = 'ECHO';
      audio.pause();
      this.updateVisuals(cue);
      const dur = this.calcEchoDuration(cue);
      if (this.timerId) clearTimeout(this.timerId);
      this.timerId = setTimeout(() => {
        this.triggerShadow();
      }, dur * 1000);
    },

    triggerShadow() {
      if (this.timerId) {
        clearTimeout(this.timerId);
        this.timerId = null;
      }
      const cue = this.activeCue;
      if (!cue) return;
      this.step = 'SHADOW';
      const shadowRate = Math.min(state.playbackRate, 0.85);
      audio.playbackRate = shadowRate;
      audio.currentTime = cue.start + 0.02;
      this.updateVisuals(cue);
      audio.play().catch(err => console.log('Shadow play failed:', err));
    },

    finishShadowStep(cue) {
      audio.playbackRate = state.playbackRate;
      this.clearVisuals();

      if (this.singleCueId !== null) {
        this.step = 'IDLE';
        this.singleCueId = null;
        this.activeCue = null;
        audio.pause();
      } else if (this.mode) {
        const curIdx = state.cues.findIndex(c => c.id === cue.id);
        if (curIdx >= 0 && curIdx < state.cues.length - 1) {
          const nextCue = state.cues[curIdx + 1];
          this.startContinuous(nextCue);
        } else {
          this.step = 'IDLE';
          this.activeCue = null;
          audio.pause();
        }
      } else {
        this.step = 'IDLE';
        this.activeCue = null;
      }
    },

    cancelEcho(restoreRate = true) {
      if (this.timerId) {
        clearTimeout(this.timerId);
        this.timerId = null;
      }
      this.step = 'IDLE';
      this.singleCueId = null;
      this.activeCue = null;
      this.clearVisuals();
      if (restoreRate && audio) {
        audio.playbackRate = state.playbackRate;
      }
    },

    updateVisuals(cue) {
      if (typeof document === 'undefined') return;
      this.clearVisuals();
      if (!cue) return;
      const card = document.getElementById(`cue-${cue.id}`);
      if (card) {
        let badge = card.querySelector('.cue-echo-badge');
        if (!badge) {
          badge = document.createElement('div');
          badge.className = 'cue-echo-badge';
          const textCol = card.querySelector('.cue-text-col');
          if (textCol && textCol.insertBefore) {
            textCol.insertBefore(badge, textCol.firstChild);
          } else {
            card.appendChild(badge);
          }
        }
        const isZh = isZhLang();
        if (this.step === 'ECHO') {
          card.classList.add('echo-step-echoing');
          badge.textContent = isZh ? '🧠 留白回响 (脑海回放原声)...' : '🧠 Echo in mind (mental replay)...';
        } else if (this.step === 'SHADOW') {
          card.classList.add('echo-step-shadowing');
          badge.textContent = isZh ? '🎙️ 开口模仿跟读 (0.85x原声音频)...' : '🎙️ Shadowing & Mimic (0.85x voice)...';
        }
      }
      if (echoModeBtn) {
        echoModeBtn.classList.toggle('active', this.mode);
      }
    },

    clearVisuals() {
      if (typeof document === 'undefined') return;
      ['echo-step-echoing', 'echo-step-shadowing'].forEach(cls => {
        const els = document.querySelectorAll('.' + cls);
        if (els && els.forEach) {
          els.forEach(el => el.classList.remove(cls));
        }
      });
    }
  };

  let currentLoadToken = 0;

  // Load and Switch Chapter
  function loadChapter(key, autoPlay = false) {
    const meta = window.CHAPTERS_META.find(c => c.key === key);
    if (!meta) return;

    if (typeof EchoController !== 'undefined') {
      EchoController.cancelEcho();
    }

    const loadToken = ++currentLoadToken;
    state.currentChapterKey = key;
    state.activeCueId = null;
    state.activeSectionCueId = null;
    state.preloadedNextChapterKey = null;
    window.location.hash = key;
    try {
      localStorage.setItem('ai_agent_current_chapter', key);
    } catch (e) {}

    // Re-render Chapter and Sub-chapter Navigation in Sidebar
    renderChapterNav();

    // Update Header
    const isZh = isZhLang();
    currentChapterTitleEl.textContent = isZh ? `${meta.name}: ${meta.title_zh} • ${meta.title_en}` : `${meta.name}: ${meta.title_en}`;
    document.title = `AI Agents in Depth - ${meta.name}: ${isZh ? meta.title_zh : meta.title_en}`;

    // Update Cache button state for current chapter
    updateCacheBtnState();

    // Render Seekbar chapter tick markers
    renderSeekMarkers(meta);

    // Load Audio immediately (start streaming)
    const wasPlaying = !audio.paused;
    audio.src = resolveAudioUrl(meta.audio);
    audio.playbackRate = state.playbackRate;
    audio.load();

    seekBar.value = 0;
    if (bufferBarEl) bufferBarEl.style.width = '0%';
    curTimeEl.textContent = '00:00';
    totalTimeEl.textContent = meta.duration_str;

    // Handle Auto-Resume or Deep-Link seek
    function applyResume() {
      if (state.pendingDeepLinkTime != null) {
        const targetTime = Math.min(state.pendingDeepLinkTime, Math.max(0, (audio.duration || 99999) - 1));
        audio.currentTime = targetTime;
        curTimeEl.textContent = formatTime(targetTime);
        seekBar.value = targetTime;
        state.pendingDeepLinkTime = null;
        savePosition(key, targetTime, true);
        return;
      }
      const resumedPos = checkAndResumePosition(key, audio.duration);
      if (resumedPos && resumedPos > 0) {
        audio.currentTime = resumedPos;
        curTimeEl.textContent = formatTime(resumedPos);
        seekBar.value = resumedPos;
        const isZh = isZhLang();
        const timeStr = formatTime(resumedPos);
        const msg = isZh ? `已恢复至上次播放进度 ${timeStr}` : `Resumed to ${timeStr}`;
        const restartLabel = isZh ? '从头开始' : 'Start Over';
        showToast(msg, {
          actionLabel: restartLabel,
          onAction: () => {
            audio.currentTime = 0;
            curTimeEl.textContent = '00:00';
            seekBar.value = 0;
            resetChapterPosition(key);
            if (state.cues.length > 0) highlightCue(state.cues[0].id, false);
          }
        });
      }
    }

    if (audio.readyState >= 1) {
      applyResume();
    } else {
      audio.addEventListener('loadedmetadata', applyResume, { once: true });
    }

    // Setup Lock Screen & Earphone Media Controls
    updateMediaSession(meta);

    // Asynchronously or synchronously load chapter cues via DynamicDataLoader
    const dataVar = `CHAPTER_DATA_${key}`;
    if (window[dataVar] && Array.isArray(window[dataVar])) {
      state.cues = window[dataVar];
      DynamicDataLoader.loadedChapters.add(key);
      renderTranscript(meta);
      if (state.cues.length > 0) {
        highlightCue(state.cues[0].id, false);
        updateActiveSection(0);
      }
    } else {
      state.cues = [];
      transcriptEl.innerHTML = '<div class="transcript-loading" style="text-align:center;padding:40px 20px;color:var(--text-muted);"><p>Loading chapter data...</p></div>';
      DynamicDataLoader.loadChapterData(key).then(cues => {
        if (loadToken !== currentLoadToken || state.currentChapterKey !== key) return;
        state.cues = cues || [];
        renderTranscript(meta);
        if (state.cues.length > 0) {
          const curSec = audio.currentTime || 0;
          highlightCue(state.cues[0].id, false);
          updateActiveSection(curSec);
        }
      }).catch(err => {
        if (loadToken !== currentLoadToken || state.currentChapterKey !== key) return;
        console.error(`Failed to load transcript for ${key}:`, err);
        transcriptEl.innerHTML = '<div class="transcript-error" style="text-align:center;padding:40px 20px;color:var(--text-muted);"><p>Failed to load transcript data.</p></div>';
      });
    }

    if (autoPlay || wasPlaying) {
      audio.play().catch(e => console.log('Autoplay prevented:', e));
    }
  }

  // Check which chapters are currently cached in Cache Storage
  async function refreshCachedChapters() {
    if (!('caches' in window)) return;
    try {
      const audioCache = await caches.open('ai-agent-audio-v1');
      const keys = await audioCache.keys();
      state.cachedChapters.clear();
      for (const req of keys) {
        const url = new URL(req.url);
        const found = window.CHAPTERS_META.find(ch => url.pathname.endsWith(ch.audio) || url.href.endsWith(ch.audio));
        if (found) {
          state.cachedChapters.add(found.key);
        }
      }
      updateCacheBtnState();
      renderChapterNav();
    } catch (e) {
      console.warn('Cache inspection error:', e);
    }
  }

  // Update Cache button UI according to state
  function updateCacheBtnState() {
    if (!cacheBtn || !cacheIcon || !cacheText) return;
    const isZh = isZhLang();
    const isCached = state.cachedChapters.has(state.currentChapterKey);

    if (state.isCaching) {
      cacheBtn.className = 'btn-toggle-tool btn-cache caching';
      cacheIcon.innerHTML = SVGS.cacheLoading;
      cacheBtn.title = isZh ? '正在下载离线音频缓存...' : 'Downloading audio for offline cache...';
      return;
    }

    if (isCached) {
      cacheBtn.className = 'btn-toggle-tool btn-cache cached';
      cacheIcon.innerHTML = SVGS.cacheDone;
      cacheText.textContent = isZh ? '已离线' : 'Offline Ready';
      cacheBtn.title = isZh ? '本章已离线缓存（点击可清除以释放空间）' : 'Chapter cached offline (Click to clear)';
    } else {
      cacheBtn.className = 'btn-toggle-tool btn-cache';
      cacheIcon.innerHTML = SVGS.cacheDefault;
      cacheText.textContent = isZh ? '缓存本章' : 'Cache Chapter';
      cacheBtn.title = isZh ? '离线缓存当前章节音频到浏览器（断网可听）' : 'Cache current chapter audio for offline listening';
    }
  }

  // Cache or Clear Current Chapter Audio
  async function handleCacheChapterClick() {
    if (!('caches' in window)) {
      alert(isZhLang() ? '当前浏览器不支持离线缓存 API' : 'Cache API not supported in this browser');
      return;
    }

    const curKey = state.currentChapterKey;
    const meta = window.CHAPTERS_META.find(c => c.key === curKey);
    if (!meta) return;

    const isZh = isZhLang();
    const isCached = state.cachedChapters.has(curKey);

    // If already cached, ask to clear
    if (isCached) {
      const confirmClear = confirm(isZh 
        ? `《${meta.name}: ${meta.title_zh}》已离线缓存。\n要清除该章节缓存以释放存储空间吗？` 
        : `"${meta.name}: ${meta.title_en}" is currently cached.\nClear cache to free up local storage?`);
      if (confirmClear) {
        try {
          const audioCache = await caches.open('ai-agent-audio-v1');
          const audioUrl = resolveAudioUrl(meta.audio);
          await audioCache.delete(audioUrl);
          await audioCache.delete(meta.audio);
          try {
            const fullPath = new URL(audioUrl, window.location.href).pathname;
            await audioCache.delete(fullPath);
          } catch (e) {}
          state.cachedChapters.delete(curKey);
          updateCacheBtnState();
          renderChapterNav();
        } catch (e) {
          console.warn('Clear cache error:', e);
        }
      }
      return;
    }

    // Start caching current chapter
    if (state.isCaching) return;
    state.isCaching = true;
    updateCacheBtnState();

    try {
      const audioUrl = resolveAudioUrl(meta.audio);
      const response = await fetch(audioUrl);
      if (!response.ok) throw new Error(`HTTP error ${response.status}`);

      const contentLength = response.headers.get('content-length');
      const totalBytes = contentLength ? parseInt(contentLength, 10) : 0;
      let loadedBytes = 0;

      const reader = response.body.getReader();
      const chunks = [];

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        chunks.push(value);
        loadedBytes += value.length;
        if (totalBytes > 0 && cacheText) {
          const percent = Math.round((loadedBytes / totalBytes) * 100);
          cacheText.textContent = `${percent}%`;
        }
      }

      const audioBlob = new Blob(chunks, { type: 'audio/mpeg' });
      const cachedResponse = new Response(audioBlob, {
        status: 200,
        statusText: 'OK',
        headers: {
          'Content-Type': 'audio/mpeg',
          'Content-Length': audioBlob.size.toString(),
          'Accept-Ranges': 'bytes'
        }
      });

      const audioCache = await caches.open('ai-agent-audio-v1');
      await audioCache.put(audioUrl, cachedResponse.clone());
      try {
        const pathname = new URL(audioUrl, window.location.href).pathname;
        await audioCache.put(pathname, cachedResponse);
      } catch (e) {}

      state.cachedChapters.add(curKey);
      state.isCaching = false;
      updateCacheBtnState();
      renderChapterNav();
    } catch (err) {
      console.error('Download audio cache error:', err);
      state.isCaching = false;
      updateCacheBtnState();
      alert(isZh ? '缓存失败，请检查网络连接后重试' : 'Caching failed, please check connection and retry');
    }
  }

  // Preload Next Chapter's audio when near the end of current chapter
  function preloadNextChapter() {
    const idx = window.CHAPTERS_META.findIndex(c => c.key === state.currentChapterKey);
    if (idx < window.CHAPTERS_META.length - 1) {
      const nextMeta = window.CHAPTERS_META[idx + 1];
      if (state.preloadedNextChapterKey === nextMeta.key) return;
      state.preloadedNextChapterKey = nextMeta.key;
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.as = 'fetch';
      link.href = resolveAudioUrl(nextMeta.audio);
      document.head.appendChild(link);
      console.log('[Audio Preload] Next chapter prefetching:', nextMeta.name);
    }
  }

  // Update active sub-chapter / section based on current audio time
  function updateActiveSection(curTime) {
    const meta = window.CHAPTERS_META.find(c => c.key === state.currentChapterKey);
    if (!meta || !meta.sections || meta.sections.length === 0) return;

    let activeSec = null;
    for (let i = 0; i < meta.sections.length; i++) {
      if (curTime >= meta.sections[i].start - 0.2) {
        activeSec = meta.sections[i];
      } else {
        break;
      }
    }

    const newCueId = activeSec ? activeSec.cue_id : null;
    if (state.activeSectionCueId !== newCueId) {
      state.activeSectionCueId = newCueId;

      // 1. Sidebar sub-nav items
      const subItems = document.querySelectorAll('.sub-nav-item');
      subItems.forEach(item => {
        const itemCueId = parseInt(item.dataset.cueId, 10);
        item.classList.toggle('active', itemCueId === newCueId);
      });

      // 2. Overview pills
      const pills = document.querySelectorAll('.section-pill');
      pills.forEach(pill => {
        const pillCueId = parseInt(pill.dataset.cueId, 10);
        const isActive = (pillCueId === newCueId);
        pill.classList.toggle('active', isActive);
        if (isActive) {
          const pList = document.getElementById('overview-pills-list');
          if (pList) {
            const leftPos = pill.offsetLeft - (pList.clientWidth / 2) + (pill.clientWidth / 2);
            pList.scrollTo({ left: Math.max(0, leftPos), behavior: 'smooth' });
          }
        }
      });

      // 3. Seekbar tick markers
      const markers = document.querySelectorAll('.seek-marker');
      markers.forEach(marker => {
        const markerCueId = parseInt(marker.dataset.cueId, 10);
        marker.classList.toggle('active', markerCueId === newCueId);
      });
    }
  }

  // Render sub-chapter markers along the seek bar
  function renderSeekMarkers(meta) {
    const markersContainer = document.getElementById('seek-markers-container');
    if (!markersContainer) return;
    markersContainer.innerHTML = '';
    if (!meta.sections || meta.sections.length === 0 || !meta.duration_sec) return;

    const isZh = isZhLang();
    meta.sections.forEach(sec => {
      const pct = (sec.start / meta.duration_sec) * 100;
      if (pct < 0 || pct > 100) return;
      const marker = document.createElement('div');
      marker.className = `seek-marker ${sec.cue_id === state.activeSectionCueId ? 'active' : ''}`;
      marker.dataset.cueId = sec.cue_id;
      marker.style.left = `${pct}%`;
      const title = isZh ? sec.title_zh : sec.title_en;
      const numPrefix = sec.num ? `[${sec.num}] ` : '';
      marker.innerHTML = `<span class="seek-marker-tooltip">${numPrefix}${sec.time_str} ${title}</span>`;
      marker.addEventListener('click', (e) => {
        e.stopPropagation();
        const targetCue = state.cues.find(c => c.id === sec.cue_id) || { start: sec.start, id: sec.cue_id };
        seekToCue(targetCue);
      });
      markersContainer.appendChild(marker);
    });
  }

  // Render Transcript Cues and Sub-chapter Dividers
  function renderTranscript(meta) {
    transcriptEl.innerHTML = '';
    const isZh = isZhLang();

    // 1. Chapter Overview / Outline Bar at the top of transcript
    if (meta.sections && meta.sections.length > 0) {
      const overviewBar = document.createElement('div');
      overviewBar.className = 'chapter-overview-bar';
      const secCountText = isZh ? `${meta.sections.length} 个小节` : `${meta.sections.length} sections`;
      overviewBar.innerHTML = `
        <div class="overview-header">
          <span class="overview-title">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 6h16M4 12h16M4 18h7"/>
            </svg>
            <span>${isZh ? '本章子目录速览' : 'Chapter Outline'} · ${secCountText}</span>
          </span>
        </div>
        <div class="overview-pills" id="overview-pills-list"></div>
      `;
      const pillsContainer = overviewBar.querySelector('#overview-pills-list');
      meta.sections.forEach(sec => {
        const pill = document.createElement('a');
        const isL3 = sec.level === 3;
        pill.className = `section-pill ${isL3 ? 'level-3' : 'level-2'} ${sec.cue_id === state.activeSectionCueId ? 'active' : ''}`;
        pill.id = `pill-sec-${sec.cue_id}`;
        pill.dataset.cueId = sec.cue_id;
        pill.href = `#cue-${sec.cue_id}`;
        const pTitle = isZh ? sec.title_zh : sec.title_en;
        const numBadge = sec.num ? `<span class="pill-num">${sec.num}</span>` : '';
        pill.innerHTML = `
          ${numBadge}
          <span class="pill-title">${pTitle}</span>
          <span class="section-pill-time">${sec.time_str}</span>
        `;
        pill.addEventListener('click', (e) => {
          e.preventDefault();
          const targetCue = state.cues.find(c => c.id === sec.cue_id) || { start: sec.start, id: sec.cue_id };
          seekToCue(targetCue);
        });
        pillsContainer.appendChild(pill);
      });
      transcriptEl.appendChild(overviewBar);
    }

    // 2. Render Cues and Section Dividers
    const sectionByCueId = meta.sections ? new Map(meta.sections.map(s => [s.cue_id, s])) : new Map();

    state.cues.forEach(cue => {
      // If this cue starts a section, insert Section Divider Card
      if (sectionByCueId.has(cue.id)) {
        const sec = sectionByCueId.get(cue.id);
        const secDivider = document.createElement('div');
        secDivider.className = `section-divider-card level-${sec.level || 2}`;
        secDivider.id = `section-divider-${sec.cue_id}`;
        secDivider.title = isZh ? '点击跳转至该小节播放' : 'Click to jump to section';
        const numBadge = sec.num ? ` ${sec.num}` : '';
        const secTagLabel = sec.level === 3 ? (isZh ? `小节${numBadge}` : `SUBSECTION${numBadge}`) : (isZh ? `章节${numBadge}` : `SECTION${numBadge}`);
        const primaryTitle = isZh ? sec.title_zh : sec.title_en;
        const secondaryTitle = isZh ? sec.title_en : sec.title_zh;
        const primaryClass = isZh ? 'zh-text' : 'en-text';
        const secondaryClass = isZh ? 'en-text' : 'zh-text';
        const numPrefix = sec.num ? `<span class="section-title-num">${sec.num}</span> ` : '';

        secDivider.innerHTML = `
          <div class="section-divider-header">
            <span class="section-tag">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              </svg>
              <span>${secTagLabel}</span>
            </span>
            <span class="section-timestamp">${sec.time_str}</span>
          </div>
          <h3 class="section-title-primary ${primaryClass}">${numPrefix}${primaryTitle}</h3>
          <div class="section-title-secondary ${secondaryClass}">${sec.num ? sec.num + ' ' : ''}${secondaryTitle}</div>
        `;
        secDivider.addEventListener('click', () => {
          const targetCue = state.cues.find(c => c.id === sec.cue_id) || { start: sec.start, id: sec.cue_id };
          seekToCue(targetCue);
        });
        transcriptEl.appendChild(secDivider);
      }

      const card = document.createElement('div');
      card.className = 'cue-card';
      card.id = `cue-${cue.id}`;
      
      const timeStr = formatTime(cue.start);

      card.innerHTML = `
        <div class="cue-meta-col">
          <span class="cue-timestamp">${timeStr}</span>
          <button class="cue-btn-repeat" title="${isZh ? '单句循环跟读 (R)' : 'Repeat sentence (R)'}" data-cue-id="${cue.id}">
            ${SVGS.repeat}
          </button>
          <button class="cue-btn-echo" title="${isZh ? '史嘉琳回音精听 (E)' : 'Echo Method (E)'}" data-cue-id="${cue.id}">
            ${SVGS.echo}
          </button>
          <button class="cue-btn-share" title="${isZh ? '复制本句播放链接' : 'Copy sentence link'}" data-cue-id="${cue.id}">
            ${SVGS.share}
          </button>
        </div>
        <div class="cue-text-col">
          <div class="cue-echo-badge"></div>
          <div class="en-text">${cue.en}</div>
          <div class="zh-text">${cue.zh || ''}</div>
        </div>
      `;

      // Click card to jump audio
      card.addEventListener('click', (e) => {
        if (e.target.closest('.cue-btn-repeat') || e.target.closest('.cue-btn-share') || e.target.closest('.cue-btn-echo')) return;
        if (typeof EchoController !== 'undefined' && EchoController.singleCueId !== null) {
          EchoController.cancelEcho();
        }
        seekToCue(cue);
      });

      // Repeat button
      const rBtn = card.querySelector('.cue-btn-repeat');
      if (rBtn) {
        rBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          state.repeatCurrent = true;
          repeatBtn.classList.add('active');
          if (typeof EchoController !== 'undefined' && EchoController.isActive()) {
            EchoController.toggleMode(false);
          }
          if (SleepTimer.mode) {
            SleepTimer.stop(true);
            const isZh = isZhLang();
            showToast(isZh ? '已自动关闭睡眠定时' : 'Sleep timer turned off');
          }
          seekToCue(cue);
        });
      }

      // Echo button (Single Cue Echo)
      const eBtn = card.querySelector('.cue-btn-echo');
      if (eBtn) {
        eBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          EchoController.startSingleCue(cue);
        });
      }

      // Share button
      const sBtn = card.querySelector('.cue-btn-share');
      if (sBtn) {
        sBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const link = generateDeepLink(meta.key, cue.start, cue.id);
          copyTextToClipboard(link).then((ok) => {
            const isZhNow = isZhLang();
            showToast(ok 
              ? (isZhNow ? '已复制当前句子播放链接' : 'Sentence timestamp link copied') 
              : (isZhNow ? '复制失败，请手动复制' : 'Failed to copy link')
            );
          });
        });
      }

      transcriptEl.appendChild(card);
    });

    // Append Bottom Navigation & Sponsor Banner
    appendChapterBottomNav(meta);
  }

  // Seek and Play Cue
  function seekToCue(cue) {
    audio.currentTime = cue.start + 0.05;
    if (audio.paused) {
      audio.play();
    }
    highlightCue(cue.id, true);
    updateActiveSection(cue.start + 0.05);
  }

  // Highlight Cue
  function highlightCue(cueId, shouldScroll = true) {
    if (state.activeCueId === cueId) return;

    if (state.activeCueId !== null) {
      const prev = document.getElementById(`cue-${state.activeCueId}`);
      if (prev) prev.classList.remove('active');
    }

    state.activeCueId = cueId;
    const cur = document.getElementById(`cue-${cueId}`);
    if (cur) {
      cur.classList.add('active');
      if (shouldScroll && state.autoScroll) {
        cur.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }

  // Append Bottom Chapter Navigation
  function appendChapterBottomNav(meta) {
    const idx = window.CHAPTERS_META.findIndex(c => c.key === meta.key);
    const prevCh = idx > 0 ? window.CHAPTERS_META[idx - 1] : null;
    const nextCh = idx < window.CHAPTERS_META.length - 1 ? window.CHAPTERS_META[idx + 1] : null;

    const isZh = isZhLang();
    const prevDirText = isZh ? '← 上一章' : '← Previous Chapter';
    const nextDirText = isZh ? '下一章 →' : 'Next Chapter →';
    const prevTitle = prevCh ? (isZh ? `${prevCh.name}: ${prevCh.title_zh}` : `${prevCh.name}: ${prevCh.title_en}`) : '';
    const nextTitle = nextCh ? (isZh ? `${nextCh.name}: ${nextCh.title_zh}` : `${nextCh.name}: ${nextCh.title_en}`) : '';

    const navDiv = document.createElement('div');
    navDiv.className = 'chapter-end-nav';

    let prevHtml = prevCh ? `
      <a href="#${prevCh.key}" class="btn-nav-chapter" id="btn-ch-prev">
        <span class="nav-dir">${prevDirText}</span>
        <span class="nav-name">${prevTitle}</span>
      </a>
    ` : '<div></div>';

    let nextHtml = nextCh ? `
      <a href="#${nextCh.key}" class="btn-nav-chapter" style="text-align: right;" id="btn-ch-next">
        <span class="nav-dir">${nextDirText}</span>
        <span class="nav-name">${nextTitle}</span>
      </a>
    ` : '<div></div>';

    navDiv.innerHTML = prevHtml + nextHtml;
    transcriptEl.appendChild(navDiv);

    // Sponsor Banner (Hidden for now)
    // transcriptEl.appendChild(sponsorBanner);

    // Event listeners
    const prevBtnEl = document.getElementById('btn-ch-prev');
    if (prevBtnEl && prevCh) {
      prevBtnEl.addEventListener('click', (e) => {
        e.preventDefault();
        loadChapter(prevCh.key, true);
      });
    }
    const nextBtnEl = document.getElementById('btn-ch-next');
    if (nextBtnEl && nextCh) {
      nextBtnEl.addEventListener('click', (e) => {
        e.preventDefault();
        loadChapter(nextCh.key, true);
      });
    }
    const bannerSponsorBtn = document.getElementById('btn-banner-sponsor');
    if (bannerSponsorBtn) {
      bannerSponsorBtn.addEventListener('click', () => {
        openModal(sponsorModal);
      });
    }
  }

  // Audio Playback Events
  audio.addEventListener('play', () => {
    state.isPlaying = true;
    setPlayIcon(true);
    playBtn.title = isZhLang() ? '暂停 (Space)' : 'Pause (Space)';
    syncMediaPositionState(audio.currentTime, audio.duration, audio.playbackRate);
  });

  audio.addEventListener('pause', () => {
    state.isPlaying = false;
    setPlayIcon(false);
    playBtn.title = isZhLang() ? '播放 (Space)' : 'Play (Space)';
    savePosition(state.currentChapterKey, audio.currentTime, true);
    syncMediaPositionState(audio.currentTime, audio.duration, audio.playbackRate);
  });

  audio.addEventListener('loadedmetadata', () => {
    totalTimeEl.textContent = formatTime(audio.duration);
    seekBar.max = audio.duration;
    syncMediaPositionState(audio.currentTime, audio.duration, audio.playbackRate);
    updateBufferProgress();
  });

  audio.addEventListener('progress', updateBufferProgress);

  audio.addEventListener('timeupdate', () => {
    const curTime = audio.currentTime;
    curTimeEl.textContent = formatTime(curTime);
    seekBar.value = curTime;

    // Periodically save playback position
    savePosition(state.currentChapterKey, curTime, false);
    syncMediaPositionState(curTime, audio.duration, audio.playbackRate);
    updateBufferProgress();

    // Smooth Lookahead: Preload next chapter when near end (within 60s)
    if (audio.duration > 0 && (audio.duration - curTime <= 60)) {
      preloadNextChapter();
    }

    // Active sub-chapter / section tracking
    updateActiveSection(curTime);

    // Single-sentence repeat (A-B loop) handling with boundary protection
    if (state.repeatCurrent && state.cues.length > 0) {
      let repeatCue = state.cues.find(c => c.id === state.activeCueId);
      if (!repeatCue) {
        repeatCue = state.cues.find(c => curTime >= c.start && curTime <= c.end) || state.cues[0];
        if (repeatCue) state.activeCueId = repeatCue.id;
      }
      if (repeatCue) {
        // If within natural playback loop boundary (overshoot <= 1.5s)
        if (curTime >= repeatCue.end && curTime < repeatCue.end + 1.5) {
          audio.currentTime = repeatCue.start + 0.05;
          highlightCue(repeatCue.id);
          return;
        }
        // If outside repeatCue because of a deliberate seek/jump (> 1.5s overshoot or before cue start)
        if (curTime < repeatCue.start - 0.2 || curTime >= repeatCue.end + 1.5) {
          const seekedCue = state.cues.find(c => curTime >= c.start && curTime <= c.end);
          if (seekedCue) {
            state.activeCueId = seekedCue.id;
            highlightCue(seekedCue.id);
            return;
          }
        } else {
          highlightCue(repeatCue.id);
          return;
        }
      }
    }

    // Find active cue
    let currentCue = state.cues.find(c => curTime >= c.start && curTime <= c.end) ||
                     state.cues.find(c => curTime >= c.start && curTime <= c.start + 12);
    if (!currentCue && state.cues.length > 0 && curTime < state.cues[0].start + 1) {
      currentCue = state.cues[0];
    }

    if (currentCue) {
      if (typeof EchoController !== 'undefined' && EchoController.isActive()) {
        if (EchoController.mode && EchoController.step === 'IDLE' && !EchoController.activeCue) {
          EchoController.startContinuous(currentCue);
        }
        EchoController.onTimeUpdate(curTime, currentCue);
      }
      highlightCue(currentCue.id);
    }
  });

  audio.addEventListener('ended', () => {
    if (state.repeatCurrent && state.activeCueId) {
      const cue = state.cues.find(c => c.id === state.activeCueId);
      if (cue) {
        audio.currentTime = cue.start + 0.05;
        audio.play().catch(err => console.log('Repeat replay error:', err));
        return;
      }
    }
    state.isPlaying = false;
    setPlayIcon(false);
    if (SleepTimer.mode === 'end_of_chapter') {
      SleepTimer.stop(false);
      const isZh = isZhLang();
      showToast(isZh ? '本章播放完毕，睡眠定时已暂停' : 'Chapter ended, sleep timer paused playback');
      return;
    }
    // Autoplay next chapter if available
    const idx = window.CHAPTERS_META.findIndex(c => c.key === state.currentChapterKey);
    if (idx < window.CHAPTERS_META.length - 1) {
      const nextCh = window.CHAPTERS_META[idx + 1];
      loadChapter(nextCh.key, true);
    }
  });

  // Audio Network and Stream Error Recovery
  function handleAudioError() {
    if (!audio.src || audio.src === 'about:blank' || audio.src.endsWith('/')) return;
    const isZh = isZhLang();
    const errorMsg = isZh ? '音频加载遇到问题，请检查网络' : 'Audio loading issue, check connection';
    const retryLabel = isZh ? '重试' : 'Retry';
    const toastFn = (typeof exported !== 'undefined' && exported.showToast) ? exported.showToast : showToast;
    return toastFn(errorMsg, {
      duration: 6000,
      actionLabel: retryLabel,
      onAction: () => {
        const cur = audio.currentTime || 0;
        const currentSrc = audio.src;
        audio.src = '';
        audio.src = currentSrc;
        audio.load();
        if (cur > 0) {
          audio.currentTime = cur;
        }
        audio.play().catch(err => console.log('Audio retry failed:', err));
      }
    });
  }

  audio.addEventListener('error', handleAudioError);

  // Controls Event Listeners
  playBtn.addEventListener('click', () => {
    if (typeof EchoController !== 'undefined' && EchoController.step === 'ECHO') {
      EchoController.cancelEcho();
      audio.pause();
      return;
    }
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });

  prevCueBtn.addEventListener('click', () => {
    if (!state.activeCueId) return;
    const curIdx = state.cues.findIndex(c => c.id === state.activeCueId);
    if (curIdx > 0) {
      seekToCue(state.cues[curIdx - 1]);
    }
  });

  nextCueBtn.addEventListener('click', () => {
    if (!state.activeCueId) {
      if (state.cues.length > 0) seekToCue(state.cues[0]);
      return;
    }
    const curIdx = state.cues.findIndex(c => c.id === state.activeCueId);
    if (curIdx < state.cues.length - 1) {
      seekToCue(state.cues[curIdx + 1]);
    }
  });

  rewindBtn.addEventListener('click', () => {
    audio.currentTime = Math.max(0, audio.currentTime - 5);
  });

  forwardBtn.addEventListener('click', () => {
    audio.currentTime = Math.min(audio.duration, audio.currentTime + 5);
  });

  repeatBtn.addEventListener('click', () => {
    state.repeatCurrent = !state.repeatCurrent;
    repeatBtn.classList.toggle('active', state.repeatCurrent);
    if (state.repeatCurrent) {
      if (typeof EchoController !== 'undefined' && EchoController.isActive()) {
        EchoController.toggleMode(false);
      }
      if (SleepTimer.mode) {
        SleepTimer.stop(true);
        const isZh = isZhLang();
        showToast(isZh ? '已自动关闭睡眠定时' : 'Sleep timer turned off');
      }
    }
    const isZh = isZhLang();
    repeatBtn.title = state.repeatCurrent 
      ? (isZh ? '取消单句循环 (R)' : 'Disable sentence loop (R)') 
      : (isZh ? '开启单句循环 (R)' : 'Enable sentence loop (R)');
  });

  if (echoModeBtn) {
    echoModeBtn.addEventListener('click', () => {
      EchoController.toggleMode();
    });
  }

  seekBar.addEventListener('input', () => {
    audio.currentTime = parseFloat(seekBar.value);
  });

  speedSelect.addEventListener('change', () => {
    setPlaybackRate(parseFloat(speedSelect.value));
  });

  if (timerSelect) {
    timerSelect.addEventListener('change', (e) => {
      SleepTimer.start(e.target.value);
    });
  }

  autoScrollBtn.addEventListener('click', () => {
    state.autoScroll = !state.autoScroll;
    try {
      localStorage.setItem('ai_agent_autoscroll', state.autoScroll ? '1' : '0');
    } catch (e) {}
    updateAutoScrollUI();
    if (state.autoScroll && state.activeCueId) {
      highlightCue(state.activeCueId, true);
    }
  });

  themeToggleBtn.addEventListener('click', toggleTheme);

  // View Mode Buttons
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setViewMode(btn.dataset.mode);
    });
  });

  // Sidebar Mobile Toggle & Close Actions
  if (sidebarToggleBtn) {
    sidebarToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleSidebar();
    });
  }

  if (sidebarCloseBtn) {
    sidebarCloseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      closeSidebar();
    });
  }

  if (sidebarBackdrop) {
    sidebarBackdrop.addEventListener('click', () => {
      closeSidebar();
    });
  }

  // Close sidebar on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sidebarEl && sidebarEl.classList.contains('open')) {
      closeSidebar();
    }
  });

  // Close mobile sidebar on window resize to desktop
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900 && sidebarEl && sidebarEl.classList.contains('open')) {
      closeSidebar();
    }
  });

  // Modals Open/Close
  function openModal(modal) {
    if (modal) modal.classList.add('active');
  }

  function closeModal(modal) {
    if (modal) modal.classList.remove('active');
  }

  document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const modal = e.target.closest('.modal-overlay');
      closeModal(modal);
    });
  });

  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        closeModal(overlay);
      }
    });
  });

  // Modal triggers
  const btnOpenSponsor = document.getElementById('btn-open-sponsor');
  if (btnOpenSponsor) btnOpenSponsor.addEventListener('click', () => openModal(sponsorModal));
  const btnSidebarSponsor = document.getElementById('btn-sidebar-sponsor');
  if (btnSidebarSponsor) btnSidebarSponsor.addEventListener('click', () => {
    closeSidebar();
    openModal(sponsorModal);
  });
  const btnOpenAbout = document.getElementById('btn-open-about');
  if (btnOpenAbout) btnOpenAbout.addEventListener('click', () => {
    closeSidebar();
    openModal(aboutModal);
  });
  const btnShortcuts = document.getElementById('btn-shortcuts');
  if (btnShortcuts) btnShortcuts.addEventListener('click', () => openModal(shortcutsModal));

  // Search Modal Controller
  let searchDebounceTimer = null;
  let searchSelectedIndex = -1;

  function openSearchModal() {
    if (!searchModal) return;
    openModal(searchModal);
    if (searchInputEl) {
      setTimeout(() => {
        searchInputEl.focus();
        if (typeof searchInputEl.select === 'function') searchInputEl.select();
      }, 50);
    }
    SearchEngine.preheat();
  }

  function closeSearchModal() {
    if (!searchModal) return;
    closeModal(searchModal);
  }

  function handleSearchInput() {
    if (!searchInputEl || !searchResultsListEl) return;
    const query = searchInputEl.value;
    searchSelectedIndex = -1;

    if (!query || !query.trim()) {
      if (searchEmptyStateEl) searchEmptyStateEl.style.display = 'block';
      searchResultsListEl.innerHTML = '';
      if (searchResultsCountEl) searchResultsCountEl.textContent = '';
      return;
    }

    if (searchEmptyStateEl) searchEmptyStateEl.style.display = 'none';
    const results = SearchEngine.search(query);
    const isZh = isZhLang();

    if (searchResultsCountEl) {
      const countMsg = isZh ? `找到 ${results.length} 条结果` : `${results.length} results found`;
      searchResultsCountEl.textContent = countMsg;
    }

    if (results.length === 0) {
      const noResMsg = isZh ? '未找到匹配的字幕或概念' : 'No matching subtitles found';
      searchResultsListEl.innerHTML = `<div class="search-no-results">${noResMsg}</div>`;
      return;
    }

    searchResultsListEl.innerHTML = results.map((item, idx) => `
      <div class="search-result-item" data-index="${idx}" data-chapter="${item.chapterKey}" data-time="${item.start}" data-cue="${item.cueId}">
        <div class="search-result-header">
          <span class="search-result-chapter">${isZh ? item.chapterTitleZh : item.chapterTitleEn}</span>
          <span class="search-result-time">${formatTime(item.start)}</span>
        </div>
        <div class="search-result-text-en">${item.enHighlighted}</div>
        <div class="search-result-text-zh">${item.zhHighlighted}</div>
      </div>
    `).join('');

    searchResultsListEl.querySelectorAll('.search-result-item').forEach(el => {
      el.addEventListener('click', () => {
        const chKey = el.getAttribute('data-chapter');
        const startSec = parseFloat(el.getAttribute('data-time')) || 0;
        const cueId = el.getAttribute('data-cue');
        selectSearchResult(chKey, startSec, cueId);
      });
    });
  }

  function selectSearchResult(chKey, startSec, cueId) {
    closeSearchModal();
    if (state.currentChapterKey !== chKey) {
      state.pendingDeepLinkTime = startSec;
      loadChapter(chKey, true);
    } else {
      audio.currentTime = startSec;
      curTimeEl.textContent = formatTime(startSec);
      seekBar.value = startSec;
      audio.play().catch(e => console.log('Play prevented:', e));
      if (cueId) highlightCue(cueId, true);
    }
  }

  function updateSearchSelection(items) {
    items.forEach((item, idx) => {
      if (idx === searchSelectedIndex) {
        item.classList.add('selected');
        if (typeof item.scrollIntoView === 'function') {
          item.scrollIntoView({ block: 'nearest' });
        }
      } else {
        item.classList.remove('selected');
      }
    });
  }

  if (btnSearchOpen) btnSearchOpen.addEventListener('click', openSearchModal);
  if (btnSearchClose) btnSearchClose.addEventListener('click', closeSearchModal);

  if (searchInputEl) {
    searchInputEl.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeSearchModal();
        return;
      }
      const items = searchResultsListEl ? searchResultsListEl.querySelectorAll('.search-result-item') : [];
      if (!items || items.length === 0) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        searchSelectedIndex = Math.min(searchSelectedIndex + 1, items.length - 1);
        updateSearchSelection(items);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        searchSelectedIndex = Math.max(searchSelectedIndex - 1, 0);
        updateSearchSelection(items);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (searchSelectedIndex >= 0 && searchSelectedIndex < items.length) {
          items[searchSelectedIndex].click();
        } else if (items.length > 0) {
          items[0].click();
        }
      }
    });

    searchInputEl.addEventListener('input', () => {
      clearTimeout(searchDebounceTimer);
      searchDebounceTimer = setTimeout(handleSearchInput, 100);
    });
  }

  // Idle Preload Search Data
  if (typeof window !== 'undefined') {
    const schedulePreheat = () => {
      if (typeof window.requestIdleCallback === 'function') {
        window.requestIdleCallback(() => SearchEngine.preheat());
      } else {
        setTimeout(() => SearchEngine.preheat(), 3000);
      }
    };
    if (document.readyState === 'complete') {
      schedulePreheat();
    } else {
      window.addEventListener('load', schedulePreheat, { once: true });
    }
  }

  // Cache Chapter Button Trigger
  if (cacheBtn) {
    cacheBtn.addEventListener('click', handleCacheChapterClick);
  }

  function updateControlsTooltips() {
    const isZh = isZhLang();
    prevCueBtn.title = isZh ? '上一句 (↑)' : 'Previous sentence (↑)';
    nextCueBtn.title = isZh ? '下一句 (↓)' : 'Next sentence (↓)';
    rewindBtn.title = isZh ? '快退 5 秒 (←)' : 'Rewind 5s (←)';
    forwardBtn.title = isZh ? '快进 5 秒 (→)' : 'Forward 5s (→)';
    playBtn.title = audio.paused ? (isZh ? '播放 (Space)' : 'Play (Space)') : (isZh ? '暂停 (Space)' : 'Pause (Space)');
    repeatBtn.title = state.repeatCurrent 
      ? (isZh ? '取消单句循环 (R)' : 'Disable sentence loop (R)') 
      : (isZh ? '开启单句循环 (R)' : 'Enable sentence loop (R)');
    if (echoModeBtn) {
      echoModeBtn.title = isZh ? '史嘉琳回音精听模式 (E)' : 'Echo Method Listening (E)';
    }
    speedSelect.title = isZh ? '播放速度' : 'Playback Speed';
  }

  // Language change listener for reader
  window.addEventListener('langchange', () => {
    renderChapterNav();
    updateControlsTooltips();
    updateCacheBtnState();
    const meta = window.CHAPTERS_META.find(c => c.key === state.currentChapterKey);
    if (meta) {
      const isZh = isZhLang();
      currentChapterTitleEl.textContent = isZh ? `${meta.name}: ${meta.title_zh} • ${meta.title_en}` : `${meta.name}: ${meta.title_en}`;
      document.title = `AI Agents in Depth - ${meta.name}: ${isZh ? meta.title_zh : meta.title_en}`;
      renderSeekMarkers(meta);
      renderTranscript(meta);
      if (state.activeCueId) {
        highlightCue(state.activeCueId, false);
      }
      updateActiveSection(audio.currentTime);
    }
    updateAutoScrollUI();
  });

  const AVAILABLE_SPEEDS = [0.75, 1.0, 1.25, 1.5, 1.75];
  let lastNonZeroVolume = 1.0;

  function setPlaybackRate(rate) {
    const clamped = Math.max(0.75, Math.min(1.75, rate));
    state.playbackRate = clamped;
    if (audio) audio.playbackRate = clamped;
    if (speedSelect) speedSelect.value = String(clamped);
    try {
      localStorage.setItem('ai_agent_rate', String(clamped));
    } catch (e) {}
    const isZh = isZhLang();
    showToast(isZh ? `播放速度: ${clamped}x` : `Playback speed: ${clamped}x`);
  }

  function stepSpeed(direction) {
    const currentRate = state.playbackRate || 1.0;
    const curIdx = AVAILABLE_SPEEDS.indexOf(currentRate);
    if (curIdx !== -1) {
      const nextIdx = Math.max(0, Math.min(AVAILABLE_SPEEDS.length - 1, curIdx + direction));
      setPlaybackRate(AVAILABLE_SPEEDS[nextIdx]);
    } else {
      const target = currentRate + direction * 0.25;
      setPlaybackRate(target);
    }
  }

  function toggleMute() {
    if (!audio) return;
    const isZh = isZhLang();
    if (audio.volume > 0) {
      lastNonZeroVolume = audio.volume;
      audio.volume = 0;
      showToast(isZh ? '已静音 (快捷键: M)' : 'Muted (Shortcut: M)');
    } else {
      audio.volume = lastNonZeroVolume || 1.0;
      showToast(isZh ? `已恢复音量 (${Math.round(audio.volume * 100)}%)` : `Unmuted (${Math.round(audio.volume * 100)}%)`);
    }
  }

  function handleKeyboardShortcut(e) {
    if (!e) return;
    if (e.key === 'Escape') {
      if (typeof e.preventDefault === 'function') e.preventDefault();
      document.querySelectorAll('.modal-overlay.active').forEach(closeModal);
      return;
    }

    // Global Cmd+K / Ctrl+K shortcut for search (works anywhere, even in inputs)
    if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === 'K')) {
      if (typeof e.preventDefault === 'function') e.preventDefault();
      if (searchModal && searchModal.classList.contains('active')) {
        closeSearchModal();
      } else {
        openSearchModal();
      }
      return;
    }

    // Input focus isolation: do not trigger single-key playback controls when typing
    const activeEl = (typeof document !== 'undefined' && document.activeElement) || e.target;
    const isInputFocused = activeEl && (activeEl.tagName === 'INPUT' || activeEl.tagName === 'TEXTAREA' || activeEl.isContentEditable);
    if (isInputFocused) return;

    if (e.key === '/') {
      if (typeof e.preventDefault === 'function') e.preventDefault();
      openSearchModal();
      return;
    }

    switch (e.code) {
      case 'Space':
        if (typeof e.preventDefault === 'function') e.preventDefault();
        if (typeof EchoController !== 'undefined' && EchoController.step === 'ECHO') {
          EchoController.cancelEcho();
          audio.pause();
          break;
        }
        if (audio.paused) audio.play().catch(err => console.log(err));
        else audio.pause();
        break;
      case 'ArrowLeft':
        if (typeof e.preventDefault === 'function') e.preventDefault();
        audio.currentTime = Math.max(0, audio.currentTime - 5);
        break;
      case 'ArrowRight':
        if (typeof e.preventDefault === 'function') e.preventDefault();
        audio.currentTime = Math.min(audio.duration, audio.currentTime + 5);
        break;
      case 'ArrowUp':
        if (typeof e.preventDefault === 'function') e.preventDefault();
        if (prevCueBtn && prevCueBtn.click) prevCueBtn.click();
        break;
      case 'ArrowDown':
        if (typeof e.preventDefault === 'function') e.preventDefault();
        if (nextCueBtn && nextCueBtn.click) nextCueBtn.click();
        break;
      case 'KeyR':
        if (typeof e.preventDefault === 'function') e.preventDefault();
        if (repeatBtn && repeatBtn.click) repeatBtn.click();
        break;
      case 'KeyE':
        if (typeof e.preventDefault === 'function') e.preventDefault();
        if (typeof EchoController !== 'undefined') EchoController.toggleMode();
        break;
      case 'KeyL':
        if (typeof e.preventDefault === 'function') e.preventDefault();
        const modes = ['bilingual', 'en', 'zh'];
        const nextMode = modes[(modes.indexOf(state.viewMode) + 1) % modes.length];
        setViewMode(nextMode);
        break;
      case 'BracketRight': // ]
        if (typeof e.preventDefault === 'function') e.preventDefault();
        stepSpeed(1);
        break;
      case 'BracketLeft': // [
        if (typeof e.preventDefault === 'function') e.preventDefault();
        stepSpeed(-1);
        break;
      case 'KeyM': // M
        if (typeof e.preventDefault === 'function') e.preventDefault();
        toggleMute();
        break;
    }
  }

  // Register Global Keyboard Shortcuts Listener
  window.addEventListener('keydown', handleKeyboardShortcut);

  // Unload and visibility persistence
  if (typeof window !== 'undefined') {
    window.addEventListener('beforeunload', () => {
      savePosition(state.currentChapterKey, audio.currentTime, true);
    });
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        savePosition(state.currentChapterKey, audio.currentTime, true);
      }
    });
  }

  // App Initialization
  loadPreferences();
  renderChapterNav();
  updateControlsTooltips();
  loadChapter(state.currentChapterKey, false);
  refreshCachedChapters();

  // Export for testing and external extension
  const exported = {
    state,
    formatTime,
    resolveAudioUrl,
    loadChapter,
    showToast,
    savePosition,
    checkAndResumePosition,
    resetChapterPosition,
    updateMediaSession,
    syncMediaPositionState,
    calculateBufferPercent,
    parseLocationHash,
    generateDeepLink,
    copyTextToClipboard,
    DynamicDataLoader,
    escapeHtml,
    highlightMatches,
    SearchEngine,
    SleepTimer,
    EchoController,
    handleKeyboardShortcut,
    setPlaybackRate,
    toggleMute,
    handleAudioError
  };

  if (typeof window !== 'undefined') {
    window.TechVoiceApp = exported;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = exported;
  }

})();


