import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import "./resume.css";

const Resume = () => {
  return (

    <Container>
      <section className="resume container section" id="resume">
        <h2 className="section__title">Resume</h2>
        <div className="resume-section grid">
          <div className="resume-left-col">
            <h3>Education</h3>
            <div className="resume-item">
              <div className="resume-item-heading">
                <FontAwesomeIcon icon={faGraduationCap} className="resume-icon" />
                <h4>BSc( Electrical Engineering)</h4>
                <p className="resume-date">2018 - 2022</p>
              </div>
              <div className="resume-item-body">
                <h5>Port City International University</h5>
                <p className="resume-item-description">
                Port City International University located at Chittagong is a new generation private university committed to excellence in higher education and research. 
                </p>
              </div>
            </div>

            <div className="resume-item">
              <div className="resume-item-heading">
                <FontAwesomeIcon icon={faGraduationCap} className="resume-icon" />
                <h4>Higher Secondary School</h4>
                <p className="resume-date">2015 - 2017</p>
              </div>
              <div className="resume-item-body">
                <h5>Ispahani Public School & College</h5>
                <p className="resume-item-description">
               IPSC is a private educational institution on Zakir Hossain Road in Chittagong. This college is one of the top most reputed colleges of Chittagong
                </p>
              </div>
            </div>
          </div>

          <div className="resume-right-col">
            <h3>Experience</h3>
            <div className="resume-item">
              <div className="resume-item-heading">
                <FontAwesomeIcon icon={faBriefcase} className="resume-icon" />
                <h4>Web Development Intern</h4>
                <p className="resume-date">Jan'23-Jun'23</p>
              </div>
              <div className="resume-item-body">
                <h5>Carriastic</h5>
                <p className="resume-item-description">
                Carriastic basically a job placement platform for graduates and understudies, especially, focusing on their careers for ensuring job placement in the competitive job market.
                </p>
              </div>
            </div>

            <div className="resume-item resume-right-bottom">
              <div className="resume-item-heading">
                <FontAwesomeIcon icon={faBriefcase} className="resume-icon" />
                <h4>Software Developer</h4>
                <p className="resume-date">2022-2023</p>
              </div>
              <div className="resume-item-body">
                <h5>GAOTEK INC.</h5>
                <p className="resume-item-description">
                GAO Tek Inc. (www.gaotek.com) is a member of GAO Group of Companies, headquartered in New York City, USA & Toronto, Canada with a strong global presence.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </Container>
  );
};

export default Resume;
