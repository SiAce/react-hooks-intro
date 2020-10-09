import React from "react";
import "./App.css";
import Counter from "./Counter";
import MoodToggler from "./MoodToggler";
import Cart from "./Cart";
import Navbar from "./Navbar";

const items = [
  { id: 1, name: "Taco Seasoning", price: 2.25, qty: 2 },
  { id: 2, name: "Pinto Beans", price: 1.99, qty: 3 },
  { id: 3, name: "Sour Cream", price: 3.5, qty: 1 },
];

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Cart initialItems={items} />
      <Counter step={5} />
      <Counter />
      <MoodToggler />
    </React.Fragment>
  );
}

export default App;
