---
title: React Fiber架构设计原理
date: 2021-04-14 00:49:39
tags: [前端, react]
categories: 技术
---



## React Fiber架构设计原理


> Fiber是React16对React核心算法的一次重写，Fiber会使原本同步的渲染过程变成异步的。
在React16之前，每当我们触发一次组件的更新，React都会构建一颗新的虚拟Dom树，通过与上一次的虚拟Dom树进行diff，实现对Dom的定向更新。这个过程，是一个递归的过程。
同步渲染的递归调用栈是非常深的。这个漫长且不可打断的更新过程，将会带来用户体验层面的巨大风险：同步渲染一旦开始，变回牢牢抓住主线程不放，直至递归彻底完成。在这个过程中，浏览器没有办法处理任何渲染之外的事情，会进入一种无法处理用户交互的状态。因此若渲染时间稍微长一点，页面就会面临卡顿甚至卡死的风险。
而Fiber正好能够解决掉这个风险：Fiber会将一个大的更新任务拆解成许多小任务。每当执行完一个小任务时，渲染线程都会把主线程交回去，看看有没有优先级更高的工作要处理，确保不会出现其他任务被“饿死”的情况，进而避免同步渲染带来的卡顿。
Fiber架构的重要特征就是可以被打断的异步渲染模式。但这个“打断”是有原则的。根据能否被打断这一标准，React16 的生命周期被划分为了render和commit两个阶段，而commit又被细分为了pre-commit和commit。
![react渲染流程图](https://img-blog.csdnimg.cn/20210130165157234.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzI0NzE5MzQ5,size_16,color_FFFFFF,t_70)
**render 阶段：纯净且没有副作用，可能会被React暂停、终止或重新启动。**
**pre-commit 阶段：可以读取Dom。**
**commit 阶段：可以使用Dom，运行副作用，安排更新。**
总的来说，render阶段在执行过程中允许被打断，而commit阶段则总是同步执行的。


## 相关文章
- [React15 和 React16 生命周期区别对比](http://42.192.139.254:7777/2021/04/14/React15%20%E5%92%8C%20React16%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%8C%BA%E5%88%AB%E5%AF%B9%E6%AF%94/)
- [React16 中生命周期废旧立新的思考（为什么要废弃三个API）](http://42.192.139.254:7777/2021/04/14/React16%20%E4%B8%AD%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%BA%9F%E6%97%A7%E7%AB%8B%E6%96%B0%E7%9A%84%E6%80%9D%E8%80%83%EF%BC%88%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E5%BA%9F%E5%BC%83%E4%B8%89%E4%B8%AAAPI%EF%BC%89/)


[摘要文章](https://blog.csdn.net/qq_24719349/article/details/113397110?utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-1.control&dist_request_id=&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-1.control)

