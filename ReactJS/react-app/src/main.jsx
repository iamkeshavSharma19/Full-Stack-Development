//!JS Way for creating a dom element and appending it inside div root.
// const div = document.getElementById("root");
// const h1Tag = document.createElement("h1");
// h1Tag.textContent = "hello world";
// div.append(h1Tag);

//?REACT Way
import { createRoot } from "react-dom/client";
import React from "react";
import { createElement } from "react";
// import App from "./App";
//?global css
import "./index.css";
import CodeSplittingExample from "./AllTopics/CodeSplittingExample/CodeSplittingExample";

// console.log(<App />);

// console.log(createElement(App));

// createElement(App);

// console.log(App);

createRoot(document.getElementById("root")).render(<CodeSplittingExample />);
