# Context: article-figures-lightbox

## 任务类型
feature (新功能)

## 项目结构
- `reader.html`: 精听阅读器主界面，包含字幕滚动区 `#transcript-list`、播放控制器、全屏弹窗挂载点。
- `index.html`: 首页章节目录与落地页。
- `css/style.css`: 全站样式表，包含白天微暖纸感主题（`[data-theme="light"]`）与黑夜深海天幕主题（`:root:not([data-theme="light"])`）。
- `js/app.js`: 核心前端单例控制器，包含 `renderTranscript()`, `highlightCue()`, `seekToCue()`, `state`, 语言切换 `toggleLanguage()` 等。
- `data/chapters_meta.js`: 章节元数据列表 `window.CHAPTERS_META`。
- `data/chapter*.js`, `data/introduction.js`, `data/afterword.js`: 各章节字幕数组（`cues`）。
- `repo/book/images/`: 原书中文版矢量图表与插图（135 个文件，包含全部 `figX-Y.svg` 与少量 `.png`）。
- `repo/book-en/images/`: 原书英文版矢量图表与插图（135 个文件，与中文版一一对应的全英图标注）。
- `assets/`: 站点公共静态资源目录。
- `sw.js`: Service Worker 离线缓存引擎。
- `tests/`: 自动化测试目录（Node.js 原生断言环境）。

## 代码风格
- 纯原生 ES6+ / HTML5 / CSS3，零打包器（无 Webpack/Vite），无任何第三方大型外部依赖。
- 状态驱动 UI：全局单例 `app.state` 统一管理播放、激活卡片、语言、模式等状态。
- 模块扩展：通过单例命名空间对象（如 `DynamicDataLoader`, `EchoController`, `SleepTimer`）组织扩展能力。
- 严格的主题作用域隔离：黑夜模式规则使用 `:root:not([data-theme="light"])`，白天模式使用 `[data-theme="light"]`，杜绝样式泄漏。
- 严禁使用裸 ID 选择器修改核心交互元素样式，避免破坏特异性层级。

## 数据层
- 目前各章节的字幕数据 `cues` 格式为 `{ id: number, start: number, end: number, en: string, zh: string }`。
- 原书 Markdown 中共包含 **114 处插图标记**（`![caption](images/figX-Y.svg)`），在 TTS 语音合成时被转写为 `"As illustrated in Figure X-Y..."` 与 `"如图X-Y所示：..."`。
- 本次需要建立结构化图表元数据（例如 `data/figures_meta.js` 或直接与 cue/chapter 关联），准确记录每个图表编号、中英文标题、中英文 SVG 路径及对应的 `chapterKey` 和 `cue_id`。

## API 设计
- 纯前端静态站点，无后端动态 API。
- 图表资源作为静态文件通过 Web 服务器或 CDN 直接分发。
- 双语图表切换通过前端 `isZhLang()` 状态驱动。

## 业务逻辑
- **调用路径**:
  1. `loadChapter(key)` 加载章节数据并调用 `renderTranscript(meta)`；
  2. `renderTranscript(meta)` 遍历 `state.cues`，若当前 `cue` 在图表映射表中存在关联的 `figure`，则在其下方构建渲染 `.cue-figure-card`；
  3. `.cue-figure-card` 内嵌展示矢量缩略图（SVG），配有图表徽标、标题、放大操作按钮；
  4. 点击 `.cue-figure-card` 或放大按钮触发 `e.stopPropagation()`（不打断播放），调用 `openFigureLightbox(fig)` 打开全屏灯箱；
  5. Lightbox 支持中英双语图片一键即时对比切换、关闭按钮、ESC 键退出与背景遮罩点击退出；
  6. 当用户切换页面语言时，页面内的所有图表卡片及当前打开的 Lightbox 标题与图片自适应切换为对应语言版本。

## 构建与部署
- 构建: 纯静态项目，无编译打包步骤。
- CI / 本地测试: `for f in tests/test_*.js; do node "$f" || exit 1; done`（必须 100% 绿灯）。
- 部署: 自动化 Git 流程，最终合并至 `master` 并推送至 `origin/master`。
- 约束: 绝对保证现有音频同步高光、滚动追踪、跟读四步、中英切换等核心链路零回归。

## 测试方式
- 单测/集成测试: `tests/test_*.js`，运行命令 `node tests/<test_file>.js`。
- 本次新增专门测试套件 `tests/test_figures.js`，覆盖图表元数据映射准确性、DOM 渲染、中英双语自适应、Lightbox 状态机与事件冒泡隔离。

## 可复用的现有实现
- `js/app.js` 的 `isZhLang()`: 判定当前语言。
- `js/app.js` 的 `SVGS`: 内置矢量图标库（可复用或扩展放大/关闭等小图标）。
- `js/app.js` 的 `showToast()`: 提示通知工具。
- `css/style.css` 的深海天幕暗夜设计系统与白天微暖纸感主题类。
- `repo/book/images/` 与 `repo/book-en/images/`: 现成的 135 张中英文高清矢量图表资产。

## 风险点（初判）
1. **事件冒泡误触音频跳转**: 点击图表或放大按钮时，如果未调用 `e.stopPropagation()`，会误触发外层 `.cue-card` 的 `seekToCue(cue)` 导致音频意外重播。
2. **暗夜模式刺眼（Anti-Glare）**: 原书 SVG 中部分背景或线条为高对比设计，在暗黑天幕下直接大面积展示可能晃眼，需要给图表卡片与 Lightbox 配置优雅的暗夜防眩衬底与白板居中渲染。
3. **大尺寸 PNG 流量风险**: `fig2-7.png`（注意力热力图）原图达 2.5MB，直接复制会增大仓库与加载负担，应进行无损/高质量压缩（压缩至 200KB 级别），133 张 SVG 仅 1.4MB 则完全无损复制。
4. **移动端垂直空间占用**: 图表内嵌在长图文列表中，需设置合理的最大高度（如 `max-height: 320px`）和自适应宽度，避免在手机端占据过多视口。
