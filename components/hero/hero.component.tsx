import React from "react";
import styled from "styled-components";
import ButtonLink from "../link/buttonLink.component";
import theme from "../../styles/theme";

const HeroContainer = styled.section<HeroContainerProps>`
  background-color: ${theme.colors.main};
  background-image: url(${({ src }: HeroContainerProps) => src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: left;
  background-position-y: bottom;
  height: ${({ textPosition }: HeroContainerProps) =>
    textPosition == "center" ? "400px" : "800px"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: ${theme.mobile}) {
    align-items: center;
    height: ${({ textPosition }: HeroContainerProps) =>
      textPosition == "center" ? "200px" : "400px"};
  }
  main {
    padding-left: ${theme.padding.desktop};
    padding-right: ${theme.padding.desktop};
    h1 {
      color: ${theme.colors.white};
      text-shadow: ${(props) =>
        props.src ? "0px 0px 30px rgba(0, 0, 0, 0.8)" : "none"};
      text-align: ${({ textPosition }: HeroContainerProps) =>
        textPosition == "center" ? "center" : "left"};
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
      justify-content: ${({ textPosition }: HeroContainerProps) =>
        textPosition == "center" ? "center" : "space-between"};
      height: 90%;
      h1 {
        text-align: center;
      }
    }
  }
`;

type HeroContainerProps = {
  textPosition: "left" | "center";
  src?: string | "";
};

type HeroPropsTypeA = {
  textPosition: "center";
  title: string;
};

type HeroPropsTypeB = {
  textPosition: "left";
  title: string;
  buttonText: string;
  href: string;
  src: string;
};

type HeroProps = HeroPropsTypeA | HeroPropsTypeB;

const Hero: React.FC<HeroProps> = (props) => {
  return (
    <HeroContainer
      textPosition={props.textPosition}
      src={"src" in props ? props.src : ""}
    >
      <main>
        <h1>{props.title}</h1>
        {"buttonText" in props && (
          <ButtonLink href={props.href}>{props.buttonText}</ButtonLink>
        )}
      </main>
    </HeroContainer>
  );
};

export default Hero;
