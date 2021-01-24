---
title: 部署Yapi遇到的问题
date: 2020-12-01
tags: [心得,文章]
categories: 记录
---


> 在使用命令行的方式部署，到了这一步 npm run install-server 或者 node server/app.js 这个命令时报了一个MongoDB的错误
```
error: MongoNetworkError: Authentication failed., mongodb Authenticatio
```
最后只需要把vendors文件夹同级的config.json里面的 "user" 和 "pass" 清空就好了（文件初始是带有默认值的） 
![image](/assets/yapi-img.png)