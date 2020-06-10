import React, { useRef, useEffect, useState } from "react";

// useRef 保存引用值

function App() {
  let [name, setName] = useState("Nate");
  let nameRef = useRef();
  const submitButton = () => {
    setName(nameRef.current.value);
  };
  return (
    <div className="App">
      <p>{name}</p>

      <div>
        <input ref={nameRef} type="text" />
        <button type="button" onClick={submitButton}>
          Submit
        </button>
      </div>
    </div>
  );
}

function RefApp() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      alert("count: " + count);
    }, 3000);
  }, [count]);

  return (
    <div>
      <h3>具有Capture Value 的特性</h3>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>增加 count</button>
      <button onClick={() => setCount(count - 1)}>减少 count</button>
    </div>
  );
}

/**
 * 先点击增加button，后点击减少button，3秒后先alert 1，后alert 0，
 * 而不是alert两次0。这就是所谓的 capture value 的特性。
 */

function RefDemo() {
  const count = useRef(0);

  const showCount = () => {
    alert("count: " + count.current);
  };

  const handleClick = (number) => {
    count.current = count.current + number;
    setTimeout(showCount, 3000);
  };

  return (
    <div>
      <App />
      <br />
      <br />
      <RefApp />
      <br />
      <br />
      <h3>避免Capture Value 的特性</h3>
      <p>You clicked {count.current} times</p>
      <button onClick={() => handleClick(1)}>增加 count</button>
      <button onClick={() => handleClick(-1)}>减少 count</button>
    </div>
  );
}

/**
 * useRef 创建一个引用，就可以有效规避 React Hooks 中 Capture Value 特性。
 * 先点击增加button，后点击减少button，3秒后先alert 0，后alert 0，取到的都是最新的值
 */

export default RefDemo;
