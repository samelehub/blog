---
title: Vue学习笔记
tags:
  - Vue
  - 笔记
categories:
  - - Vue
  - - 笔记
cover: 'https://cdn.jsdelivr.net/gh/samelehub/CDN@latest/images/cover/29.jpg'
description:
abbrlink: afb0fd43
date: 2020-12-15 20:48:40
copyright: false
---

## 前言

> 此笔记转载于 👉[ 此处 ](https://melodyhub.ltd/blog/2020/10/04/Vue%E5%85%A5%E9%97%A8%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0/)

Vue 的`核心库只关注视图层`，方便与第三方库或既有项目整合。

HTML + CSS + JS : 视图 ： `给用户看，刷新后台给的数据`

网络通信 ： `axios`

页面跳转 ： `vue-router`

状态管理：`vuex`

Vue-UI : `ICE`、 `Element UI`

# 一、VUE 概述

`Vue`(读音`/vju/`, 类似于 view)是**一套用于构建用户界面的渐进式框架**，发布于 2014 年 2 月。

与其它大型框架不同的是，**Vue 被设计为可以自底向上逐层应用**。

**Vue 的核心库只关注视图层**，不仅易于上手，还便于与第三方库(如: `vue-router`: 跳转，`vue-resource`: 通信，`vuex`:管理)或既有项目整合。

---

# 二、前端核心知识分析

## 1. 前端三要素

`HTML`**(结构层)** : 超文本标记语言(Hyper Text Markup Language) ，决定网页的结构和内容
`CSS`**(表现层)** : 层叠样式表(Cascading Style sheets) ，设定网页的表现样式
`JavaScript`**(行为层)** : 是一种弱类型脚本语言，其源代码不需经过编译，而是由浏览器解释运行,用于控制网页的行为

### 1.1 CSS 预处理器有

`SASS`：基于 Ruby，通过服务端处理，功能强大。解析效率稿。需要学习 Ruby 语言，上手难度高于 LESS。
`LESS`：基于 NodeJS，通过客户端处理，使用简单。功能比 SASS 简单，解析效率也低于 SASS，**但在实际开发中足够了，所以后台人员如果需要的话，建议使用 LESS**。

### 1.2 Native 原生 JS 开发

原生 JS 开发，也就是让我们按照**ECMAScript**标准的开发方式，简称是 ES,特点是所有浏览器都支持。截止到当前博客发布时间，ES 标准已发布如下版本:

ES3

ES4 (内部,未正式发布)

`ES5 (全浏览器支持)`

`ES6 (常用，当前主流版本: webpack打包成为ES5支持! )`

ES7

ES8

ES9 (草案阶段)

> 区别就是逐步增加新特性。

### 1.3 TypeScript 微软的标准

TypeScript 是一种由微软开发的自由和开源的编程语言。它是 JavaScript 的一个超集，而且本质上向这个语言添加了可选的静态类型和基于类的面向对象编程。由安德斯海尔斯伯格（C#、Delphi、TypeScript 之父； .NET 创立者）主导。

该语言的特点就是除了具备 ES 的特性之外还纳入了许多不在标准范围内的新特性，所以会导致很多浏览器不能直接支持 TypeScript 语法，需要编译后（编译成 JS ）才能被浏览器正确执行。

## 2. JavaScript 框架

前端三大框架：`Angular`、`React`、`Vue`

**jQuery**: 大家熟知的 JavaScript 框架，优点是简化了 DOM 操作，缺点是 DOM 操作太频繁,影响前端性能;在前端眼里使用它仅仅是为了兼容 IE6、7、8。
**Angular**: Google 收购的前端框架，由一群 Java 程序员开发，其`特点是将后台的 MVC 模式搬到了前端并增加了模块化开发的理念`，与微软合作，采用 TypeScript 语法开发;对后台程序员友好，对前端程序员不太友好;最大的缺点是版本迭代不合理(如: 1 代-> 2 代，除了名字，基本就是两个东西;截止发表博客时已推出了 Angular6)。
**React**: Facebook 出品，一款高性能的 JS 前端框架;`特点是提出了新概念[虚拟 DOM]用于减少真实 DOM 操作，在内存中模拟 DOM 操作，有效的提升了前端渲染效率`;缺点是使用复杂，因为需要额外学习一门[JSX] 语言。
**Vue**:一款渐进式 JavaScript 框架，**所谓渐进式就是逐步实现新特性的意思**，如实现模块化开发、路由、状态管理等新特性。**其特点是综合了 Angular (模块化)和 React (虚拟 DOM)的优点**。
**Axios** :**前端通信框架**；因为 Vue 的边界很明确，就是为了处理 DOM，所以并不具备通信能力，此时就需要额外使用一个通信框架与服务器交互；当然也可以直接选择使用 jQuery 提供的 AJAX 通信功能。

## 3. UI 框架

Ant-Design：阿里巴巴出品，基于 React 的 UI 框架
**ElementUI、 iview、 ice**: 基于 Vue 的 UI 框架
**Bootstrap**：Twitter 推出的一个用于前端开发
AmazeUI：又叫”妹子 UI”，一款 HTML5 跨屏前端框架

## 4. JavaScript 构建工具

Babel: JS 编译工具，主要用于浏览器不支持的 ES 新特性，比如用于编译 TypeScript
**WebPack**: 模块打包器，主要作用是打包、压缩、合并及按序加载

> 前端开发主要使用`WebPack`。

## 5. 三端合一

### 5.1 混合开发（Hybid App）

主要目的是实现一套代码三端统一(PC、Android:.apk、iOS:.ipa )并能备够调用到底层件(如:传感器、GPS、 摄像头等)，打包方式主要有以下两种:

> 云打包: **HBuild** -> **HBuildX**， **DCloud 出品**; **API Cloud**
> 本地打包: **Cordova** (前身是 PhoneGap)

### 5.2 微信小程序

详见[微信小程序官网](https://developers.weixin.qq.com/miniprogram/dev/framework/)，这里就只介绍一个方便小程序开发的框架：

> WeUI

## 6. 后端技术

前端人员为了方便开发也需要掌握一定的后端技术， 但我们 Java 后台人员知道后台知识体系极其庞大复杂，所以为了方便前端人员开发后台应用，就出现了`NodeJS`这样的技术。

NodeJS 的作者已经声称放弃 NodeJS (说是架构做的不好再加上笨重的 node\_ modules，可能让作者不爽了吧)，开始开发全新架构的 Deno

既然是后台技术，那肯定也需要框架和项目管理工具，NodeJS 框架及项目管理工具如下:

Express: `NodeJS` 框架
Koa: Express 简化版
`NPM`: 项目综合管理工具，类似于 Maven
`YARN`: NPM 的替代方案，类似于 Maven 和 Gradle 的关系

## 7. 主流前端框架

**Vue.js**

### 7.1 iView

iview 是一个强大的基于 Vue 的 UI 库，有很多实用的基础组件比 elementui 的组件更丰富，主要服务于 PC 界面的中后台产品。使用单文件的 Vue 组件化开发模式基于 npm + webpack + babel 开发，支持 ES2015 高质量、功能丰富友好的 API，自由灵活地使用空间。

[官网地址](https://iviewui.com/)
[Github](https://github.com/view-design/ViewUI)
[iview-admin](https://gitee.com/icarusion/iview-admin)

> 备注：属于前端主流框架，选型时可以考虑使用，主要特点是移动端支持较多

### 7.2 ElementUI

`Element` 是饿了么前端开源维护的 Vue UI 组件库，组件齐全，基本涵盖后台所需的所有组件，文档讲解详细，例子也很丰富。**主要用于开发 PC 端的页面，是一个质量比较高的 Vue UI 组件库。**

[官网地址](https://element.eleme.cn/#/zh-CN)
Github：[vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)

> 备注：属于前端主流框架，选型时可以考虑使用，**主要特点是桌面端支持较多**

### 7.3 ICE

飞冰 是阿里巴巴团队基于 React/Angular/Vue 的中后台应用解决方案，在阿里巴巴内部，已经有 270 多个来自几乎所有 BU 的项目在使用。飞冰包含了一条从设计端到开发端的完整链路，帮助用户快速搭建属于自己的中后台应用。

> 备注:主要组件还是以 React 为主，截止 2019 年 02 月 17 日更新博客前对 Vue 的支持还不太完善，目前尚处于观望阶段

### 7.4 VantUI

Vant UI 是有赞前端团队基于有赞统一的规范实现的 Vue 组件库,提供了一整套 UI 基础组件和业务组件。通过 Vant，可以快速搭建出风格统一的页面， 提升开发效率。

### 7.5 AtUI

at-ui 是一款基于 Vue 2.x 的前端 UI 组件库,主要用于快速开发 PC 网站产品。它提供了一套 npm + webpack + babel 前端开发工作流程，CSS 样式独立，即使采用不同的框架实现都能保持统一的 UI 风格。

### 7.6 CubeUI

cube-ui 是滴滴团队开发的基于 Vue.js 实现的精致移动端组件库。支持按需引入和后编译，轻量灵活；扩展性强，可以方便地基于现有组件实现二次开发。

### 混合开发

#### Flutter

Flutter 是谷歌的移动端 UI 框架，可在极短的时间内构建 Android 和 iOs.上高质量的原生级应用。Flutter 可与现有代码一起工作,它被世界各地的开发者和组织使用,并且 Flutter 是免费和开源的。

> 备注: Google 出品，主要特点是快速构建原生 APP 应用程序，如做混合应用该框架为必选框架

#### lonic

lonic 既是一个 CSS 框架也是一个 Javascript UI 库，lonic 是目前最有潜力的一款 HTML5 手机应用开发框架。通过 SASS 构建应用程序，它提供了很多 UI 组件来帮助开发者开发强大的应用。它使用 JavaScript MVVM 框架和 AngularJS/Vue 来增强应用。提供数据的双向绑定，使用它成为 Web 和移动开发者的共同选择。

### 微信小程序

#### mpvue

mpvue 是美团开发的一一个使用 `Vue.js` 开发小程序的前端框架，目前支持微信小程序、百度智能小程序，头条小程序和支付宝小程序。框架基于 `Vue.js` ，修改了的运行时框架 `runt ime` 和代码编译器 `compiler` 实现，使其可运行在小程序环境中，从而为小程序开发引入了 `Vue.js` 开发体验。

> 备注:完备的 Vue 开发体验，并且支持多平台的小程序开发，推荐使用

#### WeUl

WeUI 是一套同微信原生视觉体验一致的基础样式库， 由微信官方设计团队为微信内网页和微信小程序量身设计，令用户的使用感知更加统一。包含 button、cell、 dialog、toast、article、 icon 等各式元素。
