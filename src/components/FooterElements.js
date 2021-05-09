import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 20px;
  min-height: 15vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  .footer-icons-container {
    a {
      text-decoration: none;
      color: #888;
      font-size: 30px;
      margin: 0 10px;
      transition: 0.2s;
      cursor: pointer;
      &:hover {
        color: whitesmoke;
      }
    }
  }
  hr {
    width: 80vw;
    border: none;
    height: 1px;
    background-color: #444;
  }
  .copyright {
    color: #777;
    font-size: 13px;
  }
`;
