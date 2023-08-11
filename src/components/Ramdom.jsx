
import Adv1 from "../advertisement/adv1";
import Adv2 from "../advertisement/adv2";
import Adv3 from "../advertisement/adv3";
import Adv4 from "../advertisement/adv4";
import Adv5 from "../advertisement/adv5";
import Adv6 from "../advertisement/adv6";
import "./Ramdom.css"



import React, { useState, useEffect } from 'react';

function FortuneResult({ index, result }) {
  return <p> {result}</p>;
}

function FortuneTeller() {
  const fortunes = [
   <Adv1></Adv1>,
   <Adv2></Adv2>,
   <Adv3></Adv3>,
   <Adv4></Adv4>,
   <Adv5></Adv5>,
   <Adv6></Adv6>
  ];

  const [results, setResults] = useState([]);

  useEffect(() => {
   
    const randomResults = Array.from({ length: 5 }, () => fortunes[Math.floor(Math.random() * fortunes.length)]);
    setResults(randomResults);
  }, []);

  return (
    <div>
   
      {results.map((result, index) => (
        <FortuneResult key={index} index={index} result={result} />
      ))}
    </div>
  );
}

function Ramdom() {
  return (
    <div>
      <FortuneTeller />
    </div>
  );
}

export default Ramdom;
