import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    imageUrl: "https:picsum.photos/200",
  };

  render() {
    return (
      <div>
        <sapn className="" />
        <button>Increment</button>
      </div>
    );
  }
}

export default Counter;
