---
title: Decorator（修饰器）
date: 2021-03-22 16:47:56
tags: [前端, es6]
categories: 技术
---



### 修饰器用法及参数


> 基础用法

```
/*
target: 对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
name: 属性名
descriptor: 成员的属性描述符，可以设置是否可读，可写等
  {
     value: specifiedFunction,   控制对应的值，方法只是一个 value 是函数的属性。
     enumerable: false,  控制是不是能枚举出属性。
     configurable: true,  控制是不是能删、能修改 descriptor 本身。
     writable: true  控制是不是能修改值。
  };
*/
function logWrapper (target, name, descriptor){
    console.log(target, name, descripto);
}

//使用方式
@logWrapper
class App{
   
}


```

> 带参数用法

```
function logWrapper (target, name, descriptor){
    return function(text){
        target.render = () =>{console.log(text)}
    }
}

//使用方式
@logWrapper("Hello World")
class App{
    //注意，这里没有render方法，通过注入一个render方法
}

new App().render();//输出"Hello World"
```

> 在属性上的用法

```
function logWrapper (target, name, descriptor){
    console.log(name);  //aa，可以通过descriptor控制属性的是否可读，可写，可删等
    descriptor.writable = false; //设置属性不能修改
}

//使用方式
class App{
    @logWrapper
    aa = '123';
}

App.aa = '456';  //会出现报错，因为设置了属性不能修改

```



