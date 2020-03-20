import React, { Component } from "react";
import MoreAbout from "../components/home/moreAbout";
import About from "../components/home/about";
import Projects from "../components/home/projects";
import Contact from "../components/home/contact";
import Dashboard from "../components/home/dashboard";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

class Home extends Component {
  render() {
    return (
      <div
        id="home"
        style={{
          width: "100%"
        }}
      >
        <nav className="home-grid">
          <ul>
            <li className="home-nav-li">
              <a style={{ color: "#ffff" }} href="#dasboard">
                Dashboard
              </a>
            </li>
            <li className="home-nav-li">
              <a style={{ color: "#ffff" }} href="#about">
                About
              </a>
            </li>
            <li className="home-nav-li">
              <a style={{ color: "#ffff" }} href="#projects">
                Projects
              </a>
            </li>
            <li className="home-nav-li">
              <a style={{ color: "#ffff" }} href="#contact">
                Contact Us
              </a>
            </li>
          </ul>
        </nav>

        <div>
          <Dashboard />
          <About />
          <MoreAbout />
          <Projects />
          <Contact />
        </div>
      </div>
    );
  }
}
export default Home;
