---
title: 手动实现一个new方法
date: 2021-04-15 00:18:17
tags: [前端]
categories: 技术
---




在调用 new 的过程中会发生以下四件事（摘自JavaScript高级程序设计，2019-07-22）：

新生成一个对象
将构造函数的作用域赋值给新对象（即绑定新对象的 this）
执行构造函数中的代码（即为这个新对象添加属性）
返回新对象

构造一个最简单版 new：

```
function _new() {
	// 创建一个新对象
    let newObj = {};  
    // 获取构造函数
    let Constructor = Array.prototype.shift.call(arguments);
    // 连接新对象原型，新对象可以访问原型中的属性
    newObj.__proto__ = Constructor.prototype;
    // 执行构造函数，即绑定 this，并且为这个新对象添加属性
    Constructor.apply(newObj, arguments);
    // 返回该对象
    return newObj;
}
```