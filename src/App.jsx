import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//import React from 'react';
import * as Icon from 'react-feather';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  //increase by 10
  const increaseByTen = () => {
    setCount((count)=>count + 10);
  }

  //increase by 1
  const increaseByOne = () => {
    setCount((count) => count + 1)
  }
  //reset to 0
  const resetToZero = () => {
    setCount(0);
  }
  //radom num between 1 and 100
  const randomNum = () => {
    const random = Math.random();
    const ranInRange = Math.floor(random * 100) +1;
    setCount(ranInRange);
  }
  //decrease by 10
  const decreaseByTen = () => {
    setCount((count) => count -10)
  }
  //decrease by 1
  const decreaseByOne = () => {
    setCount((count) => count -1)
  }

  return (      
      
      <div className="card">
      <p>Current Value:</p>
        <button className="value" onClick={() => setCount((count) => count + 1)}>
           {count}
        </button>

        <div className="cardCounter">
          <button onClick={increaseByOne}>
            <Icon.ChevronUp/>
          </button>
          <button onClick={increaseByTen}>
            <Icon.ChevronsUp/>
          </button>
          <button onClick={resetToZero}>
            <Icon.RotateCcw/>
          </button>
          <button onClick={randomNum}>
            <Icon.Hash/>
          </button>
          <button onClick={decreaseByTen}>
            <Icon.ChevronsDown/>
          </button>
          <button onClick={decreaseByOne}>
            <Icon.ChevronDown/>
          </button>
        </div>
      </div>

      
  
  )
}

export default App
