import React from "react";
import josie from "../images/josie.png";

function About() {
  return (
    <div className="container">
      <div class="container mt-5 col-12">
        <h3 id="about-me">About me</h3>
      </div>
      <div className="container d-flex mt-4 p-3 flex-wrap">
        <p className="col-12 col-md-8">
          I am a Pâtissier Chef turned full stack web developer. I graduated from Georgia
          Tech Bootcamp in the summer for 2021. In the three months of my course I learned
          HTML, CSS, and Javascript for basics and delved deep into node.js, MYSQL, React,
          redux, typescript, and deployments. 
          <br />
          <br />
          As a small business owner decorating cakes I am used to working in a fast paced
          environment with client demands. Decorating a cake is similar to building websites
          from wireframing, building your structure (HTML), adding styled details (CSS), and
          components (JS) to the cake. All of this requires communicative skills, self discipline,
          organization, problem solving, and attention to detail.
        </p>
        <div className="col-12 col-md-4 d-flex justify-content-center">
          <img src={josie} className="rounded-circle my-pic" alt="myself" />
        </div>
      </div>
    </div>
  );
}

export default About;
