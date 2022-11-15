---
lang: zh-CN
title: Git
description: 记录一下零零碎碎的事情
---
# hello Git

## Git 安装

安装 [Git](https://git-scm.com/)

## Git 命令
###### 设置用户签名，Git首次安装必须要设置用户签名，负责无法提交代码

```js
git config --global user.name 用户名
git config --global user.email 邮箱
```

签名的作用是区分不同操作者的身份，用户的签名信息在每一个版本的提交信息能够查看，以此确认本次提交是谁做的，设置完成可在 `C:\Users\Administrator\.gitconfig` 下查看

**设置用户签名和之后登录 Github （或者其他代码托管中心）的账号没有任何关系**

```js
git init    // 初始化本地库
git add 文件名    git add *   //添加暂存区    单个添加    全部添加
git commit -m '日志信息'    // 提交本地库
```

删除暂存区 `git rm --cached 文件名` `git rm -r --cached "文件路径"`

查看日志信息 `git reflog` `git log`

查看本地库状态 `git status`

版本穿梭 `git reset --hard 版本号`，版本号来源：`git reflog`

## Git 分支
```js
git branch 分支名 // 创建分支
git branch -v   // 查看分支
git checkout 分支名   // 切换分支
git merge 分支名    // 把指定的分支合并到当前分支上
```

## Git 团队协作
全球最大同性交友网站：[Github](https://github.com/)

1. 创建远程仓库
2. 将本地仓库与远程仓库关联
3. 将本地代码推送至远程仓库
```js
// 卡的话就不要用https，用ssh
git remote -v   // 查看当前所有的远程地址别名
git remote add 别名 远程地址   // 给远程仓库地址起别名
git push 别名 分支   // 推送本地分支上的内容到远程仓库
git clone 远程地址   // 将远程仓库的内容克隆到本地
git pull 远程仓库地址别名 远程分支名   // 将远程仓库的对于分支最新内容拉下来后与当前本地分支直接合并
```

## Git clone
```js
git clone 远程地址
```

## SSH 免密登录
使用 `ssh-keygen -t rsa -C xutancong@163.com`会在 `C:\Users\Administrator` 会生成一个 `.ssh` 文件夹

在github右上角头像找到 `settings`，然后点击 `SSH and GPG keys`，再点击 `New SSH key`，将刚刚生成的文件夹里的pub文件内容添加进去