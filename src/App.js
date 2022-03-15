import {useState} from 'react'
import './App.css';

const digits = {
  'zero': 0,
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9}

function App() {
  const [displayLable, setDisplayLable] = useState(0)

  const handleClick = event => {
    switch(event.target.id) {
      case "clear":
        setDisplayLable(0)
        break
      // case "one":
      //   setDisplayLable(String(displayLable) + 1)
      //   break
    }
    digits[event.target.id] && setDisplayLable(String(displayLable) + digits[event.target.id])
  }
  return (
    <div className="App">
      <button id="equals" onClick={handleClick}>=</button>
      <button id="zero" onClick={handleClick}>0</button>
      <button id="one" onClick={handleClick}>1</button>
      <button id="two" onClick={handleClick}>2</button>
      <button id="three" onClick={handleClick}>3</button>
      <button id="four" onClick={handleClick}>4</button>
      <button id="five" onClick={handleClick}>5</button>
      <button id="six" onClick={handleClick}>6</button>
      <button id="seven" onClick={handleClick}>7</button>
      <button id="eight" onClick={handleClick}>8</button>
      <button id="nine" onClick={handleClick}>9</button>
      <button id="add" onClick={handleClick}>+</button>
      <button id="subtract" onClick={handleClick}>-</button>
      <button id="multiply" onClick={handleClick}>*</button>
      <button id="divide" onClick={handleClick}>/</button>
      <button id="decimal" onClick={handleClick}>.</button>
      <button id="clear" onClick={handleClick}>clear</button>
      <lable id="display" >{displayLable}</lable>

    </div>
  );
}

export default App;
