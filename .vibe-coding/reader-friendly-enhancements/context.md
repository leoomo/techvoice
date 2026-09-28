# Context: reader-friendly-enhancements

## 任务类型
feature (体验增强 / UI/UX 深度打磨)

## 项目结构
- `index.html`: TechVoice 首页 / 图书库精选展台
- `reader.html`: 沉浸式双语有声阅读器主界面
- `css/style.css`: 阅读器核心设计系统（深浅色变量、排版、卡片、播放器、Toast 等）
- `css/landing.css`: 首页设计系统（Bento Grid、书本展示卡片、响应式等）
- `js/app.js`: 核心交互引擎（音频控制、自动跟随、高亮、跟读三步循环、快捷键、缓存管理）
- `js/i18n.js`: 中英双语国际化引擎与字典
- `sw.js`: PWA Service Worker 离线缓存引擎
- `data/chapters_meta.js`: 12 个章节的元数据（时长、标题、字数、小节目录）
- `tests/`: 12 套自动化测试套件（覆盖搜索、跟读、单句循环、断点续播、快捷键等）

## 代码风格与技术栈
- 纯原生前端（Vanilla ES6+ / HTML5 / CSS3），零第三方打包依赖与框架，极致秒开与轻量。
- CSS 遵循 Modern Design System（Geist 字体、Tabular-nums 数字防抖、CSS 变量分层）。
- 状态管理通过 `app.js` 的 `state` 统一维护，并同步至 `localStorage`。
- 多语言通过 DOM 标签属性 `data-i18n` 自动化同步。

## 业务逻辑与调用关系
1. **当前高亮与滚屏**:
   - `highlightCue(cueId, shouldScroll = true)`: 每当时间戳匹配到当前句，激活 DOM 元素 `.cue-card.active`。若 `state.autoScroll === true`，调用 `cur.scrollIntoView({ behavior: 'smooth', block: 'center' })`。
   - **痛点现状**: 缺乏对用户主动滚动的识别，只要播放中就会每 3~5 秒粗暴拉扯滚动条，打断用户阅读。
2. **跟读循环状态 (EchoController)**:
   - 3 个阶段：`LISTEN` -> `SHADOW` -> `REVIEW`。
   - 对应样式卡片 `.echo-step-listening`, `.echo-step-shadowing`, `.echo-step-reviewing`。
   - **痛点现状**: 徽标颜色在浅色白天模式下对比度过低（1.6:1 ~ 1.8:1），发飘发白。
3. **色彩变量系统**:
   - `style.css` 与 `landing.css` 分别维护 `:root`（默认深色）和 `[data-theme="light"]`（白天模式）。
   - **痛点现状**: 缺少 `--accent`, `--bg-surface`, `--text-faint`, `--bg-hover` 等必要变量；白天模式使用了高反差纯白配冷蓝灰，导致长时间注视刺眼；首页书本封面硬编码了白色文字引发隐形缺陷。

## 构建与部署
- 纯静态应用，无需 Webpack/Vite 编译打包，直接推送到 GitHub 与 Vercel 生产分支。
- 部署命令: `vercel --prod`
- 约束: 零外部依赖，严格保证离线可访问性与跨端一致性。

## 测试方式
- 全量自动化测试命令: `for f in tests/test_*.js; do node "$f" || exit 1; done`
- 单测命令: `node tests/<test_file>.js`
- 现存测试套件覆盖率良好（12 套全绿）。

## 可复用的现有实现
- `showToast(msg, options)`: 封装优雅的交互提示。
- `TechVoiceI18N`: 双语字典与语言切换。
- `updateAutoScrollUI()`: 自动跟随状态切换按钮。
- `syncBoundaryMonitor()`: 高频播放监听。

## 风险点（初判）
1. **滚动冲突与死循环**: 监听滚动事件时必须区分是“用户手动 wheel/touch”还是“代码触发的 scrollIntoView”，否则会自动把程序跟随误判为用户拖动。
2. **浮动回到播放处按钮的 z-index 与布局冲突**: 浮动药丸在移动端不能遮挡底栏或章节跳转导航。
3. **颜色修改向后兼容**: 确保深色模式原有质感不受任何负面影响，所有日间改进严格限定在 `[data-theme="light"]` 或语义变量统一补齐。
