import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// Mount  function to start up th app
const mount = (el) => {
  console.log("run mount", el);

  if (!el) return;

  ReactDOM.render(<App />, el);
};

// if we are in development and in isolation

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_markerting-dev-root");

  console.log("run run", devRoot);

  if (devRoot) {
    mount(devRoot);
  }
}
export { mount };
