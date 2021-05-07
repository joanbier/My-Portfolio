import React from "react";
import { HeaderWrapper, SeeMore } from "../components/HeaderElements";
import ReactTypingEffect from "react-typing-effect";
import content from "../content/index";
import { IoIosArrowDown } from "react-icons/io";
import Particles from "react-particles-js";

const Header = props => {
  const { greeting, subtitle, button, typicalEng, typicalPl } = content.header;
  return (
    <HeaderWrapper>
      <div className="black-cover">
        <Particles
          params={{
            particles: {
              number: {
                value: 30,
                density: {
                  enable: true,
                  value_area: 900
                }
              }
            }
          }}
          style={{
            position: "absolute",
            height: "100vh",
            width: "100vw",
            opacity: "70%"
          }}
        />
        <div className="info-container">
          <h2 className="title">
            {props.lang === "PL" ? greeting.PL : greeting.ENG}
          </h2>
          <h1 className="subtitle">
            {props.lang === "PL" ? subtitle.PL : subtitle.ENG}
          </h1>
          <div className="typing-container">
            <ReactTypingEffect
              speed={100}
              eraseSpeed={50}
              typingDelay={1000}
              eraseDelay={2000}
              text={props.lang === "PL" ? typicalPl : typicalEng}
              style={{ fontSize: "18px" }}
            />
          </div>
          <SeeMore
            style={{ display: "block" }}
            to="about"
            offset={-80}
            smooth={true}
          >
            <button>
              {props.lang === "PL" ? button.PL : button.ENG}
              <IoIosArrowDown style={{ marginLeft: "10px" }} />
            </button>
          </SeeMore>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
