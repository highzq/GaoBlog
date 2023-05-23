---
title: js事件循环队列
date: 2021-03-22 23:28:12
tags: [前端]
categories: 技术
---
 

> 宏任务有：setTimeout，setInterval，requestAnimationFrame，I/O


> 微任务有：promise，process.nextTick，Object.observe，MutationObserver（promise里then的微任务就是用这个api实现的）


> 先同步，再取出第一个宏任务执行所有的相关微任务总会在下一个宏任务之前全部执行完毕，如果遇见就先微后宏


> 问：事件循环是先宏后微，还是先微后宏？


- 答：不能这样一概而论，很多文章直接会说结果先执行微任务，再执行宏任务。我认为这是有问题的，应该描述整个过程。因为js本身主进程代码也是宏任务，然后再去执行微任务队列的代码，再执行宏任务。

```
//例子
console.log(1);
setTimeout(function(){
    console.log(2);
});
new Promise(function(resolve){
    console.log(3);
    resolve();
}).then(function(){
    console.log(4);
});


//结合上面的知识点这里可以得出的输出结果为：1342
/*
1. 首先执行同步代码 输出：1

2. 遇到setTimeout，这个属于宏任务，先不执行，放入任务队列
3. Promise是立刻执行 输出：3
4. then是微任务，也放入队列
5. 开始执行任务队列中的代码，此时队列中有两个任务一个宏任务，一个微任务，结合上面的先微后宏，
 所以先执行then内的代码输出：4，然后在执行setTimeout代码输出：2
*/
```

> Promise 的异步不仅仅只是 setTimeout，这里会根据不同环境来采用不同的实现方式，浏览器中主要用了 MutationObserver（高版本浏览器使用，这时候then就是微任务形式） 和 setTimeout（低版本浏览器使用，这时候then就是宏任务任务形式），所以在不同版本浏览器看到的执行结果是不一致的

```
// ie11
setTimeout(function () {console.log(1)});
Promise.resolve().then(function () {
console.log(2);
});
// 输出结果为 2 1

// ie10
setTimeout(function () {console.log(1)});
Promise.resolve().then(function () {
console.log(2);
});
// 输出结果为 1 2
```
