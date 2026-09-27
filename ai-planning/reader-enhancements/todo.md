# Todo: 优化任务执行清单 (逐步推进)

## 阶段一：听书核心体验与续播强化 (Core Listening)
- [ ] **Task 1**: 播放进度智能记忆与断点续播 (Playback Auto-Resume)
  - 范围: `js/app.js`, `css/style.css`, `js/i18n.js`
  - 目标: 记录每章最后播放秒数，下次进入时平滑定位并支持“恢复/从头开始”
  - 验证: 模拟播放并刷新网页，验证断点续播与交互反馈

- [ ] **Task 2**: 系统级 MediaSession API 集成 (Lock Screen & Earphone Control)
  - 范围: `js/app.js`
  - 目标: 锁屏显示封面、章节名、小节名，联动蓝牙耳机/键盘多媒体按键
  - 验证: 验证 MediaMetadata 设置与 play/pause/seek 动作注册

- [ ] **Task 3**: 音频流式缓冲进度条 (Audio Buffering Bar)
  - 范围: `reader.html`, `js/app.js`, `css/style.css`
  - 目标: 在 Seekbar 轨道展示真实音频预缓冲百分比
  - 验证: 检查缓冲条渲染与 progress 事件联动

## 阶段二：工具性与知识检索强化 (Search & Utility)
- [ ] **Task 4**: 全局字幕与架构关键词搜索 (Full-Text Search / Cmd+K)
  - 范围: `reader.html`, `js/app.js`, `css/style.css`, `js/i18n.js`
  - 目标: 支持中英文关键词即时全文检索 8,052 句字幕，秒级跳转
  - 验证: 搜索测试关键词并跳转验证

- [ ] **Task 5**: 单句时间戳深链接与快速分享 (Deep Linking & Sentence Sharing)
  - 范围: `js/app.js`, `reader.html`, `css/style.css`
  - 目标: 支持生成/解析带精确时间戳与句号的深链接
  - 验证: 测试带时间戳 URL 的进入与直接播放

## 阶段三：便携听书与交互细节 (Listening Utilities)
- [ ] **Task 6**: 睡眠定时器 (Sleep Timer / 定时自动关闭)
  - 范围: `reader.html`, `js/app.js`, `css/style.css`, `js/i18n.js`
  - 目标: 提供 15m/30m/45m/本章播完停止，伴随淡出
  - 验证: 测试定时器倒计时与音量平滑淡出暂停

- [ ] **Task 7**: 快捷键扩充（调速/静音）与说明更新
  - 范围: `js/app.js`, `reader.html`, `js/i18n.js`
  - 目标: 新增 `[` / `]` 调速、`M` 静音，更新快捷键指南
  - 验证: 键盘触发测试与弹窗显示检查

## 阶段四：性能、容错与传播优化 (Performance & SEO)
- [ ] **Task 8**: 章节数据按需懒加载 (On-Demand Dynamic Loading)
  - 范围: `reader.html`, `js/app.js`
  - 目标: 异步动态加载章节数据脚本，首屏 JS 传输体积减少 80%+
  - 验证: 检查网络请求与切章体验

- [ ] **Task 9**: 音频网络异常与断网容错提示
  - 范围: `js/app.js`, `css/style.css`, `js/i18n.js`
  - 目标: 捕获音频加载异常，给用户友好重试提示
  - 验证: 离线异常模拟测试

- [ ] **Task 10**: 社交分享 Open Graph 卡片与 SEO 元数据
  - 范围: `index.html`, `reader.html`
  - 目标: 补齐 Open Graph 与 Twitter Card 标签
  - 验证: 校验 Meta 标签完整性与图片路径
