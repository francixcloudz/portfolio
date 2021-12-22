// Dependencies
import React from "react";
import ReactDOM from "react-dom";

// Children
import App from "components";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // eslint-disable-next-line unicorn/prefer-query-selector
  document.getElementById("root")
);
