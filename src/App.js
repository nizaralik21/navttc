import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import SignUp from "./Sign-Up.jsx";
import LogIn from "./LogIn.jsx";
import Cart from "./Billing/Cart.jsx"

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/login" element={<LogIn />} /> 
        <Route path="cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;