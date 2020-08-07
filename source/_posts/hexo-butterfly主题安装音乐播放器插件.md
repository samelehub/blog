---
title: hexo-butterfly主题安装音乐播放器插件
tags:
  - hexo
  - html
categories:
  - - html
  - - hexo
cover: 'https://cdn.jsdelivr.net/gh/samelehub/CDN@latest/images/cover/08.jpg'
abbrlink: 76c6d058
date: 2020-08-07 01:48:45
description:
---

## 前言

给自己的 blog 整个音乐播放器插件
{% note info %}
使用 Aplayer 音乐播放器：<a href='https://aplayer.js.org/#//' target = 'blank'>官网链接</a>
{% endnote %}

## 步骤

1. 打开 blog 根目录下的`themes\Butterfly\layout\includes\head.pug`
2. 在`head.pug`文件内容的尾部添加`include ./third-party/aplayer.pug`
3. blog 根目录下的`themes\Butterfly\layout\includes\third-party`文件夹内新建`aplayer.pug`内容如图下：

```pug
if theme.aplayer && theme.aplayer.enable
    .aplayer(data-id=theme.aplayer.id data-server=theme.aplayer.server data-type=theme.aplayer.type data-fixed=theme.aplayer.fixed data-mini=theme.aplayer.mini data-listFolded=theme.aplayer.listFolded data-order=theme.aplayer.order data-preload=theme.aplayer.preload)
    each item in theme.aplayer.css
        link(rel='stylesheet', href=item)
    each item in theme.aplayer.js
        script(src=item)
```

4. Butterfly 主题下的`_config.yml`配置文件里添加

```yaml
##侧边栏歌单
aplayer:
  enable: true
  js:
    - https://cdn.jsdelivr.net/gh/samelehub/CDN@latest/APlayer/APlayer.min.js
    - https://cdn.jsdelivr.net/npm/meting@1.2.0/dist/Meting.min.js
  css:
    - https://cdn.jsdelivr.net/gh/samelehub/CDN@latest/APlayer/APlayer.min.css
  id: 5164883875 #歌单id
  server: netease #服务商
  type: playlist # 播放菜单
  fixed: 'true' #是否开启吸底模式，详细：https://aplayer.js.org/#/home?id=fixed-mode
  order: random # 音频循环顺序, 可选值: 'list', 'random'
  preload: auto #预加载，可选值: 'none', 'metadata', 'auto'
  listFolded: 'false' #列表默认折叠
  autoplay: true # 自动播放
  volume: 0.1 # 默认音量，请注意播放器会记忆用户设置，用户手动设置音量后默认音量即失效
```
