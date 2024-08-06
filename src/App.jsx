import { useEffect, useState } from 'react';
import './App.css'

function App() {

  const [display, setDisplay] = useState('0');
  const [operand, setOperand] = useState(null);
  const [operator, setOperator] = useState(null);


  function handleNumClick(e) {
    const value = e.target.value;
    setDisplay(display === '0' || display === '+' || display === '-' || display === '×' || display === '÷' ? value : display.concat(value));
  }


  function handleOperatorClick(e) {
    if (operand === null) {
      setOperand(parseFloat(display));
    } else if (operator) {
      const result = performCalculations();
      setOperand(result);
      setDisplay(result.toString());
    }
    setOperator(e.target.value);
    setDisplay(e.target.value);
  }

  function performCalculations() {
    const current = parseFloat(display);
    switch(operator) {
      case '+':
        return operand + current;

      case '-':
        return operand - current;
      
      case '×':
        return operand * current;

      case '÷':
        return operand / current;
    }
  }


  function handleEqualClick() {
    if (operand && operator !== null) {
      const result = performCalculations();
      setDisplay(result.toString());
      setOperand(null);
      setOperator(null);
    }
  }


  function handleClear() {
    setDisplay('0');
  }


  return(
    <div className="app">
      <div className="calculator-container">

        <input type="text" className='screen' value={display}  readOnly />

        <div className="buttons-container">

          <div className="row rowOne">
            <button value='1' onClick={handleNumClick}>1</button>
            <button value='2' onClick={handleNumClick}>2</button>
            <button value='3' onClick={handleNumClick}>3</button>
            <button className='change' value='+' onClick={handleOperatorClick}>+</button>
          </div>

          <div className="row rowTwo">
            <button value='4' onClick={handleNumClick}>4</button>
            <button value='5' onClick={handleNumClick}>5</button>
            <button value='6' onClick={handleNumClick}>6</button>
            <button className='change' value='-' onClick={handleOperatorClick}>-</button>
          </div>

          <div className="row rowThree">
            <button value='7' onClick={handleNumClick}>7</button>
            <button value='8' onClick={handleNumClick}>8</button>
            <button value='9' onClick={handleNumClick}>9</button>
            <button className='change' value='×' onClick={handleOperatorClick}>×</button>
          </div>

          <div className="row rowFour">
            <button onClick={handleClear}>Clear</button>
            <button value='0' onClick={handleNumClick}>0</button>
            <button onClick={handleEqualClick}>=</button>
            <button className='change' value='÷' onClick={handleOperatorClick}>÷</button>
          </div>
          
        </div>

      </div>
    </div>
  );
}

export default App