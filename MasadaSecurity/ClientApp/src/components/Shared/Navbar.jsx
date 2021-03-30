import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

const Nav = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;

  position: fixed;
  width: 100%;
  z-index: 100;
`;

const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
`;

const NavLogo = styled(LinkR)`
  color: #fff;
  display: flex;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.6rem;
  align-self: center;

  font-weight: bold;
  text-decoration: none;
`;

const NavLogoImage = styled.img`
  height: 100%;
  max-height: 70px;
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  list-style: none;
  margin-right: -22px;
`;

const NavItem = styled.li`
  height: 80px;
`;

const NavLinks = styled(LinkR)`
  color: #fff;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  border: 3px solid transparent;

  &:hover {
    border-bottom: 3px solid #fff;
  }
  &.active {
    border-bottom: 3px solid #fff;
  }
`;

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();

  const changeBackground = () => {
    if (window.pageYOffset >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", changeBackground);
    };

    watchScroll();

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  let style = {
    backgroundColor:
      navbar || location.pathname !== "/" ? "#13263b" : "transparent",
    transition: "0.4s",
  };

  return (
    <>
      <Nav style={style}>
        <NavbarContainer>
          <NavLogo to="/">
            <NavLogoImage src="/assets/logo.svg" alt="Company Logo" />
          </NavLogo>
          <NavMenu>
            <NavItem>
              <NavLinks to="/about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/services">Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="contact">Contact</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
