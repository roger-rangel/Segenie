import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

const init = async () => {
  ReactDOM.render(<App />, document.getElementById("root"));
};

init();
