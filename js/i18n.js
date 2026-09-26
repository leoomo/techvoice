/**
 * TechVoice / OpenAudio Internationalization (i18n) Engine
 * Clean, unpretentious sentence-by-sentence bilingual dictionary and dispatcher.
 */

(function () {
  'use strict';

  const I18N_DATA = {
    zh: {
      // Header & Navigation
      brand_sub: "开源技术书精听",
      brand_badge: "自用与分享",
      nav_featured: "正在听的书",
      nav_library: "相关资源",
      nav_features: "功能特点",
      nav_sponsor: "请喝咖啡",
      nav_player_cta: "打开播放器 →",
      lang_switch_label: "EN",
      lang_switch_title: "Switch to English / 切换至英文",

      // Hero Section
      hero_badge: "自己平时听书做的开源小站 · 21 小时全书音频",
      hero_title: '开源技术书<br><span class="gradient-text">中英双语精听小站</span>',
      hero_desc: "把开源的技术好书转成自然流畅的英文有声，配上逐句中英对照字幕。平时散步、通勤时听听，顺便磨磨英文听力、学学系统设计。",
      hero_btn_listen: "🎧 开始收听《深入理解 AI Agent》 (21h)",
      hero_btn_explore: "📚 电子书与配套资源",
      metric_audio_val: "20h 56m",
      metric_audio_lbl: "全书音频时长",
      metric_chap_val: "12 个",
      metric_chap_lbl: "完整章节",
      metric_align_val: "8,000+ 句",
      metric_align_lbl: "逐句双语对照",
      metric_free_val: "纯粹无广告",
      metric_free_lbl: "打开就能听",

      // Hero Card Preview
      preview_tag_title: "深入理解 AI Agent",
      preview_tag_author: "李博杰 著",
      preview_live: "AUDIO PREVIEW",
      preview_en: '"The core formula of this book is just one sentence: Agent = LLM + Context + Tools."',
      preview_zh: '“本书的核心公式只有一句话：Agent = LLM + 上下文 + 工具。三者缺一不可。”',
      preview_voice: "🎙️ 朗读声音: Christopher (Neural)",
      preview_cta: "▶ 进入播放器",

      // Featured Book Section
      featured_label: "CURRENT BOOK",
      featured_title: "正在精听的书",
      featured_book_title: "《深入理解 AI Agent：设计原理与工程实践》",
      featured_book_sub: "AI Agents in Depth: Design Principles and Engineering Practice",
      featured_book_summary: "这是前微软亚洲研究院研究员、Pine AI 联合创始人兼首席科学家<b>李博杰</b>写的一本开源技术书。内容非常扎实，系统讲解了 Agent = LLM + 上下文 + 工具 的最小工程实现、Prompt 与上下文工程、MCP 工具协议、代码智能体，以及基于强化学习的模型后训练机制。我自己平时想边走边听，就把它转成了自然英文语音并做好了逐句双语字幕，放在这里和大家一起分享。",
      featured_quick_stat_time: "⏱ 20h 56m 全书",
      featured_quick_stat_cues: "📝 8,052 句中英对齐",
      featured_start_btn: "▶ 从头开始听",
      featured_ch_title: "全书 12 章节选听：",

      // Monograph & Assets Library
      library_label: "RESOURCES & DOWNLOADS",
      library_title: "相关资源与离线下载",
      
      lib_card1_pill: "● 在线播放 · 21h",
      lib_card1_title: "在线双语精听播放器",
      lib_card1_desc: "支持中英逐句滚动高亮、点击字幕跳转音频、单句循环（按 R 键跟读磨耳朵）、语速调节与纯英文/纯中文切换。",
      lib_card1_tag1: "在线听书",
      lib_card1_tag2: "双语字幕",
      lib_card1_tag3: "单句循环",
      lib_card1_btn: "进入网页播放器 →",

      lib_card2_pill: "📖 电子书下载 · 45MB",
      lib_card2_title: "Kindle / 手机离线电子书 (EPUB)",
      lib_card2_desc: "顺便打包整理了中英文排版精良的 EPUB 电子书，公式和代码格式都处理好了，可以放进 Kindle、微信读书或 Apple Books 离线看。",
      lib_card2_tag1: "EPUB",
      lib_card2_tag2: "Kindle 适配",
      lib_card2_tag3: "离线阅读",
      lib_card2_btn_en: "📥 英文版 EPUB (22.9M)",
      lib_card2_btn_zh: "📥 中文版 EPUB (22.5M)",

      lib_card3_pill: "💻 原书 GitHub 仓库",
      lib_card3_title: "原作者开源代码与原文",
      lib_card3_desc: "原书的所有章节 Markdown、架构图 SVG、实验代码和配套讨论都在李博杰老师的 GitHub 仓库，欢迎去给作者点个 Star。",
      lib_card3_tag1: "GitHub 源码",
      lib_card3_tag2: "Python 实验",
      lib_card3_tag3: "架构图 SVG",
      lib_card3_btn: "访问 GitHub 仓库 →",

      lib_card4_pill: "🎵 离线音频与字幕",
      lib_card4_title: "离线 MP3 音频与字幕文件",
      lib_card4_desc: "网站根目录下备齐了 12 个章节的独立 MP3 音频以及对应的 .vtt / .srt 字幕，可以下载到手机本地播放器随身听。",
      lib_card4_tag1: "MP3 音频",
      lib_card4_tag2: "SRT/VTT 字幕",
      lib_card4_tag3: "通勤随身听",
      lib_card4_btn: "在播放器中选听各章节 →",

      lib_card5_pill: "✨ 交流与反馈",
      lib_card5_title: "勘误反馈与想听的书",
      lib_card5_desc: "如果听书时发现字幕错别字、或者有其他你觉得很赞的开源技术书希望做成有声双语版，欢迎提 issue 聊聊。",
      lib_card5_tag1: "错别字反馈",
      lib_card5_tag2: "新书推荐",
      lib_card5_tag3: "一起交流",
      lib_card5_btn: "前往 GitHub Issues 交流 →",

      // Platform Features
      features_label: "HOW IT WORKS",
      features_title: "平时听书常用的小功能",
      f1_title: "自然流畅的英文发音",
      f1_desc: "挑选了发音沉稳、停顿自然的英文语音模型，听起来就像在听一场清晰的技术播客分享。",
      f2_title: "逐句中英对照，随时切换",
      f2_desc: "每一句英文都对应准确的中文翻译。可以随时切换为【双语对照】、【纯英文磨耳朵】或【纯中文速览】。",
      f3_title: "单句循环跟读（按快捷键 R）",
      f3_desc: "遇到生疏的长难句或专业术语，按键盘 R 键或点击循环图标，就会反复播放这单句，方便反复听清和跟读。",
      f4_title: "纯粹干净，点开即听",
      f4_desc: "没有注册登录、没有付费墙、没有广告弹窗。静态网页加载迅速，打开浏览器就能随时听。",

      // Sponsorship
      sponsor_title: "☕ 请喝杯咖啡",
      sponsor_desc: "做这套 21 小时的有声书花了不少整理时间、算力与语音合成成本。如果这个小站对你的技术学习或英文听力有一点点帮助，欢迎请喝杯咖啡支持一下日常维护；也强烈推荐去原作者李博杰老师的 GitHub 仓库给原书点个 Star！",
      sponsor_scan_hint: "微信 / 支付宝扫一扫 · 随意随心，感谢支持",
      sponsor_star_btn: "⭐ 原书 GitHub Star 支持",
      sponsor_btn: "💖 GitHub Sponsors",

      // Footer
      footer_title: "TechVoice · 开源技术书精听小站",
      footer_desc: "© 2026. 内容源自李博杰《深入浅出 AI Agent》。本站为个人学习整理分享，代码与音频遵循开源共享许可。",
      footer_cta: "打开播放器 →",

      // Reader UI labels
      reader_back_lib: "返回首页",
      reader_view_bilingual: "中英双语",
      reader_view_en: "纯英文",
      reader_view_zh: "纯中文",
      reader_sponsor_btn: "☕ 请喝咖啡",
      reader_sponsor_title: "请喝杯咖啡",
      reader_sponsor_sub: "随意随心 · 支持日常维护",
      reader_about_btn: "关于本书",
      reader_autoscroll_on: "自动跟随: ON",
      reader_autoscroll_off: "自动跟随: OFF",
      reader_cache_btn: "缓存本章",
      reader_cache_caching: "缓存中",
      reader_cache_cached: "已离线",
      reader_cache_title: "离线缓存当前章节音频到浏览器（断网可听）",
      reader_cache_clear_confirm: "当前章节已离线缓存。要清除此章节缓存以释放手机空间吗？",
      reader_cache_cleared_toast: "本章缓存已清除",
      reader_cache_success_toast: "离线缓存成功！断网也能顺畅收听",
      reader_cache_offline_badge: "已离线",
      reader_repeat_on: "单句循环: ON",
      reader_repeat_off: "单句循环: OFF",
      reader_repeat_tip: "单句循环跟读 (快捷键: R)",
      reader_prev_cue: "上一句 (快捷键: ↑)",
      reader_next_cue: "下一句 (快捷键: ↓)",
      reader_rewind: "快退 5 秒 (快捷键: ←)",
      reader_forward: "快进 5 秒 (快捷键: →)",
      reader_play_tip: "播放 (快捷键: Space)",
      reader_pause_tip: "暂停 (快捷键: Space)",
      reader_speed_title: "播放速度",
      reader_cue_repeat_tip: "单句循环 (Repeat sentence)",
      reader_shortcuts_title: "⌨️ 键盘快捷键指南",
      reader_banner_title: "☕ 觉得这个听书小站有帮助？",
      reader_banner_desc: "全书 12 章节、21 小时中英双语音频由个人学习整理制作。如果对你有帮助，欢迎请喝杯咖啡支持日常维护！",
      reader_banner_btn: "☕ 请喝杯咖啡",

      // Reader Modals
      reader_modal_sponsor_title: "☕ 请喝杯咖啡",
      reader_modal_sponsor_desc: "你好！这个小站最初是我自己想边散步通勤边听开源技术书、顺便练练英文听力而整理的。全书 12 个章节、21 小时的音频与 8,000+ 句中英字幕均已制作完成并开源分享。如果它确实对你的学习有所帮助，欢迎随意赞赏请喝杯咖啡，支持一下服务器与语音合成的开销。也非常感谢你去原作者的 GitHub 给原书点颗 Star 支持作者！",
      reader_modal_sponsor_scan: "💡 微信 / 支付宝扫码 · 随意随心，感谢支持！",

      reader_modal_about_title: "📖 关于《深入浅出 AI Agent》",
      reader_modal_about_author_title: "原书作者简介",
      reader_modal_about_author_bio: "<b>李博杰 (Bojie Li)</b>：Pine AI 联合创始人兼首席科学家，中国科学院大学兼职讲师，前微软亚洲研究院首席研究员。在计算机系统与分布式 AI 领域有深入研究，本书是他总结的关于现代 AI Agent 架构与工程实践的开源力作。",
      reader_modal_about_formula_title: "全书核心公式",
      reader_modal_about_formula_body: "Agent = LLM (大脑) + 上下文 (眼睛) + 工具 (手脚)<br>Agent = Model + Harness (约束 + 验证 + 纠错)",
      reader_modal_about_res_title: "配套资源与下载",
      reader_modal_about_res_repo: "<b>原书 GitHub 仓库</b>：<a href=\"https://github.com/bojieli/ai-agent-book\" target=\"_blank\">github.com/bojieli/ai-agent-book</a>",
      reader_modal_about_res_en_epub: "<b>英文版电子书</b>：<a href=\"AI-Agents-in-Depth-en-Kindle-Inline.epub\" download>AI-Agents-in-Depth-en-Kindle-Inline.epub (22.9MB)</a>",
      reader_modal_about_res_zh_epub: "<b>中文版电子书</b>：<a href=\"AI-Agent-Book-zh-CN-Kindle-Inline.epub\" download>AI-Agent-Book-zh-CN-Kindle-Inline.epub (22.5MB)</a>",
      reader_modal_about_res_offline: "<b>离线音频与字幕</b>：根目录下的 <code>.mp3</code> 和 <code>.srt</code> / <code>.vtt</code> 文件可直接导入手机播放器离线收听。",

      reader_modal_sc_play: "播放 / 暂停",
      reader_modal_sc_seek: "快退 5 秒 / 快进 5 秒",
      reader_modal_sc_cues: "跳转到上一句 / 下一句",
      reader_modal_sc_repeat: "单句循环跟读（按 R 键）",
      reader_modal_sc_mode: "切换显示模式（双语 / 纯英文 / 纯中文）",
      reader_modal_sc_close: "关闭当前弹窗"
    },
    en: {
      // Header & Navigation
      brand_sub: "Open Tech Audio",
      brand_badge: "Listen & Learn",
      nav_featured: "Current Book",
      nav_library: "Resources",
      nav_features: "Features",
      nav_sponsor: "Coffee",
      nav_player_cta: "Open Player →",
      lang_switch_label: "中文",
      lang_switch_title: "Switch to Chinese / 切换至中文",

      // Hero Section
      hero_badge: "Personal project shared for everyone · 21h complete audio",
      hero_title: 'Listen to Open Tech Books<br><span class="gradient-text">Bilingual & Sentence-Aligned</span>',
      hero_desc: "A simple place to listen to open-source technical books with sentence-by-sentence bilingual subtitles. Good for commuting, walking, tuning your technical English ear, and learning system design.",
      hero_btn_listen: '🎧 Listen to "AI Agents in Depth" (21h)',
      hero_btn_explore: "📚 E-Books & Resources",
      metric_audio_val: "20h 56m",
      metric_audio_lbl: "Total Audio",
      metric_chap_val: "12 Chapters",
      metric_chap_lbl: "Complete Content",
      metric_align_val: "8,000+ Cues",
      metric_align_lbl: "Sentence-by-Sentence",
      metric_free_val: "100% Free",
      metric_free_lbl: "No Ads, Open Access",

      // Hero Card Preview
      preview_tag_title: "AI Agents in Depth",
      preview_tag_author: "By Bojie Li",
      preview_live: "AUDIO PREVIEW",
      preview_en: '"The core formula of this book is just one sentence: Agent = LLM + Context + Tools."',
      preview_zh: '“本书的核心公式只有一句话：Agent = LLM + 上下文 + 工具。三者缺一不可。”',
      preview_voice: "🎙️ Spoken Voice: Christopher (Neural)",
      preview_cta: "▶ Open Player",

      // Featured Book Section
      featured_label: "CURRENT BOOK",
      featured_title: "Book We're Listening To",
      featured_book_title: '"AI Agents in Depth: Design Principles and Engineering Practice"',
      featured_book_sub: "AI Agents in Depth: Design Principles and Engineering Practice",
      featured_book_summary: "An open-source technical book authored by Dr. Bojie Li, Co-Founder & Chief Scientist of Pine AI and former Principal Researcher at MSRA. It thoroughly covers Agent = LLM + Context + Tools, context engineering, MCP tool protocols, coding agents, and reinforcement learning post-training. Made into an audio edition with aligned bilingual subtitles for personal study and shared with anyone who enjoys audio learning.",
      featured_quick_stat_time: "⏱ 20h 56m Full Book",
      featured_quick_stat_cues: "📝 8,052 Aligned Sentences",
      featured_start_btn: "▶ Start From Beginning",
      featured_ch_title: "Jump to Any Chapter:",

      // Monograph & Assets Library
      library_label: "RESOURCES & DOWNLOADS",
      library_title: "Resources & Offline Downloads",

      lib_card1_pill: "● Web Player · 21h",
      lib_card1_title: "Web Audio Player & Subtitles",
      lib_card1_desc: "Interactive player with synchronized scrolling, click-to-seek, single-sentence looping (press R), speed controls, and language toggle.",
      lib_card1_tag1: "Audio Player",
      lib_card1_tag2: "Bilingual Subs",
      lib_card1_tag3: "Sentence Loop",
      lib_card1_btn: "Open Web Player →",

      lib_card2_pill: "📖 E-Books · 45MB",
      lib_card2_title: "Kindle & E-Book Editions (EPUB)",
      lib_card2_desc: "Carefully formatted EPUB e-books in both English and Chinese. Formulas and code blocks are cleanly rendered, ready for Kindle or your favorite e-reader.",
      lib_card2_tag1: "EPUB",
      lib_card2_tag2: "Kindle Ready",
      lib_card2_tag3: "Offline Reading",
      lib_card2_btn_en: "📥 English EPUB (22.9M)",
      lib_card2_btn_zh: "📥 Chinese EPUB (22.5M)",

      lib_card3_pill: "💻 Original GitHub Repo",
      lib_card3_title: "Original Book Repository & Code",
      lib_card3_desc: "Access the author's original Markdown sources, system architecture diagrams, and companion Python experiment code on GitHub.",
      lib_card3_tag1: "GitHub Source",
      lib_card3_tag2: "Python Code",
      lib_card3_tag3: "SVG Diagrams",
      lib_card3_btn: "Visit GitHub Repo →",

      lib_card4_pill: "🎵 Offline Audio & Subs",
      lib_card4_title: "Offline MP3s & Subtitle Files",
      lib_card4_desc: "All 12 chapters are available as standalone MP3 audio files with matching .vtt and .srt subtitle files for offline listening.",
      lib_card4_tag1: "MP3 Audio",
      lib_card4_tag2: "SRT/VTT Files",
      lib_card4_tag3: "Commute Friendly",
      lib_card4_btn: "Browse Chapters in Player →",

      lib_card5_pill: "✨ Community Feedback",
      lib_card5_title: "Feedback & Book Suggestions",
      lib_card5_desc: "Notice a typo in subtitles, or have an open-source technical book you'd love to listen to? Feel free to open an issue and let us know.",
      lib_card5_tag1: "Typo Fixes",
      lib_card5_tag2: "Book Requests",
      lib_card5_tag3: "Discussions",
      lib_card5_btn: "Open a GitHub Issue →",

      // Platform Features
      features_label: "HOW IT WORKS",
      features_title: "Helpful Listening Features",
      f1_title: "Natural English Voice",
      f1_desc: "Voice synthesized with natural pacing and technical pronunciation, making it comfortable to listen to like an engineering podcast.",
      f2_title: "Sentence-by-Sentence Bilingual Text",
      f2_desc: "Each English sentence is paired with its Chinese translation. Toggle between bilingual, English-only, and Chinese-only views anytime.",
      f3_title: "Single-Sentence Repeat (Key: R)",
      f3_desc: "Hit 'R' or click the loop icon on any card to repeat that single sentence until the technical phrasing is clear.",
      f4_title: "Simple & Clean",
      f4_desc: "No account required, no paywall, no ads. Just a lightweight, fast web player you can open and listen to anytime.",

      // Sponsorship
      sponsor_title: "☕ Buy Me a Coffee",
      sponsor_desc: "Synthesizing and aligning 21 hours of technical audio took quite a bit of time and API cost. If this little site is helpful for your learning or listening practice, feel free to support with a coffee, or give a Star to Bojie Li's original repository on GitHub!",
      sponsor_scan_hint: "WeChat Pay / Alipay · Any support is warmly appreciated!",
      sponsor_star_btn: "⭐ Star Original Book on GitHub",
      sponsor_btn: "💖 GitHub Sponsors",

      // Footer
      footer_title: "TechVoice · Open Tech Book Audio Reader",
      footer_desc: '© 2026. Content based on "AI Agents in Depth" by Bojie Li. Created for personal study and open sharing under open-source licenses.',
      footer_cta: "Open Player →",

      // Reader UI labels
      reader_back_lib: "Back Home",
      reader_view_bilingual: "Bilingual",
      reader_view_en: "English",
      reader_view_zh: "Chinese",
      reader_sponsor_btn: "☕ Coffee",
      reader_sponsor_title: "Buy Me a Coffee",
      reader_sponsor_sub: "Support hosting & maintenance",
      reader_about_btn: "About Book",
      reader_autoscroll_on: "Auto-scroll: ON",
      reader_autoscroll_off: "Auto-scroll: OFF",
      reader_cache_btn: "Cache Chapter",
      reader_cache_caching: "Caching",
      reader_cache_cached: "Offline Ready",
      reader_cache_title: "Cache current chapter audio for offline listening",
      reader_cache_clear_confirm: "Current chapter is cached offline. Clear cache to free storage space?",
      reader_cache_cleared_toast: "Chapter cache cleared",
      reader_cache_success_toast: "Cached successfully! Ready for offline listening.",
      reader_cache_offline_badge: "Offline",
      reader_repeat_on: "Loop: ON",
      reader_repeat_off: "Loop: OFF",
      reader_repeat_tip: "Loop sentence (Key: R)",
      reader_prev_cue: "Previous sentence (Key: ↑)",
      reader_next_cue: "Next sentence (Key: ↓)",
      reader_rewind: "Rewind 5s (Key: ←)",
      reader_forward: "Forward 5s (Key: →)",
      reader_play_tip: "Play (Key: Space)",
      reader_pause_tip: "Pause (Key: Space)",
      reader_speed_title: "Playback Speed",
      reader_cue_repeat_tip: "Repeat sentence (A-B loop)",
      reader_shortcuts_title: "⌨️ Keyboard Shortcuts",
      reader_banner_title: "☕ Finding this audio reader helpful?",
      reader_banner_desc: "This 21-hour audio edition was created for personal study and shared openly. If it helps your learning, feel free to buy a coffee to support maintenance!",
      reader_banner_btn: "☕ Buy Me a Coffee",

      // Reader Modals
      reader_modal_sponsor_title: "☕ Buy Me a Coffee",
      reader_modal_sponsor_desc: "Hi! This project started as a personal tool to listen to open-source tech books on walks and commutes while tuning my English listening skills. All 12 chapters (21 hours) and 8,000+ aligned sentences are completely free and open. If you find it helpful, feel free to buy a coffee to help cover hosting and synthesis costs, and be sure to Star Bojie Li's original repository!",
      reader_modal_sponsor_scan: "💡 Scan with WeChat Pay or Alipay · Any support is warmly appreciated!",

      reader_modal_about_title: '📖 About "AI Agents in Depth"',
      reader_modal_about_author_title: "About the Author",
      reader_modal_about_author_bio: "<b>Dr. Bojie Li</b>: Co-Founder & Chief Scientist of Pine AI, adjunct lecturer at UCAS, and former Principal Researcher at Microsoft Research Asia. A veteran systems and distributed AI researcher, this book represents his comprehensive open-source work on modern AI Agent architectures.",
      reader_modal_about_formula_title: "Core Architectural Formulas",
      reader_modal_about_formula_body: "Agent = LLM (Brain) + Context (Eyes) + Tools (Hands & Feet)<br>Agent = Model + Harness (Constraint + Verification + Error Correction)",
      reader_modal_about_res_title: "Companion Resources & Links",
      reader_modal_about_res_repo: "<b>Official GitHub Repository</b>: <a href=\"https://github.com/bojieli/ai-agent-book\" target=\"_blank\">github.com/bojieli/ai-agent-book</a>",
      reader_modal_about_res_en_epub: "<b>English EPUB</b>: <a href=\"AI-Agents-in-Depth-en-Kindle-Inline.epub\" download>AI-Agents-in-Depth-en-Kindle-Inline.epub (22.9MB)</a>",
      reader_modal_about_res_zh_epub: "<b>Chinese EPUB</b>: <a href=\"AI-Agent-Book-zh-CN-Kindle-Inline.epub\" download>AI-Agent-Book-zh-CN-Kindle-Inline.epub (22.5MB)</a>",
      reader_modal_about_res_offline: "<b>Offline Audio & Subtitles</b>: Standalone <code>.mp3</code> and <code>.srt</code> / <code>.vtt</code> files in the root folder can be imported into your phone player for offline listening.",

      reader_modal_sc_play: "Play / Pause",
      reader_modal_sc_seek: "Rewind 5s / Forward 5s",
      reader_modal_sc_cues: "Previous / Next Sentence",
      reader_modal_sc_repeat: "Repeat Sentence (Press R)",
      reader_modal_sc_mode: "Cycle View Mode (Bilingual / English / Chinese)",
      reader_modal_sc_close: "Close Modal"
    }
  };

  function getLang() {
    try {
      const urlParam = new URLSearchParams(window.location.search).get('lang');
      if (urlParam === 'zh' || urlParam === 'en') {
        localStorage.setItem('techvoice_ui_lang', urlParam);
        return urlParam;
      }
      return localStorage.getItem('techvoice_ui_lang') || 'zh';
    } catch (e) {
      return 'zh';
    }
  }

  function setLang(lang) {
    if (lang !== 'zh' && lang !== 'en') lang = 'zh';
    localStorage.setItem('techvoice_ui_lang', lang);
    document.documentElement.setAttribute('lang', lang === 'zh' ? 'zh-CN' : 'en');
    
    // Update all text nodes with data-i18n
    const dict = I18N_DATA[lang] || I18N_DATA.zh;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });

    // Update all HTML nodes with data-i18n-html
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (dict[key]) {
        el.innerHTML = dict[key];
      }
    });

    // Update title / placeholder attributes with data-i18n-title
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (dict[key]) {
        el.setAttribute('title', dict[key]);
      }
    });

    // Update switcher button label
    const langLabelEl = document.getElementById('lang-switch-text');
    if (langLabelEl) {
      langLabelEl.textContent = dict.lang_switch_label;
    }
    const langBtn = document.getElementById('btn-lang-toggle');
    if (langBtn) {
      langBtn.setAttribute('title', dict.lang_switch_title);
    }

    // Dispatch global custom event for components
    window.dispatchEvent(new CustomEvent('langchange', { detail: { lang, dict } }));
  }

  function toggleLang() {
    const current = getLang();
    const next = current === 'zh' ? 'en' : 'zh';
    setLang(next);
  }

  // Export globally
  window.TechVoiceI18N = {
    data: I18N_DATA,
    getLang,
    setLang,
    toggleLang
  };

  // Auto initialize on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', () => {
    setLang(getLang());
    const langBtn = document.getElementById('btn-lang-toggle');
    if (langBtn) {
      langBtn.addEventListener('click', toggleLang);
    }
  });
})();
