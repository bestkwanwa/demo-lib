# Demo 1

-   react 严格模式开发模式下生命周期不会被调用两次。https://zh-hans.reactjs.org/docs/strict-mode.html
-   在 react 生命周期和合成事件中，react 处于更新机制中，无论调用多少次`setState`，都不会执行更新。而是等到最顶层组件`didmount`之后才执行累计的`setState`。
-   在 react 异步函数和原生事件中，如果在调用`setState`时，react 处于更新过程中，则当前`setState`会暂存，等上一次更新完成再执行。
-   state 合并机制
    如果是对象，则会合并一次，如果是函数，则可以拿到正确的`preState`。

```js
_assign(
    nextState,
    typeof partial === "function"
        ? partial.call(inst, nextState, props, context)
        : partial
);
```
- 官方不建议在`componentDidMount`里直接调用`setState`，因为`componentDidMount`处于更新中，调用`setState`会在未来再进行一次`render`。但是state依赖请求接口数据或者真实dom的属性时，不可避免地在`componentDidMount`里调用`setState`。
