import React from "react";

class Display extends React.Component {
  render() {
    return (
      <div className="display__box">
        <input
          type="text"
          className="calculator-screen__display"
          value={this.props.display}
          disabled
        />
        <input
          id="display"
          type="text"
          className="calculator-screen__spaceCalcul"
          value={this.props.spaceCalcul}
          disabled
        />
      </div>
    );
  }
}
export default Display;
