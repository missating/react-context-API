import React from "react";
import { Consumer } from "./Context";

const GrandChild = () => (
  <Consumer>
    {({ color, handleChange }) => (
      <>
        <h3> THis is the GrandChild</h3>
        <input value={color} onChange={handleChange} />
      </>
    )}
  </Consumer>
);

export default GrandChild;
