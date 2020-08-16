# flappy-bird
## 小游戏/小程序特点
* 快速体验，短声明周期，转化率高（可以用于投放广告，做自己的宣传和找工作都有用处）
* 体验优于手机网页（手机网页游戏和小程序游戏都是基于canvas开发的，但是网页对于不同的浏览器渲染的体验不同，打开网页也相对麻烦，需要记住URL，还需要loading）
* 不需要像App下载和注册（开箱即用，用完可以弃掉）
## 小游戏/小程序展望
* 一个趋势，替代过重的APP和体验差的手机网页（有自己的生态圈）
* 快速引流，如果小游戏粉丝多，可以引导用户从小游戏向APP过渡
* 不需推销人员推销就可以火爆，因为微信用户很多，作为一种新的开发理念在更多互联网入口平台流行
## 额外信息
* 使用ES5和ES6两个版本面向对象开发小游戏
## 开发环境
* 使用了比较友好的IDE（比如WebStorm）
* 安装node和babel等工具链
## 小游戏起步
* 起步见[小游戏官网](https://developers.weixin.qq.com/minigame/dev/guide/#%E5%AE%89%E8%A3%85%E5%B9%B6%E5%90%AF%E5%8A%A8%E5%BC%80%E5%8F%91%E8%80%85%E5%B7%A5%E5%85%B7)
* 在小游戏官方的开发软件中新建一个项目会自动生成一个打飞机的游戏。
* 小游戏只有两个必要文件：
    1. game.js 小游戏入口文件
    2. game.json 配置文件
```sh
|--game.js
|--game.json
```
* 开发者工具中的编译按钮主要是把**ES6的语法编译成ES5的语法**，提交审核的时候是提交ES5的语法的代码，因为微信的是内置的X5内核的浏览器，其他很多浏览器ES5以上的并不是百分百支持。但是支持ES5代码。 所以需要这个编译的过程。
* 微信开发者工具的编译是在改代码后会自动编译的。不需要手动点击。
## 用webStorm编辑器开发（设置支持ES6）
* 不知道是不是版本问题老师打开的会显示一些红色下换线可能是警告。但是我的没有（因为我的版本可能默认设置成了支持ES6），这里老师解释的是webstorm只支持ES5，所以需要设置一下webstorm
* 按照下面路径设置文件->设置（preferences）->语言和框架->JavaScript->JavaScript language version，版本选择ECMAScript6即可
* 设置好了后老师的会显示是否需要File watcher去监控文件的变化，并用babel把ES6转义为ES5。同时生成到dist目录下。但是我这里没有显示。[babel官网](https://babeljs.io/)和[中文网站](https://www.babeljs.cn/)
## 安装babel和cmpm
* 根据[官网安装](https://babeljs.io/docs/en/usage)即可。
* 如果速度慢可以使用[淘宝 NPM 镜像](https://developer.aliyun.com/mirror/NPM?from=tnpm)
```sh
npm install -g cnpm --registry=https://registry.npm.taobao.org
```
* [CNPM 宝藏库](https://github.com/chuzhixin/vue-admin-beautiful)
* babel官网建议我们不要全局安装，全局安装是在任何地方都可以访问。因为不同的babel版本的中间解析方式和代码的优化程度不一样，可能会有冲突，所以推荐安装在局部的相应本地的位置上
### ES6转换为ES5测试
* 然后设置目标目录和生成的目录
```sh
./node_modules/.bin/babel src --out-dir lib
```
* npm@5.2.0 to shorten that command by replacing ./node_modules/.bin/babel with npx babel.
* 不过运行上面代码需要有src目录,不然会报错src does not exist
```sh
$ ./node_modules/.bin/babel src --out-dir lib
babel:
  src does not exist

bomber@DESKTOP-2MJTGBE MINGW32 /d/muke/mini game/flappy bird
$ npx babel src --out-dir lib
babel:
  src does not exist
```
* 还可以在webStorm里面配置，在文件->设置->工具->File Wathchers->有一个+号->babel->看到babel目录和输出目录，如果没问题就不修改。点击确定->应用
* 然后我们可以做一个实验，就是比如在game.js中随便输入一个空格，**就可以再看自动生成一个dist目录啦，里面的game.js是转义为ES5风格的代码，没有class概念，import也转义为了require**。
* 同时还会生成一个map文件，这个文件的作用，JS压缩会有一个min的map,ES6转换为ES5会有一个map文件，**所谓的map就是在浏览器里面进行调试的时候会把转义后的文件映射到转义前的文件，也就是调试的时候是调试器里面显示的是转义前的文件代码，调试转义前的文件，而不是转义后乱七八糟奇奇怪怪的文件，所以这个map文件在开发和测试的时候非常重要**
* mac里面的路径文件没有cmd结尾，就是babel。但是在window里面的babel的路径是按照cmd后缀来执行，路径为
```sh
D:\muke\mini game\flappy bird\node_modules\.bin\babel.cmd
```
* 但是webstorm自动生成的路径也能用
```sh
$ProjectFileDir$\node_modules\.bin\babel
```

## node安装
* [node](https://nodejs.org/en/)的other downloads里面会有不同架构的CPU（32和64），不同系统（linux，window，MacOS）,其中Windows Installer (.msi)和macOS Installer (.pkg)是偏向于普通用户的比较友好的安装器。
    * msi和pkg是可以在安装的时候以可视化的一步一步向下安装的方式。
    * Windows Binary (.zip)，macOS Binary (.tar.gz)，Linux Binaries就是不同平台上经过编译并且经过官网打包好了的可执行文件。只需要放到响应的目录下，并且在环境变量中配置响应可执行文件的路径就可以去执行了
* 其实**安装的本质就是把响应的可执行文件塞到相应的系统的可执行位置，并把相应的配置文件贴到相应的位置可以读出的位置**。安装即使复制。
    * 如果是Windows就在注册表里面写入源信息。
    * 如果是Linux在各个分布式的目录里面插入响应的配置文件。
* 老师介绍用到的是MacOS不建议安装双系统，对电脑损伤比较大。而是**通过服务器安装Windows系统**。
## 不同系统安装node
### linux或者macOS Binary (.tar.gz)
* linux，如果不执行安装目录（prefix）,一般会安装到根下的user/local，使用命令tar zxvf,后面的是node的版本,tar是linux系统自带的文件解压缩，文件打包和解打包的工具，zxvf是解压并显示详细过程，并把解压后的文件以同目录名的方式输出在当前目录之下（就是解压完后它的目录名字就是node-v9.5.0.tar.gz，并包含了所有解压后的信息）
```sh
tar zxvf node-v9.5.0.tar.gz
```
* 解压后通过下面cd命令可以进入到node-v9.5.0
```
cd node-v9.5.0
```
* 真正的服务器是跑在类unix系统（如Mac和liunx）上，所以需要掌握一些命令行。winservice不太适合跑很多后台应用。
* 输入ls可以看到一个configure的文件，通过下面的命令可以打印出来所有的信息
```sh
ls -all configure

-rwxr-xr-x 1 502 games 51148 2月
```
* rwxr
    * r代表可读
    * w代表可行
    * x代表可执行
* -rwxr-xr-x分三组。
    * 前面的-rwxr是属于自己。
    * 第二个xr代表属于哪个group
    * 第三个x属于其他用户
    * r代表数字4
    * w代表数字2
    * x代表数字1
* 经常看到这样的命令,就是把三组权限全部变成可读可写可执行，任何人都可以侵犯它
```
chmod -R 777
```
* 类Unix操作系统的文件是否可执行并不像windows一样通过后缀来区分,没有所谓的.exe或者.msi这样的区分。**它的可执行仅仅是看他最后一组里面是否存在x，它代表其他用户可执行**
* 可以通过下面命令查看自己的角色
```
whoami
```
* 如果显示的不是root用户，那么需要加上sudo来获取root权限，但是可能需要输入root密码，**编译过程是需要管理员权限的，在linux里面**
* 可以通过下面命令进入到root里面
```sh
su - root
# 这里的-代表不管进入到root权限，并且进入到root的+目录
```
* 执行configure文件就是比如在当前目录输入命令
```
./configure
```
* 然后使用下面的make命令，这个要花比较长的时间。
```
make
```
* 然后就可以看到很多编译的代码出现了，用于生成可执行文件。
* 上面make完成后使用make test命令来进行检测，检测编译是不是存在问题，二进制文件有没有什么错误，对比哈希等等信息，**这个时间比make的时候还要长**
```sh
make test
```
* 进行了make test后就可以make install
```sh
make install
```
* 安装的过程就是一堆拷贝和复制文件的配置过程
* 在linux上和Mac唯一不同的是node和npm的安装，其他比如webstorm的配置与Mac都是一致的，
### macOS Installer (.pkg)和Windows Installer (.msi)
* 这个直接双击，进行环境的检测，然后下一步，下一步操作即可
### Mac平台上额外的工具安装
* 在Mac平台上有一个[Homebrew](https://brew.sh/),它是缺失包管理器，它是用ruby这样的语言所写的。它是一个爬虫，爬到网上所有我们需要的源码，二进制包，安装文件，dmg，镜像等，然后统一的在ruby这个平台进行管理。
* 我们可以通过官网的下面命令安装所有一切东西
```sh
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
```
* 输入了上面命令后就可以使用crew命令搜索到nodejs
```
brew search nodejs
```
* 这样通过上面命令很方便的安装node.js，而不需要到浏览器上去每次有更新就去下载新的pkg，然后点击安装覆盖等操作
* 通过下面命令可以更新
```sh
brew update
```
* 通过下面命令更新所有的包
```
brew upgrade
```
* 在mac平台安装node.js只需要通过下面命令就可以安装
```sh
brew install nodejs
```
* 如果你有系统洁癖，不喜欢别人编译好的源码，按照自己的cpu的模式去编译。就用下面命令
```sh
brew install nodejs --build-from-source
# --build-from-source的意思是说homebrew会从nodejs的官网上或者GitHub网站上去下载我们所需要的对应的源代码,通过make install的方式在本机进行编译然后安装，这种方式去安装电脑会比较卡，因为cpu使用率会上升到百分之百，但是这个软件就输入自己的了，因为是在自己的机器上编译的
```
* --build-from-source的意思是说homebrew会从nodejs的官网上或者GitHub网站上去下载我们所需要的对应的源代码，通过make install的方式在本机进行编译然后安装，这种方式去安装电脑会比较卡，因为cpu使用率会上升到百分之百，**但是这个软件就输入自己的了，因为是在自己的机器上编译的**
* homebrew会把nodejs的源代码安装下面目录
```sh
/usr/local/Cellar/node
```
* 同时会把nodejs的可执行软件做一个软链接，链接到use/local上,下面以老师的电脑和目录为例子显示
```
bin lsls all node
lrwxr-xr-x 1 FuLingjie admin 29 Feb 2 11:07 node -> ../Cellar/node/9.5.0/bin/node
```
* node -> ../Cellar/node/9.5.0/bin/node就是user/local/bin下的node可执行文件是指向homebrew安装的这个目录../Cellar/node/9.5.0/bin/node，它仅仅只是一个副本。
* 这样做的目录可以让我们在任何时候都可以访问到它，输入下面命令
```sh
bin which node
# 然后会显示 /usr/local/bin/node
```
* 也就是说node命令执行的就是/usr/local/bin/node这里面的node.这就是其原理。
### Mac小结
* Mac的安装可以通过双击安装或者通过homebrew安装。
### window额外的终端命令输入工具
* 老师说windows的cmd是世界上最难用的终端，没有之一，我们可以变通一下，尽量不要使用windows自带的cmd
    * 稍微好点可以使用powershell,点击左下角的窗口，然后输入powershell即可弹出来。它是微软出的。比cmd稍微好用一点，但是还是比较难用。
    * 安装一个[git](https://git-scm.com/),它是一个源代码的管理系统。可以管理历史代码。然后就还自带有一个git bash这样的工具。打开git bash就比较方便的去处理相应的动作。**这里的shell会比较友好**
### 查看node和npm安装的路径和版本
* 通过下面命令查看node的安装路径
```sh
$ which node
/d/Program Files/nodejs/node
$ which npm
/d/Program Files/nodejs/npm
```
* 可以看到我们的安装路径都是在D盘里面。
* 版本
```sh
$ npm -v
6.4.1

$ node -v
v10.13.0
```
## 小游戏开发原理初窥
* 通过在小程序开发平台上把ES5的代码放上去还是可以正常运行，说明小游戏或者小程序就是通过javaScript进行操作。并在内部进行了一系列的转换。
## JS面向对象初步填坑
* 这里可以安装一个[live-server](http://tapiov.net/live-server/)
* ES5使用严格模式，这样this就不会乱变化了，ES5不使用严格模式会有一些错误的写法，这些写法会造成一些潜在的错误，包括规范上一些不合适的地方，ES6会默认使用严格模式，所以ES6就不需要加这样一段关键字了
```js
    'use strict';
```
* 声明function的两种方式
    * 一个是函数赋值给了一个变量，这种属于函数表达式，这个是必须在声明之后才能调用，Google前端规范推荐我们使用这种方式
        ```
        var fun1=function(){

        }
        ```
    * 另一种是直接声明函数，函数声明，他会把声明提升到JS代码的顶部，就是在任何地方都可以调用这个函数
        ```js
        function fun2(){
        
            }
        ```
* 面向对象的ES5类写法
```js
    // ES5的类
    var Class1=function(){
        this.fun1=function(){
            console.log('test');
        }
 };

 Class1.prototype.fun2=function(){
        console.log('2')
    }
    new Class1().fun2()
```
* ES6的类 ,构造方法constructor里面内部的不需要调用，直接new就可以执行了，并且外部可以使用的方法不需要使用this。
```js
    class ClassTest{
        constructor(){
            console.log('我创建啦')
        }
        fun1(){//在webStorm里面会很智能的告诉你这里的fun1可以用静态static方法，看下面的静态方法static fun2
            console.log('fun1')
        }

        static fun2(){//静态方法不需要new只需要直接调用即可，看下面的调用 ClassTest.fun2()
            console.log('2')
        }
    }

    new ClassTest().fun1();
    ClassTest.fun2();
```
## 小游戏逻辑和类梳理
* canvas的绘图原理并不是一个资源对应一个图，它是一个剪裁和重绘的过程。
* 游戏全局的**入口文件**，比如game.js，是微信小游戏必须有的一个文件。
* **程序的主类**，比如Main.js,主要用来初始化canvas和一些全局对象，各个精灵和绑定点击事件。
* **程序导演类**，比如Director.js,用到控制游戏的逻辑和精灵的创建与销毁，控制游戏主循环。场景的切换
* **变量储存**，比如DataStore.js,存储游戏需要长期保存的变量和需要定时销毁的变量。
* 游戏的**资源数组**，比如Resources.js
* **资源加载器**，保证游戏是在图片加载完成后开始主循环。比如ResourceLoader.js，为了保证资源加载完后canvas才进行渲染。如果在加载完毕之前去执行JS逻辑会导致画面是一张白布。
* **游戏精灵的基类**，背景，陆地，铅笔，小鸟等都是他的子类。比如Sprite.js.指代游戏中一切呈现的元素，可以进行旋转，变换，缩放，可以处理很多动画及包含很多内部的逻辑,**它可以说是整个游戏开发比较核心的概念**
* **背景类**，比如Background.js，绑定图片资源。
* **陆地类**，比如Land.js
* **上半部分铅笔类**，比如UpPencil.js
* **下半部分铅笔类**，比如DownPencil.js
* **小鸟类**，比如Birds.js
* **计分器类**，比如Score.js
* **重新开始按钮**，比如StartButton.js
### canvas图片渲染原理
* canvas图片渲染原理是**一层一层向上叠的**
* 把背景图翻到第一层，然后再方铅笔层，最后再把陆地放上去，那么铅笔的陆地部分就被遮住了。然后再画小鸟和计分器和按钮。
* 铅笔是每隔一定距离定期的创建两组，判断屏幕中有两组铅笔，也就是4根铅笔。如果有4根然后再去从**右边屏幕创建**，如果多或者少就不处理，如果到了屏幕**左侧边缘就销毁**。铅笔的**高度是随机不一**的，做一个随机数加一个参数来限制铅笔上下伸缩的距离
* 陆地部分就是不停的向左重绘，把左边屏幕消失的部分取回来放到右边接上。
* 小鸟其实是三张图片不停的在切换，三张图片的翅膀方向不一样。所以看起来像是在飞。当渲染小鸟的时候，其实是整个canvas图片整个背景都在重绘。每一个像素都在重建和销毁。我们只要把握原则控制帧数，通过剪裁，拼接和各种障眼法就可以做出来需要的游戏。
### 小游戏API
* [小游戏的全局配置](https://developers.weixin.qq.com/minigame/dev/reference/configuration/app.html)
    * 老师举了一个showStatusBar的例子
* [创建步骤](https://developers.weixin.qq.com/minigame/dev/guide/#%E5%88%9B%E5%BB%BA%E7%94%BB%E5%B8%83)
* 讲到的API
    * 创建画布
        ```js
            const canvas = wx.createCanvas()
        ```
    * 上面是小游戏获取canvas，但是我们在WEB开发中首先要获取到DOM元素然后再用[canvas.getContext('2d')](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API)
        ```js
            const canvas = document.getElementById('canvas');
            const ctx = canvas.getContext('2d');
        ```
    * 微信小游戏的创建canvas底层也是干了WEB开发中的这件事。一个原理，做了一个简单的封装。
    * [requestAnimationFrame](https://developers.weixin.qq.com/minigame/dev/api/render/frame/requestAnimationFrame.html),在下次进行重绘时执行，这是JS原生的函数，原生JS里面也有[requestAnimationFrame](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame)
    * [wx.setPreferredFramesPerSecond(number fps)](https://developers.weixin.qq.com/minigame/dev/api/render/frame/wx.setPreferredFramesPerSecond.html),可以修改渲染帧率。默认渲染帧率为 60 帧每秒。修改后，requestAnimationFrame 的回调频率会发生改变。**但是不建议使用这个方法，因为刷新率低于60帧，肉眼是可以看到的，除非是一些精致的画面可以用这个方法提高程序的性能**
    * [生命周期](https://developers.weixin.qq.com/minigame/dev/api/base/app/life-cycle/wx.onShow.html)
        * wx.onShow——监听小游戏回到前台的事
        * wx.onHide——监听小游戏隐藏到后台事件。锁屏、按 HOME 键退到桌面、显示在聊天顶部等操作会触发此事件。
        * wx.offShow——取消监听小游戏回到前台的事件
        * wx.offHide——取消监听小游戏隐藏到后台事件
        * wx.getLaunchOptionsSync——获取小游戏启动时的参数
        * wx.exitMiniProgram——退出当前小游戏
    * [wx.triggerGC()](https://developers.weixin.qq.com/minigame/dev/api/base/performance/wx.triggerGC.html),加快触发 JavaScriptCore 垃圾回收（Garbage Collection）。GC 时机是由 JavaScriptCore 来控制的，并不能保证调用后马上触发 GC。
* 因为在微信自己创建的打飞机游戏目录js->libs->weapp-adapter.js已经有一个`wx.createCanvas()`，如果我们在创建一个canvas会导致一个离屏的canvas。**离屏简单的理解就是不可见的**，所以最好把它删除掉。
* 在webStorm中在需要修复的地方按**alt+Enter**会进行程序的一些修补。然后可以选择按右键可以看到修复所有问题。
## 开始在WEB上写代码
* 用到一些ES6语法，可以参考[阮一峰的ES6]()
* 面向对象有类的概念，最好类多代码少
* 为了与微信小游戏手机宽高一致，我们需要先获取小游戏开发程序上面的宽高然后在WEB上与之保持一致
```html
 <canvas id="game_canvas" width="375" height="667"></canvas>
```
* 创建一个js目录里面有三个目录
    * base——基本工具类。比如datastore,resource,resourceLoader和sprite
    * runtime——游戏场景环境的资源。比如陆地类和背景类，还有铅笔类。
    * player——跟玩家交互的类。不断变化的类，比如birds.js，score.js,StartButton.js
### 创建文件
* 创建base目录，目录里面的文件
    * DateStore.js
    * ResourceLoader.js
    * Resource.js
    * Sprite.js
* 创建player目录。目录里面的文件
    * Birds.js
    * Score.js
    * StartButton.js
* 创建runtime目录，目录里面的文件
    * BackGround.js
    * DownPencil.js
    * Land.js
    * UpPencil.js
* 创建Director.js和Main.js
#### 解决报错
* 注意如果需要使用import，需用在[type](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/script)里面写上`type="module"`,不然会报下面的错误。
```
Uncaught SyntaxError: Cannot use import statement outside a module
```
* 解决办法[参考](https://blog.csdn.net/qq_43340929/article/details/101862294)
```html
    <script type="module" src="game.js"></script>
```
* 注意webStorm可以在new一个函数的时候会自动创建import，具体设置看这里[IDEA 实用功能Auto Import：自动优化导包（自动删除、导入包）](https://www.cnblogs.com/mithrandirw/p/8819314.html),这里import的路径需要带后缀比如Main.js，不然会报错如下
```
GET http://127.0.0.1:8080/Main net::ERR_ABORTED 404 (Not Found)
```
* 修改为加后缀的比如Main.js才避免浏览器报错。**但是在微信开发者工具中是正确的，我还需要测试一下，老师说的**
```js
import {Main} from "./Main.js";

new Main()
```
* 另外还有一个小警告，
```
The value "<device-width>" for key "width" is invalid, and has been ignored.
```
* 主要是因为这段代码
```html
<meta name="viewport" content="width=<device-width>, initial-scale=1.0">
```
### 这个浏览器兼容问题已经处理了
* 老师的视频比较古老了，下面的代码浏览器会报错,在ResourceLoader中前面有一个`map=null`
```js
import {Resources} from "./Resources.js";

export class ResourceLoader{
    map=null;
    constructor(){
        this.map=new Map(Resources)
    }
}
```
* 然后再Main.js中引入一个new，老版本的浏览器会报错，**但是我的新版本（版本 84.0.4147.125（正式版本） （64 位））不会报错**
```js
import {ResourceLoader} from "./js/base/ResourceLoader.js";

export class Main{
    constructor(){
        console.log('我执行了')
        new ResourceLoader()
    }
}
```
### 小结报错（关于type和后缀）
* **如果使用了ES6语法的JS，如果没有用babel进行转义为ES5，有import或者export，这里的type一定要是module，并且import的时候路径必须要把完整的文件名字写上，包括后缀.js，不要省略**
## 加载图形资源
* 创建res目录，里面存放图形，包括图形，开始按钮，背景，小鸟，陆地，上下铅笔等。
* 把图片按照名字路径引入到变量Resources里面去。
```js
export const Resources=[
    ['background', 'res/background.png'],
    ['land', 'res/land.png'],
    ['pencilUp', 'res/pie_up.png'],
    ['pencilDown', 'res/pie_down.png'],
    ['birds', 'res/birds.png'],
    ['startButton', 'res/start_button.png'],
    ['beginButton', 'res/begin.png']
];
```
* 这里用到ES6的[Map对象](https://es6.ruanyifeng.com/?search=map&x=0&y=0#docs/set-map),ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，**但是“键”的范围不限于字符串**，各种类型的值（包括对象）都可以当作键。也就是说，**Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现**。如果你需要“键值对”的数据结构，Map 比 Object 更合适。
* [Map() 构造函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/Map)
    * new Map([iterable])
        * iterable 参数
            * Iterable **可以是一个数组或者其他 iterable 对象，其元素为键值对(两个元素的数组，例如: [[ 1, 'one' ],[ 2, 'two' ]])。** 每个键值对都会添加到新的 Map。null 会被当做 undefined。
* 一个Map对象在迭代时会根据对象中元素的插入顺序来进行 — 一个  for...of 循环在**每次迭代后会返回一个形式为[key，value]的数组**。
* Map构造函数接受**数组作为参数**，实际上执行的是下面的算法。例子来自阮一峰老师[ES6教程](https://es6.ruanyifeng.com/?search=map&x=0&y=0#docs/set-map)，**返回的也是一个数组**
```js
const items = [
  ['name', '张三'],
  ['title', 'Author']
];

const map = new Map();

items.forEach(
  ([key, value]) => map.set(key, value)
);
```
* [Map.prototype.set(key, value)](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/set)设置Map对象中键的值。返回该Map对象。
### 数组里面有数组，并且foreach的参数如果是数组
* 具体代码可以看[Jsbin](https://jsbin.com/yotijiwipi/1/edit?js,output)
* 这里第三个1数数字，第四个1是字符串1，可以看jsbin里面的输出结果。也就是value的值是跟items里面的对应的数组的索引为0的值是一致的。 
```js
//这里第三个数组的第一个索引是数字1，第四个数组的第一个索引是字符串1
const items = [
  ['name', '张三'],
  ['title', 'Author'],
  [1,'哈哈'],
  ['1','哈哈']
];
// console.log(items)
const map = new Map();

items.forEach(
  ([value,value1],key) => console.log(key,value,value1)
);
//这里第三个1数数字，第四个1是字符串1，可以看jsbin里面的输出结果。也就是value的值是跟items里面的对应的数组的索引为0的值是一致的。 

items.forEach(
  ([value,key]) => console.log(key,value)
);

items.forEach(
  (value,key) => console.log(key,value)
);

items.forEach(
  (key,value) => console.log(key,value)
);
// console.log(map)
```
### 综上所描述我们可以知道Map构造函数下面代码的意思
* ResourcesLoader里面的代码
```js
import {Resources} from "./Resources.js";

export class ResourceLoader{
    map=null;
    constructor(){
        this.map=new Map(Resources)
        console.log(this.map)
    }
}

//这里的this.map其实就是一个map数组
```
* 这里的this.map其实就是一个map数组,它在浏览器中打印的值如下
```
Map(7) {"background" => "res/background.png", "land" => "res/land.png", "pencilUp" => "res/pie_up.png", "pencilDown" => "res/pie_down.png", "birds" => "res/birds.png", …}
[[Entries]]
0: {"background" => "res/background.png"}
1: {"land" => "res/land.png"}
2: {"pencilUp" => "res/pie_up.png"}
3: {"pencilDown" => "res/pie_down.png"}
4: {"birds" => "res/birds.png"}
5: {"startButton" => "res/start_button.png"}
6: {"beginButton" => "res/begin.png"}
size: (...)
__proto__: Map
```
### 使用Image对象创建图片
* 用到[Image](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLImageElement/Image)对象
* 元素为键值对比如(两个元素的数组，例如: `[[ 1, 'one' ],[ 2, 'two' ]]`，所以这里是`[key,value]`,`[key,value]`中key就是资源的名字，value就是资料的相对路径
* 微信中还可以使用 [wx.createImage()](https://developers.weixin.qq.com/minigame/dev/api/render/image/wx.createImage.html)
* 在ResourceLoader.js里面代码
```js
export class ResourceLoader{
    constructor(){
        this.map=new Map(Resources)
        //这里的[key.value]其实就是map里面的一个value，因为map里面的值都是键值对，
        // 元素为键值对比如(两个元素的数组，例如: [[ 1, 'one' ],[ 2, 'two' ]])，所以这里是[key,value]
        //[key,value]中key就是资源的名字，value就是资料的相对路径
        for (let [key,value] of this.map){
            const image=new Image();
            // 微信中还可以使用 wx.createImage(),https://developers.weixin.qq.com/minigame/dev/api/render/image/wx.createImage.html
            image.src=value;
            this.map.set(key,image)//因为map对象里面的key和image是一一对应并且唯一的。把map里面的value替换成了真正的图片
        //    也就是图片的相对路径替换成了图片的真正实例本身，并且已经加载了图片资源的图片本身
        }
        //上面的循环完后，那么map就变成了一个key对应一个Image对象
    }
}
```
* 循环完后，那么map就变成了一个key对应一个Image对象
### 加载图片全部结束的方法及ResourceLoader类
* 加载全部结束的方法，为了确保所有图片已经加载完毕，需要一个变量来确认并记录它的完毕
* 用到[Map.prototype.values()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/values),方法返回一个新的Iterator对象。它包含按顺序插入Map对象中每个元素的**value值**。
#### 判断图片是否加载完成
* [JavaScript判断图片是否加载完成的三种方式](https://www.cnblogs.com/snandy/p/3704938.html)
* [判断图片是否加载完成的六种方式](https://www.cnblogs.com/zhusf/p/10607957.html),这里选择其中一种，就是使用html的img标签的[onload属性](https://developer.mozilla.org/zh-CN/docs/Mozilla/Tech/XUL/Attribute/image.onload),该事件的处理函数将会在 image 元素指示的图片加载完毕之后触发.
* 用到API-[Map.prototype.size](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Map/size),size 是可访问属性，用于返回 一个Map 对象的成员数量。
* [static静态方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Classes/static),直接可以通过类来访问，而不需要new出这个类的实例来访问
* 整个资源加载器代码
```js
//资源文件加载器，确保canvas在图片资源加载完成后才进行渲染
import {Resources} from "./Resources.js";

export class ResourceLoader{
    constructor(){
        this.map=new Map(Resources)
        //这里的[key.value]其实就是map里面的一个value，因为map里面的值都是键值对，
        // 元素为键值对比如(两个元素的数组，例如: [[ 1, 'one' ],[ 2, 'two' ]])，所以这里是[key,value]
        //[key,value]中key就是资源的名字，value就是资料的相对路径
        for (let [key,value] of this.map){
            const image=new Image();
            // 微信中还可以使用 wx.createImage(),https://developers.weixin.qq.com/minigame/dev/api/render/image/wx.createImage.html
            image.src=value;
            this.map.set(key,image)//因为map对象里面的key和image是一一对应并且唯一的。把map里面的value替换成了真正的图片
        //    也就是图片的相对路径替换成了图片的真正实例本身，并且已经加载了图片资源的图片本身
        }
        //上面的循环完后，那么map就变成了一个key对应一个Image对象
    }
    //加载全部结束的方法，为了确保所有图片已经加载完毕，需要一个变量来确认并记录它的完毕
    onLoaded(callback){
        let loadedCount=0;
        for(let value of this.map.values()){
            //通过this.map.values()取出来的都是map里面的value，忽略掉它的key,不需要去管它的key了
            value.onload=()=>{
                loadedCount++
                if(loadedCount>=this.map.size){
                    callback(this.map)//加载完后执行回调callback，并传参数为this.map
                    // console.log('加载完毕',callback)
                }
            }
        }
    }
    static create(){
        return new ResourceLoader()
    }
}
```
* 而在Main里面去使用这个ResourceLoader类
```js
import {ResourceLoader} from "./js/base/ResourceLoader.js";

export class Main{
    constructor(){
        //这里用this的原因是整个Main都可以获取到它。canvas和ctx就是整个类的变量
        this.canvas=document.getElementById('game_canvas')
        this.ctx=this.canvas.getContext('2d')
        const loader=ResourceLoader.create();
        //把map传参到onResourceFisrtLoaded函数里面去
        // console.log(loader)
        //下面的map是获取到ResourceLoader里面的onLoaded传过来的参数实参this.map，在Main类里面用map作为形参代替
        loader.onLoaded(map=>this.onResourceFisrtLoaded(map))
    }
    //资源只需要加载一次，其他都是重置逻辑就好了，所里这里是第一次加载资源
    onResourceFisrtLoaded(map){
        console.log(map)
    }
}
```
#### 箭头函数和非箭头函数的this
* 非箭头函数获取外面的this需要通过一个变量来代替，比如下面用self来获取this
```js
    onLoaded(callback){
        for(let value of this.map.values()){
            //通过this.map.values()取出来的都是map里面的value，忽略掉它的key,不需要去管它的key了
            let self=this
            value.onload=function(){
                self//self来获取到外面的this。
            }
        }
    }
```
* 箭头函数可以直接获取到外面的this,**这个就比较方便**
```js
    onLoaded(callback){
        for(let value of this.map.values()){
            //通过this.map.values()取出来的都是map里面的value，忽略掉它的key,不需要去管它的key了
            value.onload=()=>{
                this//这个this永远都是指向外面的this
            }
        }
    }
```