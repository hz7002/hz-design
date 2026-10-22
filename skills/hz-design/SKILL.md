---
name: hz-design
description: Apply the hz brand design system (AI explainer IP) to any UI, website, landing page, desktop app, slide, cover image or video graphic. Use whenever building or styling visuals for hz or the user's own projects.
---

# hz 设计规范

用户的所有项目默认使用这套规范：网站、落地页、桌面端、PPT、封面图、视频包装。除非用户在当次请求里明确要求别的风格，否则不要改用其他配色、字体或组件风格。

完整规范见 `references/design-spec.md`；开发变量见 `references/tokens.css`；Tailwind 项目用 `references/tailwind.preset.js`；标志文件在 `references/logo/`。下面是动手前必须遵守的核心规则。

## 1. 气质

- 定位：把 AI 讲清楚的靠谱向导。**靠谱 80%，有趣 20%**。拿不准时选更克制的。
- 清爽理性：白底、黑字、一个品牌紫。大量留白，层级分明，纯色平面。
- IP 名固定写作 **hz**（小写）。口号（待确认）：慢慢讲，讲明白。

## 2. 颜色

- 品牌主色 **#5A4BC6**（Violet 600）。深色模式按钮用 #7366D8，文字链接用 #B5ACF1。
- 比例：约 70% 白/浅灰背景，25% 深灰文字，**品牌紫约 5%**（主按钮、链接、关键数字、一个重点词）。
- 中性灰带微紫调；不用纯灰。
- **不用黄色系**，警示用橙 #E07A2F；成功 #2E9E6A；错误 #D9433F；提示/信息用品牌紫。
- 代码里只用语义变量（`var(--brand)` 等），不写死色值。默认跟随系统深浅模式，`html[data-theme="light|dark"]` 手动切换。

## 3. 字体

| 用途 | 中文 | 英文/数字 |
| --- | --- | --- |
| 标题（Display/H1/H2） | 资源圆体 | Nunito |
| 正文、界面、按钮、字幕 | 思源黑体 Noto Sans SC | Inter |
| 代码、提示词 | 思源黑体 | JetBrains Mono |

- 只有标题用圆体；桌面端界面标题也用黑体（圆体只用于空状态/欢迎页）。
- 字重只用 400 / 500 / 700。
- 内容字号（px 字号/行高）：Display 48/56，H1 36/44，H2 28/36，H3 20/28，Body L 18/32，Body 16/28，Small 14/22，Caption 12/18。移动端 Display 36/44、H1 28/36、H2 24/32。
- 桌面端界面：页面标题 20/28，区块 16/24，正文 14/22，辅助 13/20，小字 12/16。
- 中英文、数字之间加空格；强调只用加粗或品牌紫二选一；正文左对齐。
- 网页加载：`https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Nunito:wght@500;700&family=Noto+Sans+SC:wght@400;500;700&family=JetBrains+Mono&display=swap`。资源圆体需自托管。

## 4. 尺寸档位（只用这些值）

- 圆角：6（标签）/ 10（按钮、输入框）/ 16（卡片、弹窗、图片）/ 999（头像、开关）。
- 间距：4、8、12、16、24、32、48、64、96。卡片内边距 24，模块间 48，官网大段落间 96。
- 阴影只给浮层：sm `0 1px 2px rgba(28,28,35,.06)`，md `0 4px 16px rgba(28,28,35,.08)`，lg `0 12px 40px rgba(28,28,35,.12)`。层次优先靠背景色 + 1px 边框。
- 动效：120ms（悬停）/ 200ms（展开）/ 320ms（弹窗）；缓动 `cubic-bezier(0.2,0,0,1)`；尊重 prefers-reduced-motion。
- 图标：Lucide（首选），线宽 1.5，尺寸 16/20/24；不用 emoji 当图标。

## 5. 品牌记号：对话气泡

- 形状：`border-radius: 16px 16px 16px 4px`（尖角在左下，代表讲述者）。观众提问用右下尖角 `16px 16px 4px 16px`。
- **小气泡**（实心紫）+ hz = 标志；“h”正文色，“z”品牌紫。用于导航左上、侧栏、落款、水印、favicon。
- **大气泡**（浅色 #F4F3FD / 深色 #282160 底，正文色文字）= 标题容器。**一个画面只有一个大气泡**，只装最重要的一句话。
- 问答：提问灰色气泡靠右（--bg-muted），讲解紫色气泡靠左（--brand-subtle）。
- 气泡纯色，不加阴影、描边、渐变。

## 6. 组件要点

- 一个画面只有**一个主按钮**（--brand 底白字），其余用次按钮（1px --border-strong 描边）或文字按钮。按钮高 28/36/48。
- 所有可交互组件做全默认、悬停、按下、焦点（3px --focus-ring，仅 :focus-visible）、禁用五态。
- 输入框高同按钮，聚焦时 --brand 边框 + 焦点环；错误写清“发生了什么 + 怎么做”。
- 卡片：--bg-page + 1px --border，或 --bg-subtle 无边框，同页不混用；可点卡片悬停只变边框 + shadow-sm，不上移。
- 标签：高 22，12px 字，圆角 6，--brand-subtle 底 + --brand-subtle-text。
- 加载用骨架屏；空状态 = 线性插图 + 圆体标题 + 一句说明 + 一个主按钮。
- 文字对比度 ≥ 4.5:1；--text-tertiary 只用于占位和非关键注释。
- 用真实 `<button>`、`<a>`、`<label>`；图标按钮加 aria-label。

## 7. 按场景

**桌面端**：标题栏 44 + 侧栏 240（可收起到 64，--bg-subtle）+ 内容区（内边距 32，阅读宽 720）。导航项高 32，选中用 --brand-subtle。AI 对话沿用气泡规则，生成中末尾闪烁品牌紫光标。⌘K 命令面板。设置提供“跟随系统/浅色/深色”。

**官网落地页**：内容最大宽 1120；断点 768 / 1200。结构：导航（64 高，左标志右主按钮）→ 首屏（大气泡标题 + 说明 + 主/次按钮 + 产品截图放在 --bg-subtle 块上）→ 3 张能力卡片 → 图文交替 → 信任区（只用真实数据）→ FAQ → 深色结尾（#121216）→ 页脚。整页只有一种主操作。

**PPT / 幻灯片**：白底为主，标题用圆体放在大气泡里（每页最多一个），正文黑体，每页一个重点用品牌紫；封面和章节页可用深色 #121216；落款放小气泡标志。

**封面与视频**：小红书 3:4（1080×1440）母版，大气泡标题居中，再裁 B 站 4:3（1200×900，标题在中间 16:9 区）、抖音 9:16（标题在中上部）、公众号 2.35:1（900×383，内容居中）。封面只有三层：期号、大气泡标题（≤2 行，每行 ≤8 字）、小气泡 + hz 落款。字幕：思源黑体 Medium 白字淡描边，横屏约 48px、竖屏 56–64px，高亮词用 #B5ACF1，一句最多一个。片头：气泡弹出 + 逐字打出。

## 8. 禁止

蓝紫粉渐变、发光、霓虹；黄色；大面积紫色背景；3D 机器人/发光大脑/星空图库（改用几何线性插图）；正文用圆体；苹方/微软雅黑导出图片视频；一个画面多个大气泡或多个主按钮；改气泡尖角方向；拉伸、变色标志或写成 HZ / Hz；加粗+紫色+下划线叠加；写死色值或规范外的圆角间距。

## 9. 设计变量（项目里没有 tokens 文件时，原样放进全局 CSS）

```css
:root{
--bg-page:#FFFFFF;--bg-subtle:#F7F7FA;--bg-muted:#EFEFF4;--bg-elevated:#FFFFFF;
--text-primary:#1C1C23;--text-secondary:#5E5E6E;--text-tertiary:#7C7C8C;--text-disabled:#C9C9D4;
--border:#E2E2EA;--border-strong:#C9C9D4;
--brand:#5A4BC6;--brand-hover:#4A3CA8;--brand-active:#3A2F85;--brand-text:#5A4BC6;
--brand-subtle:#F4F3FD;--brand-subtle-text:#4A3CA8;--on-brand:#FFFFFF;
--success:#2E9E6A;--success-bg:#E7F6EE;--success-text:#1D6E49;
--warning:#E07A2F;--warning-bg:#FDF0E6;--warning-text:#9A4A12;
--danger:#D9433F;--danger-bg:#FCEBEA;--danger-text:#9E2723;
--focus-ring:rgba(90,75,198,.35);--overlay:rgba(18,18,22,.4);--selection:#F4F3FD;
--font-display:"Nunito","Resource Han Rounded SC","Noto Sans SC",sans-serif;
--font-sans:"Inter","Noto Sans SC","PingFang SC","Microsoft YaHei",sans-serif;
--font-mono:"JetBrains Mono","Noto Sans SC",ui-monospace,monospace;
--radius-sm:6px;--radius-md:10px;--radius-lg:16px;--radius-full:999px;
--radius-bubble:16px 16px 16px 4px;--radius-bubble-user:16px 16px 4px 16px;
--shadow-sm:0 1px 2px rgba(28,28,35,.06);--shadow-md:0 4px 16px rgba(28,28,35,.08);--shadow-lg:0 12px 40px rgba(28,28,35,.12);
--duration-fast:120ms;--duration-base:200ms;--duration-slow:320ms;
--ease-out:cubic-bezier(0.2,0,0,1);--ease-in-out:cubic-bezier(0.4,0,0.2,1);
}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){
--bg-page:#121216;--bg-subtle:#1C1C23;--bg-muted:#2E2E38;--bg-elevated:#24242C;
--text-primary:#F7F7FA;--text-secondary:#A2A2B0;--text-disabled:#464654;
--border:#2E2E38;--border-strong:#464654;
--brand:#7366D8;--brand-hover:#6456D0;--brand-active:#5A4BC6;--brand-text:#B5ACF1;
--brand-subtle:#282160;--brand-subtle-text:#D3CDF7;
--success-bg:#12301F;--success-text:#5FC795;--warning-bg:#3A2312;--warning-text:#F0A46A;--danger-bg:#3A1716;--danger-text:#F07C78;
--focus-ring:rgba(181,172,241,.45);--overlay:rgba(0,0,0,.6);--selection:#3A2F85;
}}
:root[data-theme="dark"]{
--bg-page:#121216;--bg-subtle:#1C1C23;--bg-muted:#2E2E38;--bg-elevated:#24242C;
--text-primary:#F7F7FA;--text-secondary:#A2A2B0;--text-disabled:#464654;
--border:#2E2E38;--border-strong:#464654;
--brand:#7366D8;--brand-hover:#6456D0;--brand-active:#5A4BC6;--brand-text:#B5ACF1;
--brand-subtle:#282160;--brand-subtle-text:#D3CDF7;
--success-bg:#12301F;--success-text:#5FC795;--warning-bg:#3A2312;--warning-text:#F0A46A;--danger-bg:#3A1716;--danger-text:#F07C78;
--focus-ring:rgba(181,172,241,.45);--overlay:rgba(0,0,0,.6);--selection:#3A2F85;
}
body{background:var(--bg-page);color:var(--text-primary);font-family:var(--font-sans);font-size:16px;line-height:1.75}
:focus-visible{outline:none;box-shadow:0 0 0 3px var(--focus-ring)}
```

标志 SVG（纯图形，可直接内联）：

```html
<!-- 小气泡记号，浅色用 #5A4BC6，深色用 #7366D8 -->
<svg viewBox="0 0 40 32" width="25" height="20" aria-hidden="true"><path d="M12 0H28A12 12 0 0 1 40 12V20A12 12 0 0 1 28 32H3A3 3 0 0 1 0 29V12A12 12 0 0 1 12 0Z" fill="#5A4BC6"/></svg>
```

## 10. 交付前自查

1. 品牌紫是否只占约 5%，且一屏只有一个主按钮、一个大气泡？
2. 色值、圆角、间距、字号是否都来自上面的档位？
3. 深色模式是否用语义变量自动切换？
4. 有没有渐变、黄色、emoji 图标、规范外字体？
5. 文字对比度是否 ≥ 4.5:1，可交互元素是否有焦点态？
