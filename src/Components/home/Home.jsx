import React from "react";
import "./home.css";
import Me from "../../assets/ahad.jpg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import { Typewriter } from "react-simple-typewriter";
import ReactConfetti from "react-confetti";

const Home = () => {
  

  return (
    <section className="home container" id="home">
      <div className="intro" >
       <div className="flex justify-center">
       <img src={Me} alt="" className="home__img rounded" />
       </div>
        <h1 className="home__name">Mohiminul Islam Ahad</h1>
        <span className="home__education">I'm a <Typewriter
        loop={true}
         words={['Web Application developer','Front-End developer', 'Mern Stack Developer']}/></span>
        <HeaderSocials/>
       <div className="text-center">
       <a href="#contact" className="btn" >Give a message</a>
       </div>
        <ScrollDown/>
       
        <div className="">
    <ReactConfetti
      height={800}
      tweenDuration={6000}
      numberOfPieces={100}
      gravity={0.01}
      style={{maxWidth:"100%", margin: "0 auto"}}
    />
</div>

        </div>
  
    </section>
  )
}

export default Home;
