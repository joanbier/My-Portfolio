import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  overflow-y: auto;
  .close-modal {
    position: absolute;
    z-index: 1001;
    top: 50px;
    right: 40px;
    font-size: 30px;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      transform: rotate(90deg);
    }
  }
  .modal-card {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: black;
    width: 80%;
    max-width: 800px;
    margin: 0 auto;
    padding-bottom: 20px;
    img {
      width: 100%;
    }

    .text-modal-wrapper {
      & > * {
        margin: 20px 0;
      }
      a {
        display: inline-block;
        width: 100px;
        margin: 10px;
        padding: 10px 20px;
        text-decoration: none;
        color: white;
        background-color: rgba(0, 159, 255, 1);
        border-radius: 5px;
      }
      a + a {
        background-color: rgba(145, 0, 255, 1);
      }
    }
  }
`;
