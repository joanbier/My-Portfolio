import React, { useState } from "react";
import { Modal } from "../components/Modal";

export const Card = ({ lang, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const showMore = () => {
    setIsOpen(!isOpen);
  };

  const { title, img } = content;

  return (
    <>
      <div className="card">
        <div
          onClick={showMore}
          className="card-image"
          style={{ backgroundImage: `url(${img})` }}
        ></div>
        <div className="text-wrapper">
          <h3>{title}</h3>
          <button onClick={showMore}>
            {lang === "PL" ? "Więcej" : "More"}
          </button>
        </div>
      </div>
      {isOpen && <Modal lang={lang} content={content} click={showMore} />}
    </>
  );
};
