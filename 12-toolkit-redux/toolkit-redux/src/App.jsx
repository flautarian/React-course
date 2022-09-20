import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from './store';
import './App.css'
import reactLogo from './assets/react.svg'

function App() {
  const { counter } = useSelector((state) => state.counter);
  
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <span>count is {counter}</span>
        <button onClick={() => dispatch(increment())}>
          +1
        </button>

        <button onClick={() => dispatch(incrementByAmount(2))}>
          +2
        </button>

        <button onClick={() => dispatch(decrement())}>
          -1
        </button>
      </div>
    </div>
  )
}

export default App
