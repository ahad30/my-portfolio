import React from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import "./resume.css";

const Resume = () => {
  return (

  
      <section className="resume container section" id="resume">
        <h2 className="section__title">Resume</h2>
        <div className="resume-section grid">
          <div className="resume-left-col">
            <h3>Education</h3>
            <div className="resume-item p-2 text-justify">
              <div className="resume-item-heading">
                <FontAwesomeIcon icon={faGraduationCap} className="resume-icon" />
                <h4>BSc( Electrical Engineering)</h4>
                <p className="resume-date">2018 - 2022</p>
              </div>
              <div className="resume-item-body">
                <h5 className="font-medium">Port City International University</h5>
                <p className="resume-item-description">
                  Port City International University located at Chittagong is a new generation private university committed to excellence in higher education and research.
                </p>
              </div>
            </div>

            <div className="resume-item p-2 text-justify">
              <div className="resume-item-heading">
                <FontAwesomeIcon icon={faGraduationCap} className="resume-icon" />
                <h4>Higher Secondary School</h4>
                <p className="resume-date">2015 - 2017</p>
              </div>
              <div className="resume-item-body">
                <h5 className="font-medium">Ispahani Public School & College</h5>
                <p className="resume-item-description">
                  IPSC is a private educational institution on Zakir Hossain Road in Chittagong. This college is one of the top most reputed colleges of Chittagong
                </p>
              </div>
            </div>
          </div>

          <div className="resume-right-col">
            <h3>Experience</h3>
            <div className="resume-item p-2 text-justify">
              <div className="resume-item-heading">
                <FontAwesomeIcon icon={faBriefcase} className="resume-icon" />
                <h4>Full stack Developer</h4>
                <p className="resume-date">Jul'24-present</p>
              </div>
              <div className="resume-item-body">
                <h5 className= "font-medium">Smart Framework</h5>
                <p className="resume-item-description">
                <ul>
                <li>1. Restful API development: Design, implement, and integrate robust APIs to
                facilitate seamless communication between the frontend and backend.</li>
                 <li>2. Develop, optimize, and manage databases using MongoDB and My SQL to
                 ensure efficient data storage and retrieval.</li>
                 <li> 3. Collaborate with UI/UX designers and implement responsive, interactive, and
user-friendly interfaces using React.js and Next.js
</li>
                </ul>
                </p>
              </div>
            </div>

            <div className="resume-item p-2 text-justify">
              <div className="resume-item-heading">
                <FontAwesomeIcon icon={faBriefcase} className="resume-icon" />
                <h4>Frontend Developer</h4>
                <p className="resume-date">Nov'23-Jun'24</p>
              </div>
              <div className="resume-item-body">
                <h5 className= "font-medium">Z-Eight Tech</h5>
                <p className="resume-item-description">
                <ul>
                <li>1. Restful API development: Handling API’s for React.js intregation</li>
                 <li>2. Collaborating with backend developers, and other team members to create
                 interactive web applications and enhancing project efficiently</li>
                 <li> 3. Time management ,handling pressure to deliver the project</li>
                </ul>
                </p>
              </div>
            </div>

            <div className="resume-item p-2 text-justify resume-right-bottom">
              <div className="resume-item-heading">
                <FontAwesomeIcon icon={faBriefcase} className="resume-icon" />
                <h4>Web Developement Intern</h4>
                <p className="resume-date">Mar'23- June'23</p>
              </div>
              <div className="resume-item-body">
                <h5 className= "font-medium">Carriastic</h5>
                <p className="resume-item-description">
               <ul>
               <li>
                 1. Implementing user interface designs using HTML, CSS, Bootstrap
                 JavaScript and Reactjs/Nodejs.
                 </li>
                 <li>2. Collaborating with designers, developers, and other team members
                 to create interactive web applications.</li>
               </ul>
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

  );
};

export default Resume;
