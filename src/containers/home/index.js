import React from "react";
import { Button } from "antd";

export default class Home extends React.Component {
  goto = () => {
    this.props.history.push("/example");
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <div>
          <Button onClick={this.goto} type="primary">
            gogogo(首页)
          </Button>
        </div>
      </div>
    );
  }
}
