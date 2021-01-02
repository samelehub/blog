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

# 三、了解前后端分离的演变史

## 1 后端为主的 MVC 时代

为了降低开发的复杂度，以后端为出发点,比如：Struts、 SpringMVC 等框架的使用，就是后端的 MVC 时代；

以 `Spring MVC` 的流程为例：

<img src='https://cdn.jsdelivr.net/gh/samelehub/CDN@latest/article/afb0fd43/01.png' />

发起请求到前端控制器( `DispatcherServlet` )
前端控制器请求 `HandlerMapping` 查找 `Handler`, 可以根据 `xml` 配置、注解进行查找
处理器映射器 `HandlerMapping` 向前端控制器返回 `Handler`
前端控制器调用处理器适配器去执行 `Handler`
处理器适配器去执行 `Handler`
`Handler` 执行完成给适配器返回 `ModelAndView`
处理器适配器向前端控制器返回 `ModelAndView` ，`Mode lAndView` 是 `SpringMVC` 框架的一一个底层对象，包括 `Model` 和 `View`
前端控制器请求视图解析器去进行视图解析，根据逻辑视图名解析成真正的视图( `JSP` )
视图解析器向前端控制器返回 `View`
前端控制器进行视图渲染，视图渲染将模型数据（在 `ModelAndView` 对象中）填充到 `request` 域
前端控制器向用户响应结果

### 优点

MVC 是一个非常好的协作模式，能够有效降低代码的耦合度,从架构上能够让开发者明白代码应该写在哪里。
为了让 View 更纯粹,还可以使用 Thymeleaf、Freemarker 等模板引擎，使模板里无法写入 Java 代码,让前后端分工更加清晰。

### 缺点

- 前端开发重度依赖开发环境，开发效率低，这种架构下，前后端协作有两种模式：

  - 第一种是前端写 DEMO，写好后，让后端去套模板。好处是 DEMO 可以本地开发，很高效。不足是还需要后端套模板，有可能套错，套完后还需要前端确定，来回沟通调整的成本比较大；

  - 另一种协作模式是前端负责浏览器端的所有开发和服务器端的 View 层模板开发。好处是 UI 相关的代码都是前端去写就好，后端不用太关注，不足就是前端开发重度绑定后端环境，环境成为影响前端开发效率的重要因素。

* 前后端职责纠缠不清：模板弓|擎功能强大，依旧可以通过拿到的上下文变量来实现各种业务逻辑。这样，只要前端弱势一点，往往就会被后端要求在模板层写出不少业务代码。还有一个很大的灰色地带是 `Controller` ，页面路由等功能本应该是前端最关注的，但却是由后端来实现。`Controller` 本身与 `Model` 往往也会纠缠不清，看了让人咬牙的业务代码经常会出现在 `Controller` 层。这些问题不能全归结于程序员的素养，否则 JSP 就够了。
* 对前端发挥的局限性：性能优化如果只在前端做空间非常有限，于是我们经常需要后端合作，但由于后端框架限制，我们很难使用 **【Comet】** 、**【BigPipe】** 等技术方案来优化性能。

> 注：在这期间（2005 年以前），包括早期的 JSP、PHP 可以称之为 Web 1.0 时代。因为时代在变、技术在变、什么都在变。
>
> > 世界著名作家、大思想家斯宾塞·约翰逊的一句话：唯一不变的是变化本身。
>
> 一些陈旧的技术对于市场来说早就过时了，比如 JSP。

## 2 基于 AJAX 带来的 SPA 时代

时间回到 2005 年 `AJAX` （Asynchronous JavaScript And XM，异步 JavaScript 和 XML,老技术新用法）被正式提出并开始使用 `CDN` 作为静态资源存储，于是出现了 JavaScript 王者归来（在这之前 JS 都是用来在网页上贴狗皮膏药广告的）的 SPA （Single Page Application）单页面应用时代。

<img src='https://cdn.jsdelivr.net/gh/samelehub/CDN@latest/article/afb0fd43/02.png' />

### 优点

这种模式下，**前后端的分工非常清晰，前后端的关键协作点是 AJAX 接口**。看起来是如此美妙,但回过头来看看的话，这与 JSP 时代区别不大。复杂度从服务端的 JSP 里移到了浏览器的 JavaScript，浏览器端变得很复杂。类似 Spring MVC，**这个时代开始出现浏览器端的分层架构**：

<img src='https://cdn.jsdelivr.net/gh/samelehub/CDN@latest/article/afb0fd43/03.png' />

### 缺点

- **前后端接口的约定**：如果后端的接口一塌糊涂,如果后端的业务模型不够稳定,那么前端开发会很痛苦；不少团队也有类似尝试，通过接口规则、接口平台等方式来做。**有了和后端一起沉淀的接口规则，还可以用来模拟数据，使得前后端可以在约定接口后实现高效并行开发**。
- **前端开发的复杂度控制**：SPA 应用大多以功能交互型为主，JavaScript 代码过十万行很正常。大量 JS 代码的组织，与 View 层的绑定等，都不是容易的事情。

## 3 前端为主的 MV\* 时代

此处的 MV\* 模式如下：

MVC （同步通信为主）：Model、View、Controller
MVP （异步通信为主）： Model、 View、 Presenter
MVVM （异步通信为主）：Model、 View、 ViewModel
为了降低前端开发复杂度，涌现了大量的前端框架，比如：`AngularJS`、 `React` 、`Vue.js` 、`EmberJS`等，这些框架总的原则是先按类型分层,比如 Templates、Controllers、 Models, 然后再在层内做切分，如下图：
<img src='https://cdn.jsdelivr.net/gh/samelehub/CDN@latest/article/afb0fd43/04.png' />

### 优点

- **前后端职责很清晰：**前端工作在浏览器端，后端工作在服务器端。清晰的分工，可以让开发并行，测试数据的模拟不难，前端可以本地开发。后端则可以专注于业务逻辑的处理，输出 RESTful 等接口。

* **前端开发的复杂度可控：**前端代码很重，但合理分层，让前端代码能各司其职。这一块蛮有意思的，简单如模板特性的选择，就有很多讲究。并非越强大越好，限制什么，留下哪些自由，代码应该如何组织，所有这一切设计都有很大学位，得花一本书的厚度去说明。
* **部署相对独立：**可以快速改进产品的体验。

### 缺点

- 代码不能复用。比如后端依旧需要对数据做各种校验，校验逻辑无法复用浏览器端的代码。如果可以复用，那么后端的数据校验可以相对简单化。
- 全异步，对 SEO 不利。往往还需要服务端做同步渲染的降级方案。
- 性能并非最佳，特别是移动互联网环境下。
- SPA 不能满足所有需求，依旧存在大量多页面应用。URL Design 需要后端配合，前端无法完全掌握。

## 4 NodeJS 代理的全栈时代

前端为主的 MV\* 模式解决了很多很多问题，但如上所述，依旧存在不少不足之处。随着 NodeJS 的兴起， JavaScript 开始有能力运行在服务端。这意味着可以有一种新的研发模式：
<img src='https://cdn.jsdelivr.net/gh/samelehub/CDN@latest/article/afb0fd43/05.png' />
在这种研发模式下，前后端的职责很清晰。对前端来说，两个 UI 层各司其职：

- Front-end UI layer 处理浏览器层的展现逻辑。通过 CSS 渲染样式，通过 JavaScript 添加交互 功能，HTML 的生成也可以放在这层,具体看应用场景。
- Back-end UI layer 处理路由、模板、数据获取、Cookie 等。通过路由,前端终于可以自主把控 URL Design，这样无论是单页面应用还是多页面应用，前端都可以自由调控。后端也终于可以摆脱对展现的强关注，转而可以专心于业务逻辑层的开发。

通过 Node，Web Server 层也是 JavaScript 代码，这意味着部分代码可前后复用，需要 SEO 的场景可以在服务端同步渲染，由于异步请求太多导致的性能问题也可以通过服务端来缓解。前一种模式的不足，通过这种模式几乎都能完美解决掉。

与 JSP 模式相比,全栈模式看起来是一种回归，也的确是-种向原始开发模式的回归,不过是一种螺旋上升式的回归。

基于 NodeJS 的全栈模式，依旧面临很多挑战:

- 需要前端对服务端编程有更进一 步的认识。比如 TCP/IP 等网络知识的掌握。
- NodeJS 层与 Java 层的高效通信。NodeJS 模式下，都在服务器端，RESTful HTTP 通信未必高效,通过 SOAP 等方式通信更高效。-切需要在验证中前行。
- 对部署、运维层面的熟练了解，需要更多知识点和实操经验。
- 大量历史遗留问题如何过渡。这可能是最大最大的阻力。

> 注：为什么说:” 前端想学后台很难，而我们后端程序员学任何东西都很简单“；就是因为后端程序员具备相对完善的知识体系。

## 5 总结

综上所述，模式也好，技术也罢，没有好坏优劣之分，只有适合不适合；前后分离的开发思想主要是基于 `SoC（关注度分离原则）`，上面种种模式，都是让前后端的职责更清晰，分工更合理高效。

# 四、MVVM 模式

## 1 回顾 MVC

MVC 模式代表` Model-View-Controller（模型-视图-控制器）`模式。

这种模式用于**应用程序的分层开发**。

- **Model（模型）** - 模型代表一个存取数据的对象或 JAVA POJO。它也可以带有逻辑，在数据变化时更新控制器。
- **View（视图）** - 视图代表模型包含的数据的可视化。
- **Controller（控制器）** - 控制器作用于模型和视图上。它控制数据流向模型对象，并在数据变化时更新视图。它使视图与模型分离开。

<img src='https://cdn.jsdelivr.net/gh/samelehub/CDN@latest/article/afb0fd43/06.png' />

## 2 什么是 MVVM？

> `MVVM (Model-View-ViewModel) 是一种软件架构设计模式`，由微软 WPF (用于替代 WinForm，以前就是用这个技术开发桌面应用程序的)和 Silverlight (类似于 Java Applet,简单点说就是在浏览器上运行的 WPF)的架构师 Ken Cooper 和 Ted Peters 开发，是一种简化用户界面的事件驱动编程方式。由 John Gossman (同样也是 WPF 和 Silverlight 的架构师)于 2005 年在他的博客上发表。

`MVVM` 源自于经典的`MVC (ModI-View-Controller) 模式`。

MVVM 的核心是`ViewModel`层，**负责转换 Model 中的数据对象来让数据变得更容易管理和使用**，其作用如下:

- 该层向上与 `View` 层进行双向数据绑定
- 向下与 `Model` 层通过接口请求进行数据交互

<img src='https://cdn.jsdelivr.net/gh/samelehub/CDN@latest/article/afb0fd43/07.png' />

## 3 MVVM 组成部分

<img src='https://cdn.jsdelivr.net/gh/samelehub/CDN@latest/article/afb0fd43/08.png' />

### View

View 是视图层，也就是用户界面。

前端主要由 `HTML` 和 `CSS` 来构建，为了更方便地展现 `ViewModel` 或者 `Model` 层的数据，已经产生了各种各样的前后端模板语言，比如 FreeMarker、Thymeleaf 等等，各大 MVVM 框架如 Vue.js，AngularJS，EJS 等也都有自己用来构建用户界面的内置模板语言。

### Model

Model 是指数据模型，泛指后端进行的各种业务逻辑处理和数据操控，主要围绕数据库系统展开。

这里的难点主要在于需要和前端约定统一的 `接口规则`。

### ViewModel

ViewModel 是由前端开发人员组织生成和维护的视图数据层。在这一层，前端开发者对从后端获取的 Model 数据进行转换处理，做二次封装，以生成符合 View 层使用预期的视图数据模型。

需要注意的是 ViewModel 所封装出来的数据模型包括视图的状态和行为两部分，而 Model 层的数据模型是只包含状态的

- 比如页面的这一块展示什么，那一块展示什么这些都属于视图状态（展示）
- 页面加载进来时发生什么，点击这一块发生什么，这一块滚动时发生什么这些都属于视图行为（交互）
  视图状态和行为都封装在了 ViewModel 里。这样的封装使得 ViewModel 可以完整地去描述 View 层`。由于实现了双向绑定，ViewModel 的内容会实时展现在 View 层，这是激动人心的，因为前端开发者再也不必低效又麻烦地通过操纵 DOM 去更新视图。

> MVVM 框架已经把最脏最累的一块做好了，我们开发者只需要处理和维护 ViewModel，更新数据视图就会自动得到相应更新，真正实现 事件驱动编程。

> View 层展现的不是 Model 层的数据，而是 ViewModel 的数据，由 ViewModel 负责与 Model 层交互，这就**完全解耦了 View 层和 Model 层，这个解耦是至关重要的，它是前后端分离方案实施的重要一环**。

## 4 为什么要使用 MVVM

MVVM 模式和 MVC 模式一样，主要目的是`分离视图（View）和模型（Model）`，有几大好处

- **低耦合：** 视图（View）可以独立于 Model 变化和修改，一个 ViewModel 可以绑定到不同的 View 上，当 View 变化的时候 Model 可以不变，当 Model 变化的时候 View 也可以不变。
- **可复用：** 你可以把一些视图逻辑放在一个 ViewModel 里面，让很多 View 重用这段视图逻辑。
- **独立开发：** 开发人员可以专注于业务逻辑和数据的开发（ViewModel），设计人员可以专注于页面设计。
- **可测试：** 界面素来是比较难于测试的，而现在测试可以针对 ViewModel 来写。

## 5 MVVM 框架

当下流行的 MVVM 框架有:

`Vue`
`Angular`
`React`
……

# 五、Vue 是 MVVM 模式的实现者

<img src='https://cdn.jsdelivr.net/gh/samelehub/CDN@latest/article/afb0fd43/09.png' />

- `Model` : 模型层，在这里表示 JavaScript 对象
- `View` : 视图层,在这里表示 DOM (HTML 操作的元素)
- `ViewModel` : 连接视图和数据的中间件，Vue.js 就是 MVVM 中的 ViewModel 层的实现者在 MVVM 架构中，是不允许数据和视图直接通信的，只能通过 ViewModel 来通信，而 ViewModel 就是定义了一个 Observer 观察者
  - `ViewModel` 能够观察到数据的变化，并对视图对应的内容进行更新
  - `ViewModel` 能够监听到视图的变化，并能够通知数据发生改变

> Vue.js 就是一个 MVVM 的实现者，他的核心就是实现了 DOM 监听与数据绑定。

# 六、为什么要使用 Vue.js

- 轻量级，体积小是一个重要指标。Vue.js 压缩后有只有 20 多 kb （Angular 压缩后 56kb+，React 压缩后 44kb+）
- 移动优先。更适合移动端，比如移动端的 Touch 事件
  易上手，学习曲线平稳，文档齐全
- 吸取了 Angular（模块化）和 React（虚拟 DOM）的长处，并拥有自己独特的功能，如：计算属性
- 开源，社区活跃度高
  …

# 七、第一个 Vue 程序

## 1 说明

IDEA 可以安装 Vue 的插件！

> 注意：Vue 不支持 IE8 及以下版本，因为 Vue 使用了 IE8 无法模拟的 ECMAScript 5 特性。但它支持所有兼容 ECMAScript 5 的浏览器。

## 2 下载

- 开发版本

  - 包含完整的警告和调试模式：https://vuejs.org/js/vue.js
  - 删除了警告，30.96KB min + gzip：https://vuejs.org/js/vue.min.js

- CDN

```js
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.js"></script>
```

## 3 实例 demo

Vue.js 就是一个 MVVM 的实现者，他的核心就是实现了 **DOM 监听与数据绑定**。

1. 新建一个 HTML 文件

2. 导入 Vue.js

```js
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.min.js"></script>
```

3. 创建一个 Yue 对象实例

```js
<script>
    var vm = new Vue({
        el: "#app",
        // Model: 数据
        data: {
            message: "Hello, Vue!"
        },
    });
</script>
```

> `el:"#app"`：绑定元素的 ID
> `data:{message: "Hello,Vue!"}`：数据对象中有一个名为 message 的属性，并设置了初始值”Hello,Vue!” 4. 将实例绑定到页面元素

```js
<div id="app"> {{ message }} </div>
```

只需要在绑定的元素中使用 `双{}` 将 `Vue` 创建的名为 `message` 属性包裹起来，即可实现数据绑定功能，也就实现了 ViewModel 层所需的效果，是不是和 EL 表达式非常像？

5. 完整代码

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My First Vue</title>
  </head>

  <body>
    <!-- view层 模板 -->
    <div id="app">{{message}}</div>

    <!-- 1.导入Vue.js -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.min.js"></script>
    <script>
      //viewModel 实现与Model双向绑定，动态更新视图数据
      var vm = new Vue({
        el: '#app',
        // Model: 数据
        data: {
          message: 'Hello, Vue!',
        },
      })
    </script>
  </body>
</html>
```

6. viewModel 双向绑定

为了能够更直观的体验 Vue 带来的双向绑定，可以直接在浏览器控制台演示一下：

<img src='https://cdn.jsdelivr.net/gh/samelehub/CDN@latest/article/afb0fd43/10.png' />

> 此时就可以在控制台直接输入 `vm.message` 来修改值，中间是可以省略 `data` 的，在这个操作中，并没有主动操作 `DOM`，就让页面的内容发生了变化，这就是借助了 `Vue` 的 数据绑定 功能实现的。
> `MVVM` 模式中要求 `ViewModel` 层就是使用 `观察者模式` 来实现数据的监听与绑定，以做到数据与视图的快速响应。

# 八、基础语法 & 用法

- 现在数据和 DOM 已经被建立了关联，所有的东西都是响应式的。

- 我们在控制台操作对象的属性，界面可以实时更新。

## 1. v-bind 绑定数据和元素属性

我们可以使用`v-bind`来 绑定数据和元素属性！

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My First Vue</title>
  </head>

  <body>
    <!-- view层 模板 -->
    <div id="app">
      <span v-bind:title="message">
        鼠标悬停几秒钟查看此处动态绑定的提示信息！
      </span>
    </div>

    <!-- 1.导入Vue.js -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.min.js"></script>
    <script>
      //viewModel 实现与Model双向绑定，动态更新视图数据
      var vm = new Vue({
        el: '#app',
        // Model: 数据
        data: {
          message: 'Hello, Vue!',
        },
      })
    </script>
  </body>
</html>
```

控制台：

```js
vm.message = 'wonderful U'
```

## 2. v-if & v-else 条件渲染

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My First Vue</title>
    9
  </head>

  <body>
    <!-- view层 模板 -->
    <div id="app">
      <!-- <h1 v-if="ok">Yes</h1>
        <h1 v-else=>No</h1> -->
      <h1 v-if="type=='A'">A</h1>
      <h1 v-else-if="type=='B'">B</h1>
      <h1 v-else-if="type=='D'">D</h1>
      <h1 v-else>C</h1>
    </div>

    <!-- 1.导入Vue.js -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.min.js"></script>
    <script>
      //viewModel 实现与Model双向绑定，动态更新视图数据
      var vm = new Vue({
        el: '#app',
        // Model: 数据
        data: {
          // ok: true,
          type: 'A',
        },
      })
    </script>
  </body>
</html>
```

控制台：

```js
vm.type = 1
vm.type = 'D'
vm.type = 'E'
vm.type = 'A'
```

## 3. v-for 列表渲染

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My First Vue</title>
  </head>

  <body>
    <!-- view层 模板 -->
    <div id="app">
      <!-- v-for="数组元素 in 源数据数组" -->
      <li v-for="(item, index) in items">
        <!-- 通过遍历变量来访问 -->
        {{item.message}} - {{index}}
      </li>
    </div>

    <!-- 1.导入Vue.js -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.min.js"></script>
    <script>
      //viewModel 实现与Model双向绑定，动态更新视图数据
      var vm = new Vue({
        el: '#app',
        // Model: 数据
        data: {
          items: [{ message: 'Melody' }, { message: 'Jerry' }],
        },
      })
    </script>
  </body>
</html>
```

> 其中 `items` 是源数据数组，而 `item` 则是被迭代的数组元素的**别名**。

## 4. v-on 绑定事件

可以用 `v-on` 指令监听 DOM 事件，并在触发时运行一些 JavaScript 代码。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>My First Vue</title>
  </head>

  <body>
    <!-- view层 模板 -->
    <div id="app">
      <button v-on:click="sayHi">点我</button>
      <p>The button above has been clicked {{counter}} times.</p>
    </div>

    <!-- 1.导入Vue.js -->
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.21/dist/vue.min.js"></script>
    <script>
      //viewModel 实现与Model双向绑定，动态更新视图数据
      var vm = new Vue({
        el: '#app',
        // Model: 数据
        data: {
          counter: 0,
          message: '你点我干啥呢？我叫你点，你就点啊？',
        },
        methods: {
          //方法必须定义在Vue的methods对象中, v-on绑定事件
          sayHi: function (event) {
            // 这个this指的是当前的Vue实例对象
            ;(this.counter += 1), alert(this.message)
          },
        },
      })
    </script>
  </body>
</html>
```

> 事件有 `Vue` 的事件、和前端页面本身的一些事件！
> 这里的 `click` 是 vue 的事件，可以绑定到 Vue 中的 `methods` 中的方法事件！
> <a href="https://cn.vuejs.org/v2/guide/events.html">https://cn.vuejs.org/v2/guide/events.html</a>
