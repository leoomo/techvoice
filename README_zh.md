# TechVoice · 《深入理解 AI Agent》中英双语精听小站

<div align="center">

[English](README.md) • **中文简体**

<br>

[![Audio Duration](https://img.shields.io/badge/Audio_Duration-20h_56m-blue.svg?style=flat-square&logo=podcast)](https://github.com/bojieli/ai-agent-book)
[![Chapters](https://img.shields.io/badge/Chapters-12_Complete-indigo.svg?style=flat-square)](https://github.com/bojieli/ai-agent-book)
[![Aligned Sentences](https://img.shields.io/badge/Aligned_Cues-8%2C052_Sentences-success.svg?style=flat-square)](https://github.com/bojieli/ai-agent-book)
[![Sub-Sections](https://img.shields.io/badge/Sub--Sections-293_Markers-orange.svg?style=flat-square)](https://github.com/bojieli/ai-agent-book)
[![Languages](https://img.shields.io/badge/Languages-Bilingual_(EN%2FZH)-emerald.svg?style=flat-square)](#)
[![License](https://img.shields.io/badge/License-MIT_%2F_CC--BY--SA_4.0-lightgrey.svg?style=flat-square)](#开源许可与致谢)

<p align="center">
  <b>让技术好书成为随时随地可精听的有声伴侣。</b><br>
  涵盖全书 12 章节、20 小时 56 分钟英文高精度朗读，配有 8,052 句中英对照逐句字幕与 293 处多级小节导航。
</p>

[🌐 在线精听体验](#快速开始) • [📖 章节目录与时长](#全书章节总览) • [✨ 核心功能](#核心功能) • [🛠️ 制作管线](#有声书制作管线) • [⌨️ 快捷键](#快捷键操作指南)

</div>

---

> [!IMPORTANT]
> ### 📌 版权归属与独立制作声明 (Attribution & Disclaimer)
> 
> * **原书版权**：中文原著《深入理解 AI Agent：设计原理与工程实践》（*AI Agents in Depth: Design Principles and Engineering Practice*）著作权归作者 **李博杰博士**（Dr. Bojie Li，Pine AI 联合创始人兼首席科学家，前微软亚洲研究院首席研究员）所有。
>   * 原书开源仓库：[github.com/bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book)
>   * 官方在线阅读：[bojieli.github.io/ai-agent-book/astro/](https://bojieli.github.io/ai-agent-book/astro/)
>   * 官方多语言电子书发布：[Releases (15 种语言 EPUB / PDF)](https://github.com/bojieli/ai-agent-book/releases)
> * **英文有声版声明**：本站及本仓库中的 **英文朗读音频、中英文逐句时间戳对齐数据、独立网页播放器及交互界面，均为站长个人独立制作与整理，并非原书作者官方发布的产品**。制作初衷为方便散步、通勤等碎片时间精听开源优质技术书，同时磨练技术英文听力与系统设计思维。

---

## 🎧 项目概述

现代大型语言模型（LLM）与智能体系统正经历爆发式演进。李博杰老师的开源力作《深入理解 AI Agent》系统总结了构建现代智能体系统的核心公式：
$$\text{Agent} = \text{LLM} (\text{大脑}) + \text{上下文} (\text{眼睛}) + \text{工具} (\text{手脚})$$
以及系统工程闭环：
$$\text{Agent} = \text{Model} + \text{Harness} (\text{约束} + \text{验证} + \text{纠错})$$

为了让开发者能够在通勤、散步、运动等场景随时随地研读这本厚重的工程专著，本项目完成了对全书 12 个章节的英文语音转制，并构建了轻量高效的**中英双语同步精听 Web 播放器**。

---

## ✨ 核心功能

### 1. 沉浸式听读体验与三种视图模式
* **中英双语对照（Bilingual）**：主副标题双行对照，英文发音与中英字幕实时同步高亮。
* **纯英文磨耳朵（English Only）**：隐藏中文翻译，打造纯净母语级技术听力环境。
* **纯中文速览（Chinese Only）**：专注于中文译文，快速览阅全书技术要点。

### 2. 精准时序跟随与单句循环复读
* **智能平滑跟随（Auto-Scroll）**：当前播放的句子始终自动平滑滚动至屏幕黄金阅读区。手动滚动浏览时自动暂停跟随，点击按钮一键重新锁定。
* **单句循环（A-B Loop，快捷键 `R`）**：针对生疏长难句、专业架构名词，一键开启单句无限循环复读，反复听清技术细节。
* **毫秒级点击跳转**：点击任何一句字幕，音频瞬间精准 seek 到该句起点播放。

### 3. 293 处十进制层级小节精细导航
* **多级大纲树（Sidebar Outline Tree）**：侧边栏支持按 `1.1`、`1.1.1` 等十进制多级章节实时折叠与展开，一眼看清全书知识脉络。
* **波形刻度标记（Seekbar Ticks）**：进度条内嵌各个小节时间点刻度，悬停即刻预览小节标题。
* **分节卡片与顶部药丸**：播放正文中清晰插入分节卡片，顶部提供水平滑动药丸快速跨节跳转。

### 4. 离线就绪与 PWA 体验
* **一键章节离线缓存**：内置 CacheStorage 与 Service Worker，点击“缓存当前章节”即可断网离线收听。
* **独立离线文件**：项目根目录下提供全套标准的 `.mp3` 音频文件与匹配的 `.srt` / `.vtt` 双语字幕文件，可直接导入系统播放器或第三方播放软件。

### 5. 极速、纯粹、无干扰
* 零用户追踪、零广告、无需登录、秒开即听。
* 支持系统级深色（Dark）/ 浅色（Light）模式自适应切换。
* 全站完整的双语国际化（中/英界面自由切换）。

---

## 📖 全书章节总览

| # | 章节 (Chapter) | 英文标题 (Title EN) | 中文标题 (Title ZH) | 音频时长 | 句数 (Cues) | 小节数 |
|:---:|:---|:---|:---|:---:|:---:|:---:|
| **0** | Introduction | Practice Precedes Naming | 实践在前，命名在后 | 26:16 | 160 | 5 |
| **1** | Chapter 1 | Getting Started with AI Agents | 初识 AI Agent | 89:29 | 574 | 17 |
| **2** | Chapter 2 | Context Engineering | 上下文工程 | 142:17 | 974 | 42 |
| **3** | Chapter 3 | User Memory and Knowledge Bases | 用户记忆与知识库 | 123:22 | 755 | 25 |
| **4** | Chapter 4 | Tools and Protocols | 工具系统与协议 | 89:49 | 545 | 17 |
| **5** | Chapter 5 | Coding Agents and General-Purpose Agents | 代码智能体与通用智能体 | 140:26 | 902 | 20 |
| **6** | Chapter 6 | Interaction: Expanding Observation & Action Spaces | 交互：拓展观察与动作空间 | 114:12 | 779 | 35 |
| **7** | Chapter 7 | Evaluating Agents | Agent 评测 | 138:56 | 879 | 45 |
| **8** | Chapter 8 | Model Post-Training | 模型后训练 | 171:02 | 1045 | 41 |
| **9** | Chapter 9 | Continual Evolution of Agents | Agent 持续演进 | 84:00 | 536 | 14 |
| **10** | Chapter 10 | Multi-Agent Collaboration | 多 Agent 协作 | 124:08 | 822 | 29 |
| **11** | Afterword | Afterword: Co-Evolution of Two Clouds | 后记：两朵云的协同演化 | 12:19 | 81 | 3 |
| **Σ** | **全书总计** | **12 Chapters** | **12 个完整章节** | **20h 56m** | **8,052 句** | **293 节** |

---

## ⌨️ 快捷键操作指南

在播放器页面（`reader.html`）支持以下全局桌面快捷键：

| 快捷键 | 功能操作 |
|:---|:---|
| <kbd>Space</kbd> | 播放 / 暂停音频 |
| <kbd>←</kbd> | 快退 5 秒 |
| <kbd>→</kbd> | 快进 5 秒 |
| <kbd>↑</kbd> | 跳转到上一句字幕 |
| <kbd>↓</kbd> | 跳转到下一句字幕 |
| <kbd>R</kbd> | 开启 / 关闭当前句子单句循环复读（A-B Loop） |
| <kbd>Esc</kbd> | 关闭当前弹出的快捷键或关于弹窗 |

---

## 🛠️ 有声书制作管线

本项目不仅包含前端播放器，还沉淀了一套完整的开源技术书有声化与字幕对齐工作流：

```mermaid
flowchart LR
    A[原书 Markdown / 中文] --> B[口语化适配与清洗]
    B --> C[自然英文语音合成 Neural TTS]
    C --> D[时间戳抽取 .vtt / .srt]
    D --> E[句级对齐引擎 align_engine.py]
    E --> F[结构化播放数据 build_bilingual_data.py]
    F --> G[Web 同步播放器 & 离线缓存]
```

### 工具脚本说明
* **`audio_pipeline.py`**：负责章节切分、排版文本抽取、代码与数学公式口语化规整，调用神经 TTS 批量合成音频。
* **`align_engine.py`**：时间轴对齐引擎，利用动态时间规整与句级断句规则，将英文音频时间戳与中文翻译逐句精确挂钩。
* **`build_bilingual_data.py`**：将各章节生成的 `.srt` / `.vtt` 与结构化段落打包为前端专用的高效静态模块（`data/chapter*.js`）。
* **`data/sections_meta.json`**：全书 293 个层级子章节的锚点与起始时间映射。

---

## 🚀 快速开始与本地运行

本项目采用纯原生 Web 前端技术（HTML5 + CSS3 + Vanilla ES6），无需 Node.js 构建打包，零后端依赖。

### 1. 克隆仓库
```bash
git clone https://github.com/<your-username>/ai-agent-audiobook.git
cd ai-agent-audiobook
```

### 2. 启动本地静态服务器
可直接使用 Python 内置服务器或任意静态文件服务器：

```bash
# 使用 Python 3
python3 -m http.server 8000

# 或使用 Node.js / npx
npx serve .
```

### 3. 打开浏览器
* 首页书库导航：`http://localhost:8000/index.html`
* 播放器直达：`http://localhost:8000/reader.html#chapter1`

---

## 📂 项目目录结构

```text
├── index.html                   # 门户首页（图书介绍、章节选听、资源入口）
├── reader.html                  # 双语精听播放器主页面
├── css/
│   ├── style.css                # 播放器核心设计系统与响应式样式
│   └── landing.css              # 门户首页视觉样式
├── js/
│   ├── app.js                   # 播放器核心逻辑（音频同步、平滑跟随、快捷键、缓存）
│   └── i18n.js                  # 完整中英双语国际化翻译词典与切换器
├── data/
│   ├── chapters_meta.js         # 全书 12 章节元信息与小节索引
│   ├── sections_meta.json       # 293 处小节起止时间戳
│   ├── introduction.js          # 引言双语逐句数据
│   ├── chapter1.js ~ chapter10.js # 1-10 章双语逐句数据
│   └── afterword.js             # 后记双语逐句数据
├── assets/                      # 图标、封面与矢量素材
├── *.mp3                        # 全书各章节完整离线音频文件
├── *.vtt / *.srt                # 全书各章节时间戳字幕文件
├── align_engine.py              # 中英句子级时间戳对齐算法引擎
├── audio_pipeline.py            # 有声书语音合成与预处理工程管线
├── build_bilingual_data.py      # 前端播放数据编译构建脚本
├── sw.js                        # Service Worker 离线缓存支持
└── README.md                    # 项目说明文档
```

---

## 🔗 相关资源与官方链接

* **原书作者 GitHub**：[Dr. Bojie Li (@bojieli)](https://github.com/bojieli)
* **原书官方代码与资料库**：[bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book)
* **原书官方在线阅读版**：[bojieli.github.io/ai-agent-book/astro/](https://bojieli.github.io/ai-agent-book/astro/)
* **官方 15 种语言电子书发布**：[GitHub Releases (EPUB & PDF)](https://github.com/bojieli/ai-agent-book/releases)

---

## 📄 开源许可与致谢

* 原书《深入理解 AI Agent：设计原理与工程实践》版权归作者 **李博杰** 所有，根据原书开源协议传播。
* 本项目的播放器代码与数据对齐工程脚本采用 [MIT 许可证](LICENSE) 开源。
* 欢迎前往原作者李博杰老师的 GitHub 仓库 [bojieli/ai-agent-book](https://github.com/bojieli/ai-agent-book) 点亮 ⭐️ Star，致敬开源作者的无私贡献！
