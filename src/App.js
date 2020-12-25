import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import './App.css';
import { decrement, increment } from './component/Action';


function App() {
  const count=useSelector(state=>state)
  const dispatch=useDispatch()
  console.log(count)
  return (
    <div className="App">
      <button onClick={()=>dispatch(increment(5))}>+</button>
  <h1>count:{count}</h1>
      <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
