import React, { useState } from 'react';

const Adv4 = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(prevState => !prevState);
  };

  return (
    <div style={{zIndex:49}}>
      <h3></h3>
      <p> {isOn ? 
     ""
      :<div >
           <img style={{width:"440px",zIndex:7,top:"50px",position:"absolute"}} src="https://media.loom-app.com/bi/dist/images/2020/09/11/5f5a2b537ed0ee001e25e6fd.jpg" alt="image" />
      <button style={{zIndex:8,top:"60px",left:"410px",position:"absolute"}} onClick={toggleSwitch}>×</button>  

      </div>}</p>
     
     
    </div>
  );
};


export default Adv4;