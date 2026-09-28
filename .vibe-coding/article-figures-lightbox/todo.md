# Todo: article-figures-lightbox 执行清单

- [x] **Step 7.1**: 全量双语图表资产部署与位图优化
  - 描述: 创建 `assets/figures/zh/` 和 `assets/figures/en/`，同步原书全量 135 个图表文件；对 2.5MB 的 `fig2-7.png`（注意力热力图）压缩至 350KB 以下；保证 133 个矢量 SVG 原生无损复制。
  - 涉及文件: `assets/figures/zh/`, `assets/figures/en/`
  - 验证命令: `node -e 'const fs=require("fs"); const zh=fs.readdirSync("assets/figures/zh"); const en=fs.readdirSync("assets/figures/en"); if(zh.length < 135 || en.length < 135 || !fs.existsSync("assets/figures/zh/fig1-1.svg") || !fs.existsSync("assets/figures/en/fig1-1.svg") || !fs.existsSync("assets/figures/zh/n8n-workflow.png") || fs.statSync("assets/figures/zh/fig2-7.png").size >= 350000) process.exit(1); console.log("✅ Step 7.1 assets deployed and optimized:", zh.length, "files");'`
  - 提交信息: `chore(assets): sync and deploy bilingual figure assets to production directory`

- [x] **Step 7.2**: 结构化图表元数据字典与全局挂载
  - 描述: 自动提取并生成 `data/figures_meta.js`，挂载包含全书 11 章节 114 处正文图表映射的 `window.FIGURES_META` 字典；在 `reader.html` 中显式引入 `<script src="data/figures_meta.js"></script>`。
  - 涉及文件: `data/figures_meta.js`, `reader.html`
  - 验证命令: `node -e 'global.window=global; require("./data/figures_meta.js"); const m=window.FIGURES_META; if(!m || !m.chapter1 || !m.chapter2) process.exit(1); const total=Object.values(m).reduce((s, a) => s + a.length, 0); if(total !== 114) process.exit(1); const html=require("fs").readFileSync("reader.html","utf8"); if(!html.includes("data/figures_meta.js")) process.exit(1); console.log("✅ Step 7.2 figures_meta valid with 114 items and mounted");'`
  - 提交信息: `feat(figures): build structured figure metadata registry and mount to reader`

- [x] **Step 7.3**: 正文流内嵌图表卡片渲染、防误触双保险与双主题防眩样式
  - 描述: 在 `js/app.js` 的 `renderTranscript(meta)` 中添加防空守卫安全读取 `window.FIGURES_META` 并为包含图表的 cue 渲染 `.cue-figure-card`（徽标栏、标题、矢量图、全屏放大提示）；内层点击执行 `e.stopPropagation()`，外层 card 点击添加 `closest('.cue-figure-card')` 门禁双保险防误触音频跳转；在 `css/style.css` 实现黑夜深海毛玻璃 + 防眩白板衬底与白天浅米卡片；在 `tests/test_figures.js` 建立阶段 1 自动化测试。
  - 涉及文件: `js/app.js`, `css/style.css`, `tests/test_figures.js`
  - 验证命令: `node tests/test_figures.js && node tests/test_reader_friendly.js`
  - 提交信息: `feat(figures): render inline figure cards in transcript with anti-glare styling and click isolation`

- [x] **Step 7.4**: 全屏沉浸大图预览 Lightbox 模态框与双语即时切换
  - 描述: 在 `reader.html` 挂载 `#modal-figure-lightbox`；在 `js/app.js` 实现 `openFigureLightbox(fig)` 与 `closeFigureLightbox()`；实现局部双语切换胶囊（仅切换弹窗内中/英图表，绝不派发全局 `langchange`、绝不重绘背景正文）；打开弹窗添加 `body.lightbox-open` 锁定背景滚动；支持 ESC 键、关闭按钮、遮罩点击安全退出；在 `css/style.css` 完善弹窗高保真样式；在 `tests/test_figures.js` 扩展阶段 2 状态机测试。
  - 涉及文件: `reader.html`, `js/app.js`, `css/style.css`, `tests/test_figures.js`
  - 验证命令: `node tests/test_figures.js && node tests/test_shortcuts.js`
  - 提交信息: `feat(figures): add full-screen figure lightbox modal with independent bilingual toggle`

- [x] **Step 7.5**: Service Worker 升至 v8 与全量测试套件闭环
  - 描述: 升级 `sw.js` 缓存版本为 `ai-agent-shell-v8`，并在 `STATIC_ASSETS` 加入 `'data/figures_meta.js'`；同步更新 `tests/test_sw_and_error.js` 断言；在 `tests/test_figures.js` 补齐全量 8 项测试维度；运行全量 14 套测试套件 100% 绿灯。
  - 涉及文件: `sw.js`, `tests/test_sw_and_error.js`, `tests/test_figures.js`
  - 验证命令: `for f in tests/test_*.js; do node "$f" || exit 1; done`
  - 提交信息: `test(figures): add comprehensive figure tests and bump sw shell cache to v8`
