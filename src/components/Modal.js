import React from "react";
import { ModalWrapper } from "../components/Modalelements";
import { FaTimes } from "react-icons/fa";

export const Modal = props => {
  const { title, img, alt, description, links } = props.content;

  return (
    <ModalWrapper>
      <FaTimes className="close-modal" onClick={props.click} />
      <div className="modal-card">
        <img src={img} alt={alt} />
        <div className="text-modal-wrapper">
          <h3>{title}</h3>
          <p>{props.lang === "PL" ? description.PL : description.ENG}</p>
          <a target="_blank" href={links.live} rel="noreferrer">
            Live
          </a>
          <a target="_blank" href={links.code} rel="noreferrer">
            Code
          </a>
        </div>
      </div>
    </ModalWrapper>
  );
};