import React from "react";
import Keyboard from "./chunks-pad/keyboard";
import Signboard from "./chunks-pad/signboard";
import ClearBoard from "./chunks-pad/clearboard";
import DecimalBoard from "./chunks-pad/decimalBoard";

const PadKeyboard = ({ addDisplay, deleteDisplay, addOperator, result }) => {
  return (
    <div className="calculator__box">
      <ClearBoard deleteDisplay={deleteDisplay} />
      <Keyboard addDisplay={addDisplay} />
      <Signboard
        addDisplay={addDisplay}
        addOperator={addOperator}
        result={result}
      />
      <DecimalBoard addDisplay={addDisplay} />
    </div>
  );
};

export default PadKeyboard;
