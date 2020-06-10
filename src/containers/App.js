import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./home";
import List from "./list";
import Table from "./table";
import Example from "./timeCount";
import FileSearch from "./fileSearch";
import EffectDemo from "./effectDemo";
import ContextDemo1 from "./contextDemo";
import ReducerDemo from "./reducerDemo";
import CallbackDemo from "./callbackDemo";
import MemoDemo from "./memoDemo";
import RefDemo from "./refDemo";
import ImperativeHandleDemo from "./imperativeHandleDemo";
import LayoutEffectDemo from "./layoutEffectDemo";
// import "./App.css";

// BrowserRouter其实就是HTML 的 History API

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">首页</Link>
        <br />
        <Link to="/list">列表</Link>
        <br />
        <Link to="/table">表格</Link>
        <br />
        <Link to="/effectDemo">useEffect demo</Link>
        <br />
        <Link to="/contextDemo">useContext demo</Link>
        <br />
        <Link to="/reducerDemo">useReducer demo</Link>
        <br />
        <Link to="/callbackDemo">useCallback demo</Link>
        <br />
        <Link to="/memoDemo">useMemo demo</Link>
        <br />
        <Link to="/refDemo">useRef demo</Link>
        <br />
        <Link to="/imperativeHandleDemo">useImperativeHandle demo</Link>
        <br />
        <Link to="/layoutEffectDemo">useLayoutEffect demo</Link>
        <br />
        <Route exact path="/" component={Home}></Route>
        <Route path="/list" component={List}></Route>
        <Route path="/table" component={Table}></Route>
        <Route path="/example" component={Example}></Route>
        <Route path="/fileSearch" component={FileSearch}></Route>
        <Route path="/effectDemo" component={EffectDemo}></Route>
        <Route path="/contextDemo" component={ContextDemo1}></Route>
        <Route path="/reducerDemo" component={ReducerDemo}></Route>
        <Route path="/callbackDemo" component={CallbackDemo}></Route>
        <Route path="/memoDemo" component={MemoDemo}></Route>
        <Route path="/refDemo" component={RefDemo}></Route>
        <Route path="/layoutEffectDemo" component={LayoutEffectDemo}></Route>
        <Route
          path="/imperativeHandleDemo"
          component={ImperativeHandleDemo}
        ></Route>
      </Router>
    </div>
  );
}

export default App;
