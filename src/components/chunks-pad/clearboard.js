import React, { Component } from "react";

class ClearBoard extends Component {
  handleChange = () => {
    this.props.deleteDisplay();
  };
  render() {
    return (
      <div className="keyboard__box--clear">
        <button
          id="clear"
          className="keyboard keyboard-accurate"
          onClick={this.handleChange}
        >
          AC
        </button>
      </div>
    );
  }
}

export default ClearBoard;
