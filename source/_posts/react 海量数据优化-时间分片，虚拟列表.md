---
title: 海量数据优化-时间分片，虚拟列表
date: 2021-03-11 19:11:00
tags: [前端, react, 性能优化]
categories: 技术
---



## 时间分片


> 时间分片的概念，就是一次性渲染大量数据，初始化的时候会出现卡顿等现象。我们必须要明白的一个道理，js执行永远要比dom渲染快的多。 ，所以对于大量的数据，一次性渲染，容易造成卡顿，卡死的情况。


```
//普通方法下渲染时间在5s左右
class Index extends React.Component<any,any>{
    state={
       list: []
    }
    handerClick=()=>{
       let starTime = new Date().getTime()
       this.setState({
           list: new Array(40000).fill(0)
       },()=>{
          const end =  new Date().getTime()
          console.log( (end - starTime ) / 1000 + '秒')
       })
    }
    render(){
        const { list } = this.state
        console.log(list)
        return <div>
            <button onClick={ this.handerClick } >点击</button>
            {
                list.map((item,index)=><li className="list"  key={index} >
                    { item  + '' + index } Item
                </li>)
            }
        </div>
    }
}


```


> 为了解决一次性加载大量数据的问题。我们引出了时间分片的概念，就是用setTimeout把任务分割，分成若干次来渲染。一共40000个数据，我们可以每次渲染100个， 分次400渲染。


```
class Index extends React.Component<any,any>{
    state={
       list: []
    }
    handerClick=()=>{
       this.sliceTime(new Array(40000).fill(0), 0)
    }
    sliceTime=(list,times)=>{
        if(times === 400) return 
        setTimeout(() => {
            const newList = list.slice( times , (times + 1) * 100 ) /* 每次截取 100 个 */
            this.setState({
                list: this.state.list.concat(newList)
            })
            this.sliceTime( list ,times + 1 )
        }, 0)
    }
    render(){
        const { list } = this.state
        return <div>
            <button onClick={ this.handerClick } >点击</button>
            {
                list.map((item,index)=><li className="list"  key={index} >
                    { item  + '' + index } Item
                </li>)
            }
        </div>
    }
}


```


> setTimeout 可以用 window.requestAnimationFrame() 代替，会有更好的渲染效果。


> [内容来自](https://juejin.cn/post/6908895801116721160#heading-51)

