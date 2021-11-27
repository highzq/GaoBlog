---
title: WeakMap弱映射和WeakSet弱集合 
date: 2021-07-11 16:28:35
tags: [前端]
categories: 技术
---



1.  ”weak“（弱），描述的是JavaScript垃圾回收程序对待“若映射”或“弱集合”中值的方式。
2. WeakSet中”weak“表示弱集合的值是“弱弱地拿着”的，意思就是，这些值不属于正式的引用，不会阻止垃圾回收。