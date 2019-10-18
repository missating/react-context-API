import React from "react";
import { Consumer } from "./Context";
import Error from "./Error";

import "./styles.css";

const Form = () => (
  <Consumer>
    {({
      userId,
      password,
      userIdColor,
      passwordColor,
      onChange,
      onLogin,
      onCancel
    }) => (
        <div className="container">
          <form>
            <div>
              <h2 className="title">The Dynamic Form</h2>
              <div className="row">
                <input
                  type="text"
                  id="user-id"
                  name="userId"
                  placeholder="User Id"
                  onChange={onChange}
                  value={userId}
                  style={{ backgroundColor: userIdColor }}
                />
              </div>
              <div className="row">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  onChange={onChange}
                  value={password}
                  style={{ backgroundColor: passwordColor }}
                />
              </div>
              <div className="btn-row">
                <button type="submit" onClick={onLogin} className="btn">Login</button>
                <button type="submit" onClick={onCancel} className="btn">Cancel</button>
              </div>
            </div>
          </form>
          <Error />
        </div>
      )}
  </Consumer>
);

export default Form;
