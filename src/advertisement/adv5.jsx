import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Adv5 = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn((prevState) => !prevState);
  };
  const navigate=useNavigate();
  const toNext = () => {
    navigate("/gameover")}
  return (
    <div style={{ zIndex: 30 }}>
      <h3></h3>
      <p>
        {" "}
        {isOn ? (
          ""
        ) : (
          <div style={{left:"50%"}}>
            <img
              style={{
                width: "600px",
                top: "20px",
                position: "absolute",
                left: "200px",
              }}
              src="https://liginc.co.jp/wp-content/uploads/2015/05/797-655x437.png"
              alt="image"
              onClick={toNext}
            />
            <button
              style={{ top: "30px", left: "770px", position: "absolute" }}
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

export default Adv5;
