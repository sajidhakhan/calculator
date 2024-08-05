import React, { useState } from 'react'

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
  
    const handleButtonClick = (value) => {
      setInput((prevInput) => prevInput + value);
    };
  
    const handleClear = () => {
      setInput('');
      setResult('');
    };
  
    const handleCalculate = () => {
        try {
          if (input.trim() === '') {
            setResult('Error');
            return;
          }
          const evaluatedResult = eval(input);
          if (evaluatedResult === Infinity) {
            setResult('Infinity');
          } else if (isNaN(evaluatedResult)) {
            setResult('NaN');
          } else {
            setResult(evaluatedResult.toString());
          }
        } catch (error) {
          setResult('Error');
        }
      };
 
    return (
      <div className="calculator-container">
        <h1>React Calculator</h1>
        <input type="text" className="calculator-input" value={input} readOnly />
        { result &&<div className="result">{result}</div> }
        <div className="buttons-container">
          {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+'].map((btn, index) => (
            <button
              key={index}
              onClick={() => btn === '=' ? handleCalculate() : handleButtonClick(btn)}
              className="calculator-button"
            >
              {btn}
            </button>

          ))}
          <button onClick={handleClear} className="calculator-button">C</button>
        </div>
      </div>
    );
}

export default Calculator