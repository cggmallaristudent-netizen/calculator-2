import { useState } from 'react';
import './App.css';

function CalcDisplay({ dispValue }) {
  const isFullName = dispValue === "Carmela Grace Mallari";

  return (
    <div
      className="Display"
      style={isFullName ? { fontSize: "22px" } : undefined}
    >
      {dispValue}
    </div>
  );
}

function CalcButton({ buttonLabel, onClick, isSurname }) {
  return (
    <button
      className="Button"
      style={isSurname ? { backgroundColor: "#f8d6e5" } : undefined}
      onClick={() => onClick(buttonLabel)}
    >
      {buttonLabel}
    </button>
  );
}

function App() {
  const [disp, setDisp] = useState("");
  const [operand1, setOperand1] = useState(null);
  const [operation, setOperation] = useState(null);
  const [waitingForSecondNumber, setWaitingForSecondNumber] = useState(false);

  const buttonClickHandler = (value) => {

    // Clear
    if (value === "C") {
      setDisp("");
      setOperand1(null);
      setOperation(null);
      setWaitingForSecondNumber(false);
      return;
    }

    // Surname button
    if (value === "Mallari") {
      setDisp("Carmela Grace Mallari");
      setOperand1(null);
      setOperation(null);
      setWaitingForSecondNumber(false);
      return;
    }

    // Operators
    if (value === "+" || value === "-" || value === "x" || value === "/") {
      if (disp === "" || waitingForSecondNumber) return;

      setOperand1(Number(disp));
      setOperation(value);
      setDisp(disp + " " + value);
      setWaitingForSecondNumber(true);
      return;
    }

    // Numbers
    if (!isNaN(value)) {
      if (waitingForSecondNumber) {
        setDisp((prev) => prev + " " + value);
        setWaitingForSecondNumber(false);
      } else {
        setDisp((prev) => prev + value);
      }
      return;
    }

    // Equals
    if (value === "=") {
      if (operand1 === null || operation === null) {
        return;
      }

      const parts = disp.split(" ");
      const operand2 = Number(parts[parts.length - 1]);

      let result;

      if (operation === "+") {
        result = operand1 + operand2;
      } else if (operation === "-") {
        result = operand1 - operand2;
      } else if (operation === "x") {
        result = operand1 * operand2;
      } else if (operation === "/") {
        if (operand2 === 0) {
          setDisp("Error");
          setOperand1(null);
          setOperation(null);
          setWaitingForSecondNumber(false);
          return;
        }

        result = operand1 / operand2;
      }

      setDisp(String(result));
      setOperand1(null);
      setOperation(null);
      setWaitingForSecondNumber(false);
    }
  };

  return (
    <div className="App">

      <div className="Header">
        Calculator of Carmela Grace Mallari - WMD3A
      </div>

      <div className="Calculator">

        <CalcDisplay dispValue={disp} />

        <div className="Keypad">

          <CalcButton buttonLabel={7} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={8} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={9} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={"/"} onClick={buttonClickHandler} />

          <CalcButton buttonLabel={4} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={5} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={6} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={"x"} onClick={buttonClickHandler} />

          <CalcButton buttonLabel={1} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={2} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={3} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={"-"} onClick={buttonClickHandler} />

          <CalcButton buttonLabel={"C"} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={0} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={"="} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={"+"} onClick={buttonClickHandler} />

        </div>

        <CalcButton
          buttonLabel={"Mallari"}
          onClick={buttonClickHandler}
          isSurname={true}
        />

      </div>
    </div>
  );
}

export default App;
