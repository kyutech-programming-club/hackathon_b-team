import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Adv4 = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(prevState => !prevState);
  };
  const navigate=useNavigate();
  const toNext = () => {
    navigate("/gameover")}
  return (
    <div style={{zIndex:49,left:"50%"}}>
      <h3></h3>
      <p> {isOn ? 
     ""
      :<div >
           <img style={{width:"600px",zIndex:7,top:"50px",position:"absolute"}} src="https://media.loom-app.com/bi/dist/images/2020/09/11/5f5a2b537ed0ee001e25e6fd.jpg" alt="image" 
             onClick={toNext}/>
      <button style={{zIndex:8,top:"60px",left:"580px",position:"absolute"}} onClick={toggleSwitch}>×</button>  

      </div>}</p>
     
     
    </div>
  );
};


export default Adv4;