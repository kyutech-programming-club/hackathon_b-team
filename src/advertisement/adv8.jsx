import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Adv8 = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn((prevState) => !prevState);
    
  };
  const navigate=useNavigate();
  const toNext = () => {
    navigate("/gameover")}

  return (
    <div style={{ zIndex: 39 }}>
      <h3></h3>
      <p>
        {""}
        {isOn ? (
         ""
        ) : (
          <div>
            <img
              style={{
                width: "900px",
                zIndex: 10,
                top: "50px",
                position: "absolute",
                left:"350px"
              }}
              src="https://img.freepik.com/free-photo/joyful-sporty-black-guy-running-by-city-pond_1262-12697.jpg"
              alt="image"
              onClick={toNext}
            />
            <button
              style={{
                zIndex: 20,
                top: "60px",
                left: "1230px",
                position: "absolute",
            }}
              onClick={toggleSwitch}
            >
             ×
            </button>
          </div>
        )}
      </p>
    </div>
  );
};

export default Adv8;
