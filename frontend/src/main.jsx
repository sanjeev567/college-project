import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import store from "./app/store";
import { Provider } from "react-redux";

hljs.configure({
  // optionally configure hljs
  languages: [
    "javascript",
    "ruby",
    "python",
    "c",
    "c++",
    "java",
    "HTML",
    "css",
    "perl",
    "R",
    "matlab",
  ],
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
// reportWebVitals();
