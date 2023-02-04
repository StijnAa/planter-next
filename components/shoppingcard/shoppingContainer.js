import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

const StyledShoppingContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
  margin-top: 2rem;
  margin-left: ${theme.padding.desktop};
  margin-right: ${theme.padding.desktop};
  background-color: ${theme.colors.white};
  padding: 0 4rem;

  @media only screen and (max-width: ${theme.small}) {
    padding: 0 3rem;
    margin-left: ${theme.padding.small};
    margin-right: ${theme.padding.small};
  }
  @media only screen and (max-width: ${theme.tablet}) {
    padding: 0 2rem;
    margin-left: ${theme.padding.tablet};
    margin-right: ${theme.padding.tablet};
  }
  @media only screen and (max-width: ${theme.mobile}) {
    margin-top: 0rem;
    padding: 0 1rem;
    margin-left: 0;
    margin-right: 0;
    border-radius: 0;
    background-color: ${theme.colors.grey};
  }
`;

const ShoppingHeader = styled.h2`
  margin: 2rem 0;
`;

const ShoppingContainer = ({ children }) => {
  return (
    <StyledShoppingContainer>
      <ShoppingHeader>Shopping card</ShoppingHeader>
      {children}
    </StyledShoppingContainer>
  );
};

export default ShoppingContainer;
