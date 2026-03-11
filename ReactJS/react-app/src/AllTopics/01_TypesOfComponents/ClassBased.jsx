import { Component } from "react";

class ClassBased extends Component {
  //~ render() method is available in the component class, that's why we have inherited the class Component with the help of extends keyword
  render() {
    return (
      <>
        <h1>I am classBased Component</h1>
      </>
    );
  }
}

export default ClassBased;
