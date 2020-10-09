import React from "react";

function Greeter({ name, age = 18, excitement = 1 }) {
  const greet = () => {
    alert(`Hello, ${name}`)
  }
  return (
    <React.Fragment>
      <h1>Hi there, this is your name: {name}!</h1>
      <p>You are {age} years old! </p>
      <p>Excitement: {"❤️".repeat(excitement)} </p>
      <button onClick={greet}>Click Me</button>
    </React.Fragment>
  );
}

export default Greeter;
