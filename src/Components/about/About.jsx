import React from 'react';
import "./about.css";
import Image from "../../assets/avatar-2.svg"
import AboutBox from './AboutBox';
import resume from '../../assets/Resume.Developer.Ahad.pdf';

const About = () => {



  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid"> <img src={Image} alt="" className="about__img" />
        <div className="about__data">
          <div className="about__info">
            <p className="about__description">Passionate MERN Stack/Frontend Developer with a strong background in creating visually appealing and user-friendly web applications. With several years of experience.Throughout my short career, I have successfully contributed to the development of various projects, from startups to enterprise-level applications. My strong problem-solving skills, adaptability, and effective communication enable me to deliver solutions that exceed client expectations.</p>
            <a href={resume} className="btn " download='Resume.Developer.Ahad.pdf' >Download CV</a>
          </div>
{/*           
          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Web Development</h3>
                <span className="skills__number ">100%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
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

          </div> */}
        </div>
      </div>
      <AboutBox />
    </section>
  );

}

export default About