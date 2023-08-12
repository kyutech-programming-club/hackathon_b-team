import React, { useState } from 'react';

const Adv3 = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(prevState => !prevState);
  };

  return (
    <div style={{zIndex:36}}>
      <h3></h3>
      <p> {isOn ? 
     ""
      :<div>
          <img style={{width:"400px",top:"20px",position:"absolute"}} src="https://media.loom-app.com/bi/dist/images/2020/09/11/5f5a5f37e6ff30001d4e8163.jpg" alt="image" />
      <button style={{top:"50px",left:"350px",position:"absolute"}} onClick={toggleSwitch}>×</button>  
 
      </div>}</p>
     
     
    </div>
  );
};


export default Adv3;