# menuItem
menuItem Attribute

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
title | item的标题文字 | [string,number] | required | -
index | 序号 | [string,number] | required | -
route | 路由 | [string] | - | -
> route给参数，menu切换就会切换路由，menu组件内部监听路由的变化，
根据路由的name属性来自动设定对应的menuItem的active状态。

