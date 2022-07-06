import React from "react";
import styled from "styled-components";
import Link from "../link/link.component";

const StyledFooter = styled.footer`
  background-color: #1f1d1d;
  padding-left: ${({ theme }) => theme.pagePadding};
  padding-right: ${({ theme }) => theme.pagePadding};
  display: flex;
  flex-direction: row;
  padding-top: 80px;
  padding-bottom: 80px;
  color: white;
  a {
    font-weight: 300;
  }
  p{
    margin-top: 10px;
    margin-bottom: 50px;
  }

`;

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin-right: 80px;
  a {
    margin: 15px 0;
  }
`;

const SocialLinksContainer = styled.ul`
  margin-left: auto;
  display: flex;
  flex-direction: row;
  a {
    margin: 0 0 0 50px;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>

      <ListContainer>
        <p>Planter</p>
        <Link color="white" href="/">
        Our Mission
        </Link>
        <Link color="white" href="/">
        Journal
        </Link>
      </ListContainer>
      <ListContainer>
      <p>___________</p>
        <Link color="white" href="/">
          FAQ
        </Link>
        <Link color="white" href="/">
        Terms of Service
        </Link>
        <Link color="white" href="/">
        Privacy Policy
        </Link>
        <Link color="white" href="/">
        Shipping & Returns
        </Link>
      </ListContainer>
      <SocialLinksContainer>
      <p>Volg ons:</p>
        <Link color="white" href="www.facebook.com">
          <i className="icofont-facebook icofont-2x"></i>
        </Link>
        <Link color="white" href="www.facebook.com">
          <i className="icofont-instagram icofont-2x"></i>
        </Link>
      </SocialLinksContainer>
    </StyledFooter>
  );
};

export default Footer;
