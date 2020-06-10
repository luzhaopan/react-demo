import React, { useMemo, useState } from "react";
// import SomeComponent from "./someComponent";

// function MemoDemo() {
//   const memoizedHandleClick = useMemo(
//     () => () => {
//       console.log("Click happened");
//     },
//     []
//   ); // 空数组代表无论什么情况下该函数都不会发生改变
//   return <SomeComponent onClick={memoizedHandleClick}>useMemo</SomeComponent>;
// }

// export default MemoDemo;
/**
 *
 * 唯一的区别是：useMemo返回的是函数运行的结果，useCallback返回的是函数
 * useCallback 不会执行第一个参数函数，
 * 而是将它返回给你，而 useMemo 会执行第一个函数并且将函数执行结果返回给你。
 *
 * useCallback 常用记忆事件函数，生成记忆后的事件函数并传递给子组件使用。
 * 而 useMemo 更适合经过函数计算得到一个确定的值，比如记忆组件。
 *
 */
// const Child1 = () => {
//   return <div>Child1</div>;
// };

// const Child2 = () => {
//   return <div>Child2</div>;
// };

// function MemoDemo({ a, b }) {
//   // Only re-rendered if `a` changes:

//   const child1 = useMemo(() => <Child1 a={a} />, [a]);
//   // Only re-rendered if `b` changes:
//   const child2 = useMemo(() => <Child2 b={b} />, [b]);
//   return (
//     <>
//       {child1}
//       {child2}
//     </>
//   );
// }

/**
 *
 * 当 a/b 改变时，child1/child2 才会重新渲染。从例子可以看出来，只有在第二个参数数组的值发生变化时，才会触发子组件的更新
 *
 */

// function MemoDemo() {
//   const [count, setCount] = useState(1);
//   const [val, setValue] = useState("");

//   function getNum() {
//     console.log("render again"); // 没有使用useMemo，输入框有变化就会导致该值重新render
//     return Array.from({ length: count }, (v, i) => i).reduce((a, b) => a + b);
//   }

//   return (
//     <div>
//       <h4>总和：{getNum()}</h4>
//       <div>
//         <button onClick={() => setCount(count + 1)}>+1</button>
//         <input value={val} onChange={(event) => setValue(event.target.value)} />
//       </div>
//     </div>
//   );
// }

/**
 *
 * 上面这个组件，维护了两个state，可以看到getNum的计算仅仅跟count有关，
 * 但是现在无论是count还是val变化，都会导致getNum重新计算，所以这里我们希望val修改的时候，
 * 不需要再次计算，这种情况下我们可以使用useMemo。
 *
 */

function MemoDemo() {
  const [count, setCount] = useState(1);
  const [val, setValue] = useState("");

  const getNum = useMemo(() => {
    console.log("render again"); // 使用useMemo，count不变则不会导致该值重新render
    return Array.from({ length: count }, (v, i) => i).reduce((a, b) => a + b);
  }, [count]);

  return (
    <div>
      <h4>总和：{getNum}</h4>
      <div>
        <button onClick={() => setCount(count + 1)}>+1</button>
        <input value={val} onChange={(event) => setValue(event.target.value)} />
      </div>
    </div>
  );
}

// 使用useMemo后，并将count作为依赖值传递进去，此时仅当count变化时才会重新执行getNum。
export default MemoDemo;
