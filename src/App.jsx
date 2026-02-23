import './App.css'
import { useState } from 'react'

function App() {
  let[counter, setCounter] = useState(0)

  const addValue = ()=>{
    if(counter<20){
      counter = counter +1 
      setCounter(counter)
    }
  }
  const removeValue = ()=>{
    if(counter>0){
      counter = counter -1 
      setCounter(counter)
    }
  }
  return (
    <>
    <p>Hello this is a counter project</p>
    <h1>Counter value: {counter}</h1>
    <button onClick={addValue}>Add value </button><br />
  <button onClick={ removeValue}>Remove value </button>
    </>
  )
}
 
export default App
