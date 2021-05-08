import styled from "styled-components";

export const SectionWrapper = styled.section`
  text-align: center;
  & > * {
    margin: 20px 0;
  }
  .me-wrapper > * {
    margin: 30px 0;
  }

  .my-photo {
    border-radius: 50%;
    box-shadow: 0 0 10px 2px #000;
  }

  .hobby-wrapper {
    display: flex;
    justify-content: space-around;

    .hobby-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: rgba(0, 159, 255, 1);
      text-transform: uppercase;

      .hobby-description {
        font-size: 13px;
        margin-top: 10px;
      }
    }
  }

  .description-wrapper {
    h3 {
      text-align: left;
      margin-left: 10px;
    }
    .description {
      text-indent: 30px;
      text-align: justify;
      font-weight: 300;
      margin: 10px;
      line-height: 1.5rem;
      word-spacing: 2px;
    }
  }

  & button {
    width: 150px;
    font-size: 16px;
    font-weight: 300;
    padding: 10px;
    border: 2px solid rgba(0, 159, 255, 1);
    border-radius: 20px;
    color: rgba(0, 159, 255, 1);
    cursor: pointer;
    background: transparent;
    transition: 0.3s;

    &:hover {
      color: white;
      background-color: rgba(0, 159, 255, 1);
    }
  }

  .stack-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    .stack-item-wrapper {
      margin: 50px;
      img {
        margin-top: 20px;
        width: 100px;
        cursor: pointer;
        transition: 0.4s;
        &:hover {
          filter: grayscale(100%);
          transform: scale(1.1);
        }
      }
      p {
        font-weight: 500;
        font-size: 22px;
      }
    }
  }
`;
