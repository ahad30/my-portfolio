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
                <h4>Frontend Developer</h4>
                <p className="resume-date">Nov'23-Present</p>
              </div>
              <div className="resume-item-body">
                <h5>Z-Eight Tech</h5>
                <p className="resume-item-description">
                  Restful API development: Handling API’s for React.js intregation
                  Collaborating with backend developers, and other team members to create
                  interactive web applications and enhancing project efficiently
                  TIme management ,handling pressure to deliver the project
                </p>
              </div>
            </div>

            <div className="resume-item resume-right-bottom">
              <div className="resume-item-heading">
                <FontAwesomeIcon icon={faBriefcase} className="resume-icon" />
                <h4>Web Developement Intern</h4>
                <p className="resume-date">Mar'23- June'23</p>
              </div>
              <div className="resume-item-body">
                <h5>Carriastic</h5>
                <p className="resume-item-description">
                  Implementing user interface designs using HTML, CSS, Bootstrap
                  JavaScript and Reactjs/Nodejs
                  Collaborating with designers, developers, and other team members
                  to create interactive web applications.
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
