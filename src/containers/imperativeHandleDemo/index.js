import React, {
  useImperativeHandle,
  useEffect,
  useRef,
  forwardRef,
  useCallback,
  useState,
} from "react";
import { Input, Button } from "antd";

// 通过 useImperativeHandle 用于让父组件获取子组件内的索引

function ChildInputComponent(props, ref) {
  console.log("props", props);

  const [value, setValue] = useState("");

  const click = () => {
    setValue("setvalue");
    console.log(value);
  };
  const inputRef = useRef(null);
  // 将click方法暴露出去。父组件可以通过ref获取到
  useImperativeHandle(ref, () => {
    return { clickfun: click };
  });

  // useImperativeHandle(ref, () => inputRef.current);
  return (
    <Input
      value={value}
      style={{ width: 250 }}
      name="child input"
      ref={inputRef}
    />
  );
}

const ChildInput = forwardRef(ChildInputComponent);

function ImperativeHandleDemo() {
  const inputRef = useRef();
  console.log("childRef", inputRef.current);
  useEffect(() => {
    // inputRef.current.focus();
  }, []);

  // const [value, setValue] = useState("");
  const click = useCallback(() => {
    console.log(inputRef.current.clickfun);
    inputRef &&
      inputRef.current &&
      inputRef.current.clickfun &&
      inputRef.current.clickfun();
  }, []);

  return (
    <div>
      <ChildInput ref={inputRef} date={"123"} />
      <Button type="primary" onClick={click}>
        获取子组件的click
      </Button>
    </div>
  );
}

export default ImperativeHandleDemo;
