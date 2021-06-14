---
title: Object对象下的方法
date: 2021-04-14 11:46:13
tags: [前端]
categories: 技术
---

## Object.create
> 用法1

Object.create()方法创建的对象时，属性是在原型下面的，也可以直接访问 b.rep // {rep: "apple"} ,此时这个值不是吧b自身的，是它通过原型链proto来访问到b的值。
```
// new Object() 方式创建
var a = {  rep : 'apple' }
var b = new Object(a)
console.log(b) // {rep: "apple"}
console.log(b.__proto__) // {}
console.log(b.rep) // {rep: "apple"}


// Object.create() 方式创建
var a = { rep: 'apple' }
var b = Object.create(a)
console.log(b)  // {}
console.log(b.__proto__) // {rep: "apple"}
console.log(b.rep) // {rep: "apple"}
```


> 用法2
Object.create() 用第二个参数来创建非空对象的属性描述符默认是为false的，而构造函数或字面量方法创建的对象属性的描述符默认为true。

```
// 创建一个以另一个空对象为原型,且拥有一个属性p的对象
o = Object.create({}, { p: { value: 42 } })


// 省略了的属性特性默认为false,所以属性p是不可写,不可枚举,不可配置的:
o.p = 24
o.p
//42


o.q = 12
for (var prop in o) {
   console.log(prop)
}
//"q"


delete o.p
//false
```


## Object.assign
```
var triangle = {a: 1, b: 2, c: 3};


function ColoredTriangle() {
  this.color = 'red';
}


//ColoredTriangle.prototype = triangle;  //ColoredTriangle.prototype.constructor === ColoredTriangle// false
Object.assign(ColoredTriangle.prototype, triangle) //ColoredTriangle.prototype.constructor === ColoredTriangle// true


var c = new ColoredTriangle();
```


>因为 Object.assing 是不能拷贝到继承或原型上的方法的。所以 实例c2 没有 a 这个属性。


```


//对象拷贝
var c2 = Object.assign({},c)
console.log(c2.color); //red
console.log(c2.a); //undefined
```
> 解决办法1：就是创建一个空对象，里面有原型属性


```
//创建一个有原型属性的空对象
var obj = Object.create({a:1, b: 2})



//对象拷贝
var c2 = Object.assign(obj, c);
console.log(c2.color); //red
console.log(c2.a); //undefined
```
> 解决办法2：
Object.getPrototypeOf() 得到的是 c 对象的原型，然后作为第一个参数，所以会在新对象c2 的原型上。
Object.getOwnPropertyDescriptors() 得到是 c 对象自身的可枚举属性，作为第二个参数，放在 c2 的实例上。（推荐）


```
var c = new ColoredTriangle();
var c2 = Object.create(Object.getPrototypeOf(c), Object.getOwnPropertyDescriptors(c));


console.log(c2.color); // red
console.log(c2.a); // 1
```


> 为什么使用Object.getOwnPropertyDescriptors，因为这个方法可以拿到get描述符
```
var c = new ColoredTriangle();
Object.defineProperty(c,'colorGet', {
    enumerable: true, // 设为可枚举，不然 Object.assign 方法会过滤该属性
    get(){
        return "Could it return " + this.color
    }
});


var c3 = Object.create(Object.getPrototypeOf(c), Object.getOwnPropertyDescriptors(c));
/*
{
    color: 'red',
    colorGet: 'Could it return red',
    get colorGet: fn,
    __proto__: {
       a: 1
       b: 2
       c: 3
   }
}


*/
```




## Object.getPrototypeOf 


## Object.setPrototypeOf 



## Ojbect.getOwnPropertyDescriptors


## Object.defineProperty

> 方法会直接在一个对象上定义一个新属性，可以在其描述符中控制属性的各种操作


```
const object1 = {};


Object.defineProperty(object1, 'property1', {
  value: 42,
  writable: false
});
```
## Object. freeze，Object.seal
> 将对象中的描述符中控制属性全部改为false，这样一来就不能修改，不能删除


```
var obj = {aa:1,bb:2};
// 两个方法类似
Object.freeze(obj);

Object.seal(obj);

// 判断是否被这些方法操作过
Object.isSealed(obj);
Object.isFrozen(obj);

```


## obj.hasOwnProperty
> 这个方法判断对象自身的属性值是否存在，原型里面的属性不会去判断


```
var obj = {
   aa: 123
}
obj.hasOwnProperty('aa');   // true

obj.hasOwnProperty('toString'); //false

```
## obj.propertyIsEnumerable;
> 是否可被枚举，在控制台输出能否直接看的，


```
var obj = {
   aa: 123
}
obj.hasOwnProperty('aa');   // true

obj.hasOwnProperty('toString'); //false
```






[参考原文](https://www.jianshu.com/p/28d85bebe599)

