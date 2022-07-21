import React from "react";
import styled from "styled-components";
import ButtonLink from "../link/buttonLink.component";
import ShoppingItem from "./shoppingItem.component";

const ShoppingCardContainer = styled.section`
  background-color: #6a7c5e;
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: left;
  background-position-y: bottom;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: ${({ theme }) => theme.pagePadding};
  padding-right: ${({ theme }) => theme.pagePadding};
  padding-bottom:80px;
  h1 {
    color: white;
    font-size: 3rem;
    text-align: left;
  }
`;

const CardsContainer = styled.div`
  background-color: white;
  border-radius: 1rem;
  width: 100%;;

  box-shadow: 0 6px 16px 0 rgba(0,0,0,.05);
  ul{
    margin: 0 110px;
  }
`;

const ShoppingBasket = (props) => {
  return (
    <ShoppingCardContainer {...props}>
      <h1>In de winkelwagen:</h1>
      <CardsContainer>
        <ul>
          <ShoppingItem></ShoppingItem>
          <ShoppingItem></ShoppingItem>
          <ShoppingItem></ShoppingItem>

        </ul>
      </CardsContainer>
    </ShoppingCardContainer>
  );
};

export default ShoppingBasket;
