import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
<header>
    <nav class="d-flex align-middle mt-5">
      <div class="container">
        <h3 class="nav1 hide">Josie Maldonado</h3>
      </div>
      <div class="container">
        <ul class="d-flex text-right align-middle justify-content-end">
          <li>
            <a class="nav-link nav2 hide" href="#about-me">About Me</a>
          </li>
          <li>
            <a class="nav-link nav3 hide" href="#work">Work</a>
          </li>
          <li>
            <a class="nav-link nav4 hide" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div id="resumeBtn" class="nav5 hide">
        <a class="resumeBtn nav5 hide" href="assets/resume.pdf">Resume</a>
      </div>
    </nav>
  </header>
    )
};

export default Navbar;