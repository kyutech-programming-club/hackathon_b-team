import React, { useState } from 'react';
const Adv1 = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(prevState => !prevState);
  };

  return (
    <div style={{zIndex:2}}> 
      <h3></h3>
      <p> {isOn ? 
     ""
      :<div >
      <img style={{height:"200px",top:"20px",position:"absolute"}} src="https://i.ytimg.com/vi/L1evZxeyrQw/maxresdefault.jpg" alt="image" />
      <button style={{top:"25px",left:"340px",position:"absolute"}} onClick={toggleSwitch}>×</button>  
      </div>}</p>
     
     
    </div>
  );
};


export default Adv1;
