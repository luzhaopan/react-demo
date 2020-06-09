import React from "react";
import FileSearch from "../fileSearch";

export default class List extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div>List</div>
        <div>search</div>
        <FileSearch
          title="React Hook"
          onFileSearch={(value) => {
            console.log(value);
          }}
        />
      </div>
    );
  }
}
