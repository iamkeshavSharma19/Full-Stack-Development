import React, { Component } from "react";

export default class LifeCycleInCBC extends Component {
  constructor() {
    //&constructor is called first during Mounting Phase because It Contains all the state variable's initializations.
    super();
    this.state = { count: 0 };
  }
  increment = () => {
    this.setState((prev) => {
      return { count: prev.count + 1 };
    });
  };
  componentDidMount() {
    //&Birth of the component
    console.log("Component Mounted");
    //&SetInterval returns us an intervalId.
    //~this points to the object of the current class

    this.id = setInterval(() => {
      console.log("API called");
    }, 2000);
  }

  componentDidUpdate() {
    //^Growth Of The Component.
    console.log("Component Updated");
  }

  componentWillUnmount() {
    //~Death of the Component
    console.log("Component Unmounted");
    //&We can also cancel the API Calling inside componentwillUnmount() method.
    clearInterval(this.id);
    console.log("API Calling Stopped");
  }
  render() {
    return (
      <div>
        <h1 className="heading">LifeCycleInCBC</h1>
        <button onClick={this.increment}>Increment</button>
        <h2>Count: {this.state.count}</h2>
      </div>
    );
  }
}
