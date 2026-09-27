# 产品需求规格说明书 (PRD) - 回音精听循环 (Echo Learning Mode)

## 1. 需求背景与用户价值
在技术英语听力与口语学习中，单纯被动收听往往导致“过耳不过脑”，语速稍快即失去抓取细节能力。
台大外文系史嘉琳教授（Prof. Karen Chung）提出的“回音法 (Echo Method)”是经过权威语言学与神经学验证的听力口语核心训练法。其核心分为三步：
1. **Listen (原速聆听)**：专注输入，观察语调与弱读；
2. **Echo in mind (脑海回响)**：在神经语音回路（Phonological Loop）中静默留白 2~3 秒，让大脑巩固原声记忆；
3. **Shadow & Mimic (微降速模仿跟读)**：以 0.85x 微降速原声音频开口模仿，重塑肌肉记忆。

本功能将这一权威训练法直接深度整合进 TechVoice 有声书播放器中，支持单句精研与连续沉浸回音流。

## 2. 功能范围与交互规范 (Scope & Interactions)

### 2.1 交互入口与触发
1. **单句卡片精听按钮 (Single Cue Echo)**:
   - 每个字幕卡片的操作栏（原有 Repeat、Share 旁）新增 `Echo` 图标按钮。
   - 点击该按钮：立即从当前句子开头以原速播放（Step 1），播完自动静默留白（Step 2），随后以 0.85x 重新播放供跟读（Step 3），播放完毕后自动暂停留在当前句。
2. **连续回音流模式 (Continuous Echo Stream)**:
   - 底部播放栏新增 `Echo 模式` 切换按钮（`#btn-echo-mode`）。
   - 快捷键：全局按键 `E` 快速切换开启/关闭。
   - 开启后：整章有声书按“原速听 -> 留白想 -> 降速跟读”的 3 步循环自动句句推进入耳，适合通勤或散步时沉浸式磨耳朵。
3. **视觉状态反馈**:
   - Step 1 (Listen): 正常句高亮，高亮颜色跟随系统主题；
   - Step 2 (Echo): 卡片显示高辨识度徽标 `🧠 留白回响中 (Echo in mind)...`，配合微呼吸进度条；
   - Step 3 (Shadow): 卡片显示徽标 `🎙️ 开口模仿跟读 (Shadowing 0.85x)...`；
   - Step 4 (Complete): 恢复正常高亮状态。

### 2.2 状态机定义
- 状态集合：`IDLE` | `LISTEN` | `ECHO` | `SHADOW`
- 转换规则：
  - `IDLE` -> `LISTEN`: 用户触发单句 Echo，或连续模式下切入某句；
  - `LISTEN` -> `ECHO`: 音频进度到达 `cue.end`，触发 `audio.pause()`，启动留白定时器；留白时长公式：`Math.max(1.8, Math.min(3.5, (cue.end - cue.start) * 0.75))` 秒；
  - `ECHO` -> `SHADOW`: 留白定时器触发，暂存原始语速 `originalRate = state.playbackRate`，将 `audio.playbackRate = Math.min(state.playbackRate, 0.85)`，跳转至 `cue.start + 0.02` 并调用 `audio.play()`；
  - `SHADOW` -> `IDLE` / 下一句: 音频再次到达 `cue.end`，恢复 `audio.playbackRate = originalRate`。
    - 若为单句模式：调用 `audio.pause()`，状态回到 `IDLE`；
    - 若为连续回音流模式：推进到下一句，状态回到 `LISTEN`。

### 2.3 互斥与边界保护
1. **与 A-B Loop (单句复读) 互斥**:
   - 激活 Echo 模式时，自动停用 `state.repeatCurrent = false`，更新按钮状态并弹出 Toast 提示。
   - 激活 A-B Loop 时，自动停用 Echo 模式并重置语速与计时器。
2. **与 Sleep Timer 协同**:
   - 睡眠定时器到期暂停时，立即清理在途的回响定时器，将语速恢复为用户设定值。
3. **用户主动干预处理**:
   - 用户按 Space 暂停、拖动进度条、点击其他句子或切换章节时，立即中止当前 Echo 步骤，清理回响计时器，恢复用户语速，避免语速异常残留。

## 3. 非功能性指标
- **零外部依赖**: 100% 静态纯前端，兼容现代浏览器与移动端。
- **无卡顿调度**: 状态机由统一的 `EchoController` 单例调度，无内存泄漏与多重定时器叠加。
- **可测试性**: 状态机核心逻辑完全解耦并由 Node.js 自动化测试覆盖。
