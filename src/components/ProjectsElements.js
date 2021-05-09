import styled from "styled-components";

export const ProjectsContainer = styled.section`
  padding: 10px;
  .cards-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    .card {
      overflow: hidden;
      border-radius: 10px;
      width: 350px;
      margin: 30px;
      box-shadow: 0 0 15px 5px #444;
      .lol {
        width: 100%;
        height: 220px;
        background-size: cover;
      }
      .text-wrapper {
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;
        h3 {
        }
        button {
          font-size: 16px;
          padding: 5px 20px;
          color: white;
          border-radius: 5px;
          border: none;
          background: linear-gradient(
            90deg,
            rgba(0, 159, 255, 1) 0%,
            rgba(145, 0, 255, 1) 100%
          );
          cursor: pointer;
          transition: 0.3s;
          box-shadow: 0 0 0 0 #000000;
          &:hover {
            box-shadow: 0 0 8px 1px #fff;
          }
        }
      }
    }
  }
`;
