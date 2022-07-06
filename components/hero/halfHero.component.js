import React from "react";
import styled from "styled-components";
import ButtonLink from "../link/buttonLink.component";

const StyledHalfHero = styled.section`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  height: ${(props) => (props.small ? "400px" : "800px")};
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
`;
const TextContainer = styled.section`
  width: 50%;
  padding: 20px 80px;
  order: 2;
  /* margin-left: ${({ theme }) => theme.pagePadding};
  margin-right: ${({ theme }) => theme.pagePadding}; */
  h2 {
    font-size: 2rem;
    margin: 0;
  }
  p {
    font-weight: 300;
    margin-top: 0.5rem;
  }
  a {
    margin-top: 1rem;
  }
`;

const HalfHero = (props) => {
  return (
    <StyledHalfHero {...props}>
      <TextContainer>
        <h2>{props.title}</h2>
        <p>{props.p}</p>
        {props.buttonText && <ButtonLink>{props.buttonText}</ButtonLink>}
      </TextContainer>
      <div />
    </StyledHalfHero>
  );
};

export default HalfHero;
