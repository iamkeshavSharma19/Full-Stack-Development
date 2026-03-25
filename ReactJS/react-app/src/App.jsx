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
import TailwindPractice1 from "./AllTopics/10_TailwindCss/TailwindPractice1";
import UncontrolledForms from "./AllTopics/08_Forms/UncontrolledForms";
import LifeCycleCbc from "./AllTopics/11_LifeCycle/LifeCycleCbc";
import LifeCycleInFbc from "./AllTopics/11_LifeCycle/LifeCycleInFbc";
import Todos from "./AllTopics/12_Fetch/Todos";
import Products from "./AllTopics/Products/Products";
import ReducerCounter from "./AllTopics/13_Reducer/ReducerCounter";
import Users from "./AllTopics/14_CustomHook/Users";
import MemoExample from "./AllTopics/15_MemoAndCallback/MemoExample";
import Dashboard from "./AllTopics/16_Routing/Dashboard";

import VirtualisedList from "./AllTopics/19_Virtualisation/VirtualisedList";

function App() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle((prev) => !prev);
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
      {/* <ReactCss /> */}
      {/* <TailwindPractice1 /> */}
      {/* <UncontrolledForms /> */}
      {/* <button onClick={handleToggle}>toggle me</button>
      {toggle && <LifeCycleCbc />} */}
      {/* <LifeCycleInFbc /> */}
      {/* <Todos /> */}
      {/* <Products /> */}
      {/* <ReducerCounter /> */}
      {/* <Users /> */}
      {/* <MemoExample /> */}
      {/* <Dashboard /> */}
      <VirtualisedList />
    </>
  );
}

export default App;
