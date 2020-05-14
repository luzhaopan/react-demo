import React, { useState, useEffect } from "react";
import { Button } from "antd";

function Example() {
  // 声明一个叫 “count” 的 state 变量。
  // useState 唯一的参数就是初始 state, 为0
  // state 不一定要是一个对象 —— 如果有需要，它也可以是
  const [count, setCount] = useState(0);

  // 声明多个 state 变量！
  const [age, setAge] = useState(42);
  const [fruit, setFruit] = useState("banana");
  const [todos, setTodos] = useState([{ id: 1, text: "Learn Hooks" }]);

  // 相当于 componentDidMount 和 componentDidUpdate:
  // useEffect(() => {
  // 使用浏览器的 API 更新页面标题
  // document.title = `You clicked ${count} times`;
  // 如果后面返回一个函数，类似于componentWillUnmount()
  // });

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]); // 仅在 count 更改时更新,作用等于比较前后两个state的变化

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>test hook</h1>
      <div>
        <p>You clicked {count} times</p>
        <Button type="primary" onClick={() => setCount(count + 1)}>
          Click me
        </Button>
      </div>
      <div>
        <p>age：{age}</p>
        <Button
          type="primary"
          onClick={() => {
            setAge("29");
          }}
        >
          Click age
        </Button>
      </div>
      <div>
        <p>fruit：{fruit}</p>
        <Button type="primary" onClick={() => setFruit("apple")}>
          Click fruit
        </Button>
      </div>
      <div>
        <p>todos</p>
        {todos.map((item) => {
          return <div key={item.id}>{item.text}</div>;
        })}
        <Button
          type="primary"
          onClick={() =>
            setTodos([
              { id: 2, text: "go home" },
              { id: 3, text: "go home tow" },
            ])
          }
        >
          Click todos
        </Button>
      </div>
    </div>
  );
}

export default Example;
