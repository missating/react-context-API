import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "./Context";
import Child from "./Child";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "limegreen",
      handleChange: this.handleChange
    };
  }

  handleChange = e => {
    e.preventDefault();
    this.setColor(e.target.value);
  };

  setColor = color => {
    this.setState({ color });
  };
  render() {
    return (
      <Provider value={this.state}>
        <div
          className="App"
          style={{ backgroundColor: this.state.color, height: "100vh" }}
        >
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
          <Child />
        </div>
      </Provider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
