import StatesInFBC from "./AllTopics/02_States/StatesInFBC";
import { useState } from "react";
import ThemeChange from "./AllTopics/02_States/ThemeChange";
import Counter from "./AllTopics/02_States/Counter";
import Task from "./AllTopics/02_States/task";
import StatesInCBC from "./AllTopics/02_States/StatesInCBC";
import PropsParent from "./AllTopics/03Props/PropsParent";
import ChildrenProps from "./AllTopics/ChildrenProps/ChildrenProps";
import Child1 from "./AllTopics/ChildrenProps/Child1";
import Child2 from "./AllTopics/ChildrenProps/Child2";
import UplliftingParent from "./AllTopics/05StateUplifting/UplliftingParent";
import DrillingParent from "./AllTopics/06_PropsDrilling/DrillingParent";
import ContextParent from "./AllTopics/07_Context/ContextParent";
import ContextProvider from "./AllTopics/07_Context/ContextProvider";
import ControlledForms2 from "./AllTopics/08_Forms/ControlledForms2";
import TodoWrapper from "./TodoApp/TodoWrapper";
import TodoContextProvider from "./TodoApp/ContextProvider";
import ReactCss from "./AllTopics/09_ReactCss/ReactCss";

function App() {
  // const [data, setData] = useState("Hello everyone");
  // const [btnData, setBtnData] = useState("Add To Cart");

  // function handleBtn() {
  //   setData("Byee Everyone");
  // }

  // function handleAddToCart() {
  //   setBtnData("Go To Cart");
  // }

  return (
    <>
      {/* <FunctionBased />
      <ClassBased /> */}
      {/* <StatesInFBC />
      <h2>{data}</h2>
      <button onClick={handleBtn}>update</button>
      <br /> <br />
      <button onClick={handleAddToCart}>{btnData}</button>
      <ThemeChange />
      <Counter />
      <br />
      <Task />
      <StatesInCBC />
      <PropsParent />
      <ChildrenProps>
        <Child1 />
        <Child2 />
      </ChildrenProps>
      <UplliftingParent />
      <DrillingParent />
      <ContextProvider>
        <ContextParent />
      </ContextProvider>
      
      <ControlledForms2 /> */}
      {/* <TodoContextProvider>
        <TodoWrapper />
      </TodoContextProvider> */}
      <ReactCss />
    </>
  );
}

export default App;
