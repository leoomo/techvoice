# Todo: reader-enhancements 执行清单

- [x] **Step 7.0**: 搭建测试基建与代码导出准备
  - 描述: 创建 `tests/test_helpers.js`，在 `js/app.js` 闭包底部增加 UMD 模块导出判断
  - 涉及文件: `tests/test_helpers.js`, `js/app.js`
  - 验证命令: `node -e "require('./tests/test_helpers'); const app = require('./js/app'); console.log(typeof app.formatTime === 'function' ? 'OK' : process.exit(1));"`
  - 提交点: `test(infra): set up headless test environment and app module export` (commit: `af6e654`)

- [x] **Step 7.1**: 播放进度记忆与断点续播 (Playback Auto-Resume) + Toast 系统
  - 描述: 实现 `showToast`，在 `timeupdate`（2s节流）、`pause`、`beforeunload` 保存进度，在 `loadedmetadata` 守卫恢复进度并弹窗，支持从头开始
  - 涉及文件: `js/app.js`, `js/i18n.js`, `css/style.css`, `tests/test_resume.js`
  - 验证命令: `node tests/test_resume.js && node -c js/app.js`
  - 提交点: `feat(player): add playback position auto-resume and toast notification` (commit: `6c6b6f8`)

- [x] **Step 7.2**: 系统级 MediaSession API 适配
  - 描述: 挂载 MediaMetadata，注册上一章/下一章、快退/快进与 seek 动作，同步 position state
  - 涉及文件: `js/app.js`, `tests/test_mediasession.js`
  - 验证命令: `node tests/test_mediasession.js && node -c js/app.js`
  - 提交点: `feat(player): integrate MediaSession API for lock screen and headset controls` (commit: `771224e`)

- [x] **Step 7.3**: 音频流式缓冲进度条 (Audio Buffering Bar)
  - 描述: DOM 新增 `.seek-buffer-bar`，实现缓冲百分比计算，在 `progress` 与 `timeupdate` 更新
  - 涉及文件: `reader.html`, `js/app.js`, `css/style.css`, `tests/test_buffer_calc.js`
  - 验证命令: `node tests/test_buffer_calc.js && node -c js/app.js`
  - 提交点: `feat(player): add audio stream buffering progress bar` (commit: `2328c04`)

- [x] **Step 7.4**: 单句时间戳深链接与快速分享
  - 描述: 重构非贪婪正则解析，深链接优先级置顶，增加单句卡片复制按钮与 clipboard/execCommand 降级
  - 涉及文件: `js/app.js`, `css/style.css`, `js/i18n.js`, `tests/test_deeplink.js`
  - 验证命令: `node tests/test_deeplink.js && node -c js/app.js`
  - 提交点: `feat(reader): support timestamp deep linking and sentence sharing` (commit: `9a0aab9`)

- [x] **Step 7.5**: 动态数据加载基础设施 (`DynamicDataLoader`)
  - 描述: 封装 `DynamicDataLoader`，精简 `reader.html` 移除 11 个章节静态 script，支持防竞态与按需切章
  - 涉及文件: `reader.html`, `js/app.js`, `tests/test_dataloader.js`
  - 验证命令: `node tests/test_dataloader.js && node -c js/app.js`
  - 提交点: `perf(loader): dynamic on-demand chapter cue loading with race condition protection` (commit: `3762a18`)

- [x] **Step 7.6**: 全局字幕与概念关键词安全检索 (Full-Text Search / Cmd+K)
  - 描述: 实现安全高亮转义 `highlightMatches`，首屏闲时预热全量数据，实现 `#modal-search` 弹窗与跨章秒级跳播
  - 涉及文件: `reader.html`, `js/app.js`, `css/style.css`, `js/i18n.js`, `tests/test_search.js`
  - 验证命令: `node tests/test_search.js && node -c js/app.js`
  - 提交点: `feat(search): implement secure full-text subtitle and concept search` (commit: `8c2caaf`)

- [x] **Step 7.7**: 睡眠定时器 (Sleep Timer) 与平滑淡出
  - 描述: 新增睡眠定时器按钮与菜单，A-B Loop 互斥守护，最后 10s 线性平滑淡出音量并 pause
  - 涉及文件: `reader.html`, `js/app.js`, `css/style.css`, `js/i18n.js`, `tests/test_sleep_timer.js`
  - 验证命令: `node tests/test_sleep_timer.js && node -c js/app.js`
  - 提交点: `feat(player): add sleep timer with volume fade-out and A-B loop guard` (commit: `3a4c6af`)

- [x] **Step 7.8**: 快捷键扩充与输入焦点防冲突隔离
  - 描述: 拦截 INPUT 焦点下的单字符播放快捷键，新增 `[` / `]` 调速、`M` 静音，更新快捷键指南
  - 涉及文件: `reader.html`, `js/app.js`, `js/i18n.js`, `tests/test_shortcuts.js`
  - 验证命令: `node tests/test_shortcuts.js && node -c js/app.js`
  - 提交点: `feat(shortcuts): add speed and mute shortcuts with input focus isolation` (commit: `f3f044b`)

- [x] **Step 7.9**: 音频网络异常友好提示与 SW 缓存版本升级
  - 描述: 监听 `audio.error` 弹窗重试 Toast，升级 `sw.js` 缓存版本为 `ai-agent-shell-v3` 并同步精简预缓存列表
  - 涉及文件: `js/app.js`, `sw.js`, `js/i18n.js`, `tests/test_sw_and_error.js`
  - 验证命令: `node tests/test_sw_and_error.js && node -c sw.js && node -c js/app.js`
  - 提交点: `fix(sw): bump cache to v3 and add audio error recovery toast` (commit: `c97d5ba`)

- [x] **Step 7.10**: 社交分享 Open Graph 卡片与 SEO 元数据
  - 描述: 在 `index.html` 与 `reader.html` 中补齐完整的 OG / Twitter Card / JSON-LD Audiobook 标签
  - 涉及文件: `index.html`, `reader.html`, `tests/test_seo_meta.js`
  - 验证命令: `node tests/test_seo_meta.js`
  - 提交点: `docs(seo): add Open Graph social cards and Audiobook structured metadata` (commit: `748a7ab`)
