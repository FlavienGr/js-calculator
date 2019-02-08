import React, { Component } from "react";

class DecimalBoard extends Component {
  handleChange = e => {
    const decimal = e.target.value;
    this.props.addDisplay(decimal);
  };
  render() {
    return (
      <div className="keyboard__box--decimal">
        <button
          id="decimal"
          className="keyboard"
          onClick={this.handleChange}
          value="."
        >
          .
        </button>
      </div>
    );
  }
}

export default DecimalBoard;
