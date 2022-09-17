import React from "react";
import styled from "styled-components";
import ButtonLink from "../link/buttonLink.component";

const StyledHero = styled.section`
  background-color: #6a7c5e;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: left;
  background-position-y: bottom;
  height: ${(props) => (props.small ? "400px" : "800px")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    align-items: center;
    height: ${(props) => (props.small ? "200px" : "400px")};
  }
`;

const HeroTextContianer = styled.div`
  padding-left: ${({ theme }) => theme.pagePadding};
  padding-right: ${({ theme }) => theme.pagePadding};
  h1 {
    color: white;
    font-size: 3rem;
    text-shadow: ${(props) =>
      props.url ? "0px 0px 30px rgba(0, 0, 0, 0.8)" : "none"};
    text-align: ${(props) => (props.center ? "center" : "left")};
  }
  a {
    margin-top: 1rem;
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    padding-left: ${({ theme }) => theme.mobilePadding};
    padding-right: ${({ theme }) => theme.mobilePadding};
    display: flex;
    flex-direction: column;
    justify-content: ${(props) => (props.center ? "center" : "space-between")};
    height: 90%;
    h1 {
      text-align: center;
      font-size: 1.5rem;
    }
  }
`;

const Hero = (props) => {
  return (
    <StyledHero {...props}>
      <HeroTextContianer {...props}>
        <h1>{props.title}</h1>
        {props.buttonText && <ButtonLink>{props.buttonText}</ButtonLink>}
      </HeroTextContianer>
    </StyledHero>
  );
};

export default Hero;
