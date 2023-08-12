import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Adv1 = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(prevState => !prevState);
  };
  const navigate=useNavigate();
  const toNext = () => {
    navigate("/gameover")}
  return (
    <div style={{zIndex:2}}> 
      <h3></h3>
      <p> {isOn ? 
       "" 
      :<div >
      <img style={{width:"500px",left:"500px",position:"absolute"}} src="https://i.ytimg.com/vi/L1evZxeyrQw/maxresdefault.jpg" alt="image"   onClick={toNext} />
      <button style={{top:"5px",left:"980px",position:"absolute"}} onClick={toggleSwitch}>×</button>  
      </div>}</p>
     
     
    </div>
  );
};


export default Adv1;
