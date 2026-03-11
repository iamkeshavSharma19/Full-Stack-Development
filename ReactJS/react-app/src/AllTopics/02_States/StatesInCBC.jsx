import { Component } from "react";


class StatesInCBC extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState((prev) => {
      return { count: prev.count + 1 };
    });
  };
  // decrement function
  decrement = () => {
    this.setState((prev) => {
      return { count: this.state.count > 0 ? prev.count - 1 : 0 };
    });
  };

  // reset
  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    console.log(this);
    return (
      <>
        <h1>States In CBC</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={this.reset}>Reset</button>
        <h2>Count: {this.state.count}</h2>
      </>
    );
  }
}

export default StatesInCBC;
