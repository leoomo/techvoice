# Todo: dark-mode-reading-enhancements 执行清单

- [x] **Step 7.1**: 暗夜英文文本光晕消除、当前句纯白聚焦与零抖动边框基准
  - 描述: 基础 `.cue-card` 预留 `3.5px solid transparent` 边框消抖；暗色模式非激活英文正文调为柔和冷岩灰 `#cbd5e1`，消除 19.8:1 强眩光毛刺；当前激活句英文正文纯白聚焦 `#ffffff` (字重 550)；当前卡片深海天幕锚定（`rgba(56, 189, 248, 0.11)` + `3.5px solid #38bdf8` 边框 + 微发光阴影）；时间戳提亮为冰川蓝徽标。
  - 涉及文件: `css/style.css`
  - 验证命令: `node -e 'const s=require("fs").readFileSync("css/style.css","utf8"); if(!s.includes(":root:not([data-theme=\"light\"]) .cue-card:not(.active) .en-text")||!s.includes("#cbd5e1")||!s.includes("rgba(56, 189, 248, 0.11)")||!s.includes("3.5px solid transparent")) process.exit(1); console.log("✅ Step 7.1 dark focus & CLS baseline valid");' && node tests/test_reader_friendly.js`
  - 提交信息: `style(reader): soft dark text contrast, active ocean glow, and zero-cls left border`

- [x] **Step 7.2**: 中文译文暗夜行气疏朗与当前句双语同步提亮
  - 描述: 暗色模式下所有字幕卡片 `.zh-text` 统一步频设为 `line-height: 1.68`，防止夜间繁密汉字粘连，且避免动态切句高度抖动；当前激活句中文字幕 `:root:not([data-theme="light"]) .cue-card.active .zh-text` 同步提亮为 `#e2e8f0`；白天模式严格隔离不受影响。
  - 涉及文件: `css/style.css`
  - 验证命令: `node -e 'const s=require("fs").readFileSync("css/style.css","utf8"); if(!s.includes(":root:not([data-theme=\"light\"]) .cue-card.active .zh-text")||!s.includes("#e2e8f0")||!s.includes("1.68")) process.exit(1); console.log("✅ Step 7.2 dark zh leading and active highlight valid");' && node tests/test_reader_friendly.js`
  - 提交信息: `style(reader): optimize dark zh line-height and sync active subtitle highlight`

- [x] **Step 7.3**: 跟读四步暗夜去荧光微光调校与浮动胶囊毛玻璃
  - 描述: 调校跟读 4 步状态在暗色模式下的徽标与边框色彩（听、读、巩固、回音全部统一为 `3.5px solid` 边框消抖，软化翠绿 `#34d399`、暖琥珀 `#f59e0b` 与淡紫 `#a78bfa`）；`.btn-resume-cue` 升级为深色半透明毛玻璃浮岛（`rgba(13, 18, 29, 0.85)` + 模糊 16px + 幽蓝光晕），严格使用类选择器避免权重穿透。
  - 涉及文件: `css/style.css`
  - 验证命令: `node -e 'const s=require("fs").readFileSync("css/style.css","utf8"); if(!s.includes("#34d399")||!s.includes("#a78bfa")||!s.includes("rgba(13, 18, 29, 0.85)")||s.includes("#btn-resume-cue {")||!s.includes("echo-step-listening {\n  border-left: 3.5px solid #38bdf8")) process.exit(1); console.log("✅ Step 7.3 echo palette & glass pill valid");' && node tests/test_reader_friendly.js`
  - 提交信息: `style(reader): tune dark echo step palette and glassmorphism resume pill`

- [x] **Step 7.4**: Service Worker 升至 v7 与全量测试门禁闭环
  - 描述: 升级 `sw.js` 缓存版本为 `ai-agent-shell-v7`，同步更新 `tests/test_sw_and_error.js` 校验，在 `tests/test_reader_friendly.js` 新增 Test Case 7 专项静态断言，运行全量 13 套自动化测试。
  - 涉及文件: `sw.js`, `tests/test_sw_and_error.js`, `tests/test_reader_friendly.js`
  - 验证命令: `for f in tests/test_*.js; do node "$f" || exit 1; done`
  - 提交信息: `chore(sw): bump shell cache to v7 and sync test suite assertions`
