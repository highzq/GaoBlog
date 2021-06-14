---
title: React15 和 React16 生命周期区别对比
date: 2021-04-14 00:45:13
tags: [前端, react]
categories: 技术
---



## getDerivedStateFromProps 和 componentWillMount
> 为何React 16要替换掉 componentWillMount 呢？
其实 componentWillMount 的存在不仅鸡肋，而且风险极高。很多开发者（也包括我）在React15的 componentWillMount 中或多或少都栽过跟头，喜欢在其中去写一些异步代码和初始化操作，从而造成组件数据或真实Dom渲染上的一系列问题。总的来说，getDerivedStateFromProps并不是想要替代 componentWillMount，因为 componentWillMount 就应该被废弃。


## getDerivedStateFromProps 和 componentWillReceiveProps
> 为何React 16要替换掉 componentWillReceiveProps 呢？
首先，getDerivedStateFromProps 是作为一个试图替代 componentWillReceiveProps 的API出现的，但是，它又不完全等于 componentWillReceiveProps。我们前面说过，getDerivedStateFromProps有且仅有一个用途：使用props 来 派生/更新 state。所以，getDerivedStateFromProps 非常专注，它的用途非常简单。而 componentWillReceiveProps 中可以做更多的事，这样说来，componentWillReceiveProps比getDerivedStateFromProps功能更强大啊，为何要被替换掉呢？其实，一个API并非越庞大越复杂才越优秀。getDerivedStateFromProps正是在componentWillReceiveProps上做了合理的减法。从getDerivedStateFromProps 被定义成静态方法就可以看出React团队是为了通过对生命周期方法的限制来帮助开发者们避免掉一些不必要的坑。React 16正是在强制推行“只用getDerivedStateFromProps来完成props到state的映射”，从根源上帮开发者避免不合理的编程方式以及对生命周期的滥用。


## getSnapshotBeforeUpdate 和 componentWillUpdate
> 我们前面说过，getSnapshotBeforeUpdate的设计初衷就是为了和componentDidUpdate 一起涵盖过时的 componentWillUpdate方法的所有用例。所以，他们的区别其实与前面 getDerivedStateFromProps 和 componentWillReceiveProps 的区别类似。至于 componentWillUpdate 为何非死不可呢，关键还是因为它挡了新的 Fiber 架构的路。


## 相关文章
- [React Fiber架构设计原理](http://42.192.139.254:7777/2021/04/14/React%20Fiber%E6%9E%B6%E6%9E%84%E8%AE%BE%E8%AE%A1%E5%8E%9F%E7%90%86/)
- [React16 中生命周期废旧立新的思考（为什么要废弃三个API）](http://42.192.139.254:7777/2021/04/14/React16%20%E4%B8%AD%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E5%BA%9F%E6%97%A7%E7%AB%8B%E6%96%B0%E7%9A%84%E6%80%9D%E8%80%83%EF%BC%88%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E5%BA%9F%E5%BC%83%E4%B8%89%E4%B8%AAAPI%EF%BC%89/)


[摘要文章](https://blog.csdn.net/qq_24719349/article/details/113397110?utm_medium=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-1.control&dist_request_id=&depth_1-utm_source=distribute.pc_relevant_t0.none-task-blog-2%7Edefault%7EBlogCommendFromMachineLearnPai2%7Edefault-1.control)