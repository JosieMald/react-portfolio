import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/index";
import Wrapper from "./components/Wrapper/index";

function App() {
  return (
    // <Router>
      <div className="App">
        <Navbar />
        <Wrapper>
          {/* <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/search" component={Search} /> */}
          <h1>HELLO WORLD</h1>
        </Wrapper>
      </div>
    // </Router>
  );
}

export default App;
