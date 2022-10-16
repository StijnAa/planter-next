import React from "react";
import styled from "styled-components";
import ButtonLink from "../link/buttonLink.component";
import Image from "next/image";

const BigCardContainer = styled.section`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-radius: 1rem;
  margin-top: 5rem;
  margin-bottom: 5rem;
  margin-left: ${({ theme }) => theme.padding.desktop};
  margin-right: ${({ theme }) => theme.padding.desktop};
  height: 500px;
  justify-content: space-between;
  align-items: center;
  & > div {
    background-image: url("./img/demoImg1.jpg");
    width: 50%;
    height: inherit;
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: left;
    background-position-y: bottom;
    border-radius: inherit;
    order: ${(props) => (props.left ? "3" : "1")};
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    margin-top: 3rem;
    margin-bottom: 3rem;
    margin-left: ${({ theme }) => theme.padding.mobile};
    margin-right: ${({ theme }) => theme.padding.mobile};
    flex-direction: column;
    h1 {
      text-align: center;
      font-size: 1.5rem;
    }
    & > div {
      width: 100%;
      order: 1;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.small}) {
    height: 400px;
    margin-left: ${({ theme }) => theme.padding.small};
    margin-right: ${({ theme }) => theme.padding.small};
  }
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    height: 380px;
    margin-left: ${({ theme }) => theme.padding.tablet};
    margin-right: ${({ theme }) => theme.padding.tablet};
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    height: 500px;
    margin-left: ${({ theme }) => theme.padding.mobile};
    margin-right: ${({ theme }) => theme.padding.mobile};
  }
`;
const TextContainer = styled.section`
  width: 50%;
  padding: 20px 80px;
  order: 2;
  h2 {
    font-size: 2rem;
    margin: 0;
  }
  p {
    margin-top: 0.5rem;
  }
  a {
    text-align: center;
    margin-top: 3rem;
  }
  @media only screen and (max-width: ${({ theme }) => theme.small}) {
    padding: 20px 45px;
  }
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    h2 {
      font-size: 1.8rem;
      margin: 0;
    }
    p {
      margin-top: 0.4rem;
      font-size: 0.9rem;
    }
    a {
      margin-top: 2.4rem;
    }
    padding: 20px 35px;
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
    padding: 60px 15px;
    text-align: center;
    order: 2;

    h2 {
      font-size: 1.5rem;
      margin: 0;
    }
    p {
      margin-top: 0.6rem;
    }
    a {
      margin-top: 1rem;
    }
  }
`;
const ImageContainer = styled.section``;
const img = styled.div``;

const BigCard = (props) => {
  return (
    <BigCardContainer {...props}>
      <TextContainer>
        <h2>{props.title}</h2>
        <p>{props.p}</p>
        {props.buttonText && <ButtonLink>{props.buttonText}</ButtonLink>}
      </TextContainer>

      <div />
    </BigCardContainer>
  );
};

export default BigCard;
