//^Q === What is Conditional Rendering ?
//^Ans == 1.Conditinal Rendering in react is the technique of rendering different UI elements or components based on certain conditions.

//^2.Here we use if-else, ternary operator and logical operator (short circuit operator).

//?Q === What is state ?
//?Ans == 1.State in React is an internal, mutable data structure that represents the dynamic data of a component.
//?2.Whenever state variable changes react will re-render the component.

//!Q === What is the difference between state and props ?
//!Ans == Props
//!1.Props are immutable.
//!2.Props are used for passing data from one component to another component
//!3.Props are owned and controlled by the Parent component.
//!4.The child component only receives and consumes them.

//!State
//!1.State is Mutable.
//!2.State is internal to the component.
//!3.The component that declares it can directly read or update it.
//!4.State Update Triggers Re-render.

//*Q === What is hooks ?
//*Ans == Hooks are special built-in functions in React that allow you to use state and other React features (like lifecycle methods, context, refs etc) in functional component.

//*Features ==
//*1.Hooks introduced in React 16.8
//*2.Hooks allow functional component to be stateful.
//*3.Hooks start with "use".
//*4.Enable Better code Reuse.

//~Q === What is useState Hook ?

//~Ans == 1.useState is a built-in React hook that allows you to add and manage local state in functional components.
//~2.It returns an array with two elements the current state value and a function to update that state.
//~const [state, setState] = useState(initialValue)
//~State === Current value of the state (read only)
//~setState === Function used to update the state.
//~initialValue === initial value of the state (can be number, string, boolean, object, array, function)

//&What is Batching ?
//&Ans === 1.Batching in react is the process where React groups multiple state updates into a single re-render instead of re-rendering the component after every individual state update.
//&2.This improves performance by reducing unnecessary re-renders.

//^can we write function as an initial value in useState (fn) Lazy initialisation ??