---
title: React16 中生命周期废旧立新的思考（为什么要废弃三个API）
date: 2021-04-14 00:40:05
tags: [前端, react]
categories: 技术
---



> React 16废弃了三个生命周期函数，分别是：componentWillMount、componentWillUpdate以及componentWillReceiveProps。为何要废弃掉它们呢？
在Fiber机制下，render阶段是允许暂停、终止和重启的。这就导致render阶段的生命周期都是有可能被重复执行的。而这几个被废弃的生命周API常年被滥用，它们在重复执行的过程中都存在着不容小觑的风险。比如在这些生命周期中使用setState、fetch发起异步请求、操作真实Dom等等。而这些操作完全可以转移到其他生命周期中去做。而在Fiber带来的异步渲染机制下，这些生命周期都有可能被重复执行，所以可能会导致非常严重的bug。即使没有开启异步渲染，React15中也可能导致一些严重的问题，比如在componentWillReceiveProps 和 componentWillUpdate里滥用setState导致重复渲染死循环。


>总的来说，React16 改造生命周期的主要动机还是为了配合Fiber架构带来的异步渲染机制。在这个改造过程中，React团队针对生命周期中长期被滥用的部分推行了强制性的最佳实践。这样做首先确保了Fiber机制下数据和视图的安全性，同时也确保了生命周期方法的行为更加纯粹、可控、可预测。


## 相关文章
- [React15 和 React16 生命周期区别对比](hhttp://42.192.139.254:7777/2021/04/14/React15%20%E5%92%8C%20React16%20%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%8C%BA%E5%88%AB%E5%AF%B9%E6%AF%94/)
- [React Fiber架构设计原理](http://42.192.139.254:7777/2021/04/14/React%20Fiber%E6%9E%B6%E6%9E%84%E8%AE%BE%E8%AE%A1%E5%8E%9F%E7%90%86/)


[摘要文章](https://blog.csdn.net/qq_24719349/article/details/113397110?utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-1.control&dist_request_id=&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-1.control)
