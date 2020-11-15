---
title: Ubuntu系统服务器获取root权限
date: 2020-11-15 17:20:42
tags: 服务器
description:
categories: 转载记录
copyright:
  enable: true
  permalink: https://blog.csdn.net/SSS_Benjamin/article/details/88415895

---

刚重装好的ubuntu系统只能用普通账户登录没有root权限，有时候会出现没有权限的提示。

###### 解决方法
首先用SSH工具登录服务器，我用的Finalshell，输入以下指令并回车，设置root账户密码（ 为了方便记忆，可以设置成和ubuntu账户相同的密码）
```
sudo passwd root   
```
![image](https://img-blog.csdnimg.cn/20190312101939693.png#pic_center)

按照提示设置好密码后，输入以下指令并回车，修改sshd_config文件
```
sudo vi /etc/ssh/sshd_config
```
![image](https://img-blog.csdnimg.cn/20190312102310568.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1NTU19CZW5qYW1pbg==,size_16,color_FFFFFF,t_70#pic_center)

用键盘向下翻，找到如下图所示的内容
![image](https://img-blog.csdnimg.cn/20190312102402699.png#pic_center)

此时是命令行模式，无法对文件进行修改，按i键并回车进入插入模式就可以修改了
将PermitRootLogin后面的内容改为yes，如下图
![image](https://img-blog.csdnimg.cn/20190312102600657.png#pic_center)

按Esc键回到命令行模式，再按Shift+分号组合键（就是输入冒号的组合键），输入wq并回车，保存并退出
![image](https://img-blog.csdnimg.cn/20190312102814911.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L1NTU19CZW5qYW1pbg==,size_16,color_FFFFFF,t_70#pic_center)

回车后就会回到之前的界面
![image](https://img-blog.csdnimg.cn/20190312102942967.png#pic_center)

输入以下指令并回车，重启ssh服务
```
sudo service ssh restart
```
![image](https://img-blog.csdnimg.cn/2019031210345468.png#pic_center)

然后关掉SSH工具重新打开，修改之前的登录信息或者新建一个连接，用户名是root，密码是本文开头设置的那个密码，就可以直接登录root账户了

