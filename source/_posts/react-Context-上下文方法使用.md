---
title: react Context(上下文方法使用)
date: 2019-03-29 14:41:51
tags: react
description:
categories: 技术
---

> 使用React.createContext创建上下文，父组件使用 LocaleContext.Provider 创建组件，包裹的子组件使用 LocaleContext.Consumer 创建组件。当父组件的value值改变时就会重新渲染子组件

```
//定义
const defaultValue = 'aaa';
const LocaleContext = React.createContext(defaultValue);

//父组件
class LocaleProvider extends React.Component{
    state = {
        locale: defaultValue
    }
    render(){
        return (
            <LocaleContext.Provider value={this.state.locale}>
                <button onClick={()=>this.setState({locale: 'bbb')})} >
                    切换
                </button>
                {this.props.children]
            </LocaleContext.Provider>
        )
    }
}

//子组件
class LocaledButtons extends React.Componet{
    render(){
        return (
            <LocaleContext.Consumer>
                {locale => (
                    <div>
                        <span>{locale}</span>
                    </div>
                }
            </LocaleContext.Consumer>        
        )
    }
}

//实际使用
export default () => (
    <LocaleProvider>
        <LocaledButtons />
    </LocaleProvider>
)


```
