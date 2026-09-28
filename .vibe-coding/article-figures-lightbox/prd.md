# PRD: article-figures-lightbox

## 1. 背景与问题
- **背景**: 《深入理解 AI Agent》一书包含 114 处核心技术架构图、序列图和对比流程图（SVG 矢量图与少量 PNG）。这些图表系统性地解释了 Agent 核心理论（如上下文窗口结构、Attention 热力图、MCP 协议交互、多 Agent 协作网络等）。
- **痛点**: 在既有实现中，TTS 语音流将图表标记转写为口述句（如 `"As illustrated in Figure 2-1..."` / `"如图2-1所示：..."`），并在界面上渲染为普通纯文本字幕卡片。读者在听读过程中“只闻其声、未见其图”，关键技术架构无法直观吸收，技术精听体验存在断层。
- **目标**: 落实方案 1——在正文流中内嵌自适应图表卡片，并提供全屏沉浸大图预览弹窗（Lightbox），支持中英双语图表自适应与对照，全面提升技术听读体验。

---

## 2. 目标用户
- 正在使用 TechVoice 进行技术书双语精听与阅读的开发者、架构师、算法研究员与学生。

---

## 3. 核心使用场景
- **场景 1: 伴随听读无缝看图**: 当音频播放到包含图表引用的字幕句时，该卡片内部清晰展示对应的矢量架构图，图文声三位一体，无需额外检索或停顿。
- **场景 2: 点击放大细看架构细节**: 针对包含复杂流程或微小文本的架构图，读者点击图表或右上角的“放大”按钮，即可弹出沉浸式全屏 Lightbox 弹窗，以高清大图方式浏览细节。
- **场景 3: 中英双语图表即时对照**: 用户在全屏 Lightbox 中，可随时点击“中/英切换”胶囊，在中文版图表（中文标注）与英文版图表（英文标注）之间无缝切换，对照学习英文专业术语。
- **场景 4: 快速无感关闭**: 用户查看完毕后，通过按 `ESC` 键、点击右上角关闭按钮或点击半透明背景遮罩，即可退出大图预览，页面维持原有播放与滚动位置，音频连续播放不受打断。

---

## 4. 功能范围（In Scope）

### F-1: 图表静态资源全量规范化部署
- 将原书 `repo/book/images/`（中文版）与 `repo/book-en/images/`（英文版）中全量 135 个图表文件（覆盖正文引用的全部 114 处图表），规范化同步至前端生产目录 `assets/figures/zh/` 与 `assets/figures/en/`，保持与原书图表库一致。
- 对超大体积位图（`fig2-7.png` 达 2.5MB）进行无损/高质量压缩（降至 200KB 级），133 张 SVG（总体积仅 1.4MB）保持原生矢量无损，确保极速加载。

### F-2: 结构化图表元数据字典（`data/figures_meta.js`）与页面挂载
- 建立标准结构化数据 `window.FIGURES_META`，按 `chapterKey` 索引，定义每张图表的：
  - `fig_id`: 图表唯一标识（如 `"fig2-1"` 或 `"n8n-workflow"`）
  - `cue_id`: 对应的字幕卡片 id
  - `num`: 图表编号（如 `"2-1"` 或 `"1-7"`）
  - `title_zh`: 中文标题（如 `"上下文窗口的构成概览"`）
  - `title_en`: 英文标题（如 `"Overview of the Context Window Composition"`）
  - `file`: 文件名含扩展名（兼容 `.svg` 与 `.png`，如 `"fig2-1.svg"`、`"n8n-workflow.png"`）
- **显式页面挂载与缓存声明**:
  - `reader.html`: 在 `<script src="data/chapters_meta.js"></script>` 后显式引入 `<script src="data/figures_meta.js"></script>`，保证首屏渲染字幕前元数据就绪；
  - `sw.js`: 在 `STATIC_ASSETS` 中加入 `'data/figures_meta.js'` 纳入 App Shell 离线预缓存；
  - `tests/test_sw_and_error.js`: 同步增加对 `data/figures_meta.js` 预缓存声明的断言校验。

### F-3: 正文流内嵌图表卡片（Inline Figure Card）与防误触双保险
- 在 `js/app.js` 的 `renderTranscript()` 中，当渲染到对应 `cue` 时，自动构建并插入 `.cue-figure-card`：
  - 顶部徽标栏：显示 `📊 图 2-1: 标题`（根据当前语言 `isZhLang()` 自动显示中文或英文标题，使用安全 `textContent`）；
  - 图片展示区：渲染 `<img class="cue-figure-img" src="..." loading="lazy" alt="..." />`（严格使用 `<img>` 标签，杜绝内联 SVG 的 XSS 隐患）；
  - 放大触发：配有视觉清晰的“点击全屏查看 / Click to Zoom”悬浮提示或微按钮；
  - **防误触双保险机制**:
    - 内层：`.cue-figure-card` 及其所有子元素点击监听器显式调用 `e.stopPropagation()`；
    - 外层：在卡片全局点击处理函数中增加防御门禁：`if (e.target.closest('.cue-figure-card')) return;`，彻底杜绝查看图片时误触发音频播放跳转。

### F-4: 全屏沉浸大图预览弹窗（Figure Lightbox Modal）与状态机规范
- 复用既有 `.modal-overlay` 体系（挂载 `<div class="modal-overlay" id="modal-figure-lightbox">`）：
  - 半透明高斯模糊背景遮罩（`rgba(0, 0, 0, 0.82)` + `backdrop-filter: blur(8px)`）；
  - 居中展示高清大图，使用 `<img class="lightbox-figure-img" src="..." alt="..." />` 渲染（安全隔离）；
  - 顶部/底部信息栏：显示图表双语标题与编号；
  - **交互状态机与语言隔离契约**:
    - Lightbox 内部的 `[ 中文版 / English ]` 切图胶囊为**局部预览对比状态**，只切换弹窗内的图片 `src` 与标题文本，**绝不派发全局 `langchange` 事件、绝不全量重绘正文字幕**，保障正文滚动视口丝毫不动；
    - 全局语言在导航栏变更时（如用户在外面切换语言），当前已打开的 Lightbox 弹窗自适应跟随；
    - 关闭 Lightbox 再次打开新图表时，默认继承当前全局阅读器语言。
  - **滚动穿透防护**: 打开 Lightbox 时为 `document.body` 添加锁定类名（防止滚轮穿透至字幕列表触发 `isUserDetached`），关闭时解除。
  - 多通道便捷关闭：支持键盘 `ESC`、点击右上角关闭按钮、点击背景遮罩退出。

### F-5: 双模式视觉防眩设计（Anti-Glare Design）
- **黑夜深海天幕模式（`:root:not([data-theme="light"])`）**：
  - 图表卡片背景使用 `rgba(15, 23, 42, 0.75)` 深色毛玻璃与冷岩灰描边；
  - 针对白底/浅底矢量图，在图片外层包裹圆角微亮衬底白板（`background: #ffffff; border-radius: 8px; padding: 10px;`），既确保架构图深色文字与箭头清晰可见，又避免无边界大面积白光刺眼；
- **白日微暖纸感模式（`[data-theme="light"]`）**：
  - 采用微暖纸白底色与米灰细腻描边，与正文排版浑然一体。

### F-6: 语言响应式联动
- 当用户在阅读器切换中/英界面语言时，正文中的所有图表卡片标题及当前打开的 Lightbox 图片与标题即时无缝刷新。

### F-7: Service Worker 离线引擎与全量测试闭环
- `sw.js` 缓存版本由 `ai-agent-shell-v7` 升级为 `ai-agent-shell-v8`；
- 同步更新既有单测 `tests/test_sw_and_error.js` 中对 `ai-agent-shell-v8` 的断言以及对 `data/figures_meta.js` 预缓存声明的断言；
- 新增 `tests/test_figures.js` 自动化测试套件；
- 全量自动化测试套件 100% 绿灯。

---

## 5. 不在本次范围（Out of Scope）
- 不在正文外部增加复杂的多级图表独立侧边栏画廊（保持正文聚焦，避免 UI 混乱）。
- 不支持图表批注、涂鸦或本地用户上传。

---

## 6. 边界情况
1. **无图表章节**: 如 `afterword`（后记）或无插图段落，排版完全保持原有字幕渲染，零多余 DOM 注入，零性能损耗。
2. **移动端垂直空间占用**: 针对手机窄屏，图片容器配置 `max-height: 260px`，移动端体验紧凑流畅。
3. **点击事件与播放联动**: 依靠内层 `stopPropagation()` 与外层 `closest('.cue-figure-card')` 双保险，保证查看/缩放图片时音频稳定播放不中断。
4. **离线与断网状态**: 未缓存图片网络加载异常时，触发 `onerror` 降级显示图表双语占位文案，绝不造成页面白屏或卡死。
5. **多次快速触发 Lightbox**: 采用全局单例模态框，防止重复创建多个 DOM 遮罩造成内存泄漏或层叠混乱。

---

## 7. 成功标准（可验收）
1. 全书各章节（含 introduction、chapter1 ~ chapter10）中的图表在对应 cue 卡片中准确内嵌渲染；
2. 点击图表或放大按钮能平滑展开 Lightbox 全屏预览，`document.body` 滚动正确锁定；
3. Lightbox 中点击“中文版 / English”按钮可即时切换中英两版图表，且不触发表外正文全量重绘或跳动；
4. 按 `ESC` 键或点击遮罩能迅速关闭 Lightbox；
5. 点击图表与操作 Lightbox 期间，音频播放正常进行，无意外重播；
6. 在黑夜模式下图表容器具备防眩白板/衬底类名与样式隔离，无裸 ID 选择器污染，且新增自动化测试断言该类名与属性；
7. 全量自动化测试（既有 13 套 + 新增图表测试，共 14 套）100% 通过。

---

## 8. 复杂逻辑清单
- [ ] 权限控制: 无（全站公开）
- [ ] 计费 / 配额: 无
- [ ] 通知: 无
- [x] 数据迁移 / 向后兼容: 既有 `cues` 格式完全保持兼容，通过追加的 `figures_meta.js` 挂载，不破坏历史数据
- [x] 国际化 / 时区: 包含，图表支持中/英双语矢量图与标题切换，Lightbox 具备独立局部对比切换器
- [ ] 审计日志: 无

---

## 9. 非功能需求
- **轻量原生**: 不引入任何第三方 Lightbox 或弹窗 npm 依赖包，复用现有 `.modal-overlay` 体系。
- **渲染安全**: 大图与缩略图一律使用 `<img>` 标签，标题使用 `textContent` 渲染，彻底杜绝 SVG 脚本注入。
- **渲染性能**: 图片使用原生 `loading="lazy"`，仅在滚动到视口附近时加载，首屏无额外网络负担。
- **零布局抖动（Zero-CLS）**: 图表卡片容器预设最小高度与宽高比，避免图片加载瞬间发生字幕列表位移跳动。
