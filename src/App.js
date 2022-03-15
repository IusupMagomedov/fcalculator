
import './App.css';
const handleClick = event => console.log(event.target.id)
function App() {
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
    </div>
  );
}

export default App;
