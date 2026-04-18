import Parent from "./Topic01_JSX/Parent";

const App = () => {
  // console.log(<Parent />);
  console.log(<h1>Hello World</h1>);
  const msg = "Namaste React 🚀";
  const isLogin = false;
  return (
    <div className="app-component">
      {/* React Element call */}

      {/* React Component call */}
      <Parent />
      {/* {2 + 2 / 2}
      <h1>{msg}</h1>
      {isLogin ? <h1>Welcome User</h1> : <h1>Please Login</h1>} */}
    </div>
  );
};

export default App;
