import React from 'react';
import { Link } from 'react-router-dom';


export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/gamepage">start</Link>
    </div>
  );
};