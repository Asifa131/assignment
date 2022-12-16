import './App.css';

function App() {
  return (
    <div className="container">
      <div className='main'>
        <h1 className='header'>LOGIN FORM</h1>
          <div className='sub-main'>USERNAME:<br></br>
             <input type="text"className="element"placeholder="Name"/>
          </div>
             <br></br>
         <div className='sub-main'>PASSWORD:<br></br>
            <input type="text"className="element"placeholder="Password"/>
            <br></br>
            <br></br>
            <button onClick={()=>alert("you have logged in")} className='btn'>Submit</button>
         </div>
      </div>
    </div>
  );
}

export default App;
