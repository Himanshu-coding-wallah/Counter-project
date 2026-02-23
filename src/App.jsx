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
  <div className="bg-green-900 text-amber-100 p-8 rounded-2xl shadow-xl text-center w-80">
    <p className="text-lg font-semibold mb-4">
      Hello this is a counter project
    </p>

    <h1 className="text-3xl font-bold mb-6">
      Counter value: {counter}
    </h1>

    <div className="flex justify-center gap-4">
      <button
        onClick={addValue}
        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
      >
        Add Value
      </button>

      <button
        onClick={removeValue}
        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
      >
        Remove Value
      </button>
    </div>
  </div>

    </>
  )
}
 
export default App
