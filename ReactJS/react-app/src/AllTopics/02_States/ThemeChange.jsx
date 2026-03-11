import { useState } from "react";

function ThemeChange() {
  const [theme, setTheme] = useState("dark");

  function handleTheme() {
    console.log("Theme Changed");
    setTheme((prev) => {
      //~here prev basically store the previous value of the state
      return prev === "dark" ? "light" : "dark";
    });
  }

  return (
    <section
      style={{
        backgroundColor: theme === "dark" ? "black" : "white",
      }}
    >
      <h1 style={{ color: theme === "dark" ? "white" : "black" }}>
        Theme Change Task
      </h1>
      <button onClick={handleTheme}>{theme}</button>
    </section>
  );
}

export default ThemeChange;
