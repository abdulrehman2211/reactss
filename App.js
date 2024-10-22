import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './components/Contact'
import About from './components/About'
import Products from './components/Products'
import Home from './components/Home';
import Singleproduct from './components/Singleproduct';

function App() {

  // npm i react-router-dom

  return (
    <div className="App">      
      <BrowserRouter> 
        <Navbar />  
          <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/abt' element={<About />} />
                <Route path='/pro' element={<Products />} />
                
                <Route path='/pro/:id' element={<Singleproduct />} />
          </Routes>
      </BrowserRouter>


      



    </div>
  );
}

export default App;
