import React from "react";
import Me from "../images/me.png";
import { FaCat, FaCode } from "react-icons/fa";
import { GiJourney } from "react-icons/gi";
import { Link } from "react-scroll";
import content from "../content";

export const MyDescription = props => {
  return (
    <>
      <div className="me-wrapper">
        <img className="my-photo" src={Me} alt="" />
        <div className="hobby-wrapper">
          <div className="hobby-item">
            <FaCat
              style={{
                fontSize: "35px"
              }}
            />
            <p className="hobby-description">Cat Lover</p>
          </div>
          <div className="hobby-item">
            <FaCode
              style={{
                fontSize: "35px"
              }}
            />
            <p className="hobby-description">Web Development</p>
          </div>
          <div className="hobby-item">
            <GiJourney
              style={{
                fontSize: "35px"
              }}
            />
            <p className="hobby-description">Adventure</p>
          </div>
        </div>
        <div className="description-wrapper">
          <h3>{props.lang === "PL" ? "Cześć," : "Hello,"}</h3>
          <p className="description">
            {props.lang === "PL" ? content.about.PL : content.about.ENG}
          </p>
        </div>
        <Link to="contact" smooth={true} offset={-60}>
          <button>
            {props.lang === "PL" ? "Napisz do mnie" : "Contact Me"}
          </button>
        </Link>
      </div>
    </>
  );
};
