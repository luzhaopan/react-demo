import React, { useState, useEffect, useRef } from "react";
import { Input, Button } from "antd";

const FileSearch = ({ title, onFileSearch }) => {
  const [inputAction, setInputAction] = useState(false);
  const [value, setValue] = useState("");
  // useRef 返回一个可变的 ref 对象，其 .current 属性被初始化为传入的参数（initialValue）。返回的 ref 对象在组件的整个生命周期内保持不变。
  const inputEl = useRef(null);
  //清空内容
  const closeSearch = (e) => {
    e.preventDefault();
    setInputAction(false);
    setValue("");
  };

  // 等同于componentDidMount componentDidUpdate
  useEffect(() => {
    const handleInputEvent = (event) => {
      const { keyCode } = event;
      if (keyCode === 13 && inputAction) {
        //   键盘回车键
        onFileSearch(value);
        setValue("");
      } else if (keyCode === 27 && inputAction) {
        // 键盘esc
        closeSearch(event);
      }
    };
    document.addEventListener("keyup", handleInputEvent);
    // 等同于componentWillUnmount 销毁
    return () => {
      document.removeEventListener("keyup", handleInputEvent);
    };
  });

  //   input聚焦
  useEffect(() => {
    console.log("inputEl.current", inputEl.current);
    if (inputAction) {
      // current` 指向已挂载到 DOM 上的文本输入元素
      inputEl.current.focus();
    }
  }, [inputAction]);

  return (
    <div>
      {!inputAction && (
        <div>
          <span>{title}</span>
          <Button
            type="primary"
            onClick={() => {
              setInputAction(true);
            }}
          >
            搜索
          </Button>
        </div>
      )}
      {inputAction && (
        <div className="row">
          <Input
            value={value}
            ref={inputEl}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <Button type="primary" onClick={closeSearch}>
            关闭
          </Button>
        </div>
      )}
    </div>
  );
};

export default FileSearch;
