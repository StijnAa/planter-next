import React, { useState } from "react";
import styled from "styled-components";
import Link from "../link/link.component";

const NavbarContainer = styled.nav`
  padding-left: ${({ theme }) => theme.padding.desktop};
  padding-right: ${({ theme }) => theme.padding.desktop};
  background-color: antiquewhite;
  height: 100px;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: ${({ theme }) => theme.small}) {
    padding-left: ${({ theme }) => theme.padding.small};
    padding-right: ${({ theme }) => theme.padding.small};
  }
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    padding-left: ${({ theme }) => theme.padding.tablet};
    padding-right: ${({ theme }) => theme.padding.tablet};
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    height: 60px;
    padding-left: ${({ theme }) => theme.padding.mobile};
    padding-right: ${({ theme }) => theme.padding.mobile};
  }
`;

const Nav = styled.section`
  display: flex;
  width: 100%;

  i {
    font-size: 2em;
  }
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
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
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    width: 100%;
    margin: 0;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background-color: white;
    order: 3;
    display: ${(props) => (props.hambugerStateprop ? "flex" : "none")};
    height: auto;
    z-index: 10;
    border-radius: 1rem;
  }
`;

const NavListItem = styled.li`
  margin-right: 30px;
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    padding: 15px 0 15px 0;
    padding: auto;
    width: 100%;
    border-radius: 1rem;
    margin: auto;
  }

  &:hover {
    background-color: antiquewhite;
  }
`;
const LogoContainer = styled.div`
  align-items: center;
  margin: auto 0;
  a {
    font-family: "Josefin Sans", sans-serif;
    font-size: 2em;
  }
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
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

  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
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
            <Link href="/editor">Editor</Link>
          </NavListItem>
          <NavListItem>
            <Link href="/editor">Lees Meer</Link>
          </NavListItem>
          <NavListItem>
            <Link href="/editor">Inspiratie</Link>
          </NavListItem>
          <NavListItem>
            <Link href="/editor">Inspiratie</Link>
          </NavListItem>
        </NavList>

        <CartContainer>
          <Link href="/shoppingCart">
            <i className="icofont-cart-alt"></i>
          </Link>
        </CartContainer>
      </Nav>
    </NavbarContainer>
  );
};
export default Navbar;
