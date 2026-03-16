import React, { Component } from "react";

export default class LifeCycleCbc extends Component {
  //?render method is coming from the Component
  constructor() {
    //?while using constructor() method it is mandatory to use the super keyword
    //~constructor function will run only once
    super(); //~Due to inheritance
    console.log("I am constructor");
    //~initialising a state inside constructor

    this.state = { count: 0 };
    console.log(this.state);
  }
  increment = () => {
    this.setState((prev) => {
      console.log(prev);
      return { count: prev.count + 1 };
    });
  };
  componentDidMount() {
    console.log("Component Mounted Successfully");
    this.id = setInterval(() => {
      console.log("API Call");
    }, 2000);
  }

  componentDidUpdate() {
    console.log("Component Updated Successfully");
  }

  componentWillUnmount() {
    //~this will run before the component will unmount.
    console.log("Component Unmounted");
    clearInterval(this.id);
  }
  render() {
    console.log("I am render");
    return (
      <div className="p-5">
        <h1 className="text-center text-4xl">
          Learn Life Cycle Of A Component {this.state.count}
          {/* three phases in LifeCycle Methods In React => 1.Mounting 2.Updating 3.Unmounting */}
          {/* We will make states in Constructor method, constructor will run first for initialising that state, a state container will be formed */}
          {/* render method is used for showing to the UI */}
        </h1>
        <button onClick={this.increment}>increment</button>
      </div>
    );
  }
}
