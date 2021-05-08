import React, { useState, useEffect } from "react";
import content from "../../../content";
import { FaBars } from "react-icons/fa";
import logo from "../../../images/navigation/logo.png";
import engFlag from "../../../images/navigation/eng.svg";
import plFlag from "../../../images/navigation/pl.svg";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavBtnLang
} from "./NavElements";

const Navigation = props => {
  const navENG = content.nav.linksENG;
  const navPL = content.nav.linksPL;
  const menu = (props.lang === "PL" ? navPL : navENG).map((li, index) => (
    <NavItem key={`${index}-${li.name}`}>
      <NavLink to={li.path} spy={true} offset={-60} smooth={true}>
        {li.name}
      </NavLink>
    </NavItem>
  ));

  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="home" smooth="true">
            <img src={logo} alt="logo" />
          </NavLogo>
          <MobileIcon scrollNav={scrollNav} onClick={props.toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>{menu}</NavMenu>
          <NavBtnLang lang={props.lang}>
            <div className="flag-wrapper">
              <img
                className="btn-lang"
                id="pl-btn"
                onClick={e => props.changeLang(e)}
                src={plFlag}
                alt="polish flag"
              />
            </div>
            <div className="flag-wrapper">
              <img
                className="btn-lang"
                id="eng-btn"
                onClick={e => props.changeLang(e)}
                src={engFlag}
                alt="english flag"
              />
            </div>
          </NavBtnLang>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navigation;
