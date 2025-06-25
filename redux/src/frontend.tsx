/**
 * This file is the entry point for the React app, it sets up the root
 * element and renders the App component to the DOM.
 *
 * It is included in `src/index.html`.
 */

import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./App";
import store from "./redux/store";

// console.log( store );

function start() {
  const root = createRoot(document.getElementById("root")!);
  root.render( <Provider store={store}>
    <App />
  </Provider>);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", start);
} else {
  start();
}
