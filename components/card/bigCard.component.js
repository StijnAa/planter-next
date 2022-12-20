import React from "react";
import styled from "styled-components";
import ButtonLink from "../link/buttonLink.component";
import Image from "next/image";
import theme from "../../styles/theme";
import Router from "next/router";

const BigCardContainer = styled.div`
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: ${theme.colors.white};
  border-radius: 0.8rem;
  margin: 4rem 0;

  @media only screen and (max-width: ${theme.small}) {
    grid-template-columns: ${({ imgLeft }) =>
      imgLeft ? "2fr 1fr" : "1fr 2fr"};
  }
  @media only screen and (max-width: ${theme.tablet}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
  @media only screen and (max-width: ${theme.mobile}) {
  }
`;
const TextContainer = styled.main`
  margin: ${({ buttonText }) => (buttonText ? "6rem 0" : "8rem 0")};
  padding: 3rem;
  justify-items: stretch;
  order: ${({ imgLeft }) => (imgLeft ? "3" : "1")};
  & > p {
    margin-top: 1rem;
  }
  & > a {
    margin-top: 2rem;
  }
  @media only screen and (max-width: ${theme.small}) {
    margin: ${({ buttonText }) => (buttonText ? "2rem 0" : "5rem 0")};
    padding: 2rem;
    & > p {
      margin-top: 1rem;
    }
  }
  @media only screen and (max-width: ${theme.tablet}) {
    margin: ${({ buttonText }) => (buttonText ? "2rem 0" : "4rem 0")};
    order: 3;
    width: 100%;
    text-align: center;
  }
  @media only screen and (max-width: ${theme.mobile}) {
    margin: ${({ buttonText }) => (buttonText ? "0" : "2rem 0")};
  }
`;
const ImageContainer = styled.a`
  width: 100%;
  position: relative;
  order: 2;
`;

const BigCard = (props) => {
  return (
    <BigCardContainer imgLeft={props.imgLeft} buttonText={props.buttonText}>
      <TextContainer imgLeft={props.imgLeft} buttonText={props.buttonText}>
        <h3>{props.title}</h3>
        <p>{props.p}</p>
        {props.buttonText && (
          <ButtonLink href={props.href}>{props.buttonText}</ButtonLink>
        )}
      </TextContainer>
      <ImageContainer>
        <Image
          src={props.src}
          alt={props.alt}
          layout="fill"
          objectFit="cover"
        />
      </ImageContainer>
    </BigCardContainer>
  );
};

export default BigCard;
