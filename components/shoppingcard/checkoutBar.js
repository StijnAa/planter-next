import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

const StyledCheckoutBar = styled.div`
  margin-left: ${theme.padding.desktop};
  margin-right: ${theme.padding.desktop};

  @media only screen and (max-width: ${theme.small}) {
    margin-left: ${theme.padding.small};
    margin-right: ${theme.padding.small};
  }
  @media only screen and (max-width: ${theme.tablet}) {
    margin-left: ${theme.padding.tablet};
    margin-right: ${theme.padding.tablet};
  }
  @media only screen and (max-width: ${theme.mobile}) {
    margin-left: ${theme.padding.mobile};
    margin-right: ${theme.padding.mobile};
  }
`;

const CheckoutBar = () => {
  return <StyledCheckoutBar></StyledCheckoutBar>;
};

export default CheckoutBar;
