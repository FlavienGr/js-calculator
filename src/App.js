import React from "react";
import PadKeyBord from "./components/pad-keyboard";
import Display from "./components/display";
import progressCalcul from "./utils/progressCalcul";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "0",
      spaceCalcul: "0",
      firstOperand: null,
      operator: null,
      hasResultFinal: "",
      calculFinished: false,
      backUpNumber: ""
    };
  }
  handleAddDisplay = number => {
    const includeDot = number === "." && this.state.spaceCalcul.includes(".");
    const regex = /[+*/\-=]/g;
    const validNumber =
      this.state.spaceCalcul === "0" && number === "0" ? "0" : number;
    const validSizeDisplayOnSpaceCalcul = this.state.spaceCalcul.length < 14;
    if (!includeDot && validSizeDisplayOnSpaceCalcul) {
      if (this.state.calculFinished) {
        this.deleteDisplay();
      }
      this.setState(prevState => ({
        display:
          prevState.display === "0"
            ? validNumber
            : `${prevState.display}${validNumber}`,
        spaceCalcul:
          prevState.spaceCalcul === "0" || regex.test(this.state.spaceCalcul)
            ? validNumber
            : (prevState.spaceCalcul += validNumber),
        backUpNumber:
          prevState.display === "0" ? number : prevState.display + number
      }));
    } else if (!validSizeDisplayOnSpaceCalcul) {
      this.displayMessage();
    }
  };
  deleteDisplay = () => {
    this.setState(() => ({
      display: "0",
      spaceCalcul: "0",
      firstOperand: null,
      operator: null,
      hasResultFinal: "",
      calculFinished: false,
      backUpNumber: ""
    }));
  };
  handleAddOperator = nextOperator => {
    const regex = /\d+/;
    const spaceIsNotAnOperator = regex.test(this.state.spaceCalcul);

    if (!spaceIsNotAnOperator && this.state.operator) {
      this.setState(prevState => ({
        display: prevState.backUpNumber + nextOperator,
        operator: nextOperator,
        spaceCalcul: nextOperator
      }));
    } else {
      if (this.state.hasResultFinal) {
        this.setState(prevState => ({
          display: prevState.hasResultFinal,
          hasResultFinal: "",
          calculFinished: false
        }));
      }

      if (this.state.firstOperand === null) {
        this.setState(prevState => ({
          firstOperand: parseFloat(this.state.spaceCalcul),
          display:
            prevState.display === "0"
              ? nextOperator
              : `${prevState.display}${nextOperator}`,
          spaceCalcul: nextOperator,
          operator: nextOperator
        }));
      } else if (this.state.operator && this.state.firstOperand) {
        this.calculall(
          nextOperator,
          this.state.operator,
          this.state.firstOperand,
          parseFloat(this.state.spaceCalcul)
        );
      } else if (
        !this.state.firstOperand &&
        spaceIsNotAnOperator &&
        this.state.display !== "0"
      ) {
        this.setState(prevState => ({
          firstOperand: parseFloat(this.state.display),
          display:
            prevState.display === "0"
              ? nextOperator
              : `${prevState.display}${nextOperator}`,
          spaceCalcul: nextOperator,
          operator: nextOperator
        }));
      }
    }
  };
  calculall = (nextOperator, operator, firstOperand, spaceCalcul) => {
    const result = progressCalcul[operator](firstOperand, spaceCalcul);

    this.setState(prevState => ({
      firstOperand: result,
      operator: nextOperator,
      display:
        prevState.display === "0"
          ? nextOperator
          : `${prevState.display}${nextOperator}`,
      spaceCalcul: nextOperator
    }));
  };
  handleResult = () => {
    if (!this.state.calculFinished) {
      let total = progressCalcul[this.state.operator](
        this.state.firstOperand,
        parseFloat(this.state.spaceCalcul)
      );
      const totalLengthVerif = total.toString().length > 14 ? true : false;
      if (totalLengthVerif) {
        const arrayOfTotal = total.toString().split("");
        const totalSlice = arrayOfTotal.slice(0, 14).join("");
        this.setState(prevState => ({
          firstOperand: null,
          operator: null,
          display: (prevState.display += "=" + totalSlice),
          spaceCalcul: totalSlice,
          hasResultFinal: totalSlice,
          calculFinished: true,
          backUpNumber: totalSlice
        }));
      } else {
        this.setState(prevState => ({
          firstOperand: null,
          operator: null,
          display: (prevState.display += "=" + total),
          spaceCalcul: total,
          hasResultFinal: total,
          calculFinished: true,
          backUpNumber: total
        }));
      }
    }
  };

  displayMessage = () => {
    const backUpSpaceCalcul = this.state.spaceCalcul;
    this.setState(() => ({ spaceCalcul: "Digits limit met" }));
    setTimeout(() => {
      this.setState(() => ({ spaceCalcul: backUpSpaceCalcul }));
    }, 2000);
    clearTimeout();
  };

  render() {
    return (
      <div className="app">
        <div className="calculator-container">
          <Display
            display={this.state.display}
            spaceCalcul={this.state.spaceCalcul}
          />
          <PadKeyBord
            addDisplay={this.handleAddDisplay}
            deleteDisplay={this.deleteDisplay}
            addOperator={this.handleAddOperator}
            result={this.handleResult}
          />
        </div>
      </div>
    );
  }
}

export default App;
