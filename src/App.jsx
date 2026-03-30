import { useState } from "react";
import "./App.css";
import DigitalTools from "./components/digital-tools/DigitalTools";
import Hero from "./components/hero/Hero";
import DaisyNav from "./components/navbar/DaisyNav";
import Navbar from "./components/navbar/Navbar";

function App() {
  const [cartItems, setCartItems] = useState([]);
  return (
    <>
      {/* <Navbar /> */}
      <DaisyNav cartItems={cartItems} />
      <Hero />
      <DigitalTools cartItems={cartItems} setCartItems={setCartItems} />
    </>
  );
}

export default App;
