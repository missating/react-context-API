import React from "react";
import { Consumer } from "./Context";

import "./styles.css";

const GrandChild = () => (
  <Consumer>
    {({
      userId,
      password,
      userIdError,
      passwordError,
      ucolor,
      pcolor,
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
                  style={{ backgroundColor: ucolor }}
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
                  style={{ backgroundColor: pcolor }}
                />
              </div>
              <div className="btn-row">
                <button type="submit" onClick={onLogin} className="btn">Login</button>
                <button type="submit" onClick={onCancel} className="btn">Cancel</button>
              </div>
            </div>

          </form>
        </div>
      )}
  </Consumer>
);

export default GrandChild;
