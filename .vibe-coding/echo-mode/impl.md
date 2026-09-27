# 实现方案与技术设计 (Implementation Plan) - Echo Learning Mode

## 1. 架构设计与模块划分

### 1.1 EchoController 单例设计
在 `js/app.js` 中新增 `EchoController` 管理回音三步法的完整生命周期：
```javascript
const EchoController = {
  mode: false,            // 连续回音流模式开关 (true | false)
  singleCueId: null,      // 单句精听锁定的 cue.id (若为 null 则由 mode 驱动)
  step: 'IDLE',           // 'IDLE' | 'LISTEN' | 'ECHO' | 'SHADOW'
  timerId: null,          // 留白回响 setTimeout ID
  savedPlaybackRate: null,// 暂存用户原语速
  activeCue: null,        // 当前执行中的 cue 对象

  init(),
  toggleMode(),           // 切换连续模式
  startSingleCue(cue),    // 开启单句精听
  onTimeUpdate(curTime, currentCue), // 拦截播放进度边界
  enterEchoStep(cue),     // 进入留白回响
  enterShadowStep(cue),   // 进入模仿跟读
  finishStep(cue),        // 收尾并根据模式决定流转或暂停
  cancelEcho(resetRate),  // 紧急中断与复原
  updateVisuals()         // 更新卡片视觉状态与底部按钮样式
};
```

### 1.2 `timeupdate` 事件拦截逻辑
在主音频 `timeupdate` 处理函数中：
```javascript
if (EchoController.isActive()) {
  EchoController.onTimeUpdate(curTime, currentCue);
} else if (state.repeatCurrent && curTime >= currentCue.end) {
  // 原有单句复读逻辑
}
```

### 1.3 UI 与 DOM 调整
1. `reader.html`:
   - 底部控制栏（`#btn-repeat` 旁）新增：
     ```html
     <button id="btn-echo-mode" class="control-btn" title="回音法精听模式 (E)" aria-label="Echo Mode">
       <span class="control-icon">${SVGS.echo}</span>
       <span class="control-label" data-i18n="btn_echo_mode">回音模式</span>
     </button>
     ```
   - 快捷键帮助弹窗新增 `E` 键说明：“开启/关闭回音精听循环”。
2. 字幕卡片渲染（`renderCues`）:
   - 在卡片操作区新增 `cue-btn-echo`：
     ```html
     <button class="cue-btn cue-btn-echo" title="史嘉琳回音精听三步法 (Listen -> Echo -> Shadow)">
       ${SVGS.echo} Echo
     </button>
     ```
   - 在卡片内容区上方动态挂载或更新回音状态徽标：`.cue-echo-badge`。

### 1.4 CSS 视觉规范
- `.cue-btn-echo`: 与 `.cue-btn-repeat` 一致的精巧按钮风格，悬停高亮。
- `.cue-card.echoing`: 留白回响状态下的呼吸微动效，温和脉冲阴影。
- `.cue-echo-badge`:
  - 留白阶段：显示 `🧠 留白回响 (Echo in mind)...`，配合自适应宽度倒计时微进度条。
  - 跟读阶段：显示 `🎙️ 跟读模仿 (Shadowing 0.85x)...`，高亮对比色。

### 1.5 多语言 (i18n)
在 `js/i18n.js` 中增加对应中英双语文案：
- `btn_echo_mode`: '回音模式' / 'Echo Mode'
- `echo_tip_enabled`: '回音精听模式已开启（原速听 -> 留白回想 -> 0.85x开口跟读）' / 'Echo mode enabled (Listen -> Echo -> Shadow at 0.85x)'
- `echo_tip_disabled`: '回音精听模式已关闭' / 'Echo mode disabled'
- `echo_status_echoing`: '🧠 留白回响 (回想原音)...' / '🧠 Echo in mind (replay voice)...'
- `echo_status_shadowing`: '🎙️ 模仿跟读 (0.85x原声)...' / '🎙️ Shadowing (0.85x voice)...'
- `shortcut_echo`: 'E: 开启/关闭回音精听模式' / 'E: Toggle Echo Mode'

## 2. 测试计划 (TDD)
编写 `tests/test_echo_mode.js`：
1. **测试 1**: 单句 Echo 启动：状态置为 `LISTEN`，到达 `cue.end` 时触发 `audio.pause()` 并进入 `ECHO` 阶段；
2. **测试 2**: `ECHO` 留白定时器到期后，语速切换为 `Math.min(userRate, 0.85)`，跳转至 `cue.start + 0.02`，调用 `audio.play()` 并进入 `SHADOW` 阶段；
3. **测试 3**: `SHADOW` 阶段再次到达 `cue.end`，恢复原始语速；单句模式下自动暂停；
4. **测试 4**: 连续回音流模式：`SHADOW` 结束后自动平滑跳转至下一句并重新进入 `LISTEN` 阶段；
5. **测试 5**: 互斥与清理：开启 Echo 自动关闭 A-B loop；点击暂停或调用 `cancelEcho` 立即恢复原语速并清除所有在途定时器。
