import { useLink } from "@react-aria/link";
import styled from "styled-components";
import React from "react";

const StyledLink = styled.a`
  color: black;
  &:hover {
    color: blue;
  }
`;

function Link(props) {
  let ref = React.useRef();
  let { linkProps } = useLink(props, ref);

  return (
    <StyledLink
      {...linkProps}
      ref={ref}
      href={props.href}
      target={props.target}
    >
      {props.children}
    </StyledLink>
  );
}

export default Link;
