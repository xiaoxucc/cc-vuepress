---
lang: zh-CN
title: Node
description: 记录Node的学习
date: 2022/11/11
---
# hello [Node](https://nodejs.org/zh-cn/)

想深入学习Node的想法是来源于想做个 ***即时通讯系统*** ，后端技术选型 [Node.js](https://nodejs.org/zh-cn/) 是最符合的，毕竟会 [JavaScript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)，[Node.js](https://nodejs.org/zh-cn/)那不是有手就行？？？~~我只想卷死各位，或者被各位卷死~~

<!-- 学习路线来源[哔哩哔哩](https://www.bilibili.com/video/BV1a34y167AZ/)

学习开始时间：**2022/11/11**

学习结束时间：**2022/11/xx** -->

## 什么是Node

[Node.js](https://nodejs.org/zh-cn/)发布于2009年5月，由Ryan Dahl开发，是一个基于 **Chrome V8** 引擎的 ***JavaScript运行环境*** ，使用了一个事件驱动、非阻塞式I/O模型，让JavaScript 运行在服务端的开发平台，它让JavaScript成为与PHP、Python、Perl、Ruby等服务端语言平起平坐的脚本语言。

###### **浏览器** 是JavaScript的 ***前端*** 运行环境
###### **Node** 是JavaScript的 ***后端*** 运行环境，Node.js中无法调用 DOM，BOM 等浏览器内置API


### Node可以做什么

[Node.js](https://nodejs.org/zh-cn/) 作为一个 JavaScript 的运行环境，仅仅提供了基础功能和API，然而，基于 Node.js 提供的这些基础功能，很多强大的工具和框架如雨后春笋，层出不穷，所以学会了 [Node.js](https://nodejs.org/zh-cn/) ,可以让我们前端程序员胜任更多的工作和岗位！

+ 基于 [Express](http://expressjs.com/) 框架，可以快速构建Web应用
+ 基于 [Electron](https://www.electronjs.org/) 框架，可以构建跨平台的桌面应用
+ 基于 [restify](http://restify.com/) 框架，可以快速构建API接口项目
+ 读写操作 数据库，创建实用的命令行工具辅助前端开发...

### 学习路线

JavaScript 基础语法 + Node.js 内置API模块(fs，path，http...) + 第三方 API 模块(express，mysql)


### Node安装

[Node.js](https://nodejs.org/zh-cn/) 官网下载安装 <u>知识普及：LTS：Long Time Support：长期维护</u>

[Node安装教程](https://www.runoob.com/nodejs/nodejs-install-setup.html)

检查安装完成： win + R，输入 cmd 回车打开终端> 输入 node -v 回车 查看版本号，没有则安装失败

###### 拓展知识：什么是终端

终端（英文：Terminal）是专门为开发人员设计的，用于实现人机交互的一种方式，我们有必要识记一些常用的终端命令来辅助我们更好的操作和使用计算机

终端中的快捷键
1. 使用 ⬆ ⬇（方向键）,可以快速切换 上一次 下一次 执行的命令
2. 使用 tab 键，可以快速补全路径
3. 使用 esc 键，可以快速清除已经输入的命令
4. 使用 cls 命令，可以清空终端信息

### 如何在 Node.js 环境中执行 JavaScript 代码

1. 打开终端
2. 输入 node 要执行的js文件路径 eg:`node index.js` *后缀.js可不写*：`node index`


## fs 文件系统模块

### 什么是 fs 文件系统模块

fs 模块是 Node.js 官方提供的用来 **操作文件** 的模块，它提供了一系列的方法和属性，用来满足用户对文件的操作需求

如果要在 JavaScript 代码中，使用 fs模块 来操作文件，则需要使用如下的方式先导入它

`const fs = require('fs')`

#### `fs.readFile()` 方法，用来读取指定文件中的内容

```js
const fs = require('fs')
fs.readFile(path[, options], callback)
```
参数解读
- 参数1：**必选**参数，字符串，表示文件的路径
- 参数2：可选参数，表示以什么编码格式来读取文件，默认utf-8
- 参数3：**必选**参数，文件读取完成后，通过回调函数拿到读取的结果

示例代码
```js
const fs = require('fs')
// 创建对应文件夹以及文件并写入内容：测试fs.readFile()
fs.readFile('./files/readFile.txt', 'utf-8', function(err, res) {
  // 读取成功：err 返回 null，res 返回文件内容
  // 反之 err 返回 错误对象，res 返回 undefined
  console.log({err});
  console.log({res});
})
```

输出
```js
{ err: null }
{ res: '测试fs.readFile()' }
```


###### 优化：判断文件读取是否成功，可以根据 err 对象是否为 null 判断
```js
const fs = require('fs')
fs.readFile('./files/readFile.txt', 'utf-8', function(err, res) {
  if (err) {
    return console.log('文件读取失败：'+ err);
  }
  console.log('文件读取成功：'+ res);
})
```


###### `fs.writeFile()` 方法，用来向指定文件中写入内容

###### 此方法只能用来创建文件，不可以用来创建路径也就是文件夹
###### 重复调用此方法写入同一个文件，新写入的内容会覆盖之前的旧内容
```js
const fs = require('fs')
fs.writeFile(file, data[, options], callback)
```
参数解读
- 参数1：**必选**参数，需要指定一个文件路径的字符串，表示文件的存放路径
- 参数2：**必选**参数，表示要写入的内容
- 参数3：可选参数，表示以什么编码格式来写入文件，默认utf-8
- 参数4：**必选**参数，文件写入完成后的回调

示例代码

```js
const fs = require('fs')
// 创建对应文件夹以及文件
fs.writeFile('./files/writeFile.txt', 'Hello Node.js', 'utf-8', function(err) {
  // 写入成功，err 返回 null，反之返回 错误对象
  console.log({err});
})
```

输出
```js
{ err: null }
```

###### 优化：判断文件写入是否成功，可以根据 err 对象是否为 null 判断

```js
fs.writeFile('./files/writeFile.txt', 'Hello Node.js', 'utf-8', function(err) {
  if (err) {
    return console.log('文件写入失败：' + err);
  }
  console.log('文件写入成功');
})
```


###### 小练习：整理成绩
`小红=99 小白=100 小黄=63 小黑子=50 小花=84`

整理为
```js
[
  { name: '小红', score: '99' },
  { name: '小白', score: '100' },
  { name: '小黄', score: '63' },
  { name: '小黑子', score: '50' },
  { name: '小花', score: '84' }
]
小红:99
小白:100
小黄:63
小黑子:50
小花:84
```

代码
```js
fs.readFile('./files/grade.txt', 'utf-8', function(err, res) {
  if (err) {
    return console.log('读取文件失败', err);
  }
  const arrOld = res.split(' ')
  const arrNew = []
  const arrNew2 = []
  arrOld.forEach(item => {
    arrNew2.push(item.replace('=', ':'))
    arrNew.push({
      name: item.split('=')[0],
      score: item.split('=')[1],
    })
  })
  const newStr = arrNew2.join('\r\n')

  fs.writeFile('./files/grade-ok.txt', newStr, function(err) {
    if (err) {
      return console.log('写入文件失败：' + err);
    }
    console.log('写入文件成功');
  })
})
```

###### fs 模块 - 路径动态拼接的问题

在使用 fs 模块操作文件时，如果提供的操作路径是 **./** 或者 **../** 开头的 **相对路径** 时，很容易出现路径动态拼接错误的问题

原因：在代码运行的时候，**会以执行 node 命令时所处的目录**，动态拼接出被操作文件的完整路径

解决：提供 **绝对路径**

完美解决：路径参数由 `'./文件相对路径'` 变更为：`__dirname + '/文件相对路径'`

**__dirname：表示当前文件所处的目录**


## path 路径模块

### 什么是 path 路径模块

path 模块是 Node.js 官方提供的用来 **处理路径** 的模块，它提供了一系列的方法和属性，用来满足用户对路径的操作需求

如果要在 JavaScript 代码中，使用 path模块 来操作文件，则需要使用如下的方式先导入它

`const path = require('path')`

#### `path.join()` 方法，用来将多个路径片段拼接成一个完整的路径字符串

```js
const path = require('path')
path.join([...paths])
```
参数解读
- ...paths string 路径片段的序列
- 返回值 string

#### `path.basename()` 方法，用来从路径字符串中将文件名解析出来

```js
const path = require('path')
path.basename(path, [, ext])
```
参数解读
- path string 必选参数，表示一个路径的字符串
- ext string 可选参数，表示文件拓展名
- 返回值 string 表示路径中的最后一部分

#### `path.extname()` 方法，用来从路径字符串中将文件名的 **拓展名** 解析出来

```js
const path = require('path')
path.extname(path)
```
参数解读
- path string 必选参数，表示一个路径的字符串
- 返回值 string 返回得到的拓展名字符串


## http 模块

### 什么是 http 模块
**http** 模块是 **Node.js** 官方提供的，用来 **创建web服务器** 的模块，通过http模块提供的 `http.createServer()` 方法，
就能方便的把一台普通的电脑变成一台 **Web** 服务器，从而对外提供 **Web 资源服务！**

### 服务器相关概念
###### IP 地址
IP 地址 就是互联网上每台计算机的唯一地址，因此 IP 地址 具有唯一性，如果把 “个人电脑” 比作 “一台电话” ，那么 “IP 地址” 就相当于 “电话号码”，
只有在知道对方IP地址的前提下，才能与对应的电脑之间进行数据通信
###### 域名 和 域名服务器
尽管IP地址能够唯一的标记网络上的计算机，但IP地址是一长串的数字，不直观也不好记，于是人们发明了一套字符型的地址方案，也就是所谓的
域名（Domain Name）地址

IP地址 和 域名 是一一对应的关系，这份关系存放在一种叫做 域名服务器（DNS，Domain name server）的电脑中，使用者只需要通过记好的域名
访问对应的服务器就可以了，对应的转换工作由域名服务器实现，因此，域名服务器就是提供 IP地址 和 域名 之间转换服务的服务器

***开发测试期间，我们电脑的*** `127.0.0.1` ***对应的域名是*** `localhost`
###### 端口号
计算机中的端口号 ，就好像是生活中的门牌号一样，通过门牌号，外卖小哥就可以在整栋大楼众多的房间中，准确的把外卖送到你的手上

同样的道理，在一台电脑中，可以运行成千上万个 web 服务，每个 web服务 都对应一个唯一的端口号，客户端发过来的网络请求，通过端口号，可以准确
的交给对应的 web服务 进行处理

###### 一个端口号不能被多个web服务占用，在实际应用中，URL 中的 `80` 端口可以被省略
eg: `127.0.0.1:80` -> `127.0.0.1`

### 创建基本的 web 服务器
1. 导入 http 模块
```js
const http = require('http')
```
2. 创建 web 服务器实例
```js
const server = http.createServer()
```
3. 为服务器示例绑定 `request` 事件，监听客户端的请求
```js
// 使用服务器实例的 .on 方法，为服务器绑定一个 request 事件
server.on('request', (req, res) => {
  // 只要客户端来请求我们的服务器，就会触发 request 事件，从而调用这个事件的处理函数
  console.log('Someone visit our web server.')
  // req 是请求对象，它包含了与客户端的数据和属性
  // 例如：req.url 是客户端请求的 URL 地址
  // req.method 是客户端的 method 请求类型
  const reqStr = `你的 request URL is ${req.url}, and request method is ${req.method}`
  console.log('reqStr:' + reqStr);
  // res 是响应对象，它包含了与服务器相关的数据和属性
  // 例如：res.end() 是向客户端发送指定的内容，并结束这次请求的处理过程
  // 解决中文乱码
  res.setHeader('Content-type', 'text/html; charset=utf-8')
  res.end(reqStr)
})
```

**相关知识点：模板字符串:** [${}](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Template_literals)

4. 启动服务器，调用 server.listen (端口号，cb回调)方法，即可启动服务器
```js
// 调用 server.listen (端口号，cb回调)方法，即可启动服务器
server.listen(8080, () => {
  console.log('http server running at http://127.0.0.1:8080')
})
```
5. 根据不同的 url 响应不同的 内容
- 获取请求地址的 url
- 设置默认返回内容
- 设置对应返回的内容
- **设置响应头，防止中文乱码**
- res.end()发送内容响应给客户端

**此处报错可能原因：端口被占用，换一个就可以了**


## 模块化

- 模块化的好处
- CommonJS规定了那些内容
- Node.js中模块的三大分类是什么
- 使用 npm 管理包
- 什么是规范的包结构
- 模块的加载机制

### 什么是模块化
模块化是指解决一个复杂问题时，自顶向下逐层把系统划分成若干模块的过程，对于整个系统来说，模块是可组合，分解和更换的单元
- 提高了代码的 **复用性**
- 提高了代码的 **可维护性**
- 可以实现 **按需加载**

**模块化规范** 就是对代码进行模块化拆分和组合时需要遵守的规则

### Node.js中模块的分类
- **内置模块**（官方提供的，例如：fs，path，http等）
- **自定义模块**（用户开发的每个 .js文件，就是自定义模块）
- **第三方模块**（别人开发的，使用前需要先下载）
###### 加载模块：使用 `require()` 方法，加载所需要的上述模块
```js
// 内置模块
const fs = require('fs')
// 自定义模块
const myfs = require('./myfs')
// 第三方模块
const moment = require('moment')
```
**模块作用域**
- 防止全局变量污染

**向外共享模块作用域中的成员**
- module 对象：每个 .js 自定义模块中都有一个module对象，它里面存储了和当前模块有关的信息
- 在自定义模块中，可以使用 `module.exports` 对象把模块里的成员共享出去给外界使用

**在外界使用 `require` 导入自定义模块的时候，默认得到的是该模块的 `module.exports` 所指向的对象**
- 在导出的时候，由于 `module.exports` 写起来有点复杂，可以简写成 `exports`，不过最终还是以 `module.exports` 指向的对象为准
```js
exports === module.exports // true
```
**exports 和 module.exports的使用误区**
### npm 与 包
### 模块的加载机制