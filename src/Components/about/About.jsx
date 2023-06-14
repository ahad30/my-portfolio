import React from 'react';
import "./about.css";
import Image from "../../assets/avatar-2.svg"
import AboutBox from './AboutBox';
import  resume from '../../assets/Resume.Ahad.PCIU.pdf';

const About = () => {
 


  return (
    <section className="about container section" id="about"> <h2 className="section__title">About Me</h2>
      <div className="about__container grid"> <img src={Image} alt="" className="about__img" />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">I am Mohiminul Islam Ahad, Web developer from Chattogram, Bangladesh. I have rich experience in web site design and building and customization, also I am good at UI/UX Design.</p>
            <a href={resume}  className="btn" download='resume' >Download CV</a>
          </div>
          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Web Development</h3>
                <span className="skills__number ">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX Design</h3>
                <span className="skills__number">60%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Web Design</h3>
                <span className="skills__number">100%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage web"></span>
              </div>
            </div>

          </div>
        </div>
      </div>
 <AboutBox/>
    </section>
  );

}

export default About