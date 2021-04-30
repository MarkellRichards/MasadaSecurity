import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link as LinkS } from 'react-scroll';

interface MobileNavProps {
  isOpen: boolean;
  toggle?: () => void;
}

export const MobileNavContainer = styled.div`
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }: MobileNavProps) => (isOpen ? '100%' : '0')};
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FontAwesomeIcon)`
  color: #fff;
  &:hover {
    color: #13263b;
  }
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const MobileNavWrapper = styled.div`
  color: #fff;
  z-index: 9998;
`;

export const MobileNavMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 80px);
  text-align: center;
  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(3, 60px);
  }
`;

export const MobileNavLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.4rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  &:hover {
    color: #13263b;
    transition: 0.2s ease-in-out;
  }
`;

const MobileNav: React.FC<MobileNavProps> = ({
  isOpen,
  toggle,
}: MobileNavProps) => {
  return (
    <MobileNavContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon icon={faTimes} />
      </Icon>
      <MobileNavWrapper>
        <MobileNavMenu>
          <MobileNavLink
            onClick={toggle}
            to="#about"
            smooth
            duration={500}
            spy
            offset={-80}
          >
            About
          </MobileNavLink>
          <MobileNavLink
            onClick={toggle}
            to="#services"
            smooth
            duration={500}
            spy
            offset={-80}
          >
            Services
          </MobileNavLink>
          <MobileNavLink
            onClick={toggle}
            to="#contact"
            smooth
            duration={500}
            spy
            offset={-80}
          >
            Contact
          </MobileNavLink>
        </MobileNavMenu>
      </MobileNavWrapper>
    </MobileNavContainer>
  );
};

export default MobileNav;
