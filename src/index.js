import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "./Context";
import Child from "./Child";

import "./styles.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // color: "yellow",
      // handleChange: this.handleChange
    };
  }

  // handleChange = event => {
  //   event.preventDefault();
  //   this.setColor(event.target.value);
  // };

  // setColor = color => {
  //   this.setState({ color });
  // };
  render() {
    return (
      <Provider value={this.state}>
        <div
          className="app"
        >
          <Child />
        </div>
      </Provider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
