import React from "react";
import styled from "styled-components";
import Link from "../link/link.component";
import theme from "../../styles/theme";

const StyledFooter = styled.footer`
  background-color: ${theme.colors.black};
  padding-left: ${theme.padding.desktop};
  padding-right: ${theme.padding.desktop};
  display: flex;
  flex-direction: row;
  padding-top: 80px;
  padding-bottom: 80px;
  color: ${theme.colors.white};
  a {
    color: inherit;
    font-weight: 300;
  }
  p {
    margin-top: 10px;
    margin-bottom: 50px;
  }
  @media only screen and (max-width: ${theme.small}) {
    padding-left: ${theme.padding.small};
    padding-right: ${theme.padding.small};
  }
  @media only screen and (max-width: ${theme.tablet}) {
    flex-direction: column;
    padding-left: ${theme.padding.tablet};
    padding-right: ${theme.padding.tablet};
  }
  @media only screen and (max-width: ${theme.mobile}) {
    padding-left: ${theme.padding.mobile};
    padding-right: ${theme.padding.mobile};
  }
`;

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin-right: 130px;
  a {
    margin: 15px 0;
  }

  @media only screen and (max-width: ${theme.small}) {
    margin-right: 70px;
  }
`;

const SocialLinksContainer = styled.ul`
  margin-left: auto;
  display: flex;
  flex-direction: row;
  a {
    margin: 0 0 0 50px;
  }
  @media only screen and (max-width: ${theme.tablet}) {
    margin-left: 0;
    margin-top: 80px;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <ListContainer>
        <p>Planter</p>
        <Link href="/">Our Mission</Link>
        <Link href="/">Journal</Link>
      </ListContainer>
      <ListContainer>
        <p>___________</p>
        <Link href="/">FAQ</Link>
        <Link href="/">Terms of Service</Link>
        <Link href="/">Privacy Policy</Link>
        <Link href="/">Shipping & Returns</Link>
      </ListContainer>
      <SocialLinksContainer>
        <p>Volg ons:</p>
        <Link href="www.facebook.com">
          <i className="icofont-facebook icofont-2x"></i>
        </Link>
        <Link href="www.facebook.com">
          <i className="icofont-instagram icofont-2x"></i>
        </Link>
      </SocialLinksContainer>
    </StyledFooter>
  );
};

export default Footer;
