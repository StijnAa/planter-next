import React, { useState } from "react";
import styled from "styled-components";
import Link from "../link/link.component";

const NavbarContainer = styled.nav`
  padding-left: ${({ theme }) => theme.pagePadding};
  padding-right: ${({ theme }) => theme.pagePadding};
  background-color: antiquewhite;
  height: 100px;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    height: 60px;
    padding-left: ${({ theme }) => theme.mobilePadding};
    padding-right: ${({ theme }) => theme.mobilePadding};
  }
`;

const Nav = styled.section`
  display: flex;
  width: 100%;
  i {
    font-size: 2em;
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    flex-wrap: wrap;
    width: 315px;
    i {
      font-size: 1.5em;
    }
  }
`;

const NavList = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  margin: 0 47px 0 auto;
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    margin: 0;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background-color: azure;
    order: 3;
    display: ${(props) => (props.hambugerStateprop ? "flex" : "none")};
    height: 130px;
  }
`;

const NavListItem = styled.li`
  margin-right: 30px;
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    margin: auto;
  }
`;
const LogoContainer = styled.div`
  align-items: center;
  margin: auto 0;
  a {
    font-family: "Josefin Sans", sans-serif;
    font-size: 2em;
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
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

  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
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
