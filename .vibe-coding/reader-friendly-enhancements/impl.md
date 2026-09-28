# 实现文档: reader-friendly-enhancements (阅读友好体验落地方案与测试设计)

## 0. 依据
- PRD: `.vibe-coding/reader-friendly-enhancements/prd.md`
- Context: `.vibe-coding/reader-friendly-enhancements/context.md`

## 1. 数据层与状态机设计
- 全局 `state` 新增字段：
  - `state.isUserDetached`: `boolean`（默认 `false`），标识用户当前是否处于临时脱离自动跟随的自主阅读/浏览状态。
  - `isProgrammaticScrolling`: `boolean`（默认 `false`），程序滚动互斥锁。
- 状态机转移矩阵：
  - `state.autoScroll === false`: 始终处于纯手动模式，`isUserDetached` 保持 `false`，胶囊始终隐藏，任何操作不篡改用户全局偏好。
  - `state.autoScroll === true` 且播放中：
    - `isProgrammaticScrolling === true`: 忽略滚动事件，保持锁定。
    - 检测到用户非程序滚动，且当前激活句离开 `.transcript-container` 局部视口：`isUserDetached = true`，呈现 `#btn-resume-cue` 胶囊，后续 `highlightCue` 暂缓调用 `scrollIntoView`。
    - 用户点击 `#btn-resume-cue` 或手动滑回当前句：平滑滑回当前句，`isUserDetached = false`，隐藏胶囊，恢复自动跟随。
    - 切换章节 / 点击小节导航 / 点击某句直接播放：立即重置 `isUserDetached = false`，隐藏胶囊。

## 2. 前端组件与 DOM 结构
- 在 `reader.html` 中新增浮动导引胶囊：
  ```html
  <button id="btn-resume-cue" class="btn-resume-cue" aria-label="回到当前播放句" data-i18n-title="reader_resume_tracking" title="回到当前播放句">
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polygon points="10 8 16 12 10 16 10 8" fill="currentColor"/>
    </svg>
    <span data-i18n="reader_resume_tracking">回到播放处</span>
  </button>
  ```
- 国际化文案（`js/i18n.js`）：
  - 中文: `reader_resume_tracking: "回到播放处"`
  - 英文: `reader_resume_tracking: "Resume tracking"`

## 3. 样式系统与视觉微调
- **CSS 变量别名桥接与补齐**：
  - `css/style.css` 与 `css/landing.css`：统一注入 `--accent: var(--text-accent)`, `--text-main: var(--text-primary)`, `--text-secondary`, `--bg-surface`, `--text-faint`, `--bg-hover`。
- **出版级纸感调色板**：
  - `[data-theme="light"]` 下：
    - `--bg-app: #fbfbfa;` (温润柔和微暖象牙底)
    - `--text-primary: #1e293b;` (富墨色，12.6:1 舒适防光晕)
    - `--text-secondary: #334155;` (清晰次级灰，8.2:1)
- **书本封面修复**：
  - `css/landing.css`: `.mock-cover-title` 与 `.mock-cover-author` 改为 `var(--text-main)`，消除白字白底 invisible 缺陷。
- **跟读三步徽标日间高对比度**：
  - `[data-theme="light"]` 下为 `.echo-step-listening`, `.echo-step-shadowing`, `.echo-step-reviewing` 配置深天蓝（`#0284c7`）、深林绿（`#15803d`）、暖琥珀（`#b45309`），对比度全量超 4.8:1。
- **阅读排版与行宽**：
  - `.transcript-container` 最大宽度调整为 `820px`（68-72ch）；
  - `.en-text` 设为 `16.5px, line-height: 1.65`；
  - `.zh-text` 设为 `14px, line-height: 1.6`；
  - 全局选区 `::selection` 设为柔和微透天蓝 `rgba(2, 132, 199, 0.18)`。
- **当前播放句马克笔高光**：
  - `[data-theme="light"] .cue-card.active`：背景 `#f0f9ff`，边框 `#bae6fd`，左边界 `3.5px solid #0284c7`，英文文字加深聚焦 `#0369a1`。
- **进度条刻度点**：
  - `[data-theme="light"] .seek-marker` 设为 `rgba(15, 23, 42, 0.2)`，hover 呈现高亮品牌蓝。

## 4. 离线缓存升级
- `sw.js` 缓存版本由 `ai-agent-shell-v5` 升级为 `ai-agent-shell-v6`，自动清理旧缓存。

## 5. 实现步骤（细粒度，每步带 verify 与独立测试）

### Step 7.1 色彩变量系统补齐、封面白字修复与日间出版级护眼配色
- **做什么**：
  - 在 `css/style.css` 和 `css/landing.css` 中补齐缺少变量并建立别名桥接；
  - 调优白天模式背景为 `#fbfbfa`，正文字色为 `#1e293b` 与 `#334155`；
  - 修复首页图书封面白字白底；
  - 修复进度条小节刻度点在白天下隐形的问题；
  - 全局加入 `::selection` 舒适选区。
- **涉及文件**：`css/style.css`, `css/landing.css`
- **测试**：
  - 静态检查 `--accent`, `--bg-surface`, `--text-faint`, `--bg-hover` 在两个样式表均已定义；
  - 验证 `.mock-cover-title` 和 `.mock-cover-author` 未使用硬编码 `#ffffff`。
- **覆盖矩阵**：正常✓ 异常✓ 权限— 空数据— 重复— 边界✓ 旧数据✓ 回归✓
- **verify**: `node -e 'const fs=require("fs"); const s=fs.readFileSync("css/style.css","utf8"); const l=fs.readFileSync("css/landing.css","utf8"); if(!s.includes("--accent:")||!s.includes("--bg-surface:")||l.includes("mock-cover-title {\n  font-size: 18px;\n  font-weight: 750;\n  color: #ffffff;")) process.exit(1); console.log("✅ Step 7.1 variables & cover tokens valid");'`
- **提交信息**: `fix(ui): upgrade light theme to warm paper palette, fix cover white text, and bridge css variables`

### Step 7.2 排版行气优化、朗读句马克笔锚定与跟读三步日间高对比度
- **做什么**：
  - 约束阅读器宽度至 `820px` 黄金行宽；
  - 升级英文字号至 `16.5px / 1.65`，中文字号至 `14px / 1.6`，间距 `6px`；
  - 为 `[data-theme="light"] .cue-card.active` 赋予 Sky-50 高光底色与深天蓝文字聚焦；
  - 为跟读 3 阶段徽标配置日间高对比度文字（听 `#0284c7`，读 `#15803d`，巩固 `#b45309`）。
- **涉及文件**：`css/style.css`
- **测试**：
  - 验证 `.cue-card.echo-step-*` 在 light 模式下具有高对比度颜色重载；
  - 验证 `.transcript-container` 最大宽度为 `820px`。
- **覆盖矩阵**：正常✓ 异常✓ 权限— 空数据— 重复— 边界✓ 旧数据✓ 回归✓
- **verify**: `node -e 'const s=require("fs").readFileSync("css/style.css","utf8"); if(!s.includes("echo-step-listening")||!s.includes("max-width: 820px")||!s.includes("#0284c7")) process.exit(1); console.log("✅ Step 7.2 typography and echo badges valid");'`
- **提交信息**: `style(reader): optimize typography leading, active cue anchor, and daytime echo badge contrast`

### Step 7.3 智能防打扰阅读滚动监听与“回到播放处”胶囊交互逻辑
- **做什么**：
  - 在 `reader.html` 中增加 `#btn-resume-cue` DOM；
  - 在 `js/i18n.js` 中增加 `reader_resume_tracking` 中英文词条；
  - 在 `css/style.css` 中增加 `.btn-resume-cue` 悬浮药丸样式（支持安全边距与弹簧动画）；
  - 在 `js/app.js` 中实现：
    - `isProgrammaticScrolling` 互斥锁；
    - 监听 `.transcript-container` 滚动与用户手势；
    - 视口出界判定（基于 `#transcript-list` 盒模型）；
    - `isUserDetached` 状态转移与胶囊显隐控制；
    - 点击胶囊平滑滚回当前句并恢复跟随；
    - 章节切换与卡片点击时重置状态。
- **涉及文件**：`reader.html`, `css/style.css`, `js/app.js`, `js/i18n.js`
- **测试**：
  - 编写全新测试套件 `tests/test_reader_friendly.js`：
    - 覆盖脱离状态机、程序滚动锁、胶囊显隐、视口判定与重置机制。
- **覆盖矩阵**：正常✓ 异常✓ 权限— 空数据✓ 重复✓ 边界✓ 旧数据✓ 回归✓
- **verify**: `node tests/test_reader_friendly.js`
- **提交信息**: `feat(reader): add smart non-intrusive scroll detection with resume-cue floating pill`

### Step 7.4 Service Worker 升级至 v6 与全量回归门禁
- **做什么**：
  - `sw.js` 缓存名升级为 `ai-agent-shell-v6`；
  - `tests/test_sw_and_error.js` 同步更新预期版本；
  - 运行全量 13 套自动化测试，确保 100% 绿色无回归。
- **涉及文件**：`sw.js`, `tests/test_sw_and_error.js`
- **测试**：全量测试套件
- **覆盖矩阵**：正常✓ 异常✓ 权限✓ 空数据✓ 重复✓ 边界✓ 旧数据✓ 回归✓
- **verify**: `for f in tests/test_*.js; do node "$f" || exit 1; done`
- **提交信息**: `chore(sw): bump shell cache to v6 and verify full test suite`

## 6. 回归清单
- 现有 12 套测试：
  - `test_buffer_calc.js`
  - `test_dataloader.js`
  - `test_deeplink.js`
  - `test_echo_mode.js` (确保三遍跟读循环正常工作)
  - `test_mediasession.js`
  - `test_resume.js`
  - `test_search.js`
  - `test_sentence_repeat.js` (确保单句循环正常工作)
  - `test_seo_meta.js`
  - `test_shortcuts.js`
  - `test_sleep_timer.js`
  - `test_sw_and_error.js`
