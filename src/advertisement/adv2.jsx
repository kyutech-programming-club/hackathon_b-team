import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Adv2 = () => {
  const [isOn, setIsOn] = useState(false);
  

  const toggleSwitch = () => {
    setIsOn((prevState) => !prevState);
  };
  const navigate=useNavigate();
  const toNext = () => {
    navigate("/gameover")
}

  return (
    <div style={{ zIndex: 40 }}>
      <h3></h3>
      <p>
        {" "}
        {isOn ? (
          ""
        ) : (
          <div style={{ left: "50%" }}>
            <img
              style={{
                width: "200px",
                top: "20px",
                left: "500px",
                position: "absolute",
              }}
              src="https://www.kyutech.ac.jp/archives/025/201907/large-ac3c915465b74aaec1d59643eaa3b840.jpg"
              alt="image"
              onClick={toNext}
            />
            <button
              style={{ top: "35px", left: "670px", position: "absolute" }}
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

export default Adv2;
