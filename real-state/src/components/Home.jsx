import React from "react";
import { ToastContainer } from "react-toastify";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Testimonails from "./Testimonails";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <ToastContainer />
      <Header />
      <About />
      <Projects />
      <Testimonails />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
