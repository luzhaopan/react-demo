import React, { useState, useEffect } from "react";

let timer = null;

function EffectDemo() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = "componentDidMount" + count;
  }, [count]);

  useEffect(() => {
    // 设一个定时器，每秒更新一下state
    timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    // 一定注意下这个顺序：
    // 告诉react在下次重新渲染组件之后，同时是下次执行上面setInterval之前调用
    return () => {
      document.title = "componentWillUnmount";
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      Count: {count}
      <button onClick={() => clearInterval(timer)}>clear</button>
    </div>
  );
}

export default EffectDemo;

/**
 * useEffect 第一个参数接收一个函数，可以用来做一些副作用比如异步请求，修改外部参数等行为，
 * 而第二个参数称之为dependencies，是一个数组，如果数组中的值变化才会触发 执行useEffect 第一个参数中的函数。
 * 返回值(如果有)则在组件销毁或者调用函数前调用。
 */

/**
 * 1.比如第一个 useEffect 中，理解起来就是一旦 count 值发生改变，则修改 documen.title 值；
 * 2.而第二个 useEffect 中传递了一个空数组[]，这种情况下只有在组件初始化或销毁的时候才会触发，用来代替 componentDidMount 和 componentWillUnmount，慎用；
 * 3.还有另外一个情况，就是不传递第二个参数，也就是useEffect只接收了第一个函数参数，代表不监听任何参数变化。每次渲染DOM之后，都会执行useEffect中的函数。
 */
