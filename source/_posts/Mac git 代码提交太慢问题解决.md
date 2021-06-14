---
title: Mac git 代码提交太慢问题解决
date: 2021-06-07 22:26:56
tags: [git]
categories: 技术
---

```

// 终端获取权限
$ Sudo -s

// 记录下ip
$ ping github.com

// 记录下ip
$ ping github.global.ssl.fastly.net

// 终端编辑host文件
$ vim /etc/hosts


// 输入 i 进入输入模式
// 加入这两行代码（ip替换成刚才记录的ip）
192.30.253.112 github.com
151.101.113.194 github.global.ssl.fastly.net

// 编辑完成esc退出输入模式，然后:wq 保存退出

 //更新DNS缓存
$ sudo dscacheutil -flushcache

```