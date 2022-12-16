import React from 'react';
import './App.css';
import Menu from './Menu.js';
import About from './About.js';
import Contact from './Contact.js';
import Service from './Service.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter> 
    <div >
       <Menu />
        <Routes> 
          <Route path="/" element={<Home/>}> </Route>   
          <Route path="/about" element={<About/>}> </Route> 
          <Route path ="/contact" element={<Contact/>}> </Route> 
          <Route path="/service" element={<Service/>}> </Route>
       </Routes>
    </div>
    </BrowserRouter>
  );
}

const Home =() =>{
  return(
    <div className="Contactstyle">
    <h2>welcome to Home page</h2> 

        </div>
  )

}
export default App;
