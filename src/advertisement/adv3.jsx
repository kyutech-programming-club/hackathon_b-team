import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Adv3 = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn((prevState) => !prevState);
  };
  const navigate=useNavigate();
  const toNext = () => {
    navigate("/gameover")}
  return (
    <div style={{ zIndex: 36 }}>
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
                left: "300px",
              }}
              src="https://media.loom-app.com/bi/dist/images/2020/09/11/5f5a5f37e6ff30001d4e8163.jpg"
              alt="image"
              onClick={toNext}
            />
            <button
              style={{ top: "30px", left: "880px", position: "absolute" }}
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

export default Adv3;
