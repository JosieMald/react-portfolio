import React from "react";
import { Link } from "react-router-dom";
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
    <nav className="d-flex align-middle mt-5">
      <div className="container">
      <Link className="nav1 hide" to="/">
        <h3>Josie Maldonado</h3>
      </Link>
      </div>
      <div className="container">
        <ul className="d-flex text-right align-middle justify-content-end">
          <li className="nav-link nav2 hide">
          <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              } 
            >
              About Me
            </Link>
          </li>
          <li className="nav-link nav3 hide">
          <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              } 
            >
              About Me
            </Link>
          </li>
          <li>
            <a className="nav-link nav4 hide" href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div id="resumeBtn" className="nav5 hide">
        <a className="resumeBtn nav5 hide" href="assets/resume.pdf">Resume</a>
      </div>
    </nav>
  </header>
    )
};

export default Navbar;