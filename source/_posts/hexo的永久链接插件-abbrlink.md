---
title: hexo的永久链接插件 abbrlink
date: 2020-07-23 01:28:40
tags:
  - hexo
---

## 前言

> hexo 的默认永久链接是在\_config.yml 里的配置 permalink: :year/:month/:day/:title/。这种默认配置有个很不能接受的缺点，文件名为中文，会导致 url 链接里面出现中文。这次我来介绍一个比较方便好用的解决方案 hexo-abbrlink 插件。

## 安装 hexo-abbrlink 插件

```sh
npm install hexo-abbrlink --save
```

站点配置文件(\_config.yml)里:

```yml
permalink: post/:abbrlink.html
abbrlink:
  alg: crc32 # 算法：crc16(default) and crc32
  rep: hex # 进制：dec(default) and hex
```

使用 `hexo g` 会自动在你的文章中加上 `abbrlink:'随机字符'`

---

## 本文为转载

原文链接：http://www.adanblog.com/hexo/6962f19.html
