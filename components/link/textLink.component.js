import { useLink } from "@react-aria/link";
import styled from "styled-components";
import React from "react";
import theme from "../../styles/theme";

const StyledLink = styled.a`
  color: ${(props) => {
    return props.color || theme.colors.black;
  }};
  &:hover {
    color: ${theme.colors.linkHover};
  }
`;

function TextLink(props) {
  let ref = React.useRef();
  let { linkProps } = useLink(props, ref);

  return (
    <StyledLink
      {...props}
      {...linkProps}
      ref={ref}
      href={props.href}
      target={props.target}
    >
      {props.children}
    </StyledLink>
  );
}

export default TextLink;
