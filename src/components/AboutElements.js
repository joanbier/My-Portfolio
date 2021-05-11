import styled from "styled-components";

export const SectionWrapper = styled.section`
  text-align: center;
  & > * {
    margin: 20px 0;
  }
  .me-wrapper > * {
    margin: 20px 0;
  }

  .my-photo {
    border-radius: 50%;
    box-shadow: 0 0 10px 2px #000;
  }

  .hobby-wrapper {
    display: flex;
    justify-content: space-around;
    margin-bottom: 40px;

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
    max-width: 1000px;
    margin: 0 auto;
    h3 {
      text-align: left;
      margin-left: 15px;
    }
    .description {
      text-indent: 30px;
      text-align: left;
      font-weight: 200;
      margin: 15px auto;
      line-height: 1.5rem;
      @media screen and (min-width: 800px) and (orientation: landscape) {
        & {
          font-weight: 300;
          font-size: 1.1rem;
        }
      }
    }
  }

  & button {
    width: 150px;
    font-size: 16px;
    font-weight: 300;
    padding: 10px;
    border: 2px solid rgba(0, 159, 255, 1);
    border-radius: 20px;
    margin-bottom: 15px;
    color: white;
    cursor: pointer;
    background-color: rgba(0, 159, 255, 1);
    transition: 0.3s;

    &:hover {
      color: rgba(0, 159, 255, 1);
      background: transparent;
    }
  }

  hr {
    width: 100%;
    border: none;
    height: 1px;
    background-color: #444;
  }

  .stack-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    .stack-item-wrapper {
      margin: 20px;
      margin-bottom: 0;
      img {
        animation: pulse 3s linear infinite alternate;
        margin: 10px;
        width: 50px;
        @keyframes pulse {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.3);
          }
        }
        cursor: pointer;
        transition: 0.4s;
        &:hover {
          filter: grayscale(100%);
          transform: scale(1.1);
        }
        @media screen and (min-width: 400px) {
          & {
            width: 60px;
            margin: 20px;
          }
        }
        @media screen and (min-width: 500px) {
          & {
            margin: 30px;
          }
        }
        @media screen and (min-width: 1024px) {
          & {
            margin: 50px;
            width: 70px;
          }
        }
      }
      p {
        font-weight: 500;
        font-size: 18px;
      }
    }
  }
`;
