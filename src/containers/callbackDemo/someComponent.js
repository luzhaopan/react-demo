import React from "react";
import { Button } from "antd";

export default class SomeComponent extends React.Component {
  render() {
    return (
      <Button
        type="primary"
        onClick={() => {
          this.props.onClick();
        }}
      >
        {this.props.children}
      </Button>
    );
  }
}
