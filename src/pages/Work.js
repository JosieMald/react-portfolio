import React from "react";

function Work() {
    return (
        <div>
            <div class="container mt-5">
      <h3 id="work">Work</h3>
    </div>
    <div class="container mt-5">
      <div class="d-flex justify-content-center">
        <a class="work-card" href="https://sttorek.github.io/snoopie/">
          <img src="assets/snoopie.png" width="770" height="450" />
          <div class="work-gallery container">
            <h4>Snoopie</h4>
            <p>A web app to find the perfect pet</p>
          </div>
        </a>
      </div>
    </div>
    <div class="container">
      <div class="d-flex flex-wrap justify-content-center">
        <a
          class="work-card mt-4 mr-2"
          href="https://github.com/JosieMald/e-commerce-back-end"
        >
          <img
            src="https://marketingland.com/wp-content/ml-loads/2015/02/ecommerce-shopping-cart-keyboard-ss-1920.jpg"
            width="375"
            height="200"
          />
          <div class="work-gallery-sub container">
            <h5>E Commerce Back End</h5>
            <p>App to view e commerce DB</p>
          </div>
        </a>
        <a
          class="work-card mt-4 ml-2"
          href="https://github.com/JosieMald/event-calendar"
        >
          <img
            src="https://thumbs.dreamstime.com/b/planning-day-day-blank-day-planner-pen-your-blue-96797256.jpg"
            width="375"
            height="200"
          />
          <div class="work-gallery-sub container">
            <h5>Event Planner</h5>
            <p>Calendar to keep you organized</p>
          </div>
        </a>
        <a
          class="work-card mt-4 mr-2"
          href="https://github.com/JosieMald/professional-readME-generator"
        >
          <img src="assets/readme.png" width="375" height="200" />
          <div class="work-gallery-sub container">
            <h5>ReadME Generator</h5>
            <p>Create a professional readME</p>
          </div>
        </a>
        <a
          class="work-card mt-4 ml-2"
          href="https://github.com/JosieMald/password-generator/blob/main/assets/password-generator-screenshot.png"
        >
          <img src="assets/passwordGenerator.png" width="375" height="200" />
          <div class="work-gallery-sub container">
            <h5>PW Generator</h5>
            <p>Generate a random password</p>
          </div>
        </a>
      </div>
    </div>
        </div>
    )
};

export default Work;