---
title: promise和async/await区别
date: 2021-03-19 17:19:52
tags: [前端, es6 ]
categories: 技术
---



#### promise


>Promise,简单来说就是一个容器，里面保存着某个未来才会结束的时间(通常是一个异步操作的结果)


```
//promise错误捕获
`let p = new Promise((resolve,reject) => {
    reject('error');
});


p.catch(result => {
    console.log(result);
})`
```


#### async、await


>简洁：异步编程的最高境界就是不关心它是否是异步。async、await很好的解决了这一点，将异步强行转换为同步处理。
async/await与promise不存在谁代替谁的说法，因为async/await是寄生于Promise，Generater的语法糖。


```
//async、await错误捕获
let p = new Promise((resolve,reject) => {
    setTimeout(() => {
        reject('error');
    },1000);
});


async function demo(params) {
    try {
        let result = await p;
    }catch(e) {
        console.log(e);
    }
}


demo();
```






#### 区别 


```
1 promise是ES6，async/await是ES7
2 async/await相对于promise来讲，写法更加优雅
3 reject状态：
    1）promise错误可以通过catch来捕捉，建议尾部捕获错误，
    2）async/await既可以用.then又可以用try-catch捕捉
```