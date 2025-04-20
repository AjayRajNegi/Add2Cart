import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import ScrollToTop from "./components/ScrollToTop";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div className="relative mx-auto w-[90%] md:w-[90%]">
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="App">
        <ScrollToTop />
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/order" element={<PlaceOrder />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
