(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{409:function(a,e,t){a.exports=t.p+"assets/img/APi_demo.4377e7c6.png"},410:function(a,e,t){a.exports=t.p+"assets/img/run_e2e_test.0aa6b851.png"},411:function(a,e,t){a.exports=t.p+"assets/img/debug_e2e_test.4766d31d.png"},412:function(a,e,t){a.exports=t.p+"assets/img/uia_server_apks.907e8598.png"},438:function(a,e,t){"use strict";t.r(e);var r=t(2),s=Object(r.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("p"),e("div",{staticClass:"table-of-contents"},[e("ul",[e("li",[e("a",{attrs:{href:"#_1-uiautomator与uiautomator2-server的关系"}},[a._v("1.uiautomator与uiautomator2-server的关系")])]),e("li",[e("a",{attrs:{href:"#_2-调试appium自带的apk"}},[a._v("2.调试Appium自带的APK")])]),e("li",[e("a",{attrs:{href:"#_3-调试设备上的其他应用"}},[a._v("3.调试设备上的其他应用")])]),e("li",[e("a",{attrs:{href:"#_4-基于http请求的方式运行appium-uiautomator2-server"}},[a._v("4.基于HTTP请求的方式运行Appium Uiautomator2 Server")]),e("ul",[e("li",[e("a",{attrs:{href:"#_1-打包appium-uiautomator2-server-工程"}},[a._v("(1) 打包Appium Uiautomator2 Server 工程")])]),e("li",[e("a",{attrs:{href:"#_2-启动-appium-uiautomator2-server-服务"}},[a._v("(2) 启动 Appium Uiautomator2 Server 服务")])]),e("li",[e("a",{attrs:{href:"#_3-给服务发送请求"}},[a._v("(3) 给服务发送请求")])])])]),e("li",[e("a",{attrs:{href:"#_5-参考"}},[a._v("5.参考")])])])]),e("p"),a._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/appium/appium-uiautomator2-server",target:"_blank",rel:"noopener noreferrer"}},[a._v("appium-uiautomator2-server"),e("OutboundLink")],1),a._v(" 是Appium在安卓端实现自动化能力的核心，上层脚本的所有操作，最终都转换成基于 appium-uiautomator2-server 提供的HTTP接口进行调用。本篇讲述该模块的调试方法，帮助读者更好的理解Appium在安卓上是如何实现自动化的。")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/caofengbin/appium-uiautomator2-server",target:"_blank",rel:"noopener noreferrer"}},[a._v("本文配套工程链接"),e("OutboundLink")],1)]),a._v(" "),e("h2",{attrs:{id:"_1-uiautomator与uiautomator2-server的关系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-uiautomator与uiautomator2-server的关系"}},[a._v("#")]),a._v(" 1.uiautomator与uiautomator2-server的关系")]),a._v(" "),e("p",[a._v("UI Automator 是google官方提供的一个用于编写自动化测试的官方库，其优势主要为：")]),a._v(" "),e("blockquote",[e("p",[a._v("官方目前大力支持的框架之一（另外一个是Expresso），")]),a._v(" "),e("p",[a._v("基于安卓原生控件解析，比坐标类型的兼容性更好")]),a._v(" "),e("p",[a._v("提供了丰富的等待机制")]),a._v(" "),e("p",[a._v("不依赖源码(纯黑盒)")]),a._v(" "),e("p",[a._v("可以跨应用。")])]),a._v(" "),e("p",[a._v("市面上的诸多安卓测试工具（Appium，Minitest，ATX）等基本都绕不开对uiautomator库的依赖。")]),a._v(" "),e("p",[a._v("但如果直接使用uiautomator进行自动化测试，需要编写原生的java或kotlin代码，成本较高。"),e("code",[a._v("uiautomator2-server")]),a._v("的作用，就是对uiautomator的API做进一步的封装，并将UI自动化常用的操作，通过HTTP接口的方式提供出来。使用者只需要把Appium Uiautomator2 Server在手机上运行起来，就可以通过给它发送各种HTTP请求，驱动自动化流程的进行。也正是得益于"),e("code",[a._v("uiautomator2-server")]),a._v("这层封装，Appium的上层脚本才可以支持多种编程语言（Ruby,Python,JS,Java），最终都会把上层业务的各种指令转换成"),e("code",[a._v("uiautomator2-server")]),a._v("的接口请求。")]),a._v(" "),e("p",[a._v("为方便学习，"),e("a",{attrs:{href:"https://github.com/caofengbin/appium-uiautomator2-server",target:"_blank",rel:"noopener noreferrer"}},[a._v("本文配套工程链接"),e("OutboundLink")],1),a._v("以源代码形式引入了uiautomator，在"),e("code",[a._v("config.gradle")]),a._v("文件中，将"),e("code",[a._v("useRemoteSDKLibrary")]),a._v("设置为false即为源码依赖模式。")]),a._v(" "),e("h2",{attrs:{id:"_2-调试appium自带的apk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-调试appium自带的apk"}},[a._v("#")]),a._v(" 2.调试Appium自带的APK")]),a._v(" "),e("p",[a._v("Appium官方针对"),e("code",[a._v("Appium Uiautomator2 Server")]),a._v("编写了一系列的E2E测试代码，并提供了一个单独的APK。")]),a._v(" "),e("p",[e("img",{attrs:{src:t(409),alt:""}})]),a._v(" "),e("p",[a._v("测试工程将该apk文件放到了项目的目录下，并修改了运行脚本。")]),a._v(" "),e("p",[e("img",{attrs:{src:t(410),alt:""}})]),a._v(" "),e("p",[a._v("androidTest目录下的用例，可以直接点红框的按钮运行起来。覆盖了"),e("code",[a._v("Appium Uiautomator2 Server")]),a._v("基本的接口调用。")]),a._v(" "),e("p",[e("img",{attrs:{src:t(411),alt:""}})]),a._v(" "),e("p",[a._v("也可以在代码中设置断点，以debug的方式单步调试运行。")]),a._v(" "),e("h2",{attrs:{id:"_3-调试设备上的其他应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-调试设备上的其他应用"}},[a._v("#")]),a._v(" 3.调试设备上的其他应用")]),a._v(" "),e("p",[a._v("由于"),e("code",[a._v("Appium Uiautomator2 Server")]),a._v("编写的E2E测试代码，或默认拉起"),e("code",[a._v("ApiDemos-debug.apk")]),a._v("应用。如果期望验证其他的应用，可以通过设置"),e("a",{attrs:{href:"https://github.com/caofengbin/appium-uiautomator2-server/blob/master/config.gradle",target:"_blank",rel:"noopener noreferrer"}},[a._v("配置文件"),e("OutboundLink")],1),a._v(" 中的 "),e("code",[a._v("runApiDemoApk")]),a._v(" 字段为false。")]),a._v(" "),e("p",[a._v("后续的E2E测试用例将不再拉起默认的应用，可以自己编写针对目标App的测试代码。")]),a._v(" "),e("h2",{attrs:{id:"_4-基于http请求的方式运行appium-uiautomator2-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-基于http请求的方式运行appium-uiautomator2-server"}},[a._v("#")]),a._v(" 4.基于HTTP请求的方式运行Appium Uiautomator2 Server")]),a._v(" "),e("h3",{attrs:{id:"_1-打包appium-uiautomator2-server-工程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-打包appium-uiautomator2-server-工程"}},[a._v("#")]),a._v(" (1) 打包Appium Uiautomator2 Server 工程")]),a._v(" "),e("p",[a._v("在项目根目录下运行打包命令：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("./gradlew clean assembleServerDebug assembleServerDebugAndroidTest\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("注意打包环境的jdk版本必须>=11以上，最终的打包产物为如下的两个apk:")]),a._v(" "),e("p",[e("img",{attrs:{src:t(412),alt:""}})]),a._v(" "),e("p",[a._v("正式安装之前，可以将之前的e2e相关测试apk卸载掉，执行如下命令：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("adb uninstall io.appium.uiautomator2.server.test\nadb uninstall io.appium.uiautomator2.server\nadb uninstall io.appium.uiautomator2.e2etest.test\nadb uninstall io.appium.uiautomator2.e2etest\nadb uninstall io.appium.espressoserver.test\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("p",[a._v("之后通过 "),e("code",[a._v("adb install -r")]),a._v(" 将上面的两个产物apk完成路径拼入，执行安装即可。")]),a._v(" "),e("h3",{attrs:{id:"_2-启动-appium-uiautomator2-server-服务"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-启动-appium-uiautomator2-server-服务"}},[a._v("#")]),a._v(" (2) 启动 Appium Uiautomator2 Server 服务")]),a._v(" "),e("p",[a._v("step1:本地先做端口转发：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("adb forward tcp:65272 tcp:6790\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("其中 65272 可以换为其他的端口号，不冲突即可。")]),a._v(" "),e("p",[a._v("step2:控制台基于instrument启动服务")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("adb shell am instrument -w io.appium.uiautomator2.server.test/androidx.test.runner.AndroidJUnitRunner\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h3",{attrs:{id:"_3-给服务发送请求"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-给服务发送请求"}},[a._v("#")]),a._v(" (3) 给服务发送请求")]),a._v(" "),e("h4",{attrs:{id:"_1-建立连接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-建立连接"}},[a._v("#")]),a._v(" (1) 建立连接")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('curl -d \'{"capabilities":{}}\' -X POST "http://127.0.0.1:65272/session"\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("返回：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('{"sessionId":"ccf6f9e5-4e53-41a3-8212-61ba80a23ed4","value":{"capabilities":{},"sessionId":"ccf6f9e5-4e53-41a3-8212-61ba80a23ed4"}}%\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("表示连接建立成功。")]),a._v(" "),e("p",[e("strong",[a._v("定义变量记录下sessionID，方便后续进一步的调试")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("CUR_SESSION_ID='ccf6f9e5-4e53-41a3-8212-61ba80a23ed4'\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h4",{attrs:{id:"_2-获取视图操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-获取视图操作"}},[a._v("#")]),a._v(" (2) 获取视图操作")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('curl -X GET "http://127.0.0.1:65272/session/$CUR_SESSION_ID/source"\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("输出即位当前界面的完整xml结构。")]),a._v(" "),e("h4",{attrs:{id:"_3-滑动操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-滑动操作"}},[a._v("#")]),a._v(" (3) 滑动操作")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('curl -d \'{"endY":200,"endX":540,"startY":1710,"startX":540,"steps":100}\' -X POST "http://127.0.0.1:65272/session/$CUR_SESSION_ID/touch/perform"\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("h4",{attrs:{id:"_4-查找操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-查找操作"}},[a._v("#")]),a._v(" (4) 查找操作")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('curl -d \'{"selector":"更多信息","strategy":"accessibility id"}\' -X POST "http://127.0.0.1:65272/session/$CUR_SESSION_ID/elements"\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("会查找当前界面 "),e("code",[a._v("accessibility id")]),a._v("为"),e("code",[a._v("更多信息")]),a._v("的元素，结果为：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('{"sessionId":"ccf6f9e5-4e53-41a3-8212-61ba80a23ed4","value":[{"ELEMENT":"00000000-0000-03af-ffff-ffff0000039a","element-6066-11e4-a52e-4f735466cecf":"00000000-0000-03af-ffff-ffff0000039a"}]}%\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("value部分为一个数组，表示查找到了目标元素信息。可以把元素id缓存起来：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("CUR_ELELMENT_ID='00000000-0000-03af-ffff-ffff0000039a'\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("之后基于元素id，实现点击的操作：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('curl -X POST "http://127.0.0.1:65272/session/$CUR_SESSION_ID/element/$CUR_ELELMENT_ID/click"\n')])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br")])]),e("p",[a._v("当前界面 "),e("code",[a._v("accessibility id")]),a._v("为"),e("code",[a._v("更多信息")]),a._v("的元素就会被点击。")]),a._v(" "),e("h4",{attrs:{id:"_5-其他更多操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-其他更多操作"}},[a._v("#")]),a._v(" (5) 其他更多操作")]),a._v(" "),e("p",[a._v("Appium-Server的所有接口定义，均在"),e("a",{attrs:{href:"https://github.com/caofengbin/appium-uiautomator2-server/blob/master/app/src/main/java/io/appium/uiautomator2/server/AppiumServlet.java",target:"_blank",rel:"noopener noreferrer"}},[a._v("AppiumServlet.java"),e("OutboundLink")],1),a._v(" 文件中，按照上述的思路，拼接指定的参数，即可完成各个操作的测试流程。")]),a._v(" "),e("h2",{attrs:{id:"_5-参考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_5-参考"}},[a._v("#")]),a._v(" 5.参考")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://developer.android.com/training/testing/other-components/ui-automator?hl=zh-cn",target:"_blank",rel:"noopener noreferrer"}},[a._v("使用 UI Automator 编写自动化测试"),e("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);