(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{409:function(a,s,t){a.exports=t.p+"assets/img/chakan_ip_4_address.7fa20b70.png"},410:function(a,s,t){a.exports=t.p+"assets/img/modify_env_config.c34df8c5.png"},411:function(a,s,t){a.exports=t.p+"assets/img/add_agent.a8c1f906.png"},412:function(a,s,t){a.exports=t.p+"assets/img/config_agent.4a69dce7.png"},426:function(a,s,t){"use strict";t.r(s);var e=t(2),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#介绍"}},[a._v("介绍")])]),s("li",[s("a",{attrs:{href:"#_1-安装dokcer"}},[a._v("1.安装Dokcer")])]),s("li",[s("a",{attrs:{href:"#_2-安装mysql"}},[a._v("2.安装MySQL≠")]),s("ul",[s("li",[s("a",{attrs:{href:"#_1-通过doker安装mysql"}},[a._v("（1）通过doker安装mysql")])]),s("li",[s("a",{attrs:{href:"#_2-允许mysql支持远程访问"}},[a._v("（2）允许mysql支持远程访问")])]),s("li",[s("a",{attrs:{href:"#_3-创建sonic数据库"}},[a._v("（3）创建sonic数据库")])])])]),s("li",[s("a",{attrs:{href:"#_3-前后端部署"}},[a._v("3.前后端部署")]),s("ul",[s("li",[s("a",{attrs:{href:"#_1-获取sonic-server端最新的安装包"}},[a._v("（1）获取sonic server端最新的安装包")])]),s("li",[s("a",{attrs:{href:"#_2-获取本机的ipv4地址"}},[a._v("（2）获取本机的ipv4地址")])]),s("li",[s("a",{attrs:{href:"#_3-配置修改-env中的信息-重要"}},[a._v("（3）配置修改.env中的信息(重要)")])]),s("li",[s("a",{attrs:{href:"#_4-通过docker部署服务"}},[a._v("（4）通过docker部署服务")])])])]),s("li",[s("a",{attrs:{href:"#_4-agent端部署"}},[a._v("4.agent端部署")]),s("ul",[s("li",[s("a",{attrs:{href:"#_1-安装jdk-15版本"}},[a._v("(1) 安装jdk 15版本")])]),s("li",[s("a",{attrs:{href:"#_2-添加安卓sdk设置到系统环境变量"}},[a._v("(2) 添加安卓SDK设置到系统环境变量")])]),s("li",[s("a",{attrs:{href:"#_3-下载agent端jar包"}},[a._v("(3) 下载agent端jar包")])]),s("li",[s("a",{attrs:{href:"#_4-配置agent端"}},[a._v("(4) 配置agent端")])])])]),s("li",[s("a",{attrs:{href:"#附-参考文献"}},[a._v("附.参考文献")])])])]),s("p"),a._v(" "),s("h2",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[a._v("#")]),a._v(" 介绍")]),a._v(" "),s("p",[a._v("Sonic是一站式开源分布式集群云真机测试平台，致力服务于中小企业的客户端UI测试。近期尝试搭建了下相关的服务试用，整体感觉很不错，这里mark下搭建流程。")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://sonic-cloud.cn/",target:"_blank",rel:"noopener noreferrer"}},[a._v("sonic官网地址"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"_1-安装dokcer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装dokcer"}},[a._v("#")]),a._v(" 1.安装Dokcer")]),a._v(" "),s("p",[a._v("推荐在Mac上使用desktop版本，方便可视化的进行管理与使用。")]),a._v(" "),s("h2",{attrs:{id:"_2-安装mysql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装mysql"}},[a._v("#")]),a._v(" 2.安装MySQL≠")]),a._v(" "),s("h3",{attrs:{id:"_1-通过doker安装mysql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-通过doker安装mysql"}},[a._v("#")]),a._v(" （1）通过doker安装mysql")]),a._v(" "),s("p",[s("strong",[a._v("官方推荐使用的版本为5.7")]),a._v("，为了方便集成部署，推荐通过docker进行MySQL的安装。")]),a._v(" "),s("p",[a._v("安装命令：")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("docker run "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v("name ide"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("mysql "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("v "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Users")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("fengbin"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Documents")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("qamysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("lib"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("/")]),a._v("mysql "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("e "),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("MYSQL_ROOT_PASSWORD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token constant"}},[a._v("XXXXX")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("p "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8888")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3306")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("d mysql"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5.7")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("需要手动修改的几个重要参数")]),a._v(" "),s("blockquote",[s("p",[a._v("--name：给相应的docker容器起一个名字，方便后续在Docker的desktop管理端查看；")]),a._v(" "),s("p",[a._v("-v："),s("strong",[a._v("数据库的挂载地址")]),a._v("，:前面填写自己本地电脑的一个完整路径，")]),a._v(" "),s("p",[a._v("-e：MYSQL_ROOT_PASSWORD=XXXXX，XXXXX部分替换为自己设置好的密码，"),s("strong",[a._v("后续部署sonic会使用到")]),a._v("。")]),a._v(" "),s("p",[a._v("-p：端口映射规则，这里配置的是8888:3306，"),s("strong",[a._v("后续部署sonic会使用到端口号")]),a._v("。")])]),a._v(" "),s("h3",{attrs:{id:"_2-允许mysql支持远程访问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-允许mysql支持远程访问"}},[a._v("#")]),a._v(" （2）允许mysql支持远程访问")]),a._v(" "),s("p",[a._v("通过"),s("code",[a._v("docker ps -a")]),a._v("查看启动的mysql容器，对应的容器id，之后输入命令进入容器：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker exec -it 容器id /bin/bash\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("修改访问的权限：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("mysql -p\n\nGRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'XXXXX' WITH GRANT OPTION;\n\nflush privileges;\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("p",[a._v("注意，"),s("strong",[a._v("XXXXX需要替换为之前启动mysql容器时，设置的数据库密码")]),a._v("。")]),a._v(" "),s("h3",{attrs:{id:"_3-创建sonic数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-创建sonic数据库"}},[a._v("#")]),a._v(" （3）创建sonic数据库")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("CREATE DATABASE IF NOT EXISTS sonic\nDEFAULT CHARACTER SET utf8;\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("输入quit退出mysql的命令行，输入exit退出docker的命令行交互。")]),a._v(" "),s("h2",{attrs:{id:"_3-前后端部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-前后端部署"}},[a._v("#")]),a._v(" 3.前后端部署")]),a._v(" "),s("h3",{attrs:{id:"_1-获取sonic-server端最新的安装包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-获取sonic-server端最新的安装包"}},[a._v("#")]),a._v(" （1）获取sonic server端最新的安装包")]),a._v(" "),s("p",[a._v("在"),s("a",{attrs:{href:"https://github.com/SonicCloudOrg/sonic-server/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("sonic官方的git下载仓库链接页面"),s("OutboundLink")],1),a._v("，下载最新版本的zip包，并解压缩到特定的部署目录下。")]),a._v(" "),s("h3",{attrs:{id:"_2-获取本机的ipv4地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-获取本机的ipv4地址"}},[a._v("#")]),a._v(" （2）获取本机的ipv4地址")]),a._v(" "),s("p",[a._v("mac机器上，查看获取自己机器的ipv4地址，"),s("strong",[a._v("该字段非常重要，关系到后续的部署是否可以成功")]),a._v("。")]),a._v(" "),s("p",[s("img",{attrs:{src:t(409),alt:"查看ipv4地址"}})]),a._v(" "),s("h3",{attrs:{id:"_3-配置修改-env中的信息-重要"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置修改-env中的信息-重要"}},[a._v("#")]),a._v(" （3）配置修改.env中的信息(重要)")]),a._v(" "),s("p",[s("img",{attrs:{src:t(410),alt:"修改env配置"}})]),a._v(" "),s("p",[a._v("ip地址相关的配置，一共三处，统一修改为步骤2中获取到的本机ipv4地址。")]),a._v(" "),s("p",[a._v("数据库相关的配置，一共两处，统一修改为启动mysql容器时，"),s("strong",[a._v("设置的数据库端口，以及数据库密码")]),a._v("。")]),a._v(" "),s("h3",{attrs:{id:"_4-通过docker部署服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-通过docker部署服务"}},[a._v("#")]),a._v(" （4）通过docker部署服务")]),a._v(" "),s("p",[a._v("在项目的根目录下，执行命令：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("docker-compose up -d\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("之后等待前后端部署完成即可，期间可能需要等待3-5分钟。打开浏览器访问 "),s("a",{attrs:{href:"http://localhost:3000",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://localhost:3000"),s("OutboundLink")],1),a._v("，如果可以成功的看到登录注册页面，即说明相关服务部署成功。")]),a._v(" "),s("h2",{attrs:{id:"_4-agent端部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-agent端部署"}},[a._v("#")]),a._v(" 4.agent端部署")]),a._v(" "),s("p",[a._v("因为sonci本身的架构是分布式的，类似jenkins的master和slave方式。agent可以部署到不同的电脑上作为分布式节点，一个agent最多可以带50个移动设备。")]),a._v(" "),s("p",[a._v("sonic官方提供了docker部署的模式，但是仅Ubuntu可用，笔者这里是mac环境，因此采用的jar方式进行。")]),a._v(" "),s("h3",{attrs:{id:"_1-安装jdk-15版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装jdk-15版本"}},[a._v("#")]),a._v(" (1) 安装jdk 15版本")]),a._v(" "),s("p",[a._v("已知部分 JDK 出现不兼容的问题，Sonic 官方推荐使用 JDK15，"),s("a",{attrs:{href:"https://docs.aws.amazon.com/corretto/latest/corretto-15-ug/downloads-list.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("下载链接地址"),s("OutboundLink")],1),a._v("。")]),a._v(" "),s("p",[a._v("部分开发者本地可能并不常用JDK15的环境，推荐参考"),s("a",{attrs:{href:"https://blog.csdn.net/wo541075754/article/details/115283006",target:"_blank",rel:"noopener noreferrer"}},[a._v("Mac下安装多个版本的JDK并随意切换"),s("OutboundLink")],1),a._v("的方式，安装多个jdk版本，并通过命令行的方式随意切换：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("jdk15  // 切换到15版本\njdk8   // 切换到8版本\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h3",{attrs:{id:"_2-添加安卓sdk设置到系统环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-添加安卓sdk设置到系统环境变量"}},[a._v("#")]),a._v(" (2) 添加安卓SDK设置到系统环境变量")]),a._v(" "),s("p",[a._v("需要安卓SDK设置到系统环境变量，命名为ANDROID_HOME。打开SDKManager，下载platform-tools。确保platform-tools目录存在，adb指令可用。将ANDROID_HOME、ANDROID_HOME/platform-tools添加到系统PATH中。")]),a._v(" "),s("h3",{attrs:{id:"_3-下载agent端jar包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-下载agent端jar包"}},[a._v("#")]),a._v(" (3) 下载agent端jar包")]),a._v(" "),s("p",[a._v("在"),s("a",{attrs:{href:"https://github.com/SonicCloudOrg/sonic-agent/releases",target:"_blank",rel:"noopener noreferrer"}},[a._v("sonic-agent下载页面"),s("OutboundLink")],1),a._v("下载最新的客户端。")]),a._v(" "),s("p",[a._v("赋予工作目录所有权限，然后确保解压后的 mini、config、plugins 文件夹与 jar 同级")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-R")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("777")]),a._v(" xxxxx\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"_4-配置agent端"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-配置agent端"}},[a._v("#")]),a._v(" (4) 配置agent端")]),a._v(" "),s("p",[a._v("在server平台页面，新增加一个agent端：")]),a._v(" "),s("p",[s("img",{attrs:{src:t(411),alt:"新增agent端"}})]),a._v(" "),s("p",[a._v("修改"),s("code",[a._v("sonic-agent/config/application-sonic-agent.yml")]),a._v("下的配置信息：")]),a._v(" "),s("p",[s("img",{attrs:{src:t(412),alt:"修改agent端配置"}})]),a._v(" "),s("p",[a._v("重要关注项目：")]),a._v(" "),s("blockquote",[s("p",[a._v("agent端的ipv4地址，获取方式同部署server端时获取ip地址的方式一致")]),a._v(" "),s("p",[a._v("server端的ip与端口号，要与部署server端时的配置一致。")]),a._v(" "),s("p",[a._v("wda-bundle-id：运行ios设备时，需要自己在测试的ios设备上运行一个wda，修改bundleid，保持一致。")])]),a._v(" "),s("p",[a._v("修改完成后，执行启动命令：")]),a._v(" "),s("div",{staticClass:"language-java line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("java "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Dfile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("encoding"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("utf"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("jar sonic"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("agent"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("macosx"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("x86_64"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("jar\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("如果发现端口并占用，可通过如下命令进行重启：")]),a._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("lsof -ti:7777 | xargs kill -9\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"附-参考文献"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#附-参考文献"}},[a._v("#")]),a._v(" 附.参考文献")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://kuizuo.cn/docs/docker-accesses-host-service",target:"_blank",rel:"noopener noreferrer"}},[a._v("1. Docker访问宿主机上服务"),s("OutboundLink")],1)]),a._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/wo541075754/article/details/115283006",target:"_blank",rel:"noopener noreferrer"}},[a._v("2. Mac下安装多个版本的JDK并随意切换"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);