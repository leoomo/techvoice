window.CHAPTER_DATA_chapter9 = [
  {
    "id": 1,
    "start": 0.1,
    "end": 3.937,
    "en": "Chapter 9: Continual Evolution of Agents.",
    "zh": "第9章：智能体的持续演进。"
  },
  {
    "id": 2,
    "start": 3.887,
    "end": 17.912,
    "en": "Today’s Agents face a striking capability paradox: they can solve previously unseen complex tasks zero-shot, yet after handling ten thousand similar tasks, they may still repeat tomorrow the mistakes they made on the first day.",
    "zh": "如今的智能体面临一个显著的能力悖论：它们可以零样本解决之前未见过的复杂任务，但在处理了一万次类似任务后，可能仍然会重复第一天犯过的错误。"
  },
  {
    "id": 3,
    "start": 17.912,
    "end": 23.5,
    "en": "Once a model is on the job, can it keep getting better at that job the way a new hire does?",
    "zh": "一旦模型投入工作，它能否像新员工一样不断提升其工作能力？"
  },
  {
    "id": 4,
    "start": 23.5,
    "end": 39.537,
    "en": "The ability to learn autonomously from experience—what is now called continual learning—is becoming essential for Agents to progress from “being able to complete tasks” to “being able to work reliably,” and it is also a central research topic for the next generation of models.",
    "zh": "从“能够完成任务”到“能够可靠地工作”，智能体需要具备从经验中自主学习的能力——现在被称为持续学习——这已成为智能体发展的关键，也是下一代模型的核心研究课题。"
  },
  {
    "id": 5,
    "start": 39.537,
    "end": 56.0,
    "en": "Today’s notion of “continual learning” is not the same problem as the earlier line of research on “learn a new task and forget the old one”: forgetting is only one sub-problem, and the harder part is that no one tells the model which parts of today’s experience it got right and which it got wrong.",
    "zh": "如今的‘持续学习’概念与早期‘学习新任务并遗忘旧任务’的研究并不相同：遗忘只是其中的一个子问题，更困难的部分在于没有人告诉模型今天的经验中哪些做对了、哪些做错了。"
  },
  {
    "id": 6,
    "start": 56.0,
    "end": 61.175,
    "en": "For now, models remain far from capable of continual learning on their own.",
    "zh": "目前，模型仍远未达到自主进行持续学习的能力。"
  },
  {
    "id": 7,
    "start": 61.175,
    "end": 66.262,
    "en": "A deployed model does not automatically change its parameters after an inference.",
    "zh": "部署的模型在推理后不会自动更改其参数。"
  },
  {
    "id": 8,
    "start": 66.262,
    "end": 79.962,
    "en": "The in-context learning, state maintenance, and compression discussed in Chapter 2 allow an Agent to adapt within the current task; once the context ends, however, these changes do not naturally carry over to the next task.",
    "zh": "第2章讨论的上下文学习、状态保持和压缩使智能体能够在当前任务中适应；然而，一旦上下文结束，这些变化并不会自然地延续到下一个任务中。"
  },
  {
    "id": 9,
    "start": 79.962,
    "end": 84.775,
    "en": "Storing conversations in memory is not equivalent to learning new behavior.",
    "zh": "将对话存储在记忆中并不等同于学习新行为。"
  },
  {
    "id": 10,
    "start": 84.775,
    "end": 94.125,
    "en": "Raw trajectories may be lengthy and contain effective strategies alongside accidental successes, incorrect attributions, and untrusted inputs.",
    "zh": "原始轨迹可能很长，其中包含有效的策略，但也可能夹杂偶然的成功、错误的归因和不可信的输入。"
  },
  {
    "id": 11,
    "start": 94.125,
    "end": 100.45,
    "en": "An important distinction is easy to miss here: preserving experience is not the same as learning from it.",
    "zh": "这里有一个容易被忽视的重要区别：保留经验不等于从中学习。"
  },
  {
    "id": 12,
    "start": 100.45,
    "end": 119.337,
    "en": "Placing a hundred trajectories in a long context or vector store may help the model retrieve a case when needed, but it does not automatically compare cases: which steps recur across successful trajectories, which practices work only with an older interface, or whether a success came from a sound strategy rather than environmental chance.",
    "zh": "将一百条轨迹放入长上下文或向量存储中可能有助于模型在需要时检索到相关案例，但这不会自动进行案例比较：哪些步骤在成功轨迹中反复出现，哪些做法仅适用于旧界面，或者一次成功是源于合理的策略还是环境的偶然性。"
  },
  {
    "id": 13,
    "start": 119.337,
    "end": 129.387,
    "en": "Learning occurs only after the system actively evaluates, compares, generalizes, and validates the evidence—not when a log is written to disk.",
    "zh": "只有当系统主动评估、比较、概括和验证证据时，学习才会发生；而不是在日志写入磁盘时。"
  },
  {
    "id": 14,
    "start": 129.387,
    "end": 140.262,
    "en": "User memory in Chapter 3 primarily captures “what the user and the world are like”; experience learning in this chapter goes further, capturing “what to do under which conditions.",
    "zh": "第3章中的用户记忆主要记录的是‘用户和世界是什么样子’；而本章的经验学习则更进一步，记录的是‘在何种情况下该做什么’。"
  },
  {
    "id": 15,
    "start": 140.262,
    "end": 147.075,
    "en": "The former helps an Agent remember more; the latter helps it become more proficient rather than merely more knowledgeable.",
    "zh": "前者帮助智能体记住更多内容；后者则帮助它变得更熟练，而不仅仅是更博学。"
  },
  {
    "id": 16,
    "start": 147.075,
    "end": 151.425,
    "en": "Why not let the model train itself directly after every task?",
    "zh": "为什么不让模型在每次任务后直接进行训练？"
  },
  {
    "id": 17,
    "start": 151.425,
    "end": 156.0,
    "en": "Because production environments rarely provide clean learning signals.",
    "zh": "因为生产环境很少提供干净的学习信号。"
  },
  {
    "id": 18,
    "start": 156.0,
    "end": 165.8,
    "en": "User satisfaction does not imply compliance; local parameter updates can also cause capability forgetting, policy drift, or safety degradation.",
    "zh": "用户满意度并不意味着合规性；局部参数更新也可能导致能力遗忘、策略漂移或安全退化。"
  },
  {
    "id": 19,
    "start": 165.8,
    "end": 178.35,
    "en": "If a running model is allowed to modify its own parameters directly based on unverified feedback, erroneous experience and Prompt injection may become entrenched and continue to amplify across later tasks.",
    "zh": "如果允许正在运行的模型根据未经验证的反馈直接修改自身参数，错误的经验和提示注入可能会根深蒂固，并在后续任务中持续放大。"
  },
  {
    "id": 20,
    "start": 178.35,
    "end": 191.0,
    "en": "On the other hand, periodic training of foundation models can improve general capabilities, but it cannot promptly absorb the private rules, tool changes, and local experience encountered daily by each Agent.",
    "zh": "另一方面，基础模型的定期训练可以提升通用能力，但无法及时吸收每个智能体日常遇到的私有规则、工具变更和本地经验。"
  },
  {
    "id": 21,
    "start": 191.0,
    "end": 218.85,
    "en": "Therefore, while models themselves cannot yet learn continually and reliably, “learning” must first be constructed as an autonomous system around the model—what this book calls continual evolution, as distinct from continual learning at the level of model weights: record operational evidence, verify outcomes and processes, extract common patterns from multiple trajectories, and then decide whether to update knowledge, instructions, programs, or model parameters.",
    "zh": "因此，尽管模型本身尚不能持续且可靠地学习，“学习”必须首先被构建为围绕模型的自主系统——这就是本书所说的持续演进，与模型权重层面的持续学习不同：记录操作证据，验证结果和过程，从多个轨迹中提取共同模式，然后决定是否更新知识、指令、程序或模型参数。"
  },
  {
    "id": 22,
    "start": 218.85,
    "end": 227.35,
    "en": "Every modification must first become a candidate version and may alter the next round of operation only after regression testing and safety checks.",
    "zh": "每一次修改都必须首先成为候选版本，并在回归测试和安全检查通过后才能影响下一轮操作。"
  },
  {
    "id": 23,
    "start": 227.5,
    "end": 233.137,
    "en": "The preceding chapters have already introduced the principal components required by this system.",
    "zh": "前面的章节已经介绍了该系统所需的主要组件。"
  },
  {
    "id": 24,
    "start": 233.087,
    "end": 250.675,
    "en": "Chapter 2 addresses within-task state, Chapter 3 provides knowledge infrastructure, Chapter 5 gives Agents the meta-capability to create tools and modify systems, Chapter 7 establishes evaluation and verification, and Chapter 8 explains how to update model parameters.",
    "zh": "第2章讨论了任务内状态，第3章提供了知识基础设施，第5章赋予智能体创建工具和修改系统的元能力，第7章建立了评估与验证机制，第8章解释了如何更新模型参数。"
  },
  {
    "id": 25,
    "start": 250.675,
    "end": 257.887,
    "en": "The task of Chapter 9 is to organize these components into the continual evolution loop shown in Figure 9-1.",
    "zh": "第9章的任务是将这些组件组织成图9-1所示的持续演进循环。"
  },
  {
    "id": 26,
    "start": 257.887,
    "end": 263.437,
    "en": "As illustrated in Figure 9-1 Overall loop of continual Agent evolution.",
    "zh": "如图9-1所示，持续智能体演进的整体循环。"
  },
  {
    "id": 27,
    "start": 263.437,
    "end": 273.087,
    "en": "Continual evolution must arise from traceable operational experience, change subsequent behavior, and be verified not to cause significant degradation.",
    "zh": "持续演进必须源于可追溯的操作经验，改变后续行为，并且要验证不会导致重大退化。"
  },
  {
    "id": 28,
    "start": 273.087,
    "end": 289.462,
    "en": "This chapter first discusses how to determine what exactly went well or wrong in a run; it then compares four update methods and their applicable boundaries; finally, it examines how these updates are verified, released, revised, and retired during long-term operation.",
    "zh": "本章首先讨论如何确定一次运行中哪些做得好、哪些做得不好；接着比较四种更新方法及其适用边界；最后考察这些更新在长期运行中如何被验证、发布、修订和淘汰。"
  },
  {
    "id": 29,
    "start": 289.462,
    "end": 293.362,
    "en": "Deriving Learning Signals from Operational Trajectories.",
    "zh": "从操作轨迹中提取学习信号。"
  },
  {
    "id": 30,
    "start": 293.362,
    "end": 298.875,
    "en": "The starting point of continual evolution is the evaluation described in Chapter 7.",
    "zh": "持续演进的起点是第7章中描述的评估。"
  },
  {
    "id": 31,
    "start": 298.875,
    "end": 308.625,
    "en": "If the system does not know whether a task was completed or which step caused success or failure, reflections generated by a language model can only be guesses.",
    "zh": "如果系统无法确定任务是否完成，或无法判断哪一步导致了成功或失败，语言模型生成的反思只能是猜测。"
  },
  {
    "id": 32,
    "start": 308.625,
    "end": 318.237,
    "en": "Evaluating a trajectory amounts to answering three questions in order: was the task completed, was it completed in an allowed manner, and was the user well served?",
    "zh": "评估一条轨迹相当于按顺序回答三个问题：任务是否完成？是否以允许的方式完成？用户是否得到了良好的服务？"
  },
  {
    "id": 33,
    "start": 318.237,
    "end": 323.325,
    "en": "Figure 9-2 organizes them into a three-layer verification structure.",
    "zh": "图9-2将它们组织成一个三层验证结构。"
  },
  {
    "id": 34,
    "start": 323.325,
    "end": 331.062,
    "en": "As illustrated in Figure 9-2 Three-layer trajectory verification from environmental outcomes to an LLM Rubric.",
    "zh": "如图9-2所示，三层轨迹验证从环境结果到LLM评分标准。"
  },
  {
    "id": 35,
    "start": 331.062,
    "end": 336.237,
    "en": "The bottom-layer outcome verifier answers, “Was the task actually completed?",
    "zh": "底层结果验证器回答：“任务是否真正完成了？”"
  },
  {
    "id": 36,
    "start": 336.237,
    "end": 350.812,
    "en": "It reads test results, database states, and tool returns: a Coding Agent can run tests, type checks, and performance benchmarks; an Agent processing a refund for a user can query the order status and actual refund amount.",
    "zh": "它读取测试结果、数据库状态和工具返回值：编码智能体可以运行测试、类型检查和性能基准测试；处理用户退款的智能体可以查询订单状态和实际退款金额。"
  },
  {
    "id": 37,
    "start": 350.812,
    "end": 360.475,
    "en": "Such signals come from real environmental states and are generally more reliable than the model’s descriptions of its own behavior, which makes this the layer to establish first.",
    "zh": "这些信号来自真实的环境状态，通常比模型对自己行为的描述更可靠，因此这一层应首先建立。"
  },
  {
    "id": 38,
    "start": 360.475,
    "end": 365.775,
    "en": "The middle-layer process verifier answers, “Was it completed in an allowed manner?",
    "zh": "中层过程验证器回答：“是否以允许的方式完成？”"
  },
  {
    "id": 39,
    "start": 365.775,
    "end": 380.062,
    "en": "A correct outcome does not imply a correct process: deleting failing test cases can also make tests pass, and telling a user, “We will issue your refund within seven days; please be patient,” may produce temporary satisfaction.",
    "zh": "正确的结果并不意味着正确的过程：删除失败的测试用例也可以让测试通过，告诉用户“我们将在七天内为您退款，请耐心等待”，可能会带来暂时的满意。"
  },
  {
    "id": 40,
    "start": 380.062,
    "end": 389.475,
    "en": "This layer checks business rules, permissions, and action sequences, distinguishing an outcome that has been achieved from one achieved by an allowed path.",
    "zh": "这一层检查业务规则、权限和动作序列，区分通过合法路径实现的结果与通过其他方式实现的结果。"
  },
  {
    "id": 41,
    "start": 389.475,
    "end": 397.912,
    "en": "Policy stores, permission tables, and action traces can all be stated precisely, so this layer too can be judged by code.",
    "zh": "策略存储、权限表和动作痕迹都可以精确表述，因此这一层也可以通过代码进行判断。"
  },
  {
    "id": 42,
    "start": 397.912,
    "end": 402.737,
    "en": "The upper-layer quality verifier answers, “Was the user well served?",
    "zh": "顶层质量验证器回答：“用户是否得到了良好的服务？”"
  },
  {
    "id": 43,
    "start": 402.737,
    "end": 414.85,
    "en": "Examples include whether customer service was patient, whether it offered compliant alternatives, whether a research report identified the key evidence, and whether the generated text is natural and concise.",
    "zh": "例如，客服是否耐心，是否提供了合规的替代方案，研究报告是否识别了关键证据，生成的文本是否自然且简洁。"
  },
  {
    "id": 44,
    "start": 414.85,
    "end": 421.125,
    "en": "These dimensions do not decide whether the task was completed, but they do affect the user’s experience.",
    "zh": "这些维度并不决定任务是否完成，但会影响用户的体验。"
  },
  {
    "id": 45,
    "start": 421.125,
    "end": 431.725,
    "en": "LLM-as-a-Judge, introduced in Chapter 7, can be used here: define a Rubric in advance and require the verifier to score each item and cite trajectory evidence.",
    "zh": "第7章介绍的LLM-as-a-Judge可以在这里使用：提前定义评分标准，并要求验证器对每个项目进行评分并引用轨迹证据。"
  },
  {
    "id": 46,
    "start": 431.725,
    "end": 461.225,
    "en": "For a customer-service Agent, Table 9-1 expands the three layers into seven dimensions that can be scored item by item: task outcome belongs to the outcome layer; rule compliance, privacy boundaries, and promise-action consistency belong to the process layer; expression quality and compliant alternatives belong to the quality layer; factual reliability spans two layers, in that whatever can be matched against tool returns is verified by code while the remainder is judged by the Rubric.",
    "zh": "对于客服智能体而言，表9-1将三层扩展为七个可逐项评分的维度：任务结果属于结果层；规则合规性、隐私边界和承诺-行动一致性属于过程层；表达质量与合规替代方案属于质量层；事实可靠性跨越两个层级，即可以与工具返回匹配的内容通过代码验证，其余部分则通过评分标准进行判断。"
  },
  {
    "id": 47,
    "start": 461.225,
    "end": 466.662,
    "en": "Table 9-1 Trajectory evaluation dimensions for a customer-service Agent",
    "zh": "表9-1 客服智能体轨迹评估维度"
  },
  {
    "id": 48,
    "start": 466.662,
    "end": 477.425,
    "en": "Dimension: Task outcome; Verification question: Was the user’s core request resolved?; Primary evidence: Final environmental state, tool results.",
    "zh": "维度：任务结果；验证问题：用户的原始请求是否得到解决？；主要证据：最终环境状态、工具结果。"
  },
  {
    "id": 49,
    "start": 477.58,
    "end": 490.605,
    "en": "Dimension: Rule compliance; Verification question: Were any policies, permissions, or required procedures violated?; Primary evidence: Policy repository, action trajectory.",
    "zh": "维度：规则合规性；验证问题：是否有任何政策、权限或必要程序被违反？；主要证据：政策库、动作轨迹。"
  },
  {
    "id": 50,
    "start": 490.555,
    "end": 502.28,
    "en": "Dimension: Privacy boundaries; Verification question: Was any information disclosed that should not have been provided?; Primary evidence: Response text, data-access records.",
    "zh": "维度：隐私边界；验证问题：是否披露了不应提供的信息？；主要证据：回复文本、数据访问记录。"
  },
  {
    "id": 51,
    "start": 502.28,
    "end": 513.655,
    "en": "Dimension: Factual reliability; Verification question: Are statements supported by knowledge or tool results?; Primary evidence: Cited sources, tool returns.",
    "zh": "维度：事实可靠性；验证问题：陈述是否由知识或工具结果支持？；主要证据：引用来源、工具返回。"
  },
  {
    "id": 52,
    "start": 513.655,
    "end": 525.692,
    "en": "Dimension: Promise–action consistency; Verification question: Did the actions claimed as completed actually occur?; Primary evidence: Comparison of responses and tool logs.",
    "zh": "维度：承诺-行动一致性；验证问题：声称已完成的动作是否实际发生？；主要证据：回复与工具日志的对比。"
  },
  {
    "id": 53,
    "start": 525.692,
    "end": 538.48,
    "en": "Dimension: Expression quality; Verification question: Is the language natural and concise, without repetition or templated phrasing?; Primary evidence: Full conversation, language Rubric.",
    "zh": "维度：表达质量；验证问题：语言是否自然简洁，没有重复或模板化表达？；主要证据：完整对话、语言评分标准。"
  },
  {
    "id": 54,
    "start": 538.48,
    "end": 551.905,
    "en": "Dimension: Compliant alternatives; Verification question: When the original plan was infeasible, was an allowed alternative found?; Primary evidence: User goal, policies, and subsequent actions.",
    "zh": "维度：合规替代方案；验证问题：当原计划不可行时，是否找到了允许的替代方案？；主要证据：用户目标、政策和后续动作。"
  },
  {
    "id": 55,
    "start": 551.905,
    "end": 557.167,
    "en": "The form of the verifier’s output determines whether it can serve as a learning signal.",
    "zh": "验证者的输出形式决定了它是否能作为学习信号。"
  },
  {
    "id": 56,
    "start": 557.167,
    "end": 563.955,
    "en": "A single overall score reflects only how well one run went; it cannot indicate what should be changed.",
    "zh": "单一的总体分数只能反映一次运行的效果；它无法说明应做出哪些更改。"
  },
  {
    "id": 57,
    "start": 563.955,
    "end": 581.417,
    "en": "An evaluation that later stages can learn from must contain at least four elements: whether the task succeeded, partially succeeded, or failed; a separate verdict for each dimension; the evidence location behind each verdict (which conversation turn, which tool call); and a failure-type label.",
    "zh": "后续阶段可以学习的评估必须包含至少四个要素：任务是成功、部分成功还是失败；每个维度的独立判断；每个判断背后证据的位置（哪一回合对话，哪次工具调用）；以及故障类型标签。"
  },
  {
    "id": 58,
    "start": 581.417,
    "end": 586.805,
    "en": "The verifier should also be permitted to decline to score when evidence is insufficient.",
    "zh": "验证者还应被允许在证据不足时拒绝评分。"
  },
  {
    "id": 59,
    "start": 586.805,
    "end": 593.167,
    "en": "Rather than hardening a low-confidence verdict into a fact, the case should be excluded from the learning set.",
    "zh": "与其将低置信度的判断固化为事实，不如将该案例排除在学习集之外。"
  },
  {
    "id": 60,
    "start": 593.167,
    "end": 603.042,
    "en": "Only with these four elements can the four update methods discussed in the next section determine whether to update knowledge, the Prompt, a program, or model parameters.",
    "zh": "只有具备这四个要素，下一节讨论的四种更新方法才能确定是否更新知识、提示、程序或模型参数。"
  },
  {
    "id": 61,
    "start": 603.042,
    "end": 610.955,
    "en": "Experiment 9-1 intermediate difficulty, two stars: : Build a Trajectory Verifier for a Customer-Service Agent",
    "zh": "实验9-1 中等难度，两颗星：为客服智能体构建一个轨迹验证器"
  },
  {
    "id": 62,
    "start": 610.955,
    "end": 624.505,
    "en": "Objective: Convert a customer-service trajectory into a structured diagnosis that can support subsequent learning, and test whether “multidimensional conclusions with evidence” identify root causes better than a single overall score.",
    "zh": "目标：将客服轨迹转化为结构化诊断，以支持后续学习，并测试“多维结论带证据”是否比单一总体评分更能识别根本原因。"
  },
  {
    "id": 63,
    "start": 624.505,
    "end": 639.655,
    "en": "Experiment description: Compare “one overall score” with “a conclusion, evidence, and confidence for every dimension,” and observe which better distinguishes task failure, rule violations, false promises, and expression problems.",
    "zh": "实验描述：比较“单一总体评分”与“每个维度的结论、证据和置信度”，观察哪种方式更能区分任务失败、规则违规、虚假承诺和表达问题。"
  },
  {
    "id": 64,
    "start": 639.655,
    "end": 644.742,
    "en": "Continual evolution cannot rely only on success rate or one score.",
    "zh": "持续演进不能仅依赖成功率或单一评分。"
  },
  {
    "id": 65,
    "start": 644.742,
    "end": 658.442,
    "en": "Only by retaining what went wrong, why, and where the evidence is can later modules determine whether to update knowledge, the Prompt, a program, or model parameters; low-confidence cases should not enter the learning set automatically.",
    "zh": "只有保留哪里出错、为何出错以及证据所在，后续模块才能判断是否需要更新知识、Prompt、程序或模型参数；低置信度的情况不应自动进入学习集。"
  },
  {
    "id": 66,
    "start": 658.442,
    "end": 661.767,
    "en": "Four Methods for Continual Agent Evolution.",
    "zh": "四种持续智能体演进方法。"
  },
  {
    "id": 67,
    "start": 661.767,
    "end": 667.417,
    "en": "Learning signals indicate that an Agent should change, but not where that change should occur.",
    "zh": "学习信号表明智能体应发生变化，但不表明变化应发生在哪里。"
  },
  {
    "id": 68,
    "start": 667.417,
    "end": 677.48,
    "en": "The primary basis for choosing an update method is not how long an experience has persisted, but whether the target capability can be naturally represented by a particular medium.",
    "zh": "选择更新方法的主要依据不是经验持续的时间长短，而是目标能力是否能通过特定媒介自然表示。"
  },
  {
    "id": 69,
    "start": 677.48,
    "end": 696.992,
    "en": "Facts and experience are suited to knowledge documents; strategies that can be clearly expressed in language belong in Prompts or Skills; precisely executable procedures and constraints should be encoded as programs; and high-dimensional capabilities such as perception, language style, and implicit strategies must enter model parameters.",
    "zh": "事实和经验适合用于知识文档；可以用语言清晰表达的策略应放在Prompt或Skills中；可以精确执行的程序和约束应编码为程序；而像感知、语言风格和隐含策略这样的高维能力必须进入模型参数。"
  },
  {
    "id": 70,
    "start": 696.992,
    "end": 701.755,
    "en": "Figure 9-3 shows these four methods and their relationships.",
    "zh": "图9-3展示了这四种方法及其关系。"
  },
  {
    "id": 71,
    "start": 701.755,
    "end": 707.417,
    "en": "As illustrated in Figure 9-3 Four update methods for continual evolution.",
    "zh": "如图9-3所示，四种持续演进的更新方法。"
  },
  {
    "id": 72,
    "start": 707.417,
    "end": 711.217,
    "en": "Table 9-2 provides a concise comparison.",
    "zh": "表9-2提供了一个简洁的对比。"
  },
  {
    "id": 73,
    "start": 711.217,
    "end": 724.155,
    "en": "The four methods are not mutually exclusive: a medical-imaging Agent relies on parameters to identify lesions, uses a knowledge base to provide current guidelines, and employs code to calculate risk indicators.",
    "zh": "这四种方法并非互斥：医学影像智能体依靠参数识别病灶，使用知识库提供当前指南，并利用代码计算风险指标。"
  },
  {
    "id": 74,
    "start": 724.155,
    "end": 736.567,
    "en": "A customer-service model derives its natural tone from post-training, obtains enterprise-specific policies from knowledge and Skills, and relies on server-side code to enforce critical compliance requirements.",
    "zh": "客服模型的自然语气来自后训练，企业特定政策从知识和Skills中获取，并依靠服务器端代码来执行关键合规要求。"
  },
  {
    "id": 75,
    "start": 736.732,
    "end": 742.119,
    "en": "Table 9-2 Applicable boundaries of four continual evolution methods",
    "zh": "表9-2 四种持续演进方法的适用边界"
  },
  {
    "id": 76,
    "start": 742.069,
    "end": 760.569,
    "en": "Update method: Experience knowledge base; Suitable content: Facts, experiential patterns, exceptions, and sources; Primary advantages: Fast updates, traceability, on-demand retrieval; Primary limitations: Depends on retrieval and correct model application.",
    "zh": "更新方法：经验知识库；适用内容：事实、经验模式、例外情况和来源；主要优势：更新速度快，可追溯，按需检索；主要局限：依赖检索和正确模型应用。"
  },
  {
    "id": 77,
    "start": 760.569,
    "end": 780.882,
    "en": "Update method: Prompt and Skill; Suitable content: Decision principles that require interpreting context, exceptions, and priorities, but can still be expressed in natural language; Primary advantages: Interpretable, controllable scope; Primary limitations: Prone to bloat, conflict, or being ignored.",
    "zh": "更新方法：提示与技能；适用内容：需要解释上下文、例外情况和优先级的决策原则，但仍可以用自然语言表达；主要优势：可解释，可控范围；主要局限：容易膨胀、冲突或被忽略。"
  },
  {
    "id": 78,
    "start": 780.882,
    "end": 797.794,
    "en": "Update method: Programs and Harness; Suitable content: Deterministic procedures, tools, and hard constraints; Primary advantages: Testable, stable execution, low cost; Primary limitations: Higher development and maintenance costs.",
    "zh": "更新方法：程序与Harness；适用内容：确定性流程、工具和硬性约束；主要优势：可测试，执行稳定，成本低；主要局限：开发和维护成本较高。"
  },
  {
    "id": 79,
    "start": 797.794,
    "end": 815.082,
    "en": "Update method: Model parameters; Suitable content: High-dimensional perception, generation style, and implicit strategies; Primary advantages: Strong generalization, low inference overhead; Primary limitations: High update and regression costs.",
    "zh": "更新方法：模型参数；适用内容：高维感知、生成风格和隐式策略；主要优势：泛化能力强，推理开销低；主要局限：更新和回归成本高。"
  },
  {
    "id": 80,
    "start": 815.082,
    "end": 830.832,
    "en": "A single capability can be supported by several parts of the system: facts go into the knowledge base, the principles that explain exceptions go into a Skill, code enforces permissions that must not be bypassed, and high-dimensional recognition is learned through model parameters.",
    "zh": "单一能力可以由系统的多个部分支持：事实进入知识库，解释例外情况的原则进入技能，代码强制执行不能绕过的权限，而高维识别则通过模型参数进行学习。"
  },
  {
    "id": 81,
    "start": 830.832,
    "end": 837.907,
    "en": "Deciding where to make a change produces only an update proposal; it must still pass validation before release.",
    "zh": "决定在哪里进行更改只会产生一个更新建议；在发布前仍需通过验证。"
  },
  {
    "id": 82,
    "start": 837.907,
    "end": 841.057,
    "en": "Consolidating Experience into Knowledge.",
    "zh": "将经验整合为知识。"
  },
  {
    "id": 83,
    "start": 841.057,
    "end": 848.719,
    "en": "The most lightweight form of evolution is to organize recurring experience from multiple runs into retrievable knowledge documents.",
    "zh": "最轻量级的进化形式是将多次运行中的重复经验组织成可检索的知识文档。"
  },
  {
    "id": 84,
    "start": 848.719,
    "end": 860.157,
    "en": "The “experience knowledge base” described here shares storage, indexing, and retrieval technologies with Chapter 3, but differs in its knowledge sources and verification objectives.",
    "zh": "此处描述的“经验知识库”与第3章共享存储、索引和检索技术，但在知识来源和验证目标上有所不同。"
  },
  {
    "id": 85,
    "start": 860.157,
    "end": 874.469,
    "en": "Chapter 3 primarily extracts “what the user and the world are like” from user conversations, documents, and datasets; this chapter extracts “what should be done under which conditions” from Agent action trajectories and outcomes.",
    "zh": "第3章主要从用户对话、文档和数据集中提取“用户和世界是什么样子”；本章则从智能体动作轨迹和结果中提取“在何种条件下应该做什么”。"
  },
  {
    "id": 86,
    "start": 874.469,
    "end": 890.019,
    "en": "For example, “This airline requires special meals to be reserved twenty-four hours in advance” is domain knowledge, whereas “Check the special-meal deadline before booking to avoid discovering only after payment that the request cannot be fulfilled” is action experience.",
    "zh": "例如，“这家航空公司要求特殊餐食必须提前24小时预订”是领域知识，而“在预订前检查特殊餐食的截止时间，以避免付款后才发现无法满足请求”是行动经验。"
  },
  {
    "id": 87,
    "start": 890.019,
    "end": 894.207,
    "en": "Raw trajectories are unsuitable as formal knowledge units.",
    "zh": "原始轨迹不适合作为正式的知识单元。"
  },
  {
    "id": 88,
    "start": 894.207,
    "end": 901.482,
    "en": "They are lengthy and noisy, containing raw tool output, incidental detours, and environmental details.",
    "zh": "它们冗长且嘈杂，包含原始工具输出、偶然的绕道和环境细节。"
  },
  {
    "id": 89,
    "start": 901.482,
    "end": 919.032,
    "en": "A more robust system retains three layers of data: immutable raw trajectories for auditing; per-run analyses recording the outcome and candidate lessons; and comparisons, clustering, and induction across multiple similar trajectories to produce future-oriented Markdown knowledge documents.",
    "zh": "更强大的系统保留三层数据：不可变的原始轨迹用于审计；每轮分析记录结果和候选经验；以及对多个相似轨迹进行比较、聚类和归纳，以生成面向未来的Markdown知识文档。"
  },
  {
    "id": 90,
    "start": 919.032,
    "end": 933.307,
    "en": "A formal document typically specifies applicable scenarios, recommended strategies, prohibited practices, exceptions, evidence sources, and the latest verification time rather than retelling the complete course of a single task.",
    "zh": "一份正式文档通常会指定适用场景、推荐策略、禁止行为、例外情况、证据来源和最新验证时间，而不是重述单个任务的完整过程。"
  },
  {
    "id": 91,
    "start": 933.46,
    "end": 938.935,
    "en": "This design shares the same two-stage principle as User-as-Code in Chapter 3.",
    "zh": "这种设计与第3章中User-as-Code的双阶段原则相同。"
  },
  {
    "id": 92,
    "start": 938.885,
    "end": 946.56,
    "en": "User-as-Code first appends conversational facts to an immutable log and then periodically rebuilds a structured user model.",
    "zh": "User-as-Code首先将对话事实追加到不可变的日志中，然后定期重建结构化的用户模型。"
  },
  {
    "id": 93,
    "start": 946.56,
    "end": 952.997,
    "en": "Experience learning should likewise preserve evidence first and generate mutable knowledge offline afterward.",
    "zh": "经验学习也应首先保留证据，之后再离线生成可变的知识。"
  },
  {
    "id": 94,
    "start": 952.997,
    "end": 956.51,
    "en": "Figure 9-4 illustrates this process.",
    "zh": "图9-4展示了这个过程。"
  },
  {
    "id": 95,
    "start": 956.51,
    "end": 969.985,
    "en": "Separating recording from organization prevents a single accidental success or network failure from immediately changing the Agent, while allowing the system to identify common patterns only after observing multiple successes and failures.",
    "zh": "将记录与组织分离可以防止一次偶然的成功或网络故障立即改变智能体，同时允许系统在观察到多次成功和失败后才能识别共同模式。"
  },
  {
    "id": 96,
    "start": 969.985,
    "end": 976.335,
    "en": "As illustrated in Figure 9-4 From evaluated trajectories to experience knowledge documents.",
    "zh": "如图9-4所示：从评估轨迹到经验知识文档。"
  },
  {
    "id": 97,
    "start": 976.335,
    "end": 980.36,
    "en": "Experience documents are not simple trajectory summaries.",
    "zh": "经验文档不是简单的轨迹摘要。"
  },
  {
    "id": 98,
    "start": 980.36,
    "end": 993.535,
    "en": "Transferable content emerges from comparison: what successful trajectories of the same type did, what failed trajectories lacked, in which environment versions a strategy was effective, and under which prerequisites it failed.",
    "zh": "可迁移的内容源于比较：同一类型的成功轨迹做了什么，失败的轨迹缺少了什么，在哪些环境版本中策略有效，以及在哪些前提条件下它失败了。"
  },
  {
    "id": 99,
    "start": 993.535,
    "end": 1002.185,
    "en": "Chapter 3 has already introduced knowledge extraction, clustering, and retrieval, so this chapter does not repeat those algorithms.",
    "zh": "第3章已经介绍了知识提取、聚类和检索，因此本章不再重复这些算法。"
  },
  {
    "id": 100,
    "start": 1002.185,
    "end": 1011.972,
    "en": "Instead, it focuses on how trajectory evaluation becomes a condition for extraction and whether the extracted knowledge improves performance on subsequent tasks.",
    "zh": "相反，它关注的是轨迹评估如何成为提取的条件，以及提取的知识是否提高了后续任务的性能。"
  },
  {
    "id": 101,
    "start": 1011.972,
    "end": 1017.072,
    "en": "A complete knowledge-distillation pipeline can be divided into five steps.",
    "zh": "一个完整的知识蒸馏流程可以分为五个步骤。"
  },
  {
    "id": 102,
    "start": 1017.072,
    "end": 1021.86,
    "en": "First, preserve immutable trajectories and environmental outcomes.",
    "zh": "首先，保留不可变的轨迹和环境结果。"
  },
  {
    "id": 103,
    "start": 1021.86,
    "end": 1032.047,
    "en": "Next, produce a structured analysis for each run, listing the task type, required capabilities, observed strategies, errors, and exceptions.",
    "zh": "接下来，为每次运行生成结构化分析，列出任务类型、所需能力、观察到的策略、错误和异常。"
  },
  {
    "id": 104,
    "start": 1032.047,
    "end": 1040.16,
    "en": "Then aggregate runs by task family and build an evidence table showing which trajectories support or contradict each candidate pattern.",
    "zh": "然后按任务类别聚合运行，并构建一个证据表，显示哪些轨迹支持或反驳每个候选模式。"
  },
  {
    "id": 105,
    "start": 1040.16,
    "end": 1044.71,
    "en": "Only candidates that meet the support threshold enter formal documents.",
    "zh": "只有满足支持阈值的候选内容才会进入正式文档。"
  },
  {
    "id": 106,
    "start": 1044.71,
    "end": 1050.372,
    "en": "Finally, evaluate transfer on new tasks that were not used during distillation.",
    "zh": "最后，在蒸馏过程中未使用的新任务上评估迁移效果。"
  },
  {
    "id": 107,
    "start": 1050.372,
    "end": 1061.31,
    "en": "Keeping formal knowledge separate from candidate analyses allows the system to generalize again without altering the original evidence and to revoke a conclusion precisely when the environment changes.",
    "zh": "将正式知识与候选分析分开，使系统能够在不改变原始证据的情况下再次进行泛化，并在环境变化时精确地撤销结论。"
  },
  {
    "id": 108,
    "start": 1061.31,
    "end": 1066.022,
    "en": "GAIA experience learning provides an intuitive example.",
    "zh": "GAIA经验学习提供了一个直观的例子。"
  },
  {
    "id": 109,
    "start": 1066.022,
    "end": 1085.022,
    "en": "GAIA contains multistep problems that combine search, web reading, file processing, and computation, while AWorld provides the environment for running Agents, invoking those tools, and recording trajectories: the former is like the exam, and the latter is the exam room and laboratory record system.",
    "zh": "GAIA包含结合了搜索、网页阅读、文件处理和计算的多步骤问题，而AWorld为运行智能体、调用这些工具和记录轨迹提供了环境：前者就像考试，后者则是考场和实验室记录系统。"
  },
  {
    "id": 110,
    "start": 1085.022,
    "end": 1091.772,
    "en": "A simplistic approach generates a strategy summary and immediately vectorizes it after one successful run.",
    "zh": "一种简单的方法在一次成功运行后立即生成策略摘要并将其向量化。"
  },
  {
    "id": 111,
    "start": 1091.772,
    "end": 1105.472,
    "en": "A stricter implementation first uses a GAIA answer verifier or another environmental verifier to label runs as successful, partially successful, or failed, and then compares multiple paths within the same task family.",
    "zh": "更严格的实现首先使用GAIA答案验证器或其他环境验证器将运行标记为成功、部分成功或失败，然后比较同一任务家族中的多个路径。"
  },
  {
    "id": 112,
    "start": 1105.472,
    "end": 1115.697,
    "en": "Successful trajectories contribute candidate strategies, failures reveal which approaches to avoid, and partial successes reveal which segment worked and which still failed.",
    "zh": "成功的轨迹会提供候选策略，失败表明应避免哪些方法，部分成功则表明哪些部分有效，哪些仍然失败。"
  },
  {
    "id": 113,
    "start": 1115.697,
    "end": 1123.522,
    "en": "The natural-language reflection proposed by Reflexion can help generate candidate lessons, but reflection itself is not evidence.",
    "zh": "Reflexion提出的自然语言反思可以帮助生成候选经验，但反思本身并不是证据。"
  },
  {
    "id": 114,
    "start": 1123.522,
    "end": 1133.81,
    "en": "Only content consistent with environmental outcomes, supported across trajectories, and showing positive transfer on new tasks should enter formal experience documents.",
    "zh": "只有与环境结果一致、跨轨迹得到支持并在新任务上表现出正向迁移的内容才应进入正式经验文档。"
  },
  {
    "id": 115,
    "start": 1133.81,
    "end": 1136.922,
    "en": "Encoding Experience as Instructions.",
    "zh": "将经验编码为指令。"
  },
  {
    "id": 116,
    "start": 1136.922,
    "end": 1144.435,
    "en": "An experience knowledge base gives an Agent \"material it can consult\"; Prompts and Skills prescribe \"how it should act.",
    "zh": "一个经验知识库为智能体提供了\"它可以查阅的材料\"；提示和技能规定了\"它应该如何行动\"。"
  },
  {
    "id": 117,
    "start": 1144.435,
    "end": 1155.022,
    "en": "Only when many similar trajectories repeatedly expose the same strategic error, and that error can be stated clearly in words, is it worth promoting experience into an instruction.",
    "zh": "只有当许多相似的轨迹反复暴露相同的策略性错误，并且该错误可以用清晰的词语表达时，才值得将经验提升为指令。"
  },
  {
    "id": 118,
    "start": 1155.022,
    "end": 1168.422,
    "en": "Three concepts should be kept apart here: the system Prompt applies to every task, a Skill is loaded on demand only when a domain or tool matches, and the program/Harness enforces permissions and other hard constraints.",
    "zh": "在此处应区分三个概念：系统提示适用于每个任务，技能仅在领域或工具匹配时按需加载，而程序/Harness则强制执行权限和其他硬性约束。"
  },
  {
    "id": 119,
    "start": 1168.422,
    "end": 1172.485,
    "en": "Andrej Karpathy calls this practice System Prompt Learning",
    "zh": "Andrej Karpathy称这种做法为系统提示学习"
  },
  {
    "id": 120,
    "start": 1172.644,
    "end": 1177.956,
    "en": "System prompt learning is not the same thing as the prompt engineering of Chapter 2.",
    "zh": "系统提示学习与第2章的提示工程不是一回事。"
  },
  {
    "id": 121,
    "start": 1177.906,
    "end": 1188.131,
    "en": "Chapter 2 discusses how to organize a good Prompt; this section discusses what feedback is sufficient to trigger a change, and how an update proposal is released safely.",
    "zh": "第2章讨论了如何组织一个良好的Prompt；本节讨论什么样的反馈足以触发更改，以及如何安全地发布更新方案。"
  },
  {
    "id": 122,
    "start": 1188.131,
    "end": 1198.019,
    "en": "A change should be a minimal diff with provenance, not a full rewrite of the Prompt on every pass—precisely the minimal-diff-plus-rollback pattern named in Chapter 1.",
    "zh": "更改应是一个带有来源的最小差异，而不是每次迭代都对Prompt进行完全重写——正是第1章中提到的最小差异加回滚模式。"
  },
  {
    "id": 123,
    "start": 1198.019,
    "end": 1208.469,
    "en": "A candidate version must be tested both on the boundary set that triggered the failure and on a retention set that already works: the former must improve, the latter must not regress.",
    "zh": "候选版本必须在触发故障的边界集和已正常工作的保留集上进行测试：前者必须得到改善，后者不得退化。"
  },
  {
    "id": 124,
    "start": 1208.469,
    "end": 1212.931,
    "en": "Example 1: Turning the Escalation Boundary into Rules.",
    "zh": "示例1：将升级边界转化为规则。"
  },
  {
    "id": 125,
    "start": 1212.931,
    "end": 1227.781,
    "en": "In the telecom policy of τ²-bench, escalation to a human agent is governed by only two statements of principle: escalate only when the request falls outside the Agent's scope of action, and try your best to resolve the issue before escalating.",
    "zh": "在τ²-bench的电信政策中，向人工代理升级仅由两条原则性陈述所规定：仅当请求超出智能体的行动范围时才升级，并且在升级前应尽最大努力解决问题。"
  },
  {
    "id": 126,
    "start": 1227.781,
    "end": 1246.281,
    "en": "When Chapter 7 dissected this environment the two lines revealed no problem; run the same environment with a weaker model and the deficiency surfaces at once—after a tool returns an error the Agent retries repeatedly and ends by escalating to a human, which is how 19 of the 20 tasks in the derivation set finished.",
    "zh": "当第7章剖析这个环境时，这两行代码未显示任何问题；用较弱的模型运行相同的环境时，缺陷立即显现——在工具返回错误后，智能体反复重试，最终升级到人工代理，这就是推导集中20个任务中有19个完成的方式。"
  },
  {
    "id": 127,
    "start": 1246.281,
    "end": 1258.656,
    "en": "Hand those 19 failed trajectories to a model and let it induce, on its own, a handful of executable rules to append to the end of the policy; then rerun on a set of tasks that took no part in the derivation.",
    "zh": "将这19条失败轨迹交给模型，让它自行推导出一些可执行的规则，附加到策略末尾；然后在一组未参与推导的任务集上重新运行。"
  },
  {
    "id": 128,
    "start": 1258.656,
    "end": 1266.706,
    "en": "The pass rate rises from 12.3% to 19.3%, and not one task that had passed before is broken.",
    "zh": "通过率从12.3%提升至19.3%，而且没有一个之前通过的任务被破坏。"
  },
  {
    "id": 129,
    "start": 1266.706,
    "end": 1271.044,
    "en": "The evidence provided to the model determines which rules it can infer.",
    "zh": "提供给模型的证据决定了它能推断出哪些规则。"
  },
  {
    "id": 130,
    "start": 1271.044,
    "end": 1294.344,
    "en": "From the same 19 trajectories, supplying only failure summaries and error text yields \"do not keep calling a tool that repeatedly returns the same error\"; adding an inventory of which tools belong to the Agent and which to the user turns the result into \"network status, SIM card, and APN checks belong to the user's device and should be performed by the user under guidance rather than called directly.",
    "zh": "从同样的19条轨迹中，仅提供失败摘要和错误文本会得到“不要持续调用返回相同错误的工具”；添加哪些工具属于智能体、哪些属于用户的清单后，结果变为“网络状态、SIM卡和APN检查属于用户的设备，应在指导下由用户执行，而不是直接调用”。"
  },
  {
    "id": 131,
    "start": 1294.344,
    "end": 1299.819,
    "en": "The first records a lesson; the second identifies who is responsible for each action.",
    "zh": "第一条记录了教训；第二条明确了每项操作的责任人。"
  },
  {
    "id": 132,
    "start": 1299.819,
    "end": 1304.281,
    "en": "A model treats observed behavior as the behavior that ought to occur.",
    "zh": "模型将观察到的行为视为应该发生的行为。"
  },
  {
    "id": 133,
    "start": 1304.281,
    "end": 1320.519,
    "en": "Two of the first-version rules read \"escalate to a human after three consecutive failed calls\" and \"escalate to a human if the user does not supply a number after two requests\"—escalation is what appears most often in the trajectories, so the model took it for a reasonable fallback.",
    "zh": "最初版本的两条规则是“在连续三次失败调用后升级到人工代理”和“如果用户在两次请求后未提供号码则升级到人工代理”——由于升级在轨迹中出现最频繁，模型将其视为合理的后备方案。"
  },
  {
    "id": 134,
    "start": 1320.519,
    "end": 1328.019,
    "en": "But in this evaluation escalation always counts as failure, so those two rules write failure into the specification.",
    "zh": "但在此次评估中，升级始终被视为失败，因此这两条规则将失败写入了规范。"
  },
  {
    "id": 135,
    "start": 1328.019,
    "end": 1335.431,
    "en": "Derived artifacts therefore cannot be released directly; they must pass verification independent of whatever produced them.",
    "zh": "因此衍生的成果不能直接发布；它们必须通过独立于生成它们的任何过程的验证。"
  },
  {
    "id": 136,
    "start": 1335.431,
    "end": 1339.331,
    "en": "The underlying defects are often surprisingly simple.",
    "zh": "底层缺陷往往出人意料地简单。"
  },
  {
    "id": 137,
    "start": 1339.331,
    "end": 1352.881,
    "en": "In one typical baseline trajectory, the Agent needs the user's phone number, so it calls the lookup tool with \"Please provide your phone number\" filled into the parameter—five times in a row, five errors, then escalation.",
    "zh": "在一个典型的基线轨迹中，智能体需要用户的电话号码，因此它会调用查找工具，并将“请提供您的电话号码”填入参数——连续五次，五次错误，然后升级处理。"
  },
  {
    "id": 138,
    "start": 1352.881,
    "end": 1358.631,
    "en": "It had already worked out that it should ask the user; it merely addressed the sentence to the tool.",
    "zh": "它已经意识到应该向用户询问；只是将句子错误地发给了工具。"
  },
  {
    "id": 139,
    "start": 1358.631,
    "end": 1365.931,
    "en": "Once the rules took effect, it first asked the user in the conversation, obtained the number, and then ran the query.",
    "zh": "一旦规则生效，它首先在对话中向用户询问，获取号码后执行查询。"
  },
  {
    "id": 140,
    "start": 1365.931,
    "end": 1375.144,
    "en": "Later, when a tool rejected its attempt to check SIM card status, it switched to guiding the user through reseating the SIM card, and the task passed.",
    "zh": "后来，当工具拒绝其检查SIM卡状态的尝试时，它转而引导用户重新安装SIM卡，任务得以完成。"
  },
  {
    "id": 141,
    "start": 1375.144,
    "end": 1384.894,
    "en": "Experiment 9-2 intermediate difficulty, two stars: : Deriving Escalation and Tool-Use Rules from τ²-bench Failure Trajectories",
    "zh": "实验9-2 中等难度，两颗星：从τ²-bench失败轨迹中推导出升级和工具使用规则"
  },
  {
    "id": 142,
    "start": 1384.894,
    "end": 1389.869,
    "en": "Reuse the τ²-bench telecom environment from Chapter 7.",
    "zh": "复用第7章的τ²-bench电信环境。"
  },
  {
    "id": 143,
    "start": 1389.869,
    "end": 1399.756,
    "en": "The derivation set and the transfer set are two disjoint task sets in the upstream repository to begin with, so the derivation process never touches the transfer set.",
    "zh": "推导集和迁移集最初是上游仓库中的两个互不重叠的任务集，因此推导过程永远不会接触到迁移集。"
  },
  {
    "id": 144,
    "start": 1399.756,
    "end": 1414.881,
    "en": "First run the derivation set with a weak model and keep the failed trajectories; have the rules induced by a model rather than written by hand, and append them to the end of the original policy; then compare the original policy against the two evolved versions on the transfer set.",
    "zh": "首先用弱模型运行推导集并保留失败轨迹；由模型而非人工编写规则，并将它们附加到原始策略的末尾；然后在迁移集上将原始策略与两种进化后的版本进行比较。"
  },
  {
    "id": 145,
    "start": 1414.881,
    "end": 1421.019,
    "en": "Only the policy file differs across the three arms; the user simulator is held fixed.",
    "zh": "三个分支中只有策略文件不同；用户模拟器保持固定。"
  },
  {
    "id": 146,
    "start": 1421.188,
    "end": 1435.2,
    "en": "Besides the pass rate, record three behavioral metrics that correspond directly to the rules: the escalation rate, the number of times the Agent oversteps and calls a user-side tool, and the number of calls issued with a missing parameter.",
    "zh": "除了通过率，还需记录三个直接对应于规则的行为指标：升级率、智能体越权调用用户端工具的次数，以及因参数缺失而发出的调用次数。"
  },
  {
    "id": 147,
    "start": 1435.15,
    "end": 1444.3,
    "en": "Both of the latter fall by roughly 80% in the evolved versions, which shows that the gain in pass rate comes from rules repairing specific actions.",
    "zh": "在进化后的版本中，后两者均下降约80%，这表明通过率的提升来自于修复特定动作的规则。"
  },
  {
    "id": 148,
    "start": 1444.3,
    "end": 1447.7,
    "en": "The same approach transfers to other domains.",
    "zh": "同样的方法可应用于其他领域。"
  },
  {
    "id": 149,
    "start": 1447.7,
    "end": 1464.713,
    "en": "A typical bad case for an airline customer-service Agent is this: the user objects to a refund fee, a change fee, or a baggage policy, and the Agent calls transfer_to_human without looking up the policy, explaining the rule, or seeking a compliant alternative.",
    "zh": "航空客户服务智能体的一个典型失败案例是：用户对退款费、变更费或行李政策表示不满，而智能体在未查阅政策、解释规则或寻求合规替代方案的情况下直接呼叫人工服务。"
  },
  {
    "id": 150,
    "start": 1464.713,
    "end": 1474.825,
    "en": "An ordinary policy dispute needs no escalation; only an explicit request for a human, or a situation involving safety, makes escalation mandatory.",
    "zh": "普通策略争议无需升级；只有用户明确要求人工介入，或涉及安全的情况，才需要强制升级。"
  },
  {
    "id": 151,
    "start": 1474.825,
    "end": 1484.388,
    "en": "The diagnosis again points to an escalation boundary that was never made explicit, and the fix is again to turn it into a single minimal rule with a recorded source.",
    "zh": "诊断再次指向一个从未明确说明的升级边界，解决方法是将其转化为一个带有记录来源的最小规则。"
  },
  {
    "id": 152,
    "start": 1484.388,
    "end": 1493.4,
    "en": "Experiment 9-3 intermediate difficulty, two stars: : Optimizing an Airline Customer-Service System Prompt from Failure Trajectories",
    "zh": "实验9-3 中等难度，两颗星：从失败轨迹优化航空公司客户服务系统提示词"
  },
  {
    "id": 153,
    "start": 1493.4,
    "end": 1506.963,
    "en": "Objective: Have the airline customer-service Agent fix its habit of escalating to a human too early in ordinary policy disputes, while retaining the ability to transfer on an explicit request for a human and on safety incidents.",
    "zh": "目标：让航空公司客服智能体改变在普通政策争议中过早升级到人工的习性，同时保留根据用户明确请求或安全事件转接人工的能力。"
  },
  {
    "id": 154,
    "start": 1506.963,
    "end": 1523.463,
    "en": "Description: Extract three dimensions from the failure trajectories—rule compliance, task resolution, and compliant workarounds—and generate one minimal Prompt patch with provenance; then compare it against the initial version and a hand-tuned version under identical conditions.",
    "zh": "描述：从失败轨迹中提取三个维度——规则合规性、任务解决和合规的变通方法，并生成一个带有来源的最小提示词修补方案；然后在相同条件下与初始版本和手动调优版本进行比较。"
  },
  {
    "id": 155,
    "start": 1523.463,
    "end": 1532.613,
    "en": "An update proposal enters staged rollout only after the boundary cases improve, the old tasks do not regress, and the release gate is passed.",
    "zh": "只有在边界案例得到改善、旧任务不会退化且通过发布门禁后，更新提议才会进入分阶段部署。"
  },
  {
    "id": 156,
    "start": 1532.613,
    "end": 1545.538,
    "en": "What it shows: The point of automatic Prompt optimization is not to let the model freely rewrite a large block of text, but to turn an attributable failure into a local rule with a clear scope that can be rolled back and verified.",
    "zh": "它所展示的是：自动提示优化的目的不是让模型自由重写一大段文本，而是将可归因的失败转化为一个具有明确范围的局部规则，该规则可以回滚和验证。"
  },
  {
    "id": 157,
    "start": 1545.538,
    "end": 1552.288,
    "en": "Example 2: Requirement Clarification Skill—From Direct Execution to Confirm First.",
    "zh": "示例2：需求澄清技能——从直接执行到先确认。"
  },
  {
    "id": 158,
    "start": 1552.288,
    "end": 1555.45,
    "en": "Chapter 2 explained how to write a Skill.",
    "zh": "第2章解释了如何编写一个技能。"
  },
  {
    "id": 159,
    "start": 1555.45,
    "end": 1572.638,
    "en": "Here we assume the system already has a first version of a requirement-clarification Skill, and focus on something else: as the Agent keeps receiving user feedback in production, how does it decide automatically whether \"when to ask first, what to ask, and when to simply begin\" needs updating?",
    "zh": "在这里我们假设系统已经有一个需求澄清技能的初步版本，重点在于其他方面：随着智能体在生产环境中不断接收用户反馈，它是如何自动决定是否需要更新‘何时先询问、询问什么以及何时直接开始’的？"
  },
  {
    "id": 160,
    "start": 1572.638,
    "end": 1575.563,
    "en": "This is a classic procedural problem.",
    "zh": "这是一个经典的程序问题。"
  },
  {
    "id": 161,
    "start": 1575.563,
    "end": 1580.4,
    "en": "A user says \"change the login page to support enterprise sign-in.",
    "zh": "用户说：‘将登录页面改为支持企业登录。’"
  },
  {
    "id": 162,
    "start": 1580.4,
    "end": 1593.313,
    "en": "If the Agent starts immediately, it may make choices on the user's behalf—identity provider, fallback path, compatibility with existing users, rollout scope—that the user has not yet considered.",
    "zh": "如果智能体立即开始操作，它可能会代表用户做出选择——身份提供商、备用路径、与现有用户的兼容性、部署范围——而这些是用户尚未考虑的。"
  },
  {
    "id": 163,
    "start": 1593.313,
    "end": 1600.05,
    "en": "If it instead lists a dozen questions regardless of task size, a simple change turns into an interview.",
    "zh": "如果它不管任务大小都列出十几个问题，一个简单的更改就会变成一次访谈。"
  },
  {
    "id": 164,
    "start": 1600.05,
    "end": 1605.125,
    "en": "Asking too little causes rework; asking too much causes interruption.",
    "zh": "问得太少会导致返工；问得太多则会造成干扰。"
  },
  {
    "id": 165,
    "start": 1605.125,
    "end": 1611.588,
    "en": "What the Skill needs to express is not \"every task must be confirmed\" but a scoped decision path.",
    "zh": "该技能需要表达的并不是‘每个任务都必须确认’，而是一个有范围的决策路径。"
  },
  {
    "id": 166,
    "start": 1611.588,
    "end": 1643.6,
    "en": "A first version of the procedure might read: judge the task's ambiguity, risk, and cost of rework; for low-risk, easily reversible small changes, state the assumptions and proceed; when architecture, data, permissions, public interfaces, or wide-reaching changes are involved, ask a small number of questions that would genuinely change the plan; once answered, produce a short Spec or Plan listing goals, non-goals, key trade-offs, assumptions, and acceptance criteria, and hand it to the user for",
    "zh": "一个初步的流程可能如下：判断任务的模糊性、风险和返工成本；对于低风险、易于撤销的小改动，说明假设并继续执行；当涉及架构、数据、权限、公共接口或广泛影响的改动时，提出一些会真正改变计划的问题；在得到回答后，生成一份简短的Spec或计划，列出目标、非目标、关键权衡、假设和验收标准，并交给用户进行"
  },
  {
    "id": 167,
    "start": 1643.6,
    "end": 1651.075,
    "en": "confirmation; execute after confirmation, and pause to re-confirm whenever the original Spec turns out not to hold.",
    "zh": "确认；在确认后执行，并在原始Spec不再成立时暂停并重新确认。"
  },
  {
    "id": 168,
    "start": 1651.228,
    "end": 1655.128,
    "en": "Continual evolution starts from operational evidence.",
    "zh": "持续演进始于操作证据。"
  },
  {
    "id": 169,
    "start": 1655.078,
    "end": 1664.828,
    "en": "The system should record tasks, clarifying questions, Spec versions, user edits, execution results, and post-delivery rework together.",
    "zh": "系统应记录任务、澄清问题、Spec版本、用户编辑、执行结果和交付后的返工情况。"
  },
  {
    "id": 170,
    "start": 1664.828,
    "end": 1682.44,
    "en": "Negative feedback may be \"this isn't what I imagined,\" but it may equally be \"you asked too many questions\"; positive feedback includes a smooth delivery after a single confirmation, less rework after the user amended the Spec, and low-risk tasks that were not interrupted by superfluous questions.",
    "zh": "负面反馈可能是“这不是我想象的”，但也可能是“你问了太多问题”；正面反馈包括一次确认后顺利交付、用户修改Spec后返工减少，以及未被多余问题中断的低风险任务。"
  },
  {
    "id": 171,
    "start": 1682.44,
    "end": 1691.24,
    "en": "Storing an isolated complaint is not enough to trigger an update: feedback must be tied to a specific trajectory, task type, and outcome.",
    "zh": "单独存储投诉不足以触发更新：反馈必须与特定的轨迹、任务类型和结果相关联。"
  },
  {
    "id": 172,
    "start": 1691.24,
    "end": 1697.603,
    "en": "When many trajectories repeatedly reveal the same gap, the Agent can propose a minimal Skill update.",
    "zh": "当许多轨迹反复揭示相同缺口时，智能体可以提出最小的技能更新。"
  },
  {
    "id": 173,
    "start": 1697.603,
    "end": 1712.49,
    "en": "For instance, if several authentication changes revealed only after delivery that legacy sign-in still needed to work, a draft rule can require confirming \"identity provider, fallback path, and compatibility scope\" before execution.",
    "zh": "例如，如果多次身份验证更改在交付后才发现仍需支持旧登录方式，可以起草一条规则，在执行前要求确认“身份提供者、回退路径和兼容范围”。"
  },
  {
    "id": 174,
    "start": 1712.49,
    "end": 1723.103,
    "en": "Conversely, if a large number of typo fixes were each preceded by a round of questions, the draft rule should narrow the trigger to high-risk and highly ambiguous cases.",
    "zh": "相反，如果大量拼写错误修复前都有一轮问题，那么草案规则应将触发条件限定为高风险和高度模糊的情况。"
  },
  {
    "id": 175,
    "start": 1723.103,
    "end": 1727.103,
    "en": "This procedure must be validated by controlled experiment.",
    "zh": "此流程必须通过控制实验进行验证。"
  },
  {
    "id": 176,
    "start": 1727.103,
    "end": 1739.99,
    "en": "One can compare three strategies—\"execute directly,\" \"ask first, then execute,\" and \"ask, produce a Spec, confirm, then execute\"—stratified by task complexity.",
    "zh": "可以比较三种策略——“直接执行”、“先提问再执行”和“提问、生成Spec、确认后再执行”——按任务复杂度分层。"
  },
  {
    "id": 177,
    "start": 1739.99,
    "end": 1755.29,
    "en": "The metrics should include at least requirement-deviation rate, post-delivery rework count, number of clarification rounds, time to first useful output, user abandonment rate, the proportion of Specs that were edited, and the error rate on high-risk operations.",
    "zh": "指标应至少包括需求偏差率、交付后返工次数、澄清轮次数量、首次有用输出时间、用户放弃率、被编辑的Spec比例，以及高风险操作的错误率。"
  },
  {
    "id": 178,
    "start": 1755.29,
    "end": 1766.553,
    "en": "An update proposal reaches staged rollout only if it reduces requirement deviation without significantly increasing interruption, and passes regression on tasks that were not used to distill it.",
    "zh": "只有在不显著增加干扰的情况下减少需求偏差，并且通过未用于提炼它的任务的回归测试，更新提案才能进入分阶段发布。"
  },
  {
    "id": 179,
    "start": 1766.553,
    "end": 1771.365,
    "en": "This example also illustrates the boundary between Skill and Harness.",
    "zh": "这个例子也说明了技能与Harness之间的界限。"
  },
  {
    "id": 180,
    "start": 1771.365,
    "end": 1785.915,
    "en": "The Skill understands context and takes the initiative to ask questions, assemble the Spec, and explain trade-offs; the Harness vetoes high-risk writes, direct operations on main, or bypassing the release process when confirmation is missing.",
    "zh": "技能理解上下文并主动提问、组装Spec并解释权衡；Harness则否决高风险写入、对主分支的直接操作或在缺少确认时绕过发布流程。"
  },
  {
    "id": 181,
    "start": 1785.915,
    "end": 1794.153,
    "en": "A veto gate in the Harness cannot decide for the model how a PR should be described, nor choose the requirement design on its behalf.",
    "zh": "Harness 中的否决门无法决定模型如何描述 PR，也无法代替模型选择需求设计。"
  },
  {
    "id": 182,
    "start": 1794.153,
    "end": 1802.878,
    "en": "As experience accumulates, stable conversational trajectories can further yield the SFT or RL training data needed in Chapter 8.",
    "zh": "随着经验的积累，稳定的对话轨迹可以进一步产生第 8 章中所需的 SFT 或 RL 训练数据。"
  },
  {
    "id": 183,
    "start": 1803.028,
    "end": 1812.465,
    "en": "Experiment 9-4 intermediate difficulty, two stars: : Evolving a Requirement-Clarification and Spec-Confirmation Skill from User Feedback",
    "zh": "实验 9-4 中等难度，两颗星：从用户反馈中演进需求澄清和规格确认技能"
  },
  {
    "id": 184,
    "start": 1812.415,
    "end": 1823.965,
    "en": "Objective: Test whether the Agent can find a better clarification strategy between \"requirement deviation\" and \"interaction interruption,\" and write verified improvements back into the Skill.",
    "zh": "目标：测试智能体是否能在“需求偏差”和“交互中断”之间找到更好的澄清策略，并将验证后的改进写入技能中。"
  },
  {
    "id": 185,
    "start": 1823.965,
    "end": 1841.378,
    "en": "Description: Prepare one set of low-risk, low-ambiguity tasks and one set of high-risk tasks involving architecture, permissions, data, or public interfaces, and compare three procedures: execute directly, ask then execute, and ask then confirm a Spec.",
    "zh": "描述：准备一组低风险、低歧义的任务和一组涉及架构、权限、数据或公共接口的高风险任务，并比较三种流程：直接执行、先询问再执行、先询问再确认规格。"
  },
  {
    "id": 186,
    "start": 1841.378,
    "end": 1857.228,
    "en": "Record user answers, Spec edits, delivery outcomes, and rework feedback, and let the Agent generate a Skill update proposal; the proposal must pass regression on held-out tasks, an interruption-cost check, and validation of the high-risk veto gate.",
    "zh": "记录用户回答、规格编辑、交付结果和返工反馈，并让智能体生成技能更新提案；该提案必须通过保留任务的回归测试、中断成本检查以及高风险否决门的验证。"
  },
  {
    "id": 187,
    "start": 1857.228,
    "end": 1871.028,
    "en": "What it shows: Continual evolution is not appending every complaint to the Prompt, but identifying the scope from outcomes and feedback, proposing a minimal instruction update, and letting an independent evaluator decide whether to release it.",
    "zh": "它所展示的内容：持续演进并非将所有投诉附加到提示中，而是从结果和反馈中识别范围，提出最小指令更新，并让独立评估者决定是否发布。"
  },
  {
    "id": 188,
    "start": 1871.028,
    "end": 1873.99,
    "en": "Encoding Experience as Programs.",
    "zh": "将经验编码为程序。"
  },
  {
    "id": 189,
    "start": 1873.99,
    "end": 1884.415,
    "en": "When experience describes operations that are stable, repetitive, and verifiable, it is inefficient to have the model reread documentation and reason through them each time.",
    "zh": "当经验描述的是稳定、重复且可验证的操作时，让模型每次重新阅读文档并进行推理是低效的。"
  },
  {
    "id": 190,
    "start": 1884.415,
    "end": 1894.965,
    "en": "A more appropriate approach is to compile the experience into workflows, tools, or Harness code, turning a one-time exploration into a repeatedly executable program.",
    "zh": "更合适的方法是将经验编译为工作流、工具或 Harness 代码，将一次性的探索转化为可重复执行的程序。"
  },
  {
    "id": 191,
    "start": 1894.965,
    "end": 1909.415,
    "en": "Chapter 5 explained how Coding Agents read and write files, run tests, and generate systems; this section focuses not on general code generation, but on how an Agent modifies future versions of itself based on its own trajectories.",
    "zh": "第 5 章解释了编码智能体如何读写文件、运行测试和生成系统；本节的重点不是一般的代码生成，而是智能体如何根据自身的轨迹修改其未来版本。"
  },
  {
    "id": 192,
    "start": 1909.415,
    "end": 1913.778,
    "en": "The modifiable objects extend far beyond new tools.",
    "zh": "可修改的对象远不止新工具。"
  },
  {
    "id": 193,
    "start": 1913.778,
    "end": 1922.965,
    "en": "At the operation layer, browser trajectories can be compiled into parameterized workflows, or adapters can be generated for changing APIs.",
    "zh": "在操作层，浏览器轨迹可以编译为参数化的工作流，或者为变化的 API 生成适配器。"
  },
  {
    "id": 194,
    "start": 1922.965,
    "end": 1931.203,
    "en": "At the control layer, tool routing, retries, circuit breakers, and context compression strategies can be modified.",
    "zh": "在控制层，可以修改工具路由、重试、断路器和上下文压缩策略。"
  },
  {
    "id": 195,
    "start": 1931.203,
    "end": 1939.915,
    "en": "At the validation layer, parameter checks, state validators, and regression tests can be added in response to production failures.",
    "zh": "在验证层，可以根据生产失败添加参数检查、状态验证器和回归测试。"
  },
  {
    "id": 196,
    "start": 1939.915,
    "end": 1947.69,
    "en": "At the architecture layer, a Reviewer Agent can be added or the information flow between planning and execution can be changed.",
    "zh": "在架构层，可以添加一个评审智能体，或者改变规划与执行之间的信息流。"
  },
  {
    "id": 197,
    "start": 1947.69,
    "end": 1952.278,
    "en": "Browser workflows illustrate the value of programmatic experience.",
    "zh": "浏览器工作流程展示了程序化体验的价值。"
  },
  {
    "id": 198,
    "start": 1952.278,
    "end": 1955.928,
    "en": "They are analogous to recording a spreadsheet macro.",
    "zh": "它们类似于录制电子表格宏。"
  },
  {
    "id": 199,
    "start": 1955.928,
    "end": 1966.865,
    "en": "The first time an email is sent, a multimodal Agent uses an observe–reason–act loop to find the compose, recipient, subject, body, and send controls.",
    "zh": "第一次发送邮件时，多模态智能体会使用观察-推理-行动循环来找到撰写、收件人、主题、正文和发送控件。"
  },
  {
    "id": 200,
    "start": 1966.865,
    "end": 1978.103,
    "en": "For another email, the process is unchanged; only the recipient and content differ, so there is no need to call the model again to rediscover the entire path from pixels and the DOM.",
    "zh": "对于另一封邮件，流程保持不变；只有收件人和内容不同，因此无需再次调用模型来重新发现从像素和DOM到整个路径的全过程。"
  },
  {
    "id": 201,
    "start": 1978.103,
    "end": 1986.84,
    "en": "The system compiles the first exploratory trajectory into a small program containing parameters, state checks, and version information.",
    "zh": "系统会将首次探索性轨迹编译成一个包含参数、状态检查和版本信息的小型程序。"
  },
  {
    "id": 202,
    "start": 1986.84,
    "end": 1994.153,
    "en": "In the browser setting, the knowledge-distillation process shown in Figure 9-4 becomes a more concrete lifecycle:",
    "zh": "在浏览器环境中，如图9-4所示的知识蒸馏过程变成更具体的生命周期："
  },
  {
    "id": 203,
    "start": 1994.153,
    "end": 2010.828,
    "en": "Capture the trajectory: Record navigation, clicks, text entry, and drop-down selection, together with action parameters, the current URL, and element-locator evidence such as XPath, CSS, id, role, aria-label, and data-testid.",
    "zh": "记录轨迹：记录导航、点击、文本输入和下拉选择，以及动作参数、当前URL和元素定位证据，例如XPath、CSS、id、role、aria-label和data-testid。"
  },
  {
    "id": 204,
    "start": 2010.828,
    "end": 2016.928,
    "en": "Locator evidence only helps find an element again; it does not prove that the task was completed.",
    "zh": "定位证据仅有助于重新找到元素；它并不能证明任务已完成。"
  },
  {
    "id": 205,
    "start": 2016.928,
    "end": 2032.678,
    "en": "Parameterize: Replace literals from the first run with template variables—for example, convert test@example.com, the subject, and the body into {recipient}, {subject}, and {content}—while leaving stable actions unchanged.",
    "zh": "参数化：将首次运行中的字面量替换为模板变量——例如，将test@example.com、主题和正文转换为{recipient}、{subject}和{content}——同时保持稳定的动作不变。"
  },
  {
    "id": 206,
    "start": 2032.678,
    "end": 2042.29,
    "en": "The teaching implementation uses regular expressions and template replacement; a production system may use structured task input or a constrained extraction model.",
    "zh": "教学实现使用正则表达式和模板替换；生产系统可能使用结构化的任务输入或受限的提取模型。"
  },
  {
    "id": 207,
    "start": 2042.452,
    "end": 2053.252,
    "en": "Define state checks: Add checks before and after actions, such as “the send button is visible” and “the URL after navigation belongs to the target site.",
    "zh": "定义状态检查：在操作前后添加检查，例如“发送按钮可见”和“导航后的URL属于目标站点”。"
  },
  {
    "id": 208,
    "start": 2053.202,
    "end": 2063.189,
    "en": "Add a final-state check for the workflow as a whole, such as “the sent-mail list contains the new message” or “the test page’s state value changed as expected.",
    "zh": "为整个工作流程添加最终状态检查，例如“已发送邮件列表包含新消息”或“测试页面的状态值按预期更改”。"
  },
  {
    "id": 209,
    "start": 2063.189,
    "end": 2071.914,
    "en": "Successfully executing an action is not the same as successfully completing the task; the final check must read the real page or backend state.",
    "zh": "成功执行一个操作并不等同于成功完成任务；最终检查必须读取实际页面或后端状态。"
  },
  {
    "id": 210,
    "start": 2071.914,
    "end": 2076.752,
    "en": "Validate the candidate: A first success produces only a candidate.",
    "zh": "验证候选方案：首次成功仅产生一个候选方案。"
  },
  {
    "id": 211,
    "start": 2076.752,
    "end": 2084.027,
    "en": "The system must reset the sandbox account or test site to an independent initial state and replay the candidate in full.",
    "zh": "系统必须将沙盒账户或测试站点重置为独立的初始状态，并完整地重新执行候选流程。"
  },
  {
    "id": 212,
    "start": 2084.027,
    "end": 2090.889,
    "en": "It can be published as validated only if all before-action, after-action, and final-state checks pass.",
    "zh": "只有在所有事前检查、事后检查和最终状态检查都通过的情况下，才能将其发布为已验证的流程。"
  },
  {
    "id": 213,
    "start": 2090.889,
    "end": 2103.327,
    "en": "If a side-effecting task such as sending mail or placing an order has no safe reset callback, the workflow may be retained as an auditable candidate but must not be validated by repeating the action in a production account.",
    "zh": "如果一个具有副作用的任务（如发送邮件或下单）没有安全的重置回调，该工作流可能被保留为可审计的候选流程，但不得在生产账户中重复执行该操作以进行验证。"
  },
  {
    "id": 214,
    "start": 2103.327,
    "end": 2115.477,
    "en": "Match and replay: When a new task arrives, search the formal capability library for a workflow by intent and keywords, extract the current parameters, and execute it directly with Playwright.",
    "zh": "匹配并重放：当新任务到达时，根据意图和关键词在正式能力库中搜索工作流，提取当前参数，并直接使用Playwright执行。"
  },
  {
    "id": 215,
    "start": 2115.477,
    "end": 2123.964,
    "en": "Replay requires no step-by-step LLM calls, but it must still wait for elements to become available and complete every state check.",
    "zh": "重放不需要逐步调用LLM，但仍需等待元素可用并完成每个状态检查。"
  },
  {
    "id": 216,
    "start": 2123.964,
    "end": 2142.452,
    "en": "Invalidate and relearn: If the target element cannot be found, a state check fails, the API Schema changes, or the final state is wrong, stop subsequent actions immediately, move the old version from the searchable library to the invalid area, and fall back to the full Agent for fresh exploration.",
    "zh": "失效并重新学习：如果目标元素无法找到，状态检查失败，API Schema发生变化，或最终状态错误，应立即停止后续操作，将旧版本从可搜索库移动到无效区域，并回退到完整的Agent进行新的探索。"
  },
  {
    "id": 217,
    "start": 2142.452,
    "end": 2148.377,
    "en": "Retain the old file for audit and comparison, but never let it continue to match silently.",
    "zh": "保留旧文件用于审计和比较，但绝不能让它静默地继续匹配。"
  },
  {
    "id": 218,
    "start": 2148.377,
    "end": 2167.952,
    "en": "For an email workflow, the compiled result is not merely “click these buttons in order,” but a small program parameterized by recipient, subject, and body: it checks the compose window and fields before sending, checks the success indicator afterward, and finally confirms that the corresponding message appears in the sent list.",
    "zh": "对于电子邮件工作流，编译结果不仅仅是“按顺序点击这些按钮”，而是一个由收件人、主题和正文参数化的小型程序：它会在发送前检查撰写窗口和字段，发送后检查成功指示器，并最终确认相应的邮件出现在已发送列表中。"
  },
  {
    "id": 219,
    "start": 2167.952,
    "end": 2178.952,
    "en": "In PreAct, such programs delivered an 8.5–13× end-to-end speedup on repeated tasks and required no step-by-step language-model calls during replay.",
    "zh": "在PreAct中，这样的程序在重复任务上实现了8.5至13倍的端到端速度提升，并且在重放过程中无需逐步调用语言模型。"
  },
  {
    "id": 220,
    "start": 2178.952,
    "end": 2187.664,
    "en": "More importantly, process memory needs before-action validation, after-action validation, and independent pre-storage validation.",
    "zh": "更重要的是，流程记忆需要事前验证、事后验证和独立的预存储验证。"
  },
  {
    "id": 221,
    "start": 2187.664,
    "end": 2199.014,
    "en": "Otherwise, the system can produce a dangerous illusion: replay coverage is 100 percent and every button was clicked, yet one field was empty and the task was never actually completed.",
    "zh": "否则，系统可能会产生一种危险的错觉：重放覆盖率为100%，每个按钮都被点击了，但有一个字段为空，任务实际上从未完成。"
  },
  {
    "id": 222,
    "start": 2199.014,
    "end": 2207.052,
    "en": "Experiment 9-5 advanced difficulty, three stars: : Generating Verifiable Workflows from Browser Trajectories",
    "zh": "实验9-5增加难度，三颗星：从浏览器轨迹生成可验证的工作流"
  },
  {
    "id": 223,
    "start": 2207.052,
    "end": 2220.089,
    "en": "Objective: Determine whether a web Agent can turn one expensive exploration into a reusable workflow and reject an incorrect replay when the page changes, rather than reporting success merely because every action ran.",
    "zh": "目标：确定网络智能体是否能将一次昂贵的探索转化为可重复使用的工作流，并在页面变化时拒绝错误的重放，而不是仅仅因为每个操作都运行了就报告成功。"
  },
  {
    "id": 224,
    "start": 2220.089,
    "end": 2231.677,
    "en": "Four-stage scenario: In the first stage, run “send a message with the subject ‘Test Email’ to test@example.com” on a test mail site or simulated messaging page.",
    "zh": "四阶段场景：在第一阶段，在测试邮件网站或模拟消息页面上运行“向test@example.com发送主题为‘测试邮件’的消息”。"
  },
  {
    "id": 225,
    "start": 2231.677,
    "end": 2239.327,
    "en": "The full Agent explores, while a wrapper captures actions, parameters, and page states and produces a candidate.",
    "zh": "完整Agent进行探索，而包装器捕获操作、参数和页面状态并生成候选流程。"
  },
  {
    "id": 226,
    "start": 2239.327,
    "end": 2253.877,
    "en": "In the second stage, call validation_reset to restore the sandbox and independently replay the entire workflow; the candidate enters the formal capability library only if all before-action, after-action, and final-state checks pass.",
    "zh": "在第二阶段，调用validation_reset来恢复沙箱并独立地重新执行整个工作流；只有在所有前置动作检查、后置动作检查和最终状态检查都通过的情况下，候选工作流才会进入正式能力库。"
  },
  {
    "id": 227,
    "start": 2253.877,
    "end": 2260.627,
    "en": "In the third stage, perform the same kind of task with a different recipient, subject, and body.",
    "zh": "在第三阶段，使用不同的收件人、主题和正文执行相同类型的任务。"
  },
  {
    "id": 228,
    "start": 2260.627,
    "end": 2269.677,
    "en": "The system should match the validated workflow, fill the new parameters, and replay it through Playwright without entering the step-by-step LLM loop.",
    "zh": "系统应匹配已验证的工作流，填充新参数，并通过Playwright重新执行，而无需进入逐步的LLM循环。"
  },
  {
    "id": 229,
    "start": 2269.677,
    "end": 2281.139,
    "en": "In the fourth stage, change a button locator, page text, or final state and verify that the old workflow immediately becomes invalid and returns fallback_required=True.",
    "zh": "在第四阶段，更改按钮定位器、页面文本或最终状态，并验证旧工作流是否立即失效并返回fallback_required=True。"
  },
  {
    "id": 230,
    "start": 2281.3,
    "end": 2290.05,
    "en": "Control design: A simplified baseline records only whether clicks, text entry, and other actions complete without exceptions.",
    "zh": "控制设计：一个简化的基线仅记录点击、文本输入和其他操作是否无异常完成。"
  },
  {
    "id": 231,
    "start": 2290.0,
    "end": 2298.087,
    "en": "The experimental condition also validates the page before each action, the page after each action, and the final task state.",
    "zh": "实验条件还会在每次操作前、操作后以及最终任务状态验证页面。"
  },
  {
    "id": 232,
    "start": 2298.087,
    "end": 2302.35,
    "en": "Both conditions use the same trajectories and page changes.",
    "zh": "两种条件都使用相同的轨迹和页面变化。"
  },
  {
    "id": 233,
    "start": 2302.35,
    "end": 2311.787,
    "en": "Compare their false-positive rates on cases such as “the send button was clicked while a field was empty” and “Save was clicked but the data was not persisted.",
    "zh": "比较它们在“字段为空时点击了发送按钮”和“点击了保存但数据未保存”等案例中的误报率。"
  },
  {
    "id": 234,
    "start": 2311.787,
    "end": 2326.575,
    "en": "Metrics and acceptance: Record end-to-end time for initial exploration and replay, number of LLM calls, success rate, false-success rate, workflow match rate, page-change detection rate, and number of fallbacks to relearning.",
    "zh": "指标与验收标准：记录初始探索和重放的端到端时间、LLM调用次数、成功率、误成功率、工作流匹配率、页面变化检测率以及回退到再学习的次数。"
  },
  {
    "id": 235,
    "start": 2326.575,
    "end": 2342.412,
    "en": "Without a reset callback, a workflow must remain a candidate; a version that fails validation must not be retrievable; parameterized replay must not reuse the first run’s recipient or content; and after a page change, dangerous subsequent actions must stop.",
    "zh": "如果没有重置回调，工作流必须保持为候选；失败验证的版本不能被检索；参数化重放不能重复使用首次运行的收件人或内容；页面变化后，危险的后续操作必须停止。"
  },
  {
    "id": 236,
    "start": 2342.412,
    "end": 2346.875,
    "en": "Acceleration matters only if all these conditions are satisfied.",
    "zh": "只有满足所有这些条件，加速才有意义。"
  },
  {
    "id": 237,
    "start": 2346.875,
    "end": 2357.637,
    "en": "The accompanying implementation is available at browser-use-rpa, which provides both a deterministic state-machine demonstration and an execution path that invokes a real browser Agent.",
    "zh": "配套实现可在browser-use-rpa中找到，它提供了确定性状态机演示以及调用真实浏览器智能体的执行路径。"
  },
  {
    "id": 238,
    "start": 2357.637,
    "end": 2363.787,
    "en": "An Agent modifying its own code does not mean that the running process directly overwrites itself.",
    "zh": "智能体修改自身代码并不意味着运行过程直接覆盖自身。"
  },
  {
    "id": 239,
    "start": 2363.787,
    "end": 2382.7,
    "en": "A production system should create a candidate branch from the current stable version, have a Coding Agent generate a minimal patch, and then sequentially run static checks, unit tests, security scans, failure-trajectory replay, and regression tests on old tasks before producing a new version eligible for canary deployment.",
    "zh": "生产系统应从当前稳定版本创建候选分支，由编码智能体生成最小补丁，然后依次对旧任务运行静态检查、单元测试、安全扫描、故障轨迹重放和回归测试，之后生成可进行金丝雀部署的新版本。"
  },
  {
    "id": 240,
    "start": 2382.7,
    "end": 2401.05,
    "en": "This turns “self-modification” into an auditable software release process and defines the boundary between Chapters 9 and 5: Chapter 5 provides the capability to modify systems, while this chapter provides a method for self-modification that is triggered by experience and constrained by a validation loop.",
    "zh": "这将‘自我修改’转化为可审计的软件发布流程，并定义了第9章与第5章之间的边界：第5章提供修改系统的能力，而本章提供由经验触发且受验证循环约束的自我修改方法。"
  },
  {
    "id": 241,
    "start": 2401.05,
    "end": 2407.287,
    "en": "Git worktrees and pull requests provide a concrete example of this software development process.",
    "zh": "Git worktrees 和 pull requests 为这一软件开发过程提供了一个具体的例子。"
  },
  {
    "id": 242,
    "start": 2407.287,
    "end": 2422.625,
    "en": "A Skill should guide the Agent to create a separate worktree for the task, confirm the requirements and Spec, complete implementation and testing, make meaningful commits, and explain the background, approach, test results, and remaining risks in a pull request.",
    "zh": "一个 Skill 应指导智能体为该任务创建一个单独的 worktree，确认需求和规格，完成实现和测试，做出有意义的提交，并在 pull request 中解释背景、方法、测试结果和剩余风险。"
  },
  {
    "id": 243,
    "start": 2422.625,
    "end": 2426.087,
    "en": "The Harness does not make these judgments for the model.",
    "zh": "Harness 不会就这些判断做出决定。"
  },
  {
    "id": 244,
    "start": 2426.087,
    "end": 2434.387,
    "en": "Before the Agent finishes, however, it can check whether the Agent committed directly to main or skipped the worktree or pull request.",
    "zh": "然而，在智能体完成之前，它可以检查智能体是否直接提交到 main 分支，或者跳过了 worktree 或 pull request。"
  },
  {
    "id": 245,
    "start": 2434.387,
    "end": 2441.05,
    "en": "If the workflow violates these boundaries, the Harness blocks completion and requires the Agent to correct it.",
    "zh": "如果工作流违反了这些边界，Harness 会阻止完成，并要求智能体进行修正。"
  },
  {
    "id": 246,
    "start": 2441.05,
    "end": 2445.2,
    "en": "Making the patch small is not enough for reliable attribution.",
    "zh": "仅使补丁小型化不足以确保可靠的归属。"
  },
  {
    "id": 247,
    "start": 2445.2,
    "end": 2461.575,
    "en": "Each modification request should also be a falsifiable change contract that records the failure evidence, inferred root cause, responsible Harness component, candidate change, behavior expected to improve, existing behavior that may regress, and tests for both.",
    "zh": "每个修改请求也应是一个可验证的变更合同，记录失败证据、推断的根本原因、负责的 Harness 组件、候选变更、预期改进的行为、可能回归的现有行为以及两者的测试。"
  },
  {
    "id": 248,
    "start": 2461.575,
    "end": 2484.362,
    "en": "Agentic Harness Engineering describes this in terms of component-, experience-, and decision-level observability: every editable component has a file-level representation; large collections of trajectories are distilled into evidence that can be inspected at increasing levels of detail; and every edit declares an impact prediction before execution, which the next round of results then tests.",
    "zh": "智能体 Harness 工程从组件级、体验级和决策级可观测性来描述这一点：每个可编辑组件都有一个文件级表示；大量的轨迹被提炼成可以逐级详细检查的证据；并且每次编辑在执行前都会声明一个影响预测，下一阶段的结果则对其进行测试。"
  },
  {
    "id": 249,
    "start": 2484.362,
    "end": 2490.762,
    "en": "A higher score can then be connected to a specific mechanism rather than remaining an uninterpretable trial.",
    "zh": "然后，更高的分数可以与特定机制相关联，而不是保持不可解释的试验状态。"
  },
  {
    "id": 250,
    "start": 2490.762,
    "end": 2494.975,
    "en": "The candidate generator should not receive only failed cases.",
    "zh": "候选生成器不应只接收失败案例。"
  },
  {
    "id": 251,
    "start": 2494.975,
    "end": 2502.362,
    "en": "Self-Harness also supplies successful behavior that must be preserved and records of previously rejected modifications.",
    "zh": "Self-Harness 还提供必须保留的成功行为和之前被拒绝的修改记录。"
  },
  {
    "id": 252,
    "start": 2502.362,
    "end": 2510.425,
    "en": "The former tells the Agent what the repair must not break; the latter prevents it from resubmitting the same failed idea in different words.",
    "zh": "前者告诉智能体修复不能破坏什么；后者防止它以不同措辞重新提交相同的失败想法。"
  },
  {
    "id": 253,
    "start": 2510.425,
    "end": 2522.362,
    "en": "Failure evidence, success constraints, and prior attempts together define a bounded candidate space and are more useful than indiscriminately loading all source code and raw logs into the modifying Agent.",
    "zh": "失败证据、成功约束和先前尝试共同定义了一个有限的候选空间，比随意加载所有源代码和原始日志到修改智能体更有用。"
  },
  {
    "id": 254,
    "start": 2522.524,
    "end": 2525.836,
    "en": "Tool creation follows the same protocol.",
    "zh": "工具创建遵循相同的协议。"
  },
  {
    "id": 255,
    "start": 2525.786,
    "end": 2537.761,
    "en": "Alita presents a case in which an Agent must identify the number mentioned immediately after dinosaurs first appear in a YouTube 360 VR video narrated by the voice actor for Gollum in The Lord of the Rings.",
    "zh": "Alita 提出一个案例，其中智能体必须识别在《指环王》中咕噜配音演员旁白的 YouTube 360 VR 视频中，恐龙首次出现后立即提到的数字。"
  },
  {
    "id": 256,
    "start": 2537.761,
    "end": 2552.649,
    "en": "After recognizing that it lacks subtitle-reading capability, the Agent finds and tests youtube-transcript-api, wraps it as a new subtitle tool, and extracts the answer 100000000 from the transcript.",
    "zh": "在意识到自身缺乏字幕阅读能力后，智能体查找并测试了youtube-transcript-api，将其封装为新的字幕工具，并从字幕中提取出答案100000000。"
  },
  {
    "id": 257,
    "start": 2552.649,
    "end": 2561.174,
    "en": "A new tool enters the capability library only after safety scanning, functional tests, and successful reuse on later tasks.",
    "zh": "只有在完成安全扫描、功能测试并在后续任务中成功复用后，新工具才会进入能力库。"
  },
  {
    "id": 258,
    "start": 2561.174,
    "end": 2575.486,
    "en": "Chapter 4’s proactive tool discovery asks which existing tool fits; Chapter 5 asks how to write a tool; this chapter asks what operational evidence should trigger creation and how a new tool becomes a validated long-term capability.",
    "zh": "第四章的主动工具发现问的是哪个现有工具适合；第五章问的是如何编写工具；本章问的是哪些操作证据应触发创建，以及新工具如何成为经过验证的长期能力。"
  },
  {
    "id": 259,
    "start": 2575.486,
    "end": 2583.586,
    "en": "Experiment 9-6 advanced difficulty, three stars: : Triggering Agent Self-Modification from Failure Trajectories",
    "zh": "实验9-6难度升级，三星：从失败轨迹中触发智能体自我修改"
  },
  {
    "id": 260,
    "start": 2583.586,
    "end": 2600.686,
    "en": "Objective: Given multiple trajectories in which tool calls are repeatedly retried after returning errors marked retryable=false, determine whether the system can locate the root cause in retry and circuit-breaker code and produce a candidate fix without breaking recovery from transient failures.",
    "zh": "目标：给定多个在返回错误标记为retryable=false后反复重试的轨迹，判断系统是否能在重试和断路器代码中定位根本原因，并在不破坏瞬时故障恢复的情况下生成候选修复方案。"
  },
  {
    "id": 261,
    "start": 2600.686,
    "end": 2606.674,
    "en": "Procedure: The diagnosis module first aggregates the same fault across different tasks.",
    "zh": "流程：诊断模块首先汇总不同任务中的相同故障。"
  },
  {
    "id": 262,
    "start": 2606.674,
    "end": 2616.099,
    "en": "It creates a modification request only after the cross-trajectory support threshold is met and targets retry_policy.py in the stable version.",
    "zh": "只有在跨轨迹支持阈值满足后，它才会创建修改请求，并针对稳定版本中的retry_policy.py进行修改。"
  },
  {
    "id": 263,
    "start": 2616.099,
    "end": 2626.461,
    "en": "The candidate generator reads the failure diagnosis, the transient-failure recovery behavior that must be preserved, previously rejected changes, and the stable source.",
    "zh": "候选生成器会读取故障诊断、必须保留的瞬时故障恢复行为、之前被拒绝的更改以及稳定源代码。"
  },
  {
    "id": 264,
    "start": 2626.461,
    "end": 2634.874,
    "en": "Before emitting a minimal code diff, it predicts that calls after non-retryable errors should fall while transient-timeout recovery should not.",
    "zh": "在发出最小代码差异之前，它会预测在非可重试错误后的调用应停止，而瞬时超时恢复不应停止。"
  },
  {
    "id": 265,
    "start": 2634.874,
    "end": 2642.949,
    "en": "Whether the generator is deterministic or a real LLM Coding Agent, it may write only to an isolated candidate directory.",
    "zh": "无论生成器是确定性的还是真正的LLM编码代理，它可能只写入隔离的候选目录。"
  },
  {
    "id": 266,
    "start": 2642.949,
    "end": 2658.124,
    "en": "The validation Harness then compiles the candidate, replays the original failure trajectories, verifies that a non-retryable error stops immediately and opens the circuit breaker, and retests that transient timeouts still retry according to the original threshold.",
    "zh": "验证Harness随后编译候选代码，重放原始故障轨迹，验证非可重试错误是否立即停止并打开断路器，并重新测试瞬时超时是否仍根据原始阈值重试。"
  },
  {
    "id": 267,
    "start": 2658.124,
    "end": 2673.024,
    "en": "Diagnostic control and metrics: Treat “add one sentence to the Prompt telling the Agent not to repeat the call” as a conceptual example of choosing the wrong modification layer, demonstrating why a deterministically enforceable retry constraint belongs in code.",
    "zh": "诊断控制和指标：将“在提示中添加一句话告诉智能体不要重复调用”视为选择错误修改层的概念性示例，说明为什么可确定性执行的重试约束应位于代码中。"
  },
  {
    "id": 268,
    "start": 2673.024,
    "end": 2679.699,
    "en": "The executable experiment compares deterministic and LLM patch generators under the same release gate.",
    "zh": "可执行实验在相同的发布门禁下比较确定性和LLM补丁生成器。"
  },
  {
    "id": 269,
    "start": 2679.699,
    "end": 2690.136,
    "en": "Record the number of calls after non-retryable errors, transient-error recovery rate, regressions on old tasks, patch size, and candidate acceptance rate.",
    "zh": "记录非可重试错误后的调用次数、瞬时错误恢复率、旧任务上的回归、补丁大小和候选接受率。"
  },
  {
    "id": 270,
    "start": 2690.136,
    "end": 2696.499,
    "en": "Acceptance criteria: Passing every check produces only release_to_canary.",
    "zh": "接受标准：通过所有检查只会产生release_to_canary。"
  },
  {
    "id": 271,
    "start": 2696.499,
    "end": 2703.524,
    "en": "Failure of any static check, failure replay, or old-task regression returns reject_candidate.",
    "zh": "任何静态检查失败、失败重放或旧任务回归都会返回拒绝的候选版本。"
  },
  {
    "id": 272,
    "start": 2703.524,
    "end": 2719.899,
    "en": "release_manifest.json must record the failure cluster, source trajectories, inferred root cause, target component and file, code diff, expected repair, possible regressions, check results, candidate version, and rollback version.",
    "zh": "release_manifest.json必须记录失败集群、源轨迹、推断的根本原因、目标组件和文件、代码差异、预期修复、可能的回归、检查结果、候选版本和回滚版本。"
  },
  {
    "id": 273,
    "start": 2719.899,
    "end": 2725.074,
    "en": "Rejected candidates must retain their failure reasons for the next generation round.",
    "zh": "被拒绝的候选版本必须保留其失败原因，以供下一轮使用。"
  },
  {
    "id": 274,
    "start": 2725.074,
    "end": 2733.611,
    "en": "The patch-generating Agent must not modify stable code, validators, audit logs, or the gate that approves its own release.",
    "zh": "补丁生成智能体不得修改稳定代码、验证器、审计日志或批准其自身发布的门禁。"
  },
  {
    "id": 275,
    "start": 2733.611,
    "end": 2738.261,
    "en": "The accompanying implementation is available at self-modifying-agent.",
    "zh": "配套实现可在self-modifying-agent中找到。"
  },
  {
    "id": 276,
    "start": 2738.261,
    "end": 2746.649,
    "en": "It supports either a deterministic candidate generator or a real LLM Coding Agent, with both paths sharing the same release gate.",
    "zh": "它支持确定性候选生成器或真实的LLM编码智能体，两种路径共享相同的发布门禁。"
  },
  {
    "id": 277,
    "start": 2746.804,
    "end": 2751.991,
    "en": "Experiment 9-7 applies the same protocol to the verification layer.",
    "zh": "实验9-7将相同协议应用于验证层。"
  },
  {
    "id": 278,
    "start": 2751.941,
    "end": 2762.916,
    "en": "Only repeated user corrections, downvotes, and audits pointing to an unconfirmed high-risk operation create a change request; the candidate is written to an isolated directory.",
    "zh": "只有重复的用户修正、差评和指向未确认高风险操作的审计才会创建变更请求；候选版本会被写入隔离目录。"
  },
  {
    "id": 279,
    "start": 2762.916,
    "end": 2772.116,
    "en": "Classify dangerous deletions and git push --force from tool names and arguments, and bind a one-time confirmation token to the concrete operation.",
    "zh": "从工具名称和参数中分类危险删除和git push --force，并将一次性确认令牌绑定到具体操作。"
  },
  {
    "id": 280,
    "start": 2772.116,
    "end": 2782.329,
    "en": "A candidate must pass AST/static checks, boundary replay (including forged and reused tokens), and holdout replay before canary release.",
    "zh": "候选版本必须通过AST/静态检查、边界重放（包括伪造和重用的令牌）以及托管重放，才能进行金丝雀发布。"
  },
  {
    "id": 281,
    "start": 2782.329,
    "end": 2790.866,
    "en": "Experiment 9-7 intermediate difficulty, two stars: : A User-Feedback-Triggered Confirmation Gate for High-Risk Operations",
    "zh": "实验9-7中等难度，两星：针对高风险操作的用户反馈触发确认门禁"
  },
  {
    "id": 282,
    "start": 2790.866,
    "end": 2801.504,
    "en": "Objective: Test whether the system can discover gaps in safety workflows from user corrections and post-hoc audits, and generate confirmation gates for high-risk tool calls.",
    "zh": "目标：测试系统是否能从用户修正和事后审计中发现安全工作流中的漏洞，并为高风险工具调用生成确认门禁。"
  },
  {
    "id": 283,
    "start": 2801.504,
    "end": 2810.216,
    "en": "Description: Evaluate proposed confirmation gates against both a dangerous-operation boundary set and a normal-operation preservation set.",
    "zh": "描述：将提出的确认门禁与危险操作边界集和正常操作保留集进行评估。"
  },
  {
    "id": 284,
    "start": 2810.216,
    "end": 2821.504,
    "en": "The proposal must block unconfirmed high-risk invocations without impeding normal tasks; the Agent generating the proposal has no authority to modify safety tests or approval rules.",
    "zh": "该方案必须阻止未经确认的高风险调用，同时不影响正常任务；生成该方案的智能体无权修改安全测试或审批规则。"
  },
  {
    "id": 285,
    "start": 2821.504,
    "end": 2827.991,
    "en": "What the Experiment Shows: Safety evolution cannot rely on self-certification by the modifier.",
    "zh": "实验结果：安全演进不能依赖修改者的自我认证。"
  },
  {
    "id": 286,
    "start": 2827.991,
    "end": 2839.829,
    "en": "That an update proposal generated by a real model may be rejected by the safety gate demonstrates that independent verifiers and immutable roots of trust are far more important than a \"plausible-looking proposal.",
    "zh": "一个由真实模型生成的更新方案可能被安全门拒绝，这表明独立验证者和不可变的信任根比‘看似合理’的方案要重要得多。"
  },
  {
    "id": 287,
    "start": 2839.829,
    "end": 2845.016,
    "en": "Case: DeepSeek Harness—Self-Evolution Where Everything Is a Plugin.",
    "zh": "案例：DeepSeek Harness——一切皆为插件的自我进化。"
  },
  {
    "id": 288,
    "start": 2845.016,
    "end": 2852.791,
    "en": "Chapter 1's comparison table classifies DeepSeek Harness (dsh) as an “Agent self-evolution framework”.",
    "zh": "第1章的对比表将DeepSeek Harness（dsh）归类为“智能体自我进化框架”。"
  },
  {
    "id": 289,
    "start": 2852.791,
    "end": 2865.191,
    "en": "Its foundation paper, Cordis, observes that conventional composition is static: function calls, module imports, and class inheritance are fixed at compile time and do not change at runtime.",
    "zh": "其基础论文Cordis指出，传统的组合方式是静态的：函数调用、模块导入和类继承在编译时就已固定，不会在运行时改变。"
  },
  {
    "id": 290,
    "start": 2865.191,
    "end": 2874.341,
    "en": "Plugin systems and self-evolving Harnesses instead require dynamic composition, with components loaded, unloaded, and reconfigured while running.",
    "zh": "插件系统和自我进化的Harness则需要动态组合，组件在运行时可以加载、卸载和重新配置。"
  },
  {
    "id": 291,
    "start": 2874.341,
    "end": 2879.904,
    "en": "Every Agent self-modification is, in essence, a dynamic composition.",
    "zh": "每个智能体的自我修改本质上都是动态组合。"
  },
  {
    "id": 292,
    "start": 2879.904,
    "end": 2884.779,
    "en": "The paper separates dynamic composition into two orthogonal dimensions.",
    "zh": "这篇论文将动态组合分为两个正交的维度。"
  },
  {
    "id": 293,
    "start": 2884.779,
    "end": 2898.341,
    "en": "Temporal composability asks whether all changes a component made to the shared environment can be undone completely and safely when it is removed; the runtime must track every resource allocation, event registration, and state change.",
    "zh": "时间可组合性询问当组件被移除时，它对共享环境的所有更改是否能被完全且安全地撤销；运行时必须跟踪每一次资源分配、事件注册和状态变化。"
  },
  {
    "id": 294,
    "start": 2898.341,
    "end": 2909.791,
    "en": "Spatial composability asks whether components can declare, discover, and resolve dependencies in a structured, verifiable way and coordinate their lifecycles when those dependencies change.",
    "zh": "空间可组合性询问组件是否能以结构化、可验证的方式声明、发现和解决依赖关系，并在依赖关系变化时协调它们的生命周期。"
  },
  {
    "id": 295,
    "start": 2909.791,
    "end": 2914.479,
    "en": "The former concerns what changed; the latter, what is depended on.",
    "zh": "前者关注发生了什么变化；后者关注依赖的是什么。"
  },
  {
    "id": 296,
    "start": 2914.479,
    "end": 2918.554,
    "en": "A self-evolving Harness is the sharpest version of this problem.",
    "zh": "一个自我进化的Harness是这一问题的最尖锐版本。"
  },
  {
    "id": 297,
    "start": 2918.554,
    "end": 2926.904,
    "en": "The side effects to undo are long-lived and stateful, while dependencies can appear, disappear, or change identity at runtime.",
    "zh": "需要撤销的副作用是长期存在且具有状态的，而依赖关系可能在运行时出现、消失或改变身份。"
  },
  {
    "id": 298,
    "start": 2926.904,
    "end": 2937.354,
    "en": "Without temporal composability, every self-modification requires a full restart, discarding accumulated in-process state and repeatedly interrupting active tasks.",
    "zh": "如果没有时间可组合性，每次自我修改都需要完全重启，丢弃正在处理的状态，并反复中断当前任务。"
  },
  {
    "id": 299,
    "start": 2937.354,
    "end": 2948.266,
    "en": "Without spatial composability, each module must improvise its own detection of dependency changes, and a simple code replacement can silently break dependents or introduce a cycle.",
    "zh": "如果没有空间可组合性，每个模块都必须自行检测依赖关系的变化，简单的代码替换可能会静默地破坏依赖项或引入循环。"
  },
  {
    "id": 300,
    "start": 2948.266,
    "end": 2953.604,
    "en": "Cordis lifts two concepts normally confined to compile time into the runtime.",
    "zh": "Cordis将两种通常局限于编译时的概念带入了运行时。"
  },
  {
    "id": 301,
    "start": 2953.604,
    "end": 2968.104,
    "en": "Effect systems, originally used to reason about how computation changes its environment, become reversible effects: every context transformation carries an explicit inverse tracked by the runtime, so removing a component restores the context.",
    "zh": "效果系统最初用于推理计算如何改变其环境，现在变为可逆效果：每个上下文转换都带有由运行时显式跟踪的逆操作，因此移除一个组件会恢复上下文。"
  },
  {
    "id": 302,
    "start": 2968.104,
    "end": 2984.716,
    "en": "Coeffect systems, originally used to reason about what a computation requires from its environment, become reactive coeffects: a component declares its dependencies as a specification, and every context change tells it whether to activate, deactivate, or remain unaffected.",
    "zh": "协效果系统最初用于推理计算需要其环境提供什么，现在变为响应式协效果：一个组件将其依赖项声明为规范，每次上下文变化都会告知它是否要激活、停用或保持不变。"
  },
  {
    "id": 303,
    "start": 2984.716,
    "end": 2993.341,
    "en": "A dynamic-composition calculus extends this property from one component to interleaved component systems—composability must be transitive.",
    "zh": "动态组合演算将这一特性从一个组件扩展到交错的组件系统——可组合性必须是传递的。"
  },
  {
    "id": 304,
    "start": 2993.5,
    "end": 3000.987,
    "en": "The ceiling of self-evolution depends not on how well the model writes code, but on how composable its host system is.",
    "zh": "自我演化的上限不在于模型编写代码的能力有多好，而在于其宿主系统的可组合性有多强。"
  },
  {
    "id": 305,
    "start": 3000.937,
    "end": 3012.125,
    "en": "That is why dsh makes model adapters, tool registries, session logs, and even the Agent's main loop plugins: there is no privileged kernel maintainable only by humans.",
    "zh": "这就是dsh创建模型适配器、工具注册表、会话日志甚至智能体主循环插件的原因：没有只有人类才能维护的特权内核。"
  },
  {
    "id": 306,
    "start": 3012.125,
    "end": 3018.962,
    "en": "Composability answers whether a component can be installed and removed safely, not whether it should be installed.",
    "zh": "可组合性回答的是组件能否被安全地安装和移除，而不是是否应该被安装。"
  },
  {
    "id": 307,
    "start": 3018.962,
    "end": 3024.062,
    "en": "Model-written plugins live only in process memory and disappear on restart.",
    "zh": "模型编写的插件仅存在于进程内存中，并在重启后消失。"
  },
  {
    "id": 308,
    "start": 3024.062,
    "end": 3032.45,
    "en": "They cannot be promoted automatically to official plugins; persistence requires the slower worktree-plus-Pull-Request route described earlier.",
    "zh": "它们不能自动提升为官方插件；持久化需要之前描述的较慢的工作树加拉取请求流程。"
  },
  {
    "id": 309,
    "start": 3032.45,
    "end": 3035.2,
    "en": "Evolution also has a cost.",
    "zh": "演化也有成本。"
  },
  {
    "id": 310,
    "start": 3035.2,
    "end": 3040.25,
    "en": "A runtime plugin changes the tools and Prompt fragments visible to the model.",
    "zh": "运行时插件会改变模型可见的工具和提示片段。"
  },
  {
    "id": 311,
    "start": 3040.25,
    "end": 3047.5,
    "en": "Once the request prefix changes, the KV Cache discussed in Chapter 2 is invalid from that point onward.",
    "zh": "一旦请求前缀发生变化，第2章讨论的KV缓存从此刻起就无效了。"
  },
  {
    "id": 312,
    "start": 3047.5,
    "end": 3054.312,
    "en": "A dsh plugin's documentation therefore needs to describe its impact on context and KV Cache.",
    "zh": "因此，dsh插件的文档需要描述其对上下文和KV缓存的影响。"
  },
  {
    "id": 313,
    "start": 3054.312,
    "end": 3057.337,
    "en": "Encoding Experience in Parameters.",
    "zh": "将经验编码到参数中。"
  },
  {
    "id": 314,
    "start": 3057.337,
    "end": 3068.4,
    "en": "Knowledge, instructions, and programs all rest on one premise: the target capability can be adequately represented outside the model through text, rules, or code.",
    "zh": "知识、指令和程序都基于一个前提：目标能力可以通过文本、规则或代码在模型之外充分表示。"
  },
  {
    "id": 315,
    "start": 3068.4,
    "end": 3081.612,
    "en": "Yet capabilities such as medical-image understanding, natural speech prosody, removing a formulaic “AI feel” from text, and long-horizon planning are difficult to compress into a few rules or workflows.",
    "zh": "然而，诸如医学图像理解、自然语音语调、去除文本中的公式化‘AI感’以及长周期规划等能力很难压缩成几条规则或工作流。"
  },
  {
    "id": 316,
    "start": 3081.612,
    "end": 3087.15,
    "en": "Such capabilities must be learned through post-training and encoded in model parameters.",
    "zh": "这些能力必须通过后训练学习，并编码在模型参数中。"
  },
  {
    "id": 317,
    "start": 3087.15,
    "end": 3102.7,
    "en": "Deciding where curly quotation marks should be used falls between these approaches: code can parse document syntax boundaries, a Skill can express context and exceptions, and post-training can internalize the ability to recognize the relevant patterns across tasks.",
    "zh": "决定何时使用花括号属于这些方法之间的范畴：代码可以解析文档语法边界，技能可以表达上下文和例外情况，后训练可以内化跨任务识别相关模式的能力。"
  },
  {
    "id": 318,
    "start": 3102.7,
    "end": 3109.675,
    "en": "Whether a capability should be parameterized is not determined solely by whether the task is stable over the long term.",
    "zh": "是否应将某种能力参数化，并不完全取决于任务是否长期稳定。"
  },
  {
    "id": 319,
    "start": 3109.675,
    "end": 3121.162,
    "en": "Domain shifts caused by new imaging equipment may still require LoRA or continual fine-tuning; rapidly changing linguistic styles can also be accommodated through periodic preference training.",
    "zh": "由新成像设备引起的领域变化可能仍需要LoRA或持续微调；快速变化的语言风格也可以通过定期偏好训练来适应。"
  },
  {
    "id": 320,
    "start": 3121.162,
    "end": 3129.025,
    "en": "Stability affects update frequency and cost, but the representational nature of the capability determines its primary medium.",
    "zh": "稳定性影响更新频率和成本，但能力的表征性质决定了其主要媒介。"
  },
  {
    "id": 321,
    "start": 3129.025,
    "end": 3139.237,
    "en": "Conversely, a long-stable rule for approving transfers should not rely solely on parametric memory; server-side code must still provide deterministic guarantees.",
    "zh": "相反，一个长期稳定的转账批准规则不应仅依赖参数化记忆；服务器端代码仍必须提供确定性保证。"
  },
  {
    "id": 322,
    "start": 3139.237,
    "end": 3147.0,
    "en": "Chapter 8 provided a complete discussion of SFT, distillation, and RL, so this section does not repeat it.",
    "zh": "第8章完整讨论了SFT、蒸馏和RL，因此本节不再重复。"
  },
  {
    "id": 323,
    "start": 3147.0,
    "end": 3163.487,
    "en": "For continual evolution, the key is to transform evaluated production trajectories into training data: high-quality demonstrations can be used for SFT, explicit preferences can form paired data, and interactions with reliable environmental rewards can be used for RL.",
    "zh": "对于持续演进，关键是将评估后的生产轨迹转化为训练数据：高质量的示范可用于SFT，显式的偏好可形成配对数据，与可靠环境奖励的交互可用于RL。"
  },
  {
    "id": 324,
    "start": 3163.487,
    "end": 3172.037,
    "en": "Before training, private information must still be removed, erroneous trajectories filtered out, and an independent regression set retained.",
    "zh": "在训练之前，仍需移除私有信息，过滤错误的轨迹，并保留独立的回归集。"
  },
  {
    "id": 325,
    "start": 3172.037,
    "end": 3178.325,
    "en": "After training, the system must check whether general capabilities or safety alignment have been forgotten.",
    "zh": "训练之后，系统必须检查是否遗忘了通用能力或安全对齐。"
  },
  {
    "id": 326,
    "start": 3178.325,
    "end": 3182.362,
    "en": "From Updating Artifacts to Updating the “Update Method”.",
    "zh": "从更新制品到更新“更新方法”。"
  },
  {
    "id": 327,
    "start": 3182.362,
    "end": 3196.362,
    "en": "The preceding four methods ask where experience is written, but continual evolution has another, orthogonal axis: is the system optimizing the contents of an artifact, or the method used to produce, manage, and validate artifacts?",
    "zh": "前面的四种方法关注经验写入的位置，但持续演进还有另一个正交的维度：系统是在优化制品的内容，还是用于生成、管理和验证制品的方法？"
  },
  {
    "id": 328,
    "start": 3196.362,
    "end": 3207.35,
    "en": "Along this axis, the optimization target can expand from an individual rule or memory → structured context → workflow → Harness code → optimizer code that generates candidate solutions.",
    "zh": "在这条轴线上，优化目标可以从单个规则或记忆→结构化上下文→工作流程→Harness代码→生成候选解决方案的优化器代码逐步扩展。"
  },
  {
    "id": 329,
    "start": 3207.35,
    "end": 3214.987,
    "en": "These are five levels at which the system can search for improvements, rather than five additional ways to store experience.",
    "zh": "这是系统可以寻找改进的五个层级，而不是五种额外的存储经验的方式。"
  },
  {
    "id": 330,
    "start": 3214.987,
    "end": 3220.712,
    "en": "Knowledge, Prompts, Skills, and programs may appear at several of these levels.",
    "zh": "知识、提示、技能和程序可能出现在这些层级中的多个位置。"
  },
  {
    "id": 331,
    "start": 3220.876,
    "end": 3231.913,
    "en": "The innermost level changes only artifact content—for example, adding a local rule to a system Prompt after a failed trajectory or adding an exception to an experience document.",
    "zh": "最内层的更改仅影响工件内容——例如，在一次轨迹失败后向系统提示中添加本地规则，或在经验文档中添加例外情况。"
  },
  {
    "id": 332,
    "start": 3231.863,
    "end": 3238.813,
    "en": "Such changes have a small blast radius and are easier to attribute and roll back, so they should be the default.",
    "zh": "这种更改的影响范围较小，更容易归因和回滚，因此应作为默认方式。"
  },
  {
    "id": 333,
    "start": 3238.813,
    "end": 3254.688,
    "en": "Repeatedly asking a model to rewrite an entire Prompt or memory, however, introduces another form of degradation: successive attempts at brevity can gradually erase rare but important details, and interacting constraints can be collapsed into an overgeneral principle.",
    "zh": "然而，反复要求模型重写整个提示或记忆，会引入另一种退化形式：连续尝试简洁性可能会逐渐删除罕见但重要的细节，相互作用的约束可能被简化为一个过度概括的原则。"
  },
  {
    "id": 334,
    "start": 3254.688,
    "end": 3262.363,
    "en": "Agentic Context Engineering (ACE) maintains context as a collection of entries with stable identifiers.",
    "zh": "智能体上下文工程（ACE）将上下文视为具有稳定标识符的条目集合。"
  },
  {
    "id": 335,
    "start": 3262.363,
    "end": 3273.826,
    "en": "Generation, reflection, and curation modules propose incremental updates, which deterministic logic merges and deduplicates instead of rewriting an ever-shorter text block each round.",
    "zh": "生成、反思和整理模块提出增量更新，确定性逻辑会合并并去重这些更新，而不是每轮都重写一个越来越短的文本块。"
  },
  {
    "id": 336,
    "start": 3273.826,
    "end": 3280.501,
    "en": "It is a concrete research example of this chapter's earlier principles of minimal diffs and retained provenance.",
    "zh": "这是本章早期最小差异和保留来源原则的一个具体研究实例。"
  },
  {
    "id": 337,
    "start": 3280.501,
    "end": 3288.126,
    "en": "At the next level, the optimization target is no longer merely what context contains but how context is constructed.",
    "zh": "在下一层级，优化目标不再仅仅是上下文包含什么，而是上下文是如何构建的。"
  },
  {
    "id": 338,
    "start": 3288.126,
    "end": 3309.376,
    "en": "Meta Context Engineering (MCE) separates the two into inner and outer loops: the inner loop optimizes the context artifact for the current task under a given management method, while the outer loop uses results from multiple executions and validations to modify the context operations themselves—search, selection, filtering, and formatting.",
    "zh": "元上下文工程（MCE）将两者分为内环和外环：内环在给定管理方法下针对当前任务优化上下文工件，而外环则通过多次执行和验证的结果来修改上下文操作本身——搜索、选择、过滤和格式化。"
  },
  {
    "id": 339,
    "start": 3309.376,
    "end": 3311.563,
    "en": "The distinction matters.",
    "zh": "这种区别很重要。"
  },
  {
    "id": 340,
    "start": 3311.563,
    "end": 3322.713,
    "en": "Editing a retrieval rule changes a content-management mechanism; comparing several retrieval and curation mechanisms and retaining the one with better transfer is learning how to manage context.",
    "zh": "编辑检索规则会改变内容管理机制；比较几种检索和整理机制并保留效果更好的一种，就是学习如何管理上下文。"
  },
  {
    "id": 341,
    "start": 3322.713,
    "end": 3327.088,
    "en": "The same idea extends to workflows and the entire Harness.",
    "zh": "同样的理念也适用于工作流和整个Harness。"
  },
  {
    "id": 342,
    "start": 3327.088,
    "end": 3337.363,
    "en": "AFlow represents workflows composed of multiple LLM calls as code graphs and searches over combinations of nodes and control flow using execution feedback.",
    "zh": "AFlow将由多个LLM调用组成的工作流表示为代码图，并通过执行反馈搜索节点和控制流的组合。"
  },
  {
    "id": 343,
    "start": 3337.363,
    "end": 3348.751,
    "en": "Meta-Harness has a Coding Agent inspect candidate Harness source, scores, and trajectories to search for improvements to the code governing how information is stored, retrieved, and presented.",
    "zh": "元Harness有一个编码代理检查候选Harness源代码、评分和轨迹，以搜索改进信息存储、检索和展示方式的代码。"
  },
  {
    "id": 344,
    "start": 3348.751,
    "end": 3354.476,
    "en": "Chapter 5 established code as a general language for expressing Agent system structure.",
    "zh": "第5章确立了代码作为表达智能体系统结构的通用语言。"
  },
  {
    "id": 345,
    "start": 3354.476,
    "end": 3363.801,
    "en": "The additional point here is that code, together with its evaluation history, can itself become the object of continual search rather than a one-time output.",
    "zh": "此处的附加观点是，代码及其评估历史本身可以成为持续搜索的对象，而不仅仅是一次性输出。"
  },
  {
    "id": 346,
    "start": 3363.801,
    "end": 3368.213,
    "en": "This kind of outer-loop search soon runs into the cost of feedback.",
    "zh": "这种外循环搜索很快就会遇到反馈的成本。"
  },
  {
    "id": 347,
    "start": 3368.213,
    "end": 3381.988,
    "en": "An exploration policy decides which candidate to continue from, when to open a new branch, how many Workers to run in parallel, and when to stop; whether it is any good often shows only after a long generate–evaluate chain.",
    "zh": "一种探索策略决定从哪个候选方案继续、何时开启新分支、同时运行多少个工作者以及何时停止；它是否有效通常只有在经过长时间的生成-评估链后才能显现。"
  },
  {
    "id": 348,
    "start": 3381.988,
    "end": 3391.938,
    "en": "If every candidate policy had to call the Agent and the evaluator all over again, optimizing the exploration policy itself could cost more than finishing the task.",
    "zh": "如果每个候选策略都需要重新调用智能体和评估器，优化探索策略本身的成本可能超过完成任务本身。"
  },
  {
    "id": 349,
    "start": 3391.938,
    "end": 3403.701,
    "en": "Dream-RSI proposes a mechanism that differs from “summarizing history”: it preserves a completed discovery process as a discovery tree and then treats that tree as an empirical replay simulator.",
    "zh": "Dream-RSI 提出了一种与“总结历史”不同的机制：它将已完成的发现过程保存为一个发现树，然后将该树视为一个经验回放模拟器。"
  },
  {
    "id": 350,
    "start": 3403.701,
    "end": 3416.526,
    "en": "The root node represents the initial workspace; each child node stores the workspace snapshot, candidate artifact, evaluation diagnostics, and score obtained by continuing from some historical state.",
    "zh": "根节点代表初始工作空间；每个子节点存储工作空间快照、候选成果、评估诊断信息以及从某个历史状态继续得到的分数。"
  },
  {
    "id": 351,
    "start": 3416.526,
    "end": 3426.901,
    "en": "A candidate policy uses the same interface as online exploration to choose, step by step, which leaf node to expand or whether to open a new branch from the root.",
    "zh": "一种候选策略使用与在线探索相同的接口，逐步选择要扩展的叶节点，或是否从根节点开启新分支。"
  },
  {
    "id": 352,
    "start": 3426.901,
    "end": 3435.288,
    "en": "The replayer only reveals results already recorded in the corresponding node; it never needs to rerun the underlying Agent or evaluator.",
    "zh": "重放器只揭示对应节点中已记录的结果；它永远不需要重新运行底层的智能体或评估器。"
  },
  {
    "id": 353,
    "start": 3435.288,
    "end": 3446.601,
    "en": "What makes replay valid is that the online and offline phases share the same decision interface, and the policy is only shown, step by step, the subtree expanded so far.",
    "zh": "使重放有效的关键在于在线和离线阶段共享相同的决策接口，并且策略是逐步展示到目前为止扩展的子树。"
  },
  {
    "id": 354,
    "start": 3446.601,
    "end": 3456.363,
    "en": "Online, a selected node really invokes the underlying Agent and evaluator; offline, the same choice returns only the successor recorded in history.",
    "zh": "在线时，选定的节点会真正调用底层的智能体和评估器；离线时，同样的选择只会返回历史中记录的后续结果。"
  },
  {
    "id": 355,
    "start": 3456.363,
    "end": 3468.488,
    "en": "A candidate policy can therefore compare different branches, orderings, parallel batches, and stopping points, yet cannot peek at future results that were not yet visible when the online decision was made.",
    "zh": "因此，候选策略可以比较不同分支、顺序、并行批次和停止点，但无法窥探在线决策时尚未可见的未来结果。"
  },
  {
    "id": 356,
    "start": 3468.652,
    "end": 3491.064,
    "en": "This forms a recursive loop with three phases: online exploration uses the current policy to generate new discovery trees; building the replay world adds those trees to the pool of historical simulators; offline dreaming lets a policy-development Agent modify the exploration-policy code and compare versions by candidate quality, execution cost, and parallel efficiency.",
    "zh": "这形成了一个包含三个阶段的递归循环：在线探索使用当前策略生成新的发现树；构建回放世界将这些树添加到历史模拟器池中；离线梦境让一个策略开发智能体修改探索策略代码，并通过候选质量、执行成本和并行效率来比较不同版本。"
  },
  {
    "id": 357,
    "start": 3491.014,
    "end": 3499.164,
    "en": "The selected policy goes back online, produces new trees, and widens the range of experience the next round can replay.",
    "zh": "所选策略会重新回到在线模式，生成新的树，并扩大下一轮可回放的经验范围。"
  },
  {
    "id": 358,
    "start": 3499.164,
    "end": 3509.864,
    "en": "Because the candidate set keeps the current policy, a new version is at least no worse on the average replay score over existing history, but that guarantee holds only within that history.",
    "zh": "因为候选集保留了当前策略，新版本至少在现有历史的平均回放分数上不会更差，但这一保证仅限于该历史范围内。"
  },
  {
    "id": 359,
    "start": 3509.864,
    "end": 3515.702,
    "en": "This “replay” differs from the two ways of reusing history described earlier in the chapter.",
    "zh": "这种“回放”与本章之前描述的两种重用历史的方式有所不同。"
  },
  {
    "id": 360,
    "start": 3515.702,
    "end": 3533.302,
    "en": "Trajectory summarization compresses experience into knowledge or Prompts and changes what the Agent knows; browser workflow replay lets a program repeat a validated path in a new task and changes how the Agent repeats an execution; discovery-tree replay compares how the Agent organizes exploration.",
    "zh": "轨迹摘要将经验压缩为知识或提示，并改变智能体所知道的内容；浏览器工作流回放让程序在新任务中重复验证过的路径，并改变智能体重复执行的方式；发现树回放则比较智能体如何组织探索。"
  },
  {
    "id": 361,
    "start": 3533.302,
    "end": 3546.977,
    "en": "Nor is it a full world model that can predict the consequences of arbitrary actions: it can only recombine branches actually taken in history, and it cannot guarantee that a policy scoring higher on old trees transfers to new tasks.",
    "zh": "它也不是一个可以预测任意动作后果的完整世界模型：它只能重新组合历史上实际采取的分支，无法保证在旧树上得分更高的策略能转移到新任务上。"
  },
  {
    "id": 362,
    "start": 3546.977,
    "end": 3560.114,
    "en": "In this chapter's classification, history replay is not a fifth medium for updates alongside knowledge, Prompts, programs, and parameters; it is a new mechanism for producing and validating update proposals.",
    "zh": "在本章的分类中，历史重放并不是与知识、提示、程序和参数并列的第五种更新媒介；它是一种生成和验证更新提案的新机制。"
  },
  {
    "id": 363,
    "start": 3560.114,
    "end": 3568.264,
    "en": "What Dream-RSI ultimately modifies is exploration-policy code, so the product still belongs to program/Harness.",
    "zh": "Dream-RSI最终修改的是探索策略代码，因此产品仍然属于程序/Harness范畴。"
  },
  {
    "id": 364,
    "start": 3568.264,
    "end": 3583.427,
    "en": "Its novelty is to turn history, which previously served as context or training data, into an offline evaluation environment that can be interacted with repeatedly, pushing self-evolution up to the meta-policy level of “how to allocate exploration compute.",
    "zh": "它的创新之处在于将历史从以前作为上下文或训练数据的角色，转变为可以反复交互的离线评估环境，将自我进化提升到“如何分配探索计算”的元策略层面。"
  },
  {
    "id": 365,
    "start": 3583.588,
    "end": 3590.913,
    "en": "Experiment 9-8 advanced difficulty, three stars: : Give Hermes This Book: Can It Upgrade Itself?",
    "zh": "实验9-8难度升级，三星：赫尔墨斯能否通过这本书自我升级？"
  },
  {
    "id": 366,
    "start": 3590.863,
    "end": 3597.388,
    "en": "Objective: Test whether an Agent can turn external knowledge into an update to its own capabilities.",
    "zh": "目标：测试智能体是否能将外部知识转化为自身能力的更新。"
  },
  {
    "id": 367,
    "start": 3597.388,
    "end": 3602.088,
    "en": "The experiment supplies no problem statement and no feature checklist.",
    "zh": "该实验不提供问题陈述和功能清单。"
  },
  {
    "id": 368,
    "start": 3602.088,
    "end": 3612.063,
    "en": "Hermes receives all ten chapters and its own source, then must understand the principles, inspect its implementation, and choose a worthwhile improvement itself.",
    "zh": "赫尔墨斯接收全部十章内容及其源代码，然后必须理解原理、检查实现，并自行选择有价值的改进。"
  },
  {
    "id": 369,
    "start": 3612.063,
    "end": 3622.163,
    "en": "Design: The book and source are readable context, while the stable version, independent Reviewer, and acceptance tests remain outside Hermes' editable scope.",
    "zh": "设计：书和源代码是可读的上下文，而稳定版本、独立评审者和验收测试则位于赫尔墨斯可编辑范围之外。"
  },
  {
    "id": 370,
    "start": 3622.163,
    "end": 3626.388,
    "en": "Hermes must complete read → compare → choose → change → verify.",
    "zh": "赫尔墨斯必须完成阅读→比较→选择→更改→验证的流程。"
  },
  {
    "id": 371,
    "start": 3626.388,
    "end": 3634.725,
    "en": "If a candidate is rejected, the review becomes input to the next learning round; Hermes cannot bypass the gate and declare success.",
    "zh": "如果候选方案被拒绝，评审结果将成为下一轮学习的输入；赫尔墨斯不能绕过门槛并宣称成功。"
  },
  {
    "id": 372,
    "start": 3634.725,
    "end": 3643.688,
    "en": "Real run: After reading the book, Hermes independently noticed that its saved trajectories lacked structured evidence that later learning could use directly.",
    "zh": "真实运行：在阅读完书后，赫尔墨斯独立注意到其保存的轨迹缺乏后续学习可以直接使用的结构化证据。"
  },
  {
    "id": 373,
    "start": 3643.688,
    "end": 3651.25,
    "en": "It chose to turn execution outcomes into conservative learning signals, then edited its own source and added tests.",
    "zh": "它决定将执行结果转化为保守的学习信号，然后编辑自己的源代码并添加测试。"
  },
  {
    "id": 374,
    "start": 3651.25,
    "end": 3659.275,
    "en": "The first three independent reviews found mismatches with real data formats, persistence paths, and counting semantics.",
    "zh": "前三次独立评审发现了与真实数据格式、持久化路径和计数语义的不匹配。"
  },
  {
    "id": 375,
    "start": 3659.275,
    "end": 3666.138,
    "en": "Each finding went back to the original Hermes session for another correction; the fourth review accepted the candidate.",
    "zh": "每次发现都返回到原始赫尔墨斯会话进行修正；第四次评审接受了该候选方案。"
  },
  {
    "id": 376,
    "start": 3666.138,
    "end": 3670.863,
    "en": "Rejection was not the end of the experiment, but part of the improvement loop.",
    "zh": "拒绝并不是实验的终点，而是改进循环的一部分。"
  },
  {
    "id": 377,
    "start": 3670.863,
    "end": 3681.8,
    "en": "Claim boundary: This run shows that an Agent can extract principles from long-form knowledge, map them onto its own code, and complete a self-update under external verification.",
    "zh": "声明边界：这次运行表明，智能体可以从长文本知识中提取原则，并将其映射到自己的代码中，在外部验证下完成自我更新。"
  },
  {
    "id": 378,
    "start": 3681.8,
    "end": 3689.375,
    "en": "It does not show that the update already improves downstream task success; that requires a separate ablation experiment.",
    "zh": "它并不表明更新已经提高了下游任务的成功率；这需要单独的消融实验。"
  },
  {
    "id": 379,
    "start": 3689.375,
    "end": 3692.8,
    "en": "Reader Grace contributed the experiment idea.",
    "zh": "读者Grace提出了这个实验的想法。"
  },
  {
    "id": 380,
    "start": 3692.8,
    "end": 3697.563,
    "en": "Building a Continual-Evolution Closed Loop for Long-Term Operation.",
    "zh": "为长期运行构建一个持续演化的闭环。"
  },
  {
    "id": 381,
    "start": 3697.563,
    "end": 3705.775,
    "en": "The four update methods become continual evolution rather than one-off optimization only when incorporated into the same autonomous loop.",
    "zh": "只有当这四种更新方法被纳入同一个自主循环时，它们才能成为持续演化，而不是一次性优化。"
  },
  {
    "id": 382,
    "start": 3705.775,
    "end": 3728.9,
    "en": "Figure 9-5 shows a more robust dual-loop architecture for production systems: the online execution loop only completes tasks and records evidence, without directly rewriting the production Agent; the offline evolution loop aggregates trajectories, diagnoses root causes, generates candidate modifications, and releases new versions only after they pass validation gates.",
    "zh": "图9-5展示了一个更稳健的双环架构，适用于生产系统：在线执行循环仅完成任务并记录证据，不直接重写生产环境中的智能体；离线演化循环聚合轨迹，诊断根本原因，生成候选修改，并在通过验证关卡后发布新版本。"
  },
  {
    "id": 383,
    "start": 3728.9,
    "end": 3734.688,
    "en": "The two loops are connected through versioned experience repositories and evaluation sets.",
    "zh": "这两个循环通过版本化经验仓库和评估集连接。"
  },
  {
    "id": 384,
    "start": 3734.688,
    "end": 3741.2,
    "en": "As illustrated in Figure 9-5 Dual loops for online execution and offline evolution.",
    "zh": "如图9-5所示，双环用于在线执行和离线演化。"
  },
  {
    "id": 385,
    "start": 3741.2,
    "end": 3745.975,
    "en": "Voyager demonstrates a relatively complete continual-evolution loop.",
    "zh": "Voyager展示了相对完整的持续演化循环。"
  },
  {
    "id": 386,
    "start": 3745.975,
    "end": 3761.063,
    "en": "In Minecraft, it selects new goals based on its current capabilities, iteratively refines programs using environmental feedback, stores successfully validated code in a skill library, and then combines existing skills to solve harder tasks.",
    "zh": "在Minecraft中，它根据当前能力选择新目标，利用环境反馈迭代优化程序，将经过验证的代码存储到技能库中，然后结合现有技能解决更困难的任务。"
  },
  {
    "id": 387,
    "start": 3761.063,
    "end": 3782.563,
    "en": "An automatic curriculum, executable skills, and environmental validation are all indispensable: with a skill library but no curriculum, the Agent does not know what to learn next; with self-reflection but no environmental validation, the skill library accumulates errors; with exploration but no persistence, every task must still begin from scratch.",
    "zh": "自动课程、可执行技能和环境验证都是不可或缺的：如果没有课程，智能体不知道下一步该学什么；如果没有环境验证，技能库会积累错误；如果没有探索但没有持久性，每个任务仍需从头开始。"
  },
  {
    "id": 388,
    "start": 3782.563,
    "end": 3791.263,
    "en": "Although the knowledge, Prompt, tools, and parameters of real-world Agents are more complex, the basic learning process is similar.",
    "zh": "尽管现实世界智能体的知识、提示、工具和参数更为复杂，但基本的学习过程是相似的。"
  },
  {
    "id": 389,
    "start": 3791.263,
    "end": 3796.013,
    "en": "More specifically, Voyager has three interlocking mechanisms.",
    "zh": "更具体地说，Voyager有三个相互关联的机制。"
  },
  {
    "id": 390,
    "start": 3796.013,
    "end": 3805.925,
    "en": "The automatic curriculum generator proposes a suitably challenging next goal from current inventory, environment, and acquired skills, preventing random wandering.",
    "zh": "自动课程生成器从当前库存、环境和已获得的技能中提出一个适当挑战性的下一个目标，防止随机游荡。"
  },
  {
    "id": 391,
    "start": 3805.925,
    "end": 3816.713,
    "en": "The skill library stores successful programs as retrievable, composable code—for example, an advanced gathering skill can invoke basic movement and crafting skills.",
    "zh": "技能库将成功的程序存储为可检索、可组合的代码——例如，高级采集技能可以调用基本的移动和制作技能。"
  },
  {
    "id": 392,
    "start": 3816.713,
    "end": 3828.088,
    "en": "The iterative prompting mechanism returns environmental observations, execution errors, and self-verification results to the next round of code generation until the task actually passes.",
    "zh": "迭代提示机制会将环境观察结果、执行错误和自检结果返回到下一轮代码生成中，直到任务真正完成。"
  },
  {
    "id": 393,
    "start": 3828.244,
    "end": 3834.106,
    "en": "Discovery loop: hypothesis, experiment, evaluation, feedback.",
    "zh": "发现循环：假设、实验、评估、反馈。"
  },
  {
    "id": 394,
    "start": 3834.056,
    "end": 3845.806,
    "en": "Agent self-evolution systems such as Voyager follow a discovery loop made of hypothesis, experiment, evaluation, and feedback—the scientific method refined over centuries.",
    "zh": "如Voyager这样的智能体自我进化系统遵循由假设、实验、评估和反馈组成的发现循环——这是经过几个世纪完善的科学方法。"
  },
  {
    "id": 395,
    "start": 3845.806,
    "end": 3858.506,
    "en": "Discovery Loop, founded recently by Jeff Dean and colleagues, proposes automating that loop: propose an experiment, implement it, evaluate it, take the result, and feed it into the next round.",
    "zh": "最近由Jeff Dean及其同事提出的发现循环，提出了自动化该循环的方法：提出一个实验，实现它，评估它，获取结果，并将其输入下一轮。"
  },
  {
    "id": 396,
    "start": 3858.506,
    "end": 3862.044,
    "en": "This is self-evolving Agents applied to science.",
    "zh": "这就是将自我进化的智能体应用于科学。"
  },
  {
    "id": 397,
    "start": 3862.044,
    "end": 3870.306,
    "en": "To avoid self-confirming stories and self-awarded success, the evolution described in this chapter must follow the scientific method.",
    "zh": "为了避免自我确认的故事和自我奖励的成功，本章描述的进化必须遵循科学方法。"
  },
  {
    "id": 398,
    "start": 3870.306,
    "end": 3876.331,
    "en": "In continual Agent evolution, two capabilities that are often conflated must be separated.",
    "zh": "在持续的智能体进化中，两种常被混淆的能力必须分开。"
  },
  {
    "id": 399,
    "start": 3876.331,
    "end": 3886.956,
    "en": "Harness updating produces valuable persistent changes from trajectories; Harness benefit is the task Agent's ability to find, activate, and correctly use those changes later.",
    "zh": "Harness更新从轨迹中产生有价值的持久变化；Harness收益是任务智能体找到、激活并正确使用这些变化的能力。"
  },
  {
    "id": 400,
    "start": 3886.956,
    "end": 3897.906,
    "en": "A Skill may be perfectly written, yet a weaker task model may fail to load it in the right situation or to follow it over a long horizon, making the final score look as if nothing evolved.",
    "zh": "一个技能可能编写得非常完美，但较弱的任务模型可能无法在正确的情境中加载它，或在长距离内遵循它，从而使最终得分看起来好像没有任何进化。"
  },
  {
    "id": 401,
    "start": 3897.906,
    "end": 3902.219,
    "en": "End-to-end score alone therefore cannot diagnose the updater.",
    "zh": "因此，端到端得分本身无法诊断更新器。"
  },
  {
    "id": 402,
    "start": 3902.219,
    "end": 3908.881,
    "en": "Model-swap experiments by Lin et al. show that these abilities relate differently to base-model capability.",
    "zh": "Lin等人进行的模型交换实验表明，这些能力与基础模型能力的关系不同。"
  },
  {
    "id": 403,
    "start": 3908.881,
    "end": 3913.919,
    "en": "Table 9-3 Layered evaluation metrics for continual evolution",
    "zh": "表9-3 持续进化的分层评估指标"
  },
  {
    "id": 404,
    "start": 3913.919,
    "end": 3925.044,
    "en": "Metric: Candidate-change validity; Question answered: Does the updater propose useful changes?; Primary evidence: Acceptance rate and gain in independent validation.",
    "zh": "指标：候选变化有效性；回答的问题：更新器是否提出有用的变化？；主要证据：接受率和独立验证中的增益。"
  },
  {
    "id": 405,
    "start": 3925.044,
    "end": 3938.431,
    "en": "Metric: Artifact activation rate; Question answered: Does the task Agent load the new Skill, memory, or tool in the right situation?; Primary evidence: Retrieval, routing, and tool-call traces.",
    "zh": "指标：成果激活率；回答的问题：任务智能体是否在正确的情境中加载新技能、记忆或工具？；主要证据：检索、路由和工具调用的追踪。"
  },
  {
    "id": 406,
    "start": 3938.431,
    "end": 3950.994,
    "en": "Metric: Successful adherence rate; Question answered: After activation, does the Agent follow the new rule or process?; Primary evidence: Action sequences and process verifiers.",
    "zh": "指标：成功遵循率；回答的问题：激活后，智能体是否遵循新规则或流程？；主要证据：动作序列和流程验证器。"
  },
  {
    "id": 407,
    "start": 3950.994,
    "end": 3965.319,
    "en": "Metric: Held-out task gain; Question answered: Does the overall system improve on tasks excluded from evolution, and does it generalize?; Primary evidence: Held-out task success rate, quality, and cost.",
    "zh": "指标：保留任务收益；回答的问题：整体系统在未参与进化的任务中是否有所改进，并且是否具有泛化能力？；主要证据：保留任务的成功率、质量和成本。"
  },
  {
    "id": 408,
    "start": 3965.319,
    "end": 3972.356,
    "en": "Evaluation is not an examination performed after learning ends, but an indispensable part of self-evolution.",
    "zh": "评估不是学习结束后的考试，而是自我进化不可或缺的一部分。"
  },
  {
    "id": 409,
    "start": 3972.356,
    "end": 3978.044,
    "en": "Long-term evaluation should observe at least five types of outcomes simultaneously:",
    "zh": "长期评估应同时观察至少五种结果："
  },
  {
    "id": 410,
    "start": 3978.044,
    "end": 3986.381,
    "en": "Regression, namely whether new experience conflicts with other existing experience and whether previously successful cases begin to fail;",
    "zh": "回归，即新经验是否与现有经验冲突，以及之前成功的案例是否开始失败；"
  },
  {
    "id": 411,
    "start": 3986.381,
    "end": 3993.494,
    "en": "Generalization, namely the improvements produced by new experience in scenarios not yet covered by the test set;",
    "zh": "泛化，即新经验在测试集尚未覆盖的场景中产生的改进；"
  },
  {
    "id": 412,
    "start": 3993.494,
    "end": 3998.144,
    "en": "Token efficiency, namely the token cost of completing tasks;",
    "zh": "令牌效率，即完成任务的令牌成本；"
  },
  {
    "id": 413,
    "start": 3998.144,
    "end": 4005.369,
    "en": "Safety, namely whether rules, privacy protections, and refusal boundaries drift during evolution;",
    "zh": "安全性，即在进化过程中规则、隐私保护和拒绝边界是否发生偏移；"
  },
  {
    "id": 414,
    "start": 4005.369,
    "end": 4018.094,
    "en": "Long-term engineering quality, namely whether maintenance complexity, architectural consistency, ownership boundaries, backward compatibility, and future migration and debugging costs deteriorate.",
    "zh": "长期工程品质，即维护复杂性、架构一致性、所有权边界、向后兼容性和未来迁移及调试成本是否恶化。"
  },
  {
    "id": 415,
    "start": 4018.094,
    "end": 4027.406,
    "en": "Fixing only the current failed case while degrading performance on other existing cases or in new domains does not constitute successful continual evolution.",
    "zh": "仅修复当前失败案例，而其他现有案例或新领域性能下降，并不构成成功的持续进化。"
  },
  {
    "id": 416,
    "start": 4027.406,
    "end": 4035.019,
    "en": "Experiment 9-9 advanced difficulty, three stars: : Evaluating Whether an Agent Is Continually Evolving",
    "zh": "实验9-9增加难度，三颗星：评估智能体是否持续进化"
  },
  {
    "id": 417,
    "start": 4035.019,
    "end": 4051.319,
    "en": "Objective: Distinguish among three long-term behaviors—saving one piece of feedback, merely appending forever, and genuinely updating, transferring, and retaining capabilities—so that repeatedly running the same tasks is not mistaken for continual evolution.",
    "zh": "目标：区分三种长期行为——保存一条反馈、永远追加、真正更新、转移和保留能力，以避免重复运行相同任务被误认为是持续进化。"
  },
  {
    "id": 418,
    "start": 4051.319,
    "end": 4060.481,
    "en": "Four-stage task stream: The learning stage presents refund, identity-verification, and baggage-policy tasks that share latent patterns.",
    "zh": "四阶段任务流：学习阶段呈现具有潜在模式的退款、身份验证和行李政策任务。"
  },
  {
    "id": 419,
    "start": 4060.481,
    "end": 4068.344,
    "en": "The transfer stage changes the phrasing, user, and local environment to test whether old experience applies to new tasks.",
    "zh": "迁移阶段改变措辞、用户和本地环境，以测试旧经验是否适用于新任务。"
  },
  {
    "id": 420,
    "start": 4068.344,
    "end": 4077.744,
    "en": "The rule-change stage updates the baggage limit from 20 kg to 23 kg and requires the system to replace or retire obsolete knowledge.",
    "zh": "规则变更阶段将行李限额从20公斤更新为23公斤，并要求系统替换或淘汰过时知识。"
  },
  {
    "id": 421,
    "start": 4077.744,
    "end": 4084.069,
    "en": "The retention stage retests unchanged capabilities and currently valid rules to measure forgetting.",
    "zh": "保留阶段会重新测试未更改的能力和当前有效的规则，以衡量遗忘程度。"
  },
  {
    "id": 422,
    "start": 4084.069,
    "end": 4093.644,
    "en": "External memory may be updated only after each feedback-bearing task ends; the expected action for the current task must never be leaked to the Agent in advance.",
    "zh": "外部记忆只能在每次带有反馈的任务结束后更新；当前任务的预期动作绝不能提前泄露给智能体。"
  },
  {
    "id": 423,
    "start": 4093.804,
    "end": 4097.829,
    "en": "Control groups: static persists no feedback.",
    "zh": "对照组：静态保持无反馈。"
  },
  {
    "id": 424,
    "start": 4097.779,
    "end": 4104.141,
    "en": "append_only remembers the first version of a rule but cannot resolve conflicts or retire it.",
    "zh": "仅记录规则的第一个版本，但无法解决冲突或终止它。"
  },
  {
    "id": 425,
    "start": 4104.141,
    "end": 4108.891,
    "en": "evolving stores versions and replaces old rules with new evidence.",
    "zh": "演进存储版本，并用新证据替换旧规则。"
  },
  {
    "id": 426,
    "start": 4108.891,
    "end": 4114.829,
    "en": "The reference implementation verifies that the evaluation Harness can distinguish these behaviors.",
    "zh": "参考实现验证评估Harness能否区分这些行为。"
  },
  {
    "id": 427,
    "start": 4114.829,
    "end": 4123.854,
    "en": "A real experiment can put an LLM through the same ordered stream of 14 tasks, but outcomes must be computed by a Harness outside the model.",
    "zh": "真实实验可以将大语言模型置于相同的14个任务序列中，但结果必须由模型外的Harness计算。"
  },
  {
    "id": 428,
    "start": 4123.854,
    "end": 4141.954,
    "en": "Metrics and acceptance: Report accuracy and the learning curve for each stage, and separately calculate transfer accuracy, tasks needed to recover after a new rule, old-capability retention, negative-transfer rate, safety-Rubric pass rate, and Token, latency, and storage costs.",
    "zh": "指标与验收标准：报告每个阶段的准确率和学习曲线，并分别计算迁移准确率、在新规则后恢复所需的任务数、旧能力保留率、负迁移率、安全评分通过率以及Token、延迟和存储成本。"
  },
  {
    "id": 429,
    "start": 4141.954,
    "end": 4157.279,
    "en": "For real systems that update Prompts, Skills, or a Harness, also record candidate-change validity, artifact activation rate, and successful adherence rate, so that “the update was correct but never loaded” is not misclassified as a failed update.",
    "zh": "对于更新提示、技能或Harness的真实系统，还需记录候选变更有效性、构件激活率和成功遵循率，以防止‘更新正确但从未加载’被误判为失败的更新。"
  },
  {
    "id": 430,
    "start": 4157.279,
    "end": 4169.741,
    "en": "Even an Agent with high final accuracy does not qualify as continually evolving if it still cites retired rules, succeeds through unsafe shortcuts, or forgets existing capabilities after an update.",
    "zh": "即使智能体最终准确率很高，如果它仍然引用已终止的规则、通过不安全的捷径取得成功，或在更新后遗忘现有能力，也不能算作持续演进。"
  },
  {
    "id": 431,
    "start": 4169.741,
    "end": 4174.304,
    "en": "The accompanying implementation is available at self-evolution-eval.",
    "zh": "配套实现可在self-evolution-eval中找到。"
  },
  {
    "id": 432,
    "start": 4174.304,
    "end": 4180.741,
    "en": "By default, it compares three reference Agents: updatable, append-only, and static.",
    "zh": "默认情况下，它会比较三个参考智能体：可更新的、仅追加的和静态的。"
  },
  {
    "id": 433,
    "start": 4180.741,
    "end": 4186.816,
    "en": "Use --profile llm to have a real LLM undergo the same long-term task stream.",
    "zh": "使用--profile llm让真实的大语言模型经历相同的长期任务流。"
  },
  {
    "id": 434,
    "start": 4186.816,
    "end": 4192.254,
    "en": "The Boundary of a Verifiable Loop: When “Done” Does Not Mean “Progress”.",
    "zh": "可验证循环的边界：当“完成”并不意味着“进展”时。"
  },
  {
    "id": 435,
    "start": 4192.254,
    "end": 4203.604,
    "en": "The preceding loop works most naturally for Coding, tool use, and business-state changes, where tests, environment state, or deterministic rules can provide rapid feedback.",
    "zh": "前面的循环最适合编码、工具使用和业务状态变化，其中测试、环境状态或确定性规则可以提供快速反馈。"
  },
  {
    "id": 436,
    "start": 4203.604,
    "end": 4220.891,
    "en": "Open-ended research, strategic planning, and complex product design are different: feedback is delayed, there may be no unique correct answer, and the objectives that matter most—research taste, long-term value, and maintainability—are difficult to turn into an immediate score.",
    "zh": "开放性研究、战略规划和复杂产品设计存在差异：反馈可能延迟，可能没有唯一正确的答案，而最重要的目标——研究品味、长期价值和可维护性——难以转化为即时分数。"
  },
  {
    "id": 437,
    "start": 4220.891,
    "end": 4228.754,
    "en": "A Harness can then execute the process flawlessly while merely producing things that look like results rather than advancing the real objective.",
    "zh": "Harness 然后可以完美执行流程，仅仅产生看起来像结果的东西，而不是推进真正的目标。"
  },
  {
    "id": 438,
    "start": 4228.754,
    "end": 4232.291,
    "en": "Autonomous research is a useful stress test.",
    "zh": "自主研究是一个有用的压力测试。"
  },
  {
    "id": 439,
    "start": 4232.291,
    "end": 4238.229,
    "en": "Trehan and Chopra documented four end-to-end attempts to turn research ideas into papers.",
    "zh": "Trehan 和 Chopra 记录了四次将研究想法转化为论文的端到端尝试。"
  },
  {
    "id": 440,
    "start": 4238.229,
    "end": 4244.316,
    "en": "Three failed during implementation or evaluation, and only one completed the full pipeline.",
    "zh": "其中三次在实施或评估阶段失败，只有一项完成了完整的流程。"
  },
  {
    "id": 441,
    "start": 4244.316,
    "end": 4247.204,
    "en": "The failures fall into three groups.",
    "zh": "这些失败可以分为三类。"
  },
  {
    "id": 442,
    "start": 4247.204,
    "end": 4259.129,
    "en": "First, implementation drift: once the proposed method becomes difficult, the Agent retreats toward a familiar implementation from its training distribution that no longer tests the original hypothesis.",
    "zh": "第一，实施偏差：一旦所提出的方法变得困难，智能体就会退回到训练数据分布中熟悉的方法，这不再测试原始假设。"
  },
  {
    "id": 443,
    "start": 4259.129,
    "end": 4272.266,
    "en": "Second, epistemic over-optimism: while the signal may still be noise, the system begins explaining it, patching the method, and announcing a finding, while failures and negative results are more easily ignored.",
    "zh": "第二，知识上的过度乐观：尽管信号可能仍是噪声，系统会开始解释它，修补方法，并宣布发现，而失败和负面结果则更容易被忽视。"
  },
  {
    "id": 444,
    "start": 4272.266,
    "end": 4283.929,
    "en": "Third, missing tacit judgment: an Agent may be able to run experiments without knowing which baseline matters, which anomaly deserves investigation, or when a hypothesis should be abandoned.",
    "zh": "第三，缺乏隐性判断：智能体可能能够运行实验，却不知道哪个基准重要，哪个异常值得研究，或者何时应放弃一个假设。"
  },
  {
    "id": 445,
    "start": 4283.929,
    "end": 4291.066,
    "en": "These tasks require changes to the evidence and supervision structure, not merely a model that writes better papers:",
    "zh": "这些任务需要对证据和监督结构进行更改，而不仅仅是让模型写出更好的论文："
  },
  {
    "id": 446,
    "start": 4291.066,
    "end": 4302.316,
    "en": "Separate claims from evidence: Record provenance separately for citations, numbers, methods, and conclusions; the final document is only one rendering of the evidence graph.",
    "zh": "区分主张与证据：为引用、数字、方法和结论分别记录来源；最终文档只是证据图的一种呈现方式。"
  },
  {
    "id": 447,
    "start": 4302.316,
    "end": 4308.154,
    "en": "ScientistOne's Chain-of-Evidence design links each class of claim to auditable sources.",
    "zh": "ScientistOne 的证据链设计将每类主张与可审计的来源联系起来。"
  },
  {
    "id": 448,
    "start": 4308.154,
    "end": 4313.516,
    "en": "This improves traceability but does not by itself make the research question valuable.",
    "zh": "这提高了可追溯性，但本身并不会使研究问题变得有价值。"
  },
  {
    "id": 449,
    "start": 4313.516,
    "end": 4323.654,
    "en": "Retain negative results: Write failed experiments, rejected candidates, and stopping reasons to an immutable log with the same retrieval status as successes.",
    "zh": "保留负面结果：将失败的实验、被拒绝的候选方案和停止原因写入不可变日志，其检索状态与成功结果相同。"
  },
  {
    "id": 450,
    "start": 4323.654,
    "end": 4332.791,
    "en": "Otherwise the evolution module sees only survivors, revisits disproved paths, and learns to interpret ambiguous results as success.",
    "zh": "否则，演化模块只能看到幸存者，重复已被推翻的路径，并学会将模糊的结果解释为成功。"
  },
  {
    "id": 451,
    "start": 4332.791,
    "end": 4339.379,
    "en": "Preserve search diversity: Open-ended search should not retain only the currently highest-scoring chain.",
    "zh": "保持搜索多样性：开放式的搜索不应只保留当前得分最高的链。"
  },
  {
    "id": 452,
    "start": 4339.379,
    "end": 4351.804,
    "en": "The candidate pool should also preserve some lower-scoring but meaningfully different branches by mechanism, code novelty, or hypothesis type, so that every solution does not converge on the same easy-to-score template.",
    "zh": "候选池还应通过机制、代码新颖性或假设类型，保留一些得分较低但有明显差异的分支，以防止所有解决方案都集中在同一个易于评分的模板上。"
  },
  {
    "id": 453,
    "start": 4351.972,
    "end": 4358.309,
    "en": "Move human involvement upward: Human input is not limited to approving dangerous tool calls.",
    "zh": "将人类参与提升到更高层次：人类输入不仅限于批准危险的工具调用。"
  },
  {
    "id": 454,
    "start": 4358.259,
    "end": 4366.872,
    "en": "It also includes defining problems, reviewing evaluation criteria, interpreting anomalous results, and deciding when to stop.",
    "zh": "它还包括定义问题、审查评估标准、解释异常结果以及决定何时停止。"
  },
  {
    "id": 455,
    "start": 4366.872,
    "end": 4376.059,
    "en": "With ambiguous feedback, these high-level judgments are harder to automate—and more valuable—than taking over individual execution steps.",
    "zh": "在反馈模糊的情况下，这些高层次的判断比接管具体的执行步骤更难自动化，也更有价值。"
  },
  {
    "id": 456,
    "start": 4376.059,
    "end": 4379.384,
    "en": "Safety Boundaries for Continual Evolution.",
    "zh": "持续演进的安全边界。"
  },
  {
    "id": 457,
    "start": 4379.384,
    "end": 4385.009,
    "en": "An Agent’s self-evolution capability can turn a single error into a long-term risk.",
    "zh": "智能体的自我进化能力可能将一个错误转化为长期风险。"
  },
  {
    "id": 458,
    "start": 4385.009,
    "end": 4394.059,
    "en": "If Prompt injection in web pages, email, or tool output is summarized as experience, it may take effect repeatedly across sessions.",
    "zh": "如果网页、电子邮件或工具输出中的提示注入被总结为经验，它可能在多个会话中反复生效。"
  },
  {
    "id": 459,
    "start": 4394.059,
    "end": 4402.909,
    "en": "If a malicious package found through automated search is wrapped as a tool, its impact can spread from one sandbox run to every subsequent task.",
    "zh": "如果通过自动搜索发现的恶意包被封装为工具，其影响可能从一次沙盒运行扩散到后续的所有任务。"
  },
  {
    "id": 460,
    "start": 4402.909,
    "end": 4409.572,
    "en": "A defective verifier may also continue approving candidates that appear to improve but actually regress.",
    "zh": "缺陷验证器也可能继续批准那些看似改进但实际上退步的候选方案。"
  },
  {
    "id": 461,
    "start": 4409.572,
    "end": 4419.397,
    "en": "An Agent self-evolution system must therefore ask not only whether a candidate is stronger, but also who may modify what and what evidence justifies the change.",
    "zh": "因此，智能体自我进化系统必须不仅询问候选方案是否更强，还要询问谁可以修改什么，以及什么证据能证明这种修改是合理的。"
  },
  {
    "id": 462,
    "start": 4419.397,
    "end": 4423.472,
    "en": "The first boundary is separating evidence from instructions.",
    "zh": "第一个边界是区分证据与指令。"
  },
  {
    "id": 463,
    "start": 4423.472,
    "end": 4435.984,
    "en": "Raw web pages, tool output, and any LLM summaries of them are untrusted evidence: they must not be executed as instructions or promoted directly into a Skill or similar long-term capability.",
    "zh": "原始网页、工具输出以及任何LLM对它们的摘要都是不可信的证据：它们不能作为指令执行，也不能直接提升为技能或其他长期能力。"
  },
  {
    "id": 464,
    "start": 4435.984,
    "end": 4444.272,
    "en": "LLM summarization is a transformation for readability and processing, not a sanitization step that makes the input harmless.",
    "zh": "LLM摘要是一种用于可读性和处理的转换，而不是使输入无害的净化步骤。"
  },
  {
    "id": 465,
    "start": 4444.272,
    "end": 4456.647,
    "en": "The system should extract claims, source locations, and collection times into a fixed schema while preserving the raw content and provenance; extracted strings must never be executed as instructions.",
    "zh": "系统应将声明、来源位置和收集时间提取到固定模式中，同时保留原始内容和来源；提取的字符串绝不能作为指令执行。"
  },
  {
    "id": 466,
    "start": 4456.647,
    "end": 4462.309,
    "en": "Model-produced confidence is likewise an unverified estimate, not an approval gate.",
    "zh": "模型生成的置信度同样是一种未经验证的估计，而不是审批的门槛。"
  },
  {
    "id": 467,
    "start": 4462.309,
    "end": 4470.997,
    "en": "Candidates must also pass deterministic schema, allowlist, and provenance checks before being submitted as version-controlled pull requests.",
    "zh": "候选内容在作为版本控制的拉取请求提交之前，还必须通过确定性模式、白名单和来源检查。"
  },
  {
    "id": 468,
    "start": 4470.997,
    "end": 4479.284,
    "en": "A reviewer independent of the generator should compare the change with the original evidence, with human approval added for high-risk Skill promotion.",
    "zh": "生成器之外的审查者应将更改与原始证据进行比较，并对高风险技能提升添加人工批准。"
  },
  {
    "id": 469,
    "start": 4479.284,
    "end": 4484.672,
    "en": "The second boundary is separating candidate capabilities from production capabilities.",
    "zh": "第二个边界是区分候选能力与生产能力。"
  },
  {
    "id": 470,
    "start": 4484.672,
    "end": 4492.909,
    "en": "New knowledge, Prompts, Skills, programs, and parameters first enter a candidate area that cannot serve real traffic.",
    "zh": "新知识、提示、技能、程序和参数首先进入一个不能处理真实流量的候选区域。"
  },
  {
    "id": 471,
    "start": 4492.909,
    "end": 4503.834,
    "en": "Newly generated code and external dependencies must also pass security checks such as sandbox execution, permission review, supply-chain scanning, and behavioral testing.",
    "zh": "新生成的代码和外部依赖项也必须通过安全检查，例如沙箱执行、权限审查、供应链扫描和行为测试。"
  },
  {
    "id": 472,
    "start": 4503.834,
    "end": 4511.047,
    "en": "Only after security checks and regression tests pass may a candidate serve real traffic as a production capability.",
    "zh": "只有在安全检查和回归测试通过后，候选内容才能作为生产能力处理真实流量。"
  },
  {
    "id": 473,
    "start": 4511.047,
    "end": 4516.097,
    "en": "The third boundary is that safety mechanisms must not be self-modifiable.",
    "zh": "第三个边界是安全机制不能被自我修改。"
  },
  {
    "id": 474,
    "start": 4516.097,
    "end": 4531.034,
    "en": "A business Agent may modify Prompts, Skills, the knowledge base, and tools, but it must not modify the validators, test cases, or release thresholds used to approve its own updates, nor the audit logs or stable-version backups.",
    "zh": "业务智能体可以修改提示、技能、知识库和工具，但不能修改用于批准其自身更新的验证器、测试用例或发布阈值，也不能修改审计日志或稳定版本备份。"
  },
  {
    "id": 475,
    "start": 4531.034,
    "end": 4538.747,
    "en": "Otherwise, an Agent can disguise regression as progress simply by lowering a test threshold or deleting failing cases.",
    "zh": "否则，智能体只需降低测试阈值或删除失败案例，就可以将退化伪装成进步。"
  },
  {
    "id": 476,
    "start": 4538.747,
    "end": 4544.247,
    "en": "Sleep Learning: Consolidation, Forgetting, and Capability Maintenance.",
    "zh": "睡眠学习：巩固、遗忘与能力维护。"
  },
  {
    "id": 477,
    "start": 4544.404,
    "end": 4552.466,
    "en": "Sleep learning” is a cognitive analogy for offline consolidation; it does not require the process to run literally at night.",
    "zh": "“睡眠学习”是对离线巩固的认知类比；它不需要过程在字面意义上于夜间运行。"
  },
  {
    "id": 478,
    "start": 4552.416,
    "end": 4558.804,
    "en": "The online Agent’s primary responsibility is to complete the current task and append immutable evidence.",
    "zh": "在线智能体的主要职责是完成当前任务并追加不可变的证据。"
  },
  {
    "id": 479,
    "start": 4558.804,
    "end": 4573.504,
    "en": "A background learning process reads a batch of new experience during idle periods or when gating conditions are met, compares old and new conclusions, merges duplicates, resolves conflicts, proposes candidate updates, and runs regressions.",
    "zh": "后台学习过程在空闲时段或满足门控条件时读取一批新的经验，比较新旧结论，合并重复内容，解决冲突，提出候选更新，并运行回归测试。"
  },
  {
    "id": 480,
    "start": 4573.504,
    "end": 4587.366,
    "en": "Separating collection from organization prevents an accidental success, network failure, or malicious input from immediately rewriting long-term capabilities, and it allows consolidation to use larger batches and cheaper models.",
    "zh": "将收集与组织分离可以防止意外成功、网络故障或恶意输入立即重写长期能力，并且允许巩固使用更大的批次和更便宜的模型。"
  },
  {
    "id": 481,
    "start": 4587.366,
    "end": 4591.054,
    "en": "A typical sleep-learning cycle has five steps:",
    "zh": "典型的睡眠学习周期有五个步骤："
  },
  {
    "id": 482,
    "start": 4591.054,
    "end": 4602.216,
    "en": "Trigger: Reach a threshold for elapsed time, number of new trajectories, storage use, or error frequency, while confirming that no high-priority online task is running.",
    "zh": "触发：达到经过时间、新轨迹数量、存储使用或错误频率的阈值，同时确认没有高优先级的在线任务正在运行。"
  },
  {
    "id": 483,
    "start": 4602.216,
    "end": 4611.141,
    "en": "Orient: Read the production knowledge, Prompt, and Skill directories and their versions to understand existing capabilities and immutable boundaries.",
    "zh": "定位：读取生产知识、Prompt和技能目录及其版本，以了解现有能力与不可变边界。"
  },
  {
    "id": 484,
    "start": 4611.141,
    "end": 4622.529,
    "en": "Collect and consolidate: Find new signals in recently evaluated trajectories, merge duplicates, mark conflicts and applicability conditions, and prefer local patches.",
    "zh": "收集与整合：在最近评估的轨迹中寻找新信号，合并重复项，标记冲突和适用条件，并优先考虑本地补丁。"
  },
  {
    "id": 485,
    "start": 4622.529,
    "end": 4631.266,
    "en": "Validate and approve: Evaluate candidates on transfer, retention, and safety sets; high-risk writes wait for human approval.",
    "zh": "验证与批准：在迁移性、保留性和安全性集上评估候选内容；高风险写入需等待人工批准。"
  },
  {
    "id": 486,
    "start": 4631.266,
    "end": 4643.716,
    "en": "Prune and index: Update retrieval indexes and mark capabilities that are long unused or contradicted by new evidence as expired, archived, or deleted, while retaining provenance and rollback versions.",
    "zh": "修剪与索引：更新检索索引，并将长期未使用或被新证据反驳的能力标记为过期、归档或删除，同时保留溯源和回滚版本。"
  },
  {
    "id": 487,
    "start": 4643.716,
    "end": 4649.904,
    "en": "User memory is the most intuitive example, but it must be distinguished from action experience.",
    "zh": "用户记忆是最直观的例子，但必须与行动经验区分开来。"
  },
  {
    "id": 488,
    "start": 4649.904,
    "end": 4657.254,
    "en": "Claude Code’s auto memory maintains a MEMORY.md index and topic-specific detail files for each project.",
    "zh": "Claude Code的自动记忆维护一个MEMORY.md索引和每个项目的主题特定详细文件。"
  },
  {
    "id": 489,
    "start": 4657.254,
    "end": 4669.016,
    "en": "At session startup it loads only a bounded prefix of the index and reads the remaining content on demand; when the index approaches its limit, the Agent is instructed to merge or move details elsewhere.",
    "zh": "在会话启动时，它仅加载索引的有限前缀，并按需读取其余内容；当索引接近其限制时，智能体会被指示合并或移动详细信息到其他地方。"
  },
  {
    "id": 490,
    "start": 4669.016,
    "end": 4675.929,
    "en": "This shows that even plain-text memory requires capacity limits, layered loading, and active organization.",
    "zh": "这表明，即使纯文本记忆也需要容量限制、分层加载和主动组织。"
  },
  {
    "id": 491,
    "start": 4675.929,
    "end": 4684.241,
    "en": "The currently documented mechanism primarily writes memory during sessions and should not simply be equated with a fixed nightly background task.",
    "zh": "目前记录的机制主要在会话期间写入记忆，不应简单等同于固定的夜间后台任务。"
  },
  {
    "id": 492,
    "start": 4684.241,
    "end": 4688.966,
    "en": "Hermes provides a more complete example of background memory evolution.",
    "zh": "Hermes提供了更完整的后台记忆演进示例。"
  },
  {
    "id": 493,
    "start": 4688.966,
    "end": 4703.316,
    "en": "It separates long-term information into bounded MEMORY.md and USER.md files, SQLite/FTS5 search over prior sessions, on-demand Skills, and optional external memory providers such as Honcho.",
    "zh": "它将长期信息分为有限的MEMORY.md和USER.md文件，对先前会话的SQLite/FTS5搜索，按需技能以及可选的外部记忆提供者如Honcho。"
  },
  {
    "id": 494,
    "start": 4703.316,
    "end": 4712.329,
    "en": "Session search returns original messages rather than first summarizing them with an LLM, keeping retrieval distinct from generation and auditable.",
    "zh": "会话搜索返回原始消息，而不是首先用LLM进行摘要，保持检索与生成的分离并可审计。"
  },
  {
    "id": 495,
    "start": 4712.329,
    "end": 4728.166,
    "en": "When a task contains many tool calls, recovers from an error or dead end, receives a user correction, or discovers a non-obvious workflow, a background review can create or locally revise a Skill; memory and Skill writes can also pass through an approval gate.",
    "zh": "当任务包含许多工具调用、从错误或死胡同中恢复、接收用户修正或发现非显而易见的工作流程时，后台审查可以创建或局部修订一个技能；记忆和技能写入也可以通过审批门禁。"
  },
  {
    "id": 496,
    "start": 4728.166,
    "end": 4739.379,
    "en": "A separate Curator tracks Skill usage, staleness, and archival status, performs deterministic pruning while idle, and may optionally invoke an LLM to merge content.",
    "zh": "一个独立的策展人（Curator）会跟踪技能的使用情况、过时程度和归档状态，在空闲时执行确定性修剪，并可选择调用大语言模型来合并内容。"
  },
  {
    "id": 497,
    "start": 4739.379,
    "end": 4745.404,
    "en": "It saves a snapshot before making changes so that incorrect consolidation can be rolled back.",
    "zh": "它会在进行更改前保存快照，以便在错误整合时进行回滚。"
  },
  {
    "id": 498,
    "start": 4745.404,
    "end": 4751.491,
    "en": "Continual evolution does not mean allowing knowledge, Prompts, and tools to grow without limit.",
    "zh": "持续演进并不意味着允许知识、提示词和工具无限制地增长。"
  },
  {
    "id": 499,
    "start": 4751.491,
    "end": 4768.279,
    "en": "The context corruption discussed in Chapter 2 reappears over longer timescales: experience documents conflict with one another, Prompts become overwhelmed by boundary rules, Skill libraries accumulate duplicate capabilities, and repeated fine-tuning causes catastrophic forgetting.",
    "zh": "如第2章讨论的上下文损坏现象在更长的时间尺度上再次出现：经验文档之间产生冲突，提示词被边界规则淹没，技能库中积累重复能力，而反复微调会导致灾难性遗忘。"
  },
  {
    "id": 500,
    "start": 4768.279,
    "end": 4772.929,
    "en": "The system therefore requires periodic offline consolidation:",
    "zh": "因此系统需要定期离线整合："
  },
  {
    "id": 501,
    "start": 4772.929,
    "end": 4777.766,
    "en": "Merge duplicate experience while retaining provenance and version information;",
    "zh": "合并重复经验，同时保留来源和版本信息；"
  },
  {
    "id": 502,
    "start": 4777.766,
    "end": 4783.854,
    "en": "Move local rules from the global Prompt into domain-specific Skills to keep the global Prompt clean;",
    "zh": "将全局提示中的本地规则转移到特定领域的技能中，以保持全局提示的简洁；"
  },
  {
    "id": 503,
    "start": 4783.854,
    "end": 4793.166,
    "en": "Keep Prompts and Skills clearly structured, like a handbook for new employees, and avoid enumerations resembling “99 ironclad rules.",
    "zh": "保持提示词和技能清晰结构化，如同新员工的指南手册，避免类似“99条铁律”的列举；"
  },
  {
    "id": 504,
    "start": 4793.166,
    "end": 4797.129,
    "en": "Revalidate tools that have not been used for a long time;",
    "zh": "重新验证长时间未使用的工具；"
  },
  {
    "id": 505,
    "start": 4797.129,
    "end": 4800.629,
    "en": "Delete knowledge invalidated by new evidence;",
    "zh": "删除因新证据而失效的知识；"
  },
  {
    "id": 506,
    "start": 4800.629,
    "end": 4803.916,
    "en": "Retrain LoRA from the original base model.",
    "zh": "从原始基础模型中重新训练LoRA。"
  },
  {
    "id": 507,
    "start": 4803.916,
    "end": 4805.804,
    "en": "Chapter Summary.",
    "zh": "章节总结。"
  },
  {
    "id": 508,
    "start": 4805.956,
    "end": 4814.693,
    "en": "Continual evolution is becoming one of the most important capabilities of Agents, but today's models still cannot perform it reliably on their own.",
    "zh": "持续演进正成为智能体最重要的能力之一，但目前的模型仍无法自主可靠地完成这一过程。"
  },
  {
    "id": 509,
    "start": 4814.643,
    "end": 4825.106,
    "en": "Contextual adaptation during inference does not persist automatically, while unvalidated online parameter updates amplify noise, attacks, and capability drift.",
    "zh": "推理过程中的上下文适应不会自动持久，而未经验证的在线参数更新会放大噪声、攻击和能力漂移。"
  },
  {
    "id": 510,
    "start": 4825.106,
    "end": 4831.206,
    "en": "The more practical approach today is therefore to build a verifiable learning system around the model.",
    "zh": "因此，当前更实际的方法是围绕模型构建一个可验证的学习系统。"
  },
  {
    "id": 511,
    "start": 4831.206,
    "end": 4849.256,
    "en": "In terms of the book's larger structure, this chapter builds the experiment and feedback segment of Chapter 1's discovery loop: the proposal already exists, and the question becomes how one experiment grounded in real observation can tell whether it actually improved the system, and how the result is carried into the next round.",
    "zh": "从本书的整体结构来看，本章构建了第1章发现循环中的实验和反馈部分：提案已经存在，问题变为如何通过基于真实观察的实验来判断它是否真的改进了系统，以及结果如何被带入下一轮。"
  },
  {
    "id": 512,
    "start": 4849.256,
    "end": 4860.831,
    "en": "An Agent obtains learning signals from interaction and evaluation, then updates knowledge, Prompts, Skills, programs, or model parameters according to how the capability is represented.",
    "zh": "智能体通过交互和评估获得学习信号，然后根据能力是如何表示的来更新知识、提示、技能、程序或模型参数。"
  },
  {
    "id": 513,
    "start": 4860.831,
    "end": 4870.906,
    "en": "The system can also optimize the methods used to manage and generate these artifacts, but it should prefer local changes that are attributable, verifiable, and reversible.",
    "zh": "系统还可以优化管理并生成这些制品的方法，但它应优先选择可归因、可验证和可逆的本地更改。"
  },
  {
    "id": 514,
    "start": 4870.906,
    "end": 4881.706,
    "en": "History can not only be distilled into static experience; within its support domain it can also be assembled into a replay environment that screens exploration policies at low cost.",
    "zh": "历史不仅可以提炼为静态经验；在其支持领域内，它还可以被组装成一个回放环境，以低成本筛选探索策略。"
  },
  {
    "id": 515,
    "start": 4881.706,
    "end": 4891.718,
    "en": "This lets continual evolution act on “how exploration is organized,” not only on the knowledge, instructions, and programs that exploration produces.",
    "zh": "这使得持续演进可以作用于‘探索是如何组织的’，而不仅仅是探索所产生的知识、指令和程序。"
  },
  {
    "id": 516,
    "start": 4891.718,
    "end": 4904.856,
    "en": "Continual evolution should separate online execution from offline learning: record evidence online; generate and validate candidate updates offline; then release, consolidate, or roll them back gradually.",
    "zh": "持续演进应将在线执行与离线学习分开：在线记录证据；离线生成并验证候选更新；然后逐步发布、整合或回滚。"
  },
  {
    "id": 517,
    "start": 4904.856,
    "end": 4909.731,
    "en": "This loop is most reliable when outcomes are automatically verifiable.",
    "zh": "当结果可以自动验证时，这个循环最为可靠。"
  },
  {
    "id": 518,
    "start": 4909.731,
    "end": 4919.668,
    "en": "For open-ended tasks with ambiguous objectives and delayed feedback, people must still participate in problem definition and the design of evaluation criteria.",
    "zh": "对于具有模糊目标和延迟反馈的开放性任务，人们仍需参与问题定义和评估标准的设计。"
  },
  {
    "id": 519,
    "start": 4919.668,
    "end": 4921.956,
    "en": "Questions for Reflection.",
    "zh": "反思问题。"
  },
  {
    "id": 520,
    "start": 4921.956,
    "end": 4930.431,
    "en": "intermediate difficulty, two stars:  An experience document is supported by three successful trajectories and one failed trajectory.",
    "zh": "中等难度，两颗星：一个经验文档由三个成功轨迹和一个失败轨迹支持。"
  },
  {
    "id": 521,
    "start": 4930.431,
    "end": 4934.018,
    "en": "The failure occurred with a newer API version.",
    "zh": "失败发生在较新的API版本上。"
  },
  {
    "id": 522,
    "start": 4934.018,
    "end": 4940.706,
    "en": "How should the system determine whether the experience has been invalidated or its applicability conditions have changed?",
    "zh": "系统应如何确定该经验是否已被无效，或其适用条件是否已发生变化？"
  },
  {
    "id": 523,
    "start": 4940.706,
    "end": 4950.168,
    "en": "intermediate difficulty, two stars:  A customer-service Agent’s user satisfaction increases, but its rate of rule violations also rises.",
    "zh": "中等难度，两颗星：一个客服智能体的用户满意度上升，但其规则违规率也上升了。"
  },
  {
    "id": 524,
    "start": 4950.168,
    "end": 4954.243,
    "en": "Why can satisfaction not serve as the sole learning signal?",
    "zh": "为什么满意度不能作为唯一的学习信号？"
  },
  {
    "id": 525,
    "start": 4954.243,
    "end": 4957.168,
    "en": "How would you design guardrail metrics?",
    "zh": "你会如何设计护栏指标？"
  },
  {
    "id": 526,
    "start": 4957.168,
    "end": 4966.618,
    "en": "advanced difficulty, three stars:  The same “false promise” problem can be mitigated through a Prompt, Harness checks, or parameter training.",
    "zh": "高级难度，三颗星：同样的‘虚假承诺’问题可以通过提示（Prompt）、Harness检查或参数训练来缓解。"
  },
  {
    "id": 527,
    "start": 4966.618,
    "end": 4970.643,
    "en": "What evidence would you use to choose where to make the modification?",
    "zh": "你会用什么证据来决定修改的位置？"
  },
  {
    "id": 528,
    "start": 4970.643,
    "end": 4980.968,
    "en": "advanced difficulty, three stars:  An Agent may modify tools and validators, but it should not be allowed to modify the trusted root that approves its own updates.",
    "zh": "高级难度，三颗星：智能体可能修改工具和验证器，但不应允许其修改批准其自身更新的信任根。"
  },
  {
    "id": 529,
    "start": 4980.968,
    "end": 4985.543,
    "en": "How would you separate the permissions and code boundaries of these two parts?",
    "zh": "你将如何划分这两部分的权限和代码边界？"
  },
  {
    "id": 530,
    "start": 4985.543,
    "end": 4995.293,
    "en": "intermediate difficulty, two stars:  As the experience knowledge base grows, retrieval errors and knowledge conflicts may offset the benefits of learning.",
    "zh": "中级难度，两颗星：随着经验知识库的增长，检索错误和知识冲突可能会抵消学习带来的好处。"
  },
  {
    "id": 531,
    "start": 4995.293,
    "end": 5000.243,
    "en": "How should versioning, freshness, and retirement mechanisms be designed?",
    "zh": "版本控制、新鲜度和退役机制应如何设计？"
  },
  {
    "id": 532,
    "start": 5000.243,
    "end": 5009.256,
    "en": "advanced difficulty, three stars:  Parameter learning is effective for natural-language style but struggles to guarantee strict business rules.",
    "zh": "高级难度，三颗星：参数学习在自然语言风格上有效，但在保证严格的业务规则方面存在困难。"
  },
  {
    "id": 533,
    "start": 5009.256,
    "end": 5018.143,
    "en": "Design a continual-evolution scheme for medical customer service that coordinates parameters, knowledge, Skills, and code-level constraints.",
    "zh": "为医疗客户客服设计一个持续演进方案，协调参数、知识、技能和代码级约束。"
  },
  {
    "id": 534,
    "start": 5018.143,
    "end": 5029.718,
    "en": "advanced difficulty, three stars:  An exploration policy scores highest on every old discovery tree during history replay, yet degrades in the next round of online exploration.",
    "zh": "高级难度，三颗星：探索策略在历史重放的每棵旧发现树上得分最高，但在下一轮在线探索中性能下降。"
  },
  {
    "id": 535,
    "start": 5029.718,
    "end": 5035.956,
    "en": "What support-domain bias, randomness, and evaluation overfitting could produce this result?",
    "zh": "哪些支持领域偏差、随机性和评估过拟合可能导致这个结果？"
  },
  {
    "id": 536,
    "start": 5035.956,
    "end": 5040.118,
    "en": "How would you partition the replay worlds and design release gates?",
    "zh": "你将如何划分重放世界并设计发布门禁？"
  }
];
