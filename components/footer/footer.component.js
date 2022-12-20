import React from "react";
import styled from "styled-components";
import TextLink from "../link/textLink.component";
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
        <TextLink href="/">Our Mission</TextLink>
        <TextLink href="/">Journal</TextLink>
      </ListContainer>
      <ListContainer>
        <p>___________</p>
        <TextLink href="/">FAQ</TextLink>
        <TextLink href="/">Terms of Service</TextLink>
        <TextLink href="/">Privacy Policy</TextLink>
        <TextLink href="/">Shipping & Returns</TextLink>
      </ListContainer>
      <SocialLinksContainer>
        <p>Volg ons:</p>
        <TextLink href="www.facebook.com">
          <i className="icofont-facebook icofont-2x"></i>
        </TextLink>
        <TextLink href="www.facebook.com">
          <i className="icofont-instagram icofont-2x"></i>
        </TextLink>
      </SocialLinksContainer>
    </StyledFooter>
  );
};

export default Footer;
