# AI-Attendance

#### 介绍
一、
1.给项目起个名字：AI-Attendance  
2.建立项目的源码库 注册账号，下载安装git  
	git三个命令：checkout、submit、push  
3.给源码库建立目录，docs、code  
4.进行需求分析、设计  
	下载安装Axure RP  
  
二、Excel需求分析：  
1.工作流程  
2.人员、角色分析  
	人员：老师、学生也是角色  
	老师：功能需求、界面需求、数据需求  
3.开发  
	Web系统  
 	NodeJS  
	VSCode  
  
三、开发两条线：  
1.关键技术：邮箱、人脸识别、导入Excel、生成二维码  
2.功能性开发：接口  


#### 软件架构
软件架构说明


#### 安装教程
建立开发环境  
NodeJs  
1.安装Express Web开发框架，解决什么问题：url -后端程序的对应关系  
	npm i  
	npm i express -g  
	npm init  
	npx express-generator  
	http://localhost:3000  
2.不用重启，热启动  
	普通启动node ./bin/www  
	安装nodemon npm install --global nodemon  
	热启动nodemon ./bin/www  
3.解决命令太长问题，修改package.scripts：nodemon --inspect ./bin/www  
	直接输npm run mycmd启动  
4.调试  
	node --inspect ./bin/www或直接npm run mycmd  
	调试端口：http://localhost:9229/json/list复制Compat  
	http://localhost:3000直接在Chrome进行修改与调试后端VSCode也会跟着被修改  
	前端：public文件夹  
5.前端文件静态文件放在什么地方？  
	express  
	（1）静态文件放在public路径下  
	（2）动态程序按照url对应的route路径  

#### 使用说明

1.  xxxx
2.  xxxx
3.  xxxx

#### 参与贡献

1.  Fork 本仓库
2.  新建 Feat_xxx 分支
3.  提交代码
4.  新建 Pull Request

