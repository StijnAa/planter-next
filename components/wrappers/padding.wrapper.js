import React, { Children } from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

const Padding = styled.section`
  padding-left: ${theme.padding.desktop};
  padding-right: ${theme.padding.desktop};
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
  }
`;

const PaddingWrapper = ({ children }) => {
  return <Padding>{children}</Padding>;
};

export default PaddingWrapper;
