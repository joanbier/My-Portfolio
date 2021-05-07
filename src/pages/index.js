import React, { useState } from "react";
import Navbar from "../layouts/Navigation/Navbar";
import Sidebar from "../layouts/Navigation/Sidebar";
import Header from "../layouts/Header";

const Home = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="home">
      <Navbar toggle={toggle} lang={props.lang} changeLang={props.changeLang} />
      <Sidebar
        isOpen={isOpen}
        toggle={toggle}
        lang={props.lang}
        changeLang={props.changeLang}
      />
      <Header lang={props.lang} />
    </div>
  );
};

export default Home;
