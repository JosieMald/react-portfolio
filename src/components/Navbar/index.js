import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import resume  from "../pdf/resume.pdf"

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
          <h3 class="nav1 hide">Josie Maldonado</h3>
        </div>
        <div className="container">
          <ul className="d-flex text-right align-middle justify-content-end">
            <li className="nav-link nav2 hide">
              <Link
                to="/"
                className={
                  window.location.pathname === "/" ||
                  window.location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                About Me
              </Link>
            </li>
            <li className="nav-link nav3 hide">
              <Link
                to="/work"
                className={
                  window.location.pathname === "/work" ||
                  window.location.pathname === "/work"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Work
              </Link>
            </li>
          </ul>
        </div>
        <div id="resumeBtn" className="nav5 hide">
          <a target="_blank" rel="noreferrer" className="resumeBtn nav5 hide" href={resume}>
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
