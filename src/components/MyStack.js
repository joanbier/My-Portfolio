import React from "react";
import html from "../images/tech-stack/html.svg";
import css from "../images/tech-stack/css.svg";
import js from "../images/tech-stack/javascript.svg";
import react from "../images/tech-stack/react.svg";

import sass from "../images/tech-stack/sass.svg";
import npm from "../images/tech-stack/npm.svg";
import bootstrap from "../images/tech-stack/bootstrap.svg";
import git from "../images/tech-stack/git.svg";
import ts from "../images/tech-stack/typescript.svg";

const stackArray = [
  { name: "HTML", img: html, alt: "html logo" },
  { name: "CSS", img: css, alt: "css logo" },
  { name: "JS (ES6+)", img: js, alt: "javascript logo" },
  { name: "React", img: react, alt: "react logo" },
  { name: "TypeScript", img: ts, alt: "typescript logo" },
  { name: "Sass", img: sass, alt: "sass logo" },
  { name: "npm", img: npm, alt: "npm logo" },
  { name: "Bootstrap", img: bootstrap, alt: "bootstrap logo" },
  { name: "GIT", img: git, alt: "git logo" }
];

export const MyStack = props => {
  const stackItem = stackArray.map((item, index) => (
    <div className="stack-item-wrapper" key={`${index}-${item.img}`}>
      <p>{item.name}</p>
      <img src={item.img} alt={item.alt} />
    </div>
  ));

  return (
    <div>
      <h3 className="section-title stack-title">
        {props.lang === "PL" ? "Umiejętności" : "My Stack"}
      </h3>
      <div className="stack-container">{stackItem}</div>
    </div>
  );
};
