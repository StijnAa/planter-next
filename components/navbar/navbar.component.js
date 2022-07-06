import React from "react";
import styled from "styled-components";
import Link from "../link/link.component";

const NavbarContainer = styled.nav`
  display: flex;
  background-color: antiquewhite;
  height: 80px;
  padding: 0px ${({ theme }) => theme.pagePadding} 0
    ${({ theme }) => theme.pagePadding};
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const NavList = styled.ul`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
  margin: 0 80px;
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    margin: 0;
  }
`;

const NavListItem = styled.li`
  margin-right: 30px;
`;
const LogoContainer = styled.div`
  align-items: center;
  margin: auto 0;
`;
const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
const Logo = styled.h1`
  font-family: "Josefin Sans", sans-serif;
  font-size: 2em;
  margin: 0;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <LogoContainer>
        <Logo>planter.</Logo>
      </LogoContainer>
      <NavList>
        <NavListItem>
          <Link href="/editor" >Editor</Link>
        </NavListItem>
        <NavListItem>
          <Link href="/editor">Lees Meer</Link>
        </NavListItem>
        <NavListItem>
          <Link href="/editor">Inspiratie</Link>
        </NavListItem>
      </NavList>

      <LoginContainer>
        <Link href="/editor">
          <i className="icofont-cart-alt icofont-2x"></i>
        </Link>
      </LoginContainer>
    </NavbarContainer>
  );
};
export default Navbar;
