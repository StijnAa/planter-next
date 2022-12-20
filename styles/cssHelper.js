import { css } from "styled-components";
import theme from "./theme";

export const formHeight = css`
  height: 50px;
  @media only screen and (max-width: ${theme.small}) {
    height: 40px;
  }
  @media only screen and (max-width: ${theme.tablet}) {
    height: 38px;
  }
  @media only screen and (max-width: ${theme.mobile}) {
    height: 36px;
  }
`;

export const fontH1 = css`
  font-size: 3rem;
  @media only screen and (max-width: ${theme.small}) {
    font-size: 2.5rem;
  }
  @media only screen and (max-width: ${theme.tablet}) {
    font-size: 2rem;
  }
  @media only screen and (max-width: ${theme.mobile}) {
    font-size: 1.8rem;
  }
`;
export const fontH2 = css`
  font-size: 2.2rem;
  @media only screen and (max-width: ${theme.small}) {
    font-size: 2rem;
  }
  @media only screen and (max-width: ${theme.tablet}) {
    font-size: 1.6rem;
  }
  @media only screen and (max-width: ${theme.mobile}) {
    font-size: 1.3rem;
  }
`;
export const fontH3 = css`
  font-size: 1.5rem;
  @media only screen and (max-width: ${theme.small}) {
    font-size: 1.3rem;
  }
  @media only screen and (max-width: ${theme.tablet}) {
    font-size: 1.2rem;
  }
  @media only screen and (max-width: ${theme.mobile}) {
    font-size: 1rem;
  }
`;

export const fontBody = css`
  font-size: 0.9rem;
  @media only screen and (max-width: ${theme.small}) {
    font-size: 0.8rem;
  }
  @media only screen and (max-width: ${theme.tablet}) {
    font-size: 0.7rem;
  }
  @media only screen and (max-width: ${theme.mobile}) {
    font-size: 0.6rem;
  }
`;
