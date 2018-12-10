import React, { Component } from "react";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Feature from "./components/Feature";
import Process from "./components/Process";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <About />
        <Feature />
        <Process />
      </div>
    );
  }
}

export default App;
