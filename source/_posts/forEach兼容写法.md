---
title: forEach兼容写法
date: 2018-07-25 15:51:43
tags: javaScript
---

最近写代码写到循环的时候没有多想就直接用了forEach，最后测试在IE的环境下测出了不兼容，为了不改动代码就打算定义一个 Array.prototype.forEach。

最后在网上找到这段(兼容IE8)

```

    if ( !Array.prototype.forEach ) {
        Array.prototype.forEach = function forEach( callback, thisArg ) {
            var T, k;
            if ( this == null ) {
                throw new TypeError( "this is null or not defined" );
            }
            var O = Object(this);
            var len = O.length >>> 0;
            if ( typeof callback !== "function" ) {
                throw new TypeError( callback + " is not a function" );
            }
            if ( arguments.length > 1 ) {
                T = thisArg;
            }
            k = 0;
            while( k < len ) {
    
                var kValue;
                if ( k in O ) {
                    kValue = O[ k ];
                    callback.call( T, kValue, k, O );
                }
                k++;
            }
        };
    }

```
