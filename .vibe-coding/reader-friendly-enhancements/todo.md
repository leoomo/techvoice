# Todo: reader-friendly-enhancements 执行清单

- [x] **Step 7.1**: 色彩变量系统补齐、封面白字修复与日间出版级护眼配色
  - 描述: 在 `css/style.css` 和 `css/landing.css` 补齐 `--accent`, `--bg-surface`, `--text-faint`, `--bg-hover`, `--text-secondary` 并做别名桥接；白天模式应用微暖象牙底色 `#fbfbfa` 与富墨色 `#1e293b`；修复首页书本封面硬编码白字；修复进度条刻度点日间可见度；添加全局 `::selection`。
  - 涉及文件: `css/style.css`, `css/landing.css`
  - 验证命令: `node -e 'const fs=require("fs"); const s=fs.readFileSync("css/style.css","utf8"); const l=fs.readFileSync("css/landing.css","utf8"); if(!s.includes("--accent:")||!s.includes("--bg-surface:")||l.includes("color: #ffffff;\n  line-height: 1.25;")) process.exit(1); console.log("✅ Step 7.1 variables and cover valid");'`
  - 提交信息: `fix(ui): upgrade light theme to warm paper palette, fix cover white text, and bridge css variables`

- [x] **Step 7.2**: 排版行气优化、朗读句马克笔锚定与跟读三步日间高对比度
  - 描述: 约束阅读容器至 `820px`；英文正文字号提升至 `16.5px / 1.65`，中文字号提升至 `14px / 1.6`，纵向间距 `6px`；当前朗读句应用 Sky-50 天幕高光底色与深天蓝文本聚焦；跟读三步徽标日间全量配置深海蓝、深林绿与暖琥珀高对比度。
  - 涉及文件: `css/style.css`
  - 验证命令: `node -e 'const s=require("fs").readFileSync("css/style.css","utf8"); if(!s.includes("max-width: 820px")||!s.includes("#0284c7")||!s.includes("#15803d")||!s.includes("#b45309")) process.exit(1); console.log("✅ Step 7.2 typography and echo badges valid");'`
  - 提交信息: `style(reader): optimize typography leading, active cue anchor, and daytime echo badge contrast`

- [x] **Step 7.3**: 智能防打扰阅读滚动监听与“回到播放处”胶囊交互逻辑
  - 描述: 在 `reader.html` 新增 `#btn-resume-cue` 浮动胶囊；`js/i18n.js` 新增词条；`css/style.css` 配置胶囊微动效与安全边距；在 `tests/test_helpers.js` 补充 `getBoundingClientRect` mock；在 `js/app.js` 实现滚动全源监听、程序滚动互斥锁、出界判定、脱离状态机与点击滑回重连；编写 `tests/test_reader_friendly.js`。
  - 涉及文件: `reader.html`, `js/i18n.js`, `css/style.css`, `tests/test_helpers.js`, `js/app.js`, `tests/test_reader_friendly.js`
  - 验证命令: `node tests/test_reader_friendly.js`
  - 提交信息: `feat(reader): add smart non-intrusive scroll detection with resume-cue floating pill`

- [x] **Step 7.4**: Service Worker 升级至 v6 与全量回归门禁
  - 描述: 升级 `sw.js` 缓存版本为 `ai-agent-shell-v6`，更新 `tests/test_sw_and_error.js` 校验，运行全量 13 套自动化测试。
  - 涉及文件: `sw.js`, `tests/test_sw_and_error.js`
  - 验证命令: `for f in tests/test_*.js; do node "$f" || exit 1; done`
  - 提交信息: `chore(sw): bump shell cache to v6 and verify full test suite`
