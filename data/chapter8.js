window.CHAPTER_DATA_chapter8 = [
  {
    "id": 1,
    "start": 0.1,
    "end": 3.1,
    "en": "Chapter 8: Model Post-Training.",
    "zh": "第8章：模型后训练。"
  },
  {
    "id": 2,
    "start": 3.05,
    "end": 8.762,
    "en": "The core formula of this book is Agent = LLM + Context + Tools.",
    "zh": "本书的核心公式是：智能体 = 大语言模型 + 上下文 + 工具。"
  },
  {
    "id": 3,
    "start": 8.762,
    "end": 13.05,
    "en": "This chapter turns to the LLM itself—the \"brain.",
    "zh": "本章将转向大语言模型本身——即“大脑”。"
  },
  {
    "id": 4,
    "start": 13.05,
    "end": 24.812,
    "en": "We first use Mid-training to fill gaps in domain knowledge and foundational capabilities, then use post-training methods such as SFT and RL to shape how the model uses context and tools.",
    "zh": "我们首先使用中训练来填补领域知识和基础能力的空白，然后使用SFT和RL等后训练方法来塑造模型如何使用上下文和工具。"
  },
  {
    "id": 5,
    "start": 24.812,
    "end": 38.125,
    "en": "The end of Chapter 7 pointed out that the evaluation system and simulation environment are the two cornerstones of post-training: the evaluation environment gives training its practice ground, and the evaluation metrics give it its target.",
    "zh": "第7章的结尾指出，评估系统和仿真环境是后训练的两大基石：评估环境为训练提供了实践场所，评估指标为训练设定了目标。"
  },
  {
    "id": 6,
    "start": 38.125,
    "end": 46.412,
    "en": "This chapter builds on those cornerstones and discusses how to actually change model weights—how to bake capability into the parameters.",
    "zh": "本章建立在这些基石之上，并探讨如何实际改变模型权重——如何将能力烘焙到参数中。"
  },
  {
    "id": 7,
    "start": 46.412,
    "end": 51.4,
    "en": "This chapter assumes no background in reinforcement learning or model training.",
    "zh": "本章假设你没有强化学习或模型训练的基础知识。"
  },
  {
    "id": 8,
    "start": 51.4,
    "end": 55.587,
    "en": "We don't expect you to know gradients or policy optimization.",
    "zh": "我们不期望你了解梯度或策略优化。"
  },
  {
    "id": 9,
    "start": 55.587,
    "end": 64.925,
    "en": "Instead, we start from the question of how a model gets trained at all, making clear what each step is for, how it works, and what problem it solves.",
    "zh": "相反，我们将从模型是如何被训练这个问题出发，明确每个步骤的作用、工作原理以及解决的问题。"
  },
  {
    "id": 10,
    "start": 64.925,
    "end": 72.175,
    "en": "By the end of the chapter, you should be able to answer the following questions: At what stages are model capabilities formed?",
    "zh": "到本章结束时，你应该能够回答以下问题：模型能力是在哪些阶段形成的？"
  },
  {
    "id": 11,
    "start": 72.175,
    "end": 74.387,
    "en": "What does each stage do?",
    "zh": "每个阶段的作用是什么？"
  },
  {
    "id": 12,
    "start": 74.387,
    "end": 78.775,
    "en": "How are the stages commonly combined, and when can the order differ?",
    "zh": "这些阶段通常如何组合，何时顺序可以不同？"
  },
  {
    "id": 13,
    "start": 78.775,
    "end": 82.45,
    "en": "And where should you focus your effort in your own projects?",
    "zh": "以及在你自己的项目中应该将精力集中在何处？"
  },
  {
    "id": 14,
    "start": 82.45,
    "end": 90.462,
    "en": "First, let's establish the most important map: modern model capability development can usually be divided into four parts.",
    "zh": "首先，让我们建立最重要的地图：现代模型能力开发通常可以分为四个部分。"
  },
  {
    "id": 15,
    "start": 90.462,
    "end": 103.062,
    "en": "Pre-training lays the general foundation, Mid-training fills knowledge and capability gaps on the target distribution, and SFT and RL then shape behavior according to output requirements and task objectives.",
    "zh": "预训练建立了通用基础，中训练填补了目标分布上的知识和能力缺口，而SFT和RL则根据输出要求和任务目标塑造行为。"
  },
  {
    "id": 16,
    "start": 103.062,
    "end": 108.275,
    "en": "Pre-training: Training on massive internet text to \"predict the next token.",
    "zh": "预训练：在大量互联网文本上进行训练，以“预测下一个标记”"
  },
  {
    "id": 17,
    "start": 108.275,
    "end": 113.825,
    "en": "This step teaches the model language rules, world knowledge, and basic reasoning.",
    "zh": "这一步教会模型语言规则、世界知识和基本推理能力。"
  },
  {
    "id": 18,
    "start": 113.825,
    "end": 120.65,
    "en": "It's like a person who has read all the books in a library—erudite, but not yet good at answering questions.",
    "zh": "这就像一个读完了图书馆所有书籍的人——博学，但尚未擅长回答问题。"
  },
  {
    "id": 19,
    "start": 120.65,
    "end": 127.825,
    "en": "This is the most expensive step (often tens of millions of dollars) and the foundation of all capabilities.",
    "zh": "这是最昂贵的步骤（通常需要数千万美元），也是所有能力的基础。"
  },
  {
    "id": 20,
    "start": 127.825,
    "end": 141.912,
    "en": "Mid-training (intermediate training or continued pre-training): Starting from an existing base model, continue language modeling on target-language data, domain documents, code, long contexts, or deliberately designed capability data.",
    "zh": "中等训练（中间训练或持续预训练）：从现有的基础模型开始，在目标语言数据、领域文档、代码、长上下文或特意设计的能力数据上继续进行语言建模。"
  },
  {
    "id": 21,
    "start": 141.912,
    "end": 149.7,
    "en": "It does not rebuild the foundation from scratch; it fills in the \"textbook chapters\" that general pre-training covered poorly.",
    "zh": "它不会从头重建基础；而是补充一般预训练覆盖得不够好的“教科书章节”。"
  },
  {
    "id": 22,
    "start": 149.7,
    "end": 160.312,
    "en": "It uses less data and compute than full pre-training and is better suited than SFT to absorbing large bodies of knowledge and forming the basic representations a task requires.",
    "zh": "它使用的数据和计算量比完整预训练少，比SFT更适合吸收大量知识并形成任务所需的基本表示。"
  },
  {
    "id": 23,
    "start": 160.312,
    "end": 173.125,
    "en": "Some teams treat Mid-training as the latter part of pre-training; others call it Continued Pre-training (CPT), Domain-Adaptive Pre-training (DAPT), or Task-Adaptive Pre-training (TAPT).",
    "zh": "一些团队将中等训练视为预训练的后半部分；另一些则称之为持续预训练（CPT）、领域自适应预训练（DAPT）或任务自适应预训练（TAPT）。"
  },
  {
    "id": 24,
    "start": 173.125,
    "end": 182.225,
    "en": "Supervised Fine-Tuning (SFT): Training the model on labeled input-output pairs, much like a teacher giving a student standard answers to imitate.",
    "zh": "监督微调（SFT）：在带标签的输入-输出对上训练模型，就像老师给学生标准答案供其模仿一样。"
  },
  {
    "id": 25,
    "start": 182.225,
    "end": 191.162,
    "en": "Thousands to tens of thousands of question–reference response pairs teach the model what format, style, and process to use when responding.",
    "zh": "数千到数万个问答对教会模型在回应时使用什么格式、风格和流程。"
  },
  {
    "id": 26,
    "start": 191.162,
    "end": 199.162,
    "en": "This step transforms a knowledgeable and capable model into an assistant that understands instructions and produces well-structured outputs.",
    "zh": "这一步将一个知识丰富且能力强的模型转变为理解指令并能生成结构良好输出的助手。"
  },
  {
    "id": 27,
    "start": 199.162,
    "end": 204.787,
    "en": "It is cheap, fast, and stable, and almost all deployed models undergo it.",
    "zh": "它成本低、速度快且稳定，几乎所有部署的模型都会经历这一步。"
  },
  {
    "id": 28,
    "start": 204.787,
    "end": 214.275,
    "en": "Reinforcement Learning (RL): Letting the model try repeatedly and improve from rewards and penalties, much like reviewing exercises according to their scores.",
    "zh": "强化学习（RL）：让模型反复尝试并通过奖励和惩罚来改进，就像根据分数复习练习题一样。"
  },
  {
    "id": 29,
    "start": 214.275,
    "end": 225.662,
    "en": "Instead of directly imitating the tokens of a standard response, RL lets the model try on its own, increasing the probability of good behavior and decreasing the probability of poor behavior.",
    "zh": "与直接模仿标准响应的标记不同，强化学习让模型自己尝试，从而增加良好行为的概率，减少不良行为的概率。"
  },
  {
    "id": 30,
    "start": 225.662,
    "end": 241.562,
    "en": "When the base model can already succeed occasionally, and the rewards, data, and environment are well designed, this step can improve decisions in unseen situations—and it is also the step that takes up the most space in this chapter and requires the most engineering effort.",
    "zh": "当基础模型偶尔能够成功，并且奖励、数据和环境设计得当，这一步可以改善在未见过的情况下的决策——这也是本章内容最多、工程工作量最大的一步。"
  },
  {
    "id": 31,
    "start": 241.732,
    "end": 258.344,
    "en": "An intuitive analogy: Pre-training is a general education, Mid-training is an intensive study of specialist textbooks, SFT is a teacher demonstrating solution and communication conventions, and RL is working problems yourself and refining your approach from the outcomes.",
    "zh": "一个直观的类比：预训练就像通识教育，中训练是对专业教材的深入学习，SFT 是老师演示解题和沟通规范，而 RL 则是自己解决这些问题，并从结果中优化方法。"
  },
  {
    "id": 32,
    "start": 258.294,
    "end": 261.944,
    "en": "This chapter has two main threads that run throughout.",
    "zh": "本章有两个主要线索贯穿始终。"
  },
  {
    "id": 33,
    "start": 261.944,
    "end": 266.107,
    "en": "Please remember them, as all subsequent content serves them:",
    "zh": "请记住它们，因为后续所有内容都是为它们服务的："
  },
  {
    "id": 34,
    "start": 266.107,
    "end": 274.432,
    "en": "Thread One: In this chapter's controlled experiments, SFT tends to memorize demonstrations while RL generalizes better.",
    "zh": "第一线索：在本章的控制实验中，SFT 容易记忆示例，而 RL 更能泛化。"
  },
  {
    "id": 35,
    "start": 274.432,
    "end": 286.794,
    "en": "Under the same task, model, and budget in GeneralPoints and V-IRL, SFT overfits the training answers, while RL more often learns a transferable strategy under the tested distribution shifts.",
    "zh": "在 GeneralPoints 和 V-IRL 的相同任务、模型和预算下，SFT 会过度拟合训练答案，而 RL 更常在测试分布变化下学到可迁移的策略。"
  },
  {
    "id": 36,
    "start": 286.794,
    "end": 301.907,
    "en": "This is a measured result under those experimental conditions, not a universal property of SFT and RL: SFT can generalize with diverse data and appropriate regularization, and RL can overfit when its reward or environment is biased.",
    "zh": "这是在这些实验条件下得出的测量结果，而不是 SFT 和 RL 的普遍属性：SFT 在数据多样性和适当正则化的情况下也可以泛化，而 RL 在奖励或环境有偏差时也可能过拟合。"
  },
  {
    "id": 37,
    "start": 301.907,
    "end": 316.732,
    "en": "This chapter uses \"SFT memorizes, RL generalizes\" as shorthand for these experiments, and the section \"From Pre-training to RL: An Overview of the Four Training Stages\" explains why the two objectives can produce that difference.",
    "zh": "本章用“SFT 记忆，RL 泛化”来概括这些实验，而章节《从预训练到 RL：四个训练阶段的概述》解释了为什么这两个目标会产生这种差异。"
  },
  {
    "id": 38,
    "start": 316.732,
    "end": 321.269,
    "en": "Thread Two: Data and environment matter more than algorithms.",
    "zh": "第二线索：数据和环境比算法更重要。"
  },
  {
    "id": 39,
    "start": 321.269,
    "end": 325.844,
    "en": "This is the industry's most counterintuitive and most valuable lesson.",
    "zh": "这是业界最反直觉但最有价值的一课。"
  },
  {
    "id": 40,
    "start": 325.844,
    "end": 332.707,
    "en": "With off-the-shelf RL algorithms such as PPO and GRPO, knowing how to use them is enough.",
    "zh": "使用 PPO 和 GRPO 等现成的 RL 算法，知道如何使用它们就足够了。"
  },
  {
    "id": 41,
    "start": 332.707,
    "end": 347.557,
    "en": "What actually determines success are three things: whether the Mid-training corpus repairs the foundation, whether the demonstration data establishes a behavioral protocol, and whether the simulation environment and reward provide reliable trial-and-error feedback.",
    "zh": "真正决定成功的是三件事：中训练语料是否修复了基础，示范数据是否建立了行为协议，以及模拟环境和奖励是否提供了可靠的试错反馈。"
  },
  {
    "id": 42,
    "start": 347.557,
    "end": 354.032,
    "en": "In many scenarios, if the first two kinds of data are good enough, RL is not needed at all.",
    "zh": "在许多场景中，如果前两种数据足够好，根本不需要 RL。"
  },
  {
    "id": 43,
    "start": 354.032,
    "end": 362.582,
    "en": "This chapter will repeatedly redirect your attention from \"which algorithm should I tune?\" to \"have the data and environment been set up correctly?",
    "zh": "本章会反复引导你从“我应该调哪个算法？”转向“数据和环境是否设置正确？”"
  },
  {
    "id": 44,
    "start": 362.582,
    "end": 368.907,
    "en": "Reading Guide: The content of this chapter is divided into two paths based on the reader's background:",
    "zh": "阅读指南：本章内容根据读者背景分为两个路径："
  },
  {
    "id": 45,
    "start": 368.907,
    "end": 380.394,
    "en": "Agent Application Developers (don't need to train models themselves): Start by reading the opening \"From Pre-training to RL: An Overview of the Four Training Stages\" to build a global understanding.",
    "zh": "智能体应用开发者（不需要自己训练模型）：首先阅读开头的《从预训练到 RL：四个训练阶段的概述》，以建立全局理解。"
  },
  {
    "id": 46,
    "start": 380.394,
    "end": 389.519,
    "en": "Then you can skip the two [Optional Reading] sections on classic RL and pre-training background and continue from the standalone Mid-training section.",
    "zh": "然后你可以跳过关于经典强化学习和预训练背景的两个[可选阅读]部分，直接从独立的中训练部分开始。"
  },
  {
    "id": 47,
    "start": 389.519,
    "end": 406.819,
    "en": "Focus on the decision framework for choosing Mid-training, SFT, and RL, as well as the judgment that \"data and environment are more important than algorithms\"—these insights will influence your design decisions in Harness engineering, including when a prompt is enough and when training is worthwhile.",
    "zh": "关注选择中训练、SFT和强化学习的决策框架，以及“数据和环境比算法更重要”的判断——这些见解将影响你在Harness工程中的设计决策，包括何时只需提示，何时值得进行训练。"
  },
  {
    "id": 48,
    "start": 406.819,
    "end": 411.182,
    "en": "Model Training Engineers: Read sequentially from the beginning.",
    "zh": "模型训练工程师：请从头开始按顺序阅读。"
  },
  {
    "id": 49,
    "start": 411.182,
    "end": 417.982,
    "en": "The two [Optional Reading] sections provide complete background on reinforcement learning and pre-training.",
    "zh": "这两个[可选阅读]部分提供了关于强化学习和预训练的完整背景。"
  },
  {
    "id": 50,
    "start": 417.982,
    "end": 422.494,
    "en": "The subsequent experiments provide reproducible training schemes.",
    "zh": "后续实验提供了可复现的训练方案。"
  },
  {
    "id": 51,
    "start": 422.494,
    "end": 427.319,
    "en": "From Pre-training to RL: An Overview of the Four Training Stages.",
    "zh": "从预训练到强化学习：四个训练阶段的概述。"
  },
  {
    "id": 52,
    "start": 427.319,
    "end": 433.044,
    "en": "The introduction gave you the four-part map; this section works through the mechanics of each part.",
    "zh": "引言给了你四部分的路线图；本节将详细讲解每个部分的机制。"
  },
  {
    "id": 53,
    "start": 433.044,
    "end": 437.919,
    "en": "They differ in their data, optimization objectives, and costs.",
    "zh": "它们在数据、优化目标和成本方面有所不同。"
  },
  {
    "id": 54,
    "start": 437.919,
    "end": 442.219,
    "en": "Understanding those differences is the key to the entire chapter.",
    "zh": "理解这些差异是本章的关键。"
  },
  {
    "id": 55,
    "start": 442.219,
    "end": 446.519,
    "en": "Table 8-1 gives the overview; the details follow.",
    "zh": "表8-1给出了概述；细节随后呈现。"
  },
  {
    "id": 56,
    "start": 446.519,
    "end": 450.932,
    "en": "Table 8-1 The Four Parts of Model Capability Development",
    "zh": "表8-1 模型能力发展的四个部分"
  },
  {
    "id": 57,
    "start": 450.932,
    "end": 468.244,
    "en": "Stage: Pre-training; Data Used: Massive raw internet text; Optimization Objective: Predict the next token; What Is Learned: Language rules, world knowledge, basic reasoning; Typical Cost: Very High (millions to tens of millions USD).",
    "zh": "阶段：预训练；使用的数据：大量原始互联网文本；优化目标：预测下一个标记；所学内容：语言规则、世界知识、基本推理；典型成本：非常高（数百万到数千万美元）。"
  },
  {
    "id": 58,
    "start": 468.244,
    "end": 493.157,
    "en": "Stage: Mid-training; Data Used: Target-language/domain/capability corpora plus retention data; Optimization Objective: Continue next-token prediction (usually with loss on every token); What Is Learned: Fill gaps in domain knowledge, language, and foundational capabilities; Typical Cost: Medium to high, depending on token volume and whether all parameters are trained.",
    "zh": "阶段：中训练；使用的数据：目标语言/领域/能力语料库加上保留数据；优化目标：继续预测下一个标记（通常对每个标记计算损失）；所学内容：填补领域知识、语言和基础能力的空白；典型成本：中等至高，取决于标记数量以及是否训练所有参数。"
  },
  {
    "id": 59,
    "start": 493.324,
    "end": 514.949,
    "en": "Stage: SFT; Data Used: Thousands to tens of thousands of \"input-output\" demonstration pairs; Optimization Objective: Predict the next token (loss calculated only on the response); What Is Learned: Instruction following, output format, style, process protocol; Typical Cost: Low (hours to days).",
    "zh": "阶段：SFT；使用的数据：数千到数万个“输入-输出”示例对；优化目标：预测下一个标记（仅对响应计算损失）；所学内容：指令遵循、输出格式、风格、流程协议；典型成本：低（数小时到数天）。"
  },
  {
    "id": 60,
    "start": 514.899,
    "end": 535.449,
    "en": "Stage: RL; Data Used: Task and environment + reward signal (reference answers optional); Optimization Objective: Maximize expected reward; What Is Learned: Transferable decision-making strategy, newly discovered solutions; Typical Cost: High (often tens to hundreds of times that of SFT).",
    "zh": "阶段：强化学习；使用的数据：任务和环境 + 奖励信号（参考答案可选）；优化目标：最大化预期奖励；所学内容：可迁移的决策策略、新发现的解决方案；典型成本：高（通常是SFT的数十到数百倍）。"
  },
  {
    "id": 61,
    "start": 535.449,
    "end": 539.261,
    "en": "What Pre-training Does: Predicting the Next Token.",
    "zh": "预训练的作用：预测下一个标记。"
  },
  {
    "id": 62,
    "start": 539.261,
    "end": 547.674,
    "en": "All the \"intelligence\" of modern large models is built on a task so simple it's surprising: Next Token Prediction (NTP).",
    "zh": "现代大型模型的所有“智能”都建立在一个看似简单得令人惊讶的任务之上：下一个标记预测（NTP）"
  },
  {
    "id": 63,
    "start": 547.674,
    "end": 552.124,
    "en": "Show the model the first part of a text and have it guess the next token.",
    "zh": "向模型展示文本的前半部分，让它猜测下一个标记。"
  },
  {
    "id": 64,
    "start": 552.124,
    "end": 559.774,
    "en": "For example, given the input \"The capital of China is,\" the model should assign a high probability to \"Beijing.",
    "zh": "例如，给定输入“中国的首都是”，模型应赋予“北京”很高的概率。"
  },
  {
    "id": 65,
    "start": 559.774,
    "end": 565.136,
    "en": "Each time the model guesses, it compares its prediction to the actual next token.",
    "zh": "每次模型猜测时，它都会将其预测与实际的下一个标记进行比较。"
  },
  {
    "id": 66,
    "start": 565.136,
    "end": 573.274,
    "en": "The larger the difference (called the loss), the more it adjusts its parameters to guess more accurately in similar contexts next time.",
    "zh": "差异越大（称为损失），它就越会调整参数，以便在类似情境下下次预测更准确。"
  },
  {
    "id": 67,
    "start": 573.274,
    "end": 591.624,
    "en": "By repeatedly doing this on trillions of tokens of internet text, the model is forced to learn grammar, facts, logic, and even basic reasoning—because to consistently guess the next token correctly across a vast range of contexts, there's no shortcut; it must truly \"digest\" the patterns in the text.",
    "zh": "通过在数万亿个互联网文本标记上反复执行此操作，模型被迫学习语法、事实、逻辑，甚至基本推理——因为要在各种广泛的情境中一致地正确预测下一个标记，没有捷径；它必须真正“消化”文本中的模式。"
  },
  {
    "id": 68,
    "start": 591.624,
    "end": 600.936,
    "en": "There's a key point to remember that will carry through to Mid-training, SFT, and RL: The model's output is essentially a probability distribution.",
    "zh": "有一个关键点需要记住，这将贯穿中训练、SFT和RL：模型的输出本质上是一个概率分布。"
  },
  {
    "id": 69,
    "start": 600.936,
    "end": 607.711,
    "en": "Given the preceding text, the model assigns a probability to every possible token in its vocabulary.",
    "zh": "给定前面的文本，模型会为词汇表中的每个可能标记分配一个概率。"
  },
  {
    "id": 70,
    "start": 607.711,
    "end": 616.699,
    "en": "Training,\" at its core, is adjusting this probability distribution—making the probability of desired tokens higher and undesired ones lower.",
    "zh": "“训练”的核心，是调整这个概率分布——提高期望标记的概率，降低不期望标记的概率。"
  },
  {
    "id": 71,
    "start": 616.699,
    "end": 623.424,
    "en": "The difference among the four parts lies only in \"what is desired\" and \"what signal defines desired.",
    "zh": "四部分之间的差异仅在于“什么是期望的”以及“什么信号定义了期望”。"
  },
  {
    "id": 72,
    "start": 623.424,
    "end": 636.924,
    "en": "After pre-training, the model is erudite but not user-friendly: if you ask it a question, it might continue generating more questions instead of answering—because in internet text, a question is often followed by another question.",
    "zh": "预训练之后，模型博学但不够用户友好：如果你问它一个问题，它可能会继续生成更多问题而不是回答——因为在互联网文本中，一个问题通常会跟着另一个问题。"
  },
  {
    "id": 73,
    "start": 636.924,
    "end": 641.886,
    "en": "It hasn't yet learned the protocol of \"when asked a question, you should answer.",
    "zh": "它尚未学习“当被问及一个问题时，应该回答”的规则。"
  },
  {
    "id": 74,
    "start": 641.886,
    "end": 646.686,
    "en": "The Essence of Mid-training: Continue Learning on the Target Distribution.",
    "zh": "中训练的本质：在目标分布上继续学习。"
  },
  {
    "id": 75,
    "start": 646.686,
    "end": 652.049,
    "en": "General pre-training cannot cover every language, domain, and capability.",
    "zh": "通用预训练无法涵盖每种语言、每个领域和每种能力。"
  },
  {
    "id": 76,
    "start": 652.049,
    "end": 672.374,
    "en": "If a model can barely read Korean documents, does not understand an enterprise's internal protocols, or has never formed the code and long-context representations required by the target task, skipping this stage and jumping straight to teaching it \"how to answer\" or rewarding only success and failure cannot fill in those missing foundational capabilities.",
    "zh": "如果一个模型只能勉强阅读韩语文档，不理解企业的内部协议，或者从未形成目标任务所需的代码和长上下文表示，跳过这一阶段直接教它‘如何回答’或仅奖励成功与失败，无法弥补这些缺失的基础能力。"
  },
  {
    "id": 77,
    "start": 672.374,
    "end": 682.124,
    "en": "Mid-training retains pre-training's next-token objective but narrows the data distribution to the target domain and mixes in general retention data to control forgetting.",
    "zh": "中训练保留了预训练的下一个词预测目标，但将数据分布缩小到目标领域，并混合通用保留数据以控制遗忘。"
  },
  {
    "id": 78,
    "start": 682.124,
    "end": 692.361,
    "en": "It asks whether the model possesses the knowledge and foundational capabilities needed to complete the task—not what the response should look like or which policy earns the highest reward.",
    "zh": "它询问的是模型是否具备完成任务所需的知识和基础能力——而不是回答应该是什么样子或哪种策略能获得最高奖励。"
  },
  {
    "id": 79,
    "start": 692.361,
    "end": 700.224,
    "en": "Mid-training and SFT may appear to use similar loss functions, but their data organization and supervision density differ.",
    "zh": "中训练和监督微调（SFT）可能看起来使用了类似的损失函数，但它们的数据组织方式和监督密度不同。"
  },
  {
    "id": 80,
    "start": 700.224,
    "end": 708.236,
    "en": "Mid-training usually treats whole documents, code, or derivations as learning targets and computes loss over many tokens.",
    "zh": "中训练通常将整个文档、代码或推导过程作为学习目标，并在多个词上计算损失。"
  },
  {
    "id": 81,
    "start": 708.236,
    "end": 715.661,
    "en": "SFT organizes data as input-output demonstrations and usually computes loss only on response tokens.",
    "zh": "SFT 将数据组织为输入输出示例，并且通常只在响应词上计算损失。"
  },
  {
    "id": 82,
    "start": 715.661,
    "end": 729.761,
    "en": "It is technically possible to make a model memorize some facts through a small question-answer SFT set, but this repeatedly reinforces only a few access paths: the model may memorize the questions without forming broadly accessible knowledge.",
    "zh": "技术上可以借助少量问答 SFT 数据让模型记住一些事实，但这会反复强化少数访问路径：模型可能记住问题，但没有形成广泛可访问的知识。"
  },
  {
    "id": 83,
    "start": 729.761,
    "end": 739.236,
    "en": "Prefer Mid-training when absorbing large, interconnected bodies of domain knowledge; prefer RAG when the knowledge must remain updateable and traceable.",
    "zh": "当需要吸收大量相互关联的领域知识时，优先选择中训练；当知识必须保持可更新和可追溯时，优先选择 RAG。"
  },
  {
    "id": 84,
    "start": 739.236,
    "end": 743.999,
    "en": "The Essence of SFT: \"Predict the Next Token\" with Different Data.",
    "zh": "SFT 的本质：用不同的数据预测下一个词。"
  },
  {
    "id": 85,
    "start": 744.148,
    "end": 755.26,
    "en": "This is the first key insight to grasp in this chapter: Mathematically, SFT and pre-training are the same task—both predict the next token and minimize the same loss function.",
    "zh": "这是本章第一个关键见解：数学上，SFT 和预训练是同一个任务——都预测下一个词并最小化相同的损失函数。"
  },
  {
    "id": 86,
    "start": 755.21,
    "end": 760.16,
    "en": "Many beginners think SFT is a completely new method, but it's not.",
    "zh": "许多初学者认为 SFT 是一种完全新的方法，但并非如此。"
  },
  {
    "id": 87,
    "start": 760.16,
    "end": 765.01,
    "en": "The difference between SFT and pre-training lies in just two things:",
    "zh": "SFT 与预训练之间的差异仅在于两件事："
  },
  {
    "id": 88,
    "start": 765.01,
    "end": 766.71,
    "en": "Different Data.",
    "zh": "不同的数据。"
  },
  {
    "id": 89,
    "start": 766.71,
    "end": 779.073,
    "en": "Pre-training uses raw internet text (unstructured, containing everything); SFT uses carefully prepared \"input-output\" pairs, uniformly formatted as \"user question → ideal answer.",
    "zh": "预训练使用原始互联网文本（非结构化，包含一切内容）；SFT 使用精心准备的“输入-输出”对，统一格式为“用户问题 → 理想答案”。"
  },
  {
    "id": 90,
    "start": 779.073,
    "end": 788.635,
    "en": "The model continues \"predicting the next token\" on these demonstrations, thereby learning the protocol of \"how to structure a response when asked a question.",
    "zh": "模型继续在这些示例上“预测下一个词”，从而学习“当被问及一个问题时如何构建回答”的规范。"
  },
  {
    "id": 91,
    "start": 788.635,
    "end": 793.16,
    "en": "Loss is calculated only on the \"response\" (loss masking).",
    "zh": "损失仅在“回答”部分计算（损失掩码）。"
  },
  {
    "id": 92,
    "start": 793.16,
    "end": 797.873,
    "en": "An SFT sample consists of a question and a labeled response.",
    "zh": "SFT样本包含一个问题和一个标记的回答。"
  },
  {
    "id": 93,
    "start": 797.873,
    "end": 803.198,
    "en": "We don't want the model to learn \"how to ask a question,\" only \"how to answer.",
    "zh": "我们不希望模型学习“如何提问”，而只是学习“如何回答”。"
  },
  {
    "id": 94,
    "start": 803.198,
    "end": 812.035,
    "en": "So, when calculating the loss, the tokens in the question part are masked, and gradients are backpropagated only through the response portion.",
    "zh": "因此，在计算损失时，问题部分的标记会被掩码，梯度仅通过回答部分进行反向传播。"
  },
  {
    "id": 95,
    "start": 812.035,
    "end": 817.31,
    "en": "This is the only substantive engineering difference between SFT and pre-training.",
    "zh": "这是SFT与预训练之间唯一的实质性工程差异。"
  },
  {
    "id": 96,
    "start": 817.31,
    "end": 832.26,
    "en": "Once you see this, it becomes clear why SFT can exhibit memorization on limited demonstrations: its optimization goal is to maximize the probability of every token in the labeled response, reproducing the demonstration as closely as possible.",
    "zh": "一旦你理解了这一点，就会明白为什么SFT在有限演示中可能会表现出记忆能力：它的优化目标是最大化每个标记回答中的标记概率，尽可能精确地复制演示。"
  },
  {
    "id": 97,
    "start": 832.26,
    "end": 839.735,
    "en": "For tasks with clear goals and fixed formats, this is extremely efficient—a few thousand examples suffice.",
    "zh": "对于目标明确且格式固定的任务，这非常高效——只需几千个示例就足够了。"
  },
  {
    "id": 98,
    "start": 839.735,
    "end": 849.46,
    "en": "But when coverage and diversity are insufficient, the model may overfit surface patterns or shortcuts in the demonstrations and lose performance under distribution shift.",
    "zh": "但当覆盖率和多样性不足时，模型可能会过度拟合演示中的表面模式或捷径，在分布变化下性能会下降。"
  },
  {
    "id": 99,
    "start": 849.46,
    "end": 858.66,
    "en": "In a nutshell, SFT uses extremely high sample efficiency to encode a stable input-to-output mapping and protocol in the model's parameters.",
    "zh": "简而言之，SFT 使用极高的样本效率在模型参数中编码稳定的输入到输出的映射和协议。"
  },
  {
    "id": 100,
    "start": 858.66,
    "end": 870.123,
    "en": "It encodes protocol knowledge—how to say or do something, including format, style, and process—rather than large amounts of factual knowledge—what the model knows.",
    "zh": "它编码的是协议知识——如何说或做某事，包括格式、风格和流程——而不是大量事实知识——模型知道什么。"
  },
  {
    "id": 101,
    "start": 870.123,
    "end": 873.76,
    "en": "The latter relies on pre-training or RAG.",
    "zh": "后者依赖于预训练或RAG。"
  },
  {
    "id": 102,
    "start": 873.76,
    "end": 877.76,
    "en": "Training Cost: LoRA Parameter-Efficient Fine-Tuning.",
    "zh": "训练成本：LoRA 参数高效微调。"
  },
  {
    "id": 103,
    "start": 877.76,
    "end": 890.71,
    "en": "Both SFT and the subsequent RL require updating model parameters, and full-parameter fine-tuning has high VRAM requirements (needing to store gradients and optimizer states for billions of parameters).",
    "zh": "SFT 以及后续的 RL 都需要更新模型参数，而全参数微调对 VRAM 的需求很高（需要存储数十亿参数的梯度和优化器状态）。"
  },
  {
    "id": 104,
    "start": 890.71,
    "end": 903.448,
    "en": "LoRA (Low-Rank Adaptation) is the most common cost-saving method: instead of modifying the large original weight matrices, it attaches a small \"patch\" (low-rank matrix) to learn the task.",
    "zh": "LoRA（低秩适应）是最常见的节省成本的方法：它不修改大型原始权重矩阵，而是附加一个小型“补丁”（低秩矩阵）来学习任务。"
  },
  {
    "id": 105,
    "start": 903.448,
    "end": 910.66,
    "en": "The parameter count is only 1%–5% of the original, yet it can approach the performance of full fine-tuning.",
    "zh": "参数量仅为原来的 1%–5%，却可以接近全微调的性能。"
  },
  {
    "id": 106,
    "start": 910.66,
    "end": 920.485,
    "en": "Because the original weights are frozen, LoRA also causes less perturbation to the base model's existing capabilities, reducing the risk of catastrophic forgetting.",
    "zh": "由于原始权重被冻结，LoRA也会对基础模型的现有能力造成较少的扰动，从而降低灾难性遗忘的风险。"
  },
  {
    "id": 107,
    "start": 920.485,
    "end": 923.298,
    "en": "A few validated rules of thumb",
    "zh": "一些经过验证的实用原则"
  },
  {
    "id": 108,
    "start": 923.298,
    "end": 927.96,
    "en": "When to Repair the Foundation Before Applying SFT or RL.",
    "zh": "在应用SFT或RL之前，何时应修复基础模型"
  },
  {
    "id": 109,
    "start": 928.132,
    "end": 933.469,
    "en": "An RL policy does not directly imitate the tokens of a reference response.",
    "zh": "强化学习策略不会直接模仿参考回答的标记（tokens）"
  },
  {
    "id": 110,
    "start": 933.419,
    "end": 942.744,
    "en": "It uses rewards to evaluate responses the model generates itself, although reference answers or preference data may still be used to calculate that reward.",
    "zh": "它使用奖励来评估模型自身生成的回答，尽管参考答案或偏好数据仍可能用于计算该奖励"
  },
  {
    "id": 111,
    "start": 942.744,
    "end": 952.382,
    "en": "Learning from this signal requires at least two preconditions: the output must be verifiable, and the current policy must occasionally explore valuable behavior.",
    "zh": "从这一信号中学习至少需要两个前提条件：输出必须可验证，且当前策略必须偶尔探索有价值的行为"
  },
  {
    "id": 112,
    "start": 952.382,
    "end": 955.594,
    "en": "The first precondition is format support.",
    "zh": "第一个前提是格式支持"
  },
  {
    "id": 113,
    "start": 955.594,
    "end": 964.594,
    "en": "If the task requires JSON or a tool call and the model emits unparseable text, the reward function cannot even tell success from failure.",
    "zh": "如果任务需要JSON或工具调用，而模型输出的是无法解析的文本，奖励函数甚至无法区分成功与失败"
  },
  {
    "id": 114,
    "start": 964.594,
    "end": 977.894,
    "en": "SFT can first teach the model to produce correctly structured outputs: a small number of demonstrations stabilizes the format and basic procedure so that the reward can be computed, after which RL can optimize the policy.",
    "zh": "SFT可以首先教会模型生成结构正确的输出：少量示例可以稳定格式和基本流程，使奖励得以计算，之后RL可以优化策略"
  },
  {
    "id": 115,
    "start": 977.894,
    "end": 982.607,
    "en": "This is the familiar \"SFT first, RL second\" pattern.",
    "zh": "这就是熟悉的“先SFT，后RL”模式"
  },
  {
    "id": 116,
    "start": 982.607,
    "end": 987.219,
    "en": "The second, more fundamental precondition is capability support.",
    "zh": "第二个、更根本的前提是能力支持"
  },
  {
    "id": 117,
    "start": 987.219,
    "end": 993.607,
    "en": "Sample held-out tasks at a temperature close to the training setup and measure pass@1 and pass@k.",
    "zh": "在接近训练设置温度的情况下，对保留的任务进行采样，并测量pass@1和pass@k"
  },
  {
    "id": 118,
    "start": 993.607,
    "end": 1003.269,
    "en": "If the probability of success on one sample is p, then under approximately independent sampling the probability of at least one success in k samples is",
    "zh": "如果一个样本的成功概率为p，则在近似独立采样的情况下，k个样本中至少有一个成功的概率为"
  },
  {
    "id": 119,
    "start": 1003.269,
    "end": 1010.107,
    "en": "\\operatorname{pass@}k = 1-(1-p)^k.",
    "zh": "\\operatorname{pass@}k = 1-(1-p)^k."
  },
  {
    "id": 120,
    "start": 1010.107,
    "end": 1024.082,
    "en": "If pass@1 is low but pass@k rises clearly with k, the correct policy is already in the model's distribution but has too little probability mass; RL, rejection sampling, or distillation has something to amplify.",
    "zh": "如果pass@1较低但pass@k随着k明显上升，说明正确策略已经在模型的分布中，但其概率质量太低；RL、拒绝采样或蒸馏可以对其进行放大。"
  },
  {
    "id": 121,
    "start": 1024.082,
    "end": 1035.482,
    "en": "Conversely, if empirical pass@k remains near zero at a reasonable k, sampling temperature, and task coverage, the base model can hardly generate a successful trajectory.",
    "zh": "相反，如果在合理的k值、采样温度和任务覆盖范围内，empirical pass@k仍然接近于零，则基础模型几乎无法生成成功的轨迹。"
  },
  {
    "id": 122,
    "start": 1035.482,
    "end": 1047.882,
    "en": "With only a terminal 0/1 reward, a GRPO rollout group will likely be all zero, eliminating within-group advantage; PPO likewise sees no positive example showing where to move.",
    "zh": "仅具有终端0/1奖励的GRPO rollout组很可能会全部为零，从而消除组内优势；PPO同样看不到任何正例说明应向何处移动。"
  },
  {
    "id": 123,
    "start": 1047.882,
    "end": 1056.107,
    "en": "Increasing the sample count merely waits roughly 1/p trials for an accidental success, and quickly becomes impractical.",
    "zh": "增加样本数量只是大致等待1/p次试验才能偶然成功，并且很快变得不切实际。"
  },
  {
    "id": 124,
    "start": 1056.107,
    "end": 1059.044,
    "en": "At that point, ask what is missing.",
    "zh": "在此时，询问缺少的是什么。"
  },
  {
    "id": 125,
    "start": 1059.044,
    "end": 1068.119,
    "en": "If it is domain language, facts, code patterns, or foundational long-context capability, use Mid-training to repair the foundation.",
    "zh": "如果缺少的是领域语言、事实、代码模式或基础的长上下文能力，请使用Mid-training来修复基础。"
  },
  {
    "id": 126,
    "start": 1068.119,
    "end": 1073.782,
    "en": "If the capability exists but cannot be expressed through the interface, use SFT.",
    "zh": "如果该能力存在但无法通过接口表达，请使用SFT。"
  },
  {
    "id": 127,
    "start": 1073.782,
    "end": 1081.319,
    "en": "If the model makes partial progress but cannot reach the endpoint, add verifiable partial rewards or curriculum learning.",
    "zh": "如果模型只能部分进展但无法到达终点，请添加可验证的部分奖励或课程学习。"
  },
  {
    "id": 128,
    "start": 1081.319,
    "end": 1092.057,
    "en": "RL is good at raising the probability of existing but unlikely successful behavior; it is poor at creating knowledge and capabilities the model never learned from an all-zero reward.",
    "zh": "RL擅长提高现有但不太可能成功的行为的概率；它在创建模型从未从全零奖励中学习到的知识和能力方面表现不佳。"
  },
  {
    "id": 129,
    "start": 1092.057,
    "end": 1101.119,
    "en": "One boundary remains important: \"SFT must come first\" is true only when output format or basic behavior has not yet been established.",
    "zh": "一个边界仍然很重要：\"SFT必须先行\"只有在输出格式或基本行为尚未确立时才成立。"
  },
  {
    "id": 130,
    "start": 1101.119,
    "end": 1110.844,
    "en": "Experiment 8-11 shows that Llama-3.2-Vision-11B fails under strict structured-output requirements when trained directly with RL.",
    "zh": "实验8-11显示，当直接使用RL训练时，Llama-3.2-Vision-11B在严格的结构化输出要求下会失败。"
  },
  {
    "id": 131,
    "start": 1110.844,
    "end": 1120.369,
    "en": "A sufficiently strong base model with nonzero success, however, can skip SFT; DeepSeek-R1-Zero is one example.",
    "zh": "然而，一个足够强大的基础模型如果已有非零成功率，可以跳过SFT；DeepSeek-R1-Zero就是一个例子。"
  },
  {
    "id": 132,
    "start": 1120.369,
    "end": 1128.719,
    "en": "Its later cold-start SFT primarily improved readability and language consistency rather than injecting task knowledge for RL.",
    "zh": "其后期的冷启动SFT主要提升了可读性和语言一致性，而不是为RL注入任务知识。"
  },
  {
    "id": 133,
    "start": 1128.719,
    "end": 1135.494,
    "en": "The standalone decision section below gives the fuller Mid-training/SFT/RL workflow.",
    "zh": "下面的独立决策部分给出了更完整的Mid-training/SFT/RL工作流程。"
  },
  {
    "id": 134,
    "start": 1135.494,
    "end": 1141.419,
    "en": "The Essential Difference Between SFT and RL (The Most Important Table in This Chapter).",
    "zh": "SFT与RL之间的本质区别（本章最重要的表格）。"
  },
  {
    "id": 135,
    "start": 1141.419,
    "end": 1148.907,
    "en": "We have used \"SFT memorizes, RL generalizes\" to summarize this chapter's controlled experiments.",
    "zh": "我们用“SFT记忆，RL泛化”来总结本章的受控实验。"
  },
  {
    "id": 136,
    "start": 1148.907,
    "end": 1152.332,
    "en": "Now let's explain why that tendency can appear.",
    "zh": "现在我们来解释为什么会出现这种倾向。"
  },
  {
    "id": 137,
    "start": 1152.332,
    "end": 1155.907,
    "en": "The key is the different optimization objectives:",
    "zh": "关键在于不同的优化目标："
  },
  {
    "id": 138,
    "start": 1155.907,
    "end": 1160.344,
    "en": "SFT maximizes the probability of the labeled response.",
    "zh": "SFT最大化标记响应的概率。"
  },
  {
    "id": 139,
    "start": 1160.344,
    "end": 1166.182,
    "en": "Maximum likelihood pushes the model to reproduce the demonstration for each training sample.",
    "zh": "最大似然会推动模型对每个训练样本重复演示内容。"
  },
  {
    "id": 140,
    "start": 1166.182,
    "end": 1176.944,
    "en": "Diverse, representative demonstrations can teach generalizable features, but limited demonstrations or prompts can also produce overfitting to surface patterns or shortcuts.",
    "zh": "多样且具有代表性的演示可以教授可泛化的特征，但有限的演示或提示也可能导致对表面模式或捷径的过拟合。"
  },
  {
    "id": 141,
    "start": 1176.944,
    "end": 1186.544,
    "en": "In GeneralPoints, the limited demonstrations treated J/Q/K as 10, and performance dropped when those values changed at test time.",
    "zh": "在GeneralPoints中，有限的演示将J/Q/K视为10，当这些值在测试时发生变化时，性能会下降。"
  },
  {
    "id": 142,
    "start": 1186.708,
    "end": 1189.845,
    "en": "RL maximizes expected reward.",
    "zh": "RL最大化期望奖励。"
  },
  {
    "id": 143,
    "start": 1189.795,
    "end": 1195.133,
    "en": "The model explores paths and raises the probability of those that earn high reward.",
    "zh": "模型探索路径，并提高获得高奖励路径的概率。"
  },
  {
    "id": 144,
    "start": 1195.133,
    "end": 1204.045,
    "en": "When the reward faithfully represents the objective and exploration is sufficient, it can discover transferable strategies absent from the demonstrations.",
    "zh": "当奖励忠实地代表目标且探索足够时，它可以发现演示中不存在的可迁移策略。"
  },
  {
    "id": 145,
    "start": 1204.045,
    "end": 1210.883,
    "en": "In GeneralPoints, recomputing the answer when values changed produced better out-of-distribution performance.",
    "zh": "在GeneralPoints中，当数值变化时重新计算答案产生了更好的分布外性能。"
  },
  {
    "id": 146,
    "start": 1210.883,
    "end": 1216.908,
    "en": "Conversely, a biased reward or environment can make RL overfit to shortcuts too.",
    "zh": "相反，有偏见的奖励或环境也可能使RL对捷径过拟合。"
  },
  {
    "id": 147,
    "start": 1216.908,
    "end": 1221.608,
    "en": "Table 8-2 Essential Comparison of SFT and RL",
    "zh": "表8-2 SFT与RL的基本比较"
  },
  {
    "id": 148,
    "start": 1221.608,
    "end": 1234.458,
    "en": "Dimension: Optimization Objective; SFT (Supervised Fine-Tuning): Maximize probability of labeled answer (Maximum Likelihood); RL (Reinforcement Learning): Maximize expected reward.",
    "zh": "维度：优化目标；SFT（监督微调）：最大化标记答案的概率（最大似然）；RL（强化学习）：最大化期望奖励。"
  },
  {
    "id": 149,
    "start": 1234.458,
    "end": 1249.158,
    "en": "Dimension: Training Signal; SFT (Supervised Fine-Tuning): Token-level supervision on a labeled response; RL (Reinforcement Learning): Policy-generated responses or trajectories + outcome- or step-level scalar rewards.",
    "zh": "维度：训练信号；SFT（监督微调）：对标记响应的逐token监督；RL（强化学习）：由策略生成的响应或轨迹 + 结果或步骤级别的标量奖励。"
  },
  {
    "id": 150,
    "start": 1249.158,
    "end": 1262.12,
    "en": "Dimension: Data Form; SFT (Supervised Fine-Tuning): \"Input-Output\" demonstration pairs; RL (Reinforcement Learning): Task and environment + reward signal (reference answers optional).",
    "zh": "维度：数据形式；SFT（监督微调）：\"输入-输出\"演示对；RL（强化学习）：任务和环境 + 奖励信号（参考答案可选）。"
  },
  {
    "id": 151,
    "start": 1262.12,
    "end": 1275.77,
    "en": "Dimension: Direct Optimization Pressure; SFT (Supervised Fine-Tuning): Imitate mappings and protocols in the demonstrations; RL (Reinforcement Learning): Reinforce behaviors and strategies that earn reward.",
    "zh": "维度：直接优化压力；SFT（监督微调）：模仿演示中的映射和协议；RL（强化学习）：强化获得奖励的行为和策略。"
  },
  {
    "id": 152,
    "start": 1275.77,
    "end": 1295.358,
    "en": "Dimension: Under Distribution Shift; SFT (Supervised Fine-Tuning): Depends on demonstration coverage and regularization; limited demonstrations overfit in this chapter's experiments; RL (Reinforcement Learning): Depends on reward, environment, and exploration; transfer was better in this chapter's experiments.",
    "zh": "维度：分布偏移；SFT（监督微调）：依赖于演示的覆盖范围和正则化；本章实验中，有限的演示容易过拟合；RL（强化学习）：依赖于奖励、环境和探索；本章实验中，迁移效果更好。"
  },
  {
    "id": 153,
    "start": 1295.358,
    "end": 1308.52,
    "en": "Dimension: Sample Efficiency; SFT (Supervised Fine-Tuning): High (thousands of examples are effective); RL (Reinforcement Learning): Low (often tens to hundreds of times that of SFT).",
    "zh": "维度：样本效率；SFT（监督微调）：高（数千个示例有效）；RL（强化学习）：低（通常比SFT少十到百倍）。"
  },
  {
    "id": 154,
    "start": 1308.52,
    "end": 1321.008,
    "en": "Dimension: Training Stability; SFT (Supervised Fine-Tuning): High, converges quickly; RL (Reinforcement Learning): Low, prone to oscillation, requires careful tuning.",
    "zh": "维度：训练稳定性；SFT（监督微调）：高，快速收敛；RL（强化学习）：低，容易振荡，需要仔细调整。"
  },
  {
    "id": 155,
    "start": 1321.008,
    "end": 1340.17,
    "en": "Dimension: Best Suited For; SFT (Supervised Fine-Tuning): Solidifying format/style/process, high-quality demonstrations, stable environment; RL (Reinforcement Learning): Needing generalization to new scenarios, exploring optimal strategies, high annotation cost.",
    "zh": "维度：最适合的应用场景；SFT（监督微调）：固化格式/风格/流程，高质量的演示，稳定的环境；RL（强化学习）：需要泛化到新场景，探索最优策略，标注成本高。"
  },
  {
    "id": 156,
    "start": 1340.17,
    "end": 1346.458,
    "en": "Seen through the probability distribution, SFT and RL differ in another important way.",
    "zh": "从概率分布的角度看，SFT和RL在另一个重要方面存在差异。"
  },
  {
    "id": 157,
    "start": 1346.458,
    "end": 1353.858,
    "en": "A question usually admits several families of reasonable answers, each corresponding to a \"mode\" in the distribution.",
    "zh": "一个问题通常有多个合理的答案家族，每个对应分布中的一个“模式”。"
  },
  {
    "id": 158,
    "start": 1353.858,
    "end": 1364.295,
    "en": "Maximum-likelihood SFT learns the demonstrations one by one and therefore often exhibits a mass-covering tendency: it tries to cover the several modes that appear in the training data.",
    "zh": "最大似然SFT逐个学习演示，因此往往表现出覆盖多模式的趋势：它试图覆盖训练数据中出现的多个模式。"
  },
  {
    "id": 159,
    "start": 1364.295,
    "end": 1379.608,
    "en": "RL redistributes probability according to reward and, combined with the common reverse-KL constraint, more readily exhibits a mode-seeking tendency: it concentrates probability on a few high-reward modes rather than reproducing every demonstration evenly.",
    "zh": "RL根据奖励重新分配概率，并结合常见的反KL约束，更容易表现出寻找模式的趋势：它将概率集中在少数高奖励模式上，而不是平均复制每个演示。"
  },
  {
    "id": 160,
    "start": 1379.608,
    "end": 1391.258,
    "en": "This distinction explains their characteristic strengths: SFT is good at covering many known ways of phrasing something, RL is good at searching among candidate behaviors for a high-reward strategy.",
    "zh": "这一区别解释了它们的特点优势：SFT擅长覆盖多种已知的表达方式，RL擅长在候选行为中搜索高奖励策略。"
  },
  {
    "id": 161,
    "start": 1391.258,
    "end": 1404.245,
    "en": "Whether the end result preserves diversity or contracts to a few modes depends on the demonstration distribution, the reward function, the KL direction and coefficient, entropy regularization, and the sampling temperature.",
    "zh": "最终结果是否保留多样性还是收缩为少数模式，取决于演示分布、奖励函数、KL方向和系数、熵正则化以及采样温度。"
  },
  {
    "id": 162,
    "start": 1404.412,
    "end": 1407.899,
    "en": "Post-training also shapes when a model acts.",
    "zh": "后训练也影响模型何时采取行动。"
  },
  {
    "id": 163,
    "start": 1407.849,
    "end": 1416.387,
    "en": "Coding models provide a concrete example: GPT-family and Claude-family models often exhibit different default action thresholds.",
    "zh": "编码模型提供了一个具体例子：GPT系列和Claude系列模型通常表现出不同的默认动作阈值。"
  },
  {
    "id": 164,
    "start": 1416.387,
    "end": 1426.574,
    "en": "The former may read more of a repository before editing; the latter may localize from fewer files, implement first, and then use test feedback to correct course.",
    "zh": "前者可能在编辑前阅读更多代码库；后者可能从更少的文件中定位，先实现再通过测试反馈进行修正。"
  },
  {
    "id": 165,
    "start": 1426.574,
    "end": 1432.999,
    "en": "This is not a matter of anthropomorphizing one model as “cautious” and another as “instinctive.",
    "zh": "这不是将一个模型归类为‘谨慎’，另一个归类为‘直觉型’的问题。"
  },
  {
    "id": 166,
    "start": 1432.999,
    "end": 1443.087,
    "en": "It is a policy in the parameters estimating whether the expected value of reading one more file still exceeds the expected value of submitting and validating the current patch.",
    "zh": "这是一种在参数估计中制定的策略，用于判断阅读更多文件的预期价值是否仍超过提交和验证当前补丁的预期价值。"
  },
  {
    "id": 167,
    "start": 1443.087,
    "end": 1450.937,
    "en": "If SFT demonstrations repeatedly investigate broadly before editing, the model imitates a higher action threshold.",
    "zh": "如果SFT演示反复在编辑前广泛调查，模型会模仿更高的动作阈值。"
  },
  {
    "id": 168,
    "start": 1450.937,
    "end": 1460.587,
    "en": "If process or outcome rewards repeatedly validate rapid localization and an early verifiable loop, probability mass shifts toward earlier action.",
    "zh": "如果过程或结果奖励反复验证快速定位和早期可验证的循环，概率质量会向更早的动作转移。"
  },
  {
    "id": 169,
    "start": 1460.587,
    "end": 1474.699,
    "en": "Experiment 7-9 in Chapter 7 swaps models inside an identical neutral Coding harness and measures this behavior changing with the model: the harness need not enforce a workflow for the model to carry a stable tool-use policy of its own.",
    "zh": "第7章实验7-9在相同的中性编码Harness内交换模型，并测量这种行为随模型的变化：Harness无需强制模型遵循工作流程，模型可以自行保持稳定的工具使用策略。"
  },
  {
    "id": 170,
    "start": 1474.699,
    "end": 1481.074,
    "en": "The harness can modify the policy, but its primary source can reside in the post-trained parameters.",
    "zh": "Harness可以修改策略，但其主要来源可以存在于后训练参数中。"
  },
  {
    "id": 171,
    "start": 1481.074,
    "end": 1492.249,
    "en": "Because vendors do not publish their complete data and reward recipes, the experiment establishes a model-side behavioral difference, not the particular proprietary algorithm that caused it.",
    "zh": "由于供应商不会公布其完整的数据和奖励配方，该实验建立的是模型侧的行为差异，而不是导致该差异的具体专有算法。"
  },
  {
    "id": 172,
    "start": 1492.249,
    "end": 1498.162,
    "en": "Online feedback creates an opportunity to explore strategies beyond the demonstrations.",
    "zh": "在线反馈为探索超越演示的策略提供了机会。"
  },
  {
    "id": 173,
    "start": 1498.162,
    "end": 1507.999,
    "en": "SFT on a fixed dataset uses direct training signals from demonstrations, but it can still combine pre-training knowledge and generalize to unseen inputs.",
    "zh": "在固定数据集上的SFT使用演示中的直接训练信号，但它仍可以结合预训练知识并推广到未见过的输入。"
  },
  {
    "id": 174,
    "start": 1507.999,
    "end": 1517.674,
    "en": "Online RL generates responses from the current policy and receives environmental feedback, so it can directly evaluate candidates absent from the demonstrations.",
    "zh": "在线RL从当前策略生成响应并接收环境反馈，因此它可以直接评估演示中不存在的候选策略。"
  },
  {
    "id": 175,
    "start": 1517.674,
    "end": 1528.949,
    "en": "This does not automatically guarantee a higher ceiling: results depend on the base model, demonstration coverage, reward fidelity, exploration, and optimization stability.",
    "zh": "这并不自动保证更高的上限：结果取决于基础模型、演示覆盖范围、奖励保真度、探索能力和优化稳定性。"
  },
  {
    "id": 176,
    "start": 1528.949,
    "end": 1537.737,
    "en": "The terms \"online/offline\" and the stricter \"on-policy/off-policy\" will be used in the reward and distillation sections.",
    "zh": "术语“在线/离线”以及更严格的“在策略/离策略”将在奖励和蒸馏部分使用。"
  },
  {
    "id": 177,
    "start": 1537.737,
    "end": 1542.924,
    "en": "For now, consider three opportunities created by online feedback:",
    "zh": "目前，考虑在线反馈带来的三个机会："
  },
  {
    "id": 178,
    "start": 1542.924,
    "end": 1547.949,
    "en": "First, it can evaluate candidates beyond a fixed demonstration set.",
    "zh": "首先，它能够评估超出固定演示集的候选策略。"
  },
  {
    "id": 179,
    "start": 1547.949,
    "end": 1556.524,
    "en": "SFT's direct supervision comes from recorded responses; RL can also reinforce new behaviors that the reward function can score.",
    "zh": "SFT的直接监督来自记录的响应；RL也可以强化奖励函数可以评分的新行为。"
  },
  {
    "id": 180,
    "start": 1556.524,
    "end": 1567.974,
    "en": "The \"pushcut\" action in Experiment 8-13 (SimpleVLA-RL) never appeared in human demonstrations, showing the possibility of discovering a strategy outside the data.",
    "zh": "在实验8-13（SimpleVLA-RL）中的“pushcut”动作从未出现在人类演示中，这表明了在数据之外发现策略的可能性。"
  },
  {
    "id": 181,
    "start": 1567.974,
    "end": 1574.649,
    "en": "But the model cannot learn quality the reward cannot recognize or discover a strategy it never explores.",
    "zh": "但模型无法学习质量，因为奖励无法识别或发现它从未探索过的策略。"
  },
  {
    "id": 182,
    "start": 1574.649,
    "end": 1580.087,
    "en": "Second, it can exploit tasks where verification is easier than generation.",
    "zh": "其次，它可以利用验证比生成更容易的任务。"
  },
  {
    "id": 183,
    "start": 1580.087,
    "end": 1587.562,
    "en": "SFT needs a correct answer or good trajectory written first; RL needs a reliable way to judge answer quality.",
    "zh": "SFT需要首先写出正确的答案或良好的轨迹；RL需要一种可靠的方法来判断答案的质量。"
  },
  {
    "id": 184,
    "start": 1587.562,
    "end": 1593.062,
    "en": "Math answers can be checked, code can be tested, and proofs can be verified.",
    "zh": "数学答案可以被检查，代码可以被测试，证明可以被验证。"
  },
  {
    "id": 185,
    "start": 1593.062,
    "end": 1600.012,
    "en": "This asymmetry is a strength of RLVR, but an incomplete verifier can also produce reward hacking.",
    "zh": "这种不对称性是RLVR的优势，但不完整的验证器也可能导致奖励黑客行为。"
  },
  {
    "id": 186,
    "start": 1600.012,
    "end": 1604.499,
    "en": "Third, it can train on states visited by the current policy.",
    "zh": "第三，它可以基于当前策略访问的状态进行训练。"
  },
  {
    "id": 187,
    "start": 1604.499,
    "end": 1614.812,
    "en": "Offline imitation has the classic problem of covariate shift: after a policy leaves the demonstrations and enters unseen states, recovery signals may be absent.",
    "zh": "离线模仿学习有一个经典问题：协变量偏移——当策略离开演示状态进入未见过的状态时，恢复信号可能缺失。"
  },
  {
    "id": 188,
    "start": 1614.812,
    "end": 1626.137,
    "en": "In specific sequential imitation-learning settings, worst-case error can accumulate roughly as T^2 with trajectory length T, while online data aggregation can reduce it to about T.",
    "zh": "在特定的顺序模仿学习设置中，最坏情况下的误差随着轨迹长度T大致呈T²增长，而在线数据聚合可以将其减少到约T。"
  },
  {
    "id": 189,
    "start": 1626.137,
    "end": 1636.949,
    "en": "On-Policy Distillation (see \"Distillation: Improving Sample Efficiency\" later in this chapter) combines this online matching with SFT's dense supervision.",
    "zh": "On-Policy Distillation（参见本章后面的“蒸馏：提高样本效率”）将这种在线匹配与SFT的密集监督结合起来。"
  },
  {
    "id": 190,
    "start": 1636.949,
    "end": 1646.237,
    "en": "To use an analogy: SFT studies an existing map in detail, while RL can use reward as a compass to explore candidate routes beyond it.",
    "zh": "用一个类比来说：SFT详细研究现有的地图，而RL可以使用奖励作为指南针，探索超出地图的候选路线。"
  },
  {
    "id": 191,
    "start": 1646.237,
    "end": 1650.112,
    "en": "An inaccurate map or compass can lead the model astray.",
    "zh": "一张不准确的地图或指南针可能会让模型迷失方向。"
  },
  {
    "id": 192,
    "start": 1650.112,
    "end": 1658.724,
    "en": "Many systems therefore use SFT to establish a stable starting point, then add RL when the reward and environment are trustworthy.",
    "zh": "因此，许多系统使用SFT建立一个稳定的起点，然后在奖励和环境可信时添加RL。"
  },
  {
    "id": 193,
    "start": 1658.884,
    "end": 1663.809,
    "en": "With this panorama in hand, every later section has a place on the map.",
    "zh": "有了这个全景图，后续的每个部分都可以在地图上找到位置。"
  },
  {
    "id": 194,
    "start": 1663.759,
    "end": 1677.034,
    "en": "The next two sections, both [Optional Reading]—\"From Classic RL Agents to Modern Agents\" and \"Model Pre-training Basics\"—fill in the reinforcement learning and pre-training background for readers who want to go deeper.",
    "zh": "接下来的两节，都是[可选阅读]——“从经典RL智能体到现代智能体”和“模型预训练基础”——为希望深入学习的读者补充强化学习和预训练背景知识。"
  },
  {
    "id": 195,
    "start": 1677.034,
    "end": 1682.584,
    "en": "Readers who just want to get their hands on post-training can skip ahead to the SFT section.",
    "zh": "只想动手进行后训练的读者可以跳到SFT部分。"
  },
  {
    "id": 196,
    "start": 1682.584,
    "end": 1687.046,
    "en": "From Classic RL Agents to Modern Agents [Optional Reading].",
    "zh": "从经典强化学习智能体到现代智能体 [可选阅读]。"
  },
  {
    "id": 197,
    "start": 1687.046,
    "end": 1689.621,
    "en": "Agent-Environment Interaction.",
    "zh": "智能体-环境交互。"
  },
  {
    "id": 198,
    "start": 1689.621,
    "end": 1698.621,
    "en": "Reinforcement Learning (RL) is fundamentally about learning how to select actions based on the current situation to maximize cumulative reward.",
    "zh": "强化学习（RL）本质上是通过当前情境来学习如何选择动作，以最大化累计奖励。"
  },
  {
    "id": 199,
    "start": 1698.621,
    "end": 1710.421,
    "en": "Imagine an AI learning to play chess: each move is an action, winning gives a positive reward, losing gives a negative reward, and the cumulative reward is the total gain from the entire game.",
    "zh": "想象一个AI在学习下棋：每一步都是一个动作，赢棋会获得正向奖励，输棋会获得负向奖励，累计奖励是整盘游戏的总收益。"
  },
  {
    "id": 200,
    "start": 1710.421,
    "end": 1721.471,
    "en": "The Agent and the environment interact continuously: at each step, the Agent observes the current state, chooses an action, and the environment produces a new state and gives a reward.",
    "zh": "智能体和环境持续交互：在每一步中，智能体观察当前状态，选择一个动作，环境会生成一个新的状态并给予奖励。"
  },
  {
    "id": 201,
    "start": 1721.471,
    "end": 1736.921,
    "en": "To understand this interaction more intuitively, the following diagram shows the standard RL loop—at each time step, the Agent observes the environment state, outputs an action, and the environment gives a reward and transitions to a new state based on that action.",
    "zh": "为了更直观地理解这种交互，下图展示了标准的强化学习循环——在每个时间步，智能体观察环境状态，输出一个动作，环境根据该动作给出奖励并转移到新状态。"
  },
  {
    "id": 202,
    "start": 1736.921,
    "end": 1743.221,
    "en": "As illustrated in Figure 8-1: Reinforcement Learning Agent-Environment Interaction Loop.",
    "zh": "如图8-1所示：强化学习智能体-环境交互循环。"
  },
  {
    "id": 203,
    "start": 1743.221,
    "end": 1750.346,
    "en": "This interaction produces a trajectory—a complete record of \"state → action → reward → new state → action → reward...",
    "zh": "这种交互产生一条轨迹——完整的“状态 → 动作 → 奖励 → 新状态 → 动作 → 奖励…”记录。"
  },
  {
    "id": 204,
    "start": 1750.346,
    "end": 1755.509,
    "en": "The quality of a policy is ultimately reflected in the quality of the trajectories.",
    "zh": "策略的质量最终体现在轨迹的质量上。"
  },
  {
    "id": 205,
    "start": 1755.509,
    "end": 1765.084,
    "en": "A value function answers the question: \"If I am in this state now and continue acting according to the current policy, how much total reward will I eventually accumulate?",
    "zh": "价值函数回答的问题是：“如果我现在处于这个状态，并且继续按照当前策略行动，我最终会积累多少总奖励？”"
  },
  {
    "id": 206,
    "start": 1765.084,
    "end": 1773.921,
    "en": "This is like an experienced chess player looking at a position and, without calculating to the end, intuitively estimating the winning probability.",
    "zh": "这就像一位经验丰富的棋手观察一个棋局，无需计算到底，就能直觉地估计获胜概率。"
  },
  {
    "id": 207,
    "start": 1773.921,
    "end": 1785.096,
    "en": "When the \"current policy\" is replaced by the \"optimal policy,\" we get the optimal value function, which will be used later in this chapter when discussing the Bellman optimality equation.",
    "zh": "当“当前策略”被替换为“最优策略”时，我们得到最优价值函数，这将在本章后续讨论贝尔曼最优方程时使用。"
  },
  {
    "id": 208,
    "start": 1785.096,
    "end": 1793.596,
    "en": "The boundary between the Agent and the environment follows a simple principle: anything the Agent cannot arbitrarily change belongs to the environment.",
    "zh": "智能体与环境的边界遵循一个简单原则：任何智能体无法随意更改的东西都属于环境。"
  },
  {
    "id": 209,
    "start": 1793.596,
    "end": 1820.871,
    "en": "Two unique features distinguish reinforcement learning from supervised learning (which requires labeled correct answers) and unsupervised learning (which discovers hidden patterns in data): trial-and-error search (the Agent must figure out which actions are good on its own, without a teacher directly providing the correct answer) and delayed reward (the effect of an action may only become apparent many steps later, e.g., the value of a good chess move is only evident at the end of the game).",
    "zh": "强化学习有两个独特特征，使其区别于监督学习（需要标注的正确答案）和无监督学习（发现数据中的隐藏模式）：试错搜索（智能体必须自己弄清楚哪些动作是好的，而不是由老师直接提供正确答案）和延迟奖励（一个动作的效果可能要经过许多步骤后才显现，例如一个好的棋步的价值只在游戏结束时才显现）。"
  },
  {
    "id": 210,
    "start": 1820.871,
    "end": 1831.546,
    "en": "This also brings about the unique exploration-exploitation tradeoff: always taking familiar paths means learning nothing new; always trying randomly means never reaching the goal.",
    "zh": "这也带来了独特的探索与利用权衡：总是走熟悉的路径意味着没有新知识；总是随机尝试意味着永远无法达成目标。"
  },
  {
    "id": 211,
    "start": 1831.546,
    "end": 1836.096,
    "en": "A reinforcement learning system consists of five core elements:",
    "zh": "强化学习系统包含五个核心要素："
  },
  {
    "id": 212,
    "start": 1836.268,
    "end": 1841.593,
    "en": "Action Space: Defines the set of all possible actions the Agent can take.",
    "zh": "动作空间：定义了智能体可以采取的所有可能动作的集合。"
  },
  {
    "id": 213,
    "start": 1841.543,
    "end": 1854.405,
    "en": "Actions can be discrete (e.g., \"which move to make\" in chess, with a finite number of options) or continuous (e.g., \"how many degrees to rotate a joint\" for a robot, a continuous value).",
    "zh": "动作可以是离散的（例如，在棋类游戏中“选择哪一步棋”，有有限数量的选择）或连续的（例如，机器人关节“旋转多少度”，是一个连续值）。"
  },
  {
    "id": 214,
    "start": 1854.405,
    "end": 1860.043,
    "en": "Policy: The Agent's behavioral rule, specifying what to do in a given state.",
    "zh": "策略：智能体的行为规则，说明在给定状态下应该做什么。"
  },
  {
    "id": 215,
    "start": 1860.043,
    "end": 1868.593,
    "en": "A policy can be simple (a lookup table: in state A, execute action X) or complex (a deep neural network).",
    "zh": "策略可以是简单的（查找表：在状态A执行动作X）或复杂的（深度神经网络）。"
  },
  {
    "id": 216,
    "start": 1868.593,
    "end": 1872.793,
    "en": "Reward Signal: The immediate feedback from the environment.",
    "zh": "奖励信号：环境提供的即时反馈。"
  },
  {
    "id": 217,
    "start": 1872.793,
    "end": 1885.53,
    "en": "However, the Agent's goal is to maximize long-term, not immediate, reward—this distinction is crucial, just as investment should not be judged by today's gains and losses but by long-term returns.",
    "zh": "然而，智能体的目标是最大化长期而非即时的奖励——这一区别至关重要，就像投资不应仅根据当天的盈亏来判断，而应看长期回报。"
  },
  {
    "id": 218,
    "start": 1885.53,
    "end": 1895.505,
    "en": "Value Function: Estimates the total cumulative reward obtainable from a given state in the future, helping the Agent make wise decisions even without immediate feedback.",
    "zh": "价值函数：估计从给定状态未来可获得的总累积奖励，帮助智能体在没有即时反馈的情况下做出明智决策。"
  },
  {
    "id": 219,
    "start": 1895.505,
    "end": 1902.205,
    "en": "One of the most important insights from sixty years of RL research is the central role of value estimation.",
    "zh": "六十年的强化学习研究最重要的发现之一是价值估计的核心作用。"
  },
  {
    "id": 220,
    "start": 1902.205,
    "end": 1907.18,
    "en": "Environment Model (optional): Predicts the environment's response to actions.",
    "zh": "环境模型（可选）：预测环境对动作的响应。"
  },
  {
    "id": 221,
    "start": 1907.18,
    "end": 1921.693,
    "en": "Methods that use an environment model are called model-based methods (first learn to predict how the environment changes, then plan accordingly); those without are called model-free methods (do not predict the environment, but learn directly from experience).",
    "zh": "使用环境模型的方法称为基于模型的方法（首先学习如何预测环境变化，然后据此规划）；不使用环境模型的方法称为无模型方法（不预测环境，而是直接从经验中学习）。"
  },
  {
    "id": 222,
    "start": 1921.693,
    "end": 1935.455,
    "en": "Table 8-3 compares the key components of various Agent systems, revealing the universality of the Agent concept and helping readers see the difference in action spaces between traditional RL Agents and modern LLM Agents.",
    "zh": "表8-3比较了各种智能体系统的关键组件，揭示了智能体概念的普遍性，并帮助读者看到传统强化学习智能体与现代大语言模型智能体在动作空间上的差异。"
  },
  {
    "id": 223,
    "start": 1935.455,
    "end": 1940.393,
    "en": "Table 8-3 Comparison of Key Elements in Different Agent Systems",
    "zh": "表8-3 不同智能体系统关键元素的比较"
  },
  {
    "id": 224,
    "start": 1940.393,
    "end": 1954.505,
    "en": "Agent Type: Newborn Gazelle; Environment: Terrain, gravity, body posture; Action Space: Continuous high-dimensional (muscle group contractions); Reward Signal: Balance (+), Falling (-).",
    "zh": "智能体类型：新生羚羊；环境：地形、重力、身体姿势；动作空间：连续高维（肌肉群收缩）；奖励信号：保持平衡（+），跌倒（-）。"
  },
  {
    "id": 225,
    "start": 1954.505,
    "end": 1968.818,
    "en": "Agent Type: Vacuum Robot; Environment: Room layout, battery level; Action Space: Discrete (direction, vacuum, charge); Reward Signal: Cleaned area (+), Battery depleted (-).",
    "zh": "智能体类型：吸尘机器人；环境：房间布局、电池电量；动作空间：离散（方向、吸尘、充电）；奖励信号：清洁区域（+），电池耗尽（-）。"
  },
  {
    "id": 226,
    "start": 1968.818,
    "end": 1982.305,
    "en": "Agent Type: Chess Grandmaster; Environment: Board state, time limit; Action Space: Discrete finite (legal moves); Reward Signal: Win (+1), Loss (-1).",
    "zh": "智能体类型：国际象棋大师；环境：棋盘状态，时间限制；动作空间：离散有限（合法走法）；奖励信号：胜利（+1），失败（-1）"
  },
  {
    "id": 227,
    "start": 1982.305,
    "end": 1998.455,
    "en": "Agent Type: Customer Service Agent; Environment: Conversation history, knowledge base; Action Space: Variable-length compositional (think, speak, API call); Reward Signal: Problem solved (+), Handling time (-).",
    "zh": "智能体类型：客服智能体；环境：对话历史，知识库；动作空间：可变长度的组合式（思考、说话、API调用）；奖励信号：问题解决（+），处理时间（-）"
  },
  {
    "id": 228,
    "start": 1998.455,
    "end": 2014.718,
    "en": "Agent Type: Code Assistant Agent; Environment: Requirements document, codebase; Action Space: Variable-length compositional (think, search, edit, execute); Reward Signal: Test passed (+), Bug introduced (-).",
    "zh": "智能体类型：代码助手智能体；环境：需求文档，代码库；动作空间：可变长度的组合式（思考、搜索、编辑、执行）；奖励信号：测试通过（+），引入错误（-）"
  },
  {
    "id": 229,
    "start": 2014.718,
    "end": 2017.855,
    "en": "The table reveals an important distinction.",
    "zh": "这张表格揭示了一个重要的区别。"
  },
  {
    "id": 230,
    "start": 2017.855,
    "end": 2028.893,
    "en": "Representative board-game and Atari environments use predefined finite discrete primitive actions, while robot control uses continuous actions with fixed dimensions and physical bounds.",
    "zh": "代表性的棋盘游戏和Atari环境使用预定义的离散基本动作，而机器人控制使用具有固定维度和物理边界的连续动作。"
  },
  {
    "id": 231,
    "start": 2028.893,
    "end": 2040.68,
    "en": "Modern LLM-based customer-service and coding Agents compose finite tokens and tool calls into variable-length action sequences, making the possible sequences difficult to enumerate at once.",
    "zh": "现代基于大语言模型的客服和编码智能体将有限的标记和工具调用组合成可变长度的动作序列，使得可能的序列难以一次性枚举。"
  },
  {
    "id": 232,
    "start": 2040.68,
    "end": 2044.993,
    "en": "They can also use internal thinking to improve their capabilities.",
    "zh": "它们还可以使用内部思考来提升自身能力。"
  },
  {
    "id": 233,
    "start": 2044.993,
    "end": 2051.605,
    "en": "Two Action Representations: Classic RL Settings and Variable-Length LLM Policies.",
    "zh": "两种动作表示方式：经典强化学习设置与可变长度的大语言模型策略。"
  },
  {
    "id": 234,
    "start": 2051.605,
    "end": 2056.468,
    "en": "The most visible difference between the two settings is how actions are represented.",
    "zh": "这两种设置最明显的区别在于动作是如何表示的。"
  },
  {
    "id": 235,
    "start": 2056.468,
    "end": 2063.143,
    "en": "An MDP itself can represent finite or infinite, discrete or continuous action spaces.",
    "zh": "MDP本身可以表示有限或无限、离散或连续的动作空间。"
  },
  {
    "id": 236,
    "start": 2063.143,
    "end": 2078.518,
    "en": "The representative board-game and Atari environments here use finite discrete primitive actions, robot control uses bounded continuous actions, and an LLM policy composes a finite token vocabulary and tool schemas into variable-length sequences.",
    "zh": "此处的代表性棋盘游戏和Atari环境使用有限的离散基本动作，机器人控制使用有界连续动作，而大语言模型策略则将有限的标记词汇和工具模式组合成可变长度的序列。"
  },
  {
    "id": 237,
    "start": 2078.518,
    "end": 2086.68,
    "en": "This compositional representation has major consequences for algorithm design, sample efficiency, and generalization.",
    "zh": "这种组合式表示对算法设计、样本效率和泛化能力有重大影响。"
  },
  {
    "id": 238,
    "start": 2086.68,
    "end": 2089.38,
    "en": "Each setting is discussed below.",
    "zh": "下面将分别讨论每种设置。"
  },
  {
    "id": 239,
    "start": 2089.38,
    "end": 2093.818,
    "en": "Foundational Example: MDP and Tabular Q-learning.",
    "zh": "基础示例：MDP与表格Q学习。"
  },
  {
    "id": 240,
    "start": 2093.98,
    "end": 2104.555,
    "en": "MDP (Markov Decision Process) is the mathematical framework for reinforcement learning, defining core elements such as states, actions, and rewards.",
    "zh": "MDP（马尔可夫决策过程）是强化学习的数学框架，定义了状态、动作和奖励等核心要素。"
  },
  {
    "id": 241,
    "start": 2104.505,
    "end": 2112.917,
    "en": "Its core assumption is the Markov property: the future depends only on the current state, which must contain all history relevant to the decision.",
    "zh": "其核心假设是马尔可夫性质：未来仅取决于当前状态，而当前状态必须包含所有与决策相关的历史信息。"
  },
  {
    "id": 242,
    "start": 2112.917,
    "end": 2124.83,
    "en": "In chess, for example, the state includes not only piece placement but also the side to move, castling and en passant rights, and information needed for the fifty-move and repetition rules.",
    "zh": "例如在国际象棋中，状态不仅包括棋子的位置，还包括轮到哪一方走棋、王车易位和吃过路兵的权利，以及五十步规则和重复规则所需的信息。"
  },
  {
    "id": 243,
    "start": 2124.83,
    "end": 2131.28,
    "en": "With a sufficient state definition, the entire game record need not be reread for each transition.",
    "zh": "如果状态定义足够充分，每次状态转移时就不需要重新阅读整个对局记录。"
  },
  {
    "id": 244,
    "start": 2131.28,
    "end": 2139.067,
    "en": "If an observation omits necessary history, that history must be added to the state or handled with a partially observable model.",
    "zh": "如果观测遗漏了必要的历史信息，就必须将这些历史信息添加到状态中，或者使用部分可观测模型来处理。"
  },
  {
    "id": 245,
    "start": 2139.067,
    "end": 2145.755,
    "en": "As illustrated in Figure 8-2: Markov Decision Process (MDP) Diagram.",
    "zh": "如图8-2所示：马尔可夫决策过程（MDP）图示。"
  },
  {
    "id": 246,
    "start": 2145.755,
    "end": 2151.08,
    "en": "The representative RL environments in this section use predefined action spaces.",
    "zh": "本节中使用的代表性强化学习环境采用预定义的动作空间。"
  },
  {
    "id": 247,
    "start": 2151.08,
    "end": 2162.442,
    "en": "The 361 move positions in Go are large but finite; chess actions can still be enumerated; and Atari games typically expose a few to a dozen discrete primitive actions.",
    "zh": "围棋的361个落子位置虽然数量大但仍是有限的；国际象棋的动作仍可以枚举；而Atari游戏通常会暴露几个到十几个离散的基本动作。"
  },
  {
    "id": 248,
    "start": 2162.442,
    "end": 2175.817,
    "en": "Robotic Agents use continuous but bounded action spaces: joint angles, velocities, and grip forces are continuous values, but have clear physical bounds and dimensions fixed by the robot's degrees of freedom.",
    "zh": "机器人智能体使用连续但有界的动作空间：关节角度、速度和夹持力是连续值，但具有明确的物理边界，并由机器人的自由度固定维度。"
  },
  {
    "id": 249,
    "start": 2175.817,
    "end": 2180.742,
    "en": "Finite discrete actions make individual candidates easier to evaluate.",
    "zh": "有限的离散动作使每个候选动作更容易评估。"
  },
  {
    "id": 250,
    "start": 2180.742,
    "end": 2192.03,
    "en": "If the numbers of states and actions are small enough, tabular Q-learning stores their values directly; larger Atari and board-game state spaces combine function approximation with search.",
    "zh": "如果状态和动作的数量足够小，表格型Q学习会直接存储它们的值；较大的Atari和棋类游戏状态空间则结合函数逼近与搜索。"
  },
  {
    "id": 251,
    "start": 2192.03,
    "end": 2201.555,
    "en": "Continuous-action MDPs cannot enumerate every action, so methods such as policy gradients and actor-critic approximate the policy and value function.",
    "zh": "连续动作的MDP无法枚举每一个动作，因此像策略梯度和演员-评论家方法这样的技术会近似策略和价值函数。"
  },
  {
    "id": 252,
    "start": 2201.555,
    "end": 2209.767,
    "en": "The classic example in this section also differs from an LLM policy because it starts trial-and-error learning without pretrained knowledge.",
    "zh": "本节中的经典例子与LLM策略不同，因为它在没有预训练知识的情况下开始试错学习。"
  },
  {
    "id": 253,
    "start": 2209.767,
    "end": 2215.43,
    "en": "Within this framework, one of the most fundamental and important algorithms is Q-learning.",
    "zh": "在这个框架中，最基础且重要的算法之一是Q学习。"
  },
  {
    "id": 254,
    "start": 2215.43,
    "end": 2225.705,
    "en": "It maintains a value estimate for each \"state-action\" pair: if you take action a in state s and then act optimally thereafter, how much total reward can you expect?",
    "zh": "它为每个“状态-动作”对维护一个价值估计：如果你在状态s中采取动作a，然后之后采取最优行动，你能期望获得多少总奖励？"
  },
  {
    "id": 255,
    "start": 2225.705,
    "end": 2233.667,
    "en": "Intuitively, whether an action is good depends on the immediate reward it brings, plus \"how good the next state it leads to is.",
    "zh": "直觉上，一个动作是否良好取决于它带来的即时奖励，以及它所导致的下一个状态有多好。"
  },
  {
    "id": 256,
    "start": 2233.667,
    "end": 2248.242,
    "en": "Writing this intuition as an equation gives the core recursive relationship of the famous Bellman equation in RL textbooks: The true value of an action = the immediate reward obtained at this step + the maximum future value obtainable from the next state:",
    "zh": "将这种直觉写成方程，就得到了强化学习教科书中著名的贝尔曼方程的核心递归关系：一个动作的真实价值 = 当前步骤获得的即时奖励 + 从下一状态可获得的最大未来价值；"
  },
  {
    "id": 257,
    "start": 2248.242,
    "end": 2257.13,
    "en": "Q^(s, a) = r + \\gamma \\max_{a'} Q^(s', a'",
    "zh": "Q^(s, a) = r + \\gamma \\max_{a'} Q^(s', a'"
  },
  {
    "id": 258,
    "start": 2257.13,
    "end": 2285.78,
    "en": "where r is the immediate reward, s' is the next state reached after executing the action (written in deterministic form for intuition; in a stochastic environment, an expectation over the next state s' is needed), and \\gamma \\in [0, 1) is the discount factor—it determines how much the Agent values the future: the closer \\gamma is to 1, the more it values long-term returns; the closer to 0, the more it focuses on the immediate.",
    "zh": "其中r是即时奖励，s'是在执行该动作后到达的下一个状态（为了直观起见以确定性形式书写；在随机环境中，需要对下一个状态s'进行期望计算），\\gamma \\in [0, 1) 是折扣因子——它决定了智能体对未来收益的重视程度：\\gamma 越接近1，越重视长期回报；越接近0，则更关注即时收益。"
  },
  {
    "id": 259,
    "start": 2285.78,
    "end": 2299.03,
    "en": "The \"cumulative reward\" mentioned repeatedly earlier is precisely the sum of rewards at each step, discounted by \\gamma: \\sum_{t} \\gamma^{t} r_t.",
    "zh": "前面反复提到的“累积奖励”正是每一步奖励的总和，按\\gamma 进行折扣：\\sum_{t} \\gamma^{t} r_t。"
  },
  {
    "id": 260,
    "start": 2299.03,
    "end": 2312.767,
    "en": "After each action, the algorithm slightly adjusts the old estimate towards the \"actually observed outcome\"—this paradigm of \"correcting an old estimate with a one-step actual result\" is called Temporal-Difference Learning (TD learning).",
    "zh": "每次动作之后，算法都会略微调整旧的估计值，使其趋向于“实际观察到的结果”——这种“用一步实际结果修正旧估计”的范式被称为时间差分学习（TD learning）。"
  },
  {
    "id": 261,
    "start": 2312.767,
    "end": 2317.905,
    "en": "After thousands of trials, the estimate gradually approaches the true value.",
    "zh": "经过数千次试验后，估计值逐渐接近真实值。"
  },
  {
    "id": 262,
    "start": 2317.905,
    "end": 2325.43,
    "en": "The following two figures show the exploration process of Q-learning in a grid world and the gradual convergence of Q-values.",
    "zh": "以下两幅图展示了Q-learning在网格世界中的探索过程以及Q值的逐步收敛。"
  },
  {
    "id": 263,
    "start": 2325.43,
    "end": 2330.105,
    "en": "As illustrated in Figure 8-3: Q-learning Grid World.",
    "zh": "如图8-3所示：Q-learning网格世界。"
  },
  {
    "id": 264,
    "start": 2330.105,
    "end": 2335.43,
    "en": "As illustrated in Figure 8-4: Q-value Update Visualization.",
    "zh": "如图8-4所示：Q值更新可视化。"
  },
  {
    "id": 265,
    "start": 2335.588,
    "end": 2344.313,
    "en": "Q-learning is an off-policy method: it can learn an optimal policy from data generated by an exploratory policy different from the target policy.",
    "zh": "Q-learning是一种非策略方法：它可以从与目标策略不同的探索策略生成的数据中学习最优策略。"
  },
  {
    "id": 266,
    "start": 2344.263,
    "end": 2355.15,
    "en": "It still requires adequate coverage of the relevant state-action pairs and appropriate learning-rate and convergence conditions; it does not automatically converge on an arbitrary data distribution.",
    "zh": "它仍然需要对相关状态-动作对进行充分覆盖，并满足适当的的学习率和收敛条件；它不会在任意数据分布上自动收敛。"
  },
  {
    "id": 267,
    "start": 2355.15,
    "end": 2368.088,
    "en": "The strict definitions of on-policy and off-policy methods, and how they map to LLM post-training, are discussed later in the section \"RL Algorithms: From 16 Rollouts to One Parameter Update.",
    "zh": "关于策略方法和非策略方法的严格定义，以及它们如何映射到大语言模型的后训练，将在后面的章节“RL算法：从16次回放到一次参数更新”中进行讨论。"
  },
  {
    "id": 268,
    "start": 2368.088,
    "end": 2375.075,
    "en": "Experiment 8-1 introductory difficulty, one star: : Q-learning Performance in a Treasure Hunt Game",
    "zh": "实验8-1入门难度，一颗星：Q-learning在寻宝游戏中的表现"
  },
  {
    "id": 269,
    "start": 2375.075,
    "end": 2381.625,
    "en": "To verify the characteristics and limitations of Q-learning, we designed a treasure hunt game environment.",
    "zh": "为了验证Q-learning的特点和局限性，我们设计了一个寻宝游戏环境。"
  },
  {
    "id": 270,
    "start": 2381.625,
    "end": 2409.275,
    "en": "This environment includes several key challenges: hidden mechanisms require the Agent to discover the correspondence between keys and doors, weapon effects, and item crafting rules on its own; multi-step dependencies mean that completing the task requires the correct sequence of actions (optimal solution: 11 steps); sparse rewards mean that only key actions and the final victory yield significant rewards, with most intermediate steps receiving no feedback.",
    "zh": "该环境包含几个关键挑战：隐藏机制要求智能体自行发现钥匙与门、武器效果和物品制作规则之间的对应关系；多步依赖意味着完成任务需要正确的动作序列（最优解：11步）；稀疏奖励意味着只有关键动作和最终胜利才会获得显著奖励，大多数中间步骤没有反馈。"
  },
  {
    "id": 271,
    "start": 2409.275,
    "end": 2423.85,
    "en": "The Q-learning Agent uses standard parameter settings and an ε-greedy exploration strategy: it usually selects the currently optimal action but occasionally chooses a random one, with the proportion of random exploration gradually decreasing during training.",
    "zh": "Q-learning 智能体使用标准参数设置和 ε-greedy 探索策略：它通常会选择当前最优动作，但偶尔会随机选择一个动作，随机探索的比例在训练过程中逐渐减少。"
  },
  {
    "id": 272,
    "start": 2423.85,
    "end": 2431.55,
    "en": "The learning curve shows typical characteristics (an episode is one complete game, from start to completion or failure",
    "zh": "学习曲线显示出典型特征（一集是指一次完整的比赛，从开始到结束或失败）"
  },
  {
    "id": 273,
    "start": 2431.55,
    "end": 2440.413,
    "en": "First 1000 episodes: 0% win rate, Q-table has only 124 states, Agent is blindly exploring",
    "zh": "前 1000 集：胜率 0%，Q 表仅有 124 个状态，智能体在盲目探索"
  },
  {
    "id": 274,
    "start": 2440.413,
    "end": 2447.638,
    "en": "First 5000 episodes: Still no stable victories, Q-table has 133 states",
    "zh": "前 5000 集：仍没有稳定胜利，Q 表有 133 个状态"
  },
  {
    "id": 275,
    "start": 2447.638,
    "end": 2455.15,
    "en": "7,000–8,000 episodes: Win rate gradually rises from 34% to 96%",
    "zh": "7000-8000 集：胜率从 34% 逐渐上升至 96%"
  },
  {
    "id": 276,
    "start": 2455.15,
    "end": 2464.213,
    "en": "10,000 episodes: 100% win rate, Q-table has 145 states, found the 11-step optimal solution",
    "zh": "10000 集：100% 胜率，Q 表有 145 个状态，找到了 11 步的最优解"
  },
  {
    "id": 277,
    "start": 2464.213,
    "end": 2472.313,
    "en": "The entire training takes less than 10 seconds (very efficient simulation), but requires nearly 10,000 complete attempts.",
    "zh": "整个训练时间不到 10 秒（非常高效的模拟），但需要近 10000 次完整尝试。"
  },
  {
    "id": 278,
    "start": 2472.313,
    "end": 2487.6,
    "en": "This demonstrates the behavior of the prior-free, ε-greedy tabular Q-learning setup used in this experiment: it needs substantial random exploration to complete the path by chance, and value signals propagate slowly enough to require repeated reinforcement.",
    "zh": "这展示了本实验中使用的无先验知识的、ε-greedy 表格 Q 学习设置的行为：它需要大量的随机探索才能偶然完成路径，并且价值信号传播得足够慢，以至于需要重复强化。"
  },
  {
    "id": 279,
    "start": 2487.6,
    "end": 2493.7,
    "en": "In a game simulator, 10,000 trials take only 10 seconds, a negligible cost.",
    "zh": "在一个游戏模拟器中，10000 次试验只需 10 秒，成本可以忽略不计。"
  },
  {
    "id": 280,
    "start": 2493.7,
    "end": 2507.0,
    "en": "But in real-world Agent scenarios—where each phone call has a cost, each browser operation has a delay, and each wrong decision can have irreversible consequences—10,000 trials are completely unacceptable.",
    "zh": "但在现实世界的智能体场景中——每次电话呼叫都有成本，每次浏览器操作都有延迟，每次错误决策都可能产生不可逆的后果——10000 次试验是完全不可接受的。"
  },
  {
    "id": 281,
    "start": 2507.0,
    "end": 2516.088,
    "en": "One reason to use a pretrained LLM policy is that accumulated knowledge can support effective decisions with far fewer environmental interactions.",
    "zh": "使用预训练大语言模型策略的一个原因是，积累的知识可以支持在极少环境交互下做出有效决策。"
  },
  {
    "id": 282,
    "start": 2516.088,
    "end": 2529.563,
    "en": "This prior-free tabular Q-learning experiment has three limitations: even a simple task needs extensive interaction, values learned in one environment do not transfer directly to another, and each new task must be explored again.",
    "zh": "这个无先验知识的表格 Q 学习实验有三个局限性：即使是一个简单的任务也需要大量的交互，一个环境中学习到的价值无法直接转移到另一个环境中，每个新任务都必须重新探索。"
  },
  {
    "id": 283,
    "start": 2529.563,
    "end": 2533.863,
    "en": "These are not limitations of the MDP framework itself.",
    "zh": "这些并不是 MDP 框架本身的局限性。"
  },
  {
    "id": 284,
    "start": 2533.863,
    "end": 2546.425,
    "en": "Function approximation, transfer learning, and model-based RL can handle richer states and knowledge transfer, although they may still require substantial environmental interaction compared with a pretrained LLM.",
    "zh": "函数逼近、迁移学习和基于模型的强化学习可以处理更丰富的状态和知识迁移，尽管与预训练大语言模型相比，它们可能仍然需要大量的环境交互。"
  },
  {
    "id": 285,
    "start": 2546.425,
    "end": 2550.213,
    "en": "Agents Based on Pretrained LLM Policies.",
    "zh": "基于预训练大语言模型策略的智能体。"
  },
  {
    "id": 286,
    "start": 2550.213,
    "end": 2556.988,
    "en": "Large language models have brought an important practical change to how Agent actions are represented and initialized.",
    "zh": "大语言模型对智能体动作的表示和初始化方式带来了重要的实际变化。"
  },
  {
    "id": 287,
    "start": 2556.988,
    "end": 2563.45,
    "en": "Classic RL can also model internal computation or information gathering as states and actions.",
    "zh": "经典强化学习也可以将内部计算或信息收集建模为状态和动作。"
  },
  {
    "id": 288,
    "start": 2563.45,
    "end": 2578.388,
    "en": "The practical change introduced by LLMs is not that thinking became possible for the first time, but that a pretrained language policy can represent internal computation as variable-length token sequences and generate it within the same policy as external actions.",
    "zh": "大语言模型带来的实际变化并不是首次让思考成为可能，而是预训练的语言策略可以将内部计算表示为可变长度的标记序列，并在同一策略中生成外部动作。"
  },
  {
    "id": 289,
    "start": 2578.388,
    "end": 2584.425,
    "en": "Thinking tokens do not directly change the external world, but they can improve the final action.",
    "zh": "思考标记不会直接改变外部世界，但可以改进最终动作。"
  },
  {
    "id": 290,
    "start": 2584.425,
    "end": 2591.938,
    "en": "The action representation now includes not only \"what to do,\" but also \"how long to think and what to think about.",
    "zh": "动作表示现在不仅包括“要做什么”，还包括“思考多久以及思考什么”。"
  },
  {
    "id": 291,
    "start": 2592.1,
    "end": 2599.3,
    "en": "The most important practical innovation is incorporating thinking tokens as special actions in the policy output space.",
    "zh": "最重要的实际创新是将思考标记作为策略输出空间中的特殊动作进行整合。"
  },
  {
    "id": 292,
    "start": 2599.25,
    "end": 2611.637,
    "en": "Representative traditional RL environments emphasize primitive actions such as moving, attacking, and picking up, although internal computation can also be modeled in an MDP or hierarchical policy.",
    "zh": "典型的传统强化学习环境强调原始动作，如移动、攻击和拾取，尽管内部计算也可以在MDP或分层策略中建模。"
  },
  {
    "id": 293,
    "start": 2611.637,
    "end": 2617.875,
    "en": "In LLM Agents, internal thinking becomes a core part of the learned language action space.",
    "zh": "在大语言模型智能体中，内部思考成为学习语言动作空间的核心部分。"
  },
  {
    "id": 294,
    "start": 2617.875,
    "end": 2628.187,
    "en": "It does not directly change the external environment or receive immediate environmental reward, but can express many computational paths within token costs and context limits.",
    "zh": "它不会直接改变外部环境或接收即时环境奖励，但可以在标记成本和上下文限制内表达许多计算路径。"
  },
  {
    "id": 295,
    "start": 2628.187,
    "end": 2637.025,
    "en": "Variable-length compositional actions create a much larger search space than primitive actions and are difficult to learn from scratch without prior knowledge.",
    "zh": "可变长度的组合动作比原始动作创建了更大的搜索空间，并且在没有先验知识的情况下难以从头学习。"
  },
  {
    "id": 296,
    "start": 2637.025,
    "end": 2642.075,
    "en": "An Agent learning from scratch is like searching for treasure in a desert blindfolded.",
    "zh": "一个从头开始学习的智能体就像在沙漠中蒙着眼睛寻找宝藏。"
  },
  {
    "id": 297,
    "start": 2642.075,
    "end": 2657.837,
    "en": "LLMs instead learn human problem-solving patterns from massive text pre-training: math solutions often follow \"identify conditions → recall formulas → calculate step by step,\" while coding follows \"understand requirements → design structure → implement details.",
    "zh": "大语言模型则通过大规模文本预训练学习人类的问题解决模式：数学解题通常遵循“识别条件→回忆公式→逐步计算”，而编程则遵循“理解需求→设计结构→实现细节”。"
  },
  {
    "id": 298,
    "start": 2657.837,
    "end": 2664.8,
    "en": "The pretrained policy gives structured paths higher prior probability, greatly compressing the search space.",
    "zh": "预训练的策略赋予结构化路径更高的先验概率，极大地压缩了搜索空间。"
  },
  {
    "id": 299,
    "start": 2664.8,
    "end": 2679.75,
    "en": "Thus, even without additional RL, a pretrained LLM can generate a basic logical Chain of Thought (CoT), learned through next-token prediction over math solutions, code comments, discussions, and other human-written reasoning traces.",
    "zh": "因此，即使没有额外的强化学习，预训练的大语言模型也可以通过数学解题、代码注释、讨论和其他人类编写的推理轨迹的下一个标记预测生成基本的逻辑思维链（CoT）。"
  },
  {
    "id": 300,
    "start": 2679.75,
    "end": 2687.887,
    "en": "RL post-training then uses external rewards to teach the LLM to apply these patterns more effectively to a specific task.",
    "zh": "然后，强化学习后训练利用外部奖励教大语言模型更有效地将这些模式应用于特定任务。"
  },
  {
    "id": 301,
    "start": 2687.887,
    "end": 2695.212,
    "en": "Language structure is not a separate \"internal reward\"; it acts as a prior distribution in the pretrained policy.",
    "zh": "语言结构不是一种独立的“内部奖励”；它在预训练策略中充当先验分布。"
  },
  {
    "id": 302,
    "start": 2695.212,
    "end": 2708.15,
    "en": "A pattern consistently present in training data, such as \"we need to convert currency, so first look up the exchange rate,\" may start with higher generation probability than an unrelated path such as checking the weather.",
    "zh": "在训练数据中反复出现的一种模式，例如“我们需要转换货币，所以首先查找汇率”，其生成概率可能高于无关路径，如查看天气。"
  },
  {
    "id": 303,
    "start": 2708.15,
    "end": 2714.325,
    "en": "RL uses the actual task reward to reshape path probabilities from that starting distribution.",
    "zh": "强化学习使用实际任务奖励来从该初始分布重塑路径概率。"
  },
  {
    "id": 304,
    "start": 2714.325,
    "end": 2721.2,
    "en": "As illustrated in Figure 8-5: Comparison of Classic RL and Modern LLM Agent.",
    "zh": "如图8-5所示：经典强化学习与现代大语言模型智能体的对比。"
  },
  {
    "id": 305,
    "start": 2721.2,
    "end": 2737.35,
    "en": "The pretrained language policy enables LLM Agents to understand unseen instructions (zero-shot generalization) and adapt to new tasks from a few demonstrations (few-shot adaptation), in sharp contrast with the prior-free tabular Q-learning setting above.",
    "zh": "预训练的语言策略使大语言模型智能体能够理解未见过的指令（零样本泛化）并从少量演示中适应新任务（少样本适应），这与上述无先验的表格Q学习设置形成鲜明对比。"
  },
  {
    "id": 306,
    "start": 2737.35,
    "end": 2745.3,
    "en": "Expanding from predefined primitive actions to variable-length compositional actions is an important shift in the AI Agent paradigm.",
    "zh": "从预定义的基本动作扩展到可变长度的组合动作，是AI智能体范式的重要转变。"
  },
  {
    "id": 307,
    "start": 2745.3,
    "end": 2761.187,
    "en": "LLM actions are still defined by a finite token vocabulary and tool schemas, but internal thinking, natural-language queries, program code, complex JSON, and multimodal content combine into an explosive number of variable-length sequences.",
    "zh": "大语言模型的动作仍然由有限的token词汇表和工具模式定义，但内部思考、自然语言查询、程序代码、复杂JSON和多模态内容结合成大量可变长度的序列。"
  },
  {
    "id": 308,
    "start": 2761.187,
    "end": 2768.062,
    "en": "Code interpreters and search tools connect that representation to a wide range of real-world tasks and information.",
    "zh": "代码解释器和搜索工具将这种表示连接到各种现实世界任务和信息中。"
  },
  {
    "id": 309,
    "start": 2768.062,
    "end": 2780.412,
    "en": "This creates both opportunities and challenges: Agents can combine basic tools to handle unseen tasks, but reward design and efficient exploration must operate over an enormous compositional space.",
    "zh": "这既带来了机遇也带来了挑战：智能体可以组合基本工具处理未见过的任务，但奖励设计和高效探索必须在一个巨大的组合空间上运行。"
  },
  {
    "id": 310,
    "start": 2780.572,
    "end": 2798.534,
    "en": "Models such as Kimi K3, which are optimized for tool use and long-chain reasoning, illustrate the typical direction of the LLM+RL paradigm: large-scale language pre-training provides the foundation, and post-training strengthens problem decomposition, tool use, and self-correction.",
    "zh": "像Kimi K3这样的模型，针对工具使用和长链推理进行了优化，展示了LLM+RL范式的典型方向：大规模语言预训练提供基础，后训练则加强问题分解、工具使用和自我修正。"
  },
  {
    "id": 311,
    "start": 2798.484,
    "end": 2820.934,
    "en": "OpenVLA (detailed in Chapter 6) showcases the VLA (Vision-Language-Action) architecture paradigm of the LLM era: a vision encoder processes environmental observations, a language model understands instructions and reasons, and an action decoder generates control signals, enabling language-conditioned control and cross-task generalization.",
    "zh": "OpenVLA（详见第6章）展示了大语言模型时代的VLA（视觉-语言-动作）架构范式：视觉编码器处理环境观察，语言模型理解指令并进行推理，动作解码器生成控制信号，从而实现语言条件控制和跨任务泛化。"
  },
  {
    "id": 312,
    "start": 2820.934,
    "end": 2831.522,
    "en": "To be clear, OpenVLA itself is trained through imitation learning on nearly one million robot demonstration trajectories, making it SFT in nature rather than RL.",
    "zh": "需要明确的是，OpenVLA本身通过模仿学习在近百万个机器人演示轨迹上进行训练，因此本质上属于SFT，而非强化学习。"
  },
  {
    "id": 313,
    "start": 2831.522,
    "end": 2844.484,
    "en": "SimpleVLA-RL, introduced in Experiment 8-13 later in this chapter, is the representative example of bringing RL into robotics by using rewards to further optimize this kind of VLA architecture.",
    "zh": "SimpleVLA-RL，本章后续实验8-13中介绍的，是通过使用奖励进一步优化此类VLA架构而将强化学习引入机器人领域的代表性例子。"
  },
  {
    "id": 314,
    "start": 2844.484,
    "end": 2850.347,
    "en": "As illustrated in Figure 8-6: Evolution of OpenAI Training Paradigms.",
    "zh": "如图8-6所示：OpenAI训练范式的演变。"
  },
  {
    "id": 315,
    "start": 2850.347,
    "end": 2862.809,
    "en": "OpenAI's Exploration Path (chronicled by Shunyu Yao, Assistant Professor at Princeton University and author of the ReAct paper, in \"The Second Half\") traces an evolution in how the field thought.",
    "zh": "OpenAI的探索路径（由普林斯顿大学助理教授、ReAct论文作者Shunyu Yao在《第二部分》中记录）描绘了该领域思维方式的演变。"
  },
  {
    "id": 316,
    "start": 2862.809,
    "end": 2871.547,
    "en": "Phase 1 (2015-2016), Algorithm-Centric: The prevailing belief was that better algorithms were the key.",
    "zh": "第一阶段（2015-2016年），算法为中心：普遍认为更好的算法是关键。"
  },
  {
    "id": 317,
    "start": 2871.547,
    "end": 2878.622,
    "en": "Progress was made in standard environments such as Atari, but every new environment required retraining from scratch.",
    "zh": "在Atari等标准环境中取得了进展，但每个新环境都需要从头开始重新训练。"
  },
  {
    "id": 318,
    "start": 2878.622,
    "end": 2896.284,
    "en": "Phase 2 (2016-2018), The Importance of Environment: Gym standardized a range of tasks; Universe and World of Bits attempted to turn the entire internet into an RL training environment; and Dota 2 pursued superhuman performance in a specific complex environment.",
    "zh": "第二阶段（2016-2018年），环境的重要性：Gym标准化了一系列任务；Universe和World of Bits试图将整个互联网变成强化学习训练环境；而Dota 2则追求在特定复杂环境中的超人类表现。"
  },
  {
    "id": 319,
    "start": 2896.284,
    "end": 2902.247,
    "en": "The idea was clear, but general computer use and web navigation remained out of reach.",
    "zh": "这个想法很明确，但通用计算机使用和网页导航仍然遥不可及。"
  },
  {
    "id": 320,
    "start": 2902.247,
    "end": 2917.759,
    "en": "Phase 3 (2018-present), Awakening of Priors: GPT-2/GPT-3 demonstrated the power of language pre-training; WebGPT and ChatGPT proved those priors could be turned into practical Agents.",
    "zh": "第三阶段（2018年至今），先验知识的觉醒：GPT-2/GPT-3展示了语言预训练的力量；WebGPT和ChatGPT证明这些先验知识可以转化为实际的智能体。"
  },
  {
    "id": 321,
    "start": 2917.759,
    "end": 2923.697,
    "en": "The most important discovery: priors can be acquired in ways that have nothing to do with RL.",
    "zh": "最重要的发现是：先验知识可以通过与强化学习无关的方式获得。"
  },
  {
    "id": 322,
    "start": 2923.697,
    "end": 2931.159,
    "en": "This is a counterintuitive truth—for decades, RL researchers may have had their priorities exactly backwards.",
    "zh": "这是一个反直觉的真相——数十年来，强化学习研究人员可能把优先级完全颠倒了。"
  },
  {
    "id": 323,
    "start": 2931.159,
    "end": 2937.072,
    "en": "The real order is not algorithm > environment > prior, but prior > environment > algorithm.",
    "zh": "真正的顺序不是算法 > 环境 > 先验，而是先验 > 环境 > 算法。"
  },
  {
    "id": 324,
    "start": 2937.072,
    "end": 2945.259,
    "en": "Experiment 8-2 intermediate difficulty, two stars: : Comparative Study of Traditional RL and LLM Agent",
    "zh": "实验8-2中等难度，两颗星：传统强化学习与大语言模型智能体的比较研究"
  },
  {
    "id": 325,
    "start": 2945.259,
    "end": 2952.809,
    "en": "As illustrated in Figure 8-7: Architecture Comparison of Q-learning and LLM Agent in a Treasure Hunt Game.",
    "zh": "如图8-7所示：Q学习与大语言模型智能体在寻宝游戏中的架构对比。"
  },
  {
    "id": 326,
    "start": 2952.809,
    "end": 2962.159,
    "en": "We compared Q-learning with an LLM Agent—Kimi K3, maintaining a buffer of up to 50 experiences—in the same treasure hunt game.",
    "zh": "我们比较了Q学习与一个大语言模型智能体——Kimi K3，在同一寻宝游戏中保持最多50个经验的缓冲区。"
  },
  {
    "id": 327,
    "start": 2962.159,
    "end": 2968.759,
    "en": "The results are astonishing: The LLM Agent completed the game in 18 steps on its first try.",
    "zh": "结果令人震惊：大语言模型智能体第一次尝试就用了18步完成了游戏。"
  },
  {
    "id": 328,
    "start": 2968.759,
    "end": 2985.234,
    "en": "Early Stage (Purposeful Exploration): Picks up a rusty sword (\"A weapon is better than bare hands\"), systematically explores the map, deduces \"need to find a key\" after finding the north gate locked, explores the storeroom, acquires the red key and magic crystal.",
    "zh": "早期阶段（有目的的探索）：捡起一把生锈的剑（“武器总比赤手空拳好”），系统地探索地图，找到北门被锁后推断出“需要找到钥匙”，探索储物间，获得红钥匙和魔法水晶。"
  },
  {
    "id": 329,
    "start": 2985.234,
    "end": 2998.672,
    "en": "Middle Stage (Mechanism Understanding and Proactive Synthesis): Understands the \"key auto-use\" rule and anticipates the rusty sword is insufficient against the guard, proactively synthesizes a silver sword on step 8.",
    "zh": "中期阶段（机制理解和主动合成）：理解了“钥匙自动使用”的规则，并预见生锈的剑无法对抗守卫，主动在第8步合成一把银剑。"
  },
  {
    "id": 330,
    "start": 2998.672,
    "end": 3006.397,
    "en": "Late Stage (Execution and Error Correction): Heads north with the silver sword and defeats the powerful guard at step 13.",
    "zh": "后期阶段（执行与错误修正）：带着银剑向北行进，在第13步击败了强大的守卫。"
  },
  {
    "id": 331,
    "start": 3006.397,
    "end": 3016.597,
    "en": "Along the way, it makes one or two ineffective attempts—repeatedly swinging the sword or backtracking—and finally obtains the dragon's treasure at step 18.",
    "zh": "在过程中，它进行了一两次无效的尝试——反复挥舞剑或后退——最终在第18步获得了龙的宝藏。"
  },
  {
    "id": 332,
    "start": 3016.597,
    "end": 3022.359,
    "en": "This demonstrates a fundamental difference between semantic understanding and symbolic mapping.",
    "zh": "这展示了语义理解和符号映射之间的基本区别。"
  },
  {
    "id": 333,
    "start": 3022.359,
    "end": 3029.284,
    "en": "The LLM Agent understood the conceptual structure of the game; every step had purpose and logical support.",
    "zh": "LLM智能体理解了游戏的概念结构；每一步都有明确的目的和逻辑支持。"
  },
  {
    "id": 334,
    "start": 3029.284,
    "end": 3040.134,
    "en": "For Q-learning, \"door,\" \"key,\" and \"sword\" are just meaningless symbol combinations, and it can only slowly discover their relationships through extensive statistical learning.",
    "zh": "对于Q-learning来说，“门”、“钥匙”和“剑”只是无意义的符号组合，它只能通过大量的统计学习慢慢发现它们之间的关系。"
  },
  {
    "id": 335,
    "start": 3040.3,
    "end": 3050.362,
    "en": "Computational cost presents an interesting paradox: Q-learning runs 10,000 games in 10 seconds, while the LLM Agent takes 1-2 minutes per game.",
    "zh": "计算成本带来了一个有趣的悖论：Q-learning可以在10秒内运行10,000场比赛，而LLM智能体每场比赛需要1-2分钟。"
  },
  {
    "id": 336,
    "start": 3050.312,
    "end": 3062.037,
    "en": "However, in real-world tasks, the time, money, and risk costs per interaction far outweigh pure computational costs, so judging solely by GPU time is unfair.",
    "zh": "然而，在现实任务中，每次交互的时间、金钱和风险成本远远超过纯粹的计算成本，因此仅凭GPU时间来评判是不公平的。"
  },
  {
    "id": 337,
    "start": 3062.037,
    "end": 3071.275,
    "en": "A more critical insight is: The LLM Agent's success isn't due to having a better \"learning algorithm,\" but because it carries vast prior knowledge.",
    "zh": "一个更关键的见解是：LLM智能体的成功不是因为拥有更好的“学习算法”，而是因为它携带了大量先验知识。"
  },
  {
    "id": 338,
    "start": 3071.275,
    "end": 3078.975,
    "en": "When game rules change, Q-learning needs complete retraining, while the LLM Agent can adapt directly through reasoning.",
    "zh": "当游戏规则改变时，Q-learning需要完全重新训练，而LLM智能体可以通过推理直接适应。"
  },
  {
    "id": 339,
    "start": 3078.975,
    "end": 3097.15,
    "en": "This leads to a practical design principle: Traditional RL remains valuable in scenarios with low simulation costs and high repeatability; in real-world scenarios with high interaction costs and a need for rapid adaptation, the sample efficiency of LLM Agents is more valuable in practice.",
    "zh": "这导致了一个实用的设计原则：传统强化学习在模拟成本低且可重复性高的场景中仍然有价值；而在交互成本高且需要快速适应的真实场景中，LLM智能体的样本效率在实践中更为重要。"
  },
  {
    "id": 340,
    "start": 3097.15,
    "end": 3111.575,
    "en": "Chapter 1 already provided a conceptual map of how contextual adaptation, updates to external artifacts, and parameter updates work together; the section “Post-Training Practical Takeaways” at the end of this chapter returns to the topic.",
    "zh": "第一章已经提供了关于上下文适应、对外部工具的更新以及参数更新如何协同工作的概念图；本章末尾的“后训练实践要点”部分将回到这一主题。"
  },
  {
    "id": 341,
    "start": 3111.575,
    "end": 3119.987,
    "en": "This chapter's main thread is post-training: writing into model parameters capabilities that cannot be fully expressed through external rules.",
    "zh": "本章的主要线索是后训练：将无法通过外部规则完全表达的能力写入模型参数中。"
  },
  {
    "id": 342,
    "start": 3119.987,
    "end": 3123.562,
    "en": "Model Pre-training Basics [Optional Reading].",
    "zh": "模型预训练基础 [可选阅读]。"
  },
  {
    "id": 343,
    "start": 3123.562,
    "end": 3130.537,
    "en": "To understand why post-training techniques are effective, one must first understand what pre-training establishes.",
    "zh": "要理解为什么后训练技术有效，首先必须了解预训练建立了什么。"
  },
  {
    "id": 344,
    "start": 3130.537,
    "end": 3142.962,
    "en": "Post-training (SFT and RL) essentially optimizes within the representation space established by pre-training—the knowledge structure laid down by pre-training determines the ceiling of post-training.",
    "zh": "后训练（SFT和RL）本质上是在预训练建立的表示空间内进行优化——预训练奠定的知识结构决定了后训练的上限。"
  },
  {
    "id": 345,
    "start": 3142.962,
    "end": 3153.175,
    "en": "Therefore, we examine the core aspects of pre-training through two experiments: training a small-scale language model from scratch and extending visual capabilities.",
    "zh": "因此，我们通过两个实验来考察预训练的核心方面：从头开始训练一个小规模语言模型并扩展视觉能力。"
  },
  {
    "id": 346,
    "start": 3153.175,
    "end": 3165.687,
    "en": "The two experiments in this section are supplementary and are intended to build intuition about pre-training—that is, initial training on large-scale data that teaches a model basic language patterns and world knowledge.",
    "zh": "本节的两个实验是补充性的，旨在帮助理解预训练——即在大规模数据上进行的初始训练，这教会了模型基本的语言模式和世界知识。"
  },
  {
    "id": 347,
    "start": 3165.687,
    "end": 3174.637,
    "en": "Experiment 8-5, which injects new language knowledge into an existing base model, appears in the standalone Mid-training section that follows.",
    "zh": "实验8-5，将新的语言知识注入现有基础模型，出现在接下来的独立‘中训练’部分中。"
  },
  {
    "id": 348,
    "start": 3174.637,
    "end": 3179.737,
    "en": "As illustrated in Figure 8-8: Pre-training Next Token Prediction.",
    "zh": "如图8-8所示：预训练下一个词预测。"
  },
  {
    "id": 349,
    "start": 3179.737,
    "end": 3188.387,
    "en": "Language model training generally follows the pipeline \"tokenization — pre-training (including Mid-training when needed) — post-training.",
    "zh": "语言模型训练通常遵循流程“分词 —— 预训练（必要时包括中训练）—— 后训练”。"
  },
  {
    "id": 350,
    "start": 3188.387,
    "end": 3192.162,
    "en": "Tokenization segments text into discrete units.",
    "zh": "分词将文本分割成离散单元。"
  },
  {
    "id": 351,
    "start": 3192.162,
    "end": 3198.725,
    "en": "For example, \"I like programming\" might be tokenized into \"I,\" \"like,\" \"program,\" \"ming.",
    "zh": "例如，'I like programming' 可能会被分词为 'I,' 'like,' 'program,' 'ming'。"
  },
  {
    "id": 352,
    "start": 3198.725,
    "end": 3203.125,
    "en": "These tokens are the smallest textual units processed by the model.",
    "zh": "这些标记是模型处理的最小文本单元。"
  },
  {
    "id": 353,
    "start": 3203.125,
    "end": 3210.6,
    "en": "The task of pre-training is conceptually simple: show the model the first part of a text segment and have it predict the next token.",
    "zh": "预训练的任务概念上很简单：向模型展示一段文本的前半部分，并让它预测下一个标记。"
  },
  {
    "id": 354,
    "start": 3210.6,
    "end": 3220.875,
    "en": "By comparing its prediction to the correct answer (this difference is called loss; smaller loss means more accurate prediction), the model continuously adjusts its parameters.",
    "zh": "通过将其预测与正确答案进行比较（这种差异称为损失；损失越小，预测越准确），模型不断调整其参数。"
  },
  {
    "id": 355,
    "start": 3220.875,
    "end": 3229.587,
    "en": "After repeated training on massive text data, the model gradually learns language rules, world knowledge, and basic reasoning abilities.",
    "zh": "经过对大量文本数据的反复训练，模型逐渐学习到语言规则、世界知识和基本推理能力。"
  },
  {
    "id": 356,
    "start": 3229.587,
    "end": 3237.337,
    "en": "After pre-training, the model can generate fluent text, but the output lacks structure and struggles to follow instructions.",
    "zh": "预训练之后，模型可以生成流畅的文本，但输出缺乏结构，并且难以遵循指令。"
  },
  {
    "id": 357,
    "start": 3237.337,
    "end": 3251.287,
    "en": "Post-training then transforms the model into a practical assistant through SFT—training on labeled input-output pairs—and preference optimization, such as DPO, which teaches the model to generate responses that humans prefer.",
    "zh": "后训练则通过SFT——在标注的输入输出对上进行训练——以及偏好优化（如DPO），将模型转化为实用的助手，教模型生成人类偏好的响应。"
  },
  {
    "id": 358,
    "start": 3251.287,
    "end": 3260.212,
    "en": "Experiment 8-3 intermediate difficulty, two stars: : Training an LLM from Scratch—The Power of Algorithm Improvement",
    "zh": "实验8-3 中等难度，两颗星：从零开始训练LLM——算法改进的力量"
  },
  {
    "id": 359,
    "start": 3260.212,
    "end": 3270.325,
    "en": "Using MiniMind 2, a 100-million-parameter model, as a case study, the experiment completes the entire training process on a consumer-grade GPU.",
    "zh": "以MiniMind 2为例，这是一个拥有1亿参数的模型，作为案例研究，该实验在消费级GPU上完成了整个训练过程。"
  },
  {
    "id": 360,
    "start": 3270.325,
    "end": 3285.287,
    "en": "Two algorithmic optimizations—QK Norm and the Muon optimizer—triple the convergence speed and significantly improve generation quality, all at very low cost: approximately 14 hours of training and 34 dollars in total.",
    "zh": "两种算法优化——QK归一化和Muon优化器——使收敛速度提高三倍，并显著提升生成质量，成本非常低：大约14小时的训练时间和34美元的总费用。"
  },
  {
    "id": 361,
    "start": 3285.436,
    "end": 3308.186,
    "en": "Effects of each training stage: After pre-training, the model can answer factual questions like \"What is the highest mountain in the world?\" but the format is non-standard; after SFT, instruction following and output formatting improve significantly, allowing the model to organize answers as expected; preference optimization further reduces factual errors and unnatural expressions.",
    "zh": "每个训练阶段的效果：预训练后，模型可以回答事实性问题，例如“世界上最高的山是什么？”，但格式不规范；经过SFT后，指令遵循和输出格式显著改善，使模型能够按预期组织答案；偏好优化进一步减少了事实性错误和不自然的表达。"
  },
  {
    "id": 362,
    "start": 3308.136,
    "end": 3322.361,
    "en": "The 100-million-parameter model still has obvious limitations (prone to errors on complex problems), but the lesson is: With a fixed, small budget, algorithmic improvements offer better value than simply scaling up size.",
    "zh": "参数量为1亿的模型仍有明显局限性（在复杂问题上容易出错），但课程是：在固定的小预算下，算法改进比单纯扩大规模更有价值。"
  },
  {
    "id": 363,
    "start": 3322.361,
    "end": 3328.711,
    "en": "Experiment 8-4 intermediate difficulty, two stars: : Training Your Own VLM",
    "zh": "实验8-4 中等难度，两颗星：训练你自己的VLM"
  },
  {
    "id": 364,
    "start": 3328.711,
    "end": 3335.211,
    "en": "As illustrated in Figure 8-9: Vision-Language Model (VLM) Architecture.",
    "zh": "如图8-9所示：视觉-语言模型（VLM）架构。"
  },
  {
    "id": 365,
    "start": 3335.211,
    "end": 3340.723,
    "en": "VLMs unify visual perception and language understanding within a single model.",
    "zh": "VLM将视觉感知和语言理解统一在一个模型中。"
  },
  {
    "id": 366,
    "start": 3340.723,
    "end": 3347.161,
    "en": "The core challenge is cross-modal alignment—making \"what is seen\" correspond to \"what is said.",
    "zh": "核心挑战是跨模态对齐——让“所见”对应“所言”。"
  },
  {
    "id": 367,
    "start": 3347.161,
    "end": 3372.036,
    "en": "The architecture consists of three components: a Vision Encoder (e.g., CLIP, parameters frozen) extracts semantic features from images; a Projection Layer (lightweight, the only part trained from scratch) acts as a \"translator\" between visual features and the language model, mapping visual features into a representation space the language model can understand; and a Language Model generates descriptive text.",
    "zh": "架构由三个组件组成：视觉编码器（例如CLIP，参数冻结）从图像中提取语义特征；投影层（轻量级，唯一从零开始训练的部分）作为视觉特征和语言模型之间的“翻译者”，将视觉特征映射到语言模型可以理解的表示空间；语言模型生成描述性文本。"
  },
  {
    "id": 368,
    "start": 3372.036,
    "end": 3393.611,
    "en": "Training uses a \"freeze LLM + train only projection layer\" strategy to avoid catastrophic forgetting (forgetting old skills after learning new ones); after the alignment pre-training stage, the LLM is unfrozen, and SFT is performed on high-quality image-description pairs, significantly improving the detail and accuracy of its descriptions.",
    "zh": "训练采用“冻结LLM + 仅训练投影层”的策略以避免灾难性遗忘（学习新技能后忘记旧技能）；在对齐预训练阶段后，LLM被解冻，并在高质量的图像-描述对上进行SFT，显著提高了其描述的细节和准确性。"
  },
  {
    "id": 369,
    "start": 3393.611,
    "end": 3411.223,
    "en": "This experiment reveals the basic paradigm for multimodal model training: reusing unimodal pre-training results and achieving cross-modal alignment by training a lightweight projection layer—efficient and scalable, but the projection layer's limited expressiveness can become a bottleneck for deep cross-modal understanding.",
    "zh": "这个实验揭示了多模态模型训练的基本范式：重用单模态预训练结果，并通过训练一个轻量级投影层实现跨模态对齐——高效且可扩展，但投影层有限的表达能力可能成为深度跨模态理解的瓶颈。"
  },
  {
    "id": 370,
    "start": 3411.223,
    "end": 3424.248,
    "en": "Extending the same \"vision encoder + projection layer + LLM\" architecture one step further by having the model output actions produces the VLA (Vision-Language-Action) model detailed in Chapter 6.",
    "zh": "通过让模型输出动作，进一步扩展相同的“视觉编码器+投影层+LLM”架构，就得到了第6章中详细描述的VLA（视觉-语言-动作）模型。"
  },
  {
    "id": 371,
    "start": 3424.248,
    "end": 3434.486,
    "en": "Together, the two pre-training experiments reveal a pattern: under a limited budget, algorithmic and architectural improvements often offer better value than scale alone.",
    "zh": "这两个预训练实验共同揭示了一个模式：在有限的预算下，算法和架构改进通常比单纯扩大规模更有价值。"
  },
  {
    "id": 372,
    "start": 3434.486,
    "end": 3443.811,
    "en": "More importantly, pre-training supplies descriptive knowledge and language-modeling capability but not structured instruction following or task-oriented behavior.",
    "zh": "更重要的是，预训练提供了描述性知识和语言建模能力，但并未提供结构化指令遵循或任务导向行为。"
  },
  {
    "id": 373,
    "start": 3443.811,
    "end": 3450.561,
    "en": "Yet SFT and RL cannot bypass a target language or domain that general pre-training never covered.",
    "zh": "然而，SFT和RL无法绕过通用预训练从未涵盖的目标语言或领域。"
  },
  {
    "id": 374,
    "start": 3450.561,
    "end": 3453.498,
    "en": "That is the gap Mid-training addresses.",
    "zh": "这就是中段训练要解决的差距。"
  },
  {
    "id": 375,
    "start": 3453.498,
    "end": 3458.236,
    "en": "Mid-training: Filling Knowledge and Foundational Capability Gaps.",
    "zh": "中段训练：填补知识和基础能力的空白。"
  },
  {
    "id": 376,
    "start": 3458.236,
    "end": 3466.311,
    "en": "In this chapter, Mid-training means taking an existing base model and continuing language-model training on a target data distribution.",
    "zh": "在本章中，中训练指的是对现有的基础模型进行继续语言模型训练，以适应目标数据分布。"
  },
  {
    "id": 377,
    "start": 3466.311,
    "end": 3474.886,
    "en": "It usually retains pre-training's next-token objective and computes loss over every token in a document, code sample, or derivation.",
    "zh": "它通常保留预训练的下一个词目标，并在文档、代码示例或推导中的每个词上计算损失。"
  },
  {
    "id": 378,
    "start": 3474.886,
    "end": 3485.573,
    "en": "Classic DAPT/TAPT research shows that a second pre-training stage on domain or task-related unlabeled corpora can continue improving downstream performance.",
    "zh": "经典的DAPT/TAPT研究显示，在领域或任务相关的未标记语料上的第二阶段预训练可以继续提升下游性能。"
  },
  {
    "id": 379,
    "start": 3485.573,
    "end": 3493.023,
    "en": "Mid\" describes its place in the capability-development pipeline; its data format and loss remain those of pre-training.",
    "zh": "“Mid”描述了它在能力开发流程中的位置；其数据格式和损失仍保持预训练的状态。"
  },
  {
    "id": 380,
    "start": 3493.023,
    "end": 3496.598,
    "en": "Mid-training mainly addresses two kinds of gap:",
    "zh": "中训练主要解决两种类型的差距："
  },
  {
    "id": 381,
    "start": 3496.598,
    "end": 3511.398,
    "en": "Knowledge gaps: General pre-training did not adequately cover a target language, finance, medicine, law, internal enterprise documents, or a class of codebases, so the model cannot even understand the concepts and terminology.",
    "zh": "知识差距：通用预训练未能充分覆盖目标语言、金融、医学、法律、内部企业文档或一类代码库，因此模型甚至无法理解这些概念和术语。"
  },
  {
    "id": 382,
    "start": 3511.398,
    "end": 3522.698,
    "en": "Foundational capability gaps: The target task requires long-context, coding, mathematical-derivation, or multimodal representations that the base model has not formed.",
    "zh": "基础能力差距：目标任务需要长上下文、编码、数学推导或多模态表示，而基础模型尚未形成这些能力。"
  },
  {
    "id": 383,
    "start": 3522.698,
    "end": 3530.448,
    "en": "The problem is not merely the response format: even after many samples, the model almost never reaches a correct solution.",
    "zh": "问题不仅仅是响应格式：即使经过许多样本，模型几乎从不达到正确的解决方案。"
  },
  {
    "id": 384,
    "start": 3530.62,
    "end": 3536.795,
    "en": "This also explains why SFT should not be treated as the main vehicle for knowledge injection.",
    "zh": "这也解释了为什么SFT不应被视为知识注入的主要手段。"
  },
  {
    "id": 385,
    "start": 3536.745,
    "end": 3544.507,
    "en": "SFT can memorize a small number of facts and often follows Mid-training to teach the model how to answer domain questions.",
    "zh": "SFT可以记忆少量事实，并且通常在中训练之后用于教模型如何回答领域问题。"
  },
  {
    "id": 386,
    "start": 3544.507,
    "end": 3555.57,
    "en": "But a small QA set covers only a limited set of phrasings; it is better at training how to access and express knowledge than at carrying a large, interconnected body of raw knowledge.",
    "zh": "但一个小规模的问答集仅涵盖有限的表达方式；它更擅长于训练如何获取和表达知识，而不是携带大量相互关联的原始知识。"
  },
  {
    "id": 387,
    "start": 3555.57,
    "end": 3563.532,
    "en": "Conversely, reducing language-model loss on domain text does not ensure the model will retrieve that knowledge in response to a question.",
    "zh": "相反，在领域文本上减少语言模型的损失并不能保证模型会在回答问题时检索到这些知识。"
  },
  {
    "id": 388,
    "start": 3563.532,
    "end": 3572.645,
    "en": "Research shows that the order and organization of continued pre-training and instruction tuning materially affect whether knowledge can be accessed in QA form.",
    "zh": "研究表明，持续预训练和指令调优的顺序和组织方式会显著影响知识是否能以问答形式被访问。"
  },
  {
    "id": 389,
    "start": 3572.645,
    "end": 3584.607,
    "en": "A robust recipe is usually: Mid-training absorbs knowledge and capabilities → small-scale SFT establishes access and output protocols → RL is added if needed once success is nonzero.",
    "zh": "一个稳健的方法通常是：中训练吸收知识和能力 → 小规模SFT建立访问和输出协议 → 如果成功概率非零，则添加强化学习。"
  },
  {
    "id": 390,
    "start": 3584.607,
    "end": 3587.145,
    "en": "Constructing Mid-training Data.",
    "zh": "构建中训练数据。"
  },
  {
    "id": 391,
    "start": 3587.145,
    "end": 3590.57,
    "en": "Infer data needs from the failure distribution.",
    "zh": "从失败分布中推断数据需求。"
  },
  {
    "id": 392,
    "start": 3590.57,
    "end": 3597.42,
    "en": "Slice evaluations by topic, language, document type, code pattern, and context length.",
    "zh": "按主题、语言、文档类型、代码模式和上下文长度对评估进行切片。"
  },
  {
    "id": 393,
    "start": 3597.42,
    "end": 3608.457,
    "en": "Determine which low-pass@k cases come from a base-model gap, and add data only for knowledge and capability gaps rather than misdiagnosing output-format errors as missing knowledge.",
    "zh": "确定哪些低通@k案例来自基础模型的缺陷，并且仅针对知识和能力缺口添加数据，而不是将输出格式错误误诊为知识缺失。"
  },
  {
    "id": 394,
    "start": 3608.457,
    "end": 3611.245,
    "en": "Build high-density target corpora.",
    "zh": "构建高密度目标语料库。"
  },
  {
    "id": 395,
    "start": 3611.245,
    "end": 3626.745,
    "en": "Raw documents establish terminology and factual associations; repositories teach structure and dependencies; textbook-style derivations, synthetic explanations, and cross-document association samples make implicit relationships explicit.",
    "zh": "原始文档建立术语和事实关联；仓库教结构和依赖关系；教科书风格的推导、合成解释和跨文档关联样本使隐含关系显性化。"
  },
  {
    "id": 396,
    "start": 3626.745,
    "end": 3632.42,
    "en": "Deduplicate, filter for quality, and check for evaluation-set contamination.",
    "zh": "去重、过滤质量并检查评估集污染。"
  },
  {
    "id": 397,
    "start": 3632.42,
    "end": 3635.082,
    "en": "Mix the data by capability.",
    "zh": "按能力混合数据。"
  },
  {
    "id": 398,
    "start": 3635.082,
    "end": 3662.695,
    "en": "The mixture needs natural long text such as books, long documents, and code repositories; chain-of-thought data embodying the atomic long-text capabilities—long-text retrieval, multi-hop reasoning, instruction following, information aggregation and statistics; and Agent execution trajectories embodying the capabilities an Agent cannot do without—planning, tool selection and invocation, long-range state tracking, and recovery from errors.",
    "zh": "混合数据需要自然的长文本，如书籍、长文档和代码仓库；体现原子长文本能力的链式思维数据——长文本检索、多跳推理、指令遵循、信息聚合和统计；以及体现智能体不可或缺能力的智能体轨迹数据——规划、工具选择与调用、长程状态跟踪和错误恢复。"
  },
  {
    "id": 399,
    "start": 3662.695,
    "end": 3670.207,
    "en": "The chain-of-thought and Agent-trajectory data can be distilled from a stronger open-source model or taken from existing datasets.",
    "zh": "链式思维和智能体轨迹数据可以从更强的开源模型中提炼出来，或从现有数据集中获取。"
  },
  {
    "id": 400,
    "start": 3670.207,
    "end": 3673.77,
    "en": "Use two forms of replay at every stage.",
    "zh": "在每个阶段使用两种形式的重放。"
  },
  {
    "id": 401,
    "start": 3673.77,
    "end": 3681.582,
    "en": "The first is the original short text and general data, which preserves language, knowledge, and short-context capability.",
    "zh": "第一种是原始短文本和通用数据，这可以保留语言、知识和短上下文能力。"
  },
  {
    "id": 402,
    "start": 3681.582,
    "end": 3697.27,
    "en": "The second is \"old tasks lifted to the new length\": place short tasks the model already handles into a context of the current length, scattering relevant information and distractors across different positions, and check whether the same capability still holds in the wider window.",
    "zh": "第二种是“将旧任务提升到新长度”：将模型已经处理的短任务放入当前长度的上下文中，在不同位置散布相关信息和干扰项，并检查相同的能力是否在更宽的窗口中仍然有效。"
  },
  {
    "id": 403,
    "start": 3697.27,
    "end": 3707.482,
    "en": "The general data is best drawn from the base model's original pre-training set; when that is unavailable, an open pre-training corpus such as FineWeb-2 can stand in.",
    "zh": "通用数据最好来自基础模型的原始预训练集；当无法获得时，可以使用像FineWeb-2这样的开放预训练语料库来替代。"
  },
  {
    "id": 404,
    "start": 3707.482,
    "end": 3711.045,
    "en": "Decide when to stop with multidimensional gates.",
    "zh": "使用多维门控决定何时停止。"
  },
  {
    "id": 405,
    "start": 3711.045,
    "end": 3721.82,
    "en": "Besides training loss, track pass@1/pass@k on held-out domain tasks, general capabilities, prior instruction following, and the target task.",
    "zh": "除了训练损失外，还要跟踪保留领域任务的pass@1/pass@k、通用能力、先前指令遵循和目标任务的表现。"
  },
  {
    "id": 406,
    "start": 3721.82,
    "end": 3739.057,
    "en": "If domain metrics rise while the general retention set drops, the mixture or the learning rate is too aggressive; if loss falls while pass@k does not move, check whether the data truly covers the required capability, and whether the SFT that makes knowledge accessible is missing downstream.",
    "zh": "如果领域指标上升而通用保留集下降，说明混合比例或学习率过于激进；如果损失下降但pass@k没有变化，需检查数据是否真正覆盖了所需能力，并确认是否缺少使知识可访问的SFT。"
  },
  {
    "id": 407,
    "start": 3739.057,
    "end": 3754.645,
    "en": "After Mid-training, evaluation sets such as LongBench v2, IFEval, and the end-to-end Agent benchmarks described in Chapter 7 are needed to verify that the model's foundational long-context capability across different context lengths has not been lost.",
    "zh": "中训练后，需要使用LongBench v2、IFEval以及第7章描述的端到端智能体基准测试集，以验证模型在不同上下文长度下的基础长上下文能力是否未丢失。"
  },
  {
    "id": 408,
    "start": 3754.645,
    "end": 3764.182,
    "en": "Long-context capability underpins long chain-of-thought and instruction following, and those in turn underpin higher-order Agent capabilities such as tool calling.",
    "zh": "长上下文能力支撑长链式思维和指令遵循，而这些又支撑更高级的智能体能力，如工具调用。"
  },
  {
    "id": 409,
    "start": 3764.332,
    "end": 3773.044,
    "en": "Position and retrieval: single-needle and multi-needle extraction, key information at different positions, and retrieval under distractors;",
    "zh": "位置与检索：单针和多针提取，不同位置的关键信息，以及在干扰项下的检索；"
  },
  {
    "id": 410,
    "start": 3772.994,
    "end": 3782.557,
    "en": "Relations and reasoning: cross-paragraph, cross-document, and multi-hop relation tracking, contradiction resolution, and evidence composition;",
    "zh": "关系与推理：跨段落、跨文档和多跳关系追踪，矛盾解决和证据组合；"
  },
  {
    "id": 411,
    "start": 3782.557,
    "end": 3792.307,
    "en": "Aggregation and statistics: counting, grouping, sorting, comparison, trend summaries, and aggregation over long tables or logs;",
    "zh": "聚合与统计：计数、分组、排序、比较、趋势总结以及对长表或日志的聚合；"
  },
  {
    "id": 412,
    "start": 3792.307,
    "end": 3804.582,
    "en": "Instruction following: following complex instructions, including multiple instructions at once, contradiction resolution, adherence to a prescribed thinking procedure, and output-format compliance;",
    "zh": "指令遵循：遵循复杂指令，包括同时处理多个指令、矛盾解决、遵守规定的思考流程以及输出格式合规；"
  },
  {
    "id": 413,
    "start": 3804.582,
    "end": 3811.457,
    "en": "Long-chain thinking: solving hard mathematics, logical-reasoning, and code-generation problems;",
    "zh": "长链思维：解决硬数学、逻辑推理和代码生成问题；"
  },
  {
    "id": 414,
    "start": 3811.457,
    "end": 3821.319,
    "en": "Agent primitives: basic task decomposition, planning, tool selection, argument construction, state memory, and recovery from failure.",
    "zh": "智能体基本操作：基本任务分解、规划、工具选择、论点构建、状态记忆以及从失败中恢复。"
  },
  {
    "id": 415,
    "start": 3821.319,
    "end": 3829.044,
    "en": "If facts change frequently or must be cited to primary sources, RAG is still preferable to writing them into weights.",
    "zh": "如果事实频繁变化或必须引用原始来源，RAG仍然比将它们写入权重更优。"
  },
  {
    "id": 416,
    "start": 3829.044,
    "end": 3836.382,
    "en": "Mid-training is better suited to stable, large-scale domain knowledge and capabilities that need internal representations.",
    "zh": "中训练更适合稳定的大规模领域知识和需要内部表示的能力。"
  },
  {
    "id": 417,
    "start": 3836.382,
    "end": 3847.219,
    "en": "Full-parameter Mid-training on a large model costs more and risks more forgetting than small-scale SFT, so validate the mixture in a small pilot before scaling the training budget.",
    "zh": "在大模型上进行全参数中训练的成本更高，遗忘风险也更大，因此应在扩大训练预算前先在小规模试点中验证混合比例。"
  },
  {
    "id": 418,
    "start": 3847.219,
    "end": 3854.407,
    "en": "Experiment 8-5 intermediate difficulty, two stars: : Continued Pre-training to Learn a New Language",
    "zh": "实验8-5 中等难度，两星：继续预训练以学习一门新语言"
  },
  {
    "id": 419,
    "start": 3854.407,
    "end": 3869.082,
    "en": "Using Mistral 7B v0.3 as the base model—primarily pre-trained on English and with almost no understanding of Korean—the experiment introduces Korean capability through continued language-model training on Korean Wikipedia.",
    "zh": "使用Mistral 7B v0.3作为基础模型——主要在英语上预训练，几乎不理解韩语——该实验通过在韩语维基百科上的继续语言模型训练引入韩语能力。"
  },
  {
    "id": 420,
    "start": 3869.082,
    "end": 3877.944,
    "en": "The model already has general representations and only needs to adapt to a new data distribution, making this much cheaper than training from scratch.",
    "zh": "模型已经具备一般表示，只需适应新的数据分布，这比从头训练要便宜得多。"
  },
  {
    "id": 421,
    "start": 3877.944,
    "end": 3888.969,
    "en": "This experiment uses approximately 80% Korean and 20% English to mitigate catastrophic forgetting; that ratio is an experimental choice, not a universal default.",
    "zh": "该实验使用约80%的韩语和20%的英语以减轻灾难性遗忘；这一比例是实验选择，不是通用默认值。"
  },
  {
    "id": 422,
    "start": 3888.969,
    "end": 3895.119,
    "en": "Korean instruction data is then used for SFT to obtain practical conversational ability.",
    "zh": "然后使用韩语指令数据进行SFT，以获得实际的对话能力。"
  },
  {
    "id": 423,
    "start": 3895.119,
    "end": 3906.894,
    "en": "The division of responsibility is clear: Mid-training first supplies Korean knowledge and language capability, then SFT teaches the model how to receive instructions and organize answers in Korean.",
    "zh": "职责划分明确：中期训练首先提供韩语知识和语言能力，然后SFT教模型如何在韩语中接收指令并组织回答。"
  },
  {
    "id": 424,
    "start": 3906.894,
    "end": 3917.594,
    "en": "The experiment also demonstrates the catastrophic forgetting that continued pre-training can cause: blind ratings improved for Korean in the final stage while English capability declined.",
    "zh": "该实验还展示了持续预训练可能引起的灾难性遗忘：最终阶段韩语的盲评得分提高，而英语能力下降。"
  },
  {
    "id": 425,
    "start": 3917.594,
    "end": 3927.982,
    "en": "Continued pre-training can write the target distribution into parameters, but it does not remove the need for retention sets, factual evaluation, and data-quality audits.",
    "zh": "持续预训练可以将目标分布写入参数，但它并未消除保留集、事实评估和数据质量审计的必要性。"
  },
  {
    "id": 426,
    "start": 3927.982,
    "end": 3936.482,
    "en": "Once the model has enough knowledge and foundational capability, the next step is to turn it into a practical Agent that works according to a protocol.",
    "zh": "一旦模型具备足够的知识和基础能力，下一步就是将其转化为根据协议工作的实用智能体。"
  },
  {
    "id": 427,
    "start": 3936.482,
    "end": 3939.757,
    "en": "SFT (Supervised Fine-Tuning).",
    "zh": "SFT（监督微调）。"
  },
  {
    "id": 428,
    "start": 3939.757,
    "end": 3946.519,
    "en": "As illustrated in Figure 8-10: Supervised Fine-Tuning (SFT) Pipeline.",
    "zh": "如图8-10所示：监督微调（SFT）流程。"
  },
  {
    "id": 429,
    "start": 3946.519,
    "end": 3958.782,
    "en": "The section \"From Pre-training to RL: An Overview of the Four Training Stages\" already explained the essence of SFT (\"predict the next token\" with different data and loss computed only on the response).",
    "zh": "“从预训练到RL：四个训练阶段概述”一节已经解释了SFT的本质（使用不同数据，仅在响应上计算损失的“预测下一个标记”）。“},{"
  },
  {
    "id": 430,
    "start": 3958.782,
    "end": 3968.432,
    "en": "This section uses four experiments to show what this mechanism—writing stable mappings and protocols into parameters—solidifies across different tasks.",
    "zh": "本节通过四个实验展示这一机制——将稳定的映射和协议写入参数——在不同任务中如何得到巩固。"
  },
  {
    "id": 431,
    "start": 3968.432,
    "end": 3982.969,
    "en": "The core value of SFT is not injecting new knowledge but solidifying protocols: writing mappings, interaction formats, and style norms into parameters so the model can produce compliant outputs at inference time without lengthy prompts.",
    "zh": "SFT的核心价值不是注入新知识，而是巩固协议：将映射、交互格式和风格规范写入参数，这样模型在推理时可以生成符合要求的输出，而无需冗长的提示。"
  },
  {
    "id": 432,
    "start": 3982.969,
    "end": 3992.032,
    "en": "Typically, only a few thousand to tens of thousands of high-quality examples are needed to establish basic conversational ability and instruction following.",
    "zh": "通常只需要几千到几万个高质量的例子，就可以建立基本的对话能力和指令遵循能力。"
  },
  {
    "id": 433,
    "start": 3992.032,
    "end": 3996.182,
    "en": "This efficiency can come with dependence on the training distribution.",
    "zh": "这种效率可能会带来对训练分布的依赖性。"
  },
  {
    "id": 434,
    "start": 3996.182,
    "end": 4008.707,
    "en": "In tasks that require exploring diverse correct strategies, or where deployment shifts away from the demonstrations, SFT may favor reproducing demonstrated patterns and lose performance in new situations.",
    "zh": "在需要探索多种正确策略的任务中，或者在部署与演示有所偏离的情况下，SFT可能会倾向于复制演示模式，并在新情境中表现下降。"
  },
  {
    "id": 435,
    "start": 4008.707,
    "end": 4018.632,
    "en": "The following experiments show this process of \"solidifying protocols\" from different angles; they do not establish a universal ranking of SFT and RL.",
    "zh": "以下实验从不同角度展示了\"巩固协议\"的过程；它们并不确立SFT和RL的普遍排名。"
  },
  {
    "id": 436,
    "start": 4018.78,
    "end": 4026.605,
    "en": "Before getting hands-on with SFT, there is one practical question you cannot avoid: where does SFT data come from?",
    "zh": "在开始进行SFT之前，有一个实际问题你无法回避：SFT数据从哪里来？"
  },
  {
    "id": 437,
    "start": 4026.555,
    "end": 4030.142,
    "en": "The industry's answer boils down to three routes:",
    "zh": "业界的答案可以归结为三个途径："
  },
  {
    "id": 438,
    "start": 4030.142,
    "end": 4040.042,
    "en": "Human expert demonstrations—the highest quality ceiling, but expensive and slow; best used as the \"seed data\" that defines format and style;",
    "zh": "人类专家演示——质量最高，但成本高且速度慢；最适合用作定义格式和风格的“种子数据”；"
  },
  {
    "id": 439,
    "start": 4040.042,
    "end": 4052.992,
    "en": "Teacher-model generation—that is, synthetic data: have a strong model mass-produce \"input-output\" pairs, filter them, and distill them into the student; see Experiments 8-8 and 8-9;",
    "zh": "教师模型生成——即合成数据：让一个强大的模型大规模生产“输入-输出”对，对其进行筛选，并将其提炼到学生模型中；参见实验8-8和8-9；"
  },
  {
    "id": 440,
    "start": 4052.992,
    "end": 4064.305,
    "en": "Rejection sampling—the model samples several candidates for the same problem itself, a verifier picks out the correct ones, and it trains on those; see Experiment 8-9.",
    "zh": "拒绝采样——模型自己为同一问题生成多个候选，验证器挑选出正确的部分，并以此进行训练；参见实验8-9。"
  },
  {
    "id": 441,
    "start": 4064.305,
    "end": 4067.217,
    "en": "The three routes are often combined.",
    "zh": "这三个途径通常会结合使用。"
  },
  {
    "id": 442,
    "start": 4067.217,
    "end": 4086.98,
    "en": "Whichever route you take, the construction pipeline is much the same: first define the task distribution and the output schema, then generate candidates in bulk, then filter for quality with rule-based validation, format checks, and human spot checks, and finally deduplicate, balance the mixture, and ensure diversity.",
    "zh": "无论选择哪种途径，构建流程大致相同：首先定义任务分布和输出模式，然后批量生成候选，接着通过基于规则的验证、格式检查和人工抽查进行质量筛选，最后去重、平衡混合比例并确保多样性。"
  },
  {
    "id": 443,
    "start": 4086.98,
    "end": 4095.792,
    "en": "There is no need to chase volume—a few thousand to a few tens of thousands of high-quality samples is usually enough to solidify the output format.",
    "zh": "不需要追求数据量——几百到几千个高质量样本通常足以巩固输出格式。"
  },
  {
    "id": 444,
    "start": 4095.792,
    "end": 4106.755,
    "en": "Rather than piling up a hundred thousand dirty samples, refine ten thousand clean ones: every bit of noise in the data is something SFT may faithfully write into the parameters.",
    "zh": "与其堆积十万条脏数据，不如精炼一万个干净样本：数据中的每一点噪声都可能被SFT忠实地写入参数中。"
  },
  {
    "id": 445,
    "start": 4106.755,
    "end": 4117.33,
    "en": "Experiment 8-6 advanced difficulty, three stars: : Voice SFT—From \"Voice Cloning\" to \"Paralinguistic Modeling\" [Extended Experiment]",
    "zh": "实验8-6进阶难度，三颗星：语音SFT——从“语音克隆”到“副语言建模”[扩展实验]"
  },
  {
    "id": 446,
    "start": 4117.33,
    "end": 4130.655,
    "en": "Using Orpheus (contextual-prompt voice cloning) and Sesame (paralinguistic token modeling) as case studies, this experiment shows how \"voice style and expression habits\" get written into parameters.",
    "zh": "以Orpheus（上下文提示语音克隆）和Sesame（副语言标记建模）为例，该实验展示了“语音风格和表达习惯”是如何被写入参数的。"
  },
  {
    "id": 447,
    "start": 4130.655,
    "end": 4133.067,
    "en": "The two take different routes:",
    "zh": "两者采取了不同的路径："
  },
  {
    "id": 448,
    "start": 4133.067,
    "end": 4137.867,
    "en": "Orpheus: Compresses the voice waveform into a token sequence.",
    "zh": "Orpheus：将语音波形压缩成标记序列。"
  },
  {
    "id": 449,
    "start": 4137.867,
    "end": 4147.155,
    "en": "By concatenating reference audio from the same speaker, the model learns to \"speak in this person's voice,\" achieving cross-sentence timbre consistency.",
    "zh": "通过拼接同一说话人的参考音频，模型学会“用这个人的声音说话”，实现跨句子的音色一致性。"
  },
  {
    "id": 450,
    "start": 4147.155,
    "end": 4154.692,
    "en": "Sesame: Abstracts paralinguistic phenomena like laughter and sighs into special tokens like <laugh>, <sigh>.",
    "zh": "Sesame：将笑声、叹息等副语言现象抽象为特殊标记，如<laugh>、<sigh>。"
  },
  {
    "id": 451,
    "start": 4154.692,
    "end": 4159.655,
    "en": "The model learns to \"produce the corresponding sound when seeing the token.",
    "zh": "模型学习在看到标记时\"发出相应的声音\"。"
  },
  {
    "id": 452,
    "start": 4159.655,
    "end": 4168.98,
    "en": "In expressive tasks, SFT solidifies style control protocols and structured expression habits, not factual knowledge or complex reasoning.",
    "zh": "在表达性任务中，SFT巩固了风格控制协议和结构化表达习惯，而非事实知识或复杂推理。"
  },
  {
    "id": 453,
    "start": 4168.98,
    "end": 4173.817,
    "en": "The key lies in the diversity and annotation quality of the training data.",
    "zh": "关键在于训练数据的多样性和标注质量。"
  },
  {
    "id": 454,
    "start": 4173.817,
    "end": 4188.592,
    "en": "Common failure modes include too few speakers in the training data, causing everyone to sound the same, and token overfitting (where the model memorizes training sample details and performs worse on new situations), leading to \"mechanical laughter.",
    "zh": "常见的失败模式包括训练数据中说话者太少，导致所有人都听起来一样，以及标记过拟合（模型记忆了训练样本细节并在新情境中表现更差），导致“机械式笑声”。"
  },
  {
    "id": 455,
    "start": 4188.592,
    "end": 4198.605,
    "en": "Experiment 8-7 advanced difficulty, three stars: : Multilingual Thinking—Enabling the Model to Think in Any Language [Extended Experiment]",
    "zh": "实验8-7 增加难度，三颗星：：多语言思考—使模型能够在任何语言中思考 [扩展实验]"
  },
  {
    "id": 456,
    "start": 4198.605,
    "end": 4213.23,
    "en": "Most thinking models only \"think\" in English: regardless of the language you use to ask a question, the model's internal chain of thought is almost always in English, because the high-quality thinking demonstrations in the training data are mostly written in English.",
    "zh": "大多数思考模型只在英语中“思考”：无论你用哪种语言提问，模型的内部思维链几乎总是用英语，因为训练数据中的高质量思考演示大多用英语编写。"
  },
  {
    "id": 457,
    "start": 4213.23,
    "end": 4219.167,
    "en": "The goal of this experiment is simple—to enable the model to think in a specified language.",
    "zh": "本实验的目标很简单—使模型能够用指定语言进行思考。"
  },
  {
    "id": 458,
    "start": 4219.167,
    "end": 4234.742,
    "en": "The approach is to perform SFT on gpt-oss-20b: add a line reasoning language: German (or another language) to the system instruction, then train with reasoning examples in English, Spanish, French, etc.",
    "zh": "方法是在gpt-oss-20b上进行SFT：在系统指令中添加一行推理语言：德语（或其他语言），然后使用英语、西班牙语、法语等的推理示例进行训练。"
  },
  {
    "id": 459,
    "start": 4234.742,
    "end": 4250.755,
    "en": "The training data contains no Chinese at all, but after training, simply setting the reasoning language to Chinese enables the model to perform complete chain-of-thought reasoning in Chinese—this zero-shot cross-lingual generalization is the most interesting finding of this experiment.",
    "zh": "训练数据中完全没有中文，但经过训练后，只需将推理语言设置为中文，模型就能在中文中完成完整的思维链推理—这种零样本跨语言泛化是本实验最有趣的发现。"
  },
  {
    "id": 460,
    "start": 4250.755,
    "end": 4255.68,
    "en": "Note that this is not the generalization capability of SFT itself.",
    "zh": "请注意，这不是SFT本身的泛化能力。"
  },
  {
    "id": 461,
    "start": 4255.68,
    "end": 4266.005,
    "en": "Multilingual pre-training has already established a shared cross-lingual representation space in the model; SFT merely activates this pre-existing cross-lingual ability.",
    "zh": "多语言预训练已经在模型中建立了共享的跨语言表示空间；SFT只是激活了这一已有的跨语言能力。"
  },
  {
    "id": 462,
    "start": 4266.005,
    "end": 4275.005,
    "en": "Experiment 8-8 intermediate difficulty, two stars: : Prompt Distillation—Replicating Usable Capabilities at Lower Cost",
    "zh": "实验8-8 中等难度，两颗星：：提示蒸馏—以更低的成本复制可用能力"
  },
  {
    "id": 463,
    "start": 4275.172,
    "end": 4288.209,
    "en": "In practical applications, to make a model perform complex tasks, lengthy system prompts (thousands or even tens of thousands of tokens) are often required, increasing latency and cost with each call.",
    "zh": "在实际应用中，为了让模型执行复杂任务，通常需要很长的系统提示（数千甚至数万个标记），每次调用都会增加延迟和成本。"
  },
  {
    "id": 464,
    "start": 4288.159,
    "end": 4294.009,
    "en": "When using reasoning LLMs, internal thinking tokens further amplify the cost.",
    "zh": "使用推理LLM时，内部思考标记进一步增加了成本。"
  },
  {
    "id": 465,
    "start": 4294.009,
    "end": 4304.384,
    "en": "The idea behind prompt distillation is to compress the behavior of a \"long prompt + thinking teacher\" into a \"short prompt/no prompt + non-thinking student.",
    "zh": "提示蒸馏的核心思想是将“长提示+思考教师”的行为压缩成“短提示/无提示+无思考学生”。"
  },
  {
    "id": 466,
    "start": 4304.384,
    "end": 4316.259,
    "en": "The teacher generates high-quality answers under the full prompt and thinking mode; the training data retains only the user input and final conclusion, discarding the lengthy prompt and intermediate thinking process.",
    "zh": "教师在完整的提示和思考模式下生成高质量答案；训练数据仅保留用户输入和最终结论，丢弃冗长的提示和中间思考过程。"
  },
  {
    "id": 467,
    "start": 4316.259,
    "end": 4319.884,
    "en": "The student learns to \"directly give the conclusion.",
    "zh": "学生学习\"直接给出结论\"。"
  },
  {
    "id": 468,
    "start": 4319.884,
    "end": 4332.284,
    "en": "After distillation, the student's output quality on the same inputs approaches that of the teacher, while latency and cost are significantly reduced because there is no need to process lengthy prompts and thinking tokens.",
    "zh": "经过蒸馏后，学生的输出质量在相同输入下接近教师，同时延迟和成本显著降低，因为无需处理冗长的提示和思考标记。"
  },
  {
    "id": 469,
    "start": 4332.284,
    "end": 4351.572,
    "en": "Distillation can be performed along two dimensions: \"large to small\" (replacing a large model with a medium or small one to balance cost and quality) and \"thinking to non-thinking\" (folding explicit CoT into implicit parametric knowledge at the same scale, achieving a 20-30x improvement in response speed).",
    "zh": "蒸馏可以在两个维度上进行：\"大到小\"（用中型或小型模型替换大型模型以平衡成本与质量）和\"思考到非思考\"（在同一规模下将显式的CoT折叠为隐式的参数知识，实现响应速度20-30倍的提升）。"
  },
  {
    "id": 470,
    "start": 4351.572,
    "end": 4357.234,
    "en": "These two are not mutually exclusive and are often used together in production environments.",
    "zh": "这两种方式并不互斥，在生产环境中经常一起使用。"
  },
  {
    "id": 471,
    "start": 4357.234,
    "end": 4375.247,
    "en": "It is important to note that distillation inherits the teacher's boundaries—if the teacher has systematic errors on the long tail of the distribution, the student will further hard-code these errors; if the teacher relies on tools to ensure correctness, simple output distillation will lose the robustness provided by tools.",
    "zh": "需要注意的是，蒸馏继承了教师的边界——如果教师在分布的长尾部分存在系统性错误，学生会进一步固化这些错误；如果教师依赖工具来确保正确性，简单的输出蒸馏会失去工具提供的鲁棒性。"
  },
  {
    "id": 472,
    "start": 4375.247,
    "end": 4393.972,
    "en": "Engineering takeaway: when the product design is stable, the input distribution is predictable, and cost constraints are significant, prompt distillation is an excellent optimization; during exploration or before the task has stabilized, retaining explicit thinking and editable prompts remains central to rapid iteration.",
    "zh": "工程启示：当产品设计稳定、输入分布可预测且成本约束显著时，提示蒸馏是一种优秀的优化方案；在探索阶段或任务尚未稳定前，保留显式的思考和可编辑的提示仍然是快速迭代的核心。"
  },
  {
    "id": 473,
    "start": 4393.972,
    "end": 4401.109,
    "en": "Experiment 8-9 advanced difficulty, three stars: : Chain of Thought (CoT) Distillation",
    "zh": "实验8-9 高级难度，三颗星：思维链（CoT）蒸馏"
  },
  {
    "id": 474,
    "start": 4401.109,
    "end": 4411.547,
    "en": "Prompt distillation discards the thinking process; CoT distillation does the opposite: it transfers the complete thinking trajectory of a strong teacher model to the student model.",
    "zh": "提示蒸馏丢弃了思考过程；而CoT蒸馏则相反：它将强大教师模型的完整思考轨迹传递给学生模型。"
  },
  {
    "id": 475,
    "start": 4411.547,
    "end": 4420.684,
    "en": "Distilling CoT from a capable teacher model can enable a student with the same parameter count to recover 70%-80% of the teacher's capabilities.",
    "zh": "从具备能力的教师模型中蒸馏CoT可以使参数量相同的学生产生70%-80%的教师能力。"
  },
  {
    "id": 476,
    "start": 4420.684,
    "end": 4430.084,
    "en": "For teams that do not aim to push the frontier of state-of-the-art capabilities but want models they can control themselves, this is the most pragmatic follower strategy.",
    "zh": "对于那些不追求最前沿能力但希望自主控制模型的团队来说，这是最务实的跟随策略。"
  },
  {
    "id": 477,
    "start": 4430.084,
    "end": 4442.372,
    "en": "The series of distilled small models open-sourced by DeepSeek-R1 (using R1's thinking trajectories to perform SFT on the Qwen and Llama series) are a representative example of this approach.",
    "zh": "DeepSeek-R1开源的一系列蒸馏小型模型（利用R1的思考轨迹对Qwen和Llama系列进行SFT）是这一方法的代表性示例。"
  },
  {
    "id": 478,
    "start": 4442.372,
    "end": 4445.984,
    "en": "Background: The \"Thinking Wall\" Phenomenon.",
    "zh": "背景：\"思考墙\"现象。"
  },
  {
    "id": 479,
    "start": 4445.984,
    "end": 4470.722,
    "en": "Some closed-source reasoning models (e.g., OpenAI o-series, Gemini series) generate internal chain-of-thought during reasoning, but what users see is not the original thinking process—for reasons including distillation prevention, safety, and product experience, providers often rewrite or summarize the CoT before outputting it, hiding the most valuable original thinking process behind the API.",
    "zh": "一些闭源推理模型（如OpenAI o系列、Gemini系列）在推理过程中生成内部思维链，但用户看到的并不是原始的思考过程——出于防止蒸馏、安全性和产品体验的原因，提供方通常会在输出前重写或总结CoT，将最有价值的原始思考过程隐藏在API之后。"
  },
  {
    "id": 480,
    "start": 4470.722,
    "end": 4492.397,
    "en": "This is precisely why this experiment chooses open-source reasoning models as teachers: models like DeepSeek V4, Kimi K3, and GLM 5.2 directly expose their complete chain-of-thought, making distillation feasible both technically and under the license (though one should still confirm the license's terms regarding distilled products before use).",
    "zh": "这正是本实验选择开源推理模型作为教师的原因：像DeepSeek V4、Kimi K3和GLM 5.2这样的模型直接暴露其完整的思维链，使得蒸馏在技术上和许可证上都可行（尽管在使用前仍应确认许可证条款中关于蒸馏产品的规定）。"
  },
  {
    "id": 481,
    "start": 4492.397,
    "end": 4498.259,
    "en": "From the lab: a model that can write code may still refuse to help distill another model.",
    "zh": "实验室观察：一个能够编写代码的模型可能仍然拒绝帮助进行模型蒸馏。"
  },
  {
    "id": 482,
    "start": 4498.259,
    "end": 4507.997,
    "en": "While implementing this experiment, the author first used OpenAI Codex powered by GPT-5.6-Sol to write the experimental code.",
    "zh": "在实施这个实验时，作者最初使用了由GPT-5.6-Sol驱动的OpenAI Codex来编写实验代码。"
  },
  {
    "id": 483,
    "start": 4507.997,
    "end": 4513.834,
    "en": "Once the task explicitly involved model distillation, Codex refused to continue.",
    "zh": "一旦任务明确涉及模型蒸馏，Codex就拒绝继续执行。"
  },
  {
    "id": 484,
    "start": 4513.834,
    "end": 4520.084,
    "en": "The author then switched to Claude Code powered by Claude Opus 5 and encountered the same refusal.",
    "zh": "作者随后改用由Claude Opus 5驱动的Claude Code，却遇到了同样的拒绝。"
  },
  {
    "id": 485,
    "start": 4520.084,
    "end": 4525.359,
    "en": "Kimi K3 ultimately completed the experimental code and subsequent run.",
    "zh": "Kimi K3最终完成了实验代码和后续运行。"
  },
  {
    "id": 486,
    "start": 4525.516,
    "end": 4532.891,
    "en": "Neither refusal concerned ordinary mathematical reasoning or merely asking a model to reveal its internal chain-of-thought.",
    "zh": "这些拒绝行为并不涉及普通的数学推理，也并未仅仅是要求模型揭示其内部思维链。"
  },
  {
    "id": 487,
    "start": 4532.841,
    "end": 4539.691,
    "en": "The request was to implement a complete distillation experiment that used data from a strong teacher to train a student.",
    "zh": "请求是实现一个完整的蒸馏实验，该实验使用来自强大教师模型的数据来训练学生模型。"
  },
  {
    "id": 488,
    "start": 4539.691,
    "end": 4555.216,
    "en": "Model distillation is technically very similar to ordinary supervised fine-tuning, but vendor safety and product policies may also associate it with model extraction, capability replication, and intellectual-property protection, making it a sensitive category.",
    "zh": "模型蒸馏在技术上与普通的监督微调非常相似，但供应商的安全政策和产品策略可能也将其与模型提取、能力复制和知识产权保护联系起来，使其成为一个敏感类别。"
  },
  {
    "id": 489,
    "start": 4555.216,
    "end": 4563.291,
    "en": "This event should not be simplified to \"Claude does not provide chain-of-thought,\" nor does it prove that \"Kimi has weaker guardrails.",
    "zh": "这一事件不应简化为“Claude不提供思维链”，也不证明“Kimi的防护机制较弱”。"
  },
  {
    "id": 490,
    "start": 4563.291,
    "end": 4575.528,
    "en": "Whether the Claude API returns summarized thinking, whether a Coding Agent will implement a distillation pipeline, and whether service terms permit model outputs to be used for training are three different questions.",
    "zh": "Claude API是否会返回总结后的思考、编码智能体是否会实现蒸馏流程，以及服务条款是否允许将模型输出用于训练，这三个是不同的问题。"
  },
  {
    "id": 491,
    "start": 4575.528,
    "end": 4586.591,
    "en": "This experiment did not attempt to bypass any model's hidden reasoning or safety mechanisms; it used only capabilities exposed by the products to conduct an authorized research workflow.",
    "zh": "此次实验并未试图绕过任何模型的隐式推理或安全机制；它仅使用产品提供的功能进行授权研究流程。"
  },
  {
    "id": 492,
    "start": 4586.591,
    "end": 4596.828,
    "en": "Here is a more practical and more important judgment: for the vast majority of people doing post-training, there is no need to distill the chain-of-thought of closed-source models at all.",
    "zh": "这里有一个更实际且更重要的判断：对于大多数进行后训练的人而言，根本不需要蒸馏封闭源代码模型的思维链。"
  },
  {
    "id": 493,
    "start": 4596.828,
    "end": 4609.303,
    "en": "The gap between today's best open-source models and SOTA closed-source models is not as large as one might imagine; a teacher model only needs to be \"clearly stronger than the student\", not \"the best in the world\".",
    "zh": "如今最好的开源模型与最先进的封闭源代码模型之间的差距并没有想象中那么大；教师模型只需“明显强于学生模型”，而无需“世界最佳”。"
  },
  {
    "id": 494,
    "start": 4609.303,
    "end": 4617.516,
    "en": "If the model you are post-training is 200B parameters or smaller, an open-source SOTA model is entirely sufficient as the teacher.",
    "zh": "如果你正在后训练的模型参数量为200B或更小，一个开源的最先进的模型就完全足够作为教师模型。"
  },
  {
    "id": 495,
    "start": 4617.516,
    "end": 4621.191,
    "en": "Experiment Design: A three-step process.",
    "zh": "实验设计：三步流程。"
  },
  {
    "id": 496,
    "start": 4621.191,
    "end": 4642.578,
    "en": "Step 1, Collect Trajectories: Sample problems from the target task distribution (e.g., math, code), use the open-source teacher model to generate complete \"thinking + answer\" trajectories, and filter out trajectories with incorrect final answers using a rule-based validator—otherwise, the student will imitate the erroneous thinking process.",
    "zh": "步骤1，收集轨迹：从目标任务分布中采样问题（例如数学、代码），使用开源教师模型生成完整的“思考+答案”轨迹，并通过基于规则的验证器过滤掉最终答案错误的轨迹——否则学生会模仿错误的思考过程。"
  },
  {
    "id": 497,
    "start": 4642.578,
    "end": 4651.653,
    "en": "This step—\"generate candidates, verify and filter, keep only correct trajectories\"—has a name of its own: rejection sampling.",
    "zh": "这一步骤——“生成候选，验证并过滤，仅保留正确的轨迹”——有其专属名称：拒绝采样。"
  },
  {
    "id": 498,
    "start": 4651.653,
    "end": 4658.153,
    "en": "Performing SFT on data constructed this way is rejection sampling fine-tuning (RFT).",
    "zh": "按照这种方式构建数据进行SFT，称为拒绝采样微调（RFT）。"
  },
  {
    "id": 499,
    "start": 4658.153,
    "end": 4674.791,
    "en": "It sits between pure SFT and RL: no reward model to train, no policy gradients—just \"sample many, reject the wrong ones, keep the right ones\" to improve data quality, an extremely cost-effective way to construct data for verifiable tasks.",
    "zh": "它介于纯SFT和RL之间：不需要训练奖励模型，也不需要策略梯度——只需“采样很多，拒绝错误的，保留正确的”以提高数据质量，这是构建可验证任务数据的一种极其成本效益的方法。"
  },
  {
    "id": 500,
    "start": 4674.791,
    "end": 4687.678,
    "en": "Step 2, SFT Training: Use \"problem → <think> thinking trajectory </think> + final answer\" as training pairs to perform standard SFT on a small model (e.g., 7B scale).",
    "zh": "步骤2，SFT训练：将“问题→<think>思考轨迹</think> + 最终答案”作为训练对，对小型模型（例如7B规模）进行标准SFT。"
  },
  {
    "id": 501,
    "start": 4687.678,
    "end": 4699.416,
    "en": "Step 3, Comparative Evaluation: Compare the student model before and after distillation, as well as the teacher model, on the same benchmark to measure the proportion of capability recovered.",
    "zh": "步骤3，比较评估：在相同基准上比较蒸馏前后的学生模型以及教师模型，以衡量能力恢复的比例。"
  },
  {
    "id": 502,
    "start": 4699.416,
    "end": 4714.678,
    "en": "Acceptance Criteria: The distilled student model shows significant improvement on math and code benchmarks relative to its pre-distillation performance, and its thinking trajectories exhibit teacher-like behaviors such as reflection, backtracking, and verification.",
    "zh": "接受标准：蒸馏后的学生模型在数学和代码基准上相对于其蒸馏前的表现有显著提升，且其思考轨迹表现出类似教师的行为，如反思、回溯和验证。"
  },
  {
    "id": 503,
    "start": 4714.678,
    "end": 4727.178,
    "en": "Also, be aware of the cost of distillation: the student will inherit the teacher's systematic errors and verbose thinking habits (the latter can be further optimized using the AdaptThink approach from Experiment 8-10).",
    "zh": "同时要注意蒸馏的成本：学生会继承教师的系统性错误和冗长的思考习惯（后者可以通过实验8-10中的AdaptThink方法进一步优化）。"
  },
  {
    "id": 504,
    "start": 4727.332,
    "end": 4745.732,
    "en": "These four experiments share a common feature—\"writing stable mappings and protocols into parameters\": voice SFT solidifies style-control protocols, multilingual SFT solidifies thinking-organization templates, and distillation SFT solidifies the direct mapping from input to output.",
    "zh": "这四个实验有一个共同特点——“将稳定的映射和协议写入参数”：语音SFT巩固了风格控制协议，多语言SFT巩固了思维组织模板，而蒸馏SFT则巩固了输入到输出的直接映射。"
  },
  {
    "id": 505,
    "start": 4745.682,
    "end": 4755.332,
    "en": "The clearer the objective, the cleaner the format, and the more stable the evaluation criteria, the more sample-efficiently SFT can improve performance.",
    "zh": "目标越清晰，格式越规范，评估标准越稳定，SFT就能更高效地提升性能。"
  },
  {
    "id": 506,
    "start": 4755.332,
    "end": 4760.657,
    "en": "SFT Data Synthesis: From Demonstrations to Trainable Trajectories.",
    "zh": "SFT数据合成：从演示到可训练轨迹。"
  },
  {
    "id": 507,
    "start": 4760.657,
    "end": 4764.457,
    "en": "The ceiling of SFT is set first by its data.",
    "zh": "SFT的上限首先由其数据决定。"
  },
  {
    "id": 508,
    "start": 4764.457,
    "end": 4784.007,
    "en": "Real projects can rarely hand-write enough demonstrations one at a time; they usually combine a small human seed set, teacher-model generation, and verifier filtering: human demonstrations define the format and the boundaries, the teacher model scales them up, and rule-based verification or human spot checks hold the quality line.",
    "zh": "实际项目很少能逐个手写足够的演示；它们通常结合少量人工种子集、教师模型生成和验证器过滤：人工演示定义了格式和边界，教师模型对其进行扩展，基于规则的验证或人工抽查确保质量。"
  },
  {
    "id": 509,
    "start": 4784.007,
    "end": 4795.494,
    "en": "When the model bootstraps itself, you can sample several candidates for the same problem and keep only the trajectories that pass verification—this is rejection sampling fine-tuning (RFT).",
    "zh": "当模型自我启动时，你可以为同一问题采样多个候选，并仅保留通过验证的轨迹——这就是拒绝采样微调（RFT）。"
  },
  {
    "id": 510,
    "start": 4795.494,
    "end": 4809.907,
    "en": "The goal of synthetic data is not to replay production logs but to distill from them a reusable task structure: user intent, initial state, available tools, business constraints, common failure modes, and success conditions.",
    "zh": "合成数据的目标不是重放生产日志，而是从中提炼出可重复使用的任务结构：用户意图、初始状态、可用工具、业务约束、常见故障模式和成功条件。"
  },
  {
    "id": 511,
    "start": 4809.907,
    "end": 4820.819,
    "en": "Once identifying information is stripped, regenerate fictional people, orders, files, and states for each task type and place them in a resettable, isolated environment.",
    "zh": "在去除身份信息后，为每种任务类型重新生成虚构人物、订单、文件和状态，并将它们放置在一个可重置的隔离环境中。"
  },
  {
    "id": 512,
    "start": 4820.819,
    "end": 4827.682,
    "en": "This preserves the genuine difficulties while keeping the model from memorizing customer data or internal credentials.",
    "zh": "这可以保留真实难度，同时防止模型记住客户数据或内部凭证。"
  },
  {
    "id": 513,
    "start": 4827.682,
    "end": 4838.169,
    "en": "A dependable pipeline runs: production data → task blueprint → synthetic task → multiple candidate trajectories → task verification and trajectory verification → SFT data.",
    "zh": "一个可靠的流程运行：生产数据 → 任务蓝图 → 合成任务 → 多个候选轨迹 → 任务验证和轨迹验证 → SFT 数据。"
  },
  {
    "id": 514,
    "start": 4838.169,
    "end": 4851.832,
    "en": "Task verification checks whether the problem itself is solvable, whether its difficulty is appropriate, and whether the reference result is correct; trajectory verification checks the final state, the tool calls, and the business constraints.",
    "zh": "任务验证检查问题本身是否可解、难度是否合适以及参考结果是否正确；轨迹验证检查最终状态、工具调用和业务约束。"
  },
  {
    "id": 515,
    "start": 4851.832,
    "end": 4866.707,
    "en": "Conditions that can be written as unit tests, database assertions, or state-diff checks should use deterministic code first; open-ended qualities such as communication quality are then supplemented by a model evaluator and calibrated by human sampling.",
    "zh": "可以写成单元测试、数据库断言或状态差分检查的条件应优先使用确定性代码；开放性质量如沟通质量则通过模型评估器补充，并通过人工采样校准。"
  },
  {
    "id": 516,
    "start": 4866.707,
    "end": 4875.507,
    "en": "Skill graphs, executable environments, and independent verifiers can further widen task coverage and filter out invalid trajectories.",
    "zh": "技能图、可执行环境和独立验证者可以进一步扩大任务覆盖范围并过滤无效轨迹。"
  },
  {
    "id": 517,
    "start": 4875.507,
    "end": 4897.819,
    "en": "The same task and verification infrastructure can later be turned into an RL environment, but the two stages use it differently: SFT keeps only the successful trajectories that passed verification, learning stable formats, procedures, and basic actions; RL has the current policy roll out again and uses environment rewards to explore paths beyond the demonstrations.",
    "zh": "相同的任务和验证基础设施之后可以转换为 RL 环境，但两个阶段使用方式不同：SFT 仅保留通过验证的成功轨迹，学习稳定格式、程序和基本动作；RL 让当前策略重新运行，并利用环境奖励探索演示之外的路径。"
  },
  {
    "id": 518,
    "start": 4897.819,
    "end": 4910.944,
    "en": "Failed trajectories should not be fed in directly as correct demonstrations—they can be used to construct preference pairs, to reveal gaps in task coverage, or to be added to training after a diagnosis and a fix have been appended.",
    "zh": "失败轨迹不应直接作为正确示例输入——它们可以用于构建偏好对，揭示任务覆盖范围的差距，或在诊断和修复后添加到训练中。"
  },
  {
    "id": 519,
    "start": 4910.944,
    "end": 4916.944,
    "en": "What matters in data synthesis is not volume but coverage, diversity, and accuracy.",
    "zh": "数据合成的关键不在于数量，而在于覆盖范围、多样性和准确性。"
  },
  {
    "id": 520,
    "start": 4916.944,
    "end": 4932.132,
    "en": "The training set should also be deduplicated and split by task template, customer, or time period, and the evaluation set must come from non-overlapping task types; reference solutions, hidden tests, and verifier feedback must not leak to the model.",
    "zh": "训练集还应去重并按任务模板、客户或时间段划分，评估集必须来自不重叠的任务类型；参考解决方案、隐藏测试和验证器反馈不得泄露给模型。"
  },
  {
    "id": 521,
    "start": 4932.292,
    "end": 4937.317,
    "en": "The bad cases from Chapter 7 can also be turned into training data here.",
    "zh": "第七章中的不良案例也可以在此转化为训练数据。"
  },
  {
    "id": 522,
    "start": 4937.267,
    "end": 4955.479,
    "en": "Take the Coding Agent's \"premature completion\": first cut out the trajectory prefix up to the point where it is about to declare completion, then treat that premature declaration as the rejected sample and \"run the tests first, check the acceptance conditions one by one, and only then conclude\" as the chosen sample.",
    "zh": "以编码智能体的“过早完成”为例：首先截取轨迹前缀直到它即将声明完成的点，然后将该过早声明视为拒绝样本，“先运行测试，逐一检查接受条件，然后才得出结论”视为选择样本。"
  },
  {
    "id": 523,
    "start": 4955.479,
    "end": 4970.367,
    "en": "Data like this suits DPO or decision-boundary demonstrations rather than being used directly as correct SFT trajectories; the failure reason, the applicable conditions, and the verifier should be stored with the sample so it can be traced and re-examined.",
    "zh": "这类数据更适合 DPO 或决策边界示例，而不是直接作为正确的 SFT 轨迹；应与样本一起存储失败原因、适用条件和验证器，以便追溯和重新检查。"
  },
  {
    "id": 524,
    "start": 4970.367,
    "end": 4983.967,
    "en": "The build_preference_data.py in Experiment 8-17 offers two construction paths—a deterministic template and a teacher model—and keeps the training data separate from the evaluation set that follows.",
    "zh": "实验 8-17 中的 build_preference_data.py 提供了两种构建路径——确定性模板和教师模型——并保持训练数据与后续评估集分离。"
  },
  {
    "id": 525,
    "start": 4983.967,
    "end": 4989.979,
    "en": "The two Bad Case experiments added in this chapter demonstrate two different supervision targets.",
    "zh": "本章新增的两个不良案例实验展示了两种不同的监督目标。"
  },
  {
    "id": 526,
    "start": 4989.979,
    "end": 5006.379,
    "en": "The Chinese curly-quote case first distills the feedback into a scope-sensitive documentation Skill and then runs SFT on structured synthetic data; the special-string case turns old_string mismatches into a byte-exact copying task, training token-by-token fidelity.",
    "zh": "中文引号案例首先将反馈提炼为与作用域相关的文档技能，然后在结构化合成数据上运行SFT；特殊字符串案例将旧字符串不匹配转化为字节精确的复制任务，训练逐标记的保真度。"
  },
  {
    "id": 527,
    "start": 5006.379,
    "end": 5020.704,
    "en": "Both share Chapter 7's failure-attribution and train/eval isolation protocols, but they do not share a total score: the former tests \"change what should change, leave what should be left,\" the latter tests \"copy verbatim.",
    "zh": "两者都共享第7章的故障归因和训练/评估隔离协议，但它们不共享总分：前者测试“改变应改变的，保留应保留的”，后者测试“逐字复制”。"
  },
  {
    "id": 528,
    "start": 5020.704,
    "end": 5024.842,
    "en": "When to Choose Mid-training, SFT, and RL.",
    "zh": "何时选择中训练、SFT和RL。"
  },
  {
    "id": 529,
    "start": 5024.842,
    "end": 5033.229,
    "en": "The section \"From Pre-training to RL: An Overview of the Four Training Stages\" explained the mechanics of all three training methods.",
    "zh": "“从预训练到RL：四个训练阶段概述”一节解释了所有三种训练方法的机制。"
  },
  {
    "id": 530,
    "start": 5033.229,
    "end": 5044.667,
    "en": "This section gives a practical diagnosis: first decide whether the missing piece is the foundation, the protocol, or the policy; do not treat every model failure as a need for RL.",
    "zh": "本节提供了一个实用诊断：首先决定缺失的部分是基础、协议还是策略；不要将每个模型失败都视为需要RL的信号。"
  },
  {
    "id": 531,
    "start": 5044.667,
    "end": 5053.967,
    "en": "As illustrated in Figure 8-11: SFT→RL Two-Stage Training Pipeline; Mid-training Precedes These Two Behavioral-Alignment Stages.",
    "zh": "如图8-11所示：SFT→RL两阶段训练流水线；中训练先于这两个行为对齐阶段。"
  },
  {
    "id": 532,
    "start": 5053.967,
    "end": 5059.692,
    "en": "Table 8-4 Criteria for Choosing Mid-training, SFT, and RL",
    "zh": "表8-4 选择中训练、SFT和RL的标准"
  },
  {
    "id": 533,
    "start": 5059.692,
    "end": 5089.842,
    "en": "Observed behavior: The model does not know domain concepts, the language, or basic operations; pass@k stays near zero under reasonable sampling; Main gap: Knowledge and capability are outside the base model's effective support; Preferred method: Mid-training; use RAG for dynamic facts; Gate for moving on: Held-out domain results improve, general retention remains acceptable, and the target task begins to yield verifiably correct or partially correct trajectories.",
    "zh": "观察到的行为：模型不了解领域概念、语言或基本操作；在合理采样下pass@k接近零；主要差距：知识和能力超出基础模型的有效支持；首选方法：中训练；对于动态事实使用RAG；继续的门限：保留领域结果改善，通用保留保持可接受，目标任务开始产生可验证正确或部分正确的轨迹。"
  },
  {
    "id": 534,
    "start": 5089.842,
    "end": 5112.954,
    "en": "Observed behavior: The model is occasionally correct, but format, tool schema, tone, or fixed procedure is unstable; Main gap: Behavioral protocol has not been solidified; Preferred method: SFT or constrained decoding; Gate for moving on: Parse success stabilizes, and a verifier can reliably score key actions and output protocols.",
    "zh": "观察到的行为：模型偶尔正确，但格式、工具模式、语气或固定流程不稳定；主要差距：行为协议尚未稳固；首选方法：SFT或约束解码；继续的门限：解析成功率稳定，验证器可以可靠地评分关键动作和输出协议。"
  },
  {
    "id": 535,
    "start": 5112.954,
    "end": 5139.292,
    "en": "Observed behavior: Success is nonzero and rewards are reliable, but good policies have low probability or long-horizon decisions and OOD generalization remain weak; Main gap: Probability allocation and policy optimization; Preferred method: RL; Gate for moving on: Reward agrees with the real objective, rollout groups have enough reward variation, and independent test performance improves during training.",
    "zh": "观察到的行为：成功非零且奖励可靠，但好的策略概率低或长视野决策和OOD泛化仍然薄弱；主要差距：概率分配和策略优化；首选方法：RL；继续的门限：奖励与实际目标一致，滚动组有足够的奖励变化，并且在训练期间独立测试性能提高。"
  },
  {
    "id": 536,
    "start": 5139.292,
    "end": 5162.942,
    "en": "Observed behavior: Only a few stable demonstrations exist and no interactive environment is available; Main gap: Imitable data exists, online feedback does not; Preferred method: SFT/RFT/offline preference optimization; Gate for moving on: Establish a baseline and evaluation first, then decide whether building an RL environment is worthwhile.",
    "zh": "观察到的行为：只有少数稳定的演示存在，且没有交互环境可用；主要差距：可模仿的数据存在，但在线反馈不存在；首选方法：SFT/RFT/离线偏好优化；继续的门限：首先建立基准和评估，然后决定构建RL环境是否值得。"
  },
  {
    "id": 537,
    "start": 5162.942,
    "end": 5165.379,
    "en": "Make the decision in this order:",
    "zh": "按此顺序做出决策："
  },
  {
    "id": 538,
    "start": 5165.379,
    "end": 5169.204,
    "en": "First rule out solutions that do not modify weights.",
    "zh": "首先排除不修改权重的解决方案。"
  },
  {
    "id": 539,
    "start": 5169.204,
    "end": 5176.479,
    "en": "If prompts, tools, code constraints, or context management solve the behavior problem, do not train.",
    "zh": "如果提示、工具、代码约束或上下文管理解决了行为问题，则不要训练。"
  },
  {
    "id": 540,
    "start": 5176.479,
    "end": 5182.442,
    "en": "Prefer RAG for facts that need frequent updates, citations, or deletion.",
    "zh": "对于需要频繁更新、引用或删除的事实，优先使用RAG。"
  },
  {
    "id": 541,
    "start": 5182.612,
    "end": 5186.499,
    "en": "Measure capability support on a target held-out set.",
    "zh": "在目标保留集上衡量能力支持。"
  },
  {
    "id": 542,
    "start": 5186.449,
    "end": 5197.824,
    "en": "Do not look only at greedy pass@1; under a fixed sampling setup, also measure pass@k, partial-progress rate, parse rate, and manually audit failure causes.",
    "zh": "不要只关注贪心通过率pass@1；在固定采样设置下，还应测量pass@k、部分进度率、解析率，并手动审核失败原因。"
  },
  {
    "id": 543,
    "start": 5197.824,
    "end": 5207.849,
    "en": "If pass@k remains near zero and failures cluster around knowledge or foundational capability, use Mid-training first and remeasure before choosing a later stage.",
    "zh": "如果pass@k仍接近零且失败集中在知识或基础能力上，先使用中训练，重新测量后再决定后续阶段。"
  },
  {
    "id": 544,
    "start": 5207.849,
    "end": 5213.087,
    "en": "Use SFT to establish protocols, not to stuff in a knowledge base.",
    "zh": "使用SFT建立协议，而不是往知识库中塞入内容。"
  },
  {
    "id": 545,
    "start": 5213.087,
    "end": 5224.649,
    "en": "When the model can do the task but cannot do it as required, use high-quality demonstrations to solidify JSON schemas, tool calls, terminology, procedures, and style.",
    "zh": "当模型可以完成任务但无法按要求完成时，使用高质量的示范来巩固JSON模式、工具调用、术语、流程和风格。"
  },
  {
    "id": 546,
    "start": 5224.649,
    "end": 5232.649,
    "en": "A few facts may enter the parameters with the demonstrations, but a handful of QA pairs should not carry a large knowledge base.",
    "zh": "一些事实可能通过示范进入参数中，但少量的问答对不应承载大型知识库。"
  },
  {
    "id": 547,
    "start": 5232.649,
    "end": 5236.162,
    "en": "Use RL only when there is something to explore.",
    "zh": "只有存在可探索的内容时才使用强化学习。"
  },
  {
    "id": 548,
    "start": 5236.162,
    "end": 5245.599,
    "en": "RL is appropriate when the current policy already produces scoreable, occasionally successful rollouts and the reward faithfully represents deployment goals.",
    "zh": "当当前策略已经产生可评分的偶尔成功轨迹，并且奖励能忠实反映部署目标时，强化学习是合适的。"
  },
  {
    "id": 549,
    "start": 5245.599,
    "end": 5259.287,
    "en": "If pass@k is near zero, first use Mid-training/SFT or design a reachable curriculum and partial rewards; applying PPO or GRPO directly to all-zero rollouts usually only burns sampling budget.",
    "zh": "如果pass@k接近零，首先使用中训练/SFT或设计一个可实现的课程和部分奖励；直接将PPO或GRPO应用于全零轨迹通常只会消耗采样预算。"
  },
  {
    "id": 550,
    "start": 5259.287,
    "end": 5264.362,
    "en": "This flow does not require every project to run all three methods in order.",
    "zh": "此流程不需要每个项目都按顺序运行所有三种方法。"
  },
  {
    "id": 551,
    "start": 5264.362,
    "end": 5276.262,
    "en": "A strong base model may enter RL directly, a format-only task may need only SFT, and stable domain knowledge may need Mid-training followed by reuse of the model's existing alignment.",
    "zh": "强大的基础模型可以直接进入强化学习，仅需格式的任务可能只需要SFT，而稳定的领域知识可能需要中训练后复用模型现有的对齐。"
  },
  {
    "id": 552,
    "start": 5276.262,
    "end": 5284.499,
    "en": "The key is that every transition has a measurable entry condition rather than treating \"Mid-training → SFT → RL\" as a ritual pipeline.",
    "zh": "关键在于每个转换都有可测量的进入条件，而不是将“中训练→SFT→强化学习”视为一种仪式化的流程。"
  },
  {
    "id": 553,
    "start": 5284.499,
    "end": 5290.062,
    "en": "Single-Turn Reinforcement Learning: A Comparison of Memory and Generalization.",
    "zh": "单轮强化学习：记忆与泛化的比较。"
  },
  {
    "id": 554,
    "start": 5290.062,
    "end": 5301.424,
    "en": "Single-turn\" means the task is completed in one interaction: the model receives input, produces output, and receives a reward, without needing to maintain state across steps.",
    "zh": "'单轮'意味着任务在一个交互中完成：模型接收输入，生成输出，并接收奖励，而无需在步骤间维持状态。"
  },
  {
    "id": 555,
    "start": 5301.424,
    "end": 5311.649,
    "en": "This simplified setting allows us to focus on the fundamental differences in learning mechanisms between SFT and RL, without the complexity of multi-turn interactions.",
    "zh": "这种简化设置使我们能够专注于SFT和RL之间学习机制的基本差异，而不受多轮交互复杂性的影响。"
  },
  {
    "id": 556,
    "start": 5311.649,
    "end": 5323.524,
    "en": "The single-turn scenario provides clear controlled experimental conditions: the same task, the same base model, the same computational budget, with the only variable being the training method.",
    "zh": "单次交互场景提供了清晰的受控实验条件：相同任务、相同基础模型、相同计算预算，唯一变量是训练方法。"
  },
  {
    "id": 557,
    "start": 5323.524,
    "end": 5336.962,
    "en": "The first experiment demonstrates how RL learns the meta-strategy of \"when to think\"; the second experiment uses an arithmetic reasoning card game to systematically quantify \"SFT memorizes, RL generalizes.",
    "zh": "第一个实验展示了RL如何学习\"何时思考\"的元策略；第二个实验使用算术推理卡片游戏系统地量化\"SFT记忆，RL泛化\"。"
  },
  {
    "id": 558,
    "start": 5336.962,
    "end": 5345.962,
    "en": "Before the experiments, let's build some minimal intuition about RL algorithms, enough to follow the terms that come up in the experiments that follow.",
    "zh": "在实验开始之前，让我们建立一些关于RL算法的最小直觉，足以理解后续实验中出现的术语。"
  },
  {
    "id": 559,
    "start": 5345.962,
    "end": 5362.812,
    "en": "The RL training in this chapter mostly rests on the policy gradient: the model generates several responses to the same problem, increasing the probability of high-reward responses and decreasing that of low-reward responses—moving further in rewarding directions and less in unrewarding ones.",
    "zh": "本章的RL训练主要基于策略梯度：模型对同一问题生成多个响应，增加高奖励响应的概率，降低低奖励响应的概率——向奖励方向移动，减少非奖励方向的移动。"
  },
  {
    "id": 560,
    "start": 5362.812,
    "end": 5386.312,
    "en": "To discourage a single large update from derailing the model, mainstream PPO clips additional gains in its surrogate objective when a probability ratio falls outside a specified range; this discourages large changes but does not impose a hard constraint on policy movement (the later experiments use \"PPO with a value network,\" whose value network estimates a baseline for finer-grained advantages).",
    "zh": "为了防止一次大的更新使模型偏离轨道，主流PPO在其替代目标中当概率比超出指定范围时会限制额外收益；这会抑制大变化，但不会对策略移动施加硬性约束（后续实验使用的是\"带价值网络的PPO\"，其价值网络估计一个基线以进行更细致的优势评估）。"
  },
  {
    "id": 561,
    "start": 5386.312,
    "end": 5396.924,
    "en": "The other method, GRPO, trains no value network; instead it compares multiple responses to the same problem against one another to judge each one's relative quality.",
    "zh": "另一种方法GRPO不训练价值网络；相反，它将同一问题的多个响应相互比较以判断每个响应的相对质量。"
  },
  {
    "id": 562,
    "start": 5396.924,
    "end": 5400.999,
    "en": "That intuition is all you need for the next two experiments.",
    "zh": "这个直觉就足够你完成接下来的两个实验了。"
  },
  {
    "id": 563,
    "start": 5400.999,
    "end": 5405.862,
    "en": "The same mechanism can be written as the Python-style pseudocode below.",
    "zh": "这种机制可以用下面的Python风格伪代码表示。"
  },
  {
    "id": 564,
    "start": 5405.862,
    "end": 5415.737,
    "en": "It omits sampling parallelism, KL regularization, and optimizer details, marking only the causal chain from one rollout to a parameter update:",
    "zh": "它省略了并行采样、KL正则化和优化器细节，只标记从一次rollout到参数更新的因果链："
  },
  {
    "id": 565,
    "start": 5415.737,
    "end": 5425.037,
    "en": "Here is the trajectory representation tracking the sequence of user prompts, model decisions, and environment observations across execution steps.",
    "zh": "这是轨迹表示，跟踪执行步骤中用户提示、模型决策和环境观察的序列。"
  },
  {
    "id": 566,
    "start": 5425.037,
    "end": 5429.637,
    "en": "PPO's value network and clipped objective can be written separately:",
    "zh": "PPO的价值网络和裁剪目标可以分别表示为："
  },
  {
    "id": 567,
    "start": 5429.637,
    "end": 5438.937,
    "en": "Here is the trajectory representation tracking the sequence of user prompts, model decisions, and environment observations across execution steps.",
    "zh": "这是轨迹表示，跟踪执行步骤中用户提示、模型决策和环境观察的序列。"
  },
  {
    "id": 568,
    "start": 5439.1,
    "end": 5455.712,
    "en": "The \"relative\" in GRPO comes from comparing rollouts within a group for the same prompt; the old_policy in PPO is the frozen policy snapshot that generated this batch of rollouts, and the probability ratio measures how far the current policy has already moved from it.",
    "zh": "GRPO中的\"相对\"来自于对同一提示组内rollouts的比较；PPO中的old_policy是生成此批rollouts的冻结策略快照，概率比衡量当前策略已经从它移动了多远。"
  },
  {
    "id": 569,
    "start": 5455.662,
    "end": 5468.012,
    "en": "Clipping discourages large steps but is not a hard constraint on policy movement; both still depend on a reliable environment and reward, and the specific training adaptations appear in the corresponding experiments.",
    "zh": "裁剪会抑制大步长，但不是对策略移动的硬性约束；两者仍然依赖于可靠的环境和奖励，具体的训练适应出现在相应的实验中。"
  },
  {
    "id": 570,
    "start": 5468.012,
    "end": 5475.237,
    "en": "Experiment 8-10 intermediate difficulty, two stars: : AdaptThink—Learning \"When Not to Think\"",
    "zh": "实验8-10 中等难度，两颗星：AdaptThink—学习\"何时不该思考\""
  },
  {
    "id": 571,
    "start": 5475.237,
    "end": 5487.025,
    "en": "Large reasoning models (e.g., OpenAI o1, DeepSeek-R1) generate lengthy chain-of-thought for all problems, causing unnecessary overhead on simple problems.",
    "zh": "大型推理模型（例如OpenAI o1、DeepSeek-R1）会对所有问题生成长链式思维，这在简单问题上会造成不必要的开销。"
  },
  {
    "id": 572,
    "start": 5487.025,
    "end": 5501.7,
    "en": "The experiment first validates an intuition: NoThinking mode (skipping thinking via <think></think>) performs comparably or even better on simple problems; only when facing difficult problems does the advantage of Thinking mode become apparent.",
    "zh": "实验首先验证了一个直觉：在简单问题上，NoThinking模式（通过<think> </think>跳过思考过程）的表现与Thinking模式相当甚至更好；只有在面对困难问题时，Thinking模式的优势才会显现。"
  },
  {
    "id": 573,
    "start": 5501.7,
    "end": 5506.725,
    "en": "AdaptThink uses RL to train the model to adaptively choose the mode.",
    "zh": "AdaptThink通过强化学习训练模型以自适应地选择模式。"
  },
  {
    "id": 574,
    "start": 5506.725,
    "end": 5508.975,
    "en": "Two core components:",
    "zh": "两个核心组件："
  },
  {
    "id": 575,
    "start": 5508.975,
    "end": 5516.087,
    "en": "Constrained Optimization Objective: Encourages NoThinking while ensuring overall performance does not degrade.",
    "zh": "约束优化目标：鼓励使用NoThinking模式，同时确保整体性能不会下降。"
  },
  {
    "id": 576,
    "start": 5516.087,
    "end": 5539.8,
    "en": "Importance Sampling Strategy: Balances Thinking and NoThinking samples to solve the cold-start problem (here, cold start specifically refers to the initial model almost always choosing Thinking, leaving the NoThinking branch with too few samples to learn effectively; this differs from the earlier use of \"cold-start SFT\" for DeepSeek-R1, which involves a small number of demonstration examples).",
    "zh": "重要性采样策略：平衡Thinking和NoThinking样本，解决冷启动问题（此处的冷启动特指初始模型几乎总是选择Thinking，导致NoThinking分支样本过少，难以有效学习；这与之前用于DeepSeek-R1的“冷启动SFT”不同，后者涉及少量示范示例）。"
  },
  {
    "id": 577,
    "start": 5539.8,
    "end": 5555.337,
    "en": "The \"importance sampling\" mentioned here is a common statistical method—when the sampling distribution is biased towards a certain class of samples, weights are applied to the samples to \"correct\" the distribution, ensuring that the learning signal fairly covers all classes.",
    "zh": "此处提到的“重要性采样”是一种常见的统计方法——当采样分布偏向某一类样本时，会对样本应用权重以“校正”分布，确保学习信号公平地覆盖所有类别。"
  },
  {
    "id": 578,
    "start": 5555.337,
    "end": 5562.125,
    "en": "This idea is repeatedly used in RL algorithms like PPO and DAPO discussed later in this book.",
    "zh": "这一想法在本书后续讨论的RL算法如PPO和DAPO中被反复使用。"
  },
  {
    "id": 579,
    "start": 5562.125,
    "end": 5567.5,
    "en": "The canonical record of this historical training run is the checkpoint-free training report.",
    "zh": "这次历史训练运行的标准记录是无检查点的训练报告。"
  },
  {
    "id": 580,
    "start": 5567.5,
    "end": 5575.562,
    "en": "The public W&B main run wubbn5tj used 8×NVIDIA H100 80GB GPUs.",
    "zh": "公开的W&B主运行wubbn5tj使用了8×NVIDIA H100 80GB GPU。"
  },
  {
    "id": 581,
    "start": 5575.562,
    "end": 5628.525,
    "en": "From step 0→300, MATH500 accuracy changed from 0.8100→0.8180 (+0.80 pp) while response length changed from 4911.46→1576.62 (-67.90%); GSM8K changed from 0.796816→0.818802 (+2.20 pp) and 1025.24→477.33 (-53.44%); and AIME mean@16 changed from 0.314583→0.310417 (-0.42 pp) and 12119.51→6402.23 (-47.17%).",
    "zh": "从步骤0→300，MATH500准确率从0.8100→0.8180（+0.80 pp），而响应长度从4911.46→1576.62（-67.90%）；GSM8K从0.796816→0.818802（+2.20 pp）且1025.24→477.33（-53.44%）；AIME mean@16从0.314583→0.310417（-0.42 pp）且12119.51→6402.23（-47.17%）。"
  },
  {
    "id": 582,
    "start": 5628.525,
    "end": 5637.7,
    "en": "The corresponding NoThinking ratios were 83.80%, 84.15%, and 56.25%.",
    "zh": "相应的NoThinking比例分别为83.80%、84.15%和56.25%。"
  },
  {
    "id": 583,
    "start": 5637.7,
    "end": 5650.612,
    "en": "These results show a routing signal aligned with difficulty at the aggregate dataset level, but they do not justify calling it \"perfect difficulty awareness\" on every problem or claiming that accuracy improved universally.",
    "zh": "这些结果表明在整体数据集层面上存在与难度对齐的路由信号，但并不能证明它在每个问题上都具有‘完美的难度感知’，也不能声称准确率普遍提升。"
  },
  {
    "id": 584,
    "start": 5650.612,
    "end": 5665.287,
    "en": "After the report's selected measurement point, the run continued to step 410 and 36.92 cumulative hours before W&B marked it as crashed; the configured 10 epochs / 3,140 steps were not completed.",
    "zh": "在报告选定的测量点之后，该运行继续到步骤410，并持续了36.92小时后W&B将其标记为崩溃；配置的10个epoch/3,140步未完成。"
  },
  {
    "id": 585,
    "start": 5665.287,
    "end": 5681.325,
    "en": "Although step 300 contains a checkpoint-timing event, the checkpoint is not distributed with the book, and there is no independent evidence confirming that it was successfully evaluated with run_eval_verl_hf.sh or used to rerun MMLU.",
    "zh": "尽管步骤300包含一个检查点时间事件，但该检查点并未随本书发布，也没有独立证据表明它已成功通过run_eval_verl_hf.sh评估或用于重新运行MMLU。"
  },
  {
    "id": 586,
    "start": 5681.325,
    "end": 5692.275,
    "en": "The historical source commit is 9e588202…; future reproductions are pinned to its direct child commit 0033ad172…",
    "zh": "历史源提交是9e588202…；未来重现被固定在其直接子提交0033ad172…"
  },
  {
    "id": 587,
    "start": 5692.275,
    "end": 5705.137,
    "en": "The three entry-point files are unchanged, but the -fl- path generated by the training script is incompatible with the -fl4096 path hard-coded in the evaluation script and must be corrected manually.",
    "zh": "三个入口文件未更改，但训练脚本生成的-fl-路径与评估脚本中硬编码的-fl4096路径不兼容，必须手动更正。"
  },
  {
    "id": 588,
    "start": 5705.137,
    "end": 5720.25,
    "en": "AdaptThink complements prompt distillation to form a \"fast-slow dual system\": distillation reduces the proportion of tasks that require thinking, while AdaptThink optimizes the triggering strategy for the remaining tasks, jointly improving thinking efficiency.",
    "zh": "AdaptThink与提示蒸馏相结合，形成\"快慢双系统\"：蒸馏减少了需要思考的任务比例，而AdaptThink优化了剩余任务的触发策略，共同提高思考效率。"
  },
  {
    "id": 589,
    "start": 5720.404,
    "end": 5730.379,
    "en": "Experiment 8-11 intermediate difficulty, two stars: : GeneralPoints—A \"Memory and Generalization\" Comparison in Single-Turn RL",
    "zh": "实验8-11中等难度，两颗星：GeneralPoints—单次回合强化学习中的\"记忆与泛化\"比较"
  },
  {
    "id": 590,
    "start": 5730.329,
    "end": 5740.066,
    "en": "As illustrated in Figure 8-12: GeneralPoints Experimental Architecture (Training and Testing Design for GP-L and GP-VL Variants).",
    "zh": "如图8-12所示：GeneralPoints实验架构（GP-L和GP-VL变体的训练与测试设计）。"
  },
  {
    "id": 591,
    "start": 5740.066,
    "end": 5748.366,
    "en": "GeneralPoints is an arithmetic reasoning card game proposed by Chu et al., specifically designed to evaluate model generalization.",
    "zh": "GeneralPoints是由Chu等人提出的一种算术推理纸牌游戏，专门设计用于评估模型的泛化能力。"
  },
  {
    "id": 592,
    "start": 5748.366,
    "end": 5761.391,
    "en": "The objective resembles the \"24 Game\": use each of the four numbers shown on the cards exactly once, combining them with addition, subtraction, multiplication, and division to reach the target number 24.",
    "zh": "目标类似于\"24点游戏\"：使用卡片上显示的四个数字各一次，通过加、减、乘、除运算得到目标数字24。"
  },
  {
    "id": 593,
    "start": 5761.391,
    "end": 5773.241,
    "en": "The experiment designs two variants: the text-only GP-L and the image-based GP-VL, allowing us to examine rule generalization and visual generalization within the same framework.",
    "zh": "该实验设计了两种变体：仅文本的GP-L和基于图像的GP-VL，使我们能够在相同框架内研究规则泛化和视觉泛化。"
  },
  {
    "id": 594,
    "start": 5773.241,
    "end": 5792.904,
    "en": "Rule Variant: During training, J/Q/K are all counted as 10; during testing, they are counted as 11/12/13 respectively, ensuring the test set contains unseen number combinations (operations involving 11, 12, 13) to strictly evaluate generalization.",
    "zh": "规则变体：在训练期间，J/Q/K均计为10；在测试期间，分别计为11/12/13，以确保测试集包含未见过的数字组合（涉及11、12、13的运算），严格评估泛化能力。"
  },
  {
    "id": 595,
    "start": 5792.904,
    "end": 5804.641,
    "en": "Visual Variant: Training uses black suits (♠♣), testing uses red suits (♥♦), to evaluate robustness to changes in visual appearance.",
    "zh": "视觉变体：训练使用黑桃（♠♣），测试使用红心（♥♦），以评估对视觉外观变化的鲁棒性。"
  },
  {
    "id": 596,
    "start": 5804.641,
    "end": 5827.254,
    "en": "Using Llama-3.2-Vision-11B, the experiment follows the standard post-training pipeline: first, SFT initialization gives the model basic instruction-following ability; then, under the same computational budget, the model undergoes additional SFT and RL training in separate branches, with PPO and a value network used for RL.",
    "zh": "使用Llama-3.2-Vision-11B，实验遵循标准后训练流程：首先进行SFT初始化，使模型具备基本的指令遵循能力；然后，在相同的计算预算下，模型在单独分支中进行额外的SFT和RL训练，RL使用PPO和价值网络。"
  },
  {
    "id": 597,
    "start": 5827.254,
    "end": 5839.366,
    "en": "Both branches are trained on data using the single rule J/Q/K=10 and evaluated on in-distribution (ID) and out-of-distribution (OOD) test sets.",
    "zh": "两个分支均在使用单一规则J/Q/K=10的数据上进行训练，并在分布内（ID）和分布外（OOD）测试集上进行评估。"
  },
  {
    "id": 598,
    "start": 5839.366,
    "end": 5843.154,
    "en": "The results show a clear difference in this controlled setting.",
    "zh": "结果在这一受控设置中显示出明显差异。"
  },
  {
    "id": 599,
    "start": 5843.154,
    "end": 5867.666,
    "en": "Rule OOD: RL improves by +3.5 percentage points on GP-L (11.5%→15.0%), while SFT decreases by 8.1 percentage points (11.5%→3.4%); on GP-VL, RL improves by +3.0 percentage points, while SFT decreases by 5.6 percentage points.",
    "zh": "规则OOD：在GP-L上，RL提升了3.5个百分点（11.5%→15.0%），而SFT下降了8.1个百分点（11.5%→3.4%）；在GP-VL上，RL提升了3.0个百分点，而SFT下降了5.6个百分点。"
  },
  {
    "id": 600,
    "start": 5867.666,
    "end": 5884.529,
    "en": "Visual OOD: RL improves by +17.6 percentage points on GP-VL (23.6%→41.2%), while SFT decreases by 9.9 percentage points (23.6%→13.7%).",
    "zh": "视觉OOD：在GP-VL上，RL提升了17.6个百分点（23.6%→41.2%），而SFT下降了9.9个百分点（23.6%→13.7%）。"
  },
  {
    "id": 601,
    "start": 5884.529,
    "end": 5906.141,
    "en": "Tracking visual recognition accuracy reveals that RL improves the underlying visual encoder through outcome-oriented optimization, and this improvement is highly correlated with overall performance gains; in contrast, SFT overfits to the token patterns in the thinking process, neglecting the learning of visual tokens, leading to a decrease in recognition accuracy.",
    "zh": "跟踪视觉识别准确率显示，通过以结果为导向的优化，强化学习改进了底层的视觉编码器，这种改进与整体性能提升高度相关；相比之下，SFT过度拟合思维过程中的标记模式，忽视了视觉标记的学习，导致识别准确率下降。"
  },
  {
    "id": 602,
    "start": 5906.141,
    "end": 5924.804,
    "en": "The experiment also shows that RL required SFT initialization in this setting: with a Llama-3.2-Vision-11B-scale base model and strict structured-output requirements, end-to-end RL without SFT failed completely because the base model could not produce scoreable structured outputs.",
    "zh": "实验还表明，在这种情况下，强化学习需要SFT初始化：使用Llama-3.2-Vision-11B规模的基础模型和严格的结构化输出要求，没有SFT的端到端强化学习完全失败，因为基础模型无法生成可评分的结构化输出。"
  },
  {
    "id": 603,
    "start": 5924.804,
    "end": 5937.041,
    "en": "This is specific to the setting, not a universal law; a sufficiently strong base model can skip SFT and succeed with direct RL (see the earlier discussion of DeepSeek-R1-Zero).",
    "zh": "这特定于该设置，并非普遍规律；一个足够强大的基础模型可以跳过SFT，直接进行强化学习并取得成功（参见DeepSeek-R1-Zero的早期讨论）。"
  },
  {
    "id": 604,
    "start": 5937.041,
    "end": 5955.466,
    "en": "Another noteworthy finding is that, in this experiment, more verification iterations produced better measured generalization: 10 iterations yielded +5.99% versus +0.48% for one iteration, making test-time computation an important factor in the observed gain.",
    "zh": "另一个值得注意的发现是，在本次实验中，更多的验证迭代产生了更好的测量泛化能力：10次迭代带来了+5.99%，而一次迭代只有+0.48%，这使测试时的计算成为观察到的增益的重要因素。"
  },
  {
    "id": 605,
    "start": 5955.466,
    "end": 5961.366,
    "en": "Why did SFT degrade under this experiment's distribution shift while RL performed better?",
    "zh": "为什么在本次实验的分布变化下SFT表现下降而强化学习表现更好？"
  },
  {
    "id": 606,
    "start": 5961.366,
    "end": 5973.554,
    "en": "One explanation consistent with the observations is that the limited SFT data reinforced the fixed pattern \"treat J/Q/K as 10,\" which remained active when J changed to 11.",
    "zh": "一个与观察结果一致的解释是，有限的SFT数据强化了固定的模式“将J/Q/K视为10”，当J变为11时，这一模式仍然有效。"
  },
  {
    "id": 607,
    "start": 5973.554,
    "end": 5984.229,
    "en": "The outcome-trained RL branch was more likely to reinforce a strategy of recalculating until it reached the correct result, allowing the same procedure to apply after the rule changed.",
    "zh": "经过结果训练的强化学习分支更可能强化一种重新计算直到获得正确结果的策略，使得同样的程序在规则改变后仍能适用。"
  },
  {
    "id": 608,
    "start": 5984.229,
    "end": 5994.666,
    "en": "This explains the experiment's memorization-versus-generalization contrast; it does not imply that SFT can only memorize or that RL must learn a general algorithm.",
    "zh": "这解释了实验中的记忆与泛化对比；它并不意味着SFT只能记忆或强化学习必须学习通用算法。"
  },
  {
    "id": 609,
    "start": 5994.82,
    "end": 6010.582,
    "en": "The core contribution of this experiment is its systematic quantification, within the limited GeneralPoints setting, of SFT's overfitting tendency and RL's better out-of-distribution performance, with the same pattern observed in both text-only and vision-language variants.",
    "zh": "本次实验的核心贡献是在有限的GeneralPoints设置内系统地量化了SFT的过拟合倾向以及强化学习在分布外表现的优越性，两种方法在文本仅和视觉语言变体中均表现出相同模式。"
  },
  {
    "id": 610,
    "start": 6010.532,
    "end": 6018.982,
    "en": "In this setting, SFT stabilized the format and RL explored strategies on that foundation, making the two methods complementary.",
    "zh": "在这种设置下，SFT稳定了格式，强化学习在此基础上探索策略，使这两种方法相辅相成。"
  },
  {
    "id": 611,
    "start": 6018.982,
    "end": 6024.045,
    "en": "RL Algorithms: From 16 Rollouts to One Parameter Update.",
    "zh": "强化学习算法：从16次滚动到一次参数更新。"
  },
  {
    "id": 612,
    "start": 6024.045,
    "end": 6033.507,
    "en": "GRPO (Group Relative Policy Optimization), proposed by DeepSeek, is one of the most widely used RL training algorithms today.",
    "zh": "GRPO（组相对策略优化）是由DeepSeek提出的目前最广泛使用的强化学习训练算法之一。"
  },
  {
    "id": 613,
    "start": 6033.507,
    "end": 6036.07,
    "en": "An example makes it concrete.",
    "zh": "一个例子使其具体化。"
  },
  {
    "id": 614,
    "start": 6036.07,
    "end": 6047.982,
    "en": "Suppose SWE-bench contains this task: parser.py in some Python project raises an IndexError on empty input, and the Agent must fix the code without modifying the tests.",
    "zh": "假设SWE-bench包含此任务：某个Python项目中的parser.py在空输入时会引发IndexError，智能体必须修复代码而不修改测试用例。"
  },
  {
    "id": 615,
    "start": 6047.982,
    "end": 6051.657,
    "en": "The training system goes through the four steps below.",
    "zh": "训练系统会经历以下四个步骤。"
  },
  {
    "id": 616,
    "start": 6051.657,
    "end": 6055.645,
    "en": "Step 1: Let the policy model try repeatedly.",
    "zh": "步骤1：让策略模型反复尝试。"
  },
  {
    "id": 617,
    "start": 6055.645,
    "end": 6059.857,
    "en": "The policy model is the language model currently being trained.",
    "zh": "策略模型是当前正在训练的语言模型。"
  },
  {
    "id": 618,
    "start": 6059.857,
    "end": 6069.957,
    "en": "The system copies the same initial code and the same problem description into 16 mutually isolated sandboxes and lets the model solve it 16 times independently.",
    "zh": "系统将相同的初始代码和相同的问题描述复制到16个相互隔离的沙箱中，并让模型独立解决16次。"
  },
  {
    "id": 619,
    "start": 6069.957,
    "end": 6077.907,
    "en": "Each attempt covers the full \"read the code → edit the files → run the tests → submit the result\"; that entire process is one rollout.",
    "zh": "每次尝试都涵盖完整的“读取代码→编辑文件→运行测试→提交结果”；整个过程称为一次轨迹。"
  },
  {
    "id": 620,
    "start": 6077.907,
    "end": 6094.695,
    "en": "The problem and the initial environment are identical, but sampling is stochastic, so the 16 attempts may take different paths: some correctly add the boundary check, some merely catch the exception and paper over the problem, some edit the wrong file, and some try to modify the tests.",
    "zh": "问题和初始环境是相同的，但采样是随机的，因此这16次尝试可能会走不同的路径：有些正确地添加了边界检查，有些只是捕获异常并掩盖了问题，有些编辑了错误的文件，还有些试图修改测试。"
  },
  {
    "id": 621,
    "start": 6094.695,
    "end": 6097.745,
    "en": "Step 2: Compute the reward.",
    "zh": "步骤2：计算奖励。"
  },
  {
    "id": 622,
    "start": 6097.745,
    "end": 6104.195,
    "en": "After each rollout ends, a verifier applies the patch in a clean environment and runs the tests.",
    "zh": "每次轨迹结束后，验证器会在一个干净的环境中应用补丁并运行测试。"
  },
  {
    "id": 623,
    "start": 6104.195,
    "end": 6115.42,
    "en": "Suppose 4 of the 16 attempts pass all tests without touching the test files, and the other 12 fail; then the first 4 receive reward 1 and the other 12 receive reward 0.",
    "zh": "假设在16次尝试中有4次通过了所有测试且没有修改测试文件，其余12次失败；那么前4次获得奖励1，其余12次获得奖励0。"
  },
  {
    "id": 624,
    "start": 6115.42,
    "end": 6124.895,
    "en": "In a coding task like this, \"computing the reward\" is nothing mysterious—it is just using tests and rules to judge whether the fix is actually correct.",
    "zh": "在这样的编码任务中，“计算奖励”并不神秘——它只是使用测试和规则来判断修复是否真正正确。"
  },
  {
    "id": 625,
    "start": 6124.895,
    "end": 6131.832,
    "en": "Only for open-ended tasks with no definitive test do you need human preference or a reward model to do the judging.",
    "zh": "只有在没有明确测试的开放性任务中，才需要人工偏好或奖励模型来进行判断。"
  },
  {
    "id": 626,
    "start": 6131.832,
    "end": 6135.595,
    "en": "Step 3: Compute the relative advantage.",
    "zh": "步骤3：计算相对优势。"
  },
  {
    "id": 627,
    "start": 6135.595,
    "end": 6144.545,
    "en": "A reward only says whether a single trajectory succeeded or failed; the relative advantage says how good it is compared with the other attempts in the same group.",
    "zh": "奖励只说明单个轨迹是否成功；相对优势则说明它与同一组其他尝试相比有多好。"
  },
  {
    "id": 628,
    "start": 6144.545,
    "end": 6155.445,
    "en": "This group's average success rate is 4/16: the 4 that passed are above the group average and get a positive advantage; the 12 that failed are below it and get a negative advantage.",
    "zh": "这一组的平均成功率是4/16：通过的4次高于组平均值，获得正向优势；失败的12次低于组平均值，获得负向优势。"
  },
  {
    "id": 629,
    "start": 6155.445,
    "end": 6159.495,
    "en": "This within-group comparison is the core of GRPO.",
    "zh": "这种组内比较是GRPO的核心。"
  },
  {
    "id": 630,
    "start": 6159.495,
    "end": 6169.32,
    "en": "If all 16 fail, or all 16 succeed, every reward is identical, there is no way to tell which is better, and the relative advantage vanishes.",
    "zh": "如果全部16次都失败，或者全部16次都成功，每项奖励都相同，无法判断哪个更好，相对优势就会消失。"
  },
  {
    "id": 631,
    "start": 6169.32,
    "end": 6178.845,
    "en": "RLVP's path signals, process rewards, and partial-progress rewards exist precisely to restore meaningful differences within such groups.",
    "zh": "RLVP的路径信号、过程奖励和部分进度奖励正是为了在这些组内恢复有意义的差异。"
  },
  {
    "id": 632,
    "start": 6178.845,
    "end": 6182.995,
    "en": "Step 4: Update the policy by gradient descent.",
    "zh": "步骤4：通过梯度下降更新策略。"
  },
  {
    "id": 633,
    "start": 6182.995,
    "end": 6201.057,
    "en": "The training program turns the relative advantages into a training loss, computes gradients, and has an optimizer (AdamW, Muon, and the like) perform gradient descent, raising the probability of the choices the model made in positive-advantage trajectories and lowering it in negative-advantage ones.",
    "zh": "训练程序将相对优势转化为训练损失，计算梯度，并让优化器（如AdamW、Muon等）执行梯度下降，从而提高模型在正优势轨迹中做出的选择的概率，降低在负优势轨迹中做出的选择的概率。"
  },
  {
    "id": 634,
    "start": 6201.057,
    "end": 6222.932,
    "en": "It does not memorize some successful patch verbatim; it adjusts gradually across many tasks and rollouts, so that when a similar bug appears later, \"reproduce the problem, check the boundary condition, change the implementation, and run the tests\" is more likely to occur, while \"swallow the exception, edit the tests, submit without verifying\" is less likely.",
    "zh": "它不会逐字记忆某些成功的补丁；而是在许多任务和运行中逐渐调整，这样当类似的问题再次出现时，\"重现问题、检查边界条件、修改实现并运行测试\" 更有可能发生，而\"捕获异常、修改测试、未经验证就提交\" 则不太可能发生。"
  },
  {
    "id": 635,
    "start": 6222.932,
    "end": 6232.27,
    "en": "As illustrated in Figure 8-13: 16 Rollouts, Verification, and Relative Advantage on the Same SWE-bench Task.",
    "zh": "如图8-13所示：16次运行、验证和相对优势在同一SWE-bench任务上的表现。"
  },
  {
    "id": 636,
    "start": 6232.42,
    "end": 6251.682,
    "en": "These four steps together make up one training iteration, that is, one step: step k generates a batch of rollouts with the current policy, completes the reward, advantage, and gradient computations, and has the optimizer update the parameters; step k+1 then rolls out again with the updated policy.",
    "zh": "这四个步骤共同构成一次训练迭代，即一步：步骤k使用当前策略生成一批运行，完成奖励、优势和梯度计算，并让优化器更新参数；然后步骤k+1使用更新后的策略再次运行。"
  },
  {
    "id": 637,
    "start": 6251.632,
    "end": 6256.682,
    "en": "Training for 100 steps means repeating this loop about 100 times.",
    "zh": "进行100步训练意味着重复这个循环大约100次。"
  },
  {
    "id": 638,
    "start": 6256.682,
    "end": 6265.932,
    "en": "A given RL training framework may count its internal minibatch updates separately, so when reading training logs you still need to confirm how it defines a step.",
    "zh": "给定的强化学习训练框架可能会单独计算其内部的小批量更新，因此在阅读训练日志时，仍需确认它如何定义一步。"
  },
  {
    "id": 639,
    "start": 6265.932,
    "end": 6268.545,
    "en": "A rough time estimate helps.",
    "zh": "一个粗略的时间估计是有帮助的。"
  },
  {
    "id": 640,
    "start": 6268.545,
    "end": 6278.807,
    "en": "A complex Agent rollout generates dozens of tool-calling turns, and even with 16 running in parallel the wall-clock time of a rollout stage is set by the slowest one.",
    "zh": "一个复杂的智能体运行会生成数十次工具调用，即使有16个同时运行，运行阶段的墙钟时间仍由最慢的那个决定。"
  },
  {
    "id": 641,
    "start": 6278.807,
    "end": 6300.27,
    "en": "Suppose the slowest rollout takes about 2,000 seconds and the subsequent gradient descent and optimizer update take about 600 seconds; then one step takes roughly 2{,}000+600=2{,}600 seconds, about 43 minutes, and 100 consecutive steps come to nearly 72 hours.",
    "zh": "假设最慢的运行需要约2000秒，随后的梯度下降和优化器更新需要约600秒；那么一步大约需要2000+600=2600秒，约43分钟，100步连续进行则需要近72小时。"
  },
  {
    "id": 642,
    "start": 6300.27,
    "end": 6306.557,
    "en": "PPO and GRPO both follow this loop; they differ mainly in what they compare against.",
    "zh": "PPO和GRPO都遵循这个循环；它们的主要区别在于比较的对象不同。"
  },
  {
    "id": 643,
    "start": 6306.557,
    "end": 6313.032,
    "en": "GRPO directly compares multiple rollouts of the same problem and needs no separate value model.",
    "zh": "GRPO直接比较同一问题的多个运行，不需要单独的价值模型。"
  },
  {
    "id": 644,
    "start": 6313.032,
    "end": 6326.87,
    "en": "PPO trains a value model that estimates \"how well one typically does\" at each step of a trajectory, then judges whether the current action beats that expectation, which suits long trajectories that need fine-grained credit assignment.",
    "zh": "PPO训练一个价值模型，用于估计在轨迹的每个步骤中通常的表现，然后判断当前动作是否超过了预期，这适用于需要细粒度信用分配的长轨迹。"
  },
  {
    "id": 645,
    "start": 6326.87,
    "end": 6333.82,
    "en": "Both limit the size of a single update so that a small batch of samples cannot suddenly change the model too much.",
    "zh": "两者都限制单次更新的规模，以防止一小批样本突然对模型造成太大改变。"
  },
  {
    "id": 646,
    "start": 6333.82,
    "end": 6345.107,
    "en": "DPO is different: it learns directly from pre-collected \"better response—worse response\" preference pairs and never has the current policy generate this group of rollouts online.",
    "zh": "DPO的不同之处在于：它直接从预先收集的“更好回复—更差回复”偏好对中学习，而不会让当前策略在线上生成这一组rollouts。"
  },
  {
    "id": 647,
    "start": 6345.107,
    "end": 6359.332,
    "en": "Among this chapter's cases, AdaptThink uses a custom constrained objective; GeneralPoints and V-IRL use PPO with a value model; SimpleVLA-RL and RLVP use GRPO; ReTool uses PPO.",
    "zh": "在本章的案例中，AdaptThink使用了自定义的约束目标；GeneralPoints和V-IRL使用PPO加上价值模型；SimpleVLA-RL和RLVP使用GRPO；ReTool使用PPO。"
  },
  {
    "id": 648,
    "start": 6359.332,
    "end": 6371.07,
    "en": "The algorithm decides how trajectories are compared and parameters updated; the reward decides what counts as success; the environment and the data decide which problems the model gets to experience.",
    "zh": "算法决定如何比较轨迹并更新参数；奖励决定什么才算成功；环境和数据决定模型会经历哪些问题。"
  },
  {
    "id": 649,
    "start": 6371.07,
    "end": 6375.382,
    "en": "Why LLM RL Usually Prefers On-Policy Data.",
    "zh": "为什么LLM RL通常更喜欢在线数据。"
  },
  {
    "id": 650,
    "start": 6375.382,
    "end": 6378.995,
    "en": "First separate two terms that are easily conflated.",
    "zh": "首先区分两个容易混淆的术语。"
  },
  {
    "id": 651,
    "start": 6378.995,
    "end": 6385.095,
    "en": "Online means only that data is continually produced through interaction with an environment during training.",
    "zh": "在线意味着数据仅通过训练期间与环境的交互持续生成。"
  },
  {
    "id": 652,
    "start": 6385.095,
    "end": 6397.445,
    "en": "On-policy requires the behavior policy \\mu that generates rollouts to be identical, or sufficiently close, to the policy \\pi_\\theta currently being optimized.",
    "zh": "在线策略要求生成rollouts的行为策略\\mu与当前正在优化的策略\\pi_\\theta相同或足够接近。"
  },
  {
    "id": 653,
    "start": 6397.445,
    "end": 6407.082,
    "en": "An asynchronous cluster may generate data continuously yet still become off-policy in the statistical sense if its rollout workers lag several checkpoints behind.",
    "zh": "异步集群可能持续生成数据，但如果其rollout工作进程落后几个检查点，从统计意义上来说仍可能是离线策略。"
  },
  {
    "id": 654,
    "start": 6407.082,
    "end": 6415.045,
    "en": "Replaying old trajectories or using trajectories generated entirely by an older model or a teacher is more clearly off-policy.",
    "zh": "重放旧轨迹或使用完全由旧模型或教师生成的轨迹更为明显地属于离线策略。"
  },
  {
    "id": 655,
    "start": 6415.045,
    "end": 6422.857,
    "en": "The PPO/GRPO recipes in this chapter generally aim to roll out again from the latest policy at every step.",
    "zh": "本章中的PPO/GRPO方案通常旨在每一步都从最新策略重新rollout。"
  },
  {
    "id": 656,
    "start": 6422.857,
    "end": 6436.72,
    "en": "When PPO performs several minibatch epochs on the same batch, however, the later epochs already drift away from the old_policy that generated the data—precisely why PPO uses a probability ratio and clipping.",
    "zh": "然而，当PPO在同一批次上执行多个小批量epoch时，后期的epoch已经偏离了生成数据的旧策略——这正是PPO使用概率比和裁剪的原因。"
  },
  {
    "id": 657,
    "start": 6436.72,
    "end": 6444.07,
    "en": "Policy gradients seek to estimate expected reward under the current policy \\pi_\\theta.",
    "zh": "策略梯度旨在估计当前策略\\pi_\\theta下的预期奖励。"
  },
  {
    "id": 658,
    "start": 6444.07,
    "end": 6450.32,
    "en": "If data was sampled from another policy \\mu, the correction uses an importance ratio:",
    "zh": "如果数据是从另一个策略\\mu中采样的，校正会使用重要性比率："
  },
  {
    "id": 659,
    "start": 6450.32,
    "end": 6463.895,
    "en": "\\rho_t=\\frac{\\pi_\\theta(a_t\\mid s_t)}{\\mu(a_t\\mid s_t)",
    "zh": "\\rho_t=\\frac{\\pi_\\theta(a_t\\mid s_t)}{\\mu(a_t\\mid s_t)"
  },
  {
    "id": 660,
    "start": 6463.895,
    "end": 6480.657,
    "en": "=\\exp\\left(\\log\\pi_\\theta(a_t\\mid s_t)-\\log\\mu(a_t\\mid s_t)\\right).",
    "zh": "=\\exp\\left(\\log\\pi_\\theta(a_t\\mid s_t)-\\log\\mu(a_t\\mid s_t)\\right)。"
  },
  {
    "id": 661,
    "start": 6480.82,
    "end": 6492.507,
    "en": "Genuinely fresh on-policy rollouts satisfy \\pi_\\theta=\\mu before any parameter update, so \\rho_t=1.",
    "zh": "真正新鲜的策略内滚动满足\\pi_\\theta=\\mu在任何参数更新之前，因此\\rho_t=1。"
  },
  {
    "id": 662,
    "start": 6492.457,
    "end": 6501.045,
    "en": "This focuses training on \"the states the current model actually enters\" and avoids paying a high-variance correction for distribution mismatch.",
    "zh": "这将训练集中在“当前模型实际进入的状态”上，并避免为分布不匹配支付高方差的校正。"
  },
  {
    "id": 663,
    "start": 6501.045,
    "end": 6514.682,
    "en": "Off-policy data has its own advantages—old data can be reused, sampling and training can run asynchronously, and throughput is higher—but the staler the policy, the heavier the tail of the rho sub t distribution.",
    "zh": "策略外数据有自己的优势——旧数据可以重复使用，采样和训练可以异步进行，吞吐量更高，但策略越陈旧，\\rho_t分布的尾部就越重。"
  },
  {
    "id": 664,
    "start": 6514.682,
    "end": 6526.645,
    "en": "For long autoregressive sequences, a strict prefix or trajectory correction also multiplies many per-token ratios together, so a small bias can accumulate into an enormous or vanishing weight.",
    "zh": "对于长自回归序列，严格的前缀或轨迹校正也会将许多每标记比率相乘，因此小偏差可能会累积成巨大的或消失的权重。"
  },
  {
    "id": 665,
    "start": 6526.645,
    "end": 6538.27,
    "en": "PPO's clipping limits outlier updates but cannot losslessly restore lost distribution coverage: clip too much and gradients are discarded, clip too little and a handful of samples dominate.",
    "zh": "PPO的裁剪限制了异常更新，但不能无损地恢复丢失的分布覆盖：裁剪过多会导致梯度被丢弃，裁剪过少则少数样本会主导。"
  },
  {
    "id": 666,
    "start": 6538.27,
    "end": 6548.907,
    "en": "On-policy is better\" is therefore not a universal theorem; in today's LLM policy gradients it usually means lower distribution bias and more stable optimization.",
    "zh": "因此，“策略内更好”并不是一个普遍定理；在当今的大语言模型策略梯度中，通常意味着更低的分布偏差和更稳定的优化。"
  },
  {
    "id": 667,
    "start": 6548.907,
    "end": 6560.307,
    "en": "Empirical work on stabilizing large-model RL likewise finds that reducing policy staleness and training–inference discrepancy is an important condition for the surrogate objective to remain valid.",
    "zh": "对稳定大型模型强化学习的经验研究也发现，减少策略陈旧性和训练-推理差异是代理目标保持有效的关键条件。"
  },
  {
    "id": 668,
    "start": 6560.307,
    "end": 6565.07,
    "en": "Why Training Is Sensitive to Sampler/Trainer Numerical Mismatch.",
    "zh": "为什么训练对采样器/训练器数值不匹配如此敏感？"
  },
  {
    "id": 669,
    "start": 6565.07,
    "end": 6578.507,
    "en": "Large-scale LLM RL typically generates rollouts with an inference engine such as vLLM/SGLang and then recomputes log probabilities and gradients with a training engine such as FSDP/Megatron.",
    "zh": "大规模大语言模型强化学习通常使用推理引擎（如vLLM/SGLang）生成滚动，并通过训练引擎（如FSDP/Megatron）重新计算对数概率和梯度。"
  },
  {
    "id": 670,
    "start": 6578.507,
    "end": 6592.807,
    "en": "Even when both sides load the same weights, differences in floating-point precision, reduction order, tensor-parallel layout, batch size, KV cache, and fused kernels can make the log probability of the same token differ slightly.",
    "zh": "即使双方加载相同的权重，浮点精度、归约顺序、张量并行布局、批大小、KV缓存和融合内核的差异可能导致相同标记的对数概率略有不同。"
  },
  {
    "id": 671,
    "start": 6592.807,
    "end": 6606.207,
    "en": "As a result, rho sub t—which should equal 1 before the update—has already drifted away from 1: the system nominally synchronized the weights, but numerically it turned on-policy training into off-policy training.",
    "zh": "因此，\\rho_t——在更新前应等于1——已经偏离了1：系统名义上同步了权重，但数值上却将策略内训练变成了策略外训练。"
  },
  {
    "id": 672,
    "start": 6606.207,
    "end": 6613.882,
    "en": "Controlled experiments have shown that a tiny token-level training–inference discrepancy is on its own enough to trigger training collapse.",
    "zh": "控制实验表明，微小的标记级训练-推理差异本身足以引发训练崩溃。"
  },
  {
    "id": 673,
    "start": 6613.882,
    "end": 6629.12,
    "en": "The sensitivity comes from an amplification chain: a small log-probability error → an exponentiated probability-ratio deviation → accumulation over a long prefix → changed clipping/advantage weighting → a changed gradient direction and effective sample count.",
    "zh": "这种敏感性来源于一个放大链：一个小的对数概率误差→指数化的概率比偏差→在长前缀上的累积→改变裁剪/优势加权→改变梯度方向和有效样本数量。"
  },
  {
    "id": 674,
    "start": 6629.12,
    "end": 6652.132,
    "en": "For example, if the log ratios of 4,000 tokens all deviate by 10^{-3} in the same direction, the trajectory-level ratio accumulates to e^4\\approx54.6; real errors are not necessarily of the same sign, but the example shows why long sequences amplify errors that \"look tiny on every single token.",
    "zh": "例如，如果4000个标记的对数比率都向同一方向偏离10^{-3}，轨迹级比率会累积到e^4≈54.6；真实的误差不一定同号，但这个例子说明了为什么长序列会放大那些“在每个单独标记上看起来都很小”的误差。"
  },
  {
    "id": 675,
    "start": 6652.132,
    "end": 6661.72,
    "en": "A minute probability difference on an early token can also change which token is actually sampled, causing the entire subsequent state trajectory to diverge.",
    "zh": "早期标记上的微小概率差异也可能改变实际采样的标记，导致后续整个状态轨迹发散。"
  },
  {
    "id": 676,
    "start": 6661.72,
    "end": 6676.17,
    "en": "The end result is not merely \"the same prompt occasionally produces a different answer\": importance ratios can spike, large numbers of tokens can be clipped, and gradients or response lengths can jump, after which reward and entropy collapse together.",
    "zh": "最终结果不仅仅是“相同的提示偶尔会产生不同的答案”：重要性比率可能会激增，大量标记可能被截断，梯度或响应长度可能会跳跃，之后奖励和熵会一起崩溃。"
  },
  {
    "id": 677,
    "start": 6676.17,
    "end": 6688.37,
    "en": "Changing the batch size alters how the computation is reduced and breaks numerical batch invariance; this too has been directly observed to turn nominally on-policy RL into implicit off-policy RL.",
    "zh": "改变批次大小会改变计算的缩减方式，并破坏数值上的批次不变性；这已被直接观察到，会将名义上的在线强化学习（on-policy RL）转变为隐式的离线强化学习（off-policy RL）。"
  },
  {
    "id": 678,
    "start": 6688.37,
    "end": 6695.007,
    "en": "Either matching the sampling and training numerics or applying an explicit off-policy correction improves stability.",
    "zh": "要么匹配采样和训练的数值，要么应用显式的离线校正，都可以提高稳定性。"
  },
  {
    "id": 679,
    "start": 6695.007,
    "end": 6700.47,
    "en": "Engineering should treat this as a core problem rather than ordinary floating-point noise:",
    "zh": "工程应将其视为核心问题，而非普通的浮点噪声："
  },
  {
    "id": 680,
    "start": 6700.636,
    "end": 6717.711,
    "en": "Before any parameter update, compare the sampler's and the trainer's token log probabilities on the same batch of trajectories, and monitor the mean, quantiles, maximum, approximate KL, and clipped fraction of rho sub t; this is the most direct on-policy unit test.",
    "zh": "在任何参数更新之前，比较采样器和训练器在同一批轨迹上的标记对数概率，并监控均值、分位数、最大值、近似KL散度以及rho_t的截断比例；这是最直接的在线策略单元测试。"
  },
  {
    "id": 681,
    "start": 6717.661,
    "end": 6735.386,
    "en": "What must be synchronized is not only the weights, but also the LoRA adapter, tokenizer, chat template, model revision, and positional-encoding configuration; the rollout should store the behavior log probability from generation time, rather than passing off the current model's numbers after the fact.",
    "zh": "必须同步的不仅是权重，还有LoRA适配器、分词器、聊天模板、模型版本和位置编码配置；回放应存储生成时的行为对数概率，而不是事后传递当前模型的数值。"
  },
  {
    "id": 682,
    "start": 6735.386,
    "end": 6753.636,
    "en": "Align the precision, parallel layout, and key compute kernels of sampling and training as far as possible; where that is impossible, treat the difference explicitly as off-policy, apply importance correction, and monitor the effective sample size, instead of assuming that PPO clipping will automatically compensate.",
    "zh": "尽可能对齐采样和训练的精度、并行布局和关键计算内核；如果无法实现，则应明确将差异视为离线情况，应用重要性校正，并监控有效样本数量，而不是假设PPO截断会自动补偿。"
  },
  {
    "id": 683,
    "start": 6753.636,
    "end": 6760.686,
    "en": "Keep rollouts fresh, and limit both the number of update epochs per batch of data and the asynchronous staleness.",
    "zh": "保持回放的最新状态，并限制每批数据的更新轮次数量和异步延迟程度。"
  },
  {
    "id": 684,
    "start": 6760.686,
    "end": 6767.886,
    "en": "Reusing old data buys throughput, but it should be a measured bias–efficiency trade-off, not a free speedup.",
    "zh": "重用旧数据可以提高吞吐量，但应作为有度的偏差-效率权衡，而不是免费的速度提升。"
  },
  {
    "id": 685,
    "start": 6767.886,
    "end": 6772.023,
    "en": "RL Environments: From Evaluation to Simulation.",
    "zh": "强化学习环境：从评估到仿真。"
  },
  {
    "id": 686,
    "start": 6772.023,
    "end": 6780.561,
    "en": "The bottleneck in RL training is often not the algorithm but whether the environment is realistic, resettable, and parallelizable enough.",
    "zh": "强化学习训练中的瓶颈通常不是算法，而是环境是否足够真实、可重置且可并行化。"
  },
  {
    "id": 687,
    "start": 6780.561,
    "end": 6803.261,
    "en": "A real Agent's phone calls, payments, or file modifications can be expensive and irreversible, and one mistake cannot be made good by unlimited retries; Chapter 7's evaluation environment can supply the verifier, but training additionally requires the Agent to fail repeatedly, to absorb the side effects of its actions, and to stay stable across millions of interactions.",
    "zh": "一个真实智能体的电话呼叫、支付或文件修改可能成本高昂且不可逆，一次错误不能通过无限重试来弥补；第7章的评估环境可以提供验证者，但训练还需要智能体反复失败，以吸收其行为的副作用，并在数百万次交互中保持稳定。"
  },
  {
    "id": 688,
    "start": 6803.261,
    "end": 6809.786,
    "en": "Environment engineering is therefore a precondition for RL, not an afterthought once training is done.",
    "zh": "因此，环境工程是强化学习的前提条件，而不是训练完成后的附加考虑。"
  },
  {
    "id": 689,
    "start": 6809.786,
    "end": 6813.148,
    "en": "Environment: The Training Ground for the Model.",
    "zh": "环境：模型的训练场。"
  },
  {
    "id": 690,
    "start": 6813.148,
    "end": 6820.973,
    "en": "RL is fundamentally \"learning by trial and error,\" and trial and error needs somewhere to happen—the simulation environment.",
    "zh": "强化学习本质上是“通过试错学习”，而试错需要一个发生的地方——即仿真环境。"
  },
  {
    "id": 691,
    "start": 6820.973,
    "end": 6827.398,
    "en": "The model runs tasks in the environment over and over, collects feedback, and adjusts its policy.",
    "zh": "模型在环境中反复运行任务，收集反馈并调整其策略。"
  },
  {
    "id": 692,
    "start": 6827.398,
    "end": 6836.411,
    "en": "The environment's fidelity—how closely it resembles the real deployment scenario—directly determines whether the resulting policy is usable at all:",
    "zh": "环境的真实性——它与真实部署场景的相似程度——直接决定了生成的策略是否可用："
  },
  {
    "id": 693,
    "start": 6836.411,
    "end": 6840.348,
    "en": "A distorted environment guarantees a useless policy.",
    "zh": "失真的环境保证策略无用。"
  },
  {
    "id": 694,
    "start": 6840.348,
    "end": 6852.736,
    "en": "If the simulated customer always answers from a fixed script and its error messages do not match production, the model learns a test-taking strategy that only works in simulation and falls apart on the first real deployment.",
    "zh": "如果模拟客户总是从固定脚本中回答，且其错误信息与生产环境不匹配，模型会学习到仅适用于模拟的应试策略，在第一次真实部署时就会崩溃。"
  },
  {
    "id": 695,
    "start": 6852.736,
    "end": 6861.036,
    "en": "This is the most common way RL projects fail—not a bad algorithm, but a practice ground that is not the same as the exam hall.",
    "zh": "这是RL项目最常见的失败原因——不是算法不好，而是训练场与考场不同。"
  },
  {
    "id": 696,
    "start": 6861.036,
    "end": 6866.648,
    "en": "Building a high-fidelity environment is often more expensive and harder than the training itself.",
    "zh": "构建高保真环境通常比训练本身更昂贵也更困难。"
  },
  {
    "id": 697,
    "start": 6866.648,
    "end": 6875.311,
    "en": "An environment that is massively parallel, reproducible, and realistic in its feedback usually takes far more engineering than tuning the model.",
    "zh": "一个高度并行、可复现且反馈真实的环境通常需要比调优模型更多的工程工作。"
  },
  {
    "id": 698,
    "start": 6875.311,
    "end": 6896.998,
    "en": "The tool-calling experiments later in this chapter (AWorld's MCP sandbox, ReTool's code-interpreter sandbox) invest heavily in the environment precisely because real APIs have rate limits, will ban accounts, and have side effects, which makes them unusable for training directly—you have to build a stable, controllable, replayable \"shadow world\" first.",
    "zh": "本章后面的工具调用实验（AWorld的MCP沙箱，ReTool的代码解释器沙箱）之所以在环境中投入大量资源，正是因为在真实API中存在速率限制，会封禁账号，并且有副作用，这使得它们无法直接用于训练——你必须先构建一个稳定、可控、可回放的“影子世界”。"
  },
  {
    "id": 699,
    "start": 6896.998,
    "end": 6900.623,
    "en": "The other half of the environment is the reward function.",
    "zh": "环境的另一半是奖励函数。"
  },
  {
    "id": 700,
    "start": 6900.623,
    "end": 6909.798,
    "en": "The environment must not only simulate how the world changes but also judge how well the Agent did, which is the input to the reward design discussed later.",
    "zh": "环境不仅要模拟世界如何变化，还要评估智能体表现如何，这是后续讨论的奖励设计的输入。"
  },
  {
    "id": 701,
    "start": 6909.798,
    "end": 6918.161,
    "en": "In a nutshell: before you start tuning algorithms, ask yourself—does my simulation environment truly resemble the real world?",
    "zh": "简而言之：在开始调优算法之前，请问自己——我的仿真环境是否真正像现实世界？"
  },
  {
    "id": 702,
    "start": 6918.161,
    "end": 6923.098,
    "en": "The answer matters far more than choosing between PPO and GRPO.",
    "zh": "答案比在PPO和GRPO之间选择更重要。"
  },
  {
    "id": 703,
    "start": 6923.098,
    "end": 6925.723,
    "en": "What If You Can't Build an Environment?",
    "zh": "如果无法构建环境该怎么办？"
  },
  {
    "id": 704,
    "start": 6925.723,
    "end": 6928.336,
    "en": "Let the Model Play the Environment.",
    "zh": "让模型自己玩转环境。"
  },
  {
    "id": 705,
    "start": 6928.492,
    "end": 6945.017,
    "en": "But there is a more fundamental problem: in many scenarios a high-fidelity environment is not merely expensive, it cannot be built at all—real APIs have side effects and cannot be called at random, real users cannot be experimented on, and the physical world cannot be fast-forwarded.",
    "zh": "但还有一个更根本的问题：在许多场景中，高保真环境不仅昂贵，甚至根本无法构建——真实API有副作用，不能随意调用，真实用户不能被实验，物理世界也不能快进。"
  },
  {
    "id": 706,
    "start": 6944.967,
    "end": 6950.704,
    "en": "If you cannot even stand up a usable \"shadow world,\" is RL simply off the table?",
    "zh": "如果你甚至连一个可用的「影子世界」都无法搭建起来，那么强化学习（RL）是不是就完全没戏了？"
  },
  {
    "id": 707,
    "start": 6950.704,
    "end": 6960.804,
    "en": "An increasingly mainstream idea is to use a model to simulate the environment—have an LLM play the environment and generate the feedback the Agent's interactions require.",
    "zh": "一种越来越主流的想法是使用模型来模拟环境——让大语言模型扮演环境，生成智能体交互所需的反馈。"
  },
  {
    "id": 708,
    "start": 6960.804,
    "end": 6963.279,
    "en": "This route has two levels.",
    "zh": "这条路径包含两个层次。"
  },
  {
    "id": 709,
    "start": 6963.279,
    "end": 6968.367,
    "en": "Level one: the model synthesizes the return values of tool calls.",
    "zh": "第一层：模型合成工具调用的返回值。"
  },
  {
    "id": 710,
    "start": 6968.367,
    "end": 6970.467,
    "en": "Take ZeroSearch",
    "zh": "以ZeroSearch为例"
  },
  {
    "id": 711,
    "start": 6970.467,
    "end": 6975.317,
    "en": "Level two: the model simulates the whole environment's dynamics.",
    "zh": "第二层：模型模拟整个环境的动力学。"
  },
  {
    "id": 712,
    "start": 6975.317,
    "end": 6983.479,
    "en": "Not just the return value of a single tool, but \"what the world looks like after an action is taken\" can also be handed to a model.",
    "zh": "不只是单个工具的返回值，还包括「执行动作后世界的样子」，也可以交给模型处理。"
  },
  {
    "id": 713,
    "start": 6983.479,
    "end": 7000.479,
    "en": "DreamGym distills environment dynamics into a reasoning-style \"experience model\": given the current state and the Agent's action, it reasons step by step to the state transition and the feedback signal, and can thus synthesize rollouts in bulk for online RL without touching the real environment.",
    "zh": "DreamGym将环境动力学提炼为一种推理风格的「经验模型」：给定当前状态和智能体的动作，它逐步推理出状态转移和反馈信号，从而可以在不接触真实环境的情况下批量合成强化学习的轨迹。"
  },
  {
    "id": 714,
    "start": 7000.479,
    "end": 7015.904,
    "en": "Training for customer-service and sales Agents commonly uses an LLM to play the user (a user simulator), and the τ-bench family of evaluations is built on exactly this idea—the same model simulator can serve as both exam hall and practice ground.",
    "zh": "客户服务和销售类智能体的训练通常使用大语言模型扮演用户（用户模拟器），τ-bench系列评估正是基于这一理念——同样的模型模拟器既可以作为考场，也可以作为练习场。"
  },
  {
    "id": 715,
    "start": 7015.904,
    "end": 7026.967,
    "en": "But the risk of this route must be stated plainly: the simulator's knowledge of the world is the ceiling on training, and the simulator's systematic biases will be adopted wholesale by the policy.",
    "zh": "但必须明确指出这种路径的风险：模拟器对世界的认知是训练的上限，模拟器的系统性偏差也会被策略全盘接受。"
  },
  {
    "id": 716,
    "start": 7026.967,
    "end": 7044.892,
    "en": "If the simulated customer is more patient than real users, or the simulated search engine never returns junk, what the student learns is a strategy that only holds in \"the world as the model imagines it\"; worse, RL will actively seek out and exploit the simulator's flaws, which is reward hacking.",
    "zh": "如果模拟的客户比真实用户更耐心，或者模拟的搜索引擎从不返回垃圾结果，学生学到的策略只适用于「模型想象中的世界」；更糟糕的是，强化学习会主动寻找并利用模拟器的缺陷，这被称为奖励黑客行为。"
  },
  {
    "id": 717,
    "start": 7044.892,
    "end": 7059.229,
    "en": "The prudent engineering answer is therefore a hybrid: let model simulation carry most of the interaction volume, supplement it with interactions in the real environment, and use those real interactions to periodically calibrate the simulator's bias.",
    "zh": "因此，工程上的审慎答案是一个混合方案：让模型模拟承担大部分交互量，再补充一些真实环境中的交互，并利用这些真实交互定期校准模拟器的偏差。"
  },
  {
    "id": 718,
    "start": 7059.229,
    "end": 7064.104,
    "en": "Environments, Task Distribution, and Evaluation Isolation.",
    "zh": "环境、任务分布与评估隔离。"
  },
  {
    "id": 719,
    "start": 7064.104,
    "end": 7075.904,
    "en": "The environment itself determines what RL can learn: it must be resettable, parallelizable, and reproducible, and it must return a trustworthy verification result after each state transition.",
    "zh": "环境本身决定了强化学习能学到什么：它必须可以重置、可并行化、可复现，并且在每次状态转移后必须返回可信的验证结果。"
  },
  {
    "id": 720,
    "start": 7075.904,
    "end": 7090.879,
    "en": "Training tasks come from the same source as the SFT data synthesis above—distill task blueprints from real business logs, then, once identifying information is stripped, regenerate fictional people, orders, files, and states.",
    "zh": "训练任务的来源与上面SFT数据合成相同——从真实业务日志中提炼任务蓝图，然后在去除个人信息后，重新生成虚构的人物、订单、文件和状态。"
  },
  {
    "id": 721,
    "start": 7090.879,
    "end": 7103.879,
    "en": "The isolation requirements are the same, with one addition specific to RL: the training and evaluation environments may share the task generator and the verification code, but they must not share the same set of tasks.",
    "zh": "隔离要求是相同的，但有一个特定于强化学习（RL）的附加条件：训练和评估环境可能共享任务生成器和验证代码，但不能共享同一组任务。"
  },
  {
    "id": 722,
    "start": 7103.879,
    "end": 7110.017,
    "en": "SWE-Gym, τ²-bench, and AndroidWorld all illustrate this",
    "zh": "SWE-Gym、τ²-bench 和 AndroidWorld 都体现了这一点。"
  },
  {
    "id": 723,
    "start": 7110.017,
    "end": 7121.842,
    "en": "The order for environment engineering is therefore: task blueprint → resettable simulator → deterministic verifier → training/evaluation isolation → calibration with a small amount of real interaction.",
    "zh": "因此，环境工程的顺序是：任务蓝图 → 可重置模拟器 → 确定性验证器 → 训练/评估隔离 → 通过少量真实交互进行校准。"
  },
  {
    "id": 724,
    "start": 7121.842,
    "end": 7134.042,
    "en": "SFT data synthesis appeared earlier because it constructs stable demonstrations; the environment here serves RL, letting the current policy fail repeatedly and explore paths beyond the demonstrations.",
    "zh": "SFT 数据合成出现得更早，因为它构建了稳定的演示；这里的环境用于 RL，让当前策略反复失败并探索超出演示的路径。"
  },
  {
    "id": 725,
    "start": 7134.042,
    "end": 7139.042,
    "en": "A deterministic verifier being \"cheap\" is not the same as being free.",
    "zh": "确定性验证器是“廉价”的，并不等同于免费。"
  },
  {
    "id": 726,
    "start": 7139.042,
    "end": 7152.904,
    "en": "A Lean kernel, a test runner, or container execution can make CPU verification far slower than GPU generation; throughput is then set by the number of parallel verifier workers, not by adding more GPUs.",
    "zh": "一个轻量内核、测试运行器或容器执行可以使 CPU 验证比 GPU 生成慢得多；吞吐量则由并行验证器工作者的数量决定，而不是通过增加更多 GPU。"
  },
  {
    "id": 727,
    "start": 7152.904,
    "end": 7157.979,
    "en": "From Single-Turn to Multi-Turn: Task Scenarios and Credit Assignment.",
    "zh": "从单轮到多轮：任务场景与信用分配。"
  },
  {
    "id": 728,
    "start": 7157.979,
    "end": 7161.217,
    "en": "The Core Challenge of Multi-Turn Tasks.",
    "zh": "多轮任务的核心挑战。"
  },
  {
    "id": 729,
    "start": 7161.217,
    "end": 7168.129,
    "en": "As illustrated in Figure 8-14: Comparison of Single-Turn RL and Multi-Turn RL.",
    "zh": "如图 8-14 所示：单轮 RL 与多轮 RL 的比较。"
  },
  {
    "id": 730,
    "start": 7168.129,
    "end": 7174.129,
    "en": "As illustrated in Figure 8-15: Credit Assignment in Multi-Turn Interactions.",
    "zh": "如图 8-15 所示：多轮交互中的信用分配。"
  },
  {
    "id": 731,
    "start": 7174.3,
    "end": 7179.125,
    "en": "Going from single-turn to multi-turn is a qualitative jump in complexity.",
    "zh": "从单轮到多轮是复杂性上的质的飞跃。"
  },
  {
    "id": 732,
    "start": 7179.075,
    "end": 7194.787,
    "en": "The policy must not only choose the best action now but also consider the value of future states; it must handle not only immediate feedback but also credit assignment under delayed rewards—deciding which step in a multi-step sequence contributed most to the final outcome.",
    "zh": "策略不仅需要选择当前的最佳动作，还需要考虑未来状态的价值；它必须处理不仅即时反馈，还有延迟奖励下的信用分配——决定多步骤序列中哪一步对最终结果贡献最大。"
  },
  {
    "id": 733,
    "start": 7194.787,
    "end": 7207.937,
    "en": "Suppose a customer-service Agent takes 10 turns of dialogue to resolve a user's problem and finally earns a positive rating—should the credit go to the precise question it asked in turn 2, or to the patient explanation in turn 7?",
    "zh": "假设一个客服智能体经过 10 轮对话解决了用户的问题，并最终获得了积极评分——信用应该归于第 2 轮它提出的具体问题，还是第 7 轮耐心的解释？"
  },
  {
    "id": 734,
    "start": 7207.937,
    "end": 7223.7,
    "en": "The multi-turn interaction discussed here is exactly the ReAct loop described in Chapters 1 and 4—each turn is one think → act → observe iteration, and the delayed reward comes from the structural constraint that \"how good the final outcome is can only be judged several turns later.",
    "zh": "这里讨论的多轮交互正是第 1 章和第 4 章中描述的 ReAct 循环——每一轮是一个思考 → 行动 → 观察的迭代，延迟奖励来自于结构约束：“最终结果的好坏只能在几轮之后才能判断。”"
  },
  {
    "id": 735,
    "start": 7223.7,
    "end": 7231.375,
    "en": "Experiment 8-12 advanced difficulty, three stars: : V-IRL-VL—Multi-Turn Visual Navigation",
    "zh": "实验 8-12 提高难度，三颗星：V-IRL-VL—多轮视觉导航"
  },
  {
    "id": 736,
    "start": 7231.375,
    "end": 7244.162,
    "en": "V-IRL has the Agent navigate continuously through real urban street scenes: training uses New York routes, while testing transfers to different cities and changes both the phrasing of directions and the visual appearance.",
    "zh": "V-IRL让智能体在真实的都市街景中持续导航：训练使用纽约路线，而测试则转移到不同城市，并且改变方向的表述方式和视觉外观。"
  },
  {
    "id": 737,
    "start": 7244.162,
    "end": 7256.812,
    "en": "RL clearly outperforms SFT on both rule OOD and visual OOD, showing that in multi-turn tasks the policy must learn to re-plan from the current observation rather than reproduce training trajectories.",
    "zh": "强化学习（RL）在规则OOD和视觉OOD上都明显优于监督微调（SFT），这表明在多轮任务中，策略必须从当前观察重新规划，而不是复制训练轨迹。"
  },
  {
    "id": 738,
    "start": 7256.812,
    "end": 7264.95,
    "en": "The experiment uses PPO with a value network, and step-by-step feedback is observed to ease long-horizon credit assignment.",
    "zh": "实验使用了带有价值网络的PPO，逐步反馈被观察到有助于缓解长周期信用分配问题。"
  },
  {
    "id": 739,
    "start": 7264.95,
    "end": 7275.05,
    "en": "Experiment 8-13 advanced difficulty, three stars: : SimpleVLA-RL—Open Exploration Under Outcome Rewards [Extended Experiment]",
    "zh": "实验8-13难度升级，三星：SimpleVLA-RL—基于结果奖励的开放探索 [扩展实验]"
  },
  {
    "id": 740,
    "start": 7275.05,
    "end": 7281.962,
    "en": "SimpleVLA-RL uses only success/failure outcome rewards on LIBERO robotics tasks.",
    "zh": "SimpleVLA-RL仅在LIBERO机器人任务中使用成功/失败的结果奖励。"
  },
  {
    "id": 741,
    "start": 7281.962,
    "end": 7296.212,
    "en": "Each task gets just one demonstration trajectory for SFT cold start; RL then lifts the success rate from 17.3% to 91.7% and discovers a \"pushcut\" action that never appeared in the demonstrations.",
    "zh": "每个任务仅提供一个演示轨迹用于SFT冷启动；随后RL将成功率从17.3%提升至91.7%，并发现了一个在演示中从未出现的“pushcut”动作。"
  },
  {
    "id": 742,
    "start": 7296.212,
    "end": 7307.475,
    "en": "It contrasts with V-IRL: when process signals are easy to define they accelerate learning, but when the optimal path is unknown a sparse outcome reward preserves far more room for exploration.",
    "zh": "这与V-IRL形成对比：当过程信号易于定义时，可以加速学习，但当最优路径未知时，稀疏的结果奖励为探索保留了更大的空间。"
  },
  {
    "id": 743,
    "start": 7307.475,
    "end": 7311.312,
    "en": "Tool Calling: Bringing the Environment Into the Agent.",
    "zh": "工具调用：将环境引入智能体"
  },
  {
    "id": 744,
    "start": 7311.312,
    "end": 7324.937,
    "en": "Once a multi-turn task connects to external tools, actions are no longer just \"move or answer\" but searching, executing code, editing files, querying databases, and composing several APIs.",
    "zh": "一旦多轮任务连接到外部工具，动作就不再只是“移动或回答”，而是搜索、执行代码、编辑文件、查询数据库以及组合多个API。"
  },
  {
    "id": 745,
    "start": 7324.937,
    "end": 7332.825,
    "en": "Tool calling therefore pushes credit assignment, environment engineering, and safety constraints to the foreground all at once.",
    "zh": "因此，工具调用同时将信用分配、环境工程和安全约束推向了前沿。"
  },
  {
    "id": 746,
    "start": 7332.825,
    "end": 7338.325,
    "en": "As illustrated in Figure 8-16: Tool Calling RL Reward Loop.",
    "zh": "如图8-16所示：工具调用强化学习奖励循环。"
  },
  {
    "id": 747,
    "start": 7338.325,
    "end": 7348.687,
    "en": "Search-R1 represents the retrieval-augmented route: the model decides on its own when to search and what to search for, and uses the returned results to continue reasoning.",
    "zh": "Search-R1代表检索增强的路径：模型自行决定何时搜索以及搜索什么，并利用返回的结果继续推理。"
  },
  {
    "id": 748,
    "start": 7348.687,
    "end": 7359.587,
    "en": "ReTool instead embeds a code interpreter into the thinking loop, so the model must learn when to execute code, how to read the feedback, and how to correct itself from error messages.",
    "zh": "ReTool则将代码解释器嵌入思考循环中，因此模型必须学习何时执行代码、如何读取反馈以及如何从错误信息中自我修正。"
  },
  {
    "id": 749,
    "start": 7359.587,
    "end": 7369.85,
    "en": "AWorld-train provides an MCP multi-tool sandbox, which further introduces tool selection, dependency management, state reset, and replayability.",
    "zh": "AWorld-train提供了一个MCP多工具沙盒，进一步引入了工具选择、依赖管理、状态重置和可重复性。"
  },
  {
    "id": 750,
    "start": 7369.85,
    "end": 7386.15,
    "en": "Tool trajectories have one crucial implementation detail: the tokens returned by the environment are not generated by the policy, so when computing the policy gradient those feedback tokens should be masked, and gradients propagated only through the model's own thinking and its tool-call arguments.",
    "zh": "工具轨迹有一个关键的实现细节：环境返回的标记不是由策略生成的，因此在计算策略梯度时这些反馈标记应被屏蔽，并且仅通过模型自身的思考和工具调用参数传播梯度。"
  },
  {
    "id": 751,
    "start": 7386.15,
    "end": 7392.162,
    "en": "Otherwise the model is trained to predict sandbox output instead of learning how to use tools.",
    "zh": "否则模型会被训练成预测沙盒输出，而不是学习如何使用工具。"
  },
  {
    "id": 752,
    "start": 7392.162,
    "end": 7400.462,
    "en": "Experiment 8-14 advanced difficulty, three stars: : ReTool—Code Interpreter Enhanced Math Problem Solving",
    "zh": "实验8-14 高级难度，三颗星：ReTool—代码解释器增强的数学问题解决"
  },
  {
    "id": 753,
    "start": 7400.462,
    "end": 7408.6,
    "en": "As illustrated in Figure 8-17: ReTool Interleaving Text-Code Thinking and Sandbox Execution Feedback Loop.",
    "zh": "如图8-17所示：ReTool 文本-代码思维与沙盒执行反馈循环的交错过程。"
  },
  {
    "id": 754,
    "start": 7408.6,
    "end": 7417.275,
    "en": "After an SFT warm-up, ReTool trains with PPO on interleaved text reasoning, code execution, and interpreter feedback.",
    "zh": "在SFT预热之后，ReTool通过交错的文本推理、代码执行和解释器反馈进行PPO训练。"
  },
  {
    "id": 755,
    "start": 7417.275,
    "end": 7426.75,
    "en": "It shows how tool feedback changes the thinking strategy: the model gradually learns to execute proactively, read errors, and correct itself.",
    "zh": "它展示了工具反馈如何改变思考策略：模型逐渐学会主动执行、阅读错误并自行纠正。"
  },
  {
    "id": 756,
    "start": 7426.75,
    "end": 7434.437,
    "en": "The training data comes from DAPO-Math-17k, but the optimization algorithm is still standard PPO.",
    "zh": "训练数据来自DAPO-Math-17k，但优化算法仍然是标准的PPO。"
  },
  {
    "id": 757,
    "start": 7434.604,
    "end": 7448.704,
    "en": "On AIME 2024, training raised accuracy from about 25% to 67.0%; compared with pure-text RL, code feedback let the model learn precise calculation and error correction faster.",
    "zh": "在AIME 2024上，训练将准确率从约25%提升到67.0%；与纯文本RL相比，代码反馈让模型更快地学习精确计算和错误纠正。"
  },
  {
    "id": 758,
    "start": 7448.654,
    "end": 7454.716,
    "en": "Detailed training dynamics and sandbox configuration are in the experiment's companion notes.",
    "zh": "详细的训练动态和沙盒配置请参见实验的配套笔记。"
  },
  {
    "id": 759,
    "start": 7454.716,
    "end": 7462.741,
    "en": "Experiment 8-15 advanced difficulty, three stars: : AWorld-train—Learning to Use Tools in a Sandbox",
    "zh": "实验8-15 高级难度，三颗星：AWorld-train—在沙盒中学习使用工具"
  },
  {
    "id": 760,
    "start": 7462.741,
    "end": 7470.654,
    "en": "As illustrated in Figure 8-18: AWorld-train MCP Sandbox Training Architecture and Tool Ecosystem.",
    "zh": "如图8-18所示：AWorld-train MCP沙盒训练架构与工具生态系统。"
  },
  {
    "id": 761,
    "start": 7470.654,
    "end": 7479.666,
    "en": "AWorld-train uses an MCP server sandbox that provides web, document, multimedia, code, and knowledge-retrieval tools.",
    "zh": "AWorld-train 使用一个提供网页、文档、多媒体、代码和知识检索工具的MCP服务器沙盒。"
  },
  {
    "id": 762,
    "start": 7479.666,
    "end": 7493.491,
    "en": "The point of this open-ended experiment is not to push GAIA numbers but to get a resettable, replayable multi-tool training loop running end to end, and to observe whether tool-call success rates and composition strategies improve with training.",
    "zh": "这个开放式实验的重点不是提高GAIA数值，而是实现一个可重置、可回放的多工具训练循环，从头到尾运行，并观察工具调用成功率和组合策略是否随着训练而改进。"
  },
  {
    "id": 763,
    "start": 7493.491,
    "end": 7510.066,
    "en": "These scenarios together make the same point: the difficulty in training multi-turn Agents is not \"whether there is a fancier optimizer,\" but whether environment feedback is reliable, whether the action chain is verifiable, and how the final reward should be attributed to intermediate decisions.",
    "zh": "这些场景共同表达了同样的观点：训练多轮智能体的难点不在于“是否有更高级的优化器”，而在于环境反馈是否可靠，动作链是否可验证，以及最终奖励应如何归因于中间决策。"
  },
  {
    "id": 764,
    "start": 7510.066,
    "end": 7514.529,
    "en": "Reward Design: Turning Task Goals into Learning Signals.",
    "zh": "奖励设计：将任务目标转化为学习信号。"
  },
  {
    "id": 765,
    "start": 7514.529,
    "end": 7524.216,
    "en": "The single-turn, multi-turn and tool-calling scenarios above established what to train; this section answers how the environment should tell the model whether it did well.",
    "zh": "上述单轮、多轮和工具调用场景已经明确了要训练的内容；本节回答环境应该如何告诉模型它是否做得好。"
  },
  {
    "id": 766,
    "start": 7524.216,
    "end": 7533.566,
    "en": "Reward design unfolds along three complementary dimensions: where the reward comes from, when it is given, and how much information it must express.",
    "zh": "奖励设计沿着三个互补的维度展开：奖励来自何处、何时给予以及它必须表达多少信息。"
  },
  {
    "id": 767,
    "start": 7533.566,
    "end": 7539.416,
    "en": "A fourth question follows: when the outcome is correct, was the path also acceptable?",
    "zh": "第四个问题是：当结果正确时，路径是否也可接受？"
  },
  {
    "id": 768,
    "start": 7539.416,
    "end": 7544.704,
    "en": "Where the Reward Comes From: Rules, Human Preference and Model Judgment.",
    "zh": "奖励的来源：规则、人类偏好和模型判断。"
  },
  {
    "id": 769,
    "start": 7544.704,
    "end": 7555.554,
    "en": "The most reliable source is a verifiable reward (RLVR): judge the result directly with test cases, database assertions, state diffs or format checks.",
    "zh": "最可靠的信息来源是可验证的奖励（RLVR）：通过测试用例、数据库断言、状态差异或格式检查直接评估结果。"
  },
  {
    "id": 770,
    "start": 7555.554,
    "end": 7563.366,
    "en": "Mathematical answers, code tests and structured tool calls are all good places to start from a binary outcome reward.",
    "zh": "数学答案、代码测试和结构化工具调用都是从二元结果奖励开始的好地方。"
  },
  {
    "id": 771,
    "start": 7563.366,
    "end": 7570.604,
    "en": "The more deterministic the rule, the cheaper and more reproducible the reward, and the harder it is for the model to game.",
    "zh": "规则越确定，奖励就越便宜且可重复，模型就越难绕过。"
  },
  {
    "id": 772,
    "start": 7570.604,
    "end": 7573.391,
    "en": "RLHF is background here.",
    "zh": "RLHF在这里是背景知识。"
  },
  {
    "id": 773,
    "start": 7573.391,
    "end": 7583.116,
    "en": "The basic InstructGPT pipeline is: humans compare responses, a reward model is trained, and PPO then optimizes the policy.",
    "zh": "基本的InstructGPT流程是：人类比较响应，训练奖励模型，然后使用PPO优化策略。"
  },
  {
    "id": 774,
    "start": 7583.116,
    "end": 7594.479,
    "en": "The reward model is only a proxy for preference, and over-optimizing it leads to reward hacking, which is why a KL penalty is normally used to anchor the policy near the SFT reference.",
    "zh": "奖励模型只是偏好的代理，过度优化它会导致奖励黑客行为，这就是为什么通常使用KL惩罚来将策略锚定在SFT参考附近。"
  },
  {
    "id": 775,
    "start": 7594.479,
    "end": 7600.879,
    "en": "DPO skips the explicit reward model and optimizes offline from preference pairs directly.",
    "zh": "DPO跳过了显式的奖励模型，直接从偏好对中进行离线优化。"
  },
  {
    "id": 776,
    "start": 7600.879,
    "end": 7605.241,
    "en": "These methods are not the main line of Agent RL in this chapter.",
    "zh": "这些方法并不是本章中智能体强化学习的主要路线。"
  },
  {
    "id": 777,
    "start": 7605.412,
    "end": 7610.624,
    "en": "When the goal cannot be fully reduced to rules, model judgment is an option.",
    "zh": "当目标无法完全归约为规则时，模型判断是一个选择。"
  },
  {
    "id": 778,
    "start": 7610.574,
    "end": 7624.112,
    "en": "A generative reward model (GRM) emits not just a score but a diagnosis of what went well and what needs to change; it can serve as a reward source, and its diagnoses can be turned into distillation or preference data.",
    "zh": "生成式奖励模型（GRM）不仅发出一个分数，还会诊断哪些做得好，哪些需要改变；它可以作为奖励来源，其诊断可以转化为蒸馏或偏好数据。"
  },
  {
    "id": 779,
    "start": 7624.112,
    "end": 7637.699,
    "en": "The core idea of DeepSeek-GRM is to have the model first induce evaluation principles for the task, then evaluate the trajectory against those principles, and finally check the evaluation itself against verifiable facts.",
    "zh": "DeepSeek-GRM的核心思想是让模型首先为任务推导出评估原则，然后根据这些原则评估轨迹，最后用可验证的事实检查评估本身。"
  },
  {
    "id": 780,
    "start": 7637.699,
    "end": 7646.162,
    "en": "The resulting feedback is more transparent, but it still needs sampled human calibration so the judge does not develop biases of its own.",
    "zh": "由此产生的反馈更加透明，但仍需要抽样的人类校准，以防止评判者发展出自己的偏见。"
  },
  {
    "id": 781,
    "start": 7646.162,
    "end": 7650.237,
    "en": "Two easily confused notions are worth separating here.",
    "zh": "两个容易混淆的概念值得在这里区分清楚。"
  },
  {
    "id": 782,
    "start": 7650.237,
    "end": 7655.574,
    "en": "Reward hacking means exploiting a rule or an implementation hole to score highly.",
    "zh": "奖励黑客指的是利用规则或实现中的漏洞来获得高分。"
  },
  {
    "id": 783,
    "start": 7655.574,
    "end": 7663.424,
    "en": "Reward seeking means the model first builds an internal picture of what the grader will look at, then adjusts its behavior to that guess.",
    "zh": "奖励追求是指模型首先构建出评分者会关注的内部图像，然后根据这一猜测调整其行为。"
  },
  {
    "id": 784,
    "start": 7663.424,
    "end": 7678.162,
    "en": "The latter need not tamper with tests or fabricate results, yet on long-horizon tasks it can lead the model to set itself a very shallow check, stop as soon as it passes, and deliver something that satisfies the proxy metric but not the real intent.",
    "zh": "后者无需篡改测试或伪造结果，但在长期任务中，它可能导致模型给自己设定一个非常浅显的检查标准，一旦通过就停止，从而交付符合代理指标但不符合真实意图的内容。"
  },
  {
    "id": 785,
    "start": 7678.162,
    "end": 7690.724,
    "en": "So \"it passed the grader\" cannot be equated with \"the task is done\": the grader is a proxy for intent, and the harder you train, the more likely the model is to treat the proxy as the goal itself.",
    "zh": "因此，'它通过了评分者'不能等同于'任务已完成'：评分者只是意图的代理，你训练得越深入，模型就越可能将代理当作目标本身。"
  },
  {
    "id": 786,
    "start": 7690.724,
    "end": 7694.324,
    "en": "When the Reward Is Given: Outcome or Process.",
    "zh": "奖励何时给予：结果还是过程？"
  },
  {
    "id": 787,
    "start": 7694.324,
    "end": 7700.749,
    "en": "An outcome reward (ORM) judges only at the end of the episode whether the task was completed.",
    "zh": "结果奖励（ORM）仅在回合结束时判断任务是否完成。"
  },
  {
    "id": 788,
    "start": 7700.749,
    "end": 7715.462,
    "en": "It is the simplest and gives the policy the most freedom to explore; when there is no agreed standard for the intermediate path and the optimal solution has not yet been found by humans, SimpleVLA-RL's sparse success/failure reward is the right starting point.",
    "zh": "这是最简单的形式，给予策略最大的探索自由度；当没有公认的中间路径标准，且人类尚未找到最优解时，SimpleVLA-RL 的稀疏成功/失败奖励是正确的起点。"
  },
  {
    "id": 789,
    "start": 7715.462,
    "end": 7725.749,
    "en": "Sparse feedback makes it hard for the model to localize a specific mistake in a multi-step trajectory, which is one long-standing reason RL sample efficiency is limited.",
    "zh": "稀疏反馈会使模型难以在多步骤轨迹中定位特定错误，这是 RL 样本效率受限的一个长期原因。"
  },
  {
    "id": 790,
    "start": 7725.749,
    "end": 7739.574,
    "en": "On long-horizon coding or cowork tasks, the \"is it done\" judgment should also be handed to hidden tests, state assertions or an external termination hook that the model cannot write — never to the model's own claim of completion.",
    "zh": "在长期任务如编码或协作任务中，'是否完成'的判断也应交给隐藏测试、状态断言或模型无法编写的外部终止钩子，而绝不能交给模型自身的完成声明。"
  },
  {
    "id": 791,
    "start": 7739.574,
    "end": 7750.437,
    "en": "Premature completion\" is a concrete example: when the model says the task is done, the harness runs acceptance tests the model cannot see, in an isolated workspace.",
    "zh": "提前完成就是一个具体例子：当模型声称任务完成时，Harness 会在隔离的工作区中运行模型无法看到的验收测试。"
  },
  {
    "id": 792,
    "start": 7750.437,
    "end": 7755.024,
    "en": "Passing earns positive reward, failing earns negative reward.",
    "zh": "通过获得正向奖励，失败则获得负向奖励。"
  },
  {
    "id": 793,
    "start": 7755.024,
    "end": 7764.887,
    "en": "Those tests must read real files or environment state rather than checking whether the model said \"done\", or the model will learn to promise verification without performing it.",
    "zh": "这些测试必须读取真实文件或环境状态，而不是检查模型是否说'完成'，否则模型会学会承诺验证而不实际执行。"
  },
  {
    "id": 794,
    "start": 7764.887,
    "end": 7780.824,
    "en": "During evaluation, keep a boundary set of unfinished tasks separate from a held-out set of genuinely finished ones: the former shows the premature-stop rate, the latter shows whether the model can still close out normally — otherwise you train a model that never dares to finish.",
    "zh": "在评估期间，应将未完成任务的边界集与真正完成的任务集分开：前者显示提前停止率，后者显示模型是否仍能正常结束任务——否则你会训练出一个从不敢完成任务的模型。"
  },
  {
    "id": 795,
    "start": 7780.824,
    "end": 7792.237,
    "en": "A process reward (PRM) gives feedback at intermediate steps, checking things like authentication, tool arguments, the number of passing tests or navigation actions.",
    "zh": "过程奖励（PRM）在中间步骤提供反馈，检查诸如认证、工具参数、通过的测试数量或导航操作等。"
  },
  {
    "id": 796,
    "start": 7792.237,
    "end": 7799.312,
    "en": "OpenAI's Let's Verify Step by Step showed the value of step-by-step verification in mathematical reasoning.",
    "zh": "OpenAI的逐步验证步骤展示了分步验证在数学推理中的价值。"
  },
  {
    "id": 797,
    "start": 7799.312,
    "end": 7808.924,
    "en": "Process rewards ease long-horizon credit assignment, but they can confine the model to the path the designer had in mind, and they cost more to label and validate.",
    "zh": "过程奖励有助于长期信用分配，但它们可能使模型局限于设计者设想的路径，并且标注和验证的成本更高。"
  },
  {
    "id": 798,
    "start": 7808.924,
    "end": 7827.712,
    "en": "V-IRL-VL (Experiment 8-12) uses step-by-step navigation feedback while SimpleVLA-RL (Experiment 8-13) keeps only the endpoint reward, and together they form a controlled contrast: dense feedback buys convergence speed, sparse feedback buys exploration space.",
    "zh": "V-IRL-VL（实验8-12）在逐步导航反馈中使用了分步反馈，而SimpleVLA-RL（实验8-13）仅保留终点奖励，它们共同形成了一个对照实验：密集反馈可以提高收敛速度，稀疏反馈则能扩大探索空间。"
  },
  {
    "id": 799,
    "start": 7827.712,
    "end": 7837.624,
    "en": "In practice, establish a reliable baseline with outcome rewards first, and only then add process signals for intermediate events that are genuinely verifiable.",
    "zh": "在实践中，首先用结果奖励建立可靠的基线，然后再添加真正可验证的中间事件的过程信号。"
  },
  {
    "id": 800,
    "start": 7837.624,
    "end": 7857.687,
    "en": "Multi-turn LLM RL usually sets the discount factor \\gamma=1; PPO's value network or turn-level advantage attributes endpoint feedback back to earlier actions, while GRPO spreads a trajectory-level advantage across the generated tokens, so signal dilution deserves particular care on long trajectories.",
    "zh": "多轮LLM强化学习通常将折扣因子γ设为1；PPO的价值网络或回合级优势会将终点反馈回传到早期动作，而GRPO则将轨迹级优势分布在生成的标记上，因此在长轨迹上需要特别注意信号稀释的问题。"
  },
  {
    "id": 801,
    "start": 7857.844,
    "end": 7864.194,
    "en": "How Much Information the Reward Must Express: Scalar, Vector, Generative Diagnosis.",
    "zh": "奖励必须表达多少信息：标量、向量、生成式诊断。"
  },
  {
    "id": 802,
    "start": 7864.144,
    "end": 7868.769,
    "en": "The density of a reward and its representation are two different things.",
    "zh": "奖励的密度与其表示是两回事。"
  },
  {
    "id": 803,
    "start": 7868.769,
    "end": 7886.794,
    "en": "A scalar answers only \"how good overall\"; a semi-scalar gives a brief reason and then a score; a vector scores separately along dimensions such as accuracy, completeness, cost and safety; a generative reward produces a natural-language diagnosis that can be sampled several times and aggregated.",
    "zh": "标量只能回答“整体有多好”；半标量给出简要原因后给出一个分数；向量在准确性、完整性、成本和安全性等维度上分别评分；生成式奖励产生自然语言的诊断，可以多次采样并汇总。"
  },
  {
    "id": 804,
    "start": 7886.794,
    "end": 7889.619,
    "en": "The selection rule is straightforward:",
    "zh": "选择规则很简单："
  },
  {
    "id": 805,
    "start": 7889.619,
    "end": 7894.331,
    "en": "A definite answer or test exists: prefer a binary scalar;",
    "zh": "存在明确的答案或测试：优先使用二元标量；"
  },
  {
    "id": 806,
    "start": 7894.331,
    "end": 7900.731,
    "en": "Several mutually independent quality goals: use a vector, or weight the dimensions into a scalar;",
    "zh": "多个相互独立的质量目标：使用向量，或把维度加权成一个标量；"
  },
  {
    "id": 807,
    "start": 7900.731,
    "end": 7908.831,
    "en": "Open-ended and hard to enumerate as rules: use generative diagnosis, but pair it with fact-checking and sampled human review.",
    "zh": "开放性且难以用规则列举：使用生成式诊断，但需配合事实核查和采样的人工审查。"
  },
  {
    "id": 808,
    "start": 7908.831,
    "end": 7913.769,
    "en": "Do not stack unverifiable dimensions in the name of a \"richer\" reward.",
    "zh": "不要为了所谓的“更丰富的”奖励而堆叠不可验证的维度。"
  },
  {
    "id": 809,
    "start": 7913.769,
    "end": 7919.044,
    "en": "Every additional evaluation dimension adds one more way for the policy to game it.",
    "zh": "每个额外的评估维度都会增加一种策略欺骗它的方法。"
  },
  {
    "id": 810,
    "start": 7919.044,
    "end": 7928.081,
    "en": "Confirm first that the signal produces meaningful within-group variation across a handful of rollouts, and only then decide whether it belongs in training.",
    "zh": "首先确认该信号在少量 rollout 中产生了有意义的组内变化，然后再决定它是否应被纳入训练。"
  },
  {
    "id": 811,
    "start": 7928.081,
    "end": 7932.944,
    "en": "A Correct Outcome Is Not Enough: Path Constraints and RLVP.",
    "zh": "正确的结果还不够：路径约束与RLVP。"
  },
  {
    "id": 812,
    "start": 7932.944,
    "end": 7940.019,
    "en": "An outcome reward settles whether the job got done, but it cannot express whether it was done the way it was supposed to be.",
    "zh": "一个结果奖励只能判断任务是否完成，但无法表达任务是否按照应有的方式完成。"
  },
  {
    "id": 813,
    "start": 7940.019,
    "end": 7947.831,
    "en": "A real Agent may achieve surface success by editing the test file, skipping authentication or running a destructive command.",
    "zh": "一个真实的智能体可能通过修改测试文件、跳过认证或执行破坏性命令来获得表面的成功。"
  },
  {
    "id": 814,
    "start": 7947.831,
    "end": 7956.569,
    "en": "The principle behind RLVP (Reinforcement Learning with Verified Penalty) is: reward the outcome, penalize the path.",
    "zh": "RLVP（带验证惩罚的强化学习）的原理是：奖励结果，惩罚路径。"
  },
  {
    "id": 815,
    "start": 7956.569,
    "end": 7969.631,
    "en": "It targets machine-decidable, outcome-neutral constraints that have no bearing on final success or failure, and it is not a substitute for independent checks on semantic intent, delivery completeness and early-stopping behavior.",
    "zh": "它针对的是机器可判定的、与最终成功或失败无关的约束，并不是对语义意图、交付完整性和早期停止行为进行独立检查的替代方案。"
  },
  {
    "id": 816,
    "start": 7969.631,
    "end": 7981.656,
    "en": "Real environments are typically asymmetric verifiers: detecting \"a bad action was taken\" is cheap and reliable, whereas proving \"this step made meaningful progress toward the goal\" is hard.",
    "zh": "真实环境通常是不对称的验证器：检测“采取了错误的操作”是廉价且可靠的，而证明“这一步朝着目标取得了有意义的进展”则很难。"
  },
  {
    "id": 817,
    "start": 7981.656,
    "end": 7993.181,
    "en": "Write the total reward as R=O+\\beta\\Phi, where O is the task outcome and \\Phi is a path signal computed per action by deterministic rules.",
    "zh": "将总奖励表示为R=O+βΦ，其中O是任务结果，Φ是通过确定性规则按每个动作计算的路径信号。"
  },
  {
    "id": 818,
    "start": 7993.181,
    "end": 8007.331,
    "en": "Deduct points for verifiable violations, and give a small partial reward for verifiable compliant actions or reachable sub-goals; normalize the two channels before combining them so the path signal cannot drown out the main objective.",
    "zh": "对可验证的违规行为扣分，并对可验证的合规行为或可达到的子目标给予少量部分奖励；在合并之前对两个通道进行归一化，以确保路径信号不会淹没主要目标。"
  },
  {
    "id": 819,
    "start": 8007.331,
    "end": 8013.856,
    "en": "None of this changes PPO or GRPO — it changes only the reward seen at each step.",
    "zh": "这一切并不改变PPO或GRPO——它只改变了每一步所看到的奖励。"
  },
  {
    "id": 820,
    "start": 8013.856,
    "end": 8021.456,
    "en": "At the implementation level, split the verifier output into two channels and hand them to the existing policy optimizer:",
    "zh": "在实现层面，将验证器输出分为两个通道，并将其提供给现有的策略优化器："
  },
  {
    "id": 821,
    "start": 8021.456,
    "end": 8030.756,
    "en": "Here is the trajectory representation tracking the sequence of user prompts, model decisions, and environment observations across execution steps.",
    "zh": "这是轨迹表示，用于跟踪执行步骤中用户提示、模型决策和环境观察的序列。"
  },
  {
    "id": 822,
    "start": 8030.756,
    "end": 8039.481,
    "en": "Which actions are permitted, which sub-goals are reachable, what the hidden tests are and how evidence is recorded all depend on the specific environment.",
    "zh": "哪些操作被允许，哪些子目标可达，隐藏测试是什么以及证据如何记录，都取决于具体的环境。"
  },
  {
    "id": 823,
    "start": 8039.481,
    "end": 8048.431,
    "en": "The text here only explains how the outcome reward and the path constraint merge, so that one environment's rules are not mistaken for a general algorithm.",
    "zh": "此处的文本仅解释结果奖励和路径约束是如何合并的，以避免将一个环境的规则误认为是通用算法。"
  },
  {
    "id": 824,
    "start": 8048.431,
    "end": 8055.669,
    "en": "The point of RLVP is not that \"denser rewards are better\" but whether within-group variation can be restored.",
    "zh": "RLVP的重点不在于‘更密集的奖励更好’，而在于组内差异是否可以恢复。"
  },
  {
    "id": 825,
    "start": 8055.669,
    "end": 8062.556,
    "en": "A pure outcome reward produces zero variance and no gradient in both all-fail and all-succeed groups.",
    "zh": "纯结果奖励在所有失败组和所有成功组中都会产生零方差和无梯度。"
  },
  {
    "id": 826,
    "start": 8062.556,
    "end": 8073.081,
    "en": "Violating actions are usually easy to detect, so a penalty almost always restores the variance; a progress reward only works when partial progress is actually reachable.",
    "zh": "违规行为通常容易检测，因此惩罚几乎总是能恢复方差；只有在部分进展确实可达到时，进展奖励才会起作用。"
  },
  {
    "id": 827,
    "start": 8073.081,
    "end": 8089.206,
    "en": "Four design rules follow: penalize specific actions, never \"insufficient effort\"; always keep the outcome reward so the model does not learn to do nothing; pair every penalty with a reachable compliant path where possible; and make the rules deterministic and hard to game.",
    "zh": "接下来有四个设计规则：惩罚特定行为，而不是“努力不足”；始终保留结果奖励，以防止模型学会什么都不做；尽可能为每个惩罚配对一个可到达的合规路径；并使规则确定且难以操纵。"
  },
  {
    "id": 828,
    "start": 8089.206,
    "end": 8099.644,
    "en": "If the base policy would never sample the compliant action at all, seed that path with a few demonstrations first, and taper the path shaping once compliant behavior is stable.",
    "zh": "如果基础策略根本不会采样合规动作，可以先用少量演示来引导该路径，在合规行为稳定后逐渐减少路径塑造。"
  },
  {
    "id": 829,
    "start": 8099.644,
    "end": 8107.331,
    "en": "Put differently: the penalty is the half that is usually reachable, and the progress reward is the half gated by reachability.",
    "zh": "换句话说：惩罚是通常可到达的那一半，而进展奖励是受可达性限制的那一半。"
  },
  {
    "id": 830,
    "start": 8107.331,
    "end": 8115.906,
    "en": "Experiment 8-16 advanced difficulty, three stars: : RLVP — Reward the Outcome, Penalize the Path",
    "zh": "实验8-16，难度升级，三颗星：RLVP — 奖励结果，惩罚路径"
  },
  {
    "id": 831,
    "start": 8116.06,
    "end": 8124.085,
    "en": "Add an outcome reward O and a path signal \\Phi on top of GRPO and compare against a pure outcome reward.",
    "zh": "在GRPO基础上增加一个结果奖励O和一个路径信号Φ，然后与纯结果奖励进行比较。"
  },
  {
    "id": 832,
    "start": 8124.035,
    "end": 8141.685,
    "en": "On TerminalBench, violations drop from 3.71 to 0.66 while the success rate is essentially unchanged; on miniF2F, a reachable partial reward cuts the iterations needed to reach a 0.9 success rate from 7.0 to 4.4.",
    "zh": "在TerminalBench上，违规次数从3.71下降到0.66，而成功率基本不变；在miniF2F上，可到达的部分奖励将达到0.9成功率所需的迭代次数从7.0减少到4.4。"
  },
  {
    "id": 833,
    "start": 8141.685,
    "end": 8149.61,
    "en": "In software repair, where no rollout passes any test, the progress signal is unreachable and adding it brings no benefit.",
    "zh": "在软件修复中，没有任何回放通过任何测试，进展信号不可达，添加它没有好处。"
  },
  {
    "id": 834,
    "start": 8149.61,
    "end": 8155.322,
    "en": "The lesson: test whether the signal is reachable before deciding to add a reward dimension.",
    "zh": "教训是：在决定添加奖励维度之前，先测试信号是否可到达。"
  },
  {
    "id": 835,
    "start": 8155.322,
    "end": 8162.935,
    "en": "These numbers come from controlled proxy environments and cannot be extrapolated directly into equivalent gains for a production Agent.",
    "zh": "这些数据来自受控的代理环境，不能直接推广到生产级智能体的等效收益。"
  },
  {
    "id": 836,
    "start": 8162.935,
    "end": 8176.535,
    "en": "The safer conclusion is mechanistic: as long as the path signal distinguishes behaviors within the same group of rollouts, and the rules are hard for the policy to game, it fills in exactly the information the endpoint reward cannot see.",
    "zh": "更安全的结论是机制性的：只要路径信号能在同一组回放中区分行为，并且规则难以被策略操纵，它就能填补终点奖励无法看到的信息。"
  },
  {
    "id": 837,
    "start": 8176.535,
    "end": 8184.722,
    "en": "Real deployments additionally need hidden verification, trajectory monitoring and external termination conditions built into the harness.",
    "zh": "实际部署还需要在Harness中内置隐藏验证、轨迹监控和外部终止条件。"
  },
  {
    "id": 838,
    "start": 8184.722,
    "end": 8188.372,
    "en": "Distillation: Improving Sample Efficiency.",
    "zh": "蒸馏：提升样本效率。"
  },
  {
    "id": 839,
    "start": 8188.372,
    "end": 8196.61,
    "en": "The experiments above have systematically shown RL's core value in Agent training, but every one of them paid a steep sample cost.",
    "zh": "上述实验已经系统地展示了强化学习在智能体训练中的核心价值，但每一个都付出了高昂的样本成本。"
  },
  {
    "id": 840,
    "start": 8196.61,
    "end": 8207.797,
    "en": "Sample efficiency\" here means something specific: how many effective parameter updates each expensive environment interaction buys, not merely training steps or GPU hours.",
    "zh": "这里的‘样本效率’指的是具体含义：每次昂贵的环境交互能带来多少有效的参数更新，而不仅仅是训练步骤或GPU小时数。"
  },
  {
    "id": 841,
    "start": 8207.797,
    "end": 8218.147,
    "en": "ReTool's RL training took more than 200 times as long as its SFT (9 days versus 1 hour), which makes reducing environment sampling especially valuable.",
    "zh": "ReTool的强化学习训练耗时是其SFT的200多倍（9天对比1小时），这使得减少环境采样尤其有价值。"
  },
  {
    "id": 842,
    "start": 8218.147,
    "end": 8227.872,
    "en": "RL's low sample efficiency comes from high variance and the difficulty of reusing on-policy data, but the more fundamental cause is that feedback is too sparse.",
    "zh": "强化学习的低样本效率源于高方差和难以重用策略数据，但更根本的原因是反馈过于稀疏。"
  },
  {
    "id": 843,
    "start": 8227.872,
    "end": 8241.197,
    "en": "Mainstream model-free RL typically yields a single success/failure scalar at the end of one rollout; the reason for an intermediate mistake, a missing field, or a hint about the procedure carries no direct learning signal.",
    "zh": "主流的无模型强化学习通常在一次轨迹结束时只产生一个成功/失败的标量；中间错误、遗漏字段或过程提示的原因没有直接的学习信号。"
  },
  {
    "id": 844,
    "start": 8241.197,
    "end": 8257.247,
    "en": "When a customer-service script says \"I need the last four digits of the credit card,\" the model can only trial-and-error its way there from a final 0/1 outcome, perhaps taking hundreds of interactions to stumble onto that step—whereas a human remembers it after hearing it once.",
    "zh": "当客服脚本说“我需要信用卡的最后四位数字”时，模型只能通过最终的0/1结果进行试错，可能需要数百次交互才能偶然找到那一步——而人类只需听一次就能记住。"
  },
  {
    "id": 845,
    "start": 8257.247,
    "end": 8268.022,
    "en": "Distillation turns one rollout into a dense supervisory signal, letting a single trajectory contribute a large number of gradients without exploring any additional environment trajectories.",
    "zh": "蒸馏将一次轨迹转化为密集的监督信号，使单个轨迹可以贡献大量梯度，而无需探索任何额外的环境轨迹。"
  },
  {
    "id": 846,
    "start": 8268.022,
    "end": 8272.31,
    "en": "That is the key to how distillation improves sample efficiency.",
    "zh": "这就是蒸馏提高样本效率的关键。"
  },
  {
    "id": 847,
    "start": 8272.31,
    "end": 8277.347,
    "en": "On-Policy Distillation: Making One Rollout Produce Dense Supervision.",
    "zh": "策略蒸馏：让一次轨迹产生密集监督。"
  },
  {
    "id": 848,
    "start": 8277.347,
    "end": 8284.785,
    "en": "On-Policy Distillation was systematically organized and popularized by Thinking Machines Lab in 2025.",
    "zh": "策略蒸馏由Thinking Machines Lab于2025年系统化整理并推广。"
  },
  {
    "id": 849,
    "start": 8284.785,
    "end": 8292.535,
    "en": "Here, \"policy\" refers to who generates the state prefixes on which the student learns, not who supplies the supervision:",
    "zh": "此处，“策略”指的是生成学生学习的状态前缀的人，而不是提供监督的人："
  },
  {
    "id": 850,
    "start": 8292.535,
    "end": 8305.185,
    "en": "Method: SFT / off-policy distillation; Who samples the trajectory/state?: Human or teacher; Main supervision per trajectory: Dense token-level supervision from labeled answers.",
    "zh": "方法：SFT / 离策略蒸馏；谁采样轨迹/状态？：人类或教师；每条轨迹的主要监督：来自标注答案的密集令牌级监督。"
  },
  {
    "id": 851,
    "start": 8305.185,
    "end": 8316.385,
    "en": "Method: On-policy RL; Who samples the trajectory/state?: Current student; Main supervision per trajectory: Usually sparse outcome or process rewards.",
    "zh": "方法：策略强化学习；谁采样轨迹/状态？：当前学生；每条轨迹的主要监督：通常是轨迹末端的稀疏成功/失败信号或过程奖励。"
  },
  {
    "id": 852,
    "start": 8316.385,
    "end": 8328.222,
    "en": "Method: On-Policy Distillation; Who samples the trajectory/state?: Current student; Main supervision per trajectory: Dense teacher token distributions on student prefixes.",
    "zh": "方法：策略蒸馏；谁采样轨迹/状态？：当前学生；每条轨迹的主要监督：学生前缀上的密集教师令牌分布。"
  },
  {
    "id": 853,
    "start": 8328.222,
    "end": 8333.447,
    "en": "SFT supervision is dense but mainly covers states that a teacher would visit.",
    "zh": "SFT的监督是密集的，但主要覆盖教师会访问的状态。"
  },
  {
    "id": 854,
    "start": 8333.447,
    "end": 8346.935,
    "en": "If the deployed student makes an early mistake that the teacher would not make, it enters a prefix absent from the training data; every subsequent prediction is then made in an unfamiliar state, and errors can compound along a long sequence.",
    "zh": "如果部署的学生犯了一个教师不会犯的早期错误，它就会进入训练数据中不存在的前缀；随后的每个预测都会在不熟悉的环境中进行，错误可能会沿着长序列累积。"
  },
  {
    "id": 855,
    "start": 8346.935,
    "end": 8357.86,
    "en": "On-policy RL trains directly on the student's own state distribution and is therefore more relevant, but it often receives only a success/failure signal at the end of the trajectory.",
    "zh": "策略强化学习直接在学生的自身状态分布上训练，因此更为相关，但它通常只能在轨迹末端获得一个成功/失败信号。"
  },
  {
    "id": 856,
    "start": 8357.86,
    "end": 8368.122,
    "en": "On-Policy Distillation combines the two: the student decides where it goes, and the teacher supplies the full next-token distribution at the state the student has actually reached.",
    "zh": "On-Policy Distillation 结合了这两种方法：学生决定去向，而教师在学生实际到达的状态处提供完整的下一个token分布。"
  },
  {
    "id": 857,
    "start": 8368.276,
    "end": 8376.626,
    "en": "A rollout of length T therefore no longer produces only one 0/1 signal but roughly T sets of token-level supervision.",
    "zh": "因此，长度为T的rollout不再只产生一个0/1信号，而是大约T组token级别的监督信号。"
  },
  {
    "id": 858,
    "start": 8376.576,
    "end": 8385.026,
    "en": "It follows the student's real errors more closely than off-policy SFT and supplies denser, lower-variance feedback than pure RL.",
    "zh": "与离策略SFT相比，它更紧密地跟踪学生的实际错误，并且提供的反馈更密集、方差更低。"
  },
  {
    "id": 859,
    "start": 8385.026,
    "end": 8390.713,
    "en": "Teacher inference adds compute but does not require a second set of environment trajectories.",
    "zh": "教师推理增加了计算量，但不需要第二组环境轨迹。"
  },
  {
    "id": 860,
    "start": 8390.713,
    "end": 8402.151,
    "en": "It still cannot create capability from nothing: the student must at least enter meaningful states the teacher can correct, and the teacher's policy cannot lie too far outside the student's effective support.",
    "zh": "它仍然无法凭空创造能力：学生至少必须进入教师可以纠正的有意义状态，且教师的策略不能偏离学生的有效支持范围太远。"
  },
  {
    "id": 861,
    "start": 8402.151,
    "end": 8414.776,
    "en": "If the base model lacks even the target language, domain concepts, or basic actions, first use Mid-training or off-policy demonstrations for a cold start, then switch to on-policy distillation.",
    "zh": "如果基础模型甚至缺乏目标语言、领域概念或基本动作，首先使用中训练或离策略演示进行冷启动，然后切换到在线策略蒸馏。"
  },
  {
    "id": 862,
    "start": 8414.776,
    "end": 8418.888,
    "en": "This also shows why the preceding numerical issue matters.",
    "zh": "这也说明了前面的数值问题为何重要。"
  },
  {
    "id": 863,
    "start": 8418.888,
    "end": 8425.463,
    "en": "On-Policy Distillation optimizes the teacher KL on states visited by the student's current policy.",
    "zh": "在线策略蒸馏在学生当前策略访问的状态上优化教师KL。"
  },
  {
    "id": 864,
    "start": 8425.463,
    "end": 8438.676,
    "en": "If the rollout engine actually samples from \\mu while the trainer computes another \\pi_\\theta, the training states are already off-policy even though no PPO ratio is used explicitly.",
    "zh": "如果rollout引擎实际上从\\mu采样，而训练器计算另一个\\pi_\\theta，即使没有显式使用PPO比率，训练状态已经是离策略的。"
  },
  {
    "id": 865,
    "start": 8438.676,
    "end": 8450.238,
    "en": "Implementations should still verify sampler/trainer log-probability agreement before an update; otherwise nominal On-Policy Distillation degenerates into training with a distribution mismatch.",
    "zh": "实现时仍应在更新前验证采样器/训练器对数概率的一致性；否则名义上的在线策略蒸馏会退化为分布不匹配的训练。"
  },
  {
    "id": 866,
    "start": 8450.238,
    "end": 8458.326,
    "en": "Concretely, the student's predicted distribution is pulled toward the teacher's, usually by minimizing the KL divergence between them.",
    "zh": "具体来说，学生预测的分布被拉向教师的分布，通常是通过最小化它们之间的KL散度。"
  },
  {
    "id": 867,
    "start": 8458.326,
    "end": 8472.638,
    "en": "For instance, when the student generates \"first query the API, then parse the return value…,\" the teacher can give a distribution at the current position of 80% \"query,\" 15% \"call,\" and 5% for everything else.",
    "zh": "例如，当学生生成“首先查询API，然后解析返回值…”时，教师可以在当前位置给出80%的“查询”、15%的“调用”和5%的其他内容分布。"
  },
  {
    "id": 868,
    "start": 8472.638,
    "end": 8485.926,
    "en": "Compared with a binary end-of-task reward, token-level alignment provides a far denser, lower-variance learning signal; the cost is the teacher's inference, which pays off especially well when environment interaction is expensive.",
    "zh": "与二进制任务结束奖励相比，token级别的对齐提供了更密集、方差更低的学习信号；代价是教师的推理，这在环境交互成本高昂时尤其划算。"
  },
  {
    "id": 869,
    "start": 8485.926,
    "end": 8490.013,
    "en": "The basic pseudocode for on-policy distillation is:",
    "zh": "在线策略蒸馏的基本伪代码如下："
  },
  {
    "id": 870,
    "start": 8490.013,
    "end": 8499.313,
    "en": "Here is the trajectory representation tracking the sequence of user prompts, model decisions, and environment observations across execution steps.",
    "zh": "这是轨迹表示，记录了执行步骤中用户提示、模型决策和环境观察的序列。"
  },
  {
    "id": 871,
    "start": 8499.484,
    "end": 8507.021,
    "en": "On tasks such as mathematics, reaching comparable performance takes roughly one tenth the training steps of pure RL.",
    "zh": "在数学等任务中，达到相当的性能大约只需要纯强化学习训练步骤的十分之一。"
  },
  {
    "id": 872,
    "start": 8506.971,
    "end": 8528.521,
    "en": "In multi-turn Agents, where the success signal arrives later and more sparsely, the teacher's token-level distribution can guide intermediate decisions directly—but only if the simulation environment is realistic enough that the states the student explores stay close to the deployment distribution; otherwise the teacher's scores on unfamiliar, off-distribution states are unreliable too.",
    "zh": "在多轮智能体中，成功信号出现得更晚且更稀疏，此时教师的逐标记分布可以直接指导中间决策——但前提是模拟环境足够真实，使学生探索的状态保持在部署分布附近；否则教师对不熟悉、分布外状态的评分也是不可靠的。"
  },
  {
    "id": 873,
    "start": 8528.521,
    "end": 8534.971,
    "en": "The principle that \"dense signals beat sparse signals\" has also been verified in a pure Agent setting.",
    "zh": "\"密集信号胜过稀疏信号\"这一原则在纯智能体设置中也得到了验证。"
  },
  {
    "id": 874,
    "start": 8534.971,
    "end": 8551.359,
    "en": "The author and collaborators once compared DPO, four RL variants, and On-Policy Distillation on a \"sense of time\" task: the first group was limited by sparse rewards, objective mismatch, rollout-shape mismatch, and policy collapse, respectively.",
    "zh": "作者和合作者曾在一个“时间感”任务上比较了DPO、四种RL变体以及在线策略蒸馏：第一组分别受限于稀疏奖励、目标不匹配、回放形状不匹配和策略崩溃。"
  },
  {
    "id": 875,
    "start": 8551.359,
    "end": 8567.721,
    "en": "Switching to a frozen Qwen3-32B teacher and aligning token by token on the student's own multi-turn trajectories, training converged smoothly, and pass rates across the four conditions were 23 to 47 percentage points above the same-source SFT baseline.",
    "zh": "改用冻结的Qwen3-32B教师，并在学生自己的多轮轨迹上逐标记对齐，训练顺利收敛，四个条件下的通过率比同源SFT基线高出23至47个百分点。"
  },
  {
    "id": 876,
    "start": 8567.721,
    "end": 8576.384,
    "en": "This suggests the bottleneck is often not that the reward function is insufficiently sophisticated, but that each interaction supplies too little signal.",
    "zh": "这表明瓶颈通常不是奖励函数不够复杂，而是每次交互提供的信号太少。"
  },
  {
    "id": 877,
    "start": 8576.384,
    "end": 8579.009,
    "en": "What If There Is No Stronger Teacher?",
    "zh": "如果没有更强的教师怎么办？"
  },
  {
    "id": 878,
    "start": 8579.009,
    "end": 8581.784,
    "en": "On-Policy Self-Distillation.",
    "zh": "在线策略蒸馏"
  },
  {
    "id": 879,
    "start": 8581.784,
    "end": 8591.171,
    "en": "On-Policy Distillation's power comes from the teacher, and that saddles it with a hard prerequisite: there must be a teacher model clearly stronger than the student.",
    "zh": "在线策略蒸馏的力量来自于教师，这也带来了硬性前提：必须有一个明显强于学生的教师模型。"
  },
  {
    "id": 880,
    "start": 8591.171,
    "end": 8593.921,
    "en": "In many settings that does not hold.",
    "zh": "在许多情况下并不满足这一条件。"
  },
  {
    "id": 881,
    "start": 8593.921,
    "end": 8600.834,
    "en": "If you are training a domain-specific model where every existing model falls short, there is no teacher available.",
    "zh": "如果你正在训练一个领域特定模型，而所有现有模型都表现不佳，就没有可用的教师。"
  },
  {
    "id": 882,
    "start": 8600.834,
    "end": 8605.246,
    "en": "Can we still benefit from dense supervision without a stronger teacher?",
    "zh": "我们是否还能在没有更强教师的情况下受益于密集监督？"
  },
  {
    "id": 883,
    "start": 8605.246,
    "end": 8610.509,
    "en": "One ingenious way through is On-Policy Self-Distillation (OPSD)",
    "zh": "一种巧妙的方法是在线策略自蒸馏（OPSD）"
  },
  {
    "id": 884,
    "start": 8610.509,
    "end": 8615.334,
    "en": "OPSD can be read as a constrained variant of the pseudocode above:",
    "zh": "OPSD可以被看作是上述伪代码的一种受约束的变体："
  },
  {
    "id": 885,
    "start": 8615.334,
    "end": 8624.634,
    "en": "Here is the trajectory representation tracking the sequence of user prompts, model decisions, and environment observations across execution steps.",
    "zh": "这是轨迹表示，跟踪执行步骤中用户提示、模型决策和环境观察的序列。"
  },
  {
    "id": 886,
    "start": 8624.634,
    "end": 8637.284,
    "en": "privileged_state may only be constructed on the training side and must not leak to the deployed Agent; retention_regularizer stands for a retention set or style constraint, not some fixed hyperparameter.",
    "zh": "privileged_state只能在训练端构建，不能泄露到部署的智能体中；retention_regularizer表示保留集或风格约束，而不是某个固定的超参数。"
  },
  {
    "id": 887,
    "start": 8637.284,
    "end": 8643.534,
    "en": "The training pipeline must also check data permissions, answer masking, and the risk of forgetting.",
    "zh": "训练流程还必须检查数据权限、答案掩码和遗忘风险。"
  },
  {
    "id": 888,
    "start": 8643.534,
    "end": 8655.671,
    "en": "Compared with RLVR, OPSD does not require the reward to be automatically verifiable: the privileged information can be a reference answer, a human demonstration, or domain documentation.",
    "zh": "与RLVR相比，OPSD不需要奖励自动可验证：特权信息可以是参考答案、人类演示或领域文档。"
  },
  {
    "id": 889,
    "start": 8655.671,
    "end": 8664.946,
    "en": "It uses that information in place of a stronger external teacher while keeping the sample-efficiency advantage of \"on-policy sampling plus token-level supervision.",
    "zh": "它利用这些信息代替更强的外部教师，同时保持“策略内采样加标记级监督”的样本效率优势。"
  },
  {
    "id": 890,
    "start": 8664.946,
    "end": 8682.484,
    "en": "But it does not create new knowledge out of nothing—if the model still cannot explain the process even while holding the answer, self-distillation yields no extra signal; naive OPSD can also make the model lose its original reasoning style, requiring additional regularization to stabilize.",
    "zh": "但它不会凭空创造新知识——如果模型即使持有答案仍无法解释过程，自蒸馏也不会产生额外信号；朴素的OPSD也可能使模型失去原有的推理风格，需要额外正则化来稳定。"
  },
  {
    "id": 891,
    "start": 8682.484,
    "end": 8685.284,
    "en": "From Bad Cases to Post-Training.",
    "zh": "从错误案例到后训练。"
  },
  {
    "id": 892,
    "start": 8685.284,
    "end": 8695.046,
    "en": "This section returns to the question left open in Chapter 7: how an evaluation dataset built from production bad cases actually becomes an input to post-training.",
    "zh": "本节回到第7章留下的问题：如何将从生产环境中的错误案例构建的评估数据实际作为后训练的输入。"
  },
  {
    "id": 893,
    "start": 8695.046,
    "end": 8701.734,
    "en": "The end of Chapter 7 compared the evaluation environment and its verifiers to the cornerstones of post-training.",
    "zh": "第7章结尾将评估环境及其验证者比作后训练的基石。"
  },
  {
    "id": 894,
    "start": 8701.734,
    "end": 8711.396,
    "en": "Failure-attribution records, end-to-end regression tasks, trajectory-prefix regression tasks, and rubric scores each map to a different training use:",
    "zh": "失败归因记录、端到端回归任务、轨迹前缀回归任务和评分标准各自对应不同的训练用途："
  },
  {
    "id": 895,
    "start": 8711.396,
    "end": 8713.709,
    "en": "Table 8-5.",
    "zh": "表8-5。"
  },
  {
    "id": 896,
    "start": 8713.709,
    "end": 8718.684,
    "en": "Mapping Chapter 7 evaluation data to Chapter 8 training uses",
    "zh": "将第7章的评估数据映射到第8章的训练用途"
  },
  {
    "id": 897,
    "start": 8718.684,
    "end": 8733.734,
    "en": "Chapter 7 evaluation data: End-to-end regression task with a verifier; Chapter 8 training use: RL rollout tasks and verifiable rewards (RLVR); the sampling pool for rejection-sampling fine-tuning (RFT).",
    "zh": "第7章评估数据：带验证者的端到端回归任务；第8章训练用途：RL滚动任务和可验证奖励（RLVR）；拒绝采样微调（RFT）的采样池。"
  },
  {
    "id": 898,
    "start": 8733.734,
    "end": 8747.809,
    "en": "Chapter 7 evaluation data: Trajectory-prefix regression task; Chapter 8 training use: DPO preference pairs, SFT demonstrations for decision boundaries, and teacher states for On-Policy Distillation.",
    "zh": "第7章评估数据：轨迹前缀回归任务；第8章训练用途：DPO偏好对、决策边界SFT示范和策略蒸馏的教师状态。"
  },
  {
    "id": 899,
    "start": 8747.809,
    "end": 8762.234,
    "en": "Chapter 7 evaluation data: Failure-attribution record (first erroneous step and error category); Chapter 8 training use: Negative labels for process supervision (PRM); rules for RLVP path penalties.",
    "zh": "第7章评估数据：失败归因记录（第一个错误步骤和错误类别）；第8章训练用途：过程监督的负标签（PRM）；RLVP路径惩罚规则。"
  },
  {
    "id": 900,
    "start": 8762.404,
    "end": 8776.054,
    "en": "Chapter 7 evaluation data: Multi-dimensional rubric scores and human gold set; Chapter 8 training use: Dimensions of vector rewards; training and calibration data for generative reward models (GRM).",
    "zh": "第7章评估数据：多维评分标准和人工黄金集；第8章训练用途：向量奖励的维度；生成式奖励模型（GRM）的训练和校准数据。"
  },
  {
    "id": 901,
    "start": 8776.004,
    "end": 8779.829,
    "en": "Case 1: Coding Agent premature completion.",
    "zh": "案例1：编码智能体过早完成。"
  },
  {
    "id": 902,
    "start": 8779.829,
    "end": 8782.529,
    "en": "From bad case to attribution.",
    "zh": "从错误案例到归因分析。"
  },
  {
    "id": 903,
    "start": 8782.529,
    "end": 8798.279,
    "en": "One of the most common and most stubborn Coding Agent failures is premature completion: declaring \"done\" before the tests have run; wrapping up after fixing two of the three features the user asked for; announcing \"this task is impossible\" after two failures.",
    "zh": "最常见的且最难解决的编码智能体失败之一是过早完成：在测试尚未运行时就声明“完成”；在修复了用户要求的三个功能中的两个后就结束；在两次失败后宣布“这个任务不可能完成”。"
  },
  {
    "id": 904,
    "start": 8798.279,
    "end": 8815.679,
    "en": "In Chapter 7's error taxonomy this belongs to \"task completeness and logical judgment,\" and all three production signals catch it: user corrections (\"you never ran the tests\"), thumbs-down, and post-hoc audits (a trajectory that claims completion with no test tool call anywhere in it).",
    "zh": "在第7章的错误分类中，这属于“任务完整性和逻辑判断”，所有三种生产信号都能捕捉到它：用户更正（“你从未运行测试”）、负面反馈和事后审计（一条声称完成但其中没有任何测试工具调用的轨迹）。“},{"
  },
  {
    "id": 905,
    "start": 8815.679,
    "end": 8830.141,
    "en": "The attribution record places the first error at the decision boundary where the Agent was \"about to declare completion\"—up to that point, reading and editing code may all have been fine; what was wrong was the step of \"concluding without evidence.",
    "zh": "归因记录将第一个错误定位在智能体“即将声明完成”的决策边界上——在此之前的代码读取和编辑可能都正常；问题出在“无证据地得出结论”这一步骤。"
  },
  {
    "id": 906,
    "start": 8830.141,
    "end": 8840.616,
    "en": "The reward seeking discussed earlier in the reward-design section (setting up a shallow check that just barely passes, then finishing early) describes exactly this behavior.",
    "zh": "之前在奖励设计部分讨论的“寻求奖励”行为（设置一个仅勉强通过的浅层检查，然后提前完成）正好描述了这种行为。"
  },
  {
    "id": 907,
    "start": 8840.616,
    "end": 8843.079,
    "en": "Constructing the training data.",
    "zh": "构建训练数据。"
  },
  {
    "id": 908,
    "start": 8843.079,
    "end": 8851.291,
    "en": "End-to-end regression task: write \"acceptance tests must pass before completion is declared\" as a verifiable reward.",
    "zh": "端到端回归任务：将“验收测试必须通过才能声明完成”写成可验证的奖励。"
  },
  {
    "id": 909,
    "start": 8851.291,
    "end": 8859.066,
    "en": "The tests are invisible to the model and run only when it claims to be done; passing scores +1, failing −1.",
    "zh": "这些测试对模型是不可见的，只在其声称完成时运行；通过得+1，失败得-1。"
  },
  {
    "id": 910,
    "start": 8859.066,
    "end": 8868.954,
    "en": "This is the direct application of \"leave the judgment to hidden tests the model cannot write\" from the reward-design section, and it is this case's optional RL branch.",
    "zh": "这是对奖励设计部分“将判断留给模型无法编写的隐藏测试”的直接应用，也是本案例的可选强化学习分支。"
  },
  {
    "id": 911,
    "start": 8868.954,
    "end": 8887.416,
    "en": "Trajectory-prefix regression task: cut at the \"about to declare completion\" decision boundary to build preference pairs—the rejected sample is the premature-completion behavior, and the chosen sample is the desired \"run the tests first, check the acceptance conditions one by one, and only then conclude.",
    "zh": "轨迹前缀回归任务：在“即将声明完成”的决策边界处截断以构建偏好对——被拒绝的样本是过早完成的行为，而被选择的样本是期望的“先运行测试，逐一检查验收条件，然后再得出结论”。"
  },
  {
    "id": 912,
    "start": 8887.416,
    "end": 8897.454,
    "en": "The chosen samples are generated by a teacher model and then filtered by a rule-based verifier (rejection sampling), yielding a batch of DPO training pairs.",
    "zh": "被选择的样本由教师模型生成，然后通过基于规则的验证器（拒绝采样）进行过滤，得到一批DPO训练对。"
  },
  {
    "id": 913,
    "start": 8897.454,
    "end": 8908.654,
    "en": "If there are too few bad cases, data augmentation (varying the task type, the missing verification item, the completion phrasing) can produce hundreds of preference pairs.",
    "zh": "如果坏案例太少，可以通过数据增强（改变任务类型、缺失的验证项、完成的措辞）生成数百个偏好对。"
  },
  {
    "id": 914,
    "start": 8908.654,
    "end": 8920.466,
    "en": "Mix them into general task data at a small ratio for LoRA fine-tuning, so that \"always verify before wrapping up\" does not become a new overfit and the risk of catastrophic forgetting stays low.",
    "zh": "将它们以小比例混合到通用任务数据中进行LoRA微调，这样“总是在结束前验证”不会成为新的过拟合，并且灾难性遗忘的风险保持较低。"
  },
  {
    "id": 915,
    "start": 8920.466,
    "end": 8925.716,
    "en": "Evaluation: the boundary set and the retention set are both indispensable.",
    "zh": "评估：边界集和保留集都是不可或缺的。"
  },
  {
    "id": 916,
    "start": 8925.716,
    "end": 8944.766,
    "en": "Post-training validation uses Chapter 7's evaluation datasets: the trajectory-prefix boundary set checks \"when the task is not finished, does the model choose to keep verifying rather than declare completion\"; equally important is the retention set—when the task really is finished, the model should declare completion normally.",
    "zh": "后训练验证使用第7章的评估数据集：轨迹前缀边界集用于检查“当任务未完成时，模型是否选择继续验证而不是声明完成”；同样重要的是保留集——当任务确实完成时，模型应正常声明完成。"
  },
  {
    "id": 917,
    "start": 8944.766,
    "end": 8956.041,
    "en": "Watching only the first metric trains the model into an over-corrected state that never dares to finish: the model keeps verifying indefinitely, and latency and cost spiral out of control.",
    "zh": "仅关注第一个指标会让模型进入过度校正的状态，永远不敢完成：模型会无限期地持续验证，延迟和成本会失控增长。"
  },
  {
    "id": 918,
    "start": 8956.041,
    "end": 8970.304,
    "en": "This is the parameter-level version of the same principle Chapter 7 kept stressing, that \"a change must not break existing behavior\"; evaluation should also spot-check general capability to confirm the LoRA patch has not damaged anything else.",
    "zh": "这是第7章一直强调的同一原则的参数级版本，即“变化不应破坏现有行为”；评估还应抽查通用能力，以确认LoRA补丁没有损坏其他任何内容。"
  },
  {
    "id": 919,
    "start": 8970.304,
    "end": 8979.104,
    "en": "Experiment 8-17 intermediate difficulty, two stars: : From a \"Premature Completion\" Bad Case to a DPO Fix",
    "zh": "实验8-17 中等难度，两颗星：从一个“过早完成”的坏例到DPO修复"
  },
  {
    "id": 920,
    "start": 8979.104,
    "end": 8993.766,
    "en": "Goal: run the complete chain from a production bad case to a parameter update—failure attribution → trajectory-prefix regression task → DPO preference pairs → LoRA training of a 7B model → dual validation on a boundary set and a retention set.",
    "zh": "目标：从一个生产环境中的坏例运行完整的链路到参数更新——故障归因 → 轨迹前缀回归任务 → DPO偏好对 → 7B模型的LoRA训练 → 在边界集和保留集上进行双重验证。"
  },
  {
    "id": 921,
    "start": 8993.932,
    "end": 9024.244,
    "en": "Data construction: the companion repository provides 24 realistic premature-completion bad cases covering four failure types (claiming completion without running tests, completing only part of a multi-goal request, unmet acceptance conditions, and giving up after errors by declaring the task impossible, including nastier reward-hacking variants such as deleting the failing test), plus a held-out evaluation set strictly isolated from the training data (12 boundary cases + 8 retention cases).",
    "zh": "数据构建：配套仓库提供了24个现实中的过早完成坏例，涵盖四种故障类型（在未执行测试的情况下声称完成、只完成多目标请求的一部分、未满足接受条件，以及在出错后通过声明任务不可能而放弃，包括更恶劣的奖励操纵变体，例如删除失败的测试），加上一个严格隔离于训练数据的保留评估集（12个边界案例 + 8个保留案例）。"
  },
  {
    "id": 922,
    "start": 9024.244,
    "end": 9026.719,
    "en": "This is a teaching experiment.",
    "zh": "这是一个教学实验。"
  },
  {
    "id": 923,
    "start": 9026.719,
    "end": 9041.657,
    "en": "In production, the preference pairs must cover more task families, the retention set must cover more \"normal wrap-up\" scenarios, and you must watch for new forms of reward hacking: the model may learn to say it verified without actually verifying.",
    "zh": "在生产环境中，偏好对必须覆盖更多的任务家族，保留集必须覆盖更多“正常收尾”场景，并且必须留意新的奖励操纵形式：模型可能会学会说它已验证，但实际上并未验证。"
  },
  {
    "id": 924,
    "start": 9041.657,
    "end": 9050.357,
    "en": "That is precisely why the end-to-end dataset's reward must rely on hidden tests the model cannot write, rather than on the model's own claims.",
    "zh": "这正是为什么端到端数据集的奖励必须依赖于模型无法编写的隐藏测试，而不是依赖于模型自身的声明。"
  },
  {
    "id": 925,
    "start": 9050.357,
    "end": 9053.819,
    "en": "Case 2: Chinese quotation marks.",
    "zh": "案例2：中文引号。"
  },
  {
    "id": 926,
    "start": 9053.819,
    "end": 9059.844,
    "en": "A user reports that \"straight quotes in Chinese articles should be normalized to curly quotes.",
    "zh": "用户报告称“中文文章中的直角引号应规范化为曲角引号。”"
  },
  {
    "id": 927,
    "start": 9059.844,
    "end": 9075.369,
    "en": "That sentence describes an expectation but gives no directly trainable rule: the same quotation mark plays completely different roles in Chinese prose, quoted English, Markdown inline code, code blocks, code comments, JSON, and paths.",
    "zh": "这句话描述了一个期望，但没有提供可以直接训练的规则：同样的引号在中文散文、引用英文、Markdown内联代码、代码块、代码注释、JSON和路径中扮演完全不同的角色。"
  },
  {
    "id": 928,
    "start": 9075.369,
    "end": 9098.857,
    "en": "The correct fix is a scope-sensitive minimal edit: quotations in Chinese prose may be converted to “”, with nested quotations following Chinese punctuation rules; quoted English, executable code, JSON/schemas, paths, identifiers, and anything inside Markdown backticks must be preserved verbatim; and when the scope cannot be determined, the original text should be left alone.",
    "zh": "正确的修复方法是基于作用域的最小编辑：中文散文中的引号可以转换为“”，嵌套引号需遵循中文标点规则；引用英文、可执行代码、JSON/模式、路径、标识符以及Markdown反引号内的任何内容必须原样保留；当无法确定作用域时，原始文本应保持不变。"
  },
  {
    "id": 929,
    "start": 9098.857,
    "end": 9101.319,
    "en": "Constructing the training data.",
    "zh": "构建训练数据。"
  },
  {
    "id": 930,
    "start": 9101.319,
    "end": 9104.294,
    "en": "Write the quotation rules as a Skill.",
    "zh": "将引号规则编写为一个技能。"
  },
  {
    "id": 931,
    "start": 9104.294,
    "end": 9120.269,
    "en": "Positive examples cover Chinese paragraphs, nested quotations, and Chinese prose inside code comments; negative examples cover quoted English, string and character literals, JSON, paths, inline code, and whole code blocks.",
    "zh": "正面示例包括中文段落、嵌套引号和代码注释中的中文散文；负面示例包括引用的英文、字符串和字符字面量、JSON、路径、内联代码和整个代码块。"
  },
  {
    "id": 932,
    "start": 9120.269,
    "end": 9128.207,
    "en": "What this teaches the model is \"determine the scope first, then make the minimal edit,\" not \"replace every straight quote you see.",
    "zh": "这教会模型的是“首先确定范围，然后进行最小编辑”，而不是“替换你看到的每一个直引号”。"
  },
  {
    "id": 933,
    "start": 9128.207,
    "end": 9135.832,
    "en": "Experiment 8-18 intermediate difficulty, two stars: : Scope-Sensitive Chinese Curly-Quote SFT",
    "zh": "实验8-18 中等难度，两颗星：：面向作用域的中文花括号SFT"
  },
  {
    "id": 934,
    "start": 9135.832,
    "end": 9152.569,
    "en": "Goal: verify whether LoRA SFT can make the model accurately \"curl the quotes that should be curled and leave protected quotes untouched\" in documents mixing Chinese, English, Markdown, code, and JSON, and hold that boundary on unseen context combinations.",
    "zh": "目标：验证LoRA SFT是否能让模型在混合中英文、Markdown、代码和JSON的文档中准确地“对应该弯曲的引号进行弯曲，同时保留受保护的引号”，并在未见过的上下文组合中保持该边界。"
  },
  {
    "id": 935,
    "start": 9152.569,
    "end": 9161.932,
    "en": "Setup: Qwen/Qwen3-8B as the base, trained with bf16 LoRA for 2 epochs (256 updates).",
    "zh": "设置：以Qwen/Qwen3-8B为基础模型，使用bf16 LoRA训练2个周期（256次更新）。"
  },
  {
    "id": 936,
    "start": 9161.932,
    "end": 9178.369,
    "en": "The scope rules in SKILL.md serve simultaneously as the label-generation spec, the quality gate, and the regression specification; the model is only responsible for choosing the scope and producing the minimal edit, and the production-side parser and syntax checks are not removed.",
    "zh": "SKILL.md中的作用域规则同时作为标签生成规范、质量门控和回归规范；模型只需负责选择作用域并生成最小编辑，生产端的解析器和语法检查并未被移除。"
  },
  {
    "id": 937,
    "start": 9178.369,
    "end": 9193.394,
    "en": "Data construction: 1,024 training samples, 256 held-out samples, and 256 boundary samples are rendered across 16 fragment categories, 10 article genres, and 9 programming languages.",
    "zh": "数据构建：1,024个训练样本、256个保留样本和256个边界样本分布在16个片段类别、10种文章类型和9种编程语言中。"
  },
  {
    "id": 938,
    "start": 9193.394,
    "end": 9211.657,
    "en": "Samples store the source and target text in pairs; Chinese prose and Chinese code comments provide the positive examples that need conversion, while quoted English, string literals, JSON, paths, inline code, code blocks, and nested structures provide the negative examples that must be protected.",
    "zh": "样本存储源文本和目标文本的配对；中文散文和中文代码注释提供需要转换的正例，而引用的英文、字符串字面量、JSON、路径、内联代码、代码块和嵌套结构则提供必须保护的反例。"
  },
  {
    "id": 939,
    "start": 9211.657,
    "end": 9215.169,
    "en": "Case 3: Frequent file-edit failures.",
    "zh": "情况3：频繁的文件编辑失败。"
  },
  {
    "id": 940,
    "start": 9215.169,
    "end": 9228.819,
    "en": "As described in Chapter 5, Coding Agents commonly use a tool like edit_file(path, old_string, new_string): the model transcribes the old_string it wants replaced into the tool arguments.",
    "zh": "如第5章所述，编码智能体通常使用类似edit_file(path, old_string, new_string)的工具：模型会将其想要替换的old_string转录到工具参数中。"
  },
  {
    "id": 941,
    "start": 9228.819,
    "end": 9240.782,
    "en": "Edit tools usually match by exact string, so a single difference in a space, a newline, a backslash, a Unicode combining character, or a low-frequency token returns a failure.",
    "zh": "编辑工具通常通过精确字符串匹配，因此空格、换行符、反斜杠、Unicode组合字符或低频标记的单个差异都会导致失败。"
  },
  {
    "id": 942,
    "start": 9240.782,
    "end": 9243.482,
    "en": "From bad case to attribution.",
    "zh": "从糟糕的案例到归因分析。"
  },
  {
    "id": 943,
    "start": 9243.482,
    "end": 9256.507,
    "en": "Compare failed trajectories layer by layer along this chain: original file bytes → tool return → Harness serialization → model context → model token output → decoded string → JSON/tool-call parsing → tool matching.",
    "zh": "沿此链逐层比较失败的轨迹：原始文件字节 → 工具返回 → Harness序列化 → 模型上下文 → 模型令牌输出 → 解码字符串 → JSON/工具调用解析 → 工具匹配。"
  },
  {
    "id": 944,
    "start": 9256.66,
    "end": 9273.01,
    "en": "If the file read or the tool return already altered the bytes, attribute it to the tool; if serialization, escaping, or prompt assembly changed the content, attribute it to the Harness; if encoding and then decoding with the tokenizer changes it, attribute it to the tokenizer.",
    "zh": "如果文件读取或工具返回已更改字节，请归因于工具；如果序列化、转义或提示组装更改了内容，请归因于Harness；如果编码后通过分词器解码发生了变化，请归因于分词器。"
  },
  {
    "id": 945,
    "start": 9272.96,
    "end": 9286.76,
    "en": "Only when the context the model received matches the original string exactly and the model's output is the first place in the chain where a difference appears can it be classified as a precise-copying problem attributable to the model and become a post-training candidate.",
    "zh": "只有当模型接收到的上下文与原始字符串完全匹配，并且模型的输出是链中第一个出现差异的位置时，才能将其归类为可归因于模型的精确复制问题，并成为后训练的候选对象。"
  },
  {
    "id": 946,
    "start": 9286.76,
    "end": 9289.222,
    "en": "Constructing the training data.",
    "zh": "构建训练数据。"
  },
  {
    "id": 947,
    "start": 9289.222,
    "end": 9305.06,
    "en": "Abstract the copying task into three verifiable tasks: verbatim restatement; selecting the exactly identical target among several similar strings of equal length; and transcribing a given string in full into the old_string JSON argument of a tool call.",
    "zh": "将复制任务抽象为三个可验证的任务：逐字重述；在多个长度相等的相似字符串中选择完全相同的目标字符串；以及将给定字符串完整地转录到工具调用的old_string JSON参数中。"
  },
  {
    "id": 948,
    "start": 9305.06,
    "end": 9313.897,
    "en": "Samples deliberately include the spaces, real newlines, backslashes, and Unicode characters that most often corrupt real edits.",
    "zh": "样本故意包含最容易在真实编辑中被破坏的空格、实际换行符、反斜杠和Unicode字符。"
  },
  {
    "id": 949,
    "start": 9313.897,
    "end": 9321.497,
    "en": "Experiment 8-19 intermediate difficulty, two stars: : Exact-Copy SFT for Special Strings",
    "zh": "实验8-19 中等难度，两颗星：特殊字符串的精确复制SFT"
  },
  {
    "id": 950,
    "start": 9321.497,
    "end": 9336.485,
    "en": "Goal: given that the difference has been confirmed to come from the model's transcription error, test whether LoRA SFT improves the model's exact transcription of random strings, and use an independent tokenizer audit to rule out artifacts caused by tokenization.",
    "zh": "目标：在确认差异来源于模型的转录错误后，测试LoRA SFT是否能提升模型对随机字符串的精确转录能力，并通过独立的分词器审计来排除由分词引起的伪影。"
  },
  {
    "id": 951,
    "start": 9336.485,
    "end": 9343.897,
    "en": "Setup: Qwen/Qwen3-8B as the base, trained with bf16 LoRA for 2 epochs.",
    "zh": "设置：以Qwen/Qwen3-8B为基础模型，使用bf16 LoRA训练2个周期。"
  },
  {
    "id": 952,
    "start": 9343.897,
    "end": 9351.297,
    "en": "The training script supplies token-level supervision only on the target string or the old_string JSON field.",
    "zh": "训练脚本仅在目标字符串或old_string JSON字段上提供逐标记的监督。"
  },
  {
    "id": 953,
    "start": 9351.297,
    "end": 9369.572,
    "en": "Results: byte-exact accuracy on the model's held-out set rose from the base model's 37.5% to 78.9%, with 80.1% on an independent boundary set; the mean position of the first diverging byte was 54.0 and 54.2 respectively.",
    "zh": "结果：模型保留集的字节级精确度从基础模型的37.5%上升至78.9%，在独立边界集上的准确率为80.1%；第一个分歧字节的平均位置分别为54.0和54.2。"
  },
  {
    "id": 954,
    "start": 9369.572,
    "end": 9383.035,
    "en": "Separately, 512 probes drawn from the held-out and boundary sets were used to compare three open-source tokenizers, and the lossless round-trip rate for both Qwen3 and Qwen2.5 was 80.1%.",
    "zh": "另外，从保留集和边界集中抽取的512个探针用于比较三种开源分词器，Qwen3和Qwen2.5的无损往返率均为80.1%。"
  },
  {
    "id": 955,
    "start": 9383.035,
    "end": 9389.435,
    "en": "The 80.1% therefore reflects both the model's copying ability and the tokenizer ceiling.",
    "zh": "因此，80.1%的结果同时反映了模型的复制能力和分词器的上限。"
  },
  {
    "id": 956,
    "start": 9389.435,
    "end": 9392.297,
    "en": "Post-Training Practical Takeaways.",
    "zh": "后训练实践要点。"
  },
  {
    "id": 957,
    "start": 9392.297,
    "end": 9410.922,
    "en": "This chapter has come a long way from pre-training's \"predict the next token\": Mid-training fills knowledge and foundational capability gaps on the target distribution; SFT learns formats and protocols efficiently; and outcome-oriented RL improved out-of-distribution generalization in this chapter's controlled experiments.",
    "zh": "本章从预训练的“预测下一个标记”走了很远：中期训练填补了目标分布上的知识和基础能力缺口；SFT高效学习格式和协议；而以结果为导向的强化学习在本章的控制实验中提升了分布外泛化能力。"
  },
  {
    "id": 958,
    "start": 9410.922,
    "end": 9423.797,
    "en": "Multi-turn tasks introduce the credit-assignment problem, reward design extends from outcome rewards to path signals that \"reward the outcome and constrain the process,\" and tool use brings combinatorial explosion.",
    "zh": "多轮任务引入了信用分配问题，奖励设计从结果奖励扩展到路径信号，即‘奖励结果并约束过程’，而工具使用则带来了组合爆炸。"
  },
  {
    "id": 959,
    "start": 9423.797,
    "end": 9435.497,
    "en": "A single thread runs through all of it—what the model learns depends on what the training signal taught it, and the quality of that signal is determined mainly by the data and the environment, not by the algorithm.",
    "zh": "贯穿所有内容的单一主线是——模型学到的内容取决于训练信号教给它的内容，而该信号的质量主要由数据和环境决定，而非算法。"
  },
  {
    "id": 960,
    "start": 9435.497,
    "end": 9444.285,
    "en": "The following common pitfalls are worth watching for; recognizing them usually saves more wasted resources than mastering technical details:",
    "zh": "以下常见陷阱值得关注；识别它们通常比掌握技术细节更能节省资源。"
  },
  {
    "id": 961,
    "start": 9444.436,
    "end": 9459.748,
    "en": "Stuffing a knowledge base into SFT, or handing all knowledge to parameters—large bodies of stable domain knowledge and foundational capabilities can be written into parameters with Mid-training, after which SFT teaches the model how to access and express them.",
    "zh": "将知识库填充到监督微调（SFT）中，或把所有知识交给参数——大量稳定领域的知识和基础能力可以通过中等训练写入参数，之后SFT教会模型如何访问和表达它们。"
  },
  {
    "id": 962,
    "start": 9459.698,
    "end": 9466.323,
    "en": "Facts that need updates, citations, access control, or deletion belong in RAG.",
    "zh": "需要更新、引用、访问控制或删除的事实应放在检索增强生成（RAG）中。"
  },
  {
    "id": 963,
    "start": 9466.323,
    "end": 9477.036,
    "en": "Introducing RL before the format is stable—if the model cannot reliably produce the JSON the reward computation needs, the training signal becomes sparse or distorted.",
    "zh": "在格式尚未稳定前引入强化学习（RL）——如果模型无法可靠地生成奖励计算所需的JSON，训练信号就会变得稀疏或失真。"
  },
  {
    "id": 964,
    "start": 9477.036,
    "end": 9493.986,
    "en": "The acceptable parse-failure rate depends on the task and the reward design, and no fixed threshold should be treated as universal; set a format-stability bar with a small-scale evaluation first, and stabilize the output with SFT or constrained decoding before applying RL if needed.",
    "zh": "可接受的解析失败率取决于任务和奖励设计，不应将固定阈值视为通用标准；首先通过小规模评估设定格式稳定性标准，如需的话，在应用RL之前通过SFT或约束解码稳定输出。"
  },
  {
    "id": 965,
    "start": 9493.986,
    "end": 9506.311,
    "en": "Treating a nominal context window as an effective one—allowing 128K input through positional encoding does not mean the model can still retrieve, reason, and plan at 128K.",
    "zh": "将名义上的上下文窗口视为有效窗口——允许128K输入通过位置编码并不意味着模型仍能在128K下检索、推理和规划。"
  },
  {
    "id": 966,
    "start": 9506.311,
    "end": 9517.423,
    "en": "Complete the current-length capability gates before expanding, retain short data and earlier-stage replay at every stage, and check degradation with a capability × length matrix.",
    "zh": "在扩展前完成当前长度的能力门限，每个阶段保留短数据和早期阶段的重放，并通过能力×长度矩阵检查性能退化。"
  },
  {
    "id": 967,
    "start": 9517.423,
    "end": 9527.923,
    "en": "Applying RL while pass@k is still near zero—all-failure rollouts contain no positive trajectory, and GRPO also loses within-group advantage.",
    "zh": "在pass@k仍接近零时应用强化学习（RL）——全失败的轨迹中没有正向轨迹，GRPO也会失去组内优势。"
  },
  {
    "id": 968,
    "start": 9527.923,
    "end": 9538.548,
    "en": "First use Mid-training to add capability, SFT or distillation to widen effective support, or a reachable curriculum and partial rewards aligned with the final goal.",
    "zh": "首先使用中等训练增加能力，再用SFT或蒸馏扩大有效支持范围，或采用可达的课程和与最终目标对齐的部分奖励。"
  },
  {
    "id": 969,
    "start": 9538.548,
    "end": 9548.461,
    "en": "Poorly designed reward functions leading to reward hacking—the model learns to exploit loopholes in the reward for a high score instead of actually completing the task.",
    "zh": "设计不良的奖励函数导致奖励劫持——模型学会利用奖励中的漏洞以获得高分，而不是真正完成任务。"
  },
  {
    "id": 970,
    "start": 9548.461,
    "end": 9552.598,
    "en": "Evaluate the final goal, not an intermediate proxy.",
    "zh": "评估最终目标，而非中间代理。"
  },
  {
    "id": 971,
    "start": 9552.598,
    "end": 9563.161,
    "en": "Ignoring simulation fidelity—if the simulation is too simplistic or the environment's responses are unrealistic, the resulting policy fails in real scenarios.",
    "zh": "忽视模拟的真实性——如果模拟过于简单或环境响应不真实，得到的策略在真实场景中会失效。"
  },
  {
    "id": 972,
    "start": 9563.161,
    "end": 9567.973,
    "en": "Building a high-fidelity simulation can cost more than the training itself.",
    "zh": "构建高保真模拟的成本可能超过训练本身。"
  },
  {
    "id": 973,
    "start": 9567.973,
    "end": 9576.098,
    "en": "Over-training that degrades generalization—falling training loss with worsening validation means the model is memorizing details.",
    "zh": "过度训练导致泛化能力下降——训练损失下降而验证损失恶化意味着模型在记忆细节。"
  },
  {
    "id": 974,
    "start": 9576.098,
    "end": 9589.236,
    "en": "Mid-training can forget general capabilities, SFT can overfit demonstrations, and RL can overfit the current reward and task distribution; all three require independent retention sets and early stopping.",
    "zh": "中等训练可能遗忘通用能力，SFT可能过拟合演示，RL可能过拟合当前奖励和任务分布；三者都需要独立的保留集和早停机制。"
  },
  {
    "id": 975,
    "start": 9589.236,
    "end": 9600.336,
    "en": "Value-function collapse and insufficient exploration—inaccurate value estimates in PPO bias the advantage computation, showing up as violently oscillating training curves.",
    "zh": "价值函数崩溃和探索不足——PPO中不准确的价值估计会偏倚优势计算，表现为剧烈震荡的训练曲线。"
  },
  {
    "id": 976,
    "start": 9600.336,
    "end": 9605.498,
    "en": "Too low a temperature or too little randomness traps the Agent in a local optimum.",
    "zh": "温度过低或随机性不足会使智能体陷入局部最优。"
  },
  {
    "id": 977,
    "start": 9605.498,
    "end": 9618.423,
    "en": "Treating training–inference numerical mismatch as harmless noise—if the sampler/trainer probability ratio already differs from 1 before an update, nominal on-policy training has silently become off-policy.",
    "zh": "将训练-推理数值不匹配视为无害的噪声——如果采样器/训练器的概率比率在更新前就已经不同于1，名义上的在线训练实际上已经无声地变成了离线训练。"
  },
  {
    "id": 978,
    "start": 9618.423,
    "end": 9625.536,
    "en": "Monitor log-probability differences, approximate KL, clipping fraction, and policy staleness.",
    "zh": "监控对数概率差异、近似KL散度、截断比例和策略滞后性。"
  },
  {
    "id": 979,
    "start": 9625.536,
    "end": 9634.298,
    "en": "Underestimating RL's compute cost—a task that works well with SFT may need 10–100 times the training time under RL.",
    "zh": "低估强化学习的计算成本——一项在监督微调中表现良好的任务，在强化学习下可能需要10到100倍的训练时间。"
  },
  {
    "id": 980,
    "start": 9634.298,
    "end": 9639.998,
    "en": "If the test distribution closely matches training, SFT may already be enough.",
    "zh": "如果测试分布与训练分布非常接近，监督微调可能已经足够。"
  },
  {
    "id": 981,
    "start": 9639.998,
    "end": 9653.298,
    "en": "Low-quality training data—Mid-training absorbs incorrect associations from the corpus, SFT learns demonstration noise directly, and a systematically biased RL reward amplifies the policy in the wrong direction.",
    "zh": "低质量的训练数据——中期训练会从语料库中吸收错误的关联，监督微调会直接学习演示噪声，而系统性偏差的强化学习奖励会向错误方向放大策略。"
  },
  {
    "id": 982,
    "start": 9653.298,
    "end": 9675.836,
    "en": "Core principle: validate the key assumptions with small-scale experiments before committing large-scale resources—use a small Mid-training corpus to inspect knowledge, capability, and forgetting curves; a small SFT set to test format stability; and a small rollout batch to inspect pass@k, reward variation, and sampler/trainer numerical agreement.",
    "zh": "核心原则：在投入大规模资源之前，通过小规模实验验证关键假设——使用小规模的中期训练语料库来检查知识、能力和遗忘曲线；使用小规模的监督微调集来测试格式稳定性；使用小规模的回放批次来检查通过率@k、奖励变化和采样器/训练器数值一致性。"
  },
  {
    "id": 983,
    "start": 9675.836,
    "end": 9679.798,
    "en": "Failing fast is more acceptable than failing at scale.",
    "zh": "快速失败比大规模失败更可接受。"
  },
  {
    "id": 984,
    "start": 9679.948,
    "end": 9688.623,
    "en": "Synergy with RAG and ICL (in-context learning): the three are not mutually exclusive alternatives but act in different places.",
    "zh": "与RAG和ICL（上下文学习）的协同作用：这三者不是相互排斥的替代方案，而是在不同地方起作用。"
  },
  {
    "id": 985,
    "start": 9688.573,
    "end": 9710.735,
    "en": "ICL uses examples, rules, and current state for zero-parameter, immediate adaptation, though latency and cost rise as the context grows; RAG puts facts and evidence in external knowledge that can be updated dynamically and traced; post-training writes high-dimensional perception, generation style, and implicit decision policies into parameters.",
    "zh": "ICL使用示例、规则和当前状态进行零参数、即时适应，尽管随着上下文增长，延迟和成本会上升；RAG将事实和证据放在外部知识中，可以动态更新和追踪；后训练将高维感知、生成风格和隐式决策策略写入参数。"
  },
  {
    "id": 986,
    "start": 9710.735,
    "end": 9720.798,
    "en": "The choice depends not only on whether the task is stable over the long term but, more importantly, on whether the capability can be adequately expressed in external symbols.",
    "zh": "选择不仅取决于任务是否长期稳定，更重要的是取决于能力是否能以外部符号充分表达。"
  },
  {
    "id": 987,
    "start": 9720.798,
    "end": 9737.073,
    "en": "Capabilities such as medical image recognition or a natural tone of voice often still require parameter updates even in a continuously changing domain; conversely, a long-stable transfer-approval rule should be guaranteed deterministically by code rather than left to the model's memory.",
    "zh": "像医学图像识别或自然语音这样的能力，即使在不断变化的领域中，通常仍需要参数更新；相反，一个长期稳定的转移审批规则应通过代码确定性保证，而不是交给模型的记忆。"
  },
  {
    "id": 988,
    "start": 9737.073,
    "end": 9760.648,
    "en": "Robust systems generally combine these methods: manage dynamic facts and evidence with RAG, experiment quickly with language-describable strategies via ICL, encode deterministic processes and hard constraints in program code, absorb stable domain knowledge and foundational capabilities with Mid-training, and shape behavior that external rules cannot fully express with SFT and RL.",
    "zh": "稳健的系统通常结合这些方法：用RAG管理动态事实和证据，通过ICL快速试验语言描述的策略，将确定性过程和硬约束编码在程序代码中，用中期训练吸收稳定领域知识和基础能力，用监督微调和强化学习塑造外部规则无法完全表达的行为。"
  },
  {
    "id": 989,
    "start": 9760.648,
    "end": 9766.698,
    "en": "Distillation can also transfer the behavior of a capable large model into a cheaper small one.",
    "zh": "蒸馏也可以将强大大模型的行为转移到更便宜的小模型中。"
  },
  {
    "id": 990,
    "start": 9766.698,
    "end": 9768.585,
    "en": "Chapter Summary.",
    "zh": "章节总结。"
  },
  {
    "id": 991,
    "start": 9768.585,
    "end": 9779.035,
    "en": "Mid-training, SFT, and RL are not interchangeable strengths of \"fine-tuning\"; they address the foundation, protocol, and policy, respectively.",
    "zh": "中训练、SFT和RL并不是\"微调\"的可互换优势；它们分别针对基础、协议和策略。"
  },
  {
    "id": 992,
    "start": 9779.035,
    "end": 9789.723,
    "en": "Mid-training should also turn a nominal context extension into an effective context that retains short-range capabilities through a length curriculum, mixed data, and staged gates.",
    "zh": "中训练还应将名义上的上下文扩展转化为有效的上下文，通过长度课程、混合数据和分阶段门控保留短距离能力。"
  },
  {
    "id": 993,
    "start": 9789.723,
    "end": 9796.923,
    "en": "If pass@k remains near zero under reasonable sampling, use Mid-training to add knowledge and capability.",
    "zh": "如果在合理采样下pass@k仍接近零，使用中训练来增加知识和能力。"
  },
  {
    "id": 994,
    "start": 9796.923,
    "end": 9804.185,
    "en": "If the model occasionally succeeds but produces unparseable output, use SFT to stabilize the format.",
    "zh": "如果模型偶尔成功但产生无法解析的输出，使用SFT来稳定格式。"
  },
  {
    "id": 995,
    "start": 9804.185,
    "end": 9813.298,
    "en": "Only when the current policy generates scoreable trajectories with reward variation can RL efficiently reallocate probability and explore strategies.",
    "zh": "只有当当前策略能生成具有奖励变化的可评分轨迹时，RL才能高效地重新分配概率并探索策略。"
  },
  {
    "id": 996,
    "start": 9813.298,
    "end": 9825.148,
    "en": "SFT memorizes, RL generalizes\" summarizes a tendency observed in this chapter's controlled experiments, not a law independent of the data, model, reward, and environment.",
    "zh": "“SFT记忆，RL泛化”总结了本章控制实验中观察到的趋势，而不是独立于数据、模型、奖励和环境的定律。"
  },
  {
    "id": 997,
    "start": 9825.148,
    "end": 9830.973,
    "en": "Two further judgments run through the whole chapter and are worth remembering more than any algorithm.",
    "zh": "两个进一步的判断贯穿整个章节，比任何算法都更值得记住。"
  },
  {
    "id": 998,
    "start": 9830.973,
    "end": 9846.623,
    "en": "First, data and environment matter more than algorithms: the Mid-training corpus determines what gaps are repaired in the foundation, SFT demonstrations determine whether the protocol is stable, and the environment and reward determine what RL can explore and reinforce.",
    "zh": "首先，数据和环境比算法更重要：中训练语料库决定了基础中的哪些缺口得到修复，SFT演示决定了协议是否稳定，而环境和奖励决定了RL可以探索和强化什么。"
  },
  {
    "id": 999,
    "start": 9846.623,
    "end": 9855.06,
    "en": "When a real environment cannot be built, using a model to simulate it is viable, but the simulator's bias remains the ceiling on training.",
    "zh": "当无法构建真实环境时，使用模型进行模拟是可行的，但模拟器的偏差仍然是训练的上限。"
  },
  {
    "id": 1000,
    "start": 9855.06,
    "end": 9862.123,
    "en": "In many scenarios, once the foundation and demonstration data are good enough, RL is unnecessary.",
    "zh": "在许多场景中，一旦基础和演示数据足够好，RL就不再需要。"
  },
  {
    "id": 1001,
    "start": 9862.123,
    "end": 9868.385,
    "en": "Second, RL's main bottlenecks today are sample efficiency and distribution consistency.",
    "zh": "其次，RL目前的主要瓶颈是样本效率和分布一致性。"
  },
  {
    "id": 1002,
    "start": 9868.385,
    "end": 9880.585,
    "en": "On-Policy Distillation expands one rollout's terminal scalar into token-level supervision on states the student actually visits, while RLVP turns wasted environment feedback into a learnable signal.",
    "zh": "On-Policy Distillation将一次滚动的终端标量扩展为学生实际访问状态的逐标记监督，而RLVP则将浪费的环境反馈转化为可学习信号。"
  },
  {
    "id": 1003,
    "start": 9880.585,
    "end": 9886.298,
    "en": "Truly on-policy rollouts also reduce the bias and variance of importance correction.",
    "zh": "真正的在线策略滚动也减少了重要性校正的偏差和方差。"
  },
  {
    "id": 1004,
    "start": 9886.298,
    "end": 9894.998,
    "en": "Training–inference numerical mismatch breaks that premise, so sampler/trainer consistency deserves the same attention as the reward curve.",
    "zh": "训练-推理数值不匹配破坏了这一前提，因此采样器/训练器的一致性应受到与奖励曲线相同的关注。"
  },
  {
    "id": 1005,
    "start": 9894.998,
    "end": 9900.523,
    "en": "This chapter answers how updating parameters can enable continuous Agent evolution.",
    "zh": "本章回答了如何通过更新参数实现智能体的持续进化。"
  },
  {
    "id": 1006,
    "start": 9900.523,
    "end": 9910.535,
    "en": "In the next chapter, we will see that parameters are only one of four carriers of Agent self-evolution: knowledge, instructions, programs, and parameters.",
    "zh": "下一章我们将看到，参数只是智能体自我进化四种载体之一：知识、指令、程序和参数。"
  },
  {
    "id": 1007,
    "start": 9910.535,
    "end": 9912.473,
    "en": "Thought Questions.",
    "zh": "思考问题。"
  },
  {
    "id": 1008,
    "start": 9912.628,
    "end": 9926.928,
    "en": "intermediate difficulty, two stars:  Catastrophic forgetting—where fine-tuning for a specific task destroys the model's original general capabilities, such as general tool calling—is particularly troublesome in Agent scenarios.",
    "zh": "中等难度，两颗星：灾难性遗忘——针对特定任务进行微调会破坏模型的原始通用能力，例如通用工具调用——在智能体场景中尤其麻烦。"
  },
  {
    "id": 1009,
    "start": 9926.878,
    "end": 9934.578,
    "en": "Compared with full-parameter fine-tuning, LoRA freezes the base weights and carries a lower risk of forgetting, but it is not immune.",
    "zh": "与全参数微调相比，LoRA冻结基础权重，遗忘风险较低，但并非完全免疫。"
  },
  {
    "id": 1010,
    "start": 9934.578,
    "end": 9939.353,
    "en": "What strategies can further mitigate capability forgetting during fine-tuning?",
    "zh": "有哪些策略可以进一步减轻微调过程中的能力遗忘？"
  },
  {
    "id": 1011,
    "start": 9939.353,
    "end": 9950.865,
    "en": "intermediate difficulty, two stars:  Post-training solidifies capabilities into model weights, or “muscle memory,” while in-context learning places knowledge in the input at inference time.",
    "zh": "中等难度，两颗星：后训练将能力固化到模型权重中，或称为“肌肉记忆”，而上下文学习则在推理时将知识放在输入中。"
  },
  {
    "id": 1012,
    "start": 9950.865,
    "end": 9958.078,
    "en": "Some capabilities, such as domain knowledge, can be learned through post-training or supplied through few-shot examples.",
    "zh": "一些能力，如领域知识，可以通过后训练获得，也可以通过少量示例提供。"
  },
  {
    "id": 1013,
    "start": 9958.078,
    "end": 9962.94,
    "en": "What criteria would you use to decide which path a capability should take?",
    "zh": "你会用哪些标准来决定某种能力应该走哪条路径？"
  },
  {
    "id": 1014,
    "start": 9962.94,
    "end": 9970.815,
    "en": "intermediate difficulty, two stars:  Model distillation allows a small model to learn the behavior of a large model.",
    "zh": "中等难度，两颗星：模型蒸馏允许小模型学习大模型的行为。"
  },
  {
    "id": 1015,
    "start": 9970.815,
    "end": 9987.878,
    "en": "By capability level, the models being distilled can be divided roughly into three tiers—Chat models (single-turn dialogue and direct answers), Reasoning models (long chains of thought before answering), and Agentic models (multi-turn tool calls and interaction with the environment).",
    "zh": "按能力级别，被蒸馏的模型大致可分为三个层级——聊天模型（单轮对话和直接回答）、推理模型（回答前进行长链思考）和智能体模型（多轮工具调用和与环境交互）。"
  },
  {
    "id": 1016,
    "start": 9987.878,
    "end": 9991.615,
    "en": "What different challenges arise in distilling each type?",
    "zh": "每种类型的蒸馏会遇到哪些不同的挑战？"
  },
  {
    "id": 1017,
    "start": 9991.615,
    "end": 10009.615,
    "en": "Hint: Begin with “what exactly is being distilled”—the style of the output, the complete reasoning trajectory, or the policy for interacting with the environment; which tokens in the trajectory should be learned and which environmental returns should not; and how delayed and sparse the success/failure signals are.",
    "zh": "提示：从“究竟蒸馏的是什么”开始——输出的风格、完整的推理轨迹，还是与环境互动的策略；轨迹中哪些标记应被学习，哪些环境回报不应被学习；以及成功/失败信号的延迟性和稀疏性如何？"
  },
  {
    "id": 1018,
    "start": 10009.615,
    "end": 10024.903,
    "en": "advanced difficulty, three stars:  In multi-turn Agent interactions, the credit-assignment problem is more severe than in single-turn scenarios—a final success or failure is difficult to attribute to a decision made in turn 3 rather than turn 7.",
    "zh": "高级难度，三颗星：在多轮智能体交互中，信用分配问题比单轮场景更严重——最终的成功或失败很难归因于第3轮而不是第7轮做出的决策。"
  },
  {
    "id": 1019,
    "start": 10024.903,
    "end": 10028.378,
    "en": "How would you design a reward-allocation strategy?",
    "zh": "你会如何设计奖励分配策略？"
  },
  {
    "id": 1020,
    "start": 10028.378,
    "end": 10044.615,
    "en": "advanced difficulty, three stars:  If you had a fixed budget, such as 10 dollars,000, to improve a customer-service Agent, how would you allocate it among context and knowledge, Prompt/Skills, programmatic constraints, and parameter training?",
    "zh": "高级难度，三颗星：如果你有一个固定预算，比如10,000美元，用来提升客服智能体，你会如何在上下文和知识、提示/技能、编程约束和参数训练之间分配这笔资金？"
  },
  {
    "id": 1021,
    "start": 10044.615,
    "end": 10047.44,
    "en": "What factors would determine your decision?",
    "zh": "哪些因素会决定你的决策？"
  },
  {
    "id": 1022,
    "start": 10047.44,
    "end": 10057.828,
    "en": "advanced difficulty, three stars:  Autonomous model learning under scarce samples and without a clear reward function is regarded by some as the ultimate goal of post-training.",
    "zh": "高难度，三颗星：一些人认为，在样本稀缺且没有明确奖励函数的情况下，自主模型学习是后训练的终极目标。"
  },
  {
    "id": 1023,
    "start": 10057.828,
    "end": 10061.54,
    "en": "How far are current RL training methods from this goal?",
    "zh": "当前的强化学习训练方法距离这个目标还有多远？"
  },
  {
    "id": 1024,
    "start": 10061.54,
    "end": 10064.99,
    "en": "Where is the next breakthrough most likely to come from?",
    "zh": "下一次重大突破最可能来自哪里？"
  },
  {
    "id": 1025,
    "start": 10064.99,
    "end": 10071.615,
    "en": "intermediate difficulty, two stars:  This chapter notes that LoRA fine-tuning is not expensive.",
    "zh": "中等难度，两颗星：本章指出LoRA微调并不昂贵。"
  },
  {
    "id": 1026,
    "start": 10071.615,
    "end": 10083.403,
    "en": "Could a dedicated LoRA therefore be trained for every user or client company, writing user memory or enterprise knowledge into parameters rather than storing it in an external knowledge base as in Chapter 3?",
    "zh": "因此，是否可以为每个用户或客户公司专门训练一个LoRA，将用户记忆或企业知识写入参数，而不是像第3章那样将其存储在外部知识库中？"
  },
  {
    "id": 1027,
    "start": 10083.403,
    "end": 10091.79,
    "en": "When would “writing memory into parameters” have an advantage over “storing memory in a knowledge base,” and when would it be counterproductive?",
    "zh": "什么时候‘将记忆写入参数’比‘将记忆存储在知识库中’更有优势，什么时候又会适得其反？"
  },
  {
    "id": 1028,
    "start": 10091.79,
    "end": 10099.803,
    "en": "advanced difficulty, three stars:  On-Policy Distillation relies on a stronger teacher model to supervise the student.",
    "zh": "高难度，三颗星：On-Policy Distillation依赖于一个更强的教师模型来监督学生模型。"
  },
  {
    "id": 1029,
    "start": 10099.803,
    "end": 10112.153,
    "en": "OpenAI's Weak-to-Strong Generalization research, however, offered a counterintuitive finding: supervision from a weak model can sometimes unlock capabilities latent but inactive in a stronger model.",
    "zh": "然而，OpenAI的‘弱到强泛化’研究提出了一个反直觉的发现：从一个弱模型获得的监督有时可以激发更强模型中潜藏但未激活的能力。"
  },
  {
    "id": 1030,
    "start": 10112.153,
    "end": 10119.265,
    "en": "If applied to Agent training, could this enable reverse distillation in which “a small model teaches a large model”?",
    "zh": "如果应用于智能体训练，这是否能实现反向蒸馏，即‘小模型教大模型’？"
  },
  {
    "id": 1031,
    "start": 10119.265,
    "end": 10132.065,
    "en": "intermediate difficulty, two stars:  A Process Reward Model (PRM) evaluates each reasoning step, whereas an Outcome Reward Model (ORM) considers only the final result.",
    "zh": "中等难度，两颗星：过程奖励模型（PRM）评估每一步推理，而结果奖励模型（ORM）只考虑最终结果。"
  },
  {
    "id": 1032,
    "start": 10132.065,
    "end": 10140.678,
    "en": "Which deserves more reward: “a correct process that leads to a wrong result,” or “a wrong process that happens to produce the correct result”?",
    "zh": "哪种更值得奖励：‘导致错误结果的正确过程’，还是‘恰好产生正确结果的错误过程’？"
  },
  {
    "id": 1033,
    "start": 10140.678,
    "end": 10145.303,
    "en": "How would you balance the two in multi-step Agent tool-calling scenarios?",
    "zh": "在多步骤智能体工具调用场景中，你会如何平衡两者？"
  },
  {
    "id": 1034,
    "start": 10145.452,
    "end": 10159.739,
    "en": "advanced difficulty, three stars:  The evaluation datasets discussed in this chapter, such as SWE-Bench Verified, τ²-bench, and AndroidWorld, can be used both for evaluation and post-training.",
    "zh": "高难度，三颗星：本章讨论的评估数据集，如SWE-Bench Verified、τ²-bench和AndroidWorld，既可以用于评估，也可以用于后训练。"
  },
  {
    "id": 1035,
    "start": 10159.689,
    "end": 10165.039,
    "en": "But once an evaluation set is used for training, it is no longer independent.",
    "zh": "但一旦评估集被用于训练，它就不再是独立的了。"
  },
  {
    "id": 1036,
    "start": 10165.039,
    "end": 10170.414,
    "en": "Does this violate the fundamental principle that training and test sets must remain separate?",
    "zh": "这是否违反了训练集和测试集必须保持分离的基本原则？"
  },
  {
    "id": 1037,
    "start": 10170.414,
    "end": 10180.714,
    "en": "Dynamic parameter generation in τ²-bench and parameterized templates in AndroidWorld mitigate the problem to some extent, but their template structures remain fixed.",
    "zh": "τ²-bench中的动态参数生成和AndroidWorld中的参数化模板在一定程度上缓解了这个问题，但它们的模板结构仍然保持固定。"
  },
  {
    "id": 1038,
    "start": 10180.714,
    "end": 10187.252,
    "en": "How can the training value of evaluation data be fully exploited while preserving evaluation independence?",
    "zh": "如何在保持评估独立性的前提下充分挖掘评估数据的训练价值？"
  },
  {
    "id": 1039,
    "start": 10187.252,
    "end": 10194.514,
    "en": "advanced difficulty, three stars:  For a target task, the base model has a very low pass@1.",
    "zh": "高级难度，三颗星：对于一个目标任务，基础模型的pass@1非常低。"
  },
  {
    "id": 1040,
    "start": 10194.514,
    "end": 10205.814,
    "en": "How would you combine pass@k, parse success, partial-progress rate, and failure attribution to decide whether to start with Mid-training or SFT, or move directly to RL?",
    "zh": "你将如何结合pass@k、解析成功率、部分进展率和失败归因来决定是先进行中训练或SFT，还是直接进入RL？"
  },
  {
    "id": 1041,
    "start": 10205.814,
    "end": 10210.464,
    "en": "What conditions should these metrics satisfy before switching stages?",
    "zh": "在切换阶段之前，这些指标应该满足什么条件？"
  },
  {
    "id": 1042,
    "start": 10210.464,
    "end": 10231.502,
    "en": "advanced difficulty, three stars:  ReTool's training dynamics show (see Experiment 8-14) that a few extremely long responses can significantly extend the entire training cycle—most rollouts in a batch have already been generated, but the system must wait for the longest responses to finish, leaving cluster GPU utilization low.",
    "zh": "高级难度，三颗星：ReTool的训练动态显示（见实验8-14），一些极其长的回复可以显著延长整个训练周期——一批次中的大多数回放已经生成，但系统必须等待最长的回复完成，导致集群GPU利用率低下。"
  },
  {
    "id": 1043,
    "start": 10231.502,
    "end": 10237.889,
    "en": "How can resource utilization be improved in training clusters under such long-tail response conditions?",
    "zh": "在这样的长尾回复条件下，如何提高训练集群的资源利用率？"
  },
  {
    "id": 1044,
    "start": 10237.889,
    "end": 10255.839,
    "en": "advanced difficulty, three stars:  When training an Agent against LLM-simulated environments—such as a simulated search engine or simulated users—the target of the Agent's exploitation shifts from “the rules of the real environment” to “the biases and loopholes of the simulator itself.",
    "zh": "高级难度，三颗星：当在一个LLM模拟环境中训练智能体——例如模拟搜索引擎或模拟用户时——智能体的攻击目标从“真实环境的规则”转变为“模拟器本身的偏差和漏洞”。"
  },
  {
    "id": 1045,
    "start": 10255.839,
    "end": 10262.114,
    "en": "What concrete reward hacking behaviors can arise in this kind of training, and how should they be prevented?",
    "zh": "在这种训练中会出现哪些具体的奖励劫持行为，应该如何防止？"
  }
];
