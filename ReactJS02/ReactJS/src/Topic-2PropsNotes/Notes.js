//&Component Composition === Component Composition is a practice of calling one component inside another component.

//~example
function Header() {
  return <h1>Welcome</h1>;
}

function App() {
  return (
    <div>
      <Header />
    </div>
  );
}
//?What is props ???
//? Props (short for properties) are a mechanism used to pass data from one component to another,typically in a unidirectional (top - down) from parent to child.

//?Example
//?Parent passes props
<Greeting name="Alice" age={25} />;

//?Child receives props and uses them
function Greeting({ name, age }) {
  return (
    <h1>
      Hello, {name}! You are {age} years old.
    </h1>
  );
}

//todo=== Q. Why we use Props or characteristics of props ===
//todo== Characteristics
//*1.Immutable === a child component cannot modify it's own props.
//*2.Unidirectional === data flows only from parent to child.
//*3.Any type === strings, numbers, arrays, objects, functions, even JSX
//*4.Destructured === commonly destructured in the function signature for cleaner code.

//!usecase
//!1.Pass Data == Send data from parent component to child component.
//!2.Reusability == Same component can be used multiple times with different data.
//!3.Dynamic Content == Components show different content based on props received.
//!4.Avoid Repetition == Write the component once reuse it anywhere.
//!5.Communication == The only way for a parent to talk to a child component.

//~Q.What is default Props ?
//~Default props in React allow you to define fallback values for a component's properties (props).

//~example
function Greeting({ name = "Guest", age = 18 }) {
  return (
    <h1>
      Hello {name}!You are {age} years old
    </h1>
  );
}
<Greeting />; //~Component call wihout using props.

//&Q.What is a children prop ?
//&1.Children prop is a special built in-property that allows you to pass content between the opening and closing tags of a component.
//&2.Anything placed inside a component's tags is automatically passed to that component as props.children.
//&3.Children can be strings,numbers,JSX elements,arrays or even functions.

//&example
function Card({ children }) {
  return <div className="card">{children}</div>;
}

//&Now you can put anything inside the Card Component
<Card>
  <h2>Title</h2>
  <p>Description here</p>
</Card>;

//~Q.What is Props Drilling?
//~Props Drilling is the process of passing data (props) through multiple layers of components to reach a deeply nested child that needs it,even if the intermediate components do'not use that data.

//~Note === to avoid props drilling we use context API,React State Management Library.

//?Q.What is Render prop ?
//?Render prop is when you pass a function as a prop to a component,and that component calls the function to render something.

//?example

//?component accepts a function as a prop.
function Greet({ render }) {
  return <div>render("Alice")</div>;
}

//?passing a function as a prop
<Greet render={(name) => <h1>Hello, {name}</h1>} />;

//&difference between render prop and default prop? === Very Very Important problem for the Interview.
