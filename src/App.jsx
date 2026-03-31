import { useState } from "react";
import "./App.css";
import DigitalTools from "./components/digital-tools/DigitalTools";
import Hero from "./components/hero/Hero";
import DaisyNav from "./components/navbar/DaisyNav";
import Steps from "./components/steps/Steps";
import Pricing from "./components/pricing/Pricing";
import ExploreProduct from "./components/explore-product/ExploreProduct";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify";

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [selectedType, setSelectedType] = useState("Products");
  return (
    <>
      {/* <Navbar /> */}
      <DaisyNav cartItems={cartItems} setSelectedType={setSelectedType} />
      <Hero />
      <DigitalTools
        cartItems={cartItems}
        setCartItems={setCartItems}
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />
      <Steps />
      <Pricing />
      <ExploreProduct />
      <Footer />

      <ToastContainer />
    </>
  );
}

export default App;
