---
title: url编码
date: 2021-09-06 10:47:45
tags: 前端
categories: 技术
---



## encodeURI---> decodeURI


```
encodeURI 着眼于对整个URL进行编码，除了常见的符号以外，对其他一些在网址中有特殊含义的符号“; / ? : @ & = + $ , #”，不进行编码。编码后，它输出符号的utf-8形式，并且在每个字节前加上%。

也由于encodeURI不会编码“; / ? : @ & = + $ , #”等，因此它很适用于来编码完整的url，因为这些字符是用来分割主机和路径的。它对应的解码是decodeURI

```


## encodeURIComponent--->decodeURIComponent
> url参数中是url的情况一般使用这种方法

```
从上面提到的安全字符范围表格来看，我们会发现，encodeURIComponent编码的字符范围要比encodeURI的大。

它跟encodeURI的区别就是，encodeURI是对整个url进行编码，而encodeURIComponent是对url的个别部分进行编码。因此，像“; / ? : @ & = + $ , #” 这些也是会被编码的。

所以如果你要编码的是url的一部分，而不是整个url，用encodeURIComponent编码是不错的选择。平时的工作中，用encodeURIComponent的概率多一点

```

#### 小结

1、escape() 已被弃用，不要用


2、encodeURI()：编码整个url地址，对特殊符号，如 "; / ? : @ & = + $ , #"，不进行编码，对应的解码函数是：decodeURI()。

3、encodeURIComponent() ：能编码"; / ? : @ & = + $ , #"这些特殊字符。编码url中的部分组件，用的较多。对应的解码函数是decodeURIComponent()。