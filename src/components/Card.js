import React, { useState } from "react";
import obrazek from "../images/header/bcg.jpg";
import { Modal } from "../components/Modal";
export const Card = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showMore = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="card">
        <img src={obrazek} alt="lol" />
        <div className="text-wrapper">
          <h3>Title fekfj j jio jj iij</h3>
          <button onClick={showMore}>More</button>
        </div>
      </div>
      {isOpen && <Modal click={showMore} />}
    </>
  );
};
