import styled from "styled-components";
import bcg from "../images/header/bcg.jpg";
import { Link } from "react-scroll";

export const HeaderWrapper = styled.header`
  position: relative;
  height: 100vh;
  background-image: url(${bcg});
  background-size: cover;
  background-position: left;

  & .black-cover {
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.3);
  }
  & .info-container {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80%;
    transform: translate(-50%, -50%);
    font-size: 15px;
    color: white;
  }
  & .info-container > * {
    margin: 20px;
  }
  & .subtitle {
    font-weight: 100;
  }
  & .typing-container {
    height: 50px;
    padding: 5px;
    font-weight: 100;
  }
`;

export const SeeMore = styled(Link)`
  display: block;
  position: absolute;
  bottom: -100px;
  left: 0;
  text-align: center;
  width: 50%;
  margin: 0 auto;
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
