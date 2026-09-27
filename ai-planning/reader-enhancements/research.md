# Research: 阅读器功能增强与全流程体验优化

## 1. 现有代码现状分析

### 1.1 播放器状态管理与持久化 (js/app.js)
- 当前 `state` 包含 `currentChapterKey`、`playbackRate`、`theme`、`autoScroll`、`viewMode`。
- `localStorage` 保存了 `ai_agent_current_chapter`，但**没有记录每章已播放的具体秒数 (`currentTime`)**。
- `audio.addEventListener('timeupdate', ...)` 已在运行，每秒多次更新界面，但没有节流写回进度。
- 风险点：频繁写入 localStorage 会造成不必要的 I/O 开销，需要做防抖/节流（例如每 2 秒一次，或在 pause/beforeunload 时写入）。

### 1.2 系统级媒体控制 (MediaSession API)
- 目前 `navigator.mediaSession` 完全未接入。
- 移动端（iOS Safari / Android Chrome）在锁屏后只能显示普通的浏览器默认空白控制，没有歌曲名、专辑名、封面、小节标题，且蓝牙耳机（AirPods等）的快进/快退/切句事件无法触发。
- 当前已有资产：`assets/icon.svg` 可作为封面，章节中英标题、小节标题在 `CHAPTERS_META` 中均有完整元数据。

### 1.3 进度条与流式缓冲 (Seek Bar & Buffering)
- 当前 `seekBar` 仅为一个单一的 `<input type="range">`。
- HTML5 Audio 原生提供了 `audio.buffered` (TimeRanges 对象)。
- 在 CDN 串流时，用户无法直观看到已预缓冲的音频范围。

### 1.4 字幕数据与全文检索能力
- 全书共 12 章，8,052 个 Cue，每个 Cue 包含 `id`, `start`, `end`, `en`, `zh`。
- 元数据在 `data/chapters_meta.js` 和各自 `data/chapter*.js` 中。
- 8,000 多条文本若在内存中做中英文正则或分词检索，总字符量约 1.5MB，在现代浏览器 JavaScript 引擎中过滤耗时在 5~15ms 以内，性能极其充裕，完全可以实现无需第三方依赖的纯客户端秒级即时搜索。

### 1.5 章节数据静态加载与按需加载
- `reader.html` 目前在底部一次性加载了 12 个章节数据 JS 文件，合计约 2.8MB。
- 每个文件定义了 `window.CHAPTER_DATA_{key}`。
- 如果改为按需异步加载（`loadScript` 或 `fetch`），首屏初始化仅需加载当前选中的章节数据（约 150KB~300KB），其余章节切换时按需拉取并缓存。

---

## 2. 潜在技术风险与设计决策

1. **断点续播时机与自动播放策略**：
   - 浏览器通常阻止无交互的 audio 自动 play，但直接设置 `audio.currentTime = savedTime` 是允许的。
   - 策略：加载章节时，若检测到上次记录时间 > 5 秒且 < 总时长 - 10 秒，自动跳转进度并弹出小 Toast 提示：“已恢复至上次播放进度 xx:xx”，用户点击 Toast 也可一键“从头播放”。
2. **MediaSession 兼容性**：
   - 需要做 `'mediaSession' in navigator` 特性检测，确保桌面端或旧浏览器不报错。
3. **单句分享深链接**：
   - URL hash 格式如 `#chapter2?t=154.2` 或 `#chapter2&cue=45`，解析时兼容原有 `#chapter2` 格式。
