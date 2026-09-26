# Implementation Plan: 网站离线缓存与平滑缓冲 (PWA + Audio Caching)

## 🎯 目标
为《深入浅出 AI Agent》听书小站增加完善的**离线缓存能力**（PWA）与**播放平滑缓冲**，使网站：
1. 第一次访问后，页面代码、界面样式和全书 8,000+ 句中英字幕完全离线可用，断网秒开。
2. 播放器支持“一键离线缓存本章音频”，支持进度显示、完成标记和存储管理。
3. Service Worker 完整支持 HTTP 206 Range 切片响应，确保 Safari / Chrome 离线拖动进度条与复读 100% 正常。
4. 在线收听时具备主动预加载与临近章节平滑预取，彻底解决弱网卡顿。
5. 支持“添加到主屏幕”，作为独立 Web App 运行。

## 📝 实现步骤

### Phase 1: 核心 Service Worker 与 PWA 配置
- 创建 `sw.js`：
  - 核心静态资源缓存名单（Cache-First，后台异步更新）。
  - 音频 Range 请求拦截与 206 Partial Content 切片响应实现。
  - 激活时自动版本清理与客户端即时控制（`clients.claim()`）。
- 创建 `manifest.json`：
  - 配置应用名称、图标、主题色（`#090d16`）、`display: standalone`。
- 在 `index.html` 和 `reader.html` 中引入 `manifest.json` 并注册 `sw.js`。

### Phase 2: 播放器“离线缓存本章”核心功能
- 在 `reader.html` 的控制栏增加“💾 离线缓存”操作按钮。
- 在 `js/app.js` 中增加章节缓存管理器（`ChapterCacheManager`）：
  - 检查当前章节音频是否已被缓存（`caches.has` 或 `cache.match`）。
  - 点击“缓存本章”：使用 `fetch` + `ReadableStream` 监控下载进度，更新按钮文字与百分比进度条。
  - 完成后存入 Cache，更新按钮状态为“✅ 已离线”，并更新左侧章节目录列表中的状态标签。
  - 点击已缓存按钮：提示并允许一键清除此章节缓存以释放手机空间。
  - 切换章节时自动检测并更新当前章节的离线状态。

### Phase 3: 目录状态标记与在线平滑缓冲增强
- 在目录列表（`renderChapterNav`）中为已缓存的章节显示高亮标记（如 `✓ 已离线` / `📥`）。
- 将 `<audio>` 的 `preload` 属性设为 `auto`。
- 监听 `timeupdate`：在当前章节播放到剩余 60 秒时，后台预加载下一章节的音频头部。

### Phase 4: 多语言（i18n）文案与界面样式打磨
- 在 `js/i18n.js` 中增加双语词条（缓存本章、正在缓存、已离线、清除缓存等）。
- 在 `css/style.css` 中增加优雅的按钮状态样式与离线徽标，保持整体深色极客质感。

### Phase 5: 本地多场景验证与测试
- 启动本地测试服务，验证 Service Worker 注册成功。
- 测试本章音频缓存下载流程（进度更新、缓存入库）。
- 模拟断网（Offline 模式），验证刷新秒开、音频正常播放、进度条 Seek 正常。
- 验证双语切换与快捷键无冲突。
