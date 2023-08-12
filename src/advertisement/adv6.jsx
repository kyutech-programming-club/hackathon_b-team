import React, { useState } from 'react';

const Adv6 = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(prevState => !prevState);
  };

  return (
    <div style={{zIndex:20}}>
      <h3></h3>
      <p> {isOn ? 
     ""
      :<div>
        <img style={{height:"500px",top:"20px",position:"absolute"}} src="https://ascii.jp/img/2018/06/06/660828/l/86dda56a57bd2eb8.jpg" alt="image" />
              <button style={{top:"0px",left:"350px",position:"absolute"}} onClick={toggleSwitch}>×</button>  
      


      </div>}</p>
     
     
    </div>
  );
};


export default Adv6;