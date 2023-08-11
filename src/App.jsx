import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Gamepage1 } from './components/gamepage';
import './App.css';

function App () {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
       
          <Route path="/" element={<Home/>} />
          <Route path="/gamepage" element={<Gamepage1 />} />
          
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;