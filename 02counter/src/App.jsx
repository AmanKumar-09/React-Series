import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)

  // let counter = 20
  const addValue = () =>{
    // counter = counter + 1
    // if(counter <= 19){
    // }
    // console.log("Clicked ", counter);
    setCounter( prevCounter => prevCounter + 1)
    setCounter( prevCounter => prevCounter + 1)
    setCounter( prevCounter => prevCounter + 1)
    setCounter( prevCounter => prevCounter + 1)
    setCounter( prevCounter => prevCounter + 1)
    
  }

  const reduceValue = () =>{
    // if(counter >= 1){
    // }
      setCounter(counter - 1)
  }

  return (
    <>
    <h1>Chai aur react </h1>
    <h2>Counter value: {counter}</h2>

    <button onClick={addValue} >Add value {counter} </button>
    <br />
    <button  onClick={reduceValue} >Reduce value{counter} </button>
    <p>footer: {counter}</p>
    </>
  )
}

export default App
