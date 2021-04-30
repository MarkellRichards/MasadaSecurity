import React, { useState, useEffect, MouseEventHandler } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface NavbarProps {
  toggle: MouseEventHandler;
}

const Nav = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  padding: 1rem 2rem;

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

const NavLogo = styled(LinkS)`
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
  padding: 0.5rem 0;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  list-style: none;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled.li`
  height: 80px;
`;

const NavLinks = styled(LinkS)`
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

const Navbar: React.FC<NavbarProps> = ({ toggle }: NavbarProps) => {
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();

  const changeBackground = (): void => {
    if (window.pageYOffset >= 60) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    const watchScroll = (): void => {
      window.addEventListener('scroll', changeBackground);
    };

    watchScroll();

    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  const style = {
    backgroundColor:
      navbar || location.pathname !== '/' ? '#13263b' : 'transparent',
    transition: '0.4s',
  };

  return (
    <>
      <Nav style={style}>
        <NavbarContainer>
          <NavLogo to="#hero" smooth duration={500} spy>
            <NavLogoImage src="/assets/logo.svg" alt="Company Logo" />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FontAwesomeIcon icon={faBars} size="2x" />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="#about" smooth duration={500} spy offset={-80}>
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="#services" smooth duration={500} spy offset={-80}>
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="#contact" smooth duration={500} spy offset={-80}>
                Contact
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
