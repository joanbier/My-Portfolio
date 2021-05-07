import styled from "styled-components";

export const SectionWrapper = styled.section`
  text-align: center;
  & > * {
    margin: 20px 0;
  }
  & .me-wrapper > * {
    margin: 30px 0;
  }
  & img {
    border-radius: 50%;
    box-shadow: 0 0 10px 2px #000;
  }
  & .hobby-wrapper {
    display: flex;
    justify-content: space-around;
  }
  & .hobby-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: cornflowerblue;
    text-transform: uppercase;
  }
  & .hobby-description {
    font-size: 13px;
    margin-top: 10px;
  }
  & .description-wrapper {
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
    border: 2px solid cornflowerblue;
    border-radius: 20px;
    color: cornflowerblue;
    cursor: pointer;
    background: transparent;
    transition: 0.3s;

    &:hover {
      color: white;
      background-color: cornflowerblue;
    }
  }
`;
