import React, { useState } from 'react';

const Adv5= () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(prevState => !prevState);
  };

  return (
    <div style={{zIndex:30}}>
      <h3></h3>
      <p> {isOn ? 
     ""
      :<div >
 <img style={{width:"400px",top:"20px",position:"absolute"}} src="https://liginc.co.jp/wp-content/uploads/2015/05/797-655x437.png" alt="image" />  
      <button style={{top:"30px",left:"370px",position:"absolute"}} onClick={toggleSwitch}>×</button>
     
      </div>}</p>
     
     
    </div>
  );
};


export default Adv5;