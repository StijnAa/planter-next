import { useLink } from "@react-aria/link";
import styled from "styled-components";
import React from "react";
import theme from "../../styles/theme";

const StyledButton = styled.button`
  color: ${theme.colors.white};
  background-color: ${theme.colors.second};
  display: inline-flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 100rem;
  padding: 1rem 1.5rem;
  text-align: center;

  &:hover {
    transform: scale(0.98);
  }
  @media only screen and (max-width: ${theme.mobile}) {
    font-size: 0.8rem;
  }
`;

function Button(props) {
  let ref = React.useRef();
  let { linkProps } = useLink(props, ref);

  return (
    <StyledButton
      {...linkProps}
      ref={ref}
      href={props.href}
      target={props.target}
    >
      {props.children}
    </StyledButton>
  );
}

export default Button;
