import styled from "styled-components";
import bcgM from "../images/header/bcg-medium.jpg";
import bcgL from "../images/header/bcg-large.jpg";
import { Link } from "react-scroll";

export const HeaderWrapper = styled.header`
  position: relative;
  height: 100vh;
  background-image: url(${bcgM});
  background-size: cover;
  background-position: left;
  @media screen and (min-width: 800px) {
    background-image: url(${bcgL});
  }

  & .black-cover {
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.3);
  }
  & .info-container {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 90%;
    transform: translate(-50%, -50%);
    font-size: 1.2rem;
    color: white;
  }
  & .info-container > * {
    margin: 15px;
  }
  & .subtitle {
    font-weight: 100;
  }
  & .typing-container {
    height: 50px;
    padding: 5px;
    font-weight: 300;
    font-size: 1.3rem;
  }
  @media screen and (min-width: 568px) and (orientation: landscape) {
    .info-container {
      font-size: 0.8rem;
    }
    .typing-container {
      height: 0px;
      padding: 0px;
      font-size: 1.1rem;
    }
  }
  @media screen and (min-width: 800px) and (orientation: landscape) {
    .info-container {
      font-size: 1.3rem;
    }
    .typing-container {
      height: 0px;
      padding: 0px;
      font-size: 1.5rem;
    }
  }
`;

export const SeeMore = styled(Link)`
  display: block;
  position: absolute;
  bottom: -100px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 80%;
  margin: 0 auto !important;

  @media screen and (min-width: 568px) and (orientation: landscape) {
    & {
      bottom: -75px;
      width: 60%;
    }
  }

  @media screen and (min-width: 800px) and (orientation: landscape) {
    & {
      bottom: -200px;
      width: 40%;
    }
  }

  & button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 20px;
    background-color: black;
    color: white;
    cursor: pointer;
    text-transform: uppercase;
    /* background: rgb(0, 159, 255); */
    background: linear-gradient(
      90deg,
      rgba(0, 159, 255, 1) 0%,
      rgba(145, 0, 255, 1) 100%
    );
    transition: 0.3s;
    box-shadow: 0 0 15px 3px #000000;
    &:hover {
      box-shadow: 0 0 15px 3px #fff;
    }
  }
`;
