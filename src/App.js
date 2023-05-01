import React from "react";
import './App.css';

import Home from "./Components/home/Home";
import About from "./Components/about/About";
import Services from "./Components/services/Services";
import Resume from "./Components/resume/Resume";
import Portfolio from "./Components/portfolio/Portfolio";
import Pricing from "./Components/pricing/Pricing";
import Testimonials from  "./Components/testimonials/Testimonials";
import Blog from "./Components/blog/Blog";
import Contact from "./Components/contact/Contact";



function App() {
  return (
    <div className="App"> 
      <Home/>
      <About/>
      <Services/>
      <Resume/>
     <Portfolio/>
      <Pricing/>
      <Testimonials/>
       <Blog/>
      <Contact/>
    </div>
  );
}

export default App;