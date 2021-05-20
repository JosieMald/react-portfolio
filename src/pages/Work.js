import React from "react";
import snoopie from "../images/snoopie.png";
import readme from "../images/readme.png";
import passwordGenerator from "../images/passwordGenerator.png";
import homepage from "../images/homepage.png";


function Work() {
    return (
        <div>
            <div className="container mt-5">
      <h3 id="work">Work</h3>
    </div>
    <div className="container mt-5 flex-row">
      <div className="d-flex justify-content-center justify-content-around">
        <a className="work-card" href="https://github.com/Sttorek/snoopie">
          <img src={snoopie} alt="snoopie project" className="projects" />
          <div className="work-gallery container">
            <h5 className="mt-2">Snoopie</h5>
            <p>A web app to find the perfect pet</p>
          </div>
        </a>
        <a className="work-card" href="https://github.com/JosieMald/Enlighten-Me">
          <img src={homepage} alt="Enlighten Me project" className="projects" />
          <div className="work-gallery container">
            <h5 className="mt-2">Enlighten Me</h5>
            <p>A change lifestyle web app</p>
          </div>
        </a>
      </div>
    </div>
    
    <div className="container">
      <div className="d-flex flex-wrap justify-content-center justify-content-around">
        <a
          className="work-card mt-4"
          href="https://github.com/JosieMald/e-commerce-back-end"
        >
          <img
            src="https://marketingland.com/wp-content/ml-loads/2015/02/ecommerce-shopping-cart-keyboard-ss-1920.jpg"
            className="projects"
          />
          <div className="work-gallery container">
            <h5 className="mt-2">E Commerce Back End</h5>
            <p>App to view e commerce DB</p>
          </div>
        </a>
        <a
          className="work-card mt-4"
          href="https://github.com/JosieMald/event-calendar"
        >
          <img
            src="https://thumbs.dreamstime.com/b/planning-day-day-blank-day-planner-pen-your-blue-96797256.jpg"
            className="projects"
          />
          <div className="work-gallery container">
            <h5 className="mt-2">Event Planner</h5>
            <p>Calendar to keep you organized</p>
          </div>
        </a>
        <a
          className="work-card mt-4 mb-10"
          href="https://github.com/JosieMald/professional-readME-generator"
        >
          <img src={readme} alt="Readme Project" className="projects" />
          <div className="work-gallery container">
            <h5 className="mt-2">ReadME Generator</h5>
            <p>Create a professional readME</p>
          </div>
        </a>
        <a
          className="work-card mt-4 mb-10"
          href="https://github.com/JosieMald/password-generator"
        >
          <img src={passwordGenerator} alt="Password Generator Project" className="projects" />
          <div className="work-gallery container">
            <h5 className="mt-2">PW Generator</h5>
            <p>Generate a random password</p>
          </div>
        </a>
      </div>
    </div>
        </div>
    )
};

export default Work;