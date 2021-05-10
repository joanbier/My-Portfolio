import React from "react";
import contentNav from "../../../content";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink
} from "./SideBarElements";

const SideBar = ({ isOpen, toggle, lang }) => {
  const navENG = contentNav.nav.linksENG;
  const navPL = contentNav.nav.linksPL;
  const menu = (lang === "PL" ? navPL : navENG).map((li, index) => (
    <SidebarLink
      key={`${index}-${li.name}`}
      to={li.path}
      spy={true}
      offset={-60}
      smooth={true}
      onClick={toggle}
    >
      {li.name}
    </SidebarLink>
  ));

  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>{menu}</SidebarMenu>
    </SidebarContainer>
  );
};

export default SideBar;
