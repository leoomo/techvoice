window.CHAPTER_DATA_chapter6 = [
  {
    "id": 1,
    "start": 0.1,
    "end": 5.65,
    "en": "Chapter 6: Interaction: Expanding the Observation and Action Spaces.",
    "zh": "第6章：交互：拓展观察与动作空间。"
  },
  {
    "id": 2,
    "start": 5.6,
    "end": 18.6,
    "en": "Chapter 1 made a claim: when the underlying model is fixed, the most effective system-engineering lever for improving an Agent's task performance is usually to redefine or expand its observation space and action space.",
    "zh": "第1章提出了一个观点：当底层模型固定时，提升智能体任务性能最有效的系统工程杠杆通常是重新定义或扩展其观察空间和动作空间。"
  },
  {
    "id": 3,
    "start": 18.6,
    "end": 35.337,
    "en": "Chapters 2 through 5 have explored this idea in practice—context engineering decides what goes into the observation, memory and knowledge bases stretch the observation across sessions, tools define what the Agent can do, and code generation lets it create new actions of its own.",
    "zh": "第2至第5章在实践中探索了这一想法——上下文工程决定了进入观察的内容，记忆和知识库将观察延伸到多个会话中，工具定义了智能体可以执行的操作，代码生成使其能够创建自己的新动作。"
  },
  {
    "id": 4,
    "start": 35.337,
    "end": 42.037,
    "en": "But all of these expansions happened under one shared premise: the Agent and the world take turns speaking.",
    "zh": "但所有这些扩展都基于一个共同的前提：智能体和世界轮流发言。"
  },
  {
    "id": 5,
    "start": 42.037,
    "end": 52.025,
    "en": "The user finishes a sentence, the Agent thinks for a while, calls a few tools, and replies; while it is thinking, the world is assumed to stand still.",
    "zh": "用户说完一句话后，智能体思考一段时间，调用几个工具，然后回复；在它思考时，世界被认为处于静止状态。"
  },
  {
    "id": 6,
    "start": 52.025,
    "end": 57.012,
    "en": "The premise is so natural that it is rarely written down as an assumption at all.",
    "zh": "这个前提如此自然，以至于很少被明确写成一个假设。"
  },
  {
    "id": 7,
    "start": 57.012,
    "end": 60.4,
    "en": "This chapter removes exactly that premise.",
    "zh": "本章正是去除了这个前提。"
  },
  {
    "id": 8,
    "start": 60.4,
    "end": 63.637,
    "en": "Two Axes: Modality and Timing.",
    "zh": "两个维度：模态与时间。"
  },
  {
    "id": 9,
    "start": 63.637,
    "end": 69.262,
    "en": "Both the observation space and the action space can be expanded along two dimensions.",
    "zh": "观察空间和动作空间都可以沿着两个维度进行扩展。"
  },
  {
    "id": 10,
    "start": 69.262,
    "end": 83.737,
    "en": "Modality decides the form of observation and action: does the Agent only read text, or can it also hear sound, see the screen, and sense torque; can it only emit tokens, or also speak, click, and drive joints.",
    "zh": "模态决定了观察和动作的形式：智能体只读取文本，还是也能听声音、看屏幕、感知扭矩；只能发出标记，还是也能说话、点击和驱动关节。"
  },
  {
    "id": 11,
    "start": 83.737,
    "end": 99.187,
    "en": "Timing decides the rhythm of observation and action: does the Agent go and fetch an observation, or does the world push it; must an action finish within one turn, or may it span turns, be interrupted midway, and be preempted by something more urgent.",
    "zh": "时间决定了观察和动作的节奏：智能体是去获取观察，还是世界主动推送；一个动作是否必须在一个回合内完成，还是可以跨越多个回合，中途被中断，并被更紧急的事情抢占。"
  },
  {
    "id": 12,
    "start": 99.187,
    "end": 106.3,
    "en": "The previous chapters expanded the content of these two spaces; this chapter expands their modality and timing:",
    "zh": "前几章扩展了这两个空间的内容；本章将扩展它们的模态和时间："
  },
  {
    "id": 13,
    "start": 106.3,
    "end": 116.25,
    "en": "Expanding the observation space: Context engineering, memory and knowledge bases; Expanding the action space: Tools, code generation.",
    "zh": "拓展观察空间：上下文工程、记忆和知识库；拓展动作空间：工具、代码生成。"
  },
  {
    "id": 14,
    "start": 116.25,
    "end": 126.212,
    "en": "Expanding the observation space: Voice, screen, physical sensors; Expanding the action space: Speaking, clicking, joint motion.",
    "zh": "拓展观察空间：语音、屏幕、物理传感器；拓展动作空间：说话、点击、关节运动。"
  },
  {
    "id": 15,
    "start": 126.212,
    "end": 136.562,
    "en": "Expanding the observation space: The world pushes, continuous streams; Expanding the action space: Across turns, interruptible, preemptible.",
    "zh": "拓展观察空间：世界主动推送，连续流；拓展动作空间：跨回合、可中断、可抢占。"
  },
  {
    "id": 16,
    "start": 136.562,
    "end": 142.862,
    "en": "Turn-taking is an interaction convention of the model and its interface, not a property of the environment.",
    "zh": "轮替是模型与其接口之间的交互惯例，而不是环境的属性。"
  },
  {
    "id": 17,
    "start": 142.862,
    "end": 153.475,
    "en": "Early tool-calling interfaces generally organized messages into synchronous rounds: a question was followed by an answer, and tool results had to be supplied before reasoning continued.",
    "zh": "早期的工具调用接口通常将消息组织为同步回合：一个问题之后会有一个答案，必须在继续推理之前提供工具结果。"
  },
  {
    "id": 18,
    "start": 153.475,
    "end": 165.95,
    "en": "The real environment does not wait for the model to react: mail arrives while it is thinking, the user cuts in mid-sentence, a page changes between screenshots, and a cup is knocked over while the arm reaches for it.",
    "zh": "现实环境不会等待模型做出反应：当它在思考时邮件到达了，用户在句子中间插话，截图之间页面发生了变化，而手臂正在伸向杯子时杯子被碰倒了。"
  },
  {
    "id": 19,
    "start": 165.95,
    "end": 177.575,
    "en": "This convention is changing too: as of September 2026, GPT-6 Astra offers native asynchronous tool calling and the ability to add user instructions mid-turn.",
    "zh": "这一惯例也在改变：截至2026年9月，GPT-6 Astra提供了原生的异步工具调用功能，并且能够在轮次中添加用户指令。"
  },
  {
    "id": 20,
    "start": 177.575,
    "end": 184.15,
    "en": "This chapter therefore covers both native support and compatibility with existing synchronous interfaces.",
    "zh": "因此，本章将涵盖对原生支持以及与现有同步接口的兼容性。"
  },
  {
    "id": 21,
    "start": 184.15,
    "end": 201.037,
    "en": "Scale: Seconds — days; Scenario: Async and event-driven; Change on the observation side: The world wakes the Agent (mail, timers, callbacks); Change on the action side: Actions span turns: start now, finish later on an event.",
    "zh": "规模：秒—天；场景：异步和事件驱动；观察侧的变化：世界唤醒智能体（邮件、定时器、回调）；动作侧的变化：动作跨越轮次：现在开始，稍后在事件发生时完成。"
  },
  {
    "id": 22,
    "start": 201.037,
    "end": 216.837,
    "en": "Scale: 10 ms — 1 s; Scenario: Voice; Change on the observation side: Listen while speaking, without waiting for a full sentence; Change on the action side: Think while speaking, interruptible, revisable midway.",
    "zh": "规模：10毫秒—1秒；场景：语音；观察侧的变化：边说话边听，无需等待完整句子；动作侧的变化：边说话边思考，可中断、可中途修改。"
  },
  {
    "id": 23,
    "start": 216.837,
    "end": 231.887,
    "en": "Scale: Sub-second — seconds; Scenario: Computer Use; Change on the observation side: The screen keeps changing between frames; Change on the action side: After acting, reality must be re-confirmed against the plan.",
    "zh": "规模：亚秒—秒；场景：计算机使用；观察侧的变化：屏幕在帧之间持续变化；动作侧的变化：执行后必须根据计划重新确认现实情况。"
  },
  {
    "id": 24,
    "start": 231.887,
    "end": 245.387,
    "en": "Scale: Milliseconds; Scenario: Robotics; Change on the observation side: Sensors stream back continuously; Change on the action side: Actions are chunked: plan a little at a time, preemptible.",
    "zh": "规模：毫秒；场景：机器人；观察侧的变化：传感器持续流回数据；动作侧的变化：动作分块进行：逐步规划，可被抢占。"
  },
  {
    "id": 25,
    "start": 245.387,
    "end": 249.45,
    "en": "Async and Event-Driven: When the World Comes Looking for You.",
    "zh": "异步和事件驱动：当世界来找你的时候。"
  },
  {
    "id": 26,
    "start": 249.604,
    "end": 257.441,
    "en": "The perception, execution, and collaboration tools discussed in Chapter 4 are all invoked proactively by the Agent.",
    "zh": "第4章讨论的感知、执行和协作工具均由智能体主动调用。"
  },
  {
    "id": 27,
    "start": 257.391,
    "end": 262.029,
    "en": "How should an Agent respond to external events that may arrive at any time?",
    "zh": "智能体应该如何回应可能随时到达的外部事件？"
  },
  {
    "id": 28,
    "start": 262.029,
    "end": 265.929,
    "en": "This requires an event-driven asynchronous architecture.",
    "zh": "这需要一个事件驱动的异步架构。"
  },
  {
    "id": 29,
    "start": 265.929,
    "end": 275.954,
    "en": "The two remaining tool classes from Chapter 1—event-trigger tools and user-communication tools—depend on this architecture, so they are discussed here as well.",
    "zh": "第1章剩下的两种工具类—事件触发工具和用户通信工具—依赖于这种架构，因此也将在此进行讨论。"
  },
  {
    "id": 30,
    "start": 275.954,
    "end": 282.141,
    "en": "The modality does not change in this section—it is still text; only the timing changes.",
    "zh": "本节的模态没有变化—仍然是文本；只有时间发生了变化。"
  },
  {
    "id": 31,
    "start": 282.141,
    "end": 287.079,
    "en": "This is the first step out of the turn-based world of the previous five chapters.",
    "zh": "这是走出前五章中基于回合制的世界的第一步。"
  },
  {
    "id": 32,
    "start": 287.079,
    "end": 289.616,
    "en": "Why Asynchrony is Needed.",
    "zh": "为什么需要异步性。"
  },
  {
    "id": 33,
    "start": 289.616,
    "end": 294.029,
    "en": "Let's start with an analogy to explain why asynchrony is needed.",
    "zh": "让我们从一个类比开始，解释为什么需要异步性。"
  },
  {
    "id": 34,
    "start": 294.029,
    "end": 301.954,
    "en": "Synchronous means \"do one thing before you can do the next,\" while asynchronous means \"multiple things can happen concurrently.",
    "zh": "同步意味着“在做下一件事之前必须先完成当前的事”，而异步意味着“多个事情可以同时发生。”},{"
  },
  {
    "id": 35,
    "start": 301.954,
    "end": 313.004,
    "en": "A traditional synchronous Agent architecture is like a single checkout counter at a store—it can only handle one customer at a time, and only calls the next number after finishing with the current one.",
    "zh": "传统的同步智能体架构就像商店里的一个收银台——一次只能处理一个顾客，只有在完成当前顾客的业务后才会调下一位顾客的号码。"
  },
  {
    "id": 36,
    "start": 313.004,
    "end": 328.729,
    "en": "A truly intelligent assistant is more like a flexible secretary—with multiple pending items on the desk (emails, phone calls, visitors), the secretary decides which to handle first based on urgency, and can pause and switch to a more urgent task mid-way.",
    "zh": "一个真正智能的助手更像是一位灵活的秘书——办公桌上有很多待办事项（邮件、电话、访客），秘书会根据紧急程度决定先处理哪个，并且可以在处理过程中暂停并切换到更紧急的任务。"
  },
  {
    "id": 37,
    "start": 328.729,
    "end": 339.466,
    "en": "In synchronous mode, the Agent either has to wait for a background task to complete before talking to the user, or wait for the conversation to end before processing a newly arrived event.",
    "zh": "在同步模式下，智能体要么必须等待后台任务完成才能与用户交流，要么必须等待对话结束才能处理新到达的事件。"
  },
  {
    "id": 38,
    "start": 339.466,
    "end": 344.579,
    "en": "It cannot deliver the core capabilities a real assistant scenario requires:",
    "zh": "它无法实现真实助手场景所需的核心能力："
  },
  {
    "id": 39,
    "start": 344.579,
    "end": 351.741,
    "en": "Asynchronous execution is the norm—Many tasks require long runtimes and should not block user interaction.",
    "zh": "异步执行是常态——许多任务需要长时间运行，不应阻塞用户交互。"
  },
  {
    "id": 40,
    "start": 351.741,
    "end": 356.904,
    "en": "Dynamic judgment of event priority—Not all events are equally important.",
    "zh": "动态判断事件优先级——并非所有事件都同样重要。"
  },
  {
    "id": 41,
    "start": 356.904,
    "end": 368.554,
    "en": "The Agent needs to intelligently choose a handling strategy: cancel the current operation (urgent), add it to a queue (routine), or process in parallel (independent lightweight query).",
    "zh": "智能体需要智能地选择处理策略：取消当前操作（紧急）、将其加入队列（常规）、或并行处理（独立的轻量查询）。"
  },
  {
    "id": 42,
    "start": 368.554,
    "end": 375.304,
    "en": "Smooth interruption and resumption—An interrupted conversation or task should be able to resume naturally.",
    "zh": "流畅的中断与恢复——被中断的对话或任务应能自然恢复。"
  },
  {
    "id": 43,
    "start": 375.304,
    "end": 382.954,
    "en": "When applying the asynchronous paradigm to an LLM, first check whether the model and API support this message timing.",
    "zh": "将异步范式应用于大语言模型时，首先需要检查模型和API是否支持这种消息时机。"
  },
  {
    "id": 44,
    "start": 382.954,
    "end": 394.041,
    "en": "Some interfaces require all tool results before work can continue; others already allow tools to remain pending while the model keeps working and accepts user updates during generation.",
    "zh": "一些接口要求在继续工作前获取所有工具结果；另一些接口则允许工具保持待处理状态，同时模型继续工作，并在生成过程中接受用户更新。"
  },
  {
    "id": 45,
    "start": 394.041,
    "end": 402.416,
    "en": "The former need event queues, task handles, and a compatibility layer; the latter can use native asynchronous protocols directly.",
    "zh": "前者需要事件队列、任务句柄和兼容层；后者可以直接使用原生的异步协议。"
  },
  {
    "id": 46,
    "start": 402.416,
    "end": 409.241,
    "en": "Both still require the application to manage event sources, tool lifecycles, and result ownership.",
    "zh": "两者仍然需要应用程序管理事件源、工具生命周期和结果所有权。"
  },
  {
    "id": 47,
    "start": 409.241,
    "end": 415.541,
    "en": "Using asyncio in the code alone does not establish that the model has native asynchronous capabilities.",
    "zh": "仅在代码中使用asyncio并不能说明模型具有原生的异步能力。"
  },
  {
    "id": 48,
    "start": 415.541,
    "end": 420.316,
    "en": "To solve this, we need an event-driven asynchronous Agent architecture.",
    "zh": "为了解决这个问题，我们需要一个事件驱动的异步智能体架构。"
  },
  {
    "id": 49,
    "start": 420.316,
    "end": 433.366,
    "en": "Technically, this means the system no longer actively and repeatedly checks for \"new messages\" (this is polling, which is inefficient), but instead automatically triggers processing logic when a new message arrives.",
    "zh": "从技术上讲，这意味着系统不再主动且反复地检查“新消息”（这称为轮询，效率低下），而是在新消息到达时自动触发处理逻辑。"
  },
  {
    "id": 50,
    "start": 433.366,
    "end": 443.841,
    "en": "All inputs, outputs, thought processes, and external interactions are uniformly modeled as an event stream—a sequence of event records arranged on a timeline.",
    "zh": "所有输入、输出、思维过程和外部交互都被统一建模为一个事件流——按时间线排列的一系列事件记录。"
  },
  {
    "id": 51,
    "start": 443.841,
    "end": 455.204,
    "en": "Figure 6-1 shows the overall architecture of an event-driven asynchronous Agent, illustrating the relationship between event sources, the event queue, and the Agent processing flow.",
    "zh": "图6-1展示了事件驱动的异步智能体的整体架构，说明了事件源、事件队列与智能体处理流程之间的关系。"
  },
  {
    "id": 52,
    "start": 455.204,
    "end": 461.141,
    "en": "As illustrated in Figure 6-1: Event-Driven Asynchronous Agent Architecture.",
    "zh": "如图6-1所示：事件驱动的异步智能体架构。"
  },
  {
    "id": 53,
    "start": 461.141,
    "end": 464.741,
    "en": "Implementing Event-Driven Mechanisms in OpenClaw.",
    "zh": "在OpenClaw中实现事件驱动机制。"
  },
  {
    "id": 54,
    "start": 464.741,
    "end": 472.579,
    "en": "The open-source framework OpenClaw receives multi-channel messages through a Gateway control plane and routes them to the Agent runtime.",
    "zh": "开源框架OpenClaw通过网关控制平面接收多通道消息，并将其路由到智能体运行时。"
  },
  {
    "id": 55,
    "start": 472.579,
    "end": 476.279,
    "en": "It provides three built-in event-driven mechanisms:",
    "zh": "它提供了三种内置的事件驱动机制："
  },
  {
    "id": 56,
    "start": 476.279,
    "end": 485.179,
    "en": "Hooks: Respond to events in the Agent's lifecycle, such as session creation and reset, similar to event triggers in GitHub Actions",
    "zh": "钩子：响应智能体生命周期中的事件，例如会话创建和重置，类似于GitHub Actions中的事件触发器"
  },
  {
    "id": 57,
    "start": 485.179,
    "end": 498.566,
    "en": "Cron (scheduled-task scheduler): Execute periodic tasks according to cron expressions (a widely used syntax for scheduled tasks in Unix systems, e.g., 0 9   5 means 9 AM every Friday)",
    "zh": "定时任务（Cron调度器）：根据cron表达式执行周期性任务（Unix系统中广泛使用的定时任务语法，例如 0 9 * * 5 表示每周五上午9点）"
  },
  {
    "id": 58,
    "start": 498.566,
    "end": 505.041,
    "en": "Heartbeat (Heartbeat Daemon): Wakes up the Agent every N minutes to check whether anything requires attention",
    "zh": "心跳（心跳守护进程）：每隔N分钟唤醒智能体，检查是否有需要关注的内容"
  },
  {
    "id": 59,
    "start": 505.204,
    "end": 517.479,
    "en": "These three mechanisms give OpenClaw Agents the appearance of autonomy—even with the user offline, the Agent can generate reports on schedule, check system status, and handle routine chores.",
    "zh": "这三种机制使OpenClaw智能体看起来具有自主性——即使用户离线，智能体也可以按计划生成报告、检查系统状态并处理日常事务。"
  },
  {
    "id": 60,
    "start": 517.429,
    "end": 524.179,
    "en": "The Gateway already handles messages from built-in channels such as IM and the web interface in push fashion.",
    "zh": "网关已经以推送方式处理来自内置渠道（如即时通讯和网页界面）的消息。"
  },
  {
    "id": 61,
    "start": 524.179,
    "end": 539.891,
    "en": "Of the three mechanisms, only Cron and Heartbeat let the Agent act without a user message, and both are time-driven: Heartbeat checks at fixed intervals, Cron fires at preset times, and Hooks originate inside the OpenClaw framework rather than outside it.",
    "zh": "在三种机制中，只有Cron和Heartbeat可以让智能体在没有用户消息的情况下执行操作，且两者都是基于时间驱动的：Heartbeat在固定时间间隔内检查，Cron在预设时间触发，而Hooks则是在OpenClaw框架内部产生，而不是外部。"
  },
  {
    "id": 62,
    "start": 539.891,
    "end": 549.366,
    "en": "The real gap is third-party event sources beyond the built-in channels: a new email, an external API callback, or an urgent notification.",
    "zh": "真正的差距在于超出内置通道的第三方事件源：一封新邮件、一个外部API回调或一条紧急通知。"
  },
  {
    "id": 63,
    "start": 549.366,
    "end": 558.179,
    "en": "OpenClaw has no immediate ingress path for them, so the Agent cannot respond immediately and may only notice at the next Cron or Heartbeat tick.",
    "zh": "OpenClaw对此类事件没有即时的接入路径，因此智能体无法立即响应，可能只能在下一个Cron或Heartbeat触发时才注意到。"
  },
  {
    "id": 64,
    "start": 558.179,
    "end": 561.854,
    "en": "This delay is unacceptable in many scenarios.",
    "zh": "在许多场景中，这种延迟是不可接受的。"
  },
  {
    "id": 65,
    "start": 561.854,
    "end": 578.254,
    "en": "Take PineClaw (Pine AI's OpenClaw plugin) as an example: Pine AI is an AI assistant that makes real phone calls on behalf of the user, with typical scenarios including negotiating bills, canceling subscriptions, and handling insurance claims.",
    "zh": "以PineClaw（Pine AI的OpenClaw插件）为例：Pine AI是一个代表用户进行真实电话通话的AI助手，典型场景包括协商账单、取消订阅和处理保险索赔。"
  },
  {
    "id": 66,
    "start": 578.254,
    "end": 589.291,
    "en": "When a user initiates a Pine phone task through an OpenClaw Agent, Pine's voice AI will make the call on behalf of the user, but the user may need to intervene at any time during the call:",
    "zh": "当用户通过OpenClaw智能体发起一个Pine电话任务时，Pine的语音AI会代表用户拨打电话，但用户可能在通话过程中任何时候都需要介入："
  },
  {
    "id": 67,
    "start": 589.291,
    "end": 602.254,
    "en": "Real-time Identity Verification: The customer service representative asks to verify the account holder's identity, and Pine needs the user to immediately provide a security code or one-time password (OTP)",
    "zh": "实时身份验证：客服代表要求验证账户持有人的身份，Pine需要用户立即提供安全码或一次性密码（OTP）"
  },
  {
    "id": 68,
    "start": 602.254,
    "end": 612.366,
    "en": "Three-Way Call Confirmation: The customer service representative asks to speak directly with the account holder, and Pine needs the user to answer the phone within seconds",
    "zh": "三方通话确认：客服代表要求直接与账户持有人通话，Pine需要用户在几秒内接听电话"
  },
  {
    "id": 69,
    "start": 612.366,
    "end": 623.529,
    "en": "Progress Sync and Decision Confirmation: At a critical point in the negotiation (e.g., the other party proposes a price reduction), Pine needs the user to confirm whether to accept",
    "zh": "进度同步与决策确认：在谈判的关键点（例如对方提出降价），Pine需要用户确认是否接受"
  },
  {
    "id": 70,
    "start": 623.529,
    "end": 634.141,
    "en": "With Heartbeat's periodic polling, the user might not get the notification while the representative is still waiting for the verification code; the representative hangs up and the call fails.",
    "zh": "通过Heartbeat的周期性轮询，用户可能在客服代表仍在等待验证码时未收到通知；客服代表挂断电话，通话失败。"
  },
  {
    "id": 71,
    "start": 634.141,
    "end": 642.391,
    "en": "PineClaw's solution is a Channel mechanism that establishes a real-time event path between OpenClaw's Gateway and the Pine API.",
    "zh": "PineClaw的解决方案是一种Channel机制，它在OpenClaw网关和Pine API之间建立了一个实时事件路径。"
  },
  {
    "id": 72,
    "start": 642.391,
    "end": 651.816,
    "en": "When a call connects, needs user input, or ends, the message is pushed immediately to the OpenClaw Agent, which handles it and notifies the user.",
    "zh": "当通话连接、需要用户输入或结束时，消息会立即推送到OpenClaw智能体，由其处理并通知用户。"
  },
  {
    "id": 73,
    "start": 651.816,
    "end": 665.879,
    "en": "This case reveals the core value of an event-driven architecture for Agent frameworks: true \"proactive service\" requires not only that the Agent can periodically check for events, but also that events can actively notify the Agent.",
    "zh": "这个案例揭示了事件驱动架构对于智能体框架的核心价值：真正的“主动服务”不仅需要智能体能够定期检查事件，还需要事件能够主动通知智能体。"
  },
  {
    "id": 74,
    "start": 665.879,
    "end": 680.891,
    "en": "Unifying all inputs—user messages, tool returns, external callbacks, scheduled triggers—into an event stream, and driving the Agent's thinking and actions through an event loop, is the architectural foundation for achieving this goal.",
    "zh": "将所有输入——用户消息、工具返回、外部回调、计划触发——统一为一个事件流，并通过事件循环驱动智能体的思考和行动，是实现这一目标的架构基础。"
  },
  {
    "id": 75,
    "start": 680.891,
    "end": 696.979,
    "en": "Under this architecture, we will first introduce the two tool categories directly related to events, as well as the virtual identity and isolated execution environment that support the Agent's independent actions, before discussing the specific design of the event handling mechanism.",
    "zh": "在这种架构下，我们将首先介绍与事件直接相关的两种工具类别，以及支持智能体独立行动的虚拟身份和隔离执行环境，然后再讨论事件处理机制的具体设计。"
  },
  {
    "id": 76,
    "start": 696.979,
    "end": 699.191,
    "en": "Event-Triggered Tools.",
    "zh": "事件触发工具。"
  },
  {
    "id": 77,
    "start": 699.191,
    "end": 704.966,
    "en": "Event-triggered tools are the entry points through which external events drive an Agent's actions.",
    "zh": "事件触发工具是外部事件驱动智能体行为的入口点。"
  },
  {
    "id": 78,
    "start": 704.966,
    "end": 715.141,
    "en": "Without them, an Agent can only operate in a continuous loop of thinking, calling tools, and finally outputting a result, then waiting for the user's next input.",
    "zh": "没有它们，智能体只能在思考、调用工具并最终输出结果，然后等待用户下一次输入的连续循环中运行。"
  },
  {
    "id": 79,
    "start": 715.141,
    "end": 722.516,
    "en": "To translate changes in the world into events an Agent can process, there are three common types of event-triggered tools.",
    "zh": "为了将世界的变化转化为智能体可以处理的事件，有三种常见的事件触发工具。"
  },
  {
    "id": 80,
    "start": 722.668,
    "end": 727.83,
    "en": "Timers (set_timer) handle events tied to physical time.",
    "zh": "定时器（set_timer）处理与物理时间相关的事件。"
  },
  {
    "id": 81,
    "start": 727.78,
    "end": 739.605,
    "en": "If an email goes unanswered, the Agent should follow up after a while to ask about progress; if a call is placed outside the recipient's business hours, it should retry during the next business window.",
    "zh": "如果一封邮件未得到回复，智能体应在一段时间后跟进询问进展；如果在接收方营业时间之外拨打电话，它应该在下一个营业时段重新尝试。"
  },
  {
    "id": 82,
    "start": 739.605,
    "end": 745.605,
    "en": "Tools like OpenClaw and Claude Code therefore let an Agent wake itself at a specified time.",
    "zh": "因此，像OpenClaw和Claude Code这样的工具可以让智能体在指定时间唤醒自己。"
  },
  {
    "id": 83,
    "start": 745.605,
    "end": 759.868,
    "en": "One-shot timers handle tasks with a specific time: if a user asks on Saturday to “call the bank's mortgage department for a status update,” the Agent sets “call the bank next Monday at 10:00 AM,” and the timer triggers the call.",
    "zh": "一次性定时器处理特定时间的任务：如果用户在周六要求“致电银行的抵押部门了解状态”，智能体会设定“下周一下午10点致电银行”，定时器会触发该电话。"
  },
  {
    "id": 84,
    "start": 759.868,
    "end": 765.518,
    "en": "Recurring timers handle periodic tasks, such as checking server health every hour.",
    "zh": "周期性定时器处理周期性任务，例如每小时检查一次服务器健康状况。"
  },
  {
    "id": 85,
    "start": 765.518,
    "end": 772.78,
    "en": "Some external services cannot push progress updates and must be polled; the recurring timer provides that polling.",
    "zh": "一些外部服务无法推送进度更新，必须轮询；周期性定时器提供了这种轮询功能。"
  },
  {
    "id": 86,
    "start": 772.78,
    "end": 780.255,
    "en": "OpenClaw's Heartbeat is a systematized version of this mechanism and the basis of its “proactive service” capability.",
    "zh": "OpenClaw的Heartbeat是这一机制的系统化版本，也是其“主动服务”能力的基础。"
  },
  {
    "id": 87,
    "start": 780.255,
    "end": 788.643,
    "en": "Background Task Monitoring (monitor_shell) handles events from asynchronously executing tools or command-line tasks.",
    "zh": "后台任务监控（monitor_shell）处理异步执行工具或命令行任务的事件。"
  },
  {
    "id": 88,
    "start": 788.643,
    "end": 795.168,
    "en": "Some command-line tasks run in the background for a long time, and the Agent needs to track their progress.",
    "zh": "一些命令行任务需要长时间在后台运行，智能体需要跟踪其进度。"
  },
  {
    "id": 89,
    "start": 795.168,
    "end": 813.605,
    "en": "If the Agent \"stares at the command line,\" repeatedly calling a tool to poll for progress, it burns tokens; if it waits until the task has fully finished before thinking again, it misses critical problems as they unfold—and if the command hangs, it cannot intervene at all, stalling the whole task.",
    "zh": "如果智能体‘盯着命令行’，不断调用工具来轮询进度，就会消耗令牌；如果等到任务完全完成后才重新思考，就会错过正在发生的关键问题——如果命令卡住，就无法进行干预，导致整个任务停滞。"
  },
  {
    "id": 90,
    "start": 813.605,
    "end": 823.518,
    "en": "Claude Code solves this by introducing a monitor tool, allowing the Agent to monitor new command-line output, including output that contains specific keywords.",
    "zh": "Claude Code通过引入监控工具解决了这个问题，使智能体能够监控新的命令行输出，包括包含特定关键词的输出。"
  },
  {
    "id": 91,
    "start": 823.518,
    "end": 833.88,
    "en": "External Event Channels (connect_channel) push external events like new emails, API callbacks, or IM messages to the Agent in real time.",
    "zh": "外部事件通道（connect_channel）会实时将新邮件、API回调或即时消息等外部事件推送到智能体。"
  },
  {
    "id": 92,
    "start": 833.88,
    "end": 839.255,
    "en": "The Channel mechanism in PineClaw from the previous section is a typical implementation.",
    "zh": "前一节中PineClaw的通道机制是一个典型实现。"
  },
  {
    "id": 93,
    "start": 839.255,
    "end": 850.13,
    "en": "From a design perspective, event-triggered tools should define clear trigger conditions and filtering rules to prevent irrelevant events from waking the Agent and wasting computational resources.",
    "zh": "从设计角度看，事件触发工具应定义明确的触发条件和过滤规则，以防止无关事件唤醒智能体并浪费计算资源。"
  },
  {
    "id": 94,
    "start": 850.13,
    "end": 858.518,
    "en": "The event payload should contain sufficient context information to minimize the number of additional queries the Agent needs to make after being woken up.",
    "zh": "事件负载应包含足够的上下文信息，以减少智能体被唤醒后需要进行的额外查询次数。"
  },
  {
    "id": 95,
    "start": 858.518,
    "end": 861.155,
    "en": "User Communication Tools.",
    "zh": "用户通信工具。"
  },
  {
    "id": 96,
    "start": 861.155,
    "end": 867.53,
    "en": "User communication tools arise as communication channels between Agents and users diversify.",
    "zh": "随着智能体与用户之间通信渠道的多样化，用户通信工具应运而生。"
  },
  {
    "id": 97,
    "start": 867.53,
    "end": 880.705,
    "en": "Many Agents, such as Claude Code and Manus, use a native ReAct loop: everything the Agent “says” (an assistant message) is sent directly to the user, who must open a specific session in the app to converse with it.",
    "zh": "许多智能体，如Claude Code和Manus，使用原生的ReAct循环：智能体“所说”的一切（助理消息）都会直接发送给用户，用户必须在应用中打开特定会话才能与其对话。"
  },
  {
    "id": 98,
    "start": 880.705,
    "end": 884.98,
    "en": "The session often exposes the Agent's tool-call process.",
    "zh": "该会话通常会暴露智能体的工具调用过程。"
  },
  {
    "id": 99,
    "start": 885.148,
    "end": 887.71,
    "en": "OpenClaw breaks this pattern.",
    "zh": "OpenClaw打破了这一模式。"
  },
  {
    "id": 100,
    "start": 887.66,
    "end": 899.498,
    "en": "Users do not need to think in terms of individual sessions or follow the details of tool calls; both user and Agent can send messages at any time instead of alternating one request with one response.",
    "zh": "用户无需考虑单个会话或跟踪工具调用的细节；用户和智能体可以随时发送消息，而不是交替进行一次请求和一次响应。"
  },
  {
    "id": 101,
    "start": 899.498,
    "end": 906.885,
    "en": "This gives OpenClaw what many describe as a “human-like presence”, communicating asynchronously like a secretary.",
    "zh": "这使OpenClaw具有许多人描述的‘类人存在感’，像秘书一样异步沟通。"
  },
  {
    "id": 102,
    "start": 906.885,
    "end": 917.885,
    "en": "Rather than sending raw assistant messages, OpenClaw uses dedicated messaging tools whose messages can include images and files and can trigger push notifications based on urgency.",
    "zh": "OpenClaw不发送原始的助理消息，而是使用专用的通信工具，其消息可以包含图片和文件，并可根据紧急程度触发推送通知。"
  },
  {
    "id": 103,
    "start": 917.885,
    "end": 928.473,
    "en": "Beyond communicating with users through text, a growing number of Agents have multimodal communication capabilities, such as sending structured card messages or reminder emails.",
    "zh": "除了通过文本与用户沟通，越来越多的智能体具备多模态通信能力，例如发送结构化卡片消息或提醒邮件。"
  },
  {
    "id": 104,
    "start": 928.473,
    "end": 939.398,
    "en": "Some Agents have begun experimenting with Generative UI—using HTML and similar means to generate interactive interfaces that present information to the user in a friendlier way.",
    "zh": "一些智能体已经开始尝试生成式UI——使用HTML等方法生成交互界面，以更友好的方式向用户提供信息。"
  },
  {
    "id": 105,
    "start": 939.398,
    "end": 951.935,
    "en": "At the design level, user communication tools should support asynchronous messaging (the user may not be online), provide read/unread status tracking, and keep messages consistent across channels.",
    "zh": "在设计层面，用户通信工具应支持异步消息传递（用户可能未在线），提供已读/未读状态追踪，并保持跨渠道的消息一致性。"
  },
  {
    "id": 106,
    "start": 951.935,
    "end": 955.748,
    "en": "Multi-channel User Communication and Re-engagement.",
    "zh": "多渠道用户沟通与重新参与。"
  },
  {
    "id": 107,
    "start": 955.748,
    "end": 964.123,
    "en": "An Agent's response should not be limited to a single channel; the notification mechanism also serves as a user re-engagement mechanism.",
    "zh": "智能体的回应不应局限于单一渠道；通知机制同时也是一种用户重新参与的机制。"
  },
  {
    "id": 108,
    "start": 964.123,
    "end": 972.61,
    "en": "Message sending extends to instant messaging, SMS, email, phone calls, push notifications, and other channels.",
    "zh": "消息发送扩展到即时通讯、短信、电子邮件、电话、推送通知和其他渠道。"
  },
  {
    "id": 109,
    "start": 972.61,
    "end": 984.935,
    "en": "The Agent decides on the channel based on a combination of urgency, user status, content nature, and user preferences, ensuring important messages are not missed while avoiding redundant interruptions.",
    "zh": "智能体根据紧急程度、用户状态、内容性质和用户偏好综合判断选择渠道，确保重要信息不被遗漏，同时避免冗余干扰。"
  },
  {
    "id": 110,
    "start": 984.935,
    "end": 992.635,
    "en": "For long-running tasks, the Agent needs to proactively notify the user upon completion to bring the user's attention back.",
    "zh": "对于长期任务，智能体在完成时需要主动通知用户以将用户的注意力拉回。"
  },
  {
    "id": 111,
    "start": 992.635,
    "end": 1001.098,
    "en": "For periodic tasks (like daily summaries or weekly reports), notifications can help users develop a regular interaction habit.",
    "zh": "对于周期性任务（如每日摘要或周报），通知可以帮助用户养成定期互动的习惯。"
  },
  {
    "id": 112,
    "start": 1001.098,
    "end": 1005.923,
    "en": "User communication tools solve the problem of \"how to reach the user.",
    "zh": "用户沟通工具解决了“如何触达用户”的问题。"
  },
  {
    "id": 113,
    "start": 1005.923,
    "end": 1018.86,
    "en": "However, the identity the Agent assumes on these channels and the environment in which it performs actions on behalf of the user require a layer of identity and execution-environment infrastructure, which is the topic of the next section.",
    "zh": "然而，智能体在这些渠道上所采用的身份以及代表用户执行操作的环境，需要一个身份和执行环境的基础架构层，这是下一节的主题。"
  },
  {
    "id": 114,
    "start": 1018.86,
    "end": 1023.06,
    "en": "Virtual Identity and Isolated Execution Environment.",
    "zh": "虚拟身份与隔离执行环境。"
  },
  {
    "id": 115,
    "start": 1023.06,
    "end": 1031.285,
    "en": "Chapter 4 opens with Samantha in Her as an example, illustrating how an Agent uses tools to interact with the real digital world.",
    "zh": "第4章以Her中的Samantha为例，说明智能体如何使用工具与真实数字世界交互。"
  },
  {
    "id": 116,
    "start": 1031.285,
    "end": 1041.86,
    "en": "Achieving such a general-purpose assistant forces a key architectural choice: should the Agent manage the user's personal accounts directly, or hold a virtual identity of its own?",
    "zh": "实现这样一个通用助手迫使一个关键的架构选择：智能体应该直接管理用户的个人账户，还是拥有自己的虚拟身份？"
  },
  {
    "id": 117,
    "start": 1041.86,
    "end": 1049.298,
    "en": "Direct management looks convenient, but one Agent error or compromise exposes the user's entire digital identity.",
    "zh": "直接管理看似方便，但一旦智能体出现错误或被攻破，就会暴露用户的整个数字身份。"
  },
  {
    "id": 118,
    "start": 1049.298,
    "end": 1066.91,
    "en": "The safer approach is to give the Agent an independent virtual identity—the way a secretary has their own office phone and mailbox—comprising dedicated communication accounts, storage, and computing environments, so the Agent can work on the user's behalf under a transparent, clearly declared identity.",
    "zh": "更安全的做法是为智能体分配一个独立的虚拟身份——就像秘书有自己办公室的电话和邮箱一样——包括专用的通讯账号、存储和计算环境，这样智能体可以在用户授权的透明、明确声明的身份下代表用户工作。"
  },
  {
    "id": 119,
    "start": 1066.91,
    "end": 1072.348,
    "en": "This transparency does not weaken trust; it can make communication more authentic.",
    "zh": "这种透明性不会削弱信任；反而可以使沟通更加真实。"
  },
  {
    "id": 120,
    "start": 1072.348,
    "end": 1076.735,
    "en": "Virtual identities need isolated execution environments.",
    "zh": "虚拟身份需要隔离的执行环境。"
  },
  {
    "id": 121,
    "start": 1076.735,
    "end": 1088.373,
    "en": "Virtual computers (VMs/containers) and virtual phones (Android emulators) give the Agent operating-system isolation and full desktop or mobile capabilities.",
    "zh": "虚拟计算机（VM/容器）和虚拟手机（安卓模拟器）为智能体提供操作系统隔离以及完整的桌面或移动设备功能。"
  },
  {
    "id": 122,
    "start": 1088.373,
    "end": 1097.335,
    "en": "First, a virtual computer can run around the clock regardless of whether the user's device is online and without disrupting the apps the user is operating.",
    "zh": "首先，虚拟计算机可以全天候运行，无论用户的设备是否在线，也不会干扰用户正在操作的应用程序。"
  },
  {
    "id": 123,
    "start": 1097.335,
    "end": 1103.823,
    "en": "Second, an Agent error can at worst crash the virtual environment rather than the user's real device.",
    "zh": "其次，智能体出现错误最多只会导致虚拟环境崩溃，而不会影响用户的实际设备。"
  },
  {
    "id": 124,
    "start": 1103.823,
    "end": 1109.848,
    "en": "Finally, isolation prevents the Agent from freely accessing the user's local files.",
    "zh": "最后，隔离可以防止智能体自由访问用户的本地文件。"
  },
  {
    "id": 125,
    "start": 1110.004,
    "end": 1114.529,
    "en": "An independent identity also presents two practical challenges.",
    "zh": "独立的身份也会带来两个实际挑战。"
  },
  {
    "id": 126,
    "start": 1114.479,
    "end": 1122.966,
    "en": "First, there are anti-bot mechanisms: many websites use CAPTCHAs and IP reputation checks to block automated access.",
    "zh": "首先，存在反机器人机制：许多网站使用验证码和IP声誉检查来阻止自动化访问。"
  },
  {
    "id": 127,
    "start": 1122.966,
    "end": 1135.079,
    "en": "Virtual environments using data center IPs are easily identified; in practice, normal access often requires configuring a residential proxy network (which uses real household IPs).",
    "zh": "使用数据中心IP的虚拟环境很容易被识别；实际上，正常访问通常需要配置一个住宅代理网络（使用真实家庭IP）。"
  },
  {
    "id": 128,
    "start": 1135.079,
    "end": 1153.041,
    "en": "Second, access to the user's real accounts: when a task must log in as the user, use Human-in-the-Loop authentication—a VNC/RDP remote desktop where the user logs in personally, sees the full interface the Agent is operating, and understands why authentication is needed.",
    "zh": "其次，访问用户的实际账户：当任务需要以用户身份登录时，应使用人工在回路认证——通过VNC/RDP远程桌面，让用户亲自登录，看到智能体操作的完整界面，并理解为何需要认证。"
  },
  {
    "id": 129,
    "start": 1153.041,
    "end": 1161.454,
    "en": "The session token is then reused within its validity period to avoid interrupting the user repeatedly, balancing autonomy and security.",
    "zh": "会话令牌在有效期内会被重复使用，以避免反复中断用户，平衡自主性和安全性。"
  },
  {
    "id": 130,
    "start": 1161.454,
    "end": 1173.316,
    "en": "Data exchange between the Agent and virtual environments uses a shared file system: volume mounts such as /workspace/shared connect the Agent, virtual computer, and virtual phone.",
    "zh": "智能体与虚拟环境之间的数据交换使用共享文件系统：如/workspace/shared这样的卷挂载连接智能体、虚拟计算机和虚拟手机。"
  },
  {
    "id": 131,
    "start": 1173.316,
    "end": 1178.354,
    "en": "Data is passed by file-path reference rather than copied into context.",
    "zh": "数据通过文件路径引用传递，而不是复制到上下文中。"
  },
  {
    "id": 132,
    "start": 1178.354,
    "end": 1189.416,
    "en": "For example, a user uploads a CSV to the shared directory; the Agent in the virtual computer analyzes it and saves a chart there; the Agent returns only the chart's path.",
    "zh": "例如，用户将CSV文件上传到共享目录；虚拟计算机中的智能体分析它并在此处保存图表；智能体仅返回图表的路径。"
  },
  {
    "id": 133,
    "start": 1189.416,
    "end": 1192.891,
    "en": "Every handoff remains a lightweight path string.",
    "zh": "每次交接都保持为轻量级路径字符串。"
  },
  {
    "id": 134,
    "start": 1192.891,
    "end": 1206.229,
    "en": "Event-triggered tools allow the world to wake the Agent, user communication tools allow the Agent to reach the user, and virtual identities with isolated execution environments allow the Agent to act independently and auditably.",
    "zh": "事件触发工具让世界唤醒智能体，用户通信工具让智能体联系用户，具有隔离执行环境的虚拟身份让智能体能够独立且可审计地行动。"
  },
  {
    "id": 135,
    "start": 1206.229,
    "end": 1214.041,
    "en": "The remaining question is: when multiple events converge on the same Agent instance simultaneously, how should they be handled?",
    "zh": "剩下的问题是：当多个事件同时作用于同一个智能体实例时，应该如何处理？"
  },
  {
    "id": 136,
    "start": 1214.041,
    "end": 1216.466,
    "en": "Event Handling Mechanism.",
    "zh": "事件处理机制。"
  },
  {
    "id": 137,
    "start": 1216.466,
    "end": 1227.579,
    "en": "A single Agent instance may face multiple events concurrently: a new message from the user, a result from a tool, a timer expiring, a collaboration request from another Agent.",
    "zh": "一个AI Agent实例可能会同时面临多个事件：来自用户的最新消息、工具的结果、计时器到期、另一个AI Agent的协作请求。"
  },
  {
    "id": 138,
    "start": 1227.579,
    "end": 1233.954,
    "en": "How these events are handled efficiently and correctly directly impacts performance and user experience.",
    "zh": "这些事件如何被高效且正确地处理，直接影响性能和用户体验。"
  },
  {
    "id": 139,
    "start": 1233.954,
    "end": 1238.579,
    "en": "The skeleton of this mechanism is the event loop from concurrent programming.",
    "zh": "该机制的框架是并发编程中的事件循环。"
  },
  {
    "id": 140,
    "start": 1238.579,
    "end": 1261.354,
    "en": "Think of an asynchronous Agent as a long-running loop: each round takes a batch of events off the input queue, appends them to the trajectory, invokes the LLM once, executes the tools it decides to call, then returns to the top of the loop to wait for the next batch of events—the same structure as a Go goroutine reading messages from a channel and processing them round by round inside a for { select { ...",
    "zh": "将异步AI Agent视为一个长期运行的循环：每一回合从输入队列中取出一批事件，将其追加到轨迹中，调用一次大语言模型，执行它决定调用的工具，然后返回循环顶部等待下一批事件——其结构与Go协程从通道读取消息并在for { select { 循环中逐轮处理的结构相同。"
  },
  {
    "id": 141,
    "start": 1261.354,
    "end": 1267.704,
    "en": "In a traditional synchronous-interface implementation, events are consumed at the boundaries of each round.",
    "zh": "在传统的同步接口实现中，事件是在每一回合的边界处被处理的。"
  },
  {
    "id": 142,
    "start": 1267.704,
    "end": 1278.729,
    "en": "While the LLM is reasoning or a tool is executing, new events wait in a queue until the round reaches a safe point—the end of a stretch of reasoning or the return of a tool call.",
    "zh": "当大语言模型进行推理或工具正在执行时，新事件会排队等待，直到该回合到达一个安全点——即推理段的结束或工具调用的返回。"
  },
  {
    "id": 143,
    "start": 1278.729,
    "end": 1288.729,
    "en": "Native asynchrony allows new requirements to arrive while the model is still thinking or producing output, with the system choosing an appropriate moment to continue processing.",
    "zh": "原生异步性允许新需求在模型仍在思考或生成输出时到达，系统会在合适的时机继续处理。"
  },
  {
    "id": 144,
    "start": 1288.729,
    "end": 1292.429,
    "en": "Both have boundaries, managed by different layers.",
    "zh": "两者都有边界，由不同的层级管理。"
  },
  {
    "id": 145,
    "start": 1292.429,
    "end": 1305.379,
    "en": "Cancelling a tool still requires its executor to respond to a cancellation signal, much like checking ctx.Done() in Go; receiving a “stop” message does not itself undo actions that have already occurred.",
    "zh": "取消一个工具仍需要其执行器响应取消信号，就像在Go中检查ctx.Done()一样；接收到“停止”消息本身并不会撤销已经发生的操作。"
  },
  {
    "id": 146,
    "start": 1305.379,
    "end": 1323.466,
    "en": "With this distinction in mind, we first use an event loop compatible with synchronous interfaces to explain three strategies: let events wait for the next natural safe point (queuing), create a safe point early (cancellation), or start another loop without waiting for the main loop's safe point (parallel processing).",
    "zh": "考虑到这一区别，我们首先使用与同步接口兼容的事件循环来解释三种策略：让事件等待下一个自然安全点（排队）、提前创建一个安全点（取消），或在不等待主循环安全点的情况下启动另一个循环（并行处理）。"
  },
  {
    "id": 147,
    "start": 1323.466,
    "end": 1326.329,
    "en": "We return to native steering later.",
    "zh": "我们稍后会回到原生控制。"
  },
  {
    "id": 148,
    "start": 1326.329,
    "end": 1328.666,
    "en": "Structured Event Modeling.",
    "zh": "结构化事件建模。"
  },
  {
    "id": 149,
    "start": 1328.666,
    "end": 1331.416,
    "en": "Handling requires understanding.",
    "zh": "处理需要理解。"
  },
  {
    "id": 150,
    "start": 1331.416,
    "end": 1343.379,
    "en": "A general-purpose Agent's input doesn't come only from the user—a third-party message is not sent by the user to the Agent, yet the Agent must understand it, weigh its importance, and decide whether to step in.",
    "zh": "通用AI Agent的输入不仅来自用户——第三方消息并非由用户发送给AI Agent，但AI Agent必须理解它、评估其重要性，并决定是否介入。"
  },
  {
    "id": 151,
    "start": 1343.379,
    "end": 1348.554,
    "en": "This requires modeling each input as a structured event rich with semantics:",
    "zh": "这需要将每个输入建模为包含丰富语义的结构化事件："
  },
  {
    "id": 152,
    "start": 1348.554,
    "end": 1354.729,
    "en": "Source (who): The user themselves, a contact, a stranger, a system notification",
    "zh": "来源（谁）：用户自己、联系人、陌生人、系统通知"
  },
  {
    "id": 153,
    "start": 1354.729,
    "end": 1366.379,
    "en": "Channel (how): Phone call, SMS, instant message, email, social media, timer trigger, asynchronous tool call result, command-line monitoring status update",
    "zh": "渠道（如何）：电话、短信、即时消息、电子邮件、社交媒体、定时触发器、异步工具调用结果、命令行监控状态更新"
  },
  {
    "id": 154,
    "start": 1366.54,
    "end": 1373.027,
    "en": "Content (what): Message text, emotional tone, urgency, whether a reply is needed",
    "zh": "内容（什么）：消息文本、情感语气、紧急程度、是否需要回复"
  },
  {
    "id": 155,
    "start": 1372.977,
    "end": 1381.065,
    "en": "Context (background): Whether it's a reply to a previous conversation or a new communication, its relevance to the current task",
    "zh": "上下文（背景）：是否是对之前对话的回复或新的沟通，与当前任务的相关性"
  },
  {
    "id": 156,
    "start": 1381.065,
    "end": 1386.89,
    "en": "Taking a customer refund request email as an example, the structured event looks like this:",
    "zh": "以一封客户退款请求的电子邮件为例，结构化事件如下所示："
  },
  {
    "id": 157,
    "start": 1386.89,
    "end": 1391.627,
    "en": "Refer to the companion repository for the complete code implementation.",
    "zh": "请参考配套的代码仓库获取完整的代码实现。"
  },
  {
    "id": 158,
    "start": 1391.627,
    "end": 1407.54,
    "en": "Only when these dimensions are clearly modeled as structured events can the Agent maintain a clear understanding in multi-party communication, avoiding mistaking user input for a tool result, or mistaking a tool result containing hidden instructions for a user command (prompt injection).",
    "zh": "只有当这些维度被清晰地建模为结构化事件时，智能体才能在多方通信中保持清晰的理解，避免将用户输入误认为是工具结果，或者将包含隐藏指令的工具结果误认为是用户命令（提示注入）。"
  },
  {
    "id": 159,
    "start": 1407.54,
    "end": 1426.24,
    "en": "The complexity of multi-threaded context management also requires the Agent to understand the relationships between multiple conversation threads—how a message from a third party affects the user's mood, the user's role transitions across different conversations, and when to synthesize information from different threads to provide advice.",
    "zh": "多线程上下文管理的复杂性也要求智能体理解多个对话线程之间的关系——第三方消息如何影响用户的情绪、用户在不同对话中的角色转换，以及何时需要综合不同线程的信息来提供建议。"
  },
  {
    "id": 160,
    "start": 1426.24,
    "end": 1439.902,
    "en": "The trigger ecosystem of workflow platforms such as n8n makes the point: webhooks, timers, email, database changes, file watchers—each trigger is one of the Agent's \"senses\" for perceiving the world.",
    "zh": "工作流平台（如n8n）的触发生态系统说明了这一点：网络钩子、定时器、电子邮件、数据库更改、文件监视器——每个触发器都是智能体感知世界的“感官”。"
  },
  {
    "id": 161,
    "start": 1439.902,
    "end": 1454.565,
    "en": "Once these heterogeneous events are modeled uniformly in a structured format, the Agent can handle stimuli from different sources in a consistent way; the urgency determination and processing strategies discussed below all rest on this unified modeling.",
    "zh": "一旦这些异构事件以统一的结构化格式进行建模，智能体就可以以一致的方式处理来自不同来源的刺激；下面讨论的紧急程度判断和处理策略都建立在这种统一建模之上。"
  },
  {
    "id": 162,
    "start": 1454.565,
    "end": 1458.302,
    "en": "Dynamic Processing Strategy Based on Urgency.",
    "zh": "基于紧急程度的动态处理策略。"
  },
  {
    "id": 163,
    "start": 1458.302,
    "end": 1467.69,
    "en": "Humans juggling multiple tasks adapt their strategy to urgency: an emergency makes them drop what they're doing; a routine to-do goes on the list for later.",
    "zh": "人类在同时处理多项任务时会根据紧急程度调整策略：紧急情况会使他们暂停当前工作；常规待办事项则会列入后续处理列表。"
  },
  {
    "id": 164,
    "start": 1467.69,
    "end": 1471.727,
    "en": "An Agent's event handling should show the same intelligence.",
    "zh": "智能体的事件处理应展现出同样的智能。"
  },
  {
    "id": 165,
    "start": 1471.727,
    "end": 1477.965,
    "en": "As illustrated in Figure 6-2: Three Strategies for Asynchronous Event Processing.",
    "zh": "如图6-2所示：异步事件处理的三种策略。"
  },
  {
    "id": 166,
    "start": 1477.965,
    "end": 1491.277,
    "en": "Cancellation-Based Processing is used for urgent events; its essence is forcing a safe point early for the urgent event: proactively interrupting the current step to turn this instant into a boundary at which the new event can be consumed.",
    "zh": "基于取消的处理用于紧急事件；其本质是为紧急事件强制提前设置一个安全点：主动中断当前步骤，将此瞬间变为可接收新事件的边界。"
  },
  {
    "id": 167,
    "start": 1491.277,
    "end": 1522.665,
    "en": "When an urgent event arrives (e.g., the user clicks \"stop\" or a supervisory system sends a high-priority instruction): (1) Stop the current operation—if the LLM is reasoning, immediately cancel the streaming response; if a synchronous tool is executing, send a cancel signal; (2) Drain the pending queue by removing all pending events; (3) Append those events together with the urgent event to the end of the trajectory; (4) Immediately re-invoke the LLM with the updated complete trajectory as",
    "zh": "当紧急事件到达时（例如用户点击“停止”或监督系统发送高优先级指令）：(1) 停止当前操作—如果LLM正在推理，立即取消流式响应；如果同步工具正在执行，发送取消信号；(2) 清空待处理队列，移除所有待处理事件；(3) 将这些事件与紧急事件一起添加到轨迹末尾；(4) 立即重新调用LLM，将更新后的完整轨迹作为"
  },
  {
    "id": 168,
    "start": 1522.665,
    "end": 1525.452,
    "en": "input to assess the situation.",
    "zh": "输入以评估情况。"
  },
  {
    "id": 169,
    "start": 1525.452,
    "end": 1529.077,
    "en": "For example, if the user inputs \"Stop!",
    "zh": "例如，如果用户输入“停止！”"
  },
  {
    "id": 170,
    "start": 1529.077,
    "end": 1541.59,
    "en": "I said the wrong thing\" while the Agent is about to perform a potentially erroneous operation, the Agent will immediately see this new input, reassess what the user intended, and thus avoid executing the wrong action.",
    "zh": "我在说错话”时，智能体即将执行一个可能有错误的操作，智能体会立即看到这个新输入，重新评估用户的意图，从而避免执行错误的操作。"
  },
  {
    "id": 171,
    "start": 1541.59,
    "end": 1545.09,
    "en": "Queued Processing is used for routine events.",
    "zh": "队列处理用于常规事件。"
  },
  {
    "id": 172,
    "start": 1545.09,
    "end": 1569.327,
    "en": "When a non-urgent event arrives (e.g., an asynchronous tool returns a result or the user sends supplementary information): (1) Add the event to the end of the queue without interrupting the current operation; (2) Wait for the current operation to complete—let the LLM finish reasoning, let the synchronous tool finish executing; (3) When any tool call completes and returns a tool.result, check the queue.",
    "zh": "当非紧急事件到达时（例如异步工具返回结果或用户发送补充信息）：(1) 将事件添加到队列末尾而不中断当前操作；(2) 等待当前操作完成—让LLM完成推理，让同步工具完成执行；(3) 当任何工具调用完成并返回工具结果时，检查队列。"
  },
  {
    "id": 173,
    "start": 1569.327,
    "end": 1578.39,
    "en": "If the queue is non-empty, append all events to the trajectory at once; (4) The LLM processes the updated trajectory comprehensively.",
    "zh": "如果队列不为空，一次性将所有事件添加到轨迹中；(4) LLM全面处理更新后的轨迹。"
  },
  {
    "id": 174,
    "start": 1578.39,
    "end": 1589.59,
    "en": "This enables batch processing, improving efficiency—for example, while the Agent is waiting for a search tool result, the user adds \"only show results from the last month.",
    "zh": "这实现了批量处理，提高效率—例如，当智能体等待搜索工具的结果时，用户添加了“只显示最近一个月的结果。”"
  },
  {
    "id": 175,
    "start": 1589.59,
    "end": 1599.502,
    "en": "This supplementary information enters the queue, and when the search results return, both events are presented to the LLM together, avoiding unnecessary round trips.",
    "zh": "这条补充信息进入队列，当搜索结果返回时，这两个事件会同时呈现给LLM，避免不必要的往返。"
  },
  {
    "id": 176,
    "start": 1599.652,
    "end": 1604.202,
    "en": "Parallel Processing is used for independent, lightweight queries.",
    "zh": "并行处理用于独立、轻量级的查询。"
  },
  {
    "id": 177,
    "start": 1604.152,
    "end": 1611.739,
    "en": "For example, while the Agent is analyzing a large amount of data, the user suddenly asks, \"What's the weather like today?",
    "zh": "例如，当智能体正在分析大量数据时，用户突然问：“今天天气怎么样？”"
  },
  {
    "id": 178,
    "start": 1611.739,
    "end": 1620.877,
    "en": "Such queries have three characteristics: they are unrelated to the main task, require a quick response, and have low execution cost.",
    "zh": "这类查询有三个特点：与主要任务无关，需要快速响应，执行成本低。"
  },
  {
    "id": 179,
    "start": 1620.877,
    "end": 1630.114,
    "en": "Neither cancellation-based (would interrupt the important main task) nor queued processing (would make the user wait too long) is suitable.",
    "zh": "既不适合基于取消的处理（会中断重要的主任务），也不适合队列处理（会让用户等待太久）。"
  },
  {
    "id": 180,
    "start": 1630.114,
    "end": 1641.964,
    "en": "The system first assesses the query's independence and complexity, then executes it independently in a parallel reasoning session, calling necessary tools to generate a response and returning it immediately.",
    "zh": "系统首先评估查询的独立性和复杂性，然后在并行推理会话中独立执行，调用必要的工具生成响应并立即返回。"
  },
  {
    "id": 181,
    "start": 1641.964,
    "end": 1652.064,
    "en": "The query and response are appended to the main task's trajectory, clearly marked as \"executed in parallel with the main task\" to avoid confusing the LLM.",
    "zh": "查询和响应被追加到主任务的轨迹中，并明确标记为“与主任务并行执行”，以避免混淆大语言模型。"
  },
  {
    "id": 182,
    "start": 1652.064,
    "end": 1654.364,
    "en": "Urgency Determination.",
    "zh": "紧急程度判断。"
  },
  {
    "id": 183,
    "start": 1654.364,
    "end": 1669.614,
    "en": "Urgent events: User interrupt (user.interrupt), supervisor instruction (supervisor.instruction), inter-Agent interrupt (agent.interrupt), external triggers marked as urgent (e.g., system alerts, payment failures).",
    "zh": "紧急事件：用户中断（user.interrupt）、主管指令（supervisor.instruction）、智能体中断（agent.interrupt）、标记为紧急的外部触发（例如系统警报、支付失败）。"
  },
  {
    "id": 184,
    "start": 1669.614,
    "end": 1682.839,
    "en": "Non-urgent events: Regular user input (user.input), Agent input (agent.input), tool results (tool.result), timer triggers (timer.trigger), regular external triggers.",
    "zh": "非紧急事件：常规用户输入（user.input）、智能体输入（agent.input）、工具结果（tool.result）、定时器触发（timer.trigger）、常规外部触发。"
  },
  {
    "id": 185,
    "start": 1682.839,
    "end": 1698.814,
    "en": "Hardcoded rules have limitations; the semantics of the event dictate the handling method—\"Stop immediately!\" uses cancellation-based processing, \"What's the weather like today?\" uses parallel processing, \"Send the report in Chinese\" uses queued processing.",
    "zh": "硬编码规则有局限性；事件的语义决定了处理方法——“立即停止！”使用取消式处理，“今天天气怎么样？”使用并行处理，“用中文发送报告”使用队列式处理。"
  },
  {
    "id": 186,
    "start": 1698.814,
    "end": 1707.652,
    "en": "It is recommended to use a lightweight classification LLM as an event router, quickly determining which strategy to adopt when an event arrives.",
    "zh": "建议使用轻量级分类大语言模型作为事件路由，快速确定事件到达时应采用哪种策略。"
  },
  {
    "id": 187,
    "start": 1707.652,
    "end": 1719.189,
    "en": "A cancellation point must be a position where the tool or the reasoning can wind down safely; an unfinished tool result is represented by an explicit placeholder and must never be faked as a success.",
    "zh": "取消点必须是工具或推理可以安全地收尾的位置；未完成的工具结果由显式的占位符表示，绝不能假装为成功。"
  },
  {
    "id": 188,
    "start": 1719.189,
    "end": 1728.389,
    "en": "The following experiment, an event-driven email processing Agent, implements the event handling strategies discussed above into a runnable implementation.",
    "zh": "以下实验是一个事件驱动的电子邮件处理智能体，将上述讨论的事件处理策略实现为可运行的代码。"
  },
  {
    "id": 189,
    "start": 1728.556,
    "end": 1735.356,
    "en": "Experiment 6-1 advanced difficulty, three stars: : Event-Driven Email Processing Agent",
    "zh": "实验6-1 高难度，三颗星：事件驱动的电子邮件处理智能体"
  },
  {
    "id": 190,
    "start": 1735.306,
    "end": 1741.943,
    "en": "As illustrated in Figure 6-3: Experiment 6-1 Event-Driven Agent Architecture.",
    "zh": "如图6-3所示：实验6-1 事件驱动智能体架构。"
  },
  {
    "id": 191,
    "start": 1741.943,
    "end": 1748.281,
    "en": "This experiment builds the simplest event-driven Agent: an Automated Email Processing Assistant.",
    "zh": "此实验构建了最简单的事件驱动智能体：自动化电子邮件处理助手。"
  },
  {
    "id": 192,
    "start": 1748.281,
    "end": 1761.893,
    "en": "The Agent monitors the email inbox, and whenever a new email arrives, it automatically triggers a processing workflow—classification, summarization, draft reply, and notifying the user if necessary.",
    "zh": "智能体监控电子邮件收件箱，每当有新邮件到达时，会自动触发处理流程——分类、摘要、草拟回复，并在需要时通知用户。"
  },
  {
    "id": 193,
    "start": 1761.893,
    "end": 1771.731,
    "en": "This is the most intuitive introductory scenario for an event-driven Agent: an external event (new email arrival) triggers a complete Agent thinking cycle.",
    "zh": "这是事件驱动智能体最直观的入门场景：外部事件（新邮件到达）触发完整的智能体思考周期。"
  },
  {
    "id": 194,
    "start": 1771.731,
    "end": 1783.118,
    "en": "Experiment Objective: to understand the core idea of event-driven architecture—the Agent no longer waits passively for user input but acts on its own in response to external events.",
    "zh": "实验目标：理解事件驱动架构的核心思想——智能体不再被动等待用户输入，而是根据外部事件自主行动。"
  },
  {
    "id": 195,
    "start": 1783.118,
    "end": 1793.481,
    "en": "Through this experiment, readers will master the basic closed loop of event source registration, the event queue, and \"event arrives → Agent processes → result delivered\".",
    "zh": "通过此实验，读者将掌握事件源注册、事件队列以及“事件到达 → 智能体处理 → 结果交付”的基本闭环。"
  },
  {
    "id": 196,
    "start": 1793.481,
    "end": 1796.218,
    "en": "Event Sources and Event Queue.",
    "zh": "事件源与事件队列。"
  },
  {
    "id": 197,
    "start": 1796.218,
    "end": 1800.818,
    "en": "The system supports unified access for multiple event sources:",
    "zh": "系统支持多种事件源的统一接入："
  },
  {
    "id": 198,
    "start": 1800.818,
    "end": 1810.806,
    "en": "Email Events (on_email_received): Triggered when a new email arrives, either by periodically checking the inbox or receiving push notifications.",
    "zh": "邮件事件（on_email_received）：当新邮件到达时触发，可通过定期检查收件箱或接收推送通知实现。"
  },
  {
    "id": 199,
    "start": 1810.806,
    "end": 1820.968,
    "en": "IM/SMS Messages (on_im_message, on_sms_message): Triggered by instant messages or SMS messages.",
    "zh": "即时通讯/短信消息（on_im_message, on_sms_message）：由即时消息或短信触发。"
  },
  {
    "id": 200,
    "start": 1820.968,
    "end": 1831.731,
    "en": "GitHub Events (on_github_pr_update, on_github_issue_update): Triggered by PR review comments or status changes.",
    "zh": "GitHub事件（on_github_pr_update, on_github_issue_update）：由PR评审评论或状态变化触发。"
  },
  {
    "id": 201,
    "start": 1831.731,
    "end": 1840.681,
    "en": "Timer Triggers (on_timer_expire): Triggered by scheduled tasks (e.g., daily summaries, weekly report generation).",
    "zh": "定时器触发（on_timer_expire）：由计划任务触发（例如，每日摘要、周报生成）。"
  },
  {
    "id": 202,
    "start": 1840.681,
    "end": 1846.743,
    "en": "Webhooks (on_webhook_received): Generic callbacks from external systems.",
    "zh": "网络钩子（on_webhook_received）：来自外部系统的通用回调。"
  },
  {
    "id": 203,
    "start": 1846.743,
    "end": 1857.356,
    "en": "System Events (on_user_inactive, on_process_timeout, on_resource_alert): Triggered by internal state changes.",
    "zh": "系统事件（on_user_inactive, on_process_timeout, on_resource_alert）：由内部状态变化触发。"
  },
  {
    "id": 204,
    "start": 1857.356,
    "end": 1863.181,
    "en": "All events enter a unified event queue and are processed sequentially in order of arrival.",
    "zh": "所有事件进入统一事件队列，并按到达顺序依次处理。"
  },
  {
    "id": 205,
    "start": 1863.181,
    "end": 1886.806,
    "en": "Each event triggers an independent Agent thinking loop: the Agent reads the event content, calls relevant tools (e.g., querying the knowledge base, reading attachments, searching related email history), generates a processing result (classification labels, summaries, draft replies), and finally either notifies the user via notification tools or directly executes an action.",
    "zh": "每个事件触发一个独立的智能体思考循环：智能体读取事件内容，调用相关工具（例如，查询知识库、阅读附件、搜索相关邮件历史），生成处理结果（分类标签、摘要、草稿回复），最后通过通知工具告知用户或直接执行操作。"
  },
  {
    "id": 206,
    "start": 1886.806,
    "end": 1892.143,
    "en": "Validation Scenario: Configure the Agent to monitor a test mailbox.",
    "zh": "验证场景：配置智能体监控测试邮箱。"
  },
  {
    "id": 207,
    "start": 1892.143,
    "end": 1899.518,
    "en": "Simulate receiving three emails—a meeting invitation, a customer complaint, and a marketing advertisement.",
    "zh": "模拟接收三封邮件——会议邀请、客户投诉和营销广告。"
  },
  {
    "id": 208,
    "start": 1899.518,
    "end": 1919.481,
    "en": "The Agent processes them sequentially: for the meeting invitation, it automatically checks for calendar conflicts and drafts an accept/decline reply; for the customer complaint, it extracts key information, marks it as high priority, and notifies the user to handle it; for the marketing advertisement, it automatically archives it.",
    "zh": "智能体按顺序处理它们：对于会议邀请，它会自动检查日历冲突并起草接受/拒绝回复；对于客户投诉，它会提取关键信息，标记为高优先级，并通知用户处理；对于营销广告，它会自动归档。"
  },
  {
    "id": 209,
    "start": 1919.481,
    "end": 1923.393,
    "en": "The entire process requires no user intervention.",
    "zh": "整个过程无需用户干预。"
  },
  {
    "id": 210,
    "start": 1923.393,
    "end": 1931.706,
    "en": "Experiment 6-1 demonstrates the simplest event-driven pattern—events enter a queue, and the Agent processes them sequentially.",
    "zh": "实验6-1演示了最简单的事件驱动模式——事件进入队列，智能体按顺序处理。"
  },
  {
    "id": 211,
    "start": 1931.706,
    "end": 1943.043,
    "en": "However, when the Agent needs to respond to interruptions during long-running tool executions, or manage multiple concurrent tasks simultaneously, a simple event queue is insufficient.",
    "zh": "然而，当智能体需要在长时间运行的工具调用过程中响应中断，或同时管理多个并发任务时，简单的事件队列是不够的。"
  },
  {
    "id": 212,
    "start": 1943.043,
    "end": 1946.893,
    "en": "Next, we discuss deeper engineering challenges.",
    "zh": "接下来，我们讨论更深入的工程挑战。"
  },
  {
    "id": 213,
    "start": 1946.893,
    "end": 1950.756,
    "en": "Compatibility When Native Asynchrony Is Unavailable.",
    "zh": "当原生异步不可用时的兼容性问题。"
  },
  {
    "id": 214,
    "start": 1950.756,
    "end": 1958.718,
    "en": "Experiment 6-1 handles only serial events: events enter the queue, and the Agent processes them one after another.",
    "zh": "实验6-1仅处理串行事件：事件进入队列，智能体依次处理。"
  },
  {
    "id": 215,
    "start": 1958.718,
    "end": 1967.943,
    "en": "If the chosen model or interface does not support native asynchrony, a user interruption before a tool returns must be expressed within a synchronous format.",
    "zh": "如果所选模型或接口不支持原生异步，用户在工具返回前的中断必须以同步格式表达。"
  },
  {
    "id": 216,
    "start": 1967.943,
    "end": 1975.118,
    "en": "We introduce a compatibility approach here, then discuss GPT-6 Astra's native interface later.",
    "zh": "我们在这里介绍一种兼容方法，之后再讨论GPT-6 Astra的原生接口。"
  },
  {
    "id": 217,
    "start": 1975.118,
    "end": 1981.593,
    "en": "Suppose the Agent is helping a user draft an email and has called a tool to search for contact information.",
    "zh": "假设智能体正在帮助用户起草一封电子邮件，并已调用工具搜索联系信息。"
  },
  {
    "id": 218,
    "start": 1981.593,
    "end": 1987.768,
    "en": "Before the search returns, the user says, “Wait, first check tomorrow's weather for me.",
    "zh": "在搜索返回之前，用户说：“等一下，先帮我查明天的天气。”"
  },
  {
    "id": 219,
    "start": 1987.768,
    "end": 1997.643,
    "en": "If the interface requires outstanding tool calls to receive their corresponding results first, the Agent cannot directly process this new message with a call still pending.",
    "zh": "如果接口要求未完成的工具调用必须首先获得对应的结果，那么智能体无法直接处理这个新消息，因为仍有调用未完成。"
  },
  {
    "id": 220,
    "start": 1997.643,
    "end": 2004.868,
    "en": "This restriction comes from the chosen combination of protocol and model; it is not a rule every LLM must follow.",
    "zh": "这种限制来自于所选协议和模型的组合；并不是每个大语言模型都必须遵循的规则。"
  },
  {
    "id": 221,
    "start": 2004.868,
    "end": 2009.281,
    "en": "An Asynchronous Implementation Compatible with a Synchronous Format.",
    "zh": "与同步格式兼容的异步实现。"
  },
  {
    "id": 222,
    "start": 2009.452,
    "end": 2021.564,
    "en": "The core idea is: Under normal conditions without interruptions, let the LLM see a standard synchronous trajectory; only when an interruption occurs, insert placeholders to fix the format.",
    "zh": "核心思想是：在没有中断的正常情况下，让大语言模型看到标准的同步轨迹；只有在发生中断时，插入占位符以固定格式。"
  },
  {
    "id": 223,
    "start": 2021.514,
    "end": 2024.027,
    "en": "Here are five key rules:",
    "zh": "这里有五条关键规则："
  },
  {
    "id": 224,
    "start": 2024.027,
    "end": 2030.214,
    "en": "Rule 1: Promptly record completed assistant messages and tool-call items from the API.",
    "zh": "规则1：及时记录来自API的已完成的助手消息和工具调用项。"
  },
  {
    "id": 225,
    "start": 2030.214,
    "end": 2038.489,
    "en": "Preserve server-managed reasoning state according to the provider's continuation protocol; do not assemble invisible reasoning text yourself.",
    "zh": "根据提供方的延续协议保留由服务器管理的推理状态；不要自行组装不可见的推理文本。"
  },
  {
    "id": 226,
    "start": 2038.489,
    "end": 2043.502,
    "en": "Rule 2: Record the tool result only when the tool call is complete.",
    "zh": "规则2：只有在工具调用完成后，才记录工具结果。"
  },
  {
    "id": 227,
    "start": 2043.502,
    "end": 2048.402,
    "en": "The trajectory is in a \"partially completed\" state during execution.",
    "zh": "执行过程中，轨迹处于“部分完成”状态。"
  },
  {
    "id": 228,
    "start": 2048.402,
    "end": 2053.564,
    "en": "Rule 3: Interruptions during tool execution require placeholders.",
    "zh": "规则3：工具执行期间的中断需要占位符。"
  },
  {
    "id": 229,
    "start": 2053.564,
    "end": 2065.202,
    "en": "Generate a placeholder response for the unfinished tool (e.g., \"The tool is executing in the background, please prioritize the new event\"), append the interruption event, and re-invoke the LLM.",
    "zh": "为未完成的工具生成占位符响应（例如，“工具在后台执行，请优先处理新事件”），追加中断事件，并重新调用LLM。"
  },
  {
    "id": 230,
    "start": 2065.202,
    "end": 2070.789,
    "en": "From the LLM's perspective, the assistant message still has a paired tool result.",
    "zh": "从LLM的角度来看，助手消息仍然有对应的工具结果。"
  },
  {
    "id": 231,
    "start": 2070.789,
    "end": 2084.314,
    "en": "Rule 4: Without native steering or a supported mid-turn continuation interface, cancel unfinished generation, retain confirmed completed messages and tool state, append the new event, and send a new request.",
    "zh": "规则4：如果没有原生控制或支持中途继续的接口，则取消未完成的生成，保留已确认的已完成消息和工具状态，追加新事件，并发送新的请求。"
  },
  {
    "id": 232,
    "start": 2084.314,
    "end": 2090.514,
    "en": "Do not assume that partial output or hidden reasoning can be freely fed back as a valid prefix.",
    "zh": "不要假设部分输出或隐藏的推理可以自由地作为有效前缀反馈。"
  },
  {
    "id": 233,
    "start": 2090.514,
    "end": 2095.539,
    "en": "Rule 5: Non-interrupting events enter the queue for batch processing.",
    "zh": "规则5：非中断事件进入队列进行批量处理。"
  },
  {
    "id": 234,
    "start": 2095.539,
    "end": 2100.052,
    "en": "They are appended all at once only after the current cycle is complete.",
    "zh": "只有在当前周期完成后，才会一次性追加所有事件。"
  },
  {
    "id": 235,
    "start": 2100.052,
    "end": 2108.627,
    "en": "Using the example of the Agent drafting an email when the user interrupts to ask about the weather, the operation of these five rules is as follows:",
    "zh": "以Agent起草邮件时用户中断询问天气为例，这五条规则的操作如下："
  },
  {
    "id": 236,
    "start": 2108.627,
    "end": 2117.577,
    "en": "The Agent calls search_contacts to search for contact information, and the assistant message is immediately written to the trajectory (Rule 1).",
    "zh": "Agent调用search_contacts搜索联系人信息，并立即把助手消息写入轨迹（规则1）。"
  },
  {
    "id": 237,
    "start": 2117.577,
    "end": 2123.864,
    "en": "Before the search tool returns results, the user sends \"First check tomorrow's weather for me.",
    "zh": "在搜索工具返回结果之前，用户发送了“先帮我查明天的天气。”"
  },
  {
    "id": 238,
    "start": 2123.864,
    "end": 2140.814,
    "en": "Since this is a user interruption, the system generates a placeholder tool result for the unfinished search_contacts (\"The tool is executing in the background, please prioritize the new event\", Rule 3), then appends the user's weather query to the trajectory and re-invokes the LLM.",
    "zh": "由于这是用户中断，系统为未完成的search_contacts生成占位符工具结果（“工具在后台执行，请优先处理新事件”，规则3），然后将用户的天气查询追加到轨迹中并重新调用LLM。"
  },
  {
    "id": 239,
    "start": 2140.814,
    "end": 2149.577,
    "en": "At this point, the trajectory format seen by the LLM is completely valid—the assistant message and tool result are perfectly paired.",
    "zh": "此时LLM看到的轨迹格式完全有效——助手消息和工具结果完美配对。"
  },
  {
    "id": 240,
    "start": 2149.577,
    "end": 2158.764,
    "en": "After the Agent answers the weather query, the original search_contacts result arrives and is appended to the trajectory as a new event (Rule 2).",
    "zh": "在Agent回答完天气查询后，原始的search_contacts结果到达，并作为新事件追加到轨迹中（规则2）。"
  },
  {
    "id": 241,
    "start": 2158.764,
    "end": 2163.589,
    "en": "The Agent reads the contact information and continues drafting the email.",
    "zh": "智能体读取联系人信息并继续撰写电子邮件。"
  },
  {
    "id": 242,
    "start": 2163.589,
    "end": 2169.277,
    "en": "This approach maintains the tool/result pairing required by a synchronous interface.",
    "zh": "这种方法保持了同步接口所需的工具/结果配对。"
  },
  {
    "id": 243,
    "start": 2169.277,
    "end": 2175.277,
    "en": "A placeholder explicitly marked “unfinished” is introduced only when an interruption is needed.",
    "zh": "只有在需要中断时，才会引入明确标记为“未完成”的占位符。"
  },
  {
    "id": 244,
    "start": 2175.277,
    "end": 2181.877,
    "en": "When the real background result arrives, it enters the trajectory as an event with a source and task ID.",
    "zh": "当真实背景结果到达时，它会作为带有来源和任务ID的事件进入轨迹。"
  },
  {
    "id": 245,
    "start": 2181.877,
    "end": 2190.714,
    "en": "For models that already support native asynchrony, the system can retain the task's pending state and pass the real result to the model when it arrives.",
    "zh": "对于已经支持原生异步的模型，系统可以保留任务的待处理状态，并在结果到达时将其传递给模型。"
  },
  {
    "id": 246,
    "start": 2190.714,
    "end": 2201.527,
    "en": "Placeholders also carry a semantic risk: the model may confuse “task started” with “task completed” and make a decision that depends on a result before that result arrives.",
    "zh": "占位符也携带语义风险：模型可能会将“任务开始”与“任务完成”混淆，并在结果到达前做出依赖于该结果的决策。"
  },
  {
    "id": 247,
    "start": 2201.527,
    "end": 2209.927,
    "en": "Clear task state and result validation should prevent this confusion, and evaluation should check for fabricated data that has not yet arrived.",
    "zh": "清晰的任务状态和结果验证应能防止这种混淆，评估应检查尚未到达的伪造数据。"
  },
  {
    "id": 248,
    "start": 2209.927,
    "end": 2215.777,
    "en": "A single failure does not justify attributing the cause to an undisclosed training process.",
    "zh": "一次失败不足以归因于未公开的训练过程。"
  },
  {
    "id": 249,
    "start": 2215.777,
    "end": 2219.714,
    "en": "Expressing Asynchronous Semantics Through Task Handles.",
    "zh": "通过任务句柄表达异步语义。"
  },
  {
    "id": 250,
    "start": 2219.714,
    "end": 2227.139,
    "en": "Whether or not a native asynchronous protocol is used, tool-interface design can make asynchronous semantics explicit.",
    "zh": "无论是否使用原生异步协议，工具接口设计都可以使异步语义显式化。"
  },
  {
    "id": 251,
    "start": 2227.139,
    "end": 2234.864,
    "en": "One approach especially useful for synchronous interfaces is to make “start task” a complete call with a real return value.",
    "zh": "一种特别适用于同步接口的方法是将“启动任务”作为一个完整的调用，并返回一个真实的返回值。"
  },
  {
    "id": 252,
    "start": 2234.864,
    "end": 2240.177,
    "en": "Traditional tool design implies a \"call equals completion\" semantics.",
    "zh": "传统工具设计暗示了“调用即完成”的语义。"
  },
  {
    "id": 253,
    "start": 2240.177,
    "end": 2248.714,
    "en": "For example, the name phone_call suggests \"calling will dial the phone and wait for the call to end, returning the call log.",
    "zh": "例如，名称 phone_call 暗示“拨打电话并将等待通话结束，返回通话记录”。"
  },
  {
    "id": 254,
    "start": 2248.714,
    "end": 2254.664,
    "en": "Under the asynchronous paradigm, \"initiation\" and \"completion\" should be decoupled:",
    "zh": "在异步范式中，“启动”和“完成”应该解耦："
  },
  {
    "id": 255,
    "start": 2254.664,
    "end": 2265.502,
    "en": "initiate_phone_call: Initiates a phone call, immediately returning a task identifier and initial status (e.g., \"Call initiated, dialing...",
    "zh": "initiate_phone_call：启动电话呼叫，立即返回一个任务标识符和初始状态（例如，“已发起呼叫，正在拨号...”）"
  },
  {
    "id": 256,
    "start": 2265.502,
    "end": 2273.727,
    "en": "Call progress is communicated via event notifications (phone_call_connected, phone_call_ended)",
    "zh": "通话进度通过事件通知（phone_call_connected，phone_call_ended）进行传达"
  },
  {
    "id": 257,
    "start": 2273.884,
    "end": 2279.571,
    "en": "The key is that the tool's name and description themselves should convey asynchronous semantics.",
    "zh": "关键是工具的名称和描述本身应该传达异步语义。"
  },
  {
    "id": 258,
    "start": 2279.521,
    "end": 2289.346,
    "en": "When the model sees initiate_phone_call, its language understanding capabilities will naturally infer this is \"initiating\" rather than \"completing.",
    "zh": "当模型看到initiate_phone_call时，其语言理解能力会自然推断出这是“发起”而不是“完成”。"
  },
  {
    "id": 259,
    "start": 2289.346,
    "end": 2296.534,
    "en": "The tool description should further reinforce this: \"This tool initiates a phone call task handled by a sub-agent.",
    "zh": "工具描述应进一步强化这一点：“此工具由子智能体处理的电话呼叫任务。”"
  },
  {
    "id": 260,
    "start": 2296.534,
    "end": 2303.571,
    "en": "It returns the task ID immediately upon successful initiation, allowing you to continue with other matters.",
    "zh": "在成功启动后立即返回任务ID，使您可以继续处理其他事务。"
  },
  {
    "id": 261,
    "start": 2303.571,
    "end": 2307.671,
    "en": "A separate notification event will be sent when the call ends.",
    "zh": "通话结束时会发送单独的通知事件。"
  },
  {
    "id": 262,
    "start": 2307.671,
    "end": 2311.409,
    "en": "Overlooking Earlier Events in Queue-Based Processing.",
    "zh": "在基于队列的处理中忽略早期事件。"
  },
  {
    "id": 263,
    "start": 2311.409,
    "end": 2318.709,
    "en": "When processing events in a batch, a model may respond only to the last event and overlook earlier requirements.",
    "zh": "在批量处理事件时，模型可能只对最后一个事件作出响应，而忽略之前的请求。"
  },
  {
    "id": 264,
    "start": 2318.709,
    "end": 2326.909,
    "en": "Native asynchrony addresses whether messages can arrive during execution; we must still check whether the model incorporates all updates.",
    "zh": "原生异步性解决的是消息是否可以在执行期间到达的问题；我们仍需检查模型是否包含了所有更新。"
  },
  {
    "id": 265,
    "start": 2326.909,
    "end": 2330.046,
    "en": "Intervention can be applied at two levels:",
    "zh": "干预可以分两个层次进行："
  },
  {
    "id": 266,
    "start": 2330.046,
    "end": 2338.584,
    "en": "Prompt Level: Inform the model, \"When you receive multiple consecutive events, please ensure you comprehensively consider all the information.",
    "zh": "提示层：告知模型，“当您接收到多个连续事件时，请确保全面考虑所有信息。”"
  },
  {
    "id": 267,
    "start": 2338.584,
    "end": 2343.596,
    "en": "Agent Status Bar Markers: Add explicit markers before each event:",
    "zh": "智能体状态栏标记：在每个事件前添加显式标记："
  },
  {
    "id": 268,
    "start": 2343.596,
    "end": 2348.334,
    "en": "Refer to the companion repository for the complete code implementation.",
    "zh": "请参考配套仓库中的完整代码实现。"
  },
  {
    "id": 269,
    "start": 2348.334,
    "end": 2358.096,
    "en": "Add a summary at the end: \"There are 4 unprocessed events above, including 1 tool result, 2 user messages, and 1 system reminder.",
    "zh": "在最后添加一个总结：“以上有4个未处理的事件，包括1个工具结果、2条用户消息和1条系统提醒。”"
  },
  {
    "id": 270,
    "start": 2358.096,
    "end": 2361.721,
    "en": "Please ensure your response covers all the information.",
    "zh": "请确保您的回复涵盖所有信息。"
  },
  {
    "id": 271,
    "start": 2361.721,
    "end": 2370.396,
    "en": "Experiment 6-2 advanced difficulty, three stars: : Asynchronous Agent with Parallel Execution and Interruption Capabilities",
    "zh": "实验6-2 高级难度，三颗星：具备并行执行和中断能力的异步智能体"
  },
  {
    "id": 272,
    "start": 2370.396,
    "end": 2377.509,
    "en": "As illustrated in Figure 6-4: Experiment 6-2 Asynchronous Agent Interruption and Recovery.",
    "zh": "如图6-4所示：实验6-2 异步智能体的中断与恢复"
  },
  {
    "id": 273,
    "start": 2377.509,
    "end": 2390.221,
    "en": "Building on the simple event queue in Experiment 6-1, this experiment uses a runtime compatible with synchronous interfaces to implement parallel tool execution, execution cancellation, and state management.",
    "zh": "在实验6-1的简单事件队列基础上，本实验使用兼容同步接口的运行时环境实现并行工具执行、执行取消和状态管理"
  },
  {
    "id": 274,
    "start": 2390.221,
    "end": 2398.346,
    "en": "The Agent must manage several concurrent tasks, handle interruptions and recovery, and make dynamic decisions from current state.",
    "zh": "智能体必须管理多个并发任务，处理中断与恢复，并根据当前状态做出动态决策"
  },
  {
    "id": 275,
    "start": 2398.346,
    "end": 2402.721,
    "en": "See Experiment 6-3 for the native Astra comparison.",
    "zh": "请参见实验6-3中的原生Astra对比"
  },
  {
    "id": 276,
    "start": 2402.721,
    "end": 2414.009,
    "en": "Asynchronous Tool Execution: Supports asynchronous execution of time-consuming tools (at least 3-5 seconds), returning a placeholder immediately upon initiation.",
    "zh": "异步工具执行：支持耗时工具（至少3-5秒）的异步执行，在启动时立即返回占位符"
  },
  {
    "id": 277,
    "start": 2414.009,
    "end": 2419.284,
    "en": "Validation Scenario: The Agent executes a long-running terminal command.",
    "zh": "验证场景：智能体执行一个长时间运行的终端命令"
  },
  {
    "id": 278,
    "start": 2419.284,
    "end": 2423.596,
    "en": "During this time, the user asks, \"What time is it now?",
    "zh": "在此期间，用户询问：“现在几点了？”"
  },
  {
    "id": 279,
    "start": 2423.596,
    "end": 2430.171,
    "en": "The Agent responds immediately, then presents the analysis result when the long-running command completes.",
    "zh": "智能体立即响应，然后在长时间运行的命令完成后呈现分析结果"
  },
  {
    "id": 280,
    "start": 2430.171,
    "end": 2437.059,
    "en": "Event Queue and Batch Processing: Accumulates non-urgent events and appends them to the trajectory in a batch.",
    "zh": "事件队列与批量处理：累积非紧急事件，并以批量方式将其追加到轨迹中"
  },
  {
    "id": 281,
    "start": 2437.059,
    "end": 2441.859,
    "en": "Validation Scenario: The Agent is executing a long task.",
    "zh": "验证场景：智能体正在执行一项长时间任务"
  },
  {
    "id": 282,
    "start": 2441.859,
    "end": 2449.234,
    "en": "The user sends consecutive messages: \"Remember to reply in Japanese\" and \"Format it as a webpage.",
    "zh": "用户连续发送消息：“记得用日语回复”和“格式化为网页。”"
  },
  {
    "id": 283,
    "start": 2449.234,
    "end": 2456.096,
    "en": "When the task completes, the Agent processes all events at once, generating a Japanese webpage.",
    "zh": "当任务完成时，智能体一次性处理所有事件，生成一个日语网页"
  },
  {
    "id": 284,
    "start": 2456.096,
    "end": 2464.284,
    "en": "Interruption Mechanism: A user's \"stop\" command immediately terminates the execution flow and cancels the asynchronous tool.",
    "zh": "中断机制：用户的“停止”命令会立即终止执行流程并取消异步工具"
  },
  {
    "id": 285,
    "start": 2464.284,
    "end": 2469.084,
    "en": "Validation Scenario: The Agent is executing a long task.",
    "zh": "验证场景：智能体正在执行一项长时间任务"
  },
  {
    "id": 286,
    "start": 2469.084,
    "end": 2471.671,
    "en": "The user sends \"Cancel.",
    "zh": "用户发送“取消。”},{"
  },
  {
    "id": 287,
    "start": 2471.671,
    "end": 2478.396,
    "en": "The Agent stops immediately, and the trajectory records the interruption event and the cancellation operation.",
    "zh": "智能体立即停止，并在轨迹中记录中断事件和取消操作。"
  },
  {
    "id": 288,
    "start": 2478.396,
    "end": 2488.259,
    "en": "Cancellation and Status Query for Parallel Tools: After an asynchronous tool completes, the real result is injected into the conversation via a new event.",
    "zh": "并行工具的取消与状态查询：异步工具完成后，实际结果通过新事件注入到对话中。"
  },
  {
    "id": 289,
    "start": 2488.259,
    "end": 2492.609,
    "en": "Supports cancellation or progress query via task ID.",
    "zh": "可通过任务ID进行取消或进度查询。"
  },
  {
    "id": 290,
    "start": 2492.609,
    "end": 2499.059,
    "en": "Validation Scenario: The user requests, \"Run these three scripts simultaneously for me.",
    "zh": "验证场景：用户请求，“帮我同时运行这三个脚本。”"
  },
  {
    "id": 291,
    "start": 2499.059,
    "end": 2503.746,
    "en": "Whichever finishes first, check the progress of the remaining scripts.",
    "zh": "无论哪个先完成，都检查剩余脚本的进度。"
  },
  {
    "id": 292,
    "start": 2503.746,
    "end": 2507.534,
    "en": "If any hasn't exceeded 50%, cancel it.",
    "zh": "如果任何脚本未超过50%，则取消它。"
  },
  {
    "id": 293,
    "start": 2507.534,
    "end": 2518.034,
    "en": "The three scripts simulate analysis processes, outputting progress continuously at speeds of 3%, 2%, and 1% per second, respectively.",
    "zh": "这三个脚本模拟分析过程，分别以每秒3%、2%和1%的速度持续输出进度。"
  },
  {
    "id": 294,
    "start": 2518.034,
    "end": 2522.859,
    "en": "The Agent starts three asynchronous terminal commands simultaneously.",
    "zh": "智能体同时启动三个异步终端命令。"
  },
  {
    "id": 295,
    "start": 2522.859,
    "end": 2535.421,
    "en": "When the script at 3% per second finishes in about 33 seconds, the Agent queries the status of the remaining two terminals, finding one at about 66% and the other at about 33%.",
    "zh": "当每秒3%的脚本在约33秒后完成时，智能体查询剩余两个终端的状态，发现一个大约完成了66%，另一个大约完成了33%。"
  },
  {
    "id": 296,
    "start": 2535.421,
    "end": 2539.434,
    "en": "It then cancels the one that hasn't exceeded 50%.",
    "zh": "然后取消未超过50%的那个。"
  },
  {
    "id": 297,
    "start": 2539.434,
    "end": 2544.984,
    "en": "After both terminals complete, it integrates the results to generate a complete report.",
    "zh": "两个终端完成后，它整合结果生成完整的报告。"
  },
  {
    "id": 298,
    "start": 2544.984,
    "end": 2549.321,
    "en": "Model-Native Asynchrony: GPT-6 Astra.",
    "zh": "模型原生异步：GPT-6 Astra。"
  },
  {
    "id": 299,
    "start": 2549.476,
    "end": 2558.651,
    "en": "In the compatibility approach above, the runtime orders incoming events so that a model with a synchronous interface can participate in asynchronous tasks.",
    "zh": "在上述兼容方法中，运行时对传入事件进行排序，使具有同步接口的模型能够参与异步任务。"
  },
  {
    "id": 300,
    "start": 2558.601,
    "end": 2568.751,
    "en": "Another approach lets the model understand this interaction rhythm natively: it can do other work while a tool runs and adjust subsequent work when the user adds requirements midway.",
    "zh": "另一种方法让模型原生地理解这种交互节奏：它可以在工具运行时做其他工作，并在用户中途添加需求时调整后续工作。"
  },
  {
    "id": 301,
    "start": 2568.751,
    "end": 2577.926,
    "en": "GPT-6 Astra already supports Async tool calling and Mid-turn steering, illustrating this change (Figure 6-5).",
    "zh": "GPT-6 Astra 已经支持异步工具调用和中途转向，这体现了这一变化（图6-5）。"
  },
  {
    "id": 302,
    "start": 2577.926,
    "end": 2584.951,
    "en": "As illustrated in Figure 6-5: Synchronous-Interface Compatibility and Model-Native Asynchrony.",
    "zh": "如图6-5所示：同步接口兼容性与模型原生异步性。"
  },
  {
    "id": 303,
    "start": 2584.951,
    "end": 2590.626,
    "en": "Asynchronous tool calling separates “starting an action” from “obtaining its result.",
    "zh": "异步工具调用将“启动一个动作”与“获取其结果”分离开来。"
  },
  {
    "id": 304,
    "start": 2590.626,
    "end": 2599.263,
    "en": "After starting a slow query, an Agent can continue reasoning, call other tools, or handle parts that do not depend on the query result.",
    "zh": "在启动一个慢速查询后，智能体可以继续推理，调用其他工具，或处理不依赖查询结果的部分。"
  },
  {
    "id": 305,
    "start": 2599.263,
    "end": 2608.001,
    "en": "While looking up meeting venues, for example, it can prepare the agenda and checklist, then compare options when venue information arrives.",
    "zh": "例如，在查找会议场地时，它可以准备议程和清单，然后在场地信息到达后进行比较。"
  },
  {
    "id": 306,
    "start": 2608.001,
    "end": 2616.101,
    "en": "The key is to distinguish dependencies: keep independent work moving, and defer decisions that require the result until it arrives.",
    "zh": "关键在于区分依赖关系：保持独立工作继续进行，并在结果到达前推迟需要该结果的决策。"
  },
  {
    "id": 307,
    "start": 2616.101,
    "end": 2621.126,
    "en": "Mid-turn steering lets the user correct the direction while a task is underway.",
    "zh": "中途转向功能允许用户在任务进行中纠正方向。"
  },
  {
    "id": 308,
    "start": 2621.126,
    "end": 2630.938,
    "en": "While the Agent is still thinking or composing its answer, the user can add requirements such as “the budget has decreased” or “the number of attendees has changed.",
    "zh": "当智能体仍在思考或撰写答案时，用户可以添加需求，如“预算减少了”或“参加人数发生了变化”。"
  },
  {
    "id": 309,
    "start": 2630.938,
    "end": 2639.876,
    "en": "The system retains completed work and brings the new constraints into subsequent processing, allowing the Agent to adjust its plan within the same task.",
    "zh": "系统会保留已完成的工作，并将新约束带入后续处理，使智能体能够在同一任务内调整其计划。"
  },
  {
    "id": 310,
    "start": 2639.876,
    "end": 2648.926,
    "en": "There may still be a delay between receiving an update and acting on it, but the user need not wait for an entire answer to finish before expressing the change.",
    "zh": "虽然接收到更新和执行之间仍可能存在延迟，但用户无需等待整个答案完成就可以表达更改。"
  },
  {
    "id": 311,
    "start": 2648.926,
    "end": 2656.901,
    "en": "These capabilities extend the timing of interaction: tool results and user requirements can both arrive as a task progresses.",
    "zh": "这些能力扩展了交互的时间：工具结果和用户需求都可以在任务进行过程中到达。"
  },
  {
    "id": 312,
    "start": 2656.901,
    "end": 2663.151,
    "en": "The system must still distinguish their sources and remember which work is complete and which remains pending.",
    "zh": "系统仍需区分它们的来源，并记住哪些工作已完成，哪些仍待处理。"
  },
  {
    "id": 313,
    "start": 2663.151,
    "end": 2674.088,
    "en": "Changing a plan does not itself stop running tools or undo actions already taken; actual execution, cancellation, and state management remain the runtime's responsibility.",
    "zh": "更改计划本身不会停止运行中的工具或撤销已采取的操作；实际执行、取消和状态管理仍然是运行时的责任。"
  },
  {
    "id": 314,
    "start": 2674.088,
    "end": 2678.063,
    "en": "Not every model has native asynchronous capabilities.",
    "zh": "并非每个模型都具有原生的异步能力。"
  },
  {
    "id": 315,
    "start": 2678.063,
    "end": 2690.651,
    "en": "When building an Agent, choose native interaction or a compatibility approach according to the model's support, then check whether the whole system correctly handles delayed results, mid-task changes, and task resumption.",
    "zh": "在构建智能体时，根据模型的支持情况选择原生交互或兼容方法，然后检查整个系统是否能正确处理延迟结果、任务中变更和任务恢复。"
  },
  {
    "id": 316,
    "start": 2690.651,
    "end": 2698.913,
    "en": "Asynchronous training can improve these capabilities further, but developers can already build this kind of interaction using existing models.",
    "zh": "异步训练可以进一步提升这些能力，但开发者已经可以使用现有模型构建这种交互。"
  },
  {
    "id": 317,
    "start": 2698.913,
    "end": 2704.101,
    "en": "From Receiving Asynchronous Messages to Handling Asynchronous Tasks Reliably.",
    "zh": "从接收异步消息到可靠处理异步任务。"
  },
  {
    "id": 318,
    "start": 2704.101,
    "end": 2708.913,
    "en": "Native asynchrony addresses whether messages can arrive during execution.",
    "zh": "原生异步性涉及消息是否可以在执行过程中到达。"
  },
  {
    "id": 319,
    "start": 2708.913,
    "end": 2714.613,
    "en": "Reliability in complex tasks also depends on how the model uses those messages.",
    "zh": "复杂任务的可靠性还取决于模型如何使用这些消息。"
  },
  {
    "id": 320,
    "start": 2714.613,
    "end": 2717.376,
    "en": "At least three things need checking:",
    "zh": "至少需要检查三件事："
  },
  {
    "id": 321,
    "start": 2717.524,
    "end": 2726.174,
    "en": "Result ownership and pending state: Can the model associate a delayed result with the correct task and avoid inventing data when the result is absent?",
    "zh": "结果所有权和待处理状态：模型能否将延迟的结果与正确的任务关联，并在结果缺失时避免虚构数据？"
  },
  {
    "id": 322,
    "start": 2726.124,
    "end": 2735.361,
    "en": "Task resumption and action control: Can it return to the original task after handling new requirements and distinguish changing a plan from stopping execution?",
    "zh": "任务恢复和动作控制：在处理新需求后能否返回原始任务，并区分修改计划与停止执行？"
  },
  {
    "id": 323,
    "start": 2735.361,
    "end": 2743.286,
    "en": "Integrating multiple updates: Can it respect both budget and attendance constraints, rather than remembering only the last message?",
    "zh": "整合多个更新：能否同时尊重预算和出席要求，而不是只记住最后一条消息？"
  },
  {
    "id": 324,
    "start": 2743.286,
    "end": 2752.924,
    "en": "These issues can be addressed through model training in asynchronous environments and through clearer task state, event sources, and execution feedback in the system.",
    "zh": "这些问题可以通过在异步环境中进行模型训练，以及在系统中提供更清晰的任务状态、事件源和执行反馈来解决。"
  },
  {
    "id": 325,
    "start": 2752.924,
    "end": 2760.111,
    "en": "Evaluation must cover both layers: whether the model understood the change and whether the system executed accordingly.",
    "zh": "评估必须涵盖两个层面：模型是否理解了变化，系统是否相应执行？"
  },
  {
    "id": 326,
    "start": 2760.111,
    "end": 2767.486,
    "en": "Experiment 6-3 advanced difficulty, three stars: : Model-Native Asynchrony and Mid-Turn Steering",
    "zh": "实验6-3 高难度，三颗星：模型原生异步性和中途转向控制"
  },
  {
    "id": 327,
    "start": 2767.486,
    "end": 2774.974,
    "en": "Choose a venue for a meeting: after starting a slow query, the Agent completes preparation that does not depend on the result.",
    "zh": "为会议选择场地：在启动慢查询后，智能体完成不依赖结果的准备工作。"
  },
  {
    "id": 328,
    "start": 2774.974,
    "end": 2779.399,
    "en": "Meanwhile, the user adds budget and attendance requirements.",
    "zh": "同时，用户添加了预算和出席要求。"
  },
  {
    "id": 329,
    "start": 2779.399,
    "end": 2784.874,
    "en": "Once the query finishes, the Agent selects a venue according to all constraints.",
    "zh": "查询完成后，智能体根据所有约束条件选择场地。"
  },
  {
    "id": 330,
    "start": 2784.874,
    "end": 2793.474,
    "en": "Call the GPT-6 Astra API to compare synchronous tools, native asynchronous tools, and mid-turn steering.",
    "zh": "调用GPT-6 Astra API，比较同步工具、原生异步工具和中途转向控制。"
  },
  {
    "id": 331,
    "start": 2793.474,
    "end": 2802.424,
    "en": "Observe whether waiting blocks other work, whether new requirements enter subsequent plans, and whether the original task resumes when results arrive.",
    "zh": "观察等待是否会阻塞其他工作，新需求是否会进入后续计划，以及结果到达时原始任务是否会恢复。"
  },
  {
    "id": 332,
    "start": 2802.424,
    "end": 2810.261,
    "en": "Then use a model without native support as a control to understand what model capabilities and runtime orchestration each address.",
    "zh": "然后使用一个没有原生支持的模型作为对照，以了解每个模型的能力和运行时编排。"
  },
  {
    "id": 333,
    "start": 2810.261,
    "end": 2820.636,
    "en": "Asynchrony and event-driven execution let the world wake an Agent while a task is underway; native steering also lets the user submit updates before a full answer finishes.",
    "zh": "异步和事件驱动执行可以让世界在任务进行时唤醒智能体；原生控制也允许用户在完整回答完成前提交更新。"
  },
  {
    "id": 334,
    "start": 2820.636,
    "end": 2832.524,
    "en": "The next three sections compress the timescale further: when the environment changes as fast as or faster than the model generates, receiving updates is not enough—the system must also react in time.",
    "zh": "接下来的三节内容进一步压缩时间尺度：当环境变化速度与模型生成速度一样快或更快时，仅接收更新是不够的——系统还必须及时做出反应。"
  },
  {
    "id": 335,
    "start": 2832.524,
    "end": 2836.474,
    "en": "Voice: The Most Natural Human-Machine Interface.",
    "zh": "语音：最自然的人机接口。"
  },
  {
    "id": 336,
    "start": 2836.474,
    "end": 2839.924,
    "en": "Voice is not merely text turned into sound.",
    "zh": "语音不仅仅是将文本转换为声音。"
  },
  {
    "id": 337,
    "start": 2839.924,
    "end": 2851.086,
    "en": "Speaking is roughly four times faster than typing and leaves the hands and eyes free, so it naturally places an Agent in a continuous input-output loop where the user may interrupt at any moment.",
    "zh": "说话大约比打字快四倍，并且让双手和眼睛得到自由，因此它自然地将智能体置于一个持续的输入-输出循环中，用户可以在任何时候进行中断。"
  },
  {
    "id": 338,
    "start": 2851.086,
    "end": 2857.611,
    "en": "Dictation converts speech into text; a voice Agent lets the user collaborate with the Agent directly.",
    "zh": "语音转录将语音转换为文本；语音智能体让用户可以直接与智能体协作。"
  },
  {
    "id": 339,
    "start": 2857.611,
    "end": 2861.574,
    "en": "Both support the whisper-coding workflow introduced earlier.",
    "zh": "两者都支持之前介绍的低语编码工作流程。"
  },
  {
    "id": 340,
    "start": 2861.574,
    "end": 2869.774,
    "en": "This section covers two directions: the user speaking to an Agent, and an Agent speaking to the outside world on the user's behalf.",
    "zh": "本节涵盖两个方向：用户对智能体说话，以及智能体代表用户向外部世界说话。"
  },
  {
    "id": 341,
    "start": 2869.774,
    "end": 2882.361,
    "en": "The voice model determines what the Agent can answer; the interaction architecture determines whether it can hear clearly, respond in time, hand over naturally, and complete confirmations and tool calls during a call.",
    "zh": "语音模型决定了智能体可以回答什么；交互架构决定了它是否能清晰听到、及时响应、自然交接，并在通话期间完成确认和工具调用。"
  },
  {
    "id": 342,
    "start": 2882.361,
    "end": 2888.049,
    "en": "We first examine interaction timing, then cognitive timing and expressive quality.",
    "zh": "我们首先检查交互时间，然后是认知时间和表达质量。"
  },
  {
    "id": 343,
    "start": 2888.049,
    "end": 2892.149,
    "en": "Interaction timing: from cascaded to full-duplex.",
    "zh": "交互时间：从级联到全双工。"
  },
  {
    "id": 344,
    "start": 2892.149,
    "end": 2900.961,
    "en": "OpenAI's GPT-Live introduction describes three voice-interaction paradigms—cascaded, turn-based, and full-duplex.",
    "zh": "OpenAI 的 GPT-Live 介绍描述了三种语音交互范式——级联式、轮换式和全双工式。"
  },
  {
    "id": 345,
    "start": 2900.961,
    "end": 2908.261,
    "en": "They are not a simple old-to-new replacement; they trade latency, cost, and observability in different ways:",
    "zh": "它们并不是简单的旧到新的替代；它们以不同的方式权衡延迟、成本和可观测性："
  },
  {
    "id": 346,
    "start": 2908.261,
    "end": 2924.449,
    "en": "Paradigm: Cascaded; Core structure: VAD → ASR → LLM → TTS; Main advantage: Clear modules that are easy to replace and debug; Main limitation: Latency accumulates and paralinguistic information is lost at interfaces.",
    "zh": "范式：级联；核心结构：VAD → ASR → LLM → TTS；主要优势：模块清晰，易于替换和调试；主要局限：延迟累积，且在接口处丢失副语言信息。"
  },
  {
    "id": 347,
    "start": 2924.449,
    "end": 2942.349,
    "en": "Paradigm: End-to-end Omni; Core structure: Native audio input and output with turn-based interaction; Main advantage: Lower latency and better preservation of tone, emotion, and ambient sound; Main limitation: Still turn-based; training and debugging cost more.",
    "zh": "范式：端到端全向；核心结构：原生音频输入和输出，基于回合的交互；主要优势：更低的延迟，更好地保留语气、情感和环境声音；主要局限：仍基于回合；训练和调试成本更高。"
  },
  {
    "id": 348,
    "start": 2942.349,
    "end": 2961.424,
    "en": "Paradigm: Full-duplex; Core structure: Native audio input and output with continuous listening, speaking, and decision-making; Main advantage: Overlapping speech, natural interruption, and continuous streams; Main limitation: Training, control, and evaluation are more complex.",
    "zh": "范式：全双工；核心结构：原生音频输入和输出，支持持续监听、发言和决策；主要优势：支持重叠发言、自然打断和连续流；主要局限：训练、控制和评估更复杂。"
  },
  {
    "id": 349,
    "start": 2961.424,
    "end": 2969.261,
    "en": "The common thread is escaping the assumption that people must speak one at a time, and escaping VAD's guess about who has the floor.",
    "zh": "共同点在于摆脱了人们必须依次说话的假设，并摆脱了VAD对谁拥有发言权的猜测。"
  },
  {
    "id": 350,
    "start": 2969.261,
    "end": 2977.511,
    "en": "Cascaded and Omni systems still divide interaction into turns; full-duplex makes turn ownership a continuous model decision.",
    "zh": "级联和全向系统仍将交互划分为回合；全双工使发言权成为连续模型决策。"
  },
  {
    "id": 351,
    "start": 2977.511,
    "end": 2980.649,
    "en": "Paradigm 1 · Cascaded pipeline.",
    "zh": "范式1 · 级联流水线。"
  },
  {
    "id": 352,
    "start": 2980.804,
    "end": 2995.654,
    "en": "Most commercial voice assistants still use a serial pipeline (Figure 6-6): VAD decides when the user has finished, ASR converts audio to text, the LLM understands and generates a reply, and TTS speaks it.",
    "zh": "大多数商业语音助手仍使用串行流水线（图6-6）：VAD决定用户是否结束，ASR将音频转换为文本，LLM理解并生成回复，TTS将其说出。"
  },
  {
    "id": 353,
    "start": 2995.604,
    "end": 3002.204,
    "en": "Modularity lets each component be optimized independently, but every boundary can add waiting time.",
    "zh": "模块化让每个组件可以独立优化，但每个边界都可能增加等待时间。"
  },
  {
    "id": 354,
    "start": 3002.204,
    "end": 3007.579,
    "en": "As illustrated in Figure 6-6: Serial voice Agent pipeline.",
    "zh": "如图6-6所示：串行语音智能体流水线。"
  },
  {
    "id": 355,
    "start": 3007.579,
    "end": 3017.279,
    "en": "Module: VAD; Role: Decide whether speech has ended; Typical bottleneck: Silence thresholds add waiting and split turns incorrectly.",
    "zh": "模块：VAD；作用：判断语音是否结束；典型瓶颈：静音阈值增加等待时间，并错误地划分回合。"
  },
  {
    "id": 356,
    "start": 3017.279,
    "end": 3026.341,
    "en": "Module: ASR; Role: Convert audio to text; Typical bottleneck: Recognition latency and loss of context.",
    "zh": "模块：ASR；作用：将音频转换为文本；典型瓶颈：识别延迟和上下文丢失。"
  },
  {
    "id": 357,
    "start": 3026.341,
    "end": 3035.904,
    "en": "Module: LLM; Role: Understand, reason, and generate; Typical bottleneck: Time to first token; reasoning adds more waiting.",
    "zh": "模块：LLM；作用：理解、推理和生成；典型瓶颈：首个标记的时间；推理会增加更多等待时间。"
  },
  {
    "id": 358,
    "start": 3035.904,
    "end": 3044.704,
    "en": "Module: TTS; Role: Convert text to speech; Typical bottleneck: First-packet synthesis and playback buffering.",
    "zh": "模块：TTS；作用：将文本转换为语音；典型瓶颈：首包合成和播放缓冲。"
  },
  {
    "id": 359,
    "start": 3044.704,
    "end": 3054.716,
    "en": "For a short reply without reasoning, VAD, ASR, LLM, and TTS waiting time accumulates serially (Figure 6-7).",
    "zh": "对于不需要推理的简短回复，VAD、ASR、LLM和TTS的等待时间会依次累积（图6-7）。"
  },
  {
    "id": 360,
    "start": 3054.716,
    "end": 3060.879,
    "en": "The real value depends on input length, model, hardware, network, and load.",
    "zh": "实际价值取决于输入长度、模型、硬件、网络和负载。"
  },
  {
    "id": 361,
    "start": 3060.879,
    "end": 3066.929,
    "en": "As illustrated in Figure 6-7: Latency waterfall for a serial response.",
    "zh": "如图6-7所示：串行响应的延迟瀑布图。"
  },
  {
    "id": 362,
    "start": 3066.929,
    "end": 3075.229,
    "en": "Production queueing amplifies idle latency further (Figure 6-8), but capacity planning is outside this chapter's scope.",
    "zh": "生产队列会进一步放大空闲延迟（图6-8），但容量规划不在本章讨论范围内。"
  },
  {
    "id": 363,
    "start": 3075.229,
    "end": 3080.116,
    "en": "As illustrated in Figure 6-8: Queueing latency curve.",
    "zh": "如图6-8所示：队列延迟曲线。"
  },
  {
    "id": 364,
    "start": 3080.116,
    "end": 3086.691,
    "en": "Experiment 6-4 introductory difficulty, one star: : Build a traditional voice Agent",
    "zh": "实验6-4入门难度，一颗星：构建一个传统语音智能体"
  },
  {
    "id": 365,
    "start": 3086.691,
    "end": 3097.366,
    "en": "Connect a microphone, Silero VAD, local Whisper, a streaming LLM, and Fish S1 TTS over WebSocket to establish the cascaded baseline.",
    "zh": "通过WebSocket连接麦克风、Silero VAD、本地Whisper、流式LLM和Fish S1 TTS，建立级联基线。"
  },
  {
    "id": 366,
    "start": 3097.366,
    "end": 3100.229,
    "en": "From serial to streaming perception.",
    "zh": "从串行到流式感知。"
  },
  {
    "id": 367,
    "start": 3100.229,
    "end": 3109.341,
    "en": "Figure 6-7 describes the fully serial case: VAD, ASR, LLM, and TTS run one after another.",
    "zh": "图6-7描述了完全串行的情况：VAD、ASR、LLM和TTS依次运行。"
  },
  {
    "id": 368,
    "start": 3109.341,
    "end": 3113.054,
    "en": "This serial perception approach has three problems:",
    "zh": "这种串行感知方法有三个问题："
  },
  {
    "id": 369,
    "start": 3113.054,
    "end": 3118.416,
    "en": "Accumulated latency: it must wait through silence before confirming the end.",
    "zh": "累积延迟：必须等待静音结束后才能确认结束。"
  },
  {
    "id": 370,
    "start": 3118.416,
    "end": 3127.854,
    "en": "Lost information: a binary speech/no-speech signal cannot express hesitation, emotion, backchannels, or ambient sound.",
    "zh": "信息丢失：二进制语音/非语音信号无法表达犹豫、情感、反馈信号或环境声音。"
  },
  {
    "id": 371,
    "start": 3127.854,
    "end": 3135.304,
    "en": "Broken context: email addresses, names, and proper nouns may be split across chunks and misrecognized.",
    "zh": "上下文断裂：电子邮件地址、姓名和专有名词可能被分割成多个片段并被错误识别。"
  },
  {
    "id": 372,
    "start": 3135.304,
    "end": 3145.116,
    "en": "To address this while keeping the modular split, one optimization is streaming perception, which lets each stage produce incremental results as early as possible:",
    "zh": "为了在保持模块化分割的同时解决这些问题，一种优化方法是流式感知，它让每个阶段尽可能早地生成增量结果："
  },
  {
    "id": 373,
    "start": 3145.116,
    "end": 3160.379,
    "en": "Streaming ASR: once VAD detects that the user has started speaking, the ASR model is called at fixed intervals to produce a provisional transcript in a streaming fashion; once VAD detects that the user has finished, the final text is confirmed.",
    "zh": "流式ASR：一旦VAD检测到用户开始说话，ASR模型就会以固定间隔调用，以流式方式生成临时文本；一旦VAD检测到用户结束，最终文本将被确认。"
  },
  {
    "id": 374,
    "start": 3160.379,
    "end": 3167.204,
    "en": "LLM speculative execution: the provisional transcript is sent to the LLM as soon as it exists.",
    "zh": "LLM推测执行：一旦临时文本生成，就立即发送给LLM。"
  },
  {
    "id": 375,
    "start": 3167.204,
    "end": 3177.454,
    "en": "If the final text matches the provisional transcript, the LLM is not called again; otherwise the earlier speculative thinking is cancelled and the LLM is called again.",
    "zh": "如果最终文本与临时文本匹配，则不再调用LLM；否则，之前的推测性思考将被取消，并重新调用LLM。"
  },
  {
    "id": 376,
    "start": 3177.454,
    "end": 3184.504,
    "en": "Segmented LLM output: the first speakable sentence goes to TTS without waiting for the full reply.",
    "zh": "分段的LLM输出：第一个可说的句子会直接发送到TTS，而无需等待完整回复。"
  },
  {
    "id": 377,
    "start": 3184.504,
    "end": 3192.929,
    "en": "Incremental TTS: audio chunks are returned continuously so later generation, synthesis, and playback overlap.",
    "zh": "增量式TTS：音频块会连续返回，使后续生成、合成和播放重叠。"
  },
  {
    "id": 378,
    "start": 3192.929,
    "end": 3196.941,
    "en": "A truly streaming ASR needs model-level support.",
    "zh": "真正的流式ASR需要模型级别的支持。"
  },
  {
    "id": 379,
    "start": 3196.941,
    "end": 3205.604,
    "en": "Whisper's decoder is autoregressive, but its encoder expects a complete audio segment, so it cannot simply be equated with a streaming model.",
    "zh": "Whisper的解码器是自回归的，但其编码器需要完整的音频片段，因此不能简单地将其等同于流式模型。"
  },
  {
    "id": 380,
    "start": 3205.604,
    "end": 3215.191,
    "en": "An LLM-based streaming-audio model can emit text and semantic events from continuous audio, placing recognition and part of understanding in one model.",
    "zh": "基于LLM的流式音频模型可以从连续音频中发出文本和语义事件，将识别和部分理解放在一个模型中。"
  },
  {
    "id": 381,
    "start": 3215.191,
    "end": 3223.641,
    "en": "It keeps the conversation context from the beginning up to the present moment and can use world knowledge for brands, names, and proper nouns.",
    "zh": "它能从开始到现在的对话上下文中保持信息，并可以使用品牌、名称和专有名词的世界知识。"
  },
  {
    "id": 382,
    "start": 3223.641,
    "end": 3230.441,
    "en": "If the only goal is deciding whether the user has finished, endpointing can be built into the streaming recognizer.",
    "zh": "如果唯一的目标是判断用户是否完成，端点检测可以集成到流式识别器中。"
  },
  {
    "id": 383,
    "start": 3230.441,
    "end": 3235.641,
    "en": "The model combines semantics and silence to judge whether an utterance is complete.",
    "zh": "该模型结合语义和静音来判断一次陈述是否完成。"
  },
  {
    "id": 384,
    "start": 3235.641,
    "end": 3244.166,
    "en": "Training labels must contain only information visible at decision time, or hindsight will produce a judgment that cannot be reproduced online.",
    "zh": "训练标签必须只包含决策时可见的信息，否则事后判断将无法在线重现。"
  },
  {
    "id": 385,
    "start": 3244.166,
    "end": 3248.316,
    "en": "The model can emit acoustic-event markers as well as words:",
    "zh": "该模型可以发出声学事件标记以及词语："
  },
  {
    "id": 386,
    "start": 3248.316,
    "end": 3254.466,
    "en": "speak_start/end, interrupt: speech boundaries and interruption intent;",
    "zh": "speak_start/end（说话开始/结束）、interrupt（中断）：语音边界和中断意图；"
  },
  {
    "id": 387,
    "start": 3254.466,
    "end": 3257.829,
    "en": "emotion: emotion and hesitation;",
    "zh": "emotion（情绪）：情绪和犹豫；"
  },
  {
    "id": 388,
    "start": 3257.829,
    "end": 3263.091,
    "en": "laugh, sigh, noise: paralinguistic and environmental sound.",
    "zh": "laugh（笑）、sigh（叹气）、noise（噪音）：副语言和环境声音。"
  },
  {
    "id": 389,
    "start": 3263.091,
    "end": 3267.754,
    "en": "Together with text tokens, these markers form one event stream.",
    "zh": "与文本标记一起，这些标记形成一个事件流。"
  },
  {
    "id": 390,
    "start": 3267.754,
    "end": 3275.516,
    "en": "The Agent can detect hesitation, interruption, and environmental changes without compressing every sound into plain text.",
    "zh": "智能体可以在不将每一声都压缩成纯文本的情况下检测犹豫、中断和环境变化。"
  },
  {
    "id": 391,
    "start": 3275.668,
    "end": 3283.955,
    "en": "Experiment 6-5 introductory difficulty, one star: : Simulate streaming voice perception with Qwen2-Audio",
    "zh": "实验6-5，入门难度，一颗星：用Qwen2-Audio模拟流式语音感知"
  },
  {
    "id": 392,
    "start": 3283.905,
    "end": 3287.855,
    "en": "Qwen2-Audio is not itself a streaming model.",
    "zh": "Qwen2-Audio本身并不是一个流式模型。"
  },
  {
    "id": 393,
    "start": 3287.855,
    "end": 3296.555,
    "en": "This experiment simulates continuous perception with increasing audio prefixes and compares it with 600 ms VAD + Whisper.",
    "zh": "此实验通过增加音频前缀来模拟连续感知，并将其与600毫秒VAD+Whisper进行比较。"
  },
  {
    "id": 394,
    "start": 3296.555,
    "end": 3300.78,
    "en": "Paradigm 2 · End-to-end omnimodal models (Omni).",
    "zh": "范式2 · 端到端多模态模型（Omni）"
  },
  {
    "id": 395,
    "start": 3300.78,
    "end": 3313.33,
    "en": "Even with streaming perception, a cascade passes listening, thinking, and speaking through discrete interfaces; emotion, intonation, and ambient sound may be lost when audio becomes plain text.",
    "zh": "即使有流式感知，级联流程仍需通过离散接口进行聆听、思考和说话；当音频变为纯文本时，情感、语调和环境声音可能会丢失。"
  },
  {
    "id": 396,
    "start": 3313.33,
    "end": 3324.843,
    "en": "The Omni approach uses one model to listen to audio, generate a reply, and speak it, which can preserve those signals, though at a higher training cost (Figure 6-9).",
    "zh": "Omni方法使用一个模型来听音频、生成回复并将其说出，可以保留这些信号，尽管训练成本更高（图6-9）。"
  },
  {
    "id": 397,
    "start": 3324.843,
    "end": 3334.23,
    "en": "Compared with the cascaded pipeline of Paradigm 1, Omni's advantage shows up mainly in latency and in understanding and generating non-text information.",
    "zh": "与范式1的级联流程相比，Omni的优势主要体现在延迟以及理解和生成非文本信息方面。"
  },
  {
    "id": 398,
    "start": 3334.23,
    "end": 3339.368,
    "en": "On the understanding side, Omni models can pick up on pauses in the voice.",
    "zh": "在理解方面，Omni模型可以捕捉语音中的停顿。"
  },
  {
    "id": 399,
    "start": 3339.368,
    "end": 3348.28,
    "en": "On the generation side, Omni models can convey richer paralinguistic information—singing, or delivering a line in a distinctive tone.",
    "zh": "在生成方面，Omni模型可以传达更丰富的副语言信息——如歌唱，或以独特的语气表达一段话。"
  },
  {
    "id": 400,
    "start": 3348.28,
    "end": 3354.093,
    "en": "Omni models still assume turn-taking and generally use VAD to assign the floor.",
    "zh": "Omni模型仍然假设轮流发言，并通常使用VAD来分配发言权。"
  },
  {
    "id": 401,
    "start": 3354.093,
    "end": 3360.843,
    "en": "A mid-utterance pause while the user reads out a string of digits can therefore still be mistaken for the end of the turn.",
    "zh": "因此，当用户读出一串数字时，中途的停顿仍可能被误认为是发言结束。"
  },
  {
    "id": 402,
    "start": 3360.843,
    "end": 3367.218,
    "en": "As illustrated in Figure 6-9: End-to-end omnimodal speech-model comparison.",
    "zh": "如图6-9所示：端到端多模态语音模型对比。"
  },
  {
    "id": 403,
    "start": 3367.218,
    "end": 3377.205,
    "en": "Experiment 6-6 intermediate difficulty, two stars: : Run MiniCPM-o 4.5 locally—end-to-end versus self-cascade",
    "zh": "实验6-6，中级难度，两颗星：本地运行MiniCPM-o 4.5——端到端与自级联对比"
  },
  {
    "id": 404,
    "start": 3377.205,
    "end": 3388.518,
    "en": "Run MiniCPM-o 4.5 locally with thinking mode disabled, comparing direct answers from audio against a self-cascade that first transcribes and then answers with the same model.",
    "zh": "在禁用思考模式的情况下本地运行MiniCPM-o 4.5，将直接从音频获得的答案与先转录后用同一模型回答的自级联进行比较。"
  },
  {
    "id": 405,
    "start": 3388.518,
    "end": 3395.08,
    "en": "This measures whether audio information is preserved, not the “thinking while speaking” discussed later.",
    "zh": "这衡量的是音频信息是否被保留，而不是后续讨论的“边说边思考”。"
  },
  {
    "id": 406,
    "start": 3395.08,
    "end": 3398.943,
    "en": "Paradigm 3 · Full-duplex interactive models.",
    "zh": "范式3 · 全双工交互模型。"
  },
  {
    "id": 407,
    "start": 3398.943,
    "end": 3408.78,
    "en": "Omni still divides conversation into “the user speaks” and “the model speaks,” but simultaneous interpreting and similar tasks require overlap.",
    "zh": "Omni仍然将对话分为“用户说话”和“模型说话”，但同时翻译等任务需要重叠。"
  },
  {
    "id": 408,
    "start": 3408.78,
    "end": 3419.818,
    "en": "A full-duplex model therefore does not presuppose turns: it listens and speaks continuously and repeatedly decides whether to continue, pause, interrupt, or call a tool.",
    "zh": "因此全双工模型不预设轮流：它持续监听并说话，反复决定是否继续、暂停、打断或调用工具。"
  },
  {
    "id": 409,
    "start": 3419.818,
    "end": 3424.93,
    "en": "Kyutai's Moshi (2024) was an early research example.",
    "zh": "Kyutai的Moshi（2024）是一个早期研究实例。"
  },
  {
    "id": 410,
    "start": 3424.93,
    "end": 3432.905,
    "en": "It models the user's and the model's audio streams in parallel, so overlapping speech and interruption can be natural behaviors.",
    "zh": "它并行建模用户和模型的音频流，因此重叠语音和打断可以成为自然行为。"
  },
  {
    "id": 411,
    "start": 3432.905,
    "end": 3436.73,
    "en": "Thinking Machines Lab calls this an Interaction Model",
    "zh": "Thinking Machines Lab称之为交互模型"
  },
  {
    "id": 412,
    "start": 3436.73,
    "end": 3449.955,
    "en": "OpenAI's GPT-Live brings the full-duplex path to production scale: it continuously processes input and generates output, can wait, backchannel, be interrupted, and handle realtime translation.",
    "zh": "OpenAI的GPT-Live将全双工路径推向生产规模：它持续处理输入并生成输出，可以等待、反馈、被中断，并处理实时翻译。"
  },
  {
    "id": 413,
    "start": 3449.955,
    "end": 3457.505,
    "en": "Like the Interaction Model, it delegates complex work to a background model while the foreground model maintains the conversation.",
    "zh": "与交互模型类似，它将复杂工作委托给后台模型，而前台模型维持对话。"
  },
  {
    "id": 414,
    "start": 3457.505,
    "end": 3461.805,
    "en": "Cognitive timing: realtime interaction and deep thinking.",
    "zh": "认知时序：实时交互与深度思考。"
  },
  {
    "id": 415,
    "start": 3461.805,
    "end": 3466.293,
    "en": "Interaction quality and intelligence ceiling are different dimensions.",
    "zh": "交互质量和智能上限是不同维度。"
  },
  {
    "id": 416,
    "start": 3466.293,
    "end": 3473.143,
    "en": "The foreground model must respond while the user is still engaged; the background model can spend longer thinking.",
    "zh": "前台模型必须在用户仍参与时作出回应；后台模型可以花更长时间思考。"
  },
  {
    "id": 417,
    "start": 3473.143,
    "end": 3477.793,
    "en": "The following three designs are trade-offs, not a linear progression.",
    "zh": "以下三种设计是权衡，而非线性进展。"
  },
  {
    "id": 418,
    "start": 3477.793,
    "end": 3486.23,
    "en": "The first two can wrap a cascade or Omni model; the third instead unifies deep reasoning and realtime expression within the same model.",
    "zh": "前两种可以封装级联或Omni模型；第三种则在同一模型中统一深度推理和实时表达。"
  },
  {
    "id": 419,
    "start": 3486.23,
    "end": 3491.393,
    "en": "Solution 1: Fast thinking for fillers, slow thinking for answers.",
    "zh": "解决方案1：快速思考用于填充，缓慢思考用于答案。"
  },
  {
    "id": 420,
    "start": 3491.393,
    "end": 3499.068,
    "en": "Fast thinking can give a holding response within a few hundred milliseconds while slow thinking performs a deeper derivation in the background.",
    "zh": "快速思考可在几百毫秒内给出暂留响应，而缓慢思考则在后台进行更深入的推导。"
  },
  {
    "id": 421,
    "start": 3499.068,
    "end": 3510.243,
    "en": "Simple questions may be processed twice, while hard questions can produce contradictions: the fast model recommends a purchase, then the slow model discovers that a key feature is missing.",
    "zh": "简单的问题可能被处理两次，而复杂的问题可能会产生矛盾：快速模型建议购买，然后慢速模型发现缺少一个关键功能。"
  },
  {
    "id": 422,
    "start": 3510.243,
    "end": 3514.555,
    "en": "The root cause is two independent instances thinking separately.",
    "zh": "根本原因是两个独立的实例各自独立思考。"
  },
  {
    "id": 423,
    "start": 3514.555,
    "end": 3521.618,
    "en": "As illustrated in Figure 6-10: Fast/slow thinking architecture and design alternatives.",
    "zh": "如图6-10所示：快速/慢速思维架构与设计替代方案。"
  },
  {
    "id": 424,
    "start": 3521.618,
    "end": 3527.155,
    "en": "Solution 2: Fast thinking for interaction, slow thinking for advice.",
    "zh": "解决方案2：快速思维用于交互，慢速思维用于建议。"
  },
  {
    "id": 425,
    "start": 3527.308,
    "end": 3536.345,
    "en": "The background model can send advice through a status bar or dedicated interface while the foreground model keeps the conversation alive and decides how to phrase it.",
    "zh": "背景模型可以通过状态栏或专用界面发送建议，同时前台模型保持对话活跃，并决定如何表述。"
  },
  {
    "id": 426,
    "start": 3536.295,
    "end": 3546.245,
    "en": "This is more stable than Solution 1, but communication is still indirect: the foreground can misunderstand the advice and cannot see the background's intermediate reasoning.",
    "zh": "这比解决方案1更稳定，但通信仍然是间接的：前台可能误解建议，也无法看到背景的中间推理过程。"
  },
  {
    "id": 427,
    "start": 3546.245,
    "end": 3551.833,
    "en": "Before the background finishes, follow-up questions still rely on the foreground model.",
    "zh": "在背景完成之前，后续问题仍然依赖于前台模型。"
  },
  {
    "id": 428,
    "start": 3551.833,
    "end": 3556.858,
    "en": "It can naturally wait for a result, but it cannot truly think while speaking.",
    "zh": "它可以自然地等待结果，但在说话时无法真正思考。"
  },
  {
    "id": 429,
    "start": 3556.858,
    "end": 3561.67,
    "en": "Solution 3: End-to-end unification of thinking and expression.",
    "zh": "解决方案3：思维和表达的端到端统一。"
  },
  {
    "id": 430,
    "start": 3561.67,
    "end": 3566.795,
    "en": "This design internalizes reasoning directly in an end-to-end audio model.",
    "zh": "这种设计将推理直接内置于端到端音频模型中。"
  },
  {
    "id": 431,
    "start": 3566.795,
    "end": 3581.145,
    "en": "Step-Audio R1 uses two complementary mechanisms: Modality-Grounded Reasoning Distillation (MGRD) grounds thinking in acoustic features, while the MPS dual-brain architecture lets planning and expression proceed in parallel.",
    "zh": "Step-Audio R1使用两种互补机制：基于模态的推理蒸馏（MGRD）将思维建立在声学特征上，而MPS双脑架构让规划和表达并行进行。"
  },
  {
    "id": 432,
    "start": 3581.145,
    "end": 3586.045,
    "en": "The first helps the model think correctly; the second helps it speak in time.",
    "zh": "前者帮助模型正确思考；后者帮助它及时表达。"
  },
  {
    "id": 433,
    "start": 3586.045,
    "end": 3593.045,
    "en": "Ideally, the model infers emotion from pitch, rhythm, and intonation rather than only from the transcript.",
    "zh": "理想情况下，模型应从音调、节奏和语调推断情感，而不仅仅是从文本中推断。"
  },
  {
    "id": 434,
    "start": 3593.045,
    "end": 3602.533,
    "en": "MGRD selects reasoning traces that actually cite acoustic features, trains on them, and uses reinforcement learning to prevent guessing without thinking.",
    "zh": "MGRD选择实际引用声学特征的推理轨迹，对其进行训练，并使用强化学习防止未经思考的猜测。"
  },
  {
    "id": 435,
    "start": 3602.533,
    "end": 3612.42,
    "en": "MPS lets the planning brain continuously emit thought segments; the expression brain combines each segment with the partial reply and immediately generates speech.",
    "zh": "MPS让规划大脑持续发出思维片段；表达大脑将每个片段与部分回复结合，并立即生成语音。"
  },
  {
    "id": 436,
    "start": 3612.42,
    "end": 3619.845,
    "en": "The pipeline runs in parallel, so the listener need not wait for the entire chain of reasoning before hearing the first sentence.",
    "zh": "该流程是并行运行的，因此监听器无需等待整个推理链完成即可听到第一句话。"
  },
  {
    "id": 437,
    "start": 3619.845,
    "end": 3625.295,
    "en": "The trade-off between separated fast/slow thinking and end-to-end reasoning.",
    "zh": "分离的快速/慢速思维与端到端推理之间的权衡。"
  },
  {
    "id": 438,
    "start": 3625.295,
    "end": 3633.558,
    "en": "A unified model implements “thinking while speaking” most directly, but thinking and realtime expression must be retrained together.",
    "zh": "统一模型最直接地实现了“边说边思考”，但思考和实时表达必须一起重新训练。"
  },
  {
    "id": 439,
    "start": 3633.558,
    "end": 3637.933,
    "en": "A decoupled design makes it easier to swap the background brain.",
    "zh": "解耦设计使更换背景大脑变得更加容易。"
  },
  {
    "id": 440,
    "start": 3637.933,
    "end": 3641.608,
    "en": "These are trade-offs, not simple substitutes.",
    "zh": "这些是权衡，而不是简单的替代方案。"
  },
  {
    "id": 441,
    "start": 3641.608,
    "end": 3653.583,
    "en": "As frontier reasoning models advance rapidly, separating fast and slow thinking offers an important engineering advantage: it captures the gains from each new generation of slow models directly.",
    "zh": "随着前沿推理模型的快速发展，分离快速和慢速思维提供了一个重要的工程优势：它可以直接从每个新代的慢速模型中获益。"
  },
  {
    "id": 442,
    "start": 3653.583,
    "end": 3664.97,
    "en": "The fast foreground model only needs to listen, respond, and sustain the conversation with low latency, while the slow background model handles reasoning, planning, and tool use.",
    "zh": "快速的前景模型只需倾听、回应并以低延迟维持对话，而慢速的背景模型则处理推理、规划和工具使用。"
  },
  {
    "id": 443,
    "start": 3664.97,
    "end": 3674.083,
    "en": "When a stronger reasoning model arrives, only the background model needs to be replaced; the entire realtime voice system need not be retrained.",
    "zh": "当更强的推理模型出现时，只需替换背景模型；整个实时语音系统无需重新训练。"
  },
  {
    "id": 444,
    "start": 3674.083,
    "end": 3684.695,
    "en": "A unified design binds reasoning and interaction to the same training cycle, so every upgrade must rebalance intelligence, response latency, and natural expression.",
    "zh": "统一设计将推理和交互绑定到相同的训练周期，因此每次升级都必须重新平衡智能性、响应延迟和自然表达。"
  },
  {
    "id": 445,
    "start": 3684.695,
    "end": 3695.42,
    "en": "Fast/slow separation is therefore not merely a compromise on latency, but a modular choice that lets interaction capability and the intelligence ceiling evolve independently.",
    "zh": "因此，快速/慢速分离不仅仅是对延迟的妥协，而是一种模块化选择，使交互能力和智能上限能够独立发展。"
  },
  {
    "id": 446,
    "start": 3695.42,
    "end": 3700.158,
    "en": "This separation does not necessarily sacrifice task performance.",
    "zh": "这种分离不一定牺牲任务性能。"
  },
  {
    "id": 447,
    "start": 3700.158,
    "end": 3716.233,
    "en": "As of August 2026, Pine AI's voice Agent, which uses a separated fast/slow architecture, ranked first on the τ³-Voice Leaderboard, ahead of realtime voice systems including Grok Voice and GPT-Realtime-2.",
    "zh": "截至2026年8月，使用分离式快速/慢速架构的Pine AI语音智能体在τ³-语音排行榜上排名第一，领先于包括Grok语音和GPT-Realtime-2在内的实时语音系统。"
  },
  {
    "id": 448,
    "start": 3716.233,
    "end": 3726.933,
    "en": "At minimum, this result shows that a decoupled architecture is not inherently inferior to end-to-end models on tasks that jointly test deep reasoning and realtime conversation.",
    "zh": "至少，这一结果表明，解耦架构在同时测试深度推理和实时对话的任务上并不必然劣于端到端模型。"
  },
  {
    "id": 449,
    "start": 3727.084,
    "end": 3733.771,
    "en": "The term “end-to-end model” needs one further clarification because it is commonly used in two senses.",
    "zh": "‘端到端模型’这一术语需要进一步澄清，因为它通常有两种含义。"
  },
  {
    "id": 450,
    "start": 3733.721,
    "end": 3744.784,
    "en": "The first is an end-to-end speech path, discussed in the preceding section: the model receives audio and produces audio directly instead of connecting multiple models through discrete text.",
    "zh": "第一种是指端到端的语音路径，前一节已讨论过：模型直接接收音频并输出音频，而不是通过离散文本连接多个模型。"
  },
  {
    "id": 451,
    "start": 3744.784,
    "end": 3757.384,
    "en": "Both Omni and Interaction Models are end-to-end in this sense, but Omni models usually remain turn-based, whereas Interaction Models can listen and speak at the same time; their architectures differ substantially.",
    "zh": "从这个意义上说，Omni模型和Interaction模型都是端到端的，但Omni模型通常保持回合制，而Interaction模型可以同时听和说；它们的架构差异很大。"
  },
  {
    "id": 452,
    "start": 3757.384,
    "end": 3771.459,
    "en": "The second is an end-to-end cognitive architecture, discussed in this section: realtime interaction and deep reasoning either share state and are trained together within one model, or are split between a fast foreground model and a slow background model.",
    "zh": "第二种是端到端的认知架构，本节将进行讨论：实时交互和深度推理要么共享状态并在一个模型中一起训练，要么在快速的前景模型和缓慢的背景模型之间进行分割。"
  },
  {
    "id": 453,
    "start": 3771.459,
    "end": 3774.109,
    "en": "The two axes are independent.",
    "zh": "这两个轴是相互独立的。"
  },
  {
    "id": 454,
    "start": 3774.109,
    "end": 3787.146,
    "en": "A system can have an end-to-end speech path while retaining fast/slow separation in its cognitive architecture; Thinking Machines Lab's delegation of complex tasks to a background reasoner is one such combination.",
    "zh": "一个系统可以在保留其认知架构中的快速/慢速分离的同时，拥有端到端的语音路径；Thinking Machines Lab将复杂任务委托给背景推理器就是这种组合的一个例子。"
  },
  {
    "id": 455,
    "start": 3787.146,
    "end": 3789.996,
    "en": "More human-like speech synthesis.",
    "zh": "更接近人类的语音合成。"
  },
  {
    "id": 456,
    "start": 3789.996,
    "end": 3795.509,
    "en": "Traditional TTS can sound artificial when it is too smooth and pauses too little.",
    "zh": "传统的TTS在过于流畅且停顿过少时听起来会显得不自然。"
  },
  {
    "id": 457,
    "start": 3795.509,
    "end": 3802.196,
    "en": "Pauses, filler words, and occasional repetition signal uncertainty and thought in human speech.",
    "zh": "停顿、填充词和偶尔的重复在人类语言中表明了不确定性和思考。"
  },
  {
    "id": 458,
    "start": 3802.196,
    "end": 3818.084,
    "en": "The main LLM can emit control markers in addition to text, such as THINKING, EMO:happy, and SPEED:0.8x; TTS maps them to pauses, prosody, speaking rate, laughter, sighs, and other nonverbal audio.",
    "zh": "主LLM除了文本之外还可以发出控制标记，例如THINKING、EMO:happy和SPEED:0.8x；TTS会将它们映射到停顿、语调、语速、笑声、叹息和其他非语言音频。"
  },
  {
    "id": 459,
    "start": 3818.084,
    "end": 3826.784,
    "en": "The implementation can be a TTS trained to understand control markers, or voice cloning with reference clips for different emotions and styles.",
    "zh": "实现可以是能够理解控制标记的TTS，也可以是使用参考片段进行情感和风格克隆的语音。"
  },
  {
    "id": 460,
    "start": 3826.784,
    "end": 3834.559,
    "en": "Experiment 6-7 intermediate difficulty, two stars: : Control token-driven TTS with Fish Audio",
    "zh": "实验6-7 中等难度，两颗星：Fish Audio驱动的控制标记TTS"
  },
  {
    "id": 461,
    "start": 3834.559,
    "end": 3845.659,
    "en": "Use Fish Audio S1 to build a multi-reference voice library and compare three configurations: no control markers, one reference clip, and multiple reference clips.",
    "zh": "使用Fish Audio S1构建多参考语音库，并比较三种配置：无控制标记、一个参考片段和多个参考片段。"
  },
  {
    "id": 462,
    "start": 3845.659,
    "end": 3851.821,
    "en": "The execution layer selects matching emotion, speaking rate, and style from the markers.",
    "zh": "执行层从标记中选择匹配的情感、语速和风格。"
  },
  {
    "id": 463,
    "start": 3851.821,
    "end": 3855.709,
    "en": "Computer Use: GUI Automation Agents.",
    "zh": "计算机使用：GUI自动化智能体。"
  },
  {
    "id": 464,
    "start": 3855.709,
    "end": 3862.834,
    "en": "Voice pushed the timing axis down to the millisecond, but its observation is still a one-dimensional stream of sound.",
    "zh": "语音将时间轴推进到了毫秒级，但其观察仍然是一维的声音流。"
  },
  {
    "id": 465,
    "start": 3862.834,
    "end": 3873.421,
    "en": "Computer Use moves the same problem onto a two-dimensional screen: observation becomes continuously changing pixels, and action becomes clicks and keystrokes at coordinates.",
    "zh": "计算机使用将同样的问题转移到了二维屏幕上：观察变成了不断变化的像素，而动作则变成了坐标处的点击和按键。"
  },
  {
    "id": 466,
    "start": 3873.421,
    "end": 3886.671,
    "en": "Voice scenarios emphasize when to speak; Computer Use emphasizes where to click next—plus a question that does not exist in voice interaction at all: after an action executes, is reality still consistent with the plan?",
    "zh": "语音场景强调何时说话；计算机使用强调下一步点击哪里——还有一个在语音交互中根本不存在的问题：执行一个动作后，现实是否仍与计划一致？"
  },
  {
    "id": 467,
    "start": 3886.671,
    "end": 3904.971,
    "en": "Computer Use, also known as GUI automation, allows AI to use software like a human by observing the screen and operating the mouse and keyboard—for example, opening a browser to search for information, filling in data in a spreadsheet application, or adjusting configurations in system settings.",
    "zh": "计算机使用，也称为GUI自动化，使AI能够像人类一样使用软件，通过观察屏幕并操作鼠标和键盘，例如打开浏览器搜索信息，在电子表格应用程序中填写数据，或调整系统设置中的配置。"
  },
  {
    "id": 468,
    "start": 3904.971,
    "end": 3909.434,
    "en": "Its core is a Perceive-Think-Act loop (Figure 6-11",
    "zh": "其核心是一个感知-思考-行动循环（图6-11）"
  },
  {
    "id": 469,
    "start": 3909.434,
    "end": 3912.884,
    "en": "The Agent takes a screenshot of the current screen.",
    "zh": "智能体对当前屏幕进行截图。"
  },
  {
    "id": 470,
    "start": 3912.884,
    "end": 3919.834,
    "en": "A multimodal model receives the screenshot and task instruction, and outputs a thought and a specific action.",
    "zh": "多模态模型接收截图和任务指令，并输出一个想法和一个具体操作。"
  },
  {
    "id": 471,
    "start": 3919.834,
    "end": 3927.809,
    "en": "The execution layer performs the action in the real environment (moving the mouse, clicking, typing text, etc.).",
    "zh": "执行层在真实环境中执行该操作（移动鼠标、点击、输入文本等）。"
  },
  {
    "id": 472,
    "start": 3927.809,
    "end": 3934.096,
    "en": "It waits for the interface to respond, takes another screenshot, and enters the next loop iteration.",
    "zh": "它等待界面响应，再次截图，并进入下一轮循环。"
  },
  {
    "id": 473,
    "start": 3934.096,
    "end": 3939.009,
    "en": "It is important to distinguish understanding the interface from completing the task.",
    "zh": "区分理解界面和完成任务非常重要。"
  },
  {
    "id": 474,
    "start": 3939.009,
    "end": 3945.696,
    "en": "The former is closer to multimodal understanding and can be measured with one-shot screenshot question answering.",
    "zh": "前者更接近多模态理解，可以通过单次截图问答来衡量。"
  },
  {
    "id": 475,
    "start": 3945.696,
    "end": 3956.559,
    "en": "The latter requires the model to put understanding and action generation into a closed loop that handles page loading, state changes, mistakes, and irreversible consequences.",
    "zh": "后者需要模型将理解与动作生成放入一个闭环中，以处理页面加载、状态变化、错误和不可逆后果。"
  },
  {
    "id": 476,
    "start": 3956.559,
    "end": 3965.934,
    "en": "The challenge of Computer Use is therefore not merely answering correctly about a screenshot, but reconfirming after every step that reality still matches the plan.",
    "zh": "因此，计算机使用的挑战不仅仅是正确回答关于截图的问题，而是在每一步之后重新确认现实是否仍与计划一致。"
  },
  {
    "id": 477,
    "start": 3965.934,
    "end": 3971.884,
    "en": "As illustrated in Figure 6-11: Computer Use Agent's Perceive-Think-Act Loop.",
    "zh": "如图6-11所示：计算机使用智能体的感知-思考-行动循环。"
  },
  {
    "id": 478,
    "start": 3971.884,
    "end": 3986.871,
    "en": "There are three key design dimensions in this loop: Action Space (what operations the Agent can perform), Visual Grounding (how to find the target element in the screenshot), and Model Architecture (how to generate the correct action from the screenshot).",
    "zh": "此循环中有三个关键设计维度：动作空间（智能体可以执行哪些操作）、视觉定位（如何在截图中找到目标元素）以及模型架构（如何从截图生成正确的动作）。"
  },
  {
    "id": 479,
    "start": 3986.871,
    "end": 3989.196,
    "en": "Action Space Design.",
    "zh": "动作空间设计。"
  },
  {
    "id": 480,
    "start": 3989.356,
    "end": 3997.656,
    "en": "Anthropic's reference implementation divides a complete interaction capability into three types of tools (Figure 6-12).",
    "zh": "Anthropic的参考实现将完整的交互能力分为三种工具类型（图6-12）。"
  },
  {
    "id": 481,
    "start": 3997.606,
    "end": 4019.043,
    "en": "This is a clear action-space design, but not a private protocol that model providers must follow: as long as the Harness can translate the same screenshots, action constraints, and execution results into messages and structured outputs supported by the target model, Claude, open-weight vision models, and self-hosted endpoints can all drive the same Perceive-Think-Act loop.",
    "zh": "这是一个清晰的动作空间设计，但不是模型提供商必须遵循的私有协议：只要Harness能够将相同的屏幕截图、动作约束和执行结果转换为目标模型支持的消息和结构化输出，Claude、开放权重视觉模型和自托管端点都可以驱动相同的感知-思考-行动循环。"
  },
  {
    "id": 482,
    "start": 4019.043,
    "end": 4024.518,
    "en": "As illustrated in Figure 6-12: Computer Use Action Space.",
    "zh": "如图6-12所示：计算机使用动作空间。"
  },
  {
    "id": 483,
    "start": 4024.518,
    "end": 4044.806,
    "en": "GUI Operation Tool (computer tool): Mouse operations include moving (mouse_move), left/right/middle clicks, double-clicking or triple-clicking, dragging (left_click_drag), and more precise press/release actions (left_mouse_down and left_mouse_up).",
    "zh": "GUI操作工具（计算机工具）：鼠标操作包括移动（mouse_move）、左/右/中键点击、双击或三击、拖动（left_click_drag），以及更精确的按下/释放操作（left_mouse_down 和 left_mouse_up）。"
  },
  {
    "id": 484,
    "start": 4044.806,
    "end": 4051.031,
    "en": "Scrolling (scroll) supports four directions and can be combined with modifier keys.",
    "zh": "滚动（scroll）支持四个方向，并且可以与修饰键结合使用。"
  },
  {
    "id": 485,
    "start": 4051.031,
    "end": 4065.981,
    "en": "Keyboard operations include typing character by character (type, with a 12ms interval between characters to simulate real typing), key combinations (key, e.g., Ctrl+C), and holding a key (hold_key).",
    "zh": "键盘操作包括逐个字符输入（type，字符之间间隔12毫秒以模拟真实输入）、按键组合（key，例如 Ctrl+C）和按住一个键（hold_key）。"
  },
  {
    "id": 486,
    "start": 4065.981,
    "end": 4074.406,
    "en": "Perception actions include taking a screenshot, retrieving the cursor position (cursor_position), and waiting (wait).",
    "zh": "感知操作包括截屏、获取光标位置（cursor_position）和等待（wait）。"
  },
  {
    "id": 487,
    "start": 4074.406,
    "end": 4081.993,
    "en": "Command Execution Tool (bash tool): Provides a persistent bash terminal session with a 120-second timeout.",
    "zh": "命令执行工具（bash 工具）：提供一个持续的 bash 终端会话，超时时间为 120 秒。"
  },
  {
    "id": 488,
    "start": 4081.993,
    "end": 4093.243,
    "en": "It uses a sentinel string to detect command completion and maintains environment state across multiple calls (e.g., after cd to a directory, the next call remains in that directory).",
    "zh": "它使用哨兵字符串检测命令完成情况，并在多次调用中保持环境状态（例如，在 cd 到某个目录后，下一次调用仍会留在该目录中）。"
  },
  {
    "id": 489,
    "start": 4093.243,
    "end": 4104.943,
    "en": "File Editing Tool (str_replace_editor): Enables safe editing through string matching and supports view, create, replace, insert, and undo operations.",
    "zh": "文件编辑工具（str_replace_editor）：通过字符串匹配实现安全编辑，并支持查看、创建、替换、插入和撤销操作。"
  },
  {
    "id": 490,
    "start": 4104.943,
    "end": 4111.893,
    "en": "It is more precise than overwriting an entire file and less likely to modify unrelated content accidentally.",
    "zh": "它比覆盖整个文件更精确，也更不容易意外修改无关内容。"
  },
  {
    "id": 491,
    "start": 4111.893,
    "end": 4120.906,
    "en": "Experiment 6-8 introductory difficulty, one star: : Running Computer Use (Anthropic Reference Path or Open-Model Path)",
    "zh": "实验6-8，入门难度，一颗星：运行计算机使用（Anthropic 参考路径或开放模型路径）"
  },
  {
    "id": 492,
    "start": 4120.906,
    "end": 4124.493,
    "en": "Path A uses the Anthropic Computer Use Demo.",
    "zh": "路径 A 使用 Anthropic 计算机使用示例。"
  },
  {
    "id": 493,
    "start": 4124.493,
    "end": 4132.481,
    "en": "Its container packages a complete Ubuntu desktop environment, including a browser, terminal, and other common tools.",
    "zh": "它的容器打包了一个完整的 Ubuntu 桌面环境，包括浏览器、终端和其他常用工具。"
  },
  {
    "id": 494,
    "start": 4132.481,
    "end": 4143.543,
    "en": "The frontend receives a task, while the backend sends the instructions and screenshots to Claude and then executes the mouse, keyboard, terminal, or editing actions returned by the model.",
    "zh": "前端接收任务，后端将指令和屏幕截图发送给 Claude，然后执行模型返回的鼠标、键盘、终端或编辑操作。"
  },
  {
    "id": 495,
    "start": 4143.543,
    "end": 4148.856,
    "en": "Path B uses the example code in chapter6/computer-use-open-model.",
    "zh": "路径 B 使用 chapter6/computer-use-open-model 中的示例代码。"
  },
  {
    "id": 496,
    "start": 4148.856,
    "end": 4161.893,
    "en": "By default, it drives browser-use with the open-weight Qwen3-VL 32B Instruct model through the hosted OpenRouter API, or through self-hosted vLLM/SGLang and similar systems.",
    "zh": "默认情况下，它通过托管的OpenRouter API使用open-weight Qwen3-VL 32B Instruct模型进行浏览器操作，或者通过自托管的vLLM/SGLang等系统进行操作。"
  },
  {
    "id": 497,
    "start": 4161.893,
    "end": 4163.893,
    "en": "Visual Grounding.",
    "zh": "视觉定位。"
  },
  {
    "id": 498,
    "start": 4163.893,
    "end": 4171.581,
    "en": "In each iteration of the loop, the model needs to accurately locate the target element in the screenshot—\"Where is the search box?",
    "zh": "在每次循环中，模型需要准确地在截图中定位目标元素——“搜索框在哪里？”"
  },
  {
    "id": 499,
    "start": 4171.581,
    "end": 4174.418,
    "en": "What are the coordinates of the submit button?",
    "zh": "提交按钮的坐标是什么？"
  },
  {
    "id": 500,
    "start": 4174.418,
    "end": 4177.256,
    "en": "This is the visual grounding problem.",
    "zh": "这就是视觉定位问题。"
  },
  {
    "id": 501,
    "start": 4177.256,
    "end": 4196.043,
    "en": "Currently, there are two main approaches: one is to turn localization into a multiple-choice problem—first annotate the interface elements with numbers, and the model only needs to select one; the other is pure coordinate prediction—letting the model \"look\" at the screenshot and report coordinates directly, just like a human.",
    "zh": "目前主要有两种方法：一种是将定位问题转化为多选题——首先用数字标注界面元素，模型只需选择一个；另一种是纯坐标预测——让模型‘看’截图并直接报告坐标，就像人类一样。"
  },
  {
    "id": 502,
    "start": 4196.043,
    "end": 4213.593,
    "en": "The multiple-choice approach has two implementation methods: pure visual annotation (the original Set-of-Mark, using a segmentation model to segment candidate regions in the image) and structured element indexing (DOM/Accessibility Tree, directly reading the interface's inherent structure).",
    "zh": "多选方法有两种实现方式：纯视觉标注（原始的Set-of-Mark，使用分割模型对图像中的候选区域进行分割）和结构化元素索引（DOM/无障碍树，直接读取界面的固有结构）。"
  },
  {
    "id": 503,
    "start": 4213.593,
    "end": 4226.331,
    "en": "The common advantage of the multiple-choice approach is that it transforms the open-ended problem of \"find the button in the screenshot and predict its coordinates\" into a closed-ended one of \"choose one from the already annotated elements.",
    "zh": "多选方法的共同优势是，它将‘在截图中找到按钮并预测其坐标’这一开放性问题转化为‘从已标注元素中选择一个’的封闭性问题。"
  },
  {
    "id": 504,
    "start": 4226.331,
    "end": 4242.043,
    "en": "Just as multiple-choice questions are easier to answer correctly than fill-in-the-blank questions in an exam, the model only needs to say \"click [123]\" instead of \"click the button at screen coordinates (350, 464).",
    "zh": "正如考试中的多选题比填空题更容易答对，模型只需说‘点击[123]’，而不需要说‘点击屏幕坐标(350, 464)处的按钮’。"
  },
  {
    "id": 505,
    "start": 4242.043,
    "end": 4251.631,
    "en": "Predicting coordinates directly is especially hard for a model—it takes extensive training to get right, and it is prone to error across different screen resolutions.",
    "zh": "直接预测坐标对模型来说尤其困难——需要大量的训练才能正确，并且在不同屏幕分辨率下容易出错。"
  },
  {
    "id": 506,
    "start": 4251.631,
    "end": 4255.143,
    "en": "Set-of-Mark: Visual Annotation Method.",
    "zh": "Set-of-Mark：视觉标注方法。"
  },
  {
    "id": 507,
    "start": 4255.3,
    "end": 4266.462,
    "en": "The original Set-of-Mark (SoM) was proposed by Microsoft Research in 2023, initially to unlock the visual grounding capabilities of GPT-4V.",
    "zh": "最初的Set-of-Mark（SoM）由微软研究院于2023年提出，最初是为了解锁GPT-4V的视觉定位能力。"
  },
  {
    "id": 508,
    "start": 4266.412,
    "end": 4281.15,
    "en": "It is a purely visual method: it uses image segmentation models (SAM, SEEM, etc.) to automatically segment candidate regions in the screenshot, overlays a numbered marker on each region, and the model sees an image with numbers.",
    "zh": "这是一种纯视觉方法：它使用图像分割模型（如SAM、SEEM等）自动分割截图中的候选区域，在每个区域上叠加编号标记，模型看到的是带有数字的图像。"
  },
  {
    "id": 509,
    "start": 4281.15,
    "end": 4288.237,
    "en": "The model only needs to report the number, and the system converts it into the center coordinates of the corresponding region.",
    "zh": "模型只需报告数字，系统会将其转换为对应区域的中心坐标。"
  },
  {
    "id": 510,
    "start": 4288.237,
    "end": 4302.025,
    "en": "The entire process does not require a DOM or any internal interface structure, so it is equally applicable to native desktop software and game interfaces—as long as the segmentation model can identify the candidate regions.",
    "zh": "整个过程不需要DOM或任何内部界面结构，因此同样适用于原生桌面软件和游戏界面——只要分割模型能识别候选区域。"
  },
  {
    "id": 511,
    "start": 4302.025,
    "end": 4307.637,
    "en": "Structured Element Indexing: A Structured Implementation of the SoM Idea on the Web.",
    "zh": "结构化元素索引：对网页上SoM概念的结构化实现。"
  },
  {
    "id": 512,
    "start": 4307.637,
    "end": 4313.325,
    "en": "When the interface itself provides structured information, annotation can be more precise.",
    "zh": "当界面本身提供结构化信息时，标注可以更加精确。"
  },
  {
    "id": 513,
    "start": 4313.325,
    "end": 4324.362,
    "en": "Before rendering, modern web pages define a complete element structure (the DOM tree) and semantic roles that identify buttons, input fields, and other controls.",
    "zh": "在渲染之前，现代网页会定义完整的元素结构（DOM树）和语义角色，以识别按钮、输入字段和其他控件。"
  },
  {
    "id": 514,
    "start": 4324.362,
    "end": 4329.962,
    "en": "Accessibility trees provide similar information for many desktop applications.",
    "zh": "可访问性树为许多桌面应用程序提供了类似的信息。"
  },
  {
    "id": 515,
    "start": 4329.962,
    "end": 4337.65,
    "en": "Web Agent systems such as browser-use take exactly this route: they enumerate and number interactive elements from the DOM.",
    "zh": "网络智能体系统（如浏览器使用）正是采用这种路径：它们从DOM中枚举并编号交互元素。"
  },
  {
    "id": 516,
    "start": 4337.65,
    "end": 4343.737,
    "en": "This is a structured implementation of the SoM idea for the web (Figure 6-13).",
    "zh": "这是针对网页的SoM概念的结构化实现（图6-13）。"
  },
  {
    "id": 517,
    "start": 4343.737,
    "end": 4346.412,
    "en": "The process has four steps:",
    "zh": "该过程有四个步骤："
  },
  {
    "id": 518,
    "start": 4346.412,
    "end": 4357.062,
    "en": "Obtain the structured representation (DOM tree) and accessibility information for the page through the browser's debugging interface (CDP, Chrome DevTools Protocol)",
    "zh": "通过浏览器的调试接口（CDP，Chrome DevTools协议）获取页面的结构化表示（DOM树）和可访问性信息"
  },
  {
    "id": 519,
    "start": 4357.062,
    "end": 4364.075,
    "en": "Automatically detect which elements are interactive (buttons, input boxes, links, etc.)",
    "zh": "自动检测哪些元素是交互式的（按钮、输入框、链接等）"
  },
  {
    "id": 520,
    "start": 4364.075,
    "end": 4370.175,
    "en": "Annotate each interactive element with a unique ID and draw bounding boxes on the screenshot",
    "zh": "为每个交互元素标注唯一ID，并在截图上绘制边界框"
  },
  {
    "id": 521,
    "start": 4370.175,
    "end": 4375.862,
    "en": "Simultaneously generate a text list describing the element corresponding to each ID",
    "zh": "同时生成一个文本列表，描述每个ID对应的元素"
  },
  {
    "id": 522,
    "start": 4375.862,
    "end": 4380.6,
    "en": "Refer to the companion repository for the complete code implementation.",
    "zh": "请参考配套的代码仓库获取完整实现代码。"
  },
  {
    "id": 523,
    "start": 4380.6,
    "end": 4387.575,
    "en": "The model only needs to output an ID, and the system automatically clicks the center of the corresponding element.",
    "zh": "模型只需输出一个ID，系统就会自动点击对应元素的中心位置。"
  },
  {
    "id": 524,
    "start": 4387.575,
    "end": 4400.925,
    "en": "This approach does not save tokens because all annotation data must still be sent to the model, but it provides accurate, stable localization while avoiding the missed detections and false positives that segmentation models can introduce.",
    "zh": "这种方法不会节省token，因为所有标注数据仍需发送给模型，但它提供了准确且稳定的定位，同时避免了分割模型可能引入的漏检和误报。"
  },
  {
    "id": 525,
    "start": 4400.925,
    "end": 4408.975,
    "en": "As illustrated in Figure 6-13: Set-of-Mark vs. Structured Element Indexing (browser-use implementation).",
    "zh": "如图6-13所示：标记集（Set-of-Mark）与结构化元素索引（浏览器使用实现）。"
  },
  {
    "id": 526,
    "start": 4408.975,
    "end": 4411.4,
    "en": "Pure Coordinate Prediction.",
    "zh": "纯坐标预测。"
  },
  {
    "id": 527,
    "start": 4411.4,
    "end": 4416.9,
    "en": "The third route skips annotation and asks the model to output coordinates directly.",
    "zh": "第三种方法跳过标注，直接让模型输出坐标。"
  },
  {
    "id": 528,
    "start": 4416.9,
    "end": 4426.312,
    "en": "Systems such as SeeClick and Claude's computer use rely on vision models trained on massive datasets of GUI screenshots paired with element positions.",
    "zh": "SeeClick和Claude的计算机使用系统依赖于在大量GUI截图及其元素位置数据集上训练的视觉模型。"
  },
  {
    "id": 529,
    "start": 4426.312,
    "end": 4437.775,
    "en": "These models learn to map natural-language descriptions (e.g., \"click the submit button\") directly to precise screenshot coordinates, relying on visual perception much like a human user.",
    "zh": "这些模型学习将自然语言描述（例如“点击提交按钮”）直接映射到精确的屏幕截图坐标，依靠视觉感知，就像人类用户一样。"
  },
  {
    "id": 530,
    "start": 4437.94,
    "end": 4447.427,
    "en": "In coordinate prediction schemes, the model's understanding of coordinates is highly dependent on the resolution used during training (Figure 6-14).",
    "zh": "在坐标预测方案中，模型对坐标的理解高度依赖于训练时使用的分辨率（图6-14）。"
  },
  {
    "id": 531,
    "start": 4447.377,
    "end": 4459.877,
    "en": "Claude was trained using XGA (1024×768), WXGA (1280×800), and FWXGA (1366×768).",
    "zh": "Claude使用XGA（1024×768）、WXGA（1280×800）和FWXGA（1366×768）进行训练。"
  },
  {
    "id": 532,
    "start": 4459.877,
    "end": 4471.452,
    "en": "If the input screenshot resolution does not match, the model's predicted coordinates will systematically shift—like measuring a distance on a small map and then applying it directly to a large map.",
    "zh": "如果输入的截图分辨率不匹配，模型预测的坐标将系统性偏移——就像在小地图上测量距离然后直接应用到大地图上一样。"
  },
  {
    "id": 533,
    "start": 4471.452,
    "end": 4486.477,
    "en": "Therefore, a bidirectional coordinate scaling mechanism must be implemented at the tool layer, and the target resolution must be selected based on the aspect ratio to avoid non-uniform stretching that distorts the image and consequently biases coordinate judgment.",
    "zh": "因此，必须在工具层实现双向坐标缩放机制，并根据宽高比选择目标分辨率，以避免非均匀拉伸导致图像失真，从而影响坐标判断。"
  },
  {
    "id": 534,
    "start": 4486.477,
    "end": 4505.902,
    "en": "For example, if the actual screen resolution is 2560×1440 (16:9), the most suitable target among Claude's three supported options is FWXGA (1366×768), which has an aspect ratio closest to 16:9.",
    "zh": "例如，如果实际屏幕分辨率为2560×1440（16:9），Claude支持的三种选项中最合适的为FWXGA（1366×768），其宽高比最接近16:9。"
  },
  {
    "id": 535,
    "start": 4505.902,
    "end": 4532.24,
    "en": "The screenshot is proportionally scaled to 1366×768 and fed to the model; after the model outputs the click coordinates (683, 384), they are inversely mapped to the real coordinates (683×2560/1366, 384×1440/768) ≈ (1280, 720).",
    "zh": "截图按比例缩放为1366×768后输入模型；模型输出点击坐标（683, 384）后，再反向映射到真实坐标（683×2560/1366, 384×1440/768）≈（1280, 720）。"
  },
  {
    "id": 536,
    "start": 4532.24,
    "end": 4546.265,
    "en": "Conversely, if a 16:9 image is forcibly stretched into the 4:3 1024×768, the image will be horizontally compressed, causing the model's predicted coordinates to systematically shift.",
    "zh": "相反，如果将16:9的图像强制拉伸为4:3的1024×768，图像会水平压缩，导致模型预测的坐标系统性偏移。"
  },
  {
    "id": 537,
    "start": 4546.265,
    "end": 4553.177,
    "en": "As illustrated in Figure 6-14: Resolution Matching and Bidirectional Coordinate Scaling.",
    "zh": "如图6-14所示：分辨率匹配与双向坐标缩放。"
  },
  {
    "id": 538,
    "start": 4553.177,
    "end": 4565.102,
    "en": "The choice among the three routes can be summarized as follows: when structured information is available, prioritize DOM/accessibility-tree indexing for the most accurate and stable localization.",
    "zh": "三种方法的选择可总结如下：当有结构化信息时，优先使用DOM/可访问性树索引以实现最准确和稳定的定位。"
  },
  {
    "id": 539,
    "start": 4565.102,
    "end": 4578.577,
    "en": "When it is unavailable—in native desktop software such as Photoshop, canvas/WebGL-rendered interfaces, or games—use either visual annotation (the original SoM route) or coordinate prediction.",
    "zh": "当不可用时——例如原生桌面软件如Photoshop、画布/WebGL渲染界面或游戏——则使用视觉标注（原始SoM路径）或坐标预测。"
  },
  {
    "id": 540,
    "start": 4578.577,
    "end": 4587.202,
    "en": "Visual annotation turns localization into a multiple-choice problem, making it friendlier to general-purpose models without specialized training.",
    "zh": "视觉标注将定位问题转化为多选题，使通用模型更友好，无需专门训练。"
  },
  {
    "id": 541,
    "start": 4587.202,
    "end": 4595.015,
    "en": "Coordinate prediction eliminates the annotation step and is more direct for models trained specifically on GUI localization.",
    "zh": "坐标预测消除了标注步骤，对于专门针对GUI定位训练的模型来说更为直接。"
  },
  {
    "id": 542,
    "start": 4595.015,
    "end": 4599.677,
    "en": "Both approaches still struggle with small elements and dense interfaces.",
    "zh": "两种方法仍然难以处理小元素和密集界面。"
  },
  {
    "id": 543,
    "start": 4599.677,
    "end": 4608.077,
    "en": "Experiment 6-9 introductory difficulty, one star: : Using browser-use to Implement Automated Browser Operations",
    "zh": "实验6-9 介绍难度，一颗星：使用浏览器操作实现自动化浏览器操作"
  },
  {
    "id": 544,
    "start": 4608.077,
    "end": 4616.677,
    "en": "Use Playwright, a browser-automation framework, together with a multimodal model to implement natural-language-driven browser operations.",
    "zh": "使用Playwright浏览器自动化框架，结合多模态模型，实现自然语言驱动的浏览器操作。"
  },
  {
    "id": 545,
    "start": 4616.677,
    "end": 4623.327,
    "en": "Enable SoM visualization and save a screenshot with annotated bounding boxes before every decision.",
    "zh": "在每次决策前启用SoM可视化并保存带有注释边界框的截图。"
  },
  {
    "id": 546,
    "start": 4623.327,
    "end": 4632.377,
    "en": "Test task “Open Google and query San Francisco weather”: after startup, the screenshot shows Google Search with numbered interactive elements.",
    "zh": "测试任务“打开Google并查询旧金山天气”：启动后，截图显示带有编号交互元素的Google搜索页面。"
  },
  {
    "id": 547,
    "start": 4632.377,
    "end": 4641.865,
    "en": "The model selects the search box, enters “San Francisco weather today,” submits it, and extracts the temperature and conditions from the results page.",
    "zh": "模型选择搜索框，输入“San Francisco weather today”，提交后从结果页面中提取温度和天气状况。"
  },
  {
    "id": 548,
    "start": 4641.865,
    "end": 4646.127,
    "en": "A Computer Use Agent That Can Watch Animations and Hear Sound.",
    "zh": "一个能够观看动画和听声音的计算机使用智能体。"
  },
  {
    "id": 549,
    "start": 4646.127,
    "end": 4657.227,
    "en": "So far, Computer Use perception has rested on an implicit assumption: the screen is static—take a screenshot, reason one step, click, and take the next screenshot.",
    "zh": "到目前为止，计算机使用感知一直基于一个隐含假设：屏幕是静态的——截一次图，推理一步，点击，再截下一张图。"
  },
  {
    "id": 550,
    "start": 4657.227,
    "end": 4663.902,
    "en": "Real screens play videos, flash short-lived notifications, and carry voices from meetings.",
    "zh": "真实屏幕会播放视频，闪现短暂的通知，并传递会议中的声音。"
  },
  {
    "id": 551,
    "start": 4663.902,
    "end": 4672.215,
    "en": "An Agent that opens its eyes only once every 3–5 seconds and has no ears cannot see or hear what happens between two frames.",
    "zh": "一个每3-5秒才睁开眼睛一次且没有耳朵的智能体，无法看到或听到两帧之间的内容。"
  },
  {
    "id": 552,
    "start": 4672.215,
    "end": 4677.352,
    "en": "What needs redesign is not the action interface but the observation interface.",
    "zh": "需要重新设计的不是动作接口，而是观察接口。"
  },
  {
    "id": 553,
    "start": 4677.352,
    "end": 4686.127,
    "en": "An Agent–computer observation interface (AOI) converts continuous environmental observation into discrete events the model can handle.",
    "zh": "一个智能体-计算机观察接口（AOI）将连续的环境观察转化为智能体可以处理的离散事件。"
  },
  {
    "id": 554,
    "start": 4686.127,
    "end": 4714.177,
    "en": "Its key techniques are: screen keyframe capture, which uses a small model to judge whether the screen has changed meaningfully and only takes a screenshot on a significant change—when changes are frequent, capturing once per second already works well; volume-gated speech transcription, which invokes recognition when sound is present and feeds the recognized text into the context so the Agent can hear; and describing the screen as text, so the model turns each captured screenshot into a one-",
    "zh": "其关键技术包括：屏幕关键帧捕捉，该技术使用一个小模型来判断屏幕是否发生了有意义的变化，并仅在发生显著变化时进行截图——当变化频繁时，每秒捕获一次已经效果很好；音量触发的语音转录，该技术在有声音时调用识别功能，并将识别出的文字输入上下文，使智能体能够“听”到；以及将屏幕描述为文本，这样模型可以将每张捕捉到的截图转化为一句描述性文字，即使原图已离开，该描述仍保留在上下文中，从而压缩多模态交互历史。"
  },
  {
    "id": 555,
    "start": 4714.177,
    "end": 4721.752,
    "en": "sentence description that stays in the context after the original image leaves it, compressing multimodal interaction history.",
    "zh": "一句话的描述，该描述在原图离开后仍保留在上下文中，压缩多模态交互历史。"
  },
  {
    "id": 556,
    "start": 4721.908,
    "end": 4724.683,
    "en": "World Models for Computer Use.",
    "zh": "用于计算机使用的世界模型。"
  },
  {
    "id": 557,
    "start": 4724.788,
    "end": 4737.725,
    "en": "The observation interface of the previous section answers \"what happened in between?\": with keyframes, speech transcription and persistent text, the Agent no longer sees only two screenshots taken far apart.",
    "zh": "上一节的观察接口回答了“中间发生了什么？”：通过关键帧、语音转录和持久文本，智能体不再只看到两张相距很远的截图。"
  },
  {
    "id": 558,
    "start": 4737.675,
    "end": 4741.95,
    "en": "But an observation interface does not remove planning latency.",
    "zh": "但观察接口并不能消除规划延迟。"
  },
  {
    "id": 559,
    "start": 4741.95,
    "end": 4751.413,
    "en": "The Agent is still running a serial \"screenshot—think—click\" loop, re-observing and reasoning about the next step after every single action.",
    "zh": "智能体仍然在运行一个串行的“截图—思考—点击”循环，在每次操作后重新观察并推理下一步。"
  },
  {
    "id": 560,
    "start": 4751.413,
    "end": 4764.85,
    "en": "The OSWorld-Human efficiency study shows that even when a task eventually succeeds, the Agent takes markedly more steps and waits markedly longer than a person does; reaching human-level accuracy is not the same as being practical.",
    "zh": "OSWorld-人类效率研究表明，即使任务最终成功，智能体所采取的步骤明显更多，等待时间也明显更长；达到人类级别的准确性并不等于具有实用性。"
  },
  {
    "id": 561,
    "start": 4764.85,
    "end": 4768.988,
    "en": "People do not start thinking about the next step only after clicking.",
    "zh": "人们不会在点击之后才开始思考下一步。"
  },
  {
    "id": 562,
    "start": 4768.988,
    "end": 4781.75,
    "en": "They first predict what an action will do: if the actual change matches the expectation, they carry on with the existing plan; only when the page state departs from what was expected do they stop to observe and plan again.",
    "zh": "他们首先预测一个动作会带来什么结果：如果实际变化与预期一致，他们会继续执行现有计划；只有当页面状态偏离预期时，他们才会停下来观察并重新规划。"
  },
  {
    "id": 563,
    "start": 4781.75,
    "end": 4791.975,
    "en": "A world model lets the Agent predict what the desktop may turn into before it acts, giving it this human-like \"speculative execution\" and improving efficiency substantially.",
    "zh": "世界模型可以让智能体在行动前预测桌面可能变成什么样子，从而实现这种类似人类的“推测性执行”，并显著提高效率。"
  },
  {
    "id": 564,
    "start": 4791.975,
    "end": 4795.4,
    "en": "Desktop state is more than a grid of pixels.",
    "zh": "桌面状态不仅仅是像素网格。"
  },
  {
    "id": 565,
    "start": 4795.4,
    "end": 4808.725,
    "en": "It also includes windows, focus, scroll position, input-field contents, loading state, permissions and network responses; actions include clicking, typing, scrolling, dragging and waiting.",
    "zh": "它还包括窗口、焦点、滚动位置、输入字段内容、加载状态、权限和网络响应；动作包括点击、输入、滚动、拖动和等待。"
  },
  {
    "id": 566,
    "start": 4808.725,
    "end": 4819.863,
    "en": "A world model usable for Computer Use must at minimum encode the current state, predict the state change a candidate action would cause, and hand that prediction to the planner to decide the next step:",
    "zh": "一个可用于计算机使用的世界模型必须至少编码当前状态，预测候选动作会导致的状态变化，并将该预测提供给规划器以决定下一步："
  },
  {
    "id": 567,
    "start": 4819.863,
    "end": 4827.488,
    "en": "Code statement: desktop state + click/type/scroll/wait ──> representation of the next state.",
    "zh": "代码语句：桌面状态 + 点击/输入/滚动/等待 ──> 下一状态的表示。"
  },
  {
    "id": 568,
    "start": 4827.488,
    "end": 4839.75,
    "en": "This lets the Agent compare the consequences of candidate actions before it actually clicks, prepare the next step while a page is loading, and recover from a dialog that flashed past by reasoning about the state difference.",
    "zh": "这使得智能体可以在实际点击之前比较候选动作的后果，在页面加载时准备下一步，并通过推理状态差异来从一闪而过的对话框中恢复。"
  },
  {
    "id": 569,
    "start": 4839.75,
    "end": 4863.825,
    "en": "If the task is \"create a new Python file in VS Code and write hello world\", the model can first predict the key state of the file tree and editor on success, and only then choose the click, type and save actions; if the task is to delete a file, it can predict inside an isolated virtual desktop whether an irreversible confirmation dialog will appear, and ask the user to confirm when necessary.",
    "zh": "如果任务是“在VS Code中创建一个新Python文件并编写hello world”，模型可以先预测文件树和编辑器在成功后的关键状态，然后才选择点击、输入和保存操作；如果任务是删除文件，它可以预测在隔离的虚拟桌面内是否会出现不可逆的确认对话框，并在必要时请求用户确认。"
  },
  {
    "id": 570,
    "start": 4863.825,
    "end": 4872.9,
    "en": "The point here is not to have the model generate a photorealistic future screenshot, but to predict the checkable state differences that completing the task requires.",
    "zh": "这里的关键不是让模型生成逼真的未来截图，而是预测完成任务所需的可检查状态差异。"
  },
  {
    "id": 571,
    "start": 4872.9,
    "end": 4886.438,
    "en": "In July 2026, Photon-1 from Induction Labs demonstrated one implementation of this route, completing the pretraining of a computer use world model with only 30,000 hours of H200 GPU time.",
    "zh": "2026年7月，Induction Labs的Photon-1展示了这一路径的一种实现方式，仅使用3万小时的H200 GPU时间就完成了计算机使用世界模型的预训练。"
  },
  {
    "id": 572,
    "start": 4886.438,
    "end": 4904.788,
    "en": "It compresses each frame into discrete latent tokens and autoregressively predicts the representation of the next state after an action, rather than generating screenshots pixel by pixel during pretraining; the image generator attached to it serves only to visualize the latent representations and is not a component required for inference.",
    "zh": "它将每一帧压缩为离散的潜在标记，并通过自回归预测动作后的下一个状态表示，而不是在预训练期间逐像素生成截图；附加的图像生成器仅用于可视化潜在表示，不是推理所需的组件。"
  },
  {
    "id": 573,
    "start": 4904.788,
    "end": 4916.813,
    "en": "Given a seed screenshot and the actions that follow, the model can \"imagine\" desktop states continuously, and then learn to output computer-use actions through online training on virtual machines.",
    "zh": "给定一个初始截图和后续的操作，该模型可以持续“想象”桌面状态，然后通过在虚拟机上的在线训练学习输出计算机使用操作。"
  },
  {
    "id": 574,
    "start": 4916.813,
    "end": 4921.05,
    "en": "Mobile: Ecosystem Barriers Are Harder Than Technology.",
    "zh": "移动端：生态系统障碍比技术更难突破。"
  },
  {
    "id": 575,
    "start": 4921.05,
    "end": 4924.988,
    "en": "Computer Use is also expanding to mobile devices.",
    "zh": "计算机使用也正在扩展到移动设备。"
  },
  {
    "id": 576,
    "start": 4924.988,
    "end": 4942.65,
    "en": "Mobile and desktop systems do differ technically: instead of relying on mouse coordinates and keyboard input, the mobile action space typically uses the system's accessibility-service API (e.g., Android's AccessibilityService) to read interface elements and issue clicks or enter text.",
    "zh": "移动和桌面系统在技术上有所不同：移动动作空间通常使用系统的无障碍服务API（例如Android的AccessibilityService）来读取界面元素并发出点击或输入文本，而不是依赖鼠标坐标和键盘输入。"
  },
  {
    "id": 577,
    "start": 4942.65,
    "end": 4948.925,
    "en": "Interaction also shifts from a mouse pointer to touch gestures, changing the meaning of coordinates.",
    "zh": "交互也从鼠标指针转向触摸手势，改变了坐标的含义。"
  },
  {
    "id": 578,
    "start": 4948.925,
    "end": 4959.375,
    "en": "The same (x, y) position might indicate a tap, a long press, or the starting point of a swipe, so the action must also specify a gesture type.",
    "zh": "相同的(x, y)位置可能表示点击、长按或滑动的起点，因此动作还必须指定手势类型。"
  },
  {
    "id": 579,
    "start": 4959.375,
    "end": 4969.713,
    "en": "Mobile benchmarks such as AndroidWorld, introduced in Chapter 7, evaluate an Agent's ability to complete tasks in real applications within this action space.",
    "zh": "如第7章介绍的AndroidWorld等移动基准测试，评估智能体在这个动作空间内完成真实应用程序任务的能力。"
  },
  {
    "id": 580,
    "start": 4969.876,
    "end": 4977.388,
    "en": "However, what truly hinders mobile Computer Use is often not these technical differences, but ecosystem barriers.",
    "zh": "然而，真正阻碍移动计算机使用的往往不是这些技术差异，而是生态系统障碍。"
  },
  {
    "id": 581,
    "start": 4977.338,
    "end": 4991.288,
    "en": "Some phone manufacturers have attempted to integrate AI assistants into consumer-grade phones so that the assistants can automatically operate everyday apps like WeChat, Taobao, and Alipay, but they quickly encountered platform restrictions.",
    "zh": "一些手机制造商试图将AI助手集成到消费级手机中，使助手能够自动操作微信、淘宝和支付宝等日常应用，但很快遇到了平台限制。"
  },
  {
    "id": 582,
    "start": 4991.288,
    "end": 4996.376,
    "en": "This reveals a unique challenge for Computer Use: ecosystem barriers.",
    "zh": "这揭示了计算机使用的一个独特挑战：生态系统障碍。"
  },
  {
    "id": 583,
    "start": 4996.376,
    "end": 5001.438,
    "en": "The fundamental reason behind these restrictions is a conflict of business models.",
    "zh": "这些限制的根本原因在于商业模式的冲突。"
  },
  {
    "id": 584,
    "start": 5001.438,
    "end": 5016.151,
    "en": "The core monetization logic of traditional internet applications is traffic and attention: users see ads while scrolling through feeds, are guided by recommendation algorithms when searching for products, and make impulse purchases while browsing pages.",
    "zh": "传统互联网应用的核心盈利逻辑是流量和注意力：用户在浏览信息流时看到广告，通过推荐算法搜索产品时被引导，浏览页面时冲动购买。"
  },
  {
    "id": 585,
    "start": 5016.151,
    "end": 5029.313,
    "en": "When an Agent operates on the user's behalf, that monetization chain is bypassed entirely: the AI ignores ads, makes no impulse purchases, heads straight for the goal, finishes the task, and leaves.",
    "zh": "当智能体代表用户操作时，这种盈利链条就被完全绕过了：AI忽略广告，不进行冲动购买，直奔目标，完成任务后离开。"
  },
  {
    "id": 586,
    "start": 5029.313,
    "end": 5036.688,
    "en": "For platforms that live on advertising and traffic, every Agent operation erodes the foundation of the business model.",
    "zh": "对于依赖广告和流量的平台来说，每一次智能体的操作都在侵蚀商业模式的基础。"
  },
  {
    "id": 587,
    "start": 5036.688,
    "end": 5044.801,
    "en": "This means that Computer Use faces not only technical countermeasures such as CAPTCHAs, but also a structural conflict of interest.",
    "zh": "这意味着计算机使用不仅面临诸如验证码等技术性反制措施，还存在结构性的利益冲突。"
  },
  {
    "id": 588,
    "start": 5044.801,
    "end": 5052.926,
    "en": "This conflict will be difficult to resolve in the short term and poses a greater obstacle to consumer adoption than purely technical problems.",
    "zh": "这种冲突在短期内难以解决，对消费者采用的障碍比纯粹的技术问题更大。"
  },
  {
    "id": 589,
    "start": 5052.926,
    "end": 5057.251,
    "en": "Robot Manipulation: Tidying a Desk with XLeRobot.",
    "zh": "机器人操作：用XLeRobot整理桌面。"
  },
  {
    "id": 590,
    "start": 5057.251,
    "end": 5067.838,
    "en": "Reading note: This section uses one task throughout—\"put the red cup in the tray, put the yellow scrap paper in the bin, then observe again and confirm the state of the desk.",
    "zh": "阅读笔记：本节使用一个任务——“将红色杯子放入托盘，将黄色废纸放入垃圾桶，然后再次观察并确认桌面状态。”"
  },
  {
    "id": 591,
    "start": 5067.838,
    "end": 5084.288,
    "en": "Experiments 6-10 and 6-12 run on real XLeRobot hardware and need an arm, calibration, an emergency stop and an on-site observer; experiments 6-11, 6-13 and 6-14 are the corresponding local-GPU experiments.",
    "zh": "实验6-10和6-12在真实的XLeRobot硬件上运行，需要机械臂、校准、紧急停止装置和现场观察者；实验6-11、6-13和6-14是相应的本地GPU实验。"
  },
  {
    "id": 592,
    "start": 5084.288,
    "end": 5092.426,
    "en": "Hardware and simulation are reported separately, but the task goal, the action semantics and the success conditions stay the same.",
    "zh": "硬件和仿真分别报告，但任务目标、动作语义和成功条件保持不变。"
  },
  {
    "id": 593,
    "start": 5092.426,
    "end": 5097.201,
    "en": "Robot manipulation is much harder than answering questions about a picture.",
    "zh": "机器人操作比回答关于图片的问题要困难得多。"
  },
  {
    "id": 594,
    "start": 5097.201,
    "end": 5105.588,
    "en": "The model has to understand the scene and then take actions continuously in the real world, where every action changes what the next moment looks like.",
    "zh": "模型必须理解场景，然后在现实世界中连续采取行动，每个行动都会改变下一刻的景象。"
  },
  {
    "id": 595,
    "start": 5105.588,
    "end": 5119.901,
    "en": "XLeRobot makes that difference concrete: the same arm can be teleoperated by a person through a keyboard, a gamepad or a VR device, or it can hand camera observations and a constrained set of action tools to an Agent to call on its own.",
    "zh": "XLeRobot让这种差异具体化：同一机械臂可以通过键盘、游戏手柄或VR设备由人远程操控，也可以将摄像头观测和一组有限的动作工具交给智能体自行调用。"
  },
  {
    "id": 596,
    "start": 5119.901,
    "end": 5131.563,
    "en": "The hardware and the task stay fixed; only the operator changes—in the first case a human observes and corrects continuously, in the second the model and the control system must do the same work.",
    "zh": "硬件和任务保持固定；唯一变化的是操作者——在第一种情况下，人类持续观察并纠正，在第二种情况下，模型和控制系统必须完成相同的工作。"
  },
  {
    "id": 597,
    "start": 5131.563,
    "end": 5135.763,
    "en": "This section runs five experiments on \"tidy the desk.",
    "zh": "本节在“整理桌面”上进行了五项实验。"
  },
  {
    "id": 598,
    "start": 5135.763,
    "end": 5147.538,
    "en": "First a human teleoperates the real XLeRobot, measuring what the hardware can do under a sufficiently capable operator; then a simulator establishes the ideal control ceiling for the same task.",
    "zh": "首先由人类远程操控真实的XLeRobot，测量在足够能力强的操作员下硬件能实现什么；然后通过模拟器建立相同任务的理想控制上限。"
  },
  {
    "id": 599,
    "start": 5147.538,
    "end": 5163.926,
    "en": "Next an Agent controls the real XLeRobot autonomously, showing how perception, planning and failure recovery affect the result; then the same tool contract goes into the simulator so that open-loop execution, step-by-step checking and world models can be compared in bulk.",
    "zh": "接下来由智能体自主控制真实的XLeRobot，展示感知、规划和故障恢复如何影响结果；然后同样的工具协议进入模拟器，以便批量比较开环执行、逐步检查和世界模型。"
  },
  {
    "id": 600,
    "start": 5163.926,
    "end": 5173.988,
    "en": "Finally the background, object appearance, lighting and visual noise change, to see whether a visual policy learned in simulation adapts to a new environment.",
    "zh": "最后改变背景、物体外观、光照和视觉噪声，以查看在仿真中学习的视觉策略是否能适应新环境。"
  },
  {
    "id": 601,
    "start": 5173.988,
    "end": 5183.551,
    "en": "The bottleneck here is usually not one more static question-answering benchmark, but whether the model can keep closing the loop under limited perception and control bandwidth.",
    "zh": "这里的瓶颈通常不是某个静态的问答基准测试，而是模型是否能在有限的感知和控制带宽下持续闭环运行。"
  },
  {
    "id": 602,
    "start": 5183.551,
    "end": 5187.963,
    "en": "A usable robot system has to answer at least four questions:",
    "zh": "一个可用的机器人系统必须回答至少四个问题："
  },
  {
    "id": 603,
    "start": 5187.963,
    "end": 5190.713,
    "en": "What task does the person want done?",
    "zh": "人想要完成什么任务？"
  },
  {
    "id": 604,
    "start": 5190.713,
    "end": 5193.188,
    "en": "Which subtask comes next?",
    "zh": "下一个子任务是什么？"
  },
  {
    "id": 605,
    "start": 5193.188,
    "end": 5196.551,
    "en": "What actions does the current skill actually emit?",
    "zh": "当前技能实际发出什么动作？"
  },
  {
    "id": 606,
    "start": 5196.551,
    "end": 5201.076,
    "en": "After the action executes, does reality still match the plan?",
    "zh": "动作执行后，现实是否仍与计划一致？"
  },
  {
    "id": 607,
    "start": 5201.236,
    "end": 5226.198,
    "en": "This section places those four questions inside one XLeRobot control loop and shows what each of four techniques is responsible for: long-horizon planning decides whether the cup or the paper is handled first, a VLA or action primitive performs the grasp and the placement, a world model estimates the consequences of an action, and sim-to-real transfer handles the differences between training footage and the real camera and actuators.",
    "zh": "本节将这四个问题放入XLeRobot控制循环中，并展示四种技术各自负责的内容：长程规划决定是先处理杯子还是纸张，VLA或动作原始指令执行抓取和放置，世界模型估计动作的后果，而sim-to-real迁移处理训练视频与真实摄像头和执行器之间的差异。"
  },
  {
    "id": 608,
    "start": 5226.198,
    "end": 5234.811,
    "en": "Even when the high-level model already has enough knowledge and planning ability, losing any one of these feedback links can still leave the task unfinished.",
    "zh": "即使高层模型已经具备足够的知识和规划能力，失去任何一个反馈链仍可能导致任务无法完成。"
  },
  {
    "id": 609,
    "start": 5234.811,
    "end": 5238.811,
    "en": "The Division of Labour Between Hardware and Algorithms.",
    "zh": "硬件与算法之间的分工。"
  },
  {
    "id": 610,
    "start": 5238.811,
    "end": 5250.061,
    "en": "The first question XLeRobot is best suited to answer is this: when autonomous desk tidying fails, is it the arm that cannot do it, or the algorithm that is not using the arm well?",
    "zh": "XLeRobot最适合回答的第一个问题是：当自主桌面整理失败时，是机械臂无法做到，还是算法没有很好地使用机械臂？"
  },
  {
    "id": 611,
    "start": 5250.061,
    "end": 5270.411,
    "en": "There is a fact that cannot be overlooked: an arm costing only a few hundred dollars, like XLeRobot, can already complete the kind of continuous multi-step desk task in this section through teleoperation—a person watches the camera feed, picks up the red cup and puts it in the tray, then puts the yellow scrap paper in the bin and confirms the state again.",
    "zh": "有一个不可忽视的事实：像XLeRobot这样仅花费几百美元的机械臂，已经可以通过遥控操作完成本节中的连续多步骤桌面任务——一个人观看摄像头画面，拿起红色杯子放到托盘上，然后把黄色废纸放进垃圾桶并再次确认状态。"
  },
  {
    "id": 612,
    "start": 5270.411,
    "end": 5281.586,
    "en": "That result is not merely \"the hardware is barely feasible\"; it is a clear piece of diagnostic evidence: for this task the hardware itself is not the bottleneck, the algorithm is.",
    "zh": "这一结果不仅仅是“硬件勉强可行”；它是一条明确的诊断证据：对于这个任务，硬件本身并不是瓶颈，而是算法。"
  },
  {
    "id": 613,
    "start": 5281.586,
    "end": 5291.573,
    "en": "The diagnostic method is direct: keep the camera, the arm, the gripper, the desk layout and the success conditions fixed, and let a human take over the loop.",
    "zh": "诊断方法很简单：保持摄像头、机械臂、夹具、桌面布局和成功条件不变，让人类接管循环。"
  },
  {
    "id": 614,
    "start": 5291.573,
    "end": 5304.223,
    "en": "A human continuously corrects object localization, action choice and timing, and handles failed grasps; the gap between an autonomous system and a person lies precisely in those closed-loop abilities.",
    "zh": "人类会持续校正物体定位、动作选择和时机，并处理抓取失败的情况；自主系统与人类之间的差距恰恰在于这些闭环能力。"
  },
  {
    "id": 615,
    "start": 5304.223,
    "end": 5318.548,
    "en": "The scope of the claim is of course this section's desk task: it shows the hardware has cleared the payload, precision and workspace thresholds this task requires, not that a few-hundred-dollar arm can handle every open environment or harder manipulation.",
    "zh": "该声明的范围当然仅限于本节的桌面任务：它表明硬件已满足该任务所需的负载、精度和工作空间阈值，而不是说几百美元的机械臂可以处理所有开放环境或更复杂的操作。"
  },
  {
    "id": 616,
    "start": 5318.548,
    "end": 5325.561,
    "en": "XLeRobot supports keyboard, Xbox controller, Switch Joy-Con and VR teleoperation.",
    "zh": "XLeRobot支持键盘、Xbox手柄、Switch Joy-Con和VR遥控操作。"
  },
  {
    "id": 617,
    "start": 5325.561,
    "end": 5342.248,
    "en": "A human operator naturally does many things an algorithm has to implement explicitly: slowing the gripper as it nears the cup, correcting the grasp point when the cup slides, observing again after failing to pinch the paper the first time, and checking the outcome once an object is in the target area.",
    "zh": "人类操作员自然会做许多算法必须显式实现的事情：当夹爪接近杯子时减速，当杯子滑动时校正抓取点，第一次夹不住纸张后重新观察，以及在物体进入目标区域后检查结果。"
  },
  {
    "id": 618,
    "start": 5342.248,
    "end": 5351.523,
    "en": "Teleoperation is therefore not only a way to collect demonstrations but also a \"fix the hardware, swap the operator\" diagnostic experiment.",
    "zh": "因此，远程操作不仅是收集示范的方法，也是一种“更换硬件、更换操作员”的诊断实验。"
  },
  {
    "id": 619,
    "start": 5351.523,
    "end": 5359.298,
    "en": "Experiment 6-10 introductory difficulty, one star: : Teleoperating a real XLeRobot to tidy a desk",
    "zh": "实验6-10，入门难度，一颗星：远程操作真实的XLeRobot整理桌面"
  },
  {
    "id": 620,
    "start": 5359.298,
    "end": 5365.723,
    "en": "Place a red cup, a tray, yellow scrap paper and a bin in the real XLeRobot workspace.",
    "zh": "在真实的XLeRobot工作空间中放置一个红色杯子、托盘、黄色废纸和一个垃圾桶。"
  },
  {
    "id": 621,
    "start": 5365.723,
    "end": 5377.948,
    "en": "Using one calibrated teleoperation method, the operator performs the fixed task: \"put the red cup in the tray, put the yellow scrap paper in the bin, then observe again and confirm the state of the desk.",
    "zh": "使用一种校准的远程操作方法，操作员执行固定任务：“将红色杯子放入托盘，将黄色废纸放入垃圾桶，然后再次观察并确认桌面状态。”"
  },
  {
    "id": 622,
    "start": 5377.948,
    "end": 5388.961,
    "en": "Repeat for several rounds at minimum, recording the camera feed, operator input, arm state, action timing, failed grasps, retry counts and the final state.",
    "zh": "至少重复几轮，记录摄像头画面、操作员输入、机械臂状态、动作时间、失败抓取、重试次数和最终状态。"
  },
  {
    "id": 623,
    "start": 5388.961,
    "end": 5393.486,
    "en": "Acceptance cannot rest on \"the desk looks tidy at the end.",
    "zh": "验收不能仅基于“最后桌面看起来整洁”。"
  },
  {
    "id": 624,
    "start": 5393.486,
    "end": 5405.873,
    "en": "The red cup must be inside the tray, the yellow paper inside the bin, the arm back in a safe pose, with no collision, no out-of-bounds motion and no unconfirmed manual intervention along the way.",
    "zh": "红色杯子必须在托盘内，黄色纸张必须在垃圾桶内，机械臂应回到安全姿态，没有碰撞、没有越界运动，且过程中没有未经确认的手动干预。"
  },
  {
    "id": 625,
    "start": 5405.873,
    "end": 5414.586,
    "en": "Teleoperation on real hardware gives the most convincing ceiling for the task, but it is not suited to varying object counts and positions in bulk.",
    "zh": "在真实硬件上进行远程操作能为任务提供最有力的上限证明，但它不适合批量处理对象数量和位置的变化。"
  },
  {
    "id": 626,
    "start": 5414.586,
    "end": 5430.798,
    "en": "To obtain a repeatable, statistically meaningful control, the next step moves the same \"put objects where they belong\" problem into a 2D desktop simulator, using an ideal controller to stand in for a strong operator who never misperceives and never picks the wrong action.",
    "zh": "为了获得可重复且具有统计意义的控制，下一步将相同的“将物品放回原处”问题转移到二维桌面模拟器中，使用理想控制器代替一个从不误判且从不错过动作的强操作员。"
  },
  {
    "id": 627,
    "start": 5430.798,
    "end": 5439.311,
    "en": "Experiment 6-11 introductory difficulty, one star: : Measuring the ideal control ceiling for the same task in simulation",
    "zh": "实验6-11，入门难度，一颗星：在模拟器中测量相同任务的理想控制上限"
  },
  {
    "id": 628,
    "start": 5439.46,
    "end": 5451.522,
    "en": "In a 2D desktop simulator, randomly place the red cup, the yellow paper and their target areas, and let an ideal controller approach each object in turn, grasp it and move it to the right place.",
    "zh": "在一个二维桌面模拟器中，随机放置红色杯子、黄色纸张及其目标区域，并让理想控制器依次接近每个物体，抓取它并将其移动到正确的位置。"
  },
  {
    "id": 629,
    "start": 5451.472,
    "end": 5461.472,
    "en": "It does not need to recognise images and never picks the wrong action, so it represents \"what this task can at least achieve when perception and decision-making are both correct.",
    "zh": "它不需要识别图像，也不会选择错误的动作，因此代表了“当感知和决策都正确时，该任务至少可以达到的水平”。"
  },
  {
    "id": 630,
    "start": 5461.472,
    "end": 5472.047,
    "en": "The experiment tracks task success rate, number of steps and path length, and varies initial object positions and task scale to see whether the ideal ceiling stays stable.",
    "zh": "该实验跟踪任务成功率、步骤数和路径长度，并通过改变初始物体位置和任务规模来观察理想上限是否保持稳定。"
  },
  {
    "id": 631,
    "start": 5472.047,
    "end": 5482.085,
    "en": "It uses the same success conditions as experiment 6-10, but measures results from an idealized simulation and does not imply the real XLeRobot has been run.",
    "zh": "它使用与实验6-10相同的成功条件，但结果来自理想化的仿真，并不意味着真实的XLeRobot已经被运行。"
  },
  {
    "id": 632,
    "start": 5482.085,
    "end": 5494.072,
    "en": "Together the two establish the reference lines for the autonomous control that follows: experiment 6-10 is a human loop on real hardware, experiment 6-11 an ideal loop in simulation.",
    "zh": "这两个实验共同建立了后续自主控制的参考线：实验6-10是在真实硬件上的手动循环，实验6-11是在仿真中的理想循环。"
  },
  {
    "id": 633,
    "start": 5494.072,
    "end": 5497.135,
    "en": "The Basic Structure of Robot Control.",
    "zh": "机器人控制的基本结构。"
  },
  {
    "id": 634,
    "start": 5497.135,
    "end": 5501.06,
    "en": "Robot systems usually separate work by timescale:",
    "zh": "机器人系统通常按时间尺度划分工作："
  },
  {
    "id": 635,
    "start": 5501.06,
    "end": 5510.847,
    "en": "Layer: Task goal; Core question: What does the person want done; Output: \"Put the cup and the paper away\"; Typical timescale: Minutes.",
    "zh": "层：任务目标；核心问题：人想要完成什么；输出：\"把杯子和纸收起来\"；典型时间尺度：几分钟。"
  },
  {
    "id": 636,
    "start": 5510.847,
    "end": 5523.535,
    "en": "Layer: Long-horizon planning; Core question: What comes first, what comes after; Output: Handle the cup, then the paper, then check; Typical timescale: Seconds to minutes.",
    "zh": "层：长期规划；核心问题：先做什么，后做什么；输出：处理杯子，然后是纸张，然后检查；典型时间尺度：几秒到几分钟。"
  },
  {
    "id": 637,
    "start": 5523.535,
    "end": 5537.697,
    "en": "Layer: Basic skills; Core question: Which state change to achieve now; Output: pick(red_cup), place(red_cup, tray); Typical timescale: About 1–3 s.",
    "zh": "层：基础技能；核心问题：现在要实现哪个状态变化；输出：pick(red_cup)，place(red_cup, tray)；典型时间尺度：约1–3秒。"
  },
  {
    "id": 638,
    "start": 5537.697,
    "end": 5552.035,
    "en": "Layer: VLA / skill policy; Core question: How this skill actually moves; Output: A short motion or continuous trajectory of the XLeRobot gripper; Typical timescale: About 1–10 Hz inference.",
    "zh": "层：VLA/技能策略；核心问题：这个技能实际上如何移动；输出：XLeRobot夹爪的短动作或连续轨迹；典型时间尺度：约1–10 Hz推理。"
  },
  {
    "id": 639,
    "start": 5552.035,
    "end": 5566.81,
    "en": "Layer: Low-level control and safety; Core question: How to execute stably and in time; Output: Joint or end-effector commands, speed limits and emergency stop; Typical timescale: About 50–1000 Hz.",
    "zh": "层：低级控制与安全；核心问题：如何稳定且及时地执行；输出：关节或末端执行器指令、速度限制和紧急停止；典型时间尺度：约50–1000 Hz。"
  },
  {
    "id": 640,
    "start": 5566.972,
    "end": 5571.722,
    "en": "This is a common engineering split, not the only model architecture.",
    "zh": "这是一种常见的工程划分，不是唯一的模型架构。"
  },
  {
    "id": 641,
    "start": 5571.672,
    "end": 5579.847,
    "en": "A VLA can take on part of the high-level judgement, and the planner can be a rule-based program, a VLM or an optimiser.",
    "zh": "VLA可以承担部分高层判断，而规划器可以是基于规则的程序、VLM或优化器。"
  },
  {
    "id": 642,
    "start": 5579.847,
    "end": 5596.634,
    "en": "Whichever implementation you choose, \"task order\" and \"the action right now\" should stay separate; otherwise the high-level model's inference latency drags down low-level control, and high-frequency low-level control forces the high-level model to process a great deal of irrelevant detail.",
    "zh": "无论选择哪种实现方式，\"任务顺序\"和\"当前动作\"应保持分离；否则高层模型的推理延迟会拖慢低层控制，高频的低层控制又迫使高层模型处理大量无关细节。"
  },
  {
    "id": 643,
    "start": 5596.634,
    "end": 5612.584,
    "en": "For XLeRobot the model should not emit arbitrary joint angles directly; it only selects bounded skills such as pick, place, verify_state or stop, and a calibrated, speed-limited executor with timeouts turns those skills into real arm motion.",
    "zh": "对于XLeRobot，模型不应直接发出任意的关节角度；它仅选择有限的技能，如pick、place、verify_state或stop，一个校准过的、速度受限的执行器通过超时将这些技能转化为实际的机械臂运动。"
  },
  {
    "id": 644,
    "start": 5612.584,
    "end": 5616.234,
    "en": "Long-Horizon Planning and Task Decomposition.",
    "zh": "长期规划与任务分解。"
  },
  {
    "id": 645,
    "start": 5616.234,
    "end": 5622.772,
    "en": "When the user says \"tidy up the desk,\" the system cannot hand that sentence straight to an action model.",
    "zh": "当用户说\"整理桌面\"时，系统不能直接将这句话交给动作模型。"
  },
  {
    "id": 646,
    "start": 5622.772,
    "end": 5633.197,
    "en": "The planner first lists the objects and goals in the scene, then decides the order, and for each step writes down the start condition, the completion condition and the risk limits.",
    "zh": "规划器首先列出场景中的物体和目标，然后决定顺序，并为每一步写出起始条件、完成条件和风险限制。"
  },
  {
    "id": 647,
    "start": 5633.197,
    "end": 5634.972,
    "en": "For example:",
    "zh": "例如:"
  },
  {
    "id": 648,
    "start": 5634.972,
    "end": 5639.947,
    "en": "Code statement: handle the red cup → clear the yellow paper → check the desk.",
    "zh": "代码语句：处理红色杯子 → 清理黄色纸张 → 检查书桌。"
  },
  {
    "id": 649,
    "start": 5639.947,
    "end": 5645.322,
    "en": "Handle the red cup\" then decomposes further into two actions and one check:",
    "zh": "处理红色杯子\"进一步分解为两个动作和一个检查:"
  },
  {
    "id": 650,
    "start": 5645.322,
    "end": 5653.172,
    "en": "Code statement: pick(red_cup) → place(red_cup, tray) → verify_state().",
    "zh": "代码语句：pick(red_cup) → place(red_cup, tray) → verify_state()。"
  },
  {
    "id": 651,
    "start": 5653.172,
    "end": 5658.059,
    "en": "Each completed skill provides a checkpoint where the outcome can be verified.",
    "zh": "每个完成的技能提供一个检查点，可以验证结果。"
  },
  {
    "id": 652,
    "start": 5658.059,
    "end": 5671.209,
    "en": "If a grasp fails, only that step is retried; if someone moves an object, or the user changes the goal, only the affected later steps need replanning—the old plan does not have to be redone from scratch.",
    "zh": "如果抓取失败，只重试该步骤；如果有人移动了物体，或用户更改了目标，只需重新规划受影响的后续步骤——不需要从头开始重新制定旧计划。"
  },
  {
    "id": 653,
    "start": 5671.209,
    "end": 5682.747,
    "en": "The tools given to the agent should be equally simple: one call does one thing, the range of motion is fixed, there is a timeout, and observation happens again immediately after execution.",
    "zh": "给予智能体的工具应同样简单：一次调用做一件事，运动范围固定，有超时时间，并且执行后立即再次进行观察。"
  },
  {
    "id": 654,
    "start": 5682.747,
    "end": 5693.022,
    "en": "Experiment 6-12 intermediate difficulty, two stars: : Driving XLeRobot to tidy a desk autonomously with Gemini Robotics-ER 1.5",
    "zh": "实验6-12 中等难度，两颗星：使用Gemini Robotics-ER 1.5让XLeRobot自主整理书桌"
  },
  {
    "id": 655,
    "start": 5693.022,
    "end": 5703.772,
    "en": "Keep the real XLeRobot, the desk layout, the task instruction and the success conditions of experiment 6-10 unchanged, and replace the human operator with an Agent.",
    "zh": "保持真实XLeRobot、书桌布局、任务指令和实验6-10的成功条件不变，将人工操作员替换为智能体。"
  },
  {
    "id": 656,
    "start": 5703.772,
    "end": 5719.147,
    "en": "An embodied reasoning model such as Gemini Robotics-ER 1.5 can handle observation and planning, exposing only five tools through a RoboCrew-style agent loop: observe_scene, pick, place, verify_state and stop.",
    "zh": "如Gemini Robotics-ER 1.5这样的具身推理模型可以处理观察和规划，仅通过RoboCrew风格的智能体循环暴露五个工具：observe_scene、pick、place、verify_state和stop。"
  },
  {
    "id": 657,
    "start": 5719.147,
    "end": 5726.809,
    "en": "The model first observes the desk, decides the order, then calls the calibrated XLeRobot grasp and place actions.",
    "zh": "该模型首先观察书桌，决定顺序，然后调用校准后的XLeRobot抓取和放置动作。"
  },
  {
    "id": 658,
    "start": 5726.809,
    "end": 5741.309,
    "en": "After every completed skill it must observe again and check the postcondition; on a failed grasp it may only retry the current skill, and it must call stop when the user says stop, when an object leaves the workspace, or when the state cannot be confirmed.",
    "zh": "每次完成一个技能后必须再次观察并检查后置条件；如果抓取失败，只能重试当前技能，并且在用户说停止、物体离开工作区或状态无法确认时必须调用stop。"
  },
  {
    "id": 659,
    "start": 5741.309,
    "end": 5748.522,
    "en": "The model cannot emit arbitrary joint angles, nor skip a real check merely because it previously said \"done.",
    "zh": "该模型不能发出任意的关节角度，也不能仅仅因为之前说过“完成”就跳过真实的检查。"
  },
  {
    "id": 660,
    "start": 5748.522,
    "end": 5759.972,
    "en": "The acceptance criteria are exactly those of experiment 6-10: cup in the tray, paper in the bin, arm back in a safe pose, no collision and no out-of-bounds motion.",
    "zh": "接受标准与实验6-10完全相同：杯子在托盘中，纸张在垃圾桶中，手臂回到安全姿态，无碰撞且无越界运动。"
  },
  {
    "id": 661,
    "start": 5759.972,
    "end": 5779.872,
    "en": "The difference is that in the autonomous experiment the task semantics must come from the model's own observation, the real actions must come from tool calls, and the final state must be confirmed by a fresh observation; the human may only start the run, hit the emergency stop and supervise safety, never complete an action on the Agent's behalf midway.",
    "zh": "不同之处在于，在自主实验中，任务语义必须来自模型自身的观察，实际动作必须来自工具调用，最终状态必须通过新的观察来确认；人类可能只能启动运行、按下紧急停止按钮并监督安全，而不会在中途代智能体完成任何操作。"
  },
  {
    "id": 662,
    "start": 5779.872,
    "end": 5790.384,
    "en": "Only then can experiments 6-10 and 6-12 be compared directly on \"same hardware, same task—what is still missing between the human loop and the model loop.",
    "zh": "只有这样，才能将实验6-10和6-12直接比较，即在“相同硬件、相同任务”的条件下，人类循环与模型循环之间仍缺少什么。"
  },
  {
    "id": 663,
    "start": 5790.384,
    "end": 5800.884,
    "en": "Real-hardware experiments expose calibration error, camera occlusion and gripper failure, but they are poorly suited to repeating large numbers of faults safely and controllably.",
    "zh": "真实硬件实验会暴露校准误差、相机遮挡和夹爪故障，但它们不太适合安全且可控地重复大量故障。"
  },
  {
    "id": 664,
    "start": 5800.884,
    "end": 5818.147,
    "en": "The simulation experiments that follow keep these five tools and exactly the same task state, replacing only the real actuator with a desktop environment into which failures can be injected, in order to separate what open-loop execution, step-by-step checking and action prediction each contribute.",
    "zh": "接下来的仿真实验保留这五个工具和完全相同的任务状态，仅将真实执行器替换为可注入故障的桌面环境，以区分开环执行、逐步检查和动作预测各自所做出的贡献。"
  },
  {
    "id": 665,
    "start": 5818.147,
    "end": 5820.172,
    "en": "VLA Control.",
    "zh": "VLA 控制。"
  },
  {
    "id": 666,
    "start": 5820.172,
    "end": 5823.372,
    "en": "VLA stands for Vision-Language-Action.",
    "zh": "VLA 代表视觉-语言-动作。"
  },
  {
    "id": 667,
    "start": 5823.372,
    "end": 5829.859,
    "en": "It takes the current frame and one skill instruction, then emits the action the robot should perform next:",
    "zh": "它接收当前画面和一个技能指令，然后发出机器人下一步应执行的动作："
  },
  {
    "id": 668,
    "start": 5830.012,
    "end": 5834.724,
    "en": "Code statement: current observation + skill instruction → action.",
    "zh": "代码语句：当前观察 + 技能指令 → 动作。"
  },
  {
    "id": 669,
    "start": 5834.674,
    "end": 5850.424,
    "en": "In the XLeRobot case the high-level planner only submits pick(red_cup); the VLA or skill policy still has to decide, from the current frame, which direction to approach the cup from, when the gripper closes and along what trajectory the arm lifts.",
    "zh": "在 XLeRobot 的案例中，高层规划器仅提交 pick(red_cup)；VLA 或技能策略仍需从当前画面决定从哪个方向接近杯子、何时夹紧夹爪以及机械臂提升的轨迹。"
  },
  {
    "id": 670,
    "start": 5850.424,
    "end": 5861.237,
    "en": "After the execution layer finishes that short motion it photographs the desk again, and only once the cup is confirmed to be held may the planner submit place(red_cup, tray).",
    "zh": "执行层完成该短动作后，再次拍摄桌面，只有在确认杯子被抓住后，规划器才能提交 place(red_cup, tray)。"
  },
  {
    "id": 671,
    "start": 5861.237,
    "end": 5869.449,
    "en": "A tool call therefore defines the desired state change, while the VLA defines how to realise that change through continuous motion.",
    "zh": "因此，工具调用定义了期望的状态变化，而 VLA 定义了如何通过连续运动实现这一变化。"
  },
  {
    "id": 672,
    "start": 5869.449,
    "end": 5883.012,
    "en": "RT-2 and OpenVLA cut continuous actions into discrete tokens and emit them one at a time, like generating text; π₀ represents the other route, producing continuous, smooth action trajectories directly.",
    "zh": "RT-2 和 OpenVLA 将连续动作拆分为离散标记，并逐个发出，就像生成文本一样；π₀ 则代表另一种方法，直接生成连续、平滑的动作轨迹。"
  },
  {
    "id": 673,
    "start": 5883.012,
    "end": 5892.224,
    "en": "Neither is simply better: discrete tokens combine more easily with language models, while continuous trajectories usually express smooth motion better.",
    "zh": "两者并非简单地更好：离散标记更容易与语言模型结合，而连续轨迹通常更能表达平滑运动。"
  },
  {
    "id": 674,
    "start": 5892.224,
    "end": 5897.749,
    "en": "The real trade-off is how the action should be represented, not merely model size.",
    "zh": "真正的权衡在于动作应如何表示，而不仅仅是模型大小。"
  },
  {
    "id": 675,
    "start": 5897.749,
    "end": 5907.062,
    "en": "A large model can usually run inference only 1–10 times per second, whereas a traditional controller may update tens to thousands of times per second.",
    "zh": "大模型通常每秒只能进行 1–10 次推理，而传统控制器每秒可以更新数十到数千次。"
  },
  {
    "id": 676,
    "start": 5907.062,
    "end": 5920.237,
    "en": "A common engineering answer is \"action chunking\": the model generates a short segment of future actions at once, a control thread executes that segment at a higher rate, and the model prepares the next segment in the background.",
    "zh": "一个常见的工程解决方案是“动作分块”：模型一次生成一段未来的动作，控制线程以更高的频率执行该段动作，同时模型在后台准备下一段动作。"
  },
  {
    "id": 677,
    "start": 5920.237,
    "end": 5924.587,
    "en": "This hides part of the inference wait inside the execution time.",
    "zh": "这将部分推理等待时间隐藏在执行时间内。"
  },
  {
    "id": 678,
    "start": 5924.587,
    "end": 5937.899,
    "en": "The cost is that the longer the segment, the smoother the motion but the fewer new frames the model sees during it; if the cup is knocked while XLeRobot reaches for it, the arm may still be executing actions generated from the old frame.",
    "zh": "其代价是，分块越长，动作越平滑，但模型在该段动作期间看到的新画面越少；如果XLeRobot伸手时杯子被碰倒，机械臂可能仍在执行基于旧画面生成的动作。"
  },
  {
    "id": 679,
    "start": 5937.899,
    "end": 5944.749,
    "en": "Action chunking is therefore a trade-off between smoothness and reaction speed, not free acceleration.",
    "zh": "因此，动作分块是在平滑性与反应速度之间的权衡，而非免费加速。"
  },
  {
    "id": 680,
    "start": 5944.749,
    "end": 5947.074,
    "en": "The Limits of VLAs.",
    "zh": "VLAs的局限性。"
  },
  {
    "id": 681,
    "start": 5947.074,
    "end": 5954.187,
    "en": "Long-horizon planning + VLA\" is a practical baseline, but several problems are easy to overlook:",
    "zh": "长视野规划 + VLA 是一个实用的基线方案，但有几个问题容易被忽视："
  },
  {
    "id": 682,
    "start": 5954.187,
    "end": 5960.362,
    "en": "Limited training data: robot demonstrations are far scarcer than internet text and images.",
    "zh": "训练数据有限：机器人演示远少于互联网上的文本和图像。"
  },
  {
    "id": 683,
    "start": 5960.362,
    "end": 5966.849,
    "en": "That a model has seen the word \"cup\" does not mean it has seen cups of every material and friction condition.",
    "zh": "模型见过“杯子”这个词，并不意味着它见过所有材质和摩擦条件的杯子。"
  },
  {
    "id": 684,
    "start": 5966.849,
    "end": 5977.799,
    "en": "Imitation without consequence: behaviour cloning mainly learns \"what the demonstrator did next,\" and never explicitly requires the model to answer \"what will this action cause.",
    "zh": "没有后果的模仿：行为克隆主要学习“演示者接下来做了什么”，而从未明确要求模型回答“这个动作会带来什么结果”。"
  },
  {
    "id": 685,
    "start": 5977.799,
    "end": 5989.287,
    "en": "Robots differ: different robots have different degrees of freedom, coordinate frames, grippers and actuator latencies, so the same action does not necessarily transfer to another machine.",
    "zh": "机器人各不相同：不同机器人具有不同的自由度、坐标系、夹爪和执行器延迟，因此相同的动作不一定能迁移到另一台机器上。"
  },
  {
    "id": 686,
    "start": 5989.287,
    "end": 5999.887,
    "en": "Observations go stale: once an action chunk starts executing, an object may be moved, occluded or knocked over while the model is still deciding from the previous frame.",
    "zh": "观察信息过时：一旦动作分块开始执行，物体可能在模型仍基于前一帧进行决策时被移动、遮挡或打翻。"
  },
  {
    "id": 687,
    "start": 5999.887,
    "end": 6009.212,
    "en": "So a language model knowing what a \"cup\" is does not mean it knows how friction, contact, liquid sloshing and a power cable will change the future state.",
    "zh": "因此，一个语言模型知道“杯子”是什么，并不意味着它了解摩擦、接触、液体晃动和电源线如何改变未来状态。"
  },
  {
    "id": 688,
    "start": 6009.212,
    "end": 6017.199,
    "en": "A VLA mainly answers \"what should be done now\"; another kind of model is needed to judge \"what may happen afterwards.",
    "zh": "VLA 主要回答“现在应该做什么”；还需要另一种模型来判断“之后可能发生什么”。"
  },
  {
    "id": 689,
    "start": 6017.199,
    "end": 6019.074,
    "en": "World Models.",
    "zh": "世界模型。"
  },
  {
    "id": 690,
    "start": 6019.074,
    "end": 6023.562,
    "en": "A world model can be understood as an \"action-outcome predictor.",
    "zh": "世界模型可以理解为一个“动作-结果预测器”。"
  },
  {
    "id": 691,
    "start": 6023.562,
    "end": 6029.374,
    "en": "What it learns is: given the current state and some action, how the next state may change.",
    "zh": "它所学习的是：给定当前状态和某些动作，下一个状态可能会如何变化。"
  },
  {
    "id": 692,
    "start": 6029.374,
    "end": 6034.112,
    "en": "Refer to the companion repository for the complete code implementation.",
    "zh": "请参考配套仓库获取完整的代码实现。"
  },
  {
    "id": 693,
    "start": 6034.112,
    "end": 6038.949,
    "en": "A world model usable for robotics has to do at least three things well:",
    "zh": "一个适用于机器人的世界模型至少需要做好三件事："
  },
  {
    "id": 694,
    "start": 6038.949,
    "end": 6041.324,
    "en": "understand the current state;",
    "zh": "理解当前状态；"
  },
  {
    "id": 695,
    "start": 6041.324,
    "end": 6044.587,
    "en": "predict the outcomes different actions may bring;",
    "zh": "预测不同动作可能带来的结果；"
  },
  {
    "id": 696,
    "start": 6044.587,
    "end": 6049.037,
    "en": "pass those predictions to the planner or controller to help them choose.",
    "zh": "将这些预测传递给规划器或控制器，以帮助它们进行选择。"
  },
  {
    "id": 697,
    "start": 6049.037,
    "end": 6058.062,
    "en": "A VLM that can only describe video, or a model that can only generate frames, does not automatically become a reliable robot world model.",
    "zh": "仅能描述视频的视觉语言模型，或仅能生成帧的模型，并不会自动成为可靠的机器人世界模型。"
  },
  {
    "id": 698,
    "start": 6058.062,
    "end": 6064.112,
    "en": "It must also know what the actions are and be able to predict their effect on objects and the environment.",
    "zh": "它还必须知道有哪些动作，并能够预测这些动作对物体和环境的影响。"
  },
  {
    "id": 699,
    "start": 6064.112,
    "end": 6074.137,
    "en": "V-JEPA 2 represents the route of predicting the future in an internal state, while World-Action Models explicitly learn the \"action–future observation\" relationship.",
    "zh": "V-JEPA 2 代表了在内部状态中预测未来的路径，而 World-Action Models 明确学习 \"动作-未来观察\" 的关系。"
  },
  {
    "id": 700,
    "start": 6074.137,
    "end": 6078.924,
    "en": "These models can work alongside a VLA; they need not replace it.",
    "zh": "这些模型可以与 VLA 一起工作；它们无需取代 VLA。"
  },
  {
    "id": 701,
    "start": 6078.924,
    "end": 6083.762,
    "en": "In practical systems a world model is typically used in three ways:",
    "zh": "在实际系统中，世界模型通常有三种使用方式："
  },
  {
    "id": 702,
    "start": 6083.932,
    "end": 6091.282,
    "en": "Before acting: compare candidates such as grasping, pushing or waiting, and prefer the lower-risk option;",
    "zh": "在执行前：比较抓取、推动或等待等候选方案，选择风险较低的选项；"
  },
  {
    "id": 703,
    "start": 6091.232,
    "end": 6099.844,
    "en": "During execution: compare the real observation against the prediction, and on divergence shorten the action, stop, or replan;",
    "zh": "在执行过程中：将实际观察与预测进行比较，当出现偏差时缩短动作、停止或重新规划；"
  },
  {
    "id": 704,
    "start": 6099.844,
    "end": 6109.207,
    "en": "During training: learn state transitions from video, simulation data and failure trajectories, reducing trial and error on real hardware.",
    "zh": "在训练过程中：从视频、仿真数据和失败轨迹中学习状态转换，减少在真实硬件上的试错。"
  },
  {
    "id": 705,
    "start": 6109.207,
    "end": 6122.807,
    "en": "Back to the XLeRobot desk task: if the yellow paper is partly hidden under the red cup, the system can compare candidate skills such as \"grab the paper first,\" \"move the cup first\" and \"approach from another direction.",
    "zh": "回到 XLeRobot 桌面任务：如果黄色纸张部分被红色杯子遮挡，系统可以比较 \"先抓纸张\"、\"先移动杯子\" 和 \"从另一个方向接近\" 等候选技能。"
  },
  {
    "id": 706,
    "start": 6122.807,
    "end": 6134.519,
    "en": "The world model does not need to generate photorealistic robot video; predicting which candidates are more likely to make the paper graspable and which might knock the cup over is already enough to help the planner rank them.",
    "zh": "世界模型不需要生成逼真的机器人视频；预测哪些候选动作更可能让纸张被抓住，哪些可能导致杯子被打翻，这已经足以帮助规划器对它们进行排序。"
  },
  {
    "id": 707,
    "start": 6134.519,
    "end": 6144.457,
    "en": "Once an action executes, the real camera observation remains the final truth; prediction can inform the choice but cannot replace checking that the task succeeded.",
    "zh": "一旦动作执行，真实的摄像头观察仍然是最终的真相；预测可以为选择提供信息，但不能替代确认任务是否成功的检查。"
  },
  {
    "id": 708,
    "start": 6144.457,
    "end": 6151.619,
    "en": "What a world model gives is not a definite answer but a comparable prediction of \"if I do this, what may happen.",
    "zh": "世界模型提供的不是确定的答案，而是一种可比较的预测：‘如果我这样做，可能会发生什么’。"
  },
  {
    "id": 709,
    "start": 6151.619,
    "end": 6160.919,
    "en": "The further ahead it predicts, the larger the error usually grows, and a future frame that looks realistic may still violate real contact and friction.",
    "zh": "它预测得越远，通常误差越大，一个看起来逼真的未来画面仍可能违反真实的接触和摩擦。"
  },
  {
    "id": 710,
    "start": 6160.919,
    "end": 6170.794,
    "en": "Practical systems therefore still need short-horizon prediction, real-time observation, an estimate of uncertainty, and an independent hardware safety controller.",
    "zh": "因此实际系统仍然需要短时预测、实时观察、不确定性估计以及独立的硬件安全控制器。"
  },
  {
    "id": 711,
    "start": 6170.794,
    "end": 6180.594,
    "en": "Generative world models can serve interactive simulation or visualisation, but \"can generate video\" must not be conflated with \"can guide robot action.",
    "zh": "生成式世界模型可以用于交互式模拟或可视化，但‘能生成视频’不能与‘能指导机器人动作’混淆。"
  },
  {
    "id": 712,
    "start": 6180.594,
    "end": 6189.169,
    "en": "Experiment 6-13 intermediate difficulty, two stars: : Comparing three autonomous desk-tidying loops in simulation",
    "zh": "实验6-13 中等难度，两颗星：在模拟中比较三种自主整理桌面的循环"
  },
  {
    "id": 713,
    "start": 6189.169,
    "end": 6206.282,
    "en": "Put the task, object state, success conditions and five tools of experiment 6-12 into the desktop simulator unchanged, replacing only the real XLeRobot actuator with a controllable simulated one, and let grasps occasionally suffer recoverable transient failures.",
    "zh": "将实验6-12的任务、物体状态、成功条件和五个工具原样放入桌面模拟器，仅将真实的XLeRobot执行器替换为可控的模拟版本，并让抓取偶尔出现可恢复的临时故障。"
  },
  {
    "id": 714,
    "start": 6206.282,
    "end": 6210.807,
    "en": "This allows three strategies to be compared without changing the problem.",
    "zh": "这允许三种策略进行比较而不改变问题本身。"
  },
  {
    "id": 715,
    "start": 6210.807,
    "end": 6230.332,
    "en": "Open-loop execution generates the full action sequence once and never observes again midway; step-by-step checking re-reads the state after every pick and place and retries only the current skill on failure; predictive execution adds a short-horizon world model, comparing the expected outcomes of candidate skills before choosing the next step.",
    "zh": "开环执行一次性生成完整的动作序列，并且中途不再观察；逐步检查在每次拾取和放置后重新读取状态，并在失败时仅重试当前技能；预测执行则添加一个短时世界模型，在选择下一步之前比较候选技能的预期结果。"
  },
  {
    "id": 716,
    "start": 6230.332,
    "end": 6241.719,
    "en": "The experiment compares task success rate, tool-call overhead and failure-recovery ability, and checks that every final success is confirmed by a fresh verify_state observation.",
    "zh": "该实验比较任务成功率、工具调用开销和故障恢复能力，并验证每个最终成功都通过新的verify_state观察确认。"
  },
  {
    "id": 717,
    "start": 6241.719,
    "end": 6260.119,
    "en": "The point is not to prove that a small simulated world model equals a real robot's physics model, but to verify a more basic relationship: an open-loop plan carries a single local failure all the way to the end of the task, step-by-step checking can recover, and action prediction can further help rank candidate skills.",
    "zh": "重点不是证明一个小的模拟世界模型等于真实机器人的物理模型，而是验证一个更基本的关系：开环计划会将单个局部故障一直带到任务结束，逐步检查可以恢复，而动作预测可以进一步帮助对候选技能进行排序。"
  },
  {
    "id": 718,
    "start": 6260.119,
    "end": 6265.344,
    "en": "Whether the task is truly finished must still be decided by environment feedback.",
    "zh": "任务是否真正完成仍必须由环境反馈决定。"
  },
  {
    "id": 719,
    "start": 6265.344,
    "end": 6268.319,
    "en": "From Simulation to a Real Robot.",
    "zh": "从模拟到真实机器人。"
  },
  {
    "id": 720,
    "start": 6268.319,
    "end": 6277.732,
    "en": "Even if experiment 6-13 is stable in the simulator, that does not imply the real XLeRobot of experiment 6-12 will succeed the same way.",
    "zh": "即使实验6-13在模拟器中稳定，也不意味着实验6-12的真实XLeRobot会以相同方式成功。"
  },
  {
    "id": 721,
    "start": 6277.732,
    "end": 6286.269,
    "en": "Going from simulation to a real robot is not a matter of swapping in yet another controller, but of handling the differences between two environments.",
    "zh": "从模拟环境转移到真实机器人并不是简单地替换另一个控制器，而是要处理两个环境之间的差异。"
  },
  {
    "id": 722,
    "start": 6286.269,
    "end": 6306.107,
    "en": "Training may use teleoperation data, video data or simulated interaction data; in real deployment the same red cup, yellow paper, tray and bin appear against different backgrounds, lighting, camera positions and occlusion relationships, and the arm additionally meets different friction, sensor noise and actuator latency.",
    "zh": "训练可能使用远程操作数据、视频数据或模拟交互数据；在实际部署中，相同的红色杯子、黄色纸张、托盘和箱子会出现在不同的背景、光照、相机位置和遮挡关系中，机械臂还会遇到不同的摩擦力、传感器噪声和执行器延迟。"
  },
  {
    "id": 723,
    "start": 6306.107,
    "end": 6312.007,
    "en": "Once those differences are large enough, motions learned in simulation may fail in reality.",
    "zh": "一旦这些差异足够大，模拟中学到的运动在现实中可能会失败。"
  },
  {
    "id": 724,
    "start": 6312.007,
    "end": 6320.257,
    "en": "Experiment 6-14 advanced difficulty, three stars: : A cross-environment RGB test on the same desk task",
    "zh": "实验6-14难度升级，三星：在同一办公桌任务上的跨环境RGB测试"
  },
  {
    "id": 725,
    "start": 6320.428,
    "end": 6335.728,
    "en": "Keep using the basic \"move the object to its target\" problem in simulation, treating each sample as one local decision within desk tidying: from the RGB frame, judge which direction to approach the object from, or whether it can already be grasped.",
    "zh": "继续使用基本的“将物体移动到目标位置”问题进行模拟，将每个样本视为整理桌面时的一个局部决策：根据RGB画面判断从哪个方向接近物体，或者是否已经可以抓取。"
  },
  {
    "id": 726,
    "start": 6335.678,
    "end": 6349.003,
    "en": "Train four visual policies with identical structure: one sees only a fixed scene, one varies the background, one varies object appearance, and the last varies background, appearance, lighting and noise together.",
    "zh": "用相同结构训练四个视觉策略：一个只看到固定场景，一个变化背景，一个变化物体外观，最后一个同时变化背景、外观、光照和噪声。"
  },
  {
    "id": 727,
    "start": 6349.003,
    "end": 6358.353,
    "en": "All policies are tested in the original environment and in the changed one, comparing action-decision accuracy before and after the visual conditions change.",
    "zh": "所有策略都在原始环境和变化后的环境中进行测试，比较视觉条件变化前后动作决策的准确性。"
  },
  {
    "id": 728,
    "start": 6358.353,
    "end": 6372.578,
    "en": "The question here is not \"is the simulator already equal to the real XLeRobot,\" but a narrower one: does actively widening the range of visual variation during training help the same cup–tray, paper–bin task adapt to a new camera view?",
    "zh": "这里的问题不是“模拟器是否已经等同于真实的XLeRobot”，而是一个更具体的问题：在训练期间主动扩大视觉变化范围，是否有助于同一杯子-托盘、纸张-箱子的任务适应新的摄像头视角？"
  },
  {
    "id": 729,
    "start": 6372.578,
    "end": 6380.978,
    "en": "Even if the result improves, real deployment still requires real camera calibration, actuator testing and a complete safety loop.",
    "zh": "即使结果有所改善，实际部署仍需要实际的摄像头校准、执行器测试和完整的安全回路。"
  },
  {
    "id": 730,
    "start": 6380.978,
    "end": 6382.865,
    "en": "Chapter Summary.",
    "zh": "章节总结。"
  },
  {
    "id": 731,
    "start": 6382.865,
    "end": 6398.703,
    "en": "Viewed along the two axes of modality and execution timing, asynchrony and event-driven execution expand observation from “the Agent fetches it” to “the world pushes it,” and action from “finish within the turn” to “start now and finish through later events.",
    "zh": "从模态和执行时间两个轴来看，异步性和事件驱动执行将观察扩展为“智能体获取它”，而非“世界推动它”，将动作从“在本轮内完成”扩展为“现在开始并在后续事件中完成”。"
  },
  {
    "id": 732,
    "start": 6398.703,
    "end": 6409.028,
    "en": "Voice compresses the scale to milliseconds, moving from turn-taking toward continuous listening and speaking while dividing realtime foreground interaction from deeper background thought.",
    "zh": "语音将规模压缩到毫秒级，从轮流说话转向持续监听和说话，同时将实时前景交互与更深层的背景思考区分开来。"
  },
  {
    "id": 733,
    "start": 6409.028,
    "end": 6418.553,
    "en": "Computer Use moves the loop to the screen, where the bottlenecks include efficiency, continuous visual understanding, and state confirmation after actions.",
    "zh": "计算机使用将循环移到屏幕上，瓶颈包括效率、持续的视觉理解以及执行后状态确认。"
  },
  {
    "id": 734,
    "start": 6418.553,
    "end": 6427.953,
    "en": "Robotics moves it into the physical world, where action chunking trades smoothness against responsiveness and completion must still be judged from a new observation.",
    "zh": "机器人将循环带入物理世界，在这里，动作分块在平滑性与响应性之间进行权衡，完成仍需通过新的观察进行判断。"
  },
  {
    "id": 735,
    "start": 6427.953,
    "end": 6431.515,
    "en": "The four sections share one control skeleton:",
    "zh": "这四个部分共享一个控制骨架："
  },
  {
    "id": 736,
    "start": 6431.515,
    "end": 6436.253,
    "en": "Refer to the companion repository for the complete code implementation.",
    "zh": "请参阅配套仓库以获取完整的代码实现。"
  },
  {
    "id": 737,
    "start": 6436.253,
    "end": 6445.078,
    "en": "They also share the same primitives—wake-up, safe points, cancellation, preemption, and fast/slow separation.",
    "zh": "它们还共享相同的原语——唤醒、安全点、取消、抢占和快速/慢速分离。"
  },
  {
    "id": 738,
    "start": 6445.228,
    "end": 6456.953,
    "en": "This chapter completes the last piece of the “building an Agent” part: the observation and action spaces have now been expanded in all three directions—content, modality, and timing.",
    "zh": "本章完成了“构建智能体”部分的最后一块拼图：观察空间和动作空间现已在三个方向上得到扩展——内容、模态和时间。"
  },
  {
    "id": 739,
    "start": 6456.903,
    "end": 6473.378,
    "en": "Next, Chapter 7 asks how to determine whether the system was built correctly; Chapter 8 explains how post-training updates model parameters; and Chapter 9 organizes runtime trajectories, evaluation, and multiple update carriers into a continual-evolution loop.",
    "zh": "接下来，第7章将探讨如何判断系统是否正确构建；第8章解释如何通过训练后更新模型参数；第9章将运行时轨迹、评估和多个更新载体整合到持续进化循环中。"
  },
  {
    "id": 740,
    "start": 6473.378,
    "end": 6479.253,
    "en": "Chapter 10 then moves from this complete single-Agent foundation to multi-Agent collaboration.",
    "zh": "然后，第10章将从这一完整的单智能体基础转向多智能体协作。"
  },
  {
    "id": 741,
    "start": 6479.253,
    "end": 6481.19,
    "en": "Thought Questions.",
    "zh": "思考问题。"
  },
  {
    "id": 742,
    "start": 6481.19,
    "end": 6490.728,
    "en": "intermediate difficulty, two stars:  In an asynchronous Agent architecture, the priority strategy for the event queue must be determined at design time.",
    "zh": "中级难度，两颗星：在异步智能体架构中，事件队列的优先级策略必须在设计时确定。"
  },
  {
    "id": 743,
    "start": 6490.728,
    "end": 6503.365,
    "en": "But if priority judgment itself requires semantic understanding (e.g., determining whether a new message is more urgent than the current task), who should make this judgment—a rules engine or another LLM call?",
    "zh": "但如果优先级判断本身需要语义理解（例如，判断新消息是否比当前任务更紧急），谁来做出这个判断——是规则引擎还是另一个大语言模型调用？"
  },
  {
    "id": 744,
    "start": 6503.365,
    "end": 6505.59,
    "en": "What are the costs of each?",
    "zh": "每种方式的成本是什么？"
  },
  {
    "id": 745,
    "start": 6505.59,
    "end": 6513.39,
    "en": "intermediate difficulty, two stars:  In queue-based event processing, models tend to focus only on the last event.",
    "zh": "中级难度，两颗星：在基于队列的事件处理中，模型往往只关注最后一个事件。"
  },
  {
    "id": 746,
    "start": 6513.39,
    "end": 6518.603,
    "en": "This chapter mitigates this through Agent status bar markers and summarization.",
    "zh": "本章通过智能体状态栏标记和摘要来缓解这个问题。"
  },
  {
    "id": 747,
    "start": 6518.603,
    "end": 6531.815,
    "en": "But if the queue has 20 events backlogged (10 tool results + 5 user messages + 5 system alerts), how would you organize the presentation order and format of these events so that the model does not miss key information?",
    "zh": "但如果队列中有20个积压的事件（10个工具结果 + 5条用户消息 + 5条系统警报），你会如何组织这些事件的展示顺序和格式，以确保模型不会遗漏关键信息？"
  },
  {
    "id": 748,
    "start": 6531.815,
    "end": 6550.203,
    "en": "advanced difficulty, three stars:  When an Agent interacts with the external world on behalf of a user, it essentially faces an identity choice: use an independent virtual identity (dedicated email and phone number) to act as a third party, or directly operate the user's personal accounts as the user?",
    "zh": "高级难度，三颗星：当智能体代表用户与外部世界交互时，它本质上面临一个身份选择：使用独立的虚拟身份（专用邮箱和电话号码）作为第三方，还是直接操作用户的个人账户，就像用户自己一样？"
  },
  {
    "id": 749,
    "start": 6550.203,
    "end": 6563.79,
    "en": "The former allows autonomous background operation, but third parties may not trust a non-human identity; the latter has more complete context and permissions but introduces authorization, trust, and security-boundary issues.",
    "zh": "前者允许自主的后台运行，但第三方可能不信任非人类的身份；后者具有更完整的上下文和权限，但会引入授权、信任和安全边界的问题。"
  },
  {
    "id": 750,
    "start": 6563.79,
    "end": 6567.515,
    "en": "In what scenarios do you think each mode should be chosen?",
    "zh": "你认为在哪些场景下应选择哪种模式？"
  },
  {
    "id": 751,
    "start": 6567.515,
    "end": 6578.853,
    "en": "intermediate difficulty, two stars:  The end-to-end model for voice Agents merges ASR-LLM-TTS into a single model, reducing latency but losing modularity.",
    "zh": "中等难度，两颗星：语音智能体的端到端模型将ASR-LLM-TTS整合为一个模型，降低延迟但失去模块化。"
  },
  {
    "id": 752,
    "start": 6578.853,
    "end": 6588.453,
    "en": "If the end-to-end model makes an error in a specific stage (e.g., speech recognition), debugging and fixing it is much harder than in a serial pipeline.",
    "zh": "如果端到端模型在特定阶段（例如语音识别）出现错误，调试和修复比串行流水线要困难得多。"
  },
  {
    "id": 753,
    "start": 6588.453,
    "end": 6593.19,
    "en": "How would you design an observability system for an end-to-end voice Agent?",
    "zh": "你会如何为端到端语音智能体设计可观测性系统？"
  },
  {
    "id": 754,
    "start": 6593.19,
    "end": 6601.953,
    "en": "introductory difficulty, one star:  Step-Audio R1 achieves \"thinking while speaking\" through the MPS dual-brain architecture.",
    "zh": "基础难度，一颗星：Step-Audio R1通过MPS双脑架构实现“边说边思考”。"
  },
  {
    "id": 755,
    "start": 6601.953,
    "end": 6611.44,
    "en": "However, humans, when \"thinking while speaking,\" often say things before they have fully thought them through, self-correct, or use filler words.",
    "zh": "然而，人类在“边说边思考”时，常常会在完全想好之前说出一些话，随后自我纠正，或使用填充词。"
  },
  {
    "id": 756,
    "start": 6611.44,
    "end": 6616.315,
    "en": "Should an Agent's \"thinking while speaking\" mimic these human characteristics?",
    "zh": "智能体的‘边说边思考’应该模仿这些人类特征吗？"
  },
  {
    "id": 757,
    "start": 6616.315,
    "end": 6637.328,
    "en": "intermediate difficulty, two stars:  SoM (Set-of-Mark) and its structured variants (DOM element indexing) convert Computer Use's visual localization from open-ended coordinate prediction to closed-set ID selection, but they all require detecting and annotating UI elements first—whether via a segmentation model or the DOM.",
    "zh": "中等难度，两颗星：SoM（Set-of-Mark）及其结构变体（DOM元素索引）将计算机使用的视觉定位从开放式的坐标预测转换为封闭集ID选择，但它们都需要先检测和标注UI元素——无论是通过分割模型还是DOM。"
  },
  {
    "id": 758,
    "start": 6637.328,
    "end": 6645.465,
    "en": "If the interface contains non-standard controls or dynamically changing elements, the annotations may be incomplete or inaccurate.",
    "zh": "如果界面包含非标准控件或动态变化的元素，标注可能不完整或不准确。"
  },
  {
    "id": 759,
    "start": 6645.465,
    "end": 6649.715,
    "en": "In such cases, should we fall back to coordinate prediction?",
    "zh": "在这种情况下，是否应该回退到坐标预测？"
  },
  {
    "id": 760,
    "start": 6649.715,
    "end": 6660.078,
    "en": "intermediate difficulty, two stars:  Robot platforms like XLeRobot, costing a few hundred dollars, make teleoperation data collection inexpensive.",
    "zh": "中等难度，两颗星：XLeRobot等机器人平台成本仅几百美元，使远程操作数据收集变得廉价。"
  },
  {
    "id": 761,
    "start": 6660.078,
    "end": 6665.803,
    "en": "However, the quality of teleoperation data depends heavily on the operator's skill.",
    "zh": "然而，远程操作数据的质量高度依赖于操作员的技能。"
  },
  {
    "id": 762,
    "start": 6665.803,
    "end": 6671.403,
    "en": "How would low-quality data from an unskilled operator affect the training of a VLA model?",
    "zh": "技能不足的操作员提供的低质量数据会对VLA模型的训练产生什么影响？"
  },
  {
    "id": 763,
    "start": 6671.403,
    "end": 6676.49,
    "en": "How can low-quality data be automatically filtered during the data collection phase?",
    "zh": "在数据收集阶段，如何自动过滤低质量数据？"
  },
  {
    "id": 764,
    "start": 6676.66,
    "end": 6685.585,
    "en": "advanced difficulty, three stars:  This chapter covers three forms of interaction: voice, Computer Use, and robotics.",
    "zh": "高级难度，三颗星：本章涵盖三种交互形式：语音、计算机使用和机器人技术。"
  },
  {
    "id": 765,
    "start": 6685.535,
    "end": 6698.497,
    "en": "Interaction architectures can improve through end-to-end integration, modular cascades, or separation of foreground interaction from background reasoning, without requiring a corresponding increase in reasoning capability.",
    "zh": "交互架构可以通过端到端集成、模块化级联或分离前景交互与背景推理来改进，而无需相应提升推理能力。"
  },
  {
    "id": 766,
    "start": 6698.497,
    "end": 6708.247,
    "en": "Over the next five years, should Agents prioritize stronger unified models or retain separate, replaceable models for fast interaction and deeper reasoning?",
    "zh": "在未来五年内，智能体应该优先选择更强大的统一模型，还是保留独立可替换的模型以实现快速交互和深度推理？"
  },
  {
    "id": 767,
    "start": 6708.247,
    "end": 6715.122,
    "en": "Discuss the trade-offs in latency, observability, the pace of model upgrades, and task risk.",
    "zh": "讨论延迟、可观测性、模型升级速度和任务风险之间的权衡。"
  },
  {
    "id": 768,
    "start": 6715.122,
    "end": 6737.26,
    "en": "intermediate difficulty, two stars:  DOM/Accessibility Tree element indexing works well on standard web applications, but an increasing number of software interfaces (Canvas/WebGL rendering, cross-platform custom-drawn controls) do not provide accessible structured information, relying solely on visual annotation or coordinate prediction.",
    "zh": "中等难度，两颗星：DOM/可访问性树元素索引在标准网页应用上表现良好，但越来越多的软件界面（如Canvas/WebGL渲染、跨平台自绘控件）不提供可访问的结构化信息，仅依赖视觉标注或坐标预测。"
  },
  {
    "id": 769,
    "start": 6737.26,
    "end": 6744.147,
    "en": "Do you think Computer Use should bet on a purely visual approach, or maintain both structured and visual paths?",
    "zh": "你认为计算机使用应押注于纯粹的视觉方法，还是保持结构化和视觉路径并存？"
  },
  {
    "id": 770,
    "start": 6744.147,
    "end": 6748.085,
    "en": "What are the costs and benefits of maintaining both paths?",
    "zh": "同时维持两条路径的成本和收益是什么？"
  },
  {
    "id": 771,
    "start": 6748.085,
    "end": 6764.46,
    "en": "intermediate difficulty, two stars:  VLA models use action chunking—as mentioned in the text, the model generates a short sequence of future actions at once, and a control thread executes them at a higher rate—to hide inference latency within execution time.",
    "zh": "中等难度，两颗星：VLA模型使用动作分块——正如文中所述，模型一次生成一段未来动作序列，由控制线程以更高频率执行——以将推理延迟隐藏在执行时间内。"
  },
  {
    "id": 772,
    "start": 6764.46,
    "end": 6773.747,
    "en": "However, if the environment changes suddenly during execution (e.g., an object is moved), the pre-generated action sequence becomes invalid.",
    "zh": "然而，如果在执行过程中环境突然变化（例如物体被移动），预先生成的动作序列就会失效。"
  },
  {
    "id": 773,
    "start": 6773.747,
    "end": 6780.51,
    "en": "How can we balance the efficiency advantage of action chunking with the need for responsiveness to environmental changes?",
    "zh": "我们如何在动作分块的效率优势与对环境变化的响应需求之间取得平衡？"
  },
  {
    "id": 774,
    "start": 6780.51,
    "end": 6795.885,
    "en": "advanced difficulty, three stars:  All three scenarios in this chapter—voice, Computer Use, and robotics—face latency in the \"perceive-think-act\" loop and need to divide responsibilities between deeper reasoning and timely interaction.",
    "zh": "高级难度，三颗星：本章中的三个场景——语音、计算机使用和机器人——都面临“感知-思考-行动”循环中的延迟，并需要在深度推理和及时交互之间分配责任。"
  },
  {
    "id": 775,
    "start": 6795.885,
    "end": 6807.735,
    "en": "In voice, this manifests as \"correcting after misspeaking\"; in Computer Use, as \"clicking first, then looking\"; in robotics, as \"taking a step, then looking.",
    "zh": "在语音中，这表现为“先说错再纠正”；在计算机使用中，表现为“先点击再查看”；在机器人中，表现为“先迈步再观察”。"
  },
  {
    "id": 776,
    "start": 6807.735,
    "end": 6820.76,
    "en": "How can classifying actions by risk, using reversible operations, verifying state, enforcing permission controls, and stopping safely prevent fast interaction from causing irreversible consequences?",
    "zh": "如何通过按风险分类动作、使用可逆操作、验证状态、实施权限控制和安全停止，防止快速交互导致不可逆的后果？"
  },
  {
    "id": 777,
    "start": 6820.76,
    "end": 6834.047,
    "en": "advanced difficulty, three stars:  The same set of primitives (wake-up, safe point, cancellation, preemption, fast/slow separation) recurs in this chapter at different time scales.",
    "zh": "高级难度，三颗星：同一组基本操作（唤醒、安全点、取消、抢占、快慢分离）在本章中以不同的时间尺度反复出现。"
  },
  {
    "id": 778,
    "start": 6834.047,
    "end": 6843.31,
    "en": "Pick one and explain how its implementation differs between event-driven processing (seconds to days) and robot action chunking (milliseconds).",
    "zh": "选择一个并解释其在事件驱动处理（秒到天）和机器人动作分块（毫秒）之间的实现差异。"
  },
  {
    "id": 779,
    "start": 6843.31,
    "end": 6852.422,
    "en": "What mainly determines that difference—the speed at which the environment changes, the reversibility of the action, or the cost of obtaining an observation?",
    "zh": "是什么主要决定了这种差异——环境变化的速度、动作的可逆性，还是获取观察的成本？"
  }
];
