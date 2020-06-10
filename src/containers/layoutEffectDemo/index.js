import React, { useLayoutEffect, useEffect, useState } from "react";

function LayoutEffectDemo() {
  const [width, setWidth] = useState(0);
  useLayoutEffect(() => {
    const title = document.querySelector("#title");
    const titleWidth = title.getBoundingClientRect().width;
    console.log("useLayoutEffect");
    if (width !== titleWidth) {
      setWidth(titleWidth);
    }
  });
  useEffect(() => {
    console.log("useEffect");
  });
  return (
    <div>
      <h1 id="title">hello react hooks</h1>
      <h2>{width}</h2>
    </div>
  );
}

export default LayoutEffectDemo;

/**
 *
 * 大部分情况下，使用 useEffect 就可以帮我们处理组件的副作用，但是如果想要同步调用一些副作用，
 * 比如对 DOM 的操作，就需要使用 useLayoutEffect，useLayoutEffect 中的副作用会在 DOM 更新之后同步执行.
 * 在上面的例子中，useLayoutEffect 会在 render，DOM 更新之后同步触发函数，会优于 useEffect 异步触发函数
 *
 */

/**
 *
 * useEffect和useLayoutEffect有什么区别？
 * 简单来说就是调用时机不同，useLayoutEffect和原来componentDidMount&componentDidUpdate一致，
 * 在react完成DOM更新后马上同步调用的代码，会阻塞页面渲染。而useEffect是会在整个页面渲染完才会调用的代码。
 *
 */

/**
 *
 * 在实际使用时如果想避免页面抖动（在useEffect里修改DOM很有可能出现）的话，
 * 可以把需要操作DOM的代码放在useLayoutEffect里。
 *
 */
