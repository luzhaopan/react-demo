import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./home";
import List from "./list";
import Table from "./table";
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
        <Route exact path="/" component={Home}></Route>
        <Route path="/list" component={List}></Route>
        <Route path="/table" component={Table}></Route>
      </Router>
    </div>
  );
}

export default App;
