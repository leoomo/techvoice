# Implementation Plan: 全站有声阅读器渐进式体验优化

## 目标与原则
按照“一个一个优化、单步验证、风险可控”的原则，将优化任务拆解为四个阶段、十个原子化任务（Atomic Tasks）。每个任务均具备独立的代码提交、测试验证与交付标准。

---

## 阶段划分与任务拆解

### 阶段一：听书核心体验与续播强化 (Core Listening & Continuity)

#### Task 1: 播放进度智能记忆与断点续播 (Playback Auto-Resume)
- **目标**: 自动记录用户在每个章节的最后播放时间戳，下次打开该章时平滑恢复进度。
- **改动范围**:
  - `js/app.js`: 增加 `saveProgressDebounced()`、在 `loadChapter()` 中读取并恢复 `currentTime`、触发微型恢复通知 Toast。
  - `css/style.css`: 增加微型 Toast 样式（带“从头开始”按钮）。
  - `js/i18n.js`: 补充中英双语文案（`toast_resumed`, `btn_restart` 等）。
- **验证方式**: 播放到某一时间后刷新页面，检查是否精准定位至该时间点。

#### Task 2: 系统级 MediaSession API 适配 (Lock Screen & Bluetooth Headset)
- **目标**: 让 iOS/Android 锁屏界面、通知中心、蓝牙耳机（AirPods等）与车载系统显示正确的章节封面、标题与控制。
- **改动范围**:
  - `js/app.js`: 在播放和切章时更新 `navigator.mediaSession.metadata`，注册 `play`, `pause`, `seekbackward`, `seekforward`, `previoustrack`, `nexttrack`。
- **验证方式**: 使用支持 MediaSession 的浏览器模拟/实际播放，查看控制面板元数据与操作响应。

#### Task 3: 音频流式缓冲进度条 (Audio Buffering Bar)
- **目标**: 在 Seek Bar 下层增加一条浅色的真实缓冲进度（Buffer Range Indicator），让用户在网络波动时获知加载进度。
- **改动范围**:
  - `reader.html`: 在 `seek-track-wrapper` 内增加缓冲层容器 `div.seek-buffer-bar`。
  - `js/app.js`: 监听 `audio.addEventListener('progress')` 与 `timeupdate`，更新已缓冲段。
  - `css/style.css`: 增加缓冲进度条样式。
- **验证方式**: 模拟 3G/慢速网络，观察进度条背景是否呈现流式灰色缓冲条。

---

### 阶段二：工具性与知识检索强化 (Search & Utility)

#### Task 4: 全局字幕与架构关键词搜索 (Full-Text Search / Cmd+K)
- **目标**: 读者按下快捷键 `/` 或 `Cmd+K` 或点击搜索图标，可即时对全书/当前章的 8,052 句字幕进行中英关键词检索，结果带时间戳和小节名，点击即定位跳播。
- **改动范围**:
  - `reader.html`: 增加搜索按钮与搜索弹窗模态框 `modal-search`。
  - `js/app.js`: 编写纯客户端轻量搜索逻辑与快捷键监听。
  - `css/style.css`: 搜索弹窗界面与关键词高亮样式。
  - `js/i18n.js`: 搜索相关中英文案。
- **验证方式**: 搜索 "ReAct" 或 "上下文工程"，即时显示命中条目，点击任一条目验证播放器是否秒级跳转。

#### Task 5: 单句时间戳深链接与快速分享 (Deep Linking & Sentence Sharing)
- **目标**: 在单句卡片上提供一键“复制深链接”，支持 URL 携带 `#chapterX?t=xx` 或 `#chapterX&cue=yy`，方便社区交流和笔记引用。
- **改动范围**:
  - `js/app.js`: 扩展 URL Hash 解析支持 `t` 参数；在 cue-card 增加轻量复制链接按钮。
  - `css/style.css`: 复制按钮交互与反馈样式。
- **验证方式**: 复制链接并在新标签页打开，确认直接播放对应句子。

---

### 阶段三：便携听书与交互细节 (Listening Utilities)

#### Task 6: 睡眠定时器 (Sleep Timer / 定时自动关闭)
- **目标**: 支持 15m / 30m / 45m / 播完本章后停止，到时前 10s 音量平滑淡出。
- **改动范围**:
  - `reader.html` & `js/app.js`: 播放控制条增加睡眠定时器下拉/弹层，定时器倒计时逻辑与 Audio Volume Fade-out。
  - `css/style.css`: 睡眠定时器 UI。
- **验证方式**: 设置 10 秒测试定时，验证倒计时结束时音量是否淡出并暂停播放。

#### Task 7: 快捷键扩充与音量控制
- **目标**: 扩充快捷键：`[` / `]` 调速（-0.25x / +0.25x），`M` 静音/取消静音，更新快捷键模态框说明。
- **改动范围**:
  - `js/app.js` & `reader.html`: 快捷键事件分支与帮助弹窗文档。

---

### 阶段四：性能、容错与传播优化 (Performance & SEO)

#### Task 8: 章节数据按需懒加载 (On-Demand Dynamic Loading)
- **目标**: 移除首屏 12 个章节 JS 文件的全量阻塞加载，切章时动态加载对应章节数据，首屏 JS 传输体积骤减 80%+。
- **改动范围**:
  - `reader.html` & `js/app.js`: 改为动态引入并做缓存与下一章预取。
- **验证方式**: Network 面板检查首屏网络请求，验证初次打开体积与切章平滑度。

#### Task 9: 音频网络异常与断网容错友好提示
- **目标**: 捕获 `audio.error` 事件，网络断开或 CDN 失败时弹出重试提示。
- **改动范围**:
  - `js/app.js`: 监听 `error` 事件并展示带重试动作的 Toast。

#### Task 10: 社交分享 Open Graph 卡片与 SEO 元数据
- **目标**: 为 `index.html` 与 `reader.html` 注入规范的 OG / Twitter Card / JSON-LD 结构化数据。
- **改动范围**:
  - `index.html` 与 `reader.html` 的 `<head>` 部分。
