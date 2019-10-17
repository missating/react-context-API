import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "./Context";
import Child from "./Child";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      password: '',
      userIdError: '',
      passwordError: '',
      pcolor: '',
      ucolor: '',
      onChange: this.onChange,
      onLogin: this.onLogin
    };
  }

  onChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onLogin = event => {
    event.preventDefault();
    if (/^ *$/.test(this.state.userId)) {
      this.setState({ ucolor: 'yellow', userIdError: 'user id warning error' })
    }
    if (/^ *$/.test(this.state.password)) {
      this.setState({ pcolor: 'yellow', passwordError: 'password warning error' })
    }
    if (this.state.userId && this.state.userId.trim() !== 'testUser') {
      this.setState({ ucolor: 'red', userIdError: 'user id danger error' })
    }
    if (this.state.password && this.state.password.trim() !== 'mypassword') {
      this.setState({ pcolor: 'red', passwordError: 'password danger error' })
    }
  }

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
