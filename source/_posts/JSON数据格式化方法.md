---
title: JSON数据格式化方法
date: 2022-06-08 16:58:45
tags: [前端]
categories: 技术
---



使用JSON.stringify(menuInfos, null, 2)将JSON数据转成格式化的字符串JSON数据



```
  const formatter = useCallback(() => {
    const _data = JSON.stringify(menuInfos, null, 2);
    setData(_data);
  }, []);
```