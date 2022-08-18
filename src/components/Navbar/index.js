import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import resume  from "../pdf/resume.pdf"


function Navbar() {
  return (
    <header className="flex">
       <h3 className="flex">Josie Maldonado</h3>
       <div className="link-container flex">
          <ul className="flex">
            <li className="nav-link nav2">
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
            <li className="nav-link nav3">
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
        <div id="resumeBtn" className="d-flex">
          <a target="_blank" rel="noreferrer" className="resumeBtn nav5" href={resume}>
            Resume
          </a>
        </div>
      {/* <nav className="d-flex align-middle pt-4 border">
        <div className="container">
          <h3 class="nav1 mx-3">Josie Maldonado</h3>
        </div>
        <div className="container">
          <ul className="d-flex text-right align-middle justify-content-end">
            <li className="nav-link nav2">
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
            <li className="nav-link nav3">
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
        <div id="resumeBtn" className="nav5 me-3">
          <a target="_blank" rel="noreferrer" className="resumeBtn nav5" href={resume}>
            Resume
          </a>
        </div>
      </nav> */}
    </header>
  );
}

export default Navbar;
