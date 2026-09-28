# 实现文档: dark-mode-reading-enhancements (黑夜模式阅读体验落地方案与测试设计)

## 0. 依据
- PRD: `.vibe-coding/dark-mode-reading-enhancements/prd.md`
- Context: `.vibe-coding/dark-mode-reading-enhancements/context.md`

## 1. 视觉层级与色彩系统架构
- **非激活文本降噪（Anti-Halation Layering）**：
  - 在 `:root:not([data-theme="light"]) .cue-card:not(.active) .en-text` 上应用 `#cbd5e1`（Slate-300，约 10:1 对比度），解决 19.8:1 强眩光刺眼问题；
  - 全局 `--text-primary` 保持 `#f8fafc` 不变，确保侧边栏、标题栏不受波及。
- **当前激活句“深海天幕锚定”（Deep Ocean Glow）**：
  - 背景：`rgba(56, 189, 248, 0.11)`；
  - 边框：`border-color: rgba(56, 189, 248, 0.28); border-left: 3.5px solid #38bdf8;`；
  - 微光阴影：`box-shadow: 0 4px 20px -2px rgba(56, 189, 248, 0.14);`；
  - 英文文字纯净高光聚焦：`color: #ffffff; font-weight: 550;`；
  - 时间戳胶囊：`color: #38bdf8; background: rgba(56, 189, 248, 0.16);`。
- **双语同步高光与零抖动（Zero-CLS Architecture）**：
  - 基础 `.cue-card` 预留 `border-left: 3.5px solid transparent;`，消除切句横向跳动；
  - 暗色模式字幕卡片 `.zh-text` 统一配置 `line-height: 1.68`，静态统一行高消除纵向卡片拉伸跳闪；
  - 激活态中文提亮：`:root:not([data-theme="light"]) .cue-card.active .zh-text { color: #e2e8f0; }`，与英文高光同步聚焦，且绝不污染白天模式浅天蓝底色。
- **跟读四步（Echo Steps）全量 3.5px 边框与去荧光调校（Zero-CLS）**：
  - 听（Listening）：`color: #38bdf8; background: rgba(56, 189, 248, 0.16); border-color: rgba(56, 189, 248, 0.35); border-left: 3.5px solid #38bdf8 !important;`（升级 3.5px 对齐基线，彻底根除切步 CLS）
  - 读（Shadowing）：`color: #34d399; background: rgba(16, 185, 129, 0.14); border-color: rgba(16, 185, 129, 0.3); border-left: 3.5px solid #10b981 !important;`
  - 巩固（Reviewing）：`color: #f59e0b; background: rgba(245, 158, 11, 0.14); border-color: rgba(245, 158, 11, 0.3); border-left: 3.5px solid #f59e0b !important;`
  - 回音（Echoing）：`color: #a78bfa; background: rgba(168, 85, 247, 0.14); border-color: rgba(168, 85, 247, 0.3); border-left: 3.5px solid #8b5cf6 !important;`
- **悬浮胶囊深色毛玻璃（Glassmorphism，特异性安全）**：
  - `.btn-resume-cue`（基准暗色，严格使用类选择器，绝无裸 ID `#btn-resume-cue {` 块，确保不穿透白天模式）：
    `background: rgba(13, 18, 29, 0.85); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(56, 189, 248, 0.3); box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.6), 0 0 12px rgba(56, 189, 248, 0.15);`

## 2. 离线缓存与版本闭环
- `sw.js` 缓存由 `ai-agent-shell-v6` 升为 `ai-agent-shell-v7`；
- `tests/test_sw_and_error.js` 同步更新断言为 `ai-agent-shell-v7`。

## 3. 实现步骤（细粒度，每步带具有判别力的 verify 与独立提交）

### Step 7.1: 暗夜英文文本光晕消除、当前句纯白聚焦与零抖动边框基准
- **做什么**：
  - `css/style.css`:
    - 将 `.cue-card` 默认左边框调整为 `border-left: 3.5px solid transparent;`；
    - 配置 `:root:not([data-theme="light"]) .cue-card:not(.active) .en-text { color: #cbd5e1; }`；
    - 配置 `:root:not([data-theme="light"]) .cue-card.active { background: rgba(56, 189, 248, 0.11); border-color: rgba(56, 189, 248, 0.28); border-left: 3.5px solid #38bdf8; box-shadow: 0 4px 20px -2px rgba(56, 189, 248, 0.14); }`；
    - 配置 `:root:not([data-theme="light"]) .cue-card.active .en-text { color: #ffffff; font-weight: 550; }`；
    - 配置 `:root:not([data-theme="light"]) .cue-card.active .cue-timestamp { color: #38bdf8; background: rgba(56, 189, 248, 0.16); }`。
- **涉及文件**：`css/style.css`
- **测试**：
  - 判别力测试：检查包含 `:root:not([data-theme="light"]) .cue-card:not(.active) .en-text`，包含 `#cbd5e1`, `3.5px solid transparent`, `rgba(56, 189, 248, 0.11)`；
  - 即时回归：运行 `node tests/test_reader_friendly.js`。
- **覆盖矩阵**：正常✓ 异常✓ 权限— 空数据— 重复— 边界✓ 旧数据✓ 回归✓
- **verify**: `node -e 'const s=require("fs").readFileSync("css/style.css","utf8"); if(!s.includes(":root:not([data-theme=\"light\"]) .cue-card:not(.active) .en-text")||!s.includes("#cbd5e1")||!s.includes("rgba(56, 189, 248, 0.11)")||!s.includes("3.5px solid transparent")) process.exit(1); console.log("✅ Step 7.1 dark focus & CLS baseline valid");' && node tests/test_reader_friendly.js`
- **提交信息**: `style(reader): soft dark text contrast, active ocean glow, and zero-cls left border`

### Step 7.2: 中文译文暗夜行气疏朗与当前句双语同步提亮
- **做什么**：
  - `css/style.css`:
    - 配置 `:root:not([data-theme="light"]) .zh-text { line-height: 1.68; }`；
    - 配置 `:root:not([data-theme="light"]) .cue-card.active .zh-text { color: #e2e8f0; }`；
    - 确认在白天模式下中文字幕依然受控于 `[data-theme="light"]`。
- **涉及文件**：`css/style.css`
- **测试**：
  - 判别力测试：验证规则严格限定在 `:root:not([data-theme="light"])` 暗色作用域；
  - 即时回归：运行 `node tests/test_reader_friendly.js`。
- **覆盖矩阵**：正常✓ 异常✓ 权限— 空数据— 重复— 边界✓ 旧数据✓ 回归✓
- **verify**: `node -e 'const s=require("fs").readFileSync("css/style.css","utf8"); if(!s.includes(":root:not([data-theme=\"light\"]) .cue-card.active .zh-text")||!s.includes("#e2e8f0")||!s.includes("1.68")) process.exit(1); console.log("✅ Step 7.2 dark zh leading and active highlight valid");' && node tests/test_reader_friendly.js`
- **提交信息**: `style(reader): optimize dark zh line-height and sync active subtitle highlight`

### Step 7.3: 跟读四步暗夜去荧光微光调校与浮动胶囊毛玻璃
- **做什么**：
  - `css/style.css`:
    - 调优暗色下 `.cue-card.echo-step-*` 与 `.cue-echo-badge` 的 4 步状态，确保听（Listening）亦使用 `3.5px solid #38bdf8 !important;` 保证全流程边框等宽零抖动；
    - 升级 `.btn-resume-cue` 默认暗色样式为深色半透明毛玻璃浮岛（`rgba(13, 18, 29, 0.85)` + `backdrop-filter: blur(16px)` + 幽蓝悬浮光晕）；
    - 严格使用类选择器，严禁使用 `#btn-resume-cue {` ID 选择器样式块。
- **涉及文件**：`css/style.css`
- **测试**：
  - 判别力测试：验证包含 `#34d399`, `#a78bfa`, `rgba(13, 18, 29, 0.85)`，断言 `!s.includes("#btn-resume-cue {")`，断言 Listening 包含 `3.5px solid #38bdf8`；
  - 即时回归：运行 `node tests/test_reader_friendly.js`。
- **覆盖矩阵**：正常✓ 异常✓ 权限— 空数据— 重复— 边界✓ 旧数据✓ 回归✓
- **verify**: `node -e 'const s=require("fs").readFileSync("css/style.css","utf8"); if(!s.includes("#34d399")||!s.includes("#a78bfa")||!s.includes("rgba(13, 18, 29, 0.85)")||s.includes("#btn-resume-cue {")||!s.includes("echo-step-listening {\n  border-left: 3.5px solid #38bdf8")) process.exit(1); console.log("✅ Step 7.3 echo palette & glass pill valid");' && node tests/test_reader_friendly.js`
- **提交信息**: `style(reader): tune dark echo step palette and glassmorphism resume pill`

### Step 7.4: Service Worker 升至 v7 与全量测试门禁闭环
- **做什么**：
  - `sw.js` 缓存升级为 `ai-agent-shell-v7`；
  - `tests/test_sw_and_error.js` 同步更新断言版本为 `ai-agent-shell-v7`；
  - `tests/test_reader_friendly.js` 新增 Test Case 7 专项静态断言：
    1. `:root:not([data-theme="light"]) .cue-card:not(.active) .en-text` 存在且颜色为 `#cbd5e1`；
    2. `:root:not([data-theme="light"]) .cue-card.active .zh-text` 存在且颜色为 `#e2e8f0`；
    3. 绝无裸 `#btn-resume-cue {` 样式块；
    4. `.cue-card` 基础边框包含 `border-left: 3.5px solid transparent;`；
    5. 跟读 4 步边框全部对齐 `3.5px solid`；
  - 运行全量 13 套自动化测试。
- **涉及文件**：`sw.js`, `tests/test_sw_and_error.js`, `tests/test_reader_friendly.js`
- **测试**：全量 13 套测试 100% 绿灯通过。
- **覆盖矩阵**：正常✓ 异常✓ 权限— 空数据✓ 重复✓ 边界✓ 旧数据✓ 回归✓
- **verify**: `for f in tests/test_*.js; do node "$f" || exit 1; done`
- **提交信息**: `chore(sw): bump shell cache to v7 and sync test suite assertions`

## 4. 回归清单
- 白天模式（`[data-theme="light"]`）微暖纸感背景、深墨色正文与封面阴影；
- 跟读模式（Echo Mode）三遍循环与回音状态机；
- 智能防打扰阅读滚动监听与回到播放处胶囊弹出/回滑交互；
- 全站 13 套自动化测试套件。
