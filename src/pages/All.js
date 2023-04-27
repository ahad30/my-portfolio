import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Reviews from "./Reviews";
import Blog from "./Blog";
import Contact from "./Contact";

function All() {
  return (
    <Router>
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="/">Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Link to="/" className="nav-link">
                  Home
                </Link>
                <Link to="/about" className="nav-link">
                  About
                </Link>
                <Link to="/services" className="nav-link">
                  Services
                </Link>
                <Link to="/portfolio" className="nav-link">
                  Portfolio
                </Link>
                <Link to="/reviews" className="nav-link">
                  Reviews
                </Link>
                <Link to="/blog" className="nav-link">
                  Blog
                </Link>
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Switch>
          <Route path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/services">
            <Services/>
          </Route>
          <Route path="/portfolio">
            <Portfolio/>
          </Route>
          <Route path="/reviews">
            <Reviews/>
          </Route>
          <Route path="/blog">
            <Blog/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default All;
