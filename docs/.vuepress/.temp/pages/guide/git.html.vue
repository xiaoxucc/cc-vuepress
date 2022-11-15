<template><div><h1 id="hello-git" tabindex="-1"><a class="header-anchor" href="#hello-git" aria-hidden="true">#</a> hello Git</h1>
<h2 id="git-安装" tabindex="-1"><a class="header-anchor" href="#git-安装" aria-hidden="true">#</a> Git 安装</h2>
<p>安装 <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">Git<ExternalLinkIcon/></a></p>
<h2 id="git-命令" tabindex="-1"><a class="header-anchor" href="#git-命令" aria-hidden="true">#</a> Git 命令</h2>
<h6 id="设置用户签名-git首次安装必须要设置用户签名-负责无法提交代码" tabindex="-1"><a class="header-anchor" href="#设置用户签名-git首次安装必须要设置用户签名-负责无法提交代码" aria-hidden="true">#</a> 设置用户签名，Git首次安装必须要设置用户签名，负责无法提交代码</h6>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>git config <span class="token operator">--</span>global user<span class="token punctuation">.</span>name 用户名
git config <span class="token operator">--</span>global user<span class="token punctuation">.</span>email 邮箱
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>签名的作用是区分不同操作者的身份，用户的签名信息在每一个版本的提交信息能够查看，以此确认本次提交是谁做的，设置完成可在 <code v-pre>C:\Users\Administrator\.gitconfig</code> 下查看</p>
<p><strong>设置用户签名和之后登录 Github （或者其他代码托管中心）的账号没有任何关系</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>git init    <span class="token comment">// 初始化本地库</span>
git add 文件名    git add <span class="token operator">*</span>   <span class="token comment">//添加暂存区    单个添加    全部添加</span>
git commit <span class="token operator">-</span>m <span class="token string">'日志信息'</span>    <span class="token comment">// 提交本地库</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>删除暂存区 <code v-pre>git rm --cached 文件名</code> <code v-pre>git rm -r --cached &quot;文件路径&quot;</code></p>
<p>查看日志信息 <code v-pre>git reflog</code> <code v-pre>git log</code></p>
<p>查看本地库状态 <code v-pre>git status</code></p>
<p>版本穿梭 <code v-pre>git reset --hard 版本号</code>，版本号来源：<code v-pre>git reflog</code></p>
<h2 id="git-分支" tabindex="-1"><a class="header-anchor" href="#git-分支" aria-hidden="true">#</a> Git 分支</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>git branch 分支名 <span class="token comment">// 创建分支</span>
git branch <span class="token operator">-</span>v   <span class="token comment">// 查看分支</span>
git checkout 分支名   <span class="token comment">// 切换分支</span>
git merge 分支名    <span class="token comment">// 把指定的分支合并到当前分支上</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-团队协作" tabindex="-1"><a class="header-anchor" href="#git-团队协作" aria-hidden="true">#</a> Git 团队协作</h2>
<p>全球最大同性交友网站：<a href="https://github.com/" target="_blank" rel="noopener noreferrer">Github<ExternalLinkIcon/></a></p>
<ol>
<li>创建远程仓库</li>
<li>将本地仓库与远程仓库关联</li>
<li>将本地代码推送至远程仓库</li>
</ol>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 卡的话就不要用https，用ssh</span>
git remote <span class="token operator">-</span>v   <span class="token comment">// 查看当前所有的远程地址别名</span>
git remote add 别名 远程地址   <span class="token comment">// 给远程仓库地址起别名</span>
git push 别名 分支   <span class="token comment">// 推送本地分支上的内容到远程仓库</span>
git clone 远程地址   <span class="token comment">// 将远程仓库的内容克隆到本地</span>
git pull 远程仓库地址别名 远程分支名   <span class="token comment">// 将远程仓库的对于分支最新内容拉下来后与当前本地分支直接合并</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-clone" tabindex="-1"><a class="header-anchor" href="#git-clone" aria-hidden="true">#</a> Git clone</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>git clone 远程地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="ssh-免密登录" tabindex="-1"><a class="header-anchor" href="#ssh-免密登录" aria-hidden="true">#</a> SSH 免密登录</h2>
<p>使用 <code v-pre>ssh-keygen -t rsa -C xutancong@163.com</code>会在 <code v-pre>C:\Users\Administrator</code> 会生成一个 <code v-pre>.ssh</code> 文件夹</p>
<p>在github右上角头像找到 <code v-pre>settings</code>，然后点击 <code v-pre>SSH and GPG keys</code>，再点击 <code v-pre>New SSH key</code>，将刚刚生成的文件夹里的pub文件内容添加进去</p>
</div></template>


