# Context: reader-enhancements (有声阅读器全流程体验优化)

## 任务类型
feature

## 项目结构
- `index.html`: 专著主页（Landing Page，含作者介绍、章节选听卡片、资源链接）
- `reader.html`: 双语有声阅读器主体页面（含侧栏章节导航、顶部工具栏、播放器控制条、字幕滚动列表、快捷键/关于弹窗）
- `js/app.js`: 核心单页应用控制器（音频播放、时间轴对齐高亮、单句循环 A-B Loop、自动滚屏、本地偏好、PWA 缓存）
- `js/i18n.js`: 国际化字典引擎（支持 EN / ZH 全界面切换）
- `css/style.css`: 阅读器界面设计系统（深色/浅色主题、响应式断点、现代流线设计）
- `css/landing.css`: 首页样式
- `sw.js`: Service Worker 脚本（含静态资源缓存与 HTTP 206 Range 切片流式拦截）
- `data/chapters_meta.js`: 12 个章节及 293 个子章节的元数据
- `data/chapter*.js`: 各章节对齐字幕数据
- `assets/`: 图标、二维码及矢量资源

## 代码风格
- 原生 Vanilla Web 技术栈（HTML5, CSS3, ES6 JavaScript），无庞杂框架，追求最高性能与零运行时依赖。
- JS 采用 IIFE (`(function () { 'use strict'; ... })();`) 严格模式闭包，统一的 `state` 状态对象。
- CSS 采用 CSS Variables（`--bg-app`, `--text-primary`, `--border-subtle` 等）支撑统一的深浅主题系统。
- 矢量图标全部以内联 SVG 集中管理（`SVGS` 对象）。
- 错误处理采用 `try...catch` + `console.warn`，不阻断主流程。

## 数据层
- 纯客户端前端状态管理，持久化使用浏览器 `localStorage`（键前缀 `ai_agent_*`）与 CacheStorage（`ai-agent-audio-v1`）。
- 字段扩展：
  - `ai_agent_pos_{chapterKey}`: 记录各章节播放秒数。
  - `ai_agent_sleep_timer`: 睡眠定时器状态。

## API 设计
- 音频由 Cloudflare R2 全球 CDN 托管 (`https://pub-6690c174d1244590a46ba7967d1c6f47.r2.dev/`)，支持 HTTP Range 请求。
- 客户端使用标准 Web APIs: HTML5 Audio, MediaSession API, CacheStorage, ServiceWorker, LocalStorage。

## 业务逻辑
- `loadChapter(key, autoPlay)`: 加载指定章节音频与字幕数据。
- `timeupdate` 事件: 驱动播放进度、当前高亮句（`highlightCue`）、子章节定位（`updateActiveSection`）、单句循环判定。
- `renderTranscript(meta)`: 渲染大纲横向栏与字幕卡片。
- `seekToCue(cue)`: 点击卡片跳转毫秒级播放。

## 构建与部署
- 构建: 纯静态资源，无构建步骤，可直接部署在 GitHub Pages、Vercel 或 Cloudflare Pages。
- 约束: 保持零依赖，确保静态页面直接通过 `python3 -m http.server` 或 CDN 托管可用。

## 测试方式
- 静态语法检查: `node -c js/app.js`、`node -c js/i18n.js`、`node -c sw.js`。
- 逻辑功能验证: 编写 Node.js 独立断言测试脚本，验证断点续播数据存储与读取、搜索索引模糊过滤算法、时间戳深链接解析器等纯逻辑单元。
- 浏览器集成与渲染验证: 启动 HTTP 服务，利用 curl/fetch/headless 或本地服务测试静态响应。

## 可复用的现有实现
- `SVGS`: [js/app.js](file:///Users/zen/Documents/antigravity/joyful-einstein/js/app.js#L101-L112) 包含完整的 SVG 矢量定义，易于扩充搜索、定时器、链接等新图标。
- `formatTime(sec)`: [js/app.js](file:///Users/zen/Documents/antigravity/joyful-einstein/js/app.js#L145-L154) 毫秒/秒格式化工具。
- `openModal(modal)` / `closeModal(modal)`: [js/app.js](file:///Users/zen/Documents/antigravity/joyful-einstein/js/app.js#L981-L988) 现成的弹窗层叠控制器。
- `isZhLang()`: [js/app.js](file:///Users/zen/Documents/antigravity/joyful-einstein/js/app.js#L84-L86) 语言判断辅助。
- `window.CHAPTERS_META`: 全书 12 章结构化元数据。

## 风险点（初判）
- 频繁写入 `localStorage` 可能造成微小卡顿，必须对 `timeupdate` 中的进度记录做防抖（2 秒）。
- 搜索 8,052 个句子时需保证 UI 响应流畅，需轻量索引与结果分页截断（如展示前 50 条）。
- 睡眠定时器停止时需要平滑淡出音量，避免声音骤停刺耳。
