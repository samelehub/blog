---
title: 修改hosts解决github访问慢的问题
tags:
  - github
categories:
  - github
cover: 'https://cdn.jsdelivr.net/gh/samelehub/CDN@latest/images/cover/07.jpg'
description:
abbrlink: 4855aed0
date: 2020-08-06 18:16:13
---

## 前言

{% note info %}

不需要安装任何程序，通过修改本地 `hosts` 文件，试图解决：

- GitHub 访问速度慢的问题
- GitHub 项目中的图片显示不出的问题

{% endnote %}

## 使用方法

### 1. 复制下面的内容

```vbs
# GitHub Host Start
185.199.108.154                                   github.githubassets.com
199.232.68.133                                    camo.githubusercontent.com
199.232.68.133                                    github.map.fastly.net
199.232.69.194                                    github.global.ssl.fastly.net
140.82.112.3                                         github.com
140.82.114.5                                         api.github.com
199.232.68.133                                    raw.githubusercontent.com
199.232.68.133                                    favicons.githubusercontent.com
199.232.68.133                                    avatars5.githubusercontent.com
199.232.68.133                                    avatars4.githubusercontent.com
199.232.68.133                                    avatars3.githubusercontent.com
199.232.68.133                                    avatars2.githubusercontent.com
199.232.68.133                                    avatars1.githubusercontent.com
199.232.68.133                                    avatars0.githubusercontent.com
# GitHub Host End
```

### 2. 修改 hosts 文件

hosts 文件在每个系统的位置不一，详情如下：

- Windows 系统：`C:\Windows\System32\drivers\etc\hosts`
- Linux 系统：`/etc/hosts`
- Mac（苹果电脑）系统：`/etc/hosts`
- Android（安卓）系统：`/system/etc/hosts`
- iPhone（iOS）系统：`/etc/hosts`

修改方法，把第一步的内容复制到文本末尾：

1. Windows 使用记事本打开`hosts`文件。
1. Linux、Mac 使用 Root 权限：`sudo vi /etc/hosts`。
1. iPhone、iPad 须越狱、Android 必须要 root。

### 3. 激活生效

大部分情况下是直接生效，如未生效可尝试下面的办法，刷新 DNS：

1. Windows：在 CMD 窗口输入：`ipconfig /flushdns`

1. Linux 命令：`sudo rcnscd restart`

1. Mac 命令：`sudo killall -HUP mDNSResponder`

{% note info %}
如果上述方法无效可以尝试重启机器。
{% endnote %}

## 结尾

现在试试打开 GitHub 的效果如何吧: {% btn 'https://github.com/samelehub',Samele,far fa-hand-point-right, blue outline %}
