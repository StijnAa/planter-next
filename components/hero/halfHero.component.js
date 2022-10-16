import React from "react";
import styled from "styled-components";
import ButtonLink from "../link/buttonLink.component";

const StyledHalfHero = styled.section`
  display: grid;
  background-color: #fff;
  grid-template-columns: 1fr 1fr;

  & > div {
    background-image: url(${(props) => props.url});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: left;
    background-position-y: bottom;
    order: ${(props) => (props.left ? "3" : "1")};
  }
  @media only screen and (max-width: ${({ theme }) => theme.small}) {
  }
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    & > div {
      order: 1;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
  }
`;
const TextContainer = styled.section`
  margin: 4rem;
  margin-left: ${(props) => props.left && props.theme.padding.desktop};
  margin-right: ${(props) => !props.left && props.theme.padding.desktop};

  order: 2;
  h2 {
    font-size: 2rem;
    margin: 0;
  }
  p {
    font-weight: 300;
    margin-top: 0.5rem;
  }
  a {
    margin-top: 2rem;
  }
  @media only screen and (max-width: ${({ theme }) => theme.small}) {
    margin-left: ${({ theme }) => theme.padding.small};
    margin-right: ${({ theme }) => theme.padding.small};
  }
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    margin-left: ${({ theme }) => theme.padding.tablet};
    margin-right: ${({ theme }) => theme.padding.tablet};
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    margin-left: ${({ theme }) => theme.padding.tablet};
    margin-right: ${({ theme }) => theme.padding.tablet};
    text-align: center;
    h2 {
      font-size: 1.5rem;
    }
  }
`;

const HalfHero = (props) => {
  return (
    <StyledHalfHero {...props}>
      <TextContainer {...props}>
        <h2>{props.title}</h2>
        <p>{props.p}</p>
        {props.buttonText && <ButtonLink>{props.buttonText}</ButtonLink>}
      </TextContainer>
      <div />
    </StyledHalfHero>
  );
};

export default HalfHero;
