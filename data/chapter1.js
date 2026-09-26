window.CHAPTER_DATA_chapter1 = [
  {
    "id": 1,
    "start": 0.1,
    "end": 3.9,
    "en": "Chapter 1: Getting Started with AI Agents.",
    "zh": "第1章：初识AI Agent。"
  },
  {
    "id": 2,
    "start": 3.85,
    "end": 14.075,
    "en": "If you have used Cursor to write code and watched it search your codebase, edit multiple files, and rerun tests until they pass, you have already used an AI Agent.",
    "zh": "如果你曾使用Cursor编写代码并观看它搜索你的代码库、编辑多个文件并重新运行测试直到通过，那么你已经使用过一个AI Agent了。"
  },
  {
    "id": 3,
    "start": 14.075,
    "end": 30.5,
    "en": "The same is true if you have used Deep Research to investigate a topic through repeated searching and reading, had Manus control a browser to finish online tasks, asked the Doubao phone assistant to book tickets or send messages, or sent Pine AI to negotiate a lower telecom bill.",
    "zh": "如果你曾使用Deep Research通过反复搜索和阅读来研究一个主题，让Manus控制浏览器完成在线任务，让Doubao手机助手帮你订票或发消息，或者让Pine AI协商更低的电信账单，同样的情况也适用。"
  },
  {
    "id": 4,
    "start": 30.5,
    "end": 39.45,
    "en": "These products take many forms, but they share a common trait: they are no longer passive \"you ask, it answers\" conversations.",
    "zh": "这些产品形式多样，但它们有一个共同的特点：它们不再是被动的“你提问，它回答”的对话。"
  },
  {
    "id": 5,
    "start": 39.45,
    "end": 47.375,
    "en": "They plan their own execution steps, call the tools each task requires, and adjust their strategy as results come in.",
    "zh": "它们会自己规划执行步骤，调用每个任务所需的工具，并根据结果调整策略。"
  },
  {
    "id": 6,
    "start": 47.375,
    "end": 51.787,
    "en": "AI Agents are becoming a new way to interact with computers.",
    "zh": "AI Agent正成为与计算机交互的一种新方式。"
  },
  {
    "id": 7,
    "start": 51.787,
    "end": 67.725,
    "en": "This chapter begins with practical examples and works back toward the core components of an AI Agent: readers will experience firsthand what modern Agents can do, understand the architecture behind them, and learn the design patterns and best practices for building Agent systems.",
    "zh": "本章从实际例子开始，逐步深入AI Agent的核心组件：读者将亲身体验现代Agent能做什么，理解其背后的架构，并学习构建Agent系统的设计模式和最佳实践。"
  },
  {
    "id": 8,
    "start": 67.725,
    "end": 78.85,
    "en": "Reading Tip: This chapter is the conceptual map for the whole book: a concise tour of the core formula, operating loop, engineering framework, and Agent design patterns.",
    "zh": "阅读提示：本章是整本书的概念地图：对核心公式、操作循环、工程框架和Agent设计模式的简要概述。"
  },
  {
    "id": 9,
    "start": 78.85,
    "end": 84.537,
    "en": "It establishes the shared vocabulary and reference points used throughout later chapters.",
    "zh": "它建立了后续章节中使用的共同术语和参考点。"
  },
  {
    "id": 10,
    "start": 84.537,
    "end": 89.925,
    "en": "Do not try to memorize every concept on your first read; aim for the big picture.",
    "zh": "第一次阅读时不要试图记住每一个概念；目标是把握整体画面。"
  },
  {
    "id": 11,
    "start": 89.925,
    "end": 97.237,
    "en": "Each later chapter expands on one aspect introduced here, and you can return to this chapter whenever you need to reorient.",
    "zh": "每一章都会扩展这里介绍的一个方面，当你需要重新定位时可以随时回到本章。"
  },
  {
    "id": 12,
    "start": 97.237,
    "end": 101.637,
    "en": "Modern Agent = LLM + Context + Tools.",
    "zh": "现代Agent = LLM + 上下文 + 工具。"
  },
  {
    "id": 13,
    "start": 101.637,
    "end": 110.987,
    "en": "At its simplest, a modern agent consists of three components: Agent = LLM (Large Language Model) + Context + Tools.",
    "zh": "最简单地说，现代Agent由三个组件组成：Agent = LLM（大型语言模型）+ 上下文 + 工具。"
  },
  {
    "id": 14,
    "start": 110.987,
    "end": 125.712,
    "en": "The plus signs here denote a combination of engineering components, not a formal definition from reinforcement learning; more importantly, the formula describes only what lies inside the Agent's boundary and does not include the Environment the Agent interacts with.",
    "zh": "这里的加号表示工程组件的组合，而不是强化学习中的正式定义；更重要的是，这个公式仅描述了Agent边界内的内容，不包括Agent所交互的环境。"
  },
  {
    "id": 15,
    "start": 125.712,
    "end": 129.825,
    "en": "Each term must be read broadly, but with a clear boundary:",
    "zh": "每个术语都应广泛理解，但要有明确的边界。"
  },
  {
    "id": 16,
    "start": 129.825,
    "end": 142.262,
    "en": "The LLM is the Agent's brain: It is more than a set of model parameters; it is the Agent's entire decision-making core—responsible for understanding intent, reasoning, planning, and judgment.",
    "zh": "LLM 是智能体的大脑：它不仅仅是模型参数的集合，更是智能体整个决策核心——负责理解意图、推理、规划和判断。"
  },
  {
    "id": 17,
    "start": 142.262,
    "end": 165.312,
    "en": "Just as the human brain is not merely a collection of neurons but also encompasses thought patterns sculpted through experience, an LLM's capabilities stem from two sources: world knowledge and linguistic proficiency acquired during pre-training, and decision policies solidified through post-training (specific techniques such as supervised fine-tuning and reinforcement learning are detailed in Chapter 8).",
    "zh": "就像人类大脑不仅仅是一组神经元，还包含了通过经验塑造的思维模式一样，LLM 的能力来源于两个方面：预训练期间获得的世界知识和语言能力，以及后训练过程中固化下来的决策策略（具体技术如监督微调和强化学习将在第8章详细说明）。"
  },
  {
    "id": 18,
    "start": 165.312,
    "end": 182.125,
    "en": "Context is the Agent's eyes: It is not merely the text fed into the model, but the information representation received and retained by the Agent at each decision point—including observations from the environment, user memory, domain knowledge, internal state, and task progress.",
    "zh": "上下文是智能体的眼睛：它不仅仅是输入模型的文本，而是智能体在每个决策点接收到并保留的信息表示，包括环境的观察结果、用户记忆、领域知识、内部状态和任务进展。"
  },
  {
    "id": 19,
    "start": 182.125,
    "end": 203.575,
    "en": "Tools are the Agent's hands and feet: Here, \"tools\" refers to the interfaces the Agent uses to perceive or transform the external world, encompassing tool definitions, calling protocols, and adapters—ranging from predefined tool invocations to dynamic code generation, and from delegating tasks to sub-agents to proactively communicating with users.",
    "zh": "工具是智能体的手和脚：这里的“工具”指的是智能体用来感知或改变外部世界的接口，包括工具定义、调用协议和适配器——从预定义的工具调用到动态代码生成，从将任务委派给子智能体到主动与用户沟通。"
  },
  {
    "id": 20,
    "start": 203.575,
    "end": 208.85,
    "en": "Put more intuitively: Agent = Brain + Eyes + Hands and Feet.",
    "zh": "更直观地说：智能体 = 大脑 + 眼睛 + 手和脚。"
  },
  {
    "id": 21,
    "start": 208.85,
    "end": 219.587,
    "en": "The brain handles reasoning and decisions, the eyes receive observations provided by the environment, and the hands and feet convert decisions into actions that operate upon the environment.",
    "zh": "大脑处理推理和决策，眼睛接收环境提供的观察结果，手和脚将决策转化为作用于环境的动作。"
  },
  {
    "id": 22,
    "start": 219.587,
    "end": 229.462,
    "en": "From the classical reinforcement-learning and control perspective, the Agent and the Environment are two sides of a closed-loop interaction, not components of one another.",
    "zh": "从经典的强化学习和控制视角来看，智能体和环境是闭环交互的两个方面，而不是彼此的组成部分。"
  },
  {
    "id": 23,
    "start": 229.462,
    "end": 239.787,
    "en": "The Environment returns an observation, the Agent uses its context to choose the next action, and that action changes the Environment's state, producing the next observation.",
    "zh": "环境返回一个观察结果，智能体利用其上下文选择下一步动作，该动作会改变环境的状态，产生下一个观察结果。"
  },
  {
    "id": 24,
    "start": 239.787,
    "end": 248.012,
    "en": "As illustrated in Figure 1-1: The Agent–Environment interaction loop and the Model–Harness structure inside the Agent.",
    "zh": "如图1-1所示：智能体-环境交互循环以及智能体内部的模型-工具链结构。"
  },
  {
    "id": 25,
    "start": 248.164,
    "end": 252.139,
    "en": "Figure 1-1 shows two levels of abstraction.",
    "zh": "图1-1展示了两个抽象层次。"
  },
  {
    "id": 26,
    "start": 252.089,
    "end": 264.501,
    "en": "The outer level is the interaction between the Agent and the Environment: the Environment includes file systems, databases, web pages, users, other Agents, and physical or simulated worlds.",
    "zh": "外层是智能体与环境之间的交互：环境包括文件系统、数据库、网页、用户、其他智能体以及物理或模拟世界。"
  },
  {
    "id": 27,
    "start": 264.501,
    "end": 282.789,
    "en": "The inner level is the Model–Harness structure inside the Agent: the Model makes policy decisions; the Harness is the runtime and governance layer inside the Agent boundary that builds context, exposes tool interfaces, maintains loops and state, and applies permissions, verification, and correction.",
    "zh": "内层是智能体内部的模型-工具链结构：模型做出策略决策；工具链是位于智能体边界内的运行时和治理层，它构建上下文，暴露工具接口，维护循环和状态，并应用权限、验证和纠正。"
  },
  {
    "id": 28,
    "start": 282.789,
    "end": 290.201,
    "en": "A Harness can create, isolate, or proxy an environment without containing the Environment's state or transition rules.",
    "zh": "工具链可以创建、隔离或代理环境，而无需包含环境的状态或转换规则。"
  },
  {
    "id": 29,
    "start": 290.201,
    "end": 304.064,
    "en": "The engineering formula can therefore be expanded as follows: the LLM is the Model, while Context + Tools form the minimum Harness; production systems add constraints, verification, and correction inside that boundary.",
    "zh": "因此，工程公式可以扩展为如下形式：LLM 是模型，而上下文 + 工具构成了最小的工具链；生产系统在该边界内添加约束、验证和纠正。"
  },
  {
    "id": 30,
    "start": 304.064,
    "end": 307.314,
    "en": "The rest of this chapter follows this boundary.",
    "zh": "本章其余部分将遵循这一边界。"
  },
  {
    "id": 31,
    "start": 307.314,
    "end": 317.214,
    "en": "These three components can be related to policies and interaction interfaces in RL (reinforcement learning; see Chapter 8), but they do not map one-to-one.",
    "zh": "这三个组件可以与强化学习（RL）中的策略和交互接口相关联（参见第8章），但它们并不是一一对应的。"
  },
  {
    "id": 32,
    "start": 317.214,
    "end": 324.139,
    "en": "Context represents observations and history inside the Agent; it is not the entire observation space.",
    "zh": "上下文代表智能体内部的观察和历史；它不是整个观察空间。"
  },
  {
    "id": 33,
    "start": 324.139,
    "end": 331.939,
    "en": "Tools define the observation and action interfaces available to the Agent, while the objects they act on remain in the Environment.",
    "zh": "工具定义了智能体可用的观察和动作接口，而它们所作用的对象仍位于环境中。"
  },
  {
    "id": 34,
    "start": 331.939,
    "end": 347.376,
    "en": "Intuition: Brain; Agent Component: LLM; RL Concept: Policy; Role: The decision-making logic that determines \"what to do next\"—given the current observations, choose the most appropriate action from all available options.",
    "zh": "直觉：大脑；智能体组件：大语言模型（LLM）；RL概念：策略；作用：决定“下一步该做什么”的决策逻辑——根据当前观察，从所有可用选项中选择最合适的动作。"
  },
  {
    "id": 35,
    "start": 347.376,
    "end": 361.276,
    "en": "Intuition: Eyes; Agent Component: Context construction; RL Concept: Observations and history; Role: Organizes Environment observations and existing history into the information needed for the current decision.",
    "zh": "直觉：眼睛；智能体组件：上下文构建；RL概念：观察和历史；作用：将环境的观察和现有历史组织成当前决策所需的信息。"
  },
  {
    "id": 36,
    "start": 361.276,
    "end": 377.851,
    "en": "Intuition: Hands and Feet; Agent Component: Tool interfaces & adapters; RL Concept: Observation/action interfaces; Role: Defines which observations the Agent can read, which actions it can issue, and the format of those interfaces.",
    "zh": "直觉：手和脚；智能体组件：工具接口和适配器；RL概念：观察/动作接口；作用：定义智能体可以读取的观察、可以发出的动作以及这些接口的格式。"
  },
  {
    "id": 37,
    "start": 377.851,
    "end": 383.001,
    "en": "Observation and Action Spaces: The Interface Between Model and World.",
    "zh": "观察空间和动作空间：模型与世界之间的接口。"
  },
  {
    "id": 38,
    "start": 383.001,
    "end": 390.176,
    "en": "Observation channels and action interfaces together constitute the boundary between the Agent and its external environment.",
    "zh": "观察通道和动作接口共同构成了智能体与其外部环境之间的边界。"
  },
  {
    "id": 39,
    "start": 390.176,
    "end": 400.789,
    "en": "The Harness translates observations returned by the environment into context the model can process, and converts the actions chosen by the model into tool calls against the environment.",
    "zh": "Harness会将环境返回的观察转换为模型可处理的上下文，并将模型选择的动作转换为针对环境的工具调用。"
  },
  {
    "id": 40,
    "start": 400.789,
    "end": 414.764,
    "en": "Information that does not enter context via observation channels effectively does not exist for the model; operations not permitted by action interfaces remain things the model can only recommend in words, even if it knows exactly what should be done.",
    "zh": "通过观察通道未进入上下文的信息，对模型而言实际上并不存在；未被动作接口允许的操作，即使模型完全知道应该怎么做，也只能通过文字推荐。"
  },
  {
    "id": 41,
    "start": 414.764,
    "end": 426.651,
    "en": "Consequently, once the underlying model is held constant, the primary systems-engineering lever for improving Agent performance is often to redefine or expand its observation and action spaces.",
    "zh": "因此，一旦底层模型保持不变，提升智能体性能的主要系统工程杠杆通常是重新定义或扩展其观察空间和动作空间。"
  },
  {
    "id": 42,
    "start": 426.651,
    "end": 431.776,
    "en": "In this book's terminology, that means expanding context and tools.",
    "zh": "在本书的术语中，这意味着扩展上下文和工具。"
  },
  {
    "id": 43,
    "start": 431.776,
    "end": 445.614,
    "en": "Many problems that appear to require a “smarter model” are really interface problems: bring the task-relevant data into context or expose the required operation as a tool, and a previously unsolvable task may become solvable.",
    "zh": "许多看似需要“更聪明的模型”的问题实际上是接口问题：将任务相关的数据带入上下文，或将所需操作作为工具暴露出来，一个之前无法解决的任务可能会变得可解。"
  },
  {
    "id": 44,
    "start": 445.614,
    "end": 449.189,
    "en": "Manus: merging spaces that had been separate.",
    "zh": "Manus：合并原本分离的空间。"
  },
  {
    "id": 45,
    "start": 449.189,
    "end": 457.551,
    "en": "Before Manus appeared, production Agents mostly followed three distinct tracks: Deep Research, Coding, and Computer Use.",
    "zh": "在Manus出现之前，生产型智能体主要遵循三个不同的路径：深度研究、编程和计算机使用。"
  },
  {
    "id": 46,
    "start": 457.551,
    "end": 463.664,
    "en": "Manus was the first widely influential production Agent to bring all three together in one system.",
    "zh": "Manus是第一个具有广泛影响力的生产型AI Agent，它将这三个要素整合到了一个系统中。"
  },
  {
    "id": 47,
    "start": 463.664,
    "end": 473.164,
    "en": "Its virtual browser enlarged the observation space, while its file system, code execution, and command execution enlarged the action space.",
    "zh": "它的虚拟浏览器扩展了观察空间，而其文件系统、代码执行和命令执行则扩展了动作空间。"
  },
  {
    "id": 48,
    "start": 473.164,
    "end": 478.101,
    "en": "Manus did not become a general Agent merely by swapping in a stronger model.",
    "zh": "Manus仅仅通过替换更强的模型，并不能成为通用型AI Agent。"
  },
  {
    "id": 49,
    "start": 478.101,
    "end": 486.576,
    "en": "It took the union of three kinds of Agents' observation and action spaces, enabling one Agent to cross the previous product boundaries.",
    "zh": "它需要三种AI Agent的观察和动作空间的结合，使一个AI Agent能够跨越之前产品的边界。"
  },
  {
    "id": 50,
    "start": 486.748,
    "end": 491.385,
    "en": "OpenClaw: extending the interface into the user's digital life.",
    "zh": "OpenClaw：将接口扩展到用户的数字生活之中。"
  },
  {
    "id": 51,
    "start": 491.335,
    "end": 494.873,
    "en": "OpenClaw pushes both spaces outward again.",
    "zh": "OpenClaw再次将这两个空间向外扩展。"
  },
  {
    "id": 52,
    "start": 494.873,
    "end": 507.998,
    "en": "It receives tasks and returns results through messaging channels users already inhabit—WhatsApp, Telegram, Slack, Discord, iMessage, and many others—so the Agent can be reached from almost anywhere.",
    "zh": "它通过用户已有的消息渠道接收任务并返回结果——如WhatsApp、Telegram、Slack、Discord、iMessage等，因此AI Agent可以从几乎任何地方被访问到。"
  },
  {
    "id": 53,
    "start": 507.998,
    "end": 514.823,
    "en": "Its local Gateway connects cloud applications such as Google Drive and Notion as well as the local file system.",
    "zh": "它的本地网关连接了云应用，如Google Drive和Notion，以及本地文件系统。"
  },
  {
    "id": 54,
    "start": 514.823,
    "end": 525.073,
    "en": "Files scattered across accounts and devices can therefore, with the user's explicit authorization, enter one Agent's observation space and be acted on by its tools.",
    "zh": "因此，在用户明确授权的情况下，分散在不同账户和设备上的文件可以进入一个AI Agent的观察空间，并由其工具进行处理。"
  },
  {
    "id": 55,
    "start": 525.073,
    "end": 536.323,
    "en": "Compared with the original cloud-sandbox-centered form of Manus, where files generally had to be uploaded or a connector separately configured, local-first OpenClaw spans a broader data boundary.",
    "zh": "与最初以云端沙盒为中心的Manus形式相比，其中文件通常需要上传或单独配置连接器，本地优先的OpenClaw覆盖了更广的数据边界。"
  },
  {
    "id": 56,
    "start": 536.323,
    "end": 549.323,
    "en": "Manus later added its own Google Drive connector and desktop access to local files, which only reinforces the point: product evolution often consists precisely of expanding observation and action spaces.",
    "zh": "Manus后来添加了自己的Google Drive连接器和对本地文件的桌面访问，这进一步证明了这一点：产品进化往往正是通过扩展观察空间和动作空间来实现的。"
  },
  {
    "id": 57,
    "start": 549.323,
    "end": 556.985,
    "en": "Understanding what each component does, and how they fit together, is the foundation for building effective Agent systems.",
    "zh": "理解每个组件的作用以及它们如何协同工作，是构建有效AI Agent系统的基础。"
  },
  {
    "id": 58,
    "start": 556.985,
    "end": 565.273,
    "en": "We will begin with the most concrete of the three—tools, the hands and feet—and work inward to the LLM and context.",
    "zh": "我们将从三个中最具体的部分开始——工具，即AI Agent的‘手’和‘脚’，然后逐步向内深入到大语言模型和上下文。"
  },
  {
    "id": 59,
    "start": 565.273,
    "end": 570.573,
    "en": "First, here is how different kinds of Agents compare across these three dimensions:",
    "zh": "首先，这里是不同类型的AI Agent在这三个维度上的比较："
  },
  {
    "id": 60,
    "start": 570.573,
    "end": 596.048,
    "en": "Agent Product: Coding Agents (e.g., Cursor); Eyes (Perception): Requirements documents, code snippets read, directory listings, terminal output; Hands and Feet (Action): Open-ended (code search, file read/write, command execution, etc.); Strategy: Incremental development: understand requirements → search relevant code → edit code → test and verify → debug and fix.",
    "zh": "AI Agent产品：编码AI（例如Cursor）；感知（Eyes）：需求文档、读取的代码片段、目录列表、终端输出；动作（Hands and Feet）：开放式的（代码搜索、文件读写、命令执行等）；策略：增量开发：理解需求→搜索相关代码→编辑代码→测试验证→调试修复。"
  },
  {
    "id": 61,
    "start": 596.048,
    "end": 620.523,
    "en": "Agent Product: Search Agents (e.g., Deep Research); Eyes (Perception): Search results, web content, paper abstracts and citations; Hands and Feet (Action): Open-ended (search queries, web reading, summary generation, etc.); Strategy: Iterative deepening: adjust search direction based on existing information, gradually synthesize a complete report.",
    "zh": "智能体产品：搜索智能体（例如深度研究）；感知（眼睛）：搜索结果、网页内容、论文摘要和引用；动作（手和脚）：开放式（搜索查询、网页阅读、摘要生成等）；策略：迭代深入：根据现有信息调整搜索方向，逐步综合出完整的报告。"
  },
  {
    "id": 62,
    "start": 620.523,
    "end": 645.61,
    "en": "Agent Product: Computer Control Agents (e.g., Browser Use); Eyes (Perception): Computer screen, browser pages, file system; Hands and Feet (Action): Open-ended (clicking, typing, scrolling, screenshots, code execution, etc.); Strategy: Visual perception + operation: observe screen → identify target elements → perform actions → verify results.",
    "zh": "智能体产品：计算机控制智能体（例如浏览器使用）；感知（眼睛）：计算机屏幕、浏览器页面、文件系统；动作（手和脚）：开放式（点击、输入、滚动、截图、代码执行等）；策略：视觉感知+操作：观察屏幕→识别目标元素→执行操作→验证结果。"
  },
  {
    "id": 63,
    "start": 645.61,
    "end": 667.46,
    "en": "Agent Product: Phone Assistant Agents (e.g., Doubao); Eyes (Perception): Phone screen, installed apps; Hands and Feet (Action): Open-ended (clicking, swiping, typing, opening apps, etc.); Strategy: Intent understanding + App control: understand user needs → locate target app → perform actions → confirm completion.",
    "zh": "智能体产品：手机助手智能体（例如斗宝）；感知（眼睛）：手机屏幕、已安装的应用程序；动作（手和脚）：开放式（点击、滑动、输入、打开应用等）；策略：意图理解+应用控制：理解用户需求→定位目标应用→执行操作→确认完成。"
  },
  {
    "id": 64,
    "start": 667.46,
    "end": 694.473,
    "en": "Agent Product: Personal Task Agents (e.g., Pine AI); Eyes (Perception): Authorized account records, historical bills, service provider materials; Hands and Feet (Action): Open-ended (making calls, sending emails, filling forms, confirming with user); Strategy: Multi-step task execution: gather information → formulate negotiation strategy → contact service provider → negotiate → report results.",
    "zh": "智能体产品：个人任务智能体（例如pine AI）；感知（眼睛）：授权账户记录、历史账单、服务商资料；动作（手和脚）：开放式（打电话、发送邮件、填写表单、与用户确认）；策略：多步骤任务执行：收集信息→制定谈判策略→联系服务商→协商→汇报结果。"
  },
  {
    "id": 65,
    "start": 694.473,
    "end": 711.748,
    "en": "These systems share three features: an open-ended action space—not picking from a fixed set of buttons but generating arbitrary natural language and code; internal reasoning—planning before acting; and continuous interaction—adjusting strategy based on environmental feedback.",
    "zh": "这些系统有三个特征：开放的动作空间——不是从固定的一组按钮中选择，而是生成任意的自然语言和代码；内部推理——在行动前进行规划；持续交互——根据环境反馈调整策略。"
  },
  {
    "id": 66,
    "start": 711.748,
    "end": 721.548,
    "en": "These capabilities come precisely from the interplay of the brain, eyes, and hands and feet—that is, LLM, context, and tools.",
    "zh": "这些能力正是大脑、眼睛和手足之间相互作用的结果，即大模型、上下文和工具。"
  },
  {
    "id": 67,
    "start": 721.548,
    "end": 724.748,
    "en": "Tools: The Agent's Hands and Feet.",
    "zh": "工具：智能体的手和脚。"
  },
  {
    "id": 68,
    "start": 724.748,
    "end": 736.323,
    "en": "Tools are the bridge for an Agent's interaction with the external world: perception tools carry observations from the environment to the Agent, while execution tools carry actions from the Agent to the environment.",
    "zh": "工具是智能体与外部世界互动的桥梁：感知工具将环境中的观察传递给智能体，而执行工具将智能体的动作传递到环境中。"
  },
  {
    "id": 69,
    "start": 736.323,
    "end": 744.348,
    "en": "Without tools, an Agent is limited to paper exercises; with them, it can genuinely perceive or transform the world.",
    "zh": "没有工具，智能体只能进行纸上谈兵；有了工具，它才能真正地感知或改变世界。"
  },
  {
    "id": 70,
    "start": 744.508,
    "end": 751.858,
    "en": "To discuss tools systematically, we can sort them into five types by the direction of the Agent's interaction with the world.",
    "zh": "为了系统地讨论工具，我们可以根据智能体与世界互动的方向，将它们分为五种类型。"
  },
  {
    "id": 71,
    "start": 751.808,
    "end": 758.92,
    "en": "For now, a few examples of each type will give us the overall picture; later chapters explore them in depth.",
    "zh": "目前，每种类型的几个例子将使我们有一个整体的认识；后续章节将深入探讨它们。"
  },
  {
    "id": 72,
    "start": 758.92,
    "end": 772.595,
    "en": "Perception Tools allow the Agent to access information: search engines provide real-time web data, file systems read local documents, and APIs and databases connect to external services and enterprise core data.",
    "zh": "感知工具让智能体能够获取信息：搜索引擎提供实时网络数据，文件系统读取本地文档，API和数据库连接到外部服务和企业核心数据。"
  },
  {
    "id": 73,
    "start": 772.595,
    "end": 784.895,
    "en": "Execution Tools allow the Agent to act on external systems: code execution, file operations, system commands, and external API calls turn decisions into concrete actions.",
    "zh": "执行工具让智能体能够对外部系统采取行动：代码执行、文件操作、系统命令和外部API调用将决策转化为具体行动。"
  },
  {
    "id": 74,
    "start": 784.895,
    "end": 798.045,
    "en": "Collaboration Tools allow the Agent to divide work with other Agents: delegating specialized tasks to sub-agents, requesting human confirmation at key decision points, or coordinating actions in multi-agent systems.",
    "zh": "协作工具让智能体能够与其他智能体分工合作：将专业任务委托给子智能体，在关键决策点请求人类确认，或在多智能体系统中协调行动。"
  },
  {
    "id": 75,
    "start": 798.045,
    "end": 808.933,
    "en": "Event Trigger Tools are invoked in a fundamentally different way from the first three categories: the Agent does not call them; they arrive as external inputs that trigger the Agent to begin work.",
    "zh": "事件触发工具与前三种类别以根本不同的方式被调用：智能体不会主动调用它们；它们作为外部输入到达，从而触发智能体开始工作。"
  },
  {
    "id": 76,
    "start": 808.933,
    "end": 819.083,
    "en": "A new email comes in, a scheduled time arrives, or another system fires a Webhook callback; the event activates the Agent and initiates reasoning and action.",
    "zh": "一封新邮件到达，预定时间到来，或另一个系统触发Webhook回调；这些事件会激活智能体并启动推理和行动。"
  },
  {
    "id": 77,
    "start": 819.083,
    "end": 827.758,
    "en": "The Agent never calls these itself, yet they are still a channel through which it interacts with the outside world, so we count them in the broad tool system.",
    "zh": "智能体不会自行调用它们，但它们仍然是智能体与外部世界交互的渠道，因此我们将其归入广义的工具系统中。"
  },
  {
    "id": 78,
    "start": 827.758,
    "end": 833.145,
    "en": "User Communication Tools are the channels through which the Agent communicates with the user.",
    "zh": "用户通信工具是智能体与用户沟通的渠道。"
  },
  {
    "id": 79,
    "start": 833.145,
    "end": 845.995,
    "en": "Where execution tools change the external world, communication tools carry information—delivering the Agent's progress, or a proactive check-in, by text message, voice call, email, and so on.",
    "zh": "执行工具改变外部世界，而通信工具传递信息——通过短信、语音通话、电子邮件等方式传达智能体的进展，或主动进行状态检查。"
  },
  {
    "id": 80,
    "start": 845.995,
    "end": 851.533,
    "en": "Chapter 4 covers the full taxonomy and design principles for these five types.",
    "zh": "第4章将全面介绍这五种类型的分类及设计原则。"
  },
  {
    "id": 81,
    "start": 851.533,
    "end": 868.27,
    "en": "The quality of tool design directly determines what an Agent can reliably accomplish: define interfaces vaguely and the model will misuse them; handle errors poorly and a single failed tool can leave the Agent stuck; scope permissions too broadly and one Agent error can become irreversible.",
    "zh": "工具设计的质量直接决定了智能体能够可靠完成的任务：接口定义模糊会导致模型误用工具；错误处理不当会使单个工具失败导致智能体停滞；权限范围过于宽泛则一个智能体错误可能变得不可逆。"
  },
  {
    "id": 82,
    "start": 868.27,
    "end": 875.708,
    "en": "As the MCP (Model Context Protocol) standard spreads, integrating tools is becoming easier.",
    "zh": "随着MCP（模型上下文协议）标准的普及，集成工具正变得越来越容易。"
  },
  {
    "id": 83,
    "start": 875.708,
    "end": 891.795,
    "en": "Tool Calling (also known as Function Calling) is a core capability of modern LLM Agents: it lets the model invoke external tools in a structured way, transforming the LLM from a pure text generator into an intelligent system that can act through external interfaces.",
    "zh": "工具调用（也称为函数调用）是现代大语言模型智能体的核心能力：它让模型以结构化的方式调用外部工具，将大语言模型从纯粹的文本生成器转变为可通过外部接口执行操作的智能系统。"
  },
  {
    "id": 84,
    "start": 891.795,
    "end": 895.645,
    "en": "This book uses the term \"tool calling\" throughout.",
    "zh": "本书全程使用“工具调用”这一术语。"
  },
  {
    "id": 85,
    "start": 895.645,
    "end": 918.395,
    "en": "Tool calling proceeds in four steps: first, the context tells the model which tools are available (names, purposes, parameters); then the model decides on its own whether to call a tool, which tool to call, and with what arguments; next, once the tool has run, its result is appended to the context; finally, the model decides its next move based on that result.",
    "zh": "工具调用分为四个步骤：首先，上下文告诉模型有哪些可用工具（名称、用途、参数）；然后，模型自主决定是否调用工具、调用哪个工具以及使用什么参数；接着，工具运行后，其结果会被追加到上下文中；最后，模型根据该结果决定下一步操作。"
  },
  {
    "id": 86,
    "start": 918.395,
    "end": 923.183,
    "en": "This loop is the foundation of ReAct, introduced later in the chapter.",
    "zh": "这个循环是后面章节中介绍的ReAct的基础。"
  },
  {
    "id": 87,
    "start": 923.183,
    "end": 930.17,
    "en": "For a weather query, the simplified representation of the four-step process at the API level is as follows:",
    "zh": "对于天气查询，API层面的四步流程简化表示如下："
  },
  {
    "id": 88,
    "start": 930.34,
    "end": 937.215,
    "en": "Here is the four-step tool invocation process: Step 1, declare tools in the system context.",
    "zh": "这里是四步工具调用过程：第一步，在系统上下文中声明工具。"
  },
  {
    "id": 89,
    "start": 937.165,
    "end": 943.177,
    "en": "Step 2, the model decides to call a tool and outputs the function name and arguments.",
    "zh": "第二步，模型决定调用工具，并输出函数名称和参数。"
  },
  {
    "id": 90,
    "start": 943.177,
    "end": 947.602,
    "en": "Step 3, the Harness executes the tool in the environment.",
    "zh": "第三步，Harness在环境中执行工具。"
  },
  {
    "id": 91,
    "start": 947.602,
    "end": 954.902,
    "en": "Step 4, the Harness feeds the tool result back into context, and the model synthesizes the final answer.",
    "zh": "第4步，Harness将工具结果反馈回上下文，模型综合生成最终答案。"
  },
  {
    "id": 92,
    "start": 954.902,
    "end": 964.54,
    "en": "The developer only defines the tools and executes the calls; the model itself decides whether to call, which tool to call, and what arguments to pass.",
    "zh": "开发者只需定义工具并执行调用；模型自身决定是否调用、调用哪个工具以及传递什么参数。"
  },
  {
    "id": 93,
    "start": 964.54,
    "end": 968.64,
    "en": "Chapter 2 examines this API structure in detail.",
    "zh": "第2章将详细探讨这一API结构。"
  },
  {
    "id": 94,
    "start": 968.64,
    "end": 977.577,
    "en": "When designing tools for an Agent, start with the narrowest capability the task needs, then expand gradually as the task grows more complex.",
    "zh": "在为智能体设计工具时，应从任务所需的最窄能力开始，随着任务复杂度增加逐步扩展。"
  },
  {
    "id": 95,
    "start": 977.577,
    "end": 997.352,
    "en": "If the task only requires basic arithmetic, a calculator with clearly defined parameters is enough; when it grows to reading spreadsheets, cleaning missing values, computing statistics, and plotting charts, a constrained Python code interpreter is easier to combine and explore with than an ever-growing collection of specialized tools.",
    "zh": "如果任务仅需要基本的算术运算，一个参数明确的计算器就足够了；当任务发展到读取电子表格、清理缺失值、计算统计信息和绘制图表时，受约束的Python代码解释器比不断增长的专用工具集合更容易组合和探索。"
  },
  {
    "id": 96,
    "start": 997.352,
    "end": 1016.402,
    "en": "But generality also increases the risk of errors and expands the attack surface: code must run in an isolated sandbox, with network access disabled by default, no access to files outside the authorized working directory, and limits on execution time, CPU, memory, and output size.",
    "zh": "但通用性也增加了出错的风险并扩大了攻击面：代码必须在隔离的沙箱中运行，默认禁用网络访问，不能访问授权工作目录外的文件，并对执行时间、CPU、内存和输出大小进行限制。"
  },
  {
    "id": 97,
    "start": 1016.402,
    "end": 1034.415,
    "en": "Likewise, a single logging tool is suitable for recording one execution; for long-running tasks that take hours or even days, a controlled virtual working directory can preserve plans, intermediate results, execution logs, and final artifacts so the Agent can resume across multiple runs.",
    "zh": "同样，一个日志工具适合记录一次执行；对于需要数小时甚至数天的长时间任务，受控的虚拟工作目录可以保存计划、中间结果、执行日志和最终产物，使智能体能够在多个运行之间恢复。"
  },
  {
    "id": 98,
    "start": 1034.415,
    "end": 1046.252,
    "en": "This directory should also restrict readable and writable paths, storage capacity, and file types, and prevent path traversal instead of exposing the entire host file system to the Agent.",
    "zh": "此目录还应限制可读写路径、存储容量和文件类型，并防止路径遍历，而不是将整个主机文件系统暴露给智能体。"
  },
  {
    "id": 99,
    "start": 1046.252,
    "end": 1050.727,
    "en": "General-purpose tools are not always better than specialized ones.",
    "zh": "通用工具并不总是优于专用工具。"
  },
  {
    "id": 100,
    "start": 1050.727,
    "end": 1070.627,
    "en": "High-risk operations or those governed by strict business constraints—such as payments, data deletion, sending email, and production deployment—should still be exposed as dedicated tools with explicit parameters, restricted permissions, and end-to-end auditability, with previews and human confirmation added when necessary.",
    "zh": "高风险操作或受严格业务约束的操作——如支付、数据删除、发送邮件和生产部署——仍应作为专用工具暴露，具有显式的参数、受限权限和端到端的可审计性，在必要时添加预览和人工确认。"
  },
  {
    "id": 101,
    "start": 1070.627,
    "end": 1083.677,
    "en": "The core principle of tool design is therefore: use general-purpose foundational capabilities for composition and exploration; use specialized tools to constrain high-risk operations and enforce strict business rules.",
    "zh": "因此，工具设计的核心原则是：使用通用的基础能力进行组合和探索；使用专用工具来限制高风险操作并强制执行严格的业务规则。"
  },
  {
    "id": 102,
    "start": 1083.677,
    "end": 1086.452,
    "en": "LLM: The Agent's Brain.",
    "zh": "LLM：智能体的大脑。"
  },
  {
    "id": 103,
    "start": 1086.452,
    "end": 1091.602,
    "en": "The Large Language Model (LLM) is the Agent's decision-making core.",
    "zh": "大型语言模型（LLM）是智能体的决策核心。"
  },
  {
    "id": 104,
    "start": 1091.602,
    "end": 1102.902,
    "en": "Given a user request, it first has to infer the real intent (what users say is often not what they actually want), then break a vague or complex task into executable steps.",
    "zh": "面对用户请求，它首先需要推断真实意图（用户所说的往往不是他们真正想要的），然后将模糊或复杂的任务分解为可执行的步骤。"
  },
  {
    "id": 105,
    "start": 1102.902,
    "end": 1111.24,
    "en": "Throughout execution it keeps making decisions: what to do next, whether to call a tool, which one, and with what arguments.",
    "zh": "在整个执行过程中，它持续做出决策：下一步该做什么，是否调用工具，调用哪个工具，以及使用什么参数。"
  },
  {
    "id": 106,
    "start": 1111.24,
    "end": 1121.302,
    "en": "This understand–plan–execute capability comes from knowledge accumulated during pre-training, and it is the foundation that workflows and autonomous Agents alike depend on.",
    "zh": "这种理解-规划-执行的能力来源于预训练期间积累的知识，它是工作流和自主智能体都依赖的基础。"
  },
  {
    "id": 107,
    "start": 1121.302,
    "end": 1129.54,
    "en": "A distinctive capability of LLM Agents is internal reasoning—before acting, the Agent can plan and reason through the task.",
    "zh": "LLM智能体的一个显著能力是内部推理——在采取行动之前，智能体可以对任务进行规划和推理。"
  },
  {
    "id": 108,
    "start": 1129.54,
    "end": 1135.427,
    "en": "This does not change the external environment, yet it markedly improves the actions that follow.",
    "zh": "这不会改变外部环境，但会显著改善后续的行动。"
  },
  {
    "id": 109,
    "start": 1135.427,
    "end": 1153.615,
    "en": "This ability comes from pre-training (the initial training on massive amounts of internet text, through which the model learns language patterns and world knowledge): the model draws on reasoning patterns encoded in human knowledge, including mathematical laws, causal relationships, and strategies for decomposing problems.",
    "zh": "这种能力来源于预训练（在大量互联网文本上的初始训练，通过这一过程模型学习语言模式和世界知识）：模型利用人类知识中编码的推理模式，包括数学定律、因果关系以及分解问题的策略。"
  },
  {
    "id": 110,
    "start": 1153.615,
    "end": 1164.577,
    "en": "Therefore, unlike traditional reinforcement-learning Agents, today's LLM-based Agents do not explore through blind trial and error; they reason over a structured body of knowledge.",
    "zh": "因此，与传统强化学习智能体不同，当今基于大语言模型的智能体不是通过盲目的试错来探索；它们是在结构化的知识体系上进行推理。"
  },
  {
    "id": 111,
    "start": 1164.577,
    "end": 1168.94,
    "en": "Model as Agent: When the Model Itself Becomes the Product.",
    "zh": "模型即智能体：当模型本身成为产品时。"
  },
  {
    "id": 112,
    "start": 1169.092,
    "end": 1174.767,
    "en": "The \"Model as Agent\" paradigm is the newest direction in AI Agent development.",
    "zh": "“模型即智能体”的范式是AI智能体发展的最新方向。"
  },
  {
    "id": 113,
    "start": 1174.717,
    "end": 1188.967,
    "en": "Advanced models internalize tool calling as a native ability through post-training (especially reinforcement learning): when to call a tool, which one, with what arguments—the model decides all of it, with no manual orchestration required.",
    "zh": "先进的模型通过后训练（尤其是强化学习）将工具调用内化为原生能力：何时调用工具、调用哪个工具、使用什么参数——所有这些均由模型自行决定，无需人工编排。"
  },
  {
    "id": 114,
    "start": 1188.967,
    "end": 1192.604,
    "en": "That does not make the framework layer less important.",
    "zh": "这并不意味着框架层不重要。"
  },
  {
    "id": 115,
    "start": 1192.604,
    "end": 1197.954,
    "en": "On the contrary: the stronger the model, the more the surrounding Harness matters.",
    "zh": "相反：模型越强大，其周围的Harness就越重要。"
  },
  {
    "id": 116,
    "start": 1197.954,
    "end": 1206.804,
    "en": "The word Harness originally referred to the reins and tack fitted to a horse—not to limit its ability to run, but to direct that power appropriately.",
    "zh": "“Harness”一词最初指的是套在马身上的缰绳和鞍具——不是为了限制它的奔跑能力，而是为了适当引导其力量。"
  },
  {
    "id": 117,
    "start": 1206.804,
    "end": 1217.767,
    "en": "In the Agent context, the model is the powerful yet unpredictable horse, while the Harness is the engineering infrastructure that channels its capability into reliable task execution.",
    "zh": "在智能体的语境中，模型是一匹强大但不可预测的马，而Harness则是将它的能力引导到可靠任务执行中的工程基础设施。"
  },
  {
    "id": 118,
    "start": 1217.767,
    "end": 1227.429,
    "en": "It includes context management, tool interfaces, safety constraints, and verification and correction mechanisms (see the final section of this chapter).",
    "zh": "它包括上下文管理、工具接口、安全约束以及验证和纠正机制（见本章最后一节）。"
  },
  {
    "id": 119,
    "start": 1227.429,
    "end": 1238.079,
    "en": "The more decision authority a model has, the greater the impact of a wrong decision—which calls for finer-grained constraint, verification, and correction to keep it reliable.",
    "zh": "模型拥有的决策权越多，错误决策的影响就越大——这就需要更细粒度的约束、验证和纠正以保持其可靠性。"
  },
  {
    "id": 120,
    "start": 1238.079,
    "end": 1247.929,
    "en": "The real advantage of model providers is not \"making the framework thinner\" but being able to co-optimize the model and its surrounding Harness, iterating continuously.",
    "zh": "模型提供者的真实优势不是“让框架更轻”，而是能够协同优化模型及其周围的Harness，并持续迭代。"
  },
  {
    "id": 121,
    "start": 1247.929,
    "end": 1255.367,
    "en": "But a deeper question follows: if models keep getting stronger, will today's Harness eventually be absorbed into the model?",
    "zh": "但更深层次的问题随之而来：如果模型持续变强，今天的Harness最终会被模型吸收吗？"
  },
  {
    "id": 122,
    "start": 1255.367,
    "end": 1262.192,
    "en": "In “The Bitter Lesson,” Rich Sutton looked back on a pattern repeated throughout seventy years of AI research",
    "zh": "在《痛苦的教训》（The Bitter Lesson）中，Rich Sutton回顾了人工智能研究七十年来反复出现的一个模式"
  },
  {
    "id": 123,
    "start": 1262.192,
    "end": 1267.704,
    "en": "Agent Learning Mechanisms: From Contextual Adaptation to Persistent Updates.",
    "zh": "智能体学习机制：从上下文适应到持续更新。"
  },
  {
    "id": 124,
    "start": 1267.704,
    "end": 1275.317,
    "en": "The preceding discussion noted that a model can internalize tool-use policies as native capabilities through reinforcement learning.",
    "zh": "前面的讨论指出，通过强化学习，模型可以将工具使用策略内化为原生能力。"
  },
  {
    "id": 125,
    "start": 1275.317,
    "end": 1279.929,
    "en": "But changes in an Agent's behavior do not occur only during training.",
    "zh": "但智能体行为的变化不仅仅发生在训练过程中。"
  },
  {
    "id": 126,
    "start": 1279.929,
    "end": 1295.592,
    "en": "Based on where an update occurs and how long it persists, these changes can be understood as three complementary paths (Figure 1-2): within-task contextual adaptation, cross-task updates to external artifacts, and parameter updates during training cycles.",
    "zh": "根据更新发生的位置以及持续时间，这些变化可以理解为三种互补路径（图1-2）：任务内的上下文适应、跨任务对外部工件的更新，以及训练周期中的参数更新。"
  },
  {
    "id": 127,
    "start": 1295.592,
    "end": 1301.367,
    "en": "As illustrated in Figure 1-2: Three Levels of Agent Capability Updates.",
    "zh": "如图1-2所示：智能体能力更新的三个层次。"
  },
  {
    "id": 128,
    "start": 1301.367,
    "end": 1305.429,
    "en": "Contextual adaptation occurs within the current task.",
    "zh": "上下文适应发生在当前任务中。"
  },
  {
    "id": 129,
    "start": 1305.429,
    "end": 1316.004,
    "en": "Once examples, state, and retrieval results enter the context, the model can adjust its behavior immediately, but this does not change the persistent state of the next session.",
    "zh": "一旦示例、状态和检索结果进入上下文，模型可以立即调整其行为，但这不会改变下一次会话的持久状态。"
  },
  {
    "id": 130,
    "start": 1316.004,
    "end": 1323.817,
    "en": "Its advantages are speed and low cost; its limitations arise from the context window and the way information is organized.",
    "zh": "它的优势在于速度和低成本；其局限性则源于上下文窗口以及信息组织方式。"
  },
  {
    "id": 131,
    "start": 1323.817,
    "end": 1328.554,
    "en": "Chapter 2 explains in detail how this form of adaptation works.",
    "zh": "第2章详细解释了这种适应形式是如何工作的。"
  },
  {
    "id": 132,
    "start": 1328.554,
    "end": 1346.017,
    "en": "For changes to persist across tasks, the system can update external artifacts: facts and experience can be organized into knowledge documents, strategies expressible in language can be written into a Prompt or Skill, and deterministic procedures and constraints can be encoded in programs and Harnesses.",
    "zh": "为了使变化在任务间持续，系统可以更新外部工件：事实和经验可以组织成知识文档，可以用语言表达的策略可以写入提示或技能，确定性程序和约束可以编码在程序和Harness中。"
  },
  {
    "id": 133,
    "start": 1346.017,
    "end": 1354.542,
    "en": "These artifacts are auditable and revisable, but the Agent must still access them at execution time through the context or tool interfaces.",
    "zh": "这些工件是可审计和可修改的，但智能体仍需通过上下文或工具接口在执行时访问它们。"
  },
  {
    "id": 134,
    "start": 1354.542,
    "end": 1365.442,
    "en": "Chapters 3 through 5 establish the foundations for knowledge and programs, while Chapter 9 discusses how such updates can be generated from evaluated operational trajectories.",
    "zh": "第3至第5章建立了知识和程序的基础，而第9章讨论了如何从评估的操作轨迹中生成此类更新。"
  },
  {
    "id": 135,
    "start": 1365.442,
    "end": 1379.917,
    "en": "When the objective is a high-dimensional capability—such as medical-image understanding, natural-language style, or an implicit decision policy—that external rules cannot fully express, model parameters must be updated through post-training.",
    "zh": "当目标是高维能力——例如医学图像理解、自然语言风格或隐式决策策略——外部规则无法完全表达时，必须通过后训练更新模型参数。"
  },
  {
    "id": 136,
    "start": 1379.917,
    "end": 1388.804,
    "en": "Parameter updates carry higher deployment costs but can produce natural and broad generalization; Chapter 8 presents their methods systematically.",
    "zh": "参数更新的部署成本更高，但可以产生自然且广泛的泛化能力；第8章将系统地介绍这些方法。"
  },
  {
    "id": 137,
    "start": 1388.804,
    "end": 1405.854,
    "en": "The three paths are therefore not mutually exclusive categories but coordinated mechanisms operating at different timescales: context supports immediate adaptation, external artifacts support controlled accumulation, and parameters internalize capabilities that are difficult to express explicitly.",
    "zh": "因此，这三条路径并不是相互排斥的类别，而是不同时间尺度上协同运作的机制：上下文支持即时适应，外部工件支持可控的积累，而参数则内化了难以显式表达的能力。"
  },
  {
    "id": 138,
    "start": 1405.854,
    "end": 1408.767,
    "en": "Context: The Agent's Eyes.",
    "zh": "上下文：智能体的视角。"
  },
  {
    "id": 139,
    "start": 1408.924,
    "end": 1414.386,
    "en": "Context is the working set of information available to an Agent at each decision point.",
    "zh": "上下文是智能体在每个决策点可用的信息集。"
  },
  {
    "id": 140,
    "start": 1414.336,
    "end": 1427.399,
    "en": "Just as a person making a decision needs the right materials on the table—task instructions, reference manuals, earlier correspondence, the latest data—an Agent's context window is the information it can use.",
    "zh": "就像一个人做决定时需要桌面上的正确材料——任务说明、参考手册、之前的通信、最新数据一样，智能体的上下文窗口就是它能够使用的信息。"
  },
  {
    "id": 141,
    "start": 1427.399,
    "end": 1435.386,
    "en": "From the API's perspective (detailed in Chapter 2), the context of each LLM call consists of five parts:",
    "zh": "从API的角度来看（详见第2章），每次LLM调用的上下文由五个部分组成："
  },
  {
    "id": 142,
    "start": 1435.386,
    "end": 1444.624,
    "en": "System Prompt: Unlike the prompts users enter during a conversation, the system prompt is written by the developer and stays fixed for the whole conversation.",
    "zh": "系统提示：与用户在对话中输入的提示不同，系统提示是由开发者编写的，并在整个对话过程中保持不变。"
  },
  {
    "id": 143,
    "start": 1444.624,
    "end": 1451.349,
    "en": "It is the Agent’s “job description”—defining its identity, permissions, and rules of conduct.",
    "zh": "它是智能体的“职位描述”——定义其身份、权限和行为准则。"
  },
  {
    "id": 144,
    "start": 1451.349,
    "end": 1456.961,
    "en": "Careful prompt engineering of the system prompt is how we shape the Agent’s operating behavior.",
    "zh": "对系统提示进行精心设计的提示工程是我们塑造智能体运行行为的方式。"
  },
  {
    "id": 145,
    "start": 1456.961,
    "end": 1471.161,
    "en": "The system prompt also carries user memory that persists across sessions (personalized information such as preferences, past behavior, and background settings; see Chapter 3), plus dynamically injected environmental state.",
    "zh": "系统提示还包含跨会话持续存在的用户记忆（如个性化信息，如偏好、过往行为和背景设置；参见第3章），以及动态注入的环境状态。"
  },
  {
    "id": 146,
    "start": 1471.161,
    "end": 1479.161,
    "en": "Tool Definitions: Declares the names, functional descriptions, and parameter formats of the tools available to the Agent.",
    "zh": "工具定义：声明智能体可用工具的名称、功能描述和参数格式。"
  },
  {
    "id": 147,
    "start": 1479.161,
    "end": 1490.986,
    "en": "Without tool definitions, the Agent cannot recognize or call any tools—though it does not fall silent either—an ablation study (Experiment 1-1) will show what it does instead.",
    "zh": "没有工具定义，智能体无法识别或调用任何工具——尽管它也不会保持沉默——消融研究（实验1-1）将展示它会做什么。"
  },
  {
    "id": 148,
    "start": 1490.986,
    "end": 1498.836,
    "en": "Tool definitions, together with the system prompt, form the static prefix that remains unchanged throughout the conversation.",
    "zh": "工具定义与系统提示一起，构成了在整个对话过程中保持不变的静态前缀。"
  },
  {
    "id": 149,
    "start": 1498.836,
    "end": 1512.836,
    "en": "This is the foundational pattern; since 2026, production frameworks can also load full tool schemas on demand at the end of the context without breaking the prefix—see the tool definitions section of Chapter 2 and Chapter 4.",
    "zh": "这是基础模式；自2026年以来，生产框架还可以在上下文末尾按需加载完整的工具模式而不破坏前缀——请参见第2章和第4章的工具定义部分。"
  },
  {
    "id": 150,
    "start": 1512.836,
    "end": 1516.136,
    "en": "User Messages: Input from the user.",
    "zh": "用户消息：用户的输入。"
  },
  {
    "id": 151,
    "start": 1516.136,
    "end": 1530.111,
    "en": "User messages may also contain external knowledge dynamically retrieved via RAG (Retrieval-Augmented Generation, see Chapter 3 for details)—covering information beyond the training data cutoff or private domain knowledge.",
    "zh": "用户消息可能还包含通过RAG（检索增强生成，详见第3章）动态检索的外部知识——涵盖训练数据截止时间之后的信息或私有领域知识。"
  },
  {
    "id": 152,
    "start": 1530.111,
    "end": 1547.861,
    "en": "Assistant Messages: Responses previously generated by the model, which can contain up to three parts—reasoning (the internal chain of thought, maintaining coherence and decision interpretability), content (the response to the user), and tool_calls (the way the Agent takes action).",
    "zh": "助手消息：模型之前生成的回复，可能包含三个部分——推理（内部思维链，保持连贯性和决策可解释性）、内容（对用户的回复）和工具调用（智能体采取行动的方式）。"
  },
  {
    "id": 153,
    "start": 1547.861,
    "end": 1564.061,
    "en": "In a specific response, these three parts may not all appear simultaneously: for example, when the Agent decides to call a tool, it usually only has reasoning + tool_calls; when giving a final answer, it usually only has reasoning + content.",
    "zh": "在特定回复中，这三个部分可能不会同时出现：例如，当智能体决定调用工具时，通常只有推理+工具调用；当给出最终答案时，通常只有推理+内容。"
  },
  {
    "id": 154,
    "start": 1564.061,
    "end": 1569.549,
    "en": "Tool Results: The output returned after the Agent framework executes a tool.",
    "zh": "工具结果：智能体框架执行工具后返回的输出。"
  },
  {
    "id": 155,
    "start": 1569.549,
    "end": 1577.586,
    "en": "These results are the direct basis for the Agent’s next reasoning step—and what lets it learn from outcomes rather than repeat its mistakes.",
    "zh": "这些结果是智能体下一步推理的直接依据——这使其能够从结果中学习，而不是重复错误。"
  },
  {
    "id": 156,
    "start": 1577.586,
    "end": 1591.861,
    "en": "The first two items (system prompt + tool definitions) form the static prefix; the last three (user messages + assistant messages + tool results) form the dynamic message history that grows with every interaction.",
    "zh": "前两项（系统提示 + 工具定义）构成了静态前缀；后三项（用户消息 + 助手消息 + 工具结果）构成了随着每次交互而增长的动态消息历史。"
  },
  {
    "id": 157,
    "start": 1591.861,
    "end": 1596.999,
    "en": "Together, these five parts make up the context of each LLM inference.",
    "zh": "这五部分共同构成了每次LLM推理的上下文。"
  },
  {
    "id": 158,
    "start": 1596.999,
    "end": 1600.161,
    "en": "Is every component truly indispensable?",
    "zh": "每个组件真的都不可或缺吗？"
  },
  {
    "id": 159,
    "start": 1600.161,
    "end": 1615.399,
    "en": "The most direct way to find out is an ablation study—the diagnostic method of ruling out causes one at a time: remove component A and see whether the system still works, then component B, and so on, until each component's contribution is clear.",
    "zh": "找出答案最直接的方法是进行消融研究——一种逐一排除原因的诊断方法：移除组件A，看看系统是否仍然有效，然后移除组件B，依此类推，直到清楚每个组件的贡献。"
  },
  {
    "id": 160,
    "start": 1615.399,
    "end": 1620.711,
    "en": "Experiment 1-1 applies exactly this method to the five components above.",
    "zh": "实验1-1正好应用了这种方法来测试上述五个组件。"
  },
  {
    "id": 161,
    "start": 1620.711,
    "end": 1627.224,
    "en": "Experiment 1-1 intermediate difficulty, two stars: : The Critical Role of Context",
    "zh": "实验1-1 中等难度，两颗星：上下文的关键作用"
  },
  {
    "id": 162,
    "start": 1627.224,
    "end": 1633.274,
    "en": "We probed how each context component shapes Agent behavior with a systematic ablation study.",
    "zh": "我们通过系统的消融研究探测了每个上下文组件如何塑造智能体行为。"
  },
  {
    "id": 163,
    "start": 1633.274,
    "end": 1646.299,
    "en": "Of the five components above, four were tested—the system prompt, as the Agent’s basic identity definition, was exempt: without it the Agent has no role awareness at all, and the test would be meaningless.",
    "zh": "在上述五个组件中，四个被测试了——系统提示作为智能体的基本身份定义被豁免：没有它，智能体完全没有角色意识，测试将毫无意义。"
  },
  {
    "id": 164,
    "start": 1646.299,
    "end": 1659.599,
    "en": "As Figure 1-3 shows, the experiment ran five controlled groups: a complete baseline retaining every component, plus four groups each missing one, to observe each component’s effect on Agent performance.",
    "zh": "如图1-3所示，实验进行了五个受控组：一个保留所有组件的完整基线，加上四个各缺少一个组件的组，以观察每个组件对智能体性能的影响。"
  },
  {
    "id": 165,
    "start": 1659.599,
    "end": 1666.674,
    "en": "As illustrated in Figure 1-3: Experiment 1-1—Context ablation study design.",
    "zh": "如图1-3所示：实验1-1—上下文消融研究设计。"
  },
  {
    "id": 166,
    "start": 1666.828,
    "end": 1673.465,
    "en": "The experimental results revealed the role of each context component—and that they are not equally important.",
    "zh": "实验结果揭示了每个上下文组件的作用——并且它们的重要性并不相同。"
  },
  {
    "id": 167,
    "start": 1673.415,
    "end": 1682.94,
    "en": "Tool Definitions (part of the static prefix) are the foundation of the Agent’s action capability; without them, the Agent cannot call any tool.",
    "zh": "工具定义（静态前缀的一部分）是智能体行动能力的基础；没有它们，智能体无法调用任何工具。"
  },
  {
    "id": 168,
    "start": 1682.94,
    "end": 1698.24,
    "en": "But losing the ability to act does not mean falling silent: the model still returns a neatly formatted, confidently worded answer whose numbers come from parametric memory rather than from observations, laid out exactly like an answer genuinely derived from tool output.",
    "zh": "但失去行动能力并不意味着沉默：模型仍然会返回格式整齐、措辞自信的答案，其数据来自参数化记忆而非观察结果，完全像从工具输出中真实得出的答案一样呈现。"
  },
  {
    "id": 169,
    "start": 1698.24,
    "end": 1712.128,
    "en": "Whether it declines outright or fabricates on the spot depends mainly on the model’s own hallucination rate and honesty; a constraint in the prompt such as “do not estimate the rates yourself” lowers the odds of fabrication without eliminating it.",
    "zh": "它是否直接拒绝或临时编造，主要取决于模型本身的幻觉率和诚实度；提示中的约束，如“不要自行估算这些比率”，可以降低编造的可能性，但不会彻底消除它。"
  },
  {
    "id": 170,
    "start": 1712.128,
    "end": 1720.865,
    "en": "Tool Results are key to closed-loop control; without them the Agent executes “blind,” retrying until it exhausts its iteration budget.",
    "zh": "工具结果对于闭环控制至关重要；没有它们，智能体会“盲目”执行，不断重试直到耗尽迭代预算。"
  },
  {
    "id": 171,
    "start": 1720.865,
    "end": 1734.565,
    "en": "The reasoning process (the reasoning part of assistant messages) records why a step was taken, while tool results record what happened; when the former can be reconstructed from the latter, dropping it from the history costs almost nothing.",
    "zh": "推理过程（助手消息的推理部分）记录了为何采取某一步骤，而工具结果记录了发生了什么；当前者可以从后者中重建时，从历史中删除它几乎不会造成任何损失。"
  },
  {
    "id": 172,
    "start": 1734.565,
    "end": 1745.203,
    "en": "Message history (user messages, assistant messages, and tool results from previous rounds) prevents redundant operations and avoids repeating the same mistakes.",
    "zh": "消息历史（用户消息、助手消息和前几轮的工具结果）可以防止重复操作并避免重复同样的错误。"
  },
  {
    "id": 173,
    "start": 1745.203,
    "end": 1753.328,
    "en": "The experiment's core insight: context determines what the Agent can see, and the Agent can only decide based on what it sees.",
    "zh": "实验的核心见解：上下文决定了智能体能看到什么，而智能体只能根据它看到的内容做出决策。"
  },
  {
    "id": 174,
    "start": 1753.328,
    "end": 1770.628,
    "en": "But the components are not equivalent; the measure is whether the information one carries can be reconstructed from somewhere else—claims like “every component is indispensable” have to be measured rather than assumed, and models move fast enough that the same ablation on a newer model may well reach a different conclusion.",
    "zh": "但这些组件并不等价；衡量标准是其所携带的信息能否从其他地方重建——诸如‘每个组件都不可或缺’的说法需要被验证而不是假设，而且模型发展得很快，对较新模型进行相同的消融实验可能会得出不同的结论。"
  },
  {
    "id": 175,
    "start": 1770.628,
    "end": 1777.678,
    "en": "One more point matters more in engineering practice: “produced an answer” is not “completed the task.",
    "zh": "还有一个更重要的点在工程实践中：‘生成了一个答案’不等于‘完成了任务’。"
  },
  {
    "id": 176,
    "start": 1777.678,
    "end": 1784.64,
    "en": "When a context component is missing, the typical failure is not an error exit but an answer that looks flawless.",
    "zh": "当一个上下文组件缺失时，典型的失败不是报错退出，而是生成一个看似完美的答案。"
  },
  {
    "id": 177,
    "start": 1784.64,
    "end": 1786.515,
    "en": "The ReAct Loop.",
    "zh": "ReAct 循环。"
  },
  {
    "id": 178,
    "start": 1786.515,
    "end": 1792.178,
    "en": "With the three components in hand, a natural question follows: how do they work together?",
    "zh": "有了这三个组件，自然会有一个问题出现：它们是如何协同工作的？"
  },
  {
    "id": 179,
    "start": 1792.178,
    "end": 1798.678,
    "en": "The ReAct loop is the core mechanism that connects LLM, context, and tools into one system.",
    "zh": "ReAct 循环是将大语言模型、上下文和工具整合为一个系统的核心机制。"
  },
  {
    "id": 180,
    "start": 1798.678,
    "end": 1801.465,
    "en": "We can examine it step by step.",
    "zh": "我们可以逐步分析它。"
  },
  {
    "id": 181,
    "start": 1801.465,
    "end": 1807.265,
    "en": "The core pattern by which an Agent executes a task is called ReAct (Reasoning + Acting).",
    "zh": "Agent执行任务的核心模式称为ReAct（推理+行动）。"
  },
  {
    "id": 182,
    "start": 1807.265,
    "end": 1820.628,
    "en": "The name mentions only reasoning and acting, but the actual loop has three stages: the model first reasons about what to do next, then calls a tool to act, then observes the tool’s result and reasons about the subsequent step.",
    "zh": "名称仅提到推理和行动，但实际循环包含三个阶段：模型首先推理下一步该做什么，然后调用工具进行操作，接着观察工具的结果并推理后续步骤。"
  },
  {
    "id": 183,
    "start": 1820.628,
    "end": 1826.34,
    "en": "This “reason → act → observe → reason → act → observe” loop repeats until the task is done.",
    "zh": "这个‘推理→行动→观察→推理→行动→观察’的循环会重复进行，直到任务完成。"
  },
  {
    "id": 184,
    "start": 1826.5,
    "end": 1843.375,
    "en": "Consider a concrete example—aggregating revenue across multiple currencies—to understand an Agent’s trajectory: the message history that accumulates as the Agent works, comprising user messages, assistant messages (with their reasoning and tool calls), and tool results.",
    "zh": "考虑一个具体的例子——跨多种货币汇总收入，以理解智能体的轨迹：即智能体工作过程中积累的消息历史，包括用户消息、助理消息（包含其推理和工具调用）以及工具结果。"
  },
  {
    "id": 185,
    "start": 1843.325,
    "end": 1856.1,
    "en": "On every LLM call, the complete context the model receives is the static prefix (system prompt + tool definitions) plus the trajectory (dynamic message history) (Figure 1-4).",
    "zh": "每次LLM调用时，模型接收到的完整上下文是静态前缀（系统提示 + 工具定义）加上轨迹（动态消息历史）（见图1-4）。"
  },
  {
    "id": 186,
    "start": 1856.1,
    "end": 1861.65,
    "en": "This shows a key fact: Agent context = static prefix + trajectory.",
    "zh": "这表明一个关键事实：智能体上下文 = 静态前缀 + 轨迹。"
  },
  {
    "id": 187,
    "start": 1861.65,
    "end": 1876.412,
    "en": "Concretely, the static prefix is the first two of the five components above (system prompt + tool definitions); the trajectory is the last three (user messages + assistant messages + tool results, growing with each interaction).",
    "zh": "具体来说，静态前缀是上述五个组件中的前两个（系统提示 + 工具定义）；轨迹是后三个（用户消息 + 助理消息 + 工具结果，随着每次交互而增长）。"
  },
  {
    "id": 188,
    "start": 1876.412,
    "end": 1884.162,
    "en": "From this complete context the LLM generates its next response, which is then appended to the trajectory for the subsequent call.",
    "zh": "从这个完整的上下文中，LLM生成其下一步响应，并将其附加到轨迹中供下一次调用使用。"
  },
  {
    "id": 189,
    "start": 1884.162,
    "end": 1891.487,
    "en": "As illustrated in Figure 1-4: Agent trajectory—ReAct loop for a multi-currency aggregation task.",
    "zh": "如图1-4所示：智能体轨迹——多货币汇总任务的ReAct循环。"
  },
  {
    "id": 190,
    "start": 1891.487,
    "end": 1894.762,
    "en": "Start with a minimal implementation of the loop.",
    "zh": "从一个最小的循环实现开始。"
  },
  {
    "id": 191,
    "start": 1894.762,
    "end": 1908.0,
    "en": "It shows how the components work together: the Model only decides the next step, the Harness assembles the context and validates and executes the tools, and the Environment produces the actual state changes and observations.",
    "zh": "它展示了各个组件如何协同工作：模型仅决定下一步，Harness负责组装上下文并验证和执行工具，环境则产生实际的状态变化和观察结果。"
  },
  {
    "id": 192,
    "start": 1908.0,
    "end": 1916.887,
    "en": "The rest of this book also uses Python-style pseudocode; the pseudocode is not runnable and does not correspond to any particular SDK.",
    "zh": "本书其余部分也使用Python风格的伪代码；该伪代码不可运行，也不对应任何特定的SDK。"
  },
  {
    "id": 193,
    "start": 1916.887,
    "end": 1921.762,
    "en": "The concrete executable code lives in this book's companion repository.",
    "zh": "具体的可执行代码位于本书的配套仓库中。"
  },
  {
    "id": 194,
    "start": 1921.762,
    "end": 1928.912,
    "en": "In pseudocode, the interaction loop proceeds as follows: Initialize the trajectory with the user request.",
    "zh": "在伪代码中，交互循环如下：用用户请求初始化轨迹。"
  },
  {
    "id": 195,
    "start": 1928.912,
    "end": 1935.487,
    "en": "In each iteration, construct the context, query the model, and append the decision to the trajectory.",
    "zh": "在每次迭代中，构建上下文，查询模型，并将决策追加到轨迹中。"
  },
  {
    "id": 196,
    "start": 1935.487,
    "end": 1939.012,
    "en": "If no tool is called, return the answer.",
    "zh": "如果没有调用工具，请返回答案。"
  },
  {
    "id": 197,
    "start": 1939.012,
    "end": 1946.112,
    "en": "Otherwise, execute each tool call, append the observations, and repeat until the task is complete.",
    "zh": "否则，执行每个工具调用，追加观察结果，并重复直到任务完成。"
  },
  {
    "id": 198,
    "start": 1946.112,
    "end": 1949.962,
    "en": "Here is the structure of a trajectory, in pseudocode:",
    "zh": "这是轨迹的结构，用伪代码表示："
  },
  {
    "id": 199,
    "start": 1949.962,
    "end": 1958.15,
    "en": "Consider a concrete trajectory: The user asks to calculate total and average revenue across four quarters in different currencies.",
    "zh": "考虑一个具体的轨迹：用户要求计算不同货币下四个季度的总收入和平均收入。"
  },
  {
    "id": 200,
    "start": 1958.15,
    "end": 1964.825,
    "en": "In the first iteration, the model calls exchange rate tools for Euros, Pounds, and Yen.",
    "zh": "在第一次迭代中，模型调用了欧元、英镑和日元的汇率工具。"
  },
  {
    "id": 201,
    "start": 1964.825,
    "end": 1969.312,
    "en": "In the second iteration, the Harness returns the exchange rates.",
    "zh": "在第二次迭代中，Harness 返回了汇率数据。"
  },
  {
    "id": 202,
    "start": 1969.312,
    "end": 1981.512,
    "en": "In the third iteration, the model uses Python code to compute the totals in US dollars, obtaining 7.15 million dollars total and 1.79 million dollars average.",
    "zh": "在第三次迭代中，模型使用 Python 代码计算以美元为单位的总金额，得到总计 715 万美元，平均 179 万美元。"
  },
  {
    "id": 203,
    "start": 1981.512,
    "end": 1985.312,
    "en": "Finally, the model outputs the verified answer.",
    "zh": "最后，模型输出了验证后的答案。"
  },
  {
    "id": 204,
    "start": 1985.312,
    "end": 1995.925,
    "en": "Note that the system prompt and tool definitions are not shown in the trajectory—they serve as the static prefix and are automatically prepended to the trajectory before each LLM call.",
    "zh": "请注意，系统提示和工具定义未在轨迹中显示——它们作为静态前缀，在每次 LLM 调用前自动添加到轨迹中。"
  },
  {
    "id": 205,
    "start": 1995.925,
    "end": 1999.762,
    "en": "In our experiment, this loop was clearly visible.",
    "zh": "在我们的实验中，这个循环非常清晰。"
  },
  {
    "id": 206,
    "start": 1999.762,
    "end": 2017.987,
    "en": "In the first round, the Agent analyzed the task and called three currency conversion tools in parallel; in the second, it fed the conversion results to a code interpreter for the more computationally intensive calculation; in the third, having confirmed all calculations were complete, it produced the final answer.",
    "zh": "第一轮中，Agent 分析了任务并并行调用了三个货币转换工具；第二轮中，它将转换结果输入代码解释器进行更复杂的计算；第三轮中，确认所有计算完成后，它生成了最终答案。"
  },
  {
    "id": 207,
    "start": 2017.987,
    "end": 2023.887,
    "en": "A complex multi-step task was completed in 3 iterations and 4 tool calls.",
    "zh": "一个复杂的多步骤任务在 3 次迭代和 4 次工具调用中完成。"
  },
  {
    "id": 208,
    "start": 2023.887,
    "end": 2030.025,
    "en": "In this most basic design, the context seen by the LLM is continually appended to.",
    "zh": "在这个最基础的设计中，LLM 看到的上下文会不断被追加。"
  },
  {
    "id": 209,
    "start": 2030.025,
    "end": 2039.687,
    "en": "Every LLM call receives the complete trajectory, so the model knows which stage of the task it is in, what was tried before, and what the outcome was.",
    "zh": "每次 LLM 调用都会接收到完整的轨迹，因此模型知道它处于任务的哪个阶段，之前尝试了什么，以及结果如何。"
  },
  {
    "id": 210,
    "start": 2039.687,
    "end": 2047.737,
    "en": "Just as people keep reviewing and summarizing while solving a problem, the Agent maintains a global view of the task through its trajectory.",
    "zh": "就像人们在解决问题时会不断回顾和总结一样，Agent 通过其轨迹保持对任务的全局视角。"
  },
  {
    "id": 211,
    "start": 2047.737,
    "end": 2059.937,
    "en": "And because the trajectory is structured—user messages, assistant messages (reasoning + tool calls), and tool results all separated cleanly—the system is highly interpretable and debuggable.",
    "zh": "而且由于轨迹是结构化的——用户消息、助手消息（推理+工具调用）和工具结果都清晰分离，这个系统具有高度的可解释性和可调试性。"
  },
  {
    "id": 212,
    "start": 2059.937,
    "end": 2066.85,
    "en": "Now that we understand the Agent's operating loop, we examine two experiments to see how different models drive it.",
    "zh": "现在我们了解了智能体的操作循环，接下来通过两个实验来观察不同模型如何驱动它。"
  },
  {
    "id": 213,
    "start": 2066.85,
    "end": 2074.012,
    "en": "Experiment 1-2 introductory difficulty, one star: : Kimi K3 Native Agent Capability",
    "zh": "实验1-2：入门难度，一颗星：Kimi K3 原生智能体能力"
  },
  {
    "id": 214,
    "start": 2074.18,
    "end": 2082.242,
    "en": "This experiment demonstrates the native Agent capability of Kimi K3, an example of the “Model as Agent” paradigm.",
    "zh": "这个实验证明了Kimi K3的原生智能体能力，是“模型即智能体”范式的例子。"
  },
  {
    "id": 215,
    "start": 2082.192,
    "end": 2089.38,
    "en": "Kimi K3 is a Mixture of Experts (MoE) model with approximately 2.8 trillion parameters.",
    "zh": "Kimi K3 是一个专家混合（MoE）模型，拥有大约2.8万亿个参数。"
  },
  {
    "id": 216,
    "start": 2089.38,
    "end": 2102.092,
    "en": "MoE can be viewed as a team of experts: for each kind of problem, the system activates only the few experts best suited to it rather than the entire model, preserving capability without paying the full efficiency cost.",
    "zh": "MoE 可以看作是一个专家团队：对于每种类型的问题，系统只会激活最适合它的少数专家，而不是整个模型，这样可以在不付出全部效率成本的情况下保持能力。"
  },
  {
    "id": 217,
    "start": 2102.092,
    "end": 2109.955,
    "en": "Kimi K3 has a 1 million token context window, native visual understanding, and an always-on “thinking mode.",
    "zh": "Kimi K3 有一个100万token的上下文窗口，原生的视觉理解能力，以及始终开启的“思考模式”。"
  },
  {
    "id": 218,
    "start": 2109.955,
    "end": 2125.667,
    "en": "Through reinforcement learning, it has internalized the tool-calling decision policy as a native capability: when to call a tool, which tool to call, and what arguments to pass are all decided by the model, allowing it to carry out tasks such as web searches autonomously.",
    "zh": "通过强化学习，它已经将工具调用决策策略内化为一种原生能力：何时调用工具、调用哪个工具以及传递什么参数，都是由模型决定的，这使得它能够自主执行诸如网络搜索等任务。"
  },
  {
    "id": 219,
    "start": 2125.667,
    "end": 2138.442,
    "en": "To be precise, what is internalized is the when and how to call decision; the tools themselves, such as web_search and code_runner, still execute server-side as API-level built-in tools.",
    "zh": "更准确地说，内化的是何时以及如何调用的决策；像网络搜索和代码运行器这样的工具本身仍然在服务器端作为API级别的内置工具执行。"
  },
  {
    "id": 220,
    "start": 2138.442,
    "end": 2143.617,
    "en": "Kimi runs these official tools through a server-side script engine called Formula.",
    "zh": "Kimi 通过一个名为Formula的服务器端脚本引擎运行这些官方工具。"
  },
  {
    "id": 221,
    "start": 2143.617,
    "end": 2152.567,
    "en": "The orchestration loop has therefore not disappeared; only the decision-making moved into the model, and where the loop itself runs depends on how you integrate.",
    "zh": "因此，协调循环并未消失；只是决策过程被整合进了模型中，而循环本身运行的位置取决于你如何集成。"
  },
  {
    "id": 222,
    "start": 2152.567,
    "end": 2178.255,
    "en": "On the Responses API path of Experiment 1-3, search, code execution and the multi-round orchestration are closed on the server; on the Kimi path of Experiment 1-2, Formula only executes the search itself on the server, while the \"call the model → append the tool result → call again\" ReAct loop is still driven by client code (see the while loop in chapter1/web-search-agent/agent.py).",
    "zh": "在实验1-3的响应API路径中，搜索、代码执行和多轮协调在服务器端关闭；而在实验1-2的Kimi路径中，Formula仅在服务器端执行搜索本身，而“调用模型→追加工具结果→再次调用”的ReAct循环仍由客户端代码驱动（参见chapter1/web-search-agent/agent.py中的while循环）。"
  },
  {
    "id": 223,
    "start": 2178.255,
    "end": 2189.83,
    "en": "The key observations are that the model decides when to search and what to search for, showing genuine autonomy; it adjusts strategy as search results arrive and judges whether it has enough information.",
    "zh": "关键观察是，模型决定了何时搜索以及搜索什么，显示出真正的自主性；它会根据搜索结果调整策略，并判断自己是否已获得足够的信息。"
  },
  {
    "id": 224,
    "start": 2189.83,
    "end": 2198.017,
    "en": "A common misconception is worth clarifying: reinforcement learning gives the model the decision policy, not the tools themselves.",
    "zh": "一个常见的误解值得澄清：强化学习赋予模型的是决策策略，而不是工具本身。"
  },
  {
    "id": 225,
    "start": 2198.017,
    "end": 2213.23,
    "en": "It teaches when to call a tool, which tool to choose, what arguments to pass, whether to continue after receiving a result, and how to chain dozens or hundreds of calls into coherent reasoning; these whether-and-how-to-use judgments are what get written into the model's weights.",
    "zh": "它教会模型何时调用工具、选择哪个工具、传递什么参数、在收到结果后是否继续，以及如何将数十次或数百次调用串联成连贯的推理；这些关于使用与否及如何使用的判断会被写入模型的权重中。"
  },
  {
    "id": 226,
    "start": 2213.23,
    "end": 2228.342,
    "en": "The tools and their execution are provided by the Agent framework or API built-ins: the implementations of web_search and code_runner, the code sandbox, and the infrastructure that issues calls and returns results all live outside the model.",
    "zh": "工具及其执行由Agent框架或API内置功能提供：web_search和code_runner的实现、代码沙箱以及发出调用并返回结果的基础架构都位于模型之外。"
  },
  {
    "id": 227,
    "start": 2228.342,
    "end": 2235.917,
    "en": "RL optimizes the decision policy; it does not embed a search engine or a code sandbox into the model's weights.",
    "zh": "RL优化决策策略；它不会将搜索引擎或代码沙箱嵌入到模型的权重中。"
  },
  {
    "id": 228,
    "start": 2235.917,
    "end": 2244.08,
    "en": "Thus, the orchestration loop has not disappeared; it has moved from the client to the server, while decision-making has moved into the model.",
    "zh": "因此，协调循环并未消失；它从客户端转移到了服务器，而决策则进入了模型内部。"
  },
  {
    "id": 229,
    "start": 2244.08,
    "end": 2248.53,
    "en": "Harness Engineering: Building Reliable Systems Around the Model.",
    "zh": "Harness工程：在模型周围构建可靠系统。"
  },
  {
    "id": 230,
    "start": 2248.53,
    "end": 2258.017,
    "en": "By now you understand how an Agent works at its core: an LLM runs the ReAct loop, guided by context, using tools to complete the task.",
    "zh": "到现在为止，你已经了解了Agent的核心工作原理：一个LLM运行ReAct循环，通过上下文引导，并使用工具完成任务。"
  },
  {
    "id": 231,
    "start": 2258.017,
    "end": 2264.542,
    "en": "The experiments above show that the basic mechanism works—and also expose how fragile it is.",
    "zh": "上述实验表明基本机制是可行的——同时也暴露了它的脆弱性。"
  },
  {
    "id": 232,
    "start": 2264.542,
    "end": 2272.98,
    "en": "The model may hallucinate (invent tools or parameters that do not exist), pick the wrong tool, or fail to recover from an error.",
    "zh": "模型可能会出现幻觉（虚构不存在的工具或参数）、选择错误的工具，或者无法从错误中恢复。"
  },
  {
    "id": 233,
    "start": 2272.98,
    "end": 2281.805,
    "en": "Between a working demo and a reliable product lies a substantial gap, and those fragilities are exactly what Harness Engineering exists to fix.",
    "zh": "从一个可运行的演示到一个可靠的成品之间存在巨大差距，这些脆弱性正是Harness工程要解决的问题。"
  },
  {
    "id": 234,
    "start": 2281.805,
    "end": 2289.267,
    "en": "The first half of this chapter answered what an Agent is; the second half answers how an Agent runs reliably in production.",
    "zh": "本章的前半部分回答了什么是Agent；后半部分回答了Agent如何在生产环境中可靠运行。"
  },
  {
    "id": 235,
    "start": 2289.436,
    "end": 2296.323,
    "en": "The preceding sections established the core formula: Agent = LLM + Context + Tools.",
    "zh": "前面的部分确立了核心公式：Agent = LLM + 上下文 + 工具。"
  },
  {
    "id": 236,
    "start": 2296.273,
    "end": 2303.611,
    "en": "It describes the Agent's internal composition: reasoning engine, working context, and action interfaces.",
    "zh": "它描述了Agent的内部结构：推理引擎、工作上下文和动作接口。"
  },
  {
    "id": 237,
    "start": 2303.611,
    "end": 2315.273,
    "en": "Harness Engineering adds a second, implementation-level view of the same system: treat the LLM as one core component (the Model), and call all the supporting code built around it the Harness.",
    "zh": "Harness工程为同一系统提供了第二个实现层面的视角：将LLM视为一个核心组件（模型），并将围绕它的所有支持代码统称为Harness。"
  },
  {
    "id": 238,
    "start": 2315.273,
    "end": 2321.336,
    "en": "The two views are not rivals; they describe the same system at different levels of abstraction.",
    "zh": "这两种视角并非对立；它们是在不同抽象层次上描述同一个系统。"
  },
  {
    "id": 239,
    "start": 2321.336,
    "end": 2331.073,
    "en": "We switch to the more general word \"Model\" because the principles of Harness Engineering apply to any model that can reason and call tools, not one particular kind.",
    "zh": "我们使用更通用的词“模型”是因为Harness工程的原则适用于任何能够推理并调用工具的模型，而不仅仅是一种特定类型的模型。"
  },
  {
    "id": 240,
    "start": 2331.073,
    "end": 2346.298,
    "en": "The core of the Harness is the original formula's \"Context + Tools,\" plus three layers of safeguards: Constrain (what the Agent may and may not do), Verify (whether it did the thing correctly), and Correct (how to recover when it did not).",
    "zh": "Harness的核心是原始公式的“上下文 + 工具”，再加上三层保障措施：约束（Agent可以和不可以做什么）、验证（是否正确地完成了任务）和纠正（当未正确完成时如何恢复）。"
  },
  {
    "id": 241,
    "start": 2346.298,
    "end": 2351.248,
    "en": "Expanded as an equation, the complete production-grade composition is:",
    "zh": "展开为一个公式，完整的生产级组合是："
  },
  {
    "id": 242,
    "start": 2351.248,
    "end": 2354.161,
    "en": "Agent = Model + Harness",
    "zh": "智能体 = 模型 + Harness"
  },
  {
    "id": 243,
    "start": 2354.161,
    "end": 2361.123,
    "en": "Harness = Context management + Tool interfaces + Constraints + Verification + Correction",
    "zh": "Harness = 上下文管理 + 工具接口 + 约束 + 验证 + 修正"
  },
  {
    "id": 244,
    "start": 2361.123,
    "end": 2363.873,
    "en": "Agent ↔ Environment",
    "zh": "智能体 ↔ 环境"
  },
  {
    "id": 245,
    "start": 2363.873,
    "end": 2375.336,
    "en": "A minimal demo needs only a Model and a Harness that can construct context and expose tools; a production system must add constraints, verification, and correction within that same boundary.",
    "zh": "一个最小的演示只需要一个模型和一个能够构建上下文并暴露工具的Harness；而生产系统必须在相同边界内添加约束、验证和修正。"
  },
  {
    "id": 246,
    "start": 2375.336,
    "end": 2388.086,
    "en": "For example, a refund Agent can place its policy in context, constrain calls with permission and amount rules, verify the result against database state, and retry or fall back after a timeout.",
    "zh": "例如，一个退款智能体可以在上下文中放置其政策，通过权限和金额规则约束调用，根据数据库状态验证结果，并在超时后重试或回退。"
  },
  {
    "id": 247,
    "start": 2388.086,
    "end": 2395.573,
    "en": "Harness engineering studies precisely this runtime and governance code—outside the Model but inside the Agent boundary.",
    "zh": "Harness工程精确研究的是这个运行时和治理代码——位于模型之外，但处于智能体边界之内。"
  },
  {
    "id": 248,
    "start": 2395.573,
    "end": 2404.598,
    "en": "More precisely, the Harness is not everything outside the model: it is the runtime and governance layer inside the Agent boundary and outside the Model.",
    "zh": "更准确地说，Harness并不是模型之外的所有内容：它是智能体边界之内、模型之外的运行时和治理层。"
  },
  {
    "id": 249,
    "start": 2404.598,
    "end": 2410.198,
    "en": "It mediates the Model–Environment interaction but does not include the Environment itself.",
    "zh": "它协调模型与环境的交互，但不包括环境本身。"
  },
  {
    "id": 250,
    "start": 2410.198,
    "end": 2425.848,
    "en": "Tool definitions, call adapters, sandbox permissions and reset mechanisms belong to the Harness; files and processes that change inside the sandbox, external databases, web pages, users and the physical world belong to the Environment.",
    "zh": "工具定义、调用适配器、沙箱权限和重置机制属于Harness；沙箱内部发生变化的文件和进程、外部数据库、网页、用户和物理世界属于环境。"
  },
  {
    "id": 251,
    "start": 2425.848,
    "end": 2430.036,
    "en": "Deployment location does not change this conceptual boundary.",
    "zh": "部署位置不会改变这一概念性边界。"
  },
  {
    "id": 252,
    "start": 2430.036,
    "end": 2437.636,
    "en": "The core of the Harness is context management and tool interfaces, around which three types of engineering safeguards are built:",
    "zh": "Harness的核心是上下文管理和工具接口，在其周围构建了三种类型的工程保障措施："
  },
  {
    "id": 253,
    "start": 2437.636,
    "end": 2444.861,
    "en": "Component: Context management; Responsibility and design principle: Supplies relevant information.",
    "zh": "组件：上下文管理；职责与设计原则：提供相关信息。"
  },
  {
    "id": 254,
    "start": 2444.861,
    "end": 2460.523,
    "en": "Information sufficiency: Give the Agent enough information to make an informed decision at each step.; Practical examples: System prompts, knowledge bases, Agent status bars, Sidecar bypass queries; See chapters: Chapters 2 & 3.",
    "zh": "信息充分性：在每一步都为智能体提供足够的信息以做出明智的决策；实际例子：系统提示、知识库、智能体状态栏、侧车旁路查询；参见章节：第2章和第3章。"
  },
  {
    "id": 255,
    "start": 2460.523,
    "end": 2467.648,
    "en": "Component: Tool interfaces; Responsibility and design principle: Defines how the model can act.",
    "zh": "组件：工具接口；职责与设计原则：定义模型可以执行的操作。"
  },
  {
    "id": 256,
    "start": 2467.648,
    "end": 2482.686,
    "en": "Clear interfaces: Use intuitive tool names, provide parameter examples, and explain each tool's limits.; Practical examples: MCP tools, code interpreter, search tools; See chapters: Chapter 4.",
    "zh": "清晰的接口：使用直观的工具名称，提供参数示例，并解释每个工具的限制；实用示例：MCP 工具、代码解释器、搜索工具；参见章节：第4章。"
  },
  {
    "id": 257,
    "start": 2482.686,
    "end": 2489.823,
    "en": "Component: Constraints; Responsibility and design principle: Defines what the Agent is allowed to do.",
    "zh": "组件：约束；职责与设计原则：定义智能体被允许执行的操作。"
  },
  {
    "id": 258,
    "start": 2489.823,
    "end": 2505.173,
    "en": "Fail-safe defaults: Keep capabilities disabled until explicitly enabled, as with mobile app permissions.; Practical examples: Claude Code requires user authorization before tool execution by default.; See chapters: Chapter 4.",
    "zh": "安全默认设置：在用户明确启用之前，保持功能禁用，如同移动应用权限；实用示例：Claude Code 默认需要用户授权后才能执行工具；参见章节：第4章。"
  },
  {
    "id": 259,
    "start": 2505.173,
    "end": 2513.473,
    "en": "Component: Verification; Responsibility and design principle: Checks whether tool execution produced the correct result.",
    "zh": "组件：验证；职责与设计原则：检查工具执行是否产生了正确结果。"
  },
  {
    "id": 260,
    "start": 2513.473,
    "end": 2532.236,
    "en": "Input isolation: Base security checks on structured data, such as fields returned by tools, rather than model-generated text that an attacker could influence through prompt injection.; Practical examples: Linting, type checks, validation of tool results; See chapters: Chapters 5 & 6.",
    "zh": "输入隔离：基于结构化数据（如工具返回的字段）进行安全检查，而不是攻击者可能通过提示注入影响的模型生成文本；实用示例：代码检查、类型检查、工具结果验证；参见章节：第5章和第6章。"
  },
  {
    "id": 261,
    "start": 2532.236,
    "end": 2540.323,
    "en": "Component: Correction; Responsibility and design principle: Recovers from errors or rolls back failed operations.",
    "zh": "组件：纠正；职责与设计原则：从错误中恢复或回滚失败的操作。"
  },
  {
    "id": 262,
    "start": 2540.323,
    "end": 2559.861,
    "en": "Attempt recovery before presenting a failure to the user—for example, retry a failed tool call instead of showing an incomplete result.; Practical examples: Automatic retries, resuming generation, escalation to a human after repeated failures (a circuit breaker); See chapters: Chapters 2 & 5.",
    "zh": "在向用户展示失败之前尝试恢复——例如，重试失败的工具调用，而不是显示不完整的结果；实用示例：自动重试、恢复生成、多次失败后升级至人工处理（断路器机制）；参见章节：第2章和第5章。"
  },
  {
    "id": 263,
    "start": 2560.012,
    "end": 2564.424,
    "en": "The basic model control loop is shown in the following pseudocode:",
    "zh": "基本的模型控制循环如下伪代码所示："
  },
  {
    "id": 264,
    "start": 2564.374,
    "end": 2569.549,
    "en": "In formal loop pseudocode: The environment provides an initial observation.",
    "zh": "在正式的循环伪代码中：环境提供初始观察值。"
  },
  {
    "id": 265,
    "start": 2569.549,
    "end": 2576.262,
    "en": "In a continuous loop, the Harness builds context from the trajectory, and the Model generates actions.",
    "zh": "在一个连续循环中，Harness 从轨迹构建上下文，模型生成动作。"
  },
  {
    "id": 266,
    "start": 2576.262,
    "end": 2583.449,
    "en": "The Harness validates and constrains these actions, applies them to the environment, and observes the updated state.",
    "zh": "Harness 验证并限制这些动作，将其应用于环境，并观察更新后的状态。"
  },
  {
    "id": 267,
    "start": 2583.449,
    "end": 2588.512,
    "en": "If safety checks pass, the loop continues until the goal is achieved.",
    "zh": "如果安全检查通过，循环将持续直到目标达成。"
  },
  {
    "id": 268,
    "start": 2588.512,
    "end": 2592.637,
    "en": "This skeleton deliberately omits implementation details.",
    "zh": "此框架有意省略了实现细节。"
  },
  {
    "id": 269,
    "start": 2592.637,
    "end": 2601.824,
    "en": "The complete API message loop appears in Chapter 2; tools and automatic verification are covered in Chapters 4 and 5, respectively.",
    "zh": "完整的 API 消息循环出现在第2章；工具和自动验证分别在第4章和第5章中讨论。"
  },
  {
    "id": 270,
    "start": 2601.824,
    "end": 2607.499,
    "en": "Context and Tools let the Agent complete tasks—understand the task and act on it.",
    "zh": "上下文和工具使智能体能够完成任务——理解任务并采取行动。"
  },
  {
    "id": 271,
    "start": 2607.499,
    "end": 2619.387,
    "en": "Constrain, Verify, and Correct make sure it does so reliably and safely—not as something apart from Context and Tools, but as the engineering that keeps them working reliably in production.",
    "zh": "约束、验证和纠正确保其可靠且安全地执行——不是与上下文和工具相分离，而是保持它们在生产环境中可靠运行的工程手段。"
  },
  {
    "id": 272,
    "start": 2619.387,
    "end": 2625.274,
    "en": "Along the maturity curve of Agent products, the emphasis between these two groups shifts.",
    "zh": "在智能体产品的成熟度曲线上，这两组重点之间的侧重会发生变化。"
  },
  {
    "id": 273,
    "start": 2625.274,
    "end": 2633.637,
    "en": "Early Agent frameworks focused on Context and Tools: give the model tools, give it context, and let it complete tasks.",
    "zh": "早期的智能体框架专注于上下文和工具：给模型工具，给它上下文，然后让它完成任务。"
  },
  {
    "id": 274,
    "start": 2633.637,
    "end": 2645.174,
    "en": "Production-grade systems have shifted their center of gravity to Constrain, Verify, and Correct: making sure tool calls are safe, context is managed, and errors are correctable.",
    "zh": "生产级系统已将重心转移到约束、验证和纠正：确保工具调用是安全的，上下文得到管理，并且错误可以被纠正。"
  },
  {
    "id": 275,
    "start": 2645.174,
    "end": 2647.199,
    "en": "Take Claude Code.",
    "zh": "以Claude Code为例。"
  },
  {
    "id": 276,
    "start": 2647.199,
    "end": 2663.687,
    "en": "The vast majority of its Harness code does Constrain, Verify, and Correct, not Context and Tools—the tools themselves (file read/write, command execution, search) are only a small part; the safeguards built around them are the true core.",
    "zh": "其Harness代码的大部分用于约束、验证和纠正，而不是上下文和工具——工具本身（文件读写、命令执行、搜索）只是很小的一部分；围绕它们构建的保护机制才是真正的核心。"
  },
  {
    "id": 277,
    "start": 2663.687,
    "end": 2666.174,
    "en": "These mechanisms include:",
    "zh": "这些机制包括："
  },
  {
    "id": 278,
    "start": 2666.174,
    "end": 2671.462,
    "en": "Process State Management: Tracks which step the Agent is currently executing",
    "zh": "进程状态管理：跟踪智能体当前正在执行的步骤"
  },
  {
    "id": 279,
    "start": 2671.462,
    "end": 2677.299,
    "en": "Multi-Layer Context Compression: Automatically prunes information when there is too much",
    "zh": "多层上下文压缩：当信息过多时自动清理"
  },
  {
    "id": 280,
    "start": 2677.299,
    "end": 2682.924,
    "en": "Permission Classification: Controls which operations require user confirmation",
    "zh": "权限分类：控制哪些操作需要用户确认"
  },
  {
    "id": 281,
    "start": 2682.924,
    "end": 2691.437,
    "en": "Circuit Breaker: Automatically stops retrying after repeated errors so one failing operation does not cascade through the whole system",
    "zh": "断路器：在重复错误后自动停止重试，防止一个失败的操作在整个系统中扩散"
  },
  {
    "id": 282,
    "start": 2691.437,
    "end": 2700.374,
    "en": "Error Recovery Mechanisms: Catches exceptions, rolls back to the last stable state, retries, or hands off to a human",
    "zh": "错误恢复机制：捕获异常，回滚到上一个稳定状态，重试或转交给人工"
  },
  {
    "id": 283,
    "start": 2700.374,
    "end": 2709.224,
    "en": "The industry is shifting from task completion to reliable task completion, making Harness Engineering the core competitive advantage of Agent systems.",
    "zh": "行业正从任务完成转向可靠的任务完成，使Harness工程成为智能体系统的核心竞争优势。"
  },
  {
    "id": 284,
    "start": 2709.224,
    "end": 2714.874,
    "en": "From Prompt Engineering to Loop Engineering: The Evolution of Engineering Paradigms.",
    "zh": "从提示工程到循环工程：工程范式的演变。"
  },
  {
    "id": 285,
    "start": 2714.874,
    "end": 2721.349,
    "en": "Looking back at the development of AI application engineering, a clear evolutionary arc emerges:",
    "zh": "回顾AI应用工程的发展，一个清晰的进化轨迹显现出来："
  },
  {
    "id": 286,
    "start": 2721.349,
    "end": 2729.574,
    "en": "Prompt Engineering was the first wave of innovation—improving output quality by refining the natural-language instructions fed to the model.",
    "zh": "提示工程是第一波创新——通过优化输入模型的自然语言指令来提高输出质量。"
  },
  {
    "id": 287,
    "start": 2729.574,
    "end": 2745.512,
    "en": "Context Engineering was the second wave—the realization that optimizing the prompt alone is not enough: all the information the model can see (system instructions, tool definitions, conversation history, external knowledge) has to be managed systematically.",
    "zh": "上下文工程是第二波创新——意识到仅优化提示词是不够的：模型能看到的所有信息（系统指令、工具定义、对话历史、外部知识）都必须系统化管理。"
  },
  {
    "id": 288,
    "start": 2745.512,
    "end": 2762.274,
    "en": "Harness Engineering was the third wave—it widens the view from \"what information the model receives\" to \"what kind of system the model runs in,\" taking in all infrastructure outside the model: constraint mechanisms, verification methods, feedback loops, error recovery.",
    "zh": "Harness工程是第三波创新——它从“模型接收什么信息”扩展到“模型运行在什么样的系统中”，涵盖了模型之外的所有基础设施：约束机制、验证方法、反馈循环和错误恢复。"
  },
  {
    "id": 289,
    "start": 2762.428,
    "end": 2779.328,
    "en": "Loop Engineering came next, widening the view from a single run to sustained autonomous operation across runs: who discovers the next piece of work, when to verify, and when the task counts as truly done (Chapter 10 develops this alongside multi-agent collaboration systems).",
    "zh": "接下来是循环工程，它将视角从单次运行扩展到跨运行的持续自主操作：谁发现下一项工作，何时进行验证，以及何时任务才算真正完成（第10章将与多智能体协作系统一起探讨这一点）。"
  },
  {
    "id": 290,
    "start": 2779.278,
    "end": 2801.69,
    "en": "In July 2026, the industry began using Graph Engineering for a higher-level orchestration perspective: organizing Agent loops, deterministic programs, and human approvals into an explicit execution graph, where nodes provide capabilities, edges define routing and dependencies, and structured state travels along those edges and is persisted at key boundaries.",
    "zh": "2026年7月，业界开始使用图工程实现更高层次的编排视角：将智能体循环、确定性程序和人工审批组织成一个显式的执行图，其中节点提供能力，边定义路由和依赖关系，结构化状态沿着这些边传递并在关键边界进行持久化。"
  },
  {
    "id": 291,
    "start": 2801.69,
    "end": 2813.29,
    "en": "These five stages are not replacements but nested layers: Prompt Engineering is a subset of Context Engineering, which is a subset of Harness Engineering, which is a subset of Loop Engineering.",
    "zh": "这五个阶段不是替代关系，而是嵌套层级：提示工程是上下文工程的一个子集，上下文工程是Harness工程的一个子集，Harness工程是循环工程的一个子集。"
  },
  {
    "id": 292,
    "start": 2813.29,
    "end": 2822.028,
    "en": "Loop Engineering is, in turn, a subset of Graph Engineering: a single Agent loop forms one node in the execution graph.",
    "zh": "反过来，循环工程也是图工程的一个子集：一个智能体循环在执行图中形成一个节点。"
  },
  {
    "id": 293,
    "start": 2822.028,
    "end": 2827.378,
    "en": "Each layer widens the engineer's scope of concern and influence beyond the last.",
    "zh": "每一层都扩大了工程师的关注范围和影响力。"
  },
  {
    "id": 294,
    "start": 2827.378,
    "end": 2836.115,
    "en": "As models converge in capability and stop being the decisive differentiator, competitive advantage shifts to the engineering outside the model.",
    "zh": "随着模型能力趋于一致并不再是决定性差异，竞争优势转向了模型之外的工程。"
  },
  {
    "id": 295,
    "start": 2836.115,
    "end": 2839.565,
    "en": "Recent engineering practice supports this view.",
    "zh": "最近的工程实践支持这一观点。"
  },
  {
    "id": 296,
    "start": 2839.565,
    "end": 2858.94,
    "en": "LangChain's work on Terminal Bench 2.0 (a benchmark evaluating an Agent's ability to complete complex tasks in a terminal environment) is a striking example: their Coding Agent improved from 52.8% to 66.5% (jumping from outside the top 30 to the top 5 on the leaderboard).",
    "zh": "LangChain在Terminal Bench 2.0（一个评估智能体在终端环境中完成复杂任务能力的基准测试）上的工作是一个突出的例子：他们的编码智能体性能从52.8%提升至66.5%（在排行榜上从前三十名之外跃升至前五名）。"
  },
  {
    "id": 297,
    "start": 2858.94,
    "end": 2869.253,
    "en": "What changed was not the model but the Harness—having the Agent check its own execution results, detect when it was stuck in a repetitive loop, and refine its reasoning strategy.",
    "zh": "改变的不是模型，而是Harness——让智能体检查自己的执行结果，检测是否陷入重复循环，并优化其推理策略。"
  },
  {
    "id": 298,
    "start": 2869.253,
    "end": 2872.653,
    "en": "Core Principles for Building Effective Agents.",
    "zh": "构建高效智能体的核心原则。"
  },
  {
    "id": 299,
    "start": 2872.653,
    "end": 2878.753,
    "en": "Based on Anthropic's experience, successful Agent systems follow three core principles.",
    "zh": "基于Anthropic的经验，成功的智能体系统遵循三个核心原则。"
  },
  {
    "id": 300,
    "start": 2878.753,
    "end": 2880.528,
    "en": "Keep it simple.",
    "zh": "保持简单。"
  },
  {
    "id": 301,
    "start": 2880.528,
    "end": 2885.803,
    "en": "Start with the simplest solution and add complexity only when truly necessary.",
    "zh": "从最简单的解决方案开始，只有在真正必要时才增加复杂性。"
  },
  {
    "id": 302,
    "start": 2885.803,
    "end": 2896.753,
    "en": "Direct API calls are preferable to complex frameworks; clear code is preferable to clever abstraction—every extra layer of abstraction is a new blind spot during debugging.",
    "zh": "直接的API调用优于复杂的框架；清晰的代码优于巧妙的抽象——每增加一层抽象，调试时就会多一个盲点。"
  },
  {
    "id": 303,
    "start": 2896.753,
    "end": 2898.79,
    "en": "Keep it transparent.",
    "zh": "保持透明。"
  },
  {
    "id": 304,
    "start": 2898.79,
    "end": 2904.715,
    "en": "Show the Agent's planning steps, execution logs, and decision trajectory clearly.",
    "zh": "清晰地展示智能体的规划步骤、执行日志和决策轨迹。"
  },
  {
    "id": 305,
    "start": 2904.715,
    "end": 2914.215,
    "en": "This is not just a debugging convenience; it is a precondition for user trust—an error inside a black box is hard to locate or fix from outside.",
    "zh": "这不仅是一种调试便利，更是用户信任的前提——黑箱中的错误很难从外部定位或修复。"
  },
  {
    "id": 306,
    "start": 2914.215,
    "end": 2919.728,
    "en": "Design a well-structured tool interface (ACI, Agent-Computer Interface).",
    "zh": "设计一个结构良好的工具接口（ACI，智能体-计算机接口）。"
  },
  {
    "id": 307,
    "start": 2919.728,
    "end": 2930.278,
    "en": "ACI means designing the interface from the Agent's perspective—easy for the Agent to understand and use—rather than from the programmer's perspective, as in traditional APIs.",
    "zh": "ACI意味着从智能体的角度设计接口——让智能体易于理解和使用——而不是像传统API那样从程序员的角度出发。"
  },
  {
    "id": 308,
    "start": 2930.278,
    "end": 2945.728,
    "en": "Tool names and parameters should be intuitive, and wherever misuse is likely the design should make the mistake impossible from the start: a SIM card's notched corner lets it slide into the tray in only one orientation, and a microwave refuses to heat while its door is open.",
    "zh": "工具名称和参数应直观，任何可能被误用的地方，设计上应从一开始就杜绝错误：SIM卡的缺口只能以一种方向插入卡槽，微波炉在门打开时不会加热。"
  },
  {
    "id": 309,
    "start": 2945.728,
    "end": 2955.678,
    "en": "In manufacturing, this approach is known as poka-yoke, or mistake-proofing: designing products and processes to prevent mistakes or make them immediately apparent.",
    "zh": "在制造业中，这种方法被称为防错（poka-yoke）：设计产品和流程以防止错误或使错误立即显现。"
  },
  {
    "id": 310,
    "start": 2955.678,
    "end": 2958.828,
    "en": "It is used in the Toyota Production System.",
    "zh": "它被用于丰田生产系统。"
  },
  {
    "id": 311,
    "start": 2958.828,
    "end": 2970.303,
    "en": "A poorly designed tool can cause even the strongest model to fail repeatedly: the interface is the only channel between model and tool, and a vague interface gets amplified into systemic error.",
    "zh": "设计不良的工具即使是最强大的模型也会反复失败：接口是模型与工具之间的唯一通道，模糊的接口会演变为系统性错误。"
  },
  {
    "id": 312,
    "start": 2970.303,
    "end": 2980.178,
    "en": "The next three sections address three freestanding but important topics in Harness engineering: model selection, orchestration patterns, and guardrails and safety.",
    "zh": "接下来的三个部分将讨论Harness工程中的三个独立但重要的主题：模型选择、编排模式以及护栏和安全机制。"
  },
  {
    "id": 313,
    "start": 2980.178,
    "end": 2986.515,
    "en": "None belongs to the five Harness elements proper, but all are unavoidable in engineering practice.",
    "zh": "它们不属于Harness的五个核心要素，但在工程实践中都是不可避免的。"
  },
  {
    "id": 314,
    "start": 2986.515,
    "end": 2988.603,
    "en": "How to Choose a Model.",
    "zh": "如何选择模型。"
  },
  {
    "id": 315,
    "start": 2988.603,
    "end": 2996.215,
    "en": "Before discussing orchestration patterns, we first need to answer a practical question: what kind of model should drive your Agent?",
    "zh": "在讨论编排模式之前，我们首先需要回答一个实际问题：你的智能体应该由哪种模型驱动？"
  },
  {
    "id": 316,
    "start": 2996.215,
    "end": 3003.915,
    "en": "The model is the foundation of the Agent's intelligence, and choosing the right one often matters more than any amount of prompt tuning.",
    "zh": "模型是智能体智能的基础，选择合适的模型往往比任何程度的提示调优都更为重要。"
  },
  {
    "id": 317,
    "start": 3003.915,
    "end": 3011.865,
    "en": "Model releases move too quickly for specific version recommendations to stay useful, so this section offers directions instead.",
    "zh": "模型的发布速度太快，以至于具体版本推荐很难保持有用，因此本节将提供一些方向性建议。"
  },
  {
    "id": 318,
    "start": 3012.028,
    "end": 3014.253,
    "en": "Closed-Source Models.",
    "zh": "闭源模型。"
  },
  {
    "id": 319,
    "start": 3014.203,
    "end": 3024.903,
    "en": "The two most commonly used closed-source model providers in current Agent development are OpenAI (GPT/o series) and Anthropic (Claude series).",
    "zh": "目前在智能体开发中，最常用的两家闭源模型供应商是OpenAI（GPT/o系列）和Anthropic（Claude系列）。"
  },
  {
    "id": 320,
    "start": 3024.903,
    "end": 3032.49,
    "en": "Closed-source models generally lead in capability but are more expensive and constrained by the vendor's API policies.",
    "zh": "闭源模型通常在能力上更占优势，但成本更高，并且受供应商API策略的限制。"
  },
  {
    "id": 321,
    "start": 3032.49,
    "end": 3040.165,
    "en": "When selecting a model, do not rely only on leaderboards; evaluate it on your own tasks (see Chapter 7).",
    "zh": "在选择模型时，不要只依赖排行榜；应在自己的任务上进行评估（参见第7章）。"
  },
  {
    "id": 322,
    "start": 3040.165,
    "end": 3042.303,
    "en": "Open-Source Models.",
    "zh": "开源模型。"
  },
  {
    "id": 323,
    "start": 3042.303,
    "end": 3050.678,
    "en": "At the time of writing, open-source models lag closed-source models by no more than six months, while costing substantially less.",
    "zh": "在撰写本书时，开源模型与闭源模型的能力差距不超过六个月，同时成本要低得多。"
  },
  {
    "id": 324,
    "start": 3050.678,
    "end": 3057.953,
    "en": "If your business scenario does not demand the highest model capability, an open-source model is a pragmatic choice.",
    "zh": "如果你的业务场景不需要最高水平的模型能力，开源模型是一个务实的选择。"
  },
  {
    "id": 325,
    "start": 3057.953,
    "end": 3069.64,
    "en": "Open-source models are low-cost, support private deployment, and allow fine-tuning customization, making them suitable for cost-sensitive scenarios or those with data compliance requirements.",
    "zh": "开源模型成本低，支持私有化部署，并允许进行微调定制，因此适合对成本敏感的场景或有数据合规要求的场景。"
  },
  {
    "id": 326,
    "start": 3069.64,
    "end": 3076.203,
    "en": "DeepSeek, Kimi, and GLM are among the stronger Chinese models for Agent capabilities.",
    "zh": "DeepSeek、Kimi和GLM是智能体能力较强的中文模型之一。"
  },
  {
    "id": 327,
    "start": 3076.203,
    "end": 3083.478,
    "en": "Note that models differ widely in tool-calling ability, so be sure to test in your specific scenario before committing.",
    "zh": "请注意，不同模型在工具调用能力上存在很大差异，因此在做出承诺前，请务必在你的具体场景中进行测试。"
  },
  {
    "id": 328,
    "start": 3083.478,
    "end": 3087.953,
    "en": "Beyond capability, consider the model's policy boundaries.",
    "zh": "除了能力之外，还应考虑模型的政策边界。"
  },
  {
    "id": 329,
    "start": 3087.953,
    "end": 3095.303,
    "en": "A model may have the technical ability to perform a task without the product that hosts it allowing users to invoke that ability.",
    "zh": "一个模型可能在技术上能够执行某项任务，但承载它的产品可能不允许用户调用该能力。"
  },
  {
    "id": 330,
    "start": 3095.303,
    "end": 3110.753,
    "en": "Vendors draw different policy boundaries around cybersecurity, model distillation, model extraction, private data, and high-risk operations; the same task may also produce different outcomes in a chat product, a Coding Agent, and an API.",
    "zh": "供应商在网络安全、模型蒸馏、模型提取、私有数据和高风险操作等方面设定不同的政策边界；同一任务在聊天产品、编码智能体和API中的结果也可能不同。"
  },
  {
    "id": 331,
    "start": 3110.753,
    "end": 3116.415,
    "en": "Model selection therefore cannot compare only accuracy, price, and speed.",
    "zh": "因此，模型选择不能仅比较准确率、价格和速度。"
  },
  {
    "id": 332,
    "start": 3116.415,
    "end": 3126.453,
    "en": "Test on your real tasks whether the model is willing to proceed, whether the interface exposes the required capability, and whether the service terms permit the intended use.",
    "zh": "在你的实际任务上测试模型是否愿意继续执行，接口是否暴露了所需的能力，以及服务条款是否允许预期的使用。"
  },
  {
    "id": 333,
    "start": 3126.453,
    "end": 3132.765,
    "en": "For business-critical tasks, prepare human handoff or another compliant model as a fallback.",
    "zh": "对于关键业务任务，准备人工交接或另一个合规模型作为备用方案。"
  },
  {
    "id": 334,
    "start": 3132.765,
    "end": 3136.14,
    "en": "Most Agents Need a Model that Supports Reasoning.",
    "zh": "大多数智能体需要一个支持推理的模型。"
  },
  {
    "id": 335,
    "start": 3136.14,
    "end": 3144.728,
    "en": "Agents make complex decisions—multi-step reasoning, tool selection—and models without reasoning tend to perform poorly on them.",
    "zh": "智能体进行复杂决策——多步骤推理、工具选择——而没有推理能力的模型在这些任务上表现往往不佳。"
  },
  {
    "id": 336,
    "start": 3144.728,
    "end": 3154.99,
    "en": "The exceptions are few: a single simple step, or Computer Use GUI operations that amount to clicking a fixed position, where a non-reasoning model may suffice.",
    "zh": "例外情况很少：单一简单步骤，或者计算机使用GUI操作相当于点击固定位置，此时非推理模型可能已足够。"
  },
  {
    "id": 337,
    "start": 3154.99,
    "end": 3161.29,
    "en": "The moment multi-step reasoning or dynamic decision-making enters, a reasoning model is essential.",
    "zh": "一旦涉及多步骤推理或动态决策，推理模型就变得至关重要。"
  },
  {
    "id": 338,
    "start": 3161.29,
    "end": 3165.315,
    "en": "Consider Output Speed and Multimodal Capabilities.",
    "zh": "考虑输出速度和多模态能力。"
  },
  {
    "id": 339,
    "start": 3165.315,
    "end": 3169.39,
    "en": "Beyond cost, two dimensions are easy to overlook.",
    "zh": "除了成本之外，有两个维度容易被忽视。"
  },
  {
    "id": 340,
    "start": 3169.39,
    "end": 3186.278,
    "en": "One is output token speed: Agents typically run many rounds of inference, and each round must finish before the next can start, so output speed directly determines end-to-end latency—a 20-round Agent task that runs 2 seconds slower per round means an extra 40 seconds of waiting.",
    "zh": "一个是输出标记速度：智能体通常会运行许多轮推理，每一轮必须完成之后才能开始下一轮，因此输出速度直接决定了端到端延迟——一个20轮的智能体任务，每轮慢2秒，意味着额外40秒的等待时间。"
  },
  {
    "id": 341,
    "start": 3186.278,
    "end": 3197.603,
    "en": "The other is multimodal support: if your Agent needs to understand images, audio, or video, multimodal capability is a hard requirement, and models differ widely here.",
    "zh": "另一个是多模态支持：如果你的智能体需要理解图像、音频或视频，多模态能力是硬性要求，而不同模型在此方面差异很大。"
  },
  {
    "id": 342,
    "start": 3197.603,
    "end": 3201.815,
    "en": "Orchestration Patterns: Workflow vs. Autonomous.",
    "zh": "编排模式：工作流 vs 自主。"
  },
  {
    "id": 343,
    "start": 3201.815,
    "end": 3217.215,
    "en": "Orchestration patterns are how the Harness organizes its \"context and tools\" layer—they determine how context flows between LLM calls, how tools are scheduled, and whether the Agent's execution path is fixed in advance or generated dynamically.",
    "zh": "编排模式是Harness组织其“上下文和工具”层的方式——它们决定了上下文在LLM调用之间的流动方式，工具如何被调度，以及智能体的执行路径是预先确定的还是动态生成的。"
  },
  {
    "id": 344,
    "start": 3217.215,
    "end": 3224.278,
    "en": "Agent orchestration has evolved from simple to complex, and each pattern has suitable use cases and trade-offs.",
    "zh": "智能体编排已经从简单发展到复杂，每种模式都有适用的用例和权衡。"
  },
  {
    "id": 345,
    "start": 3224.278,
    "end": 3235.74,
    "en": "In Anthropic's experience working with dozens of teams building LLM Agents, the most successful implementations rarely use complex frameworks; they use simple, composable patterns.",
    "zh": "根据Anthropic与数十个构建LLM智能体的团队合作的经验，最成功的实现很少使用复杂的框架；它们使用简单的、可组合的模式。"
  },
  {
    "id": 346,
    "start": 3235.74,
    "end": 3241.953,
    "en": "When building an LLM application, follow the principle of progressing from simple to complex.",
    "zh": "在构建LLM应用时，应遵循由简到繁的原则。"
  },
  {
    "id": 347,
    "start": 3241.953,
    "end": 3245.503,
    "en": "Start by considering a single LLM call.",
    "zh": "首先考虑单次LLM调用。"
  },
  {
    "id": 348,
    "start": 3245.503,
    "end": 3251.853,
    "en": "If better prompts and in-context examples can solve the problem, do not introduce an Agent system.",
    "zh": "如果更好的提示和上下文示例可以解决问题，就不要引入智能体系统。"
  },
  {
    "id": 349,
    "start": 3251.853,
    "end": 3259.578,
    "en": "When multi-step processing is needed, consider a workflow for scenarios that decompose cleanly into fixed subtasks.",
    "zh": "当需要多步骤处理时，考虑那些能清晰分解为固定子任务的场景的工作流。"
  },
  {
    "id": 350,
    "start": 3259.578,
    "end": 3265.853,
    "en": "Use an autonomous Agent only when dynamic decisions and flexible execution paths are required.",
    "zh": "只有在需要动态决策和灵活执行路径时，才使用自主智能体。"
  },
  {
    "id": 351,
    "start": 3265.853,
    "end": 3274.103,
    "en": "Remember that Agent systems typically trade latency and cost for better task performance, so carefully weigh whether that trade is worthwhile.",
    "zh": "请记住，智能体系统通常以延迟和成本换取更好的任务性能，因此要仔细权衡这种权衡是否值得。"
  },
  {
    "id": 352,
    "start": 3274.252,
    "end": 3280.577,
    "en": "A common counterexample is to begin by building a highly complex workflow or multi-Agent system.",
    "zh": "一个常见的反例是一开始就构建高度复杂的工作流或多智能体系统。"
  },
  {
    "id": 353,
    "start": 3280.527,
    "end": 3305.239,
    "en": "For example, when asked to design an Agent that “extracts personal memories from a million chat messages,” some AI models will quickly sketch a seemingly rigorous pipeline: first segment the conversations, then assign extraction, evidence verification, identity resolution, memory curation, and merge-review Agents in sequence, and finally build a fact graph, a coverage ledger, and immutable versions.",
    "zh": "例如，当被要求设计一个能够‘从一百万条聊天记录中提取个人记忆’的智能体时，一些AI模型会迅速勾勒出一个看似严谨的流程：首先对对话进行分段，然后依次分配抽取、证据验证、身份解析、记忆整理和合并审查的智能体，最后构建事实图谱、覆盖清单和不可变版本。"
  },
  {
    "id": 354,
    "start": 3305.239,
    "end": 3312.114,
    "en": "Each component makes sense in isolation, yet together they form a highly inefficient and unreliable system.",
    "zh": "每个组件单独来看都有意义，但它们组合在一起却形成了一个高度低效且不可靠的系统。"
  },
  {
    "id": 355,
    "start": 3312.114,
    "end": 3323.189,
    "en": "Because a complex workflow has a fixed execution topology, each new exception readily leads to another node: the architecture grows increasingly complex while becoming less general.",
    "zh": "因为复杂的工作流具有固定的执行拓扑结构，每次新的异常情况都会导致新增节点：架构变得越来越复杂，而通用性却越来越差。"
  },
  {
    "id": 356,
    "start": 3323.189,
    "end": 3329.214,
    "en": "Semantic judgments that the model could have made from context are instead hard-coded into the workflow.",
    "zh": "本应通过上下文让模型做出的语义判断，却被硬编码到了工作流中。"
  },
  {
    "id": 357,
    "start": 3329.214,
    "end": 3334.702,
    "en": "Therefore, the importance of the Harness does not mean that a more complex Harness is better.",
    "zh": "因此，Harness的重要性并不意味着更复杂的Harness更好。"
  },
  {
    "id": 358,
    "start": 3334.702,
    "end": 3340.402,
    "en": "The Manus website summarizes this trade-off as “Less structure, more intelligence.",
    "zh": "Manus网站将这种权衡总结为‘少一点结构，多一点智能’。"
  },
  {
    "id": 359,
    "start": 3340.402,
    "end": 3353.752,
    "en": "Start by giving a capable Agent a clear goal, the necessary context, and composable tools, and use natural language to tell it how a person would verify evidence, make comparisons, and resolve conflicts.",
    "zh": "首先给一个有能力的智能体明确的目标、必要的上下文和可组合的工具，并用自然语言告诉它人类如何验证证据、进行比较和解决冲突。"
  },
  {
    "id": 360,
    "start": 3353.752,
    "end": 3362.827,
    "en": "The program should hard-code only boundaries that must always hold, such as permissions, never overwriting source material, and atomic publication.",
    "zh": "程序应仅硬编码必须始终成立的边界条件，如权限、永不覆盖原始材料以及原子化发布。"
  },
  {
    "id": 361,
    "start": 3362.827,
    "end": 3376.864,
    "en": "Only when business constraints inherently require it, or evaluations repeatedly expose a stable failure mode, should the corresponding step be promoted into a dedicated verifier, an independent Agent, or a deterministic process.",
    "zh": "只有在业务约束本质上需要时，或者评估反复暴露出稳定的失败模式时，才应将相应步骤提升为专用验证器、独立智能体或确定性流程。"
  },
  {
    "id": 362,
    "start": 3376.864,
    "end": 3384.889,
    "en": "Good structure does not rehearse all of the Agent's thinking for it; it guards the boundaries and returns the decision space within them to the model.",
    "zh": "良好的结构不会为智能体预演所有思考过程；它会保护边界，并将边界内的决策空间返回给模型。"
  },
  {
    "id": 363,
    "start": 3384.889,
    "end": 3388.564,
    "en": "Workflow Pattern: Deterministic Orchestration.",
    "zh": "工作流模式：确定性编排。"
  },
  {
    "id": 364,
    "start": 3388.564,
    "end": 3394.639,
    "en": "A workflow is a system that orchestrates LLMs and tools through predefined code paths.",
    "zh": "工作流是一种通过预定义代码路径编排大语言模型和工具的系统。"
  },
  {
    "id": 365,
    "start": 3394.639,
    "end": 3407.239,
    "en": "Its execution path is deterministic and designed in advance by the developer—the behavior of each step and transition is defined in code; the LLM handles only the understanding and generation inside each node.",
    "zh": "它的执行路径是确定性的，并由开发者预先设计——每个步骤和转换的行为都在代码中定义；大语言模型仅负责每个节点内的理解和生成。"
  },
  {
    "id": 366,
    "start": 3407.239,
    "end": 3412.689,
    "en": "For example, a flight-booking Agent can use a workflow with four fixed nodes:",
    "zh": "例如，一个航班预订智能体可以使用包含四个固定节点的工作流："
  },
  {
    "id": 367,
    "start": 3412.689,
    "end": 3419.277,
    "en": "Verify User Identity—Call the identity verification API to confirm who the user is.",
    "zh": "验证用户身份—调用身份验证API以确认用户身份。"
  },
  {
    "id": 368,
    "start": 3419.277,
    "end": 3425.039,
    "en": "Search for Available Flights—Query the flight database based on user requirements.",
    "zh": "搜索可用航班—根据用户需求查询航班数据库。"
  },
  {
    "id": 369,
    "start": 3425.039,
    "end": 3429.539,
    "en": "Complete Payment—Call the payment interface to deduct the amount.",
    "zh": "完成支付—调用支付接口以扣除金额。"
  },
  {
    "id": 370,
    "start": 3429.539,
    "end": 3435.652,
    "en": "Confirm Booking—Call the booking API to lock the seat and send a confirmation to the user.",
    "zh": "确认预订—调用预订API以锁定座位并向用户发送确认信息。"
  },
  {
    "id": 371,
    "start": 3435.652,
    "end": 3452.752,
    "en": "An LLM can be used within each node (e.g., using natural language to understand the user's travel needs), but the flow sequence between nodes is fixed by code—the system will not book a seat before payment is completed, nor will it start searching for flights before identity verification.",
    "zh": "每个节点内可以使用大语言模型（例如，使用自然语言理解用户的旅行需求），但节点之间的流程顺序由代码固定——系统不会在付款完成前预订座位，也不会在身份验证前开始搜索航班。"
  },
  {
    "id": 372,
    "start": 3452.752,
    "end": 3456.214,
    "en": "The workflow pattern has two core advantages.",
    "zh": "工作流模式有两个核心优势。"
  },
  {
    "id": 373,
    "start": 3456.214,
    "end": 3470.064,
    "en": "First, strict process control: the developer can guarantee that critical steps are never skipped or run out of order—business rules like \"no booking before payment\" are enforced by code, not left to the LLM's judgment.",
    "zh": "首先，严格的流程控制：开发者可以确保关键步骤不会被跳过或顺序错乱——像“付款前不得预订”这样的业务规则由代码强制执行，而不是依赖大语言模型的判断。"
  },
  {
    "id": 374,
    "start": 3470.064,
    "end": 3483.239,
    "en": "Second, security: because the execution path is deterministic, prompt injection or a model error can at most affect the processing inside the current node; it cannot make the Agent jump to a branch it should not reach.",
    "zh": "其次，安全性：因为执行路径是确定性的，提示注入或模型错误最多只能影响当前节点的处理；它无法让智能体跳转到不应到达的分支。"
  },
  {
    "id": 375,
    "start": 3483.239,
    "end": 3486.802,
    "en": "The attack surface is confined to a single node.",
    "zh": "攻击面被限制在一个节点内。"
  },
  {
    "id": 376,
    "start": 3486.802,
    "end": 3491.052,
    "en": "The main limitation of a workflow is its lack of flexibility.",
    "zh": "工作流的主要局限性在于其缺乏灵活性。"
  },
  {
    "id": 377,
    "start": 3491.052,
    "end": 3508.014,
    "en": "When an unanticipated event occurs—for example, the user changes the booking during payment, or a flight is canceled and the system needs to recommend an alternative—the fixed path cannot adapt on its own; it can only follow a preset exception branch or hand control back to a human.",
    "zh": "当发生意外事件时——例如，用户在支付过程中更改了预订，或者航班被取消，系统需要推荐替代方案——固定路径无法自行适应；它只能遵循预设的异常分支或将控制权交还给人类。"
  },
  {
    "id": 378,
    "start": 3508.18,
    "end": 3512.767,
    "en": "Take the simplest workflow example: text-to-image generation.",
    "zh": "以最简单的工作流为例：文本生成图像。"
  },
  {
    "id": 379,
    "start": 3512.717,
    "end": 3530.53,
    "en": "The user's need is usually a single plain-language sentence, such as \"Draw me a scene of programmers at work after AGI is achieved\"; but text-to-image models like Stable Diffusion only accept prompts in a specific style—comma-separated English tags, quality words, negative prompts.",
    "zh": "用户的需求通常是一个简单的自然语言句子，例如“给我画一幅AGI实现后程序员工作的场景”；但像Stable Diffusion这样的文本生成图像模型只接受特定风格的提示——用逗号分隔的英文标签、质量词和负面提示。"
  },
  {
    "id": 380,
    "start": 3530.53,
    "end": 3536.242,
    "en": "So the workflow places two fixed nodes between the user and the image-generation model:",
    "zh": "因此，工作流在用户和图像生成模型之间放置了两个固定节点："
  },
  {
    "id": 381,
    "start": 3536.242,
    "end": 3544.592,
    "en": "Prompt Rewriting—Use an LLM to rewrite the user's natural-language request into the prompt format a text-to-image model expects.",
    "zh": "提示重写——使用大语言模型将用户的自然语言请求重写为文本生成图像模型期望的提示格式。"
  },
  {
    "id": 382,
    "start": 3544.592,
    "end": 3567.967,
    "en": "For the example above, \"programmers at work after AGI is achieved\" is a very broad requirement, so the LLM also needs to think carefully (for example, \"after AGI is achieved, programmers no longer need to write code, so the image should show a programmer sunbathing on a beach, directing AI employees through a brain-computer interface\") and then produce a concrete scene description.",
    "zh": "对于上面的例子，“AGI实现后程序员工作”是一个非常宽泛的要求，因此LLM还需要仔细思考（例如，“AGI实现后，程序员不再需要编写代码，所以图像应显示程序员在海滩上晒太阳，通过脑机接口指导AI员工”），然后生成具体的场景描述。"
  },
  {
    "id": 383,
    "start": 3567.967,
    "end": 3573.83,
    "en": "Image Generation—Call the text-to-image model with the rewritten prompt to obtain the image.",
    "zh": "图像生成——使用重写的提示调用文本生成图像模型以获得图像。"
  },
  {
    "id": 384,
    "start": 3573.83,
    "end": 3576.83,
    "en": "The execution path is hard-coded.",
    "zh": "执行路径是硬编码的。"
  },
  {
    "id": 385,
    "start": 3576.83,
    "end": 3589.367,
    "en": "The LLM node in this workflow performs translation—converting human language into an input format the tool can understand—and it exists because text-to-image models \"don't understand plain speech.",
    "zh": "此工作流中的LLM节点执行翻译——将人类语言转换为工具可以理解的输入格式——它存在是因为文本生成图像模型“不理解自然语言”。"
  },
  {
    "id": 386,
    "start": 3589.367,
    "end": 3597.292,
    "en": "Harness code that specifically patches a capability shortcoming of a tool (or model) like this can be called an adapter layer.",
    "zh": "专门修复工具（或模型）能力不足的Harness代码可以称为适配层。"
  },
  {
    "id": 387,
    "start": 3597.292,
    "end": 3609.28,
    "en": "But if the image-generation tool is replaced with a multimodal model that has native image generation capability, such as Nano Banana 2 or GPT-Image 2, prompt rewriting is no longer needed.",
    "zh": "但如果将图像生成工具替换为具有原生图像生成能力的多模态模型，如Nano Banana 2或GPT-Image 2，则不需要提示重写。"
  },
  {
    "id": 388,
    "start": 3609.28,
    "end": 3616.267,
    "en": "No matter how the user phrases the request, the model understands it on its own and produces the image directly.",
    "zh": "无论用户如何表述请求，模型都能自行理解并直接生成图像。"
  },
  {
    "id": 389,
    "start": 3616.267,
    "end": 3624.155,
    "en": "Experiment 1-4 introductory difficulty, one star: : Text-to-Image Workflow vs. Native Image Generation",
    "zh": "实验1-4，入门难度，一颗星：文本生成图像工作流与原生图像生成"
  },
  {
    "id": 390,
    "start": 3624.155,
    "end": 3627.967,
    "en": "Send the same plain-language request through two routes.",
    "zh": "将相同的自然语言请求通过两条路径发送。"
  },
  {
    "id": 391,
    "start": 3627.967,
    "end": 3647.242,
    "en": "Workflow route: an LLM first rewrites the request into a Stable Diffusion-style prompt, then calls the text-to-image model to produce the image; native route: send the sentence as-is to a multimodal model that supports native image generation (such as GPT-Image 2), producing the image in a single call.",
    "zh": "工作流路径：一个LLM首先将请求重写为Stable Diffusion风格的提示，然后调用文本到图像模型生成图像；原生路径：直接将句子发送到支持原生图像生成的多模态模型（如GPT-Image 2），在一次调用中生成图像。"
  },
  {
    "id": 392,
    "start": 3647.242,
    "end": 3656.217,
    "en": "Compare two things: what the prompt-rewriting node turns the original request into, and which route's image stays closer to the original request.",
    "zh": "比较两件事：提示重写节点将原始请求转换成什么，以及哪种路径生成的图像更接近原始请求。"
  },
  {
    "id": 393,
    "start": 3656.217,
    "end": 3671.992,
    "en": "It is worth comparing two categories of requests: one that is concrete (for example, a poster with specified copy), and one that is broad (such as the AGI work scene above)—for this category, the workflow route may still have advantages of its own.",
    "zh": "值得比较两类请求：一类是具体的（例如带有指定文案的海报），另一类是宽泛的（如上面的AGI工作场景）——对于这一类，工作流路径可能仍具有自身的优点。"
  },
  {
    "id": 394,
    "start": 3672.148,
    "end": 3681.373,
    "en": "This experiment shows that the parts of a Harness that patch the model's capability shortcomings will be internalized by the model itself as the model grows stronger.",
    "zh": "这个实验表明，Harness中用于弥补模型能力不足的部分，会随着模型变强而被模型自身内化。"
  },
  {
    "id": 395,
    "start": 3681.323,
    "end": 3706.573,
    "en": "In this first chapter alone, this has already happened several times: few-shot examples and prompting tricks like \"let's think step by step\" were internalized by instruction tuning and reasoning models; output-format repair and JSON parsing tolerance were internalized by structured output and native tool calling; and text-to-image prompt rewriting was absorbed by the model's native multimodal understanding and generation capabilities.",
    "zh": "在第一章中，这种情况已经发生了多次：少样本示例和类似“让我们逐步思考”的提示技巧已被指令微调和推理模型内化；输出格式修复和JSON解析容错已被结构化输出和原生工具调用内化；文本到图像提示重写已被模型的原生多模态理解和生成能力吸收。"
  },
  {
    "id": 396,
    "start": 3706.573,
    "end": 3713.423,
    "en": "Each round of internalization eliminates adapter-layer code of the \"translation\" and \"scaffolding\" kind.",
    "zh": "每一轮内化都会消除“翻译”和“脚手架”类型的适配层代码。"
  },
  {
    "id": 397,
    "start": 3713.423,
    "end": 3716.998,
    "en": "Autonomous Agent: Runtime Decision-Making.",
    "zh": "自主智能体：运行时决策。"
  },
  {
    "id": 398,
    "start": 3716.998,
    "end": 3722.223,
    "en": "When the fixed path of a workflow is insufficient, we need an autonomous Agent.",
    "zh": "当工作流的固定路径不足以应对时，我们需要一个自主智能体。"
  },
  {
    "id": 399,
    "start": 3722.223,
    "end": 3732.435,
    "en": "The core difference between an autonomous Agent and a workflow is that the execution path is not predefined but is determined at runtime by the Agent based on environmental feedback.",
    "zh": "自主智能体与工作流的核心区别在于执行路径不是预先定义的，而是由智能体根据环境反馈在运行时确定的。"
  },
  {
    "id": 400,
    "start": 3732.435,
    "end": 3738.16,
    "en": "Returning to the flight example, an autonomous Agent needs no four predefined nodes.",
    "zh": "回到航班示例，自主智能体不需要四个预定义节点。"
  },
  {
    "id": 401,
    "start": 3738.16,
    "end": 3751.498,
    "en": "The user says, \"Book me a flight to Shanghai next Wednesday,\" and the Agent determines the sequence dynamically: it searches for flights, discovers that login is required, verifies identity, and resumes the search.",
    "zh": "用户说：'帮我预订下周三去上海的航班'，智能体动态决定序列：它搜索航班，发现需要登录，验证身份后继续搜索。"
  },
  {
    "id": 402,
    "start": 3751.498,
    "end": 3759.735,
    "en": "If the cheapest flight has a layover, it can ask whether that is acceptable; if the user says no, it adjusts the search criteria.",
    "zh": "如果最便宜的航班有中转，它可以询问是否可以接受；如果用户说不可以，它会调整搜索条件。"
  },
  {
    "id": 403,
    "start": 3759.735,
    "end": 3769.973,
    "en": "An autonomous Agent therefore has to plan for itself—choose its own execution steps—and recognize failure and change strategy rather than simply halting on error.",
    "zh": "因此，自主智能体必须自己进行规划——选择自己的执行步骤，并识别失败并改变策略，而不是简单地在错误发生时停止。"
  },
  {
    "id": 404,
    "start": 3769.973,
    "end": 3784.86,
    "en": "But autonomy is not unbounded: explicit stopping conditions must be designed in (task complete, maximum iterations reached, unrecoverable error hit), or the Agent can enter infinite loops or continue executing after the task is already done.",
    "zh": "但自主性并非无边界：必须设计显式的停止条件（任务完成、最大迭代次数达到、无法恢复的错误发生），否则智能体可能会进入无限循环或在任务完成后继续执行。"
  },
  {
    "id": 405,
    "start": 3784.86,
    "end": 3797.885,
    "en": "From an implementation perspective, an autonomous Agent is essentially an LLM using tools in a loop, continuously obtaining environmental feedback to make progress on the task—this is the ReAct loop introduced earlier.",
    "zh": "从实现角度来看，自主智能体本质上是一个在循环中使用工具的LLM，持续获取环境反馈以推进任务——这就是之前介绍的ReAct循环。"
  },
  {
    "id": 406,
    "start": 3797.885,
    "end": 3809.148,
    "en": "Common exit conditions include: calling a final output tool, the model returning a response without any tool calls, or encountering an error or reaching the maximum number of rounds.",
    "zh": "常见的退出条件包括：调用最终输出工具，模型返回没有工具调用的响应，或者遇到错误或达到最大轮次数。"
  },
  {
    "id": 407,
    "start": 3809.148,
    "end": 3814.835,
    "en": "As illustrated in Figure 1-6: Execution loop of an autonomous Agent.",
    "zh": "如图1-6所示：自主智能体的执行循环。"
  },
  {
    "id": 408,
    "start": 3814.835,
    "end": 3822.06,
    "en": "Autonomous Agents are well suited to open-ended problems—those where it is difficult to predict the number of steps required.",
    "zh": "自主智能体非常适合开放性问题——那些难以预测所需步骤数量的问题。"
  },
  {
    "id": 409,
    "start": 3822.06,
    "end": 3842.448,
    "en": "Typical use cases include: Coding Agents solving SWE-bench (Software Engineering Benchmark, a benchmark for evaluating an Agent's ability to automatically fix real GitHub issues) tasks, \"Computer Use\" Agents operating computer interfaces like a human, and research tasks requiring iterative search and analysis.",
    "zh": "典型应用场景包括：编码智能体解决SWE-bench（软件工程基准，用于评估智能体自动修复真实GitHub问题的能力）任务，'计算机使用'智能体像人类一样操作计算机界面，以及需要迭代搜索和分析的研究任务。"
  },
  {
    "id": 410,
    "start": 3842.448,
    "end": 3846.548,
    "en": "Autonomy also costs more and lets errors compound.",
    "zh": "自主性也意味着更高的成本，并可能导致错误累积。"
  },
  {
    "id": 411,
    "start": 3846.548,
    "end": 3857.21,
    "en": "Deploying an autonomous Agent therefore demands thorough testing in a sandbox, appropriate guardrails and monitoring, and human-in-the-loop checkpoints at critical decision points.",
    "zh": "因此，部署自主智能体需要在沙盒中进行充分测试，设置适当的约束和监控，并在关键决策点设置人工介入检查点。"
  },
  {
    "id": 412,
    "start": 3857.21,
    "end": 3860.098,
    "en": "Choosing and Mixing the Two Patterns.",
    "zh": "选择和混合这两种模式。"
  },
  {
    "id": 413,
    "start": 3860.098,
    "end": 3875.923,
    "en": "In practice, workflows and autonomous Agents are not mutually exclusive—many systems mix the two: critical processes with strict compliance requirements run as workflows for reliability, while the parts that need flexible decisions switch to autonomous mode.",
    "zh": "实际上，工作流和自主智能体并非互斥——许多系统会混合使用这两种方式：对严格合规要求的关键流程以工作流形式运行以确保可靠性，而需要灵活决策的部分则切换到自主模式。"
  },
  {
    "id": 414,
    "start": 3875.923,
    "end": 3890.835,
    "en": "n8n, for example, is a mature open-source workflow automation framework in which developers build Agents by arranging functional components on a visual canvas—and workflow nodes and autonomous Agent nodes can coexist in the same system.",
    "zh": "例如，n8n是一个成熟的开源工作流自动化框架，开发者通过在可视化画布上排列功能组件来构建智能体——工作流节点和自主智能体节点可以在同一系统中共存。"
  },
  {
    "id": 415,
    "start": 3890.835,
    "end": 3896.46,
    "en": "As illustrated in Figure 1-7: n8n workflow editor interface.",
    "zh": "如图1-7所示：n8n工作流编辑器界面。"
  },
  {
    "id": 416,
    "start": 3896.62,
    "end": 3903.807,
    "en": "Another way to mix them is to have the autonomous Agent write the workflow first, and then let the workflow do the executing.",
    "zh": "另一种混合方式是让自主智能体首先编写工作流，然后由工作流执行。"
  },
  {
    "id": 417,
    "start": 3903.757,
    "end": 3915.795,
    "en": "After reading the task, the Agent decides the topology itself and generates a piece of orchestration code; once that code exists, the execution phase falls back to the determinism of a workflow.",
    "zh": "在阅读任务后，智能体会自行决定拓扑结构并生成一段编排代码；一旦该代码存在，执行阶段就会回到工作流的确定性。"
  },
  {
    "id": 418,
    "start": 3915.795,
    "end": 3924.07,
    "en": "This keeps the autonomous Agent's flexibility in the face of unfamiliar tasks while sparing the model from making a decision at every dispatch.",
    "zh": "这在面对不熟悉任务时保持了自主智能体的灵活性，同时避免了模型在每次调度时都做出决策。"
  },
  {
    "id": 419,
    "start": 3924.07,
    "end": 3927.445,
    "en": "Chapter 10 discusses this form in detail.",
    "zh": "第10章将详细讨论这种形式。"
  },
  {
    "id": 420,
    "start": 3927.445,
    "end": 3931.182,
    "en": "Brief Comparison of Mainstream Agent Frameworks.",
    "zh": "主流智能体框架简要对比。"
  },
  {
    "id": 421,
    "start": 3931.182,
    "end": 3938.97,
    "en": "The following table summarizes widely used Agent frameworks and platforms to help readers identify the right one for their scenario:",
    "zh": "下表总结了广泛使用的智能体框架和平台，以帮助读者根据其场景选择合适的工具："
  },
  {
    "id": 422,
    "start": 3938.97,
    "end": 3957.395,
    "en": "Framework/Platform: Codex Harness; Core Positioning: Open-source Agent runtime behind Codex; Orchestration Pattern: Autonomous; Development Approach: Code-first, embeddable in your own app; Suitable Scenarios: Coding Agents, embedding an Agent into your own product.",
    "zh": "框架/平台：Codex Harness；核心定位：Codex背后的开源智能体运行时；编排模式：自主；开发方法：代码优先，可嵌入到您自己的应用中；适用场景：编码智能体，将智能体嵌入到您的产品中。"
  },
  {
    "id": 423,
    "start": 3957.395,
    "end": 3974.332,
    "en": "Framework/Platform: Claude Agent SDK; Core Positioning: Production-grade Agent development framework; Orchestration Pattern: Autonomous; Development Approach: Code-first; Suitable Scenarios: Complex autonomous tasks, Coding Agents.",
    "zh": "框架/平台：Claude Agent SDK；核心定位：生产级智能体开发框架；编排模式：自主；开发方法：代码优先；适用场景：复杂自主任务，编码智能体。"
  },
  {
    "id": 424,
    "start": 3974.332,
    "end": 3992.52,
    "en": "Framework/Platform: LangChain / LangGraph; Core Positioning: General LLM application framework; Orchestration Pattern: Workflow + autonomous; Development Approach: Code-first; Suitable Scenarios: Complex reasoning chains, multi-step workflows.",
    "zh": "框架/平台：LangChain / LangGraph；核心定位：通用大语言模型应用框架；编排模式：工作流 + 自主；开发方法：代码优先；适用场景：复杂推理链，多步骤工作流。"
  },
  {
    "id": 425,
    "start": 3992.52,
    "end": 4008.482,
    "en": "Framework/Platform: n8n; Core Positioning: Visual workflow automation; Orchestration Pattern: Workflow + autonomous; Development Approach: Low-code; Suitable Scenarios: Business automation, nontechnical teams.",
    "zh": "框架/平台：n8n；核心定位：可视化工作流自动化；编排模式：工作流 + 自主；开发方法：低代码；适用场景：业务自动化，非技术团队。"
  },
  {
    "id": 426,
    "start": 4008.482,
    "end": 4025.92,
    "en": "Framework/Platform: Dify; Core Positioning: LLM application development platform; Orchestration Pattern: Workflow + conversational; Development Approach: Low-code + API; Suitable Scenarios: Enterprise RAG, knowledge-base applications.",
    "zh": "框架/平台：Dify；核心定位：大语言模型应用开发平台；编排模式：工作流 + 对话；开发方法：低代码 + API；适用场景：企业RAG，知识库应用。"
  },
  {
    "id": 427,
    "start": 4025.92,
    "end": 4042.357,
    "en": "Framework/Platform: CrewAI; Core Positioning: Role-based multi-Agent orchestration; Orchestration Pattern: Multi-Agent collaboration; Development Approach: Code-first; Suitable Scenarios: Team-style task decomposition and execution.",
    "zh": "框架/平台：CrewAI；核心定位：基于角色的多智能体编排；编排模式：多智能体协作；开发方法：代码优先；适用场景：团队式任务分解与执行。"
  },
  {
    "id": 428,
    "start": 4042.357,
    "end": 4062.032,
    "en": "Framework/Platform: OpenClaw; Core Positioning: Open-source all-purpose personal Agent; Orchestration Pattern: Autonomous + event-driven; Development Approach: Configuration + code; Suitable Scenarios: Personal assistants, Deep Research, Computer Use, multiplatform messaging.",
    "zh": "框架/平台：OpenClaw；核心定位：开源全功能个人智能体；编排模式：自主 + 事件驱动；开发方法：配置 + 代码；适用场景：个人助手，深度研究，计算机使用，跨平台消息传递。"
  },
  {
    "id": 429,
    "start": 4062.032,
    "end": 4078.632,
    "en": "Framework/Platform: DeepSeek Harness; Core Positioning: Agent self-evolution framework; Orchestration Pattern: Everything is a plugin; Development Approach: Code-first, easy to customize; Suitable Scenarios: Agent developers, researchers.",
    "zh": "框架/平台：DeepSeek Harness；核心定位：智能体自我进化框架；编排模式：一切皆为插件；开发方法：代码优先，易于自定义；适用场景：智能体开发者，研究人员。"
  },
  {
    "id": 430,
    "start": 4078.632,
    "end": 4093.345,
    "en": "Framework/Platform: Pi; Core Positioning: Minimal Coding Agent framework; Orchestration Pattern: Autonomous; Development Approach: Code-first, easy to customize; Suitable Scenarios: Agent developers.",
    "zh": "框架/平台：Pi；核心定位：极简代码智能体框架；编排模式：自主；开发方法：代码优先，易于自定义；适用场景：智能体开发者。"
  },
  {
    "id": 431,
    "start": 4093.345,
    "end": 4097.095,
    "en": "The first two rows deserve a separate clarification.",
    "zh": "前两行需要特别说明。"
  },
  {
    "id": 432,
    "start": 4097.095,
    "end": 4107.532,
    "en": "Codex is OpenAI's Coding Agent product (App, CLI, IDE extension), and the Codex Harness is the runtime layer that drives all of these forms.",
    "zh": "Codex 是 OpenAI 的编码智能体产品（App、CLI、IDE 插件），而 Codex Harness 是驱动所有这些形式的运行时层。"
  },
  {
    "id": 433,
    "start": 4107.532,
    "end": 4131.32,
    "en": "The Codex Harness offers three integration paths: codex exec suits one-off tasks in scripts and CI; the Codex SDK suits third-party application code that starts, resumes, and streams tasks; and the app-server provides persistent sessions, event streams, and approval callbacks over the JSON-RPC protocol, which suits building an Agent directly into a product.",
    "zh": "Codex Harness 提供了三种集成路径：codex exec 适用于脚本和 CI 中的一次性任务；Codex SDK 适用于开始、恢复和流式传输任务的第三方应用程序代码；而 app-server 通过 JSON-RPC 协议提供持久会话、事件流和审批回调，适合直接将智能体构建到产品中。"
  },
  {
    "id": 434,
    "start": 4131.32,
    "end": 4142.77,
    "en": "Claude Agent SDK and Claude Code stand in a similar relationship, except that what Claude opens up is the SDK interface—the Harness implementation itself is not open source.",
    "zh": "Claude Agent SDK 和 Claude Code 之间存在类似的关系，只不过 Claude 开放的是 SDK 接口——Harness 实现本身并非开源。"
  },
  {
    "id": 435,
    "start": 4142.77,
    "end": 4145.645,
    "en": "Agent frameworks evolve rapidly.",
    "zh": "智能体框架发展迅速。"
  },
  {
    "id": 436,
    "start": 4145.645,
    "end": 4152.307,
    "en": "By the time you read this book, some of these frameworks may already be obsolete and new ones may be popular.",
    "zh": "在你阅读这本书的时候，其中一些框架可能已经过时，而新的框架可能变得流行。"
  },
  {
    "id": 437,
    "start": 4152.307,
    "end": 4157.282,
    "en": "Learning the API of one particular framework is therefore not important.",
    "zh": "因此，学习某个特定框架的API并不重要。"
  },
  {
    "id": 438,
    "start": 4157.282,
    "end": 4165.945,
    "en": "When choosing a framework, the key question is not its sophistication, but whether its abstraction is thin enough to let you focus on business logic.",
    "zh": "在选择框架时，关键问题不在于它的复杂程度，而在于其抽象是否足够简单，以便让你专注于业务逻辑。"
  },
  {
    "id": 439,
    "start": 4166.116,
    "end": 4175.403,
    "en": "Orchestration patterns solve the organization of context and tools within the Harness—how LLM calls, tools, and data flows connect.",
    "zh": "编排模式解决了Harness内部上下文和工具的组织问题——LLM调用、工具和数据流如何连接。"
  },
  {
    "id": 440,
    "start": 4175.353,
    "end": 4181.366,
    "en": "But task completion is not enough; tasks must also be completed correctly and safely.",
    "zh": "但任务完成是不够的；任务还必须正确且安全地完成。"
  },
  {
    "id": 441,
    "start": 4181.366,
    "end": 4188.053,
    "en": "We therefore turn to guardrails, which put constraints, verification, and correction into practice.",
    "zh": "因此我们转向护栏（guardrails），将约束、验证和纠正付诸实践。"
  },
  {
    "id": 442,
    "start": 4188.053,
    "end": 4190.341,
    "en": "Guardrails and Safety.",
    "zh": "护栏与安全。"
  },
  {
    "id": 443,
    "start": 4190.341,
    "end": 4200.266,
    "en": "Guardrails implement the Harness’s constraints, verification, and correction mechanisms, providing a layered defense that keeps Agent behavior safe and controllable.",
    "zh": "护栏实现了Harness的约束、验证和纠正机制，提供分层防御，确保智能体行为安全且可控。"
  },
  {
    "id": 444,
    "start": 4200.266,
    "end": 4212.378,
    "en": "Well-designed guardrails help manage data privacy risks (for example, preventing system prompt leakage) and reputational risks (for example, keeping model behavior consistent with the brand).",
    "zh": "设计良好的护栏有助于管理数据隐私风险（例如，防止系统提示泄露）和声誉风险（例如，保持模型行为与品牌一致）。"
  },
  {
    "id": 445,
    "start": 4212.378,
    "end": 4219.403,
    "en": "Start with guardrails for the risks you have already identified, then add new ones as new vulnerabilities surface.",
    "zh": "从你已经识别出的风险开始设置护栏，然后在新漏洞出现时添加新的护栏。"
  },
  {
    "id": 446,
    "start": 4219.403,
    "end": 4222.516,
    "en": "Think of guardrails as defense in depth.",
    "zh": "将护栏视为纵深防御。"
  },
  {
    "id": 447,
    "start": 4222.516,
    "end": 4231.003,
    "en": "No single guardrail is likely to be sufficient on its own, but several specialized ones combined make a far more resilient Agent system.",
    "zh": "单一的护栏很可能不足以单独应对所有情况，但多个专业化的护栏组合起来可以构建更强大的智能体系统。"
  },
  {
    "id": 448,
    "start": 4231.003,
    "end": 4235.366,
    "en": "Guardrails also have another failure mode: false refusal.",
    "zh": "护栏还有另一种故障模式：误拒。"
  },
  {
    "id": 449,
    "start": 4235.366,
    "end": 4246.428,
    "en": "To reduce the chance of allowing dangerous requests, a model may also reject legitimate but sensitive-looking work, such as authorized security testing or model distillation research.",
    "zh": "为了降低允许危险请求的可能性，模型可能会拒绝合法但看起来敏感的工作，例如授权的安全测试或模型蒸馏研究。"
  },
  {
    "id": 450,
    "start": 4246.428,
    "end": 4255.666,
    "en": "Guardrail evaluation should therefore test not only whether prohibited requests are blocked, but also whether clearly permitted requests can still be completed.",
    "zh": "因此，护栏评估应不仅测试是否阻止了禁止的请求，还要测试明确允许的请求是否仍能完成。"
  },
  {
    "id": 451,
    "start": 4255.666,
    "end": 4257.803,
    "en": "Types of Guardrails.",
    "zh": "防护措施的类型。"
  },
  {
    "id": 452,
    "start": 4257.803,
    "end": 4264.766,
    "en": "Guardrails can be placed at three layers: the context layer, the execution layer, and the data layer.",
    "zh": "防护措施可以放置在三个层级：上下文层、执行层和数据层。"
  },
  {
    "id": 453,
    "start": 4264.766,
    "end": 4278.216,
    "en": "These three are ordered not by where they sit in the request lifecycle, but by how hard they are to bypass—the lower the layer, the less it depends on the model's own judgment, and the harder it is for a single successful attack to get through.",
    "zh": "这三个层级并不是按照请求生命周期中的位置排序的，而是根据它们被绕过的难度——层级越低，对模型自身判断的依赖就越少，单次成功的攻击就越难通过。"
  },
  {
    "id": 454,
    "start": 4278.216,
    "end": 4283.578,
    "en": "The book uses this three-layer framework to organize its later security discussions.",
    "zh": "本书使用这个三层框架来组织后续的安全讨论。"
  },
  {
    "id": 455,
    "start": 4283.578,
    "end": 4290.578,
    "en": "Context-layer guardrails govern what the model gets to see, intercepting content before it enters the context.",
    "zh": "上下文层的防护措施控制模型能看到的内容，在内容进入上下文之前进行拦截。"
  },
  {
    "id": 456,
    "start": 4290.578,
    "end": 4293.778,
    "en": "They usually comprise four mechanisms.",
    "zh": "它们通常包括四种机制。"
  },
  {
    "id": 457,
    "start": 4293.778,
    "end": 4301.303,
    "en": "A relevance classifier flags off-topic queries—a coding assistant asked \"how tall is the Empire State Building?",
    "zh": "相关性分类器用于标记与主题无关的查询——例如一个代码助手被问到“帝国大厦有多高？”"
  },
  {
    "id": 458,
    "start": 4301.303,
    "end": 4322.328,
    "en": "A safety classifier detects jailbreaks (inducing the model to bypass its safety limits) and prompt injection (embedding malicious instructions in the input); the key difference is that a jailbreak is the user trying to get around the model's own limits, whereas prompt injection is an attacker manipulating the model indirectly through external data such as web pages or documents.",
    "zh": "安全分类器用于检测越狱（诱导模型绕过其安全限制）和提示注入（在输入中嵌入恶意指令）；关键区别在于越狱是用户试图绕过模型自身的限制，而提示注入是攻击者通过外部数据（如网页或文档）间接操控模型。"
  },
  {
    "id": 459,
    "start": 4322.328,
    "end": 4329.003,
    "en": "Content moderation flags harmful or inappropriate input such as violent or discriminatory content.",
    "zh": "内容审核用于标记有害或不适当的内容，例如暴力或歧视性内容。"
  },
  {
    "id": 460,
    "start": 4329.003,
    "end": 4339.528,
    "en": "Rule-based protection applies deterministic measures—blocklists, input length limits, regular-expression filters—against known threats such as SQL injection.",
    "zh": "基于规则的保护会针对已知威胁（如SQL注入）应用确定性措施——黑名单、输入长度限制、正则表达式过滤器。"
  },
  {
    "id": 461,
    "start": 4339.528,
    "end": 4347.441,
    "en": "Source labelling and the separation of \"instructions\" from \"data\" also belong to this layer; Chapter 2 develops them.",
    "zh": "来源标注和将“指令”与“数据”分离也属于这一层；第2章将对此进行详细阐述。"
  },
  {
    "id": 462,
    "start": 4347.441,
    "end": 4354.353,
    "en": "Anthropic's Constitutional Classifiers provide one example of classifier-based guardrails in practice.",
    "zh": "Anthropic的宪法分类器是基于分类器的防护措施的一个实际例子。"
  },
  {
    "id": 463,
    "start": 4354.353,
    "end": 4357.366,
    "en": "Their design has three key elements.",
    "zh": "它们的设计有三个关键要素。"
  },
  {
    "id": 464,
    "start": 4357.366,
    "end": 4367.703,
    "en": "First, rule-driven training: natural-language rules specifying what is allowed and prohibited are used to generate synthetic training data for the input and output classifiers.",
    "zh": "第一，基于规则的训练：用于指定允许和禁止内容的自然语言规则被用来为输入和输出分类器生成合成训练数据。"
  },
  {
    "id": 465,
    "start": 4367.703,
    "end": 4385.641,
    "en": "Second, joint contextual judgment: the new generation checks the user's question and the model's answer together, because some answers look perfectly fine on their own (e.g., \"how to use food flavorings\"), and only against the question does it become clear that \"food flavorings\" is code for chemical reagents.",
    "zh": "第二，联合上下文判断：新一代分类器会同时检查用户的问题和模型的回答，因为某些回答单独来看完全正常（例如“如何使用食品添加剂”），只有结合问题才能看出“食品添加剂”实际上是化学试剂的代号。"
  },
  {
    "id": 466,
    "start": 4385.641,
    "end": 4402.266,
    "en": "Third, two-stage screening: an extremely lightweight probe—which reads the model's internal activations at almost zero cost—checks every conversation first, and anything suspicious is escalated to a more powerful classifier for review rather than being refused outright.",
    "zh": "第三，两阶段筛选：一种极其轻量的探测器——几乎以零成本读取模型的内部激活状态——首先检查每段对话，任何可疑内容都会被升级到更强大的分类器进行审核，而不是直接拒绝。"
  },
  {
    "id": 467,
    "start": 4402.266,
    "end": 4410.828,
    "en": "This way the first stage can tolerate more false positives without hurting the user experience, and the overall cost is greatly reduced.",
    "zh": "这样第一阶段可以容忍更多的误报而不影响用户体验，整体成本也大幅降低。"
  },
  {
    "id": 468,
    "start": 4410.988,
    "end": 4419.563,
    "en": "But this layer has a structural ceiling: an Agent cannot reliably determine whether prompt injection has already compromised its own context.",
    "zh": "但这一层有结构上的限制：智能体无法可靠地判断提示注入是否已经破坏了其自身的上下文。"
  },
  {
    "id": 469,
    "start": 4419.513,
    "end": 4428.963,
    "en": "The context layer can therefore lower the success rate of an attack but cannot offer a guarantee—which is exactly why the two layers below it are necessary.",
    "zh": "因此，上下文层可以降低攻击的成功率，但无法提供保证——这正是它下方的两层必要的原因。"
  },
  {
    "id": 470,
    "start": 4428.963,
    "end": 4435.588,
    "en": "Execution-layer guardrails govern what the model gets to do, validating an action before it takes effect.",
    "zh": "执行层的护栏规定了模型可以执行的操作，在操作生效前进行验证。"
  },
  {
    "id": 471,
    "start": 4435.588,
    "end": 4449.7,
    "en": "At their core is tool risk rating: each tool is labelled low, medium, or high risk according to reversibility, privilege level, and financial impact, and high-risk operations require additional review or human confirmation.",
    "zh": "其核心是工具风险评级：每个工具根据可逆性、权限级别和财务影响被标记为低、中或高风险，高风险操作需要额外的审查或人工确认。"
  },
  {
    "id": 472,
    "start": 4449.7,
    "end": 4465.538,
    "en": "What matters is that this review must be performed by a mechanism outside the context—an independent review process, least-privilege credentials, sandbox isolation, a human in the loop—otherwise the same attack may compromise both the Agent and its safeguards.",
    "zh": "重要的是，这种审查必须由上下文之外的机制执行——独立的审查流程、最小权限凭证、沙箱隔离、人工介入——否则同样的攻击可能会同时破坏智能体及其防护措施。"
  },
  {
    "id": 473,
    "start": 4465.538,
    "end": 4487.613,
    "en": "The reply returned to the user is itself an action (Chapter 4 classifies it as a user-communication tool), so output checks belong to this layer too: a PII filter screens the output for personally identifiable information such as ID or phone numbers to prevent unnecessary exposure, and output validation checks content to keep replies aligned with brand values.",
    "zh": "返回给用户的回复本身也是一种操作（第4章将其归类为用户通信工具），因此输出检查也属于这一层：PII过滤器会筛查输出中的个人身份信息，如身份证号或电话号码，以防止不必要的暴露，输出验证则检查内容以确保回复符合品牌价值观。"
  },
  {
    "id": 474,
    "start": 4487.613,
    "end": 4492.763,
    "en": "Data-layer guardrails govern which changes the system is allowed to make to its data.",
    "zh": "数据层的护栏规定了系统可以对数据进行哪些更改。"
  },
  {
    "id": 475,
    "start": 4492.763,
    "end": 4510.013,
    "en": "They enforce who may perform which operations on which records through stable, human-reviewed mechanisms: row-level security policies in the database, constraints and validators, controlled views and stored procedures, and an access context bound by a trusted runtime that cannot be forged.",
    "zh": "它们通过稳定且经过人工审查的机制来强制执行谁可以在哪些记录上执行哪些操作：数据库中的行级安全策略、约束和验证器、受控视图和存储过程，以及由可信运行时绑定的访问上下文，无法被伪造。"
  },
  {
    "id": 476,
    "start": 4510.013,
    "end": 4524.175,
    "en": "The value of this layer is precisely that it does not depend on the two above it being correct—even if the prompt injection succeeds and the generated code omits its permission checks entirely, the unauthorized operation is still rejected at the data layer.",
    "zh": "这一层的价值恰恰在于它不依赖于其上的两层正确——即使提示注入成功，生成的代码完全省略了权限检查，未经授权的操作仍会在数据层被拒绝。"
  },
  {
    "id": 477,
    "start": 4524.175,
    "end": 4529.8,
    "en": "Chapter 5 develops this layer through the example of dynamically generated software.",
    "zh": "第5章通过动态生成软件的例子来开发这一层。"
  },
  {
    "id": 478,
    "start": 4529.8,
    "end": 4531.8,
    "en": "Human Intervention.",
    "zh": "人工干预。"
  },
  {
    "id": 479,
    "start": 4531.8,
    "end": 4540.325,
    "en": "Human-in-the-loop intervention is a key protective measure: it lets an Agent improve real-world performance without degrading the user experience.",
    "zh": "人工介入是一种关键的保护措施：它让智能体在不降低用户体验的情况下提升现实表现。"
  },
  {
    "id": 480,
    "start": 4540.325,
    "end": 4549.425,
    "en": "It matters most in early deployment, when it helps identify failure modes, surface edge cases, and establish a robust evaluation cycle.",
    "zh": "它在早期部署阶段尤为重要，因为它有助于识别故障模式、呈现边缘案例并建立稳健的评估周期。"
  },
  {
    "id": 481,
    "start": 4549.425,
    "end": 4555.963,
    "en": "With a human-in-the-loop mechanism, an Agent that cannot complete a task can hand over control gracefully.",
    "zh": "通过人机协作机制，无法完成任务的智能体可以优雅地移交控制权。"
  },
  {
    "id": 482,
    "start": 4555.963,
    "end": 4564.775,
    "en": "In customer service, this means escalating to a human representative; for a Coding Agent, it means handing control back to the developer.",
    "zh": "在客户服务中，这意味着转交给人工代表；对于编码智能体来说，这意味着将控制权交还给开发者。"
  },
  {
    "id": 483,
    "start": 4564.775,
    "end": 4569.35,
    "en": "There are typically two main situations that trigger human intervention:",
    "zh": "通常有两种主要情况会触发人工干预："
  },
  {
    "id": 484,
    "start": 4569.35,
    "end": 4572.125,
    "en": "Exceeding Failure Thresholds",
    "zh": "超过失败阈值"
  },
  {
    "id": 485,
    "start": 4572.125,
    "end": 4576.063,
    "en": "Set caps on the Agent's retries and operations.",
    "zh": "为智能体的重试次数和操作设置上限。"
  },
  {
    "id": 486,
    "start": 4576.063,
    "end": 4580.213,
    "en": "If the Agent exceeds those caps, escalate to a human.",
    "zh": "如果智能体超过这些上限，就应升级到人工处理。"
  },
  {
    "id": 487,
    "start": 4580.213,
    "end": 4582.513,
    "en": "High-Risk Operations",
    "zh": "高风险操作"
  },
  {
    "id": 488,
    "start": 4582.513,
    "end": 4592.225,
    "en": "Sensitive, irreversible, or high-risk operations should trigger human oversight—at least until the team has built enough confidence in the Agent's reliability.",
    "zh": "涉及敏感、不可逆或高风险的操作应触发人工监督——至少在团队对智能体的可靠性建立足够信心之前。"
  },
  {
    "id": 489,
    "start": 4592.225,
    "end": 4597.563,
    "en": "Typical examples include authorizing a large refund or processing a payment.",
    "zh": "典型的例子包括授权大额退款或处理支付。"
  },
  {
    "id": 490,
    "start": 4597.563,
    "end": 4603.738,
    "en": "Back to the main thread of the five Harness elements—let us see how they relate to the structure of this book.",
    "zh": "回到五要素Harness的主要主线——让我们看看它们如何与本书的结构相关联。"
  },
  {
    "id": 491,
    "start": 4603.738,
    "end": 4607.288,
    "en": "The Five Harness Elements and the \"Building\" Part.",
    "zh": "五要素Harness与“构建”部分"
  },
  {
    "id": 492,
    "start": 4607.288,
    "end": 4612.163,
    "en": "The two formulas describe the same architecture at different levels of detail.",
    "zh": "这两个公式描述了同一架构的不同详细程度。"
  },
  {
    "id": 493,
    "start": 4612.163,
    "end": 4626.375,
    "en": "Agent = LLM + Context + Tools provides the organizing framework for the book: Chapters 2–6 cover construction, Chapters 7–9 cover evaluation and improvement, and Chapter 10 covers collaboration.",
    "zh": "智能体 = 大语言模型 + 上下文 + 工具为本书提供了组织框架：第2至第6章涵盖构建，第7至第9章涵盖评估与改进，第10章涵盖协作。"
  },
  {
    "id": 494,
    "start": 4626.375,
    "end": 4638.7,
    "en": "Agent = Model + Harness expands context and tools into five responsibilities for a production system: context management, tool interfaces, constraints, verification, and correction.",
    "zh": "智能体 = 模型 + Harness将上下文和工具扩展为生产系统的五个职责：上下文管理、工具接口、约束、验证和修正。"
  },
  {
    "id": 495,
    "start": 4638.7,
    "end": 4646.588,
    "en": "It therefore explains the architecture covered in the construction chapters, rather than providing a separate outline for all ten chapters.",
    "zh": "因此，它解释了构建章节中涵盖的架构，而不是为全部十章提供单独的概述。"
  },
  {
    "id": 496,
    "start": 4646.588,
    "end": 4652.713,
    "en": "Within that scope, the five Harness elements map cleanly onto chapters 2 through 5:",
    "zh": "在这一范围内，五个Harness要素与第2到第5章一一对应："
  },
  {
    "id": 497,
    "start": 4652.884,
    "end": 4670.521,
    "en": "Harness Focus: Context Management; Corresponding Chapter: Chapter 2 (Context Engineering); Core Content: Prompt engineering, Agent status bar, context compression, Agent Skills; Security Concerns: Prompt injection and context contamination.",
    "zh": "Harness重点：上下文管理；对应章节：第2章（上下文工程）；核心内容：提示工程、智能体状态栏、上下文压缩、智能体技能；安全问题：提示注入和上下文污染。"
  },
  {
    "id": 498,
    "start": 4670.471,
    "end": 4689.609,
    "en": "Harness Focus: Context Management Across Sessions; Corresponding Chapter: Chapter 3 (User Memory and Knowledge Bases); Core Content: User memory, RAG, structured indexing, agentic RAG; Security Concerns: Sensitive information exposure, privacy protection.",
    "zh": "Harness重点：跨会话的上下文管理；对应章节：第3章（用户记忆与知识库）；核心内容：用户记忆、RAG、结构化索引、代理RAG；安全问题：敏感信息泄露、隐私保护。"
  },
  {
    "id": 499,
    "start": 4689.609,
    "end": 4709.846,
    "en": "Harness Focus: Tool Interfaces and Constraints; Corresponding Chapter: Chapter 4 (Tools); Core Content: Tool classification, permission control, MCP standard, proactive tool discovery; Security Concerns: Misoperation, unauthorized access, irreversible operations.",
    "zh": "Harness重点：工具接口与约束；对应章节：第4章（工具）；核心内容：工具分类、权限控制、MCP标准、主动工具发现；安全问题：误操作、未授权访问、不可逆操作。"
  },
  {
    "id": 500,
    "start": 4709.846,
    "end": 4728.684,
    "en": "Harness Focus: Verification and Correction; Corresponding Chapter: Chapter 5 (Coding Agents and General-Purpose Agents); Core Content: Coding Agent's Harness, test-driven development, codified rules; Security Concerns: Identity impersonation, responsibility attribution.",
    "zh": "Harness重点：验证与修正；对应章节：第5章（编码智能体与通用智能体）；核心内容：编码智能体的Harness、测试驱动开发、编码规则；安全问题：身份伪装、责任归属。"
  },
  {
    "id": 501,
    "start": 4728.684,
    "end": 4738.934,
    "en": "Chapter 6 (Interaction) does not belong to any of the five elements; what it expands is the modality and timing of the observation and action spaces themselves.",
    "zh": "第6章（交互）不属于五个要素中的任何一个；它扩展的是观察空间和动作空间本身的模态和时机。"
  },
  {
    "id": 502,
    "start": 4738.934,
    "end": 4744.996,
    "en": "Chapters 7 through 9 ask how we know the Harness was built right, and how to keep making it better.",
    "zh": "第7到第9章探讨的是如何确认Harness设计正确，以及如何持续改进它。"
  },
  {
    "id": 503,
    "start": 4744.996,
    "end": 4750.809,
    "en": "Chapter 10 replaces a single Agent's Harness with a collaboration structure among several.",
    "zh": "第10章用多个智能体之间的协作结构替代了单个智能体的Harness。"
  },
  {
    "id": 504,
    "start": 4750.809,
    "end": 4756.134,
    "en": "Forcing these chapters into the five categories would make the categories less useful.",
    "zh": "将这些章节强行归入五个类别会使这些类别变得不那么有用。"
  },
  {
    "id": 505,
    "start": 4756.134,
    "end": 4771.246,
    "en": "Security likewise is not partitioned by chapter: it is a cross-cutting concern (a problem that affects many parts of a system) running through the whole book, organized by the three guardrail layers of the previous section—context, execution, data.",
    "zh": "同样，安全问题也不是按章节划分的：它是贯穿全书的交叉性问题（影响系统多个部分的问题），按照前一节的三个防护层——上下文、执行、数据——进行组织。"
  },
  {
    "id": 506,
    "start": 4771.246,
    "end": 4777.921,
    "en": "The \"Security Concerns\" column above identifies the main security concerns addressed in each chapter.",
    "zh": "上述“安全问题”栏目标识了每章主要解决的安全问题。"
  },
  {
    "id": 507,
    "start": 4777.921,
    "end": 4785.346,
    "en": "Anthropic's practice in building long-running Agents shows how Harness design can solve problems the model itself cannot.",
    "zh": "Anthropic在构建长期运行的智能体方面的实践展示了Harness设计如何解决模型本身无法解决的问题。"
  },
  {
    "id": 508,
    "start": 4785.346,
    "end": 4806.746,
    "en": "They split complex tasks between an \"Initialization Agent\" (setting up the environment, decomposing the task list) and an \"Execution Agent\" (making incremental progress each session and leaving clear handover artifacts), using a structured Harness to tackle the two failure modes of long tasks: running out of context and declaring the task done prematurely.",
    "zh": "他们将复杂任务拆分给一个“初始化智能体”（设置环境、分解任务列表）和一个“执行智能体”（每次会话逐步推进并留下清晰的交接成果），利用结构化的Harness来应对长期任务的两种失败模式：上下文耗尽和过早声明任务完成。"
  },
  {
    "id": 509,
    "start": 4806.746,
    "end": 4819.359,
    "en": "The chapters ahead work through the Harness component by component—Chapter 2 begins with the most central one, context engineering, and Chapter 5 lays out the complete practice of Harness engineering in Coding Agents.",
    "zh": "接下来的章节将逐一探讨Harness的各个组件——第2章从最核心的上下文工程开始，第5章则全面阐述了编码智能体的Harness工程实践。"
  },
  {
    "id": 510,
    "start": 4819.359,
    "end": 4822.271,
    "en": "Design Patterns That Run Through the Book.",
    "zh": "贯穿全书的设计模式。"
  },
  {
    "id": 511,
    "start": 4822.271,
    "end": 4829.796,
    "en": "The chapters that follow repeatedly use the same group of design patterns, so they are named and defined canonically here once.",
    "zh": "后续章节反复使用同一组设计模式，因此在此处对其进行命名和定义。"
  },
  {
    "id": 512,
    "start": 4829.796,
    "end": 4834.796,
    "en": "Proposer-Reviewer: the creator and reviewer work in separate contexts.",
    "zh": "提议者-评审者：创建者和评审者在不同的上下文中工作。"
  },
  {
    "id": 513,
    "start": 4834.796,
    "end": 4844.184,
    "en": "The reviewer assesses the artifact itself—the rendered result, the test output, or the structured call arguments—rather than the creator's reasoning.",
    "zh": "评审者评估的是成果本身——生成的结果、测试输出或结构化调用参数，而不是创建者的推理过程。"
  },
  {
    "id": 514,
    "start": 4844.184,
    "end": 4854.484,
    "en": "The premise is that self-review is unreliable: a model may struggle to recognize its own blind spots or detect whether its context has been compromised by prompt injection.",
    "zh": "其前提在于自我评审不可靠：模型可能难以识别自身的盲点，或检测其上下文是否因提示注入而被破坏。"
  },
  {
    "id": 515,
    "start": 4854.484,
    "end": 4881.109,
    "en": "Chapter 3 uses it to update knowledge; Chapter 4 uses it for pre-approval and post-validation of tool calls (the Sidecar is a read-only variant); the PPT, video and log experiments of Chapter 5 are all built on it; Chapter 7 uses it to evaluate UIs; Chapter 9 uses it to review update proposals; and Chapter 10 discusses its shape in peer collaboration, and why an Agent must not review itself.",
    "zh": "第3章使用它来更新知识；第4章用于工具调用的预审批和后验证（Sidecar 是只读变体）；第5章的PPT、视频和日志实验都建立在它之上；第7章用它来评估用户界面；第9章用它来评审更新提案；第10章讨论它在同行协作中的形态，以及为什么智能体不能自我评审。"
  },
  {
    "id": 516,
    "start": 4881.109,
    "end": 4890.046,
    "en": "Progressive Disclosure: rather than putting everything into the context at once, offer a searchable catalogue first and load the details on demand.",
    "zh": "渐进披露：不要一次性将所有内容放入上下文中，而是先提供一个可搜索的目录，并按需加载详细信息。"
  },
  {
    "id": 517,
    "start": 4890.046,
    "end": 4896.134,
    "en": "It optimizes two things simultaneously—the context budget and selection accuracy.",
    "zh": "它同时优化两件事——上下文预算和选择准确性。"
  },
  {
    "id": 518,
    "start": 4896.134,
    "end": 4911.871,
    "en": "Agent Skills in Chapter 2 is the archetype (metadata resident, body loaded on demand); the layered retrieval of Chapter 3, the proactive tool discovery and paginated truncation of Chapter 4, and Agent discovery in Chapter 10 are all variants.",
    "zh": "第2章的智能体技能是原型（元数据驻留，正文按需加载）；第3章的分层检索、第4章的主动工具发现和分页截断，以及第10章的智能体发现都是其变体。"
  },
  {
    "id": 519,
    "start": 4912.036,
    "end": 4918.361,
    "en": "Append-only: state evolves by appending, and what has been written is never revised in place.",
    "zh": "追加式：状态通过追加进行演变，已写入的内容不会原地修改。"
  },
  {
    "id": 520,
    "start": 4918.311,
    "end": 4923.273,
    "en": "What this buys is cacheability, replayability and auditability.",
    "zh": "这样做的好处是具有可缓存性、可重放性和可审计性。"
  },
  {
    "id": 521,
    "start": 4923.273,
    "end": 4931.961,
    "en": "Chapter 2 shows the performance benefit of keeping the KV-cache prefix stable: changes earlier in the prefix invalidate more of the cache.",
    "zh": "第2章展示了保持KV缓存前缀稳定的性能优势：前缀中较早的变化会失效更多的缓存。"
  },
  {
    "id": 522,
    "start": 4931.961,
    "end": 4943.086,
    "en": "Chapter 3's event-based memory and Chapter 4's practice of appending newly discovered tool schemas to the trajectory, rather than inserting them into the prefix, follow the same principle.",
    "zh": "第3章基于事件的记忆和第4章将新发现的工具模式追加到轨迹中，而不是插入到前缀中的做法，都遵循同样的原则。"
  },
  {
    "id": 523,
    "start": 4943.086,
    "end": 4952.911,
    "en": "Boundary Set + Retention Set: every change must be validated both on \"the samples it is supposed to change\" and on \"the samples it must not affect\".",
    "zh": "边界集+保留集：每次更改都必须在\"它应该更改的样本\"和\"它不应影响的样本\"上进行验证。"
  },
  {
    "id": 524,
    "start": 4952.911,
    "end": 4960.736,
    "en": "Testing only the former mistakes overfitting for progress; testing only the latter mistakes an ineffective change for a safe one.",
    "zh": "仅测试前者会导致进步中的过拟合；仅测试后者会导致无效更改被误认为是安全的。"
  },
  {
    "id": 525,
    "start": 4960.736,
    "end": 4971.661,
    "en": "The regression tasks of Chapter 7, the training/evaluation isolation of Chapter 8, and the update-proposal validation of Chapter 9 all rest on this pair of sets.",
    "zh": "第7章的回归任务、第8章的训练/评估隔离以及第9章的更新提案验证都基于这一对集合。"
  },
  {
    "id": 526,
    "start": 4971.661,
    "end": 4981.398,
    "en": "Minimal Diff, Reversible: keep each change as small as possible, carrying its provenance, and independently revertible instead of rewritten wholesale.",
    "zh": "最小差异，可逆：每次更改尽可能小，保留其来源，并且可以独立回滚，而不是整体重写。"
  },
  {
    "id": 527,
    "start": 4981.398,
    "end": 4987.998,
    "en": "This is what makes attribution possible—when something breaks, it can be traced to one specific change.",
    "zh": "这就是可追溯性的基础——当出现问题时，可以追踪到具体的某次更改。"
  },
  {
    "id": 528,
    "start": 4987.998,
    "end": 5006.661,
    "en": "The knowledge updates of Chapter 3, the code patches of Chapter 5, and the prompt and program updates of Chapter 9 all follow it; and the three update paths given at the start of this chapter (in-context adaptation, external-artifact updates, parameter updates) are themselves ordered from most to least reversible.",
    "zh": "第三章的知识更新、第五章的代码补丁以及第九章的提示和程序更新都遵循这一原则；本章开头给出的三条更新路径（上下文内适应、外部资源更新、参数更新）本身也是从最可逆到最不可逆排序的。"
  },
  {
    "id": 529,
    "start": 5006.661,
    "end": 5008.548,
    "en": "Chapter Summary.",
    "zh": "章节总结。"
  },
  {
    "id": 530,
    "start": 5008.548,
    "end": 5014.511,
    "en": "This chapter has built a practice-first framework for understanding and constructing AI Agents.",
    "zh": "本章构建了一个以实践为导向的框架，用于理解和构建AI Agent。"
  },
  {
    "id": 531,
    "start": 5014.511,
    "end": 5029.098,
    "en": "Agent = Reasoning Engine + Working Context + Action Interfaces: The LLM provides reasoning and decision-making, context supplies the working set of information available at decision time, and tools provide the action interfaces.",
    "zh": "Agent = 推理引擎 + 工作上下文 + 动作接口：LLM提供推理和决策能力，上下文提供决策时可用的信息集，工具提供动作接口。"
  },
  {
    "id": 532,
    "start": 5029.098,
    "end": 5031.798,
    "en": "None of the three is dispensable.",
    "zh": "三者缺一不可。"
  },
  {
    "id": 533,
    "start": 5031.798,
    "end": 5048.611,
    "en": "Expanding Context and Tools Is the Primary Capability Lever: Once the model is fixed, redefining or enlarging the observation and action spaces—that is, expanding context and tools—can often turn an unsolvable task into a solvable one directly.",
    "zh": "扩展上下文和工具是主要的能力杠杆：一旦模型固定，重新定义或扩大观察空间和动作空间——即扩展上下文和工具——通常可以直接将无法解决的任务转化为可解决的任务。"
  },
  {
    "id": 534,
    "start": 5048.611,
    "end": 5060.986,
    "en": "The evolution of both Manus and OpenClaw shows that much of an Agent's versatility comes from expanding the interfaces available to it; that expansion must remain on-demand and be paired with permissions and verification.",
    "zh": "Manus和OpenClaw的演变表明，Agent的多功能性很大程度上来自于扩展其可用的接口；这种扩展必须按需进行，并应与权限和验证相结合。"
  },
  {
    "id": 535,
    "start": 5060.986,
    "end": 5071.448,
    "en": "Context Is the Decisive Factor: Context consists of a static prefix (system prompt + tool definitions) and a dynamic trajectory (message history).",
    "zh": "上下文是决定性因素：上下文由静态前缀（系统提示+工具定义）和动态轨迹（消息历史）组成。"
  },
  {
    "id": 536,
    "start": 5071.448,
    "end": 5086.486,
    "en": "Ablation shows the components are not equivalent: removing tool definitions or tool results takes away the ability to act or to close the loop outright, while the cost of removing the other two depends on whether that information can be reconstructed from the current observations.",
    "zh": "消融实验表明这些组件并不等价：移除工具定义或工具结果会直接剥夺其执行操作或闭合循环的能力，而移除其他两个组件的成本取决于这些信息是否能从当前观察中重建。"
  },
  {
    "id": 537,
    "start": 5086.486,
    "end": 5093.573,
    "en": "The essence of the ReAct loop is appending to the trajectory, over and over, so the model keeps advancing the task.",
    "zh": "ReAct循环的本质是反复向轨迹中追加内容，使模型不断推进任务。"
  },
  {
    "id": 538,
    "start": 5093.573,
    "end": 5108.361,
    "en": "Harness Is the Competitive Advantage: Model capability is commoditizing; the real differentiator is the Harness—the constraints, verification, and correction mechanisms built around context and tools that enable reliable task completion.",
    "zh": "Harness是竞争优势：模型能力正在商品化；真正的区别在于Harness——围绕上下文和工具构建的约束、验证和纠正机制，这些机制能够实现可靠的任务完成。"
  },
  {
    "id": 539,
    "start": 5108.361,
    "end": 5116.673,
    "en": "In production-grade Agent systems, the vast majority of Harness code goes into these safeguards, not the context and tools alone.",
    "zh": "在生产级的Agent系统中，绝大多数Harness代码都用于这些保障措施，而非仅针对上下文和工具。"
  },
  {
    "id": 540,
    "start": 5116.673,
    "end": 5127.461,
    "en": "From Workflow to Autonomous Agent: Prompts first, then workflows, autonomous Agents last—that ordering is the most practical way to reduce unexpected behavior.",
    "zh": "从工作流到自主Agent：首先使用提示，然后是工作流，最后是自主Agent——这种顺序是最实际的减少意外行为的方法。"
  },
  {
    "id": 541,
    "start": 5127.461,
    "end": 5133.748,
    "en": "Every orchestration pattern has situations where it fits; no single pattern is best everywhere.",
    "zh": "每种编排模式都有其适用的场景；没有一种模式在所有情况下都是最佳的。"
  },
  {
    "id": 542,
    "start": 5133.748,
    "end": 5144.598,
    "en": "Five design patterns run through the book: Proposer-Reviewer, Progressive Disclosure, Append-only, Boundary Set + Retention Set, and Minimal Diff + Reversible.",
    "zh": "本书贯穿了五种设计模式：提案-评审、逐步披露、仅追加、边界集+保留集，以及最小差异+可逆性。"
  },
  {
    "id": 543,
    "start": 5144.598,
    "end": 5152.486,
    "en": "Security Is an Architectural Issue: Security has to be considered from the first line of code, not patched on before launch.",
    "zh": "安全性是一个架构问题：安全性必须从第一行代码开始考虑，而不是在发布前才进行修补。"
  },
  {
    "id": 544,
    "start": 5152.486,
    "end": 5161.786,
    "en": "Guardrails are divided by difficulty of bypass into context, execution, and data layers; all later security discussions use this structure.",
    "zh": "防护措施按绕过难度分为上下文层、执行层和数据层；所有后续的安全讨论都使用此结构。"
  },
  {
    "id": 545,
    "start": 5161.948,
    "end": 5168.16,
    "en": "The next chapter examines the Harness's most central component in depth: context engineering.",
    "zh": "下一章将深入探讨Harness最核心的组件：上下文工程。"
  },
  {
    "id": 546,
    "start": 5168.11,
    "end": 5176.485,
    "en": "Chapter 8 covers the Agent concept's academic roots in reinforcement learning and compares traditional RL with modern LLM Agents.",
    "zh": "第8章探讨了智能体概念在强化学习中的学术根源，并将传统强化学习与现代大语言模型智能体进行了比较。"
  },
  {
    "id": 547,
    "start": 5176.485,
    "end": 5181.56,
    "en": "The thought questions below explore the chapter's core concepts in greater depth.",
    "zh": "以下思考题将更深入地探索本章的核心概念。"
  },
  {
    "id": 548,
    "start": 5181.56,
    "end": 5185.11,
    "en": "There is no single correct answer to each question.",
    "zh": "每个问题都没有唯一正确的答案。"
  },
  {
    "id": 549,
    "start": 5185.11,
    "end": 5187.048,
    "en": "Thought Questions.",
    "zh": "思考题。"
  },
  {
    "id": 550,
    "start": 5187.048,
    "end": 5198.373,
    "en": "intermediate difficulty, two stars:  If you could only add one capability to an Agent system—a stronger model, richer context, or more tools—which would you choose?",
    "zh": "中级难度，两颗星：如果你只能为一个智能体系统添加一项能力——更强的模型、更丰富的上下文或更多的工具——你会选择哪一个？"
  },
  {
    "id": 551,
    "start": 5198.373,
    "end": 5201.41,
    "en": "Under what conditions would your choice change?",
    "zh": "在什么条件下你的选择会改变？"
  },
  {
    "id": 552,
    "start": 5201.41,
    "end": 5210.36,
    "en": "advanced difficulty, three stars:  In a ReAct loop, cumulative cache reads grow approximately quadratically with the number of rounds.",
    "zh": "高级难度，三颗星：在ReAct循环中，随着轮次增加，累积的缓存读取量大约呈二次方增长。"
  },
  {
    "id": 553,
    "start": 5210.36,
    "end": 5212.898,
    "en": "How can this growth be reduced?",
    "zh": "如何减少这种增长？"
  },
  {
    "id": 554,
    "start": 5212.898,
    "end": 5221.998,
    "en": "intermediate difficulty, two stars:  The \"Model as Agent\" paradigm means models are becoming more autonomous in tool-calling decisions.",
    "zh": "中级难度，两颗星：\"模型即智能体\"范式意味着模型在工具调用决策方面变得更加自主。"
  },
  {
    "id": 555,
    "start": 5221.998,
    "end": 5227.873,
    "en": "However, this chapter argues that the importance of Harness engineering is actually increasing.",
    "zh": "然而，本章认为Harness工程的重要性实际上正在增加。"
  },
  {
    "id": 556,
    "start": 5227.873,
    "end": 5230.823,
    "en": "How can these two trends coexist?",
    "zh": "这两种趋势如何共存？"
  },
  {
    "id": 557,
    "start": 5230.823,
    "end": 5234.66,
    "en": "Where does the future core value of Agent frameworks lie?",
    "zh": "Agent框架的未来核心价值在哪里？"
  },
  {
    "id": 558,
    "start": 5234.66,
    "end": 5245.673,
    "en": "intermediate difficulty, two stars:  In the ablation experiment, the absence of \"tool result feedback\" makes the Agent retry until it exhausts its iteration budget.",
    "zh": "中等难度，两颗星：在消融实验中，缺少“工具结果反馈”会使智能体不断重试，直到耗尽迭代预算。"
  },
  {
    "id": 559,
    "start": 5245.673,
    "end": 5253.348,
    "en": "In a production environment, besides missing tool results, what other situations could push an Agent into this kind of loop?",
    "zh": "在生产环境中，除了缺少工具结果外，还有哪些情况可能导致智能体陷入这种循环？"
  },
  {
    "id": 560,
    "start": 5253.348,
    "end": 5257.21,
    "en": "What detection and termination mechanisms would you design?",
    "zh": "你会设计哪些检测和终止机制？"
  },
  {
    "id": 561,
    "start": 5257.21,
    "end": 5268.085,
    "en": "introductory difficulty, one star:  This chapter analyzed five Agent products along three dimensions: working context, action interfaces, and strategy.",
    "zh": "入门难度，一颗星：本章从三个维度分析了五个智能体产品：工作上下文、动作接口和策略。"
  },
  {
    "id": 562,
    "start": 5268.085,
    "end": 5276.298,
    "en": "Pick an AI product you use daily, analyze it along the same three dimensions, and judge whether its architecture is appropriate.",
    "zh": "选择一个你每天使用的AI产品，沿同样的三个维度进行分析，并判断其架构是否合适。"
  },
  {
    "id": 563,
    "start": 5276.298,
    "end": 5279.51,
    "en": "If you were designing it, what would you improve?",
    "zh": "如果你在设计它，你会做哪些改进？"
  },
  {
    "id": 564,
    "start": 5279.51,
    "end": 5290.085,
    "en": "intermediate difficulty, two stars:  If you were to design a customer service system specifically for booking flights, would you choose a workflow pattern or an autonomous Agent pattern?",
    "zh": "中等难度，两颗星：如果你要设计一个专门用于预订航班的客服系统，你会选择工作流模式还是自主智能体模式？"
  },
  {
    "id": 565,
    "start": 5290.085,
    "end": 5293.885,
    "en": "Is it possible to mix both patterns in the same system?",
    "zh": "能否在同一系统中同时使用这两种模式？"
  },
  {
    "id": 566,
    "start": 5293.885,
    "end": 5300.098,
    "en": "advanced difficulty, three stars:  The guardrails section mentioned tool risk ratings.",
    "zh": "高级难度，三颗星：防护措施部分提到了工具风险评级。"
  },
  {
    "id": 567,
    "start": 5300.098,
    "end": 5313.335,
    "en": "If a tool is generally low-risk but becomes high-risk with specific parameter combinations (e.g., delete_file deleting a normal file vs. deleting a system file), how would you design dynamic risk assessment?",
    "zh": "如果一个工具通常风险较低，但某些参数组合下会变成高风险（例如，delete_file删除普通文件与删除系统文件），你会如何设计动态风险评估？"
  },
  {
    "id": 568,
    "start": 5313.335,
    "end": 5321.76,
    "en": "intermediate difficulty, two stars:  In the Agent product table in this chapter, all Agents have an \"open-ended\" action space.",
    "zh": "中等难度，两颗星：在本章的智能体产品表中，所有智能体都有“开放式”动作空间。"
  },
  {
    "id": 569,
    "start": 5321.76,
    "end": 5330.935,
    "en": "In what scenarios would a constrained action space (e.g., only being able to choose from predefined options) be superior to an open-ended one?",
    "zh": "在哪些场景下，受限动作空间（例如只能从预定义选项中选择）会优于开放式动作空间？"
  },
  {
    "id": 570,
    "start": 5330.935,
    "end": 5339.548,
    "en": "intermediate difficulty, two stars:  The human-in-the-loop intervention mechanism requires the Agent to \"gracefully hand over control.",
    "zh": "中等难度，两颗星：人机协同干预机制要求智能体‘优雅地移交控制权’。"
  },
  {
    "id": 571,
    "start": 5339.548,
    "end": 5346.785,
    "en": "However, in practice, the user might be offline, respond slowly, or give vague instructions.",
    "zh": "然而，在实际情况下，用户可能处于离线状态、响应缓慢或给出模糊的指令。"
  },
  {
    "id": 572,
    "start": 5346.785,
    "end": 5349.748,
    "en": "What should the Agent do in such cases?",
    "zh": "在这种情况下，智能体应该怎么做？"
  },
  {
    "id": 573,
    "start": 5349.748,
    "end": 5364.56,
    "en": "advanced difficulty, three stars:  The introduction states that \"good design principles should transcend model iteration cycles,\" but the concrete engineering methods used to implement those principles may become obsolete as model capabilities improve.",
    "zh": "高级难度，三颗星：介绍中提到“优秀的设计原则应超越模型迭代周期”，但实现这些原则的具体工程方法可能会随着模型能力的提升而过时。"
  },
  {
    "id": 574,
    "start": 5364.56,
    "end": 5369.11,
    "en": "Give an example of such an Agent engineering method and explain why.",
    "zh": "举一个这样的智能体工程方法的例子并进行解释。"
  }
];
