import React from "react";
import snoopie from "../images/snoopie.jpg";
import graduate from "../images/graduate.jpg";
import readme from "../images/readme.jpg";
import projectTracker from "../images/project-tracker.jpg";
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
    <div className="container col-12">
      <div className="container mt-3 col-12 text-center">
        <h3 id="work col-12">Projects</h3>
      </div>
      <div className="col-12 container d-flex flex-wrap justify-content-center">
        <figure
          className=" mt-5 p-5 card col-12 col-md-6"
          style={{ width: "36rem" }}
        >
          <div className="snip1273">
            <img src={graduate} alt="graduates" />
            <figcaption>
              <h3 className="text-center">University 4 me</h3>
              <p className="text-center">Create an account and search for colleges with your SAT or ACT scores.</p>
              <ul>
                <li>React-Redux</li>
                <li>MongoDB</li>
                <li>Node/Express</li>
                <li>Axios</li>
              </ul>
              <div>
                <a
                  href="https://agile-thicket-84742.herokuapp.com/"
                  className="col-2 border border-warning p-2 bg-warning rounded-pill text-black-50 link-btn"
                  target="blank"
                >
                  {"\u2192"}
                </a>
              </div>
            </figcaption>
          </div>
        </figure>
        <figure
          className=" mt-5 p-5 card col-12 col-md-6"
          style={{ width: "36rem" }}
        >
          <div className="snip1273">
            <img src={searchEngine} alt="computer keyboard" />
            <figcaption>
              <h3 className="text-center">LOC Search Engine</h3>
              <p className="text-center">Search the Library of Congress and filter through results.</p>
              <ul>
                <li>jQuery</li>
                <li>Bootstrap</li>
                <li>Google fonts</li>
                <li>fetch API</li>
              </ul>
              <div>
                <a
                  href="https://josiemald.github.io/library-congress-SE/"
                  className="col-2 border border-warning p-2 bg-warning rounded-pill text-black-50 link-btn"
                  target="blank"
                >
                  {"\u2192"}
                </a>
              </div>
            </figcaption>
          </div>
        </figure>
        <figure className=" mt-5 p-5 card col-12 col-md-4 sub-card">
          <div className="snip1273">
            <img src={snoopie} alt="Dog" className="projects" />
            <figcaption>
              <h3 className="text-center">Snoopie</h3>
              <p className="text-center"></p>
              <ul>
                <li>jQuery</li>
                <li>fetch API</li>
                <li>CSS keyframes</li>
              </ul>
              <div>
                <a
                  href="https://sttorek.github.io/snoopie/"
                  className="col-2 border border-warning p-2 bg-warning rounded-pill text-black-50 link-btn"
                  target="blank"
                >
                  {"\u2192"}
                </a>
              </div>
            </figcaption>
          </div>
        </figure>
        <figure
          className=" mt-5 p-5 card col-12 col-md-4"
          style={{ width: "26rem" }}
        >
          <div className="snip1273">
            <img
              src={enlighten}
              alt="Young adults having fun"
              className="projects"
            />
            <figcaption>
              <h3 className="text-center">enlighten me</h3>
              <ul>
                <li>RESTful API</li>
                <li>node/express</li>
                <li>MySQL</li>
                <li>handlebars</li>
              </ul>
              <div>
                <a
                  href="https://fierce-spire-72565.herokuapp.com/"
                  className="col-2 border border-warning p-2 bg-warning rounded-pill text-black-50 link-btn"
                  target="blank"
                >
                  {"\u2192"}
                </a>
              </div>
            </figcaption>
          </div>
        </figure>
        <figure className=" mt-5 p-5 card col-12 col-md-4">
          <div className="snip1273">
            <img
              src={eCommerce}
              alt="keyboard enter button with shopping cart on it"
              className="projects"
            />
            <figcaption>
              <h3 className="text-center">eCommerce</h3>
              <ul>
                <li>node.js</li>
                <li>MySQL</li>
                <li>insomnia</li>
              </ul>
              <div>
                <a
                  href="https://github.com/JosieMald/e-commerce-back-end"
                  className="col-2 border border-warning p-2 bg-warning rounded-pill text-black-50 link-btn"
                  target="blank"
                >
                  {"\u2192"}
                </a>
              </div>
            </figcaption>
          </div>
        </figure>
        <figure className=" mt-5 p-5 card col-12 col-md-4">
          <div className="snip1273">
            <img
              src={dayPlanner}
              alt="planning notebook"
              className="projects"
            />
            <figcaption>
              <h3 className="text-center">day planner</h3>
              <ul>
                <li>jQuery</li>
                <li>momentJS</li>
              </ul>
              <div>
                <a
                  href="https://josiemald.github.io/work-day-scheduler/"
                  className="col-2 border border-warning p-2 bg-warning rounded-pill text-black-50 link-btn"
                  target="blank"
                >
                  {"\u2192"}
                </a>
              </div>
            </figcaption>
          </div>
        </figure>
        <figure className=" mt-5 p-5 card col-12 col-md-4">
          <div className="snip1273">
            <img src={readme} alt="laptop" className="projects" />
            <figcaption>
              <h3 className="text-center">Readme</h3>
              <ul>
                <li>node.js</li>
                <li>inquirer</li>
              </ul>
              <div>
                <a
                  href="https://josiemald.github.io/library-congress-SE/"
                  className="col-2 border border-warning p-2 bg-warning rounded-pill text-black-50 link-btn"
                  target="blank"
                >
                  {"\u2192"}
                </a>
              </div>
            </figcaption>
          </div>
        </figure>
        <figure className=" mt-5 p-5 card col-12 col-md-4">
          <div className="snip1273">
            <img src={projectTracker} alt="login screen" className="projects" />
            <figcaption>
              <h3 className="text-center">project tracker</h3>
              <ul>
                <li>jQueryUI</li>
                <li>jQuery</li>
                <li>momentJS</li>
                <li>Bootstrap</li>
              </ul>
              <div>
                <a
                  href="https://josiemald.github.io/project-tracker/"
                  className="col-2 border border-warning p-2 bg-warning rounded-pill text-black-50 link-btn"
                  target="blank"
                >
                  {"\u2192"}
                </a>
              </div>
            </figcaption>
          </div>
        </figure>
      </div>
    </div>
  );
}

export default Work;
