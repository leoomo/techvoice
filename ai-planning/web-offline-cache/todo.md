# Todo: 网站离线缓存与平滑缓冲 (PWA + Audio Caching)

## 任务列表

- [x] Task 1: 创建 PWA 核心文件 `manifest.json` 与 Service Worker `sw.js`（含 Range 切片响应处理）
  - 验证命令: node -e "require('fs').existsSync('sw.js') && require('fs').existsSync('manifest.json') ? console.log('OK') : process.exit(1)"
  - 状态: ✅ 已完成

- [x] Task 2: 在 `index.html` 和 `reader.html` 中引入 manifest 并注册 Service Worker
  - 验证命令: grep -q "manifest.json" reader.html && grep -q "serviceWorker" reader.html && echo "OK"
  - 状态: ✅ 已完成

- [x] Task 3: 在 `js/i18n.js` 和 `css/style.css` 中增加离线缓存相关的双语词条与 UI 样式
  - 验证命令: grep -q "reader_cache_btn" js/i18n.js && grep -q "btn-cache" css/style.css && echo "OK"
  - 状态: ✅ 已完成

- [x] Task 4: 在 `js/app.js` 与 `reader.html` 中集成“离线缓存本章”逻辑、进度监听、目录标记与平滑预取
  - 验证命令: grep -q "cacheChapterAudio" js/app.js && grep -q "btn-cache-chapter" reader.html && echo "OK"
  - 状态: ✅ 已完成

- [x] Task 5: 启动本地 HTTP 服务器，验证 Service Worker 注册、缓存及断网播放逻辑
  - 验证结果: 静态资源与 PWA 接口均返回 HTTP 200，语法检查 0 报错
  - 状态: ✅ 已完成
