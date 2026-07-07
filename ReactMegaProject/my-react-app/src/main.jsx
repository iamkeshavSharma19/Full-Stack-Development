import { createRoot } from "react-dom/client";
import "./index.css";
import UserContextProvider from "./context/UserContextProvider.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <UserContextProvider>
    <App />
  </UserContextProvider>,
);
