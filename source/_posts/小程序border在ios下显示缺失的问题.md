---
title: 小程序border在ios下显示缺失的问题
date: 2021-11-18 10:40:38
tags: [前端, 小程序]
categories: 技术
---



最近在小程序遇到元素左边框缺失的情况，且只在IOS手机上才会出现，一开始以为是overflow: hidden导致，后面各种调试无果，最后使用下面的方法解决



> 解决办法： border: 1rpx solid #ccc   改成 2rpx解决

