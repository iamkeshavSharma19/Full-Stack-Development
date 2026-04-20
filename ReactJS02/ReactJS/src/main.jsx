import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//&client is a subfolder which is present inside the react-dom.
//&StrictMode is a component/wrapper it takes care of the contents inside it,if there is an api call,it runs the code and children 2 times,to make insure that everything is safe.
import "./index.css";
import { App, heading } from "./App";

//~Here is our Tunnel.
createRoot(document.getElementById("root")).render(<App />);
