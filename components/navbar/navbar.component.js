import React, { useState } from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import Link from "../link/link.component";

const NavbarContainer = styled.nav`
  padding-left: ${theme.padding.desktop};
  padding-right: ${theme.padding.desktop};
  background-color: ${theme.colors.highlight};
  height: 100px;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: ${theme.small}) {
    padding-left: ${theme.padding.small};
    padding-right: ${theme.padding.small};
  }
  @media only screen and (max-width: ${theme.tablet}) {
    padding-left: ${theme.padding.tablet};
    padding-right: ${theme.padding.tablet};
  }
  @media only screen and (max-width: ${theme.mobile}) {
    height: 60px;
    padding-left: ${theme.padding.mobile};
    padding-right: ${theme.padding.mobile};
  }
`;

const Nav = styled.section`
  display: flex;
  width: 100%;

  i {
    font-size: 2em;
  }
  @media only screen and (max-width: ${theme.tablet}) {
    flex-wrap: wrap;
    width: 315px;
    i {
      font-size: 1.5em;
    }
    gap: 10px;
  }
`;

const NavList = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  margin: 0 47px 0 auto;
  @media only screen and (max-width: ${theme.tablet}) {
    width: 100%;
    margin: 0;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background-color: ${theme.colors.white};
    order: 3;
    display: ${(props) => (props.hambugerStateprop ? "flex" : "none")};
    height: auto;
    z-index: 10;
    border-radius: 1rem;
  }
`;

const NavListItem = styled.li`
  margin-right: 30px;
  @media only screen and (max-width: ${theme.tablet}) {
    padding: 15px 0 15px 0;
    padding: auto;
    width: 100%;
    border-radius: 1rem;
    margin: auto;
  }

  &:hover {
    background-color: ${theme.colors.highlight};
  }
`;
const LogoContainer = styled.div`
  align-items: center;
  margin: auto 0;
  a {
    font-family: "Josefin Sans", sans-serif;
    font-size: 2em;
  }
  @media only screen and (max-width: ${theme.tablet}) {
    margin: auto;
    a {
      font-size: 1.5em;
    }
  }
`;
const CartContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

const HamburgerContainer = styled.button`
  display: none;

  @media only screen and (max-width: ${theme.tablet}) {
    display: flex;
    align-items: center;
    height: 100%;
  }
`;

const Navbar = () => {
  const [hambugerState, setHambugerState] = useState(false);
  const hambugerClickHandler = () => {
    setHambugerState(!hambugerState);
  };

  return (
    <NavbarContainer>
      <Nav>
        <HamburgerContainer onClick={hambugerClickHandler}>
          <i className="icofont-navigation"></i>
        </HamburgerContainer>
        <LogoContainer>
          <Link href="/">planter.</Link>
        </LogoContainer>
        <NavList hambugerStateprop={hambugerState}>
          <NavListItem>
            <Link href="/formulier">Aanvraag doen</Link>
          </NavListItem>
          <NavListItem>
            <Link href="/leesmeer">Lees meer</Link>
          </NavListItem>
          <NavListItem>
            <Link href="/inspiratie">Inspiratie</Link>
          </NavListItem>
        </NavList>
      </Nav>
    </NavbarContainer>
  );
};
export default Navbar;
