import Link from "next/link";
import styled from "styled-components";
import React from "react";
import theme from "../../styles/theme";

const StyledLink = styled.a`
  cursor: pointer;
  color: ${(props) => {
    return props.color || theme.colors.black;
  }};
  &:hover {
    color: ${theme.colors.linkHover};
  }
`;

export type TextLinkProps = {
  href: string;
  color?: string;
  children: React.ReactNode;
};

export const TextLink: React.FC<TextLinkProps> = (props) => {
  let ref = React.useRef();

  return (
    <Link {...props} href={props.href}>
      <StyledLink>{props.children}</StyledLink>
    </Link>
  );
};

export default TextLink;
