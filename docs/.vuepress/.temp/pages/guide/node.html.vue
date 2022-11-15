<template><div><h1 id="hello-node" tabindex="-1"><a class="header-anchor" href="#hello-node" aria-hidden="true">#</a> hello <a href="https://nodejs.org/zh-cn/" target="_blank" rel="noopener noreferrer">Node<ExternalLinkIcon/></a></h1>
<p>想深入学习Node的想法是来源于想做个 <em><strong>即时通讯系统</strong></em> ，后端技术选型 <a href="https://nodejs.org/zh-cn/" target="_blank" rel="noopener noreferrer">Node.js<ExternalLinkIcon/></a> 是最符合的，毕竟会 <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">JavaScript<ExternalLinkIcon/></a>，<a href="https://nodejs.org/zh-cn/" target="_blank" rel="noopener noreferrer">Node.js<ExternalLinkIcon/></a>那不是有手就行？？？<s>我只想卷死各位，或者被各位卷死</s></p>
<!-- 学习路线来源[哔哩哔哩](https://www.bilibili.com/video/BV1a34y167AZ/)

学习开始时间：**2022/11/11**

学习结束时间：**2022/11/xx** -->
<h2 id="什么是node" tabindex="-1"><a class="header-anchor" href="#什么是node" aria-hidden="true">#</a> 什么是Node</h2>
<p><a href="https://nodejs.org/zh-cn/" target="_blank" rel="noopener noreferrer">Node.js<ExternalLinkIcon/></a>发布于2009年5月，由Ryan Dahl开发，是一个基于 <strong>Chrome V8</strong> 引擎的 <em><strong>JavaScript运行环境</strong></em> ，使用了一个事件驱动、非阻塞式I/O模型，让JavaScript 运行在服务端的开发平台，它让JavaScript成为与PHP、Python、Perl、Ruby等服务端语言平起平坐的脚本语言。</p>
<h6 id="浏览器-是javascript的-前端-运行环境" tabindex="-1"><a class="header-anchor" href="#浏览器-是javascript的-前端-运行环境" aria-hidden="true">#</a> <strong>浏览器</strong> 是JavaScript的 <em><strong>前端</strong></em> 运行环境</h6>
<h6 id="node-是javascript的-后端-运行环境-node-js中无法调用-dom-bom-等浏览器内置api" tabindex="-1"><a class="header-anchor" href="#node-是javascript的-后端-运行环境-node-js中无法调用-dom-bom-等浏览器内置api" aria-hidden="true">#</a> <strong>Node</strong> 是JavaScript的 <em><strong>后端</strong></em> 运行环境，Node.js中无法调用 DOM，BOM 等浏览器内置API</h6>
<h3 id="node可以做什么" tabindex="-1"><a class="header-anchor" href="#node可以做什么" aria-hidden="true">#</a> Node可以做什么</h3>
<p><a href="https://nodejs.org/zh-cn/" target="_blank" rel="noopener noreferrer">Node.js<ExternalLinkIcon/></a> 作为一个 JavaScript 的运行环境，仅仅提供了基础功能和API，然而，基于 Node.js 提供的这些基础功能，很多强大的工具和框架如雨后春笋，层出不穷，所以学会了 <a href="https://nodejs.org/zh-cn/" target="_blank" rel="noopener noreferrer">Node.js<ExternalLinkIcon/></a> ,可以让我们前端程序员胜任更多的工作和岗位！</p>
<ul>
<li>基于 <a href="http://expressjs.com/" target="_blank" rel="noopener noreferrer">Express<ExternalLinkIcon/></a> 框架，可以快速构建Web应用</li>
<li>基于 <a href="https://www.electronjs.org/" target="_blank" rel="noopener noreferrer">Electron<ExternalLinkIcon/></a> 框架，可以构建跨平台的桌面应用</li>
<li>基于 <a href="http://restify.com/" target="_blank" rel="noopener noreferrer">restify<ExternalLinkIcon/></a> 框架，可以快速构建API接口项目</li>
<li>读写操作 数据库，创建实用的命令行工具辅助前端开发...</li>
</ul>
<h3 id="学习路线" tabindex="-1"><a class="header-anchor" href="#学习路线" aria-hidden="true">#</a> 学习路线</h3>
<p>JavaScript 基础语法 + Node.js 内置API模块(fs，path，http...) + 第三方 API 模块(express，mysql)</p>
<h3 id="node安装" tabindex="-1"><a class="header-anchor" href="#node安装" aria-hidden="true">#</a> Node安装</h3>
<p><a href="https://nodejs.org/zh-cn/" target="_blank" rel="noopener noreferrer">Node.js<ExternalLinkIcon/></a> 官网下载安装 <u>知识普及：LTS：Long Time Support：长期维护</u></p>
<p><a href="https://www.runoob.com/nodejs/nodejs-install-setup.html" target="_blank" rel="noopener noreferrer">Node安装教程<ExternalLinkIcon/></a></p>
<p>检查安装完成： win + R，输入 cmd 回车打开终端&gt; 输入 node -v 回车 查看版本号，没有则安装失败</p>
<h6 id="拓展知识-什么是终端" tabindex="-1"><a class="header-anchor" href="#拓展知识-什么是终端" aria-hidden="true">#</a> 拓展知识：什么是终端</h6>
<p>终端（英文：Terminal）是专门为开发人员设计的，用于实现人机交互的一种方式，我们有必要识记一些常用的终端命令来辅助我们更好的操作和使用计算机</p>
<p>终端中的快捷键</p>
<ol>
<li>使用 ⬆ ⬇（方向键）,可以快速切换 上一次 下一次 执行的命令</li>
<li>使用 tab 键，可以快速补全路径</li>
<li>使用 esc 键，可以快速清除已经输入的命令</li>
<li>使用 cls 命令，可以清空终端信息</li>
</ol>
<h3 id="如何在-node-js-环境中执行-javascript-代码" tabindex="-1"><a class="header-anchor" href="#如何在-node-js-环境中执行-javascript-代码" aria-hidden="true">#</a> 如何在 Node.js 环境中执行 JavaScript 代码</h3>
<ol>
<li>打开终端</li>
<li>输入 node 要执行的js文件路径 eg:<code v-pre>node index.js</code> <em>后缀.js可不写</em>：<code v-pre>node index</code></li>
</ol>
<h2 id="fs-文件系统模块" tabindex="-1"><a class="header-anchor" href="#fs-文件系统模块" aria-hidden="true">#</a> fs 文件系统模块</h2>
<h3 id="什么是-fs-文件系统模块" tabindex="-1"><a class="header-anchor" href="#什么是-fs-文件系统模块" aria-hidden="true">#</a> 什么是 fs 文件系统模块</h3>
<p>fs 模块是 Node.js 官方提供的用来 <strong>操作文件</strong> 的模块，它提供了一系列的方法和属性，用来满足用户对文件的操作需求</p>
<p>如果要在 JavaScript 代码中，使用 fs模块 来操作文件，则需要使用如下的方式先导入它</p>
<p><code v-pre>const fs = require('fs')</code></p>
<h4 id="fs-readfile-方法-用来读取指定文件中的内容" tabindex="-1"><a class="header-anchor" href="#fs-readfile-方法-用来读取指定文件中的内容" aria-hidden="true">#</a> <code v-pre>fs.readFile()</code> 方法，用来读取指定文件中的内容</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span>
fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span>path<span class="token punctuation">[</span><span class="token punctuation">,</span> options<span class="token punctuation">]</span><span class="token punctuation">,</span> callback<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>参数解读</p>
<ul>
<li>参数1：<strong>必选</strong>参数，字符串，表示文件的路径</li>
<li>参数2：可选参数，表示以什么编码格式来读取文件，默认utf-8</li>
<li>参数3：<strong>必选</strong>参数，文件读取完成后，通过回调函数拿到读取的结果</li>
</ul>
<p>示例代码</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span>
<span class="token comment">// 创建对应文件夹以及文件并写入内容：测试fs.readFile()</span>
fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">'./files/readFile.txt'</span><span class="token punctuation">,</span> <span class="token string">'utf-8'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 读取成功：err 返回 null，res 返回文件内容</span>
  <span class="token comment">// 反之 err 返回 错误对象，res 返回 undefined</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span>err<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span>res<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span> <span class="token literal-property property">err</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token punctuation">}</span>
<span class="token punctuation">{</span> <span class="token literal-property property">res</span><span class="token operator">:</span> <span class="token string">'测试fs.readFile()'</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="优化-判断文件读取是否成功-可以根据-err-对象是否为-null-判断" tabindex="-1"><a class="header-anchor" href="#优化-判断文件读取是否成功-可以根据-err-对象是否为-null-判断" aria-hidden="true">#</a> 优化：判断文件读取是否成功，可以根据 err 对象是否为 null 判断</h6>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span>
fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">'./files/readFile.txt'</span><span class="token punctuation">,</span> <span class="token string">'utf-8'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'文件读取失败：'</span><span class="token operator">+</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'文件读取成功：'</span><span class="token operator">+</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="fs-writefile-方法-用来向指定文件中写入内容" tabindex="-1"><a class="header-anchor" href="#fs-writefile-方法-用来向指定文件中写入内容" aria-hidden="true">#</a> <code v-pre>fs.writeFile()</code> 方法，用来向指定文件中写入内容</h6>
<h6 id="此方法只能用来创建文件-不可以用来创建路径也就是文件夹" tabindex="-1"><a class="header-anchor" href="#此方法只能用来创建文件-不可以用来创建路径也就是文件夹" aria-hidden="true">#</a> 此方法只能用来创建文件，不可以用来创建路径也就是文件夹</h6>
<h6 id="重复调用此方法写入同一个文件-新写入的内容会覆盖之前的旧内容" tabindex="-1"><a class="header-anchor" href="#重复调用此方法写入同一个文件-新写入的内容会覆盖之前的旧内容" aria-hidden="true">#</a> 重复调用此方法写入同一个文件，新写入的内容会覆盖之前的旧内容</h6>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span>
fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> data<span class="token punctuation">[</span><span class="token punctuation">,</span> options<span class="token punctuation">]</span><span class="token punctuation">,</span> callback<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>参数解读</p>
<ul>
<li>参数1：<strong>必选</strong>参数，需要指定一个文件路径的字符串，表示文件的存放路径</li>
<li>参数2：<strong>必选</strong>参数，表示要写入的内容</li>
<li>参数3：可选参数，表示以什么编码格式来写入文件，默认utf-8</li>
<li>参数4：<strong>必选</strong>参数，文件写入完成后的回调</li>
</ul>
<p>示例代码</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span>
<span class="token comment">// 创建对应文件夹以及文件</span>
fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span><span class="token string">'./files/writeFile.txt'</span><span class="token punctuation">,</span> <span class="token string">'Hello Node.js'</span><span class="token punctuation">,</span> <span class="token string">'utf-8'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 写入成功，err 返回 null，反之返回 错误对象</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token punctuation">{</span>err<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">{</span> <span class="token literal-property property">err</span><span class="token operator">:</span> <span class="token keyword">null</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h6 id="优化-判断文件写入是否成功-可以根据-err-对象是否为-null-判断" tabindex="-1"><a class="header-anchor" href="#优化-判断文件写入是否成功-可以根据-err-对象是否为-null-判断" aria-hidden="true">#</a> 优化：判断文件写入是否成功，可以根据 err 对象是否为 null 判断</h6>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span><span class="token string">'./files/writeFile.txt'</span><span class="token punctuation">,</span> <span class="token string">'Hello Node.js'</span><span class="token punctuation">,</span> <span class="token string">'utf-8'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'文件写入失败：'</span> <span class="token operator">+</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'文件写入成功'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="小练习-整理成绩" tabindex="-1"><a class="header-anchor" href="#小练习-整理成绩" aria-hidden="true">#</a> 小练习：整理成绩</h6>
<p><code v-pre>小红=99 小白=100 小黄=63 小黑子=50 小花=84</code></p>
<p>整理为</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'小红'</span><span class="token punctuation">,</span> <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token string">'99'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'小白'</span><span class="token punctuation">,</span> <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token string">'100'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'小黄'</span><span class="token punctuation">,</span> <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token string">'63'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'小黑子'</span><span class="token punctuation">,</span> <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token string">'50'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'小花'</span><span class="token punctuation">,</span> <span class="token literal-property property">score</span><span class="token operator">:</span> <span class="token string">'84'</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
<span class="token literal-property property">小红</span><span class="token operator">:</span><span class="token number">99</span>
<span class="token literal-property property">小白</span><span class="token operator">:</span><span class="token number">100</span>
<span class="token literal-property property">小黄</span><span class="token operator">:</span><span class="token number">63</span>
<span class="token literal-property property">小黑子</span><span class="token operator">:</span><span class="token number">50</span>
<span class="token literal-property property">小花</span><span class="token operator">:</span><span class="token number">84</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">'./files/grade.txt'</span><span class="token punctuation">,</span> <span class="token string">'utf-8'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'读取文件失败'</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">const</span> arrOld <span class="token operator">=</span> res<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">' '</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> arrNew <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token keyword">const</span> arrNew2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  arrOld<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    arrNew2<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">'='</span><span class="token punctuation">,</span> <span class="token string">':'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    arrNew<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">name</span><span class="token operator">:</span> item<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'='</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token literal-property property">score</span><span class="token operator">:</span> item<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">'='</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> newStr <span class="token operator">=</span> arrNew2<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'\r\n'</span><span class="token punctuation">)</span>

  fs<span class="token punctuation">.</span><span class="token function">writeFile</span><span class="token punctuation">(</span><span class="token string">'./files/grade-ok.txt'</span><span class="token punctuation">,</span> newStr<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'写入文件失败：'</span> <span class="token operator">+</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'写入文件成功'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="fs-模块-路径动态拼接的问题" tabindex="-1"><a class="header-anchor" href="#fs-模块-路径动态拼接的问题" aria-hidden="true">#</a> fs 模块 - 路径动态拼接的问题</h6>
<p>在使用 fs 模块操作文件时，如果提供的操作路径是 <strong>./</strong> 或者 <strong>../</strong> 开头的 <strong>相对路径</strong> 时，很容易出现路径动态拼接错误的问题</p>
<p>原因：在代码运行的时候，<strong>会以执行 node 命令时所处的目录</strong>，动态拼接出被操作文件的完整路径</p>
<p>解决：提供 <strong>绝对路径</strong></p>
<p>完美解决：路径参数由 <code v-pre>'./文件相对路径'</code> 变更为：<code v-pre>__dirname + '/文件相对路径'</code></p>
<p><strong>__dirname：表示当前文件所处的目录</strong></p>
<h2 id="path-路径模块" tabindex="-1"><a class="header-anchor" href="#path-路径模块" aria-hidden="true">#</a> path 路径模块</h2>
<h3 id="什么是-path-路径模块" tabindex="-1"><a class="header-anchor" href="#什么是-path-路径模块" aria-hidden="true">#</a> 什么是 path 路径模块</h3>
<p>path 模块是 Node.js 官方提供的用来 <strong>处理路径</strong> 的模块，它提供了一系列的方法和属性，用来满足用户对路径的操作需求</p>
<p>如果要在 JavaScript 代码中，使用 path模块 来操作文件，则需要使用如下的方式先导入它</p>
<p><code v-pre>const path = require('path')</code></p>
<h4 id="path-join-方法-用来将多个路径片段拼接成一个完整的路径字符串" tabindex="-1"><a class="header-anchor" href="#path-join-方法-用来将多个路径片段拼接成一个完整的路径字符串" aria-hidden="true">#</a> <code v-pre>path.join()</code> 方法，用来将多个路径片段拼接成一个完整的路径字符串</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span>
path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>paths<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>参数解读</p>
<ul>
<li>...paths string 路径片段的序列</li>
<li>返回值 string</li>
</ul>
<h4 id="path-basename-方法-用来从路径字符串中将文件名解析出来" tabindex="-1"><a class="header-anchor" href="#path-basename-方法-用来从路径字符串中将文件名解析出来" aria-hidden="true">#</a> <code v-pre>path.basename()</code> 方法，用来从路径字符串中将文件名解析出来</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span>
path<span class="token punctuation">.</span><span class="token function">basename</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> ext<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>参数解读</p>
<ul>
<li>path string 必选参数，表示一个路径的字符串</li>
<li>ext string 可选参数，表示文件拓展名</li>
<li>返回值 string 表示路径中的最后一部分</li>
</ul>
<h4 id="path-extname-方法-用来从路径字符串中将文件名的-拓展名-解析出来" tabindex="-1"><a class="header-anchor" href="#path-extname-方法-用来从路径字符串中将文件名的-拓展名-解析出来" aria-hidden="true">#</a> <code v-pre>path.extname()</code> 方法，用来从路径字符串中将文件名的 <strong>拓展名</strong> 解析出来</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'path'</span><span class="token punctuation">)</span>
path<span class="token punctuation">.</span><span class="token function">extname</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>参数解读</p>
<ul>
<li>path string 必选参数，表示一个路径的字符串</li>
<li>返回值 string 返回得到的拓展名字符串</li>
</ul>
<h2 id="http-模块" tabindex="-1"><a class="header-anchor" href="#http-模块" aria-hidden="true">#</a> http 模块</h2>
<h3 id="什么是-http-模块" tabindex="-1"><a class="header-anchor" href="#什么是-http-模块" aria-hidden="true">#</a> 什么是 http 模块</h3>
<p><strong>http</strong> 模块是 <strong>Node.js</strong> 官方提供的，用来 <strong>创建web服务器</strong> 的模块，通过http模块提供的 <code v-pre>http.createServer()</code> 方法，
就能方便的把一台普通的电脑变成一台 <strong>Web</strong> 服务器，从而对外提供 <strong>Web 资源服务！</strong></p>
<h3 id="服务器相关概念" tabindex="-1"><a class="header-anchor" href="#服务器相关概念" aria-hidden="true">#</a> 服务器相关概念</h3>
<h6 id="ip-地址" tabindex="-1"><a class="header-anchor" href="#ip-地址" aria-hidden="true">#</a> IP 地址</h6>
<p>IP 地址 就是互联网上每台计算机的唯一地址，因此 IP 地址 具有唯一性，如果把 “个人电脑” 比作 “一台电话” ，那么 “IP 地址” 就相当于 “电话号码”，
只有在知道对方IP地址的前提下，才能与对应的电脑之间进行数据通信</p>
<h6 id="域名-和-域名服务器" tabindex="-1"><a class="header-anchor" href="#域名-和-域名服务器" aria-hidden="true">#</a> 域名 和 域名服务器</h6>
<p>尽管IP地址能够唯一的标记网络上的计算机，但IP地址是一长串的数字，不直观也不好记，于是人们发明了一套字符型的地址方案，也就是所谓的
域名（Domain Name）地址</p>
<p>IP地址 和 域名 是一一对应的关系，这份关系存放在一种叫做 域名服务器（DNS，Domain name server）的电脑中，使用者只需要通过记好的域名
访问对应的服务器就可以了，对应的转换工作由域名服务器实现，因此，域名服务器就是提供 IP地址 和 域名 之间转换服务的服务器</p>
<p><em><strong>开发测试期间，我们电脑的</strong></em> <code v-pre>127.0.0.1</code> <em><strong>对应的域名是</strong></em> <code v-pre>localhost</code></p>
<h6 id="端口号" tabindex="-1"><a class="header-anchor" href="#端口号" aria-hidden="true">#</a> 端口号</h6>
<p>计算机中的端口号 ，就好像是生活中的门牌号一样，通过门牌号，外卖小哥就可以在整栋大楼众多的房间中，准确的把外卖送到你的手上</p>
<p>同样的道理，在一台电脑中，可以运行成千上万个 web 服务，每个 web服务 都对应一个唯一的端口号，客户端发过来的网络请求，通过端口号，可以准确
的交给对应的 web服务 进行处理</p>
<h6 id="一个端口号不能被多个web服务占用-在实际应用中-url-中的-80-端口可以被省略" tabindex="-1"><a class="header-anchor" href="#一个端口号不能被多个web服务占用-在实际应用中-url-中的-80-端口可以被省略" aria-hidden="true">#</a> 一个端口号不能被多个web服务占用，在实际应用中，URL 中的 <code v-pre>80</code> 端口可以被省略</h6>
<p>eg: <code v-pre>127.0.0.1:80</code> -&gt; <code v-pre>127.0.0.1</code></p>
<h3 id="创建基本的-web-服务器" tabindex="-1"><a class="header-anchor" href="#创建基本的-web-服务器" aria-hidden="true">#</a> 创建基本的 web 服务器</h3>
<ol>
<li>导入 http 模块</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'http'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2">
<li>创建 web 服务器实例</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3">
<li>为服务器示例绑定 <code v-pre>request</code> 事件，监听客户端的请求</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 使用服务器实例的 .on 方法，为服务器绑定一个 request 事件</span>
server<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">'request'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token comment">// 只要客户端来请求我们的服务器，就会触发 request 事件，从而调用这个事件的处理函数</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Someone visit our web server.'</span><span class="token punctuation">)</span>
  <span class="token comment">// req 是请求对象，它包含了与客户端的数据和属性</span>
  <span class="token comment">// 例如：req.url 是客户端请求的 URL 地址</span>
  <span class="token comment">// req.method 是客户端的 method 请求类型</span>
  <span class="token keyword">const</span> reqStr <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">你的 request URL is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>req<span class="token punctuation">.</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">, and request method is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>req<span class="token punctuation">.</span>method<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'reqStr:'</span> <span class="token operator">+</span> reqStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// res 是响应对象，它包含了与服务器相关的数据和属性</span>
  <span class="token comment">// 例如：res.end() 是向客户端发送指定的内容，并结束这次请求的处理过程</span>
  <span class="token comment">// 解决中文乱码</span>
  res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">'Content-type'</span><span class="token punctuation">,</span> <span class="token string">'text/html; charset=utf-8'</span><span class="token punctuation">)</span>
  res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span>reqStr<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>相关知识点：模板字符串:</strong> <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Template_literals" target="_blank" rel="noopener noreferrer">${}<ExternalLinkIcon/></a></p>
<ol start="4">
<li>启动服务器，调用 server.listen (端口号，cb回调)方法，即可启动服务器</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 调用 server.listen (端口号，cb回调)方法，即可启动服务器</span>
server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8080</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'http server running at http://127.0.0.1:8080'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li>根据不同的 url 响应不同的 内容</li>
</ol>
<ul>
<li>获取请求地址的 url</li>
<li>设置默认返回内容</li>
<li>设置对应返回的内容</li>
<li><strong>设置响应头，防止中文乱码</strong></li>
<li>res.end()发送内容响应给客户端</li>
</ul>
<p><strong>此处报错可能原因：端口被占用，换一个就可以了</strong></p>
<h2 id="模块化" tabindex="-1"><a class="header-anchor" href="#模块化" aria-hidden="true">#</a> 模块化</h2>
<ul>
<li>模块化的好处</li>
<li>CommonJS规定了那些内容</li>
<li>Node.js中模块的三大分类是什么</li>
<li>使用 npm 管理包</li>
<li>什么是规范的包结构</li>
<li>模块的加载机制</li>
</ul>
<h3 id="什么是模块化" tabindex="-1"><a class="header-anchor" href="#什么是模块化" aria-hidden="true">#</a> 什么是模块化</h3>
<p>模块化是指解决一个复杂问题时，自顶向下逐层把系统划分成若干模块的过程，对于整个系统来说，模块是可组合，分解和更换的单元</p>
<ul>
<li>提高了代码的 <strong>复用性</strong></li>
<li>提高了代码的 <strong>可维护性</strong></li>
<li>可以实现 <strong>按需加载</strong></li>
</ul>
<p><strong>模块化规范</strong> 就是对代码进行模块化拆分和组合时需要遵守的规则</p>
<h3 id="node-js中模块的分类" tabindex="-1"><a class="header-anchor" href="#node-js中模块的分类" aria-hidden="true">#</a> Node.js中模块的分类</h3>
<ul>
<li><strong>内置模块</strong>（官方提供的，例如：fs，path，http等）</li>
<li><strong>自定义模块</strong>（用户开发的每个 .js文件，就是自定义模块）</li>
<li><strong>第三方模块</strong>（别人开发的，使用前需要先下载）</li>
</ul>
<h6 id="加载模块-使用-require-方法-加载所需要的上述模块" tabindex="-1"><a class="header-anchor" href="#加载模块-使用-require-方法-加载所需要的上述模块" aria-hidden="true">#</a> 加载模块：使用 <code v-pre>require()</code> 方法，加载所需要的上述模块</h6>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 内置模块</span>
<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs'</span><span class="token punctuation">)</span>
<span class="token comment">// 自定义模块</span>
<span class="token keyword">const</span> myfs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'./myfs'</span><span class="token punctuation">)</span>
<span class="token comment">// 第三方模块</span>
<span class="token keyword">const</span> moment <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'moment'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>模块作用域</strong></p>
<ul>
<li>防止全局变量污染</li>
</ul>
<p><strong>向外共享模块作用域中的成员</strong></p>
<ul>
<li>module 对象：每个 .js 自定义模块中都有一个module对象，它里面存储了和当前模块有关的信息</li>
<li>在自定义模块中，可以使用 <code v-pre>module.exports</code> 对象把模块里的成员共享出去给外界使用</li>
</ul>
<p><strong>在外界使用 <code v-pre>require</code> 导入自定义模块的时候，默认得到的是该模块的 <code v-pre>module.exports</code> 所指向的对象</strong></p>
<ul>
<li>在导出的时候，由于 <code v-pre>module.exports</code> 写起来有点复杂，可以简写成 <code v-pre>exports</code>，不过最终还是以 <code v-pre>module.exports</code> 指向的对象为准</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>exports <span class="token operator">===</span> module<span class="token punctuation">.</span>exports <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>exports 和 module.exports的使用误区</strong></p>
<h3 id="npm-与-包" tabindex="-1"><a class="header-anchor" href="#npm-与-包" aria-hidden="true">#</a> npm 与 包</h3>
<h3 id="模块的加载机制" tabindex="-1"><a class="header-anchor" href="#模块的加载机制" aria-hidden="true">#</a> 模块的加载机制</h3>
</div></template>


