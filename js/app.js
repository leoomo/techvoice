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
    viewMode: 'bilingual', // 'bilingual' | 'en' | 'zh'
    playbackRate: 1.0,
    theme: 'dark',
    cachedChapters: new Set(),
    isCaching: false,
    preloadedNextChapterKey: null
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
  const seekBar = document.getElementById('seek-bar');
  const curTimeEl = document.getElementById('time-current');
  const totalTimeEl = document.getElementById('time-total');
  const speedSelect = document.getElementById('speed-select');
  const autoScrollBtn = document.getElementById('btn-autoscroll');
  const cacheBtn = document.getElementById('btn-cache-chapter');
  const cacheIcon = document.getElementById('cache-icon');
  const cacheText = document.getElementById('cache-text');
  const themeToggleBtn = document.getElementById('btn-theme-toggle');
  const sidebarEl = document.getElementById('sidebar');
  const sidebarToggleBtn = document.getElementById('btn-sidebar-toggle');
  
  // Modals
  const sponsorModal = document.getElementById('modal-sponsor');
  const aboutModal = document.getElementById('modal-about');
  const shortcutsModal = document.getElementById('modal-shortcuts');

  function isZhLang() {
    return window.TechVoiceI18N ? window.TechVoiceI18N.getLang() === 'zh' : true;
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

  // Initialize Preferences from LocalStorage
  function loadPreferences() {
    try {
      const savedTheme = localStorage.getItem('ai_agent_theme');
      if (savedTheme) {
        state.theme = savedTheme;
        document.documentElement.setAttribute('data-theme', savedTheme);
        themeToggleBtn.textContent = savedTheme === 'light' ? '🌙' : '☀️';
      }

      const savedMode = localStorage.getItem('ai_agent_view_mode');
      if (savedMode) {
        setViewMode(savedMode);
      }

      const savedRate = localStorage.getItem('ai_agent_rate');
      if (savedRate) {
        state.playbackRate = parseFloat(savedRate);
        speedSelect.value = savedRate;
        audio.playbackRate = state.playbackRate;
      }

      // Check URL hash for chapter
      const hash = window.location.hash.replace('#', '');
      const validMeta = window.CHAPTERS_META.find(c => c.key === hash);
      if (validMeta) {
        state.currentChapterKey = hash;
      } else {
        const savedCh = localStorage.getItem('ai_agent_current_chapter');
        if (savedCh && window.CHAPTERS_META.find(c => c.key === savedCh)) {
          state.currentChapterKey = savedCh;
        }
      }
    } catch (e) {
      console.warn('LocalStorage access warning:', e);
    }
  }

  // Set Theme
  function toggleTheme() {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', state.theme);
    themeToggleBtn.textContent = state.theme === 'light' ? '🌙' : '☀️';
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
      const item = document.createElement('a');
      item.className = `nav-item ${ch.key === state.currentChapterKey ? 'active' : ''}`;
      item.id = `nav-item-${ch.key}`;
      item.href = `#${ch.key}`;
      
      const numLabel = ch.num === 0 ? 'Intro' : (ch.num === 11 ? 'End' : `Ch ${ch.num}`);
      const titleDisplay = isZh ? `${ch.title_zh} (${ch.title_en})` : `${ch.title_en} (${ch.title_zh})`;
      const countLabel = isZh ? `${ch.cues_count} 句` : `${ch.cues_count} cues`;
      const isCached = state.cachedChapters.has(ch.key);
      const offlineBadge = isCached ? `<span class="nav-item-offline-badge">✓ ${isZh ? '已离线' : 'Offline'}</span>` : '';

      item.innerHTML = `
        <span class="nav-item-num">${numLabel}</span>
        <div class="nav-item-content">
          <span class="nav-item-title">${titleDisplay} ${offlineBadge}</span>
          <div class="nav-item-meta">
            <span>⏱ ${ch.duration_str}</span>
            <span>📝 ${countLabel}</span>
          </div>
        </div>
      `;

      item.addEventListener('click', (e) => {
        e.preventDefault();
        loadChapter(ch.key, true);
        if (window.innerWidth <= 900) {
          sidebarEl.classList.remove('open');
        }
      });
      chapterNavEl.appendChild(item);
    });
  }

  // Load and Switch Chapter
  function loadChapter(key, autoPlay = false) {
    const meta = window.CHAPTERS_META.find(c => c.key === key);
    if (!meta) return;

    state.currentChapterKey = key;
    state.activeCueId = null;
    state.preloadedNextChapterKey = null;
    window.location.hash = key;
    try {
      localStorage.setItem('ai_agent_current_chapter', key);
    } catch (e) {}

    // Update Sidebar Active state
    document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
    const curNav = document.getElementById(`nav-item-${key}`);
    if (curNav) curNav.classList.add('active');

    // Update Header
    const isZh = isZhLang();
    currentChapterTitleEl.textContent = isZh ? `${meta.name}: ${meta.title_zh} • ${meta.title_en}` : `${meta.name}: ${meta.title_en} • ${meta.title_zh}`;
    document.title = `AI Agents in Depth - ${meta.name}: ${isZh ? meta.title_zh : meta.title_en}`;

    // Update Cache button state for current chapter
    updateCacheBtnState();

    // Load Cues from window.CHAPTER_DATA_{key}
    const dataVar = `CHAPTER_DATA_${key}`;
    state.cues = window[dataVar] || [];

    // Render Transcript Cues
    renderTranscript(meta);

    // Load Audio
    const wasPlaying = !audio.paused;
    audio.src = meta.audio;
    audio.playbackRate = state.playbackRate;
    audio.load();

    seekBar.value = 0;
    curTimeEl.textContent = '00:00';
    totalTimeEl.textContent = meta.duration_str;

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
        const found = window.CHAPTERS_META.find(ch => url.pathname.endsWith(ch.audio));
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
      cacheIcon.textContent = '⏳';
      cacheBtn.title = isZh ? '正在下载离线音频缓存...' : 'Downloading audio for offline cache...';
      return;
    }

    if (isCached) {
      cacheBtn.className = 'btn-toggle-tool btn-cache cached';
      cacheIcon.textContent = '✅';
      cacheText.textContent = isZh ? '已离线' : 'Offline Ready';
      cacheBtn.title = isZh ? '本章已离线缓存（点击可清除以释放空间）' : 'Chapter cached offline (Click to clear)';
    } else {
      cacheBtn.className = 'btn-toggle-tool btn-cache';
      cacheIcon.textContent = '💾';
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
          await audioCache.delete(meta.audio);
          const fullPath = new URL(meta.audio, window.location.href).pathname;
          await audioCache.delete(fullPath);
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
      const response = await fetch(meta.audio);
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
      const audioUrl = new URL(meta.audio, window.location.href).pathname;
      await audioCache.put(audioUrl, cachedResponse);

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
      link.href = nextMeta.audio;
      document.head.appendChild(link);
      console.log('[Audio Preload] Next chapter prefetching:', nextMeta.name);
    }
  }

  // Render Transcript Cues
  function renderTranscript(meta) {
    transcriptEl.innerHTML = '';
    
    state.cues.forEach(cue => {
      const card = document.createElement('div');
      card.className = 'cue-card';
      card.id = `cue-${cue.id}`;
      
      const timeStr = formatTime(cue.start);

      card.innerHTML = `
        <div class="cue-meta-col">
          <span class="cue-timestamp">${timeStr}</span>
          <button class="cue-btn-repeat" title="单句循环 (Repeat sentence)" data-cue-id="${cue.id}">🔁</button>
        </div>
        <div class="cue-text-col">
          <div class="en-text">${cue.en}</div>
          <div class="zh-text">${cue.zh || ''}</div>
        </div>
      `;

      // Click card to jump audio
      card.addEventListener('click', (e) => {
        if (e.target.classList.contains('cue-btn-repeat')) return;
        seekToCue(cue);
      });

      // Repeat button
      const rBtn = card.querySelector('.cue-btn-repeat');
      rBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        state.repeatCurrent = true;
        repeatBtn.classList.add('active');
        seekToCue(cue);
      });

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

    // Sponsor Banner
    const dict = window.TechVoiceI18N ? window.TechVoiceI18N.data[isZh ? 'zh' : 'en'] : null;
    const bannerTitle = dict ? dict.reader_banner_title : (isZh ? '☕ 觉得这个听书小站有帮助？' : '☕ Finding this audio reader helpful?');
    const bannerDesc = dict ? dict.reader_banner_desc : (isZh ? '全书 12 章节、21 小时中英双语音频由个人学习整理制作。如果对你有帮助，欢迎请喝杯咖啡支持日常维护！' : 'This 21-hour audio edition was created for personal study and shared openly. If it helps your learning, feel free to buy a coffee to support maintenance!');
    const bannerBtnText = dict ? dict.reader_banner_btn : (isZh ? '☕ 请喝杯咖啡' : '☕ Buy a Coffee');

    const sponsorBanner = document.createElement('div');
    sponsorBanner.className = 'chapter-sponsor-banner';
    sponsorBanner.innerHTML = `
      <div class="sponsor-banner-text">
        <h4>${bannerTitle}</h4>
        <p>${bannerDesc}</p>
      </div>
      <button class="btn-icon btn-sponsor" id="btn-banner-sponsor">${bannerBtnText}</button>
    `;
    transcriptEl.appendChild(sponsorBanner);

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
    playIcon.textContent = '⏸';
    playBtn.title = isZhLang() ? '暂停 (Space)' : 'Pause (Space)';
  });

  audio.addEventListener('pause', () => {
    state.isPlaying = false;
    playIcon.textContent = '▶';
    playBtn.title = isZhLang() ? '播放 (Space)' : 'Play (Space)';
  });

  audio.addEventListener('loadedmetadata', () => {
    totalTimeEl.textContent = formatTime(audio.duration);
    seekBar.max = audio.duration;
  });

  audio.addEventListener('timeupdate', () => {
    const curTime = audio.currentTime;
    curTimeEl.textContent = formatTime(curTime);
    seekBar.value = curTime;

    // Smooth Lookahead: Preload next chapter when near end (within 60s)
    if (audio.duration > 0 && (audio.duration - curTime <= 60)) {
      preloadNextChapter();
    }

    // Find active cue
    const currentCue = state.cues.find(c => curTime >= c.start && curTime <= c.end) ||
                       state.cues.find(c => curTime >= c.start && curTime <= c.start + 12);

    if (currentCue) {
      // Single-sentence repeat handling
      if (state.repeatCurrent && curTime >= currentCue.end) {
        audio.currentTime = currentCue.start + 0.05;
        return;
      }
      highlightCue(currentCue.id);
    }
  });

  audio.addEventListener('ended', () => {
    state.isPlaying = false;
    playIcon.textContent = '▶';
    // Autoplay next chapter if available
    const idx = window.CHAPTERS_META.findIndex(c => c.key === state.currentChapterKey);
    if (idx < window.CHAPTERS_META.length - 1) {
      const nextCh = window.CHAPTERS_META[idx + 1];
      loadChapter(nextCh.key, true);
    }
  });

  // Controls Event Listeners
  playBtn.addEventListener('click', () => {
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
    const isZh = isZhLang();
    repeatBtn.title = state.repeatCurrent 
      ? (isZh ? '取消单句循环 (R)' : 'Disable sentence loop (R)') 
      : (isZh ? '开启单句循环 (R)' : 'Enable sentence loop (R)');
  });

  seekBar.addEventListener('input', () => {
    audio.currentTime = parseFloat(seekBar.value);
  });

  speedSelect.addEventListener('change', () => {
    state.playbackRate = parseFloat(speedSelect.value);
    audio.playbackRate = state.playbackRate;
    try {
      localStorage.setItem('ai_agent_rate', speedSelect.value);
    } catch (e) {}
  });

  autoScrollBtn.addEventListener('click', () => {
    state.autoScroll = !state.autoScroll;
    autoScrollBtn.classList.toggle('active', state.autoScroll);
    const isZh = isZhLang();
    autoScrollBtn.textContent = state.autoScroll ? (isZh ? '自动跟随: ON' : 'Auto-scroll: ON') : (isZh ? '自动跟随: OFF' : 'Auto-scroll: OFF');
  });

  themeToggleBtn.addEventListener('click', toggleTheme);

  // View Mode Buttons
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      setViewMode(btn.dataset.mode);
    });
  });

  // Sidebar Mobile Toggle
  sidebarToggleBtn.addEventListener('click', () => {
    sidebarEl.classList.toggle('open');
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
  document.getElementById('btn-open-sponsor').addEventListener('click', () => openModal(sponsorModal));
  document.getElementById('btn-sidebar-sponsor').addEventListener('click', () => openModal(sponsorModal));
  document.getElementById('btn-open-about').addEventListener('click', () => openModal(aboutModal));
  document.getElementById('btn-shortcuts').addEventListener('click', () => openModal(shortcutsModal));

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
      currentChapterTitleEl.textContent = isZh ? `${meta.name}: ${meta.title_zh} • ${meta.title_en}` : `${meta.name}: ${meta.title_en} • ${meta.title_zh}`;
      const oldNav = transcriptEl.querySelector('.chapter-end-nav');
      if (oldNav) oldNav.remove();
      const oldBanner = transcriptEl.querySelector('.chapter-sponsor-banner');
      if (oldBanner) oldBanner.remove();
      appendChapterBottomNav(meta);
    }
    const isZh = isZhLang();
    autoScrollBtn.textContent = state.autoScroll ? (isZh ? '自动跟随: ON' : 'Auto-scroll: ON') : (isZh ? '自动跟随: OFF' : 'Auto-scroll: OFF');
  });

  // Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.active').forEach(closeModal);
      return;
    }
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

    switch (e.code) {
      case 'Space':
        e.preventDefault();
        if (audio.paused) audio.play();
        else audio.pause();
        break;
      case 'ArrowLeft':
        e.preventDefault();
        audio.currentTime = Math.max(0, audio.currentTime - 5);
        break;
      case 'ArrowRight':
        e.preventDefault();
        audio.currentTime = Math.min(audio.duration, audio.currentTime + 5);
        break;
      case 'ArrowUp':
        e.preventDefault();
        prevCueBtn.click();
        break;
      case 'ArrowDown':
        e.preventDefault();
        nextCueBtn.click();
        break;
      case 'KeyR':
        e.preventDefault();
        repeatBtn.click();
        break;
      case 'KeyL':
        e.preventDefault();
        const modes = ['bilingual', 'en', 'zh'];
        const nextMode = modes[(modes.indexOf(state.viewMode) + 1) % modes.length];
        setViewMode(nextMode);
        break;
    }
  });

  // App Initialization
  loadPreferences();
  renderChapterNav();
  updateControlsTooltips();
  loadChapter(state.currentChapterKey, false);
  refreshCachedChapters();

})();
