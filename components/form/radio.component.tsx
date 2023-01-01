import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import { formHeight } from "../../styles/cssHelper";

const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  border-width: 1px;
  border-color: #1f1d1d;
  border-radius: 0.3rem;
  border-style: solid;
  input {
    padding: 1rem;
    width: 22px;
    ${formHeight}
    @media only screen and (max-width: ${theme.small}) {
      width: 20px;
    }
    @media only screen and (max-width: ${theme.tablet}) {
      width: 18px;
    }
    @media only screen and (max-width: ${theme.mobile}) {
      width: 16px;
    }
  }
  div {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`;
export type RadiofieldProps = {
  id: string;
  label: string;
  children: React.ReactNode;
};

const Radiofield: React.FC<RadiofieldProps> = ({ id, label, children }) => {
  return (
    <Fieldset name={id}>
      <legend>{label}</legend>
      {children}
    </Fieldset>
  );
};

export default Radiofield;