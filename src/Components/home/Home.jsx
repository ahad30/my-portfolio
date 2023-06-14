import React from "react";
import "./home.css";
import Me from "../../assets/ahad.jpg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";

const Home = () => {

  return (
    <section className="home container" id="home">
      <div className="intro" >
        <img src={Me} alt="" className="home__img rounded" />
        <h1 className="home__name">Mohiminul Islam Ahad</h1>
        <span className="home__education">I'm a Front-End developer</span>
        <HeaderSocials/>
        <a href="#contact" className="btn" >Hire Me</a>
        <ScrollDown/>
      </div>
    </section>
  )
}

export default Home;
