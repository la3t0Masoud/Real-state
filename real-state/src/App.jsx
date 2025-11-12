import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";
import Signup from "./components/Signup.jsx";

function App() {
  return (
    <>
      <div className="w-full overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<Signup />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
