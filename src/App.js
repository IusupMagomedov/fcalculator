import { useState } from 'react'
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
  'nine': 9, 
  'decimal': '.'
}
  const calculate = (num1, num2, operation) => {
    let res = 0
    num1 = Number(num1)
    num2 = Number(num2)
    switch (operation){
      case "add":
        res = num1 + num2
        break
      case "subtract":
        res = num1 - num2
        break
      case "multiply":
        res = num1 * num2
        break
      case "divide":
        res = num1 / num2
        break
      case '':
        res = num2
    }
    console.log(res)
    return res
  }
  const negativeSwitch = str => str === '' ? '-' : ''
  
function App() {
  const [displayLable, setDisplayLable] = useState(0)
  const [operationMemory, setOperationMemory] = useState('')
  const [numberMemory, setNumberMemory] = useState(0)
  const [chainFlag, setChainFlag] = useState(false)
  const [subtractFlag, setsubtractFlag] = useState(false)
  const [negative, setNegative] = useState('')
  const [previousButton, setPreviousButton] = useState('')

  const handleClick = event => {
    setPreviousButton(event.target.id)
    switch(event.target.id) {
      case "clear":
        setDisplayLable(0)
        setNumberMemory(0)
        setOperationMemory('')
        setNegative('')
        break
      case "zero":
        (displayLable != 0) && setDisplayLable(String(displayLable) + digits[event.target.id])
        setPreviousButton('number')
        break
      case "one":
      case "two":
      case "three":
      case "four":
      case "five":
      case "six":
      case "seven":
      case "eight":
      case "nine":
        //  && 
        (displayLable == 0) || previousButton !== 'number'
        ? setDisplayLable(negative + digits[event.target.id])
        : setDisplayLable(negative + String(displayLable) + digits[event.target.id])
        negative === '-' && setNumberMemory(displayLable)
        previousButton === 'operation' && setNumberMemory(displayLable)

        setNegative('')
        setPreviousButton('number')
        // if(previousButton === "add" || previousButton === "subtract" || previousButton === "multiply" || previousButton === "divide") {
        //   setDisplayLable(calculate(numberMemory, negative + displayLable, operationMemory))
        //   break
        // } 
        
        break
      case "decimal":
        console.log(/\./.test(displayLable))
        !/\./.test(displayLable) && setDisplayLable(String(displayLable) + digits[event.target.id])
        setPreviousButton('number')
        break
      case "add":
      case "subtract":
      case "multiply":
      case "divide":
        if(previousButton === 'operation' && event.target.id === 'subtract') {
          setNegative(negativeSwitch(negative))
        } else if(previousButton === 'subtract') {
          setOperationMemory(event.target.id)
          setPreviousButton('operation')
          setNegative('')
        } else {
          setOperationMemory(event.target.id)
          setPreviousButton('operation')
          setDisplayLable(calculate(numberMemory, displayLable, operationMemory))
          setNegative('')
        }
        
      
      // setNegative('')
        // if(previousButton !== "add" && previousButton !== "subtract" && previousButton !== "multiply" &&previousButton !== "divide") {
        //   setOperationMemory(event.target.id)
        //   setNumberMemory(displayLable)
        //   setDisplayLable(0)
        // } else if((previousButton === "add" || previousButton === "divide" || previousButton === "multiply") && event.target.id === 'subtract') {
        //   setNegative('-')
        // } else {
        //   setOperationMemory(event.target.id)
        // }
        
        break
      case "equals":
        operationMemory !== '' && setDisplayLable(calculate(numberMemory, displayLable, operationMemory)) 
        setOperationMemory('')
        setsubtractFlag(false)
        setPreviousButton('equals')
        break
    }
  
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
      <div id="display" >{displayLable}</div>
      <p>operationMemory {operationMemory}</p>
      <p>numberMemory {numberMemory}</p>
      <p>chainFlag {chainFlag}</p>
      <p>negative {negative}</p>
      <p>subtractFlag {subtractFlag}</p>
      <p>previousButton {previousButton}</p>
    </div>
  );
}

export default App;
