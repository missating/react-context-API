import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "./Context";
import Form from "./Form";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      password: '',
      error: '',
      userIdColor: '',
      passwordColor: '',
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
      this.setState({ userIdColor: 'yellow', error: 'user id warning error' })
    }
    if (/^ *$/.test(this.state.password)) {
      this.setState({ passwordColor: 'yellow', error: 'password warning error' })
    }
    if (this.state.userId && this.state.userId.trim() !== 'testUser') {
      this.setState({ userIdColor: 'red', error: 'user id danger error' })
    }
    if (this.state.password && this.state.password.trim() !== 'mypassword') {
      this.setState({ passwordColor: 'red', error: 'password danger error' })
    }
  }

  render() {
    return (
      <Provider value={this.state}>
        <div
          className="app"
        >
          <Form />
        </div>
      </Provider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
