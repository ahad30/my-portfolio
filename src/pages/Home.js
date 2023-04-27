import React from "react"
import {  Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      
        <h1>Welcome to my Portfolio</h1>
        <p>
          Hi, I'm [Your Name] and I'm a [Your Profession]. Here you can find
          more information about my skills, experience and previous projects.
        </p>
        <p>
          <Link to="/portfolio">
            <Button variant="primary">View my Portfolio</Button>
          </Link>
        </p>
      
    </div>
  );
}

export default Home;
