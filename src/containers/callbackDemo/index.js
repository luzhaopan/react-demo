import React, { useCallback, useState } from "react";
// import SomeComponent from "./someComponent";

// function CallbackDemo() {
//   const test = () => {
//     console.log("test");
//   };
//   const memoizedHandleClick = useCallback(() => {
//     console.log("Click happened");
//     test();
//   }, []); // 空数组代表无论什么情况下该函数都不会发生改变
//   return (
//     <SomeComponent onClick={memoizedHandleClick}>useCallback</SomeComponent>
//   );
// }

function CallbackDemo() {
  const [count, setCount] = useState(1);
  const [val, setValue] = useState("");

  const getNum = useCallback(() => {
    return Array.from({ length: count }, (v, i) => i).reduce((a, b) => a + b);
  }, [count]);

  return (
    <div>
      <Child getNum={getNum} />
      <div>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <input value={val} onChange={(event) => setValue(event.target.value)} />
      </div>
    </div>
  );
}

const Child = React.memo(function ({ getNum }) {
  console.log("render again ?");
  return <h4>总和：{getNum()}</h4>;
});

/**
 *
 * 把内联回调函数及依赖项数组作为参数传入 useCallback，它将返回该回调函数的 memoized 版本，
 * 该回调函数仅在某个依赖项改变时才会更新。
 * 当你把回调函数传递给经过优化的并使用引用相等性去避免非必要渲染（例如 shouldComponentUpdate）的子组件时，它将非常有用
 *
 *
 * React.memo() 和 PureComponent 很相似，它帮助我们控制何时重新渲染组件。
 * 组件仅在它的 props 发生改变的时候进行重新渲染。通常来说，在组件树中 React 组件，
 * 只要有变化就会走一遍渲染流程。但是通过 PureComponent 和 React.memo()，我们可以仅仅让某些组件进行渲染
 *
 */

export default CallbackDemo;
