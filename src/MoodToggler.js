import React, { useState } from "react";
import "./MoodToggler.css"

function MoodToggler({ step = 1 }) {
  const [isHappy, setIsHappy] = useState(true);
  const toggleIsHappy = () => setIsHappy(!isHappy);
  return (
    <div>
      <h3 className="MoodToggler  " style={{ color: isHappy ? "green" : "red" }} onClick={toggleIsHappy}>
        {isHappy ? ":)" : ":("}{" "}
      </h3>
    </div>
  );
}

export default MoodToggler;
