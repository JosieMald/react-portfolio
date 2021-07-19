import React from "react";
import josie from "../images/josie.png";

function About() {
  return (
      <div>
      <div class="container mt-5">
        <h3 id="about-me">About me</h3>
      </div>
    <div className="container d-flex mt-4">
      <p>
        I’m a current Georgia Tech Bootcamp graduate who is a full
        stack web developer. I graduated from Le Cordon Bleu as a pâtissier Chef. I’m
        currently working on a website for a client who just trademarked his
        first board game.
        <br />
        On my free time you’ll find me playing board games, baking, building
        dice towers, and building my own furniture. I love meeting new people,
        traveling the world, and having all together new and exciting
        experiences.
      </p>
      <div>
        <img src={josie} alt="myself" />
      </div>
    </div>
    </div>
  );
}

export default About;
