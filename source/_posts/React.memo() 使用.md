---
title: React.memo() 使用
date: 2021-03-11 16:34:02
tags: [前端, react]
categories: 技术
---



## React.memo()
> 与PureComponent功能相似，只不过创造==纯函数==组件使用


> React.memo()可接受2个参数，第一个参数为纯函数的组件，第二个参数用于对比props控制是否刷新，与shouldComponentUpdate()功能类似。


```
import React from "react";


function Child({seconds}){
    console.log('I am rendering');
    return (
        <div>I am update every {seconds} seconds</div>
    )
};


function areEqual(prevProps, nextProps) {
    if(prevProps.seconds===nextProps.seconds){
        return true
    }else {
        return false
    }


}
export default React.memo(Child,areEqual)
```

