import { useState } from "react";
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <header>
      <h1>React Counter
</h1>
    </header>
    <main>
    <div className="app">
      
  
      <button className={count == 0 ? "hide" : "display"} onClick={() => setCount(count - 1)}>-</button>
      
      <div className="counter">{count}</div>

      <button className={count == 10 ? "hide" : "display"} onClick={() => setCount(count + 1)}>+</button>
  
  </div>
  <button className="reset" onClick={() => setCount(0)} >Reset</button>
    </main>
    <footer>
      <p>Made by <a href="https://github.com/olekszij" target="_blank" rel="noopener noreferrer">me</a> ©️ 2024</p>
    </footer>
    </>
  
  )
}

export default App
