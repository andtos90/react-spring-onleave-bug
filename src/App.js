import React, { Component } from "react";
import Tree from "./tree/index.js";

class App extends Component {
  render() {
    return (
      <div style={{ width: 600, height: 600 }}>
        <Tree />
      </div>
    );
  }
}

export default App;
