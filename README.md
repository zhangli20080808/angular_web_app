1. 本文件无需部署

2. 先安装 package.json 中的node模块

可能需要全局安装 gulp，即

npm i -g gulp

3. 然后安装 bower.json 中的模块

bower install

需要全局安装bower

npm i -g bower


4. 开发时需要启动 gulp 任务

监听代码并事实行编译

gulp

5. src目录中的 data 文件夹为假数据，直接放置到项目的 src 目录即可。

6. 运行gulp  在浏览器查看


项目开始    招聘app
1.模块化分
  职位  搜索  用户   index.html   引入 开始我们的第一个模块  创建app.js
2.路由配置    安装   npm install --save ui-router
3.创建一个配置文件    config  创建一个main模块
4.路由模块拓展
5.手写   静态页面   我们使用rem    获取html字体大小  一般是我们的屏幕宽度/10 ＋px；
首页：  我们基本可以拆分为三个指令
我们写完指令模版   还要去写对应的指令脚本
特别的：html不识别大小写   我们的angular指令的横杠就代表大写  所以我们对应的指令名也要大写<div app-head></div>
只编译index.less  其他的less我们导入就好

 对于颜色变量  我们新建一个variable.less 文件来存储
 共用的属性    我们都放在property.less文件里面

 我们来编写footer.html 对应创建foot的脚本  footer.less

 点击我们的li有一个跳转的动作  这个我们利用ui-rooter模块的  指令的方式  ui-sref 跳到对应的模块和路由  高亮也有一个指令

  开始我们的职位列表

  处理首页列表  如果我们要在一个页面使用两个相同的指令呢 ，那么就会出现冲突  所以我们需要暴露一个接口给我们控制器调用，
  我们这样使用指令是有缺点的  首先我们这个指令调用的这个名称式固定的 只能叫list 问题来了 就是上面
  要用到指令中的另外一个属性  scope 也是一个对象 我们可以指定变量名 然后把这个指令传给他  指令相当于是
  控制起的一个子元素  scope data会共享，但并不完全 只是声明的属性共享  
  注意  一定要在我们调用的时候在指令上  赋予data属性  把他映射到我们控制器上的一个属性 list


首页面基本完成  数据绑定 指令  replace为false的时候 可以并列 true的时候，替换我们的模版
职位模块   职位详情页  公司职位页

position.html    路由－－我们根据不同的职位去进行展示  
在首页的时候  我们需要一个点击事件去进入到职位详情页 一般我们是用ng-click  但这里我们用这个 ui-sref

  对应的 controller.js  都去做  这样  我们点击就进入详情页了   开始制作页面
  制作一个共用的headerBar

 公司职位的开发    company.html   我们点击跳转  要转到详情页  
 我们直接用标签写样式的这种感觉很不好   因为一旦dom结构发生变化  就失效了

 我们开始编写我们的业务逻辑     mainCtrl.js  就是去请求json数据 把列表拿过来

 我们再来看看职位详情

 positionCtrl.js

 //这个地方有  职位信息 和公司信息   我们一般用两个接口去调用
 //$state 有个params有个属性 我们这里要传入一个id  params就是一个json对象
 // 我们这里应该是先查询职位信息 ，获取到职位信息之后 ，这个职位对应的是那个公司  company有个id
 // 注意：有两个请求的时候还好 请求多多了我们要使用$q 服务 为了实现promise和延迟加载对象的一个服务
  1.我们定义一个函数将异步的请求放进去
  2.在内部我们声明一个延迟对象 在末尾我们把他的promise属性return出来  请求成功之后我们可以传回去，也可以不传回去


  company.html   查询接口数据，把这个数据传递





 <!--这个地方定位结束之后有一个点亮的动作 我们去指令里面做  link  这个地方我们这样处理
 一般我们写指令都是直接可以用的  这个地方有点特殊
 -->
 <!--我们判断一下图片是否展示 -->

首先判断收藏图icon是否展示  按钮没登陆之前 显示取登陆  登陆后，显示投简历  




开始去完成我们的两个指令   <div app-position-info></div>
<div app-company></div>

6.制作底部页面footer.html   然后我们再创建一个脚本
7.style下面创建对应的模版  样式
