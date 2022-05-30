import React from "react";
import snoopie from "../images/snoopie.jpg";
import graduate from "../images/graduate.jpg";
import readme from "../images/readme.jpg";
import passwordGenerator from "../images/password-generator.jpg";
import enlighten from "../images/enlighten-me.jpg";
import searchEngine from "../images/search-engine.jpg";
import eCommerce from "../images/e-commerce.jpg";
import dayPlanner from "../images/day-planner.jpg";
import $ from "jquery";

function Work() {
  $(".hover").mouseleave(function () {
    $(this).removeClass("hover");
  });
  return (
    <div className="container">
      <div className="container mt-3 col-12 text-center">
        <h3 id="work">Work</h3>
      </div>
      <div className="col-12 container d-flex flex-wrap justify-content-center" >
        <figure className=" mt-5 p-5 card col-12 col-md-6" style={{ width: "36rem" }}>
          <div className="snip1273">
          <img
            src={graduate}
            alt="sample72"
            />
            <figcaption>
              <h3>University 4 me</h3>
              <ul>
                <li>hello</li>
                <li>hello</li>
                <li>hello</li>
              </ul>
              <div>
              <a
                href="https://josiemald.github.io/library-congress-SE/"
                className="col-2 border border-warning p-2 bg-warning rounded-pill text-black-50 link-btn" target="blank"
              >
                {"\u2192"}
              </a>
              </div>
            </figcaption>
          </div>
        </figure>
        {/* <div
          className="mt-5 p-5 card col-12 col-md-6"
          style={{ width: "36rem" }}
        >
          <div class="">
            <img src={graduate} className="main-img border border-2 border-warning" alt="graduates" />
            <div class="card-body border border-warning border-top-0 border-2 rounded-bottom d-flex">
              <p class="card-text col-10">Customize College Searches</p>
              <a
                href="https://josiemald.github.io/library-congress-SE/"
                className="col-2 border border-warning p-2 bg-warning rounded-pill text-black-50 link-btn"
              >
                {"\u2192"}
              </a>
            </div>
          </div>
        </div> */}
        <div
          className="mt-5 p-5 card col-12 col-md-6"
          style={{ width: "36rem" }}
        >
          <div class="">
            <img
              src={searchEngine}
              className="main-img border border-2 border-warning"
              alt="graduates"
            />
            <div class="card-body border border-warning border-top-0 border-2 rounded-bottom d-flex">
              <p class="card-text col-10">Library of Congress Search Engine</p>
              <a
                href="https://josiemald.github.io/library-congress-SE/"
                className="col-2 border border-warning p-2 bg-warning rounded-pill text-black-50 link-btn"
              >
                {"\u2192"}
              </a>
            </div>
          </div>
        </div>
        <div className="mt-5 p-5 border border-warning card col-6 col-md-4 sub-card">
          <div class="">
            <img src={snoopie} className="projects" alt="graduates" />
            <div class="card-body border border-warning border-top-0 border-2 rounded-bottom d-flex">
              <p class="card-text col-10">Find the perfect pet</p>
              <a
                href="https://josiemald.github.io/library-congress-SE/"
                className="col-2 border border-warning p-2 bg-warning rounded-pill text-black-50 link-btn"
              >
                {"\u2192"}
              </a>
            </div>
          </div>
        </div>
        <div className="mt-5 p-5 border border-warning card col-6 col-md-4 sub-card">
          <div class="">
            <img src={enlighten} className="projects" alt="graduates" />
            <div class="card-body">
              <p class="card-text">Lifestyle change blog</p>
            </div>
          </div>
        </div>
        <div className="mt-5 p-5 border border-warning card col-6 col-md-4 sub-card">
          <div class="">
            <img src={eCommerce} className="projects" alt="keyboard keys" />
            <div class="card-body">
              <p class="card-text">E Commerce Database</p>
            </div>
          </div>
        </div>
        <div className="mt-5 p-5 border border-warning card col-6 col-md-4 sub-card">
          <div class="">
            <img src={dayPlanner} className="projects" alt="day planner book" />
            <div class="card-body">
              <p class="card-text">Day Planner</p>
            </div>
          </div>
        </div>
        <div className="mt-5 p-5 border border-warning card col-6 col-md-4 sub-card">
          <div class="">
            <img src={readme} className="projects" alt="syntax markdown" />
            <div class="card-body">
              <p class="card-text">ReadME Generator</p>
            </div>
          </div>
        </div>
        <div className="mt-5 p-5 border border-warning card col-6 col-md-4 sub-card">
          <div class="">
            <img
              src={passwordGenerator}
              className="projects"
              alt="login screen"
            />
            <div class="card-body">
              <p class="card-text">Password Generator</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
