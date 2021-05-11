import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  transition: 1s;

  background-color: ${({ scrollNav }) =>
    scrollNav ? "rgba(0, 0, 0, 0.8)" : "black"};
  height: ${({ scrollNav }) => (scrollNav ? 60 + "px" : 80 + "px")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  color: white;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const NavLogo = styled(LinkS)`
  cursor: pointer;
  text-decoration: none;
  margin-left: 20px;
  & img {
    width: 100px;
    border-radius: 10px;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  &:hover {
    color: rgba(0, 159, 255, 1);
  }
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 1.8rem;
    cursor: pointer;
    transition: transform 1s, color 0.3s;
    transform: ${({ scrollNav }) =>
      scrollNav ? `translate(-100%, 40%)` : `translate(-100%, 70%)`};
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 22px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 50px;
  margin: 0px 5px;

  &:nth-child(odd) .active {
    transition: 0.4s ease-in-out;
    border-bottom: 3px solid rgba(0, 159, 255, 1);
  }

  &:nth-child(even) .active {
    transition: 0.4s ease-in-out;
    border-bottom: 3px solid rgb(121, 98, 251);
  }
`;

export const NavLink = styled(LinkS)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  border-bottom: 3px solid transparent;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  &:hover {
    color: rgba(0, 159, 255, 1);
  }
`;

export const NavBtnLang = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-right: 60px;
  width: 100px;
  height: 100%;
  overflow: hidden;

  .flag-wrapper {
    display: flex;
    align-items: center;
    margin: 0 10px;
    cursor: pointer;
    transition: 0.4s;
    .btn-lang {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
    #pl-btn {
      box-shadow: ${({ lang }) =>
        lang === "PL" ? "0 0 5px 3px white" : "none"};
    }
    #eng-btn {
      box-shadow: ${({ lang }) =>
        lang === "PL" ? "none" : "0 0 5px 3px white"};
    }
  }
`;
