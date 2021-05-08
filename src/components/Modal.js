import React from "react";
import { ModalWrapper } from "../components/Modalelements";
import { FaTimes } from "react-icons/fa";
import obrazek from "../images/header/bcg.jpg";
export const Modal = props => {
  return (
    <ModalWrapper>
      <FaTimes className="close-modal" onClick={props.click} />
      <div className="modal-card">
        <img src={obrazek} alt="lol" />
        <div className="text-modal-wrapper">
          <h3>Title fekfj j jio jj iij</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            repellendus ad tenetur quam eos esse quod nostrum alias enim vel at
            ut cupiditate, ea, iste, vero sed maiores! Quia, vitae.
          </p>
          <a
            target="_blank"
            href="https://github.com/joanbier?tab=repositories"
            rel="noreferrer"
          >
            Live
          </a>
          <a
            target="_blank"
            href="https://github.com/joanbier?tab=repositories"
            rel="noreferrer"
          >
            Code
          </a>
        </div>
      </div>
    </ModalWrapper>
  );
};
