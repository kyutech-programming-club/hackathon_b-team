import React from 'react';
import { Link } from 'react-router-dom';

export const Gameover = () => {
  return (
    <div style={{backgroundColor: 'black',height: '9999px'}}>
      <p style={{color: 'red',fontSize: '100px',top: '50px'}}>Gameover</p>
      <Link to="/gamepage">start</Link>
      <br />
      <Link to="/">back home</Link>
    </div>
  );
};