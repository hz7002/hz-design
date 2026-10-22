<p align="center">
  <img src="assets/logo/wordmark-light.svg" alt="hz" height="48">
</p>

# hz Design System

**在线预览：[hz7002.github.io/hz-design](https://hz7002.github.io/hz-design/)**（按本规范搭建的落地页示例，支持深浅模式和手机宽度）

hz 的个人品牌设计规范：一套颜色、字体、组件和场景规则，用于官网、桌面端产品、PPT、封面图和视频。

**靠谱 80%，有趣 20%。** 白底、黑字、一个品牌紫 `#5A4BC6`，加上左下尖角的对话气泡作为视觉记号。

## 目录

| 路径 | 内容 |
| --- | --- |
| [`docs/design-spec.md`](docs/design-spec.md) | 完整规范：定位、颜色、字体、组件、桌面端、落地页、内容平台、禁用清单 |
| [`tokens/hz-tokens.css`](tokens/hz-tokens.css) | CSS 变量，含深浅模式 |
| [`tokens/tokens.json`](tokens/tokens.json) | 同一套变量的 JSON，给设计工具、脚本或其他框架使用 |
| [`tokens/tailwind.preset.js`](tokens/tailwind.preset.js) | Tailwind 预设 |
| [`assets/logo/`](assets/logo/) | 小气泡记号、文字标志（浅/深）、应用图标、favicon |
| [`examples/landing-page.html`](examples/landing-page.html) | 落地页示例 |
| [`skills/hz-design/`](skills/hz-design/) | 给 Claude 用的 skill，新项目自动套用规范 |

## 快速开始

### 普通网页 / Electron / Tauri

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Nunito:wght@500;700&family=Noto+Sans+SC:wght@400;500;700&family=JetBrains+Mono&display=swap">
<link rel="stylesheet" href="tokens/hz-tokens.css">
```

```css
.button-primary {
  background: var(--brand);
  color: var(--on-brand);
  border-radius: var(--radius-md);
  transition: background var(--duration-fast) var(--ease-out);
}
.button-primary:hover { background: var(--brand-hover); }
```

默认跟随系统深浅模式；在 `<html>` 上设置 `data-theme="light"` 或 `data-theme="dark"` 可手动切换。

### Tailwind

```js
// tailwind.config.js
module.exports = {
  presets: [require('./tokens/tailwind.preset.js')],
};
```

同时在全局 CSS 引入 `hz-tokens.css`。之后就可以写 `bg-brand text-fg rounded-md`、`bg-brand-subtle rounded-bubble`。

### 在 Claude 中使用

把 `skills/hz-design` 文件夹加为 skill（Claude 设置里的 Skills，或 Claude Code 的 `~/.claude/skills/`）。之后让 Claude 做网页、界面、PPT 或封面时，它会自动按这套规范来。

## 核心规则速览

| 项目 | 规则 |
| --- | --- |
| 主色 | `#5A4BC6`，约占画面 5%，只给主按钮、链接、关键数字、一个重点词 |
| 不用 | 黄色、渐变、发光、AI 通用图库 |
| 标题字体 | 资源圆体 + Nunito |
| 正文字体 | 思源黑体 + Inter |
| 圆角 | 6 / 10 / 16 |
| 间距 | 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 |
| 记号 | 对话气泡 `border-radius: 16px 16px 16px 4px`，一个画面只有一个大气泡 |

## 授权说明

推荐字体均为 SIL Open Font License，可免费商用。资源圆体不在 Google Fonts，网页上线需自行托管。文字标志 SVG 引用 Nunito 字体，正式使用前建议在设计工具里转成路径。

## 版本

- v1.0（2026-10-22）：首个版本
