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
        <img src={Me} alt="" className="home__img rounded" />
        <h1 className="home__name">Mohiminul Islam Ahad</h1>
        <span className="home__education">I'm a <Typewriter
        loop={true}
         words={['Front-End developer', 'Mern Stack Developer']}/></span>
        <HeaderSocials/>
        <a href="#contact" className="btn" >Give a message</a>
        <ScrollDown/>
        <ReactConfetti
      width={1000}
      height={600}
      tweenDuration={6000}
      numberOfPieces={100} 
     gravity={0.01}
          />
      </div>
    </section>
  )
}

export default Home;
