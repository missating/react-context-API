import React from "react";
import { Consumer } from "./Context";

import "./styles.css";

const GrandChild = () => (
  <Consumer>
    {({ color, handleChange }) => (
      <div class="container">
        <form>
          <div>
            <h2 class="title">The Dynamic Form</h2>
            <div className="row">
              <input type="text" id="user-id" placeholder="User Id" />
            </div>
            <div className="row">
              <input type="password" id="password" placeholder="Password" />
            </div>
            <div className="btn-row">
              <button type="submit" className="btn">Login</button>
              <button type="submit" className="btn">Cancel</button>
            </div>
          </div>

        </form>
      </div>
    )}
  </Consumer>
);

export default GrandChild;
