import styled from 'styled-components';
import { Link as LinkR} from "react-router-dom";

export const Nav = styled.div`
    background: ${({ background }) => (background ? "#13263b" : "transparent")};
    height: 80px;
    display: flex;
    margin-top: -80px;
    justify-content: center;
    align-items: center;
    font-size: 1rem; 
    position: sticky;
    top: 0;
    z-index: 10;
`

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 2.4rem;
    max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
    color: #fff;
    display: flex;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.6rem;
    align-self: center;

    font-weight: bold;
    text-decoration: none;

`

export const NavLogoImage = styled.img`
    height: 100%;
    max-height: 80px;
    padding: 1rem 0; 

`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    text-align: center;
    list-style: none;
    margin-right: -22px;
`

export const NavItem = styled.li`
    height: 80px;

`

export const NavLinks = styled(LinkR)`
    color: #fff;
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    border: 3px solid transparent;

&:hover{
    border-bottom: 3px solid #fff;
}
    &.active {
        border-bottom: 3px solid #fff;
    }

`