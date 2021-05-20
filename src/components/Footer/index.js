import React from "react";
import "./style.css";

function Footer() {
    return (
        <footer className="container fixed-bottom mt-5">
      <ul className="d-flex text-right justify-content-around">
        <li>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/josie-maldonado-437b909a">
            <i className="fa fa-linkedin fa_custom fa-2x"></i>
          </a>
        </li>
        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/JosieMald">
            <i className="fa fa-github fa_custom fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="mailto:JosieLindaMaldonado@gmail.com">
            <i className="fa fa-envelope fa_custom fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="tel:770.695.5804">
            <i className="fa fa-phone fa_custom fa-2x"></i>
          </a>
        </li>
      </ul>
    </footer>
    )
};

export default Footer;