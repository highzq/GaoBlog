---
title: Promise 嵌套 then 和多级 then 的解析
date: 2021-12-30 15:25:57
tags: [前端]
categories: 技术
---



## [Promise 嵌套 then 和多级 then 的解析](https://www.jianshu.com/p/b1abaf792491)


```
Promise.resolve().then(function F1() {
    console.log('promise1')
    Promise.resolve().then(function F4() {
        console.log('promise2');
        Promise.resolve().then(function F5() {
            console.log('promise4');
        }).then(function F6() {
            console.log('promise7');
        })
    }).then(function F7() {
        console.log('promise5');
    })
}).then(function F2() {
    console.log('promise3');
}).then(function F3() {
    console.log('promise6');
})


```


执行结果


- promise1
- promise2
- promise3
- promise4
- promise5
- promise6
- promise7


```
// 解析
1. 首先执行promise.resolve()的第一个then将回调函数F1放入微任务队列，直接执行打印promise1，再把F4放入微任务队列，F1执行完成，F2放入微任务队列
2. 执行微任务队列中的回调函数F4、F2，执行F4打印promise2，把F5放入微任务队列，F4执行完成把F7放入微任务队列，执行F2打印promise3，把F3放入微任务队列
3. 执行微任务队列中的回调函数F5、F7、F3，执行F5打印promise4，把F6放入微任务队列，执行F7打印promise5，执行F3打印promise6
4. 执行微任务队列中的回调函数F6，打印promise7




```

