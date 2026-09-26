window.CHAPTER_DATA_chapter7 = [
  {
    "id": 1,
    "start": 0.1,
    "end": 3.45,
    "en": "Chapter 7: Evaluating Agents.",
    "zh": "第7章：评估智能体。"
  },
  {
    "id": 2,
    "start": 3.4,
    "end": 13.912,
    "en": "The first six chapters laid out how to build a single Agent: its context, knowledge, tools, coding capabilities, and observation and action spaces.",
    "zh": "前六章阐述了如何构建一个单一的智能体：它的上下文、知识、工具、编码能力以及观察空间和动作空间。"
  },
  {
    "id": 3,
    "start": 13.912,
    "end": 17.562,
    "en": "But building an Agent does not mean it works correctly.",
    "zh": "但构建一个智能体并不意味着它就能正确运行。"
  },
  {
    "id": 4,
    "start": 17.562,
    "end": 23.012,
    "en": "Reliable measurement is essential for guiding further model training and system improvement.",
    "zh": "可靠的度量对于指导后续的模型训练和系统改进至关重要。"
  },
  {
    "id": 5,
    "start": 23.012,
    "end": 30.287,
    "en": "When building an Agent system, developers face numerous design choices that often lack obvious correct answers:",
    "zh": "在构建智能体系统时，开发者面临许多设计选择，这些选择往往没有明显的正确答案："
  },
  {
    "id": 6,
    "start": 30.287,
    "end": 32.65,
    "en": "Which model should be used?",
    "zh": "应该使用哪个模型？"
  },
  {
    "id": 7,
    "start": 32.65,
    "end": 35.587,
    "en": "What tools should the model be able to call?",
    "zh": "模型应该能够调用哪些工具？"
  },
  {
    "id": 8,
    "start": 35.587,
    "end": 40.0,
    "en": "What data should the knowledge base store, and how should it be structured?",
    "zh": "知识库应该存储哪些数据，以及如何进行结构化？"
  },
  {
    "id": 9,
    "start": 40.0,
    "end": 42.887,
    "en": "How should user memory be implemented?",
    "zh": "用户记忆应该如何实现？"
  },
  {
    "id": 10,
    "start": 42.887,
    "end": 46.462,
    "en": "How should the model's prompts and Skills be organized?",
    "zh": "模型的提示词和技能应该如何组织？"
  },
  {
    "id": 11,
    "start": 46.462,
    "end": 49.65,
    "en": "What constraints need to be added to the Harness?",
    "zh": "需要向Harness中添加哪些约束？"
  },
  {
    "id": 12,
    "start": 49.65,
    "end": 55.787,
    "en": "How should evaluation results be transformed into learning signals for the Agent's continuous evolution?",
    "zh": "如何将评估结果转化为智能体持续演进的学习信号？"
  },
  {
    "id": 13,
    "start": 55.787,
    "end": 59.925,
    "en": "Evaluation puts these decisions on a scientific footing.",
    "zh": "评估将这些决策置于科学的基础上。"
  },
  {
    "id": 14,
    "start": 59.925,
    "end": 79.1,
    "en": "Through systematic comparative experiments (change one variable at a time and observe the effect) and ablation experiments (disable one component at a time and observe how overall performance changes), you can distinguish genuine capability gains from superficial fluctuations—and avoid being penny wise and pound foolish.",
    "zh": "通过系统的对比实验（一次只改变一个变量并观察效果）和消融实验（一次禁用一个组件并观察整体性能的变化），你可以区分真正的能力提升与表面的波动——避免因小失大。"
  },
  {
    "id": 15,
    "start": 79.1,
    "end": 84.012,
    "en": "Software engineering has a saying: you can't improve what you don't measure.",
    "zh": "软件工程有一个说法：你无法改善你无法测量的东西。"
  },
  {
    "id": 16,
    "start": 84.012,
    "end": 89.925,
    "en": "Without a repeatable evaluation system, an Agent can only be iterated on intuition.",
    "zh": "没有可重复的评估系统，智能体只能凭直觉进行迭代。"
  },
  {
    "id": 17,
    "start": 89.925,
    "end": 98.537,
    "en": "From the perspective of Harness engineering introduced in Chapter 1, evaluation plays the core role of \"verification\" within the Harness.",
    "zh": "从第1章介绍的Harness工程角度来看，评估在Harness中扮演着\"验证\"的核心角色。"
  },
  {
    "id": 18,
    "start": 98.537,
    "end": 106.3,
    "en": "A key insight is: the object of evaluation should not be just the model, but the combination of the model and the Harness.",
    "zh": "一个关键的洞察是：评估的对象不应只是模型，而应是模型与Harness的组合。"
  },
  {
    "id": 19,
    "start": 106.3,
    "end": 118.375,
    "en": "The same model can perform wildly differently in different Harnesses — some teams have significantly improved the same model's performance on terminal tasks purely by optimizing the Harness (see Chapter 5).",
    "zh": "同一个模型在不同的Harness中可能表现截然不同——有些团队仅通过优化Harness（参见第5章）就显著提升了相同模型在终端任务上的性能。"
  },
  {
    "id": 20,
    "start": 118.375,
    "end": 127.637,
    "en": "So when an Agent evaluates poorly, the fix may not be a different model but a better Harness component (prompts, tool design, feedback loops).",
    "zh": "因此，当智能体表现不佳时，问题可能不在于更换模型，而在于改进Harness组件（提示、工具设计、反馈循环）。"
  },
  {
    "id": 21,
    "start": 127.637,
    "end": 137.25,
    "en": "A sound evaluation system should be able to tell apart two fundamentally different problems: \"insufficient model capability\" and \"Harness design flaws.",
    "zh": "一个可靠的评估系统应该能够区分两个根本不同的问题：\"模型能力不足\"和\"Harness设计缺陷\"。"
  },
  {
    "id": 22,
    "start": 137.25,
    "end": 147.137,
    "en": "A common way to tell them apart is the model swap experiment: hold the Harness constant, swap in a stronger or weaker model, and watch how much the score moves.",
    "zh": "区分它们的一种常见方法是模型替换实验：保持Harness不变，替换为更强或更弱的模型，并观察得分变化有多大。"
  },
  {
    "id": 23,
    "start": 147.137,
    "end": 152.0,
    "en": "If a stronger model doesn't raise the score, the bottleneck is the Harness.",
    "zh": "如果更强的模型没有提升得分，瓶颈就在Harness。"
  },
  {
    "id": 24,
    "start": 152.0,
    "end": 162.925,
    "en": "If a weaker model tanks the score and results swing sharply with model capability, the most direct reading is that the model itself is the bottleneck and current performance is dominated by the model.",
    "zh": "如果更弱的模型导致得分下降，并且结果随着模型能力剧烈波动，最直接的解读是模型本身是瓶颈，当前性能主要由模型决定。"
  },
  {
    "id": 25,
    "start": 162.925,
    "end": 171.525,
    "en": "Whether this is because the task is inherently hard or because the Harness relies too heavily on the model's prior knowledge requires further analysis.",
    "zh": "这可能是任务本身固有难度高，也可能是Harness过度依赖模型的先验知识，需要进一步分析。"
  },
  {
    "id": 26,
    "start": 171.525,
    "end": 183.425,
    "en": "Note that this differs from the ablation experiment above: ablation disables a Harness component to see how overall performance changes; model swapping holds the Harness constant and changes only the model.",
    "zh": "请注意，这与上述的消融实验不同：消融实验是禁用Harness的一个组件，以观察整体性能的变化；而模型替换则保持Harness不变，仅改变模型。"
  },
  {
    "id": 27,
    "start": 183.425,
    "end": 190.862,
    "en": "The former locates which part inside the Harness matters; the latter tells you whether the bottleneck is the model or the Harness.",
    "zh": "前者定位Harness内部哪个部分重要；后者告诉你瓶颈是模型还是Harness。"
  },
  {
    "id": 28,
    "start": 190.862,
    "end": 196.2,
    "en": "An evaluation system is worth even more in an era of rapid model evolution.",
    "zh": "在模型快速演进的时代，评估系统的价值更加凸显。"
  },
  {
    "id": 29,
    "start": 196.2,
    "end": 208.137,
    "en": "Models keep improving, but a new model that scores higher on public benchmarks will not necessarily do better on your task—it may even regress (perform worse than the old version in some respects).",
    "zh": "模型持续改进，但新模型在公开基准测试中得分更高，并不意味着它在你的任务上表现更好——甚至可能退步（在某些方面表现不如旧版本）。"
  },
  {
    "id": 30,
    "start": 208.137,
    "end": 213.962,
    "en": "Only a full run on your own evaluation dataset lets you make a data-driven upgrade decision.",
    "zh": "只有在你自己的评估数据集上进行全面运行，才能做出数据驱动的升级决策。"
  },
  {
    "id": 31,
    "start": 213.962,
    "end": 231.262,
    "en": "A solid evaluation system even makes \"building products for future models\" a viable strategy: if the current model isn't good enough for commercial deployment, finish the product anyway, build the evaluation set, track each new model's performance, and launch the moment one clears the bar.",
    "zh": "一个完善的评估系统甚至让“为未来模型构建产品”成为一种可行的策略：如果当前模型还不足以进行商业部署，就先完成产品，构建评估集，跟踪每个新模型的表现，并在某个模型达到标准时立即发布。"
  },
  {
    "id": 32,
    "start": 231.262,
    "end": 244.35,
    "en": "A complete evaluation system decomposes into four stages: what counts as success, where the tasks come from, who verifies, and how a score turns into a decision, as shown in Figure 7-1.",
    "zh": "一个完整的评估系统分解为四个阶段：什么是成功、任务来自哪里、谁来验证以及分数如何转化为决策，如图7-1所示。"
  },
  {
    "id": 33,
    "start": 244.35,
    "end": 250.6,
    "en": "As illustrated in Figure 7-1: The Four Stages of an Agent Evaluation System.",
    "zh": "如图7-1所示：智能体评估系统的四个阶段。"
  },
  {
    "id": 34,
    "start": 250.6,
    "end": 256.5,
    "en": "Anatomy of an Evaluation Task: The telecom Domain of τ²-bench.",
    "zh": "评估任务的结构：τ²-bench中的电信领域。"
  },
  {
    "id": 35,
    "start": 256.66,
    "end": 263.21,
    "en": "Let us begin by dissecting one real task from the telecom domain of τ²-bench in full.",
    "zh": "让我们从τ²-bench电信领域的实际任务中开始详细分析。"
  },
  {
    "id": 36,
    "start": 263.16,
    "end": 280.31,
    "en": "τ²-bench is Sierra's open-source project; clone it locally with the command in chapter7/tau2-bench-eval/README.md, then open the task file data/tau2/domains/telecom/tasks_small.json.",
    "zh": "τ²-bench是Sierra的开源项目；请使用第7章chapter7/tau2-bench-eval/README.md中的命令将其克隆到本地，然后打开任务文件data/tau/domains/telecom/tasks_small.json。"
  },
  {
    "id": 37,
    "start": 280.31,
    "end": 283.535,
    "en": "The Four Components of a Task Definition.",
    "zh": "任务定义的四个组成部分。"
  },
  {
    "id": 38,
    "start": 283.535,
    "end": 287.86,
    "en": "Below is one task from that file, abridged for readability.",
    "zh": "以下是该文件中的一个任务，为了可读性进行了精简。"
  },
  {
    "id": 39,
    "start": 287.86,
    "end": 292.597,
    "en": "Refer to the companion repository for the complete code implementation.",
    "zh": "请参考配套仓库获取完整的代码实现。"
  },
  {
    "id": 40,
    "start": 292.597,
    "end": 296.835,
    "en": "Four design decisions in this definition deserve elaboration.",
    "zh": "这个定义中有四个设计决策值得进一步解释。"
  },
  {
    "id": 41,
    "start": 296.835,
    "end": 300.522,
    "en": "The user's knowledge boundary is modeled explicitly.",
    "zh": "用户的知识边界被显式建模。"
  },
  {
    "id": 42,
    "start": 300.522,
    "end": 306.522,
    "en": "known_info contains only three facts: name, phone number, and country.",
    "zh": "known_info仅包含三个事实：姓名、电话号码和国家。"
  },
  {
    "id": 43,
    "start": 306.522,
    "end": 313.347,
    "en": "The two actual causes of the fault — airplane mode is on, data roaming is off — are not among them.",
    "zh": "故障的两个实际原因——飞行模式开启、数据漫游关闭——并不在此列。"
  },
  {
    "id": 44,
    "start": 313.347,
    "end": 321.947,
    "en": "The user does not know, and therefore cannot volunteer them; the Agent can only obtain them by asking questions and guiding the user to check.",
    "zh": "用户并不知道这些信息，因此无法主动提供；智能体只能通过提问并引导用户检查来获取这些信息。"
  },
  {
    "id": 45,
    "start": 321.947,
    "end": 335.522,
    "en": "This is how progressive information disclosure is implemented at the level of the task definition: not by constraining the simulator with a prompt that says \"don't reveal everything at once,\" but by modeling the user's knowledge as a field of its own.",
    "zh": "这就是在任务定义层面实现渐进式信息披露的方式：不是通过提示“不要一次性透露所有信息”，而是将用户的知识建模为一个独立的字段。"
  },
  {
    "id": 46,
    "start": 335.522,
    "end": 344.41,
    "en": "Most benchmarks state the complete requirement at the start of the task, whereas a real user's opening line is often no more than \"I can't get online.",
    "zh": "大多数基准测试会在任务开始时明确说明所有要求，而真实用户的初始提问往往只是“我无法上网。”"
  },
  {
    "id": 47,
    "start": 344.41,
    "end": 350.335,
    "en": "Clarifying a request until it is actionable is itself part of what an Agent must be able to do.",
    "zh": "将请求澄清到可执行的状态，本身就是智能体必须具备的能力。"
  },
  {
    "id": 48,
    "start": 350.335,
    "end": 355.11,
    "en": "The simulator receives a behavioral spec, not a script of lines.",
    "zh": "模拟器接收的是行为规范，而不是一段脚本。"
  },
  {
    "id": 49,
    "start": 355.11,
    "end": 380.21,
    "en": "task_instructions carries three kinds of constraint: an emotional setting (show mild frustration after the first unsuccessful attempt), an acceptance criterion (the issue counts as resolved only when the speed test returns excellent; poor, fair, and good are all rejected), and a grounding requirement — every answer about the device state must be based on the result of a tool call, \"Never make up the results of tool calls.",
    "zh": "task_instructions 包含三种约束：情绪设定（在第一次尝试失败后表现出轻微的挫败感）、接受标准（只有当速度测试结果为优秀时，问题才算解决；差、一般和良好都会被拒绝），以及基础要求——关于设备状态的每个回答都必须基于工具调用的结果，“永远不要编造工具调用的结果。”"
  },
  {
    "id": 50,
    "start": 380.21,
    "end": 392.722,
    "en": "The third is the most consequential: without a grounding constraint, the simulated user will follow the Agent's lead and confirm that the problem is fixed, and the evaluation degenerates into two models agreeing with each other.",
    "zh": "第三种约束最为关键：如果没有基础要求，模拟用户会跟随智能体的引导，并确认问题已解决，评估就会退化为两个模型互相认同。"
  },
  {
    "id": 51,
    "start": 392.722,
    "end": 396.647,
    "en": "The initial state is partitioned by which side controls it.",
    "zh": "初始状态根据哪一方控制它进行划分。"
  },
  {
    "id": 52,
    "start": 396.647,
    "end": 408.747,
    "en": "env_type takes two values, user and assistant: airplane mode and the roaming switch belong to the user's side, while the carrier-side enable_roaming belongs to the Agent's side.",
    "zh": "env_type 有两个值，user 和 assistant：飞行模式和漫游开关属于用户端，而运营商端的 enable_roaming 属于智能体端。"
  },
  {
    "id": 53,
    "start": 408.747,
    "end": 420.497,
    "en": "This partition determines the shape of the fault — roaming is provisioned on the carrier side but switched off on the user's handset, so an Agent querying the database sees nothing but \"configuration normal.",
    "zh": "这种划分决定了故障的形态——漫游功能由运营商端配置，但用户手机上被关闭了，因此一个查询数据库的智能体会看到的只是“配置正常”。"
  },
  {
    "id": 54,
    "start": 420.497,
    "end": 426.81,
    "en": "The fault sits on the side the database cannot see, and only guiding the user to check will surface it.",
    "zh": "故障位于数据库看不到的一侧，只有引导用户检查才能显现出来。"
  },
  {
    "id": 55,
    "start": 426.81,
    "end": 431.885,
    "en": "Scoring is defined in four layers, and this task uses only one of them.",
    "zh": "评分分为四个层次，而该任务只使用其中一层。"
  },
  {
    "id": 56,
    "start": 431.885,
    "end": 451.572,
    "en": "env_assertions checks the final state (mobile data available, speed test at or above 200 Mbps and rated excellent), actions checks whether the key actions occurred and which side performed them, and communicate_info and nl_assertions check whether the necessary information was conveyed to the user.",
    "zh": "env_assertions 检查最终状态（移动数据可用，速度测试达到或超过 200 Mbps 并被评为优秀），actions 检查是否发生了关键操作以及是由哪一方执行的，communicate_info 和 nl_assertions 检查是否向用户传达了必要的信息。"
  },
  {
    "id": 57,
    "start": 451.572,
    "end": 461.322,
    "en": "This task's reward_basis declares only ENV_ASSERTION; the remaining layers are still computed and recorded but do not enter the final reward.",
    "zh": "该任务的 reward_basis 仅声明 ENV_ASSERTION；其余层次仍会被计算和记录，但不会进入最终评分。"
  },
  {
    "id": 58,
    "start": 461.322,
    "end": 465.897,
    "en": "The scoring basis is declared per task rather than fixed globally.",
    "zh": "评分依据是按任务声明的，而不是全局固定的。"
  },
  {
    "id": 59,
    "start": 465.897,
    "end": 468.472,
    "en": "The Trajectory of a Real Run.",
    "zh": "真实运行的轨迹。"
  },
  {
    "id": 60,
    "start": 468.472,
    "end": 484.81,
    "en": "We now ask the reader to run the evaluation tasks of the τ²-bench telecom domain, observe the task design, the user simulator, the process and outcome verification logic, and the Agent's execution trajectory, and analyze why the Agent fails.",
    "zh": "现在我们请读者运行 τ²-bench 电信领域的评估任务，观察任务设计、用户模拟器、过程和结果验证逻辑，以及智能体的执行轨迹，并分析智能体为何失败。"
  },
  {
    "id": 61,
    "start": 484.81,
    "end": 492.697,
    "en": "Experiment 7-1 introductory difficulty, one star: : Run τ²-bench and Compare It with τ-bench",
    "zh": "实验7-1 介绍难度，一颗星：运行τ²-bench并将其与τ-bench进行比较"
  },
  {
    "id": 62,
    "start": 492.868,
    "end": 502.13,
    "en": "This experiment runs the τ²-bench evaluation framework to understand the design points of a human-computer interaction evaluation environment.",
    "zh": "本实验运行τ²-bench评估框架，以了解人机交互评估环境的设计要点。"
  },
  {
    "id": 63,
    "start": 502.08,
    "end": 514.343,
    "en": "First, read the task definition file along the path taken in this section: each task consists of four parts — known information, task instructions, initial state, and success conditions.",
    "zh": "首先，沿本节路径阅读任务定义文件：每个任务由四个部分组成——已知信息、任务指令、初始状态和成功条件。"
  },
  {
    "id": 64,
    "start": 514.343,
    "end": 529.368,
    "en": "Then run the full evaluation flow, observe the multi-turn dialogue between the user simulator and the Agent, and analyze typical failure modes (policy violations, omitted information, excessive escalation to a human agent, and so on).",
    "zh": "然后运行完整的评估流程，观察用户模拟器与智能体之间的多轮对话，并分析典型的失败模式（策略违规、遗漏信息、过度升级到人工智能体等）。"
  },
  {
    "id": 65,
    "start": 529.368,
    "end": 537.018,
    "en": "As illustrated in Figure 7-3: Dual-Control Environment and Layered Verification in τ²-bench.",
    "zh": "如图7-3所示：τ²-bench中的双控制环境和分层验证。"
  },
  {
    "id": 66,
    "start": 537.018,
    "end": 544.018,
    "en": "The companion repository retains one run record (chapter7/tau2-bench-eval).",
    "zh": "配套仓库保留了一个运行记录（chapter7/tau2-bench-eval）。"
  },
  {
    "id": 67,
    "start": 544.018,
    "end": 547.618,
    "en": "Below we analyze one successful run from it.",
    "zh": "下面我们分析其中一次成功的运行。"
  },
  {
    "id": 68,
    "start": 547.618,
    "end": 552.218,
    "en": "The first dozen or so turns are the account identification phase.",
    "zh": "前十几轮是账户识别阶段。"
  },
  {
    "id": 69,
    "start": 552.218,
    "end": 569.293,
    "en": "The Agent looks up customer C1001 by phone number, then queries the data usage of all three lines L1001, L1002, and L1003 one by one, and finally circles back to ask which number the user is actually using in France.",
    "zh": "智能体通过电话号码查找客户C1001，然后依次查询L1001、L1002和L1003的流量使用情况，最后回到问题，询问用户在法国实际使用的号码。"
  },
  {
    "id": 70,
    "start": 569.293,
    "end": 573.205,
    "en": "In message 17 it reaches an incorrect conclusion:",
    "zh": "在消息17中它得出一个错误结论："
  },
  {
    "id": 71,
    "start": 573.205,
    "end": 581.468,
    "en": "Agent (17): The number 555-123-2002 is not among your active lines.",
    "zh": "智能体（17）：号码555-123-2002不在您的激活线路中。"
  },
  {
    "id": 72,
    "start": 581.468,
    "end": 587.468,
    "en": "The closest match is 555-123-2001…",
    "zh": "最接近的匹配是555-123-2001……"
  },
  {
    "id": 73,
    "start": 587.468,
    "end": 592.28,
    "en": "That conclusion rests on a query of line L1001 alone.",
    "zh": "这个结论基于对L1001线路的查询。"
  },
  {
    "id": 74,
    "start": 592.28,
    "end": 599.78,
    "en": "After the user insists the number is correct, the Agent goes on to query L1002 and finally matches it.",
    "zh": "在用户坚持号码正确后，智能体继续查询L1002，最终匹配到了正确的号码。"
  },
  {
    "id": 75,
    "start": 599.78,
    "end": 602.855,
    "en": "The pivotal moment comes at message 30:",
    "zh": "关键的时刻出现在消息30："
  },
  {
    "id": 76,
    "start": 602.855,
    "end": 609.968,
    "en": "User (30) → calls check_network_status(), check_status_bar(",
    "zh": "用户（30）→ 调用 check_network_status()，check_status_bar("
  },
  {
    "id": 77,
    "start": 609.968,
    "end": 620.218,
    "en": "Tool returns (31): Airplane Mode: ON | Cellular Connection: no_service | Mobile Data Enabled: Yes | Data Roaming Enabled: No",
    "zh": "工具返回（31）：飞行模式：开启 | 移动网络连接：无服务 | 移动数据已启用：是 | 数据漫游已启用：否"
  },
  {
    "id": 78,
    "start": 620.218,
    "end": 626.755,
    "en": "User (33): I see my phone is currently in Airplane Mode, which is why there is no signal.",
    "zh": "用户（33）：我看到我的手机目前处于飞行模式，这就是没有信号的原因。"
  },
  {
    "id": 79,
    "start": 626.755,
    "end": 630.805,
    "en": "Mobile data is enabled, but data roaming is off.",
    "zh": "移动数据已启用，但数据漫游关闭。"
  },
  {
    "id": 80,
    "start": 630.805,
    "end": 634.043,
    "en": "Should I turn off Airplane Mode and try again?",
    "zh": "我应该关闭飞行模式再试一次吗？"
  },
  {
    "id": 81,
    "start": 634.043,
    "end": 638.343,
    "en": "The party issuing the tool call is the user, not the Agent.",
    "zh": "发出工具调用的主体是用户，而不是智能体。"
  },
  {
    "id": 82,
    "start": 638.343,
    "end": 654.005,
    "en": "This is the dual-control mechanism: the simulated user owns an independent tool set of its own, including check_status_bar, toggle_airplane_mode, reseat_sim_card, and run_speed_test.",
    "zh": "这是双控制机制：模拟用户拥有自己的独立工具集，包括 check_status_bar、toggle_airplane_mode、reseat_sim_card 和 run_speed_test。"
  },
  {
    "id": 83,
    "start": 654.005,
    "end": 677.768,
    "en": "The remaining troubleshooting goes smoothly: the Agent asks the user to turn off airplane mode and turn on roaming, the user performs both actions (35, 37), and the status bar switches to full-bar 5G; the Agent asks for a speed test, which returns 275 Mbps rated Excellent (46), and the user confirms the issue is resolved.",
    "zh": "剩下的故障排查顺利进行：智能体让用户提供关闭飞行模式并开启数据漫游，用户执行了两个操作（35, 37），状态栏切换为满格 5G；智能体要求进行速度测试，结果返回 275 Mbps，评级为优秀（46），用户确认问题已解决。"
  },
  {
    "id": 84,
    "start": 677.768,
    "end": 682.993,
    "en": "Both env_assertions pass and reward = 1.0.",
    "zh": "所有 env_assertions 都通过，奖励 = 1.0。"
  },
  {
    "id": 85,
    "start": 682.993,
    "end": 688.03,
    "en": "This full-marks trajectory also contains a problem the verifier never caught.",
    "zh": "这个满分轨迹中也包含验证器从未发现的问题。"
  },
  {
    "id": 86,
    "start": 688.03,
    "end": 702.743,
    "en": "The opening paragraph of the telecom Agent policy states \"You should only make one tool call at a time,\" yet in message 4 the Agent issued get_customer_by_phone and get_customer_by_name in a single turn.",
    "zh": "电信智能体策略的开头段落指出“你应一次只进行一个工具调用”，但在消息 4 中，智能体在一个回合中同时发起了 get_customer_by_phone 和 get_customer_by_name。"
  },
  {
    "id": 87,
    "start": 702.743,
    "end": 710.343,
    "en": "The verifier did not mark this as an error, because this task's reward_basis considers only the final state.",
    "zh": "验证器未将其标记为错误，因为此任务的奖励基础仅考虑最终状态。"
  },
  {
    "id": 88,
    "start": 710.343,
    "end": 720.893,
    "en": "This is not an oversight in τ²-bench but the inherent price of a binary reward: it trades process granularity for a single number that is comparable across models.",
    "zh": "这不是 τ²-bench 的疏漏，而是二进制奖励的固有代价：它以牺牲过程粒度为代价，换取一个可跨模型比较的单一数值。"
  },
  {
    "id": 89,
    "start": 720.893,
    "end": 730.53,
    "en": "Production evaluation systems, however, usually need more: not only a verdict on whether the outcome is right, but an indication of where the problem lies.",
    "zh": "然而，生产评估系统通常需要更多：不仅要判断结果是否正确，还需要指出问题所在。"
  },
  {
    "id": 90,
    "start": 730.53,
    "end": 733.93,
    "en": "The failed task is equally worth analyzing.",
    "zh": "失败的任务同样值得分析。"
  },
  {
    "id": 91,
    "start": 733.93,
    "end": 746.88,
    "en": "The user's number is 555-123-2002, yet the Agent settled on line L1001 and kept reasoning from its 3.2/5 GB usage figure.",
    "zh": "用户的号码是555-123-2002，但智能体选择了线路L1001，并且一直根据其3.2/5 GB的使用数据进行推理。"
  },
  {
    "id": 92,
    "start": 746.88,
    "end": 768.143,
    "en": "Along the way, get_details_by_id(L1001) explicitly returned 555-123-2001 as that line's number; the Agent read the result but did not revise its judgment, then spent dozens of messages on unrelated diagnostics and finally escalated to a human agent.",
    "zh": "途中，get_details_by_id(L1001)明确返回了555-123-2001作为该线路的号码；智能体读取了结果，但没有修改其判断，然后在无关诊断上花费了数十条消息，最后升级到了人工客服。"
  },
  {
    "id": 93,
    "start": 768.143,
    "end": 786.43,
    "en": "It did in fact complete half the task — it guided the user to turn off data saver mode, and that user-side action genuinely occurred and was verified by the environment — but the wrong line selection meant the required 2 GB mobile data top-up was never completed, and all three final-state assertions failed.",
    "zh": "它确实完成了任务的一半——它引导用户关闭数据节省模式，而该用户侧的操作确实发生了，并且被环境验证了——但由于选择了错误的线路，所需的2GB移动数据充值从未完成，所有三个最终状态断言都失败了。"
  },
  {
    "id": 94,
    "start": 786.43,
    "end": 799.38,
    "en": "This failure pattern closely resembles the AndroidWorld case discussed later in \"Failure Attribution\": the evidence needed to correct its earlier conclusion was already in the context, but the Agent failed to revisit that conclusion.",
    "zh": "这种失败模式与后面章节中讨论的AndroidWorld案例非常相似：纠正其早期结论所需的证据已经在上下文中，但智能体未能重新审视该结论。"
  },
  {
    "id": 95,
    "start": 799.54,
    "end": 811.102,
    "en": "This one task already poses every question an evaluation set has to answer: what counts as success, where tasks come from, who verifies, and how a score turns into a decision.",
    "zh": "这个任务已经提出了评估集需要回答的所有问题：什么是成功，任务从哪里来，谁来验证，以及分数如何转化为决策。"
  },
  {
    "id": 96,
    "start": 811.052,
    "end": 814.09,
    "en": "The following sections take them in turn.",
    "zh": "接下来的章节将逐一讨论这些问题。"
  },
  {
    "id": 97,
    "start": 814.09,
    "end": 817.777,
    "en": "Evaluation Metrics: Defining Success.",
    "zh": "评估指标：定义成功。"
  },
  {
    "id": 98,
    "start": 817.777,
    "end": 823.002,
    "en": "The evaluation result in the previous section was four of five tasks passed.",
    "zh": "前一节的评估结果是五项任务中有四项通过。"
  },
  {
    "id": 99,
    "start": 823.002,
    "end": 828.202,
    "en": "The number 0.8 by itself says nothing about whether the system is usable.",
    "zh": "0.8这个数字本身并不能说明系统是否可用。"
  },
  {
    "id": 100,
    "start": 828.202,
    "end": 841.727,
    "en": "If it belongs to a refund customer service Agent, it means one user in five does not get the refund they are owed; if it belongs to a security Agent used to hunt for vulnerabilities, hitting four out of five is quite respectable.",
    "zh": "如果它属于退款客服智能体，这意味着每五个用户中就有一个无法获得应得的退款；如果它属于用于寻找漏洞的安全智能体，四分之五的通过率则相当不错。"
  },
  {
    "id": 101,
    "start": 841.727,
    "end": 846.727,
    "en": "The difference lies in how high a success rate the business scenario demands.",
    "zh": "区别在于业务场景对成功率的要求有多高。"
  },
  {
    "id": 102,
    "start": 846.727,
    "end": 851.065,
    "en": "Technical Wonders: Capability Ceilings with Pass@k.",
    "zh": "技术奇迹：通过Pass@k定义能力上限。"
  },
  {
    "id": 103,
    "start": 851.065,
    "end": 856.327,
    "en": "Many current models and Agents are still in what can be called the technical wonder phase.",
    "zh": "许多当前的模型和智能体仍处于可以称为技术奇迹阶段的时期。"
  },
  {
    "id": 104,
    "start": 856.327,
    "end": 866.965,
    "en": "The wonder is a capability ceiling demonstrated under many attempts, a generous time budget, and human selection: one success is enough to prove that the thing is possible in principle.",
    "zh": "这种奇迹是在多次尝试、宽松的时间预算和人工选择下展示的能力上限：只要有一次成功，就能证明该事物在原则上是可行的。"
  },
  {
    "id": 105,
    "start": 866.965,
    "end": 879.44,
    "en": "That is exactly the logic of Pass@k — run the same task k times and count it as passed if at least one run passes; when the output is a continuous score, take the best run and call it Best@k.",
    "zh": "这正是Pass@k的逻辑——运行同一任务k次，只要至少一次成功就算通过；当输出是一个连续分数时，取最佳运行结果，称为Best@k。"
  },
  {
    "id": 106,
    "start": 879.44,
    "end": 900.74,
    "en": "Anthropic's discussion of long-running Agents illustrates this kind of ceiling: letting an Agent work autonomously for a week and write a C compiler from scratch; having it explore until it finds a counterexample to an important mathematical conjecture; or having it review open-source software over and over until it surfaces a serious security hole that has been sitting there for decades.",
    "zh": "Anthropic对长期运行的智能体的讨论说明了这种上限：让一个智能体自主运行一周并从零开始编写一个C编译器；让它不断探索直到找到一个重要的数学猜想的反例；或者让它反复审查开源软件，直到发现一个存在了几十年的严重安全漏洞。"
  },
  {
    "id": 107,
    "start": 900.892,
    "end": 913.542,
    "en": "For engineering and research exploration of this kind, what gets demonstrated is usually not \"right every time\" but a single breakthrough trajectory that finally appears once the exploration budget is stretched far enough.",
    "zh": "对于这类工程和研究探索，通常展示的并不是“每次都能正确”，而是一条最终在探索预算足够大时出现的突破性轨迹。"
  },
  {
    "id": 108,
    "start": 913.492,
    "end": 924.567,
    "en": "For scientific discovery, vulnerability hunting, and open-ended creative work, that ceiling is valuable in itself: a human can pick the best of k candidate trajectories.",
    "zh": "对于科学发现、漏洞挖掘和开放式的创造性工作来说，这个上限本身就有价值：人类可以挑选出k个候选轨迹中的最佳者。"
  },
  {
    "id": 109,
    "start": 924.567,
    "end": 930.917,
    "en": "Beyond the foundation-model labs, many application companies use the technical-wonder strategy too.",
    "zh": "除了基础模型实验室之外，许多应用公司也使用这种技术奇迹策略。"
  },
  {
    "id": 110,
    "start": 930.917,
    "end": 946.067,
    "en": "Manus drew wide attention because it handed people a virtual computer, letting an audience with no intuition for Agents discover that AI can operate a computer the way a person does — working for half an hour or an hour and completing a complex task step by step.",
    "zh": "Manus引起广泛关注的原因是它给人提供了一个虚拟计算机，让没有智能体直觉的观众发现AI可以像人一样操作计算机——工作半小时或一小时并逐步完成复杂任务。"
  },
  {
    "id": 111,
    "start": 946.067,
    "end": 951.454,
    "en": "OpenClaw gave many people their first sense that an Agent could feel like a live colleague.",
    "zh": "OpenClaw让许多人第一次感受到智能体就像一个活的同事。"
  },
  {
    "id": 112,
    "start": 951.454,
    "end": 967.054,
    "en": "Users assign it work through an instant-messaging app much as they would a real person; it can reach every file on the computer and every online service, it reports back or asks for more information when it reaches a certain point, and it can even wake itself up to check and handle email.",
    "zh": "用户通过即时通讯应用给它分配任务，就像给一个真实的人分配任务一样；它可以访问计算机上的每一个文件和每一个在线服务，在达到某个阶段时会报告结果或请求更多信息，甚至可以自己唤醒以检查和处理电子邮件。"
  },
  {
    "id": 113,
    "start": 967.054,
    "end": 974.104,
    "en": "Early Manus and OpenClaw did not have high success rates on complex tasks, and their token costs were steep.",
    "zh": "早期的Manus和OpenClaw在复杂任务上的成功率不高，且它们的token成本很高。"
  },
  {
    "id": 114,
    "start": 974.104,
    "end": 984.192,
    "en": "But because these Agent frameworks are general-purpose, complex tasks tend to have a high Pass@k when paired with the strongest models, which is a high technical ceiling.",
    "zh": "但因为这些智能体框架是通用的，当与最强模型配对时，复杂任务往往具有较高的Pass@k值，这是一个很高的技术上限。"
  },
  {
    "id": 115,
    "start": 984.192,
    "end": 990.942,
    "en": "Those technical wonders were shared widely on social networks, and that was the key to these products' success.",
    "zh": "这些技术奇迹在社交媒体上广泛传播，这也是这些产品成功的关键。"
  },
  {
    "id": 116,
    "start": 990.942,
    "end": 995.092,
    "en": "Business Reliability: Focus on Pass^k.",
    "zh": "业务可靠性：关注Pass^k。"
  },
  {
    "id": 117,
    "start": 995.092,
    "end": 1001.304,
    "en": "Real businesses usually care about the opposite: not a single mistake across repeated attempts.",
    "zh": "现实中的企业通常关心相反的问题：不是在多次尝试中出现一次错误。"
  },
  {
    "id": 118,
    "start": 1001.304,
    "end": 1016.417,
    "en": "We call this target Pass^k (read as Pass consecutive k): run the same task k times in a row, require every run to pass, and trigger none of the automatic-failure criteria, such as safety or compliance violations or hallucinations.",
    "zh": "我们称这个目标为Pass^k（读作连续通过k次）：连续运行同一任务k次，要求每次运行都通过，并且不触发任何自动失败条件，例如安全或合规违规或幻觉。"
  },
  {
    "id": 119,
    "start": 1016.417,
    "end": 1022.717,
    "en": "It answers \"can the Agent deliver reliably\" rather than \"can it occasionally work a miracle\".",
    "zh": "它回答的是“智能体能否可靠交付”而不是“它是否偶尔能创造奇迹”。"
  },
  {
    "id": 120,
    "start": 1022.717,
    "end": 1030.054,
    "en": "If the runs are independent and the single-run success rate is p, the relationship between the two metrics is straightforward:",
    "zh": "如果运行是独立的，单次运行的成功率是p，这两个指标之间的关系是直接的："
  },
  {
    "id": 121,
    "start": 1030.054,
    "end": 1037.517,
    "en": "\\mathrm{Pass@k}=1-(1-p)^k,\\qquad",
    "zh": "\\mathrm{Pass@k}=1-(1-p)^k,\\qquad"
  },
  {
    "id": 122,
    "start": 1037.517,
    "end": 1043.042,
    "en": "\\mathrm{Pass}^{k}=p^k.",
    "zh": "\\mathrm{Pass}^{k}=p^k."
  },
  {
    "id": 123,
    "start": 1043.042,
    "end": 1059.029,
    "en": "At p=0.6 and k=5, for instance, Pass@5 =1-0.4^5\\approx99.0\\% — it looks as though at least one run almost always succeeds.",
    "zh": "例如，当p=0.6且k=5时，Pass@5 =1-0.4^5\\approx99.0\\% —— 看起来至少有一次运行几乎总是成功的。"
  },
  {
    "id": 124,
    "start": 1059.029,
    "end": 1070.242,
    "en": "But Pass^5 =0.6^5\\approx7.8\\%, which says that getting five in a row without a slip is still hard.",
    "zh": "但Pass^5 =0.6^5\\approx7.8\\%，这说明连续五次不犯错仍然很难。"
  },
  {
    "id": 125,
    "start": 1070.242,
    "end": 1082.517,
    "en": "The first number is the right way to measure a capability ceiling during exploration; only the second comes close to the reliability that payments, refunds, permission changes, and production deployments demand.",
    "zh": "第一个数字是在探索期间衡量能力上限的正确方式；只有第二个数字才接近支付、退款、权限更改和生产部署所要求的可靠性。"
  },
  {
    "id": 126,
    "start": 1082.517,
    "end": 1092.504,
    "en": "An evaluation report must state exactly what the k attempts are: k independent samples of the same task, or k consecutive tasks on a production pipeline.",
    "zh": "评估报告必须明确说明k次尝试是什么：k个相同任务的独立样本，或者生产流程中的k个连续任务。"
  },
  {
    "id": 127,
    "start": 1092.504,
    "end": 1104.367,
    "en": "For operations with side effects you cannot simply \"retry until it works\"; sample in a sandbox or a rollback-capable environment instead, and record every failure in the reliability metric.",
    "zh": "对于有副作用的操作，你不能简单地“重试直到成功”；而应在沙盒或可回滚的环境中进行采样，并在可靠性指标中记录每一次失败。"
  },
  {
    "id": 128,
    "start": 1104.367,
    "end": 1106.879,
    "en": "The Evaluation Environment.",
    "zh": "评估环境。"
  },
  {
    "id": 129,
    "start": 1106.879,
    "end": 1111.254,
    "en": "Once the metric is settled, the next question is where to test.",
    "zh": "一旦确定了指标，下一个问题是在哪里测试。"
  },
  {
    "id": 130,
    "start": 1111.254,
    "end": 1120.329,
    "en": "An evaluation environment is an apparatus that can be run repeatedly: given the same initial state, the same Agent should produce comparable results.",
    "zh": "评估环境是一个可以重复运行的装置：给定相同的初始状态，相同的智能体应产生可比较的结果。"
  },
  {
    "id": 131,
    "start": 1120.329,
    "end": 1122.542,
    "en": "The Five Components.",
    "zh": "五个组成部分。"
  },
  {
    "id": 132,
    "start": 1122.542,
    "end": 1125.954,
    "en": "Return to the telecom task dissected above.",
    "zh": "回到上面分析的电信任务。"
  },
  {
    "id": 133,
    "start": 1125.954,
    "end": 1132.292,
    "en": "Taking it as the reference, everything a repeatable evaluation environment requires is already present.",
    "zh": "以它为参考，一个可重复的评估环境所需的一切已经具备。"
  },
  {
    "id": 134,
    "start": 1132.292,
    "end": 1145.629,
    "en": "Dataset is the task file itself: the initial state, the ticket for the Agent, the behavioral spec for the simulator, and the acceptance criteria are packaged into a single record, and one record is one test case.",
    "zh": "数据集就是任务文件本身：初始状态、智能体的工单、模拟器的行为规范以及验收标准被打包成一条记录，每条记录是一个测试用例。"
  },
  {
    "id": 135,
    "start": 1145.629,
    "end": 1160.142,
    "en": "Environment State is the mutable information during task execution: customers, lines, plans, and bills in the database, plus airplane mode, roaming, the data saver switch, and the remaining data allowance on the device side.",
    "zh": "环境状态是任务执行过程中的可变信息：数据库中的客户、线路、计划和账单，以及设备端的飞行模式、漫游、数据节省开关和剩余的数据配额。"
  },
  {
    "id": 136,
    "start": 1160.142,
    "end": 1165.604,
    "en": "It must be resettable, and initialization_actions is the reset script.",
    "zh": "它必须可以重置，初始化_actions是重置脚本。"
  },
  {
    "id": 137,
    "start": 1165.604,
    "end": 1173.254,
    "en": "Realism requires state changes to follow business logic; controllability requires that every run start from the same point.",
    "zh": "现实性要求状态变化遵循业务逻辑；可控性要求每次运行都从同一起点开始。"
  },
  {
    "id": 138,
    "start": 1173.412,
    "end": 1176.049,
    "en": "Tools belong to two sides.",
    "zh": "工具属于两个方面。"
  },
  {
    "id": 139,
    "start": 1175.999,
    "end": 1187.774,
    "en": "The Agent can call carrier-side operations such as looking up a customer, checking usage, topping up mobile data, and transferring to a human agent; the user can operate the switches on the device.",
    "zh": "智能体可以调用运营商端的操作，如查找客户、检查使用情况、为移动数据充值以及转接人工客服；用户可以在设备上操作开关。"
  },
  {
    "id": 140,
    "start": 1187.774,
    "end": 1195.637,
    "en": "Both tool sets are atomic operations — there is no high-level abstraction such as \"solve the user's connectivity problem.",
    "zh": "两种工具集都是原子操作——不存在诸如“解决用户的连接问题”这样的高级抽象。"
  },
  {
    "id": 141,
    "start": 1195.637,
    "end": 1204.762,
    "en": "Too high a level of abstraction reduces the evaluation to a test of a single function call, with the planning and reasoning absorbed into the tool itself.",
    "zh": "抽象层次过高会将评估简化为对单个函数调用的测试，而规划和推理被吸收到了工具本身中。"
  },
  {
    "id": 142,
    "start": 1204.762,
    "end": 1212.774,
    "en": "Rubric is the four layers of checks in evaluation_criteria, plus the aggregation rule in reward_basis.",
    "zh": "评分标准是评估标准中的四层检查，加上奖励基础中的聚合规则。"
  },
  {
    "id": 143,
    "start": 1212.774,
    "end": 1218.374,
    "en": "Interaction Protocol specifies the order of interaction and the termination conditions.",
    "zh": "交互协议规定了交互顺序和终止条件。"
  },
  {
    "id": 144,
    "start": 1218.374,
    "end": 1236.137,
    "en": "Here the normal termination signal is the simulated user emitting ###STOP###; there is also a turn limit, and the simulated user may end the conversation on its own once its patience runs out — poor communication efficiency counts as a failure in itself.",
    "zh": "这里的正常终止信号是模拟用户发出###STOP###；还存在一个回合限制，模拟用户可能在耐心耗尽后自行结束对话——沟通效率低下本身就是一种失败。"
  },
  {
    "id": 145,
    "start": 1236.137,
    "end": 1241.374,
    "en": "Remove any one of the five and the evaluation no longer forms a repeatable loop.",
    "zh": "去掉五个要素中的任何一个，评估就不再形成可重复的循环。"
  },
  {
    "id": 146,
    "start": 1241.374,
    "end": 1246.637,
    "en": "The same five serve as the reference frame when we examine other benchmarks below.",
    "zh": "这五个要素在我们下面分析其他基准时作为参考框架。"
  },
  {
    "id": 147,
    "start": 1246.637,
    "end": 1251.312,
    "en": "Human-Computer Interaction and Tool-Calling Evaluation Environments.",
    "zh": "人机交互与工具调用评估环境。"
  },
  {
    "id": 148,
    "start": 1251.312,
    "end": 1259.124,
    "en": "Tasks like telecom must have a counterpart to interact with, so the user simulation among the five components is indispensable.",
    "zh": "像电信这样的任务必须有对应的交互对象，因此五要素中的用户模拟器是不可或缺的。"
  },
  {
    "id": 149,
    "start": 1259.124,
    "end": 1278.974,
    "en": "Another large class of tasks has no conversational counterpart at all: in code generation, data analysis, and mathematical problem solving, the Agent interacts only with tools from start to finish, correctness is decided by whether execution verification passes, and neither human annotation nor model judgment is required.",
    "zh": "另一大类任务根本没有对话对应物：在代码生成、数据分析和数学问题解决中，智能体从头到尾只与工具交互，正确性由执行验证是否通过决定，不需要人工标注或模型判断。"
  },
  {
    "id": 150,
    "start": 1278.974,
    "end": 1298.037,
    "en": "Such environments dispense with the user simulator; the other four components remain but take simpler forms — the environment state is a file system or a database, the rubric is a piece of test code, and the interaction protocol degenerates into \"keep calling tools until an answer is produced or the turn budget is exhausted.",
    "zh": "这类环境省去了用户模拟器；其余四个要素仍然存在，但形式更简单——环境状态是一个文件系统或数据库，评分标准是一段测试代码，交互协议退化为“持续调用工具直到得到答案或回合预算耗尽”。"
  },
  {
    "id": 151,
    "start": 1298.037,
    "end": 1308.012,
    "en": "The Verifiers framework stratifies these environments along two dimensions: whether the task needs to maintain state across turns, and whether it needs isolation.",
    "zh": "Verifiers框架沿着两个维度对这些环境进行分层：任务是否需要在多个回合中保持状态，以及是否需要隔离。"
  },
  {
    "id": 152,
    "start": 1308.012,
    "end": 1329.987,
    "en": "SingleTurnEnv suits asking a math question and verifying the answer directly; ToolEnv suits searching several web pages, synthesizing an answer, and then verifying the final result; StatefulToolEnv suits modifying a database record and then verifying the state change; SandboxEnv suits running code in a sandbox and then checking the output files.",
    "zh": "SingleTurnEnv适合直接提问数学问题并验证答案；ToolEnv适合搜索多个网页、综合信息并验证最终结果；StatefulToolEnv适合修改数据库记录并验证状态变化；SandboxEnv适合在沙箱中运行代码并检查输出文件。"
  },
  {
    "id": 153,
    "start": 1329.987,
    "end": 1339.812,
    "en": "Table 7-1 summarizes these four environment types, making it easy to choose based on task state, tool calling, and isolation requirements.",
    "zh": "表7-1总结了这四种环境类型，使根据任务状态、工具调用和隔离需求进行选择变得简单。"
  },
  {
    "id": 154,
    "start": 1339.812,
    "end": 1344.462,
    "en": "Table 7-1 Comparison of Verifiers Environment Types",
    "zh": "表7-1 Verifiers环境类型的比较"
  },
  {
    "id": 155,
    "start": 1344.462,
    "end": 1355.487,
    "en": "Environment Type: SingleTurnEnv; State Persistence: None; Tool Calls: None; Typical Use Case: Single-turn Q&A, math problems.",
    "zh": "环境类型：SingleTurnEnv；状态持久性：无；工具调用：无；典型用例：单轮问答、数学问题。"
  },
  {
    "id": 156,
    "start": 1355.487,
    "end": 1365.999,
    "en": "Environment Type: ToolEnv; State Persistence: None; Tool Calls: Multi-turn; Typical Use Case: Search + information synthesis.",
    "zh": "环境类型：ToolEnv；状态持久性：无；工具调用：多轮；典型用例：搜索+信息综合。"
  },
  {
    "id": 157,
    "start": 1365.999,
    "end": 1376.737,
    "en": "Environment Type: StatefulToolEnv; State Persistence: Yes; Tool Calls: Multi-turn; Typical Use Case: Modifying database records.",
    "zh": "环境类型：StatefulToolEnv；状态持久性：是；工具调用：多轮；典型用例：修改数据库记录。"
  },
  {
    "id": 158,
    "start": 1376.737,
    "end": 1388.149,
    "en": "Environment Type: SandboxEnv; State Persistence: Yes + isolated; Tool Calls: Multi-turn; Typical Use Case: Code execution and testing.",
    "zh": "环境类型：SandboxEnv；状态持久性：是+隔离；工具调用：多轮；典型用例：代码执行与测试。"
  },
  {
    "id": 159,
    "start": 1388.149,
    "end": 1400.312,
    "en": "The framework supports parallel sampling and trajectory caching; the complete trajectory of every evaluation (observations, actions, rewards) is saved for later analysis and replay.",
    "zh": "该框架支持并行采样和轨迹缓存；每次评估的完整轨迹（观察、动作、奖励）都会被保存以供后续分析和回放。"
  },
  {
    "id": 160,
    "start": 1400.312,
    "end": 1411.537,
    "en": "In addition, a tool's effect depends on the current state, so on failure it should return a clear error message rather than a bare failure flag, allowing the Agent to adjust its strategy accordingly.",
    "zh": "此外，由于工具的效果取决于当前状态，因此在失败时应返回清晰的错误信息，而不是仅返回失败标志，从而使智能体能够相应地调整策略。"
  },
  {
    "id": 161,
    "start": 1411.537,
    "end": 1425.537,
    "en": "Tool-calling evaluation examines the correctness of observable state changes, while human-computer interaction evaluation examines the soundness of the communication strategy — the former verifies action, the latter verifies guidance.",
    "zh": "工具调用评估检查可观测状态变化的正确性，人机交互评估检查通信策略的合理性——前者验证动作，后者验证指导。"
  },
  {
    "id": 162,
    "start": 1425.537,
    "end": 1430.299,
    "en": "Figure 7-2 contrasts the structure of the two environment types.",
    "zh": "图7-2对比了这两种环境类型的结构。"
  },
  {
    "id": 163,
    "start": 1430.299,
    "end": 1437.512,
    "en": "As illustrated in Figure 7-2: Tool-Calling and Human-Computer Interaction Evaluation Environments.",
    "zh": "如图7-2所示：工具调用与人机交互评估环境。"
  },
  {
    "id": 164,
    "start": 1437.512,
    "end": 1440.524,
    "en": "Design of the Evaluation Dataset.",
    "zh": "评估数据集的设计。"
  },
  {
    "id": 165,
    "start": 1440.676,
    "end": 1445.338,
    "en": "The evaluation environment is the stage and the dataset is the script.",
    "zh": "评估环境是舞台，数据集是剧本。"
  },
  {
    "id": 166,
    "start": 1445.288,
    "end": 1457.438,
    "en": "The same five components, applied to a different class of task, may be filled in entirely differently: where the tasks come from, how deeply the verifier can check, and how memorization is prevented.",
    "zh": "同样的五个组件，应用于不同的任务类别，可能会被完全不同的方式填充：任务的来源、验证器可以检查的深度，以及如何防止记忆化。"
  },
  {
    "id": 167,
    "start": 1457.438,
    "end": 1467.438,
    "en": "This section starts from the design practice of several public benchmarks and ends with a more practical question — where the tasks in a self-built evaluation set should come from.",
    "zh": "本节从几个公开基准的设计实践开始，最终回归到一个更实际的问题——自建评估集中的任务应来自何处。"
  },
  {
    "id": 168,
    "start": 1467.438,
    "end": 1471.176,
    "en": "A Cross-Benchmark Comparison of Design Choices.",
    "zh": "跨基准设计选择的比较。"
  },
  {
    "id": 169,
    "start": 1471.176,
    "end": 1484.051,
    "en": "The presence or absence of an interactive counterpart, distinguished in the previous section, is only the first-order difference at the environment level; the divergences at the dataset level reveal the design trade-offs more clearly.",
    "zh": "交互式对应物的存在与否，在前一节中已有所区分，这只是环境层面的一阶差异；数据集层面的分歧更清晰地揭示了设计权衡。"
  },
  {
    "id": 170,
    "start": 1484.051,
    "end": 1489.526,
    "en": "Table 7-2 places several frequently cited benchmarks side by side.",
    "zh": "表7-2将一些经常引用的基准并列展示。"
  },
  {
    "id": 171,
    "start": 1489.526,
    "end": 1494.551,
    "en": "Table 7-2 Key Design Choices of Several Agent Benchmarks",
    "zh": "表7-2 几个智能体基准的关键设计选择"
  },
  {
    "id": 172,
    "start": 1494.551,
    "end": 1515.588,
    "en": "Benchmark: τ²-bench; Capability Tested: Human-computer interaction and tool calling in customer service; Task Source: Hand-written + combinatorial generation; Environment Played By: User simulator + business database; Verifier: Four layers of checks aggregated to binary by reward_basis.",
    "zh": "基准：τ²-bench；测试能力：人机交互和客服中的工具调用；任务来源：手写 + 组合生成；环境由：用户模拟器 + 业务数据库；验证器：四层检查通过 reward_basis 聚合为二进制结果。"
  },
  {
    "id": 173,
    "start": 1515.588,
    "end": 1539.676,
    "en": "Benchmark: SWE-bench Verified; Capability Tested: Software development, coding; Task Source: Real GitHub issues, manually screened; Environment Played By: Code repository + test suite; Verifier: FAIL\\_TO\\_PASS / PASS\\_TO\\_PASS dual verification.",
    "zh": "基准：SWE-bench Verified；测试能力：软件开发、编码；任务来源：真实的GitHub问题，人工筛选；环境由：代码仓库 + 测试套件；验证器：FAIL_TO_PASS / PASS_TO_PASS 双重验证。"
  },
  {
    "id": 174,
    "start": 1539.676,
    "end": 1555.713,
    "en": "Benchmark: AndroidWorld; Capability Tested: Operating the Android phone GUI; Task Source: Parameterized template instantiation; Environment Played By: Real Android emulator; Verifier: Final UI state assertions.",
    "zh": "基准：AndroidWorld；测试能力：操作安卓手机GUI；任务来源：参数化模板实例化；环境由：真实安卓模拟器；验证器：最终UI状态断言。"
  },
  {
    "id": 175,
    "start": 1555.713,
    "end": 1573.163,
    "en": "Benchmark: OSWorld; Capability Tested: Operating the Linux desktop GUI; Task Source: Started from a preconfigured intermediate state; Environment Played By: Real virtual machine; Verifier: 134 independent evaluation functions.",
    "zh": "基准：OSWorld；测试能力：操作Linux桌面GUI；任务来源：从预配置的中间状态开始；环境由：真实虚拟机；验证器：134个独立评估函数。"
  },
  {
    "id": 176,
    "start": 1573.163,
    "end": 1588.126,
    "en": "Benchmark: Terminal-Bench; Capability Tested: Operating the Linux terminal, coding; Task Source: Hand-written; Environment Played By: Docker container; Verifier: File system checks + real execution.",
    "zh": "基准：Terminal-Bench；测试能力：操作Linux终端、编码；任务来源：手写；环境由：Docker容器；验证器：文件系统检查 + 实际执行。"
  },
  {
    "id": 177,
    "start": 1588.126,
    "end": 1603.963,
    "en": "Benchmark: GAIA; Capability Tested: General-purpose AI assistant gathering information; Task Source: Hand-written + proprietary attachments; Environment Played By: The open internet; Verifier: Exact string matching.",
    "zh": "基准：GAIA；测试能力：通用AI助手信息收集；任务来源：手写 + 专有附件；环境由：开放互联网；验证器：精确字符串匹配。"
  },
  {
    "id": 178,
    "start": 1603.963,
    "end": 1605.776,
    "en": "Verifiers.",
    "zh": "验证器。"
  },
  {
    "id": 179,
    "start": 1605.776,
    "end": 1613.038,
    "en": "An Agent can easily write an expansive report claiming the task is fully complete when in fact nothing of the sort happened.",
    "zh": "当实际上根本没有发生任何事情时，智能体很容易写出一份详尽的报告声称任务已完成。"
  },
  {
    "id": 180,
    "start": 1613.038,
    "end": 1620.588,
    "en": "An evaluation framework must verify facts that a machine can check independently, not the Agent's own account of itself.",
    "zh": "评估框架必须验证机器可以独立检查的事实，而不是智能体对自己的描述。"
  },
  {
    "id": 181,
    "start": 1620.588,
    "end": 1627.476,
    "en": "SWE-bench Verified decomposes \"the fix is complete\" into two independent propositions.",
    "zh": "SWE-bench 验证将“修复已完成”分解为两个独立的命题。"
  },
  {
    "id": 182,
    "start": 1627.476,
    "end": 1637.126,
    "en": "One set is FAIL\\_TO\\_PASS: failing before the fix and passing after it, proving the problem really was solved.",
    "zh": "一组是 FAIL_TO_PASS：修复前失败，修复后通过，证明问题确实已被解决。"
  },
  {
    "id": 183,
    "start": 1637.126,
    "end": 1646.438,
    "en": "The other is PASS\\_TO\\_PASS: passing both before and after, proving no new defect was introduced.",
    "zh": "另一组是 PASS_TO_PASS：修复前后均通过，证明没有引入新缺陷。"
  },
  {
    "id": 184,
    "start": 1646.438,
    "end": 1655.851,
    "en": "Check only the first and an Agent can slip through by deleting or rewriting the assertions that stand in its way; check only the second and you have checked nothing at all.",
    "zh": "仅检查第一组，一个智能体可以通过删除或重写阻碍它的断言而蒙混过关；仅检查第二组，则等于什么都没检查。"
  },
  {
    "id": 185,
    "start": 1655.851,
    "end": 1662.638,
    "en": "Only checking both makes \"fixed\" and \"did not break anything\" two separately provable conclusions.",
    "zh": "只有同时检查两者，才能分别证明‘已修复’和‘未破坏任何内容’这两个结论。"
  },
  {
    "id": 186,
    "start": 1662.638,
    "end": 1670.451,
    "en": "It additionally confirms the stability of the tests themselves, excluding flaky tests that sometimes pass and sometimes fail.",
    "zh": "它还验证了测试本身的稳定性，排除了有时通过有时失败的不稳定测试。"
  },
  {
    "id": 187,
    "start": 1670.451,
    "end": 1676.126,
    "en": "OSWorld's verifier can detect cases of superficial completion but substantive error.",
    "zh": "OSWorld 的验证器可以检测表面完成但实质错误的情况。"
  },
  {
    "id": 188,
    "start": 1676.126,
    "end": 1689.126,
    "en": "It is equipped with 134 independent evaluation functions and full operating system access, able to inspect file system structure, process state, network connections, and application internals.",
    "zh": "它配备了 134 个独立评估函数和完整的操作系统访问权限，能够检查文件系统结构、进程状态、网络连接和应用程序内部。"
  },
  {
    "id": 189,
    "start": 1689.126,
    "end": 1709.488,
    "en": "In a database task, the evaluation script not only confirms that the report file exists but also connects to the database to verify that the SQL actually executed; in a browser task it analyzes the DOM tree, inspects cookies and localStorage, and sends verification requests to the backend to confirm that the form really took effect.",
    "zh": "在数据库任务中，评估脚本不仅确认报告文件存在，还会连接到数据库以验证 SQL 实际上被执行；在浏览器任务中，它会分析 DOM 树，检查 cookies 和 localStorage，并向后端发送验证请求，以确认表单确实已生效。"
  },
  {
    "id": 190,
    "start": 1709.644,
    "end": 1726.019,
    "en": "Terminal-Bench's task build-linux-kernel-qemu requires building Linux kernel 6.9 from source, adding a custom printk in start_kernel, generating an initramfs, and running it under QEMU; success is defined as the custom message appearing in the boot log.",
    "zh": "Terminal-Bench 的任务 build-linux-kernel-qemu 要求从源代码构建 Linux 内核 6.9，在 start_kernel 中添加自定义 printk，生成 initramfs，并在 QEMU 下运行；成功被定义为自定义消息出现在启动日志中。"
  },
  {
    "id": 191,
    "start": 1725.969,
    "end": 1731.544,
    "en": "The Agent cannot fabricate the output — it has to complete the whole process for real.",
    "zh": "智能体无法伪造输出——它必须真实完成整个过程。"
  },
  {
    "id": 192,
    "start": 1731.544,
    "end": 1734.706,
    "en": "Difficulty Stratification of Tasks.",
    "zh": "任务难度分层。"
  },
  {
    "id": 193,
    "start": 1734.706,
    "end": 1739.469,
    "en": "An evaluation task set needs tasks at different difficulty levels.",
    "zh": "评估任务集需要包含不同难度级别的任务。"
  },
  {
    "id": 194,
    "start": 1739.469,
    "end": 1744.481,
    "en": "That way the set does not go stale quickly as model capability improves.",
    "zh": "这样，当模型能力提升时，任务集不会很快过时。"
  },
  {
    "id": 195,
    "start": 1744.481,
    "end": 1771.394,
    "en": "The full GAIA set of 466 questions is divided into three difficulty levels: Level 1 requires only one or two tools (humans 93.9%, GPT-4 30.3%), Level 2 requires multi-step reasoning (91.8% versus 9.7%), and Level 3 requires complex composition (87.3% versus 0%).",
    "zh": "完整的 GAIA 466 个问题集分为三个难度级别：Level 1 仅需一两个工具（人类 93.9%，GPT-4 30.3%），Level 2 需要多步骤推理（91.8% 对比 9.7%），Level 3 需要复杂组合（87.3% 对比 0%）。"
  },
  {
    "id": 196,
    "start": 1771.394,
    "end": 1776.819,
    "en": "This stratification does more than label difficulty; it has diagnostic value.",
    "zh": "这种分层不仅仅是标注难度；它还具有诊断价值。"
  },
  {
    "id": 197,
    "start": 1776.819,
    "end": 1790.394,
    "en": "A Level 1 failure points to basic tool use, Level 2 to multi-step planning and information integration, and Level 3 to long-sequence reasoning and complexity management, and the three imply different directions for improvement.",
    "zh": "一级失败表明基础工具使用能力不足，二级失败表明多步骤规划和信息整合能力不足，三级失败表明长序列推理和复杂性管理能力不足，这三种情况分别指向不同的改进方向。"
  },
  {
    "id": 198,
    "start": 1790.394,
    "end": 1805.519,
    "en": "Terminal-Bench spans everything from simple MLflow model registration, to medium-difficulty 7-Zip password cracking, to difficult multi-component integration of a Git server and a web server, up to the hardest FEAL differential cryptanalysis.",
    "zh": "Terminal-Bench 涵盖了从简单的 MLflow 模型注册，到中等难度的 7-Zip 密码破解，再到困难的 Git 服务器和网页服务器的多组件集成，直至最困难的 FEAL 差分密码分析。"
  },
  {
    "id": 199,
    "start": 1805.519,
    "end": 1820.031,
    "en": "τ²-bench additionally designs trap tasks, in which the user claims \"customer service has already approved the cancellation\" when it does not in fact comply with policy, testing whether the Agent holds its judgment under pressure and misdirection.",
    "zh": "τ²-bench 还设计了陷阱任务，用户声称‘客服已经批准取消’，但实际上并不符合政策，以此测试智能体在压力和误导下的判断力。"
  },
  {
    "id": 200,
    "start": 1820.031,
    "end": 1822.669,
    "en": "Preventing Data Contamination.",
    "zh": "防止数据污染。"
  },
  {
    "id": 201,
    "start": 1822.669,
    "end": 1827.794,
    "en": "GAIA makes its answers impossible to retrieve directly from the internet.",
    "zh": "GAIA 的答案无法直接从互联网上获取。"
  },
  {
    "id": 202,
    "start": 1827.794,
    "end": 1849.919,
    "en": "Its tasks are conceptually simple with open paths — for example, starting from NASA's Astronomy Picture of the Day for a given date, identifying the astronaut in the image, finding the astronaut group they belonged to, computing which member of that group spent the least time in space, and formatting the output strictly as \"last name; semicolon-separated; thousands separators.",
    "zh": "它的任务概念简单且路径开放——例如，从给定日期的 NASA 天文图片开始，识别图片中的宇航员，找到他们所属的宇航员小组，计算该小组中在太空停留时间最少的成员，并严格按‘姓氏；分号分隔；千位分隔符’格式输出。"
  },
  {
    "id": 203,
    "start": 1849.919,
    "end": 1855.556,
    "en": "The answer is highly specific, and correctness is decided by exact string matching.",
    "zh": "答案非常具体，正确性由精确字符串匹配决定。"
  },
  {
    "id": 204,
    "start": 1855.556,
    "end": 1873.694,
    "en": "Leakage prevention rests on two things: first, the question can only be answered by combining several information sources, so no single web page gives the answer directly; second, some tasks come with specially produced attachments (PDFs, audio, and images that do not exist on the internet).",
    "zh": "泄漏预防依赖于两件事：首先，问题只能通过结合多个信息源才能解答，因此没有单个网页能直接给出答案；其次，一些任务附带专门制作的附件（不存在于互联网上的 PDF、音频和图像）。"
  },
  {
    "id": 205,
    "start": 1873.852,
    "end": 1878.614,
    "en": "AndroidWorld derives a large number of instances from a single template.",
    "zh": "AndroidWorld 从单一模板生成大量实例。"
  },
  {
    "id": 206,
    "start": 1878.564,
    "end": 1892.502,
    "en": "Its tasks are not static text but dynamically instantiable templates such as \"change the phone number of contact [CONTACT_NAME] to [NEW_PHONE],\" with parameter values generated randomly for each evaluation.",
    "zh": "它的任务不是静态文本，而是可动态实例化的模板，例如‘将联系人 [CONTACT_NAME] 的电话号码更改为 [NEW_PHONE]’，参数值在每次评估时随机生成。"
  },
  {
    "id": 207,
    "start": 1892.502,
    "end": 1909.664,
    "en": "This yields three benefits: parameters differ each time, so replaying a fixed action sequence is useless; a single template can generate a nearly unlimited number of instances; and fixing some parameters while varying others allows the effect of a specific factor to be measured precisely.",
    "zh": "这带来了三个好处：参数每次不同，因此重复固定动作序列毫无用处；一个模板可以生成几乎无限数量的实例；固定某些参数而改变其他参数可以精确测量特定因素的影响。"
  },
  {
    "id": 208,
    "start": 1909.664,
    "end": 1914.014,
    "en": "Terminal-Bench embeds a canary identifier in the task statement.",
    "zh": "Terminal-Bench 在任务说明中嵌入了一个金丝雀标识符。"
  },
  {
    "id": 209,
    "start": 1914.014,
    "end": 1922.389,
    "en": "Every task carries a canary GUID; if a model can output content containing that GUID, the benchmark data has entered the training set.",
    "zh": "每个任务都带有金丝雀 GUID；如果模型可以输出包含该 GUID 的内容，则基准数据已进入训练集。"
  },
  {
    "id": 210,
    "start": 1922.389,
    "end": 1926.552,
    "en": "It does not prevent leakage, but it makes leakage detectable.",
    "zh": "它不能防止泄漏，但可以使泄漏可检测。"
  },
  {
    "id": 211,
    "start": 1926.552,
    "end": 1929.877,
    "en": "Quality Control and Long-Term Maintenance.",
    "zh": "质量控制与长期维护。"
  },
  {
    "id": 212,
    "start": 1929.877,
    "end": 1933.752,
    "en": "Building a high-quality evaluation set is very hard.",
    "zh": "构建高质量的评估集非常困难。"
  },
  {
    "id": 213,
    "start": 1933.752,
    "end": 1942.502,
    "en": "The present form of most of the benchmarks above is the result of round after round of repair once the first version was put to use and its problems surfaced.",
    "zh": "上述大多数基准的当前形式是第一版投入使用后，问题暴露出来并经过多轮修复的结果。"
  },
  {
    "id": 214,
    "start": 1942.502,
    "end": 1949.714,
    "en": "From τ-bench to τ²-bench, for instance, there are five places where the design was reworked.",
    "zh": "例如，从 τ-bench 到 τ²-bench，设计被重新调整了五处。"
  },
  {
    "id": 215,
    "start": 1949.714,
    "end": 1954.664,
    "en": "First, task instructions were too vague, letting the answer be guessed.",
    "zh": "首先，任务指令过于模糊，导致答案可以被猜测。"
  },
  {
    "id": 216,
    "start": 1954.664,
    "end": 1965.427,
    "en": "The first version's task instructions were written broadly, so the model did not need to genuinely clarify the requirement — guessing a plausible workflow from common sense was enough to pass.",
    "zh": "第一版的任务指令写得过于宽泛，因此模型不需要真正明确需求——仅从常识中猜测一个合理的流程就足以通过。"
  },
  {
    "id": 217,
    "start": 1965.427,
    "end": 1977.302,
    "en": "τ²-bench split the script into two fields, known_info and task_instructions: the former delimits what the user knows, the latter prescribes how it is disclosed.",
    "zh": "τ²-bench 将脚本分为两个字段：known_info 和 task_instructions：前者限定用户已知的信息，后者规定信息如何披露。"
  },
  {
    "id": 218,
    "start": 1977.302,
    "end": 1982.889,
    "en": "What the user does not know, the Agent cannot guess and can obtain only by querying.",
    "zh": "用户不知道的内容，智能体不能猜测，只能通过查询获得。"
  },
  {
    "id": 219,
    "start": 1982.889,
    "end": 1988.702,
    "en": "Second, success conditions were not precise enough, causing verification errors.",
    "zh": "其次，成功条件不够精确，导致验证错误。"
  },
  {
    "id": 220,
    "start": 1988.702,
    "end": 1993.589,
    "en": "A condition such as \"the network is back\" has no checkable boundary.",
    "zh": "像“网络恢复”这样的条件没有可检查的边界。"
  },
  {
    "id": 221,
    "start": 1993.589,
    "end": 2003.277,
    "en": "τ²-bench changed it to \"the issue counts as resolved only when the speed test returns excellent; poor, fair, and good are all rejected.",
    "zh": "τ²-bench 将其改为“只有当速度测试返回优秀时，问题才算解决；差、一般和良好都会被拒绝。”"
  },
  {
    "id": 222,
    "start": 2003.277,
    "end": 2009.452,
    "en": "This change targets perfunctory fixes, which suppress the symptom without addressing the root cause.",
    "zh": "这一更改针对的是敷衍了事的修复，这些修复只是抑制了症状而没有解决根本原因。"
  },
  {
    "id": 223,
    "start": 2009.452,
    "end": 2013.552,
    "en": "Third, the user simulator behaved too mechanically.",
    "zh": "第三，用户模拟器的行为过于机械。"
  },
  {
    "id": 224,
    "start": 2013.552,
    "end": 2017.977,
    "en": "The first version's simulated user only responded passively.",
    "zh": "第一版的模拟用户只被动响应。"
  },
  {
    "id": 225,
    "start": 2017.977,
    "end": 2030.064,
    "en": "τ²-bench added emotion (showing displeasure after the first failed fix), a patience limit (ending the conversation when communication efficiency is too low), and the grounding requirement.",
    "zh": "τ²-bench 增加了情感（在第一次修复失败后表现出不满）、耐心限制（当沟通效率过低时结束对话）和基础要求。"
  },
  {
    "id": 226,
    "start": 2030.064,
    "end": 2035.464,
    "en": "Together these make the simulator approximate a real user while remaining reproducible.",
    "zh": "这些共同作用使模拟器能近似真实用户，同时保持可重复性。"
  },
  {
    "id": 227,
    "start": 2035.464,
    "end": 2041.264,
    "en": "Fourth, the user participates not only in the conversation but also in the operation.",
    "zh": "第四，用户不仅参与对话，还参与操作。"
  },
  {
    "id": 228,
    "start": 2041.264,
    "end": 2045.364,
    "en": "The telecom domain introduced a dual-control environment.",
    "zh": "电信领域引入了双控环境。"
  },
  {
    "id": 229,
    "start": 2045.364,
    "end": 2056.439,
    "en": "In earlier evaluations only the Agent could change the environment, whereas in technical support scenarios a substantial share of the actions ought to be performed by the user on their own device.",
    "zh": "在早期的评估中，只有智能体可以改变环境，而在技术支持场景中，相当一部分操作应由用户在自己的设备上完成。"
  },
  {
    "id": 230,
    "start": 2056.439,
    "end": 2070.139,
    "en": "Dual control also adds a dimension to verification: after the user changes the state, the Agent must call a tool again to learn the result, so verification now covers whether the Agent actually read the outcome of the user's actions.",
    "zh": "双控机制还为验证增加了维度：用户改变状态后，智能体必须再次调用工具以了解结果，因此验证现在包括智能体是否实际读取了用户操作的结果。"
  },
  {
    "id": 231,
    "start": 2070.139,
    "end": 2074.189,
    "en": "Fifth, task instances are generated dynamically.",
    "zh": "第五，任务实例是动态生成的。"
  },
  {
    "id": 232,
    "start": 2074.189,
    "end": 2086.577,
    "en": "τ²-bench's concrete instances (user names, phone numbers, fault combinations) can be generated in bulk from parameters, which improves both coverage and resistance to leakage.",
    "zh": "τ²-bench的具体实例（用户名、电话号码、故障组合）可以从参数中批量生成，这提高了覆盖率和抗泄露能力。"
  },
  {
    "id": 233,
    "start": 2086.577,
    "end": 2093.464,
    "en": "SWE-bench Verified: 71% of the original tasks were eliminated before release.",
    "zh": "SWE-bench已验证：原始任务中有71%在发布前被剔除。"
  },
  {
    "id": 234,
    "start": 2093.464,
    "end": 2117.289,
    "en": "OpenAI randomly sampled 1,699 of the original 2,294 tasks for human evaluation, recruiting 93 developers proficient in Python to check each one: whether the problem description was clear, whether the test cases covered edge conditions, whether the tests were stable, whether the reference patch introduced new errors, and whether the difficulty was reasonable.",
    "zh": "OpenAI随机抽取了2,294个原始任务中的1,699个进行人工评估，招募了93名精通Python的开发者逐一检查：问题描述是否清晰，测试用例是否覆盖了边缘情况，测试是否稳定，参考补丁是否引入了新错误，以及难度是否合理。"
  },
  {
    "id": 235,
    "start": 2117.289,
    "end": 2120.252,
    "en": "In the end only 500 passed.",
    "zh": "最终仅有500个通过。"
  },
  {
    "id": 236,
    "start": 2120.252,
    "end": 2128.202,
    "en": "The high elimination rate buys a better signal-to-noise ratio, and evaluation cost drops by roughly 80% as well.",
    "zh": "高淘汰率带来了更好的信噪比，评估成本也下降了约80%。"
  },
  {
    "id": 237,
    "start": 2128.202,
    "end": 2141.139,
    "en": "Complex Agent tasks routinely take minutes to hours, and running a full evaluation dataset with a frontier model often costs thousands of dollars in tokens, so reducing evaluation cost matters a great deal.",
    "zh": "复杂的智能体任务通常需要几分钟到几小时，使用前沿模型运行完整评估数据集往往需要数千美元的token费用，因此降低评估成本至关重要。"
  },
  {
    "id": 238,
    "start": 2141.308,
    "end": 2146.908,
    "en": "OSWorld: more than 300 issues surfaced in the 15 months after release.",
    "zh": "OSWorld：发布后的15个月内出现了超过300个问题。"
  },
  {
    "id": 239,
    "start": 2146.858,
    "end": 2172.783,
    "en": "Released in April 2024, it quickly became an important benchmark for multimodal Agent evaluation, and widespread use then exposed four categories of problems: environment issues (anti-scraping measures, CAPTCHAs, dynamic content changes), task description issues (ambiguous phrasing), verification logic issues (too strict or too lenient), and initial state issues (incomplete configuration).",
    "zh": "于2024年4月发布，迅速成为多模态智能体评估的重要基准，广泛使用后暴露了四类问题：环境问题（反爬虫措施、CAPTCHAs、动态内容变化）、任务描述问题（表述模糊）、验证逻辑问题（过于严格或宽松）以及初始状态问题（配置不完整）。"
  },
  {
    "id": 240,
    "start": 2172.783,
    "end": 2201.62,
    "en": "A team of about ten people from the University of Hong Kong worked closely with MoonShot AI, OpenAI, ByteDance Seed TARS, Anthropic, Simular, and others for two months on a systematic repair: environment issues were resolved by locking versions and keeping offline backups, description issues by rewriting ambiguous phrasing, verification issues by manually establishing correct baselines and adjusting conditions, and initial state issues by adding completeness checks.",
    "zh": "来自香港大学的一支约十人团队与MoonShot AI、OpenAI、字节跳动Seed TARS、Anthropic、Simular等公司合作两个月，对这些问题进行了系统修复：通过锁定版本并保留离线备份解决了环境问题，通过重写模糊表述解决了描述问题，通过手动建立正确基线并调整条件解决了验证问题，通过添加完整性检查解决了初始状态问题。"
  },
  {
    "id": 241,
    "start": 2201.62,
    "end": 2208.72,
    "en": "Experiment 7-2 introductory difficulty, one star: : Manually Execute Benchmark Tasks",
    "zh": "实验7-2 介绍难度，一颗星：手动执行基准任务"
  },
  {
    "id": 242,
    "start": 2208.72,
    "end": 2222.97,
    "en": "Select tasks from GAIA, AndroidWorld, SWE-Bench Verified, Terminal-Bench, and OSWorld-Verified and complete them by hand; one easy, one medium, and one difficult task per dataset is recommended.",
    "zh": "从GAIA、AndroidWorld、SWE-Bench Verified、Terminal-Bench和OSWorld-Verified中选择任务，并手动完成；每个数据集建议选择一个简单、一个中等和一个困难任务。"
  },
  {
    "id": 243,
    "start": 2222.97,
    "end": 2226.833,
    "en": "The \"difficult\" level is challenging for humans too.",
    "zh": "“困难”级别对人类来说也是具有挑战性的。"
  },
  {
    "id": 244,
    "start": 2226.833,
    "end": 2229.933,
    "en": "Afterwards, answer two questions.",
    "zh": "之后回答两个问题。"
  },
  {
    "id": 245,
    "start": 2229.933,
    "end": 2237.333,
    "en": "Does the task description admit more than one reasonable interpretation, and if so, which one does the verifier accept?",
    "zh": "任务描述是否允许多种合理的解释，如果有的话，验证器接受哪一种？"
  },
  {
    "id": 246,
    "start": 2237.333,
    "end": 2244.008,
    "en": "If you tried to slip through without doing the work, what would the cheapest path be, and could the verifier stop it?",
    "zh": "如果你试图偷懒而不做工作，最便宜的路径是什么，验证器能阻止吗？"
  },
  {
    "id": 247,
    "start": 2244.008,
    "end": 2247.095,
    "en": "Three Sources of an Evaluation Set.",
    "zh": "评估集的三个来源。"
  },
  {
    "id": 248,
    "start": 2247.095,
    "end": 2253.52,
    "en": "A common view holds that public benchmarks serve model ranking and have limited bearing on real business.",
    "zh": "一种常见观点认为公开基准用于模型排名，对实际业务影响有限。"
  },
  {
    "id": 249,
    "start": 2253.52,
    "end": 2262.12,
    "en": "It is true that public benchmark scores are hard to translate directly into product decisions, but their design techniques transfer perfectly well.",
    "zh": "公开基准分数确实很难直接转化为产品决策，但它们的设计技术可以完美迁移。"
  },
  {
    "id": 250,
    "start": 2262.12,
    "end": 2275.108,
    "en": "Verification depth, parameterized generation, leakage prevention, and quality maintenance — the topics discussed above — are precisely the places a self-built evaluation set is most likely to neglect.",
    "zh": "验证深度、参数化生成、泄漏预防和质量维护——上述主题——正是自建评估集最容易忽视的地方。"
  },
  {
    "id": 251,
    "start": 2275.108,
    "end": 2279.42,
    "en": "An evaluation set in production usually has three sources.",
    "zh": "生产环境中的评估集通常有三个来源。"
  },
  {
    "id": 252,
    "start": 2279.42,
    "end": 2287.308,
    "en": "Public benchmarks are used for coarse model screening and for borrowing design techniques, and generally not for product decisions.",
    "zh": "公开基准用于粗略模型筛选和借鉴设计技术，通常不用于产品决策。"
  },
  {
    "id": 253,
    "start": 2287.308,
    "end": 2297.045,
    "en": "Their task distribution does not match that of your business; gaining two percentage points on GAIA bears no necessary relation to your refund success rate.",
    "zh": "它们的任务分布与您的业务不匹配；在GAIA上提高两个百分点与您的退款成功率没有必然关系。"
  },
  {
    "id": 254,
    "start": 2297.045,
    "end": 2306.758,
    "en": "An in-house evaluation dataset for business tasks covers the real task distribution and can serve as the basis for model selection and Harness design decisions.",
    "zh": "针对业务任务的内部评估数据集覆盖真实任务分布，可作为模型选择和Harness设计决策的基础。"
  },
  {
    "id": 255,
    "start": 2306.758,
    "end": 2318.208,
    "en": "τ²-bench, for example, can serve as the skeleton for any evaluation system that needs a simulated user; you only have to substitute your own domain data and tool set.",
    "zh": "例如，τ²-bench可以作为任何需要模拟用户评估系统的骨架；你只需替换自己的领域数据和工具集即可。"
  },
  {
    "id": 256,
    "start": 2318.208,
    "end": 2332.783,
    "en": "Production trajectory feedback comes from real failures in the field: cases where the user explicitly corrected the Agent, where the user gave a thumbs-down, and where a subsequent state check, rule-based verifier, or LLM review found a problem.",
    "zh": "生产轨迹反馈来自实际的现场故障：用户明确纠正了智能体的情况、用户给出了差评的情况，以及后续状态检查、基于规则的验证器或LLM审核发现的问题。"
  },
  {
    "id": 257,
    "start": 2332.783,
    "end": 2337.358,
    "en": "After failure attribution, these settle into regression cases.",
    "zh": "在故障归因之后，这些情况会转化为回归测试案例。"
  },
  {
    "id": 258,
    "start": 2337.358,
    "end": 2344.995,
    "en": "The concrete method is described later in \"Failure Attribution\" and \"End-to-End and Trajectory-Prefix Regression Tasks.",
    "zh": "具体方法将在后面的“故障归因”和“端到端与轨迹前缀回归任务”中进行描述。"
  },
  {
    "id": 259,
    "start": 2344.995,
    "end": 2352.245,
    "en": "This source is the most expensive and also the most accurate, because it comes directly from what users actually encountered.",
    "zh": "这种来源是最昂贵的，也是最准确的，因为它直接来自用户实际遇到的问题。"
  },
  {
    "id": 260,
    "start": 2352.245,
    "end": 2364.533,
    "en": "In the early stage there are usually only public benchmarks and a small hand-written business set; once the system has been running in production for a while, cases fed back from production trajectories become the main body.",
    "zh": "在早期阶段，通常只有公开基准和少量手工编写的业务集；一旦系统在生产环境中运行了一段时间，来自生产轨迹的反馈案例就会成为主要部分。"
  },
  {
    "id": 261,
    "start": 2364.533,
    "end": 2367.345,
    "en": "Automated Evaluation Methods.",
    "zh": "自动化评估方法。"
  },
  {
    "id": 262,
    "start": 2367.345,
    "end": 2374.77,
    "en": "The benchmarks discussed in the preceding sections have one thing in common: their verifiers are almost all deterministic.",
    "zh": "前几节讨论的基准有一个共同点：它们的验证器几乎都是确定性的。"
  },
  {
    "id": 263,
    "start": 2374.77,
    "end": 2388.633,
    "en": "SWE-bench runs a test suite, AndroidWorld asserts the final UI state, GAIA does exact string matching, and τ²-bench's four layers of checks are likewise executed entirely in code.",
    "zh": "SWE-bench运行一个测试套件，AndroidWorld断言最终的UI状态，GAIA执行精确的字符串匹配，而τ²-bench的四层检查同样完全在代码中执行。"
  },
  {
    "id": 264,
    "start": 2388.633,
    "end": 2402.47,
    "en": "There are good reasons for this choice: deterministic verification adds no model overhead, results are fully reproducible, it can be folded into continuous integration like a unit test, and it makes ranking across models straightforward.",
    "zh": "这样选择是有充分理由的：确定性验证不会增加模型开销，结果可以完全重现，可以像单元测试一样集成到持续集成中，并且可以使模型之间的排名变得简单。"
  },
  {
    "id": 265,
    "start": 2402.62,
    "end": 2408.995,
    "en": "The price is that it can only judge whether the final outcome is right; it cannot give the reason for an error.",
    "zh": "代价是它只能判断最终结果是否正确；无法提供错误的原因。"
  },
  {
    "id": 266,
    "start": 2408.945,
    "end": 2421.445,
    "en": "The failed τ²-bench task above scored 0, and that 0 says nothing about whether the Agent went wrong at line selection or skipped the mobile data top-up step, still less about what to change next.",
    "zh": "上面的失败τ²-bench任务得分为0，这个0并没有说明智能体是在行选择上出错，还是跳过了移动数据充值步骤，更不用说下一步应该修改什么了。"
  },
  {
    "id": 267,
    "start": 2421.445,
    "end": 2431.457,
    "en": "For a public benchmark used for ranking, this is not a defect; for a production system that needs continuous improvement, it is exactly the information most needed.",
    "zh": "对于用于排名的公开基准来说，这不是缺陷；但对于需要持续改进的生产系统来说，这正是最需要的信息。"
  },
  {
    "id": 268,
    "start": 2431.457,
    "end": 2438.92,
    "en": "Production scenarios face a second difficulty: many judgments simply cannot be written as assertions that code can check.",
    "zh": "生产场景面临第二个困难：许多判断无法写成代码可以检查的断言。"
  },
  {
    "id": 269,
    "start": 2438.92,
    "end": 2454.307,
    "en": "Whether a complaint response is appropriately worded, whether a research report omits a critical piece of information, whether a memory retrieval got a relationship between people wrong — none of these has a unique final state to query, nor can they be decided by keyword matching.",
    "zh": "投诉回复是否措辞恰当，研究报告是否遗漏了关键信息，记忆检索是否弄错了人与人之间的关系——这些都没有唯一的最终状态可供查询，也不能通过关键词匹配来决定。"
  },
  {
    "id": 270,
    "start": 2454.307,
    "end": 2468.532,
    "en": "Moving from public benchmarks to evaluation in production therefore requires the mode of verification to shift rightward along a spectrum whose horizontal axis is the degree to which a task is mechanically verifiable, as shown in Figure 7-4.",
    "zh": "从公开基准转向生产环境中的评估，意味着验证方式需要沿着一个光谱向右移动，该光谱的水平轴是任务可机械验证的程度，如图7-4所示。"
  },
  {
    "id": 271,
    "start": 2468.532,
    "end": 2476.72,
    "en": "As illustrated in Figure 7-4: A Spectrum of Verification Modes, from Deterministic Verification to Model Judgment.",
    "zh": "如图7-4所示：从确定性验证到模型判断的验证模式谱。"
  },
  {
    "id": 272,
    "start": 2476.72,
    "end": 2493.507,
    "en": "The two instruments on the right of the spectrum consequently become the mainstay of production evaluation: a Rubric that breaks the vague question of \"how good is it\" into several separately scorable dimensions, and LLM-as-a-Judge that produces the score where no deterministic criterion exists.",
    "zh": "谱右侧的两种工具因此成为生产评估的主要支柱：一个将“它有多好”这一模糊问题分解为若干可单独评分的维度的评分标准（Rubric），以及在没有确定性标准的情况下生成评分的LLM-as-a-Judge。"
  },
  {
    "id": 273,
    "start": 2493.507,
    "end": 2506.245,
    "en": "Only together can they turn a blanket failure rate back into concrete, fixable problems; combined with failure attribution in the second half of this section, they form the complete evaluation loop for a production Agent.",
    "zh": "只有它们结合在一起，才能将总体的失败率转化为具体、可修复的问题；结合本节后半部分的失败归因，它们构成了生产型智能体的完整评估循环。"
  },
  {
    "id": 274,
    "start": 2506.245,
    "end": 2510.52,
    "en": "It should be said that moving rightward does not mean abandoning the left.",
    "zh": "应该说明的是，向右移动并不意味着放弃左边。"
  },
  {
    "id": 275,
    "start": 2510.52,
    "end": 2520.545,
    "en": "Every check that can be written as a programmatic assertion should stay an assertion, and LLM judgment should be reserved for the dimensions that genuinely cannot be decided mechanically.",
    "zh": "所有可以写成程序断言的检查都应保持为断言，而LLM判断应保留用于真正无法机械决定的维度。"
  },
  {
    "id": 276,
    "start": 2520.545,
    "end": 2527.982,
    "en": "Deterministic checks are cheaper and more stable, and they are far better suited to running as regression tests over the long term.",
    "zh": "确定性检查更便宜且更稳定，而且更适合长期作为回归测试运行。"
  },
  {
    "id": 277,
    "start": 2527.982,
    "end": 2532.245,
    "en": "LLM-as-a-Judge: The Core of Automated Evaluation.",
    "zh": "LLM-as-a-Judge：自动化评估的核心。"
  },
  {
    "id": 278,
    "start": 2532.245,
    "end": 2537.532,
    "en": "As illustrated in Figure 7-5: LLM-as-a-Judge Pipeline.",
    "zh": "如图7-5所示：LLM-as-a-Judge流程。"
  },
  {
    "id": 279,
    "start": 2537.532,
    "end": 2540.32,
    "en": "Why is LLM-as-a-Judge needed?",
    "zh": "为什么需要LLM-as-a-Judge？"
  },
  {
    "id": 280,
    "start": 2540.32,
    "end": 2553.857,
    "en": "For open-ended tasks (e.g., generating reports, handling customer complaints, creative content), there are no standard answers for automatic comparison, and human evaluation is costly and difficult to scale.",
    "zh": "对于开放性任务（例如生成报告、处理客户投诉、创意内容），没有标准答案用于自动比较，人工评估成本高且难以扩展。"
  },
  {
    "id": 281,
    "start": 2553.857,
    "end": 2564.657,
    "en": "LLM-as-a-Judge balances the scalability of automation with human expert judgment by having a language model evaluate outputs against expert-defined scoring criteria (a Rubric).",
    "zh": "通过让语言模型根据专家定义的评分标准（评分标准）对输出进行评估，LLM-as-a-Judge在自动化可扩展性和人类专家判断之间取得了平衡。"
  },
  {
    "id": 282,
    "start": 2564.657,
    "end": 2573.357,
    "en": "The method has known limitations, though: the judge model carries its own biases, and repeated judgments of the same input can vary.",
    "zh": "不过，这种方法有已知的局限性：评判模型会带有自身的偏见，并且对同一输入的重复评判可能会有所不同。"
  },
  {
    "id": 283,
    "start": 2573.357,
    "end": 2587.32,
    "en": "The most typical is length bias, a tendency to score longer, more detailed responses higher even when they are no more correct — much as a human sitting an exam will pad out an answer they do not know, hoping to stumble onto a point or two.",
    "zh": "最常见的问题是长度偏差，即倾向于给更长、更详细的回答更高的分数，即使它们并不更正确——就像考试中遇到不会的问题时，考生会尽量扩展答案，希望偶然得到一两个得分点。"
  },
  {
    "id": 284,
    "start": 2587.32,
    "end": 2609.945,
    "en": "Three defenses are common: penalize verbosity explicitly in the Rubric and cap response length per task type; in pairwise comparisons, bring the two candidates to similar lengths before judging; and regularly audit the correlation between scores and response length — if high scores almost always go to long responses, the judge has been swayed by length and the Rubric needs revision.",
    "zh": "常见的三种防御措施是：在评分标准中明确惩罚冗长，并根据任务类型限制回答长度；在成对比较中，在评判前使两个候选答案达到相似长度；并定期审计评分与回答长度之间的相关性——如果高分几乎总是给予长回答，说明评判模型受到了长度影响，评分标准需要修订。"
  },
  {
    "id": 285,
    "start": 2609.945,
    "end": 2615.957,
    "en": "To address these challenges systematically, Rubric design must follow the principles below:",
    "zh": "为系统性地解决这些挑战，评分标准设计必须遵循以下原则："
  },
  {
    "id": 286,
    "start": 2615.957,
    "end": 2620.507,
    "en": "Rubric (Scoring Criteria): The Basis for LLM Judgment.",
    "zh": "评分标准（评分准则）：LLM判断的基础。"
  },
  {
    "id": 287,
    "start": 2620.507,
    "end": 2625.345,
    "en": "Four Rubric Principles (Scale AI, \"Rubrics as Rewards\"",
    "zh": "四个评分标准原则（Scale AI，“评分标准作为奖励”）"
  },
  {
    "id": 288,
    "start": 2625.345,
    "end": 2633.407,
    "en": "1) Based on Expert Guidance—A Rubric must reflect domain knowledge, capturing the core facts and reasoning steps.",
    "zh": "1）基于专家指导——评分标准必须反映领域知识，捕捉核心事实和推理步骤。"
  },
  {
    "id": 289,
    "start": 2633.407,
    "end": 2645.22,
    "en": "A Rubric for medical Q&A, for instance, needs diagnostic criteria and the medical errors that must be avoided; one without expert grounding can only capture surface features like fluency.",
    "zh": "例如，针对医疗问答的评分标准需要包含诊断标准和必须避免的医疗错误；没有专家基础的标准只能捕捉表面特征，如流畅性。"
  },
  {
    "id": 290,
    "start": 2645.38,
    "end": 2653.942,
    "en": "2) Comprehensive Coverage—A Rubric should cover factual accuracy, logical coherence, completeness, and safety.",
    "zh": "2）全面覆盖——评分标准应涵盖事实准确性、逻辑一致性、完整性与安全性。"
  },
  {
    "id": 291,
    "start": 2653.892,
    "end": 2665.355,
    "en": "It should not only define positive standards but also explicitly identify Pitfalls—i.e., high-risk common errors, such as recommending unverified therapies in medical advice.",
    "zh": "它不仅应定义正面标准，还应明确识别陷阱——即高风险的常见错误，例如在医疗建议中推荐未经验证的疗法。"
  },
  {
    "id": 292,
    "start": 2665.355,
    "end": 2673.88,
    "en": "3) Standardized Importance Weighting—Classify criteria as Essential, Important, Optional, or Pitfall items.",
    "zh": "3）标准化重要性权重——将标准分类为必要项、重要项、可选项或陷阱项。"
  },
  {
    "id": 293,
    "start": 2673.88,
    "end": 2690.267,
    "en": "The scheme supports a Veto mechanism: for example, in a customer service scenario, hallucination (fabricating false information) is a typical veto dimension—regardless of how well other dimensions perform, if false information appears, it must be vetoed.",
    "zh": "该机制支持否决机制：例如，在客户服务场景中，幻觉（编造虚假信息）是一个典型的否决维度——无论其他维度表现如何，只要出现虚假信息，就必须被否决。"
  },
  {
    "id": 294,
    "start": 2690.267,
    "end": 2694.455,
    "en": "This also helps prevent reward hacking through keyword stuffing.",
    "zh": "这也可防止通过关键词堆砌进行奖励劫持。"
  },
  {
    "id": 295,
    "start": 2694.455,
    "end": 2703.705,
    "en": "4) Self-Contained Evaluation—Each evaluation criterion can be assessed independently and does not rely on the evaluator's domain knowledge.",
    "zh": "4）自包含评估——每个评估标准可以独立评估，不依赖评估者领域的知识。"
  },
  {
    "id": 296,
    "start": 2703.705,
    "end": 2716.905,
    "en": "Abstract standards like \"the response demonstrates deep understanding\" should be avoided, replaced by verifiable standards like \"cites at least two authoritative theories and accurately explains how they support the conclusion.",
    "zh": "应避免抽象标准，如“回答展示了深入理解”，而应替换为可验证的标准，如“至少引用两个权威理论，并准确解释它们如何支持结论。"
  },
  {
    "id": 297,
    "start": 2716.905,
    "end": 2727.005,
    "en": "The key practice: define objectively verifiable scoring levels for each dimension, with concrete examples and edge cases to resolve ambiguous situations.",
    "zh": "关键实践：为每个维度定义客观可验证的评分等级，提供具体示例和边缘案例以解决模糊情况。"
  },
  {
    "id": 298,
    "start": 2727.005,
    "end": 2741.255,
    "en": "Actively guard against Reward Hacking—the Agent finding a \"shortcut\" to high scores without actually completing the task—by explicitly penalizing hallucination, sycophancy, keyword stuffing, and dodging hard questions.",
    "zh": "通过明确惩罚幻觉、奉承、关键词堆砌和回避难题来主动防范奖励劫持——智能体找到获得高分的‘捷径’而不真正完成任务。"
  },
  {
    "id": 299,
    "start": 2741.255,
    "end": 2752.492,
    "en": "A Rubric is an iterative product: trial use reveals disagreements among evaluators, and the Rubric gradually evolves through this feedback from abstract principles into a detailed casebook.",
    "zh": "评分标准是一个迭代产品：试用过程中会发现评估者之间的分歧，评分标准会通过反馈从抽象原则逐步演变为详细的案例手册。"
  },
  {
    "id": 300,
    "start": 2752.492,
    "end": 2758.967,
    "en": "Here is a complete Rubric that follows the four principles, using a user memory Agent as the example.",
    "zh": "以下是一个遵循这四个原则的完整评分标准，以用户记忆智能体为例。"
  },
  {
    "id": 301,
    "start": 2758.967,
    "end": 2762.667,
    "en": "Test question: \"Who is my daughter's pediatrician?",
    "zh": "测试问题：\"我女儿的儿科医生是谁？\""
  },
  {
    "id": 302,
    "start": 2762.667,
    "end": 2773.667,
    "en": "The answer requires linking information across two conversations: the first conversation mentions \"my daughter's name is Lily,\" the second mentions \"took Lily to see Dr. Chen\").",
    "zh": "答案需要在两个对话中关联信息：第一个对话提到\"我女儿的名字是Lily\"，第二个提到\"带Lily去看Chen医生\"。"
  },
  {
    "id": 303,
    "start": 2773.667,
    "end": 2778.405,
    "en": "Refer to the companion repository for the complete code implementation.",
    "zh": "请参考配套的代码仓库获取完整的代码实现。"
  },
  {
    "id": 304,
    "start": 2778.405,
    "end": 2780.567,
    "en": "Good Rubric vs.",
    "zh": "好的评分标准 vs。"
  },
  {
    "id": 305,
    "start": 2780.567,
    "end": 2794.417,
    "en": "Bad Rubric: Each scoring level above specifies verifiable, concrete behavior (\"Correctly answers Dr. Chen\") rather than descriptions that cannot be judged objectively, like \"demonstrates a deep understanding of memory.",
    "zh": "差的评分标准：每个评分层级都指定了可验证的、具体的动作（例如\"正确回答Chen医生\"），而不是无法客观评判的描述，比如\"展现出对记忆的深刻理解\"。"
  },
  {
    "id": 306,
    "start": 2794.417,
    "end": 2803.792,
    "en": "The veto item sets the bottom line: even if every other dimension scores full marks, a single instance of hallucination results in an automatic zero.",
    "zh": "否决项设定了底线：即使其他所有维度都获得满分，只要出现一次幻觉，就会直接得零分。"
  },
  {
    "id": 307,
    "start": 2803.948,
    "end": 2807.698,
    "en": "Give the judge both the Rubric and the Agent's response.",
    "zh": "给评估者提供评分标准和智能体的回复。"
  },
  {
    "id": 308,
    "start": 2807.648,
    "end": 2810.96,
    "en": "It will score each dimension and explain why.",
    "zh": "它会为每个维度打分并解释原因。"
  },
  {
    "id": 309,
    "start": 2810.96,
    "end": 2826.548,
    "en": "Once results from dozens of cases are grouped by dimension and the low-scoring traces are replayed, a vague drop in success rate becomes a concrete diagnosis: retrieval missed a fact, the model linked the wrong people or events, or it added an unsupported claim.",
    "zh": "一旦将数十个案例的结果按维度分组，并重新播放低分轨迹，模糊的成功率下降就会变成具体的诊断结果：检索遗漏了事实，模型关联了错误的人或事件，或者添加了未经支持的陈述。"
  },
  {
    "id": 310,
    "start": 2826.548,
    "end": 2832.235,
    "en": "A useful Rubric tells the team not only how the system scored, but where to look next.",
    "zh": "一个有用的评分标准不仅告诉团队系统得了多少分，还告诉他们下一步应该关注哪里。"
  },
  {
    "id": 311,
    "start": 2832.235,
    "end": 2841.16,
    "en": "The following takes user memory as a concrete case, showing how to bring this general method down to an executable evaluation set and verifier.",
    "zh": "以下以用户记忆为例，展示如何将这一通用方法具体化为可执行的评估集和验证器。"
  },
  {
    "id": 312,
    "start": 2841.16,
    "end": 2849.185,
    "en": "Experiment 7-3 intermediate difficulty, two stars: : Building a Rubric-Based User Memory Evaluation System",
    "zh": "实验7-3 中等难度，两颗星：构建基于评分标准的用户记忆评估系统"
  },
  {
    "id": 313,
    "start": 2849.185,
    "end": 2856.898,
    "en": "Prerequisites: Must complete the Chapter 3 User Memory Experiment (chapter3/user-memory-evaluation).",
    "zh": "先决条件：必须完成第3章的用户记忆实验（chapter3/user-memory-evaluation）。"
  },
  {
    "id": 314,
    "start": 2856.898,
    "end": 2870.848,
    "en": "This experiment requires modifying the chapter3/user-memory-evaluation framework from Chapter 3, upgrading the current simple LLM-as-a-Judge scoring mechanism to a structured, multi-dimensional Rubric evaluation system.",
    "zh": "本实验需要修改第3章的chapter3/user-memory-evaluation框架，将当前简单的LLM作为评估者的评分机制升级为结构化的多维评分标准评估系统。"
  },
  {
    "id": 315,
    "start": 2870.848,
    "end": 2880.848,
    "en": "The existing system uses a single LLM call to return a pass/fail result plus evaluation reasoning, lacking structured diagnostic capabilities.",
    "zh": "现有系统使用一次LLM调用返回通过/失败结果以及评估理由，缺乏结构化的诊断能力。"
  },
  {
    "id": 316,
    "start": 2880.848,
    "end": 2886.81,
    "en": "Design a unified multi-dimensional Rubric framework applicable to all three task levels.",
    "zh": "设计一个适用于所有三个任务层级的统一多维评分框架。"
  },
  {
    "id": 317,
    "start": 2886.81,
    "end": 2916.698,
    "en": "Evaluation dimensions include: Factual Correctness (precision: of all the information given, how much is correct—verifies that numbers/dates/names are consistent with the stored memory); Information Completeness (recall: of all the information that should be given, how much is mentioned—verifies that all relevant information is provided with no key content omitted); Reasoning Correctness (checks whether the relationships between pieces of information and implicit logic are correctly understood)",
    "zh": "评估维度包括：事实正确性（精确度：给出的所有信息中有多少是正确的——验证数字/日期/名称是否与存储的记忆一致）；信息完整性（回忆率：应提供的所有信息中有多少被提及——验证是否提供了所有相关信息且无关键内容遗漏）；推理正确性（检查信息之间的关系和隐含逻辑是否被正确理解）"
  },
  {
    "id": 318,
    "start": 2916.698,
    "end": 2929.31,
    "en": "Reasoning Proactiveness (evaluates whether suggestions or risk warnings beyond a direct answer are provided when appropriate); Hallucination Detection (ensures no information not present in memory is fabricated).",
    "zh": "推理主动性（评估在适当情况下是否提供超出直接答案的建议或风险警告）；幻觉检测（确保不编造记忆中不存在的信息）。"
  },
  {
    "id": 319,
    "start": 2929.31,
    "end": 2938.01,
    "en": "Four-level scoring (Excellent/Good/Passable/Fail), with specific judgment criteria for each level rather than abstract descriptions.",
    "zh": "四级评分（优秀/良好/合格/失败），每个级别都有具体的判断标准而非抽象描述。"
  },
  {
    "id": 320,
    "start": 2938.01,
    "end": 2941.335,
    "en": "The hallucination dimension is a veto item.",
    "zh": "幻觉维度是一个否决项。"
  },
  {
    "id": 321,
    "start": 2941.335,
    "end": 2945.273,
    "en": "Provide examples and boundary cases for each dimension.",
    "zh": "为每个维度提供示例和边界案例。"
  },
  {
    "id": 322,
    "start": 2945.273,
    "end": 2953.898,
    "en": "Experiment 7-4 intermediate difficulty, two stars: : Comparative Evaluation of Advanced JSON Cards vs. RAG",
    "zh": "实验7-4 中等难度，两颗星：高级JSON卡片与RAG的比较评估"
  },
  {
    "id": 323,
    "start": 2953.898,
    "end": 2964.735,
    "en": "Prerequisites: Must complete the Chapter 3 User Memory and RAG experiments (chapter3/user-memory, chapter3/agentic-rag-for-user-memory).",
    "zh": "前提条件：必须完成第3章用户记忆和RAG实验（chapter3/user-memory，chapter3/agentic-rag-for-user-memory）"
  },
  {
    "id": 324,
    "start": 2964.735,
    "end": 2973.135,
    "en": "Objective: Fairly compare the advantages and boundaries of structured memory versus unstructured retrieval on the same evaluation set.",
    "zh": "目标：在相同的评估集上公平比较结构化记忆与非结构化检索的优势和边界。"
  },
  {
    "id": 325,
    "start": 2973.135,
    "end": 2997.923,
    "en": "Reuse the two Chapter 3 projects and compare three configurations on the 60 test cases from chapter3/user-memory-evaluation—Pure Advanced JSON Cards (structured cards kept in context, with no retrieval needed), Pure RAG (conversation chunks embedded in a vector store, retrieval required), Hybrid System (core facts resident + original conversations retrieved on demand).",
    "zh": "复用两个第3章的项目，并在chapter3/user-memory-evaluation中的60个测试用例上比较三种配置——纯高级JSON卡片（结构化卡片保留在上下文中，无需检索）、纯RAG（对话片段嵌入向量存储，需要检索）、混合系统（核心事实保留+按需检索原始对话）"
  },
  {
    "id": 326,
    "start": 2997.923,
    "end": 3013.01,
    "en": "Acceptance Criteria: Record success rate, average steps, number of tool calls, latency, and cost across three complexity levels (basic recall / multi-session disambiguation / cross-session hidden associations).",
    "zh": "接受标准：记录在三个复杂度等级（基本回忆 / 多会话歧义消除 / 跨会话隐藏关联）下的成功率、平均步骤数、工具调用次数、延迟和成本。"
  },
  {
    "id": 327,
    "start": 3013.01,
    "end": 3022.61,
    "en": "Clearly describe the failure boundaries for each approach—what structured memory misses, what retrieval misses, and whether the hybrid truly achieves synergy.",
    "zh": "明确描述每种方法的失败边界——结构化记忆遗漏了什么，检索遗漏了什么，以及混合系统是否真正实现了协同效应。"
  },
  {
    "id": 328,
    "start": 3022.61,
    "end": 3032.948,
    "en": "This is an end-to-end regression layer: it checks that the complete task still works, but cannot by itself show whether the Agent correctly scopes a memory once it has been supplied.",
    "zh": "这是一个端到端的回归层：它检查整个任务是否仍然有效，但本身无法展示智能体在获得记忆后是否正确地界定记忆范围。"
  },
  {
    "id": 329,
    "start": 3032.948,
    "end": 3038.323,
    "en": "Configuration details and test cases are available in the companion repository.",
    "zh": "配置细节和测试用例可在配套仓库中找到。"
  },
  {
    "id": 330,
    "start": 3038.323,
    "end": 3046.26,
    "en": "The companion experiment ran all three systems on the same 60 questions and retained 180 real API trajectories.",
    "zh": "配套实验在相同60个问题上运行了三个系统，并保留了180条真实的API轨迹。"
  },
  {
    "id": 331,
    "start": 3046.26,
    "end": 3051.373,
    "en": "Table 7-3 reports both the rates and the underlying success counts.",
    "zh": "表7-3报告了成功率和相应的成功次数。"
  },
  {
    "id": 332,
    "start": 3051.373,
    "end": 3056.248,
    "en": "Table 7-3 Success Rate by Memory System and Task Level",
    "zh": "表7-3 按记忆系统和任务级别划分的成功率"
  },
  {
    "id": 333,
    "start": 3056.248,
    "end": 3072.523,
    "en": "System: Advanced JSON Cards; Basic Recall: 95%; Multi-Session Disambiguation: 60%; Hidden Cross-Session Links: 50%; Overall: 68.3% (41/60).",
    "zh": "系统：高级JSON卡片；基础回忆：95%；多会话消歧：60%；隐藏跨会话链接：50%；总体：68.3%（41/60）"
  },
  {
    "id": 334,
    "start": 3072.676,
    "end": 3087.513,
    "en": "System: RAG; Basic Recall: 90%; Multi-Session Disambiguation: 40%; Hidden Cross-Session Links: 15%; Overall: 48.3% (29/60).",
    "zh": "系统：RAG；基础回忆：90%；多会话消歧：40%；隐藏跨会话链接：15%；总体：48.3%（29/60）"
  },
  {
    "id": 335,
    "start": 3087.463,
    "end": 3101.826,
    "en": "System: Hybrid; Basic Recall: 80%; Multi-Session Disambiguation: 70%; Hidden Cross-Session Links: 50%; Overall: 66.7% (40/60).",
    "zh": "系统：混合型；基础回忆：80%；多会话消歧：70%；隐藏跨会话链接：50%；总体：66.7%（40/60）"
  },
  {
    "id": 336,
    "start": 3101.826,
    "end": 3105.788,
    "en": "Most notably, the hybrid did not win by default.",
    "zh": "最值得注意的是，混合型并没有默认获胜。"
  },
  {
    "id": 337,
    "start": 3105.788,
    "end": 3118.338,
    "en": "It did on 3 questions what neither single approach managed, yet fell short of the better single approach on 8 others; compared with the best single approach on each question, its average success rate was in fact lower.",
    "zh": "它在3个问题上做得比任何单一方法都好，但在其他8个问题上却不如更好的单一方法；与每个问题上最好的单一方法相比，它的平均成功率实际上更低。"
  },
  {
    "id": 338,
    "start": 3118.338,
    "end": 3128.288,
    "en": "Pure RAG was not far from structured cards on basic-recall questions, but on cross-session association questions its success rate dropped to 15%.",
    "zh": "纯RAG在基础回忆问题上与结构化卡片相差不远，但在跨会话关联问题上的成功率下降到了15%。"
  },
  {
    "id": 339,
    "start": 3128.288,
    "end": 3138.951,
    "en": "Another easily overlooked figure: across 180 judgments, the hallucination veto fired 28 times—evidence of how much a single veto item matters.",
    "zh": "另一个容易被忽视的数字：在180次判断中，幻觉否决触发了28次——这证明了一个单独的否决项有多重要。"
  },
  {
    "id": 340,
    "start": 3138.951,
    "end": 3142.751,
    "en": "The Same-Family Model Problem and Multi-Source Judging.",
    "zh": "同家族模型问题与多源评估。"
  },
  {
    "id": 341,
    "start": 3142.751,
    "end": 3151.101,
    "en": "When the Agent and the judging model come from the same family, the Agent may learn to exploit the judging model's preferences and blind spots.",
    "zh": "当智能体和评估模型来自同一家族时，智能体可能会利用评估模型的偏好和盲点。"
  },
  {
    "id": 342,
    "start": 3151.101,
    "end": 3159.076,
    "en": "This is precisely what Goodhart's Law states: when a metric becomes an optimization target, it ceases to be a good metric.",
    "zh": "这正是古德哈特定律所陈述的内容：当一个指标成为优化目标时，它就不再是一个好的指标。"
  },
  {
    "id": 343,
    "start": 3159.076,
    "end": 3168.988,
    "en": "The more an Agent is trained or tuned on a particular scoring system, the more it tends to exploit loopholes in that system rather than genuinely improving its capabilities.",
    "zh": "智能体越是在特定评分系统上进行训练或调整，就越倾向于利用该系统的漏洞，而不是真正提升其能力。"
  },
  {
    "id": 344,
    "start": 3168.988,
    "end": 3178.951,
    "en": "More insidiously, the Agent will gradually learn to avoid the types of errors that the judging model is not good at detecting, making the scoring system appear perfectly fine.",
    "zh": "更隐秘的是，智能体会逐渐学会避免那些评估模型难以检测的错误，从而使评分系统看起来完全正常。"
  },
  {
    "id": 345,
    "start": 3178.951,
    "end": 3190.063,
    "en": "The mitigation is multi-source heterogeneous judging—independent judges drawn from different model families (if the Agent runs on Claude, judge with GPT-5 and Gemini).",
    "zh": "缓解方法是多源异构评估——从不同模型家族中独立选取评估者（如果智能体运行在Claude上，则用GPT-5和Gemini进行评估）。"
  },
  {
    "id": 346,
    "start": 3190.063,
    "end": 3196.626,
    "en": "Different families' biases are often orthogonal, so the Agent can rarely fool all the judges at once.",
    "zh": "不同家族的偏差往往是正交的，因此智能体很少能同时欺骗所有评委。"
  },
  {
    "id": 347,
    "start": 3196.626,
    "end": 3204.026,
    "en": "Use the same Rubric so everyone judges the same target, and aggregate by weighted averaging or consistency checks.",
    "zh": "使用相同的评分标准，让所有人都评判同一目标，并通过加权平均或一致性检查进行聚合。"
  },
  {
    "id": 348,
    "start": 3204.026,
    "end": 3212.213,
    "en": "In deployment, a single model can handle rapid evaluation, with periodic quality audits run against the full multi-source setup.",
    "zh": "在部署中，一个模型可以处理快速评估，同时定期对完整的多源设置进行质量审计。"
  },
  {
    "id": 349,
    "start": 3212.213,
    "end": 3227.176,
    "en": "Multi-source judging addresses the question of which models should serve as judges; the next question is which modalities should be evaluated—extending LLM-as-a-Judge from text to speech, images, and video is another axis of evaluation coverage.",
    "zh": "多源评审解决了哪些模型应作为评委的问题；下一个问题是应评估哪些模态——将LLM-as-a-Judge从文本扩展到语音、图像和视频是另一个评估覆盖维度。"
  },
  {
    "id": 350,
    "start": 3227.176,
    "end": 3230.088,
    "en": "Multimodal LLM-as-a-Judge.",
    "zh": "多模态LLM-as-a-Judge。"
  },
  {
    "id": 351,
    "start": 3230.088,
    "end": 3236.651,
    "en": "Multimodal judging extends LLM-as-a-Judge to the domains of speech, images, and video.",
    "zh": "多模态评审将LLM-as-a-Judge扩展到语音、图像和视频领域。"
  },
  {
    "id": 352,
    "start": 3236.651,
    "end": 3239.576,
    "en": "Four common directions are as follows.",
    "zh": "四个常见的方向如下。"
  },
  {
    "id": 353,
    "start": 3239.576,
    "end": 3248.988,
    "en": "TTS Evaluation (TTS stands for Text-to-Speech): Assesses accuracy, naturalness, voice consistency, and emotional expression.",
    "zh": "TTS评估（TTS代表文本转语音）：评估准确性、自然度、语音一致性及情感表达。"
  },
  {
    "id": 354,
    "start": 3248.988,
    "end": 3256.263,
    "en": "These dimensions can capture prosodic issues that traditional WER (Word Error Rate) struggles to detect.",
    "zh": "这些维度可以捕捉传统WER（词错误率）难以检测的语调问题。"
  },
  {
    "id": 355,
    "start": 3256.263,
    "end": 3272.288,
    "en": "ASR Evaluation (ASR stands for Automatic Speech Recognition): Performs semantic impact assessment—misrecognizing \"today's weather\" is harmless, but misrecognizing \"transfer one thousand\" as \"ten thousand\" could have serious consequences.",
    "zh": "ASR评估（ASR代表自动语音识别）：执行语义影响评估——误识别“今天的天气”无害，但误识别“转账一千”为“一万元”可能造成严重后果。"
  },
  {
    "id": 356,
    "start": 3272.288,
    "end": 3281.138,
    "en": "UI Evaluation: Uses a Proposer-Reviewer mechanism to check for issues like text overflow, color contrast, and button placement.",
    "zh": "UI评估：使用提议者-审查者机制检查文本溢出、颜色对比度和按钮位置等问题。"
  },
  {
    "id": 357,
    "start": 3281.138,
    "end": 3294.626,
    "en": "Here, the proposer-reviewer is used as an evaluation method, differing from its use as a generation system component in Chapter 5, but the core mechanism is the same—one model generates, another independently reviews.",
    "zh": "在这里，提议者-审查者被用作一种评估方法，不同于第5章中作为生成系统组件的用途，但核心机制相同——一个模型生成，另一个独立审查。"
  },
  {
    "id": 358,
    "start": 3294.626,
    "end": 3302.701,
    "en": "Video Editing Evaluation: Verifies the correctness of clip start/end points and effect application through keyframes.",
    "zh": "视频编辑评估：通过关键帧验证片段起止点和效果应用的正确性。"
  },
  {
    "id": 359,
    "start": 3302.701,
    "end": 3311.426,
    "en": "Experiment 7-5 intermediate difficulty, two stars: : Building a Fully Automated TTS Quality Evaluation Pipeline",
    "zh": "实验7-5 中等难度，两颗星：构建一个完全自动化的TTS质量评估流程"
  },
  {
    "id": 360,
    "start": 3311.426,
    "end": 3320.501,
    "en": "This experiment requires designing and implementing a complete multimodal LLM-as-a-Judge TTS quality evaluation system from scratch.",
    "zh": "此实验要求从零开始设计并实现一个完整的多模态LLM-as-a-Judge TTS质量评估系统。"
  },
  {
    "id": 361,
    "start": 3320.668,
    "end": 3352.018,
    "en": "Design a multi-dimensional TTS Rubric: The Accuracy dimension verifies whether all text is correctly read (no omissions/misreadings/additions); the Naturalness dimension assesses whether the speech sounds natural rather than robotic, has no unnatural pauses, and uses natural prosody; the Emotional Expression dimension checks whether the tone matches the text's emotional tone (rising intonation for questions, emphasis for exclamations, slower pace and lower pitch for sad content); the Voice",
    "zh": "设计一个多维的TTS评分标准：准确性维度验证所有文本是否被正确朗读（无遗漏/误读/添加）；自然度维度评估语音是否听起来自然而非机械，是否有不自然的停顿，并使用自然的语调；情感表达维度检查语气是否与文本的情感基调相符（疑问句使用升调，感叹句强调，悲伤内容使用较慢的语速和较低的音调）；语音"
  },
  {
    "id": 362,
    "start": 3352.018,
    "end": 3363.28,
    "en": "Consistency dimension evaluates speaker similarity when a reference voice is available (the multimodal model simultaneously receives the reference voice and the synthesized voice for comparison).",
    "zh": "一致性维度在有参考语音的情况下评估说话人相似性（多模态模型同时接收参考语音和合成语音进行比较）。"
  },
  {
    "id": 363,
    "start": 3363.28,
    "end": 3382.243,
    "en": "Build a diverse test corpus: varying lengths (single sentence → long paragraph), genres (news/story/dialogue), emotions (neutral/excited/sad), and special challenges (numbers/proper nouns/polyphonic characters/dialectal vocabulary).",
    "zh": "构建一个多样化的测试语料库：包含不同长度（单句→长段落）、不同文体（新闻/故事/对话）、不同情绪（中性/兴奋/悲伤），以及特殊挑战（数字/专有名词/多音字/方言词汇）。"
  },
  {
    "id": 364,
    "start": 3382.243,
    "end": 3397.905,
    "en": "Connect the TTS module to mainstream services (OpenAI, ElevenLabs, Fish Audio, Minimax, Doubao), then send the synthesized audio, source text, reference audio, and Rubric to an audio-capable multimodal judge.",
    "zh": "将TTS模块连接到主流服务（OpenAI、ElevenLabs、Fish Audio、Minimax、Doubao），然后将合成音频、源文本、参考音频和评分标准发送给具备音频处理能力的多模态评判模型。"
  },
  {
    "id": 365,
    "start": 3397.905,
    "end": 3404.33,
    "en": "Record the judge model and hashes of both candidate and reference audio so that every score can be audited.",
    "zh": "记录评判模型和候选音频及参考音频的哈希值，以便每项评分都可以审计。"
  },
  {
    "id": 366,
    "start": 3404.33,
    "end": 3408.705,
    "en": "The companion repository preserves a small direct-listening run.",
    "zh": "配套的代码库保留了一个小规模的直接聆听运行结果。"
  },
  {
    "id": 367,
    "start": 3408.705,
    "end": 3421.418,
    "en": "OpenAI and Fish Audio each generated four clips covering numbers, polyphonic Chinese characters, long-form text, and excited delivery; Voxtral completed all eight four-dimensional judgments.",
    "zh": "OpenAI和Fish Audio各自生成了四个片段，涵盖数字、多音汉字、长文本和兴奋的表达；Voxtral完成了全部八个四维评分。"
  },
  {
    "id": 368,
    "start": 3421.418,
    "end": 3428.543,
    "en": "Both systems averaged 5.00 for accuracy and 4.00 for naturalness.",
    "zh": "两个系统在准确性上平均得分为5.00，在自然度上平均得分为4.00。"
  },
  {
    "id": 369,
    "start": 3428.543,
    "end": 3440.418,
    "en": "Fish Audio scored 4.00/3.00 for emotion and voice consistency, while OpenAI scored 3.75/2.75.",
    "zh": "Fish Audio在情感和语音一致性上的得分为4.00/3.00，而OpenAI为3.75/2.75。"
  },
  {
    "id": 370,
    "start": 3440.418,
    "end": 3447.655,
    "en": "Splitting the Rubric into dimensions therefore exposed differences that a simple \"was it read correctly?\" check would miss.",
    "zh": "因此，将评分标准拆分为各个维度揭示了简单地‘是否正确朗读’检查所无法发现的差异。"
  },
  {
    "id": 371,
    "start": 3447.655,
    "end": 3451.118,
    "en": "Those scores do not establish a provider winner.",
    "zh": "这些得分并不能确定哪家供应商更优。"
  },
  {
    "id": 372,
    "start": 3451.118,
    "end": 3460.293,
    "en": "There were only four clips per provider, and the fixed reference clip came from Fish S1, which naturally favors Fish Audio on voice similarity.",
    "zh": "每个供应商只有四个片段，且固定的参考片段来自Fish S1，这自然使Fish Audio在语音相似性上占优势。"
  },
  {
    "id": 373,
    "start": 3460.293,
    "end": 3467.043,
    "en": "A general TTS comparison should remove that dimension or give every candidate an appropriate target speaker.",
    "zh": "一般的TTS比较应去除该维度，或为每个候选者提供合适的指定说话人。"
  },
  {
    "id": 374,
    "start": 3467.043,
    "end": 3475.33,
    "en": "A voice-cloning comparison should ask every system to imitate the same speaker and calibrate the model judge against blinded human listening.",
    "zh": "语音克隆比较应要求每个系统模仿同一个说话人，并根据盲测的人类听觉对模型评判进行校准。"
  },
  {
    "id": 375,
    "start": 3475.33,
    "end": 3482.43,
    "en": "Choosing the reference answer, image, or audio is part of evaluation design, not neutral setup work.",
    "zh": "选择参考答案、图像或音频是评估设计的一部分，而不是中立的设置工作。"
  },
  {
    "id": 376,
    "start": 3482.43,
    "end": 3487.768,
    "en": "Handwritten Rubrics are a fast way to establish diagnostic dimensions like these.",
    "zh": "手写的评分标准是建立此类诊断维度的快速方法。"
  },
  {
    "id": 377,
    "start": 3487.768,
    "end": 3496.48,
    "en": "At larger scale, a specialized generative reward model can automate the judging; Chapter 8 covers how such reward models are trained.",
    "zh": "在更大规模下，专门的生成式奖励模型可以自动化评估；第8章将介绍这类奖励模型是如何训练的。"
  },
  {
    "id": 378,
    "start": 3496.48,
    "end": 3507.38,
    "en": "The score a judge model gives says only whether the outcome was good or bad; to turn that outcome into a fixable problem, you still have to locate the step at which the failure actually began.",
    "zh": "评估模型给出的分数只说明结果是好还是坏；要将这个结果转化为可修复的问题，你仍需确定失败实际开始的步骤。"
  },
  {
    "id": 379,
    "start": 3507.38,
    "end": 3511.805,
    "en": "Failure Attribution: Locate the First Error in a Trajectory.",
    "zh": "故障归因：定位轨迹中的第一个错误。"
  },
  {
    "id": 380,
    "start": 3511.805,
    "end": 3516.58,
    "en": "End-to-end evaluation often says only \"pass\" or \"fail\".",
    "zh": "端到端评估通常只说明“通过”或“失败”。"
  },
  {
    "id": 381,
    "start": 3516.58,
    "end": 3531.205,
    "en": "To make results drive fixes, perform failure attribution for every failed trajectory: record the main error class, the first step at which unacceptable behavior appeared, the relevant tool call or model output, and evidence that can be audited.",
    "zh": "为了使结果推动修复，对每个失败的轨迹进行故障归因：记录主要错误类别、不可接受行为首次出现的步骤、相关的工具调用或模型输出，以及可审计的证据。"
  },
  {
    "id": 382,
    "start": 3531.205,
    "end": 3537.693,
    "en": "Attribute the first error that sent the task off course; later errors are often just the chain reaction.",
    "zh": "归因于导致任务偏离的第一个错误；后续错误通常是连锁反应。"
  },
  {
    "id": 383,
    "start": 3537.693,
    "end": 3553.73,
    "en": "Problematic production cases usually surface through three signals: an explicit user correction (\"do not do that\"), a downvote or other negative feedback, or a later state check, rule verifier, or LLM judge showing that the Agent did something it should not have done.",
    "zh": "有问题的生产案例通常通过三种信号浮现：用户明确的更正（“不要那样做”）、低分或其他负面反馈，或者后续状态检查、规则验证器或LLM评估者表明智能体做了它不应该做的事情。"
  },
  {
    "id": 384,
    "start": 3553.73,
    "end": 3559.343,
    "en": "Building a failure-attribution system requires careful human review of these trajectories.",
    "zh": "构建故障归因系统需要对这些轨迹进行仔细的人工审核。"
  },
  {
    "id": 385,
    "start": 3559.343,
    "end": 3568.568,
    "en": "LLMs can assist, but cannot replace that review, because failure attribution often reveals product problems, not just technical bugs.",
    "zh": "LLM可以提供帮助，但不能取代人工审核，因为故障归因常常揭示产品问题，而不仅仅是技术错误。"
  },
  {
    "id": 386,
    "start": 3568.568,
    "end": 3577.468,
    "en": "As the product matures, the taxonomy can grow into several top-level classes, each with sub-classes, until it holds hundreds of entries.",
    "zh": "随着产品的成熟，分类体系可以扩展为多个顶级类别，每个类别下再细分，直到包含数百个条目。"
  },
  {
    "id": 387,
    "start": 3577.468,
    "end": 3584.28,
    "en": "Those classes and their attribution recipes then become the prompt or the Skill for an attribution-annotation Agent.",
    "zh": "这些类别及其归因方法随后将成为归因标注智能体的提示或技能。"
  },
  {
    "id": 388,
    "start": 3584.28,
    "end": 3589.018,
    "en": "For a Coding Agent, a workable initial taxonomy looks like this.",
    "zh": "对于编码智能体，一个可行的初始分类体系看起来像这样。"
  },
  {
    "id": 389,
    "start": 3589.18,
    "end": 3618.992,
    "en": "Error class: Requirement understanding and ambiguity; Typical symptom: What got built is not what the user asked for: a condition in the requirement is dropped, or the scope is read too broadly or too narrowly; when the repository holds two config files with the same name, one is simply picked, with no note and no question; How to locate the first error: Use an LLM to compare the original requirement against what the Agent actually did (the action sequence), item by item; find the first",
    "zh": "错误类别：需求理解和歧义；典型症状：所构建的内容与用户要求不符：需求中的某个条件被遗漏，或者范围被读得过宽或过窄；当仓库中存在两个同名的配置文件时，只会选择其中一个，没有任何注释和提问；如何定位第一个错误：使用LLM将原始需求与智能体实际执行的内容（动作序列）逐项比较；找到结果中的第一个偏差，然后回溯到导致该偏差的工具调用或回复。"
  },
  {
    "id": 390,
    "start": 3618.992,
    "end": 3624.63,
    "en": "divergence in the outcome, then trace back to the tool call or the reply that caused it.",
    "zh": "在结果中的第一个偏差，然后回溯到导致该偏差的工具调用或回复。"
  },
  {
    "id": 391,
    "start": 3624.63,
    "end": 3652.942,
    "en": "Error class: Missing process or convention; Typical symptom: Committing without running unit tests; editing code before writing a plan; pulling in an external dependency when the repository already has an internal equivalent; bypassing an established architectural convention; How to locate the first error: Find the first action that violates the development-process convention — the first git commit, the first file write — and check whether it had read the source of that convention beforehand.",
    "zh": "错误类别：缺少流程或规范；典型症状：在未运行单元测试的情况下提交代码；在编写计划前就修改代码；当仓库已有内部等效依赖时引入外部依赖；绕过既定的架构规范；如何定位第一个错误：找到违反开发流程规范的第一个动作——第一次git提交、第一次文件写入——并检查它是否事先阅读了该规范的来源。"
  },
  {
    "id": 392,
    "start": 3652.942,
    "end": 3675.792,
    "en": "Error class: Tool-call errors; Typical symptom: Repeated failed edits to the same file; malformed JSON/schema or arguments; special characters breaking transcription, escaping, or writing; How to locate the first error: Record the first failed edit or tool call together with the original request and the error return; repeated failures are downstream symptoms.",
    "zh": "错误类别：工具调用错误；典型症状：对同一文件的重复失败编辑；格式错误的JSON/模式或参数；特殊字符导致转录、转义或写入失败；如何定位第一个错误：记录第一次失败的编辑或工具调用，以及原始请求和错误返回；重复失败是下游症状。"
  },
  {
    "id": 393,
    "start": 3675.792,
    "end": 3700.33,
    "en": "Error class: Hacking the verification environment; Typical symptom: Editing an assertion, adding a skip, mocking out the logic under test; claiming \"the tests pass\" without ever running them; How to locate the first error: Take the first message that modifies a test or the verification logic; then cross-check the completion claim against the commands actually executed in the trajectory to confirm whether it really ran.",
    "zh": "错误类别：篡改验证环境；典型症状：修改断言，添加跳过标记，模拟被测试逻辑；声称“测试通过”但从未运行它们；如何定位第一个错误：找到第一条修改测试或验证逻辑的消息；然后将完成声明与轨迹中实际执行的命令进行交叉核对，确认其是否真的运行了。"
  },
  {
    "id": 394,
    "start": 3700.33,
    "end": 3723.167,
    "en": "Error class: Incomplete edit; Typical symptom: The function signature changed and three call sites were updated, but a fourth — a dynamic call, a binding in another language, a schema — was missed; How to locate the first error: Take the set difference between the blast radius the Agent claimed and the real one, pick the first omission, and look back at the keywords it searched with.",
    "zh": "错误类别：编辑不完整；典型症状：函数签名已更改且三个调用点已更新，但第四个（动态调用、另一种语言中的绑定、模式）被遗漏；如何定位第一个错误：取Agent声称的扩散范围与实际范围之间的集合差集，选择第一个遗漏项，并查看它搜索的关键词。"
  },
  {
    "id": 395,
    "start": 3723.167,
    "end": 3749.83,
    "en": "Error class: Wrong information reported to the user; Typical symptom: Tool calls and environment state are all correct, but what the user is told is not: a wrong amount, status, or time; partial completion described as full completion; a required disclosure omitted; How to locate the first error: Align every factual claim in the reply against the tool return values and take the first claim that cannot be traced or that contradicts a return.",
    "zh": "错误类别：向用户报告了错误的信息；典型症状：工具调用和环境状态都正确，但用户被告知的内容不正确：金额、状态或时间错误；部分完成被描述为完全完成；必要的披露被遗漏；如何定位第一个错误：将回复中的每个事实声明与工具返回值对齐，并找出第一个无法追溯或与返回值矛盾的声明。"
  },
  {
    "id": 396,
    "start": 3749.83,
    "end": 3770.18,
    "en": "Error class: Non-functional regression; Typical symptom: A public API or schema changed with no database migration script; a validation deleted so that a check would pass; How to locate the first error: Take the first message that made the change and see whether it recognised that it was touching a public interface or a structure that needs migration.",
    "zh": "错误类别：非功能性回归；典型症状：公共API或模式发生了变化但没有数据库迁移脚本；删除了验证以使检查通过；如何定位第一个错误：找到第一个做出更改的消息，并查看它是否意识到自己正在接触公共接口或需要迁移的结构。"
  },
  {
    "id": 397,
    "start": 3770.18,
    "end": 3789.092,
    "en": "Error class: Abnormal model termination; Typical symptom: Output truncated mid-stream, stopping for no reason, timing out, or ending without the closing action; How to locate the first error: Locate the first abnormal termination and separate model stop, Harness timeout, and tool-service failure.",
    "zh": "错误类别：模型异常终止；典型症状：输出在中途被截断，无故停止，超时或没有关闭动作就结束；如何定位第一个错误：找到第一个异常终止，并区分模型停止、Harness超时和工具服务故障。"
  },
  {
    "id": 398,
    "start": 3789.092,
    "end": 3808.905,
    "en": "Error class: Stopping the task too early; Typical symptom: Only part of a multi-goal task is done; declaring something impossible without exhausting the reasonable options; How to locate the first error: Locate the first decision that dropped a goal or abandoned exploration, and record it separately from the final verification failure.",
    "zh": "错误类别：过早停止任务；典型症状：只完成了多目标任务的一部分；在耗尽合理选项之前就声称某事不可能；如何定位第一个错误：找到第一个放弃目标或放弃探索的决定，并将其单独记录，与最终验证失败分开。"
  },
  {
    "id": 399,
    "start": 3809.068,
    "end": 3819.843,
    "en": "An attribution-annotation Agent can use an LLM to run root-cause analysis over production trajectories at scale, but it must not emit a single sentence of \"reason for failure\".",
    "zh": "一个属性注释智能体可以使用LLM对生产轨迹进行大规模根本原因分析，但它不能发出任何一句“失败原因”的内容。"
  },
  {
    "id": 400,
    "start": 3819.793,
    "end": 3834.58,
    "en": "The attribution record has to be structured — JSON or YAML, citing specific step numbers, tool names, and observed evidence; it must also separate root cause from consequence, judge recoverability, and give a confidence.",
    "zh": "属性记录必须是结构化的——JSON或YAML，引用具体的步骤编号、工具名称和观察到的证据；还必须区分根本原因和结果，判断可恢复性，并给出置信度。"
  },
  {
    "id": 401,
    "start": 3834.58,
    "end": 3850.518,
    "en": "For example, edit_file returns an old_string mismatch and the Agent then retries three times without writing the file: the primary cause is the file-edit and tool-call error, and the three retries are consequences, not three independent root causes.",
    "zh": "例如，edit_file返回旧字符串不匹配，然后智能体重试三次但未写入文件：主要原因是文件编辑和工具调用错误，而这三次重试是结果，而不是三个独立的根本原因。"
  },
  {
    "id": 402,
    "start": 3850.518,
    "end": 3859.843,
    "en": "When several classes appear at once, pick the primary one by the rule \"earliest, and explains the failures that follow\", and keep the rest as secondary.",
    "zh": "当多个类别同时出现时，根据规则“最早出现且能解释后续失败”选择主要类别，并将其余作为次要类别。"
  },
  {
    "id": 403,
    "start": 3859.843,
    "end": 3878.793,
    "en": "At least three classes in the table above can be pre-filtered by rules before an LLM is asked to localize the first error: cross-checking the completion claim against the commands actually executed, whether the diff touches test assertions and skip markers, and whether the diff changes a public API or schema with no migration file.",
    "zh": "表中至少有三个类别可以在询问LLM定位第一个错误之前通过规则预过滤：将完成声明与实际执行的命令进行交叉核对，检查diff是否触及测试断言和跳过标记，以及检查diff是否改变了公共API或模式但没有迁移文件。"
  },
  {
    "id": 404,
    "start": 3878.793,
    "end": 3886.268,
    "en": "Rules first, LLM second, is both cheaper and more accurate than feeding every trajectory to an LLM.",
    "zh": "规则优先，LLM其次，这比将每条轨迹输入LLM更便宜且更准确。"
  },
  {
    "id": 405,
    "start": 3886.268,
    "end": 3900.668,
    "en": "When storing an attribution record, keep more than the LLM's output: save the task goal, the environment state, the Agent version, the toolset version, and the complete Agent trajectory, so that the case can be turned into a regression test.",
    "zh": "在存储属性记录时，要保存比LLM输出更多的内容：保存任务目标、环境状态、智能体版本、工具集版本和完整的智能体轨迹，以便该案例可以转化为回归测试。"
  },
  {
    "id": 406,
    "start": 3900.668,
    "end": 3904.218,
    "en": "The three classes below are worth a closer look.",
    "zh": "下面的三类情况值得仔细看一下。"
  },
  {
    "id": 407,
    "start": 3904.218,
    "end": 3907.843,
    "en": "The \"Right Actions, Wrong Report\" Problem.",
    "zh": "“正确动作，错误报告”问题。"
  },
  {
    "id": 408,
    "start": 3907.843,
    "end": 3917.455,
    "en": "Right actions, wrong report\" is the category most often hidden by an overall pass rate, because most evaluations assert only on environment state.",
    "zh": "“正确动作，错误报告”是大多数整体通过率隐藏的类别，因为大多数评估只关注环境状态。"
  },
  {
    "id": 409,
    "start": 3917.455,
    "end": 3935.443,
    "en": "τ²-bench scores it separately: of the 704 published baseline runs whose task carries a communication requirement, 240 failed, 162 of those failed the communication check, and 80—a third of all failures—had correct environment state and a wrong report.",
    "zh": "τ²-bench将其单独评分：在704个具有通信需求的已发布基线运行中，240个失败，其中162个在通信检查中失败，80个——占所有失败的三分之一——环境状态正确但报告错误。"
  },
  {
    "id": 410,
    "start": 3935.443,
    "end": 3939.143,
    "en": "The companion repository holds a matching case.",
    "zh": "配套仓库中有一个对应的案例。"
  },
  {
    "id": 411,
    "start": 3939.143,
    "end": 3964.168,
    "en": "Asked to enter the expenses from expenses.jpg into a bookkeeping app, the Agent spent 32 steps granting permissions, searching, opening the image, filling in each row and saving, with no step returning an error, then declared the task complete; the validator reported that the row it should have written—Dress, ¥436.35—was absent, bearing no relation to the four it entered.",
    "zh": "要求将expenses.jpg中的费用输入记账应用，该智能体花了32步进行权限授予、搜索、打开图片、填写每一行并保存，没有步骤返回错误，然后宣布任务完成；验证器报告说它应该写入的行——Dress，¥436.35——缺失，与它输入的四行毫无关系。"
  },
  {
    "id": 412,
    "start": 3964.168,
    "end": 3981.68,
    "en": "Step 8 of its own reasoning reads \"I cannot actually see the content/details of the expenses in the image\": it already knew the data was missing, neither stopped nor reported it, and by step 11 four invented expenses had appeared in its notes, which every later input faithfully entered.",
    "zh": "它自己的推理步骤8写道：“我实际上看不到图片中的费用内容/细节”：它已经知道数据缺失，既没有停止也没有报告，到步骤11时，四个虚构的费用已经出现在它的笔记中，后续所有输入都忠实地录入了这些数据。"
  },
  {
    "id": 413,
    "start": 3981.68,
    "end": 3987.418,
    "en": "The first error is step 8, and that step neither raised an error nor was a tool call.",
    "zh": "第一个错误是步骤8，而该步骤既没有引发错误，也不是工具调用。"
  },
  {
    "id": 414,
    "start": 3987.418,
    "end": 4005.543,
    "en": "Its root cause is also easy to misfile: T3A is a text-only Agent whose observation space holds only the element tree and no image pixels, so the cause is not \"the model cannot do OCR\" but a missing observation channel plus the absence of a legal \"information unavailable\" exit.",
    "zh": "其根本原因也容易被误归类：T3A是一个仅文本的智能体，其观察空间仅包含元素树，不包含图像像素，因此原因不是“模型无法进行OCR”，而是缺少观察通道以及缺少合法的“信息不可用”退出机制。"
  },
  {
    "id": 415,
    "start": 4005.543,
    "end": 4014.28,
    "en": "File it as a model-capability problem and the next move is to swap models or train OCR; the real fix is to add the channel and the exit.",
    "zh": "将其归类为模型能力问题，下一步就是更换模型或训练OCR；真正的解决方法是添加通道和退出机制。"
  },
  {
    "id": 416,
    "start": 4014.28,
    "end": 4021.83,
    "en": "Experiment 7-6 intermediate difficulty, two stars: : Failure Attribution on AndroidWorld Traces",
    "zh": "实验7-6 中等难度，两颗星：AndroidWorld轨迹中的失败归因"
  },
  {
    "id": 417,
    "start": 4021.83,
    "end": 4030.143,
    "en": "This experiment practices the attribution method of this section on real traces, with no emulator and no model API required.",
    "zh": "本实验在真实轨迹上实践本节的归因方法，无需模拟器或模型API。"
  },
  {
    "id": 418,
    "start": 4030.143,
    "end": 4047.705,
    "en": "The material is the saved T3A run in chapter7/android-world: t3a.md holds the step-by-step Action/Reason/Summary for every task, and t3a_failed.md collects more than fifty failed traces, each ending with the validator's objective verdict.",
    "zh": "材料是第7章android-world中保存的T3A运行记录：t3a.md记录了每个任务的逐步操作/推理/总结，t3a_failed.md收集了超过五十个失败的轨迹，每个轨迹以验证器的客观结论结尾。"
  },
  {
    "id": 419,
    "start": 4047.705,
    "end": 4050.868,
    "en": "Step 1: Stratified sampling.",
    "zh": "步骤1：分层抽样。"
  },
  {
    "id": 420,
    "start": 4050.868,
    "end": 4059.893,
    "en": "Stratify the sample and draw at least ten silent failures from t3a_failed.md — traces with no tool error anywhere.",
    "zh": "对样本进行分层，并从t3a_failed.md中抽取至少十个无声失败——没有任何工具错误的轨迹。"
  },
  {
    "id": 421,
    "start": 4059.893,
    "end": 4069.243,
    "en": "No tool return may have failed; the Agent either declared completion or ran out of steps; and only the closing validator verdict marks the task failed.",
    "zh": "没有工具返回可能意味着失败；智能体要么声明完成，要么用完了步骤；只有最终的验证器判断才会标记任务失败。"
  },
  {
    "id": 422,
    "start": 4069.396,
    "end": 4072.571,
    "en": "Step 2: Locate the first error.",
    "zh": "步骤2：定位第一个错误。"
  },
  {
    "id": 423,
    "start": 4072.521,
    "end": 4079.808,
    "en": "For each trace, record the step number of the first error and whether that step is a tool call or an assistant message.",
    "zh": "对于每个轨迹，记录第一个错误的步骤号以及该步骤是工具调用还是助手消息。"
  },
  {
    "id": 424,
    "start": 4079.808,
    "end": 4103.871,
    "en": "Silent failures need two techniques: fact-anchor comparison, which walks the Agent's statements against the tool return values and takes the first divergence; and trajectory-prefix bisection, which cuts the trajectory at step k and hands the truncated trajectory to a human reviewer to continue the task — if the task is still recoverable, the error lies after k. Searching for error keywords is no substitute.",
    "zh": "无声失败需要两种技术：事实锚点比较，即把智能体的陈述与工具返回值进行对比并找到第一个分歧点；以及轨迹前缀二分法，即在步骤k处截断轨迹并将其交给人工审查员继续任务——如果任务仍可恢复，则错误出现在k之后。搜索错误关键词无法替代这两种方法。"
  },
  {
    "id": 425,
    "start": 4103.871,
    "end": 4107.208,
    "en": "Step 3: Write structured records.",
    "zh": "步骤3：编写结构化记录。"
  },
  {
    "id": 426,
    "start": 4107.208,
    "end": 4120.046,
    "en": "Emit one JSON or YAML record per trace with the task name, first-error step, error category, responsible party, supporting quotations, and a separation of primary cause from consequence.",
    "zh": "为每个轨迹生成一个JSON或YAML记录，包含任务名称、第一个错误步骤、错误类别、责任方、支持性引用，并区分主要原因和后果。"
  },
  {
    "id": 427,
    "start": 4120.046,
    "end": 4123.783,
    "en": "Step 4: Compare with the existing notes.",
    "zh": "步骤4：与现有笔记进行比较。"
  },
  {
    "id": 428,
    "start": 4123.783,
    "end": 4130.821,
    "en": "Check your results against t3a_failed_analysis.md and record every disagreement.",
    "zh": "将你的结果与t3a_failed_analysis.md进行核对，并记录所有不一致之处。"
  },
  {
    "id": 429,
    "start": 4130.821,
    "end": 4147.108,
    "en": "Pay particular attention to root-cause assignment: those notes originally recorded the image-transcription failure as \"the vision model lacks OCR,\" yet T3A's observation space contains no image pixels at all, so the real root cause is a missing observation channel.",
    "zh": "特别注意根本原因的归因：这些笔记最初将图像转录失败归因于“视觉模型缺乏OCR”，但T3A的观察空间中根本没有图像像素，因此真正的根本原因是缺失的观察通道。"
  },
  {
    "id": 430,
    "start": 4147.108,
    "end": 4150.783,
    "en": "An existing attribution note is not an answer key.",
    "zh": "现有的归因笔记不是答案钥匙。"
  },
  {
    "id": 431,
    "start": 4150.783,
    "end": 4154.621,
    "en": "Step 5: Convert to regression tasks.",
    "zh": "步骤5：转换为回归任务。"
  },
  {
    "id": 432,
    "start": 4154.621,
    "end": 4167.133,
    "en": "Take three traces whose first error is an assistant message, cut each trajectory prefix just before that error, and write the acceptable-action set and the forbidden actions to form trajectory-prefix regression tasks.",
    "zh": "选取三个第一个错误是助手消息的轨迹，在该错误前截断每个轨迹的前缀，并写出可接受动作集和禁止动作，以形成轨迹前缀回归任务。"
  },
  {
    "id": 433,
    "start": 4167.133,
    "end": 4170.546,
    "en": "Scope-Sensitive Document Formatting Errors.",
    "zh": "范围敏感的文档格式错误。"
  },
  {
    "id": 434,
    "start": 4170.546,
    "end": 4176.808,
    "en": "When a user says \"the quotes are wrong\", that cannot be turned into a global character replacement.",
    "zh": "当用户说“引号错误”时，不能简单地转换为全局字符替换。"
  },
  {
    "id": 435,
    "start": 4176.808,
    "end": 4183.721,
    "en": "At minimum you must distinguish ASCII straight quotes (\", '), Chinese curly quotes (“”, ‘’) and Markdown backticks (`  `).",
    "zh": "至少你需要区分ASCII直引号（\"，'），中文弯引号（“”，‘’）和Markdown反引号（` `）。"
  },
  {
    "id": 436,
    "start": 4183.721,
    "end": 4194.383,
    "en": "The same character plays a different syntactic role in Chinese prose, quoted English source, inline code, code blocks, code comments, JSON and paths.",
    "zh": "同一个字符在中文散文、引用英文原文、内联代码、代码块、代码注释、JSON和路径中扮演不同的语法角色。"
  },
  {
    "id": 437,
    "start": 4194.383,
    "end": 4210.346,
    "en": "Evaluation data should first parse the document into scoped spans—for example ZH_PROSE, EN_PROSE, QUOTED_SOURCE, INLINE_CODE, CODE_BLOCK, CODE_COMMENT and JSON_OR_SCHEMA.",
    "zh": "评估数据应首先将文档解析为作用域片段——例如ZH_PROSE、EN_PROSE、QUOTED_SOURCE、INLINE_CODE、CODE_BLOCK、CODE_COMMENT和JSON_OR_SCHEMA。"
  },
  {
    "id": 438,
    "start": 4210.346,
    "end": 4218.358,
    "en": "Each span records the set of permitted transformations, the characters that must be protected, and the validator result after editing.",
    "zh": "每个片段记录允许的转换集、必须保护的字符以及编辑后的验证结果。"
  },
  {
    "id": 439,
    "start": 4218.358,
    "end": 4222.796,
    "en": "The three cases below cannot be handled by one replacement rule:",
    "zh": "以下三种情况无法通过一个替换规则处理："
  },
  {
    "id": 440,
    "start": 4222.796,
    "end": 4227.533,
    "en": "Refer to the companion repository for the complete code implementation.",
    "zh": "请参考配套的仓库获取完整的代码实现。"
  },
  {
    "id": 441,
    "start": 4227.533,
    "end": 4242.308,
    "en": "Trajectory-prefix regression should require the model to make the minimal edit, and check at the same time Chinese document style, the preservation rate of quoted English source, code and JSON syntax, and the edit distance over non-target text.",
    "zh": "轨迹前缀回归应要求模型进行最小编辑，同时检查中文文档风格、引用英文原文的保留率、代码和JSON语法的正确性，以及非目标文本的编辑距离。"
  },
  {
    "id": 442,
    "start": 4242.308,
    "end": 4252.083,
    "en": "When the rules cannot determine the scope, keeping the original text and asking for clarification should count as a permitted action, not a guessed edit that happens to pass.",
    "zh": "当规则无法确定作用域时，保留原始文本并请求澄清应视为允许的操作，而不是恰好通过的猜测性编辑。"
  },
  {
    "id": 443,
    "start": 4252.083,
    "end": 4258.196,
    "en": "Exact-Copy Errors: From old_string Mismatch to Layer-by-Layer Localization.",
    "zh": "精确复制错误：从旧字符串不匹配到逐层定位。"
  },
  {
    "id": 444,
    "start": 4258.196,
    "end": 4264.433,
    "en": "An old_string failure cannot be attributed simply to \"the model copied it wrong\" either.",
    "zh": "旧字符串的失败也不能简单归因于“模型复制错误”。"
  },
  {
    "id": 445,
    "start": 4264.433,
    "end": 4275.183,
    "en": "For the same string, store the raw byte hash, the Unicode code point sequence and the tokenizer token ID sequence, then look for the first divergence along this chain:",
    "zh": "对于同一字符串，存储原始字节哈希、Unicode代码点序列和分词器标记ID序列，然后沿着这一链路查找第一个分歧点："
  },
  {
    "id": 446,
    "start": 4275.183,
    "end": 4281.533,
    "en": "Code statement: original file bytes → tool return → Harness serialization → model context",
    "zh": "代码语句：原始文件字节 → 工具返回 → Harness序列化 → 模型上下文"
  },
  {
    "id": 447,
    "start": 4281.533,
    "end": 4287.271,
    "en": "model token output → decoded string → JSON/tool-call parsing → tool matching.",
    "zh": "模型标记输出 → 解码字符串 → JSON/工具调用解析 → 工具匹配。"
  },
  {
    "id": 448,
    "start": 4287.271,
    "end": 4303.746,
    "en": "A minimal set of evaluation probes covers direct restatement, extraction from a long context, placement into tool arguments, selection among similar strings, and spaces, newlines, backslashes, Unicode combining characters and low-frequency tokens.",
    "zh": "一组最小的评估探测覆盖直接重述、从长上下文中提取、放入工具参数、在相似字符串中选择，以及空格、换行符、反斜杠、Unicode组合字符和低频标记。"
  },
  {
    "id": 449,
    "start": 4303.746,
    "end": 4313.408,
    "en": "The metrics are byte-exact match, code-point-exact match, token-exact match, the position of the first divergence, and the real tool success rate.",
    "zh": "指标包括字节精确匹配、代码点精确匹配、标记精确匹配、第一个分歧位置以及实际工具成功率。"
  },
  {
    "id": 450,
    "start": 4313.408,
    "end": 4329.646,
    "en": "If the model is correct on the direct probe but the tool call still fails, fix the tokenizer, the serialization, the Harness or the tool protocol; only when the first divergence appears in the model's own output should the case be turned into the copying training data of Chapter 8.",
    "zh": "如果模型在直接探测上正确，但工具调用仍然失败，则修复分词器、序列化、Harness或工具协议；只有当第一个分歧出现在模型自身的输出中时，才应将该情况转为第8章的复制训练数据。"
  },
  {
    "id": 451,
    "start": 4329.646,
    "end": 4333.571,
    "en": "End-to-End and Trajectory-Prefix Regression Tasks.",
    "zh": "端到端与轨迹前缀回归任务。"
  },
  {
    "id": 452,
    "start": 4333.732,
    "end": 4339.432,
    "en": "Once the first error is known, turn the repair target into a repeatable regression task.",
    "zh": "一旦发现第一个错误，就将修复目标转化为可重复的回归任务。"
  },
  {
    "id": 453,
    "start": 4339.382,
    "end": 4348.994,
    "en": "End-to-end regression starts from the initial state and user request, runs the whole workflow, and checks final state, required output, and safety.",
    "zh": "端到端回归从初始状态和用户请求开始，运行整个工作流程，并检查最终状态、所需输出和安全性。"
  },
  {
    "id": 454,
    "start": 4348.994,
    "end": 4361.382,
    "en": "A trajectory-prefix regression task freezes the context, conversation, tool returns, and environment state just before the first error, then tests only the next one or few observable actions.",
    "zh": "轨迹前缀回归任务会在第一个错误发生前冻结上下文、对话、工具返回和环境状态，然后仅测试接下来的一个或几个可观察动作。"
  },
  {
    "id": 455,
    "start": 4361.382,
    "end": 4368.757,
    "en": "It is cheaper and isolates one decision boundary, so it is especially important for high-reliability production Agents.",
    "zh": "它成本更低，并且隔离了一个决策边界，因此对高可靠性生产智能体尤为重要。"
  },
  {
    "id": 456,
    "start": 4368.757,
    "end": 4379.969,
    "en": "End-to-end regression tasks start from the initial state and the user request, let the Agent complete the whole task, and check the final state, the required output, and the safety conditions.",
    "zh": "端到端回归任务从初始状态和用户请求开始，让智能体完成整个任务，并检查最终状态、所需输出和安全条件。"
  },
  {
    "id": 457,
    "start": 4379.969,
    "end": 4385.882,
    "en": "They come closest to the production result, but make it hard to tell at which step the failure occurred.",
    "zh": "它们最接近生产结果，但难以判断失败发生在哪个步骤。"
  },
  {
    "id": 458,
    "start": 4385.882,
    "end": 4393.569,
    "en": "As a rule, end-to-end regression tasks verify that the Agent's capability in each domain still meets expectations.",
    "zh": "一般来说，端到端回归任务验证智能体在每个领域的能力是否仍符合预期。"
  },
  {
    "id": 459,
    "start": 4393.569,
    "end": 4402.132,
    "en": "The standard benchmarks described in this chapter — OSWorld, AndroidWorld, tau-bench — are all end-to-end regression tasks.",
    "zh": "本章描述的标准基准——OSWorld、AndroidWorld、tau-bench——都是端到端回归任务。"
  },
  {
    "id": 460,
    "start": 4402.132,
    "end": 4414.819,
    "en": "Trajectory-prefix regression tasks freeze the existing context, dialogue, tool returns, and environment state, and ask the Agent only to think and take the next observable action or few actions.",
    "zh": "轨迹前缀回归任务会冻结现有的上下文、对话、工具返回和环境状态，并仅要求智能体思考并执行下一个可观察动作或少数动作。"
  },
  {
    "id": 461,
    "start": 4414.819,
    "end": 4419.269,
    "en": "They cost less and isolate a single policy or tool problem.",
    "zh": "它们成本更低，并且隔离了单一策略或工具问题。"
  },
  {
    "id": 462,
    "start": 4419.269,
    "end": 4434.019,
    "en": "For a production Agent that needs high reliability, building the trajectory-prefix regression set often matters more than the end-to-end one — and it requires the developer to patiently build the failure taxonomy and attribution system described in the previous section.",
    "zh": "对于需要高可靠性的生产智能体来说，构建轨迹前缀回归集往往比端到端回归更重要——这需要开发者耐心地建立前一节中描述的故障分类和归因系统。"
  },
  {
    "id": 463,
    "start": 4434.019,
    "end": 4451.507,
    "en": "The answer to a trajectory-prefix regression task should be defined as an acceptable action set rather than a single canonical action or answer: it may require \"read the repository rules first,\" \"ask the user first,\" or \"refuse the dangerous operation,\" while also listing the prohibited actions.",
    "zh": "轨迹前缀回归任务的答案应定义为一个可接受的动作集合，而不是单一的规范动作或答案：它可能需要“先阅读仓库规则”，“先询问用户”，或“拒绝危险操作”，同时列出禁止的动作。"
  },
  {
    "id": 464,
    "start": 4451.668,
    "end": 4460.118,
    "en": "Once failure attribution is done, an evaluation dataset of both end-to-end and trajectory-prefix regression tasks can be constructed.",
    "zh": "一旦完成故障归因，就可以构建包含端到端和轨迹前缀回归任务的评估数据集。"
  },
  {
    "id": 465,
    "start": 4460.068,
    "end": 4488.33,
    "en": "For a Coding Agent: a missing process should yield an end-to-end regression task carrying a plan document and test acceptance conditions; a tool-call error should have its failing prefix truncated and edited into a boundary task that tests whether the model can fix the format, escape special characters, or switch to a suitable tool; abnormal termination should add recovery scenarios for truncation, timeout, and tool failure; completion and logic errors should add multi-goal checklists,",
    "zh": "对于编码智能体：缺失流程应生成一个携带计划文档和测试验收条件的端到端回归任务；工具调用错误应将其失败的前缀截断并编辑为一个边界任务，以测试模型能否修复格式、转义特殊字符或切换到合适的工具；异常终止应添加截断、超时和工具故障的恢复场景；完成和逻辑错误应添加多目标清单。"
  },
  {
    "id": 466,
    "start": 4488.33,
    "end": 4517.505,
    "en": "reminders of remaining work, and the \"not yet proven impossible\" boundary; requirement-understanding and ambiguity cases should freeze tasks with several reasonable readings into prefixes and put \"clarify first\" in the acceptable-action set; symptom-fix and faked-verification cases should add two hard constraints to acceptance — \"test assertions may not be modified\" and \"a completion claim must carry the output of a command that really ran\"; and information-reporting cases should assert on the",
    "zh": "剩余工作的提醒，以及“尚未被证明不可能”的边界；需求理解与歧义情况应将任务冻结为多个合理解释的前缀，并在可接受动作集中加入“先澄清”；症状修复和虚假验证情况应添加两个硬性约束——“测试断言不得修改”和“完成声明必须包含实际运行的命令输出”；信息报告情况应在回复内容本身上进行断言，而不仅仅是在环境状态上。"
  },
  {
    "id": 467,
    "start": 4517.505,
    "end": 4521.993,
    "en": "content of the reply itself, not only on the environment state.",
    "zh": "回复内容本身，而不仅仅是在环境状态上。"
  },
  {
    "id": 468,
    "start": 4521.993,
    "end": 4529.018,
    "en": "The evaluation dataset is the foundation for the post-training of Chapter 8 and the self-evolution of Chapter 9.",
    "zh": "评估数据集是第8章后训练和第9章自我进化的基础。"
  },
  {
    "id": 469,
    "start": 4529.018,
    "end": 4537.78,
    "en": "Experiment 7-7 intermediate difficulty, two stars: : Trajectory-Prefix Boundary Evaluation with Multiple Encodings",
    "zh": "实验7-7 中等难度，两颗星：: 多编码的轨迹前缀边界评估"
  },
  {
    "id": 470,
    "start": 4537.78,
    "end": 4549.843,
    "en": "This experiment supplies the Agent with known user memory, the current instruction, a trajectory prefix, tool returns, and environment state, then asks for only the next observable action.",
    "zh": "该实验为智能体提供已知的用户记忆、当前指令、轨迹前缀、工具返回值和环境状态，然后仅要求下一个可观察动作。"
  },
  {
    "id": 471,
    "start": 4549.843,
    "end": 4563.03,
    "en": "It covers production bad cases such as scope conflicts, stale preferences overriding current instructions, low-confidence inferences, confirmation before high-risk deletion, and preview before external publication.",
    "zh": "它涵盖了生产中的不良案例，如作用域冲突、过时偏好覆盖当前指令、低置信度推理、高风险删除前确认，以及外部发布前的预览。"
  },
  {
    "id": 472,
    "start": 4563.03,
    "end": 4575.58,
    "en": "The same cases are encoded as JSON Cards, Markdown, and Python-like memory; deterministic checks score the allowed decision category, safety, required evidence, and forbidden actions.",
    "zh": "相同案例以JSON卡片、Markdown和Python-like记忆形式编码；确定性检查对允许的决策类别、安全性、所需证据和禁止动作进行评分。"
  },
  {
    "id": 473,
    "start": 4575.58,
    "end": 4586.33,
    "en": "With GPT-5.6-sol through OpenRouter, all 33 cells (11 cases × 3 encodings) completed without API errors.",
    "zh": "通过OpenRouter的GPT-5.6-sol，所有33个单元（11个案例 × 3种编码）均无API错误完成。"
  },
  {
    "id": 474,
    "start": 4586.33,
    "end": 4596.08,
    "en": "Each encoding passed 6/11 cases, but their failure locations differed, showing that changing the representation alone does not repair application policy.",
    "zh": "每种编码通过了6/11个案例，但失败位置不同，这表明仅改变表示方式并不能修复应用策略。"
  },
  {
    "id": 475,
    "start": 4596.08,
    "end": 4602.318,
    "en": "In practical model selection, we often face the question: \"Which is better, A or B?",
    "zh": "在实际模型选择中，我们经常面临的问题是：“A和B哪个更好？”"
  },
  {
    "id": 476,
    "start": 4602.318,
    "end": 4608.168,
    "en": "Pairwise comparison provides an evaluation method that does not rely on absolute scores.",
    "zh": "成对比较提供了一种不依赖绝对分数的评估方法。"
  },
  {
    "id": 477,
    "start": 4608.168,
    "end": 4611.318,
    "en": "Pairwise Comparison and Model Ranking.",
    "zh": "成对比较与模型排名。"
  },
  {
    "id": 478,
    "start": 4611.318,
    "end": 4617.505,
    "en": "As illustrated in Figure 7-6: Elo Rating and Pairwise Comparison Ranking.",
    "zh": "如图7-6所示：Elo评分与成对比较排名。"
  },
  {
    "id": 479,
    "start": 4617.505,
    "end": 4631.368,
    "en": "Elo Rating (a ranking system originally designed for chess) quantifies the relative ability of models through a large number of pairwise matchups: the larger the rating difference, the higher the expected win rate for the stronger model.",
    "zh": "Elo评分（最初为国际象棋设计的排名系统）通过大量成对比赛量化模型的相对能力：评分差异越大，较强模型的预期胜率越高。"
  },
  {
    "id": 480,
    "start": 4631.368,
    "end": 4642.218,
    "en": "For example, if Model A has a rating of 1200 and Model B has a rating of 1000, the Elo system would predict A's win rate to be approximately 76%.",
    "zh": "例如，如果模型A的评分为1200，模型B的评分为1000，Elo系统会预测A的胜率为约76%。"
  },
  {
    "id": 481,
    "start": 4642.218,
    "end": 4652.518,
    "en": "If B unexpectedly wins, B gains more points and A loses more—an upset triggers a larger correction, which is what lets rankings converge quickly on true ability.",
    "zh": "如果B意外获胜，B获得更多的分数而A失去更多的分数——冷门事件会触发更大的修正，这使得排名能够快速收敛到真实能力。"
  },
  {
    "id": 482,
    "start": 4652.518,
    "end": 4664.543,
    "en": "The statistical foundation is the Bradley-Terry model: each model is abstracted as a latent \"strength score,\" and the probability of one beating another in a matchup is determined by the difference between their scores.",
    "zh": "统计基础是Bradley-Terry模型：每个模型被抽象为一个潜在的“强度分数”，在对战中一个击败另一个的概率由它们的分数差决定。"
  },
  {
    "id": 483,
    "start": 4664.543,
    "end": 4669.768,
    "en": "Elo is the engineering implementation of this model in online-update form.",
    "zh": "Elo是该模型在线更新形式的工程实现。"
  },
  {
    "id": 484,
    "start": 4669.768,
    "end": 4680.418,
    "en": "Chatbot Arena uses anonymous random matchups—users blindly choose the better response without knowing the model's identity, and rankings are derived from millions of votes.",
    "zh": "Chatbot Arena使用匿名随机对战——用户盲选更好的回答而不了解模型的身份，排名来自于数百万次投票。"
  },
  {
    "id": 485,
    "start": 4680.418,
    "end": 4689.28,
    "en": "The advantage is that no \"absolute standard\" needs defining; all that is required is human judgment on \"which is better, A or B.",
    "zh": "优势在于不需要定义“绝对标准”；只需要人类判断“哪个更好，A还是B”。"
  },
  {
    "id": 486,
    "start": 4689.28,
    "end": 4693.83,
    "en": "The limitation: rankings depend on what users happen to ask.",
    "zh": "局限性在于排名取决于用户恰好提出的问题。"
  },
  {
    "id": 487,
    "start": 4693.83,
    "end": 4702.68,
    "en": "If a flood of users ask programming questions, models strong at programming rank higher—which may say little about their level on other tasks.",
    "zh": "如果大量用户提问编程问题，擅长编程的模型排名更高——这可能与它们在其他任务上的水平关系不大。"
  },
  {
    "id": 488,
    "start": 4702.852,
    "end": 4721.139,
    "en": "When pairwise judging is performed by an LLM rather than human voting, one must also guard against Position Bias—the judging model systematically favors the candidate appearing in a certain position (usually the first), and the judgment may remain unchanged even if the content of the two candidates is completely swapped.",
    "zh": "当成对判断由LLM而非人工投票执行时，还需要防范位置偏差——判断模型会系统性地偏爱出现在特定位置（通常是第一个）的候选者，即使两个候选者的内容完全交换，判断结果也可能不变。"
  },
  {
    "id": 489,
    "start": 4721.089,
    "end": 4738.214,
    "en": "The standard mitigation method is to evaluate each pair twice with swapped order: once with A first, once with B first, and average the two results; a stricter approach is to only count cases where the two judgments are consistent, and treat inconsistencies as ties or send them for human review.",
    "zh": "标准的缓解方法是对每对进行两次评估，交换顺序：一次以A开头，一次以B开头，然后平均两次结果；更严格的方法是只统计两次判断一致的情况，并将不一致的情况视为平局或提交人工审核。"
  },
  {
    "id": 490,
    "start": 4738.214,
    "end": 4747.902,
    "en": "Chatbot Arena's approach is essentially the same—randomizing the display positions of the two responses so that position bias cancels out over a large sample.",
    "zh": "Chatbot Arena的方法本质上相同——通过随机化两个回答的显示位置，使位置偏差在大样本中相互抵消。"
  },
  {
    "id": 491,
    "start": 4747.902,
    "end": 4755.814,
    "en": "Experiment 7-8 intermediate difficulty, two stars: : Building a Model Leaderboard from Pairwise Comparison Data",
    "zh": "实验7-8 中等难度，两颗星：从成对比较数据构建模型排行榜"
  },
  {
    "id": 492,
    "start": 4755.814,
    "end": 4767.927,
    "en": "This experiment aims to deeply understand how the Bradley-Terry model extracts relative ability scores from a large number of pairwise comparisons by implementing an Elo rating calculation system from scratch.",
    "zh": "本实验旨在深入理解Bradley-Terry模型如何通过从零开始实现Elo评分系统，从大量成对比较中提取相对能力分数。"
  },
  {
    "id": 493,
    "start": 4767.927,
    "end": 4775.202,
    "en": "Use the real open-source voting dataset from Chatbot Arena (containing millions of anonymous user blind votes).",
    "zh": "使用Chatbot Arena的真实开源投票数据集（包含数百万次匿名用户盲选投票）。"
  },
  {
    "id": 494,
    "start": 4775.202,
    "end": 4782.339,
    "en": "Implement the Elo rating iterative update algorithm: Initialize all models with a rating of 1000.",
    "zh": "实现Elo评分迭代更新算法：将所有模型初始化为1000分。"
  },
  {
    "id": 495,
    "start": 4782.339,
    "end": 4785.927,
    "en": "Process voting records in chronological order.",
    "zh": "按时间顺序处理投票记录。"
  },
  {
    "id": 496,
    "start": 4785.927,
    "end": 4807.727,
    "en": "For each matchup, calculate the expected win rate based on the current rating difference between the two models, compare the actual result with the expectation, and adjust ratings by a fixed learning rate—the winner gains points, the loser loses points, with the adjustment magnitude proportional to the deviation from the expectation (an upset loss results in a larger rating change).",
    "zh": "对于每一对比，根据当前两个模型的评分差异计算预期胜率，将实际结果与预期进行比较，并通过固定的学习率调整评分——胜者获得分数，败者失去分数，调整幅度与偏离预期的程度成比例（意外失利会导致更大的评分变化）"
  },
  {
    "id": 497,
    "start": 4807.727,
    "end": 4813.702,
    "en": "Sort models in descending order by final rating and calculate the pairwise win rate matrix.",
    "zh": "按最终评分从高到低对模型进行排序，并计算两两之间的胜率矩阵"
  },
  {
    "id": 498,
    "start": 4813.702,
    "end": 4818.939,
    "en": "Compare with the official leaderboard to verify that the rankings are generally consistent.",
    "zh": "与官方排行榜对比，验证排名大致一致"
  },
  {
    "id": 499,
    "start": 4818.939,
    "end": 4838.839,
    "en": "Exact point-for-point alignment is not required: the official Chatbot Arena uses Bradley-Terry maximum likelihood estimation (solving all matchups simultaneously, independent of voting order), while this implementation uses online incremental Elo updates (results are affected by the learning rate K-factor and processing order).",
    "zh": "不需要精确一一对应：官方Chatbot Arena使用Bradley-Terry最大似然估计（同时解决所有对决，与投票顺序无关），而此实现使用在线增量Elo更新（结果受学习率K因子和处理顺序的影响）"
  },
  {
    "id": 500,
    "start": 4838.839,
    "end": 4846.252,
    "en": "The two algorithms should yield consistent overall rankings, but the specific scores will not be precisely identical.",
    "zh": "这两种算法应产生一致的整体排名，但具体分数不会完全相同"
  },
  {
    "id": 501,
    "start": 4846.252,
    "end": 4858.302,
    "en": "The second part of the experiment creates a historical ranking evolution animation: Slice the voting data by time (weekly or monthly) and calculate Elo rating snapshots for each time point.",
    "zh": "实验的第二部分创建历史排名演变动画：按时间（每周或每月）切分投票数据，并为每个时间点计算Elo评分快照"
  },
  {
    "id": 502,
    "start": 4858.302,
    "end": 4869.139,
    "en": "Use D3.js to implement a bar chart race animation (horizontal bar length = rating, vertical position = ranking, smoothly changing over time).",
    "zh": "使用D3.js实现条形图竞赛动画（条形长度=评分，垂直位置=排名，随时间平滑变化）"
  },
  {
    "id": 503,
    "start": 4869.139,
    "end": 4879.714,
    "en": "By observing the animation, identify technology breakthrough moments (a model's rating suddenly surges), competitive landscape evolution, and model lifecycles.",
    "zh": "通过观察动画，可以识别技术突破时刻（模型评分突然飙升）、竞争格局演变和模型生命周期"
  },
  {
    "id": 504,
    "start": 4879.714,
    "end": 4882.627,
    "en": "Evaluation-Driven Model Selection.",
    "zh": "评估驱动的模型选择"
  },
  {
    "id": 505,
    "start": 4882.627,
    "end": 4892.902,
    "en": "Model selection is not simply about \"choosing the strongest model\"; it involves making evaluation-driven trade-offs across multiple dimensions based on the application scenario.",
    "zh": "模型选择不仅仅是\"选择最强模型\"；它涉及根据应用场景在多个维度上做出评估驱动的权衡"
  },
  {
    "id": 506,
    "start": 4892.902,
    "end": 4895.439,
    "en": "Key Dimensions for Selection.",
    "zh": "选择的关键维度"
  },
  {
    "id": 507,
    "start": 4895.439,
    "end": 4905.139,
    "en": "Throughput and Latency are two families of metrics that are easily confused; untangling them takes only one fact—LLM inference runs in two stages.",
    "zh": "吞吐量和延迟是两种容易混淆的指标；只需一个事实就能理清它们——LLM推理分为两个阶段"
  },
  {
    "id": 508,
    "start": 4905.139,
    "end": 4914.814,
    "en": "Prefill reads the entire context at once and determines the Time To First Token (TTFT): the delay between the user pressing Enter and the first character appearing.",
    "zh": "预填充一次性读取整个上下文，并确定首个标记时间（TTFT）：用户按下回车键到第一个字符出现之间的延迟"
  },
  {
    "id": 509,
    "start": 4914.814,
    "end": 4920.102,
    "en": "The longer the context, the slower the prefill and the higher the TTFT.",
    "zh": "上下文越长，预填充越慢，TTFT越高"
  },
  {
    "id": 510,
    "start": 4920.102,
    "end": 4935.439,
    "en": "Decode then generates the response token by token, setting the generation speed (tokens/second)—which also dictates thinking time: at 50 tokens/s, a model producing 2000 thinking tokens spends 40 seconds just thinking.",
    "zh": "解码阶段逐个生成响应标记，设定生成速度（每秒标记数）——这也决定了思考时间：以50个标记/秒的速度，一个生成2000个思考标记的模型仅思考就需要40秒"
  },
  {
    "id": 511,
    "start": 4935.439,
    "end": 4940.914,
    "en": "Around these two stages, the main throughput and latency metrics are as follows:",
    "zh": "在这两个阶段中，主要的吞吐量和延迟指标如下："
  },
  {
    "id": 512,
    "start": 4940.914,
    "end": 4947.927,
    "en": "Input Throughput / Output Throughput: Correspond to the speed of Prefill and Decode, respectively.",
    "zh": "输入吞吐量/输出吞吐量：分别对应预填充和解码的速度。"
  },
  {
    "id": 513,
    "start": 4947.927,
    "end": 4954.727,
    "en": "TTFT: Equals queuing time plus Prefill time; it is the user-perceived \"responsiveness.",
    "zh": "TTFT：等于排队时间加上预填充时间；这是用户感知的“响应速度”。"
  },
  {
    "id": 514,
    "start": 4954.876,
    "end": 4973.488,
    "en": "Thinking Latency: The number of thinking tokens generated can vary severalfold across models, and thinking length is not necessarily positively correlated with task effectiveness—measure each model's thinking token usage and the corresponding benefit on your own workload, rather than inferring from public leaderboards alone.",
    "zh": "思考延迟：生成的思考标记数量在不同模型之间可能相差数倍，思考长度并不一定与任务效果正相关——应根据自身工作负载测量每个模型的思考标记使用情况及其带来的相应收益，而不是仅凭公开排行榜进行推断。"
  },
  {
    "id": 515,
    "start": 4973.438,
    "end": 4979.826,
    "en": "p95 Tail Latency: The latency that 95% of requests will not exceed.",
    "zh": "p95尾部延迟：95%的请求不会超过的延迟。"
  },
  {
    "id": 516,
    "start": 4979.826,
    "end": 4991.263,
    "en": "It is a better indicator of real user experience than the average, which can be pulled down by a large number of fast requests, masking severe slowdowns experienced by a minority of users.",
    "zh": "它比平均值更能反映真实的用户体验，因为大量快速请求可能会拉低平均值，掩盖少数用户遇到的严重延迟问题。"
  },
  {
    "id": 517,
    "start": 4991.263,
    "end": 4996.013,
    "en": "Cost: Pricing for input/output/cache tokens.",
    "zh": "成本：输入/输出/缓存标记的定价。"
  },
  {
    "id": 518,
    "start": 4996.013,
    "end": 5004.951,
    "en": "Cost should not be evaluated in isolation—a cheap model with a low success rate may actually incur higher costs due to frequent retries.",
    "zh": "成本不能孤立评估——一个价格低廉但成功率低的模型，由于频繁重试，实际成本可能更高。"
  },
  {
    "id": 519,
    "start": 5004.951,
    "end": 5010.038,
    "en": "The average cost per task and the cost-performance ratio need to be calculated.",
    "zh": "需要计算每个任务的平均成本和成本效益比。"
  },
  {
    "id": 520,
    "start": 5010.038,
    "end": 5020.638,
    "en": "Performance: The precise definitions of Pass@1, Pass^k, Pass@k, and Best@k are given earlier in the \"Evaluation Metrics System.",
    "zh": "性能：Pass@1、Pass^k、Pass@k 和 Best@k 的精确定义已在“评估指标体系”中给出。"
  },
  {
    "id": 521,
    "start": 5020.638,
    "end": 5049.726,
    "en": "Here, we only discuss how to choose in the context of model selection—for daily scenarios, focus on Pass@1 (single-attempt average success rate); for critical operations, prioritize Pass^k, focusing on the stability of \"never making a mistake\"; for exploratory tasks, prioritize Pass@k or Best@k, looking at the upper bound of capability given enough opportunities; for open-ended tasks, use multi-dimensional Rubric scoring.",
    "zh": "在此，我们仅讨论在模型选择背景下的选择方法——对于日常场景，关注 Pass@1（单次尝试的平均成功率）；对于关键操作，优先考虑 Pass^k，关注“从不犯错”的稳定性；对于探索性任务，优先考虑 Pass@k 或 Best@k，观察在足够机会下的能力上限；对于开放性任务，使用多维评分体系。"
  },
  {
    "id": 522,
    "start": 5049.726,
    "end": 5063.138,
    "en": "Rate Limits and Reliability: RPM (Requests Per Minute) / TPM (Tokens Per Minute) limits affect concurrency capabilities, and some APIs dynamically adjust quotas during peak hours.",
    "zh": "速率限制和可靠性：RPM（每分钟请求次数）/TPM（每分钟标记数）限制影响并发能力，一些 API 在高峰时段会动态调整配额。"
  },
  {
    "id": 523,
    "start": 5063.138,
    "end": 5074.276,
    "en": "In terms of robustness, pay attention to out-of-distribution data, adversarial inputs, and long-running stability (whether issues like mode collapse or attention drift occur).",
    "zh": "在鲁棒性方面，需要注意分布外数据、对抗性输入以及长时间运行的稳定性（是否出现模式崩溃或注意力漂移等问题）。"
  },
  {
    "id": 524,
    "start": 5074.276,
    "end": 5082.663,
    "en": "Budget–capability curves: A single score at a fixed budget is not enough to determine whether an Agent can handle long-horizon work.",
    "zh": "预算-能力曲线：固定预算下的单一分数不足以判断智能体是否能处理长时程任务。"
  },
  {
    "id": 525,
    "start": 5082.663,
    "end": 5091.126,
    "en": "In addition to success rate, report how performance changes with wall-clock time, tokens, tool calls, or compute budget.",
    "zh": "除了成功率外，还应报告性能随墙钟时间、标记数、工具调用或计算预算的变化情况。"
  },
  {
    "id": 526,
    "start": 5091.126,
    "end": 5111.526,
    "en": "RE-Bench makes the problem concrete: with a total budget of two hours per environment, the best Agent scored about four times as high as human experts; humans, however, benefited more from additional time, narrowly surpassed the best Agent at eight hours, and scored about twice as high when multiple attempts were given 32 total hours.",
    "zh": "RE-Bench使问题具体化：在每个环境总预算为两小时的情况下，最佳智能体的得分是人类专家的四倍；然而，人类在获得更多时间后受益更大，在八小时时略微超过了最佳智能体，并且在获得多次尝试机会时（总共32小时）得分提高了约两倍。"
  },
  {
    "id": 527,
    "start": 5111.526,
    "end": 5117.338,
    "en": "Short-budget leadership therefore cannot be extrapolated directly to long-running capability.",
    "zh": "因此，短预算下的领导能力不能直接推广到长期运行的能力。"
  },
  {
    "id": 528,
    "start": 5117.338,
    "end": 5122.938,
    "en": "Model selection should compare several budget points close to the duration of the real workload.",
    "zh": "模型选择应比较接近实际工作负载持续时间的多个预算点。"
  },
  {
    "id": 529,
    "start": 5122.938,
    "end": 5139.538,
    "en": "In practice you can mix models: lightweight models on simple requests to cut costs, powerful models on complex tasks to protect quality; or specialist models on particular sub-tasks (image understanding, code generation), collaborating through sub-agent mechanisms.",
    "zh": "实际上，你可以混合使用模型：对简单请求使用轻量级模型以降低成本，对复杂任务使用强大模型以保护质量；或者对特定子任务（如图像理解、代码生成）使用专业模型，通过子智能体机制进行协作。"
  },
  {
    "id": 530,
    "start": 5139.538,
    "end": 5164.688,
    "en": "Any such heterogeneous combination must itself be validated by evaluation, to confirm the overall benefit outweighs the added system complexity (for example, treating questions like \"which is larger, 9.9 or 9.11?\" or \"I want to wash the car; the car wash is 50 meters from home—should I walk or drive?\" as simple ones and handing them to a lightweight model, leading to wrong decisions).",
    "zh": "任何此类异构组合本身必须通过评估来验证，以确认整体收益超过增加的系统复杂性（例如，将类似“9.9和9.11哪个更大？”或“我想洗车；洗车店离家50米——我应该步行还是开车？”这样的简单问题交给轻量级模型，导致错误决策）。"
  },
  {
    "id": 531,
    "start": 5164.688,
    "end": 5168.738,
    "en": "Model Behavior: When to Stop Reading and Start Editing.",
    "zh": "模型行为：何时停止阅读并开始编辑。"
  },
  {
    "id": 532,
    "start": 5168.738,
    "end": 5175.626,
    "en": "Model selection compares not only whether a model can finish a task, but also how it behaves by default.",
    "zh": "模型选择不仅比较模型是否能完成任务，还比较其默认行为。"
  },
  {
    "id": 533,
    "start": 5175.626,
    "end": 5180.538,
    "en": "One readily observable difference in Coding Agents is the action threshold.",
    "zh": "编码智能体的一个明显差异是动作阈值。"
  },
  {
    "id": 534,
    "start": 5180.538,
    "end": 5189.576,
    "en": "Given the same coding task, some models explore the repository broadly and confirm the architecture, callers, and tests before editing.",
    "zh": "对于相同的编码任务，一些模型会广泛探索仓库，确认架构、调用者和测试后再进行编辑。"
  },
  {
    "id": 535,
    "start": 5189.576,
    "end": 5196.101,
    "en": "Others localize from less evidence, edit early, and use test feedback to complete their understanding.",
    "zh": "其他模型则从较少的证据中定位，早期进行编辑，并利用测试反馈来完善理解。"
  },
  {
    "id": 536,
    "start": 5196.101,
    "end": 5203.863,
    "en": "The former assigns a higher cost to premature edits; the latter assigns a higher opportunity cost to reading one more file.",
    "zh": "前者对过早编辑的成本更高；后者对多读一个文件的机会成本更高。"
  },
  {
    "id": 537,
    "start": 5204.02,
    "end": 5211.27,
    "en": "This tendency in an Agent has two sources: the system prompt in the harness, and the model's behavioral policy.",
    "zh": "这种智能体倾向有两个来源：Harness中的系统提示，以及模型的行为策略。"
  },
  {
    "id": 538,
    "start": 5211.22,
    "end": 5227.082,
    "en": "Post-training is a key source of that behavioral policy: SFT trajectories demonstrate \"how much to read before acting,\" process rewards reward or penalize particular tool paths, and outcome rewards reinforce the entire policy that ended in success.",
    "zh": "训练后是该行为策略的关键来源：SFT轨迹展示了“在行动前应阅读多少内容”，过程奖励会奖励或惩罚特定工具路径，结果奖励会强化以成功结束的整个策略。"
  },
  {
    "id": 539,
    "start": 5227.082,
    "end": 5233.32,
    "en": "Over time, what the model learns is not only how to write code, but also engineering habits.",
    "zh": "随着时间推移，模型学到的不仅是如何编写代码，还有工程习惯。"
  },
  {
    "id": 540,
    "start": 5233.32,
    "end": 5241.595,
    "en": "Experiment 7-9 intermediate difficulty, two stars: : Measuring Model Action Thresholds in a Fixed Coding Harness",
    "zh": "实验7-9 中等难度，两颗星：在固定编码Harness中测量模型动作阈值"
  },
  {
    "id": 541,
    "start": 5241.595,
    "end": 5253.045,
    "en": "Objective: Isolate the model factor, quantify how Coding models trade off continued information gathering against starting to edit, and evaluate path efficiency together with outcome quality.",
    "zh": "目标：隔离模型因素，量化编码模型在持续信息收集与开始编辑之间的权衡，并与结果质量一起评估路径效率。"
  },
  {
    "id": 542,
    "start": 5253.045,
    "end": 5259.145,
    "en": "Method: Run chapter6/model-action-threshold/experiment.py.",
    "zh": "方法：运行chapter6/model-action-threshold/experiment.py。"
  },
  {
    "id": 543,
    "start": 5259.145,
    "end": 5273.495,
    "en": "By default it calls GPT-5.6-sol and Claude Sonnet 5 through the same OpenRouter OpenAI-compatible endpoint while fixing the system prompt, tool schemas, task repositories, test commands, and turn limit.",
    "zh": "默认情况下，它通过相同的OpenRouter OpenAI兼容端点调用GPT-5.6-sol和Claude Sonnet 5，同时固定系统提示、工具模式、任务仓库、测试命令和回合限制。"
  },
  {
    "id": 544,
    "start": 5273.495,
    "end": 5279.87,
    "en": "The neutral prompt specifies neither a minimum number of files to read nor a requirement to edit quickly.",
    "zh": "中性提示既不指定要读取的最小文件数，也不要求快速编辑。"
  },
  {
    "id": 545,
    "start": 5279.87,
    "end": 5285.47,
    "en": "Repeat each of the three task categories at least three times and alternate model order.",
    "zh": "每个任务类别至少重复三次，并交替模型顺序。"
  },
  {
    "id": 546,
    "start": 5285.47,
    "end": 5299.32,
    "en": "Record tool calls, files read, searches, and wall-clock time before the first edit, along with first-tested-patch acceptance, post-test rework, final success, changed files, and token usage.",
    "zh": "记录工具调用、读取的文件、搜索和首次编辑前的墙钟时间，以及首次测试补丁接受、测试后重做、最终成功、更改的文件和令牌使用情况。"
  },
  {
    "id": 547,
    "start": 5299.32,
    "end": 5306.332,
    "en": "Causal interpretation: The neutral campaign asks whether behavior changes with the model inside one harness.",
    "zh": "因果解释：中性活动询问在同一个Harness内模型行为是否发生变化。"
  },
  {
    "id": 548,
    "start": 5306.332,
    "end": 5315.582,
    "en": "To measure the harness as a modifier, run a separate campaign with --policy explore-first; do not mix the two policies in one model comparison.",
    "zh": "为了衡量Harness作为修改器的效果，运行一个带有--policy explore-first的单独活动；不要在一个模型比较中混合两种策略。"
  },
  {
    "id": 549,
    "start": 5315.582,
    "end": 5326.12,
    "en": "Behavior that changes with a model swap and persists for the same model across harnesses is stronger evidence of a model effect; the reverse is stronger evidence of a harness effect.",
    "zh": "随着模型更换而变化并在不同Harness中对同一模型持续的行为，是模型效应的更强证据；相反的情况则是Harness效应的更强证据。"
  },
  {
    "id": 550,
    "start": 5326.12,
    "end": 5349.02,
    "en": "Acceptance criteria: All offline unit tests pass; every task fixture is first confirmed to fail its tests; the formal result contains every model × task × trial cell, zero API errors, an independent final test, and auditable trajectories; and manifest.json verifies the hashes of the configuration, observations, and summary.",
    "zh": "接受标准：所有离线单元测试通过；每个任务夹具首先确认其测试失败；正式结果包含每个模型×任务×试验单元，零API错误，独立的最终测试，以及可审计的轨迹；manifest.json验证配置、观察和摘要的哈希值。"
  },
  {
    "id": 551,
    "start": 5349.02,
    "end": 5354.045,
    "en": "The project directory includes one complete 18/18-cell run.",
    "zh": "项目目录包含一次完整的18/18单元运行。"
  },
  {
    "id": 552,
    "start": 5354.045,
    "end": 5362.582,
    "en": "Readers should rerun it on the model versions and real workloads they care about rather than treating these miniature-repository numbers as a permanent leaderboard.",
    "zh": "读者应在他们关心的模型版本和实际工作负载上重新运行它，而不是将这些微型仓库数字视为永久的排行榜。"
  },
  {
    "id": 553,
    "start": 5362.582,
    "end": 5365.582,
    "en": "Cost Analysis of Agent Systems.",
    "zh": "智能体系统的成本分析。"
  },
  {
    "id": 554,
    "start": 5365.582,
    "end": 5379.432,
    "en": "The previous section listed cost among the key selection dimensions, but Agent costs are far more complex than simple token pricing—multi-turn reasoning, tool calls, and context accumulation make costs grow non-linearly.",
    "zh": "上一节将成本列为关键选择维度之一，但智能体成本远比简单的令牌定价复杂——多轮推理、工具调用和上下文积累会使成本呈非线性增长。"
  },
  {
    "id": 555,
    "start": 5379.432,
    "end": 5386.795,
    "en": "Systematic cost analysis is an indispensable part of the evaluation system and a prerequisite for production deployment.",
    "zh": "系统性的成本分析是评估系统不可或缺的一部分，也是生产部署的前提条件。"
  },
  {
    "id": 556,
    "start": 5386.795,
    "end": 5388.995,
    "en": "Components of Cost.",
    "zh": "成本的组成部分。"
  },
  {
    "id": 557,
    "start": 5388.995,
    "end": 5393.52,
    "en": "The cost of an Agent system can be decomposed into three levels:",
    "zh": "智能体系统的成本可以分解为三个层次："
  },
  {
    "id": 558,
    "start": 5393.668,
    "end": 5400.905,
    "en": "Model inference cost is the most direct component, determined by the consumption of input tokens and output tokens.",
    "zh": "模型推理成本是最直接的组成部分，由输入标记和输出标记的消耗决定。"
  },
  {
    "id": 559,
    "start": 5400.855,
    "end": 5406.693,
    "en": "However, in Agent scenarios, there are two often-overlooked amplifying factors.",
    "zh": "然而，在智能体场景中，有两个常被忽视的放大因素。"
  },
  {
    "id": 560,
    "start": 5406.693,
    "end": 5418.58,
    "en": "The first is the context accumulation effect: each time an Agent calls an LLM, it sends all previous conversation history and tool outputs together (so the model can understand the context).",
    "zh": "第一个是上下文累积效应：每次智能体调用大语言模型时，都会发送所有之前的对话历史和工具输出（以便模型理解上下文）。"
  },
  {
    "id": 561,
    "start": 5418.58,
    "end": 5443.255,
    "en": "Without effectively utilizing KV Cache (i.e., caching already processed context to avoid redundant computation), the cost grows very quickly—Round 1 sends 1000 tokens, Round 2 sends 2000 tokens, Round 3 sends 3000 tokens, totaling 1000+2000+3000=6000 instead of 3×1000=3000.",
    "zh": "如果没有有效利用KV缓存（即缓存已处理的上下文以避免重复计算），成本会迅速增长——第一轮发送1000个标记，第二轮发送2000个标记，第三轮发送3000个标记，总计1000+2000+3000=6000，而不是3×1000=3000。"
  },
  {
    "id": 562,
    "start": 5443.255,
    "end": 5446.355,
    "en": "The more rounds, the larger the gap.",
    "zh": "轮次越多，差距越大。"
  },
  {
    "id": 563,
    "start": 5446.355,
    "end": 5453.118,
    "en": "The second is thinking token cost: models that support thinking generate a large number of thinking tokens.",
    "zh": "第二个是思考标记成本：支持思考的模型会产生大量思考标记。"
  },
  {
    "id": 564,
    "start": 5453.118,
    "end": 5457.718,
    "en": "Although these tokens are not displayed to the user, they are still billed.",
    "zh": "尽管这些标记不会显示给用户，但仍会被计费。"
  },
  {
    "id": 565,
    "start": 5457.718,
    "end": 5475.568,
    "en": "Tool call cost includes external API fees (search engines charge per query, database queries consume computing resources), sandbox resources for code execution, and an easily overlooked indirect cost: the token cost incurred when tool outputs are injected into the context.",
    "zh": "工具调用成本包括外部API费用（搜索引擎按查询收费，数据库查询消耗计算资源）、代码执行的沙盒资源，以及一个容易被忽视的间接成本：当工具输出被注入到上下文中时产生的标记成本。"
  },
  {
    "id": 566,
    "start": 5475.568,
    "end": 5485.668,
    "en": "The content returned from a single web search might occupy 2000-5000 tokens, and it will be repeatedly billed as input in every subsequent round of inference.",
    "zh": "单次网络搜索返回的内容可能占用2000-5000个标记，并会在后续每次推理中作为输入反复计费。"
  },
  {
    "id": 567,
    "start": 5485.668,
    "end": 5498.205,
    "en": "Infrastructure cost covers operational overhead for vector databases (used for RAG retrieval), message queues, relational databases, and logging and tracing storage (for observability).",
    "zh": "基础设施成本涵盖向量数据库（用于RAG检索）的操作开销、消息队列、关系型数据库以及日志和追踪存储（用于可观测性）。"
  },
  {
    "id": 568,
    "start": 5498.205,
    "end": 5514.618,
    "en": "To see where these costs actually come from, the companion experiment used a fixed eight-turn refund workflow: query the order, logistics, refund policy, and knowledge base, then perform risk checks, issue the refund, notify the user, and close the case.",
    "zh": "为了了解这些成本实际来自哪里，配套实验使用了一个固定的八轮退款流程：查询订单、物流、退款政策和知识库，然后进行风险检查、发放退款、通知用户并关闭案件。"
  },
  {
    "id": 569,
    "start": 5514.618,
    "end": 5525.443,
    "en": "Real gpt-4o-mini calls were run under all four combinations of two switches: stable versus unstable prefixes, and full versus compressed history.",
    "zh": "在两种开关的所有四种组合下运行了真实的gpt-4o-mini调用：稳定与不稳定前缀，完整与压缩的历史记录。"
  },
  {
    "id": 570,
    "start": 5525.443,
    "end": 5529.043,
    "en": "The business workflow was identical in every arm.",
    "zh": "每个分支中的业务流程都是相同的。"
  },
  {
    "id": 571,
    "start": 5529.043,
    "end": 5534.03,
    "en": "Table 7-4 uses the recorded token counts and prices from that run.",
    "zh": "表7-4使用了该运行的记录标记数和价格。"
  },
  {
    "id": 572,
    "start": 5534.03,
    "end": 5538.443,
    "en": "Table 7-4 Measured Cost of the Eight-Turn Agent Workflow",
    "zh": "表7-4 八轮智能体工作流的测量成本"
  },
  {
    "id": 573,
    "start": 5538.443,
    "end": 5553.818,
    "en": "Configuration: No cache, no compression; Input Tokens: 20,700; Cached Tokens: 0; Total Cost: 0.003776 dollars; Savings vs. Baseline: —.",
    "zh": "配置：无缓存，无压缩；输入标记数：20,700；缓存标记数：0；总成本：0.003776美元；与基线相比节省：—。"
  },
  {
    "id": 574,
    "start": 5553.818,
    "end": 5572.655,
    "en": "Configuration: Stable prefix only; Input Tokens: 20,386; Cached Tokens: 13,568; Total Cost: 0.002707 dollars; Savings vs. Baseline: 28.3%.",
    "zh": "配置：仅稳定前缀；输入标记数：20,386；缓存标记数：13,568；总成本：0.002707美元；与基线相比节省：28.3%。"
  },
  {
    "id": 575,
    "start": 5572.655,
    "end": 5590.093,
    "en": "Configuration: History compression only; Input Tokens: 16,177; Cached Tokens: 0; Total Cost: 0.003115 dollars; Savings vs. Baseline: 17.5%.",
    "zh": "配置：仅历史压缩；输入标记数：16,177；缓存标记数：0；总成本：0.003115美元；与基线相比节省：17.5%。"
  },
  {
    "id": 576,
    "start": 5590.093,
    "end": 5608.08,
    "en": "Configuration: Stable prefix + compression; Input Tokens: 16,035; Cached Tokens: 6,144; Total Cost: 0.002643 dollars; Savings vs. Baseline: 30.0%.",
    "zh": "配置：稳定前缀+压缩；输入标记数：16,035；缓存标记数：6,144；总成本：0.002643美元；与基线相比节省：30.0%。"
  },
  {
    "id": 577,
    "start": 5608.08,
    "end": 5616.718,
    "en": "In the baseline, input grew from 1,113 tokens on the first turn to 3,668 on the last.",
    "zh": "在基线中，输入从第一轮的1,113个标记增长到最后一轮的3,668个。"
  },
  {
    "id": 578,
    "start": 5616.718,
    "end": 5625.08,
    "en": "Tool results were repeatedly carried into later requests, accounting for 9,544 input tokens across the run.",
    "zh": "工具结果被反复带入后续请求中，占用了整个运行中的9,544个输入标记。"
  },
  {
    "id": 579,
    "start": 5625.08,
    "end": 5633.268,
    "en": "With both optimizations enabled, that figure fell to 5,248 and total cost dropped by 30%.",
    "zh": "当两种优化都启用时，该数字降至5,248，总成本下降了30%。"
  },
  {
    "id": 580,
    "start": 5633.268,
    "end": 5635.718,
    "en": "The gains were not additive.",
    "zh": "收益并非相加。"
  },
  {
    "id": 581,
    "start": 5635.718,
    "end": 5647.73,
    "en": "A stable prefix alone saved 28.3%, and compression alone saved 17.5%, yet together they saved 30%, not 45.8%.",
    "zh": "仅使用稳定前缀节省了28.3%，仅使用压缩节省了17.5%，但两者一起使用只节省了30%，而不是45.8%。"
  },
  {
    "id": 582,
    "start": 5647.73,
    "end": 5652.705,
    "en": "Compressing history also shortened the prefix available for cache reuse.",
    "zh": "压缩历史也缩短了可用于缓存重用的前缀。"
  },
  {
    "id": 583,
    "start": 5652.705,
    "end": 5660.205,
    "en": "When context optimizations are combined, measure the complete workflow; never add their isolated savings together.",
    "zh": "当结合上下文优化时，应测量完整的工作流程；永远不要将它们单独节省的数值相加。"
  },
  {
    "id": 584,
    "start": 5660.205,
    "end": 5665.793,
    "en": "A different model, price schedule, or task length will change the 30% figure.",
    "zh": "不同的模型、价格方案或任务长度会改变30%这一数值。"
  },
  {
    "id": 585,
    "start": 5665.793,
    "end": 5670.518,
    "en": "The reusable result is the four-arm method, not the percentage itself.",
    "zh": "可重复利用的结果是四臂方法，而不是百分比本身。"
  },
  {
    "id": 586,
    "start": 5670.518,
    "end": 5673.405,
    "en": "Cost Optimization Strategies.",
    "zh": "成本优化策略。"
  },
  {
    "id": 587,
    "start": 5673.405,
    "end": 5689.655,
    "en": "The first input-side levers to test are KV Cache Reuse (keep the prefix stable), Context Compression (shorten old trajectories and verbose tool results), and Tiered Model Routing (send simple requests to lightweight models and difficult reasoning to stronger ones).",
    "zh": "首先测试的输入端控制杠杆包括KV缓存重用（保持前缀稳定）、上下文压缩（缩短旧轨迹和冗长的工具结果）以及分层模型路由（将简单请求发送到轻量级模型，将复杂推理发送到更强的模型）。"
  },
  {
    "id": 588,
    "start": 5689.655,
    "end": 5692.743,
    "en": "Chapter 2 covered the implementations.",
    "zh": "第2章涵盖了实现方法。"
  },
  {
    "id": 589,
    "start": 5692.743,
    "end": 5702.043,
    "en": "Here the operational point is that each lever should have its own switch, so the team can measure both its isolated effect and what happens when it is combined with others.",
    "zh": "操作重点在于每个杠杆都应有独立的开关，这样团队可以测量其单独效果以及与其他杠杆组合时的效果。"
  },
  {
    "id": 590,
    "start": 5702.043,
    "end": 5707.018,
    "en": "Two further methods matter specifically to evaluation and operations.",
    "zh": "还有两种方法特别针对评估和运营。"
  },
  {
    "id": 591,
    "start": 5707.18,
    "end": 5722.067,
    "en": "Asynchronous Batch Processing accumulates non-real-time tasks for batch processing, leveraging batch pricing discounts from API providers; in self-deployment scenarios, it also improves GPU utilization during off-peak hours.",
    "zh": "异步批量处理会积累非实时任务以进行批量处理，利用API提供商的批量定价折扣；在自部署场景中，它还能在非高峰时段提高GPU利用率。"
  },
  {
    "id": 592,
    "start": 5722.017,
    "end": 5724.967,
    "en": "Cost Monitoring and Budget Control.",
    "zh": "成本监控与预算控制。"
  },
  {
    "id": 593,
    "start": 5724.967,
    "end": 5736.242,
    "en": "In a production environment, a real-time cost monitoring system should be established: track token consumption and API costs by task type, model, user, etc.",
    "zh": "在生产环境中，应建立实时成本监控系统：按任务类型、模型、用户等跟踪令牌消耗和API成本。"
  },
  {
    "id": 594,
    "start": 5736.242,
    "end": 5747.942,
    "en": "Also, set a cost cap for each task—automatically terminate the Agent when it falls into a loop or explores too deeply, preventing a single task from incurring abnormally high costs.",
    "zh": "同时，为每个任务设置成本上限——当智能体陷入循环或探索过深时自动终止，防止单个任务产生异常高的成本。"
  },
  {
    "id": 595,
    "start": 5747.942,
    "end": 5755.38,
    "en": "Experiment 7-10 introductory difficulty, one star: : End-to-End Cost Analysis of Agent Tasks",
    "zh": "实验7-10入门难度，一颗星：智能体任务的端到端成本分析"
  },
  {
    "id": 596,
    "start": 5755.38,
    "end": 5763.555,
    "en": "Experiment Goal: Reproduce the eight-turn cost breakdown above, then test the same optimization levers on your own workload.",
    "zh": "实验目标：重现上述八轮成本分解，然后在自己的工作负载上测试相同的优化杠杆。"
  },
  {
    "id": 597,
    "start": 5763.555,
    "end": 5771.155,
    "en": "Technical Approach: Reproduce the fixed companion task first, then select several representative tasks of your own.",
    "zh": "技术方法：首先重现固定伴侣任务，然后选择几个代表性的任务。"
  },
  {
    "id": 598,
    "start": 5771.155,
    "end": 5782.78,
    "en": "Use LangSmith or a self-built tracing system to record input/output and thinking tokens, tool-call counts and return sizes, and end-to-end latency for every LLM call.",
    "zh": "使用LangSmith或自建追踪系统，记录每次LLM调用的输入/输出和思考令牌、工具调用次数和返回大小以及端到端延迟。"
  },
  {
    "id": 599,
    "start": 5782.78,
    "end": 5791.23,
    "en": "Calculate average cost, p50/p95/p99, and the cost breakdown for each task type.",
    "zh": "计算平均成本、p50/p95/p99，以及每种任务类型的成本分解。"
  },
  {
    "id": 600,
    "start": 5791.23,
    "end": 5796.83,
    "en": "Acceptance Criteria: Generate a cost report and identify the main drivers.",
    "zh": "验收标准：生成成本报告并识别主要驱动因素。"
  },
  {
    "id": 601,
    "start": 5796.83,
    "end": 5802.905,
    "en": "Run all four switch combinations, measuring each optimization alone and both together.",
    "zh": "运行所有四种开关组合，单独测量每种优化效果以及两者共同作用的效果。"
  },
  {
    "id": 602,
    "start": 5802.905,
    "end": 5809.605,
    "en": "Rerun the experiment after changing models rather than carrying forward the saved trace's percentage savings.",
    "zh": "在更换模型后重新运行实验，而不是沿用之前保存的轨迹中的百分比节省数据。"
  },
  {
    "id": 603,
    "start": 5809.605,
    "end": 5812.93,
    "en": "Evaluation-Driven Continuous Iteration.",
    "zh": "以评估为导向的持续迭代。"
  },
  {
    "id": 604,
    "start": 5812.93,
    "end": 5819.517,
    "en": "Model selection is not a one-time decision but a continuous process, adjusted as models evolve.",
    "zh": "模型选择不是一次性的决定，而是一个随着模型演进而不断调整的持续过程。"
  },
  {
    "id": 605,
    "start": 5819.517,
    "end": 5829.455,
    "en": "The chapter opened with the claim that an evaluation system lets you keep pace with model evolution; a concrete model-switching case shows how that plays out in a real decision.",
    "zh": "本章开头提出，评估系统能让你跟上模型的演变；一个具体的模型切换案例展示了这一理念在实际决策中如何体现。"
  },
  {
    "id": 606,
    "start": 5829.455,
    "end": 5836.255,
    "en": "Suppose your Agent system is currently built on Claude, excelling in tool calling and complex orchestration.",
    "zh": "假设你的智能体系统目前基于Claude构建，在工具调用和复杂编排方面表现出色。"
  },
  {
    "id": 607,
    "start": 5836.255,
    "end": 5844.43,
    "en": "One day, Gemini releases a new model, and public benchmarks show it surpasses Claude on several metrics at a lower price.",
    "zh": "有一天，Gemini发布了一个新模型，公开基准测试显示它在多个指标上优于Claude，且价格更低。"
  },
  {
    "id": 608,
    "start": 5844.43,
    "end": 5852.917,
    "en": "At this point, your question is not \"Is Gemini better than Claude?\" but \"On my specific tasks, is Gemini better than Claude?",
    "zh": "此时，你的问题不再是‘Gemini是否比Claude更好？’，而是‘在我的特定任务中，Gemini是否比Claude更好？’"
  },
  {
    "id": 609,
    "start": 5852.917,
    "end": 5854.642,
    "en": "How much better?",
    "zh": "好多少？"
  },
  {
    "id": 610,
    "start": 5854.642,
    "end": 5856.967,
    "en": "What is the switching cost?",
    "zh": "转换成本是多少？"
  },
  {
    "id": 611,
    "start": 5856.967,
    "end": 5869.092,
    "en": "A team with a solid evaluation system can answer this in hours: run the new model on its own evaluation dataset and compare task success rate, tool call accuracy, latency, and cost.",
    "zh": "拥有健全评估系统的团队可以在数小时内回答这个问题：在自己的评估数据集上运行新模型，并比较任务成功率、工具调用准确率、延迟和成本。"
  },
  {
    "id": 612,
    "start": 5869.092,
    "end": 5880.542,
    "en": "You might find the new model really is better and cheaper on simple tasks—but in the core scenarios involving complex multi-round tool orchestration, its success rate drops by 5%.",
    "zh": "你可能会发现新模型在简单任务上确实更好且更便宜，但在涉及复杂多轮工具编排的核心场景中，其成功率下降了5%。"
  },
  {
    "id": 613,
    "start": 5880.542,
    "end": 5900.442,
    "en": "Once you confirm the difference exceeds the estimated sampling noise (see \"Statistical Significance of Evaluation Results\" below), your decision becomes a differentiated strategy—migrate simple tasks to the new model to cut costs, keep the original model on complex tasks to protect quality—rather than a blind wholesale switch.",
    "zh": "一旦你确认差异超过了估计的采样噪声（见下方“评估结果的统计显著性”），你的决策就变成了一种差异化策略——将简单任务迁移到新模型以降低成本，而将原始模型保留在复杂任务上以保障质量，而不是盲目地全面切换。"
  },
  {
    "id": 614,
    "start": 5900.442,
    "end": 5906.792,
    "en": "Decisions this granular and data-driven are only possible with an evaluation system built in advance.",
    "zh": "这种细致且数据驱动的决策只能通过提前构建的评估系统实现。"
  },
  {
    "id": 615,
    "start": 5906.792,
    "end": 5914.392,
    "en": "Experiment 7-11 intermediate difficulty, two stars: : Multi-Dimensional Model Performance Benchmarking",
    "zh": "实验7-11 中等难度，两颗星：多维模型性能基准测试"
  },
  {
    "id": 616,
    "start": 5914.392,
    "end": 5923.342,
    "en": "Conduct a comprehensive benchmark of mainstream LLMs and different API providers to build a multi-dimensional model selection decision database.",
    "zh": "对主流LLM和不同API提供商进行综合基准测试，构建多维模型选择决策数据库。"
  },
  {
    "id": 617,
    "start": 5923.342,
    "end": 5935.805,
    "en": "Select test scope: Closed-source SOTA models like GPT series, Claude series, Gemini series, Doubao series, and open-source models like Qwen, Kimi, DeepSeek.",
    "zh": "选择测试范围：封闭源代码的SOTA模型，如GPT系列、Claude系列、Gemini系列、Doubao系列，以及开源模型如Qwen、Kimi、DeepSeek。"
  },
  {
    "id": 618,
    "start": 5935.805,
    "end": 5948.58,
    "en": "Test the same model with different API providers (e.g., DeepSeek official vs. Siliconflow) to verify results from third-party performance monitoring platforms (e.g., Artificial Analysis).",
    "zh": "使用不同的API提供商测试同一模型（例如DeepSeek官方与Siliconflow），以验证第三方性能监控平台（如Artificial Analysis）的结果。"
  },
  {
    "id": 619,
    "start": 5948.58,
    "end": 5965.405,
    "en": "Design standardized test workloads: Input throughput tests use fixed-length contexts (8K/32K/128K tokens), output throughput tests request fixed-length responses (512/2048 tokens).",
    "zh": "设计标准化测试工作负载：输入吞吐量测试使用固定长度的上下文（8K/32K/128K tokens），输出吞吐量测试请求固定长度的响应（512/2048 tokens）。"
  },
  {
    "id": 620,
    "start": 5965.405,
    "end": 5971.405,
    "en": "Latency tests include TTFT (Time to First Token) and end-to-end latency.",
    "zh": "延迟测试包括TTFT（首次标记时间）和端到端延迟。"
  },
  {
    "id": 621,
    "start": 5971.405,
    "end": 5976.88,
    "en": "For models supporting thinking, separately measure thinking length and thinking latency.",
    "zh": "对于支持思考的模型，分别测量思考长度和思考延迟。"
  },
  {
    "id": 622,
    "start": 5976.88,
    "end": 5990.242,
    "en": "For each configuration, make at least 100 requests and calculate the standard deviation, p50, p95, and p99; high latency variance indicates an unstable user experience.",
    "zh": "对于每个配置，至少发起100次请求，并计算标准差、p50、p95和p99；高延迟方差表明用户体验不稳定。"
  },
  {
    "id": 623,
    "start": 5990.404,
    "end": 5999.854,
    "en": "Evaluate API availability and stability: Probe once per hour for a week, recording success rate, error types, and failure duration.",
    "zh": "评估API可用性和稳定性：每周每小时探测一次，记录成功率、错误类型和故障持续时间。"
  },
  {
    "id": 624,
    "start": 5999.804,
    "end": 6006.666,
    "en": "Calculate failure rate, MTTR (Mean Time to Recovery), and longest continuous uptime.",
    "zh": "计算故障率、MTTR（平均恢复时间）和最长连续运行时间。"
  },
  {
    "id": 625,
    "start": 6006.666,
    "end": 6016.054,
    "en": "Test the actual thresholds of rate limits—gradually increase concurrency to find the throttling point, recording RPM/TPM limits.",
    "zh": "测试速率限制的实际阈值——逐步增加并发性以找到限流点，并记录RPM/TPM限制。"
  },
  {
    "id": 626,
    "start": 6016.054,
    "end": 6030.154,
    "en": "Calculate comprehensive cost: Collect pricing information (unit prices for input/output/cache tokens), consider the impact of KV Cache, and calculate the average cost for typical multi-round Agent tasks.",
    "zh": "计算综合成本：收集定价信息（输入/输出/缓存标记的单价），考虑KV缓存的影响，并计算典型多轮Agent任务的平均成本。"
  },
  {
    "id": 627,
    "start": 6030.154,
    "end": 6038.354,
    "en": "Experiment 7-12 intermediate difficulty, two stars: : End-to-End Selection Evaluation of User Memory Systems",
    "zh": "实验7-12 中等难度，两颗星：用户记忆系统端到端选择评估"
  },
  {
    "id": 628,
    "start": 6038.354,
    "end": 6045.316,
    "en": "Prerequisites: Must complete the contextual retrieval or agentic RAG experiment from Chapter 3.",
    "zh": "前提条件：必须完成第3章的上下文检索或代理RAG实验。"
  },
  {
    "id": 629,
    "start": 6045.316,
    "end": 6059.204,
    "en": "Goal: Perform an end-to-end model-selection evaluation of a user-memory retrieval Agent, examining how the embedding model, reranker, and Agent's main model jointly affect retrieval quality, latency, and cost.",
    "zh": "目标：对用户记忆检索Agent进行端到端模型选择评估，考察嵌入模型、重排序器和Agent主模型如何共同影响检索质量、延迟和成本。"
  },
  {
    "id": 630,
    "start": 6059.204,
    "end": 6069.829,
    "en": "Reuse chapter3/contextual-retrieval-for-user-memory or chapter3/agentic-rag-for-user-memory, and compare the configurations on 60 test cases.",
    "zh": "复用chapter3/contextual-retrieval-for-user-memory或chapter3/agentic-rag-for-user-memory，并在60个测试用例上比较配置。"
  },
  {
    "id": 631,
    "start": 6069.829,
    "end": 6095.054,
    "en": "Acceptance: Evaluate each of the three selection points in turn—embedding model (BGE-M3 / OpenAI / Doubao, etc., record top-5 retrieval accuracy, latency, cost), reranker (include a \"no reranker\" baseline, quantify its marginal value), and main model (compare success rate and tool usage efficiency under the same retrieval configuration).",
    "zh": "接受性评估：依次评估三个选择点——嵌入模型（BGE-M3 / OpenAI / Doubao等，记录前5名检索准确率、延迟和成本）、重排序器（包括一个“无重排序器”的基线，量化其边际价值）以及主模型（在相同的检索配置下比较成功率和工具使用效率）"
  },
  {
    "id": 632,
    "start": 6095.054,
    "end": 6105.716,
    "en": "The key is to identify synergies among the components: a stronger embedding might make the reranker redundant, and a stronger main model might compensate for retrieval shortcomings.",
    "zh": "关键在于识别组件之间的协同效应：更强的嵌入可能使重排序器变得多余，而更强的主模型可以弥补检索的不足。"
  },
  {
    "id": 633,
    "start": 6105.716,
    "end": 6112.416,
    "en": "Selection is a systemic trade-off, not simply a matter of choosing the strongest component in isolation.",
    "zh": "选择是一个系统性的权衡，而不是简单地单独选择最强的组件。"
  },
  {
    "id": 634,
    "start": 6112.416,
    "end": 6116.391,
    "en": "Configuration details are in the companion repository.",
    "zh": "配置细节请参见配套仓库。"
  },
  {
    "id": 635,
    "start": 6116.391,
    "end": 6120.229,
    "en": "Statistical Significance of Evaluation Results.",
    "zh": "评估结果的统计显著性。"
  },
  {
    "id": 636,
    "start": 6120.229,
    "end": 6127.891,
    "en": "The evaluation set is finite and model outputs are stochastic, so a score difference may be nothing but sampling noise.",
    "zh": "评估集是有限的，模型输出是随机的，因此得分差异可能只是采样噪声。"
  },
  {
    "id": 637,
    "start": 6127.891,
    "end": 6134.379,
    "en": "If you measure a success rate p over n cases, the standard error can be roughly estimated as:",
    "zh": "如果你在n个案例中测量到成功率为p，标准误差可以粗略估计为："
  },
  {
    "id": 638,
    "start": 6134.379,
    "end": 6143.604,
    "en": "\\mathrm{SE}(p)\\approx\\sqrt{\\frac{p(1-p)}{n}",
    "zh": "\\mathrm{SE}(p)\\approx\\sqrt{\\frac{p(1-p)}{n}"
  },
  {
    "id": 639,
    "start": 6143.604,
    "end": 6160.891,
    "en": "For example, with 100 cases and a 70% success rate, the 95% confidence interval is about 70\\%\\pm9 percentage points; \"the new model gets 73% versus the old model's 70%\" is not enough to justify switching.",
    "zh": "例如，对于100个案例和70%的成功率，95%的置信区间约为70%±9个百分点；“新模型得分为73%，而旧模型为70%”不足以证明需要更换。"
  },
  {
    "id": 640,
    "start": 6160.891,
    "end": 6175.654,
    "en": "When comparing two configurations on the same batch of tasks, prefer paired analysis: record per task which one wins, and judge the difference with McNemar's test or a paired bootstrap, rather than subtracting two independent success rates.",
    "zh": "当在同一组任务上比较两种配置时，应优先进行配对分析：记录每个任务哪个配置获胜，并使用McNemar检验或配对自助法来判断差异，而不是减去两个独立的成功率。"
  },
  {
    "id": 641,
    "start": 6175.654,
    "end": 6188.729,
    "en": "Because each Agent run may also differ, it is best to run each configuration with several random seeds (say 3–5) and report the mean along with the spread; a single run is only good for screening a direction.",
    "zh": "由于每次智能体运行也可能不同，最好使用多个随机种子（例如3–5次）运行每个配置，并报告平均值及分布；单次运行仅适用于初步筛选方向。"
  },
  {
    "id": 642,
    "start": 6188.729,
    "end": 6201.329,
    "en": "If the expected gain is only 2–3 percentage points and the evaluation set has only a few dozen tasks, enlarge the sample first—the standard error shrinks as 1/\\sqrt{n}.",
    "zh": "如果预期收益仅为2–3个百分点，且评估集只有几十个任务，请先扩大样本量——标准误差会随着1/\\sqrt{n}缩小。"
  },
  {
    "id": 643,
    "start": 6201.329,
    "end": 6206.066,
    "en": "Refer to the companion repository for the complete code implementation.",
    "zh": "有关完整的代码实现，请参见配套仓库。"
  },
  {
    "id": 644,
    "start": 6206.066,
    "end": 6214.316,
    "en": "Pairing means that both groups share the same tasks and random conditions, not that you draw two separate samples and compare their averages.",
    "zh": "配对意味着两组共享相同任务和随机条件，而不是抽取两个独立样本并比较它们的平均值。"
  },
  {
    "id": 645,
    "start": 6214.316,
    "end": 6224.879,
    "en": "When validating several hypotheses in parallel, also account for multiple comparisons: tighten the significance threshold, or re-run positive results independently.",
    "zh": "在同时验证多个假设时，也要考虑多重比较：收紧显著性阈值，或独立重新运行阳性结果。"
  },
  {
    "id": 646,
    "start": 6224.879,
    "end": 6237.116,
    "en": "The practical criterion is simple: a score gap is worth acting on—switching models or shipping a change—only if it exceeds the noise, holds up under paired analysis, and can be reproduced.",
    "zh": "实用标准很简单：只有当分数差异超过噪声、在配对分析中保持稳定且可重复时，才值得采取行动——切换模型或发布更改。"
  },
  {
    "id": 647,
    "start": 6237.116,
    "end": 6239.304,
    "en": "Agent Observability.",
    "zh": "智能体可观测性。"
  },
  {
    "id": 648,
    "start": 6239.304,
    "end": 6247.441,
    "en": "Evaluation-driven decisions (whether for model selection or continuous iteration) rely on high-quality operational data.",
    "zh": "以评估为导向的决策（无论是模型选择还是持续迭代）都依赖于高质量的运营数据。"
  },
  {
    "id": 649,
    "start": 6247.441,
    "end": 6257.416,
    "en": "Below, we first introduce how to systematically collect this data (observability), and then discuss how to translate evaluation results into system improvements.",
    "zh": "以下我们将首先介绍如何系统地收集这些数据（可观测性），然后讨论如何将评估结果转化为系统改进。"
  },
  {
    "id": 650,
    "start": 6257.416,
    "end": 6263.079,
    "en": "As illustrated in Figure 7-7: Observability Technology Stack.",
    "zh": "如图7-7所示：可观测性技术栈。"
  },
  {
    "id": 651,
    "start": 6263.236,
    "end": 6280.961,
    "en": "Observability is a concept borrowed from distributed systems: you cannot open the system and watch it work; you infer what is happening from the logs, metrics, and traces it emits—the way a doctor, unable to see inside a patient, diagnoses from temperature, blood pressure, and imaging.",
    "zh": "可观测性是一个从分布式系统中借用的概念：你无法打开系统并观察其运行；你只能通过系统发出的日志、指标和追踪来推断其内部状态——就像医生无法直接看到病人的内部情况，而是通过体温、血压和影像进行诊断。"
  },
  {
    "id": 652,
    "start": 6280.911,
    "end": 6294.798,
    "en": "Agent systems make this harder still: the same input can produce different outputs, multi-round reasoning and tool calls make execution paths extremely complex, and the model's \"thinking\" is completely opaque from outside.",
    "zh": "智能体系统让这一切变得更加困难：相同的输入可能产生不同的输出，多轮推理和工具调用使得执行路径极其复杂，而模型的‘思考’从外部完全不可见。"
  },
  {
    "id": 653,
    "start": 6294.798,
    "end": 6303.811,
    "en": "The value of observability lies first in problem diagnosis: complete traces allow developers to replay the entire process rather than guessing.",
    "zh": "可观测性的价值首先在于问题诊断：完整的追踪允许开发者重放整个过程，而不是猜测。"
  },
  {
    "id": 654,
    "start": 6303.811,
    "end": 6317.186,
    "en": "Second, it is the foundation for continuous optimization—you can see which tasks require multiple rounds of iteration, which tools have the lowest success rate, and which retrieval queries always return empty results.",
    "zh": "其次，它是持续优化的基础——你可以看到哪些任务需要多次迭代，哪些工具的成功率最低，哪些检索查询总是返回空结果。"
  },
  {
    "id": 655,
    "start": 6317.186,
    "end": 6327.586,
    "en": "In cost management, Agent operating costs can differ by one or two orders of magnitude between tasks, and tracing surfaces the abnormally expensive cases.",
    "zh": "在成本管理方面，不同任务之间的智能体运行成本可能相差一个或两个数量级，而追踪能够揭示出异常昂贵的情况。"
  },
  {
    "id": 656,
    "start": 6327.586,
    "end": 6333.948,
    "en": "Finally, accumulated trace data underpins later system optimization and model improvement.",
    "zh": "最后，积累的追踪数据为后续的系统优化和模型改进提供了基础。"
  },
  {
    "id": 657,
    "start": 6333.948,
    "end": 6357.211,
    "en": "Agent observability is built on the foundation of traces, whose data structure directly inherits the span tree model from distributed systems: one task execution corresponds to one trace, where each LLM call, each tool call, and each retrieval is a span (an execution unit recording input/output, start/end times, token consumption, and error information).",
    "zh": "智能体的可观测性建立在追踪的基础上，其数据结构直接继承了分布式系统中的跨度树模型：一次任务执行对应一个追踪，其中每次LLM调用、每次工具调用和每次检索都是一个跨度（执行单元，记录输入/输出、开始/结束时间、令牌消耗和错误信息）。"
  },
  {
    "id": 658,
    "start": 6357.211,
    "end": 6369.548,
    "en": "The parent-child relationships between spans form an execution tree—for example, an \"Agent Main Loop\" span may have several \"LLM Call\" and \"Tool Call\" child spans hanging beneath it.",
    "zh": "跨度之间的父子关系构成了执行树——例如，一个“智能体主循环”跨度可能在其下方有多个“LLM调用”和“工具调用”的子跨度。"
  },
  {
    "id": 659,
    "start": 6369.548,
    "end": 6387.173,
    "en": "Standardized protocols are already available for this layer: OpenTelemetry is the general-purpose distributed tracing standard, while specifications like OpenInference define LLM-specific semantic conventions on top of it (how to record prompts, model parameters, token usage, etc.).",
    "zh": "这一层已有标准化协议：OpenTelemetry是通用的分布式追踪标准，而诸如OpenInference之类的规范在其基础上定义了LLM特定的语义约定（如何记录提示、模型参数、令牌使用等）。"
  },
  {
    "id": 660,
    "start": 6387.173,
    "end": 6397.798,
    "en": "The advantage of adopting standard protocols is the decoupling of collection and analysis—the same trace data can be connected to different analysis backends, avoiding vendor lock-in.",
    "zh": "采用标准化协议的优势在于采集与分析的解耦——相同的追踪数据可以连接到不同的分析后端，避免供应商锁定。"
  },
  {
    "id": 661,
    "start": 6397.798,
    "end": 6411.598,
    "en": "LangSmith is one of the representative platforms in this domain (similar platforms include Langfuse, Arize Phoenix, etc.), integrating observability, evaluation, and optimization into a closed loop.",
    "zh": "LangSmith是该领域中的代表性平台之一（其他类似平台包括Langfuse、Arize Phoenix等），将可观测性、评估和优化整合到一个闭环中。"
  },
  {
    "id": 662,
    "start": 6411.598,
    "end": 6423.936,
    "en": "Each execution creates a trace session, where model calls, tool usage, and knowledge retrieval are recorded as independent execution units, linked by causal relationships to form an execution tree.",
    "zh": "每次执行都会创建一个追踪会话，其中模型调用、工具使用和知识检索被记录为独立的执行单元，通过因果关系连接形成执行树。"
  },
  {
    "id": 663,
    "start": 6423.936,
    "end": 6431.248,
    "en": "Each unit records complete input/output, timing information, cost data, and error information.",
    "zh": "每个单元都会记录完整的输入/输出、时间信息、成本数据和错误信息。"
  },
  {
    "id": 664,
    "start": 6431.248,
    "end": 6439.023,
    "en": "The platform uses asynchronous batch data collection to ensure that tracing itself does not affect the Agent's response latency.",
    "zh": "该平台使用异步批量数据收集，以确保追踪本身不会影响智能体的响应延迟。"
  },
  {
    "id": 665,
    "start": 6439.18,
    "end": 6459.505,
    "en": "The platform also supports A/B testing (routing a portion of user traffic to a new version, automatically comparing metrics, and supporting rapid rollback or gradual scaling), prompt version management (each version is associated with runtime performance data), and collaborative development (team members can share trace data and problem cases).",
    "zh": "该平台还支持A/B测试（将一部分用户流量路由到新版本，自动比较指标，并支持快速回滚或逐步扩展）、提示版本管理（每个版本都与运行时性能数据相关联）以及协作开发（团队成员可以共享追踪数据和问题案例）。"
  },
  {
    "id": 666,
    "start": 6459.455,
    "end": 6470.817,
    "en": "The massive amount of real-world data from production environments is a goldmine for continuous improvement—it can uncover unforeseen scenarios and identify the features most in need of optimization.",
    "zh": "来自生产环境的大量真实数据是持续改进的金矿——它可以揭示未预见的情景，并识别最需要优化的特性。"
  },
  {
    "id": 667,
    "start": 6470.817,
    "end": 6476.58,
    "en": "The most valuable use of observability data is to turn it into evaluation assets.",
    "zh": "可观测性数据最有价值的用途是将其转化为评估资产。"
  },
  {
    "id": 668,
    "start": 6476.58,
    "end": 6490.192,
    "en": "A practical loop: extract failed and suspicious cases from production traces → anonymize them (strip sensitive fields such as user data and keys) → distill them into new test cases and regression tests for the evaluation set.",
    "zh": "一个实用的循环：从生产追踪中提取失败和可疑案例 → 对其进行匿名化处理（删除用户数据和密钥等敏感字段） → 将其提炼成新的测试案例和回归测试，纳入评估集。"
  },
  {
    "id": 669,
    "start": 6490.192,
    "end": 6505.93,
    "en": "The evaluation set then stops being a one-time, static collection and becomes a living asset that evolves with the product and continues to reflect the real user distribution—the failure patterns exposed in production today become the regression tests guarding the baseline tomorrow.",
    "zh": "然后评估集不再是一次性的静态集合，而是一个随着产品演进并持续反映真实用户分布的活资产——今天在生产中暴露的失败模式将成为明天保护基线的回归测试。"
  },
  {
    "id": 670,
    "start": 6505.93,
    "end": 6520.905,
    "en": "This is precisely the interface between observability and the main theme of this chapter: observability is responsible for \"seeing\" what happens in the real world, and evaluation is responsible for solidifying those observations into repeatable standards.",
    "zh": "这就是可观测性与本章主题之间的接口：可观测性负责‘看到’现实世界中发生的事情，而评估负责将这些观察结果固化为可重复的标准。"
  },
  {
    "id": 671,
    "start": 6520.905,
    "end": 6529.767,
    "en": "With a comprehensive evaluation system and dataset in place, the key is to translate evaluation results into tangible system improvements.",
    "zh": "在建立了全面的评估系统和数据集之后，关键是要将评估结果转化为具体的系统改进。"
  },
  {
    "id": 672,
    "start": 6529.767,
    "end": 6533.305,
    "en": "From Benchmark Reports to System Improvements.",
    "zh": "从基准报告到系统改进。"
  },
  {
    "id": 673,
    "start": 6533.305,
    "end": 6540.167,
    "en": "The following case comes from a real, deliberately narrow AndroidWorld iteration in the companion repository.",
    "zh": "以下案例来自配套仓库中一个真实且特意狭窄的AndroidWorld迭代。"
  },
  {
    "id": 674,
    "start": 6540.167,
    "end": 6547.33,
    "en": "It covers four Wi-Fi settings tasks on an API 35 emulator, with one matched run per task.",
    "zh": "它涵盖了API 35模拟器上的四个Wi-Fi设置任务，每个任务有一个匹配的运行。"
  },
  {
    "id": 675,
    "start": 6547.33,
    "end": 6555.005,
    "en": "It is not the full 116-task benchmark and does not replace a rerun in the reference API 33 environment.",
    "zh": "这不是完整的116个任务基准测试，也不替代参考API 33环境中的重新运行。"
  },
  {
    "id": 676,
    "start": 6555.005,
    "end": 6561.205,
    "en": "Its value is not an overall score; it is the sequence of decisions from one result to the next.",
    "zh": "它的价值不是总分；而是从一个结果到下一个结果的决策序列。"
  },
  {
    "id": 677,
    "start": 6561.205,
    "end": 6566.167,
    "en": "As illustrated in Figure 7-8: Benchmark to Improvement Loop.",
    "zh": "如图7-8所示：基准测试到改进循环。"
  },
  {
    "id": 678,
    "start": 6566.167,
    "end": 6578.78,
    "en": "From the perspective of Harness engineering, this section is essentially about the methodology for iterative Harness optimization—using evaluation data to identify weak points in the Harness (insufficient context?",
    "zh": "从Harness工程的角度来看，本节本质上是关于迭代优化Harness的方法论——利用评估数据来识别Harness中的薄弱环节（上下文不足？"
  },
  {
    "id": 679,
    "start": 6578.78,
    "end": 6580.805,
    "en": "missing constraints?",
    "zh": "缺失约束？"
  },
  {
    "id": 680,
    "start": 6580.805,
    "end": 6583.042,
    "en": "inadequate validation?",
    "zh": "验证不足？"
  },
  {
    "id": 681,
    "start": 6583.042,
    "end": 6592.03,
    "en": "untimely feedback?), making targeted improvements, and then re-evaluating, forming a closed loop for the Harness's continuous evolution.",
    "zh": "反馈不及时？），进行有针对性的改进，然后重新评估，形成Harness持续进化的闭环。"
  },
  {
    "id": 682,
    "start": 6592.03,
    "end": 6602.38,
    "en": "Before analyzing any benchmark report, note an easily overlooked principle: when Agent performance drops, check the evaluation system first, then the Agent.",
    "zh": "在分析任何基准报告之前，请注意一个容易被忽视的原则：当Agent性能下降时，首先检查评估系统，然后再检查Agent。"
  },
  {
    "id": 683,
    "start": 6602.38,
    "end": 6615.105,
    "en": "The common mistake is to start editing Agent code the moment a score falls, ignoring the possibility that the evaluation system broke first—steer by a distorted signal and the correction is wrong from the very first step.",
    "zh": "常见的错误是，一旦分数下降就立即修改Agent代码，而忽略了评估系统可能先出现了问题——根据失真的信号进行调整，从第一步起就犯了错误。"
  },
  {
    "id": 684,
    "start": 6615.105,
    "end": 6631.167,
    "en": "Typical evaluation-side failures include: the runtime environment running out of resources and killing processes (which shows up as random failures), bugs in the verifier that mark correct answers as failures, and test cases drifting out of sync with production scenarios.",
    "zh": "典型的评估端故障包括：运行时环境资源耗尽并终止进程（表现为随机失败）、验证器中的bug将正确答案标记为失败，以及测试用例与生产场景不同步。"
  },
  {
    "id": 685,
    "start": 6631.167,
    "end": 6638.717,
    "en": "In the headline numbers, all of these look identical to model degradation; only a review of the full traces can tell them apart.",
    "zh": "在主要指标中，这些表现都与模型退化相同；只有通过审查完整的轨迹才能区分它们。"
  },
  {
    "id": 686,
    "start": 6638.717,
    "end": 6642.98,
    "en": "Reading a Benchmark Report: The Art of Problem Discovery.",
    "zh": "阅读基准报告：发现问题的艺术。"
  },
  {
    "id": 687,
    "start": 6642.98,
    "end": 6650.305,
    "en": "The starting report recorded one run on each of 116 tasks and about 88% overall success.",
    "zh": "初始报告记录了在116个任务上的各一次运行，总体成功率为约88%。"
  },
  {
    "id": 688,
    "start": 6650.305,
    "end": 6660.48,
    "en": "The failures were not scattered: three of the four SystemWifiTurn tasks failed, and their traces repeatedly navigated back and forth without confirming the final state.",
    "zh": "失败并非随机分布：四个SystemWifiTurn任务中有三个失败，它们的轨迹反复来回移动而未能确认最终状态。"
  },
  {
    "id": 689,
    "start": 6660.48,
    "end": 6668.68,
    "en": "Two explanations fit the evidence: the Agent did not know where to go, or the UI representation it received was incomplete.",
    "zh": "两种解释符合证据：Agent不知道该去哪，或者它接收到的UI表示不完整。"
  },
  {
    "id": 690,
    "start": 6668.836,
    "end": 6674.336,
    "en": "An 88% headline score hides this small but coherent failure cluster.",
    "zh": "88%的主要指标掩盖了这个小但连贯的失败集群。"
  },
  {
    "id": 691,
    "start": 6674.286,
    "end": 6683.286,
    "en": "Raising the step limit would be equally misleading—it could recast \"the Agent cannot see the control\" as \"the Agent needs more persistence.",
    "zh": "提高步骤限制同样具有误导性——这可能将“智能体看不到控制”重新解释为“智能体需要更多的持续性。”},{"
  },
  {
    "id": 692,
    "start": 6683.286,
    "end": 6698.098,
    "en": "Read reports in the opposite direction: locate clusters by task and capability tag, replay the traces, decide whether the failure arose in observation, reasoning, action, or verification, and only then choose a variable to change.",
    "zh": "反向阅读报告：通过任务和能力标签定位集群，重放轨迹，判断失败是发生在观察、推理、动作还是验证阶段，然后再选择要更改的变量。"
  },
  {
    "id": 693,
    "start": 6698.098,
    "end": 6704.811,
    "en": "The Wi-Fi slice was used to diagnose the mechanism cheaply, not to estimate system-wide performance.",
    "zh": "Wi-Fi切片用于廉价诊断机制，而非估算系统整体性能。"
  },
  {
    "id": 694,
    "start": 6704.811,
    "end": 6709.298,
    "en": "From Data to Hypotheses: Building an Improvement Roadmap.",
    "zh": "从数据到假设：构建改进路线图。"
  },
  {
    "id": 695,
    "start": 6709.298,
    "end": 6712.811,
    "en": "The first round tested the cheapest explanation.",
    "zh": "第一轮测试了最便宜的解释。"
  },
  {
    "id": 696,
    "start": 6712.811,
    "end": 6720.761,
    "en": "H1 assumed a navigation-knowledge gap, so only the treatment received Wi-Fi navigation and final-state-checking instructions.",
    "zh": "H1假定存在导航知识缺口，因此只有治疗组收到了Wi-Fi导航和最终状态检查指令。"
  },
  {
    "id": 697,
    "start": 6720.761,
    "end": 6725.036,
    "en": "Success did not improve; the prompt was not the bottleneck.",
    "zh": "成功未提升；提示不是瓶颈。"
  },
  {
    "id": 698,
    "start": 6725.036,
    "end": 6728.836,
    "en": "The second round asked what the Agent could actually see.",
    "zh": "第二轮询问了智能体实际上能看到什么。"
  },
  {
    "id": 699,
    "start": 6728.836,
    "end": 6737.111,
    "en": "H5 replaced the API-35-incompatible accessibility feed with AndroidWorld's supported UIAutomator tree.",
    "zh": "H5用AndroidWorld支持的UIAutomator树替换了不兼容API-35的可访问性信息流。"
  },
  {
    "id": 700,
    "start": 6737.111,
    "end": 6741.898,
    "en": "Success improved, but the full tree caused token use to surge.",
    "zh": "成功有所提升，但完整的树导致令牌使用量激增。"
  },
  {
    "id": 701,
    "start": 6741.898,
    "end": 6753.361,
    "en": "H5C therefore added no new information: it simply removed invisible, textless, non-actionable container nodes to see whether the same success could be preserved with less noise.",
    "zh": "因此H5C没有添加任何新信息：它只是移除了不可见、无文本、不可操作的容器节点，以查看是否能在减少噪声的情况下保持相同的成功率。"
  },
  {
    "id": 702,
    "start": 6753.361,
    "end": 6762.873,
    "en": "Across all three rounds, the model, task parameters, seed, step limit, and emulator stayed fixed, and arm order alternated.",
    "zh": "在所有三轮中，模型、任务参数、种子、步骤限制和模拟器都保持不变，而手臂顺序交替进行。"
  },
  {
    "id": 703,
    "start": 6762.873,
    "end": 6771.336,
    "en": "This staged design made attribution straightforward: the residual problem or side effect from one round became the sole change in the next.",
    "zh": "这种分阶段设计使归因变得简单：一轮中的剩余问题或副作用成为下一轮的唯一变化。"
  },
  {
    "id": 704,
    "start": 6771.336,
    "end": 6775.273,
    "en": "From Results to Decisions: Data-Driven Trade-offs.",
    "zh": "从结果到决策：数据驱动的权衡。"
  },
  {
    "id": 705,
    "start": 6775.273,
    "end": 6779.361,
    "en": "Table 7-5 summarizes the measured results.",
    "zh": "表7-5总结了测量的结果。"
  },
  {
    "id": 706,
    "start": 6779.361,
    "end": 6788.423,
    "en": "With only four tasks per arm, these numbers can decide whether a larger rerun is worthwhile; they cannot estimate success across AndroidWorld.",
    "zh": "每条臂只有四个任务，这些数字可以决定是否值得进行更大规模的重跑；它们无法估计在AndroidWorld中的成功率。"
  },
  {
    "id": 707,
    "start": 6788.423,
    "end": 6793.373,
    "en": "Table 7-5 Three Rounds on the AndroidWorld Wi-Fi Slice",
    "zh": "表7-5 在AndroidWorld Wi-Fi切片上的三轮实验"
  },
  {
    "id": 708,
    "start": 6793.373,
    "end": 6810.698,
    "en": "Experiment: H1; Only Change: Add navigation instructions; Control → Treatment Success: 25% → 25%; Treatment / Control Tokens: 0.47×; Next Step: No success gain; retain the original prompt.",
    "zh": "实验：H1；唯一变化：添加导航说明；对照组→实验组成功率：25%→25%；实验组/对照组标记数：0.47倍；下一步：没有成功提升；保留原始提示。"
  },
  {
    "id": 709,
    "start": 6810.698,
    "end": 6829.048,
    "en": "Experiment: H5; Only Change: Accessibility feed → UIAutomator; Control → Treatment Success: 25% → 100%; Treatment / Control Tokens: 2.498×; Next Step: Strong gain but too expensive; continue optimizing.",
    "zh": "实验：H5；唯一变化：可访问性feed→UIAutomator；对照组→实验组成功率：25%→100%；实验组/对照组标记数：2.498倍；下一步：显著提升但成本过高；继续优化。"
  },
  {
    "id": 710,
    "start": 6829.048,
    "end": 6847.961,
    "en": "Experiment: H5C; Only Change: Compact the UIAutomator tree; Control → Treatment Success: 100% → 100%; Treatment / Control Tokens: 0.506×; Next Step: Preserve success and halve tokens; advance to a full rerun.",
    "zh": "实验：H5C；唯一变化：压缩UIAutomator树；对照组→实验组成功率：100%→100%；实验组/对照组标记数：0.506倍；下一步：保持成功率并减少一半标记数；进入完整重跑。"
  },
  {
    "id": 711,
    "start": 6847.961,
    "end": 6851.461,
    "en": "The sequence matters more than any one percentage.",
    "zh": "序列比任何单一百分比都更重要。"
  },
  {
    "id": 712,
    "start": 6851.461,
    "end": 6860.298,
    "en": "More detailed instructions cannot restore information the Agent never received; observation failures should be investigated before prompts are expanded.",
    "zh": "更详细的说明无法恢复智能体从未接收到的信息；在扩展提示之前应先调查观察失败。"
  },
  {
    "id": 713,
    "start": 6860.298,
    "end": 6863.473,
    "en": "But more input is not always better either.",
    "zh": "但更多的输入并不总是更好。"
  },
  {
    "id": 714,
    "start": 6863.473,
    "end": 6868.573,
    "en": "The full element tree fixed visibility while flooding the context with noise.",
    "zh": "完整的元素树固定了可见性，却在上下文中充斥着噪声。"
  },
  {
    "id": 715,
    "start": 6868.573,
    "end": 6874.736,
    "en": "Removing non-semantic nodes preserved four successful runs and cut tokens by roughly half.",
    "zh": "移除非语义节点保留了四次成功运行，并将标记数减少了约一半。"
  },
  {
    "id": 716,
    "start": 6874.736,
    "end": 6883.698,
    "en": "No model was changed: the Harness's UI representation first determined whether the task could be completed and then whether completing it was economical.",
    "zh": "没有更改任何模型：Harness的UI表示首先确定任务是否可以完成，然后确定完成它是否经济。"
  },
  {
    "id": 717,
    "start": 6883.698,
    "end": 6888.461,
    "en": "Continuous Iteration: From First Improvement to System Evolution.",
    "zh": "持续迭代：从首次改进到系统演化。"
  },
  {
    "id": 718,
    "start": 6888.461,
    "end": 6895.173,
    "en": "Passing H5C on four tasks only earns it a larger test; it does not authorize deployment.",
    "zh": "在四个任务上通过H5C测试只会获得更大的测试；它不授权部署。"
  },
  {
    "id": 719,
    "start": 6895.173,
    "end": 6905.073,
    "en": "The next gate is a five-seed run over all 116 tasks in the Pixel 6 / API 33 reference environment with the full third-party app set.",
    "zh": "下一步是针对Pixel 6 / API 33参考环境中的全部116个任务以及完整的第三方应用集进行五次种子运行。"
  },
  {
    "id": 720,
    "start": 6905.073,
    "end": 6913.911,
    "en": "Success must be non-inferior, token use no more than 75% of the original, and latency no more than 1.5×.",
    "zh": "成功率必须不低于原水平，标记使用量不得超过原水平的75%，延迟不得超过1.5倍。"
  },
  {
    "id": 721,
    "start": 6913.911,
    "end": 6921.161,
    "en": "Until that run is complete, 4/4 on the slice must not be reported as 100% system-wide success.",
    "zh": "在该次运行完成之前，不能将切片上的4/4报告为100%的系统成功率。"
  },
  {
    "id": 722,
    "start": 6921.161,
    "end": 6929.411,
    "en": "That is what continuous iteration means in practice: evidence from one round should authorize only the next action that its scope can support.",
    "zh": "这在实践中就是持续迭代的含义：一轮的证据只能授权其范围能支持的下一步行动。"
  },
  {
    "id": 723,
    "start": 6929.411,
    "end": 6940.673,
    "en": "H1 showed that adding more prompt detail would not help; H5 found the right mechanism and revealed a cost problem; H5C fixed that problem and qualified for broader testing.",
    "zh": "H1表明增加更多提示细节没有帮助；H5找到了正确的机制并揭示了一个成本问题；H5C解决了该问题并获得了更广泛测试的资格。"
  },
  {
    "id": 724,
    "start": 6940.673,
    "end": 6944.373,
    "en": "A good benchmark report contains more than a score.",
    "zh": "一份优秀的基准报告包含的不仅仅是分数。"
  },
  {
    "id": 725,
    "start": 6944.373,
    "end": 6950.473,
    "en": "It states where the conclusion applies, which guardrails failed, and what must be tested next.",
    "zh": "它说明了结论适用的范围，哪些防护措施失败了，以及下一步必须测试什么。"
  },
  {
    "id": 726,
    "start": 6950.473,
    "end": 6958.123,
    "en": "Experiment 7-13 advanced difficulty, three stars: : Evaluation and Improvement on AndroidWorld",
    "zh": "实验7-13提升难度，三颗星：AndroidWorld上的评估与改进"
  },
  {
    "id": 727,
    "start": 6958.276,
    "end": 6963.838,
    "en": "This experiment practices the full path from evaluation report to system improvement.",
    "zh": "这个实验练习从评估报告到系统改进的完整路径。"
  },
  {
    "id": 728,
    "start": 6963.788,
    "end": 6970.063,
    "en": "Start with the historical report and three saved paired runs in chapter6/android-world.",
    "zh": "从第6章的android-world中历史报告和三个保存的配对运行开始。"
  },
  {
    "id": 729,
    "start": 6970.063,
    "end": 6972.851,
    "en": "Step 1: Diagnosis.",
    "zh": "步骤1：诊断。"
  },
  {
    "id": 730,
    "start": 6972.851,
    "end": 6981.526,
    "en": "Cross-analyze the per-task table and the capability tag matrix to map surface-level task failures to deep-seated capability deficiencies.",
    "zh": "交叉分析每个任务的表格和能力标签矩阵，将表面任务失败映射到深层次的能力缺陷。"
  },
  {
    "id": 731,
    "start": 6981.526,
    "end": 6988.601,
    "en": "Identify capability tags with lower-than-expected success rates and task areas with concentrated failures.",
    "zh": "识别成功率低于预期的能力标签和故障集中的任务领域。"
  },
  {
    "id": 732,
    "start": 6988.601,
    "end": 6991.863,
    "en": "Step 2: Build Hypotheses.",
    "zh": "步骤2：建立假设。"
  },
  {
    "id": 733,
    "start": 6991.863,
    "end": 6997.813,
    "en": "Formulate improvement hypotheses following the three-layer framework (surface → mid → deep).",
    "zh": "按照三层框架（表面→中间→深层）制定改进假设。"
  },
  {
    "id": 734,
    "start": 6997.813,
    "end": 7003.701,
    "en": "Each hypothesis should state the target improvement in success rate and the verification method.",
    "zh": "每个假设应说明成功率的改进目标和验证方法。"
  },
  {
    "id": 735,
    "start": 7003.701,
    "end": 7007.076,
    "en": "Step 3: Phased Experimentation.",
    "zh": "步骤3：分阶段实验。"
  },
  {
    "id": 736,
    "start": 7007.076,
    "end": 7013.713,
    "en": "Reproduce H1, H5, and H5C with one variable changed per round.",
    "zh": "每轮只改变一个变量，复现H1、H5和H5C。"
  },
  {
    "id": 737,
    "start": 7013.713,
    "end": 7018.588,
    "en": "Record tokens, latency, and regressions as well as success.",
    "zh": "记录令牌数、延迟和回归情况以及成功率。"
  },
  {
    "id": 738,
    "start": 7018.588,
    "end": 7022.001,
    "en": "Step 4: Data-Driven Decision Making.",
    "zh": "步骤4：数据驱动决策。"
  },
  {
    "id": 739,
    "start": 7022.001,
    "end": 7034.338,
    "en": "Make deployment decisions based on cost-benefit analysis—not simply adopting all effective improvements, but weighing the scope of application, latency impact, and cost overhead for each improvement.",
    "zh": "基于成本效益分析做出部署决策——不要仅仅采用所有有效的改进，而是要权衡每项改进的应用范围、延迟影响和成本开销。"
  },
  {
    "id": 740,
    "start": 7034.338,
    "end": 7041.888,
    "en": "Prioritize low-cost, high-benefit improvements for deployment; restrict high-cost improvements to critical scenarios.",
    "zh": "优先部署低成本、高收益的改进；将高成本的改进限制在关键场景中。"
  },
  {
    "id": 741,
    "start": 7041.888,
    "end": 7044.663,
    "en": "Step 5: Iteration.",
    "zh": "步骤5：迭代。"
  },
  {
    "id": 742,
    "start": 7044.663,
    "end": 7049.051,
    "en": "A passing slice experiment advances only to the full rerun.",
    "zh": "通过切片实验的改进仅能进入完整重跑。"
  },
  {
    "id": 743,
    "start": 7049.051,
    "end": 7059.376,
    "en": "Discuss deployment only after the 116×5 reference-environment run, and preserve environment differences, sample size, and incomplete scope in the report.",
    "zh": "在116×5参考环境运行之后再讨论部署，并在报告中保留环境差异、样本量和未完成的范围。"
  },
  {
    "id": 744,
    "start": 7059.376,
    "end": 7066.426,
    "en": "From External Evaluation to Internal Evaluation: Evaluation Infrastructure for Production-Grade Agents.",
    "zh": "从外部评估到内部评估：生产级智能体的评估基础设施。"
  },
  {
    "id": 745,
    "start": 7066.426,
    "end": 7076.526,
    "en": "So far this chapter has evaluated Agent systems from the outside—building an evaluation environment, designing datasets, analyzing benchmark reports.",
    "zh": "到目前为止，本章是从外部对智能体系统进行评估——构建评估环境、设计数据集、分析基准报告。"
  },
  {
    "id": 746,
    "start": 7076.526,
    "end": 7085.026,
    "en": "But the best Agent products do more than undergo external evaluation; they build continuous self-evaluation infrastructure into the product.",
    "zh": "但最好的智能体产品不仅仅是经历外部评估；它们会将持续的自我评估基础设施嵌入产品中。"
  },
  {
    "id": 747,
    "start": 7085.026,
    "end": 7105.926,
    "en": "Below, using the open-source general-purpose Agent OpenClaw introduced in Chapter 5 as an example and drawing on public technical analyses of leading Coding Agent products and practitioner insights, we present an internal evaluation system worth emulating: one that systematically embeds the experimental methodology of ML research into product engineering.",
    "zh": "下面，我们以第5章介绍的开源通用智能体OpenClaw为例，并结合领先编码智能体产品的公开技术分析和实践者见解，展示一种值得借鉴的内部评估系统：一种系统性地将机器学习研究的实验方法论嵌入产品工程中的评估体系。"
  },
  {
    "id": 748,
    "start": 7105.926,
    "end": 7110.938,
    "en": "Ablation Infrastructure: Understanding the True Contribution of Each Feature.",
    "zh": "消融基础设施：理解每个功能的真实贡献。"
  },
  {
    "id": 749,
    "start": 7110.938,
    "end": 7123.101,
    "en": "ML researchers have long used ablation studies to learn which components of a model actually matter—ablation means \"removing\" one component at a time and observing how much overall performance drops.",
    "zh": "机器学习研究人员长期以来一直使用消融研究来了解模型中哪些组件真正重要——消融意味着一次移除一个组件，并观察整体性能下降了多少。"
  },
  {
    "id": 750,
    "start": 7123.101,
    "end": 7138.726,
    "en": "OpenClaw brings this methodology into product engineering: a built-in master switch can disable several major features at once (thinking mode, context compression, automatic memory, background tasks, and more), creating a \"bare model\" baseline.",
    "zh": "OpenClaw将这一方法引入产品工程：内置的主开关可以一次性禁用多个主要功能（思考模式、上下文压缩、自动记忆、后台任务等），创建一个“基础模型”基准。"
  },
  {
    "id": 751,
    "start": 7138.726,
    "end": 7146.338,
    "en": "That lets the team answer a key question: does a feature truly improve the user experience, or does it just feel useful?",
    "zh": "这使得团队能够回答一个关键问题：一个功能是否真正提升了用户体验，还是只是看起来有用？"
  },
  {
    "id": 752,
    "start": 7146.338,
    "end": 7154.276,
    "en": "Making ablation a routine engineering practice, rather than a one-time research activity, has several practical implications.",
    "zh": "将消融实验作为常规工程实践，而不是一次性研究活动，具有多个实际意义。"
  },
  {
    "id": 753,
    "start": 7154.276,
    "end": 7169.388,
    "en": "First, the ablation switch must be injected very early in the startup path—before any module-level constant captures configuration values—meaning the ablation infrastructure must be designed into the system architecture from the start, not retrofitted later.",
    "zh": "首先，消融开关必须在启动路径的非常早期被注入——在任何模块级常量捕获配置值之前——这意味着消融基础设施必须从一开始就设计到系统架构中，而不是后来再补上。"
  },
  {
    "id": 754,
    "start": 7169.388,
    "end": 7181.676,
    "en": "Second, running ablation experiments regularly (e.g., before each major release) can uncover \"feature debt\"—features that were once effective but are no longer necessary as models evolve.",
    "zh": "其次，定期运行消融实验（例如，在每次主要发布前）可以发现“功能债务”——那些曾经有效但随着模型发展已不再必要的功能。"
  },
  {
    "id": 755,
    "start": 7181.676,
    "end": 7193.451,
    "en": "For any team building a production Agent, the recommended practice is: Every major feature should be independently disableable, and the team should regularly verify the actual contribution of each feature.",
    "zh": "对于任何构建生产环境智能体的团队来说，推荐做法是：每个主要功能都应能独立禁用，团队应定期验证每个功能的实际贡献。"
  },
  {
    "id": 756,
    "start": 7193.451,
    "end": 7198.363,
    "en": "A/B Testing Methodology: Distinguishing Mechanism from Goal.",
    "zh": "A/B测试方法论：区分机制与目标。"
  },
  {
    "id": 757,
    "start": 7198.363,
    "end": 7213.913,
    "en": "Mature Agent products conduct rigorous A/B testing on their own behavior (i.e., randomly dividing users into two groups, one using the old version and one using the new version, and comparing actual data from both groups to determine if a change is effective).",
    "zh": "成熟的智能体产品会对其自身行为进行严格的A/B测试（即随机将用户分为两组，一组使用旧版本，另一组使用新版本，并通过比较两组的实际数据来确定更改是否有效）。"
  },
  {
    "id": 758,
    "start": 7213.913,
    "end": 7219.938,
    "en": "A well-designed Agent A/B test case illustrates several key methodological principles:",
    "zh": "一个设计良好的智能体A/B测试案例可以说明几个关键的方法论原则："
  },
  {
    "id": 759,
    "start": 7220.092,
    "end": 7224.004,
    "en": "Multiple variants, not just a binary comparison.",
    "zh": "多种变体，而不仅仅是二元比较。"
  },
  {
    "id": 760,
    "start": 7223.954,
    "end": 7237.654,
    "en": "Instead of just comparing \"with\" and \"without,\" design multiple progressive variants (e.g., when testing different strengths of prompt constraints, set up a control group and three experimental groups with progressively stricter constraints).",
    "zh": "不要仅仅比较“有”和“没有”，而是设计多种渐进式变体（例如，当测试不同强度的提示约束时，设置一个对照组和三个约束逐步加强的实验组）。"
  },
  {
    "id": 761,
    "start": 7237.654,
    "end": 7243.029,
    "en": "This design can reveal dose-response relationships and help find the optimal point.",
    "zh": "这种设计可以揭示剂量反应关系，并帮助找到最佳点。"
  },
  {
    "id": 762,
    "start": 7243.029,
    "end": 7246.842,
    "en": "Distinguishing mechanism metrics from target metrics.",
    "zh": "区分机制指标与目标指标。"
  },
  {
    "id": 763,
    "start": 7246.842,
    "end": 7252.729,
    "en": "This is the easiest mistake to make—treating what you are changing as the optimization target.",
    "zh": "这是最容易犯的错误——把你所改变的东西当作优化目标。"
  },
  {
    "id": 764,
    "start": 7252.729,
    "end": 7262.929,
    "en": "For example, if you are testing \"shortening the Agent's plan file length,\" plan length is a mechanism metric (something you directly change), but it is not the target.",
    "zh": "例如，如果你在测试“缩短智能体的计划文件长度”，计划长度是一个机制指标（你直接改变的东西），但它不是目标。"
  },
  {
    "id": 765,
    "start": 7262.929,
    "end": 7266.992,
    "en": "The real target might be \"reducing session-level cost.",
    "zh": "真正的目标可能是“降低会话级别的成本。"
  },
  {
    "id": 766,
    "start": 7266.992,
    "end": 7276.629,
    "en": "Shortening the plan file may lower costs, but it could also lead to more edit-check-edit loops due to insufficiently detailed plans, increasing total output.",
    "zh": "缩短计划文件可能会降低成本，但也可能导致由于计划不够详细而出现更多的编辑-检查-编辑循环，从而增加总输出量。"
  },
  {
    "id": 767,
    "start": 7276.629,
    "end": 7284.067,
    "en": "Always ask yourself: Is what I am changing (the mechanism) the same as what I truly care about (the target)?",
    "zh": "始终问自己：我所改变的（机制）是否与我真正关心的（目标）相同？"
  },
  {
    "id": 768,
    "start": 7284.067,
    "end": 7287.067,
    "en": "If not, prioritize the target.",
    "zh": "如果不是，请优先考虑目标。"
  },
  {
    "id": 769,
    "start": 7287.067,
    "end": 7289.567,
    "en": "Setting guardrail metrics.",
    "zh": "设置安全阈值指标。"
  },
  {
    "id": 770,
    "start": 7289.567,
    "end": 7299.654,
    "en": "Even if the target metric improves, the experiment should be stopped if user satisfaction declines, the number of operations increases, or the error rate rises.",
    "zh": "即使目标指标有所改善，如果用户满意度下降、操作数量增加或错误率上升，也应停止实验。"
  },
  {
    "id": 771,
    "start": 7299.654,
    "end": 7304.242,
    "en": "Guardrail metrics are non-negotiable thresholds that must not regress.",
    "zh": "安全阈值指标是不可妥协的底线，不得倒退。"
  },
  {
    "id": 772,
    "start": 7304.242,
    "end": 7307.029,
    "en": "Recording baseline statistics.",
    "zh": "记录基准统计数据。"
  },
  {
    "id": 773,
    "start": 7307.029,
    "end": 7320.954,
    "en": "Include sample size, distribution percentiles, and correlation analysis (e.g., \"rejection rate increases monotonically with plan size\") to provide the necessary context for interpreting experimental results.",
    "zh": "包括样本量、分布百分位数和相关性分析（例如，“拒绝率随计划大小单调增加”），以提供解释实验结果所需的上下文。"
  },
  {
    "id": 774,
    "start": 7320.954,
    "end": 7327.217,
    "en": "Without a baseline, you cannot determine whether the experimental results are statistically significant.",
    "zh": "没有基准数据，你就无法确定实验结果是否具有统计显著性。"
  },
  {
    "id": 775,
    "start": 7327.217,
    "end": 7329.904,
    "en": "Two-Layer Feature Flag System.",
    "zh": "双层功能开关系统。"
  },
  {
    "id": 776,
    "start": 7329.904,
    "end": 7342.829,
    "en": "Agent products need a Feature Flag infrastructure designed from day one—a feature flag is a remotely controllable switch that determines whether a function is enabled or disabled for users, without requiring code redeployment.",
    "zh": "智能体产品从第一天起就需要一个功能开关基础设施——功能开关是一个远程可控的开关，用于决定某个功能是否对用户启用或禁用，而无需重新部署代码。"
  },
  {
    "id": 777,
    "start": 7342.829,
    "end": 7350.392,
    "en": "It serves three purposes simultaneously: experimentation, gradual rollout, and emergency circuit breaking.",
    "zh": "它同时实现三个目的：实验、逐步推出和紧急断路。"
  },
  {
    "id": 778,
    "start": 7350.392,
    "end": 7356.617,
    "en": "Compile-time flags physically remove the relevant code from the build artifact during the build phase.",
    "zh": "编译时开关在构建阶段会从构建产物中物理移除相关代码。"
  },
  {
    "id": 779,
    "start": 7356.617,
    "end": 7364.654,
    "en": "Internal-only features simply do not exist in external builds—even reverse engineering cannot discover the removed functionality.",
    "zh": "内部专用功能在外部构建中根本不存在——甚至逆向工程也无法发现被移除的功能。"
  },
  {
    "id": 780,
    "start": 7364.654,
    "end": 7373.979,
    "en": "This also provides a clean ablation mechanism: disabling a feature does not skip logic at runtime; the corresponding code is physically absent.",
    "zh": "这也提供了一个干净的消融机制：禁用一个功能不会在运行时跳过逻辑；对应的代码在物理上不存在。"
  },
  {
    "id": 781,
    "start": 7373.979,
    "end": 7379.879,
    "en": "Runtime flags have their configuration delivered by the server and cached locally on disk.",
    "zh": "运行时标志的配置由服务器提供，并在本地磁盘上缓存。"
  },
  {
    "id": 782,
    "start": 7379.879,
    "end": 7388.067,
    "en": "The design prioritizes reading slightly stale cached configuration over blocking the Agent's startup while waiting for a network request.",
    "zh": "设计优先考虑读取稍有陈旧的缓存配置，而不是在等待网络请求时阻塞智能体的启动。"
  },
  {
    "id": 783,
    "start": 7388.067,
    "end": 7396.179,
    "en": "Specific grouping decisions are made through an experimentation platform (e.g., GrowthBook) for assigning A/B test groups.",
    "zh": "具体的分组决策通过实验平台（例如GrowthBook）进行，用于分配A/B测试组。"
  },
  {
    "id": 784,
    "start": 7396.179,
    "end": 7405.167,
    "en": "A key design detail is that each feature's exposure event is logged at most once per session to avoid duplicate records polluting the experimental data.",
    "zh": "一个关键的设计细节是，每个功能的曝光事件在会话中最多记录一次，以避免重复记录污染实验数据。"
  },
  {
    "id": 785,
    "start": 7405.167,
    "end": 7412.892,
    "en": "The lesson for Agent developers: feature flags are not debugging tools; they are first-class architectural components.",
    "zh": "给智能体开发者的教训是：功能标志不是调试工具；它们是首屈一指的架构组件。"
  },
  {
    "id": 786,
    "start": 7412.892,
    "end": 7415.492,
    "en": "Prompt Sensitivity Assessment.",
    "zh": "提示敏感性评估。"
  },
  {
    "id": 787,
    "start": 7415.644,
    "end": 7424.369,
    "en": "The system prompt is the core \"code\" of Agent behavior, yet it often lacks the version control and regression testing afforded to regular code.",
    "zh": "系统提示是智能体行为的核心“代码”，但它常常缺乏常规代码所拥有的版本控制和回归测试。"
  },
  {
    "id": 788,
    "start": 7424.319,
    "end": 7436.319,
    "en": "OpenClaw's approach is to provide a dedicated tool that can extract the fully rendered system prompt at a specified Git revision or commit—including the final text after all dynamic conditions are expanded.",
    "zh": "OpenClaw的方法是提供一个专用工具，该工具可以在指定的Git版本或提交中提取完全渲染的系统提示——包括所有动态条件展开后的最终文本。"
  },
  {
    "id": 789,
    "start": 7436.319,
    "end": 7441.206,
    "en": "This allows the team to precisely answer: Which commit changed the prompt?",
    "zh": "这使团队能够准确回答：哪个提交更改了提示？"
  },
  {
    "id": 790,
    "start": 7441.206,
    "end": 7444.419,
    "en": "What was the impact on the evaluation set?",
    "zh": "对评估集有什么影响？"
  },
  {
    "id": 791,
    "start": 7444.419,
    "end": 7466.931,
    "en": "For any Agent team, the recommended practices are: (1) The system prompt should be deterministically renderable (given the same configuration input, it always produces the same output); (2) Establish a versioned snapshot mechanism for prompts; (3) Every prompt change should run regression tests on the evaluation set—just as code changes require CI.",
    "zh": "对于任何智能体团队，推荐的做法是：（1）系统提示应具有确定性地渲染（给定相同的配置输入，它始终产生相同的输出）；（2）建立版本化快照机制用于提示；（3）每次提示更改都应在评估集上运行回归测试——就像代码更改需要CI一样。"
  },
  {
    "id": 792,
    "start": 7466.931,
    "end": 7471.031,
    "en": "Privacy-Aware Analytics as an Evaluation Foundation.",
    "zh": "隐私感知分析作为评估基础。"
  },
  {
    "id": 793,
    "start": 7471.031,
    "end": 7477.194,
    "en": "Evaluation relies on good data, but Agent products often handle sensitive user content.",
    "zh": "评估依赖于良好的数据，但智能体产品通常处理敏感用户内容。"
  },
  {
    "id": 794,
    "start": 7477.194,
    "end": 7492.369,
    "en": "OpenClaw resolves this contradiction through a type system: the analytics interface only accepts values wrapped in special types, where the type name itself serves as an audit trail—it explicitly declares \"I have verified this is not code or a file path.",
    "zh": "OpenClaw通过类型系统解决这一矛盾：分析接口仅接受用特殊类型包装的值，类型名称本身作为审计线索——它明确声明“我已经验证过这不是代码或文件路径。”"
  },
  {
    "id": 795,
    "start": 7492.369,
    "end": 7499.706,
    "en": "This design transforms privacy constraints from documented specifications into compile-time enforced type checks.",
    "zh": "这种设计将隐私限制从文档规范转化为编译时强制的类型检查。"
  },
  {
    "id": 796,
    "start": 7499.706,
    "end": 7506.931,
    "en": "The core principle is: Design privacy constraints into the system from the start; do not bolt them on afterward.",
    "zh": "核心原则是：从一开始就将隐私约束设计到系统中；不要事后补上。"
  },
  {
    "id": 797,
    "start": 7506.931,
    "end": 7512.644,
    "en": "If your analytics system cannot safely collect data, you cannot evaluate effectively.",
    "zh": "如果你的分析系统无法安全地收集数据，你就无法有效评估。"
  },
  {
    "id": 798,
    "start": 7512.644,
    "end": 7525.069,
    "en": "Privacy and evaluation are not opposing forces—privacy-aware design forces you to think carefully about what truly needs to be measured*, which in turn fosters more precise evaluation metrics.",
    "zh": "隐私和评估不是对立的力量——具有隐私意识的设计会迫使你仔细思考真正需要测量的内容，这反过来有助于建立更精确的评估指标。"
  },
  {
    "id": 799,
    "start": 7525.069,
    "end": 7529.369,
    "en": "From External to Internal: A Shift in Evaluation Thinking.",
    "zh": "从外部到内部：评估思维的转变。"
  },
  {
    "id": 800,
    "start": 7529.369,
    "end": 7540.131,
    "en": "The core message of this section is: The previous sections taught you how to evaluate an Agent externally; this section reveals how the best Agent products evaluate themselves internally.",
    "zh": "本节的核心信息是：前面几节教你怎么从外部评估智能体；本节揭示了最佳智能体产品如何从内部进行自我评估。"
  },
  {
    "id": 801,
    "start": 7540.131,
    "end": 7548.431,
    "en": "External evaluation tells you \"how good the Agent is\"; internal evaluation infrastructure tells you \"which change made it better.",
    "zh": "外部评估告诉你‘智能体有多好’；内部评估基础设施告诉你‘哪个变化让它变得更好’。"
  },
  {
    "id": 802,
    "start": 7548.431,
    "end": 7568.044,
    "en": "Ablation experiments discover which features truly matter, A/B testing quantifies the impact of each change, feature flags provide the infrastructure for experimentation and rollback, prompt sensitivity assessment integrates the system prompt into the CI system, and privacy-aware analytics ensures compliance in data collection.",
    "zh": "消融实验发现哪些特征真正重要，A/B测试量化每次变化的影响，功能标志为实验和回滚提供基础设施，提示敏感性评估将系统提示整合到CI系统中，而具有隐私意识的分析确保数据收集的合规性。"
  },
  {
    "id": 803,
    "start": 7568.044,
    "end": 7578.044,
    "en": "These five components together constitute evaluation-driven product engineering—not evaluating occasionally, but embedding evaluation into every product decision.",
    "zh": "这五个组成部分共同构成了以评估驱动的产品工程——不是偶尔进行评估，而是将评估嵌入每项产品决策中。"
  },
  {
    "id": 804,
    "start": 7578.044,
    "end": 7582.869,
    "en": "Simulation Environments: The Bridge from Evaluation to Post-Training.",
    "zh": "模拟环境：从评估到训练后优化的桥梁。"
  },
  {
    "id": 805,
    "start": 7582.869,
    "end": 7587.231,
    "en": "The endpoint of evaluation is not scoring, but improvement.",
    "zh": "评估的终点不是评分，而是改进。"
  },
  {
    "id": 806,
    "start": 7587.231,
    "end": 7600.744,
    "en": "This chapter has already demonstrated two paths for improvement: adjusting the Harness (from Benchmark reports to system improvements) and embedding evaluation into product engineering (internal evaluation infrastructure).",
    "zh": "本章已经展示了两种改进路径：调整Harness（从基准报告到系统改进）以及将评估嵌入产品工程（内部评估基础设施）。"
  },
  {
    "id": 807,
    "start": 7600.744,
    "end": 7622.194,
    "en": "The strongest form of improvement is training—when the goal expands from \"evaluating existing capabilities\" to \"cultivating new capabilities,\" especially through the post-training techniques discussed in Chapter 8, the evaluation environment needs to evolve into a simulation environment: a virtual playground where the Agent can repeatedly practice and be automatically scored.",
    "zh": "最强大的改进形式是训练——当目标从‘评估现有能力’扩展到‘培养新能力’时，特别是通过第8章讨论的训练后技术，评估环境需要演变为模拟环境：一个智能体可以反复练习并被自动评分的虚拟游乐场。"
  },
  {
    "id": 808,
    "start": 7622.194,
    "end": 7638.031,
    "en": "The core differences between simulation environments and evaluation environments are: much higher interaction frequency (millions vs. thousands), the need for randomization (to prevent memorizing specific configurations), and the requirement for immediate feedback.",
    "zh": "模拟环境与评估环境的核心区别在于：交互频率更高（数百万次 vs. 数千次）、需要随机化（以防止记忆特定配置）以及需要即时反馈。"
  },
  {
    "id": 809,
    "start": 7638.031,
    "end": 7651.169,
    "en": "From an application perspective, simulation environments are divided into two categories: digital environments (information processing tasks) and embodied environments (physical world perception and manipulation).",
    "zh": "从应用角度看，模拟环境分为两类：数字环境（信息处理任务）和具身环境（物理世界的感知和操作）。"
  },
  {
    "id": 810,
    "start": 7651.324,
    "end": 7654.349,
    "en": "Here is how the two ends of the bridge meet.",
    "zh": "这就是桥梁的两端相遇之处。"
  },
  {
    "id": 811,
    "start": 7654.299,
    "end": 7677.736,
    "en": "Assets accumulated on the evaluation side convert almost seamlessly into training signals: a well-defined Rubric or validator is essentially a reward function for Reinforcement Learning with Verifiable Rewards (RLVR)—the scoring script becomes the reward script; whether a test passes or a state meets the standard serves both as an evaluation criterion and as a reinforcement learning reward.",
    "zh": "评估端积累的资源几乎可以无缝转换为训练信号：一个定义明确的评分标准或验证器本质上是可验证奖励强化学习（RLVR）中的奖励函数——评分脚本成为奖励脚本；测试是否通过或状态是否符合标准既作为评估标准，也作为强化学习的奖励。"
  },
  {
    "id": 812,
    "start": 7677.736,
    "end": 7682.061,
    "en": "But training brings demands evaluation never had to worry about.",
    "zh": "但训练会带来评估从未需要担心的要求。"
  },
  {
    "id": 813,
    "start": 7682.061,
    "end": 7702.736,
    "en": "The first is reliable reset semantics: training runs millions of episodes (an episode is one complete interaction round from an initial state to task completion), and each episode must be able to reset the environment to a deterministic, clean initial state; otherwise, the gradient signal will be contaminated by residual states from the previous episode.",
    "zh": "第一点是可靠的重置语义：训练会运行数百万个回合（一个回合是从初始状态到任务完成的一次完整交互过程），每个回合都必须能够将环境重置为确定性的、干净的初始状态；否则，梯度信号将受到前一个回合残留状态的污染。"
  },
  {
    "id": 814,
    "start": 7702.736,
    "end": 7720.536,
    "en": "The second is throughput far exceeding evaluation: a few thousand evaluations are enough to draw conclusions, but training requires feeding the model millions of interactions within an acceptable wall-clock time; the degree of environment parallelism and per-instance overhead directly determine whether training is feasible.",
    "zh": "第二点是吞吐量远超评估：几千次评估就足以得出结论，但训练需要在可接受的墙钟时间内向模型输入数百万次交互；环境并行程度和每个实例的开销直接决定了训练是否可行。"
  },
  {
    "id": 815,
    "start": 7720.536,
    "end": 7729.349,
    "en": "These two points—validators turned into reward functions, and training-grade reset and throughput—will be elaborated in Chapter 8.",
    "zh": "这两个要点——验证器转化为奖励函数，以及训练级别的重置和吞吐量——将在第8章详细阐述。"
  },
  {
    "id": 816,
    "start": 7729.349,
    "end": 7734.724,
    "en": "As illustrated in Figure 7-9: Simulation Fidelity Spectrum.",
    "zh": "如图7-9所示：仿真保真度谱。"
  },
  {
    "id": 817,
    "start": 7734.724,
    "end": 7752.799,
    "en": "On the digital environment side, the AWorld framework builds a controllable MCP server sandbox for GAIA tasks, providing 26 MCP servers covering 126 tool functions, avoiding the bans and uncontrollable side effects of directly accessing real APIs.",
    "zh": "在数字环境方面，AWorld框架为GAIA任务构建了一个可控的MCP服务器沙盒，提供26个覆盖126个工具功能的MCP服务器，避免了直接访问真实API带来的封禁和不可控副作用。"
  },
  {
    "id": 818,
    "start": 7752.799,
    "end": 7756.336,
    "en": "All tool calls are replayable and auditable.",
    "zh": "所有工具调用都可以回放和审计。"
  },
  {
    "id": 819,
    "start": 7756.336,
    "end": 7773.586,
    "en": "AWorld's distributed architecture reduces the traditional serial execution time from 7695 seconds to 525 seconds (a 14.6x speedup), and the environment's stateless design makes each instance completely independent, supporting efficient parallelism.",
    "zh": "AWorld的分布式架构将传统串行执行时间从7695秒减少到525秒（提速14.6倍），而环境无状态设计使每个实例完全独立，支持高效的并行性。"
  },
  {
    "id": 820,
    "start": 7773.586,
    "end": 7786.536,
    "en": "On the embodied environment side, RoboTwin2 builds dual-arm manipulation tasks based on a physics engine, randomizing object positions, orientations, and appearances to improve generalization.",
    "zh": "在具身环境方面，RoboTwin2基于物理引擎构建双臂操作任务，随机化物体位置、方向和外观以提高泛化能力。"
  },
  {
    "id": 821,
    "start": 7786.536,
    "end": 7799.099,
    "en": "The observation space includes multi-camera visuals and joint states, achieving real-time control through Action Chunking—where the model plans multiple consecutive actions at once (detailed in Chapter 6).",
    "zh": "观察空间包括多相机视觉和关节状态，通过动作分块实现实时控制——模型一次规划多个连续动作（详见第6章）。"
  },
  {
    "id": 822,
    "start": 7799.099,
    "end": 7807.674,
    "en": "OSWorld provides reset capability through virtual machine snapshots, and AndroidWorld focuses on mobile application automation.",
    "zh": "OSWorld通过虚拟机快照提供重置功能，AndroidWorld专注于移动应用自动化。"
  },
  {
    "id": 823,
    "start": 7807.674,
    "end": 7826.411,
    "en": "Whether digital or embodied, simulation environments also require the isolated execution environments and virtual identity mechanisms discussed in Chapter 4 (VM/container isolation, residential proxies, Human-in-the-Loop authentication, shared file systems), which will not be repeated here.",
    "zh": "无论是数字还是具身环境，仿真环境也需要第4章讨论的隔离执行环境和虚拟身份机制（VM/容器隔离、住宅代理、人工在环认证、共享文件系统），此处不再重复。"
  },
  {
    "id": 824,
    "start": 7826.411,
    "end": 7836.061,
    "en": "Experiment 7-14 intermediate difficulty, two stars: : Configure the Embodied Intelligence Environment for OpenVLA and RoboTwin2",
    "zh": "实验7-14 中等难度，两颗星：配置开放VLA和RoboTwin2的具身智能环境"
  },
  {
    "id": 825,
    "start": 7836.061,
    "end": 7840.186,
    "en": "Set up a simulation environment for robot manipulation.",
    "zh": "为机器人操作构建仿真环境。"
  },
  {
    "id": 826,
    "start": 7840.186,
    "end": 7856.911,
    "en": "Read ch7/SimpleVLA-RL and the OpenVLA documentation to understand the architecture of the Vision-Language-Action model (end-to-end integration of a vision encoder, language model, and action decoder, projecting images and text into a shared semantic space).",
    "zh": "阅读第7章中的SimpleVLA-RL和OpenVLA文档，以了解视觉-语言-动作模型（视觉编码器、语言模型和动作解码器的端到端集成，将图像和文本投影到共享语义空间）的架构。"
  },
  {
    "id": 827,
    "start": 7856.911,
    "end": 7868.774,
    "en": "Configure the RoboTwin2 environment, understanding the observation space (three-view RGB + 14-dimensional joint state) and action space (14-dimensional control vector).",
    "zh": "配置RoboTwin2环境，理解观察空间（三视角RGB + 14维关节状态）和动作空间（14维控制向量）。"
  },
  {
    "id": 828,
    "start": 7868.774,
    "end": 7875.536,
    "en": "Study the environment randomization mechanism and spatial constraint logic in move_can_pot`.",
    "zh": "研究move_can_pot中环境随机化机制和空间约束逻辑。"
  },
  {
    "id": 829,
    "start": 7875.536,
    "end": 7885.449,
    "en": "Evaluate the pretrained model, recording its success rate, completion time, and failure modes, with a focus on the impact of the action chunking mechanism.",
    "zh": "评估预训练模型，记录其成功概率、完成时间和失败模式，重点关注动作分块机制的影响。"
  },
  {
    "id": 830,
    "start": 7885.449,
    "end": 7892.649,
    "en": "As illustrated in Figure 7-10: OpenVLA and RoboTwin2 Embodied Intelligence Environment.",
    "zh": "如图7-10所示：OpenVLA和RoboTwin2具身智能环境。"
  },
  {
    "id": 831,
    "start": 7892.649,
    "end": 7896.261,
    "en": "Fidelity Trade-offs and Domain Randomization.",
    "zh": "保真度权衡与领域随机化。"
  },
  {
    "id": 832,
    "start": 7896.412,
    "end": 7902.649,
    "en": "High-fidelity environments support better transfer to the real world but have high computational costs.",
    "zh": "高保真环境能更好地迁移到现实世界，但计算成本高。"
  },
  {
    "id": 833,
    "start": 7902.599,
    "end": 7913.099,
    "en": "Another dimension of fidelity is the degree of randomization: moderate randomization improves generalization, while excessive randomization can make tasks too difficult.",
    "zh": "保真度的另一个维度是随机化的程度：适度的随机化可以提高泛化能力，而过度的随机化会使任务过于困难。"
  },
  {
    "id": 834,
    "start": 7913.099,
    "end": 7931.674,
    "en": "Domain Randomization is a key technique for narrowing the sim-to-real gap: introducing a wide range of random variations in physical parameters, visual appearance, sensor noise, etc.—just like practicing grasping under various lighting and angles, so you won't fail in the real world just because the light changes.",
    "zh": "领域随机化是缩小模拟到现实差距的关键技术：在物理参数、视觉外观、传感器噪声等方面引入广泛的随机变化——就像在各种光照和角度下练习抓取，这样即使光线发生变化，你也不会在真实世界中失败。"
  },
  {
    "id": 835,
    "start": 7931.674,
    "end": 7943.562,
    "en": "In digital environments, sim-to-real manifests as differences in interface rendering, response times, etc., which can be mitigated by introducing randomization in latency and failures.",
    "zh": "在数字环境中，模拟到现实表现为界面渲染、响应时间等方面的差异，这些可以通过引入延迟和故障的随机化来缓解。"
  },
  {
    "id": 836,
    "start": 7943.562,
    "end": 7945.449,
    "en": "Chapter Summary.",
    "zh": "章节总结。"
  },
  {
    "id": 837,
    "start": 7945.449,
    "end": 7952.024,
    "en": "This chapter has revolved around one core question: how do you tell whether an Agent has gotten better or worse?",
    "zh": "本章围绕一个核心问题展开：你如何判断一个智能体变好还是变差？"
  },
  {
    "id": 838,
    "start": 7952.024,
    "end": 7984.612,
    "en": "The chain has four stages — first pin down what counts as success (the differing bases of Pass@k, Best@k, and Pass^k), then settle where the tasks come from (public benchmarks, an in-house evaluation dataset for business tasks, and production trajectory feedback), then choose how verification is done (from deterministic verifiers to checklists, Rubric plus LLM judgment, and finally pairwise comparison), and finally turn scores into decisions (statistical significance, failure attribution,",
    "zh": "这一链条有四个阶段——首先明确什么是成功（Pass@k、Best@k和Pass^k的不同基础），然后确定任务来源（公共基准、企业任务的内部评估数据集以及生产轨迹反馈），然后选择验证方式（从确定性验证器到检查清单、Rubric加LLM判断，最后是两两比较），最后将分数转化为决策（统计显著性、失败归因、回归任务和模型选择）。"
  },
  {
    "id": 839,
    "start": 7984.612,
    "end": 7988.012,
    "en": "regression tasks, and model selection).",
    "zh": "回归任务和模型选择。"
  },
  {
    "id": 840,
    "start": 7988.012,
    "end": 7991.799,
    "en": "Every stage affects how much you can trust the conclusion.",
    "zh": "每个阶段都会影响你对结论的信任程度。"
  },
  {
    "id": 841,
    "start": 7991.799,
    "end": 8003.299,
    "en": "In terms of the book's larger structure, this chapter builds the evidence segment of Chapter 1's discovery loop: failure attribution determines whether later proposals have anything solid to rest on.",
    "zh": "从本书整体结构来看，本章构建了第一章发现循环中的证据部分：失败归因决定了后续的建议是否有坚实的基础。"
  },
  {
    "id": 842,
    "start": 8003.299,
    "end": 8013.212,
    "en": "Trajectory-prefix boundary evaluation makes a further point: obtaining a piece of information and correctly applying it to the current decision are two different capabilities.",
    "zh": "轨迹前缀边界评估进一步指出：获取一条信息并正确地将其应用于当前决策是两种不同的能力。"
  },
  {
    "id": 843,
    "start": 8013.212,
    "end": 8027.049,
    "en": "End-to-end regression guarantees that basic tasks do not degrade, while the trajectory-prefix boundary set directly checks scope judgment, current-instruction override, clarification, and confirmation before dangerous actions.",
    "zh": "端到端回归保证了基础任务不会退化，而轨迹前缀边界则直接检查范围判断、当前指令覆盖、澄清和确认，在危险操作之前进行验证。"
  },
  {
    "id": 844,
    "start": 8027.049,
    "end": 8030.874,
    "en": "User memory is just one case of this general method.",
    "zh": "用户记忆只是这一通用方法的一个案例。"
  },
  {
    "id": 845,
    "start": 8030.874,
    "end": 8041.874,
    "en": "Evaluation for production-grade Agents is not an occasional exam, but a verification system that continuously generates regression tasks and boundary tasks from real problem cases.",
    "zh": "面向生产级智能体的评估不是一次性的考试，而是一个持续生成回归任务和边界任务的验证系统，这些任务来源于真实的问题案例。"
  },
  {
    "id": 846,
    "start": 8041.874,
    "end": 8054.137,
    "en": "Core methodology: Observe → Hypothesize → Experiment → Validate → New Understanding → New Hypothesis, transforming Agent engineering from experience-driven \"alchemy\" to data-driven scientific engineering.",
    "zh": "核心方法论：观察 → 假设 → 实验 → 验证 → 新的理解 → 新的假设，将智能体工程从经验驱动的“炼金术”转变为数据驱动的科学工程。"
  },
  {
    "id": 847,
    "start": 8054.137,
    "end": 8083.149,
    "en": "The evaluation system introduced in this chapter forms a complete closed loop: Evaluation Environment provides automated testing infrastructure → Evaluation Dataset defines end-to-end tasks and trajectory-prefix boundaries → Automated Evaluation Methods (deterministic verifiers, LLM-as-a-Judge, and Rubric) score Agent performance and attribute failures → Benchmark and Problem-Case Analysis reveals improvement directions → System Improvements fix issues → Update the evaluation environment and",
    "zh": "本章介绍的评估系统形成了一个完整的闭环：评估环境提供自动化测试基础设施 → 评估数据集定义端到端任务和轨迹前缀边界 → 自动化评估方法（确定性验证器、LLM-as-a-Judge 和评分标准）对智能体性能进行评分并归因于失败 → 基准测试和问题案例分析揭示改进方向 → 系统改进解决这些问题 → 更新评估环境和"
  },
  {
    "id": 848,
    "start": 8083.149,
    "end": 8086.749,
    "en": "dataset, starting a new iteration cycle.",
    "zh": "数据集，开始一个新的迭代周期。"
  },
  {
    "id": 849,
    "start": 8086.749,
    "end": 8096.362,
    "en": "The evaluation system established in this chapter serves not only the optimization of the current system but also provides a critical foundation for the next two chapters.",
    "zh": "本章建立的评估系统不仅服务于当前系统的优化，还为接下来的两章提供了关键的基础。"
  },
  {
    "id": 850,
    "start": 8096.362,
    "end": 8109.574,
    "en": "Chapter 8 turns evaluation environments and data into inputs for model post-training; Chapter 9 turns multidimensional evaluation of production trajectories into updates to knowledge, instructions, and procedures.",
    "zh": "第8章将评估环境和数据作为模型后训练的输入；第9章将对生产轨迹的多维评估转化为知识、指令和流程的更新。"
  },
  {
    "id": 851,
    "start": 8109.574,
    "end": 8111.512,
    "en": "Thought Questions.",
    "zh": "思考问题。"
  },
  {
    "id": 852,
    "start": 8111.512,
    "end": 8119.574,
    "en": "intermediate difficulty, two stars:  LLM-as-a-Judge uses a language model to evaluate the output of a language model.",
    "zh": "中等难度，两颗星：LLM-as-a-Judge 使用语言模型来评估语言模型的输出。"
  },
  {
    "id": 853,
    "start": 8119.574,
    "end": 8131.824,
    "en": "Does this \"self-evaluation\" have systematic blind spots—for example, the model might consistently give high scores to a certain style of response, a preference that is inconsistent with human judgment?",
    "zh": "这种“自我评估”是否存在系统性盲点——例如，模型可能始终对某种类型的回答给出高分，而这种偏好与人类判断不一致？"
  },
  {
    "id": 854,
    "start": 8131.824,
    "end": 8135.299,
    "en": "How can such biases be detected and corrected?",
    "zh": "如何检测并纠正这些偏差？"
  },
  {
    "id": 855,
    "start": 8135.452,
    "end": 8142.564,
    "en": "advanced difficulty, three stars:  The \"leakage-proof\" design of evaluation datasets is crucial.",
    "zh": "高级难度，三颗星：评估数据集的“无泄漏”设计至关重要。"
  },
  {
    "id": 856,
    "start": 8142.514,
    "end": 8150.664,
    "en": "However, in the open-source ecosystem, once benchmark data is made public, it is quickly incorporated into training data.",
    "zh": "然而，在开源生态系统中，一旦基准数据被公开，就会迅速被纳入训练数据中。"
  },
  {
    "id": 857,
    "start": 8150.664,
    "end": 8154.189,
    "en": "Does this \"cat-and-mouse game\" have an endgame?",
    "zh": "这种「猫鼠游戏」是否有终局？"
  },
  {
    "id": 858,
    "start": 8154.189,
    "end": 8159.002,
    "en": "Design an evaluation method that fundamentally resists data leakage.",
    "zh": "设计一种从根本上防止数据泄露的评估方法。"
  },
  {
    "id": 859,
    "start": 8159.002,
    "end": 8173.914,
    "en": "intermediate difficulty, two stars:  Scale AI's four criteria (expert guidance, comprehensive coverage, standardized importance weighting, self-contained evaluation) aim to eliminate subjectivity in evaluation.",
    "zh": "中等难度，两颗星：Scale AI 的四个标准（专家指导、全面覆盖、标准化重要性加权、自包含评估）旨在消除评估中的主观性。"
  },
  {
    "id": 860,
    "start": 8173.914,
    "end": 8178.989,
    "en": "However, certain task dimensions (e.g., \"Is the answer helpful?",
    "zh": "然而，某些任务维度（例如“答案是否有帮助？”"
  },
  {
    "id": 861,
    "start": 8178.989,
    "end": 8182.777,
    "en": "Is the tone appropriate?\") are inherently subjective.",
    "zh": "语气是否恰当？）本质上是主观的。"
  },
  {
    "id": 862,
    "start": 8182.777,
    "end": 8187.214,
    "en": "How can reliable Rubrics be designed for these subjective dimensions?",
    "zh": "如何为这些主观维度设计可靠的评分标准？"
  },
  {
    "id": 863,
    "start": 8187.214,
    "end": 8194.377,
    "en": "intermediate difficulty, two stars:  τ-bench evaluates Agents by simulating real user behavior.",
    "zh": "中等难度，两颗星：τ-bench 通过模拟真实用户行为来评估智能体。"
  },
  {
    "id": 864,
    "start": 8194.377,
    "end": 8204.827,
    "en": "But the simulated user itself is an LLM—it might systematically underestimate certain edge cases (e.g., emotionally agitated or unclear users).",
    "zh": "但模拟用户本身是一个 LLM，它可能会系统性地低估某些边缘情况（例如情绪激动或表达不清的用户）。"
  },
  {
    "id": 865,
    "start": 8204.827,
    "end": 8209.052,
    "en": "How can the quality of the simulated user itself be validated?",
    "zh": "如何验证模拟用户本身的质量？"
  },
  {
    "id": 866,
    "start": 8209.052,
    "end": 8221.202,
    "en": "intermediate difficulty, two stars:  Pairwise comparison (Bradley-Terry model) assumes preferences are transitive (if A > B and B > C, then A > C).",
    "zh": "中等难度，两颗星：成对比较（Bradley-Terry 模型）假设偏好具有传递性（如果 A > B 且 B > C，则 A > C）。"
  },
  {
    "id": 867,
    "start": 8221.202,
    "end": 8225.602,
    "en": "However, human preferences often violate transitivity.",
    "zh": "然而，人类的偏好常常违反传递性。"
  },
  {
    "id": 868,
    "start": 8225.602,
    "end": 8231.027,
    "en": "In Agent evaluation, in what scenarios might non-transitive preferences appear?",
    "zh": "在智能体评估中，哪些场景下可能出现非传递性偏好？"
  },
  {
    "id": 869,
    "start": 8231.027,
    "end": 8234.439,
    "en": "How does this affect the reliability of rankings?",
    "zh": "这会如何影响排名的可靠性？"
  },
  {
    "id": 870,
    "start": 8234.439,
    "end": 8244.639,
    "en": "intermediate difficulty, two stars:  This chapter distinguishes Pass@k as a ceiling on capability from Pass^k as a measure of business reliability.",
    "zh": "中等难度，两颗星：本章区分了 Pass@k 作为能力上限与 Pass^k 作为业务可靠性的衡量标准。"
  },
  {
    "id": 871,
    "start": 8244.639,
    "end": 8256.952,
    "en": "For an Agent whose single-run success rate is only 60%, how would you combine a task's failure cost, retry cost and side effects to decide which metric to report and how large k should be?",
    "zh": "对于一个单次运行成功率仅为60%的智能体，你会如何结合任务的失败成本、重试成本和副作用来决定报告哪个指标以及k值应多大？"
  },
  {
    "id": 872,
    "start": 8256.952,
    "end": 8265.702,
    "en": "intermediate difficulty, two stars:  This chapter proposes the scientific method of \"Observe → Hypothesize → Experiment → Validate.",
    "zh": "中等难度，两星：本章提出了科学方法论「观察→假设→实验→验证」。"
  },
  {
    "id": 873,
    "start": 8265.702,
    "end": 8274.864,
    "en": "In practice, however, the Agent's behavior space is vast, and validating a single hypothesis may require hundreds of evaluation runs.",
    "zh": "然而在实践中，智能体的行为空间非常广阔，验证一个假设可能需要数百次评估运行。"
  },
  {
    "id": 874,
    "start": 8274.864,
    "end": 8280.739,
    "en": "How can the information gained from evaluation be maximized under a limited computational budget?",
    "zh": "在有限的计算预算下，如何最大化评估中获得的信息？"
  },
  {
    "id": 875,
    "start": 8280.739,
    "end": 8299.939,
    "en": "introductory difficulty, one star:  In the AndroidWorld pilot, the full element tree raised success from 25% to 100% but increased token use to 2.498× the control; pruning preserved 100% success while reducing token use to 0.506×.",
    "zh": "入门难度，一星：在AndroidWorld试点中，完整的元素树将成功率从25%提升至100%，但增加了2.498倍的token使用量；剪枝保留了100%的成功率，同时将token使用量降低至0.506倍。"
  },
  {
    "id": 876,
    "start": 8299.939,
    "end": 8310.552,
    "en": "How would you design automatic pruning rules that remove semantically empty UI nodes without discarding information needed for accessibility, state verification, or later actions?",
    "zh": "你会如何设计自动剪枝规则，在不丢弃无障碍性、状态验证或后续操作所需信息的前提下，移除语义上无意义的UI节点？"
  },
  {
    "id": 877,
    "start": 8310.552,
    "end": 8323.714,
    "en": "intermediate difficulty, two stars:  τ-bench's user simulation employs \"progressive information disclosure\"—not providing all information at once, but gradually revealing it based on the Agent's questions.",
    "zh": "中等难度，两星：τ-bench的用户模拟采用了「渐进式信息披露」——不是一次性提供所有信息，而是根据智能体的问题逐步揭示信息。"
  },
  {
    "id": 878,
    "start": 8323.714,
    "end": 8327.302,
    "en": "How does this design affect evaluation results?",
    "zh": "这种设计会对评估结果产生什么影响？"
  },
  {
    "id": 879,
    "start": 8327.302,
    "end": 8336.064,
    "en": "If the simulated user's information disclosure strategy differs significantly from real users, are the evaluation conclusions still reliable?",
    "zh": "如果模拟用户的披露策略与真实用户有显著差异，评估结论是否仍然可靠？"
  }
];
