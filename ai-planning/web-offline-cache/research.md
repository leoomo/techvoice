# Research: 网站离线缓存与平滑缓冲技术调研

## 1. 现状与业务痛点
- 当前小站包含 12 个章节音频（共约 400MB+），8,052 句中英对齐字幕与静态页面（`index.html`、`reader.html`、`css/`、`js/`、`data/`）。
- 目前 `<audio>` 标签使用 `preload="metadata"`，播放时完全依赖在线 HTTP 直连拉取。
- 用户在弱网（地铁、电梯、地下车库、户外散步）、飞行模式或流量有限时，容易出现音频卡顿、暂停或页面无法加载。

## 2. 核心技术选型与机制

### 2.1 离线应用外壳缓存（PWA + Service Worker）
- **核心文件预缓存**：
  - HTML (`index.html`, `reader.html`)
  - CSS (`css/style.css`, `css/landing.css`)
  - JS (`js/app.js`, `js/i18n.js`, `data/chapters_meta.js`, `data/*.js`)
  - SVG 图标与元数据 (`manifest.json`, `assets/*.svg`)
- **缓存策略**：
  - 静态资源：`Cache-First`（优先走本地缓存，断网秒开；联网时后台检查更新 `Stale-While-Revalidate`）。
  - Service Worker 激活时自动清理旧版本缓存。

### 2.2 大文件音频按需离线缓存（On-Demand Audio Caching）
- **为什么不全量一次性预存 400MB 音频**：
  - 手机浏览器有单域名存储限制，且一次性静默下载 400MB 会迅速消耗用户手机流量和电池。
- **最佳实践：按需离线缓存（On-Demand Chapter Caching）**：
  - 用户在播放器界面看到清晰的操作：“💾 缓存本章 (约 30MB)”。
  - 点击后，浏览器在后台下载该章节的 MP3 并存入 `audio-cache-v1`。
  - 支持实时下载进度百分比展示（`0% -> 100%`）。
  - 缓存完成后变为“✅ 已离线”，并且在左侧章节目录列表上打上 `📥 已离线` 专属徽标。
  - 再次点击可选择“清除本章缓存”以随时释放手机存储空间。

### 2.3 关键技术攻坚：Service Worker 对 HTTP Range 请求的支持
- **iOS Safari & Chrome 音频播放痛点**：
  - 现代浏览器中的 `<audio>` 播放、拖动进度条（Seek）时，发送的是带有 `Range: bytes=start-end` 的请求，期望收到 HTTP `206 Partial Content`。
  - 如果 Service Worker 直接返回全量缓存（HTTP 200），Safari 会直接报错无法 Seek，甚至无法播放！
- **解决方案**：
  - 在 `sw.js` 中专门实现 Range 请求解析拦截器：
    - 读取 Cache 中保存的音频 Response（ArrayBuffer）；
    - 解析 HTTP 请求头中的 `Range: bytes=start-end`；
    - 针对请求切片生成带 `Content-Range: bytes start-end/total` 和 HTTP `206` 的 Response 返回给 `<audio>`；
    - 确保在断网离线下，拖动进度条、单句循环复读（A-B Loop）和快速跳转 100% 丝滑无误。

### 2.4 在线播放平滑缓冲（Audio Preloading & Next Chapter Lookahead）
- 将 `<audio preload="metadata">` 改为 `<audio preload="auto">`。
- 在播放进度达到 85% 或剩余 45 秒时，后台自动预抓取下一章的前导音频片段（Preload Next Chapter），实现跨章节无缝切换。

## 3. PWA Web App Manifest
- 添加 `manifest.json` 与 PWA 基础图标。
- 支持在 iOS Safari（“添加到主屏幕”）和 Android Chrome（“安装应用”）中以独立全屏 Web App 模式运行，无浏览器顶栏底栏干扰。
