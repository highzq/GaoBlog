---
title: input禁止自动回填方法
date: 2021-03-24 09:59:45
tags: [前端]
categories: 技术
---



> 传统方式是给input加上autocomplete="off"属性，但是在chrome里没有用


```
//在chrome内无效
<input autocomplete="off" />
```


> 在input的password框内加上autocomplete="new-password"有效，顺便连帐号输入框也不再回填


```
<input type="password" autocomplete="new-password" />
```