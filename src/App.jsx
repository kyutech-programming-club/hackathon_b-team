import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Page1 } from './components/gamepage';
import  Mypage from './Mypage';
import  Register  from "./Register";
import  Login  from "./Login";
import  Ranking  from "./components/ranking";


import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Mypage />} />
          <Route path="/gamepage" element={<Page1 />} />
          <Route path="/register/" element={<Register />} />
          <Route path="/login/" element={<Login />} />
          <Route path="/ranking" element={<Ranking />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;