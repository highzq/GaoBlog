---
title: css遮罩层聚焦效果实现方法
date: 2021-12-02 17:56:49
tags: [前端, css]
categories: 技术
---



> 因为没有做上传图片功能，效果图就不加了...

>实现原理，点击元素z-index设置高层级，点击的时候给根元素增加一个全屏遮罩层的样式但是z-index不能比点击元素高，出来的效果就是点击元素的高亮聚焦效果，因为遮罩层在点击元素的下面

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <style>
    .content {
      width: 100px;
      height: 100px;
      background-color: red;
    }
    .box-after {
      position: relative;
    }
    .box-after::after {
      content: "";
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      top: 0;
      background-color: #000;
      opacity: 0.6;
      z-index: 9999;
    }
    .content {
      z-index: 10000;
      position: absolute;
    }
  </style>
  <body>
    <div id="box">
      <div class="content"></div>
    </div>
    <script>
      var dom = document.getElementById("box");
      dom.onclick = function () {
        this.classList.add("box-after");
      };
    </script>
  </body>
</html>


```