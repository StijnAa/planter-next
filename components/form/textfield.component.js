import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import { formHeight, fontBody } from "../../styles/cssHelper";
const TextfieldLabel = styled.div`
  display: block;
  margin: 1rem 0;
  input {
    width: 100%;
    ${formHeight}
    border-width: 1px;
    border-color: ${theme.colors.black};
    border-radius: 0.3rem;
    border-style: solid;
    padding: 0 1rem;
    font-weight: 300;
    ${fontBody}
  }
  label {
    display: inline-block;
    font-weight: 400;
    margin-bottom: 4px;
  }
`;

const Textfield = (props) => {
  return (
    <TextfieldLabel>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        name={props.id}
        onChange={props.onChange}
        value={props.value}
        {...props}
      />
    </TextfieldLabel>
  );
};

export default Textfield;
