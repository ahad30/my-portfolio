import React, { useState, useEffect } from "react";
import './App.css';
import Sidebar from "./Components/sidebar/Sidebar";
import Home from "./Components/home/Home";
import About from "./Components/about/About";
import Services from "./Components/services/Services";
import Resume from "./Components/resume/Resume";
import Portfolio from "./Components/portfolio/Portfolio";
import Pricing from "./Components/pricing/Pricing";
import Testimonials from "./Components/testimonials/Testimonials";
import Blog from "./Components/blog/Blog";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/Footer/Footer";

// Add a loader component
const Loader = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="loader"></div>
  </div>
);

const App = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading process
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust time as necessary
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />; // Show the loader while loading
  }

  return (
    <>
      <Sidebar />
      <main className="main"> 
        <Home />
        <About />
        {/* <Services/> */}
        <Resume />
        <Portfolio />
        {/* <Pricing/> */}
        <Testimonials />
        <Blog />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
