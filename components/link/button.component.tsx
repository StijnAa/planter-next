import styled from "styled-components";
import React from "react";
import theme from "../../styles/theme";

const StyledButton = styled.p`
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

export type ButtonProps = {
  children: React.ReactNode,
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props}>
      <StyledButton>{children}</StyledButton>
    </button>
  );
};

export default Button;
