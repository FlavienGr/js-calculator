import React, { Component } from "react";

class Keyboard extends Component {
  handleChange = e => {
    const number = e.target.value;
    this.props.addDisplay(number);
  };
  render() {
    return (
      <div className="keyboard__box--digits">
        <button
          id="zero"
          className="keyboard__digits--zero"
          onClick={this.handleChange}
          value={0}
        >
          0
        </button>
        <button
          id="one"
          className="keyboard__digits--one"
          onClick={this.handleChange}
          value={1}
        >
          1
        </button>
        <button
          id="two"
          className="keyboard__digits--two"
          onClick={this.handleChange}
          value={2}
        >
          2
        </button>
        <button
          id="three"
          className="keyboard__digits--three"
          onClick={this.handleChange}
          value={3}
        >
          3
        </button>
        <button
          id="four"
          className="keyboard__digits--four"
          onClick={this.handleChange}
          value={4}
        >
          4
        </button>
        <button
          id="five"
          className="keyboard__digits--five"
          onClick={this.handleChange}
          value={5}
        >
          5
        </button>
        <button
          id="six"
          className="keyboard__digits--six"
          onClick={this.handleChange}
          value={6}
        >
          6
        </button>
        <button
          id="seven"
          className="keyboard__digits--seven"
          onClick={this.handleChange}
          value={7}
        >
          7
        </button>
        <button
          id="eight"
          className="keyboard__digits--height"
          onClick={this.handleChange}
          value={8}
        >
          8
        </button>
        <button
          id="nine"
          className="keyboard__digits--nine"
          onClick={this.handleChange}
          value={9}
        >
          9
        </button>
      </div>
    );
  }
}

export default Keyboard;
