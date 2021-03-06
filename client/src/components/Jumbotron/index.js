import React from "react";

function Jumbotron({ fluid, children }) {
  return (
    <div
      style={{clear: "both", textAlign: "center" }}
      className= {fluid ? "jumbotron-fluid" : "jumbotron"}
    >
      {children}
    </div>
  );
}

export default Jumbotron;
