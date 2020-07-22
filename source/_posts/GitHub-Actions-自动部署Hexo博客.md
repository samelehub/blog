---
title: GitHub Actions自动部署Hexo博客
tags:
  - hexo
  - github
date: 2020-07-22 22:40:36
---

> GitHub Actions 由 GitHub 官方推出的工作流工具。典型的应用场景应该是 CI/CD，类似 Travis 的用法。

## 开始准备

---

### 配置本地和远程仓库

为了方便下面步骤的进行，我们进行这样的配置：

- 备份博客源文件
- 在本地仓库创建 hexo 分支

```sh
# 克隆项目到本地
git clone https://github.com/xxx/xxx.github.io.git
# 创建并切换到 hexo 分支
git checkout -b hexo
```

- 在 hexo 分支保存博客项目的源代码

  - 将 hexo 分支下的文件除 .git 目录外全部删除
  - 将博客源码文件拷贝到该目录下，并提交 Commit 到 hexo 分支。

- 将本地 hexo 分支内容提交到 GitHub 远程仓库

```sh
# 源码文件拷贝完后commit到 hexo 分支
git add .
git commit -m ' '
# 提交本地 hexo 分支到远程仓库的 hexo 分支
git push origin hexo:hexo
```

现在博客源码和静态文件（即 public 文件夹下的内容）就存放在一个 github 项目中的两个独立分支中了。

|  分支  | 说明           |
| :----: | :------------- |
|  hexo  | 原始数据及配置 |
| master | 静态页面       |

## 项目设置

---

### 生成密钥对

```sh
ssh-keygen -t rsa -b 4096 -C "your_email@example.com" -N "" -f deploy_key
```

会生成 `deploy_key`私钥 和 `deploy_key.pub`公钥两个文件。

### 添加公钥

项目页 --> `Settings` --> `Deploy keys` --> `Add deploy key`

将`deploy_key.pub`公钥内容复制上去，勾选：Allow write access

### 添加加密环境变量

项目页 --> `Settings` --> `Secrets` --> `New secret`

> 环境变量名可以任意命名，但要和 Actions 里的设定\$对应

|  环境变量  | 说明                                    |
| :--------: | :-------------------------------------- |
| DEPLOY_KEY | 发布 key 私钥，`deploy_key`私钥文件内容 |
|   EMAIL    | 发布用户邮箱账号                        |
|    NAME    | 发布用户名                              |

### 修改`_config.yml`

```yaml
# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
  type: git
  repo: git@github.com:samelehub/blog.git
  branch: master
  message: "Github CI Auto Builder at {{ now('YYYY-MM-DD HH:mm:ss Z') }}"
```

> `repo`链接必须使用 ssh 格式

## 编写 Action 脚本

---

> 此处使用[成熟方案](https://github.com/yrpang/github-actions-hexo)

在根目录下创建 `GitHub Actions workflow` 文件，`.github/workflows/hexo.yml` 然后复制下面代码

```yaml
name: Hexo CICD

on: # 监视 `hexo`分支
  push:
    branches:
      - hexo

jobs:
  build:
    runs-on: ubuntu-latest
    if: "!contains(github.event.head_commit.message, '[ci skip]')"
    steps:
      - name: Checkout
        uses: actions/checkout@v1
        with:
          submodules: true
      - name: Cache node modules
        uses: actions/cache@v1
        with:
          path: node_modules
          key: ${{runner.OS}}-${{hashFiles('**/package-lock.json')}}
      - uses: yrpang/github-actions-hexo@master
        with:
          deploykey: ${{secrets.DEPLOY_KEY}}
          username: ${{secrets.NAME}}
          email: ${{secrets.EMAIL}}
```

> 注意:
>
> 1. 根目录下`.gitignore`中需要移除`package-lock.json`
> 2. 静态页面是强制推送，覆盖历史数据

## 自动部署

---

经过以上步骤的配置，发布博客的命令就变更为：

```sh
# 切换到 hexo 分支
git checkout hexo

# 提交新博文
git add .
git commit -m "Publish new post."

# 推送到远程仓库
git push
```

## 小结

---

这样，在每次我们将博客的源文件通过 git 推送到 GitHub 的 hexo 分支上后，`GitHub Actions` 就会自动检测并主动开始构建我们的博客静态文件，并自动部署到 GitHub Pages 中。

`GitHub Actions`将自动监视`hexo`分支，并对任何除带`[ci skip]`的 push 触发执行。

并且除了方便部署，我们同时还在 GitHub 上面成功开启了我们博客源代码的备份，一箭双雕。

## 参考

---

- https://github.com/yrpang/github-actions-hexo
- https://hdj.me/github-actions-hexo-cicd/
- https://github.com/maboloshi/Blog
- https://easyhexo.com/
