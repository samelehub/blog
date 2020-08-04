---
title: hexo标签插件
tags:
  - hexo
  - butterfly
categories:
  - - butterfly
  - - hexo
cover: 'https://cdn.jsdelivr.net/gh/samelehub/CDN@latest/images/cover/29.jpg'
description: <b>前言：</b> 学习使用hexo标签插件
abbrlink: d87f7e0c
date: 2020-08-04 21:24:39
---

## 前言

{% note info no-icon %}

标签外挂是 Hexo 独有的功能，并不是标准的 Markdown 格式。

以下的写法，只适用于 Butterfly 主题，用在其它主题上不会有效果，甚至可能会报错。 使用前请留意。

{% endnote %}

## Note （Bootstrap Callout）

配置 `butterfly.yml`

```yaml
note:
  # Note tag style values:
  #  - simple    bs-callout old alert style. Default.
  #  - modern    bs-callout new (v2-v3) alert style.
  #  - flat      flat callout style with background, like on Mozilla or StackOverflow.
  #  - disabled  disable all CSS styles import of note tag.
  style: flat
  icons: false
  border_radius: 3
  # Offset lighter of background in % for modern and flat styles (modern: -12 | 12; flat: -18 | 6).
  # Offset also applied to label tag variables. This option can work with disabled note tag.
  light_bg_offset: 0
```

用法:

```markdown
{% note [class] [no-icon] %}
Any content (support inline tags too.io).
{% endnote %}

[class] : default | primary | success | info | warning | danger.
[no-icon] : Disable icon in note.

All parameters are optional.
```

例如：

```markdown
{% note default %}
default
{% endnote %}

{% note primary no-icon %}
primary
{% endnote %}

{% note success %}
success
{% endnote %}

{% note info %}
info
{% endnote %}

{% note warning %}
warning
{% endnote %}

{% note danger %}
danger
{% endnote %}
```

效果：
{% note default %}
default
{% endnote %}

{% note primary no-icon %}
primary
{% endnote %}

{% note success %}
success
{% endnote %}

{% note info %}
info
{% endnote %}

{% note warning %}
warning
{% endnote %}

{% note danger %}
danger
{% endnote %}

## Gallery 相册

用法：

```markdown
{% gallery %}
markdown 图片格式
{% endgallery %}
```

例如：

```markdown
![](https://cdn.jsdelivr.net/gh/samelehub/CDN@latest/images/cover/01.jpg)
![](https://cdn.jsdelivr.net/gh/samelehub/CDN@latest/images/cover/02.jpg)
![](https://cdn.jsdelivr.net/gh/samelehub/CDN@latest/images/cover/03.jpg)
![](https://cdn.jsdelivr.net/gh/samelehub/CDN@latest/images/cover/04.jpg)
```

效果：
{% gallery %}
![](https://cdn.jsdelivr.net/gh/samelehub/CDN@latest/images/cover/01.jpg)
![](https://cdn.jsdelivr.net/gh/samelehub/CDN@latest/images/cover/02.jpg)
![](https://cdn.jsdelivr.net/gh/samelehub/CDN@latest/images/cover/03.jpg)
![](https://cdn.jsdelivr.net/gh/samelehub/CDN@latest/images/cover/04.jpg)

{% endgallery %}

## Tabs

使用方法：

```markdown
{% tabs Unique name, [index] %}

<!-- tab [Tab caption] [@icon] -->

Any content (support inline tags too).

<!-- endtab -->

{% endtabs %}

Unique name : 没有逗号的制表符块标签的唯一名称。将在 #id 的前缀中用于每个附带有索引号的选项卡。如果名称中有空格，对于生成 #id，所有的空格将被破折号替换。只有当前的 url 的 post/page 必须是唯一的!

[index] : 可选参数;活动选项卡的索引号。如果没有指定，第一个选项卡(1)将被选中。如果索引为-1，则不会选择任何选项卡。

[Tab caption] : 可选参数;当前标签的标题。如果没有指定标题，则使用带有标签索引后缀的唯一名称作为标签的标题。如果没有指定标题，但指定了图标，标题将为空。

[@icon] : 可选参数;FontAwesome icon name (full-name, look like 'fas fa-font')可指定带空格或不带空格; 如 'Tab caption @icon' 等价于 'Tab caption@icon'.
```

例如：

```markdown
{% tabs test, 2 %}

<!-- tab qwe-->

**This is Tab 1.**

<!-- endtab -->

<!-- tab asd -->

**This is Tab 2.**

<!-- endtab -->

<!-- tab zxc -->

**This is Tab 3.**

<!-- endtab -->

{% endtabs %}
```

效果：
{% tabs test, 2 %}

<!-- tab qwe -->

**This is Tab 1.**

<!-- endtab -->

<!-- tab asd -->

**This is Tab 2.**

<!-- endtab -->

<!-- tab zxc -->

**This is Tab 3.**

<!-- endtab -->

{% endtabs %}

## Button

用法：

```markdown
{% btn [url],[text],[icon],[color] [style] [layout] [position] [size] %}

[url] : 链接
[text] : 按钮文字
[icon] : [可选] 图标
[color] : [可选] 按钮背景颜色(默认 style 时); 按钮字体和边框颜色(outline 时); default/blue/pink/red/purple/orange/green
[style] : [可选] 按钮样式 默认实心; outline/留空
[layout] : [可选] 按钮布局 默认为 line; block/留空
[position] : [可选] 按钮位置 前提是设置了 layout 为 block 默认为左边; center/right/留空
[size] : [可选] 按钮大小; larger/留空
```

例如：

```markdown
{% btn 'http://www.jerryc.me',JerryC,far fa-hand-point-right,outline larger %}
{% btn 'http://www.jerryc.me',JerryC,far fa-hand-point-right,outline blue larger %}
{% btn 'http://www.jerryc.me',JerryC,far fa-hand-point-right,outline pink larger %}
{% btn 'http://www.jerryc.me',JerryC,far fa-hand-point-right,outline red larger %}
{% btn 'http://www.jerryc.me',JerryC,far fa-hand-point-right,outline purple larger %}
{% btn 'http://www.jerryc.me',JerryC,far fa-hand-point-right,outline orange larger %}
{% btn 'http://www.jerryc.me',JerryC,far fa-hand-point-right,outline green larger %}
```

效果：
{% btn 'http://www.jerryc.me',JerryC,far fa-hand-point-right,outline larger %}
{% btn 'http://www.jerryc.me',JerryC,far fa-hand-point-right,outline blue larger %}
{% btn 'http://www.jerryc.me',JerryC,far fa-hand-point-right,outline pink larger %}
{% btn 'http://www.jerryc.me',JerryC,far fa-hand-point-right,outline red larger %}
{% btn 'http://www.jerryc.me',JerryC,far fa-hand-point-right,outline purple larger %}
{% btn 'http://www.jerryc.me',JerryC,far fa-hand-point-right,outline orange larger %}
{% btn 'http://www.jerryc.me',JerryC,far fa-hand-point-right,outline green larger %}

## tag-hide

{% note warning %}
请注意，tag-hide 内的标签外挂 content 内都不建议有 h1 - h6 等标题。 因为 Toc 会把隐藏内容标题也显示出来，而且当滚动屏幕时，如果隐藏内容没有显示出来，会导致 Toc 的滚动出现异常。
{% endnote %}
如果你想把一些文字、内容隐藏起来，并提供按钮让用户点击显示。 可以使用这个标签外挂。

{% tabs tag-hide %}

<!-- tab inline -->

`inline` 在文本里面添加按钮隐藏内容，只限文字。

（content 不能包含英文逗号，可用 `&sbquo;`)

```markdown
{% hideInline content,display,bg,color %}
```

- content： 文本内容。

- display： 按钮显示的文本（ 可选）

- bg:按钮背景颜色（ 可选）

- color： 按钮文本的颜色（ 可选）

```markdown
哪个英文字母最酷？ {% hideInline 西装裤(C装酷),查看答案,#FF7242,#fff %}

门里站着一个人？ {% hideInline 闪 %}
```

哪个英文字母最酷？ {% hideInline 西装裤(c装酷),查看答案,#FF7242,#fff %}

门里站着一个人？ {% hideInline 闪 %}

<!-- endtab -->
<!-- tab Block -->

`block` 独立的 block 隐藏内容，可以隐藏很多内容，包括图片，代码块等等。

（ display 不能包含英文逗号，可用。 `&sbquo;`)

```markdown
{% hideBlock display,bg,color %}
content
{% endhideBlock %}
```

- content： 文本内容。

- display： 按钮显示的文本（ 可选）

- bg:按钮背景颜色（ 可选）

- color： 按钮文本的颜色（ 可选）

```markdown
查看答案
{% hideBlock 查看答案 %}
答案：略。
{% endhideBlock %}
```

{% hideBlock 查看答案 %}
答案：略。
{% endhideBlock %}

<!-- endtab -->
<!-- tab Toggle -->

如果你需要展示的内容太多，可以把它隐藏在收缩框里，需要时再把它展开。

（ display 不能包含英文逗号，可用。 `&sbquo;`)

```markdown
{% hideToggle display,bg,color %}
content
{% endhideToggle %}
```

```markdown
{% hideToggle 假文 %}
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus hic animi velit quaerat voluptatum sapiente nam possimus sed minima reprehenderit ipsum debitis itaque praesentium, illo eligendi rem, numquam nulla magni.

{% endhideToggle %}
```

{% hideToggle 假文 %}
Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus hic animi velit quaerat voluptatum sapiente nam possimus sed minima reprehenderit ipsum debitis itaque praesentium, illo eligendi rem, numquam nulla magni.

{% endhideToggle %}

<!-- endtab -->

{% endtabs %}

## mermaid

{% note warning %}
mermaid 标签不允许嵌套于一些隐藏属性的标签外挂，例如： tag-hide 内的标签外挂和 tabs 标签外挂，这会导致 mermaid 图标无法正常显示，使用时请留意。

**请不要压缩 html 代码，不然会导致 mermaid 显示异常。**
{% endnote %}
使用 mermaid 标签可以绘制 Flowchart（流程图）、Sequence diagram（时序图）、Class Diagram（类图）、State Diagram（状态图）、Gantt（甘特图）和 Pie Chart（圆形图），具体可以查看 [mermaid 文档](https://mermaid-js.github.io/mermaid/#/) 。

配置 `butterfly.yml`

```yaml
mermaid:
  enable: true
  # built-in themes: default/forest/dark/neutral
  theme: default
```

用法：

```markdown
{% mermaid %}
內容
{% endmermaid %}
```

例如：

```markdown
{% mermaid %}
pie
title Key elements in Product X
"Calcium" : 42.96
"Potassium" : 50.05
"Magnesium" : 10.01
"Iron" : 5
{% endmermaid %}
```

{% mermaid %}
pie
title Key elements in Product X
"Calcium" : 42.96
"Potassium" : 50.05
"Magnesium" : 10.01
"Iron" : 5
{% endmermaid %}
