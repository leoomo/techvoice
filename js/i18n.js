/**
 * TechVoice / OpenAudio Internationalization (i18n) Engine
 * Rigorously reviewed sentence-by-sentence bilingual dictionary and dispatcher.
 */

(function () {
  'use strict';

  const I18N_DATA = {
    zh: {
      // Header & Navigation
      brand_sub: "开源技术专著精听平台",
      brand_badge: "Open Audio",
      nav_featured: "旗舰专著",
      nav_library: "专著书库",
      nav_features: "平台特性",
      nav_sponsor: "赞赏支持",
      nav_player_cta: "进入听书台 →",
      lang_switch_label: "EN",
      lang_switch_title: "Switch to English / 切换至英文",

      // Hero Section
      hero_badge: "2026 旗舰首发 · 全书 21 小时高清有声已上线",
      hero_title: '硬核开源技术专著<br><span class="gradient-text">中英双语精听平台</span>',
      hero_desc: "我们将全球顶尖的开源计算机与 AI 专著，打造成原声级神经美音朗读与毫秒级中英双语对照字幕。一边攻克前沿系统架构原理，一边攻克工程英语听力。",
      hero_btn_listen: "🎧 立即收听《深入理解 AI Agent》 (21h)",
      hero_btn_explore: "📚 专著矩阵与配套资源",
      metric_audio_val: "20h 56m",
      metric_audio_lbl: "全书精校音频",
      metric_chap_val: "12 个",
      metric_chap_lbl: "核心架构章节",
      metric_align_val: "100%",
      metric_align_lbl: "句级双语对齐",
      metric_free_val: "零广告",
      metric_free_lbl: "永久开源免费",

      // Hero Card Preview
      preview_tag_title: "深入理解 AI Agent",
      preview_tag_author: "李博杰 著 • Pine AI 首席科学家",
      preview_live: "LIVE AUDIO",
      preview_en: '"The core formula of this book is just one sentence: Agent = LLM + Context + Tools."',
      preview_zh: '“本书的核心公式只有一句话：Agent = LLM + 上下文 + 工具。三者缺一不可。”',
      preview_voice: "🎙️ 神经美音: en-US-ChristopherNeural",
      preview_cta: "▶ 开启播放器",

      // Featured Book Section
      featured_label: "FEATURED FLAGSHIP MONOGRAPH",
      featured_title: "首发旗舰开源巨献",
      featured_book_title: "《深入理解 AI Agent：设计原理与工程实践》",
      featured_book_sub: "AI Agents in Depth: Design Principles and Engineering Practice",
      featured_book_summary: "由 Pine AI 联合创始人兼首席科学家、前微软亚洲研究院首席研究员<b>李博杰</b>所著。不同于堆砌开源 Demo 的泛化介绍，全书以工程高可靠与真实金融/法律级业务为切入点，系统拆解 Model 与 Harness 边界、KV Cache 与上下文压缩、MCP 工具体系、Coding Agent 代码自举，以及基于强化学习（RL）的模型后训练机制。",
      featured_quick_stat_time: "⏱ 20h 56m 全本",
      featured_quick_stat_cues: "📝 5,800+ 句对齐",
      featured_start_btn: "▶ 开始收听全书",
      featured_ch_title: "全书 12 章节直达选听：",

      // Monograph & Assets Library
      library_label: "OPEN MONOGRAPH LIBRARY & ASSETS",
      library_title: "专著内容矩阵与全套交付资产",
      
      lib_card1_pill: "● 已完结上线 · 21h",
      lib_card1_title: "深入理解 AI Agent：全本双语精听台",
      lib_card1_desc: "李博杰 著。12 个完整章节、5,800+ 句毫秒级中英双语对齐，原声级神经美音与 A-B 句单句循环复读。",
      lib_card1_tag1: "AI Agent",
      lib_card1_tag2: "强化学习",
      lib_card1_tag3: "MCP 架构",
      lib_card1_btn: "进入在线播放器 →",

      lib_card2_pill: "📖 现已支持直接下载 · 45MB",
      lib_card2_title: "Kindle & 移动端离线精排电子书 (EPUB)",
      lib_card2_desc: "原生支持 Kindle、Apple Books 与微信读书。公式清晰渲染，排版媲美实体出版物，支持离线自由阅读。",
      lib_card2_tag1: "EPUB",
      lib_card2_tag2: "Kindle 适配",
      lib_card2_tag3: "公式高清排版",
      lib_card2_btn_en: "📥 英文精排 EPUB (22.9M)",
      lib_card2_btn_zh: "📥 中文精编 EPUB (22.5M)",

      lib_card3_pill: "💻 GitHub 开源同步",
      lib_card3_title: "配套开源代码仓库与原著文本",
      lib_card3_desc: "汇聚全书涉及的完整 Python 代码、MCP Server 实现、Agent 提示词工程模板与高清系统架构图。",
      lib_card3_tag1: "GitHub 仓库",
      lib_card3_tag2: "Python 源码",
      lib_card3_tag3: "MCP Server",
      lib_card3_btn: "前往 GitHub 仓库 →",

      lib_card4_pill: "🎵 离线收听包 · 430MB",
      lib_card4_title: "离线高清母带音频与双语字幕包",
      lib_card4_desc: "全套 12 个章节 128kbps 高保真 MP3 与对齐的 .srt / .vtt 毫秒字幕文件，便于导入手机本地播放器随行收听。",
      lib_card4_tag1: "128kbps MP3",
      lib_card4_tag2: "SRT/VTT 字幕",
      lib_card4_tag3: "车载与通勤",
      lib_card4_btn: "在播放器中自由选听 →",

      lib_card5_pill: "✨ 社区共建",
      lib_card5_title: "提交专著勘误与新书选题推荐",
      lib_card5_desc: "本项目所有剧本、口语化转换规则与音频时间戳均已开源。发现字幕错误或希望推荐下一本经典专著？",
      lib_card5_tag1: "开源贡献",
      lib_card5_tag2: "社区讨论",
      lib_card5_tag3: "新书推荐",
      lib_card5_btn: "前往 GitHub Issues 推荐 →",

      // Platform Features
      features_label: "CORE AUDIO PILLARS",
      features_title: "专为技术人打造的听力精读体系",
      f1_title: "顶级神经语音，告别机械播音",
      f1_desc: "全站采用微软技术美音 Christopher 神经模型，语速沉稳、断句考究、充满硅谷架构师的讲座质感。",
      f2_title: "句级中英对照，自由三态切换",
      f2_desc: "每句英文下方配对原书权威中文翻译。支持【双语精听】、【纯英文盲听磨耳朵】与【纯中文速览】一键切换。",
      f3_title: "单句循环复读，攻克长难句",
      f3_desc: "听不清的生僻术语或长定语从句，按下键盘 R 键或点击循环按钮，即刻开启 A-B 句循环，反复磨耳朵。",
      f4_title: "学术级口语化清洗（Normalization）",
      f4_desc: "彻底过滤代码大括号与 Markdown 符号，贝尔曼方程、Pass@k、重要性采样比率等数学公式全部转化为学术自然口语朗读。",

      // Sponsorship
      sponsor_title: "☕ 赞赏支持，助力开源有声学堂持续生长",
      sponsor_desc: "每一部 20 小时级别的深度技术有声书，都经历过复杂的剧本口语化转译、公式音标校对、神经语音流式合成与时间戳精细对齐。你的赞赏将直接用于支付语音合成算力账单与持续维护！",
      sponsor_scan_hint: "微信支付 / 支付宝扫一扫 · 感谢每一位同行者的慷慨支持",
      sponsor_star_btn: "⭐ GitHub Star 鼓励",
      sponsor_btn: "💖 GitHub Sponsors",

      // Footer
      footer_title: "TechVoice · 开源技术硬核听力学堂",
      footer_desc: "© 2026 TechVoice Open Audio. 内容源自《深入理解 AI Agent：设计原理与工程实践》(李博杰 著)。遵循开源共享许可。",
      footer_cta: "进入在线播放器 →",

      // Reader UI labels
      reader_back_lib: "图书库",
      reader_view_bilingual: "中英双语",
      reader_view_en: "纯英文",
      reader_view_zh: "纯中文",
      reader_sponsor_btn: "☕ 赞赏支持",
      reader_sponsor_title: "赞赏支持作者",
      reader_sponsor_sub: "请喝一杯咖啡 · 助力开源",
      reader_about_btn: "关于本书",
      reader_autoscroll_on: "自动跟随: ON",
      reader_autoscroll_off: "自动跟随: OFF",
      reader_repeat_on: "单句循环: ON",
      reader_repeat_off: "单句循环: OFF",
      reader_repeat_tip: "单句循环跟读 (R)",
      reader_prev_cue: "上一句 (↑)",
      reader_next_cue: "下一句 (↓)",
      reader_rewind: "快退 5 秒 (←)",
      reader_forward: "快进 5 秒 (→)",
      reader_play_tip: "播放 (Space)",
      reader_pause_tip: "暂停 (Space)",
      reader_speed_title: "播放速度",
      reader_cue_repeat_tip: "单句循环 (Repeat sentence)",
      reader_shortcuts_title: "⌨️ 键盘快捷键指南",
      reader_banner_title: "☕ 觉得有声听力项目有帮助？",
      reader_banner_desc: "本项目由 AI 辅助与开源社区共同倾力制作，包含 21 小时全书双语有声精读。欢迎赞赏支持鼓励我们持续更新！",
      reader_banner_btn: "💖 赞赏支持作者",

      // Reader Modals
      reader_modal_sponsor_title: "☕ 赞赏支持作者与开源项目",
      reader_modal_sponsor_desc: "感谢你对《深入理解 AI Agent：设计原理与工程实践》开源听力项目的喜爱与支持！本项目包含全书 12 个章节、21 小时的高清神经美音语音合成与中英双语对齐，旨在帮助全球开发者攻克大模型与 Agent 核心工程技术，同时提升专业技术英语听力。",
      reader_modal_sponsor_scan: "💡 微信 / 支付宝扫码支持 · 你的认可将激励我们持续打磨与维护开源社区成果！",

      reader_modal_about_title: "📖 关于《深入理解 AI Agent》",
      reader_modal_about_author_title: "作者简介",
      reader_modal_about_author_bio: "<b>李博杰 (Bojie Li)</b>：Pine AI 联合创始人兼首席科学家，中国科学院大学兼职讲师，曾任微软亚洲研究院首席研究员。在计算机系统与分布式 AI 领域深耕多年，领导构建了真实金融与法律级复杂 Agent 产品 Pine。",
      reader_modal_about_formula_title: "全书核心公式",
      reader_modal_about_formula_body: "Agent = LLM (大脑) + 上下文 (眼睛) + 工具 (手脚)<br>Agent = Model + Harness (约束 + 验证 + 纠错)",
      reader_modal_about_res_title: "配套资源与开源地址",
      reader_modal_about_res_repo: "<b>官方开源代码库</b>：<a href=\"https://github.com/bojieli/ai-agent-book\" target=\"_blank\">github.com/bojieli/ai-agent-book</a>",
      reader_modal_about_res_en_epub: "<b>精校英文电子书</b>：<a href=\"AI-Agents-in-Depth-en-Kindle-Inline.epub\" download>AI-Agents-in-Depth-en-Kindle-Inline.epub (22.9MB)</a>",
      reader_modal_about_res_zh_epub: "<b>精编中文电子书</b>：<a href=\"AI-Agent-Book-zh-CN-Kindle-Inline.epub\" download>AI-Agent-Book-zh-CN-Kindle-Inline.epub (22.5MB)</a>",
      reader_modal_about_res_offline: "<b>离线有声合集</b>：支持将根目录 <code>.mp3</code> 和 <code>.srt</code> / <code>.vtt</code> 文件导入手机本地播放器离线收听。",

      reader_modal_sc_play: "播放 / 暂停",
      reader_modal_sc_seek: "快退 5 秒 / 快进 5 秒",
      reader_modal_sc_cues: "跳转到上一句 / 下一句",
      reader_modal_sc_repeat: "单句循环复读（A-B Loop）",
      reader_modal_sc_mode: "切换显示模式（双语 / 纯英文 / 纯中文）",
      reader_modal_sc_close: "关闭当前弹窗"
    },
    en: {
      // Header & Navigation
      brand_sub: "Open Technical Audiobook Platform",
      brand_badge: "Open Audio",
      nav_featured: "Featured Book",
      nav_library: "Library",
      nav_features: "Features",
      nav_sponsor: "Sponsor",
      nav_player_cta: "Open Player →",
      lang_switch_label: "中文",
      lang_switch_title: "Switch to Chinese / 切换至中文",

      // Hero Section
      hero_badge: "2026 Flagship Release · Full 21 Hours HD Audio Available",
      hero_title: 'Open-Source Technical Monographs<br><span class="gradient-text">Bilingual Audio Studio</span>',
      hero_desc: "We transform world-class open-source computer science and AI monographs into studio-quality neural audio with millisecond-aligned bilingual subtitles. Master deep system architectures while conquering technical English listening.",
      hero_btn_listen: '🎧 Listen to "AI Agents in Depth" (21h)',
      hero_btn_explore: "📚 Explore Library & Resources",
      metric_audio_val: "20h 56m",
      metric_audio_lbl: "Curated Studio Audio",
      metric_chap_val: "12",
      metric_chap_lbl: "Core System Chapters",
      metric_align_val: "100%",
      metric_align_lbl: "Sentence-Level Alignment",
      metric_free_val: "100% Free",
      metric_free_lbl: "Ad-Free & Open Source",

      // Hero Card Preview
      preview_tag_title: "AI Agents in Depth",
      preview_tag_author: "By Bojie Li • Chief Scientist, Pine AI",
      preview_live: "LIVE AUDIO",
      preview_en: '"The core formula of this book is just one sentence: Agent = LLM + Context + Tools."',
      preview_zh: '“本书的核心公式只有一句话：Agent = LLM + 上下文 + 工具。三者缺一不可。”',
      preview_voice: "🎙️ Neural Voice: en-US-ChristopherNeural",
      preview_cta: "▶ Open Player",

      // Featured Book Section
      featured_label: "FEATURED FLAGSHIP MONOGRAPH",
      featured_title: "Flagship Open-Source Monograph",
      featured_book_title: '"AI Agents in Depth: Design Principles and Engineering Practice"',
      featured_book_sub: "AI Agents in Depth: Design Principles and Engineering Practice",
      featured_book_summary: "Authored by Dr. Bojie Li, Co-Founder & Chief Scientist of Pine AI and former Principal Researcher at MSRA. Going far beyond superficial demo wrappers, this book rigorously tackles enterprise-grade reliability in financial and legal production systems. It demystifies Model vs. Harness boundaries, KV cache compression, MCP tool protocols, coding agent self-hosting, and RL post-training.",
      featured_quick_stat_time: "⏱ 20h 56m Full Book",
      featured_quick_stat_cues: "📝 5,800+ Aligned Sentences",
      featured_start_btn: "▶ Start Listening (21h)",
      featured_ch_title: "Jump Directly to Any Chapter:",

      // Monograph & Assets Library
      library_label: "OPEN MONOGRAPH LIBRARY & ASSETS",
      library_title: "Monograph Content Matrix & Deliverables",

      lib_card1_pill: "● Complete & Live · 21h",
      lib_card1_title: "AI Agents in Depth: Bilingual Listening Studio",
      lib_card1_desc: "By Bojie Li. 12 complete chapters, 5,800+ sentences with millisecond alignment, studio-grade neural voice, and A-B sentence looping.",
      lib_card1_tag1: "AI Agents",
      lib_card1_tag2: "Reinforcement Learning",
      lib_card1_tag3: "MCP Architecture",
      lib_card1_btn: "Open Audio Player →",

      lib_card2_pill: "📖 Download Ready · 45MB",
      lib_card2_title: "Kindle & Mobile E-Book Editions (EPUB)",
      lib_card2_desc: "Native support for Kindle, Apple Books, and e-readers. Formulas cleanly rendered with publication-grade typography, fully optimized for offline study.",
      lib_card2_tag1: "EPUB",
      lib_card2_tag2: "Kindle Ready",
      lib_card2_tag3: "Math Typography",
      lib_card2_btn_en: "📥 English EPUB (22.9M)",
      lib_card2_btn_zh: "📥 Chinese EPUB (22.5M)",

      lib_card3_pill: "💻 Companion GitHub Repo",
      lib_card3_title: "Companion Codebase & Original Monograph Text",
      lib_card3_desc: "Access full Python agent implementations, MCP server stubs, prompt engineering templates, and high-resolution architecture diagrams.",
      lib_card3_tag1: "GitHub Repo",
      lib_card3_tag2: "Python Code",
      lib_card3_tag3: "MCP Servers",
      lib_card3_btn: "Visit GitHub Repository →",

      lib_card4_pill: "🎵 Offline Audio Pack · 430MB",
      lib_card4_title: "Offline Studio Master Audio & Subtitle Packages",
      lib_card4_desc: "All 12 chapters in 128kbps high-fidelity MP3 alongside millisecond .srt / .vtt subtitle files, ready for VLC, Apple Podcasts, or car audio.",
      lib_card4_tag1: "128kbps MP3",
      lib_card4_tag2: "SRT / VTT Subtitles",
      lib_card4_tag3: "Commute & Travel",
      lib_card4_btn: "Listen & Stream in Player →",

      lib_card5_pill: "✨ Community Driven",
      lib_card5_title: "Submit Corrections & Recommend New Books",
      lib_card5_desc: "All spoken normalization scripts, prompts, and audio timestamps are 100% open-source. Found a typo or want another classic book produced?",
      lib_card5_tag1: "Open Source",
      lib_card5_tag2: "Discussions",
      lib_card5_tag3: "Book Recommendations",
      lib_card5_btn: "Submit via GitHub Issues →",

      // Platform Features
      features_label: "CORE AUDIO PILLARS",
      features_title: "Engineered for Technical Mastery",
      f1_title: "Studio-Grade Neural Voice",
      f1_desc: "Powered by Microsoft's en-US-ChristopherNeural model, delivering steady cadence, crisp pauses, and the authentic presence of a Silicon Valley tech lecture.",
      f2_title: "Sentence-Level Bilingual Sync",
      f2_desc: "Every English sentence pairs with the author's authoritative Chinese translation. Switch seamlessly between Bilingual study, English-only listening, and Chinese quick-read.",
      f3_title: "A-B Sentence Looping",
      f3_desc: "Hit 'R' or click the loop button to repeat any challenging sentence or technical terminology until your ear locks in.",
      f4_title: "Academic Spoken Normalization",
      f4_desc: "Mathematical formulas, Bellman equations, Pass@k, and code syntax are rigorously converted into natural spoken English for an effortless listening experience.",

      // Sponsorship
      sponsor_title: "☕ Support Open-Source Technical Audiobooks",
      sponsor_desc: "Each 20-hour technical audiobook involves rigorous speech normalization, formula checking, neural audio synthesis, and millisecond subtitle alignment. Your generous support covers GPU synthesis bills and fuels ongoing maintenance!",
      sponsor_scan_hint: "Scan with WeChat Pay or Alipay · Thank you for supporting open-source education!",
      sponsor_star_btn: "⭐ Star on GitHub",
      sponsor_btn: "💖 GitHub Sponsors",

      // Footer
      footer_title: "TechVoice · Open Technical Audiobook Platform",
      footer_desc: '© 2026 TechVoice Open Audio. Content based on "AI Agents in Depth" by Bojie Li. Licensed under Open Source.',
      footer_cta: "Open Audio Player →",

      // Reader UI labels
      reader_back_lib: "Library",
      reader_view_bilingual: "Bilingual",
      reader_view_en: "English",
      reader_view_zh: "Chinese",
      reader_sponsor_btn: "☕ Sponsor",
      reader_sponsor_title: "Sponsor the Author",
      reader_sponsor_sub: "Buy a coffee · Fuel open source",
      reader_about_btn: "About Book",
      reader_autoscroll_on: "Auto-scroll: ON",
      reader_autoscroll_off: "Auto-scroll: OFF",
      reader_repeat_on: "Loop: ON",
      reader_repeat_off: "Loop: OFF",
      reader_repeat_tip: "Loop sentence (R)",
      reader_prev_cue: "Previous sentence (↑)",
      reader_next_cue: "Next sentence (↓)",
      reader_rewind: "Rewind 5s (←)",
      reader_forward: "Forward 5s (→)",
      reader_play_tip: "Play (Space)",
      reader_pause_tip: "Pause (Space)",
      reader_speed_title: "Playback Speed",
      reader_cue_repeat_tip: "Repeat sentence (A-B loop)",
      reader_shortcuts_title: "⌨️ Keyboard Shortcuts",
      reader_banner_title: "☕ Finding this audiobook helpful?",
      reader_banner_desc: "This project features 21 hours of studio-quality neural audio and bilingual alignment. Your sponsorship helps us maintain and create more open-source engineering audiobooks!",
      reader_banner_btn: "💖 Sponsor the Project",

      // Reader Modals
      reader_modal_sponsor_title: "☕ Sponsor the Author & Open-Source Project",
      reader_modal_sponsor_desc: "Thank you for supporting the 'AI Agents in Depth' open-source audiobook project! This platform features 12 complete chapters and 21 hours of studio-grade neural audio with sentence-by-sentence bilingual alignment, designed to help developers worldwide master cutting-edge agent architectures while sharpening technical English listening skills.",
      reader_modal_sponsor_scan: "💡 Scan with WeChat Pay or Alipay · Your support fuels our continuous open-source maintenance!",

      reader_modal_about_title: '📖 About "AI Agents in Depth"',
      reader_modal_about_author_title: "About the Author",
      reader_modal_about_author_bio: "<b>Dr. Bojie Li</b>: Co-Founder & Chief Scientist of Pine AI, adjunct lecturer at University of Chinese Academy of Sciences, and former Principal Researcher at Microsoft Research Asia. With deep expertise in computer systems and distributed AI, he led the development of Pine, a production-grade agent system for enterprise finance and legal workflows.",
      reader_modal_about_formula_title: "Core Architectural Formulas",
      reader_modal_about_formula_body: "Agent = LLM (Brain) + Context (Eyes) + Tools (Hands & Feet)<br>Agent = Model + Harness (Constraint + Verification + Error Correction)",
      reader_modal_about_res_title: "Companion Resources & Links",
      reader_modal_about_res_repo: "<b>Official GitHub Repository</b>: <a href=\"https://github.com/bojieli/ai-agent-book\" target=\"_blank\">github.com/bojieli/ai-agent-book</a>",
      reader_modal_about_res_en_epub: "<b>Curated English EPUB</b>: <a href=\"AI-Agents-in-Depth-en-Kindle-Inline.epub\" download>AI-Agents-in-Depth-en-Kindle-Inline.epub (22.9MB)</a>",
      reader_modal_about_res_zh_epub: "<b>Complete Chinese EPUB</b>: <a href=\"AI-Agent-Book-zh-CN-Kindle-Inline.epub\" download>AI-Agent-Book-zh-CN-Kindle-Inline.epub (22.5MB)</a>",
      reader_modal_about_res_offline: "<b>Offline Audio Master</b>: Import root <code>.mp3</code> and <code>.srt</code> / <code>.vtt</code> files into your mobile audio player for offline commute listening.",

      reader_modal_sc_play: "Play / Pause",
      reader_modal_sc_seek: "Rewind 5s / Forward 5s",
      reader_modal_sc_cues: "Previous / Next Sentence",
      reader_modal_sc_repeat: "Repeat Sentence (A-B Loop)",
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
