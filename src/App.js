import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/index";
// import Wrapper from "./components/Wrapper/index";
import About from "./pages/About";
import Work from "./pages/Work"
import Footer from "./components/Footer/index";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Navbar />
        {/* <Wrapper> */}
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/work" component={Work} />
        {/* </Wrapper> */}
        <Footer />
      </div>
     </Router>
  );
}

export default App;
