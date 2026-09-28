# 实现文档: article-figures-lightbox

## 0. 依据
- **PRD**: `.vibe-coding/article-figures-lightbox/prd.md`
- **Context**: `.vibe-coding/article-figures-lightbox/context.md`

---

## 1. 数据层与静态资产
1. **静态资产目录**:
   - `assets/figures/zh/`: 存放全量 135 个中文版图表文件（133 张 SVG + 2 张优化后的 PNG）。
   - `assets/figures/en/`: 存放全量 135 个英文版图表文件（133 张 SVG + 2 张优化后的 PNG）。
   - 位图压缩策略: 对 2.5MB 的 `fig2-7.png`（注意力热力图）进行高质量压缩至 200KB 级（< 350KB）；1.4MB 的 133 张矢量 SVG 保持原生无损直接复制。
2. **结构化元数据字典 (`data/figures_meta.js`)**:
   - 全局挂载 `window.FIGURES_META`，键为 `chapterKey`（如 `introduction`, `chapter1`, ..., `chapter10`），值为图表对象数组：
     ```javascript
     window.FIGURES_META = {
       "chapter1": [
         {
           fig_id: "fig1-1",
           cue_id: 8,
           num: "1-1",
           title_zh: "Agent 与 Environment 的闭环交互，以及 Agent 内部的 Model–Harness 结构",
           title_en: "The Agent–Environment interaction loop and the Model–Harness structure inside the Agent",
           file: "fig1-1.svg"
         },
         // 涵盖全书 114 处正文图表引用
       ]
     };
     ```
3. **页面加载与离线缓存**:
   - `reader.html`: 在 `<script src="data/chapters_meta.js"></script>` 后显式引入 `<script src="data/figures_meta.js"></script>`。
   - `sw.js`: 在 `STATIC_ASSETS` 中加入 `'data/figures_meta.js'`。

---

## 2. 前端组件与交互设计

### 2.1 正文内嵌图表卡片 (`.cue-figure-card`)
- 在 `js/app.js` 的 `renderTranscript(meta)` 中，添加防御守卫安全读取图表元数据：
  ```javascript
  const chapterFigs = (typeof window !== 'undefined' && window.FIGURES_META && window.FIGURES_META[meta.key]) || [];
  const figuresByCueId = new Map(chapterFigs.map(f => [f.cue_id, f]));
  ```
- 遍历 `state.cues` 时，若 `figuresByCueId.has(cue.id)`，构建并挂载于 `.cue-text-col` 底部：
  ```html
  <div class="cue-figure-card" data-fig-id="${fig.fig_id}">
    <div class="figure-badge-bar">
      <span class="figure-badge">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <polyline points="21 15 16 10 5 21"/>
        </svg>
        <span class="figure-badge-num">${isZh ? '图 ' + fig.num : 'Figure ' + fig.num}</span>
      </span>
      <span class="figure-badge-title">${escapeHtml(isZh ? fig.title_zh : fig.title_en)}</span>
      <button class="btn-figure-zoom" title="${isZh ? '点击全屏放大查看' : 'Click to zoom'}">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="15 3 21 3 21 9"/>
          <polyline points="9 21 3 21 3 15"/>
          <line x1="21" y1="3" x2="14" y2="10"/>
          <line x1="3" y1="21" x2="10" y2="14"/>
        </svg>
        <span>${isZh ? '全屏查看' : 'Zoom'}</span>
      </button>
    </div>
    <div class="figure-img-wrap">
      <img class="cue-figure-img" src="assets/figures/${isZh ? 'zh' : 'en'}/${fig.file}" alt="${escapeHtml(fig.title_en)}" loading="lazy" />
    </div>
  </div>
  ```

### 2.2 防误触双保险机制
1. **内层隔离**: `.cue-figure-card` 的根节点及内部按钮统一绑定 `e.stopPropagation()`，触发 `openFigureLightbox(fig)`；
2. **外层门禁**: 在 `card.addEventListener('click', (e) => { ... })` 第一行追加：
   ```javascript
   if (e.target.closest('.cue-figure-card')) return;
   ```
   彻底杜绝用户点击查看图表时误触发 `seekToCue(cue)` 导致音频意外重播。

### 2.3 全屏大图沉浸弹窗 (Figure Lightbox Modal)
- 复用既有 `.modal-overlay` 架构，在 `reader.html` 追加 `#modal-figure-lightbox`（移除内联 `style="display:none;"`，统一由 `.modal-overlay.active` 控制显隐）：
  ```html
  <div class="modal-overlay" id="modal-figure-lightbox" aria-hidden="true">
    <div class="lightbox-figure-container">
      <div class="lightbox-figure-header">
        <div class="lightbox-figure-titles">
          <span class="lightbox-num-badge" id="lightbox-fig-num">Figure 2-1</span>
          <h3 class="lightbox-title" id="lightbox-fig-title">Title</h3>
        </div>
        <div class="lightbox-figure-actions">
          <button class="btn-lightbox-lang-toggle" id="btn-lightbox-lang-toggle" title="切换图表中英文版本">
            <span class="lang-opt opt-zh">中文</span>
            <span class="lang-divider">/</span>
            <span class="lang-opt opt-en">EN</span>
          </button>
          <button class="modal-close-btn" id="btn-lightbox-close" title="关闭 (Esc)">&times;</button>
        </div>
      </div>
      <div class="lightbox-figure-body" id="lightbox-figure-body">
        <img class="lightbox-figure-img" id="lightbox-figure-img" src="" alt="" />
      </div>
    </div>
  </div>
  ```
- **交互与状态隔离契约**:
  - `openFigureLightbox(fig)`: 记录当前 `activeFigure = fig`，局部对比语言 `lightboxLang = isZhLang() ? 'zh' : 'en'`。渲染大图与双语切换胶囊高亮，为 `document.body` 添加 `lightbox-open` 锁定背景滚动，添加 `.active` 展示弹窗。
  - `#btn-lightbox-lang-toggle`: 点击只改变局部状态 `lightboxLang`（'zh' <-> 'en'），即时更换 `#lightbox-figure-img.src` 与标题文本，**绝不派发全局 `langchange`、绝不重绘背景正文**，保障阅读器视口完全不跳动。
  - 全局语言变更联动: 在 `window.addEventListener('langchange')` 中，若 Lightbox 处于打开状态，同步让 `lightboxLang` 适应全局新语言并刷新。
  - 关闭通道: 点击 `.modal-close-btn`、点击背景遮罩 `#modal-figure-lightbox`、键盘 `Escape` 键均触发 `closeFigureLightbox()`，移除 `.active` 并解除 `document.body.classList.remove('lightbox-open')`。

---

## 3. 样式系统与双主题防眩设计 (`css/style.css`)
1. **黑夜模式 (`:root:not([data-theme="light"])`)**:
   - `.cue-figure-card`: `background: rgba(15, 23, 42, 0.75); border: 1px solid rgba(56, 189, 248, 0.2); border-radius: 10px; margin-top: 12px; backdrop-filter: blur(12px);`
   - `.figure-img-wrap`: `background: #ffffff; border-radius: 8px; padding: 12px; display: flex; justify-content: center; align-items: center; max-height: 280px; overflow: hidden;`
     - **防眩白板哲学**: 原书架构图大量使用黑色/深色箭头与文字，若强行反色容易导致图表失真或难看。将其封装在圆角纯白/柔白衬底内，外层以深海天幕和幽蓝边框包裹，既保证架构细节 100% 清晰，又防止整个屏幕发白晃眼。
   - `.btn-figure-zoom`: 冰川蓝微光胶囊按钮，悬浮微亮。
2. **白日模式 (`[data-theme="light"]`)**:
   - `.cue-figure-card`: `background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px;`
   - `.figure-img-wrap`: `background: #ffffff; border: 1px solid #f1f5f9; border-radius: 8px;`
   - `.btn-figure-zoom`: 浅天蓝微边框按钮，与微暖纸感完全和谐。
3. **滚动锁定与 Zero-CLS**:
   - `body.lightbox-open { overflow: hidden; }`
   - `.figure-img-wrap`: 设置 `min-height: 160px; max-height: 320px;`，内部 `img`: `width: 100%; height: 100%; object-fit: contain;`，加载时不发生布局抖动。

---

## 4. 回归与安全清单
- **既有 13 套单测保护**:
  - `test_sw_and_error.js`: 同步更新 `ai-agent-shell-v8` 与 `data/figures_meta.js` 预缓存断言；
  - `test_reader_friendly.js`: 保护滚动追踪与暂停恢复状态机不受图表卡片影响；
  - `test_echo_mode.js`, `test_sentence_repeat.js`: 保护跟读与单句循环不受图表 DOM 影响。
- **渲染安全**: 坚持使用 `<img src="..." />`，标题使用 `escapeHtml` / `textContent`，彻底消除 SVG 内联脚本注入风险。
- **权限与边界**: 全量 114 处图表无死角映射；未匹配图表的段落通过防空守卫跳过，保持零侵入。

---

## 5. 实现步骤（细粒度，每步带 verify + 提交点）

### Step 7.1: 全量双语图表资产部署与位图优化
- **做什么**:
  - 创建 `assets/figures/zh/` 和 `assets/figures/en/`；
  - 同步复制原书 135 个图表文件至对应目录；
  - 对 2.5MB 的 `fig2-7.png` 使用优化脚本进行高质量压缩（体积降至 350KB 以下）；
  - 确保中英文目录均包含完整可访问的矢量 SVG 与 PNG 图表。
- **涉及文件**: `assets/figures/zh/`, `assets/figures/en/`
- **测试**:
  - 检查两个目录各包含 >= 135 个文件；
  - 检查 `fig2-7.png` 压缩后大小小于 350,000 字节；
  - 检查 `n8n-workflow.png` 与 `fig1-1.svg` 存在。
- **覆盖矩阵**: 正常✓ 异常✓ 权限— 空数据✓ 重复✓ 边界✓ 旧数据✓ 回归✓
- **verify**:
  `node -e 'const fs=require("fs"); const zh=fs.readdirSync("assets/figures/zh"); const en=fs.readdirSync("assets/figures/en"); if(zh.length < 135 || en.length < 135 || !fs.existsSync("assets/figures/zh/fig1-1.svg") || !fs.existsSync("assets/figures/en/fig1-1.svg") || !fs.existsSync("assets/figures/zh/n8n-workflow.png") || fs.statSync("assets/figures/zh/fig2-7.png").size >= 350000) process.exit(1); console.log("✅ Step 7.1 assets deployed and optimized:", zh.length, "files");'`
- **guard**: `node tests/test_reader_friendly.js`
- **提交信息**: `chore(assets): sync and deploy bilingual figure assets to production directory`

---

### Step 7.2: 结构化图表元数据字典与全局挂载
- **做什么**:
  - 自动化提取并校验全书 114 处插图与 cue 的对应关系，输出 `data/figures_meta.js`；
  - 在 `reader.html` 中引入 `<script src="data/figures_meta.js"></script>`（置于 `data/chapters_meta.js` 之后）；
- **涉及文件**: `data/figures_meta.js`, `reader.html`
- **测试**:
  - 检查 `window.FIGURES_META` 包含 11 个章节 key（introduction + chapter1~10）；
  - 检查全书图表总数为 114 项；
  - 检查图表条目包含 `fig_id`, `cue_id`, `num`, `title_zh`, `title_en`, `file`；
  - 检查 `reader.html` 中包含 script 引入。
- **覆盖矩阵**: 正常✓ 异常✓ 权限— 空数据✓ 重复✓ 边界✓ 旧数据✓ 回归✓
- **verify**:
  `node -e 'global.window=global; require("./data/figures_meta.js"); const m=window.FIGURES_META; if(!m || !m.chapter1 || !m.chapter2) process.exit(1); const total=Object.values(m).reduce((s, a) => s + a.length, 0); if(total !== 114) process.exit(1); const html=require("fs").readFileSync("reader.html","utf8"); if(!html.includes("data/figures_meta.js")) process.exit(1); console.log("✅ Step 7.2 figures_meta valid with 114 items and mounted");'`
- **guard**: `node tests/test_dataloader.js`
- **提交信息**: `feat(figures): build structured figure metadata registry and mount to reader`

---

### Step 7.3: 正文流内嵌图表卡片渲染、防误触双保险与双主题防眩样式
- **做什么**:
  - 在 `js/app.js` 的 `renderTranscript(meta)` 中增加防空守卫安全读取 `window.FIGURES_META`；
  - 匹配当前 cue 并动态挂载 `.cue-figure-card`；
  - 在 `.cue-figure-card` 及其所有按钮增加 `e.stopPropagation()`，点击触发 `openFigureLightbox(fig)`；
  - 在外层 `card.addEventListener('click', ...)` 增加 `if (e.target.closest('.cue-figure-card')) return;` 防误触门禁；
  - 在 `css/style.css` 实现黑夜深海毛玻璃 + 防眩白板衬底，以及白天米白微暖卡片；配置自适应高度与 Zero-CLS 占位；
  - 创建 `tests/test_figures.js` 阶段 1 测试（覆盖元数据完整性、DOM 内嵌渲染、防误触门禁隔离）。
- **涉及文件**: `js/app.js`, `css/style.css`, `tests/test_figures.js`
- **测试**:
  - 运行 `node tests/test_figures.js` 验证内嵌渲染与防误触隔离；
  - 运行 `node tests/test_reader_friendly.js` 验证滚动追踪与防空守卫完好。
- **覆盖矩阵**: 正常✓ 异常✓ 权限— 空数据✓ 重复✓ 边界✓ 旧数据✓ 回归✓
- **verify**:
  `node tests/test_figures.js && node tests/test_reader_friendly.js`
- **guard**: `node tests/test_echo_mode.js && node tests/test_sentence_repeat.js`
- **提交信息**: `feat(figures): render inline figure cards in transcript with anti-glare styling and click isolation`

---

### Step 7.4: 全屏沉浸大图预览 Lightbox 模态框与双语即时切换
- **做什么**:
  - 在 `reader.html` 挂载 `#modal-figure-lightbox` 模态弹窗（使用 `.modal-close-btn`，无内联 `style="display:none;"`）；
  - 在 `js/app.js` 实现 `openFigureLightbox(fig)` 与 `closeFigureLightbox()`；
  - 实现 `#btn-lightbox-lang-toggle` 局部切图（只改变弹窗内的图片与文字，绝不派发全局 `langchange`、绝不重绘背景正文）；
  - 实现打开弹窗锁定 `document.body.classList.add('lightbox-open')`，关闭时解锁；
  - 绑定 ESC 按键、关闭按钮、遮罩点击关闭事件；
  - 在 `css/style.css` 完善 Lightbox 动画、`body.lightbox-open { overflow: hidden; }` 与高保真样式；
  - 在 `tests/test_figures.js` 中增加阶段 2 测试（覆盖 Lightbox 打开/关闭、局部双语切换、滚动锁定）。
- **涉及文件**: `reader.html`, `js/app.js`, `css/style.css`, `tests/test_figures.js`
- **测试**:
  - 运行 `node tests/test_figures.js` 验证弹窗与状态机；
  - 运行 `node tests/test_shortcuts.js` 验证 ESC 关闭链路。
- **覆盖矩阵**: 正常✓ 异常✓ 权限— 空数据✓ 重复✓ 边界✓ 旧数据✓ 回归✓
- **verify**:
  `node tests/test_figures.js && node tests/test_shortcuts.js`
- **guard**: `node tests/test_reader_friendly.js`
- **提交信息**: `feat(figures): add full-screen figure lightbox modal with independent bilingual toggle`

---

### Step 7.5: Service Worker 升至 v8 与全量测试套件闭环
- **做什么**:
  - `sw.js`: 升级 `CACHE_SHELL_NAME = 'ai-agent-shell-v8'`，在 `STATIC_ASSETS` 中加入 `'data/figures_meta.js'`；
  - `tests/test_sw_and_error.js`: 同步更新断言为 `'ai-agent-shell-v8'` 并断言预缓存包含 `'data/figures_meta.js'`；
  - 在 `tests/test_figures.js` 中补齐全量断言（8 项维度）：
    1. Test 1: `window.FIGURES_META` 114 处条目完整性与字段格式；
    2. Test 2: `assets/figures/zh` 与 `assets/figures/en` 135 个资产文件存在性与 `fig2-7.png` 压缩验证；
    3. Test 3: `reader.html` 与 `sw.js` 预加载/预缓存声明断言；
    4. Test 4: `renderTranscript` 成功为带图 cue 渲染 `.cue-figure-card`，无图 cue 零多余 DOM；
    5. Test 5: 外层卡片点击事件隔离与防误触（`closest('.cue-figure-card')` 阻止音频 seek）；
    6. Test 6: Lightbox 状态机（打开、关闭、ESC 键、背景遮罩点击、Body 滚动锁定）；
    7. Test 7: Lightbox 局部中英切换不触发全局 `langchange` 与正文重绘；
    8. Test 8: 黑夜防眩白板衬底样式与白天模式隔离静态规则断言。
  - 运行全量 14 套测试套件，保证 100% 绿灯通过。
- **涉及文件**: `sw.js`, `tests/test_sw_and_error.js`, `tests/test_figures.js`
- **测试**:
  - 14 套测试全部执行并通过。
- **覆盖矩阵**: 正常✓ 异常✓ 权限— 空数据✓ 重复✓ 边界✓ 旧数据✓ 回归✓
- **verify**:
  `for f in tests/test_*.js; do node "$f" || exit 1; done`
- **guard**: `for f in tests/test_*.js; do node "$f" || exit 1; done`
- **提交信息**: `test(figures): add comprehensive figure tests and bump sw shell cache to v8`

---

## 6. 回归清单
| 功能模块 | 回归测试命令 | 预期效果 |
| :--- | :--- | :--- |
| **PWA 离线缓存与版本** | `node tests/test_sw_and_error.js` | 缓存名称升级为 `v8`，`figures_meta.js` 预缓存成功 |
| **字幕滚动与恢复追踪** | `node tests/test_reader_friendly.js` | 图表插入不破坏滚动高度与用户分离检测，防空守卫生效 |
| **单句重复与音频泄露** | `node tests/test_sentence_repeat.js` | 包含图表的句子重复播放边界准确 |
| **跟读四步模式** | `node tests/test_echo_mode.js` | 跟读状态在图表卡片上正常流转 |
| **快捷键系统** | `node tests/test_shortcuts.js` | ESC 优先关闭 Lightbox，不与原有快捷键冲突 |
| **全量回归总门禁** | `for f in tests/test_*.js; do node "$f" || exit 1; done` | 全部 14 套自动化测试 100% 通过 |
