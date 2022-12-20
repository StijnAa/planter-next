import React from "react";
import styled from "styled-components";
import ButtonLink from "../link/buttonLink.component";
import theme from "../../styles/theme";
import Image from "next/image";
import Router from "next/router";

const HalfHeroContainer = styled.section`
  display: grid;
  background-color: ${theme.colors.white};
  grid-template-columns: 1fr 1fr;
  @media only screen and (max-width: ${theme.tablet}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

const TextContainer = styled.main`
  margin: 4rem;
  margin-left: ${({ imgLeft }) => !imgLeft && theme.padding.desktop};
  margin-right: ${({ imgLeft }) => imgLeft && theme.padding.desktop};
  order: ${({ imgLeft }) => (imgLeft ? "3" : "1")};

  h2 {
    margin: 0;
  }
  p {
    font-weight: 300;
    margin-top: 0.5rem;
  }
  a {
    margin-top: 2rem;
  }
  @media only screen and (max-width: ${theme.small}) {
    margin-left: ${theme.padding.small};
    margin-right: ${theme.padding.small};
  }
  @media only screen and (max-width: ${theme.tablet}) {
    margin-left: ${theme.padding.tablet};
    margin-right: ${theme.padding.tablet};
    order: 3;
  }
  @media only screen and (max-width: ${theme.mobile}) {
    margin-left: ${theme.padding.tablet};
    margin-right: ${theme.padding.tablet};
  }
`;

const ImageContainer = styled.aside`
  width: 100%;
  position: relative;
  order: 2;
`;

const HalfHero = (props) => {
  return (
    <HalfHeroContainer imgLeft={props.imgLeft}>
      <TextContainer imgLeft={props.imgLeft}>
        <h3>{props.title}</h3>
        <p>{props.p}</p>
        {props.buttonText && (
          <ButtonLink href={props.href}>{props.buttonText}</ButtonLink>
        )}
      </TextContainer>
      {props.src && (
        <ImageContainer>
          <Image
            src={props.src}
            alt={props.alt}
            layout="fill"
            objectFit="cover"
          />
        </ImageContainer>
      )}
    </HalfHeroContainer>
  );
};

export default HalfHero;
