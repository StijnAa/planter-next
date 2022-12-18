import React from "react";
import styled from "styled-components";
import Button from "../link/button.component";
import theme from "../../styles/theme";

const StyledHero = styled.section`
  background-color: ${theme.colors.main};
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: left;
  background-position-y: bottom;
  height: ${(props) => (props.small ? "400px" : "800px")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: ${theme.mobile}) {
    align-items: center;
    height: ${(props) => (props.small ? "200px" : "400px")};
  }
`;

const HeroTextContianer = styled.div`
  padding-left: ${theme.padding.desktop};
  padding-right: ${theme.padding.desktop};
  h1 {
    color: ${theme.colors.white};
    font-size: 3rem;
    text-shadow: ${(props) =>
      props.src ? "0px 0px 30px rgba(0, 0, 0, 0.8)" : "none"};
    text-align: ${(props) => (props.center ? "center" : "left")};
  }
  a {
    margin-top: 1rem;
  }
  @media only screen and (max-width: ${theme.small}) {
    padding-left: ${theme.padding.small};
    padding-right: ${theme.padding.small};
  }
  @media only screen and (max-width: ${theme.tablet}) {
    padding-left: ${theme.padding.tablet};
    padding-right: ${theme.padding.tablet};
  }
  @media only screen and (max-width: ${theme.mobile}) {
    padding-left: ${theme.padding.mobile};
    padding-right: ${theme.padding.mobile};
    display: flex;
    flex-direction: column;
    justify-content: ${(props) => (props.center ? "center" : "space-between")};
    height: 90%;
    h1 {
      text-align: center;
      font-size: 1.7rem;
    }
  }
`;

const Hero = (props) => {
  return (
    <StyledHero {...props}>
      <HeroTextContianer {...props}>
        <h1>{props.title}</h1>
        {props.buttonText && (
          <Button href={props.href}>{props.buttonText}</Button>
        )}
      </HeroTextContianer>
    </StyledHero>
  );
};

export default Hero;
