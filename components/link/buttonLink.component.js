import styled from "styled-components";
import React from "react";
import theme from "../../styles/theme";
import Link from "next/link";

const StyledButton = styled.a`
  color: ${theme.colors.white};
  background-color: ${theme.colors.second};
  display: inline-flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  border-radius: 100rem;
  padding: 1rem 1.5rem;
  text-align: center;

  font-weight: 500;

  &:hover {
    transform: scale(0.98);
  }
`;

function ButtonLink(props) {
  return (
    <Link href={props.href}>
      <StyledButton>{props.children}</StyledButton>
    </Link>
  );
}

export default ButtonLink;
