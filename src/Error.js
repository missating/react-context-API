import React from "react";
import { Consumer } from "./Context";

import "./styles.css";

const Error = () => (
  <Consumer>
    {({
      error
    }) => (
        <div className={error ? 'show-toast' : 'hide-toast'}>
          {error}
        </div>
      )}
  </Consumer>
)

export default Error;
