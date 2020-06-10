import React from "react";
import ContextDemo from "./index";

export const Context = React.createContext();

function MainPage() {
  return (
    <div>
      <Context.Provider value="Hello world">
        <ContextDemo />
      </Context.Provider>
    </div>
  );
}
export default MainPage;
