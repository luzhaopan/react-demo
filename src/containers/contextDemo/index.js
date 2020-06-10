import React, { useContext } from "react";

const TestContext = React.createContext({});

// 子组件可以通过 useContext获取父组件的值
const Navbar = () => {
  const { value } = useContext(TestContext);

  return (
    <div className="navbar">
      <p>{value}</p>
    </div>
  );
};

const Messages = () => {
  const { value } = useContext(TestContext);

  return (
    <div className="messages">
      <p>getMessage by useContext: {value}</p>
    </div>
  );
};

function ContextDemo() {
  return (
    <TestContext.Provider
      value={{
        value: "value from father",
      }}
    >
      <div className="test">
        <Navbar />
        <Messages />
      </div>
    </TestContext.Provider>
  );
}

export default ContextDemo;
