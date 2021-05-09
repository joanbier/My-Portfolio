import React, { Component } from "react";
import Home from "../pages/index";
import About from "../pages/AboutMePage";
import Projects from "../pages/ProjectsPage";
import Contact from "../pages/ContactPage";
import Footer from "./Footer";
import "./App.css";

class App extends Component {
  state = {
    language: "ENG"
  };

  handleChangeLanguage = e => {
    const id = e.target.id;
    switch (id) {
      case "pl-btn":
        this.setState({
          language: "PL"
        });
        break;
      case "eng-btn":
        this.setState({
          language: "ENG"
        });
        break;
      default:
        console.log("not a flag button");
    }
  };

  render() {
    const lang = this.state.language;
    return (
      <div className="App">
        <Home lang={lang} changeLang={this.handleChangeLanguage} />
        <main>
          <About lang={lang} />
          <Projects lang={lang} />
          <Contact lang={lang} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
