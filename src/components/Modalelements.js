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
    right: 30px;
    font-size: 30px;
    background-color: rgba(0, 0, 0, 0.8);
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
    width: 100%;
    max-width: 800px;
    padding-bottom: 10px;
    background-color: #222;
    img {
      width: 100%;
    }

    .text-modal-wrapper {
      & > * {
        font-weight: 300;
        margin: 20px 0;
        padding: 0 20px;
      }

      .modal-title {
        font-weight: 500;
        color: rgba(0, 159, 255, 1);
      }
      .modal-description {
        line-height: 1.4;
        overflow-y: auto;
        max-height: 150px;
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
        transition: 0.2s;
        &:hover {
          transform: scale(1.1);
        }
      }
      a + a {
        background-color: rgba(145, 0, 255, 1);
      }
    }
  }
`;
