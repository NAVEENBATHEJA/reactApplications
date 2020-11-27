import React, { useState } from 'react'

function HookCounter() {

 const initCount = 0;
 const [count, setCount] = useState(initCount)

 const increment = () => {
  setCount(inc => inc + 1);
 }

 const decrement = () => {
  setCount(dec => dec - 1);
 }

 const reset = () => {
  setCount(initCount);
 }

 const FiveIncrement = () => {
  for (let i = 0; i < 5; i++) {
   setCount(prevCount => prevCount + 1)
  }
 }

 return (
  <div>
   {count}
   <button onClick={reset}>Reset</button>
   <button onClick={increment}>+</button>
   <button onClick={decrement}>-</button>
   <button onClick={FiveIncrement}>5 increment</button>
  </div>
 )

}

export default HookCounter
