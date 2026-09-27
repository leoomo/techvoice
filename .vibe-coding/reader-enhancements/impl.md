# 实现文档: reader-enhancements (有声阅读器全流程体验优化)

## 0. 依据
- PRD: `.vibe-coding/reader-enhancements/prd.md`
- Context: `.vibe-coding/reader-enhancements/context.md`

---

## 1. 测试基建与代码可测性设计 (Test Infrastructure & Export Architecture)

### 1.1 Node.js 运行环境与 Mock 基建 (`tests/test_helpers.js`)
为保证所有单元测试能够直接执行 `require('../js/app.js')` 进行无偏差真实测试，创建轻量化零依赖测试环境辅助工具 `tests/test_helpers.js`：
- **DOM / Window Mock**: 提供最小化的 `document.createElement`, `document.getElementById`, `document.querySelectorAll`, `window.location`, `window.addEventListener`, `window.dispatchEvent`。
- **Storage Mock**: 提供内存版 `localStorage`（`getItem`, `setItem`, `removeItem`, `clear`）。
- **Audio Mock**: 提供具备 `play()`, `pause()`, `load()`, `addEventListener`, `removeEventListener` 的假音频对象。
- **Navigator Mock**: 模拟 `navigator.clipboard` 与 `navigator.mediaSession`。

### 1.2 生产代码模块导出规范
在 `js/app.js` 闭包末尾增加标准导出：
```javascript
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    parseLocationHash,
    escapeHtml,
    highlightMatches,
    SearchEngine,
    SleepTimer,
    showToast,
    DynamicDataLoader,
    formatTime,
    calculateBufferPercent,
    state
  };
}
```

---

## 2. 核心架构与模块纯函数设计

### 2.1 深链接正则与解析模块 (`parseLocationHash(hashStr)`)
- **严谨非贪婪正则模式**:
  `^#?([a-zA-Z0-9]+)(?:-(cue_?[a-zA-Z0-9_]+))?(?:[\?&](?:t|time)=([0-9.]+)|[\?&]cue=([a-zA-Z0-9_-]+))?$`
- **解析逻辑**:
  1. 准确分离 `chapterKey`（如 `chapter2`）、`cueId`（支持 `#chapter2-cue_15` 或 `?cue=cue_15`）、`seekTime`（支持 `?t=150.5`）；
  2. 若 `seekTime` 解析为合规正浮点数，标记 `hasDeepLinkTime = true`；
  3. 优先级策略：若检测到有效的 `seekTime` 或 `cueId`，优先定位至深链接位置，阻止本地断点恢复覆盖，并将当前进度更新为深链接点。

### 2.2 安全高亮渲染纯函数 (`highlightMatches(text, keyword)`)
- **防 XSS 与防破坏实体算法**:
  1. 不直接在转义后的字符串上做正则替换（避免将 `&amp;` 误替换成 `&<mark>amp</mark>;`）；
  2. 在未转义的原始 `text` 上通过 `indexOf` 忽略大小写寻找匹配区间 `[start, end]`；
  3. 若无匹配，直接返回 `escapeHtml(text)`；
  4. 若有匹配，将文本分为 `before`、`match`、`after`，对三段分别执行 `escapeHtml()`，仅对安全转义后的 `match` 片段包裹 `<mark class="search-highlight">`，拼接输出。

### 2.3 动态数据加载器 (`DynamicDataLoader`)
- 维护单例 `loadedChapters = new Set(['introduction'])` 与 `loadingPromises = new Map()`。
- 提供 `loadChapterData(key)` 方法：
  - 若已加载，立即 `resolve()`；
  - 若正在加载，返回现有的 `Promise`；
  - 若未加载，动态创建 `<script src="data/${key}.js">` 插入 DOM，监听 `onload` 与 `onerror`；
  - 维护 `activeToken` 防快速切章竞态。
- 供 `loadChapter()`（切章）与 `SearchEngine`（全书预热）复用共享。

### 2.4 全局字幕检索引擎 (`SearchEngine`)
- 状态机：`isWarmedUp: boolean`, `indexingPromise: Promise`。
- 启动：首屏渲染完成后通过 `requestIdleCallback` 闲时异步调用 `DynamicDataLoader.loadAll()`。
- 查询：输入关键词检索所有已载入章节的 `cues`，返回格式：`{ chapterKey, chapterTitle, cueId, start, timeStr, enHtml, zhHtml }`。
- 状态展示：当部分章节未就绪时，结果底部附带“已检索 N/12 章节，其余章节索引加载中...”。

### 2.5 睡眠定时器控制器 (`SleepTimer`)
- 状态：`activeMode: 'off'|'15'|'30'|'45'|'end_of_chapter'`, `remainingSeconds: number`, `intervalId`。
- 互斥保护：激活时若 `state.repeatCurrent` 为 `true`，强制将其重置为 `false` 并提示已解除 A-B Loop。
- 淡出机制：在 `remainingSeconds <= 10` 时，计算 `fadeStep = originalVolume / 10`，每秒递减，到达 0 时调用 `audio.pause()` 并恢复原始音量。

### 2.6 Service Worker 缓存升级 (`sw.js`)
- 将 `CACHE_SHELL_NAME` 升级为 `'ai-agent-shell-v3'`。
- 更新预缓存列表：移除不再全量加载的 `data/chapter*.js`，仅保留核心外壳与首章 `data/introduction.js`，实现轻量化离线与版本自愈。

---

## 3. 实现步骤（每步带 verify、细化测试用例与提交点）

### Step 7.0 搭建测试基建与代码导出准备
- **做什么**:
  1. 创建 `tests/test_helpers.js`，建立轻量 mock 环境（DOM, LocalStorage, Audio, Navigator）；
  2. 在 `js/app.js` 底部增加 Node.js UMD 模块导出安全判断。
- **涉及文件**: `tests/test_helpers.js`, `js/app.js`
- **具判别力用例设计**:
  - 用例 1: `node -e "require('./tests/test_helpers'); const app = require('./js/app'); console.log(typeof app.formatTime);"` 预期成功输出 `function` 且无任何报错。
  - 用例 2: mock 的 `localStorage` 具有隔离状态，`setItem`/`getItem` 正确工作。
- **verify**: `node -e "require('./tests/test_helpers'); require('./js/app.js'); console.log('Base Test Infra OK');"`
- **提交信息**: `test(infra): set up headless test environment and app module export`

### Step 7.1 播放进度记忆与断点续播 (Playback Auto-Resume) + Toast 系统
- **做什么**:
  1. 实现 `showToast(msg, { actionLabel, onAction, duration })`；
  2. 节流持久化：在 `timeupdate` 中以 2s 节流保存，并在 `pause`、`beforeunload` / `visibilitychange` 中无节流立即保存；
  3. 断点恢复：在 `loadedmetadata` 守卫中若 `5 <= pos <= duration - 5`，恢复 `audio.currentTime` 并弹窗；
  4. 点击“从头开始”：清零并清除 localStorage 记录；
  5. 补充中英词条与样式。
- **涉及文件**: `js/app.js`, `js/i18n.js`, `css/style.css`
- **具判别力用例设计 (`tests/test_resume.js`)**:
  - 用例 1 (正常起跳): 保存 `pos = 120s`，音频 `duration = 1000s`，触发 `loadedmetadata` 时，`currentTime` 恢复为 120，返回 toast 实例。
  - 用例 2 (起始门槛保护): `pos = 3s`（< 5s），不恢复，`currentTime` 保持 0。
  - 用例 3 (尾部听完保护): `pos = 998s`（`duration - 5s` 之外），不恢复，`currentTime` 保持 0。
  - 用例 4 (重置操作): 点击 actionCallback 后，`localStorage` 中的 `ai_agent_pos_chapter1` 被清除，`currentTime` 被设为 0。
  - 用例 5 (多章独立): `chapter1` 与 `chapter2` 的存储相互隔离。
- **verify**: `node tests/test_resume.js && node -c js/app.js`
- **提交信息**: `feat(player): add playback position auto-resume and toast notification`

### Step 7.2 系统级 MediaSession API 适配
- **做什么**:
  1. 实现 `updateMediaSession(meta, state)`，挂载标准 Title, Artist, Album, Artwork；
  2. 注册 `play`, `pause`, `previoustrack`, `nexttrack`, `seekbackward`, `seekforward`, `seekto`；
  3. `setPositionState` 边界防护（防止 duration 为 NaN 或 0 时调用报错）。
- **涉及文件**: `js/app.js`
- **具判别力用例设计 (`tests/test_mediasession.js`)**:
  - 用例 1: 缺少 `navigator.mediaSession` 时，函数优雅降级不抛错。
  - 用例 2: 传入 `meta`，正确设置 `metadata.title` 与 `metadata.album`。
  - 用例 3: 触发 `previoustrack` 与 `nexttrack` 处理器，正确调用上一章/下一章切换。
  - 用例 4: 触发 `seekbackward` / `seekforward`，正确对当前时间做加减 5s 并在 `[0, duration]` 内 clamp。
  - 用例 5: `duration <= 0` 时，安全跳过 `setPositionState`。
- **verify**: `node tests/test_mediasession.js && node -c js/app.js`
- **提交信息**: `feat(player): integrate MediaSession API for lock screen and headset controls`

### Step 7.3 音频流式缓冲指示条 (Audio Buffering Bar)
- **做什么**:
  1. 在 `reader.html` 的 `seek-track-wrapper` 中新增 `<div class="seek-buffer-bar" id="seek-buffer-bar"></div>`；
  2. 在 `css/style.css` 增加样式；
  3. 实现纯函数 `calculateBufferPercent(currentTime, bufferedRanges, duration)`，在 `progress` 与 `timeupdate` 中更新进度条宽度。
- **涉及文件**: `reader.html`, `js/app.js`, `css/style.css`
- **具判别力用例设计 (`tests/test_buffer_calc.js`)**:
  - 用例 1 (空缓冲): `bufferedRanges.length === 0`，返回 `0%`。
  - 用例 2 (当前时间在第一个分段): `[0, 30]`, `duration=100`, `currentTime=10` -> 返回 `30%`。
  - 用例 3 (当前时间在后续分段): `[0, 10], [20, 60]`, `duration=100`, `currentTime=35` -> 返回 `60%`。
  - 用例 4 (超出区间安全 clamp): 结果严格限制在 `[0, 100]`。
- **verify**: `node tests/test_buffer_calc.js && node -c js/app.js`
- **提交信息**: `feat(player): add audio stream buffering progress bar`

### Step 7.4 单句时间戳深链接与快速分享
- **做什么**:
  1. 实现 `parseLocationHash(hash)`（采用非贪婪非截断正则）；
  2. 优先策略：深链接优先于断点续播，并重置本地进度；
  3. 单句卡片增加分享按钮，优先 `clipboard.writeText`，降级 `execCommand('copy')`；
  4. 复制成功呼出 Toast。
- **涉及文件**: `js/app.js`, `css/style.css`, `js/i18n.js`
- **具判别力用例设计 (`tests/test_deeplink.js`)**:
  - 用例 1: `#chapter1` -> `{ chapterKey: 'chapter1', seekTime: null, cueId: null }`。
  - 用例 2: `#chapter2?t=150.5` -> `{ chapterKey: 'chapter2', seekTime: 150.5, cueId: null }`。
  - 用例 3: `#chapter2-cue_15` -> `{ chapterKey: 'chapter2', seekTime: null, cueId: 'cue_15' }`（验证不被贪婪吞没）。
  - 用例 4: `#chapter3?cue=cue_20&t=45` -> `{ chapterKey: 'chapter3', seekTime: 45, cueId: 'cue_20' }`。
  - 用例 5: 越界与异常字符：`#invalid!?` -> 安全回退或解析为 safe token。
- **verify**: `node tests/test_deeplink.js && node -c js/app.js`
- **提交信息**: `feat(reader): support timestamp deep linking and sentence sharing`

### Step 7.5 动态数据加载基础设施 (`DynamicDataLoader`)
- **做什么**:
  1. 封装 `DynamicDataLoader`，维护已加载集合与未完成的加载 Promise；
  2. 实现加载排队与竞态控制（`activeToken`）；
  3. `reader.html` 移除其余 11 个章节的静态 `<script>` 标签，保留 `chapters_meta.js` 与 `introduction.js`。
- **涉及文件**: `reader.html`, `js/app.js`
- **具判别力用例设计 (`tests/test_dataloader.js`)**:
  - 用例 1: 初次请求 `chapter1`，创建对应 script 标签并返回 Promise。
  - 用例 2: 重复请求 `chapter1`，复用已有的加载 Promise，不重复创建 script。
  - 用例 3: 已在内存中的章节直接同步 resolve。
  - 用例 4: 加载失败（onerror）抛出可捕获异常，并允许重试。
- **verify**: `node tests/test_dataloader.js && node -c js/app.js`
- **提交信息**: `perf(loader): dynamic on-demand chapter cue loading with race condition protection`

### Step 7.6 全局字幕与概念关键词安全检索 (Full-Text Search / Cmd+K)
- **做什么**:
  1. 实现 `highlightMatches(text, keyword)` 纯函数（防破坏实体与 XSS）；
  2. 实现 `SearchEngine`：首屏后闲时通过 `DynamicDataLoader` 预热数据；
  3. 在 `reader.html` 添加 `#modal-search` 结构与触发按钮；
  4. 支持模糊搜索匹配、高亮显示与点击跨章跳转播放。
- **涉及文件**: `reader.html`, `js/app.js`, `css/style.css`, `js/i18n.js`
- **具判别力用例设计 (`tests/test_search.js`)**:
  - 用例 1 (XSS 防护): 搜索 `<img>`，高亮输出包含 `&lt;img&gt;`，严禁直接输出原生 HTML 标签。
  - 用例 2 (实体保护): 原文本包含 `A & B`，搜索 `a`，输出 `<mark class="search-highlight">A</mark> &amp; B`，不破坏 `&amp;`。
  - 用例 3 (跨章节检索): 关键词 "Agent"，能够命中多个章节的 cues，并包含准确的 chapterKey 与 start。
  - 用例 4 (空输入/无匹配): 空输入返回空数组；无匹配返回空数组并呈现友好的未找到提示。
  - 用例 5 (截断保护): 超过 50 条结果自动截断为 50 条。
- **verify**: `node tests/test_search.js && node -c js/app.js`
- **提交信息**: `feat(search): implement secure full-text subtitle and concept search`

### Step 7.7 睡眠定时器 (Sleep Timer) 与平滑淡出
- **做什么**:
  1. 控制栏新增睡眠定时器控件与菜单选项；
  2. 实现 `SleepTimer`：15m / 30m / 45m / 播完本章后停止；
  3. A-B Loop 互斥守护；
  4. 最后 10s 线性淡出与自动 pause。
- **涉及文件**: `reader.html`, `js/app.js`, `css/style.css`, `js/i18n.js`
- **具判别力用例设计 (`tests/test_sleep_timer.js`)**:
  - 用例 1: 设置 15 分钟，倒计时正确初始化为 900 秒。
  - 用例 2: 在 A-B Loop 开启时激活定时器，`state.repeatCurrent` 被重置为 false。
  - 用例 3: 模拟倒计时到达 10 秒以内，音量按比例衰减；到达 0 秒，调用 `audio.pause()` 并重置音量。
  - 用例 4: 中途点击“关闭定时”，清除定时器并恢复原始音量。
- **verify**: `node tests/test_sleep_timer.js && node -c js/app.js`
- **提交信息**: `feat(player): add sleep timer with volume fade-out and A-B loop guard`

### Step 7.8 快捷键扩充与输入焦点防冲突隔离
- **做什么**:
  1. `keydown` 监听器增加焦点检查：输入控件聚焦时拦截单字符播放快捷键；
  2. 增加 `[` / `]` 调速（在 0.75x ~ 2.0x 间 clamp）、`M` 快速静音切换、`/` 唤起搜索；
  3. 同步更新快捷键帮助模态框。
- **涉及文件**: `reader.html`, `js/app.js`, `js/i18n.js`
- **具判别力用例设计 (`tests/test_shortcuts.js`)**:
  - 用例 1 (输入拦截): 当 `activeElement` 为 INPUT 时，按 `Space` 或 `M`，不触发播放或静音。
  - 用例 2 (放行快捷键): 当 `activeElement` 为 INPUT 时，按 `Esc` 正确关闭弹窗，按 `Cmd+K` 正确聚焦/切换搜索。
  - 用例 3 (调速范围保护): 当前为 2.0x 时按 `]`，不超过 2.0x；当前为 0.75x 时按 `[`，不低于 0.75x。
  - 用例 4 (静音恢复): 按 `M` 静音，再次按 `M` 恢复此前音量。
- **verify**: `node tests/test_shortcuts.js && node -c js/app.js`
- **提交信息**: `feat(shortcuts): add speed and mute shortcuts with input focus isolation`

### Step 7.9 音频网络异常友好提示与 SW 缓存版本升级
- **做什么**:
  1. 监听 `audio.error` 事件，弹出网络重试 Toast；
  2. 升级 `sw.js`：将 `CACHE_SHELL_NAME` 改为 `'ai-agent-shell-v3'`，更新预缓存列表移除未同步引用的 11 个章节数据，彻底杜绝旧缓存死锁。
- **涉及文件**: `js/app.js`, `sw.js`, `js/i18n.js`
- **具判别力用例设计 (`tests/test_sw_and_error.js`)**:
  - 用例 1: `sw.js` 中 `CACHE_SHELL_NAME` 严格等于 `'ai-agent-shell-v3'`。
  - 用例 2: 预缓存列表中不包含已被懒加载的章节文件，但包含 `data/chapters_meta.js` 与 `data/introduction.js`。
  - 用例 3: 模拟触发 audio error，能够弹出包含重试回调的 Toast。
- **verify**: `node tests/test_sw_and_error.js && node -c sw.js && node -c js/app.js`
- **提交信息**: `fix(sw): bump cache to v3 and add audio error recovery toast`

### Step 7.10 社交分享 Open Graph 卡片与 SEO 元数据
- **做什么**:
  1. `index.html` 与 `reader.html` 增加完整 OG/Twitter Card 标签；
  2. 注入 Schema.org `Audiobook` JSON-LD 结构化数据。
- **涉及文件**: `index.html`, `reader.html`
- **具判别力用例设计 (`tests/test_seo_meta.js`)**:
  - 用例 1: 两个 HTML 文件均包含合规的 `og:title`, `og:description`, `og:image`, `twitter:card`。
  - 用例 2: 提取两个 HTML 中的 `<script type="application/ld+json">` 并执行 `JSON.parse()`，验证 JSON-LD 语法无误且 `@type === "Audiobook"`。
- **verify**: `node tests/test_seo_meta.js`
- **提交信息**: `docs(seo): add Open Graph social cards and Audiobook structured metadata`

---

## 4. 回归测试清单 (Step 6 Guard 全量执行)
1. 正常音频播放/暂停、Seekbar 进度拖拽、快退快进 5s。
2. 章节切换与侧边栏子目录层级高亮联动。
3. 纯英文、双语、纯中文视图模式切换无布局错乱。
4. PWA Service Worker 离线缓存当前章音频与切片 Range 播放。
5. 移动端抽屉折叠、遮罩层点击关闭无阻滞。
