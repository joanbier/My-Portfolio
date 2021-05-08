import styled from "styled-components";
import patter from "../images/email-pattern.png";

export const ContactWrapper = styled.section`
  background-image: url(${patter});
  height: 100vh;
  .bcg-cover {
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(0, 91, 147, 0.6) 0%,
      rgba(82, 0, 144, 0.6) 100%
    );
  }
`;
