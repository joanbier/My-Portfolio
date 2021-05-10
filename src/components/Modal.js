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
          <h3 className="modal-title">{title}</h3>
          <p className="modal-description">
            {props.lang === "PL" ? description.PL : description.ENG}
          </p>
          <a target="_blank" href={links.live} rel="noreferrer">
            {props.lang === "PL" ? "Na żywo" : "Live"}
          </a>
          <a target="_blank" href={links.code} rel="noreferrer">
            {props.lang === "PL" ? "Kod" : "Code"}
          </a>
        </div>
      </div>
    </ModalWrapper>
  );
};
