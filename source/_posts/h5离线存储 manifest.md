---
title: h5离线存储 manifest
date: 2021-03-28 19:14:34
tags: [前端]
categories: 技术
---





### h5离线存储 manifest


####  问题分析


HTML5提出的一个新的特性：离线存储。通过离线存储，我们可以通过把需要离线存储在本地的文件列在一个manifest配置文件中，这样即使在离线的情况下，用户也可以正常看见网页。


#### 核心问题讲解


**查看 在 application  ----  application cache里面可以看见**


**使用**


1  在需要离线缓存存储的页面 加上  manifest = "cache.manifest"


```
<!DOCTYPE HTML>
<html manifest = "cache.manifest">
...
</html>
```


2 在根目录 新建文件 cache.manifest 并写上对应代码


```
CACHE MANIFEST
#v0.11


CACHE:


js/app.js
css/style.css


NETWORK:
resourse/logo.png


FALLBACK:
/ /offline.html
```


离线存储的manifest一般由三个部分组成:


1. CACHE:表示需要离线存储的资源列表，由于包含manifest文件的页面将被自动离线存储，所以不需要把页面自身也列出来。 **会在当前浏览器存上**
2. NETWORK:表示在它下面列出来的资源只有在在线的情况下才能访问，他们**不会被离线存储**，所以在离线情况下无法使用这些资源。不过，如果在CACHE和NETWORK中有一个相同的资源，那么这个资源还是会被离线存储，也就是说CACHE的优先级更高。
3. FALLBACK:表示如果访问第一个资源失败，那么就使用第二个资源来替换他，比如上面这个文件表示的就是如果**访问根目录下任何一个资源失败了，那么就去访问offline.html**。


#### 问题扩展


**查看 在 application  ----  application cache里面可以看见**