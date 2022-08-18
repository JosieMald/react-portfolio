import React from "react";
import { BrowserRouter as HashRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import About from "./pages/About";
import Work from "./pages/Work";
import Footer from "./components/Footer";
import background from "./images/background-img.jpg"

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className="App" style={{ 
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat' 
    }}>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/work" component={Work} />
        </Wrapper>
        {/* <Footer /> */}
      </div>
    </HashRouter>
  );
}

export default App;
