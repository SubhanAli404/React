import { useState } from 'react'

import './App.css'

function App() {
  const [val,change]=useState(0)
 
  return(
    <>
    <h1>React Practice Session</h1>
    <h2>Counter : {val}</h2>
    <button onClick={()=>change(val+1)}>+</button>{" "}
    <button disabled={val<=0} onClick={()=>change(val-1)}>-</button>
    <p>Footer : {val}</p>
    </>
  )

  
}

export default App
