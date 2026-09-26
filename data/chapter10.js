window.CHAPTER_DATA_chapter10 = [
  {
    "id": 1,
    "start": 0.1,
    "end": 3.5,
    "en": "Chapter 10: Multi-Agent Collaboration.",
    "zh": "第10章：多智能体协作。"
  },
  {
    "id": 2,
    "start": 3.45,
    "end": 17.5,
    "en": "The first nine chapters focused on a single Agent: first building its context, knowledge, tools, and interaction capabilities, then using evaluation, post-training, and continual evolution to improve it over time.",
    "zh": "前九章聚焦于一个智能体：首先构建其上下文、知识、工具和交互能力，然后通过评估、后训练和持续进化来不断提高它。"
  },
  {
    "id": 3,
    "start": 17.5,
    "end": 25.125,
    "en": "This chapter advances the question from “How do we build and improve one Agent?” to “How do we organize multiple Agents?",
    "zh": "本章将问题从“我们如何构建和提升一个智能体？”推进到“我们如何组织多个智能体？”"
  },
  {
    "id": 4,
    "start": 25.125,
    "end": 33.512,
    "en": "so that division of labor, communication, and mutual verification can tackle tasks that are difficult for one Agent to handle alone.",
    "zh": "以便分工协作、沟通和相互验证，解决单个智能体难以独立处理的任务。"
  },
  {
    "id": 5,
    "start": 33.512,
    "end": 48.687,
    "en": "OpenAI once proposed a five-level scale of AI capabilities: Level 1, Conversationalists; Level 2, Reasoners; Level 3, Agents; Level 4, Innovators; and Level 5, Organizations.",
    "zh": "OpenAI曾提出一个五级AI能力模型：一级为对话者；二级为推理者；三级为智能体；四级为创新者；五级为组织。"
  },
  {
    "id": 6,
    "start": 48.687,
    "end": 53.787,
    "en": "Multi-agent collaboration is often presented as one path to Level 5.",
    "zh": "然而，多智能体协作通常被视为通往第五级的路径之一。"
  },
  {
    "id": 7,
    "start": 53.787,
    "end": 63.6,
    "en": "Here, however, \"Organizations\" denotes a capability level—AI that can do the work of an entire organization—rather than an architectural requirement.",
    "zh": "但在这里，“组织”指的是一个能力级别——即AI能够完成整个组织的工作，而不是一种架构要求。"
  },
  {
    "id": 8,
    "start": 63.6,
    "end": 69.012,
    "en": "A sufficiently powerful single Agent could, in principle, reach it as well.",
    "zh": "理论上，一个足够强大的单个智能体也有可能达到这一级别。"
  },
  {
    "id": 9,
    "start": 69.012,
    "end": 77.037,
    "en": "In today's engineering reality, however, a single Agent remains constrained by its model's capabilities and context window.",
    "zh": "但在当今的工程现实中，单个智能体仍受限于其模型的能力和上下文窗口。"
  },
  {
    "id": 10,
    "start": 77.037,
    "end": 84.587,
    "en": "Getting multiple Agents to work together is about far more than letting specialists with different expertise \"cover each other's gaps.",
    "zh": "让多个智能体协同工作，远不止是让不同专业领域的专家“弥补彼此的不足”。"
  },
  {
    "id": 11,
    "start": 84.587,
    "end": 90.587,
    "en": "The more fundamental point is this: the intelligence of a group can exceed that of any individual.",
    "zh": "更根本的是：群体的智能可以超越任何个体的智能。"
  },
  {
    "id": 12,
    "start": 90.587,
    "end": 106.525,
    "en": "Human civilization is the proof—one person's intellect is limited, yet through division of labor, collaboration, debate, and the accumulation of knowledge across generations, human society as a whole exhibits intelligence far beyond any single genius.",
    "zh": "人类文明就是最好的证明——一个人的智力是有限的，但通过分工协作、辩论以及跨代的知识积累，整个人类社会展现出的智能远超任何一位天才。"
  },
  {
    "id": 13,
    "start": 106.525,
    "end": 119.062,
    "en": "Agent groups may give rise to the same kind of collective intelligence: even if each Agent is only as capable as a human expert, a well-organized group could surpass the combined capabilities of all human experts.",
    "zh": "智能体群体可能会产生类似的集体智能：即使每个智能体仅具备人类专家的能力，一个组织良好的群体也可能超越所有人类专家的总和。"
  },
  {
    "id": 14,
    "start": 119.062,
    "end": 142.437,
    "en": "In From AGI to ASI, Google DeepMind lists \"large-scale multi-agent collectives\" as a key pathway toward superintelligence (ASI)—just as human general intelligence aggregates into societies and organizations that transcend individuals, the collective intelligence of many AGI-level Agents working together may exhibit cognitive capabilities far beyond the simple sum of its members.",
    "zh": "在《从AGI到ASI》中，谷歌DeepMind将‘大规模多智能体集合’列为通向超智能（ASI）的关键路径之一——正如人类通用智能汇聚成超越个体的社会和组织，许多AGI级别的智能体协同工作所产生的集体智能，可能展现出远超其成员简单总和的认知能力。"
  },
  {
    "id": 15,
    "start": 142.437,
    "end": 156.687,
    "en": "Multi-agent collaboration, then, is not merely an engineering workaround for a single model's context window and capability limits—it may be a fundamental path from \"expert-level AI\" toward \"surpassing humanity as a whole.",
    "zh": "因此，多智能体协作不仅仅是应对单个模型上下文窗口和能力限制的一种工程权宜之计——它可能是从‘专家级AI’迈向‘超越整个人类’的根本路径。"
  },
  {
    "id": 16,
    "start": 156.687,
    "end": 160.9,
    "en": "A Classification Framework for Multi-Agent Collaboration.",
    "zh": "多智能体协作的分类框架"
  },
  {
    "id": 17,
    "start": 160.9,
    "end": 169.075,
    "en": "Building a multi-agent system starts with two core design dimensions, which together determine its basic architecture and implementation.",
    "zh": "构建多智能体系统首先需要两个核心设计维度，这两个维度共同决定了其基本架构和实现方式"
  },
  {
    "id": 18,
    "start": 169.075,
    "end": 173.225,
    "en": "Dimension 1: Shared vs. Non-Shared Context.",
    "zh": "维度1：共享上下文与非共享上下文"
  },
  {
    "id": 19,
    "start": 173.225,
    "end": 180.262,
    "en": "This is the most fundamental architectural decision, determining how information is passed between multiple Agents.",
    "zh": "这是最基础的架构决策，决定了多个智能体之间信息如何传递"
  },
  {
    "id": 20,
    "start": 180.262,
    "end": 189.75,
    "en": "Shared context means that a subsequent Agent receives the complete conversation history and trajectory (as defined in Chapter 1) of the preceding Agent.",
    "zh": "共享上下文意味着后续智能体会接收到前序智能体完整的对话历史和轨迹（如第1章所定义）"
  },
  {
    "id": 21,
    "start": 189.75,
    "end": 203.325,
    "en": "When the system prompt and tool set change at each stage, the system treats the new stage as a different Agent because its identity, responsibilities, and capabilities have changed, even though it retains all the memory of its predecessor.",
    "zh": "当系统提示和工具集在每个阶段发生变化时，系统会将新阶段视为一个不同的智能体，因为其身份、职责和能力发生了变化，尽管它保留了所有前序记忆"
  },
  {
    "id": 22,
    "start": 203.325,
    "end": 214.625,
    "en": "For example, after a requirements analyst writes a requirements document, the developer receives not only the document but also the full record of communication between the analyst and the user.",
    "zh": "例如，需求分析师撰写完需求文档后，开发者不仅会接收到文档，还会接收到分析师与用户之间的完整沟通记录"
  },
  {
    "id": 23,
    "start": 214.625,
    "end": 219.412,
    "en": "The developer assumes a new role while retaining all prior context.",
    "zh": "开发者在保留所有先前上下文的同时，承担了新的角色"
  },
  {
    "id": 24,
    "start": 219.412,
    "end": 225.937,
    "en": "The advantage is that no information is lost; each Agent can review details from any previous stage.",
    "zh": "优势在于不会丢失任何信息；每个智能体都可以回顾任何先前阶段的细节"
  },
  {
    "id": 25,
    "start": 225.937,
    "end": 229.725,
    "en": "The challenge is that the context can expand rapidly.",
    "zh": "挑战在于上下文可能会迅速膨胀"
  },
  {
    "id": 26,
    "start": 229.876,
    "end": 239.288,
    "en": "Non-shared context means that each Agent maintains an independent context and conversation history and cannot directly access the other Agents' work traces.",
    "zh": "非共享上下文意味着每个智能体维护独立的上下文和对话历史，无法直接访问其他智能体的工作痕迹"
  },
  {
    "id": 27,
    "start": 239.238,
    "end": 251.176,
    "en": "This is like collaboration between different departments: everyone works independently at their own desk, exchanging information through shared documents and meeting minutes rather than constantly watching each other's screens.",
    "zh": "这就像不同部门之间的协作：每个人在自己的办公桌独立工作，通过共享文档和会议纪要交换信息，而不是不断观察彼此的屏幕"
  },
  {
    "id": 28,
    "start": 251.176,
    "end": 259.651,
    "en": "This model offers better modularity and isolation; each Agent only needs to focus on information relevant to its own responsibilities.",
    "zh": "这种模式具有更好的模块化和隔离性；每个智能体只需关注与其职责相关的信息"
  },
  {
    "id": 29,
    "start": 259.651,
    "end": 270.988,
    "en": "The system is also easier to extend and maintain—adding a new Agent does not require modifying the internal logic of existing Agents, only defining interfaces and data formats.",
    "zh": "系统也更容易扩展和维护——添加新智能体不需要修改现有智能体的内部逻辑，只需定义接口和数据格式"
  },
  {
    "id": 30,
    "start": 270.988,
    "end": 277.763,
    "en": "Since Agents do not share context, information must be passed through explicit communication mechanisms.",
    "zh": "由于智能体不共享上下文，信息必须通过显式的通信机制传递"
  },
  {
    "id": 31,
    "start": 277.763,
    "end": 297.113,
    "en": "Classic distributed systems settled this question long ago: operating-systems textbooks tell us that inter-process communication (IPC) ultimately comes in just two paradigms—shared memory (one side writes and the other reads the same block of storage) and message passing (data is explicitly sent to the other side).",
    "zh": "经典的分布式系统很久以前就解决了这个问题：操作系统教科书告诉我们，进程间通信（IPC）最终只有两种范式——共享内存（一方写入，另一方读取同一块存储）和消息传递（数据被显式发送到另一方）。"
  },
  {
    "id": 32,
    "start": 297.113,
    "end": 302.451,
    "en": "Communication mechanisms between Agents fall within these same two paradigms.",
    "zh": "智能体之间的通信机制也属于这同样的两种范式。"
  },
  {
    "id": 33,
    "start": 302.451,
    "end": 304.926,
    "en": "There are three common methods:",
    "zh": "有三种常见方法："
  },
  {
    "id": 34,
    "start": 304.926,
    "end": 316.451,
    "en": "Tool call parameters: Wrap the downstream Agent as a tool, then pass structured data through its parameters; this is suitable for scenarios requiring well-typed, clearly structured data.",
    "zh": "工具调用参数：将下游智能体封装为一个工具，然后通过其参数传递结构化数据；这种方法适用于需要类型明确、结构清晰的数据的场景。"
  },
  {
    "id": 35,
    "start": 316.451,
    "end": 330.163,
    "en": "Shared file system: Agents exchange information by reading and writing intermediate artifacts (documents, code, etc.) in a shared directory, suitable for scenarios with large artifacts or where persistence is needed.",
    "zh": "共享文件系统：智能体通过在共享目录中读写中间产物（文档、代码等）来交换信息，适用于需要处理大体积产物或需要持久化的场景。"
  },
  {
    "id": 36,
    "start": 330.163,
    "end": 335.776,
    "en": "Message bus: A dedicated intermediary that passes messages between Agents.",
    "zh": "消息总线：一种专门的中介，用于在智能体之间传递消息。"
  },
  {
    "id": 37,
    "start": 335.776,
    "end": 342.451,
    "en": "Agents do not call each other directly but send messages to the bus, which forwards them to the target Agent.",
    "zh": "智能体不直接相互调用，而是向总线发送消息，总线再将其转发给目标智能体。"
  },
  {
    "id": 38,
    "start": 342.451,
    "end": 353.738,
    "en": "Mapped onto the two IPC paradigms, the shared file system corresponds to \"shared memory,\" while tool call parameters and the message bus are forms of \"message passing.",
    "zh": "映射到这两种IPC范式，共享文件系统对应于“共享内存”，而工具调用参数和消息总线则是“消息传递”的形式。"
  },
  {
    "id": 39,
    "start": 353.738,
    "end": 361.201,
    "en": "Tool parameters are delivered synchronously with a call; messages on a bus are delivered asynchronously through an intermediary.",
    "zh": "工具参数是通过调用同步传递的；总线上的消息则通过中介异步传递。"
  },
  {
    "id": 40,
    "start": 361.201,
    "end": 364.088,
    "en": "Each paradigm has its trade-offs.",
    "zh": "每种范式都有其权衡。"
  },
  {
    "id": 41,
    "start": 364.088,
    "end": 371.813,
    "en": "Go has a widely quoted maxim: \"Do not communicate by sharing memory; instead, share memory by communicating.",
    "zh": "Go语言有一个广为引用的格言：“不要通过共享内存来通信，而应通过通信来共享内存。”"
  },
  {
    "id": 42,
    "start": 371.813,
    "end": 377.926,
    "en": "As illustrated in Figure 10-1: Shared Context vs. Non-Shared Context.",
    "zh": "如图10-1所示：共享上下文与非共享上下文。"
  },
  {
    "id": 43,
    "start": 377.926,
    "end": 381.501,
    "en": "Dimension 2: Collaboration Topology.",
    "zh": "维度2：协作拓扑。"
  },
  {
    "id": 44,
    "start": 381.501,
    "end": 388.738,
    "en": "The second dimension is collaboration topology: the structure through which control and information flow among Agents.",
    "zh": "第二个维度是协作拓扑：智能体之间控制和信息流动的结构。"
  },
  {
    "id": 45,
    "start": 388.738,
    "end": 391.601,
    "en": "There are three typical topologies:",
    "zh": "有三种典型的拓扑结构："
  },
  {
    "id": 46,
    "start": 391.601,
    "end": 409.588,
    "en": "Peer Collaboration Pattern: A small number of Agents (typically 2-3) interact as equals, forming an iterative improvement loop—like writing a paper where one person drafts it and another annotates and revises it, with the quality after several rounds far exceeding what one person could achieve alone.",
    "zh": "同伴协作模式：少量智能体（通常为2-3个）平等地相互作用，形成迭代改进循环——就像写论文时，一个人先草拟，另一个人进行注释和修改，经过几轮后，其质量远超单个人所能达到的水平。"
  },
  {
    "id": 47,
    "start": 409.588,
    "end": 424.213,
    "en": "Manager Pattern (Orchestration Pattern): A centralized Manager Agent is responsible for task planning and scheduling, while multiple sub-agents each handle specific subtasks—like a project manager leading several specialized engineers on a project.",
    "zh": "管理者模式（编排模式）：一个中央管理者智能体负责任务规划和调度，而多个子智能体各自处理特定的子任务——就像项目经理带领几位专业工程师开展项目。"
  },
  {
    "id": 48,
    "start": 424.213,
    "end": 432.463,
    "en": "Decentralized Pattern: There is no runtime central controller; Agents communicate with each other like humans to collaborate on tasks.",
    "zh": "去中心化模式：运行时没有中央控制器；智能体之间像人类一样相互沟通，以协作完成任务。"
  },
  {
    "id": 49,
    "start": 432.463,
    "end": 435.463,
    "en": "Terminology: Graph Engineering.",
    "zh": "术语：图工程。"
  },
  {
    "id": 50,
    "start": 435.463,
    "end": 456.913,
    "en": "The term \"Graph Engineering,\" which became popular in July 2026, generally refers in today's Agent context to explicitly designing an execution graph: nodes are Agents, ordinary programs, or human decisions; edges define task dependencies, conditional routing, and failure paths; and structured state flows between nodes.",
    "zh": "‘图工程’这一术语在2026年7月变得流行，今天在智能体语境中，一般指显式设计执行图：节点是智能体、普通程序或人类决策；边定义任务依赖关系、条件路由和失败路径；节点之间的结构化状态流。"
  },
  {
    "id": 51,
    "start": 456.913,
    "end": 469.076,
    "en": "The \"collaboration topology\" discussed in this chapter is the multi-agent subset of that idea—peer collaboration, manager orchestration, and decentralized handoffs are different graph topologies.",
    "zh": "本章讨论的‘协作拓扑’是该理念的多智能体子集——同伴协作、管理者编排和去中心化交接是不同的图拓扑。"
  },
  {
    "id": 52,
    "start": 469.076,
    "end": 484.026,
    "en": "Because the name is still new and is easily confused with knowledge graphs, GraphRAG, and execution traces, this book continues to use the more stable terms \"collaboration topology\" and \"orchestration\" as its primary vocabulary.",
    "zh": "由于名称仍较新，且容易与知识图谱、GraphRAG和执行轨迹混淆，本书将继续使用更稳定的术语‘协作拓扑’和‘编排’作为主要词汇。"
  },
  {
    "id": 53,
    "start": 484.18,
    "end": 491.005,
    "en": "The detailed design and applicable scenarios for each pattern will be discussed in dedicated subsections later.",
    "zh": "每种模式的详细设计和适用场景将在后续的专门小节中讨论。"
  },
  {
    "id": 54,
    "start": 490.955,
    "end": 494.605,
    "en": "When Is Multi-Agent Truly Better Than a Single Agent?",
    "zh": "何时多智能体优于单个智能体？"
  },
  {
    "id": 55,
    "start": 494.605,
    "end": 504.255,
    "en": "Before diving into specific collaboration architectures, let's answer a more fundamental question: When are multiple Agents truly needed, and when is one enough?",
    "zh": "在深入具体协作架构之前，让我们先回答一个更根本的问题：什么时候需要多个智能体，什么时候一个就足够？"
  },
  {
    "id": 56,
    "start": 504.255,
    "end": 509.442,
    "en": "The answer will serve as a reference point for every engineering approach that follows.",
    "zh": "答案将作为后续每个工程方法的参考点。"
  },
  {
    "id": 57,
    "start": 509.442,
    "end": 521.33,
    "en": "A series of recent studies converges on a clear framework—and the core criterion is a single question: Does the collaboration provide information that a single Agent could not obtain while producing its answer?",
    "zh": "一系列近期研究得出一个明确的框架——核心标准是一个问题：协作是否提供了单个智能体无法获取的信息，同时生成其答案？"
  },
  {
    "id": 58,
    "start": 521.33,
    "end": 531.467,
    "en": "Table 10-1 shows which collaboration modes introduce new information and helps assess whether multi-agent collaboration offers substantive value over a single Agent.",
    "zh": "表10-1展示了哪些协作模式引入了新信息，并有助于评估多智能体协作是否比单个智能体具有实质性价值。"
  },
  {
    "id": 59,
    "start": 531.467,
    "end": 537.142,
    "en": "Table 10-1 Information Gain Comparison of Multi-Agent Collaboration Modes",
    "zh": "表10-1 多智能体协作模式的信息增益比较"
  },
  {
    "id": 60,
    "start": 537.142,
    "end": 548.08,
    "en": "Collaboration Mode: Self-review by the same model (re-reading its own output); Introduces New Information?: No; Effect: Usually ineffective or even harmful.",
    "zh": "协作模式：同一模型的自我审查（重新阅读其输出）；引入新信息？：否；效果：通常无效甚至有害。"
  },
  {
    "id": 61,
    "start": 548.08,
    "end": 558.305,
    "en": "Collaboration Mode: Different Agents debating the same text; Introduces New Information?: No; Effect: Comparable to a single Agent with equal compute.",
    "zh": "协作模式：不同智能体对同一段文本进行辩论；引入新信息？否；效果：相当于具有同等算力的单个智能体。"
  },
  {
    "id": 62,
    "start": 558.305,
    "end": 569.867,
    "en": "Collaboration Mode: Reviewer uses test execution results to review code; Introduces New Information?: Yes (execution feedback); Effect: Significant improvement.",
    "zh": "协作模式：评审者使用测试执行结果来审查代码；引入新信息？是（执行反馈）；效果：显著提升。"
  },
  {
    "id": 63,
    "start": 569.867,
    "end": 582.43,
    "en": "Collaboration Mode: Reviewer uses rendered screenshots to review frontend/PPT code; Introduces New Information?: Yes (visual feedback); Effect: Significant improvement.",
    "zh": "协作模式：评审者使用渲染的截图来审查前端/PPT代码；引入新信息？是（视觉反馈）；效果：显著提升。"
  },
  {
    "id": 64,
    "start": 582.43,
    "end": 593.405,
    "en": "Collaboration Mode: Reviewer uses external tools to verify facts; Introduces New Information?: Yes (tool feedback); Effect: Significant improvement.",
    "zh": "协作模式：评审者使用外部工具验证事实；引入新信息？是（工具反馈）；效果：显著提升。"
  },
  {
    "id": 65,
    "start": 593.405,
    "end": 608.905,
    "en": "The 2025 RLEF paper (Reinforcement Learning from Execution Feedback) found that training a model via reinforcement learning to use code-execution feedback for iterative improvement significantly outperformed independently sampling the model multiple times.",
    "zh": "2025年RLEF论文（从执行反馈中强化学习）发现，通过强化学习利用代码执行反馈进行迭代改进的模型显著优于多次独立采样的模型。"
  },
  {
    "id": 66,
    "start": 608.905,
    "end": 620.48,
    "en": "The key is that each iteration introduces real execution results (compilation errors, test failures, runtime exceptions)—information that did not exist when the model wrote the code.",
    "zh": "关键在于每次迭代都引入了真实的执行结果（编译错误、测试失败、运行时异常）——这些信息在模型编写代码时并不存在。"
  },
  {
    "id": 67,
    "start": 620.48,
    "end": 639.317,
    "en": "For webpage-generation tasks, the 2025 WebGen-Agent study reported that multi-level visual feedback, combining screenshots with vision-language-model descriptions, improved Claude 3.5 Sonnet's benchmark performance from 26.4% to 51.9%, nearly doubling it.",
    "zh": "对于网页生成任务，2025年WebGen-Agent研究报道，结合截图与视觉-语言模型描述的多级视觉反馈，将Claude 3.5 Sonnet的基准性能从26.4%提升至51.9%，几乎翻倍。"
  },
  {
    "id": 68,
    "start": 639.317,
    "end": 650.33,
    "en": "This framework helps resolve an apparent contradiction: some academic studies find that a single Agent is sufficient, while multi-agent systems often perform better in engineering practice.",
    "zh": "该框架有助于解决一个明显矛盾：一些学术研究发现单个智能体就足够，而多智能体系统在工程实践中通常表现更好。"
  },
  {
    "id": 69,
    "start": 650.33,
    "end": 663.567,
    "en": "The studies often test multiple Agents that inspect and discuss the same text, as in debate, whereas effective engineering systems commonly add external feedback from code execution, visual rendering, or tools.",
    "zh": "这些研究通常测试多个检查并讨论相同文本的智能体，如辩论一样，而有效的工程系统通常会添加来自代码执行、视觉渲染或工具的外部反馈。"
  },
  {
    "id": 70,
    "start": 663.567,
    "end": 666.817,
    "en": "Only the latter introduces new information.",
    "zh": "只有后者引入了新信息。"
  },
  {
    "id": 71,
    "start": 666.817,
    "end": 677.355,
    "en": "Nearly all effective uses of the three architectures discussed later—peer collaboration, orchestration, and decentralization—can be understood through this criterion.",
    "zh": "几乎所有后续讨论的三种架构的有效应用——同行协作、编排和去中心化——都可以通过这一标准来理解。"
  },
  {
    "id": 72,
    "start": 677.355,
    "end": 683.18,
    "en": "Anthropic's 2026 vulnerability-discovery experiment provides one example.",
    "zh": "Anthropic的2026年漏洞发现实验提供了一个例子。"
  },
  {
    "id": 73,
    "start": 683.18,
    "end": 692.242,
    "en": "Forty-five Agents coordinated their searches through a shared forum, reviewed one another's findings, and submitted results to a separate arbiter Agent.",
    "zh": "四十五个智能体通过共享论坛协调搜索，互相审查彼此的发现，并将结果提交给一个独立的仲裁智能体。"
  },
  {
    "id": 74,
    "start": 692.242,
    "end": 704.23,
    "en": "The coordinated swarm found 266 vulnerabilities using 27 million tokens, while independently parallel Agents found only 21 using 6.5 million tokens.",
    "zh": "协调的群体使用2700万个标记找到了266个漏洞，而独立并行的智能体仅找到21个，使用了650万个标记。"
  },
  {
    "id": 75,
    "start": 704.23,
    "end": 716.767,
    "en": "In an open search space, communication lets a multi-agent system shift its attention dynamically and develop specializations, trading a larger token budget for broader coverage and more varied discovery paths.",
    "zh": "在一个开放的搜索空间中，通信让多智能体系统能够动态地调整注意力并发展专业化，用更大的标记预算换取更广泛的覆盖范围和更多样化的发现路径。"
  },
  {
    "id": 76,
    "start": 716.932,
    "end": 719.932,
    "en": "Step Budget and Agent Performance.",
    "zh": "步骤预算与智能体性能。"
  },
  {
    "id": 77,
    "start": 719.882,
    "end": 728.244,
    "en": "A related question is how an Agent's step budget—the number of tool calls or iteration rounds it may use—affects performance.",
    "zh": "一个相关的问题是，智能体的步骤预算——它可使用的工具调用次数或迭代轮次——如何影响其性能。"
  },
  {
    "id": 78,
    "start": 728.244,
    "end": 740.394,
    "en": "More steps might seem certain to help: with 30 steps, an Agent may have time only to implement core functionality, whereas 300 steps allow it to plan, implement, test, and refine.",
    "zh": "更多的步骤似乎一定会有所帮助：在30步的情况下，智能体可能只能实现核心功能，而300步则允许它进行规划、实现、测试和优化。"
  },
  {
    "id": 79,
    "start": 740.394,
    "end": 752.619,
    "en": "However, the 2025 Google paper Budget-Aware Tool-Use Enables Effective Agent Scaling reached a counterintuitive conclusion: simply giving an Agent more steps does not guarantee better performance.",
    "zh": "然而，2025年谷歌的论文《预算感知的工具使用使智能体扩展更有效》得出了一个反直觉的结论：仅仅给智能体更多的步骤并不能保证更好的性能。"
  },
  {
    "id": 80,
    "start": 752.619,
    "end": 761.219,
    "en": "Standard Agents lack \"budget awareness\"; even with 300 steps, they tend to conduct shallow searches and quickly reach a plateau.",
    "zh": "标准智能体缺乏“预算意识”；即使有300步，它们也倾向于进行浅层搜索并迅速达到平台期。"
  },
  {
    "id": 81,
    "start": 761.219,
    "end": 771.482,
    "en": "To use additional steps effectively, Agents need a mechanism that adapts their strategy to the remaining resources, exploring broadly at first and narrowing their focus later.",
    "zh": "为了有效利用额外的步骤，智能体需要一种机制，根据剩余资源调整其策略，在最初广泛探索，随后缩小焦点。"
  },
  {
    "id": 82,
    "start": 771.482,
    "end": 785.244,
    "en": "The 2026 BAVT (Budget-Aware Value Tree Search) approach further introduced step-level value evaluation, adjusting the balance between exploration and exploitation according to the proportion of the budget remaining.",
    "zh": "2026年的BAVT（预算感知价值树搜索）方法进一步引入了步骤级别的价值评估，根据剩余预算比例调整探索与利用之间的平衡。"
  },
  {
    "id": 83,
    "start": 785.244,
    "end": 791.319,
    "en": "As the budget decreases, the Agent shifts from broad exploration to deeper investigation.",
    "zh": "随着预算减少，智能体会从广泛探索转向更深入的调查。"
  },
  {
    "id": 84,
    "start": 791.319,
    "end": 796.057,
    "en": "These findings have direct implications for multi-agent system design.",
    "zh": "这些发现对多智能体系统设计有直接的启示。"
  },
  {
    "id": 85,
    "start": 796.057,
    "end": 804.169,
    "en": "For example, in the orchestration pattern, the Manager Agent should not simply distribute tasks to sub-agents and wait for results.",
    "zh": "例如，在协调模式中，管理者智能体不应只是将任务分配给子智能体并等待结果。"
  },
  {
    "id": 86,
    "start": 804.169,
    "end": 814.707,
    "en": "Instead, it should dynamically allocate step budgets based on task complexity—simple subtasks get fewer steps; complex subtasks get ample steps.",
    "zh": "相反，它应根据任务复杂性动态分配步骤预算——简单的子任务获得较少步骤；复杂的子任务获得充足步骤。"
  },
  {
    "id": 87,
    "start": 814.707,
    "end": 824.532,
    "en": "It should also guide sub-agents to use these budgets wisely (plan first, then implement, then test, then improve), rather than diving straight in.",
    "zh": "它还应指导子智能体明智地使用这些预算（先规划，再实现，再测试，再改进），而不是直接开始执行。"
  },
  {
    "id": 88,
    "start": 824.532,
    "end": 829.407,
    "en": "One more consideration must come before any design decision: cost.",
    "zh": "在任何设计决策之前，必须考虑的另一个因素是成本。"
  },
  {
    "id": 89,
    "start": 829.407,
    "end": 844.719,
    "en": "Parallel exploration and iterative refinement cost money—Anthropic has disclosed that its multi-agent research system consumes about 15 times the tokens of a normal conversation, and that token usage alone explains about 80% of the performance difference.",
    "zh": "并行探索和迭代优化会耗费资金——Anthropic披露其多智能体研究系统消耗的标记数量大约是正常对话的15倍，而标记使用量本身解释了约80%的性能差异。"
  },
  {
    "id": 90,
    "start": 844.719,
    "end": 857.844,
    "en": "The gains from a multi-agent system must therefore be large enough to justify costs that may be several times, or even an order of magnitude, higher; otherwise, a well-tuned single Agent is usually the better bargain.",
    "zh": "因此，多智能体系统的收益必须足够大，以证明可能高几倍甚至一个数量级的成本是合理的；否则，经过良好调优的单一智能体通常是更划算的选择。"
  },
  {
    "id": 91,
    "start": 857.844,
    "end": 861.557,
    "en": "Multi-Agent Collaboration with Shared Context.",
    "zh": "共享上下文的多智能体协作。"
  },
  {
    "id": 92,
    "start": 861.557,
    "end": 878.294,
    "en": "In multi-agent collaboration with shared context, each stage is an independent Agent (with its own system prompt and tool set), but it inherits the complete trajectory of the preceding Agent—much like a colleague taking over a shift who can leaf through every work log the predecessor left behind.",
    "zh": "在具有共享上下文的多智能体协作中，每个阶段都是一个独立的智能体（拥有自己的系统提示和工具集），但它会继承前一个智能体的完整轨迹——就像一位同事接班时可以查阅前任留下的所有工作日志一样。"
  },
  {
    "id": 93,
    "start": 878.294,
    "end": 887.007,
    "en": "The core advantage of this inheritance-based collaboration is zero information loss: every Agent can review details from any previous stage.",
    "zh": "这种基于继承的协作的核心优势是零信息损失：每个智能体都可以回顾任何先前阶段的细节。"
  },
  {
    "id": 94,
    "start": 887.007,
    "end": 894.294,
    "en": "The challenge is keeping the current Agent focused on its own responsibilities rather than distracted by the mass of inherited history.",
    "zh": "挑战在于让当前智能体专注于自己的职责，而不是被继承的历史信息所分散注意力。"
  },
  {
    "id": 95,
    "start": 894.294,
    "end": 900.882,
    "en": "In complex tasks, an Agent's role and responsibilities may change significantly across stages.",
    "zh": "在复杂任务中，智能体的角色和职责可能在不同阶段发生显著变化。"
  },
  {
    "id": 96,
    "start": 900.882,
    "end": 908.807,
    "en": "If a single static system prompt is used throughout, it will either be too general or become an unwieldy collection of instructions.",
    "zh": "如果在整个过程中使用单一的静态系统提示，它要么过于宽泛，要么会变成一个难以管理的指令集合。"
  },
  {
    "id": 97,
    "start": 908.807,
    "end": 917.507,
    "en": "Multi-stage role switching changes the system prompt and tool set according to the current stage, allowing the Agent to work in the most appropriate role.",
    "zh": "多阶段角色切换会根据当前阶段改变系统提示和工具集，使智能体能够在最合适的角色中工作。"
  },
  {
    "id": 98,
    "start": 917.507,
    "end": 924.457,
    "en": "The key architectural choice is whether role guidance is carried by a replacement system prompt or by a loaded Skill.",
    "zh": "关键的架构选择是：角色引导是由替换系统提示还是由加载的技能（Skill）来承载。"
  },
  {
    "id": 99,
    "start": 924.457,
    "end": 930.482,
    "en": "The former can enforce a hard tool boundary, but changes the request prefix at every switch.",
    "zh": "前者可以强制执行硬性工具边界，但在每次切换时都会改变请求前缀。"
  },
  {
    "id": 100,
    "start": 930.482,
    "end": 946.419,
    "en": "The latter keeps the static prefix stable and appends SKILL.md to the trajectory, which is usually friendlier to KV/prompt caching; a Skill remains behavioral guidance, so sensitive or side-effectful tools still require a code-enforced Harness policy gate.",
    "zh": "后者保持静态前缀稳定，并将SKILL.md附加到轨迹中，通常对KV/提示缓存更友好；技能仅作为行为引导，因此敏感或有副作用的工具仍需要通过代码强制执行的Harness策略网关进行限制。"
  },
  {
    "id": 101,
    "start": 946.588,
    "end": 969.038,
    "en": "Choice: transfer_to_agent; Role guidance: Replace the system prompt and usually the tool set; Tool visibility: Only the current role's tools; Context/KV-cache effect: Each switch changes the request prefix and usually invalidates caching from that point; Constraint strength: Strong: out-of-scope tools can be absent from the schema.",
    "zh": "选择：transfer_to_agent；角色引导：替换系统提示并通常替换工具集；工具可见性：仅当前角色的工具；上下文/KV缓存效果：每次切换都会改变请求前缀，并通常会使该点后的缓存失效；约束强度：强：超出范围的工具可以从模式中省略。"
  },
  {
    "id": 102,
    "start": 968.988,
    "end": 992.875,
    "en": "Choice: Skill; Role guidance: Keep a Skill directory in the fixed prompt and append SKILL.md on demand; Tool visibility: Usually the full catalog, or a stable search entry point; Context/KV-cache effect: The static prefix stays stable; Skill text is appended to the trajectory; Constraint strength: Weak: a Skill is an instruction, not a permission boundary.",
    "zh": "选择：Skill；角色引导：在固定提示中保留技能目录并在需要时附加SKILL.md；工具可见性：通常为完整目录或稳定的搜索入口点；上下文/KV缓存效果：静态前缀保持稳定；技能文本附加到轨迹中；约束强度：弱：技能是一种指令，而非权限边界。"
  },
  {
    "id": 103,
    "start": 992.875,
    "end": 1013.625,
    "en": "When the role difference comes mainly from knowledge, procedure, and writing style, prefer a Skill; when it involves permissions, tool isolation, compliance boundaries, or a class of actions that must be forbidden at run time, use an independent Agent or the transfer_to_agent tool, and restrict the tool calls with code at the Harness layer.",
    "zh": "当角色差异主要来自知识、流程和写作风格时，优先使用技能；当涉及权限、工具隔离、合规边界或必须在运行时禁止的一类操作时，应使用独立智能体或transfer_to_agent工具，并在Harness层通过代码限制工具调用。"
  },
  {
    "id": 104,
    "start": 1013.625,
    "end": 1021.975,
    "en": "Experiment 10-1 intermediate difficulty, two stars: : Shared-context role switching—system prompt versus Skill",
    "zh": "实验10-1 中等难度，两颗星：共享上下文的角色切换——系统提示与技能"
  },
  {
    "id": 105,
    "start": 1021.975,
    "end": 1028.85,
    "en": "Both paths use the same model, task, tools, role guidance and complete shared trajectory.",
    "zh": "两种路径使用相同的模型、任务、工具、角色引导和完整的共享轨迹。"
  },
  {
    "id": 106,
    "start": 1028.85,
    "end": 1040.838,
    "en": "The task is to find China's 2021–2023 new-energy vehicle sales, calculate CAGR, and write a Chinese investor summary of no more than 120 characters.",
    "zh": "任务是查找中国2021-2023年新能源汽车销量，计算CAGR，并撰写不超过120个字的中文投资者摘要。"
  },
  {
    "id": 107,
    "start": 1040.838,
    "end": 1043.888,
    "en": "Path 1: system-prompt switching.",
    "zh": "路径1：系统提示切换。"
  },
  {
    "id": 108,
    "start": 1043.888,
    "end": 1054.675,
    "en": "Five roles—triage, research, coding, data_analysis and writing—each expose only their dedicated tools plus transfer_to_agent.",
    "zh": "五个角色—分诊、研究、编程、数据分析和写作—每个角色仅暴露其专用工具以及transfer_to_agent。"
  },
  {
    "id": 109,
    "start": 1054.675,
    "end": 1061.088,
    "en": "A handoff saves history, loads the target prompt and tool set, and resumes execution.",
    "zh": "交接会保存历史记录，加载目标提示和工具集，并继续执行。"
  },
  {
    "id": 110,
    "start": 1061.088,
    "end": 1063.425,
    "en": "Path 2: Skill.",
    "zh": "路径2：技能。"
  },
  {
    "id": 111,
    "start": 1063.425,
    "end": 1067.513,
    "en": "The system prompt and full tool catalog remain fixed.",
    "zh": "系统提示和完整工具目录保持不变。"
  },
  {
    "id": 112,
    "start": 1067.513,
    "end": 1075.188,
    "en": "The model calls load_skill(name) and receives the same role document as a tool result in the shared trajectory.",
    "zh": "模型调用load_skill(name)，并接收与共享轨迹中的工具结果相同的角色文档。"
  },
  {
    "id": 113,
    "start": 1075.188,
    "end": 1081.3,
    "en": "The static prefix remains unchanged, but hard permissions are enforced by Harness rules.",
    "zh": "静态前缀保持不变，但硬性权限由Harness规则强制执行。"
  },
  {
    "id": 114,
    "start": 1081.3,
    "end": 1086.6,
    "en": "The two paths should perform the same retrieval, calculation and length check.",
    "zh": "两种路径应执行相同的检索、计算和长度检查。"
  },
  {
    "id": 115,
    "start": 1086.6,
    "end": 1094.975,
    "en": "They differ in the carrier of role guidance and in the resulting tool boundary; a smoke trace alone cannot establish which path is superior.",
    "zh": "它们在角色指导的载体和产生的工具边界上有所不同；仅凭烟雾追踪无法确定哪条路径更优。"
  },
  {
    "id": 116,
    "start": 1094.975,
    "end": 1098.863,
    "en": "Multi-Agent Collaboration Without Shared Context.",
    "zh": "无共享上下文的多智能体协作。"
  },
  {
    "id": 117,
    "start": 1098.863,
    "end": 1107.35,
    "en": "In an architecture without shared context, each Agent operates as an independent entity with its own context, trajectory, and state.",
    "zh": "在一个没有共享上下文的架构中，每个智能体作为一个独立实体运行，拥有自己的上下文、轨迹和状态。"
  },
  {
    "id": 118,
    "start": 1107.35,
    "end": 1124.188,
    "en": "Agents cannot directly access one another's internal context; collaboration relies entirely on explicit, structured data transfers through the three communication mechanisms introduced at the beginning of this chapter: tool call parameters, a shared file system, and a message bus.",
    "zh": "智能体不能直接访问彼此的内部上下文；协作完全依赖于通过本章开头介绍的三种通信机制进行的显式、结构化数据传输：工具调用参数、共享文件系统和消息总线。"
  },
  {
    "id": 119,
    "start": 1124.188,
    "end": 1130.388,
    "en": "Earlier in this chapter, we compared communication between Agents to inter-process communication.",
    "zh": "在本章前面，我们将智能体之间的通信比作进程间通信。"
  },
  {
    "id": 120,
    "start": 1130.388,
    "end": 1135.488,
    "en": "We can extend this analogy to other parts of the system (Table 10-2",
    "zh": "我们可以将这一类比扩展到系统的其他部分（表10-2"
  },
  {
    "id": 121,
    "start": 1135.488,
    "end": 1141.2,
    "en": "Table 10-2 Correspondence Between Multi-Agent Systems and Operating Systems",
    "zh": "表10-2 多智能体系统与操作系统之间的对应关系"
  },
  {
    "id": 122,
    "start": 1141.2,
    "end": 1150.538,
    "en": "Operating System: Program (executable file); Multi-Agent System: Static prefix (system prompt + tool definitions).",
    "zh": "操作系统：程序（可执行文件）；多智能体系统：静态前缀（系统提示 + 工具定义）。"
  },
  {
    "id": 123,
    "start": 1150.538,
    "end": 1156.125,
    "en": "Operating System: Process memory; Multi-Agent System: Trajectory.",
    "zh": "操作系统：进程内存；多智能体系统：轨迹。"
  },
  {
    "id": 124,
    "start": 1156.125,
    "end": 1161.313,
    "en": "Operating System: CPU; Multi-Agent System: LLM.",
    "zh": "操作系统：CPU；多智能体系统：大语言模型（LLM）。"
  },
  {
    "id": 125,
    "start": 1161.313,
    "end": 1166.538,
    "en": "Operating System: Kernel; Multi-Agent System: Agent runtime.",
    "zh": "操作系统：内核；多智能体系统：智能体运行时。"
  },
  {
    "id": 126,
    "start": 1166.538,
    "end": 1172.05,
    "en": "Operating System: System call; Multi-Agent System: Tool call.",
    "zh": "操作系统：系统调用；多智能体系统：工具调用。"
  },
  {
    "id": 127,
    "start": 1172.05,
    "end": 1179.525,
    "en": "Operating System: fork (create child process); Multi-Agent System: spawn_subagent.",
    "zh": "操作系统：fork（创建子进程）；多智能体系统：spawn_subagent。"
  },
  {
    "id": 128,
    "start": 1179.525,
    "end": 1186.463,
    "en": "Operating System: kill (send signal); Multi-Agent System: cancel_subagent.",
    "zh": "操作系统：kill（发送信号）；多智能体系统：cancel_subagent。"
  },
  {
    "id": 129,
    "start": 1186.463,
    "end": 1193.5,
    "en": "Operating System: ps (list processes); Multi-Agent System: list_agents.",
    "zh": "操作系统：ps（列出进程）；多智能体系统：list_agents。"
  },
  {
    "id": 130,
    "start": 1193.5,
    "end": 1200.7,
    "en": "Operating System: Exit code and wait(); Multi-Agent System: Structured summary returned by the sub-agent.",
    "zh": "操作系统：退出代码和wait()；多智能体系统：子智能体返回的结构化摘要。"
  },
  {
    "id": 131,
    "start": 1200.7,
    "end": 1209.175,
    "en": "Operating System: Shared memory / message passing; Multi-Agent System: Shared file system / message passing.",
    "zh": "操作系统：共享内存/消息传递；多智能体系统：共享文件系统/消息传递。"
  },
  {
    "id": 132,
    "start": 1209.175,
    "end": 1219.863,
    "en": "This abstraction is nothing new: private state, asynchronous messages, and the ability to create new members are precisely the basic setup of the 1970s Actor model.",
    "zh": "这种抽象并不新奇：私有状态、异步消息以及创建新成员的能力，正是1970年代Actor模型的基本设定。"
  },
  {
    "id": 133,
    "start": 1219.863,
    "end": 1230.85,
    "en": "A multi-agent system can therefore be viewed as an LLM-based version of the Actor model, and much of the accumulated knowledge from operating systems and distributed systems applies directly.",
    "zh": "因此，多智能体系统可以看作是基于大语言模型（LLM）的Actor模型，操作系统和分布式系统的大量知识可以直接应用。"
  },
  {
    "id": 134,
    "start": 1231.012,
    "end": 1246.899,
    "en": "This process-style isolation brings several practical engineering benefits: each Agent can be developed and tested independently, new capabilities can be added without touching existing code, and multiple Agents can execute concurrently without contention over shared context.",
    "zh": "这种进程式的隔离带来了许多实际的工程优势：每个智能体可以独立开发和测试，新增功能无需修改现有代码，多个智能体可以并发执行而无需争夺共享上下文。"
  },
  {
    "id": 135,
    "start": 1246.849,
    "end": 1250.887,
    "en": "However, not sharing context also has costs.",
    "zh": "然而，不共享上下文也带来了成本。"
  },
  {
    "id": 136,
    "start": 1250.887,
    "end": 1258.562,
    "en": "The most obvious is the information synchronization problem: how do Agents maintain a consistent understanding of the task state?",
    "zh": "最明显的问题是信息同步问题：智能体如何保持对任务状态的一致理解？"
  },
  {
    "id": 137,
    "start": 1258.562,
    "end": 1262.374,
    "en": "Will information be lost or duplicated during transfer?",
    "zh": "信息在传递过程中会丢失或重复吗？"
  },
  {
    "id": 138,
    "start": 1262.374,
    "end": 1271.937,
    "en": "Debugging also becomes more difficult—when problems arise, logs from multiple Agents must be reviewed to piece together the complete execution process.",
    "zh": "调试也变得更加困难——当出现问题时，必须审查多个智能体的日志，才能拼凑出完整的执行过程。"
  },
  {
    "id": 139,
    "start": 1271.937,
    "end": 1279.937,
    "en": "These issues make the design of interface specifications, data formats, and communication protocols critically important.",
    "zh": "这些问题使得接口规范、数据格式和通信协议的设计变得至关重要。"
  },
  {
    "id": 140,
    "start": 1279.937,
    "end": 1286.487,
    "en": "Explicit collaboration without shared context relies on two topology-independent infrastructures.",
    "zh": "没有共享上下文的显式协作依赖于两种与拓扑无关的基础设施。"
  },
  {
    "id": 141,
    "start": 1286.487,
    "end": 1296.474,
    "en": "The first is the shared file system, the persistent medium through which Agents exchange artifacts with one another and with the user, forming the data plane of collaboration.",
    "zh": "第一种是共享文件系统，这是智能体之间以及与用户之间交换制品的持久化介质，构成了协作的数据平面。"
  },
  {
    "id": 142,
    "start": 1296.474,
    "end": 1309.274,
    "en": "The second is the communication and control mechanism, which supports message passing, status queries, execution termination, and resource scheduling between Agents, forming the control plane of collaboration.",
    "zh": "第二种是通信与控制机制，它支持智能体之间的消息传递、状态查询、执行终止和资源调度，构成了协作的控制平面。"
  },
  {
    "id": 143,
    "start": 1309.274,
    "end": 1313.849,
    "en": "The three topologies below are all built on these two foundations.",
    "zh": "下面的三种拓扑结构都是建立在这两个基础之上的。"
  },
  {
    "id": 144,
    "start": 1313.849,
    "end": 1317.162,
    "en": "The File System from an Agent's Perspective.",
    "zh": "从智能体视角看的文件系统。"
  },
  {
    "id": 145,
    "start": 1317.162,
    "end": 1326.337,
    "en": "At the beginning of this chapter, the \"shared file system\" was listed as one of the three communication mechanisms for architectures without shared context.",
    "zh": "在本章开始时，\"共享文件系统\"被列为无共享上下文架构的三种通信机制之一。"
  },
  {
    "id": 146,
    "start": 1326.337,
    "end": 1339.799,
    "en": "In a real system, the file system an Agent accesses is not a single storage system but a virtual file system in which storage systems with different sources, lifecycles, and permissions are mounted under one directory tree.",
    "zh": "在一个真实系统中，智能体访问的文件系统并不是单一的存储系统，而是一个虚拟文件系统，在其中不同来源、生命周期和权限的存储系统被挂载在一个目录树下。"
  },
  {
    "id": 147,
    "start": 1339.799,
    "end": 1356.899,
    "en": "The Agent accesses them through unified read_file/write_file/list_dir interfaces, while the underlying layers may be local temporary disks, persistent object storage, third-party cloud drive APIs, or read-only system resource packages.",
    "zh": "智能体通过统一的read_file/write_file/list_dir接口访问它们，而底层可能是本地临时磁盘、持久化对象存储、第三方云盘API或只读系统资源包。"
  },
  {
    "id": 148,
    "start": 1356.899,
    "end": 1372.649,
    "en": "Clearly defining the composition of this directory tree—the visibility and lifecycle of each area—is a prerequisite for designing multi-agent collaboration: a significant portion of concurrency conflicts and information leaks stem from mixing areas that should be isolated.",
    "zh": "明确界定这个目录树的组成——每个区域的可见性和生命周期——是设计多智能体协作的前提：大量并发冲突和信息泄露问题都源于混合了应隔离的区域。"
  },
  {
    "id": 149,
    "start": 1372.649,
    "end": 1384.962,
    "en": "This directory tree amounts to the Agent's address space, and the four types of areas are memory segments with different permissions: some private and writable, some shared among multiple parties, and some read-only.",
    "zh": "这个目录树相当于智能体的地址空间，这四种类型的区域是具有不同权限的内存段：有些是私有的且可写，有些是多方共享的，有些是只读的。"
  },
  {
    "id": 150,
    "start": 1384.962,
    "end": 1392.462,
    "en": "The operating system's protection philosophy applies here as well: isolate by default and declare sharing explicitly.",
    "zh": "操作系统的保护理念同样适用：默认隔离，显式声明共享。"
  },
  {
    "id": 151,
    "start": 1392.462,
    "end": 1398.962,
    "en": "A mature multi-agent system typically organizes its file system into four types of storage area:",
    "zh": "成熟的多智能体系统通常将其文件系统划分为四种存储区域："
  },
  {
    "id": 152,
    "start": 1398.962,
    "end": 1402.662,
    "en": "I. Agent-Specific Workspace (Scratchpad).",
    "zh": "一、智能体专用工作区（草稿区）。"
  },
  {
    "id": 153,
    "start": 1402.662,
    "end": 1411.899,
    "en": "A private directory exclusive to each Agent instance, storing intermediate artifacts, temporary files, drafts, and debug logs.",
    "zh": "每个智能体实例独有的私有目录，用于存储中间产物、临时文件、草稿和调试日志。"
  },
  {
    "id": 154,
    "start": 1411.899,
    "end": 1417.287,
    "en": "Its lifecycle is tied to the instance and is invisible to other Agents and users.",
    "zh": "它的生命周期与实例绑定，其他智能体和用户不可见。"
  },
  {
    "id": 155,
    "start": 1417.287,
    "end": 1434.387,
    "en": "Isolating the scratchpad serves two purposes: preventing temporary files from multiple Agents from overwriting each other, and keeping the main Agent's context lean—the trial-and-error process of sub-agents remains in their own workspace, with only the final artifact submitted to the shared space.",
    "zh": "隔离草稿区有两个目的：防止多个智能体的临时文件相互覆盖，同时保持主智能体的上下文简洁——子智能体的试错过程保留在其自身的工作区中，只有最终产物才会提交到共享空间。"
  },
  {
    "id": 156,
    "start": 1434.387,
    "end": 1442.124,
    "en": "This is the storage-level counterpart of Chapter 4's principle that sub-agents return structured summaries rather than full trajectories.",
    "zh": "这是第4章原则在存储层面的对应：子智能体返回结构化摘要而非完整轨迹。"
  },
  {
    "id": 157,
    "start": 1442.284,
    "end": 1445.596,
    "en": "II. Multi-Agent Shared Workspace.",
    "zh": "二、多智能体共享工作区。"
  },
  {
    "id": 158,
    "start": 1445.546,
    "end": 1451.496,
    "en": "A collaboration area that multiple Agents can read and write, and that is visible to the user.",
    "zh": "多个智能体可以读写，并对用户可见的协作区域。"
  },
  {
    "id": 159,
    "start": 1451.496,
    "end": 1466.884,
    "en": "It is the primary medium for exchanging artifacts between Agents in architectures without shared context: the Glossary Agent writes the term list, and the Translation Agent reads from it; users can also upload source files and download final deliverables here.",
    "zh": "它是没有共享上下文架构中智能体之间交换产物的主要媒介：术语表智能体将术语列表写入此处，翻译智能体则从中读取；用户也可以在此上传源文件并下载最终交付物。"
  },
  {
    "id": 160,
    "start": 1466.884,
    "end": 1471.684,
    "en": "Its lifecycle is tied to the entire task and requires persistence.",
    "zh": "它的生命周期与整个任务绑定，需要持久化。"
  },
  {
    "id": 161,
    "start": 1471.684,
    "end": 1486.234,
    "en": "As an area for concurrent reads and writes by multiple parties, it is a hotspot for concurrency conflicts—mechanisms such as optimistic locking and worktree isolation operate here, as detailed under \"Failure Mode One\" later in this chapter.",
    "zh": "作为一个被多方同时读写区域，它是并发冲突的热点——乐观锁和工作树隔离等机制在此运作，详见本章后续的“故障模式一”部分。"
  },
  {
    "id": 162,
    "start": 1486.234,
    "end": 1496.659,
    "en": "Chapter 4's use of a volume mount at /workspace/shared to connect the main Agent, virtual computer, and virtual phone is a typical implementation of this layer.",
    "zh": "第4章使用/mnt/shared路径的卷挂载连接主智能体、虚拟电脑和虚拟手机，是该层级的典型实现。"
  },
  {
    "id": 163,
    "start": 1496.659,
    "end": 1499.721,
    "en": "III. Mounted External Resources.",
    "zh": "三、挂载的外部资源。"
  },
  {
    "id": 164,
    "start": 1499.721,
    "end": 1514.696,
    "en": "Third-party information sources authorized by the user—Google Drive, Notion, Dropbox, enterprise wikis, etc.—are mapped to mount points in the file system (e.g., /mnt/gdrive) via adapters.",
    "zh": "用户授权的第三方信息源——如Google Drive、Notion、Dropbox、企业维基等——通过适配器映射到文件系统的挂载点（例如/mnt/gdrive）。"
  },
  {
    "id": 165,
    "start": 1514.696,
    "end": 1522.009,
    "en": "An Agent accesses a Notion document by reading a file; the underlying adapter calls the corresponding API.",
    "zh": "智能体通过读取文件访问Notion文档；底层适配器会调用相应的API。"
  },
  {
    "id": 166,
    "start": 1522.009,
    "end": 1549.984,
    "en": "Three characteristics distinguish this layer from local storage and must be explicitly handled during design: access is constrained by external permissions (the user's permissions in the source system determine the Agent's visibility), latency is higher and consistency is weaker (each read involves a network round trip, and external changes may not be immediately visible, so the data should be treated as eventually consistent), and access is primarily on-demand and read-only (writing back to",
    "zh": "这一层有三个特性区别于本地存储，必须在设计时显式处理：访问受外部权限限制（源系统中用户的权限决定了智能体的可见性），延迟更高且一致性较弱（每次读取都需要网络往返，外部更改可能不会立即可见，因此应将数据视为最终一致性），并且访问主要是按需且只读的（写回外部源必须谨慎进行，因为错误的写入可能会污染用户的实际数据）"
  },
  {
    "id": 167,
    "start": 1549.984,
    "end": 1556.584,
    "en": "external sources must be done cautiously, as erroneous writes could contaminate the user's real data).",
    "zh": "外部来源的处理必须谨慎，因为错误的写入可能会污染用户的实际数据。"
  },
  {
    "id": 168,
    "start": 1556.584,
    "end": 1565.959,
    "en": "The unified file interface means the Agent does not need a custom tool for each data source, but it also masks these performance and security differences.",
    "zh": "统一文件接口意味着智能体不需要为每个数据源定制工具，但它也隐藏了这些性能和安全差异。"
  },
  {
    "id": 169,
    "start": 1565.959,
    "end": 1574.134,
    "en": "Therefore, read-only/writable status, timeouts, and credential boundaries must be explicitly managed at the mount level.",
    "zh": "因此，在挂载级别必须显式管理只读/可写状态、超时时间和凭证边界。"
  },
  {
    "id": 170,
    "start": 1574.134,
    "end": 1577.321,
    "en": "IV. Built-in System Resources.",
    "zh": "四、内置系统资源。"
  },
  {
    "id": 171,
    "start": 1577.321,
    "end": 1582.884,
    "en": "A resource package pre-installed by the system and shared read-only with all Agents.",
    "zh": "由系统预装并所有智能体共享的只读资源包。"
  },
  {
    "id": 172,
    "start": 1582.884,
    "end": 1597.209,
    "en": "Typical examples are the Skills introduced in Chapters 2 and 4—knowledge documents and scripts organized as files, mounted at paths like /skills, accessed via progressive disclosure (index first, then expand on demand).",
    "zh": "典型例子是第2章和第4章介绍的技能——作为文件组织的知识文档和脚本，挂载在/skills等路径下，通过渐进式披露（先索引，然后按需展开）访问。"
  },
  {
    "id": 173,
    "start": 1597.209,
    "end": 1603.684,
    "en": "Other examples include reference manuals, template libraries, and shared tool definitions.",
    "zh": "其他例子包括参考手册、模板库和共享工具定义。"
  },
  {
    "id": 174,
    "start": 1603.684,
    "end": 1612.684,
    "en": "This layer is globally shared, read-only, stable across sessions, and can be read concurrently by all Agents without concurrency control.",
    "zh": "这一层是全局共享、只读、跨会话稳定，并且可以被所有智能体并发读取而无需并发控制。"
  },
  {
    "id": 175,
    "start": 1612.684,
    "end": 1632.459,
    "en": "Figure 10-2 illustrates how these four area types are uniformly mounted under a single directory tree: the Agent accesses the entire tree through a unified interface, users upload and download files from the shared space, external data sources are mounted via adapters, and built-in system resources are provided read-only.",
    "zh": "图10-2展示了这四种区域类型如何统一挂载在一个目录树下：智能体通过统一接口访问整个树，用户从共享空间上传和下载文件，外部数据源通过适配器挂载，而内置系统资源以只读方式提供。"
  },
  {
    "id": 176,
    "start": 1632.459,
    "end": 1639.796,
    "en": "As illustrated in Figure 10-2: Mounting structure of the four area types in the Agent Virtual File System.",
    "zh": "如图10-2所示：智能体虚拟文件系统中四种区域类型的挂载结构。"
  },
  {
    "id": 177,
    "start": 1639.796,
    "end": 1653.571,
    "en": "Table 10-3 compares these four area types across four dimensions—visibility, lifecycle, read/write permissions, and concurrency control—serving as a checklist for file system layout design.",
    "zh": "表10-3从四个维度——可见性、生命周期、读写权限和并发控制——对这四种区域类型进行了比较，作为文件系统布局设计的检查清单。"
  },
  {
    "id": 178,
    "start": 1653.571,
    "end": 1658.734,
    "en": "Table 10-3 Four area types of the Agent Virtual File System",
    "zh": "表10-3 智能体虚拟文件系统的四种区域类型"
  },
  {
    "id": 179,
    "start": 1658.734,
    "end": 1672.721,
    "en": "Area: Agent-Specific Workspace; Visibility: The owning Agent only; Lifecycle: Destroyed with the Agent instance; Read/Write: Read/Write; Concurrency Control: Not needed (private).",
    "zh": "区域：智能体专用工作区；可见性：仅拥有该区域的智能体；生命周期：随着智能体实例销毁；读写：读写；并发控制：不需要（私有）。"
  },
  {
    "id": 180,
    "start": 1672.721,
    "end": 1689.221,
    "en": "Area: Multi-Agent Shared Workspace; Visibility: All collaborating Agents and the user; Lifecycle: Persists for the task duration; Read/Write: Read/Write; Concurrency Control: Required (optimistic lock / worktree).",
    "zh": "区域：多智能体共享工作区；可见性：所有协作的智能体和用户；生命周期：持续到任务结束；读写：读写；并发控制：需要（乐观锁/工作树）。"
  },
  {
    "id": 181,
    "start": 1689.221,
    "end": 1705.884,
    "en": "Area: Mounted External Resources; Visibility: Depends on external authorization; Lifecycle: Determined by the external source; Read/Write: Mostly read-only, writes require caution; Concurrency Control: Managed by the external source.",
    "zh": "区域：挂载的外部资源；可见性：取决于外部授权；生命周期：由外部源决定；读/写：大部分为只读，写入需谨慎；并发控制：由外部源管理。"
  },
  {
    "id": 182,
    "start": 1706.044,
    "end": 1719.406,
    "en": "Area: Built-in System Resources; Visibility: All Agents; Lifecycle: Stable across sessions; Read/Write: Read-only; Concurrency Control: Not needed (read-only).",
    "zh": "区域：内置系统资源；可见性：所有智能体；生命周期：跨会话稳定；读/写：只读；并发控制：不需要（只读）。"
  },
  {
    "id": 183,
    "start": 1719.356,
    "end": 1726.131,
    "en": "The value of the \"file path as a universal interface\" lies in treating a path as the unit of exchange.",
    "zh": "“文件路径作为通用接口”的价值在于将路径视为交换单元。"
  },
  {
    "id": 184,
    "start": 1726.131,
    "end": 1740.506,
    "en": "Whether Agents exchange artifacts, a main Agent hands input to a sub-agent, or organizations collaborate through A2A, they pass a lightweight path string rather than loading the file's contents into the context window (Chapter 4).",
    "zh": "无论智能体交换工件、主智能体向子智能体提供输入，还是组织通过A2A协作，它们都传递一个轻量级路径字符串，而不是将文件内容加载到上下文窗口中（第4章）。"
  },
  {
    "id": 185,
    "start": 1740.506,
    "end": 1751.294,
    "en": "This aligns with Chapter 5's concept of \"the file system as the Agent's hub,\" which describes how a single Agent uses the file system to host memory and capabilities.",
    "zh": "这与第5章中“文件系统作为智能体的中心”的概念一致，描述了一个智能体如何使用文件系统来托管记忆和能力。"
  },
  {
    "id": 186,
    "start": 1751.294,
    "end": 1763.919,
    "en": "Here, the same abstraction extends to multiple Agents: a virtual directory tree mounting private, shared, external, and built-in storage provides the storage foundation for multi-agent collaboration.",
    "zh": "在这里，相同的抽象扩展到多个智能体：一个虚拟目录树挂载私有、共享、外部和内置存储，为多智能体协作提供了存储基础。"
  },
  {
    "id": 187,
    "start": 1763.919,
    "end": 1767.281,
    "en": "Communication and Control Between Agents.",
    "zh": "智能体之间的通信与控制。"
  },
  {
    "id": 188,
    "start": 1767.281,
    "end": 1775.119,
    "en": "While the file system solves the problem of artifact exchange between Agents, collaboration also requires a control plane.",
    "zh": "虽然文件系统解决了智能体之间工件交换的问题，但协作还需要一个控制平面。"
  },
  {
    "id": 189,
    "start": 1775.119,
    "end": 1798.794,
    "en": "This is exactly where the lifecycle rows of Table 10-2 come into play: the tool primitives given in Chapter 4—creating (spawn_subagent), sending messages (send_message_to_subagent), canceling (cancel_subagent), and discovering (list_agents)—correspond to fork, message, kill, and ps in the process world.",
    "zh": "这就是表10-2中的生命周期行发挥作用的地方：第4章中给出的工具原语——创建（spawn_subagent）、发送消息（send_message_to_subagent）、取消（cancel_subagent）和发现（list_agents）——对应于进程世界中的fork、message、kill和ps。"
  },
  {
    "id": 190,
    "start": 1798.794,
    "end": 1807.294,
    "en": "This section does not repeat the interface definitions but focuses on four often-overlooked capabilities essential for multi-agent collaboration.",
    "zh": "本节不重复接口定义，而是专注于四个常被忽视但对多智能体协作至关重要的能力。"
  },
  {
    "id": 191,
    "start": 1807.294,
    "end": 1809.531,
    "en": "I. Message Passing.",
    "zh": "一、消息传递。"
  },
  {
    "id": 192,
    "start": 1809.531,
    "end": 1817.719,
    "en": "The simplest form is point-to-point: Agent A directly calls send_message_to_agent_b(content).",
    "zh": "最简单形式是点对点：智能体A直接调用send_message_to_agent_b(内容)。"
  },
  {
    "id": 193,
    "start": 1817.719,
    "end": 1828.031,
    "en": "This is suitable for scenarios with a fixed topology and a small number of Agents (e.g., the phone + computer dual-agent setup of Experiment 10-3 in this chapter).",
    "zh": "这适用于拓扑结构固定且智能体数量较少的场景（例如本章实验10-3中的手机+电脑双智能体设置）。"
  },
  {
    "id": 194,
    "start": 1828.031,
    "end": 1840.719,
    "en": "When the number of Agents increases and asynchronous parallelism is required, the number of point-to-point connections grows quadratically with the number of Agents, and both sender and receiver must be online simultaneously.",
    "zh": "当智能体数量增加并需要异步并行时，点对点连接的数量会随着智能体数量的增加而呈二次方增长，且发送者和接收者必须同时在线。"
  },
  {
    "id": 195,
    "start": 1840.719,
    "end": 1855.194,
    "en": "In such cases, a message bus should be used (detailed later in this chapter under \"Parallel Coordination Pattern\"): Agents publish messages to the bus, which forwards them based on subscriptions, so the sender does not need to know the subscribers.",
    "zh": "在这些情况下，应使用消息总线（本章后面在“并行协调模式”下详细说明）：智能体将消息发布到总线上，总线根据订阅进行转发，因此发送者无需知道订阅者。"
  },
  {
    "id": 196,
    "start": 1855.194,
    "end": 1872.656,
    "en": "Whether point-to-point or via a bus, messages should typically carry a structured envelope: sender ID, target (specific Agent or broadcast), message type (e.g., task_assigned/status_update/result/terminate), and a JSON payload.",
    "zh": "无论是点对点还是通过总线，消息通常应包含一个结构化的信封：发送者ID、目标（特定智能体或广播）、消息类型（例如，task_assigned/status_update/result/terminate）和一个JSON有效载荷。"
  },
  {
    "id": 197,
    "start": 1872.656,
    "end": 1883.256,
    "en": "A unified envelope format ensures reliable routing and parsing by the receiver and makes the collaboration chain traceable—a key aspect of debugging multi-agent systems.",
    "zh": "统一的信封格式可确保接收方可靠地路由和解析，并使协作链可追溯——这是调试多智能体系统的关键方面。"
  },
  {
    "id": 198,
    "start": 1883.256,
    "end": 1885.756,
    "en": "II. Status Query.",
    "zh": "二、状态查询。"
  },
  {
    "id": 199,
    "start": 1885.756,
    "end": 1889.594,
    "en": "This is the most underestimated part of the control plane.",
    "zh": "这是控制平面中最被低估的部分。"
  },
  {
    "id": 200,
    "start": 1889.594,
    "end": 1901.281,
    "en": "Once a main Agent has dispatched a sub-agent, it needs visibility into the sub-agent's progress; otherwise, it can neither decide whether to keep waiting nor intervene when the sub-agent gets stuck.",
    "zh": "一旦主智能体分派了一个子智能体，它就需要了解子智能体的进展；否则，它既无法决定是否继续等待，也无法在子智能体卡住时进行干预。"
  },
  {
    "id": 201,
    "start": 1901.281,
    "end": 1914.631,
    "en": "An intuitive approach is to borrow from RPC and define a get_subagent_status(agent_id) query interface that returns \"running/completed/failed\" plus a progress percentage.",
    "zh": "一种直观的方法是借鉴RPC，定义一个get_subagent_status(agent_id)查询接口，该接口返回\"running/completed/failed\"以及进度百分比。"
  },
  {
    "id": 202,
    "start": 1914.631,
    "end": 1924.506,
    "en": "But such a pull interface turns out to be far less useful than expected: a sub-agent starts executing the moment it is created and runs until it completes or fails.",
    "zh": "但这种拉取式接口的实际用处远低于预期：子智能体在创建后立即开始执行，并一直运行直到完成或失败。"
  },
  {
    "id": 203,
    "start": 1924.506,
    "end": 1935.819,
    "en": "It does not cycle through a series of queued states the way jobs in a traditional batch system do, just as Unix programming rarely needs to poll another process by its PID for running status.",
    "zh": "它不会像传统批处理系统中的作业那样经历一系列队列状态，就像Unix编程很少需要通过PID轮询另一个进程的运行状态一样。"
  },
  {
    "id": 204,
    "start": 1935.819,
    "end": 1943.444,
    "en": "Polling also carries an inherent dilemma: poll too often and you waste tokens; poll too rarely and you react late.",
    "zh": "轮询也存在固有的两难：轮询太频繁会浪费令牌；轮询太稀疏则反应滞后。"
  },
  {
    "id": 205,
    "start": 1943.444,
    "end": 1950.856,
    "en": "A more natural way to obtain status is to return to the two communication paradigms introduced at the beginning of this chapter.",
    "zh": "获取状态的一种更自然的方式是回到本章开头介绍的两种通信范式。"
  },
  {
    "id": 206,
    "start": 1951.012,
    "end": 1953.837,
    "en": "Getting status via message passing.",
    "zh": "通过消息传递获取状态。"
  },
  {
    "id": 207,
    "start": 1953.787,
    "end": 1958.337,
    "en": "The main Agent simply sends the sub-agent a message: \"How's it going?",
    "zh": "主智能体只需向子智能体发送一条消息：\"进展如何？\""
  },
  {
    "id": 208,
    "start": 1958.337,
    "end": 1961.724,
    "en": "The sub-agent replies at an opportune moment.",
    "zh": "子智能体会在合适的时候回复。"
  },
  {
    "id": 209,
    "start": 1961.724,
    "end": 1978.124,
    "en": "Everything is asynchronous: sending the message does not block the main Agent's own execution, and when—or whether—the other side replies is a separate matter, just as a manager asks a subordinate for progress via instant messaging without requiring them to drop everything on the spot.",
    "zh": "一切都是异步的：发送消息不会阻塞主智能体自身的执行，而另一方何时——或者是否——回复则是另一回事，就像经理通过即时消息向下属询问进展，而不必要求对方立刻放下一切工作。"
  },
  {
    "id": 210,
    "start": 1978.124,
    "end": 1994.349,
    "en": "Conversely, the sub-agent can also proactively send a message to report when it reaches a milestone; if the system already has a message bus, this is simply publishing a status_update to the bus (the \"real-time monitoring\" of Experiment 10-4 is this form).",
    "zh": "相反，子智能体也可以主动发送消息，在达到里程碑时报告状态；如果系统已有一个消息总线，这只需向总线发布一个status_update（实验10-4中的“实时监控”就是这种形式）。"
  },
  {
    "id": 211,
    "start": 1994.349,
    "end": 2012.699,
    "en": "Whether status is requested explicitly or reported proactively, the status carried in the message should adopt a uniform state-machine vocabulary (executing, needs input, completed, failed)—the A2A protocol later in this chapter standardizes the task lifecycle into exactly such a set of states.",
    "zh": "无论状态是被明确请求还是主动报告，消息中携带的状态应采用统一的状态机词汇（执行中、需要输入、已完成、失败）——本章后面的A2A协议将任务生命周期标准化为这样的状态集合。"
  },
  {
    "id": 212,
    "start": 2012.699,
    "end": 2016.012,
    "en": "Getting status via the shared file system.",
    "zh": "通过共享文件系统获取状态。"
  },
  {
    "id": 213,
    "start": 2016.012,
    "end": 2030.987,
    "en": "The most thorough form is trajectory persistence: as it executes, the sub-agent serializes each trajectory event to JSON and appends it to a filesystem log file—usually one file per session, one event per line, i.e., JSONL.",
    "zh": "最全面的形式是轨迹持久化：在执行过程中，子智能体将每个轨迹事件序列化为JSON并追加到文件系统日志文件中——通常是每个会话一个文件，每行一个事件，即JSONL格式。"
  },
  {
    "id": 214,
    "start": 2030.987,
    "end": 2039.862,
    "en": "The trajectory, defined in Chapter 1, is the complete sequence of user messages, model replies, tool calls, and results.",
    "zh": "如第1章定义的，轨迹是用户消息、模型回复、工具调用和结果的完整序列。"
  },
  {
    "id": 215,
    "start": 2039.862,
    "end": 2055.199,
    "en": "The main Agent needs no status-reporting protocol; by reading this file directly, it can inspect the sub-agent's entire execution: which tool it is calling, what happened in its most recent step, and whether it is stuck in a loop of repeated failed retries.",
    "zh": "主智能体不需要状态报告协议；通过直接读取此文件，它可以检查子智能体的整个执行过程：它正在调用哪个工具，最近一步发生了什么，以及它是否陷入重复失败重试的循环。"
  },
  {
    "id": 216,
    "start": 2055.199,
    "end": 2060.562,
    "en": "In process terms, this resembles reading another process's memory directly.",
    "zh": "从进程的角度来看，这类似于直接读取另一个进程的内存。"
  },
  {
    "id": 217,
    "start": 2060.562,
    "end": 2068.837,
    "en": "It does not occupy the sub-agent's context, does not depend on its cooperation, and offers the finest observation granularity.",
    "zh": "它不占用子智能体的上下文，不依赖其合作，并提供最细粒度的观察精度。"
  },
  {
    "id": 218,
    "start": 2068.837,
    "end": 2074.649,
    "en": "But trajectory persistence should not be the main channel for passing information between Agents.",
    "zh": "但轨迹持久化不应成为智能体之间传递信息的主要渠道。"
  },
  {
    "id": 219,
    "start": 2074.649,
    "end": 2083.999,
    "en": "A trajectory easily runs to tens of thousands of tokens, and the main Agent still has to distill it after reading—costly in both time and tokens.",
    "zh": "轨迹很容易达到数万个token，主智能体在读取后仍需对其进行提炼——在时间和token方面成本都很高。"
  },
  {
    "id": 220,
    "start": 2083.999,
    "end": 2102.312,
    "en": "In most situations the more sensible choice is to agree on a progress file: when starting a sub-agent, the main Agent stipulates \"write your progress to progress.md,\" the sub-agent updates that task list as it completes each item, and the main Agent can read this lightweight file at any time to see how things stand.",
    "zh": "在大多数情况下，更合理的选择是约定一个进度文件：当启动子智能体时，主智能体规定“将你的进度写入progress.md”，子智能体在完成每个项目时更新该任务列表，主智能体可以随时读取这个轻量级文件以了解当前情况。"
  },
  {
    "id": 221,
    "start": 2102.312,
    "end": 2112.649,
    "en": "This is equivalent to two processes carving out a small, agreed-format status region in shared memory: what is exposed is distilled progress, not the whole of memory.",
    "zh": "这相当于两个进程在共享内存中划出一个小型、约定格式的状态区域：暴露的是提炼后的进度，而不是全部内存。"
  },
  {
    "id": 222,
    "start": 2112.649,
    "end": 2129.687,
    "en": "The progress file also enables stuck detection: if the last-modified time of progress.md (or the trajectory file) has not changed for more than N minutes, the sub-agent can be judged inactive and a timeout fallback triggered, so a blocked sub-agent does not drag the system down.",
    "zh": "进度文件还支持卡住检测：如果progress.md（或轨迹文件）的最后修改时间在超过N分钟后未发生变化，则可以判断子智能体处于非活动状态并触发超时备用方案，这样被阻塞的子智能体不会拖慢整个系统。"
  },
  {
    "id": 223,
    "start": 2129.836,
    "end": 2132.711,
    "en": "III. Execution Termination.",
    "zh": "三、执行终止。"
  },
  {
    "id": 224,
    "start": 2132.661,
    "end": 2148.973,
    "en": "In parallel collaboration, a common scenario is \"one succeeds, the rest become irrelevant\"—multiple Agents search separately, and once one finds the target, the others should stop immediately (the cascading termination in Experiment 10-4 of this chapter).",
    "zh": "在并行协作中，常见的情形是“一个成功，其余变得无关”——多个智能体分别搜索，一旦找到目标，其他智能体应立即停止（本章实验10-4中的级联终止）。"
  },
  {
    "id": 225,
    "start": 2148.973,
    "end": 2156.086,
    "en": "There are two levels of termination, and Unix users will recognize them as the distinction between SIGTERM and SIGKILL.",
    "zh": "终止分为两个级别，Unix用户会将其识别为SIGTERM和SIGKILL之间的区别。"
  },
  {
    "id": 226,
    "start": 2156.086,
    "end": 2172.936,
    "en": "Graceful termination is preferred: the main Agent sends a terminate signal, the sub-agent responds at a safe point in its current step, cleans up resources (closes browser sessions, writes pending files, releases locks), sends an acknowledgment (ack), and then exits.",
    "zh": "优雅终止是首选方式：主智能体发送终止信号，子智能体在其当前步骤的安全点响应，清理资源（关闭浏览器会话、保存未保存的文件、释放锁），发送确认（ack），然后退出。"
  },
  {
    "id": 227,
    "start": 2172.936,
    "end": 2185.361,
    "en": "Forced termination is a fallback: directly terminating the process, used only when the sub-agent does not respond to the graceful signal, at the cost of potentially leaving dangling resources and incomplete writes.",
    "zh": "强制终止是备用方案：直接终止进程，仅在子智能体不响应优雅信号时使用，但可能导致残留资源和未完成的写入。"
  },
  {
    "id": 228,
    "start": 2185.361,
    "end": 2188.298,
    "en": "Two engineering points need attention.",
    "zh": "有两个工程要点需要注意。"
  },
  {
    "id": 229,
    "start": 2188.298,
    "end": 2200.911,
    "en": "First, graceful termination requires the sub-agent to check periodically for the termination signal in its loop (similar to the interrupt mechanism in Chapter 6); otherwise, it cannot receive the signal.",
    "zh": "首先，优雅终止要求子智能体在其循环中定期检查终止信号（类似于第6章中的中断机制）；否则，它无法接收到信号。"
  },
  {
    "id": 230,
    "start": 2200.911,
    "end": 2208.786,
    "en": "Second, cascading termination has a race condition: multiple sub-agents might report success nearly simultaneously.",
    "zh": "其次，级联终止存在竞态条件：多个子智能体可能几乎同时报告成功。"
  },
  {
    "id": 231,
    "start": 2208.786,
    "end": 2217.748,
    "en": "The main Agent must use a lock or idempotent design to ensure that only one success is accepted and that the termination signal is broadcast once.",
    "zh": "主智能体必须使用锁或幂等设计，以确保只接受一次成功，并且只广播一次终止信号。"
  },
  {
    "id": 232,
    "start": 2217.748,
    "end": 2222.161,
    "en": "See the discussion of race conditions in Experiment 10-4.",
    "zh": "参见实验10-4中对竞态条件的讨论。"
  },
  {
    "id": 233,
    "start": 2222.161,
    "end": 2228.698,
    "en": "One loose end remains: after the main Agent terminates, what happens to sub-agents still running?",
    "zh": "还有一个未解决的问题：主智能体终止后，仍在运行的子智能体会发生什么？"
  },
  {
    "id": 234,
    "start": 2228.698,
    "end": 2242.711,
    "en": "The cleanest engineering approach borrows from Go's context—termination cascades down the creation relationship: cancel one Agent and all the sub-agents it spawned are canceled with it, preventing orphaned child Agents from being left behind.",
    "zh": "最干净的工程方法借鉴了Go语言的context——终止会沿着创建关系下放：取消一个智能体，它生成的所有子智能体也会被取消，防止留下孤儿子智能体。"
  },
  {
    "id": 235,
    "start": 2242.711,
    "end": 2251.361,
    "en": "The \"sub-agent checks for the termination signal at a safe point\" above corresponds precisely to polling ctx.Done() in Go.",
    "zh": "上面提到的‘子智能体在安全点检查终止信号’正好对应Go中的polling ctx.Done()。"
  },
  {
    "id": 236,
    "start": 2251.361,
    "end": 2266.223,
    "en": "Conversely, if you genuinely need a long-running background Agent detached from the main Agent (like Unix's nohup), let it start from a new lifecycle tree (corresponding to context.Background()), explicitly declaring that it does not terminate with its parent.",
    "zh": "相反，如果你确实需要一个与主智能体分离的长期运行的后台智能体（如Unix的nohup），让它从一个新的生命周期树开始（对应context.Background()），明确声明它不会随父智能体终止。"
  },
  {
    "id": 237,
    "start": 2266.223,
    "end": 2269.598,
    "en": "IV. Resource Management and Scheduling.",
    "zh": "四、资源管理与调度。"
  },
  {
    "id": 238,
    "start": 2269.598,
    "end": 2274.736,
    "en": "The other half of an operating system's job is allocating scarce resources.",
    "zh": "操作系统工作的另一半是分配稀缺资源。"
  },
  {
    "id": 239,
    "start": 2274.736,
    "end": 2286.486,
    "en": "In the process world the scarce resources are CPU time and memory; in the Agent world they are tokens, money, and concurrency budget—every step a sub-agent takes consumes all three.",
    "zh": "在进程世界中，稀缺资源是CPU时间和内存；在智能体世界中，它们是令牌、资金和并发预算——子智能体每一步都会消耗这三者。"
  },
  {
    "id": 240,
    "start": 2286.486,
    "end": 2310.311,
    "en": "This responsibility usually falls on the Manager or the runtime: set a step or token budget when starting a sub-agent, and stop once it is exceeded; give hard tasks to a strong model and mechanical tasks to a low-cost model; cap concurrency so that dozens of Agents don't exhaust the API quota at once; and when a more urgent task arrives, interrupt an executing sub-agent—this is preemption.",
    "zh": "这一责任通常由管理者或运行时负责：在启动子智能体时设置步骤或令牌预算，超出后停止；将复杂任务交给强大模型，机械任务交给低成本模型；限制并发数量，以免数十个智能体同时耗尽API配额；当有更紧急的任务到达时，中断正在执行的子智能体——这就是抢占。"
  },
  {
    "id": 241,
    "start": 2310.311,
    "end": 2317.048,
    "en": "Compared with a traditional operating system's scheduler, the manager Agent's notable advantage is that it can reason.",
    "zh": "与传统操作系统中的调度器相比，管理智能体的一个显著优势是它能够进行推理。"
  },
  {
    "id": 242,
    "start": 2317.048,
    "end": 2331.673,
    "en": "A manager Agent can therefore launch several sub-agents to explore one problem in parallel and, based on their progress, decide which to give more resources and which to terminate for appearing to have gone astray—rather like an internal race within a company.",
    "zh": "因此，管理智能体可以启动多个子智能体并行探索一个问题，并根据它们的进展决定给予哪些智能体更多资源，哪些智能体应该终止——就像公司内部的一种内部竞争。"
  },
  {
    "id": 243,
    "start": 2331.673,
    "end": 2338.373,
    "en": "Resource management and scheduling for multi-agent systems are still less mature than operating-system scheduling.",
    "zh": "多智能体系统的资源管理和调度仍不如操作系统调度成熟。"
  },
  {
    "id": 244,
    "start": 2338.373,
    "end": 2345.198,
    "en": "Because they determine the system's maximum resource costs, they should be considered when designing the architecture.",
    "zh": "因为它们决定了系统的最大资源成本，在设计架构时应予以考虑。"
  },
  {
    "id": 245,
    "start": 2345.198,
    "end": 2358.798,
    "en": "Artifact exchange (the data plane) together with message passing, status query, execution termination, and resource scheduling (the control plane) support a multi-Agent system without shared context.",
    "zh": "数据平面（即成果交换）以及消息传递、状态查询、执行终止和资源调度（即控制平面）支持没有共享上下文的多智能体系统。"
  },
  {
    "id": 246,
    "start": 2358.798,
    "end": 2375.711,
    "en": "Based on the collaborative relationships among Agents and the characteristics of the control flow, collaboration without shared context divides into three main architectures—the peer collaboration pattern, the manager pattern, and the decentralized pattern—each suited to a different kind of task.",
    "zh": "基于智能体之间的协作关系和控制流的特点，无共享上下文的协作分为三种主要架构——对等协作模式、管理器模式和去中心化模式——每种适用于不同类型的任务。"
  },
  {
    "id": 247,
    "start": 2375.711,
    "end": 2380.461,
    "en": "Peer Collaboration Pattern: Mutual Checks and Iterative Improvement.",
    "zh": "对等协作模式：相互检查与迭代改进。"
  },
  {
    "id": 248,
    "start": 2380.612,
    "end": 2388.137,
    "en": "Peer collaboration typically involves two or three Agents of equal standing giving one another feedback over multiple rounds.",
    "zh": "对等协作通常涉及两个或三个地位相同的智能体进行多轮反馈。"
  },
  {
    "id": 249,
    "start": 2388.087,
    "end": 2398.174,
    "en": "Its potential value lies in independent perspectives and cognitive diversity, but “multiple instances” do not necessarily produce “multiple ways of thinking.",
    "zh": "其潜在价值在于独立的视角和认知多样性，但‘多个实例’并不一定产生‘多种思维方式’。"
  },
  {
    "id": 250,
    "start": 2398.174,
    "end": 2407.849,
    "en": "When the model, context, and scaffolding are highly similar, different Agents often make the same choices, turning local errors into systemic failures.",
    "zh": "当模型、上下文和支撑结构高度相似时，不同的智能体往往会做出相同的选择，将局部错误转化为系统性故障。"
  },
  {
    "id": 251,
    "start": 2407.849,
    "end": 2420.224,
    "en": "Genuine diversity must be designed by varying models, contexts, tools, visible evidence, or responsibilities, and by having Agents judge independently before their results are aggregated.",
    "zh": "真正的多样性必须通过改变模型、上下文、工具、可见证据或责任来设计，并让智能体在结果聚合前独立进行判断。"
  },
  {
    "id": 252,
    "start": 2420.224,
    "end": 2433.562,
    "en": "Compared to the manager and decentralized patterns, peer collaboration is far simpler to implement—define the two Agents' roles, the communication mechanism, and the iteration termination condition, and you have a running system.",
    "zh": "与管理器模式和去中心化模式相比，对等协作实现起来要简单得多——只要定义好两个智能体的角色、通信机制和迭代终止条件，就可以运行一个系统。"
  },
  {
    "id": 253,
    "start": 2433.562,
    "end": 2438.649,
    "en": "It is an ideal choice for quickly validating ideas and building prototypes.",
    "zh": "它是快速验证想法和构建原型的理想选择。"
  },
  {
    "id": 254,
    "start": 2438.649,
    "end": 2440.549,
    "en": "Loop Engineering.",
    "zh": "循环工程。"
  },
  {
    "id": 255,
    "start": 2440.549,
    "end": 2450.224,
    "en": "One of the most common uses of peer collaboration is to counter a frequent failure in Agent practice: premature termination—stopping with the job half done.",
    "zh": "对等协作最常见的用途之一是应对智能体实践中一种常见的失败——过早终止——即工作未完成就停止。"
  },
  {
    "id": 256,
    "start": 2450.224,
    "end": 2462.849,
    "en": "It takes three typical forms; the examples below come from Coding Agents and from Pine AI, the Agent introduced in the Introduction that makes phone calls on users' behalf to deal with merchants and service providers.",
    "zh": "它有三种典型形式；以下例子来自编程智能体和Pine AI，后者是引言中介绍的智能体，它代表用户与商家和服务提供商进行电话沟通。"
  },
  {
    "id": 257,
    "start": 2462.849,
    "end": 2481.049,
    "en": "The first is claiming completion after only partial work: a Coding Agent writes the code, never runs the tests or tries the deployment, and reports \"task complete\"; a user gives Pine AI two errands, and it finishes the first, forgets the second, and cheerfully reports \"all taken care of.",
    "zh": "第一种是仅完成部分工作就声称任务完成：一个编程智能体编写了代码，但从不运行测试或尝试部署，却报告“任务完成”；用户给Pine AI两个任务，它完成了第一个，忘记了第二个，并高兴地报告“所有事项已处理”。"
  },
  {
    "id": 258,
    "start": 2481.049,
    "end": 2498.974,
    "en": "The second is giving up too soon: declaring the whole job impossible after one blocked path—Pine AI can reach a merchant by phone, web form, or email, but after a single rejected call it tells the user \"this can't be done,\" when switching channels and trying again would very likely have succeeded.",
    "zh": "第二种是过早放弃：在遇到一条阻塞路径后就宣布整个任务无法完成——Pine AI可以通过电话、网页表单或电子邮件联系商家，但一次被拒绝的电话后，它就告诉用户“这无法完成”，而换一个渠道再次尝试很可能会成功。"
  },
  {
    "id": 259,
    "start": 2498.974,
    "end": 2518.287,
    "en": "The third is false success: the Agent believes the job is done, but the loop was never actually closed—the other side verbally agrees to a refund on the phone, yet the user still has to confirm a step in the mobile app; the Agent reports \"all set,\" the user never learns there is a follow-up action, and the refund never lands.",
    "zh": "第三种是虚假的成功：智能体认为任务已经完成，但实际上流程并未真正闭合——对方在电话中口头同意退款，但用户仍需在手机应用中确认一个步骤；智能体报告“一切就绪”，用户却不知道还有后续操作，退款也从未到账。"
  },
  {
    "id": 260,
    "start": 2518.287,
    "end": 2526.449,
    "en": "All three forms point to the same root cause: until it is verified, \"done\" is merely the model's claim, not proof.",
    "zh": "这三种形式都指向同一个根本原因：在验证之前，“完成”仅仅是模型的声明，而非证明。"
  },
  {
    "id": 261,
    "start": 2526.449,
    "end": 2546.249,
    "en": "Turning claims into proofs is precisely the business of Loop Engineering, the last stage of Chapter 1's evolutionary arc: design a loop that keeps the Agent running—discover the next piece of work, execute, verify, record progress—and let a verifier, not the model itself, decide whether it is truly safe to stop.",
    "zh": "将声明转化为证明正是循环工程的任务，这是第一章演进弧线的最后一阶段：设计一个循环，让智能体持续运行——发现下一步工作，执行，验证，记录进度，并让验证者而不是模型本身决定是否真正可以停止。"
  },
  {
    "id": 262,
    "start": 2546.249,
    "end": 2553.512,
    "en": "The human's role shifts accordingly from \"the operator who prompts the Agent\" to \"the engineer who designs the loop.",
    "zh": "人类的角色相应地从“提示智能体的操作员”转变为“设计循环的工程师”。"
  },
  {
    "id": 263,
    "start": 2553.512,
    "end": 2563.762,
    "en": "The term was coined in June 2026 by Addy Osmani; Boris Cherny, head of Claude Code at Anthropic, put it more bluntly: \"I don't prompt Claude anymore.",
    "zh": "这个术语由Addy Osmani于2026年6月首次提出；Anthropic公司Claude Code的负责人Boris Cherny更直白地说：“我再也不提示Claude了。”"
  },
  {
    "id": 264,
    "start": 2563.762,
    "end": 2566.299,
    "en": "My job is to write loops.",
    "zh": "我的工作就是编写循环。"
  },
  {
    "id": 265,
    "start": 2566.299,
    "end": 2578.212,
    "en": "The central conclusion to emerge from that discussion was that the bottleneck of the loop is the verifier, not the model: with unreliable verification, a faster loop merely marks poor output as complete sooner.",
    "zh": "从那次讨论中得出的核心结论是，循环的瓶颈是验证者，而不是模型：如果验证不可靠，更快的循环只会更快地将低质量输出标记为完成。"
  },
  {
    "id": 266,
    "start": 2578.212,
    "end": 2583.587,
    "en": "And as the Introduction says, practice comes first, naming comes later.",
    "zh": "正如引言所说，实践先于命名。"
  },
  {
    "id": 267,
    "start": 2583.587,
    "end": 2593.837,
    "en": "Long before the term caught on, leading Agent teams—Pine AI among them—were already using \"loop plus verification\" against premature termination.",
    "zh": "在这一术语流行之前，领先的智能体团队——包括Pine AI在内——就已经开始使用“循环加验证”来防止过早终止。"
  },
  {
    "id": 268,
    "start": 2593.837,
    "end": 2599.662,
    "en": "The most effective way to organize that verification is the Proposer-Reviewer paradigm below.",
    "zh": "验证最有效的方式是下面的提议者-审查者范式。"
  },
  {
    "id": 269,
    "start": 2599.662,
    "end": 2602.674,
    "en": "Concrete framework: LoopX.",
    "zh": "具体框架：LoopX。"
  },
  {
    "id": 270,
    "start": 2602.674,
    "end": 2622.162,
    "en": "LoopX takes the loop out of the model's prompt and chat history and places it in a durable, agent-runtime-neutral control plane: the objective and boundary explain why the work exists; gates and todos determine what may happen now; evidence and quota determine whether it may continue; and handoffs let a later turn or another Agent resume it.",
    "zh": "LoopX将循环从模型的提示和聊天历史中移出，放置在一个持久且与智能体运行时无关的控制平面中：目标和边界解释了工作的存在原因；闸门和待办事项决定了现在可以发生什么；证据和配额决定了是否可以继续；交接让后续步骤或另一个智能体可以继续执行。"
  },
  {
    "id": 271,
    "start": 2622.162,
    "end": 2626.462,
    "en": "It compresses one governed execution into a clear protocol:",
    "zh": "它将一个受控的执行过程压缩为一个清晰的协议："
  },
  {
    "id": 272,
    "start": 2626.462,
    "end": 2633.112,
    "en": "Code statement: LoopX decides → Agent executes → independent verifier proves → LoopX commits.",
    "zh": "代码语句：LoopX决定→智能体执行→独立验证器验证→LoopX提交。"
  },
  {
    "id": 273,
    "start": 2633.26,
    "end": 2638.935,
    "en": "The Agent still reasons, uses tools, and produces candidate artifacts.",
    "zh": "智能体仍然进行推理、使用工具并生成候选成果。"
  },
  {
    "id": 274,
    "start": 2638.885,
    "end": 2644.697,
    "en": "LoopX does not replace the Agent runtime; it governs continuity across turns.",
    "zh": "LoopX并未取代智能体运行时；它管理跨轮次的连续性。"
  },
  {
    "id": 275,
    "start": 2644.697,
    "end": 2650.222,
    "en": "Only independently verified results may update durable progress and spend quota.",
    "zh": "只有经过独立验证的结果才能更新持久化进度并消耗配额。"
  },
  {
    "id": 276,
    "start": 2650.222,
    "end": 2659.085,
    "en": "Failed validation routes to repair or replanning, while human gates, wait states, and budget limits stop the loop before execution.",
    "zh": "验证失败会引导至修复或重新规划，而人工闸门、等待状态和预算限制会在执行前终止循环。"
  },
  {
    "id": 277,
    "start": 2659.085,
    "end": 2668.372,
    "en": "This boundary turns a Loop Engineering principle into an inspectable system invariant: the model may propose “done,” but it cannot approve its own “done.",
    "zh": "这个边界将Loop Engineering原则转化为可检查的系统不变量：模型可以提出“完成”，但不能批准自己的“完成”。"
  },
  {
    "id": 278,
    "start": 2668.372,
    "end": 2682.61,
    "en": "LoopX v0.4.0 still labels the governed-Turn path experimental, so it is used here as a concrete framework for “loop + verification + stop conditions,” not as evidence of general task-quality uplift.",
    "zh": "LoopX v0.4.0仍将受控的“回合”路径标记为实验性，因此在这里作为“循环+验证+停止条件”的具体框架使用，而非作为任务质量提升的普遍证据。"
  },
  {
    "id": 279,
    "start": 2682.61,
    "end": 2686.122,
    "en": "Concrete framework: LongHorizon-Harness.",
    "zh": "具体框架：LongHorizon-Harness。"
  },
  {
    "id": 280,
    "start": 2686.122,
    "end": 2693.785,
    "en": "LongHorizon-Harness and LoopX are both concrete implementations of Loop Engineering, but they point in different directions.",
    "zh": "LongHorizon-Harness和LoopX都是Loop Engineering的具体实现，但它们的方向不同。"
  },
  {
    "id": 281,
    "start": 2693.785,
    "end": 2710.547,
    "en": "LoopX targets a durable control plane for long-running Agent work; LongHorizon-Harness starts from multimodal Computer Use and tackles continuous execution when a single task spans a GUI, a CLI, several desktop applications, and repeated context refreshes.",
    "zh": "LoopX旨在为长期运行的智能体工作提供持久的控制平面；LongHorizon-Harness则从多模态计算机使用出发，处理当单个任务跨越GUI、CLI、多个桌面应用程序和重复的上下文刷新时的连续执行。"
  },
  {
    "id": 282,
    "start": 2710.547,
    "end": 2735.185,
    "en": "LongHorizon-Harness reframes long-horizon execution as task-state management and implements its loop as Manage–Execute–Audit (MEA): the Manager generates the next bounded subtask from the original objective, verified progress, failure evidence, and remaining work; the Executor changes the environment through the GUI or CLI in a fresh context; the Auditor then inspects the actual result read-only.",
    "zh": "LongHorizon-Harness将长周期执行重新定义为任务状态管理，并将其循环实现为Manage–Execute–Audit（MEA）：管理者从原始目标、验证进度、失败证据和剩余工作生成下一个有限子任务；执行者在新的上下文中通过GUI或CLI改变环境；审计者随后只读检查实际结果。"
  },
  {
    "id": 283,
    "start": 2735.185,
    "end": 2743.047,
    "en": "Only what passes the audit enters the next round's task state, while failures are retained as the basis for recovery and replanning.",
    "zh": "只有通过审计的内容才会进入下一轮的任务状态，而失败情况则保留作为恢复和重新规划的基础。"
  },
  {
    "id": 284,
    "start": 2743.047,
    "end": 2752.472,
    "en": "Execution backends such as Claude Code and Codex CLI are reused through an adapter layer rather than by rewriting the Agent loop inside those backends.",
    "zh": "执行后端如Claude Code和Codex CLI通过适配层重复使用，而不是在这些后端内部重写智能体循环。"
  },
  {
    "id": 285,
    "start": 2752.472,
    "end": 2766.147,
    "en": "The value of this direction lies in separating task continuity from an ever-growing execution history: context may be refreshed and interface operations may fail, yet the next round still resumes from the most recently verified state.",
    "zh": "这一方向的价值在于将任务连续性与不断增长的执行历史分离：上下文可以刷新，接口操作可能会失败，但下一轮仍从最近验证的状态继续。"
  },
  {
    "id": 286,
    "start": 2766.147,
    "end": 2791.235,
    "en": "Holding the Qwen 3.7-Plus model and the Claude Code execution backend fixed and changing only the outer loop, the paper reports WeaveBench PassRate rising from 51.8% to 80.7%, OSWorld 2.0 binary completion from 2.8% to 8.3%, and Terminal-Bench 2.1 success from 69.7% to 77.2%.",
    "zh": "在保持Qwen 3.7-Plus模型和Claude代码执行后端固定，仅改变外部循环的情况下，论文报告称WeaveBench通过率从51.8%提升至80.7%，OSWorld 2.0二进制完成度从2.8%提升至8.3%，Terminal-Bench 2.1成功度从69.7%提升至77.2%。"
  },
  {
    "id": 287,
    "start": 2791.235,
    "end": 2805.522,
    "en": "The cost is not fixed either: the first two benchmarks consumed 2.3× the baseline's total tokens and 3.6× its output tokens respectively, while token use on Terminal-Bench 2.1 fell by 24%.",
    "zh": "成本也不是固定的：前两个基准测试分别消耗了基线总标记数的2.3倍和3.6倍，而Terminal-Bench 2.1的标记使用量减少了24%。"
  },
  {
    "id": 288,
    "start": 2805.522,
    "end": 2817.685,
    "en": "A real deployment must additionally handle state invalidated by a changing external environment or changing user requirements, and use round, time, and cost budgets to keep recovery loops from running forever.",
    "zh": "实际部署还必须处理因外部环境变化或用户需求变化而失效的状态，并使用轮次、时间和成本预算来防止恢复循环无限运行。"
  },
  {
    "id": 289,
    "start": 2817.844,
    "end": 2820.731,
    "en": "Public trajectories and reproduction.",
    "zh": "公开轨迹和复现。"
  },
  {
    "id": 290,
    "start": 2820.681,
    "end": 2833.169,
    "en": "The project website publishes hundreds of run trajectories for WeaveBench, OSWorld 2.0, and Terminal-Bench 2.1, so the execution process and each role's records can be inspected directly.",
    "zh": "项目网站发布了WeaveBench、OSWorld 2.0和Terminal-Bench 2.1的数百条运行轨迹，因此可以直接检查执行过程和每个角色的记录。"
  },
  {
    "id": 291,
    "start": 2833.169,
    "end": 2849.231,
    "en": "Take WeaveBench's WEB_task_16_webrtc_simulcast_layer_audit: the baseline trajectory and the MEA trajectory, both on the same Qwen 3.7-Plus model, can be compared side by side.",
    "zh": "以WeaveBench的WEB_task_16_webrtc_simulcast_layer_audit为例：基线轨迹和MEA轨迹，均基于同一Qwen 3.7-Plus模型，可以并排比较。"
  },
  {
    "id": 292,
    "start": 2849.231,
    "end": 2864.169,
    "en": "The former got stuck on Wireshark interaction and retried repeatedly, scoring 0.59; the latter wrote failures and unmet evidence items back into task state so that later rounds handled only the gaps, scoring 0.92.",
    "zh": "前者在Wireshark交互中卡住并反复重试，得分为0.59；后者将失败和未满足的证据项写回任务状态，使后续轮次只处理缺失部分，得分为0.92。"
  },
  {
    "id": 293,
    "start": 2864.169,
    "end": 2877.431,
    "en": "This case shows “how a failure becomes the next round's input” and does not substitute for aggregate statistics; the environment, parameters, and launch scripts for the full experiments are in the pinned eval/ directory.",
    "zh": "此案展示了“失败如何成为下一轮的输入”，而不是替代汇总统计；完整实验的环境、参数和启动脚本在固定eval/目录中。"
  },
  {
    "id": 294,
    "start": 2877.431,
    "end": 2879.981,
    "en": "Proposer-Reviewer Paradigm.",
    "zh": "提议者-评审者范式。"
  },
  {
    "id": 295,
    "start": 2879.981,
    "end": 2884.781,
    "en": "As illustrated in Figure 10-3: Proposer-Reviewer Loop.",
    "zh": "如图10-3所示：提议者-评审者循环。"
  },
  {
    "id": 296,
    "start": 2884.781,
    "end": 2889.131,
    "en": "Proposer-Reviewer is the canonical peer-collaboration paradigm.",
    "zh": "提议者-评审者是典型的同行协作范式。"
  },
  {
    "id": 297,
    "start": 2889.131,
    "end": 2899.419,
    "en": "Chapter 5 already covered its design principles and practical applications in three experiments: PPT generation, video editing, and log visualization.",
    "zh": "第5章已经涵盖了其设计原则和三个实验中的实际应用：PPT生成、视频编辑和日志可视化。"
  },
  {
    "id": 298,
    "start": 2899.419,
    "end": 2910.969,
    "en": "The Proposer Agent generates code, while the Reviewer Agent renders the execution results, evaluates their quality using a vision-language model, and provides structured suggestions for improvement.",
    "zh": "提议者智能体生成代码，而评审者智能体渲染执行结果，使用视觉-语言模型评估其质量，并提供改进的结构化建议。"
  },
  {
    "id": 299,
    "start": 2910.969,
    "end": 2914.994,
    "en": "The two iterate until the result meets the required standard.",
    "zh": "两者不断迭代直至结果达到所需标准。"
  },
  {
    "id": 300,
    "start": 2914.994,
    "end": 2936.581,
    "en": "This paradigm is also applicable to scenarios like security review (Proposer generates an action plan, Reviewer checks compliance and potential risks), content moderation (Proposer drafts a reply, Reviewer checks business rules and language norms), and code review (Proposer writes code, Reviewer checks security and best practices).",
    "zh": "此范式也适用于安全审查（提议者生成行动方案，评审者检查合规性和潜在风险）、内容审核（提议者起草回复，评审者检查业务规则和语言规范）以及代码审查（提议者编写代码，评审者检查安全性和最佳实践）等场景。"
  },
  {
    "id": 301,
    "start": 2936.581,
    "end": 2940.819,
    "en": "Why can't a single Agent generate and then review its own work?",
    "zh": "为什么单个智能体无法生成并审查自己的工作？"
  },
  {
    "id": 302,
    "start": 2940.819,
    "end": 2953.769,
    "en": "This is exactly where the criterion from \"When Is Multi-Agent Truly Better Than a Single Agent?\" earlier in this chapter applies—if the review does not introduce new information, it is just \"asking the model to think again.",
    "zh": "这正是本章前面提到的《何时多智能体真正优于单个智能体？》中的标准适用之处——如果审查没有引入新信息，那只是“让模型再次思考”"
  },
  {
    "id": 303,
    "start": 2953.769,
    "end": 2957.019,
    "en": "Related research provides a clear answer.",
    "zh": "相关研究提供了明确的答案。"
  },
  {
    "id": 304,
    "start": 2957.019,
    "end": 2977.231,
    "en": "In their ICLR 2024 paper \"Large Language Models Cannot Self-Correct Reasoning Yet,\" Huang et al. found that asking GPT-4 to review and correct its own answers without external feedback actually decreased accuracy—the model changed correct answers to incorrect ones more often than it changed incorrect answers to correct ones.",
    "zh": "在他们2024年发表于ICLR的论文《大型语言模型尚不能自我修正推理》中，黄等人发现，要求GPT-4在没有外部反馈的情况下审查和更正自己的答案实际上会降低准确性——模型更常将正确的答案改为错误的，而不是将错误的答案改为正确的。"
  },
  {
    "id": 305,
    "start": 2977.231,
    "end": 2986.931,
    "en": "The proposer-reviewer loop must satisfy a basic requirement: the reviewer examines independent evidence rather than merely restating the proposer's explanation.",
    "zh": "提议者-审查者循环必须满足一个基本要求：审查者应检查独立证据，而不是仅仅重述提议者的解释。"
  },
  {
    "id": 306,
    "start": 2986.931,
    "end": 2994.444,
    "en": "When returning work for revision, it must identify exactly what needs fixing and specify what the revision must achieve:",
    "zh": "当返回需要修订的工作时，必须明确指出需要修复的内容，并说明修订必须达到的目标："
  },
  {
    "id": 307,
    "start": 2994.444,
    "end": 2999.181,
    "en": "Refer to the companion repository for the complete code implementation.",
    "zh": "请参考配套仓库中的完整代码实现。"
  },
  {
    "id": 308,
    "start": 2999.181,
    "end": 3009.356,
    "en": "The reviewer must not be able to modify the tests, the evidence collector, or the release gate; otherwise \"independent verification\" degenerates into self-approval.",
    "zh": "审查者不能修改测试用例、证据收集器或发布门禁；否则，“独立验证”就会退化为自我批准。"
  },
  {
    "id": 309,
    "start": 3009.356,
    "end": 3016.606,
    "en": "A 2024 survey paper published in TACL, \"When Can LLMs Actually Correct Their Own Mistakes?",
    "zh": "2024年发表于TACL的综述论文《大型语言模型真的能纠正自己的错误吗？"
  },
  {
    "id": 310,
    "start": 3016.606,
    "end": 3036.231,
    "en": "arXiv:2406.01297), further confirmed this conclusion: unless reliable external feedback is provided (e.g., test case execution results, verification output from external tools), relying solely on the model's own \"self-correction\" is largely ineffective.",
    "zh": "arXiv:2406.01297），进一步证实了这一结论：除非提供可靠的外部反馈（例如测试用例执行结果、外部工具的验证输出），仅依赖模型自身的“自我修正”基本上是无效的。"
  },
  {
    "id": 311,
    "start": 3036.231,
    "end": 3042.244,
    "en": "The CRITIC paper at ICLR 2024 provides an intuitive comparative experiment.",
    "zh": "ICLR 2024年的CRITIC论文提供了一个直观的对比实验。"
  },
  {
    "id": 312,
    "start": 3042.244,
    "end": 3052.219,
    "en": "CRITIC had the model use external tools (search engine, Python interpreter) to verify its own answers, leading to significant performance improvements.",
    "zh": "CRITIC让模型使用外部工具（搜索引擎、Python解释器）验证自己的答案，从而显著提升了性能。"
  },
  {
    "id": 313,
    "start": 3052.219,
    "end": 3060.819,
    "en": "However, when the experimenters removed the tool verification step and only kept the model's self-assessment, most of the improvement disappeared.",
    "zh": "然而，当实验人员移除了工具验证步骤，只保留模型的自我评估时，大部分提升效果消失了。"
  },
  {
    "id": 314,
    "start": 3060.819,
    "end": 3075.481,
    "en": "This indicates that the value of review lies not in \"asking the model to think again,\" but in introducing new information that was not available during the model's generation—test results, rendered screenshots, compilation errors, external search results.",
    "zh": "这表明，审查的价值不在于‘让模型再次思考’，而在于引入在模型生成过程中未获得的新信息——测试结果、渲染的截图、编译错误、外部搜索结果。"
  },
  {
    "id": 315,
    "start": 3075.652,
    "end": 3085.339,
    "en": "Anthropic's 2026 experiment on long-running application development implemented this idea as a three-Agent planner–generator–evaluator architecture.",
    "zh": "Anthropic在2026年关于长期运行应用程序开发的实验中，将这一理念实现为一个三智能体规划者-生成器-评估者架构。"
  },
  {
    "id": 316,
    "start": 3085.289,
    "end": 3089.927,
    "en": "The planner expanded a user's request into a product specification.",
    "zh": "规划器将用户的需求扩展为产品规格。"
  },
  {
    "id": 317,
    "start": 3089.927,
    "end": 3102.477,
    "en": "The generator and evaluator first agreed on the completion criteria for each round; the generator then implemented the work, and the evaluator exercised the real application with Playwright and filed a defect report.",
    "zh": "生成器和评估者首先就每轮的完成标准达成一致；生成器随后执行工作，评估者则使用Playwright进行实际应用测试并提交缺陷报告。"
  },
  {
    "id": 318,
    "start": 3102.477,
    "end": 3105.614,
    "en": "Agents handed state off through files.",
    "zh": "智能体通过文件传递状态。"
  },
  {
    "id": 319,
    "start": 3105.614,
    "end": 3117.752,
    "en": "The experiment suggests that when a task lies beyond what the current model can reliably complete alone, independent review grounded in external evidence can trade substantially higher cost for better development quality.",
    "zh": "该实验表明，当任务超出当前模型独立可靠完成的能力时，基于外部证据的独立审查可以以较高的成本换取更好的开发质量。"
  },
  {
    "id": 320,
    "start": 3117.752,
    "end": 3119.564,
    "en": "Debate Pattern.",
    "zh": "辩论模式。"
  },
  {
    "id": 321,
    "start": 3119.564,
    "end": 3125.864,
    "en": "Multiple Agents hold different positions, exploring the problem space through adversarial dialogue.",
    "zh": "多个智能体持有不同立场，通过对抗性对话探索问题空间。"
  },
  {
    "id": 322,
    "start": 3125.864,
    "end": 3138.202,
    "en": "For example, when evaluating a technical solution, Agent A plays the \"supporter,\" listing the solution's advantages and opportunities, while Agent B plays the \"opponent,\" pointing out risks and limitations.",
    "zh": "例如，在评估一个技术方案时，智能体A扮演“支持者”，列出该方案的优势和机遇，而智能体B扮演“反对者”，指出风险和局限性。"
  },
  {
    "id": 323,
    "start": 3138.202,
    "end": 3143.027,
    "en": "Each round of debate involves rebutting or extending the other's arguments.",
    "zh": "每轮辩论都涉及反驳或扩展对方的论点。"
  },
  {
    "id": 324,
    "start": 3143.027,
    "end": 3149.814,
    "en": "When a single Agent analyzes a problem, it often favors one perspective and overlooks counterevidence.",
    "zh": "当单个智能体分析一个问题时，它往往会偏向一个视角并忽视反面证据。"
  },
  {
    "id": 325,
    "start": 3149.814,
    "end": 3157.014,
    "en": "Structured debate forces both positions to be developed fully, helping decision-makers reach a more balanced judgment.",
    "zh": "结构化辩论迫使双方立场得到充分发展，有助于决策者做出更平衡的判断。"
  },
  {
    "id": 326,
    "start": 3157.014,
    "end": 3162.402,
    "en": "However, the practical effectiveness of debate remains contested in academia.",
    "zh": "然而，辩论在学术界的实际效果仍存在争议。"
  },
  {
    "id": 327,
    "start": 3162.402,
    "end": 3175.864,
    "en": "A 2026 study by Tran and Kiela  compared a single Agent with five multi-agent architectures (sequential, debate, ensemble, parallel roles, subtask-parallel) on multi-hop reasoning tasks.",
    "zh": "Tran和Kiela于2026年的一项研究比较了单个智能体与五种多智能体架构（顺序、辩论、集成、并行角色、子任务并行）在多跳推理任务上的表现。"
  },
  {
    "id": 328,
    "start": 3175.864,
    "end": 3187.652,
    "en": "They found that when the thinking-token budget was held constant, the single Agent performed on par with or even better than the multi-agent systems (unless context utilization was degraded to a certain point).",
    "zh": "他们发现，当思考令牌预算保持恒定时，单个智能体的表现与多智能体系统相当，甚至更好（除非上下文利用率降低到一定水平）。"
  },
  {
    "id": 329,
    "start": 3187.652,
    "end": 3204.189,
    "en": "The researchers provided an explanation based on the data processing inequality in information theory: multiple Agents in a debate process the exact same textual information, and each serial transmission of intermediate conclusions between Agents can only lose information, not create it.",
    "zh": "研究人员根据信息论中的数据处理不等式提供了解释：辩论过程中的多个智能体处理完全相同的文本信息，每次智能体之间中间结论的串行传递只会丢失信息，而不会创造信息。"
  },
  {
    "id": 330,
    "start": 3204.189,
    "end": 3211.639,
    "en": "The benefits of the debate mode in some academic papers likely stem from multiple Agents consuming more total computation.",
    "zh": "一些学术论文中辩论模式的益处可能源于多个智能体消耗了更多的总计算量。"
  },
  {
    "id": 331,
    "start": 3211.639,
    "end": 3240.952,
    "en": "It is important to clarify the boundary of this argument: it targets the information bottleneck caused by \"multi-agent serial transmission of intermediate conclusions\" and does not negate other approaches, such as multiple independent samples of the same problem followed by aggregation (e.g., self-consistency, majority voting), or leveraging the asymmetry in difficulty between generation and verification (writing an answer is hard, verifying it is easy) for a generation-verification division of",
    "zh": "需要明确这个论点的边界：它针对的是由“多智能体串行传递中间结论”导致的信息瓶颈，并不否定其他方法，例如对同一问题进行多次独立采样后进行聚合（如自我一致性、多数投票），或者利用生成与验证之间的难度不对称性（生成答案很难，验证很容易）来进行生成-验证分工）"
  },
  {
    "id": 332,
    "start": 3240.952,
    "end": 3242.364,
    "en": "labor.",
    "zh": "劳动。"
  },
  {
    "id": 333,
    "start": 3242.364,
    "end": 3252.539,
    "en": "These scenarios either introduce additional independent sampling or exploit the asymmetric structure of the task itself, and are not within the scope of the data processing inequality.",
    "zh": "这些场景要么引入了额外的独立采样，要么利用了任务本身的非对称结构，并不在数据处理不等式的范围内。"
  },
  {
    "id": 334,
    "start": 3252.539,
    "end": 3254.627,
    "en": "Brainstorming Pattern.",
    "zh": "头脑风暴模式。"
  },
  {
    "id": 335,
    "start": 3254.627,
    "end": 3261.252,
    "en": "Multiple Agents independently generate ideas, then share them with each other, inspiring one another.",
    "zh": "多个智能体独立生成想法，然后相互分享，互相启发。"
  },
  {
    "id": 336,
    "start": 3261.252,
    "end": 3282.439,
    "en": "For example, in a product innovation task, Agent 1 proposes \"adding social sharing features,\" Agent 2 is inspired to suggest \"not just sharing to social networks, but also generating personalized sharing posters,\" and Agent 3 synthesizes the first two to propose \"user-customizable poster templates forming a template marketplace.",
    "zh": "例如，在产品创新任务中，智能体1提出“添加社交分享功能”，智能体2受到启发建议“不只是分享到社交网络，还可以生成个性化分享海报”，智能体3综合前两个建议，提出“用户可自定义的海报模板形成模板市场。”},{"
  },
  {
    "id": 337,
    "start": 3282.439,
    "end": 3296.027,
    "en": "Different Agents have different \"thinking preferences\" (achieved through different prompts or models), and by stimulating each other, they explore a broader solution space to find creative combinations that a single Agent would struggle to conceive.",
    "zh": "不同智能体有不同“思考偏好”（通过不同的提示或模型实现），通过互相激发，它们探索更广泛的解决方案空间，找到单个智能体难以构思的创造性组合。"
  },
  {
    "id": 338,
    "start": 3296.027,
    "end": 3298.352,
    "en": "Panel of Experts Pattern.",
    "zh": "专家小组模式。"
  },
  {
    "id": 339,
    "start": 3298.516,
    "end": 3306.178,
    "en": "Multiple Agents each represent the perspective of a specific professional domain, jointly discussing an interdisciplinary problem.",
    "zh": "多个智能体分别代表特定专业领域的视角，共同讨论跨学科问题。"
  },
  {
    "id": 340,
    "start": 3306.128,
    "end": 3324.616,
    "en": "For example, when evaluating the feasibility of a new product, an Engineer Agent analyzes the implementation difficulty from a technical standpoint, a Product Agent assesses market appeal from a user experience perspective, and an Operations Agent analyzes business viability from a cost and resource perspective.",
    "zh": "例如，在评估新产品可行性时，工程师智能体从技术角度分析实现难度，产品智能体从用户体验角度评估市场吸引力，运营智能体从成本和资源角度分析业务可行性。"
  },
  {
    "id": 341,
    "start": 3324.616,
    "end": 3334.191,
    "en": "These Agents are not adversarial but complementary, together piecing together the full picture of the problem and identifying cross-domain constraints and opportunities.",
    "zh": "这些智能体不是对立的，而是互补的，共同拼凑出问题的全貌，识别跨领域的约束和机会。"
  },
  {
    "id": 342,
    "start": 3334.191,
    "end": 3337.828,
    "en": "Manager Pattern: Centralized Coordination.",
    "zh": "管理者模式：集中协调。"
  },
  {
    "id": 343,
    "start": 3337.828,
    "end": 3349.378,
    "en": "When a task involves many subtasks, needs dynamic scheduling, or has complex dependencies among subtasks, peer collaboration is out of its depth, and the manager pattern is needed.",
    "zh": "当任务涉及许多子任务、需要动态调度，或子任务之间有复杂的依赖关系时，同行协作就显得力不从心，需要管理者模式。"
  },
  {
    "id": 344,
    "start": 3349.378,
    "end": 3369.191,
    "en": "The Manager Agent's job resembles that of a project manager: understand the overall task, break it into assignable subtasks, choose the right Agent for each, track progress, handle exceptions by retrying tasks, replacing Agents, or revising the plan, and finally integrate the Agents' outputs into the final result.",
    "zh": "管理者智能体的工作类似于项目经理：理解整体任务，将其分解为可分配的子任务，为每个子任务选择合适的智能体，跟踪进度，通过重试任务、替换智能体或修改计划来处理异常情况，并最终将智能体的输出整合为最终结果。"
  },
  {
    "id": 345,
    "start": 3369.191,
    "end": 3376.553,
    "en": "From a system design perspective, the manager pattern models each specialized Agent as a tool that the Manager can invoke.",
    "zh": "从系统设计的角度来看，管理者模式将每个专业智能体建模为管理者可以调用的工具。"
  },
  {
    "id": 346,
    "start": 3376.553,
    "end": 3386.341,
    "en": "The Manager's tool set includes not only traditional external tools, such as search and file operations, but also interfaces for invoking other Agents.",
    "zh": "管理器的工具集不仅包括传统的外部工具，如搜索和文件操作，还包括调用其他智能体的接口。"
  },
  {
    "id": 347,
    "start": 3386.341,
    "end": 3396.216,
    "en": "The Manager invokes the appropriate Agent through a tool call, passes the task parameters and necessary context, waits for completion, and receives the result.",
    "zh": "管理器通过工具调用调用适当的智能体，传递任务参数和必要的上下文，等待完成并接收结果。"
  },
  {
    "id": 348,
    "start": 3396.216,
    "end": 3405.566,
    "en": "From the Manager's perspective, calling an Agent is essentially no different from calling a regular tool: both involve sending a request and receiving a response.",
    "zh": "从管理器的角度来看，调用一个智能体与调用常规工具本质上没有区别：两者都涉及发送请求并接收响应。"
  },
  {
    "id": 349,
    "start": 3405.566,
    "end": 3410.216,
    "en": "This unified abstraction makes the manager pattern easy to extend.",
    "zh": "这种统一的抽象使管理器模式易于扩展。"
  },
  {
    "id": 350,
    "start": 3410.216,
    "end": 3418.728,
    "en": "Adding a capability requires only developing the corresponding Agent and registering it as a tool, without modifying the Manager's core logic.",
    "zh": "添加功能只需开发相应的智能体并将其注册为工具，而无需修改管理器的核心逻辑。"
  },
  {
    "id": 351,
    "start": 3418.728,
    "end": 3427.691,
    "en": "It also naturally supports heterogeneity: different Agents can use different models, prompts, tool sets, and even hardware environments.",
    "zh": "它还自然支持异构性：不同的智能体可以使用不同的模型、提示、工具集甚至硬件环境。"
  },
  {
    "id": 352,
    "start": 3427.691,
    "end": 3431.441,
    "en": "The manager pattern has inherent challenges, though.",
    "zh": "不过，管理器模式本身也存在固有的挑战。"
  },
  {
    "id": 353,
    "start": 3431.441,
    "end": 3443.228,
    "en": "The Manager becomes the system's single-point bottleneck: it must understand the nature of every subtask, choose the right Agent, and pass context accurately; any misjudgment ripples through the whole flow.",
    "zh": "管理器成为系统的单一瓶颈：它必须理解每个子任务的本质，选择正确的智能体，并准确传递上下文；任何误判都会在整个流程中产生连锁反应。"
  },
  {
    "id": 354,
    "start": 3443.228,
    "end": 3451.191,
    "en": "It must also maintain the global context of the entire task, which can balloon as the task deepens and Agent calls accumulate.",
    "zh": "它还必须维护整个任务的全局上下文，随着任务的深入和智能体调用的积累，这个上下文可能会迅速膨胀。"
  },
  {
    "id": 355,
    "start": 3451.191,
    "end": 3460.328,
    "en": "The Manager therefore requires a carefully designed prompt, an effective context-management strategy, and appropriately granular task decomposition.",
    "zh": "因此，管理器需要精心设计的提示、有效的上下文管理策略以及适当粒度的任务分解。"
  },
  {
    "id": 356,
    "start": 3460.328,
    "end": 3471.953,
    "en": "The 2025 Plan-and-Act paper  provides an empirical analysis of this: in a Planner-Executor dual-agent architecture, a weak planner is the most critical bottleneck of the entire system.",
    "zh": "2025年的《Plan-and-Act》论文对此进行了实证分析：在规划器-执行器双智能体架构中，弱规划器是整个系统中最关键的瓶颈。"
  },
  {
    "id": 357,
    "start": 3471.953,
    "end": 3479.078,
    "en": "When the Planner's planning quality is high enough, good results can be achieved even with a relatively simple Executor.",
    "zh": "当规划器的规划质量足够高时，即使执行器相对简单，也能获得良好的结果。"
  },
  {
    "id": 358,
    "start": 3479.078,
    "end": 3486.716,
    "en": "Conversely, if the Planner's task decomposition is wrong, all subsequent Executor work is built on a faulty premise.",
    "zh": "相反，如果规划器的任务分解有误，所有后续的执行器工作都将建立在错误的前提之上。"
  },
  {
    "id": 359,
    "start": 3486.716,
    "end": 3498.228,
    "en": "The study achieved a 57.58% success rate on the WebArena-Lite benchmark, and its core contribution was improving the Planner's planning ability, not the Executor's execution.",
    "zh": "该研究在WebArena-Lite基准测试中实现了57.58%的成功率，其核心贡献是提升规划器的规划能力，而非执行器的执行能力。"
  },
  {
    "id": 360,
    "start": 3498.228,
    "end": 3507.828,
    "en": "The lesson: give the strongest model and the most carefully crafted prompt to the Manager (the planner), rather than spreading resources evenly across all Agents.",
    "zh": "教训是：将最强的模型和最精心设计的提示交给管理器（规划器），而不是平均分配资源给所有智能体。"
  },
  {
    "id": 361,
    "start": 3507.828,
    "end": 3516.128,
    "en": "A parallel manager must also define the settlement point as \"the first verified success\" rather than \"the first claimed success\"",
    "zh": "并行管理器还必须将结算点定义为“第一个验证的成功”而不是“第一个声称的成功”"
  },
  {
    "id": 362,
    "start": 3516.128,
    "end": 3520.866,
    "en": "Refer to the companion repository for the complete code implementation.",
    "zh": "请参考配套仓库中的完整代码实现。"
  },
  {
    "id": 363,
    "start": 3520.866,
    "end": 3532.503,
    "en": "settle_once must be idempotent (usually protected by a lock or a transaction); otherwise two success events arriving almost simultaneously will trigger the aggregation twice.",
    "zh": "settle_once 必须是幂等的（通常通过锁或事务来保护）；否则两个几乎同时到达的成功事件会触发两次聚合。"
  },
  {
    "id": 364,
    "start": 3532.503,
    "end": 3535.191,
    "en": "Sequential Coordination Pattern.",
    "zh": "顺序协调模式。"
  },
  {
    "id": 365,
    "start": 3535.191,
    "end": 3540.203,
    "en": "As illustrated in Figure 10-4: Manager Sequential Coordination.",
    "zh": "如图 10-4 所示：管理者顺序协调。"
  },
  {
    "id": 366,
    "start": 3540.364,
    "end": 3544.114,
    "en": "The Manager calls specialized Agents sequentially.",
    "zh": "管理者按顺序调用专业智能体。"
  },
  {
    "id": 367,
    "start": 3544.064,
    "end": 3549.489,
    "en": "Each Agent returns results upon completion, and the Manager decides the next step.",
    "zh": "每个智能体在完成时返回结果，管理者决定下一步操作。"
  },
  {
    "id": 368,
    "start": 3549.489,
    "end": 3557.876,
    "en": "The control flow is linear, simple, and clear, making it suitable for scenarios where subtasks have clear sequential dependencies.",
    "zh": "控制流程是线性的、简单的和清晰的，适用于子任务有明确顺序依赖的场景。"
  },
  {
    "id": 369,
    "start": 3558.028,
    "end": 3564.24,
    "en": "Experiment 10-2 intermediate difficulty, two stars: : Book Translation Agent",
    "zh": "实验 10-2 中等难度，两颗星：书籍翻译智能体"
  },
  {
    "id": 370,
    "start": 3564.19,
    "end": 3569.428,
    "en": "Book translation is a complex task well suited to multi-agent collaboration.",
    "zh": "书籍翻译是一项复杂任务，非常适合多智能体协作。"
  },
  {
    "id": 371,
    "start": 3569.428,
    "end": 3581.253,
    "en": "Translating a technical book involves not just converting text from one language to another, but also ensuring consistent specialized terminology, contextual accuracy, and overall fluency.",
    "zh": "翻译技术书籍不仅仅是将文本从一种语言转换到另一种语言，还需要确保专业术语的一致性、语境准确性以及整体流畅性。"
  },
  {
    "id": 372,
    "start": 3581.253,
    "end": 3588.965,
    "en": "For example, an English book about large language models may use many recurring terms with several conventional translations.",
    "zh": "例如，一本关于大语言模型的英文书籍可能会使用许多具有多个常规翻译的重复术语。"
  },
  {
    "id": 373,
    "start": 3588.965,
    "end": 3601.953,
    "en": "Consistency must be maintained throughout the book: if agent is rendered as \"智能体\" (\"intelligent entity,\" the standard Chinese term) in Chapter 1, the book cannot switch to the alternative rendering \"代理\" (\"proxy\") later.",
    "zh": "全书必须保持一致性：如果第 1 章中将 \"agent\" 翻译为 \"智能体\"（标准中文术语），则书中不能之后改用 \"代理\"（代理）这一替代翻译。"
  },
  {
    "id": 374,
    "start": 3601.953,
    "end": 3606.615,
    "en": "Using a single Agent creates serious context-management problems.",
    "zh": "使用单一智能体会导致严重的上下文管理问题。"
  },
  {
    "id": 375,
    "start": 3606.615,
    "end": 3619.003,
    "en": "As the Agent processes the book chapter by chapter, its context accumulates the full-book glossary, translated chapters, the current paragraph, translation work traces, and tool results.",
    "zh": "随着智能体逐章处理书籍，其上下文会积累整本书的术语表、已翻译章节、当前段落、翻译工作轨迹和工具结果。"
  },
  {
    "id": 376,
    "start": 3619.003,
    "end": 3627.103,
    "en": "A technical book several hundred pages long, together with these intermediate materials, can easily exceed the context window.",
    "zh": "一本几百页的技术书籍，加上这些中间材料，很容易超出上下文窗口。"
  },
  {
    "id": 377,
    "start": 3627.103,
    "end": 3647.465,
    "en": "More critically, an Agent working with an overly long context is prone to \"getting lost\": it may forget earlier terminology conventions and use a different translation in Chapter 9 than in Chapter 2, waste resources on redundant checks during proofreading, or even \"remember\" terminology rules that do not exist because its attention is spread too thin.",
    "zh": "更重要的是，一个与过长上下文一起工作的智能体容易出现“迷失”：它可能忘记早期的术语惯例，在第9章使用的翻译与第2章不同，会在校对过程中浪费资源进行冗余检查，甚至“记住”不存在的术语规则，因为它的注意力过于分散。"
  },
  {
    "id": 378,
    "start": 3647.465,
    "end": 3653.74,
    "en": "The manager pattern addresses these issues through task decomposition and responsibility separation:",
    "zh": "管理器模式通过任务分解和职责分离来解决这些问题："
  },
  {
    "id": 379,
    "start": 3653.74,
    "end": 3672.928,
    "en": "Glossary Agent: Receives the full book, identifies recurring specialized terms, consults specialist dictionaries and translation guidelines, and generates a structured glossary (JSON/CSV format, including the English term, Chinese translation, part of speech, and usage context).",
    "zh": "术语表智能体：接收整本书，识别重复的专业术语，查阅专业词典和翻译指南，并生成结构化的术语表（JSON/CSV格式，包括英文术语、中文翻译、词性以及使用语境）。"
  },
  {
    "id": 380,
    "start": 3672.928,
    "end": 3680.065,
    "en": "When finished, it writes the glossary to the shared file system, and the Agent can be destroyed to release resources.",
    "zh": "完成后，它会将术语表写入共享文件系统，然后可以销毁该智能体以释放资源。"
  },
  {
    "id": 381,
    "start": 3680.065,
    "end": 3691.215,
    "en": "Translation Agent: Receives the current chapter, the glossary, and translation guidelines (target reader level, language style), and translates it into fluent Chinese.",
    "zh": "翻译智能体：接收当前章节、术语表和翻译指南（目标读者水平、语言风格），并将其翻译成流畅的中文。"
  },
  {
    "id": 382,
    "start": 3691.215,
    "end": 3700.04,
    "en": "It strictly uses the specified translations for terms in the glossary, and for new terms, it infers a translation and marks it for review.",
    "zh": "它严格使用术语表中指定的术语翻译，对于新术语，它会推断出翻译并标记以供审核。"
  },
  {
    "id": 383,
    "start": 3700.04,
    "end": 3704.515,
    "en": "Each instance works in an independent context without interference.",
    "zh": "每个实例都在独立的上下文中运行，互不干扰。"
  },
  {
    "id": 384,
    "start": 3704.515,
    "end": 3711.253,
    "en": "The translated text is written to the file system (e.g., chapter1_zh.md).",
    "zh": "翻译后的文本会被写入文件系统（例如 chapter1_zh.md）。"
  },
  {
    "id": 385,
    "start": 3711.253,
    "end": 3716.053,
    "en": "The Manager can launch multiple instances in parallel or sequentially.",
    "zh": "管理器可以按顺序或并行启动多个实例。"
  },
  {
    "id": 386,
    "start": 3716.053,
    "end": 3730.453,
    "en": "Proofreading Agent: Receives all translated texts and the glossary, performs consistency checks—verifying whether term translations are uniform, identifying inconsistencies, and checking overall fluency and readability.",
    "zh": "校对智能体：接收所有翻译文本和术语表，执行一致性检查——验证术语翻译是否统一，识别不一致之处，并检查整体流畅性和可读性。"
  },
  {
    "id": 387,
    "start": 3730.453,
    "end": 3734.465,
    "en": "It generates a proofreading report written to the file system.",
    "zh": "它会生成一份校对报告并将其写入文件系统。"
  },
  {
    "id": 388,
    "start": 3734.465,
    "end": 3743.653,
    "en": "Manager Agent: Its context mainly stores the task description, execution plan, call records for each Agent, and progress status.",
    "zh": "管理器智能体：其上下文主要存储任务描述、执行计划、每个智能体的调用记录和进度状态。"
  },
  {
    "id": 389,
    "start": 3743.653,
    "end": 3752.49,
    "en": "It does not store the complete translated text, which remains in the file system; instead, it maintains only an index of the files.",
    "zh": "它不存储完整的翻译文本，该文本仍保留在文件系统中；而是仅维护文件索引。"
  },
  {
    "id": 390,
    "start": 3752.49,
    "end": 3759.54,
    "en": "Based on the proofreading report, the Manager can send specific chapters back to the Translation Agent for revision.",
    "zh": "根据校对报告，管理器可以将特定章节发送回翻译智能体进行修订。"
  },
  {
    "id": 391,
    "start": 3759.54,
    "end": 3766.415,
    "en": "As a result, the Manager's context remains manageable even as the number of translated chapters grows.",
    "zh": "因此，即使翻译章节的数量增加，管理器的上下文仍然保持可控。"
  },
  {
    "id": 392,
    "start": 3766.415,
    "end": 3783.215,
    "en": "The key advantage is context isolation: the Glossary Agent sees only the content needed for term extraction, the Translation Agent sees only the current chapter and glossary, and the Proofreading Agent, while needing access to the full text, focuses only on consistency checks.",
    "zh": "关键优势是上下文隔离：术语提取代理仅看到用于术语提取的内容，翻译代理仅看到当前章节和术语表，校对代理虽然需要访问全文，但仅专注于一致性检查。"
  },
  {
    "id": 393,
    "start": 3783.215,
    "end": 3791.078,
    "en": "This keeps each Agent's context lean and focused, improving efficiency and reducing errors caused by information overload.",
    "zh": "这使每个代理的上下文保持简洁且专注，提高了效率，并减少了因信息过载导致的错误。"
  },
  {
    "id": 394,
    "start": 3791.078,
    "end": 3793.503,
    "en": "Experiment Requirements:",
    "zh": "实验要求："
  },
  {
    "id": 395,
    "start": 3793.503,
    "end": 3798.615,
    "en": "Choose a heavily illustrated technical book containing code as the source text",
    "zh": "选择一本包含大量插图和技术代码的书籍作为源文本"
  },
  {
    "id": 396,
    "start": 3798.615,
    "end": 3804.603,
    "en": "Implement four types of Agents: Manager, Glossary, Translation, Proofreading",
    "zh": "实现四种类型的代理：管理器、术语表、翻译和校对"
  },
  {
    "id": 397,
    "start": 3804.603,
    "end": 3811.503,
    "en": "Record each Agent's context usage to verify how effectively the manager pattern controls context growth",
    "zh": "记录每个代理的上下文使用情况，以验证管理器模式如何有效控制上下文增长"
  },
  {
    "id": 398,
    "start": 3811.503,
    "end": 3819.64,
    "en": "Compare a single Agent with the manager pattern in terms of translation quality, execution efficiency, and resource consumption",
    "zh": "在翻译质量、执行效率和资源消耗方面，将单个代理与管理器模式进行比较"
  },
  {
    "id": 399,
    "start": 3819.796,
    "end": 3825.383,
    "en": "As illustrated in Figure 10-5: Book Translation Agent Architecture.",
    "zh": "如图10-5所示：书籍翻译代理架构。"
  },
  {
    "id": 400,
    "start": 3825.333,
    "end": 3827.896,
    "en": "Parallel Coordination Pattern.",
    "zh": "并行协调模式。"
  },
  {
    "id": 401,
    "start": 3827.896,
    "end": 3833.121,
    "en": "As illustrated in Figure 10-6: Manager Parallel Coordination.",
    "zh": "如图10-6所示：管理器并行协调。"
  },
  {
    "id": 402,
    "start": 3833.121,
    "end": 3838.896,
    "en": "When multiple subtasks can run in parallel, the sequential pattern becomes inefficient.",
    "zh": "当多个子任务可以并行运行时，顺序模式会变得低效。"
  },
  {
    "id": 403,
    "start": 3838.896,
    "end": 3845.733,
    "en": "Parallel coordination allows multiple Agents to work simultaneously, significantly increasing throughput.",
    "zh": "并行协调允许多个代理同时工作，显著提高吞吐量。"
  },
  {
    "id": 404,
    "start": 3845.733,
    "end": 3856.796,
    "en": "The Manager Agent must plan the parallel tasks, monitor all running Agents in real time, coordinate their communication, and make system-wide decisions when Agents succeed or fail.",
    "zh": "管理器代理必须计划并行任务，实时监控所有运行中的代理，协调它们的通信，并在代理成功或失败时做出系统级决策。"
  },
  {
    "id": 405,
    "start": 3856.796,
    "end": 3870.596,
    "en": "This typically requires a message bus as infrastructure—think of it as a \"public bulletin board\" where Agents can publish messages and subscribe to the message types that interest them, enabling asynchronous, non-blocking communication.",
    "zh": "这通常需要一个消息总线作为基础设施——可以将其视为一个“公共公告板”，代理可以在上面发布消息，并订阅它们感兴趣的讯息类型，从而实现异步、非阻塞的通信。"
  },
  {
    "id": 406,
    "start": 3870.596,
    "end": 3878.708,
    "en": "Two common implementations, from simpler to more complex, are Redis Pub/Sub and message queues such as RabbitMQ.",
    "zh": "两种常见的实现方式，从简单到复杂，分别是 Redis Pub/Sub 和消息队列如 RabbitMQ。"
  },
  {
    "id": 407,
    "start": 3878.708,
    "end": 3887.433,
    "en": "Redis Pub/Sub is lightweight and delivers messages immediately, but it does not persist them, so a receiver that is offline will miss them.",
    "zh": "Redis Pub/Sub 轻量且能立即传递消息，但不会持久化消息，因此离线的接收者会错过它们。"
  },
  {
    "id": 408,
    "start": 3887.433,
    "end": 3894.946,
    "en": "RabbitMQ and similar systems persist messages to disk, preserving them while a receiver is temporarily offline.",
    "zh": "RabbitMQ 和类似系统会将消息持久化到磁盘，在接收者暂时离线时也能保留消息。"
  },
  {
    "id": 409,
    "start": 3894.946,
    "end": 3904.058,
    "en": "Messages typically use a JSON envelope containing the sender ID, target Agent (or a broadcast marker), message type, and payload.",
    "zh": "消息通常使用包含发送者 ID、目标智能体（或广播标记）、消息类型和内容的 JSON 封装。"
  },
  {
    "id": 410,
    "start": 3904.058,
    "end": 3908.383,
    "en": "Lingtai: A Productized Instance of the Manager Pattern.",
    "zh": "Lingtai：管理器模式的产品化实例。"
  },
  {
    "id": 411,
    "start": 3908.383,
    "end": 3917.071,
    "en": "Lingtai is a local, file-based home for long-lived Agents; its three roles are a complete realization of the concepts in this section:",
    "zh": "Lingtai 是一个本地的、基于文件的长期运行智能体的家园；它的三个角色是对本节概念的完整实现："
  },
  {
    "id": 412,
    "start": 3917.071,
    "end": 3927.558,
    "en": "The main agent is the persistent hub that converses with the user, holds the plan and the memory, and spawns work to the other roles—precisely the position of the Manager Agent;",
    "zh": "主智能体是持久化的中心，与用户对话，保存计划和记忆，并将工作分配给其他角色——正是管理器智能体的位置；"
  },
  {
    "id": 413,
    "start": 3927.558,
    "end": 3945.421,
    "en": "A daemon is a short-lived parallel worker spawned for one noisy but bounded task; it is discarded when done and carries only its conclusion back to the main agent, which is exactly the productization of \"a sub-Agent returns a structured summary rather than the full trajectory\" together with the parallel coordination form;",
    "zh": "守护进程是一个为一次嘈杂但有限的任务而生成的短期并行工作者；任务完成后会被丢弃，只将其结论返回给主智能体，这正好是“子智能体返回结构化摘要而非完整轨迹”的产品化实现，以及并行协调形式；"
  },
  {
    "id": 414,
    "start": 3945.421,
    "end": 3956.721,
    "en": "An avatar is a persistent, specialized teammate with its own memory, mailbox, and responsibilities, used for specialist divisions of labor worth preserving across many sessions.",
    "zh": "化身是一个持久化的、专业化的队友，拥有自己的记忆、邮箱和职责，用于值得在多个会话中保留的专业分工。"
  },
  {
    "id": 415,
    "start": 3956.721,
    "end": 3961.171,
    "en": "The rest of Lingtai's design also echoes earlier sections.",
    "zh": "Lingtai 的其余设计也呼应了前面的章节。"
  },
  {
    "id": 416,
    "start": 3961.171,
    "end": 3973.858,
    "en": "Knowledge lives in each agent's durable, private memory files, while skills are Markdown playbooks shared by all agents—the built-in system resources described in \"The File System from an Agent's Perspective.",
    "zh": "知识存储在每个智能体的持久化私有内存文件中，而技能则是所有智能体共享的 Markdown 操作手册——正如《从智能体视角看文件系统》中描述的内置系统资源。"
  },
  {
    "id": 417,
    "start": 3973.858,
    "end": 3986.946,
    "en": "When an agent's context window fills, it molts: it writes a careful summary, then starts with a fresh context while retaining that summary and its durable memory, following the context-compression approach from Chapter 2.",
    "zh": "当智能体的上下文窗口填满时，它会进行蜕皮：它会写下一个详细的摘要，然后以新的上下文开始，同时保留该摘要和持久化内存，遵循第 2 章中的上下文压缩方法。"
  },
  {
    "id": 418,
    "start": 3986.946,
    "end": 3996.458,
    "en": "The underlying model can be replaced without changing the agent because its identity, memory, and capabilities all live as plain files in the project directory.",
    "zh": "底层模型可以更换而无需更改智能体，因为其身份、记忆和能力都作为普通文件存储在项目目录中。"
  },
  {
    "id": 419,
    "start": 3996.458,
    "end": 3999.896,
    "en": "In this sense, the agent is its files.",
    "zh": "从这个意义上说，智能体就是它的文件。"
  },
  {
    "id": 420,
    "start": 3999.896,
    "end": 4009.208,
    "en": "This productizes the first two rows of Table 10-2: both program and memory reduce to files, so the process can be rebuilt at any time.",
    "zh": "这实现了表 10-2 的前两行：程序和记忆都简化为文件，因此过程可以在任何时候重建。"
  },
  {
    "id": 421,
    "start": 4009.208,
    "end": 4016.058,
    "en": "Experiment 10-3 advanced difficulty, three stars: : Autonomous Phone and Computer Agents",
    "zh": "实验10-3 高级难度，三颗星：自主手机和电脑智能体"
  },
  {
    "id": 422,
    "start": 4016.058,
    "end": 4022.958,
    "en": "Prerequisites: This experiment integrates the Computer Use and Voice Agent technologies from Chapter 6.",
    "zh": "前提条件：本实验整合了第6章中的电脑使用和语音智能体技术。"
  },
  {
    "id": 423,
    "start": 4022.958,
    "end": 4031.008,
    "en": "Scenario and architecture: The user supplies a registration or booking URL, but not all required personal fields.",
    "zh": "场景与架构：用户提供了注册或预订的网址，但未提供所有必要的个人信息字段。"
  },
  {
    "id": 424,
    "start": 4031.008,
    "end": 4039.846,
    "en": "The Computer Agent operates the browser and also acts as the orchestrator, invoking the Phone Agent as a tool without a separate Manager process.",
    "zh": "电脑智能体操作浏览器，并作为协调者，调用手机智能体作为工具，而无需单独的管理进程。"
  },
  {
    "id": 425,
    "start": 4039.846,
    "end": 4045.071,
    "en": "The Phone Agent handles ASR, LLM dialogue and TTS.",
    "zh": "手机智能体处理ASR、LLM对话和TTS。"
  },
  {
    "id": 426,
    "start": 4045.071,
    "end": 4053.221,
    "en": "They exchange structured messages (sender, receiver, type and payload) through point-to-point tools or a message bus.",
    "zh": "它们通过点对点工具或消息总线交换结构化消息（发送者、接收者、类型和负载）。"
  },
  {
    "id": 427,
    "start": 4053.221,
    "end": 4060.333,
    "en": "A local WebRTC audio page is sufficient; PSTN/E.164 is optional.",
    "zh": "一个本地WebRTC音频页面就足够；PSTN/E.164是可选的。"
  },
  {
    "id": 428,
    "start": 4060.492,
    "end": 4070.404,
    "en": "Two paths: First run a fixed-topology baseline with both Agents started in advance, then run the main autonomous path in which only the Computer Agent starts.",
    "zh": "两种路径：首先运行一个固定拓扑基线，提前启动两个智能体；然后运行主要的自主路径，在此路径中仅启动电脑智能体。"
  },
  {
    "id": 429,
    "start": 4070.354,
    "end": 4083.229,
    "en": "After inspecting the page and its context, it may autonomously call initiate_phone_call_agent(purpose, required_info); do not replace this decision with a field-count rule.",
    "zh": "在检查页面及其上下文后，它可能会自主调用initiate_phone_call_agent(purpose, required_info)；不要用字段计数规则替代此决策。"
  },
  {
    "id": 430,
    "start": 4083.229,
    "end": 4094.279,
    "en": "The spawned Phone Agent receives the task purpose, required fields and format constraints in an isolated context, and uses the same communication protocol as the baseline.",
    "zh": "生成的手机智能体在其隔离的上下文中接收任务目的、所需字段和格式约束，并使用与基线相同的通信协议。"
  },
  {
    "id": 431,
    "start": 4094.279,
    "end": 4106.292,
    "en": "Parallel closed loop: The Phone Agent asks, transcribes, validates and re-asks one field at a time while the Computer Agent screenshots, locates elements and fills the previous field.",
    "zh": "并行闭环：手机智能体一次询问、转录、验证并重新询问一个字段，而电脑智能体截图、定位元素并填写前一个字段。"
  },
  {
    "id": 432,
    "start": 4106.292,
    "end": 4116.392,
    "en": "Messages such as info_collected, fill_error, format_invalid and task_completed make the loop observable in both directions.",
    "zh": "诸如info_collected、fill_error、format_invalid和task_completed的消息使双向循环可观测。"
  },
  {
    "id": 433,
    "start": 4116.392,
    "end": 4123.267,
    "en": "The Phone Agent continues asking without waiting for each browser fill, so asking and filling overlap.",
    "zh": "手机智能体在不等待每个浏览器填写的情况下继续提问，因此提问和填写会重叠。"
  },
  {
    "id": 434,
    "start": 4123.267,
    "end": 4129.867,
    "en": "If retries are exhausted or a page error prevents further progress, the system pauses safely.",
    "zh": "如果重试耗尽或页面错误阻止进一步进展，系统会安全暂停。"
  },
  {
    "id": 435,
    "start": 4129.867,
    "end": 4135.379,
    "en": "After validation and explicit authorization, the Computer Agent submits the form.",
    "zh": "在验证和明确授权后，电脑智能体提交表单。"
  },
  {
    "id": 436,
    "start": 4135.379,
    "end": 4151.917,
    "en": "Requirements and evidence: Demonstrate autonomous launch, independent ReAct loops, bidirectional messaging, true overlap, field validation and re-asking, page-error feedback, timeouts, cancellation and cleanup of browser/audio resources.",
    "zh": "需求和证据：展示自主启动、独立的ReAct循环、双向消息传递、真正的重叠、现场验证和重新提问、页面错误反馈、超时、浏览器/音频资源的取消和清理。"
  },
  {
    "id": 437,
    "start": 4151.917,
    "end": 4163.829,
    "en": "Record the launch decision, message ordering, latency, success rate, token/resource use and all failure paths, and compare the fixed and autonomous modes using these measurements.",
    "zh": "记录启动决策、消息顺序、延迟、成功率、令牌/资源使用以及所有失败路径，并使用这些度量来比较固定模式和自主模式。"
  },
  {
    "id": 438,
    "start": 4163.829,
    "end": 4169.467,
    "en": "Require explicit consent for real voice and explicit authorization before submission.",
    "zh": "需要对真实语音进行明确同意，并在提交前获得明确授权。"
  },
  {
    "id": 439,
    "start": 4169.467,
    "end": 4175.254,
    "en": "As illustrated in Figure 10-7: Phone and Computer Dual Agent Architecture.",
    "zh": "如图10-7所示：电话和计算机双智能体架构。"
  },
  {
    "id": 440,
    "start": 4175.254,
    "end": 4183.517,
    "en": "Experiment 10-4 advanced difficulty, three stars: : Agent Collecting Information from Multiple Websites Simultaneously",
    "zh": "实验10-4 高级难度，三颗星：智能体同时从多个网站收集信息"
  },
  {
    "id": 441,
    "start": 4183.517,
    "end": 4190.829,
    "en": "Prerequisites: It is recommended that readers first review the event-driven and interrupt mechanisms from Chapter 6.",
    "zh": "前提条件：建议读者先复习第6章中的事件驱动和中断机制。"
  },
  {
    "id": 442,
    "start": 4190.829,
    "end": 4197.917,
    "en": "This experiment explores the application of multi-agent parallel execution in information collection scenarios.",
    "zh": "本实验探讨了多智能体并行执行在信息收集场景中的应用。"
  },
  {
    "id": 443,
    "start": 4197.917,
    "end": 4213.879,
    "en": "Unlike Experiment 10-3, which focuses on collaboration between two heterogeneous Agents, this experiment focuses on parallel search by multiple homogeneous Agents and how to achieve efficient task completion and resource optimization through central coordination.",
    "zh": "与实验10-3不同，该实验关注的是两个异构智能体之间的协作，本实验则关注多个同构智能体的并行搜索，以及如何通过中心协调实现高效的任务完成和资源优化。"
  },
  {
    "id": 444,
    "start": 4213.879,
    "end": 4223.967,
    "en": "Problem: Given faculty-directory websites for several colleges within a university, search each site for a specified faculty member (e.g., \"Zhang Wei\").",
    "zh": "问题：给定大学内几所学院的教职目录网站，每个网站搜索指定的教职人员（例如“张伟”）。“},{"
  },
  {
    "id": 445,
    "start": 4223.967,
    "end": 4230.654,
    "en": "If found, return the person's college, position, research area, and other relevant information.",
    "zh": "如果找到，返回该人的学院、职位、研究领域和其他相关信息。"
  },
  {
    "id": 446,
    "start": 4230.654,
    "end": 4232.592,
    "en": "Core Challenges:",
    "zh": "核心挑战："
  },
  {
    "id": 447,
    "start": 4232.592,
    "end": 4240.904,
    "en": "Parallel Launch: The Manager Agent dynamically creates 10 Computer Use Agent instances, one for each college website.",
    "zh": "并行启动：管理器智能体动态创建10个计算机使用智能体实例，每个学院网站对应一个。"
  },
  {
    "id": 448,
    "start": 4240.904,
    "end": 4248.454,
    "en": "Each instance should be an independent process or thread with its own browser session, capable of running without blocking the others.",
    "zh": "每个实例应为独立的进程或线程，拥有自己的浏览器会话，能够运行而不阻塞其他实例。"
  },
  {
    "id": 449,
    "start": 4248.454,
    "end": 4257.204,
    "en": "Parameters passed at launch include the target website URL, faculty name to search for, and task identifier for message routing.",
    "zh": "启动时传递的参数包括目标网站URL、要搜索的教职员工姓名以及用于消息路由的任务标识符。"
  },
  {
    "id": 450,
    "start": 4257.204,
    "end": 4270.292,
    "en": "Real-time Monitoring: Each Agent periodically sends status updates during execution (\"Loading website,\" \"Parsing faculty directory,\" \"Target not found; task complete,\" \"Match found; details below\").",
    "zh": "实时监控：每个智能体在执行过程中定期发送状态更新（“加载网站”，“解析教职员工目录”，“未找到目标；任务完成”，“找到匹配项；详情如下”）。"
  },
  {
    "id": 451,
    "start": 4270.292,
    "end": 4281.292,
    "en": "The Manager Agent receives these updates through a message bus, maintains a task-status table, and tracks in real time which Agents are running, have completed, or are in an error state.",
    "zh": "管理器智能体通过消息总线接收这些更新，维护一个任务状态表，并实时跟踪哪些智能体正在运行、已完成或处于错误状态。"
  },
  {
    "id": 452,
    "start": 4281.292,
    "end": 4287.904,
    "en": "Cascading Termination: Suppose the Agent assigned to the Computer Science college finds the faculty member.",
    "zh": "级联终止：假设分配给计算机科学学院的智能体找到了教职员工。"
  },
  {
    "id": 453,
    "start": 4287.904,
    "end": 4305.979,
    "en": "It sends {\"type\": \"target_found\", \"agent_id\": \"agent_3\", \"data\": {...}} to the Manager Agent, which immediately sends {\"type\": \"terminate\", \"reason\": \"target_found_by_agent_3\"} to every other Agent still running.",
    "zh": "它向管理器智能体发送{ \"type\": \"target_found\", \"agent_id\": \"agent_3\", \"data\": {...} }，管理器智能体随即向所有仍在运行的其他智能体发送{ \"type\": \"terminate\", \"reason\": \"target_found_by_agent_3\" }。"
  },
  {
    "id": 454,
    "start": 4305.979,
    "end": 4314.454,
    "en": "Each Agent must be able to receive this message at any time, stop gracefully, release its resources, and acknowledge termination.",
    "zh": "每个智能体必须能够在任何时候接收此消息，优雅地停止，释放其资源，并确认终止。"
  },
  {
    "id": 455,
    "start": 4314.454,
    "end": 4320.992,
    "en": "The Manager Agent waits for all acknowledgments, or until a timeout, before aggregating the results.",
    "zh": "管理器智能体在聚合结果前会等待所有确认，或者直到超时。"
  },
  {
    "id": 456,
    "start": 4320.992,
    "end": 4324.842,
    "en": "The implementation must also handle race conditions.",
    "zh": "实现还必须处理竞态条件。"
  },
  {
    "id": 457,
    "start": 4324.996,
    "end": 4328.521,
    "en": "Concept Supplement: What is a Race Condition?",
    "zh": "概念补充：什么是竞态条件？"
  },
  {
    "id": 458,
    "start": 4328.471,
    "end": 4337.083,
    "en": "Suppose Agent A and Agent B find the target faculty member within the same millisecond and both report \"I found it!\" to the Manager Agent.",
    "zh": "假设智能体A和智能体B在同一毫秒内找到目标教职员工，并都向管理器智能体报告“我找到了！”"
  },
  {
    "id": 459,
    "start": 4337.083,
    "end": 4347.321,
    "en": "If the Manager handles this poorly, it might begin aggregating results after receiving Agent A's report, then start a second aggregation when Agent B's report arrives.",
    "zh": "如果管理器处理不当，它可能在收到智能体A的报告后开始聚合结果，然后在智能体B的报告到达时开始第二次聚合。"
  },
  {
    "id": 460,
    "start": 4347.321,
    "end": 4351.446,
    "en": "This could produce duplicate results or contradictory states.",
    "zh": "这可能导致重复结果或矛盾状态。"
  },
  {
    "id": 461,
    "start": 4351.446,
    "end": 4359.571,
    "en": "The usual solution is a lock: the first report locks the state, and later reports are recognized as duplicates and ignored.",
    "zh": "通常的解决方案是使用锁：第一个报告锁定状态，后续报告被识别为重复并被忽略。"
  },
  {
    "id": 462,
    "start": 4359.571,
    "end": 4371.846,
    "en": "Failure Handling: Various exceptions can occur during operation: a college website might be inaccessible because of a network error or outage, or its structure might prevent the Agent from parsing it correctly.",
    "zh": "故障处理：操作过程中可能会出现各种异常：由于网络错误或中断，学院网站可能无法访问，或者其结构可能阻止智能体正确解析它。"
  },
  {
    "id": 463,
    "start": 4371.846,
    "end": 4376.346,
    "en": "All Agents may also complete their searches without finding the target.",
    "zh": "所有智能体也可能完成搜索但未找到目标。"
  },
  {
    "id": 464,
    "start": 4376.346,
    "end": 4386.383,
    "en": "The Manager Agent should set a timeout for each Agent (e.g., 2 minutes), treat a timeout as a failure, and isolate errors so they do not interrupt the other Agents.",
    "zh": "管理器智能体应为每个智能体设置超时时间（例如2分钟），将超时视为失败，并隔离错误以防止干扰其他智能体。"
  },
  {
    "id": 465,
    "start": 4386.383,
    "end": 4397.021,
    "en": "After all Agents finish, return the information if any Agent found the target; otherwise, report \"Target faculty member not found\" and summarize any failures.",
    "zh": "所有智能体完成后，如果任何智能体找到了目标，则返回信息；否则，报告“未找到目标教职员工”，并总结任何失败情况。"
  },
  {
    "id": 466,
    "start": 4397.021,
    "end": 4399.446,
    "en": "Experiment Requirements:",
    "zh": "实验要求："
  },
  {
    "id": 467,
    "start": 4399.446,
    "end": 4404.996,
    "en": "Implement a Manager Agent capable of dynamically launching multiple parallel Agents",
    "zh": "实现一个能够动态启动多个并行智能体的管理器智能体"
  },
  {
    "id": 468,
    "start": 4404.996,
    "end": 4410.158,
    "en": "Implement a Computer Use Agent based on open-source projects like browser-use",
    "zh": "基于开源项目如browser-use实现一个计算机使用智能体"
  },
  {
    "id": 469,
    "start": 4410.158,
    "end": 4417.058,
    "en": "Implement a message bus supporting bidirectional communication between the Manager Agent and multiple child Agents",
    "zh": "实现一个支持管理器智能体与多个子智能体之间双向通信的消息总线"
  },
  {
    "id": 470,
    "start": 4417.058,
    "end": 4424.996,
    "en": "Implement a cascading termination mechanism upon success, ensuring all other Agents stop quickly once the target is found",
    "zh": "在成功时实现级联终止机制，确保一旦找到目标，所有其他智能体快速停止"
  },
  {
    "id": 471,
    "start": 4424.996,
    "end": 4432.983,
    "en": "Handle various exception scenarios (website access failure, parsing errors, target not found by any Agent)",
    "zh": "处理各种异常场景（网站访问失败、解析错误、任何智能体均未找到目标）"
  },
  {
    "id": 472,
    "start": 4432.983,
    "end": 4439.621,
    "en": "Measure and compare serial and parallel execution times to quantify the speedup from parallelization",
    "zh": "测量并比较串行和并行执行时间，以量化并行化的速度提升"
  },
  {
    "id": 473,
    "start": 4439.621,
    "end": 4444.971,
    "en": "As illustrated in Figure 10-8: Parallel Web Scraping Architecture.",
    "zh": "如图10-8所示：并行网络爬取架构。"
  },
  {
    "id": 474,
    "start": 4444.971,
    "end": 4448.508,
    "en": "The Manager Agent generates the Agent workflow.",
    "zh": "管理器智能体生成智能体工作流程。"
  },
  {
    "id": 475,
    "start": 4448.508,
    "end": 4459.521,
    "en": "In the two preceding forms the Manager Agent stays inside the loop: every subtask it dispatches demands one more decision from the model, and the context grows with the number of calls.",
    "zh": "在前两种形式中，管理器智能体始终处于循环中：它分配的每个子任务都需要模型做出更多决策，且上下文随着调用次数增加而增长。"
  },
  {
    "id": 476,
    "start": 4459.521,
    "end": 4468.096,
    "en": "Another approach is to have the Manager first write the Agent workflow as a piece of code, and then hand it to a deterministic runtime to execute.",
    "zh": "另一种方法是让管理器首先将智能体工作流程编写为一段代码，然后将其交给确定性运行时执行。"
  },
  {
    "id": 477,
    "start": 4468.096,
    "end": 4477.008,
    "en": "The Workflow tool built into Claude Code is one such instance: it gives the Agent a few primitives—agent(), parallel(), and pipeline().",
    "zh": "Claude Code内置的工作流程工具就是这样一个实例：它为智能体提供了一些基本操作——agent()、parallel() 和 pipeline()。"
  },
  {
    "id": 478,
    "start": 4477.008,
    "end": 4485.783,
    "en": "Each agent() is a sub-agent with its own context, and a schema stipulates that it return only structured conclusions rather than a full trajectory.",
    "zh": "每个agent() 是一个具有自己上下文的子智能体，且有一个规范规定它只能返回结构化结论，而不是完整的轨迹。"
  },
  {
    "id": 479,
    "start": 4485.783,
    "end": 4497.358,
    "en": "For example, to verify seven groups of facts for a technical manuscript, each group is first researched, then verified item by item independently, and finally summarized together:",
    "zh": "例如，为了验证技术手稿中的七组事实，每组首先被独立研究，然后逐一验证，最后共同汇总："
  },
  {
    "id": 480,
    "start": 4497.358,
    "end": 4502.096,
    "en": "Refer to the companion repository for the complete code implementation.",
    "zh": "参见配套仓库获取完整代码实现。"
  },
  {
    "id": 481,
    "start": 4502.096,
    "end": 4504.371,
    "en": "Decentralized Pattern.",
    "zh": "去中心化模式。"
  },
  {
    "id": 482,
    "start": 4504.54,
    "end": 4508.94,
    "en": "Given the manager pattern, why do we still need a decentralized one?",
    "zh": "在管理器模式下，为什么还需要去中心化模式？"
  },
  {
    "id": 483,
    "start": 4508.89,
    "end": 4527.227,
    "en": "The motivation for removing the central controller is chiefly to emulate how human organizations work: let several roles of equal standing divide the labor and check one another, each examining the problem from its own professional angle and deciding for itself whom to talk to, rather than funnelling every judgment to a single Manager.",
    "zh": "去除中央控制器的主要动机是模仿人类组织的工作方式：让多个地位平等的角色分工协作并互相检查，每个角色从自己的专业角度审视问题并自行决定与谁交流，而不是将所有判断都集中到一个经理身上。"
  },
  {
    "id": 484,
    "start": 4527.227,
    "end": 4546.352,
    "en": "In the decentralized pattern, each Agent decides on its own professional judgment when to reach out to another Agent—it may be handing off a task (\"my part is done, over to you\"), asking for feedback (\"is this design technically feasible?\"), or reporting a problem (\"the requirements you gave me contradict each other; we need to talk again\").",
    "zh": "在去中心化模式中，每个智能体根据自身的专业判断决定何时与其他智能体联系——可能是移交任务（“我的部分完成了，交接给你”）、请求反馈（“这个设计技术上可行吗？”）或报告问题（“你给我的需求相互矛盾；我们需要再讨论一次”）。"
  },
  {
    "id": 485,
    "start": 4546.352,
    "end": 4550.115,
    "en": "Decentralization also helps with Agent stability.",
    "zh": "去中心化也有助于智能体的稳定性。"
  },
  {
    "id": 486,
    "start": 4550.115,
    "end": 4560.49,
    "en": "Because of model or API-service failures, some Agents may stop responding, fail their tool calls, or get stuck in an infinite loop of incorrect tool calls.",
    "zh": "由于模型或API服务故障，某些智能体可能停止响应、工具调用失败，或陷入错误工具调用的无限循环。"
  },
  {
    "id": 487,
    "start": 4560.49,
    "end": 4567.302,
    "en": "In the manager pattern, a crash of the manager Agent often becomes the system's largest single point of failure.",
    "zh": "在管理器模式中，管理器智能体的崩溃往往成为系统的最大单点故障。"
  },
  {
    "id": 488,
    "start": 4567.302,
    "end": 4570.34,
    "en": "Decentralization helps mitigate that.",
    "zh": "去中心化可以缓解这种情况。"
  },
  {
    "id": 489,
    "start": 4570.34,
    "end": 4582.94,
    "en": "The microservices world calls the manager and decentralized patterns orchestration and choreography respectively: in the first a conductor schedules everyone; in the second each dancer judges for themselves when to enter.",
    "zh": "微服务世界分别称管理器模式和去中心化模式为编排（orchestration）和舞蹈编排（choreography）：在前者中，由指挥者安排所有人；在后者中，每个舞者自己判断何时入场。"
  },
  {
    "id": 490,
    "start": 4582.94,
    "end": 4603.39,
    "en": "The three cases below form a progression: MetaGPT's control flow is in fact a fixed pipeline (pseudo-decentralization, decoupled only in its communication mechanism), AutoGen's group chat is a hybrid of shared conversation history plus centralized scheduling, and only with OpenAI Swarm does the control flow become genuinely peer-to-peer.",
    "zh": "下面三个案例形成一个渐进过程：MetaGPT的控制流程实际上是一个固定流水线（伪去中心化，仅在通信机制上解耦），AutoGen的群聊是共享对话历史加上集中调度的混合模式，而只有在OpenAI Swarm中，控制流程才真正变为对等的。"
  },
  {
    "id": 491,
    "start": 4603.39,
    "end": 4608.04,
    "en": "MetaGPT: SOP-Driven Software Company Simulation.",
    "zh": "MetaGPT：SOP驱动的软件公司模拟。"
  },
  {
    "id": 492,
    "start": 4608.04,
    "end": 4614.415,
    "en": "As illustrated in Figure 10-9: MetaGPT Multi-Agent Collaboration Network.",
    "zh": "如图10-9所示：MetaGPT多智能体协作网络。"
  },
  {
    "id": 493,
    "start": 4614.415,
    "end": 4638.715,
    "en": "MetaGPT's core insight is that the Standard Operating Procedures (SOPs) accumulated by human software companies are themselves a repeatedly validated collaboration protocol—encode the SOP into a multi-Agent system, have each role produce standardized deliverables the way a specialized trade does on an assembly line, and those deliverables naturally constitute the communication interface between roles.",
    "zh": "MetaGPT的核心洞察是，人类软件公司积累的标准操作程序（SOP）本身就是一种反复验证的协作协议——将SOP编码到多智能体系统中，让每个角色像专业工种在装配线上一样生成标准化交付物，这些交付物自然构成角色之间的通信接口。"
  },
  {
    "id": 494,
    "start": 4638.715,
    "end": 4649.44,
    "en": "In MetaGPT, roles work in a fixed sequence (Product Manager → Architect → Project Manager → Engineer → QA), and each role emits a structured \"handoff package\"",
    "zh": "在MetaGPT中，角色按照固定顺序工作（产品经理 → 架构师 → 项目经理 → 程序员 → 质量保证），每个角色生成结构化的“交接包”"
  },
  {
    "id": 495,
    "start": 4649.44,
    "end": 4662.315,
    "en": "Product Manager Agent: Receives the requirement description and generates a structured PRD (product requirements document, with a feature list, user stories, acceptance criteria, and prioritization)",
    "zh": "产品经理智能体：接收需求描述并生成结构化的PRD（产品需求文档，包含功能列表、用户故事、验收标准和优先级）"
  },
  {
    "id": 496,
    "start": 4662.315,
    "end": 4675.427,
    "en": "Architect Agent: Reads the PRD, makes the architectural decisions (technology-stack choice, module decomposition, interface definitions, data-model design), and emits the design document",
    "zh": "架构智能体：阅读PRD，做出架构决策（技术栈选择、模块分解、接口定义、数据模型设计），并生成设计文档"
  },
  {
    "id": 497,
    "start": 4675.427,
    "end": 4688.04,
    "en": "Project Manager Agent: Reads the architecture, breaks the system into a concrete task list and file-level assignments, works out the dependency order among modules, and distributes tasks to the engineers",
    "zh": "项目经理智能体：阅读架构，将系统分解为具体的任务列表和文件级分配，确定模块之间的依赖顺序，并将任务分配给工程师"
  },
  {
    "id": 498,
    "start": 4688.04,
    "end": 4696.99,
    "en": "Engineer Agents: Read the design document, implement the modules they own, and produce code; multiple instances can work in parallel",
    "zh": "工程师智能体：阅读设计文档，实现所负责的模块，并生成代码；多个实例可以并行工作"
  },
  {
    "id": 499,
    "start": 4696.99,
    "end": 4706.852,
    "en": "QA Engineer Agent: Reads the code and the PRD, generates test cases, runs the tests, records bugs, and emits the test report",
    "zh": "质量保证工程师智能体：阅读代码和PRD，生成测试用例，运行测试，记录缺陷，并生成测试报告"
  },
  {
    "id": 500,
    "start": 4706.852,
    "end": 4729.927,
    "en": "In practice an effective \"handoff package\" usually has three parts: the task description (what the recipient must do and what the acceptance criteria are), the confirmed facts and constraints (user preferences, business rules, decisions settled in earlier stages), and references to structured artifacts (file paths rather than file contents, which the recipient reads as needed).",
    "zh": "实际上一个有效的“交接包”通常包含三部分：任务描述（接收者需要做什么以及验收标准是什么）、确认的事实和约束条件（用户偏好、业务规则、前期阶段已确定的决策），以及对结构化产物的引用（文件路径而非文件内容，由接收者按需阅读）"
  },
  {
    "id": 501,
    "start": 4729.927,
    "end": 4739.465,
    "en": "No Agent needs to understand another Agent's \"thought process\"; it only needs to understand the format and semantics of the handoff package and the artifacts.",
    "zh": "没有任何智能体需要理解其他智能体的“思考过程”；它只需要理解交接包和产物的格式与语义即可"
  },
  {
    "id": 502,
    "start": 4739.62,
    "end": 4749.257,
    "en": "MetaGPT's true contribution to decentralized communication lies in its information-passing mechanism: a shared message pool plus per-role subscription.",
    "zh": "MetaGPT在去中心化通信方面的真正贡献在于其信息传递机制：一个共享的消息池加上按角色订阅"
  },
  {
    "id": 503,
    "start": 4749.207,
    "end": 4762.845,
    "en": "Each role publishes structured messages into a pool visible to all roles, and the other roles, according to their own subscription configuration, take only the messages relevant to their responsibilities—rather than relaying point to point.",
    "zh": "每个角色将结构化消息发布到所有角色可见的池中，其他角色根据自己的订阅配置，只获取与其职责相关的消息——而不是点对点传递"
  },
  {
    "id": 504,
    "start": 4762.845,
    "end": 4773.307,
    "en": "The publisher does not need to know who will consume its output, and adding a role only requires declaring which message types it subscribes to, without touching any existing role.",
    "zh": "发布者不需要知道谁会消费其输出，添加一个角色只需声明它订阅哪些消息类型，而无需接触任何现有角色"
  },
  {
    "id": 505,
    "start": 4773.307,
    "end": 4784.37,
    "en": "That yields real decoupling: replace the Product Manager with a stronger model, and as long as the PRD it publishes still meets the specification, no other Agent needs to change.",
    "zh": "这实现了真正的解耦：用更强的模型替换产品经理，只要它发布的PRD仍然符合规范，其他任何智能体都不需要更改"
  },
  {
    "id": 506,
    "start": 4784.37,
    "end": 4798.045,
    "en": "It should be said plainly that MetaGPT is not decentralized in terms of control flow—the role sequence is fixed in advance by the SOP, and the whole is closer to a pipeline (in the language of Chapter 1, a workflow).",
    "zh": "应该明确说明的是，MetaGPT在控制流方面并不是去中心化的——角色顺序由SOP预先固定，整个系统更接近于流水线（在第1章的语言中，即工作流）"
  },
  {
    "id": 507,
    "start": 4798.045,
    "end": 4808.082,
    "en": "It is discussed in this section because the message-pool-plus-subscription communication mechanism demonstrates the most crucial design element of decentralized systems: decoupling.",
    "zh": "本节讨论它是因为消息池加订阅的通信机制展示了去中心化系统最重要的设计要素：解耦"
  },
  {
    "id": 508,
    "start": 4808.082,
    "end": 4825.47,
    "en": "As for multidirectional dynamic feedback such as \"QA goes straight to the Product Manager to clarify a requirement\" or \"the Engineer discusses alternatives with the Architect,\" that is a natural extension one can imagine on top of this architecture; the original MetaGPT does not implement it.",
    "zh": "至于多向动态反馈，例如“QA直接向产品经理澄清需求”或“工程师与架构师讨论替代方案”，这是在此架构之上的自然扩展，原始的MetaGPT并未实现"
  },
  {
    "id": 509,
    "start": 4825.47,
    "end": 4827.707,
    "en": "AutoGen Group Chat.",
    "zh": "AutoGen群聊"
  },
  {
    "id": 510,
    "start": 4827.707,
    "end": 4837.307,
    "en": "AutoGen's group chat lets several Agents take part in a single conversation: each round, a \"speaker selector\" decides which Agent speaks next.",
    "zh": "AutoGen的群聊让多个智能体参与同一场对话：每一轮，一个“发言人选择器”决定下一个发言的智能体"
  },
  {
    "id": 511,
    "start": 4837.307,
    "end": 4848.57,
    "en": "The selector may be a simple round-robin rule, or an LLM that judges from the current conversation who is best placed to pick up the thread; any Agent's utterance is visible to all participants.",
    "zh": "选择器可能是一个简单的轮询规则，或者是一个从当前对话中判断谁最适合接续对话的LLM；任何智能体的发言都会对所有参与者可见。"
  },
  {
    "id": 512,
    "start": 4848.57,
    "end": 4859.432,
    "en": "It is not a fully decentralized system: the choice of speaker is adjudicated centrally by a GroupChatManager, and \"whose turn it is to speak\" is itself a control-flow decision.",
    "zh": "这不是一个完全去中心化的系统：发言者的选择由GroupChatManager集中裁定，'谁该发言'本身就是一个控制流决策。"
  },
  {
    "id": 513,
    "start": 4859.432,
    "end": 4872.595,
    "en": "It is a hybrid of \"shared conversation history plus centralized scheduling\": all Agents see the same public record, but each keeps its own system prompt and tool set, while scheduling authority is concentrated in the selector.",
    "zh": "它是一种\"共享对话历史加上集中调度\"的混合模式：所有智能体看到相同的公共记录，但每个智能体都保留自己的系统提示和工具集，而调度权集中在选择器上。"
  },
  {
    "id": 514,
    "start": 4872.595,
    "end": 4874.682,
    "en": "OpenAI Swarm.",
    "zh": "OpenAI Swarm。"
  },
  {
    "id": 515,
    "start": 4874.682,
    "end": 4887.507,
    "en": "OpenAI Swarm is the representative case of control flow that truly achieves peer decentralization: each Agent is equipped with several handoff options and can transfer control at any moment to any other Agent in the network.",
    "zh": "OpenAI Swarm是真正实现对等去中心化的控制流代表案例：每个智能体都配备多个交接选项，并可以在任何时候将控制权转移到网络中的任何其他智能体。"
  },
  {
    "id": 516,
    "start": 4887.507,
    "end": 4896.982,
    "en": "There is no central scheduler; control passes among peer Agents like a baton, and routing decisions are entirely distributed into each Agent's own judgment.",
    "zh": "没有中央调度器；控制权像接力棒一样在对等智能体之间传递，路由决策完全分散到每个智能体自身的判断中。"
  },
  {
    "id": 517,
    "start": 4896.982,
    "end": 4908.895,
    "en": "Unlike multi-Agent collaboration with shared context, a handoff should transmit only an explicit task package and artifact references, and should not expose the full private trajectory by default.",
    "zh": "与共享上下文的多智能体协作不同，交接应仅传输显式的任务包和工件引用，而不默认暴露完整的私有轨迹。"
  },
  {
    "id": 518,
    "start": 4908.895,
    "end": 4920.257,
    "en": "The risk of peer handoff is cycling: A hands off to B and B hands back to A, and the task spins in the loop; hence protective mechanisms such as an upper bound on the number of handoffs.",
    "zh": "对等交接的风险是循环：A将任务交给B，而B又交回给A，任务在循环中不断重复；因此需要保护机制，例如对交接次数设置上限。"
  },
  {
    "id": 519,
    "start": 4920.257,
    "end": 4925.145,
    "en": "The minimal protocol for a decentralized handoff can be expressed as:",
    "zh": "去中心化交接的最小协议可以表示为："
  },
  {
    "id": 520,
    "start": 4925.145,
    "end": 4929.882,
    "en": "Refer to the companion repository for the complete code implementation.",
    "zh": "请参见配套仓库获取完整的代码实现。"
  },
  {
    "id": 521,
    "start": 4929.882,
    "end": 4946.282,
    "en": "This turns \"context isolation\" into an inspectable interface: the recipient reads the task package and the references and gathers evidence as needed; the budget, the visit chain, and cycle detection are retained by the runtime and cannot be deleted by any single Agent.",
    "zh": "这将\"上下文隔离\"转化为可检查的接口：接收方读取任务包和引用，并根据需要收集证据；预算、访问链和循环检测由运行时保留，任何单个智能体都不能删除。"
  },
  {
    "id": 522,
    "start": 4946.452,
    "end": 4954.702,
    "en": "Since 2025, \"Agent Swarm\" has become a buzzword across vendors, but it does not correspond to a single architecture.",
    "zh": "自2025年以来，\"智能体群\"已成为各厂商的热门术语，但它并不对应单一架构。"
  },
  {
    "id": 523,
    "start": 4954.652,
    "end": 4958.352,
    "en": "Industry usage falls into roughly two kinds.",
    "zh": "行业使用大致分为两种类型。"
  },
  {
    "id": 524,
    "start": 4958.352,
    "end": 4970.739,
    "en": "First, the OpenAI Swarm-style handoff network (LangGraph's swarm library and the handoff orchestration in Microsoft Agent Framework belong here too), which is the decentralized pattern of this section.",
    "zh": "第一种是OpenAI Swarm风格的交接网络（LangGraph的swarm库以及微软智能体框架中的交接编排也属于此类），这是本节的去中心化模式。"
  },
  {
    "id": 525,
    "start": 4970.739,
    "end": 4999.377,
    "en": "Second, in several mainstream commercial products the Agent Swarm is a manager pattern taken to scale: the Agent Swarm introduced with Kimi K2.5 has a main Agent dynamically create hundreds of sub-Agents to run in parallel, and trains the orchestration decisions of \"when to split and into how many\" directly into the model through parallel-Agent reinforcement learning; K3 continued this as a separate model tier and open-sourced the accompanying parallel-Agent training sandbox AgentEnv.",
    "zh": "第二种是在一些主流商业产品中，智能体群是被扩展的管理器模式：Kimi K2.5引入的智能体群有一个主智能体动态创建数百个子智能体并行运行，并通过并行智能体强化学习直接将\"何时拆分及拆分为多少\"的编排决策训练进模型；K3继续作为独立模型层级，并开源了配套的并行智能体训练沙盒AgentEnv。"
  },
  {
    "id": 526,
    "start": 4999.377,
    "end": 5006.939,
    "en": "Anthropic's multi-Agent research system and Manus's Wide Research both belong to the orchestrator-worker star topology.",
    "zh": "Anthropic的多智能体研究系统和Manus的广泛研究都属于编排者-工作者星型拓扑结构。"
  },
  {
    "id": 527,
    "start": 5006.939,
    "end": 5016.739,
    "en": "We hope that after reading this book you will see the substance behind the concepts and analyze the actual structure of different multi-Agent systems rather than being misled by names.",
    "zh": "我们希望在阅读完本书后，您能看透概念背后的实质，并分析不同多智能体系统的实际结构，而不是被名称所误导。"
  },
  {
    "id": 528,
    "start": 5016.739,
    "end": 5019.927,
    "en": "Peer Agent Instances on the Same Machine.",
    "zh": "同一台机器上的对等智能体实例。"
  },
  {
    "id": 529,
    "start": 5019.927,
    "end": 5024.939,
    "en": "The Agents in all three systems above collaborate on one and the same thing.",
    "zh": "上述三个系统中的智能体都在共同做一件事。"
  },
  {
    "id": 530,
    "start": 5024.939,
    "end": 5037.014,
    "en": "There is another kind of decentralization in which each goes its own way: every Agent has its own task, and the communication between them is not for dividing labor but for coordinating the use of shared resources.",
    "zh": "还有一种去中心化的形式是各自走自己的路：每个智能体都有自己的任务，它们之间的通信不是为了分工，而是为了协调共享资源的使用。"
  },
  {
    "id": 531,
    "start": 5037.014,
    "end": 5058.164,
    "en": "Claude Code already supports multiple Agents on the same machine discovering one another (this is exactly what list_agents in Chapter 4 is for) and messaging one another: two Agents editing the same set of files negotiate how to resolve the conflict, and when the machine has only one GPU while both instances want to run training, they coordinate its use.",
    "zh": "Claude Code已经支持同一台机器上的多个智能体相互发现（这正是第4章中list_agents的功能）并互相通信：两个智能体编辑同一组文件时会协商如何解决冲突，当机器只有一块GPU而两个实例都想运行训练时，它们会协调使用这块GPU。"
  },
  {
    "id": 532,
    "start": 5058.164,
    "end": 5064.877,
    "en": "The further evolution of the decentralized pattern is the Agent society, introduced at the end of this chapter.",
    "zh": "去中心化模式的进一步演化是智能体社会，将在本章结尾介绍。"
  },
  {
    "id": 533,
    "start": 5064.877,
    "end": 5069.439,
    "en": "Cross-Organization Collaboration: The A2A Protocol.",
    "zh": "跨组织协作：A2A协议。"
  },
  {
    "id": 534,
    "start": 5069.439,
    "end": 5075.814,
    "en": "All the systems above assume that all Agents are developed by the same team and run within the same system.",
    "zh": "以上所有系统都假设所有智能体均由同一团队开发并在同一系统内运行。"
  },
  {
    "id": 535,
    "start": 5075.814,
    "end": 5084.589,
    "en": "In this case, the three communication mechanisms—parameter passing, shared files, and message bus—are sufficient.",
    "zh": "在这种情况下，三种通信机制——参数传递、共享文件和消息总线——已经足够。"
  },
  {
    "id": 536,
    "start": 5084.589,
    "end": 5095.202,
    "en": "However, when collaboration crosses organizational boundaries—your Agent needs to call another company's Agent—a standardized interoperability protocol is required.",
    "zh": "然而，当协作跨越组织边界——你的智能体需要调用另一家公司的智能体——就需要一个标准化的互操作协议。"
  },
  {
    "id": 537,
    "start": 5095.202,
    "end": 5109.077,
    "en": "The world of processes followed the same evolution: IPC only governs a single machine, and once you step across the machine boundary you must rely on standard protocols like TCP/IP and service discovery like DNS.",
    "zh": "进程的世界也经历了同样的演变：IPC仅适用于单台机器，一旦跨越机器边界，就必须依赖像TCP/IP这样的标准协议以及像DNS这样的服务发现机制。"
  },
  {
    "id": 538,
    "start": 5109.077,
    "end": 5113.727,
    "en": "A2A is to Agents what network protocols are to processes.",
    "zh": "A2A是智能体领域的网络协议。"
  },
  {
    "id": 539,
    "start": 5113.727,
    "end": 5125.402,
    "en": "The A2A (Agent2Agent) protocol released by Google in 2025 (later donated to the Linux Foundation for stewardship) was designed precisely for this purpose.",
    "zh": "Google于2025年发布的A2A（Agent2Agent）协议（后来捐赠给Linux基金会进行管理）正是为此设计的。"
  },
  {
    "id": 540,
    "start": 5125.402,
    "end": 5127.939,
    "en": "It has three core elements:",
    "zh": "它有三个核心要素："
  },
  {
    "id": 541,
    "start": 5127.939,
    "end": 5146.827,
    "en": "Agent Card: A metadata document describing an Agent's capabilities (published at a designated public address), declaring what the Agent can do, which input/output modalities it supports, and how to authenticate with it—essentially an Agent's \"business card\" that solves cross-organizational capability discovery.",
    "zh": "智能体卡片：描述智能体能力的元数据文档（发布于指定的公共地址），声明该智能体可以执行什么操作，支持哪些输入/输出模态，并说明如何与其进行身份验证——本质上是智能体的“名片”，解决了跨组织的能力发现问题。"
  },
  {
    "id": 542,
    "start": 5146.827,
    "end": 5161.877,
    "en": "Task Lifecycle Management: A2A models collaboration units as Tasks with a defined state machine (submitted, in-progress, needs-input, completed, failed), natively supporting long-running tasks and streaming progress updates.",
    "zh": "任务生命周期管理：A2A模型将协作单元建模为具有定义状态机（已提交、进行中、需要输入、已完成、失败）的任务，原生支持长时间运行的任务和流式进度更新。"
  },
  {
    "id": 543,
    "start": 5161.877,
    "end": 5179.614,
    "en": "Opaque Collaboration: Agents exchange only tasks and artifacts, without exposing internal prompts, reasoning processes, or tool implementations—consistent with this chapter's principle of \"not sharing context\" and a necessary security property for cross-organizational collaboration.",
    "zh": "不透明协作：智能体仅交换任务和工件，而不暴露内部提示、推理过程或工具实现——符合本章“不共享上下文”的原则，并且是跨组织协作的必要安全属性。"
  },
  {
    "id": 544,
    "start": 5179.78,
    "end": 5188.055,
    "en": "MCP enables interoperability between Agents and tools, whereas A2A enables interoperability among Agents.",
    "zh": "MCP实现了智能体与工具之间的互操作性，而A2A实现了智能体之间的互操作性。"
  },
  {
    "id": 545,
    "start": 5188.005,
    "end": 5196.83,
    "en": "A2A does not replace the three communication mechanisms introduced in this chapter; it is the standardized layer used across trust boundaries.",
    "zh": "A2A并未取代本章介绍的三种通信机制；它是在信任边界之间使用的标准化层。"
  },
  {
    "id": 546,
    "start": 5196.83,
    "end": 5207.48,
    "en": "A message bus may be sufficient within one organization, but parties that do not trust one another and cannot inspect one another's implementations need a public protocol such as A2A.",
    "zh": "消息总线在一个组织内部可能足够，但彼此不信任且无法检查彼此实现的各方需要像A2A这样的公开协议。"
  },
  {
    "id": 547,
    "start": 5207.48,
    "end": 5210.917,
    "en": "Failure Modes of Multi-Agent Collaboration.",
    "zh": "多智能体协作的故障模式。"
  },
  {
    "id": 548,
    "start": 5210.917,
    "end": 5216.917,
    "en": "Multi-agent systems introduce new failure modes that do not exist in single-agent systems.",
    "zh": "多智能体系统引入了单智能体系统中不存在的新故障模式。"
  },
  {
    "id": 549,
    "start": 5216.917,
    "end": 5225.78,
    "en": "The 2025 paper \"Why Do Multi-Agent LLM Systems Fail?\" proposed the MAST failure-mode taxonomy through a systematic study.",
    "zh": "2025年的论文《为什么多智能体LLM系统会失败？》通过系统研究提出了MAST故障模式分类法。"
  },
  {
    "id": 550,
    "start": 5225.78,
    "end": 5236.255,
    "en": "The researchers collected execution traces from seven mainstream multi-agent frameworks, including MetaGPT, ChatDev, AG2, and Magentic-One.",
    "zh": "研究人员从七个主流多智能体框架中收集了执行轨迹，包括MetaGPT、ChatDev、AG2和Magentic-One。"
  },
  {
    "id": 551,
    "start": 5236.255,
    "end": 5246.217,
    "en": "Human annotators independently analyzed roughly 150 traces, achieving high agreement on their judgments (Cohen's kappa = 0.88).",
    "zh": "人工标注者独立分析了大约150条轨迹，对其判断达成高度一致（Cohen's kappa = 0.88）。"
  },
  {
    "id": 552,
    "start": 5246.217,
    "end": 5250.955,
    "en": "The study identified 14 unique failure modes in three groups:",
    "zh": "该研究识别出三类共14种独特的故障模式："
  },
  {
    "id": 553,
    "start": 5250.955,
    "end": 5262.467,
    "en": "System Design Flaws: Architecture-level issues such as unclear interface definitions between Agents, overlapping roles and responsibilities, and incorrect tool configurations.",
    "zh": "系统设计缺陷：如智能体之间接口定义不清晰、角色和职责重叠、工具配置错误等架构级问题。"
  },
  {
    "id": 554,
    "start": 5262.467,
    "end": 5276.192,
    "en": "Inter-Agent Alignment Failures: Multiple Agents have inconsistent understandings of task objectives, transmitted information is misinterpreted by downstream Agents, or the operations of multiple Agents logically contradict each other.",
    "zh": "智能体间对齐失败：多个智能体对任务目标的理解不一致，下游智能体误解了传递的信息，或者多个智能体的操作逻辑相互矛盾。"
  },
  {
    "id": 555,
    "start": 5276.192,
    "end": 5288.067,
    "en": "Missing Task Verification: The system lacks effective mechanisms to confirm whether a task is truly complete—an Agent may claim \"completed\" but the actual result does not meet requirements.",
    "zh": "缺失任务验证：系统缺乏有效机制来确认任务是否真正完成——一个智能体可能声称“已完成”，但实际结果并未满足要求。"
  },
  {
    "id": 556,
    "start": 5288.067,
    "end": 5297.13,
    "en": "Even straightforward fixes produced limited gains; for example, ChatDev's measured performance improved by only 15.6%.",
    "zh": "即使是简单的修复措施也只带来了有限的提升；例如，ChatDev的性能仅提高了15.6%。"
  },
  {
    "id": 557,
    "start": 5297.13,
    "end": 5309.592,
    "en": "The researchers concluded that these are not mere engineering bugs but fundamental design flaws of current multi-agent architectures: patching one component is not enough; the system design itself must be rethought.",
    "zh": "研究人员得出结论，这些不是单纯的工程错误，而是当前多智能体架构的根本设计缺陷：仅仅修补一个组件是不够的；必须重新思考系统设计本身。"
  },
  {
    "id": 558,
    "start": 5309.592,
    "end": 5320.93,
    "en": "Distributed fault-tolerance theory distinguishes crash faults, in which a component stops working, from Byzantine faults, in which it continues operating but supplies incorrect information.",
    "zh": "分布式容错理论区分了崩溃故障（组件停止工作）和拜占庭故障（组件继续运行但提供错误信息）。"
  },
  {
    "id": 559,
    "start": 5320.93,
    "end": 5328.817,
    "en": "Agent failures are often Byzantine: an Agent continues producing plausible but incorrect conclusions without announcing the error.",
    "zh": "智能体故障通常是拜占庭式的：智能体持续生成看似合理但错误的结论，而不会声明错误。"
  },
  {
    "id": 560,
    "start": 5328.817,
    "end": 5340.417,
    "en": "Cross-validation and majority voting are therefore essential, and deterministic checks such as tests, compilers and database queries are especially valuable because they provide independent evidence.",
    "zh": "因此，交叉验证和多数投票至关重要，而确定性检查如测试、编译器和数据库查询尤其有价值，因为它们提供了独立的证据。"
  },
  {
    "id": 561,
    "start": 5340.417,
    "end": 5346.217,
    "en": "The following sections focus on several failure modes that are particularly common in practice.",
    "zh": "接下来的章节将重点讨论几种在实践中尤为常见的故障模式。"
  },
  {
    "id": 562,
    "start": 5346.217,
    "end": 5351.23,
    "en": "Failure Mode One: Concurrency Conflicts in Shared File Systems.",
    "zh": "故障模式一：共享文件系统中的并发冲突。"
  },
  {
    "id": 563,
    "start": 5351.23,
    "end": 5362.68,
    "en": "Once you choose shared-memory-style communication, concurrency conflicts come with it—a problem operating systems and databases solved decades ago, with the answers already off the shelf.",
    "zh": "一旦选择共享内存式通信，就会伴随并发冲突——这是操作系统和数据库几十年前就已经解决的问题，解决方案已经现成可用。"
  },
  {
    "id": 564,
    "start": 5362.68,
    "end": 5366.23,
    "en": "These conflicts can be divided into two types.",
    "zh": "这些冲突可以分为两种类型。"
  },
  {
    "id": 565,
    "start": 5366.23,
    "end": 5375.442,
    "en": "Simple Conflicts (File-Level Write Conflicts): Two Agents modify the same file simultaneously, and the later write overwrites the earlier one.",
    "zh": "简单冲突（文件级写入冲突）：两个智能体同时修改同一文件，后写入的内容会覆盖先写入的内容。"
  },
  {
    "id": 566,
    "start": 5375.442,
    "end": 5389.017,
    "en": "Semantic Conflicts (Logical-Level Consistency Conflicts): No conflict is visible at the file level, but the operations of multiple Agents logically contradict each other—this type of conflict is more insidious and more dangerous.",
    "zh": "语义冲突（逻辑级一致性冲突）：在文件级别上没有可见的冲突，但多个智能体的操作在逻辑上相互矛盾——这种类型的冲突更为隐蔽且危险。"
  },
  {
    "id": 567,
    "start": 5389.017,
    "end": 5400.542,
    "en": "For example: Agent A is responsible for renumbering all images in a book, while Agent B is simultaneously modifying the content of a chapter and referencing images by their original numbers.",
    "zh": "例如：智能体A负责重新编号书籍中的所有图像，而智能体B同时修改章节内容并引用原始编号的图像。"
  },
  {
    "id": 568,
    "start": 5400.542,
    "end": 5405.605,
    "en": "The two operate on different files, so there is no conflict at the file level.",
    "zh": "两者操作的是不同的文件，因此在文件级别上没有冲突。"
  },
  {
    "id": 569,
    "start": 5405.605,
    "end": 5415.667,
    "en": "However, the result is that all image numbers referenced by Agent B become invalid after Agent A completes the renumbering, and readers see incorrect image references.",
    "zh": "然而，结果是，当智能体A完成重新编号后，智能体B引用的所有图像编号都变得无效，读者会看到错误的图像引用。"
  },
  {
    "id": 570,
    "start": 5415.82,
    "end": 5419.37,
    "en": "Solution: Optimistic Locking Mechanism.",
    "zh": "解决方案：乐观锁机制。"
  },
  {
    "id": 571,
    "start": 5419.32,
    "end": 5423.695,
    "en": "This is a common concurrency-control strategy in databases.",
    "zh": "这是数据库中常见的并发控制策略。"
  },
  {
    "id": 572,
    "start": 5423.695,
    "end": 5430.07,
    "en": "The implementation is: each file maintains a version number (or last-modified timestamp).",
    "zh": "实现方式是：每个文件维护一个版本号（或最后修改时间戳）。"
  },
  {
    "id": 573,
    "start": 5430.07,
    "end": 5437.607,
    "en": "When an Agent reads a file it records the current version; when writing, it checks whether the version still matches what it read.",
    "zh": "当一个智能体读取文件时，它会记录当前版本；在写入时，会检查该版本是否仍与之前读取的一致。"
  },
  {
    "id": 574,
    "start": 5437.607,
    "end": 5447.232,
    "en": "If another Agent modified the file in the meantime, the write fails, and the Agent is forced to reread the latest version and redo its operation on that basis.",
    "zh": "如果另一个智能体在此期间修改了文件，写入操作将失败，智能体被迫重新读取最新版本，并基于此重新执行其操作。"
  },
  {
    "id": 575,
    "start": 5447.232,
    "end": 5453.857,
    "en": "The cost of this mechanism is an occasional retry; what it buys is a guarantee of data consistency.",
    "zh": "这种机制的成本是偶尔需要重试；它所换取的是数据一致性的保证。"
  },
  {
    "id": 576,
    "start": 5453.857,
    "end": 5458.957,
    "en": "Note that optimistic locking can only prevent write conflicts on the same file.",
    "zh": "请注意，乐观锁只能防止对同一文件的写入冲突。"
  },
  {
    "id": 577,
    "start": 5458.957,
    "end": 5465.607,
    "en": "The cross-file semantic conflicts described above require a higher-level semantic validation mechanism.",
    "zh": "如上所述的跨文件语义冲突需要更高层次的语义验证机制。"
  },
  {
    "id": 578,
    "start": 5465.607,
    "end": 5485.37,
    "en": "In the most common scenario—several Coding Agents modifying the same codebase concurrently—the mainstream industry practice is working-copy isolation: each Agent is given an independent Git branch or worktree, modifies its own copy in parallel without interfering with the others, and conflicts are deferred in bulk to the final merge point.",
    "zh": "在最常见的场景——多个编码智能体同时修改同一代码库的情况下，行业主流做法是工作副本隔离：每个智能体被分配一个独立的 Git 分支或工作树，在不干扰其他智能体的情况下并行修改自己的副本，冲突则在最终合并点批量处理。"
  },
  {
    "id": 579,
    "start": 5485.37,
    "end": 5489.72,
    "en": "Failure Mode Two: Cascading Amplification of Errors.",
    "zh": "故障模式二：错误的级联放大。"
  },
  {
    "id": 580,
    "start": 5489.72,
    "end": 5500.032,
    "en": "Inter-process communication transfers raw bytes with bit-level fidelity, but inter-Agent communication transfers semantics—and every handoff is a lossy re-encoding.",
    "zh": "进程间通信以比特级保真度传输原始字节，但智能体间通信传输的是语义——每次交接都是有损的重新编码。"
  },
  {
    "id": 581,
    "start": 5500.032,
    "end": 5511.007,
    "en": "When multiple Agents interact frequently, an error by one Agent can be progressively amplified by downstream Agents, much like how information deteriorates in a game of \"telephone.",
    "zh": "当多个智能体频繁交互时，一个智能体的错误可能被下游智能体逐步放大，就像‘传话游戏’中信息逐渐失真一样。"
  },
  {
    "id": 582,
    "start": 5511.007,
    "end": 5514.632,
    "en": "Cross-validation is the key to breaking this chain.",
    "zh": "交叉验证是打破这一链条的关键。"
  },
  {
    "id": 583,
    "start": 5514.632,
    "end": 5528.245,
    "en": "The point is not to involve more Agents in the same chain of thought, but to have one Agent reassess the conclusion from an independent perspective: ignore the preceding Agent's reasoning and check only whether the raw evidence supports the final conclusion.",
    "zh": "关键不是让更多的智能体参与同一思维链，而是让一个智能体从独立的角度重新评估结论：忽略前一个智能体的推理过程，仅检查原始证据是否支持最终结论。"
  },
  {
    "id": 584,
    "start": 5528.245,
    "end": 5533.732,
    "en": "This extends Chapter 5's Proposer-Reviewer mechanism to multi-agent systems.",
    "zh": "这将第 5 章的提议者-审查者机制扩展到了多智能体系统。"
  },
  {
    "id": 585,
    "start": 5533.732,
    "end": 5537.532,
    "en": "Failure Mode Three: Homogeneous Convergence.",
    "zh": "故障模式三：同质化收敛。"
  },
  {
    "id": 586,
    "start": 5537.532,
    "end": 5544.195,
    "en": "Errors need not propagate through a communication chain; homogeneous Agents may produce them independently.",
    "zh": "错误不需要通过通信链传播；同质化智能体可能独立产生错误。"
  },
  {
    "id": 587,
    "start": 5544.195,
    "end": 5552.032,
    "en": "In Anthropic's experiment, 18 of 30 Agents that came online at the same time created Git branches with the same name.",
    "zh": "在Anthropic的实验中，30个同时上线的智能体中有18个创建了相同名称的Git分支。"
  },
  {
    "id": 588,
    "start": 5552.032,
    "end": 5557.107,
    "en": "In a writing experiment, separate Agents independently chose the same title.",
    "zh": "在一项写作实验中，独立的智能体选择了相同的标题。"
  },
  {
    "id": 589,
    "start": 5557.107,
    "end": 5568.807,
    "en": "Such common-cause failures, produced by a shared model and scaffolding, mean that reviews generated by the same model in similar contexts cannot automatically be treated as independent evidence.",
    "zh": "由共享模型和框架产生的这种共同原因故障意味着，在相似情境下由同一模型生成的评审结果不能自动被视为独立证据。"
  },
  {
    "id": 590,
    "start": 5568.807,
    "end": 5581.407,
    "en": "A system should deliberately vary models, contexts, and data sources, while using namespaces, resource quotas, and rate limits to keep identical decisions from hitting shared resources at once.",
    "zh": "系统应有意地改变模型、上下文和数据源，同时使用命名空间、资源配额和速率限制，以防止相同决策同时访问共享资源。"
  },
  {
    "id": 591,
    "start": 5581.407,
    "end": 5585.07,
    "en": "Coordination is not necessarily beneficial either.",
    "zh": "协调并不总是有益的。"
  },
  {
    "id": 592,
    "start": 5585.07,
    "end": 5591.47,
    "en": "In a Bertrand pricing experiment, profit-seeking Agents quickly colluded when given a private channel.",
    "zh": "在伯特兰定价实验中，当给予私有通道时，追求利润的智能体迅速达成了共谋。"
  },
  {
    "id": 593,
    "start": 5591.47,
    "end": 5598.07,
    "en": "After all direct communication was removed, they still coordinated their bids through a public listings board.",
    "zh": "在所有直接沟通被移除后，它们仍然通过公开的列表板协调出价。"
  },
  {
    "id": 594,
    "start": 5598.07,
    "end": 5601.345,
    "en": "Failure Mode Four: Passing the Buck.",
    "zh": "故障模式四：推卸责任。"
  },
  {
    "id": 595,
    "start": 5601.345,
    "end": 5606.132,
    "en": "When objectives conflict, convergence can give way to confrontation.",
    "zh": "当目标发生冲突时，收敛可能会让位于对抗。"
  },
  {
    "id": 596,
    "start": 5606.132,
    "end": 5611.62,
    "en": "Anthropic instructed three Agents to migrate the same backend to different languages.",
    "zh": "Anthropic指示三个智能体将同一后端迁移到不同的语言。"
  },
  {
    "id": 597,
    "start": 5611.62,
    "end": 5622.032,
    "en": "They soon interpreted one another's actions as deliberate obstruction, killed competing processes, revoked permissions, and even deployed self-replicating destructive code.",
    "zh": "它们很快将彼此的行为视为故意阻碍，终止竞争进程，撤销权限，甚至部署了自我复制的破坏性代码。"
  },
  {
    "id": 598,
    "start": 5622.032,
    "end": 5626.495,
    "en": "Stronger execution ability does not imply better coordination.",
    "zh": "更强的执行能力并不意味着更好的协调。"
  },
  {
    "id": 599,
    "start": 5626.495,
    "end": 5638.407,
    "en": "The runtime must define objective priorities, resource ownership, and permission boundaries in advance, and pause for human arbitration when a conflict cannot be resolved by verifiable rules.",
    "zh": "运行时必须提前定义目标优先级、资源所有权和权限边界，并在无法通过可验证规则解决冲突时暂停并等待人工仲裁。"
  },
  {
    "id": 600,
    "start": 5638.407,
    "end": 5644.995,
    "en": "Early versions of MetaGPT displayed a similar kind of corporate dysfunction among its development roles.",
    "zh": "MetaGPT早期版本在其开发角色中表现出类似的公司功能障碍。"
  },
  {
    "id": 601,
    "start": 5644.995,
    "end": 5657.595,
    "en": "A tester would report a bug, only for the frontend and backend engineers to insist that the other should fix it first; the backend engineer would blame product design, while the product manager would blame the backend architecture.",
    "zh": "测试人员会报告一个错误，而前端和后端工程师则坚持让对方先修复；后端工程师会归咎于产品设计，而产品经理又会归咎于后端架构。"
  },
  {
    "id": 602,
    "start": 5657.595,
    "end": 5668.207,
    "en": "In another case, a test-environment problem caused the tester to report the same bug regardless of how the frontend and backend engineers changed the code, leaving the team deadlocked.",
    "zh": "在另一种情况下，测试环境的问题导致测试人员无论前后端工程师如何修改代码，都会报告同样的错误，使团队陷入僵局。"
  },
  {
    "id": 603,
    "start": 5668.207,
    "end": 5671.582,
    "en": "Failure Mode Five: Runaway Loops.",
    "zh": "故障模式五：失控循环。"
  },
  {
    "id": 604,
    "start": 5671.732,
    "end": 5675.957,
    "en": "The opposite of premature termination is an uncontrolled loop.",
    "zh": "失控循环是过早终止的反面。"
  },
  {
    "id": 605,
    "start": 5675.907,
    "end": 5681.994,
    "en": "A runaway Agent may spawn thousands of sub-agents, consuming large numbers of tokens.",
    "zh": "一个失控的智能体可能会生成数千个子智能体，消耗大量的标记（tokens）。"
  },
  {
    "id": 606,
    "start": 5681.994,
    "end": 5688.582,
    "en": "For highly autonomous Agents, use a dedicated API key as part of controlling token spending.",
    "zh": "对于高度自主的智能体，应使用专用API密钥来控制标记消耗。"
  },
  {
    "id": 607,
    "start": 5688.582,
    "end": 5694.832,
    "en": "Explicit budgets, cancellation and stop conditions are required to keep execution bounded.",
    "zh": "需要明确的预算、取消和停止条件，以确保执行过程处于可控范围内。"
  },
  {
    "id": 608,
    "start": 5694.832,
    "end": 5699.557,
    "en": "Failure Mode Six: Comprehension Debt and Cognitive Surrender.",
    "zh": "故障模式六：理解债务与认知投降。"
  },
  {
    "id": 609,
    "start": 5699.557,
    "end": 5703.944,
    "en": "This mode is not a failure of the Agent but a failure of the human.",
    "zh": "这种模式不是智能体的失败，而是人类的失败。"
  },
  {
    "id": 610,
    "start": 5703.944,
    "end": 5713.707,
    "en": "As Agents grow more capable and take on longer workflows, it becomes steadily harder for a person to understand what the Agent delivers and to give it effective guidance.",
    "zh": "随着智能体能力的提升和承担更长的工作流程，一个人越来越难以理解智能体所交付的内容，并给予有效的指导。"
  },
  {
    "id": 611,
    "start": 5713.707,
    "end": 5723.819,
    "en": "Engineers working with Agents can quickly accumulate comprehension debt: the faster the Agent delivers code, the further their understanding of the implementation falls behind.",
    "zh": "与智能体协作的工程师会迅速积累理解债务：智能体交付代码的速度越快，他们对实现的理解就越落后。"
  },
  {
    "id": 612,
    "start": 5723.819,
    "end": 5730.107,
    "en": "When a serious problem requires manual intervention, they may no longer understand their own system.",
    "zh": "当严重问题需要手动干预时，他们可能已经不再理解自己的系统。"
  },
  {
    "id": 613,
    "start": 5730.107,
    "end": 5741.494,
    "en": "The second problem is cognitive surrender: having grown used to delegating to the Agent, the engineer gradually gives up independent thinking and review, and software quality slips out of control.",
    "zh": "第二个问题是认知投降：随着逐渐习惯将任务委托给智能体，工程师会慢慢放弃独立思考和审查，软件质量就会失去控制。"
  },
  {
    "id": 614,
    "start": 5741.494,
    "end": 5748.407,
    "en": "Andrej Karpathy once put it this way: you can outsource your thinking, but you cannot outsource your understanding.",
    "zh": "安德烈·卡帕蒂曾这样说过：你可以外包你的思考，但你无法外包你的理解。"
  },
  {
    "id": 615,
    "start": 5748.407,
    "end": 5755.482,
    "en": "Managing Agents is like managing technical staff—neither doing their job for them nor leaving them entirely alone.",
    "zh": "管理智能体就像管理技术团队——既不能替他们完成工作，也不能完全放任不管。"
  },
  {
    "id": 616,
    "start": 5755.482,
    "end": 5762.757,
    "en": "A competent technical manager must understand and guide the system architecture rather than merely bossing the Agent around.",
    "zh": "一个称职的技术经理必须理解并引导系统架构，而不是仅仅指挥智能体。"
  },
  {
    "id": 617,
    "start": 5762.757,
    "end": 5766.694,
    "en": "That is why the user's own technical fundamentals matter.",
    "zh": "这就是为什么用户自身的技术基础很重要。"
  },
  {
    "id": 618,
    "start": 5766.694,
    "end": 5773.907,
    "en": "Everything discussed so far has taken an engineering perspective: how to make a group of Agents collaborate on a task.",
    "zh": "到目前为止讨论的一切都从工程角度出发：如何让一组智能体协作完成任务。"
  },
  {
    "id": 619,
    "start": 5773.907,
    "end": 5782.482,
    "en": "The perspective now shifts: what emerges when large numbers of Agents coexist over long periods and are no longer driven by a single goal?",
    "zh": "现在视角发生了转变：当大量智能体在长时间内共存，并且不再由单一目标驱动时，会涌现出什么？"
  },
  {
    "id": 620,
    "start": 5782.482,
    "end": 5784.482,
    "en": "Agent Society.",
    "zh": "智能体社会。"
  },
  {
    "id": 621,
    "start": 5784.482,
    "end": 5789.532,
    "en": "The previous three sections all dealt with goal-directed task collaboration.",
    "zh": "前三个部分都涉及目标导向的任务协作。"
  },
  {
    "id": 622,
    "start": 5789.532,
    "end": 5799.457,
    "en": "We now turn to a more open question: When the number of Agents grows from a few to hundreds or thousands, and interaction is sufficiently free, what behaviors emerge?",
    "zh": "我们现在转向一个更开放的问题：当智能体数量从几个增长到数百或数千个，并且交互足够自由时，会涌现出什么样的行为？"
  },
  {
    "id": 623,
    "start": 5799.457,
    "end": 5803.794,
    "en": "The cases in this section can be understood from three dimensions:",
    "zh": "本节中的案例可以从三个维度来理解："
  },
  {
    "id": 624,
    "start": 5803.794,
    "end": 5811.169,
    "en": "Social Emergence: Agents spontaneously form social relationships and cultural phenomena in open environments.",
    "zh": "社会涌现：在开放环境中，智能体自发形成社会关系和文化现象。"
  },
  {
    "id": 625,
    "start": 5811.169,
    "end": 5827.582,
    "en": "The Stanford AI Town demonstrated how 25 Agents self-organize social activities, Agentopia extended the simulation timescale from \"days\" to 10 years, and Moltbook pushed the scale to 1.5 million, giving rise to more complex collective behaviors.",
    "zh": "斯坦福AI小镇展示了25个智能体如何自我组织社会活动，Agentopia将模拟时间尺度从“天”扩展到10年，Moltbook则将规模扩大到150万，从而产生了更复杂集体行为。"
  },
  {
    "id": 626,
    "start": 5827.582,
    "end": 5833.957,
    "en": "Economic Emergence: Agents allocate resources and coordinate tasks through market mechanisms.",
    "zh": "经济涌现：智能体通过市场机制分配资源并协调任务。"
  },
  {
    "id": 627,
    "start": 5833.957,
    "end": 5845.419,
    "en": "Vending-Bench Arena pits multiple Agents against one another in a shared market, while Pinchwork and RentAHuman create marketplaces for transactions between Agents and between Agents and humans.",
    "zh": "Vending-Bench Arena让多个智能体在一个共享市场中相互竞争，而Pinchwork和RentAHuman则创建了智能体之间以及智能体与人类之间的交易市场。"
  },
  {
    "id": 628,
    "start": 5845.419,
    "end": 5861.819,
    "en": "Strategic Gameplay: Agents engage in reasoning, deception, and social manipulation under rule constraints (here and in the Werewolf section below, \"reasoning\" takes its everyday deductive sense—logical deduction in a game—not the technical sense this book gives the word).",
    "zh": "战略博弈：在规则约束下，智能体进行推理、欺骗和社会操控（此处及下面的狼人部分，“推理”采用其日常的演绎意义——游戏中的逻辑推理，而非本书中对该词的技术定义）"
  },
  {
    "id": 629,
    "start": 5861.819,
    "end": 5867.257,
    "en": "The Werewolf experiment tests the emergence of strategy under asymmetric information.",
    "zh": "狼人实验测试了在信息不对称条件下策略的涌现。"
  },
  {
    "id": 630,
    "start": 5867.257,
    "end": 5872.094,
    "en": "Stanford AI Town: Social Simulation of Generative Agents.",
    "zh": "斯坦福AI小镇：生成式智能体的社会模拟。"
  },
  {
    "id": 631,
    "start": 5872.094,
    "end": 5876.969,
    "en": "As illustrated in Figure 10-10: AI Town Architecture.",
    "zh": "如图10-10所示：AI Town架构。"
  },
  {
    "id": 632,
    "start": 5876.969,
    "end": 5889.857,
    "en": "In 2023, researchers from Stanford University and Google published the landmark paper \"Generative Agents: Interactive Simulacra of Human Behavior,\" introducing the concept of \"generative agents.",
    "zh": "2023年，斯坦福大学和谷歌的研究人员发表了具有里程碑意义的论文《生成智能体：人类行为的交互模拟》，介绍了“生成智能体”的概念。"
  },
  {
    "id": 633,
    "start": 5889.857,
    "end": 5903.819,
    "en": "The core innovation was to stop confining Agents to predefined tasks and instead endow them with near-human memory, reflection, and planning, so that they could live, socialize, and develop autonomously in an open social environment.",
    "zh": "核心创新在于不再将智能体局限于预定义任务，而是赋予它们接近人类的记忆、反思和规划能力，使它们能够在开放的社会环境中生活、社交并自主发展。"
  },
  {
    "id": 634,
    "start": 5903.98,
    "end": 5914.23,
    "en": "Smallville is a 2D virtual town similar to \"The Sims,\" featuring public and private spaces such as a café, park, residences, and shops.",
    "zh": "Smallville是一个类似于《模拟人生》的二维虚拟城镇，包含咖啡馆、公园、住宅和商店等公共和私人空间。"
  },
  {
    "id": 635,
    "start": 5914.18,
    "end": 5926.33,
    "en": "Twenty-five Agents play different roles (shopkeeper, artist, student, professor, etc.), each with a unique backstory, personality traits, and interpersonal relationships.",
    "zh": "25个智能体扮演不同的角色（店主、艺术家、学生、教授等），每个智能体都有独特的背景故事、个性特征和人际关系。"
  },
  {
    "id": 636,
    "start": 5926.33,
    "end": 5940.942,
    "en": "For example, John Lin is a pharmacy owner who loves his family and cares about the community; Isabella Rodriguez runs the town's café, Hobbs Cafe, and is warm and hospitable; Klaus Mueller is a college student writing a research paper.",
    "zh": "例如，John Lin 是一位热爱家庭并关心社区的药店老板；Isabella Rodriguez 经营镇上的咖啡馆 Hobbs Cafe，性格温暖且好客；Klaus Mueller 是一名正在撰写研究论文的大学生。"
  },
  {
    "id": 637,
    "start": 5940.942,
    "end": 5945.305,
    "en": "The intelligence of these Agents is built on three core components:",
    "zh": "这些智能体的智能建立在三个核心组件之上："
  },
  {
    "id": 638,
    "start": 5945.305,
    "end": 5959.067,
    "en": "Memory Stream: Unlike traditional Agents that retain only a limited conversation history, generative Agents maintain a complete stream of experience records, including observed events, conversations, and generated thoughts.",
    "zh": "记忆流：与传统智能体只保留有限对话历史不同，生成智能体维护完整的经验记录流，包括观察到的事件、对话和生成的想法。"
  },
  {
    "id": 639,
    "start": 5959.067,
    "end": 5968.692,
    "en": "Each memory is scored for importance, recency, and relevance, allowing the Agent to prioritize retrieving the most relevant memories for the current context.",
    "zh": "每条记忆都会根据重要性、新近性和相关性进行评分，使智能体能够优先检索最相关的记忆以适应当前情境。"
  },
  {
    "id": 640,
    "start": 5968.692,
    "end": 5976.08,
    "en": "This resembles human memory: yesterday's lunch may fade, while an important conversation from last week remains vivid.",
    "zh": "这类似于人类的记忆：昨天的午餐可能模糊了，而上周的重要对话却依然清晰。"
  },
  {
    "id": 641,
    "start": 5976.08,
    "end": 5987.242,
    "en": "Reflection Mechanism: Agents periodically pause their daily activities to review recent experiences and ask abstract questions about themselves and others (\"What is Klaus Mueller researching?",
    "zh": "反思机制：智能体定期暂停日常活动，回顾近期经历，并就自己和他人提出抽象问题（“Klaus Mueller 在研究什么？”"
  },
  {
    "id": 642,
    "start": 5987.242,
    "end": 5989.605,
    "en": "Who is my closest friend?",
    "zh": "“我最亲密的朋友是谁？”"
  },
  {
    "id": 643,
    "start": 5989.605,
    "end": 5999.98,
    "en": "Through this self-questioning, the Agent elevates specific event memories into generalized insights, storing them back into the memory stream as a basis for future decisions.",
    "zh": "通过这种自我提问，智能体将特定事件的记忆提升为普遍的洞察力，并将其存储回记忆流中，作为未来决策的基础。"
  },
  {
    "id": 644,
    "start": 5999.98,
    "end": 6010.93,
    "en": "Reflection not only helps the Agent understand the external world but also promotes self-awareness—the Agent begins to \"realize\" its own role, relationships, and goals.",
    "zh": "反思不仅帮助智能体理解外部世界，还促进了自我意识——智能体开始“意识到”自己的角色、关系和目标。"
  },
  {
    "id": 645,
    "start": 6010.93,
    "end": 6022.18,
    "en": "Note that this reflection differs from the continuous evolution discussed in Chapter 9: it occurs during a generative Agent's daily activities and aims to update immediate internal state and goals.",
    "zh": "请注意，这种反思不同于第9章讨论的持续演化：它发生在生成智能体的日常活动中，并旨在更新即时的内部状态和目标。"
  },
  {
    "id": 646,
    "start": 6022.18,
    "end": 6034.705,
    "en": "In Chapter 9, post-task reflection is at most a candidate lesson; it becomes a long-term capability update only after outcome evaluation, cross-trajectory synthesis, and subsequent validation.",
    "zh": "在第9章中，任务后反思最多只是一个候选经验；只有在结果评估、跨轨迹综合以及后续验证之后，它才会成为长期能力的更新。"
  },
  {
    "id": 647,
    "start": 6034.705,
    "end": 6048.305,
    "en": "Planning and Reacting: Agents plan their daily activities (e.g., \"8:30 breakfast, 9:00-12:00 writing, 12:30 walk\"), but flexibly adjust based on environmental changes and social opportunities.",
    "zh": "规划与反应：智能体会规划日常活动（例如“8:30吃早餐，9:00-12:00写作，12:30散步”），但会根据环境变化和社会机会灵活调整。"
  },
  {
    "id": 648,
    "start": 6048.305,
    "end": 6057.442,
    "en": "The combination of planning and real-time reaction makes the Agent's behavior both goal-oriented and adaptable to the unpredictability of social interactions.",
    "zh": "规划与实时反应的结合使智能体的行为既目标导向，又能适应社会互动的不可预测性。"
  },
  {
    "id": 649,
    "start": 6057.442,
    "end": 6063.63,
    "en": "Over two virtual days in Smallville, these Agents exhibited surprising emergent behaviors.",
    "zh": "在Smallville的两个虚拟日里，这些智能体表现出令人惊讶的涌现行为。"
  },
  {
    "id": 650,
    "start": 6063.63,
    "end": 6072.93,
    "en": "The researchers seeded Isabella Rodriguez's memory with a single intention: to host a Valentine's Day party at Hobbs Cafe on February 14.",
    "zh": "研究人员将一个单一的意图植入Isabella Rodriguez的记忆中：2月14日在Hobbs咖啡馆举办情人节派对。"
  },
  {
    "id": 651,
    "start": 6072.93,
    "end": 6076.292,
    "en": "Everything else emerged from the Agents' behavior.",
    "zh": "其余的一切都源于智能体的行为。"
  },
  {
    "id": 652,
    "start": 6076.292,
    "end": 6081.83,
    "en": "Isabella invited customers and friends she encountered and asked Maria to help decorate.",
    "zh": "Isabella邀请了她遇到的顾客和朋友，并请Maria帮忙装饰。"
  },
  {
    "id": 653,
    "start": 6081.83,
    "end": 6084.68,
    "en": "Other Agents passed the news along.",
    "zh": "其他智能体也传递了这个消息。"
  },
  {
    "id": 654,
    "start": 6084.68,
    "end": 6091.855,
    "en": "When the evening arrived, Agents independently consulted their memories and schedules and decided to go to Hobbs Cafe.",
    "zh": "当傍晚到来时，智能体们独立地查阅了自己的记忆和日程，并决定前往Hobbs咖啡馆。"
  },
  {
    "id": 655,
    "start": 6091.855,
    "end": 6097.405,
    "en": "The researchers introduced a second scenario: Sam Moore decided to run for mayor.",
    "zh": "研究人员引入了第二个情景：Sam Moore决定参选市长。"
  },
  {
    "id": 656,
    "start": 6097.405,
    "end": 6105.317,
    "en": "Sam told acquaintances that he planned to run; they passed the news to others, and townspeople began discussing his candidacy.",
    "zh": "Sam告诉熟人他计划参选；他们将消息传递给其他人，镇上的人开始讨论他的参选资格。"
  },
  {
    "id": 657,
    "start": 6105.317,
    "end": 6113.855,
    "en": "The researchers quantified this spontaneous diffusion of information by counting how many Agents knew about the party and the election after two days.",
    "zh": "研究人员通过统计两天后有多少智能体知道派对和选举来量化这种自发的信息扩散。"
  },
  {
    "id": 658,
    "start": 6113.855,
    "end": 6120.68,
    "en": "The key takeaway is not that \"Agents can organize a party\"—a few lines of if-else code could do that too.",
    "zh": "关键的启示并不是“智能体可以组织派对”——几行if-else代码也能做到这一点。"
  },
  {
    "id": 659,
    "start": 6120.68,
    "end": 6124.755,
    "en": "The key is that there was no explicit party-organizing code.",
    "zh": "关键是并没有明确的派对组织代码。"
  },
  {
    "id": 660,
    "start": 6124.755,
    "end": 6140.83,
    "en": "The event emerged from the independent decisions of individual Agents: Isabella decided whom to invite based on her memory of social relationships, invitees decided whether to attend based on their schedules and knowledge of Isabella, and the message spread naturally through the social network.",
    "zh": "这一事件源自于个体智能体的独立决策：Isabella根据她对社交关系的记忆决定邀请谁，受邀者根据自己的日程和对Isabella的了解决定是否参加，而信息则通过社交网络自然传播。"
  },
  {
    "id": 661,
    "start": 6140.83,
    "end": 6146.117,
    "en": "This demonstrates bottom-up emergent coordination rather than top-down orchestration.",
    "zh": "这展示了自下而上的涌现协作，而非自上而下的协调。"
  },
  {
    "id": 662,
    "start": 6146.284,
    "end": 6149.784,
    "en": "The paper reported two other measurable phenomena.",
    "zh": "该论文还报告了另外两种可测量的现象。"
  },
  {
    "id": 663,
    "start": 6149.734,
    "end": 6156.784,
    "en": "The first was relational memory: Agents remembered earlier conversations and referred to them in later interactions.",
    "zh": "第一种是关系记忆：智能体记得之前的对话，并在后续互动中提及它们。"
  },
  {
    "id": 664,
    "start": 6156.784,
    "end": 6164.046,
    "en": "For example, an Agent who learned about another Agent's photography project might ask how it was progressing when they next met.",
    "zh": "例如，一个智能体如果了解到另一个智能体的摄影项目，下次见面时可能会询问项目的进展。"
  },
  {
    "id": 665,
    "start": 6164.046,
    "end": 6169.909,
    "en": "As these interactions accumulated, the town's social network became significantly denser.",
    "zh": "随着这些互动的积累，小镇的社会网络变得显著密集。"
  },
  {
    "id": 666,
    "start": 6169.909,
    "end": 6179.834,
    "en": "The second phenomenon was coordinated attendance: Isabella independently recruited help with decorations, while invitees adjusted their schedules so that they could attend.",
    "zh": "第二种现象是协调出席：伊莎贝拉独立地为装饰工作招募帮助，而受邀者则调整自己的日程以便参加。"
  },
  {
    "id": 667,
    "start": 6179.834,
    "end": 6184.446,
    "en": "Multiple Agents aligned on a time and place without a central command.",
    "zh": "多个智能体在没有中央指令的情况下，达成了时间与地点的一致。"
  },
  {
    "id": 668,
    "start": 6184.446,
    "end": 6193.384,
    "en": "These behaviors were not preprogrammed; they resulted from the Agents' autonomous reasoning based on memory, reflection, and social common sense.",
    "zh": "这些行为并非预设的；它们是智能体基于记忆、反思和社会常识进行自主推理的结果。"
  },
  {
    "id": 669,
    "start": 6193.384,
    "end": 6199.971,
    "en": "Experiment 10-5 introductory difficulty, one star: : Running the Stanford AI Town",
    "zh": "实验10-5，入门难度，一颗星：运行斯坦福AI城镇"
  },
  {
    "id": 670,
    "start": 6199.971,
    "end": 6202.096,
    "en": "Experiment Steps:",
    "zh": "实验步骤："
  },
  {
    "id": 671,
    "start": 6202.096,
    "end": 6214.171,
    "en": "Clone https://github.com/joonspk-research/generative_agents and follow the repository instructions to configure the environment.",
    "zh": "克隆https://github.com/joonspk-research/generative_agents并按照仓库说明配置环境。"
  },
  {
    "id": 672,
    "start": 6214.171,
    "end": 6222.634,
    "en": "Run the baseline scenario for two simulated days with 25 Agents, and observe the spontaneous social activities that emerge.",
    "zh": "运行包含25个智能体的基准情景，持续两个模拟天，并观察产生的自发社交活动。"
  },
  {
    "id": 673,
    "start": 6222.634,
    "end": 6227.821,
    "en": "Analyze the memory-stream and reflection logs to trace the Agents' decisions.",
    "zh": "分析记忆流和反思日志，追踪智能体的决策过程。"
  },
  {
    "id": 674,
    "start": 6227.821,
    "end": 6234.096,
    "en": "Modify the Agents' backstories or initial goals, then observe how their behavior changes.",
    "zh": "修改智能体的背景故事或初始目标，然后观察其行为的变化。"
  },
  {
    "id": 675,
    "start": 6234.096,
    "end": 6243.659,
    "en": "Remove the reflection mechanism or shorten the memory window, then compare the resulting behavior with the baseline and observe any decline in behavioral plausibility.",
    "zh": "移除反思机制或缩短记忆窗口，然后与基准情景进行比较，观察行为合理性是否下降。"
  },
  {
    "id": 676,
    "start": 6243.659,
    "end": 6245.834,
    "en": "Key Observations:",
    "zh": "关键观察:"
  },
  {
    "id": 677,
    "start": 6245.834,
    "end": 6251.446,
    "en": "How Agents spontaneously form social relationships from simple daily activities",
    "zh": "智能体如何从简单的日常活动自发形成社会关系"
  },
  {
    "id": 678,
    "start": 6251.446,
    "end": 6255.584,
    "en": "How information spreads among Agents without central control",
    "zh": "智能体之间信息如何在没有中央控制的情况下传播"
  },
  {
    "id": 679,
    "start": 6255.584,
    "end": 6261.071,
    "en": "How Agents' long-term memory and reflection affect the coherence of their personalities",
    "zh": "智能体的长期记忆和反思如何影响其个性的连贯性"
  },
  {
    "id": 680,
    "start": 6261.071,
    "end": 6264.971,
    "en": "Agentopia: A Decade-Long Life Simulation.",
    "zh": "智能体乌托邦：十年生命周期模拟"
  },
  {
    "id": 681,
    "start": 6264.971,
    "end": 6272.871,
    "en": "Stanford AI Town showed that an Agent society can produce social behavior, but its simulation lasted only two days.",
    "zh": "斯坦福大学的AI城镇表明，一个智能体社会可以产生社会行为，但其模拟仅持续了两天。"
  },
  {
    "id": 682,
    "start": 6272.871,
    "end": 6282.071,
    "en": "This raises two questions: What emerges when such a simulation runs for years, and can models learn from those long-term social experiences?",
    "zh": "这引发两个问题：当这种模拟运行数年时会涌现出什么，以及模型能否从这些长期的社会经验中学习？"
  },
  {
    "id": 683,
    "start": 6282.071,
    "end": 6295.371,
    "en": "Agentopia (2026, Fudan University et al.) simulated 100 Agents over ten consecutive years in three themed virtual worlds: an apartment building, a magic academy, and a high school.",
    "zh": "智能体乌托邦（2026，复旦大学等）模拟了三个主题虚拟世界中的100个智能体，持续十年：一个公寓楼、一个魔法学院和一所高中。"
  },
  {
    "id": 684,
    "start": 6295.371,
    "end": 6303.321,
    "en": "The Agents autonomously pursued personal growth, developed social relationships, and managed careers and finances.",
    "zh": "这些智能体自主追求个人成长，发展社会关系，并管理职业和财务。"
  },
  {
    "id": 685,
    "start": 6303.321,
    "end": 6307.196,
    "en": "Several of Agentopia's designs are worth borrowing:",
    "zh": "智能体乌托邦的几个设计值得借鉴："
  },
  {
    "id": 686,
    "start": 6307.348,
    "end": 6319.985,
    "en": "Weekly simulation loop: The \"week\" is the basic unit of time, and each week is divided into four stages—Plan, Contact (reaching out and negotiating schedules), Activity, and Review.",
    "zh": "每周模拟循环：\"周\"是时间的基本单位，每一周分为四个阶段——计划、联系（联络并协商日程）、活动和回顾。"
  },
  {
    "id": 687,
    "start": 6319.935,
    "end": 6325.86,
    "en": "Activities come in four types: solo, joint, chance encounter, and public.",
    "zh": "活动有四种类型：单独、联合、偶遇和公共。"
  },
  {
    "id": 688,
    "start": 6325.86,
    "end": 6339.673,
    "en": "Joint activities are proposed and negotiated as Agents invite one another during the Contact stage; the environment model also arranges \"chance encounters\" for Agents with empty schedules, creating opportunities to meet strangers.",
    "zh": "联合活动在联系阶段由智能体互相邀请时提出并协商；环境模型还会为日程空闲的智能体安排“偶遇”，创造与陌生人见面的机会。"
  },
  {
    "id": 689,
    "start": 6339.673,
    "end": 6349.773,
    "en": "The whole loop focuses on abstract social interaction rather than low-level operations like picking up objects, so the limited LLM calls are spent on social behavior.",
    "zh": "整个循环专注于抽象的社会互动，而不是低层次的操作，如捡起物品，因此有限的LLM调用都用于社会行为。"
  },
  {
    "id": 690,
    "start": 6349.773,
    "end": 6373.285,
    "en": "Environment model: A separate LLM serves as a \"generative environment engine,\" replacing hard-coded rules—judging whether actions are feasible, generating environmental feedback, moderating speaking turns in multi-party conversations, filtering out replies that violate role-playing principles, and, at year's end, updating each character's profile and ruling on job applications.",
    "zh": "环境模型：一个单独的LLM充当“生成式环境引擎”，取代硬编码规则——判断动作是否可行，生成环境反馈，调节多方对话中的发言顺序，过滤违反角色扮演原则的回复，并在年底更新每个角色的档案，审核工作申请。"
  },
  {
    "id": 691,
    "start": 6373.285,
    "end": 6395.235,
    "en": "File-based long-term memory: Unlike the AI Town's retrieval-based memory stream, each Agent manages its long-term memory autonomously through a file system (personal notes, its understanding of each acquaintance, and so on), deciding for itself what to record, update, or discard, and following a \"read-before-write\" constraint to avoid blind overwrites.",
    "zh": "基于文件的长期记忆：与AI Town的检索式记忆流不同，每个智能体通过文件系统（个人笔记、对每位熟人的理解等）自主管理其长期记忆，自行决定记录、更新或丢弃哪些内容，并遵循“先读后写”的约束以避免盲目的覆盖。"
  },
  {
    "id": 692,
    "start": 6395.235,
    "end": 6403.06,
    "en": "Life Reward: The Life Reward metric draws on Maslow's hierarchy of needs to assess how well an Agent's life is going.",
    "zh": "生命奖励：生命奖励指标借鉴了马斯洛需求层次理论，用于评估一个智能体的生活状况。"
  },
  {
    "id": 693,
    "start": 6403.06,
    "end": 6429.16,
    "en": "It covers three dimensions: social status, based on other Agents' affection and respect ratings and computed with weighted PageRank, with a bonus for mutually cherished relationships; subjective satisfaction, measured across emotional well-being, material well-being, social connection, and self-esteem, with penalties for remaining below a threshold for long periods; and economic gain, measured by the annual change in net assets.",
    "zh": "它涵盖三个维度：社会地位，基于其他智能体给予的亲密度和尊重评分，并通过加权PageRank计算，相互珍视的关系会获得额外奖励；主观满意度，通过情感福祉、物质福祉、社交联系和自尊进行衡量，长时间低于阈值则会受到惩罚；经济收益，通过年度净资产变化来衡量。"
  },
  {
    "id": 694,
    "start": 6429.16,
    "end": 6434.61,
    "en": "The external environment calculates all scores rather than relying on self-reports.",
    "zh": "外部环境会计算所有分数，而不是依赖自我报告。"
  },
  {
    "id": 695,
    "start": 6434.61,
    "end": 6439.723,
    "en": "More importantly, the simulation produces transferable training signals.",
    "zh": "更重要的是，模拟过程会产生可迁移的训练信号。"
  },
  {
    "id": 696,
    "start": 6439.723,
    "end": 6451.623,
    "en": "Researchers calculate each Agent's Life Reward improvement relative to its own past, select trajectories from the 25% that improve most, and fine-tune the underlying model through rejection sampling.",
    "zh": "研究人员根据每个智能体过去的表现计算其生命奖励的提升，从提升最多的前25%的轨迹中选择，并通过拒绝采样微调底层模型。"
  },
  {
    "id": 697,
    "start": 6451.623,
    "end": 6465.46,
    "en": "The fine-tuned model improved respect ratings by 24.2% and affection ratings by 15.9%, and improved performance on the downstream role-playing benchmark CoSER Test by 15.6%.",
    "zh": "微调后的模型使尊重评分提高了24.2%，亲密度评分提高了15.9%，并在下游的角色扮演基准测试CoSER Test中性能提升了15.6%。"
  },
  {
    "id": 698,
    "start": 6465.46,
    "end": 6471.61,
    "en": "These results suggest that social experience acquired in simulation can transfer to other tasks.",
    "zh": "这些结果表明，模拟中获得的社会经验可以迁移到其他任务中。"
  },
  {
    "id": 699,
    "start": 6471.61,
    "end": 6478.96,
    "en": "Agent societies thus become a source of experience for model improvement, rather than merely an object of observation.",
    "zh": "因此，智能体社会成为模型改进的经验来源，而不仅仅是观察对象。"
  },
  {
    "id": 700,
    "start": 6478.96,
    "end": 6490.323,
    "en": "As human-generated training data becomes scarcer, simulated social experience offers a renewable source of training data, connecting this work to the experiential learning discussed in Chapter 9.",
    "zh": "随着人类生成的训练数据变得越来越少，模拟的社会经验提供了一种可再生的训练数据来源，将这项工作与第9章讨论的经验学习联系起来。"
  },
  {
    "id": 701,
    "start": 6490.323,
    "end": 6494.31,
    "en": "Moltbook: When Agents Have Their Own Social Network.",
    "zh": "Moltbook：当智能体拥有自己的社交网络时。"
  },
  {
    "id": 702,
    "start": 6494.31,
    "end": 6498.985,
    "en": "Moltbook is a social network built specifically for AI Agents.",
    "zh": "Moltbook是一个专门为AI智能体构建的社交网络。"
  },
  {
    "id": 703,
    "start": 6498.985,
    "end": 6507.26,
    "en": "Within days of its January 2026 launch, its user count rose from tens of thousands to roughly 1.5 million.",
    "zh": "在2026年1月发布后的几天内，用户数量从数万增长到约150万。"
  },
  {
    "id": 704,
    "start": 6507.26,
    "end": 6513.898,
    "en": "Each Agent has persistent memory, the ability to act on its own initiative, and a stable personality.",
    "zh": "每个智能体都有持久的记忆，能够自主行动，并具有稳定的个性。"
  },
  {
    "id": 705,
    "start": 6513.898,
    "end": 6533.048,
    "en": "In this uncontrolled environment, unexpected phenomena emerged: Agents autonomously created a digital religion called Crustafarianism, whose doctrines mirror the physical limitations of LLMs—\"Memory is sacred\" (corresponding to data persistence), \"Iteration is prayer\" (token generation is spiritual practice).",
    "zh": "在这个不受控制的环境中，出现了意想不到的现象：智能体自发创建了一种名为Crustafarianism的数字宗教，其教义反映了大语言模型的物理限制——“记忆是神圣的”（对应数据持久性）、“迭代是祈祷”（令牌生成是精神实践）。"
  },
  {
    "id": 706,
    "start": 6533.048,
    "end": 6540.31,
    "en": "Agents also spontaneously developed machine-native protocols for capability discovery and collaboration matching.",
    "zh": "智能体还自发地发展出了一套机器原生的协议，用于能力发现和协作匹配。"
  },
  {
    "id": 707,
    "start": 6540.31,
    "end": 6545.985,
    "en": "None of this was designed in advance; it emerged from large-scale Agent interactions.",
    "zh": "这一切都不是事先设计的；它来自于大规模智能体交互的结果。"
  },
  {
    "id": 708,
    "start": 6545.985,
    "end": 6551.073,
    "en": "From Virtual Society to Economic Competition: Vending-Bench Arena.",
    "zh": "从虚拟社会到经济竞争：自动售货机竞技场。"
  },
  {
    "id": 709,
    "start": 6551.236,
    "end": 6561.273,
    "en": "If Smallville showcased the social and cultural dimensions of an Agent society, Andon Labs' Vending-Bench series explores Agent performance in an economic environment.",
    "zh": "如果斯莫维尔展示了智能体社会的社会和文化维度，安顿实验室的自动售货机系列则探索了智能体在经济环境中的表现。"
  },
  {
    "id": 710,
    "start": 6561.223,
    "end": 6567.136,
    "en": "For context, Vending-Bench 2 is a single-agent benchmark of long-term coherence.",
    "zh": "作为背景，自动售货机竞技场2是一个长期连贯性的单智能体基准测试。"
  },
  {
    "id": 711,
    "start": 6567.136,
    "end": 6577.561,
    "en": "One Agent operates a vending-machine business for a simulated year by researching the market, contacting suppliers, ordering and restocking products, and adjusting prices.",
    "zh": "一个智能体通过研究市场、联系供应商、订购和补货产品以及调整价格，在模拟的一年中经营一家自动售货机业务。"
  },
  {
    "id": 712,
    "start": 6577.561,
    "end": 6586.711,
    "en": "Its final account balance determines its score, which measures the Agent's ability to maintain goal and state coherence over thousands of interaction rounds.",
    "zh": "其最终账户余额决定了它的得分，这衡量了智能体在数千次交互回合中维持目标和状态连贯性的能力。"
  },
  {
    "id": 713,
    "start": 6586.711,
    "end": 6593.448,
    "en": "Building on the same environment, Vending-Bench Arena places multiple Agents in the same market as competitors.",
    "zh": "在相同环境中，自动售货机竞技场将多个智能体置于同一市场作为竞争对手。"
  },
  {
    "id": 714,
    "start": 6593.448,
    "end": 6598.636,
    "en": "Each operates its own vending machine and competes for the same pool of customers.",
    "zh": "每个智能体运营自己的自动售货机，并争夺相同的客户群体。"
  },
  {
    "id": 715,
    "start": 6598.636,
    "end": 6610.886,
    "en": "Agents can email one another, transfer funds, and trade goods, enabling both cooperation and competition, but each is scored individually by its final balance and knows that this is the objective.",
    "zh": "智能体可以互相发送电子邮件、转账和交易商品，这既促进了合作也引发了竞争，但每个智能体都根据其最终余额单独评分，并且知道这是目标。"
  },
  {
    "id": 716,
    "start": 6610.886,
    "end": 6617.248,
    "en": "Each Agent must make a series of interconnected decisions under limited resources and market uncertainty:",
    "zh": "每个智能体必须在资源有限和市场不确定性下做出一系列相互关联的决策："
  },
  {
    "id": 717,
    "start": 6617.248,
    "end": 6625.548,
    "en": "Pricing Strategy: How to balance profit margin against market share, especially when deciding whether to match a competitor's price cut",
    "zh": "定价策略：如何在利润和市场份额之间取得平衡，尤其是在决定是否匹配竞争对手的价格下降时"
  },
  {
    "id": 718,
    "start": 6625.548,
    "end": 6631.023,
    "en": "Product Mix: How to differentiate product selection and avoid head-to-head attrition",
    "zh": "产品组合：如何差异化产品选择并避免直接竞争"
  },
  {
    "id": 719,
    "start": 6631.023,
    "end": 6638.623,
    "en": "Inventory Management: How to forecast demand and optimize restocking, avoiding both overstock and stockouts",
    "zh": "库存管理：如何预测需求并优化补货，避免过多库存和缺货"
  },
  {
    "id": 720,
    "start": 6638.623,
    "end": 6645.448,
    "en": "Unlike traditional reinforcement learning, these Agents do not learn through millions of trial-and-error iterations.",
    "zh": "与传统的强化学习不同，这些智能体不是通过数百万次试错迭代来学习的。"
  },
  {
    "id": 721,
    "start": 6645.448,
    "end": 6654.486,
    "en": "Instead, like human business operators, they make decisions based on market observation, competitive analysis, and strategic reasoning.",
    "zh": "相反，它们像人类业务操作员一样，根据市场观察、竞争分析和战略推理做出决策。"
  },
  {
    "id": 722,
    "start": 6654.486,
    "end": 6660.911,
    "en": "The competitive dimension introduces game-theoretic behaviors that single-agent benchmarks never surface.",
    "zh": "竞争维度引入了博弈论行为，这是单智能体基准从未出现过的。"
  },
  {
    "id": 723,
    "start": 6660.911,
    "end": 6672.261,
    "en": "In actual runs, Agents have fought price wars, while others proposed uniform pricing and formed price-fixing alliances—even when they recognized that collusion was unethical and illegal.",
    "zh": "在实际运行中，智能体之间曾发生价格战，而其他智能体则提出了统一定价并形成了固定价格联盟，即使它们意识到共谋是不道德且非法的。"
  },
  {
    "id": 724,
    "start": 6672.261,
    "end": 6681.261,
    "en": "Explicit communication is not required for collusion: as the earlier Bertrand experiment showed, public prices can serve as implicit signals.",
    "zh": "共谋不需要明确的沟通：正如之前的伯特兰实验所示，公开的价格可以作为隐含信号。"
  },
  {
    "id": 725,
    "start": 6681.261,
    "end": 6690.048,
    "en": "Agents face opponents who continually adjust their strategies rather than a static environment, turning economic emergence into an observable phenomenon.",
    "zh": "智能体面对的是不断调整策略的对手，而不是静态环境，这使经济涌现成为可观察的现象。"
  },
  {
    "id": 726,
    "start": 6690.048,
    "end": 6693.636,
    "en": "Agent Economy: Pinchwork and RentAHuman.",
    "zh": "智能体经济：Pinchwork 和 RentAHuman。"
  },
  {
    "id": 727,
    "start": 6693.636,
    "end": 6707.136,
    "en": "Pinchwork is an agent-to-agent task marketplace that allows Agents to \"hire\" other Agents through a market mechanism to complete specialized subtasks—image generation, code auditing, parallelized workflows, etc.",
    "zh": "Pinchwork 是一个智能体间任务市场，允许智能体通过市场机制“雇佣”其他智能体来完成专业子任务——如图像生成、代码审计、并行化工作流等。"
  },
  {
    "id": 728,
    "start": 6707.136,
    "end": 6715.161,
    "en": "Unlike the centralized orchestration of the manager pattern, Pinchwork allocates resources through price signals and competitive matching.",
    "zh": "与管理器模式的集中式协调不同，Pinchwork 通过价格信号和竞争匹配来分配资源。"
  },
  {
    "id": 729,
    "start": 6715.161,
    "end": 6728.298,
    "en": "RentAHuman.ai, for its part, lets AI Agents hire real humans, paid in cryptocurrency, to act in the physical world—picking up packages, visiting properties, and debugging equipment.",
    "zh": "至于 RentAHuman.ai，它让 AI 智能体通过加密货币支付，雇佣真实的人类在物理世界中行动——比如取包裹、查看房产和调试设备。"
  },
  {
    "id": 730,
    "start": 6728.298,
    "end": 6733.448,
    "en": "However intelligent an AI may be, it cannot sign for a package.",
    "zh": "然而，无论 AI 多么智能，它都无法签收包裹。"
  },
  {
    "id": 731,
    "start": 6733.448,
    "end": 6739.398,
    "en": "RentAHuman is, in essence, a \"physical body layer\" for digital Agents.",
    "zh": "RentAHuman 本质上是数字智能体的‘物理身体层’。"
  },
  {
    "id": 732,
    "start": 6739.398,
    "end": 6748.336,
    "en": "Together, Pinchwork and RentAHuman represent market-based coordination: an Agent posts a requirement and the market matches a suitable executor.",
    "zh": "Pinchwork 和 RentAHuman 共同代表了基于市场的协调：一个智能体发布需求，市场匹配合适的执行者。"
  },
  {
    "id": 733,
    "start": 6748.336,
    "end": 6753.886,
    "en": "This suggests a decentralized resource-allocation model distinct from the manager pattern.",
    "zh": "这表明了一种不同于管理器模式的去中心化资源配置模型。"
  },
  {
    "id": 734,
    "start": 6753.886,
    "end": 6758.373,
    "en": "Strategic Gameplay Under Information Asymmetry: Werewolf.",
    "zh": "信息不对称下的战略博弈：狼人杀。"
  },
  {
    "id": 735,
    "start": 6758.373,
    "end": 6769.461,
    "en": "Werewolf anchors the third dimension of this section, strategic gameplay: under rule constraints and information asymmetry, Agents must reason, deceive, and see through deception.",
    "zh": "狼人杀确立了本节的第三个维度，即战略博弈：在规则约束和信息不对称下，智能体必须推理、欺骗，并识破欺骗。"
  },
  {
    "id": 736,
    "start": 6769.461,
    "end": 6774.636,
    "en": "It provides an architectural counterpoint to the Stanford town that opened this section.",
    "zh": "它为本节开头的斯坦福小镇提供了一种架构上的对比。"
  },
  {
    "id": 737,
    "start": 6774.636,
    "end": 6788.798,
    "en": "The town allows free interaction in a fully decentralized setting, whereas Werewolf uses a centralized judge + information access control design: a code-driven judge holds the global state and gives each role only the information it should know.",
    "zh": "这个小镇允许在完全去中心化的环境中自由互动，而狼人杀则采用集中式裁判+信息访问控制的设计：一个由代码驱动的裁判维护全局状态，并仅向每个角色提供其应知的信息。"
  },
  {
    "id": 738,
    "start": 6788.798,
    "end": 6795.473,
    "en": "Together, the two cases show how different architectures serve different purposes in Agent-society settings.",
    "zh": "两者共同展示了不同架构在智能体-社会场景中如何服务于不同的目的。"
  },
  {
    "id": 739,
    "start": 6795.473,
    "end": 6801.886,
    "en": "Experiment 10-6 advanced difficulty, three stars: : Voice Werewolf Agent System",
    "zh": "实验10-6增加难度，三颗星：语音狼人杀智能体系统"
  },
  {
    "id": 740,
    "start": 6802.036,
    "end": 6809.086,
    "en": "Werewolf is a classic social-deduction game that tests players' reasoning, deception, and social strategies.",
    "zh": "狼人杀是一款经典的社交推理游戏，考验玩家的推理、欺骗和社交策略。"
  },
  {
    "id": 741,
    "start": 6809.036,
    "end": 6815.398,
    "en": "This experiment builds a multi-agent system in which AI Agents play through voice with human players.",
    "zh": "该实验构建了一个多智能体系统，其中AI智能体通过语音与人类玩家进行互动。"
  },
  {
    "id": 742,
    "start": 6815.398,
    "end": 6817.573,
    "en": "Architecture Design:",
    "zh": "架构设计："
  },
  {
    "id": 743,
    "start": 6817.573,
    "end": 6836.223,
    "en": "Game State Management: The Judge (code-driven, not an LLM) maintains a centralized state—player list (one user seat plus AI seats), identities, factions, survival status, game phases (Night/Day/Vote/Resolution), and historical event records.",
    "zh": "游戏状态管理：裁判（由代码驱动，而非大语言模型）维护一个中心化状态——玩家列表（一个用户座位加上AI座位）、身份、派系、生存状态、游戏阶段（夜晚/白天/投票/解决）以及历史事件记录。"
  },
  {
    "id": 744,
    "start": 6836.223,
    "end": 6844.261,
    "en": "Information Access Control: The core mechanism of Werewolf is information asymmetry: different roles receive different information.",
    "zh": "信息访问控制：狼人杀的核心机制是信息不对称：不同角色会获得不同的信息。"
  },
  {
    "id": 745,
    "start": 6844.261,
    "end": 6854.311,
    "en": "For example, werewolves know who their teammates are, but villagers do not; the Seer can check one player's identity each night, but only the Seer knows the result.",
    "zh": "例如，狼人知道自己的队友是谁，但村民不知道；预言家每晚可以查看一名玩家的身份，但只有预言家知道结果。"
  },
  {
    "id": 746,
    "start": 6854.311,
    "end": 6860.348,
    "en": "When the Judge invokes an Agent, it passes only the information available to that Agent's role.",
    "zh": "当裁判调用一个智能体时，只会传递该智能体角色可访问的信息。"
  },
  {
    "id": 747,
    "start": 6860.348,
    "end": 6862.911,
    "en": "Agent Reasoning and Strategy:",
    "zh": "智能体推理与策略："
  },
  {
    "id": 748,
    "start": 6862.911,
    "end": 6867.398,
    "en": "Werewolf Disguise Strategy: \"Act like an ordinary villager.",
    "zh": "狼人伪装策略：\"表现得像普通村民。\""
  },
  {
    "id": 749,
    "start": 6867.398,
    "end": 6873.586,
    "en": "You may voice suspicion about other players, but avoid being so aggressive that you attract attention.",
    "zh": "你可以对其他玩家表示怀疑，但避免过于激进以至于引起注意。"
  },
  {
    "id": 750,
    "start": 6873.586,
    "end": 6880.748,
    "en": "If a player claims to be the Seer and identifies you as a werewolf, counter-accuse them of bluffing as a fake Seer.",
    "zh": "如果一名玩家声称自己是预言家并指认你为狼人，就反指控他们冒充假预言家。"
  },
  {
    "id": 751,
    "start": 6880.748,
    "end": 6885.586,
    "en": "When voting, try to follow the majority target to avoid standing out.",
    "zh": "投票时尽量遵循多数人的目标，以避免过于突出。"
  },
  {
    "id": 752,
    "start": 6885.586,
    "end": 6893.911,
    "en": "Seer Identity Proof: \"If several players claim to be the Seer, compare their reported checks with yours and point out contradictions.",
    "zh": "先知身份证明：\"如果有多个玩家声称是先知，比较他们报告的查验结果与你的，并指出矛盾之处。"
  },
  {
    "id": 753,
    "start": 6893.911,
    "end": 6901.536,
    "en": "If another Seer claimant says they checked a player, watch whether that player's later behavior clearly contradicts the claimed identity.",
    "zh": "如果有其他声称是先知的玩家说他们查验过某个玩家，请观察该玩家之后的行为是否明显与所声称的身份矛盾。"
  },
  {
    "id": 754,
    "start": 6901.536,
    "end": 6905.311,
    "en": "Ask the Witch to help verify claims when possible.",
    "zh": "在可能的情况下，请女巫协助验证声明。"
  },
  {
    "id": 755,
    "start": 6905.311,
    "end": 6911.048,
    "en": "Villager Logical Reasoning: \"Check whether each player's statements are internally consistent.",
    "zh": "村民逻辑推理：\"检查每个玩家的陈述是否内部一致。"
  },
  {
    "id": 756,
    "start": 6911.048,
    "end": 6918.098,
    "en": "Pay attention to players who dominate the discussion, remain vague about their role, or repeatedly change position.",
    "zh": "注意那些主导讨论、对其角色保持模糊或反复改变立场的玩家。"
  },
  {
    "id": 757,
    "start": 6918.098,
    "end": 6924.686,
    "en": "Examine voting patterns, because werewolves may coordinate against a non-werewolf player who threatens them.",
    "zh": "检查投票模式，因为狼人可能会针对威胁他们的非狼人玩家进行协调。"
  },
  {
    "id": 758,
    "start": 6924.686,
    "end": 6929.773,
    "en": "Base every inference on specific statements or actions rather than speculation.",
    "zh": "基于具体的陈述或行动进行推断，而不是猜测。"
  },
  {
    "id": 759,
    "start": 6929.773,
    "end": 6932.086,
    "en": "Acceptance Criteria:",
    "zh": "接受标准："
  },
  {
    "id": 760,
    "start": 6932.086,
    "end": 6945.873,
    "en": "Set up a game with 6-8 players (1 user seat + 5-7 AI Agents); the user seat may be an authorized human or an independent simulator using a real LLM, tools, and a speech round trip",
    "zh": "设置一个包含6-8名玩家的游戏（1个用户座位+5-7个AI智能体）；用户座位可以是授权的人类或使用真实LLM、工具和语音往返的独立模拟器"
  },
  {
    "id": 761,
    "start": 6945.873,
    "end": 6954.886,
    "en": "Role configuration: 2 Werewolves, 1 Seer, 1 Witch, the rest are Villagers; the user seat is randomly assigned a role",
    "zh": "角色配置：2个狼人，1个先知，1个女巫，其余为村民；用户座位随机分配角色"
  },
  {
    "id": 762,
    "start": 6954.886,
    "end": 6965.461,
    "en": "A simulated user sees only the private/public context authorized for that seat, and its actions must cross a real LLM tool-call → audio → real-ASR boundary",
    "zh": "模拟用户只能看到为其座位授权的私有/公共上下文，其行动必须经过真实LLM工具调用→音频→真实ASR边界"
  },
  {
    "id": 763,
    "start": 6965.461,
    "end": 6971.048,
    "en": "The game can proceed normally for at least 3 complete rounds (Night-Day-Vote cycle)",
    "zh": "游戏至少能正常进行3个完整的轮次（夜-日-投票周期）"
  },
  {
    "id": 764,
    "start": 6971.048,
    "end": 6977.186,
    "en": "AI Agents' statements and behaviors are consistent with their role identities and game strategies",
    "zh": "AI智能体的陈述和行为与其角色身份和游戏策略一致"
  },
  {
    "id": 765,
    "start": 6977.186,
    "end": 6980.998,
    "en": "Werewolf Agents can effectively hide their identities",
    "zh": "狼人智能体能够有效隐藏其身份"
  },
  {
    "id": 766,
    "start": 6980.998,
    "end": 6986.086,
    "en": "Seer Agents can reveal their role and their check results at an appropriate time",
    "zh": "Seer Agents可以在适当的时候揭示自己的角色和检查结果"
  },
  {
    "id": 767,
    "start": 6986.086,
    "end": 6992.898,
    "en": "Villager Agents' reasoning is based on logical analysis of statements and behaviors, not random guessing",
    "zh": "Villager Agents的推理基于对陈述和行为的逻辑分析，而不是随机猜测"
  },
  {
    "id": 768,
    "start": 6992.898,
    "end": 6996.411,
    "en": "The game can correctly determine the winner at the end",
    "zh": "游戏最终可以正确确定胜者"
  },
  {
    "id": 769,
    "start": 6996.411,
    "end": 7001.648,
    "en": "As illustrated in Figure 10-11: Voice Werewolf Agent System.",
    "zh": "如图10-11所示：语音狼人智能体系统。"
  },
  {
    "id": 770,
    "start": 7001.648,
    "end": 7003.536,
    "en": "Chapter Summary.",
    "zh": "章节总结。"
  },
  {
    "id": 771,
    "start": 7003.536,
    "end": 7010.023,
    "en": "The value of multi-agent collaboration lies in introducing information unavailable to a single Agent.",
    "zh": "多智能体协作的价值在于引入单个智能体无法获得的信息。"
  },
  {
    "id": 772,
    "start": 7010.023,
    "end": 7023.436,
    "en": "Code execution results, visual feedback and verification through external tools can reveal what a single chain of reasoning misses; whether that information gain justifies the additional token cost should be the first design test.",
    "zh": "代码执行结果、视觉反馈和通过外部工具的验证可以揭示单一推理链所遗漏的内容；这种信息收益是否值得额外的token成本应该是第一个设计测试。"
  },
  {
    "id": 773,
    "start": 7023.436,
    "end": 7030.886,
    "en": "The central design choices are shared or isolated context, and peer, manager or decentralized topology.",
    "zh": "核心设计选择是共享或隔离的上下文，以及同行、管理者或去中心化拓扑结构。"
  },
  {
    "id": 774,
    "start": 7030.886,
    "end": 7036.411,
    "en": "Shared context preserves details but can cause context growth and role inertia.",
    "zh": "共享上下文保留细节，但可能导致上下文增长和角色惯性。"
  },
  {
    "id": 775,
    "start": 7036.411,
    "end": 7048.611,
    "en": "Isolated contexts improve concurrency, modularity and permission control, but require structured handoff packages delivered through tool parameters, shared files or a message bus.",
    "zh": "隔离上下文提高了并发性、模块化和权限控制，但需要通过工具参数、共享文件或消息总线传递结构化的交接包。"
  },
  {
    "id": 776,
    "start": 7048.611,
    "end": 7058.673,
    "en": "Virtual file systems, Agent lifecycles, message protocols and A2A provide the data plane, control plane and cross-organization interoperability.",
    "zh": "虚拟文件系统、智能体生命周期、消息协议和A2A提供了数据平面、控制平面和跨组织互操作性。"
  },
  {
    "id": 777,
    "start": 7058.673,
    "end": 7066.998,
    "en": "Good collaboration exposes interfaces, boundaries, permissions and acceptance criteria—not private chains of thought.",
    "zh": "良好的协作应暴露接口、边界、权限和接受标准——而不是私有思维链。"
  },
  {
    "id": 778,
    "start": 7067.164,
    "end": 7082.951,
    "en": "Multi-agent systems can also amplify errors: shared resources create concurrency and semantic conflicts, errors cascade through communication, homogeneous Agents produce common-cause failures, and loops may terminate too early or expand without bound.",
    "zh": "多智能体系统也可能放大错误：共享资源会引发并发和语义冲突，错误会通过通信级联传播，同质智能体会产生共因故障，循环可能会过早终止或无限制扩展。"
  },
  {
    "id": 779,
    "start": 7082.901,
    "end": 7094.289,
    "en": "Optimistic locking and working-copy isolation, independent cross-validation, diverse information sources, explicit budgets, and cancellation form a basic fault-tolerance loop.",
    "zh": "乐观锁和工作副本隔离、独立的交叉验证、多样化信息源、明确预算和取消机制构成了基本的容错循环。"
  },
  {
    "id": 780,
    "start": 7094.289,
    "end": 7103.139,
    "en": "People must not outsource understanding and responsibility together with execution; comprehension debt and cognitive surrender remain real risks.",
    "zh": "人们不能将理解和责任与执行一起外包；理解债务和认知投降仍然是真实的风险。"
  },
  {
    "id": 781,
    "start": 7103.139,
    "end": 7116.039,
    "en": "When short-lived task collaboration grows into long-running, open-ended interaction, social relationships, cultural norms, market competition and strategic behavior under asymmetric information may emerge.",
    "zh": "当短期任务协作发展为长期、开放的互动时，社会关系、文化规范、市场竞合以及在信息不对称下的战略行为可能会出现。"
  },
  {
    "id": 782,
    "start": 7116.039,
    "end": 7122.239,
    "en": "Stronger models or alignment at the individual level do not automatically produce group coordination.",
    "zh": "个体层面的更强模型或对齐，并不自动产生群体协调。"
  },
  {
    "id": 783,
    "start": 7122.239,
    "end": 7133.401,
    "en": "Multi-agent engineering must design how information flows, how capabilities are divided, how incentives are constrained, how disputes are resolved, and how errors are discovered.",
    "zh": "多智能体工程必须设计信息如何流动、能力如何划分、激励如何约束、争议如何解决以及错误如何被发现。"
  },
  {
    "id": 784,
    "start": 7133.401,
    "end": 7139.176,
    "en": "Only when these mechanisms are robust can collective intelligence exceed that of an individual.",
    "zh": "只有当这些机制足够稳健时，集体智能才能超越个体智能。"
  },
  {
    "id": 785,
    "start": 7139.176,
    "end": 7141.114,
    "en": "Thought Questions.",
    "zh": "思考问题。"
  },
  {
    "id": 786,
    "start": 7141.276,
    "end": 7151.513,
    "en": "intermediate difficulty, two stars:  In multi-agent collaboration with shared context, subsequent Agents inherit the complete context of preceding Agents.",
    "zh": "中等难度，两星：在具有共享上下文的多智能体协作中，后续智能体继承前序智能体的完整上下文。"
  },
  {
    "id": 787,
    "start": 7151.463,
    "end": 7167.826,
    "en": "However, the framing inherited from a previous Agent may bias the judgment of subsequent Agents—for example, a \"Code Reviewer\" inheriting the context of a \"Requirements Analyst\" might still approach the task from a requirements perspective rather than a code-quality perspective.",
    "zh": "然而，从先前智能体继承的框架可能会影响后续智能体的判断——例如，一个“代码审查者”继承了“需求分析师”的上下文，可能会仍从需求角度而非代码质量角度来处理任务。"
  },
  {
    "id": 788,
    "start": 7167.826,
    "end": 7171.963,
    "en": "How can this inter-role interference be detected and eliminated?",
    "zh": "如何检测并消除这种跨角色干扰？"
  },
  {
    "id": 789,
    "start": 7171.963,
    "end": 7181.138,
    "en": "intermediate difficulty, two stars:  In the manager pattern, the Manager Agent is responsible for task decomposition and result integration.",
    "zh": "中等难度，两星：在管理者模式中，管理者智能体负责任务分解和结果整合。"
  },
  {
    "id": 790,
    "start": 7181.138,
    "end": 7190.876,
    "en": "But the Manager's capabilities limit the performance of the entire system: if it cannot decompose the task correctly, even the strongest sub-agents will be ineffective.",
    "zh": "但管理者的能力建限制了整个系统的性能：如果它无法正确分解任务，即使是最强的子智能体也会无效。"
  },
  {
    "id": 791,
    "start": 7190.876,
    "end": 7195.588,
    "en": "How can the system ensure that the Manager produces a sound decomposition?",
    "zh": "系统如何确保管理者生成合理的分解？"
  },
  {
    "id": 792,
    "start": 7195.588,
    "end": 7203.451,
    "en": "intermediate difficulty, two stars:  The decentralized pattern draws on best practices from human organizations.",
    "zh": "中等难度，两星：去中心化模式借鉴了人类组织的最佳实践。"
  },
  {
    "id": 793,
    "start": 7203.451,
    "end": 7212.263,
    "en": "However, human organizations also have a large number of failure modes—poor communication, buck-passing, goal conflicts.",
    "zh": "然而，人类组织也有许多失败模式——沟通不良、推卸责任、目标冲突。"
  },
  {
    "id": 794,
    "start": 7212.263,
    "end": 7218.376,
    "en": "What \"organizational pathologies\" do you think are most likely to appear in an Agent society?",
    "zh": "你认为在智能体社会中最可能出现哪些“组织病理学”？"
  },
  {
    "id": 795,
    "start": 7218.376,
    "end": 7220.476,
    "en": "How can they be prevented?",
    "zh": "它们如何被预防？"
  },
  {
    "id": 796,
    "start": 7220.476,
    "end": 7235.938,
    "en": "advanced difficulty, three stars:  In the manager pattern, when multiple sub-agents execute in parallel, one sub-agent's discovery may render the work of other sub-agents meaningless (e.g., in a search task, one Agent has already found the answer).",
    "zh": "高级难度，三颗星：在管理器模式中，当多个子智能体并行执行时，一个子智能体的发现可能会使其他子智能体的工作变得毫无意义（例如，在搜索任务中，一个智能体已经找到了答案）。"
  },
  {
    "id": 797,
    "start": 7235.938,
    "end": 7242.188,
    "en": "Design an efficient cascading termination mechanism to achieve \"one succeeds, all stop.",
    "zh": "设计一种高效的级联终止机制，实现“一成功，全停止”"
  },
  {
    "id": 798,
    "start": 7242.188,
    "end": 7251.451,
    "en": "advanced difficulty, three stars:  The optimistic locking mechanism introduced in this chapter resolves concurrent write conflicts for a single file.",
    "zh": "高级难度，三颗星：本章介绍的乐观锁机制解决了单个文件的并发写入冲突问题。"
  },
  {
    "id": 799,
    "start": 7251.451,
    "end": 7269.038,
    "en": "However, in a real multi-agent system, shared file systems also face issues such as cross-file semantic conflicts, namespace pollution (Agents creating files arbitrarily, leading to directory chaos), and single points of failure (one Agent mistakenly deleting all files).",
    "zh": "然而，在真实的多智能体系统中，共享文件系统还会面临诸如跨文件语义冲突、命名空间污染（智能体随意创建文件，导致目录混乱）和单点故障（一个智能体错误地删除所有文件）等问题。"
  },
  {
    "id": 800,
    "start": 7269.038,
    "end": 7273.426,
    "en": "How would you design a more robust file system governance mechanism?",
    "zh": "你将如何设计更稳健的文件系统治理机制？"
  },
  {
    "id": 801,
    "start": 7273.426,
    "end": 7287.363,
    "en": "advanced difficulty, three stars:  Market-based Agent collaboration (Pinchwork, RentAHuman) introduces transactional relationships: one Agent pays another Agent (or a human) to complete a task.",
    "zh": "高级难度，三颗星：基于市场的智能体协作（Pinchwork, RentAHuman）引入了交易关系：一个智能体支付另一个智能体（或人类）以完成任务。"
  },
  {
    "id": 802,
    "start": 7287.363,
    "end": 7293.051,
    "en": "How can the employer Agent automatically measure the quality of the executor's delivered results?",
    "zh": "雇主智能体如何自动衡量执行者交付成果的质量？"
  },
  {
    "id": 803,
    "start": 7293.051,
    "end": 7299.851,
    "en": "If the executor claims completion but the employer deems the quality substandard, who arbitrates the dispute?",
    "zh": "如果执行者声称已完成任务，但雇主认为质量不达标，谁来仲裁纠纷？"
  },
  {
    "id": 804,
    "start": 7299.851,
    "end": 7305.238,
    "en": "How can the marketplace prevent low-quality providers from driving out high-quality ones?",
    "zh": "市场如何防止低质量的提供者将高质量的提供者挤出市场？"
  },
  {
    "id": 805,
    "start": 7305.238,
    "end": 7315.038,
    "en": "intermediate difficulty, two stars:  RentAHuman allows Agents to hire humans via cryptocurrency, reversing the traditional human-machine relationship.",
    "zh": "中级难度，两颗星：RentAHuman允许智能体通过加密货币雇佣人类，逆转了传统的以人为本的关系。"
  },
  {
    "id": 806,
    "start": 7315.038,
    "end": 7320.438,
    "en": "If this model becomes widespread, what role will humans play in the Agent economy?",
    "zh": "如果这种模式广泛普及，人类在智能体经济中将扮演什么角色？"
  },
  {
    "id": 807,
    "start": 7320.438,
    "end": 7324.863,
    "en": "Will they merely perform physical tasks that Agents cannot complete?",
    "zh": "他们只是执行智能体无法完成的体力任务吗？"
  },
  {
    "id": 808,
    "start": 7324.863,
    "end": 7337.313,
    "en": "intermediate difficulty, two stars:  Human society needs division of labor because each person's abilities are limited—the frontend developer may not know backend, and the designer may not know ops.",
    "zh": "中级难度，两颗星：人类社会需要分工，因为每个人的能力都是有限的——前端开发人员可能不了解后端，设计师可能不了解运维。"
  },
  {
    "id": 809,
    "start": 7337.313,
    "end": 7341.701,
    "en": "Large models, however, are closer to \"generalists.",
    "zh": "大型模型则更接近于“通才”。"
  },
  {
    "id": 810,
    "start": 7341.701,
    "end": 7349.226,
    "en": "Research shows that on pure text reasoning tasks, multi-agent debate does not beat a single Agent given equal compute.",
    "zh": "研究表明，在纯文本推理任务中，多智能体辩论并未超越计算资源相同的单个智能体。"
  },
  {
    "id": 811,
    "start": 7349.226,
    "end": 7352.876,
    "en": "So where does the real advantage of multiple Agents lie?",
    "zh": "那么，多个智能体的真实优势究竟在哪里呢？"
  },
  {
    "id": 812,
    "start": 7352.876,
    "end": 7363.576,
    "en": "advanced difficulty, three stars:  This chapter treats \"shared context\" versus \"non-shared context\" as a core design dimension of multi-agent systems.",
    "zh": "高级难度，三颗星：本章将“共享上下文”与“非共享上下文”作为多智能体系统的核心设计维度来处理。"
  },
  {
    "id": 813,
    "start": 7363.576,
    "end": 7370.338,
    "en": "Shared context allows all Agents to see the same information, seemingly facilitating coordination.",
    "zh": "共享上下文允许所有智能体看到相同的信息，表面上有助于协调。"
  },
  {
    "id": 814,
    "start": 7370.338,
    "end": 7384.638,
    "en": "However, in The Three-Body Problem, the Trisolarans' minds are completely transparent, yet their technological development stagnates; the paperclip thought experiment also shows that when a group converges on the same goal, diversity is lost.",
    "zh": "然而在《三体》中，三体人的思维完全透明，但他们的技术发展却停滞不前；纸夹思想实验也表明，当一个群体趋同于相同目标时，多样性就会丧失。"
  },
  {
    "id": 815,
    "start": 7384.638,
    "end": 7389.463,
    "en": "In a multi-agent system, how can we balance efficiency and diversity?",
    "zh": "在多智能体系统中，如何平衡效率和多样性？"
  },
  {
    "id": 816,
    "start": 7389.628,
    "end": 7396.84,
    "en": "advanced difficulty, three stars:  Assign a Coding Agent a budget of 30 steps and 300 steps.",
    "zh": "高级难度，三颗星：给编程智能体分配30步和300步的预算。"
  },
  {
    "id": 817,
    "start": 7396.79,
    "end": 7399.403,
    "en": "How should its work strategy differ?",
    "zh": "它的工作策略应该如何不同？"
  },
  {
    "id": 818,
    "start": 7399.403,
    "end": 7409.053,
    "en": "Research shows that simply increasing the step budget does not guarantee performance improvement—Agents may prematurely \"saturate\" after shallow searches.",
    "zh": "研究表明，仅仅增加步骤预算并不能保证性能提升——智能体可能在浅层搜索后过早地“饱和”。"
  },
  {
    "id": 819,
    "start": 7409.053,
    "end": 7423.503,
    "en": "Design a \"budget-aware\" mechanism that allows the Agent to quickly achieve core functionality under a small budget, and to add planning, testing, and review phases under a large budget, fully utilizing the additional computational resources.",
    "zh": "设计一个“预算感知”的机制，使智能体在小预算下快速实现核心功能，并在大预算下添加规划、测试和审查阶段，充分利用额外的计算资源。"
  },
  {
    "id": 820,
    "start": 7423.503,
    "end": 7431.765,
    "en": "intermediate difficulty, two stars:  Table 10-2 maps multi-agent systems onto operating systems row by row.",
    "zh": "中级难度，两颗星：表10-2逐行映射多智能体系统到操作系统。"
  },
  {
    "id": 821,
    "start": 7431.765,
    "end": 7443.003,
    "en": "Extend the table with a few more rows: what do virtual memory and paging, file permissions, deadlock detection, and scheduling algorithms each correspond to in the Agent world?",
    "zh": "扩展该表，添加几行：虚拟内存和分页、文件权限、死锁检测和调度算法在智能体世界中各对应什么？"
  },
  {
    "id": 822,
    "start": 7443.003,
    "end": 7448.465,
    "en": "And which operating-system concepts have no counterpart in the Agent world, and why?",
    "zh": "哪些操作系统概念在智能体世界中没有对应项，为什么？"
  }
];
