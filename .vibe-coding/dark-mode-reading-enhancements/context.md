# Context: dark-mode-reading-enhancements (黑夜模式阅读体验全面升级)

## 任务类型
feature（用户体验与视觉调优特性）

## 项目结构
- `css/style.css`: 播放器与精听阅读器核心样式表（含 `:root` 默认暗色模式、`[data-theme="light"]`、阅读容器、字幕卡片、跟读徽标、悬浮胶囊等）。
- `css/landing.css`: 首页 Landing Page 样式表（含默认暗色与浅色主题）。
- `reader.html`: 精听阅读器页面（含 `#transcript-list` 字幕容器、`#btn-resume-cue` 回到播放处胶囊）。
- `index.html`: 首页图书展示与导流。
- `js/app.js`: 核心交互与状态机（`highlightCue`、`seekToCue`、`isUserDetached`、`EchoController` 等）。
- `sw.js`: Service Worker 离线缓存控制器（需升级至 `v7` 保证即时下发）。
- `tests/`: 自动化测试集（共 13 套测试，全部基于 Node.js 原生断言与轻量 DOM mock）。

## 代码风格
- 原生 CSS3 变量系统驱动主题切换（`:root` 为深色基准，`[data-theme="light"]` 为浅色覆盖）。
- 模块化 JavaScript (ES6+ IIFE)，严格无构建打包工具（Zero-build toolchain）。
- 遵循 WCAG 2.1 AAA/AA 可访问性与暗光阅读防眩光标准（Linear & Apple Books 工程级暗光阅读美学）。

## 数据层
- N/A（纯前端界面与视觉排版渲染，无后端数据库表变更）。

## API 设计
- N/A（无外部网络 API 变更）。

## 业务逻辑
- `highlightCue(cueId, shouldScroll)`: 句子激活排他高亮逻辑，负责切换 DOM 上的 `.active` 类名。
- `EchoController`: 史嘉琳回音跟读模式状态机（控制听、读、巩固、回音 4 步状态与对应的 `.echo-step-*` 类名）。
- `updateResumeCueUI()` / `resumeActiveCueTracking()`: 智能防打扰阅读脱离状态机与悬浮胶囊显隐控制。

## 构建与部署
- 构建: 静态托管，无打包工具。
- 部署: 自动化 Git 推送至 GitHub `origin/master`，触发 CDN / Pages 实时构建部署。
- 约束: 绝不破坏白日模式（`[data-theme="light"]`）刚刚发布的微暖纸感温润配色；保持纯原生。

## 测试方式
- 全量自动化测试命令: `for f in tests/test_*.js; do node "$f" || exit 1; done`
- 包含 `test_reader_friendly.js`, `test_echo_mode.js`, `test_sw_and_error.js` 等 13 个独立测试套件。

## 可复用的现有实现
- `css/style.css` 已建立统一的 CSS 变量系统（`--text-primary`, `--text-secondary`, `--bg-app`, `--bg-card` 等）。
- `tests/test_helpers.js` 完备的 DOM/Audio/Mock 环境，可直接扩展属性用于单测校验。

## 风险点（初判）
1. **暗色文本对比度平衡**: 非激活英文若降得过暗会影响未播放句子的预读，需精确平衡在 `#cbd5e1`（Slate-300，约 10:1 对比度），既不刺眼又清晰可辨。
2. **白天模式隔离**: 新增的暗色特化规则（如深海天幕阴影、当前句中文提亮）必须使用 `:root:not([data-theme="light"])` 或默认深色选择器，绝不可覆盖已调试好的浅色规则。
3. **缓存陈旧**: 用户浏览器可能缓存了旧版 CSS，需同步升级 `sw.js` 缓存版本为 `v7`。
