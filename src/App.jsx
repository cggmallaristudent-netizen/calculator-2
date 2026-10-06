import { useState } from 'react';
import './App.css'

function CalcDisplay({ dispValue }) {
  return (
    <div className="Display">
      {dispValue}
    </div>
  );
}

function CalcButton({ buttonLabel, onClick }) {
  return (
    <button className="Button" onClick={() => onClick(buttonLabel)}>
      {buttonLabel}
    </button>
  );
}

function App() {
  const [disp, setDisp] = useState(0);

  const buttonClickHandler = (value) => {
    setDisp(value);
  }

  return (
    <div className="App">
      <div className="Header">
        Calculator of Carmela Mallari - WMD3A
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

          <CalcButton buttonLabel={"CLR"} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={0} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={"="} onClick={buttonClickHandler} />
          <CalcButton buttonLabel={"+"} onClick={buttonClickHandler} />
        </div>
      </div>
    </div>
  )
}

export default App