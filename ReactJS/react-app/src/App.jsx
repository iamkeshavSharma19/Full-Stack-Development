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
//import TodoContextProvider from "./TodoApp/ContextProvider";
import ReactCss from "./AllTopics/09_ReactCss/ReactCss";
import TailwindPractice1 from "./AllTopics/10_TailwindCss/TailwindPractice1";
import UncontrolledForms from "./AllTopics/08_Forms/UncontrolledForms";
// import LifeCycleCbc from "./AllTopics/11_LifeCycle/LifeCycleCbc";
// import LifeCycleInFbc from "./AllTopics/11_LifeCycle/LifeCycleInFbc";
import Todos from "./AllTopics/12_Fetch/Todos";
import Products from "./AllTopics/Products/Products";
import ReducerCounter from "./AllTopics/13_Reducer/ReducerCounter";
import Users from "./AllTopics/14_CustomHook/Users";
import MemoExample from "./AllTopics/15_MemoAndCallback/MemoExample";
import Dashboard from "./AllTopics/16_Routing/Dashboard";

import VirtualisedList from "./AllTopics/19_Virtualisation/VirtualisedList";
import CrudApp from "./AllTopics/20_CrudApp/CrudApp";
import ErrorCounter from "./AllTopics/22_ErrorBoundaryCBC/Counter";
import ErrorBoundaryCBC from "./AllTopics/22_ErrorBoundaryCBC/ErrorBoundaryCBC";
import TodoApp from "./Task1/TodoApp";
// import Parent from "./AllTopics/066_Context/Parent";
// import ContextExample from "./AllTopics/066_Context/ContextExample";

import Parent from "./AllTopics/066_ContextRevision/Parent";
import ContextStore from "./AllTopics/066_ContextRevision/ContextStore";
import ControlledForms1 from "./AllTopics/010_ControlledForms/ControlledForms1";
import { TodoContextProvider } from "./Task1/context/TodoContextProvider";
import Routing2 from "./AllTopics/016_Routing/Routing2";
import LifeCycleInFBC from "./AllTopics/0111_LifeCycle/LifeCycleInFBC";
import FetchProducts from "./AllTopics/013_Fetch/FetchProducts";
import Reducer from "./AllTopics/014_Reducer/Reducer";
import Optimisation from "./AllTopics/015_Optimisation/Optimisation";
import CSSExample from "./AllTopics/016_ReactCSS/CSSExample";
import ReduxApp from "./AllTopics/018_ReduxApp/ReduxApp";
// import LifeCycleInCBC from "./AllTopics/0111_LifeCycle/LifeCycleInCBC";

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
      {/* <VirtualisedList /> */}
      {/* <CrudApp /> */}
      {/* <ErrorBoundaryCBC>
        <ErrorCounter />
      </ErrorBoundaryCBC> */}
      {/* New React Batch Started */}
      {/* <ContextExample>
        <Parent />
      </ContextExample> */}
      {/* <ContextStore> */}
      {/* Children Props */}
      {/* <Parent /> */}
      {/* <h1>Namaste</h1> */}
      {/* </ContextStore> */}
      {/* <ControlledForms1 /> */}
      {/* <TodoContextProvider>
        <TodoApp />
      </TodoContextProvider> */}
      {/* <Routing2 /> */}
      {/* <button onClick={handleToggle}>Toggle Me</button>
      {toggle && <FetchProducts />} */}
      {/* <FetchProducts /> */}
      {/* <Reducer /> */}
      {/* <Optimisation /> */}
      {/* <CSSExample /> */}
      <ReduxApp />
    </>
  );
}

export default App;
