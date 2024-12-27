import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0, 
    };
  }

 
  handleIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };


  handleDecrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
    
        <h1>Count: {this.state.count}</h1>


        <button onClick={this.handleIncrement} style={{ marginRight: "10px" }}>
          Increment
        </button>


        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
