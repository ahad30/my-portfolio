import React from "react";
import './App.css';

import Sidebar from "./Components/sidebar/Sidebar";
import Home from "./Components/home/Home";
import About from "./Components/about/About";
import Services from "./Components/services/Services";
import Resume from "./Components/resume/Resume";
import Portfolio from "./Components/portfolio/Portfolio";
import Pricing from "./Components/pricing/Pricing";
import Testimonials from  "./Components/testimonials/Testimonials";
import Blog from "./Components/blog/Blog";
import Contact from "./Components/contact/Contact";



const App = () => {
  return (
    <>
    <Sidebar/>
    <main className="main"> 
      <Home/>
      <About/>
      <Services/>
      <Resume/>
     <Portfolio/>
      <Pricing/>
      <Testimonials/>
       <Blog/>
      <Contact/>
    </main>
    </>
  );
}

export default App;