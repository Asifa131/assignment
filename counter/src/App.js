import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [count,setCount]=useState(0);
  useEffect(()=>console.log(count));
  return (
    <div className='box'>
      <h1>Count: {count}</h1>
      <button className='btn1' onClick={()=>setCount(count+1)}>Increment</button>
      <br></br>
      <br></br>
      <button className='btn2' onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  );
}

export default App;
