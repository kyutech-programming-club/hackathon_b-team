import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Adv6 = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn((prevState) => !prevState);
  };
  const navigate=useNavigate();
  const toNext = () => {
    navigate("/gameover")}
  return (
    <div style={{ zIndex: 20 ,left:"50%"}}>
      <h3></h3>
      <p>
        {" "}
        {isOn ? (
          ""
        ) : (
          <div>
            <img
              style={{
                height: "500px",
                top: "20px",
                position: "absolute",
                left: "200px",
                
              }}
              src="https://ascii.jp/img/2018/06/06/660828/l/86dda56a57bd2eb8.jpg"
              alt="image"
              onClick={toNext}
            />
            <button
              style={{ top: "30px", left: "520px", position: "absolute" }}
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

export default Adv6;
