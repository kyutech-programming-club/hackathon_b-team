import React, { useState } from 'react';

const Adv2 = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(prevState => !prevState);
  };

  return (
    <div style={{zIndex:40}}>
      <h3></h3>
      <p> {isOn ? 
     ""
      :<div >
      <img style={{width:"270px",top:"20px",left:"200px",position:"absolute"}} src="https://www.kyutech.ac.jp/archives/025/201907/large-ac3c915465b74aaec1d59643eaa3b840.jpg" alt="image" />
      <button style={{top:"35px",left:"440px",position:"absolute"}} onClick={toggleSwitch}>×</button>  
     
      </div>}</p>
    
     
    </div>
  );
};


export default Adv2;
