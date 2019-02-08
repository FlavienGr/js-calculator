import React, { Component } from "react";

class Signboard extends Component {
  handleChange = e => {
    const operator = e.target.value;
    const { result } = this.props;
    if (operator === "=") {
      result();
    } else {
      this.props.addOperator(operator);
    }
  };
  render() {
    return (
      <div className="keyboard__box--sign">
        <button
          id="add"
          className="keyboard__signs--add"
          onClick={this.handleChange}
          value="+"
        >
          +
        </button>
        <button
          id="subtract"
          className="keyboard__signs--subtract"
          onClick={this.handleChange}
          value="-"
        >
          -
        </button>
        <button
          id="multiply"
          className="keyboard__signs--multiply"
          onClick={this.handleChange}
          value="*"
        >
          *
        </button>
        <button
          id="divide"
          className="keyboard__signs--divide"
          onClick={this.handleChange}
          value="/"
        >
          /
        </button>
        <button
          id="equals"
          className="keyboard__signs--equals"
          onClick={this.handleChange}
          value="="
        >
          =
        </button>
      </div>
    );
  }
}

export default Signboard;
