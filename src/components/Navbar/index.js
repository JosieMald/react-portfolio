import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";

// var nav = [
//     $(".nav1"),
//     $(".nav2"),
//     $(".nav3"),
//     $(".nav4"),
//     $(".nav5"),
//     $(".nav6"),
//   ];
  
//   function startImageTransition() {
//     var i = 0;
//     countdown = setInterval(function () {
//       console.log(nav[i]);
//       if (i <= 5) {
//         nav[i].removeClass("hide");
//         nav[i].addClass("animate__fadeInDown");
//         i++;
//         console.log(i);
//       } else clearInterval(countdown);
//       return;
//     }, 500);
//   }
//   startImageTransition();


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