import React from "react";
import styled from "styled-components";
import { formHeight, fontBody } from "../../styles/cssHelper";
import theme from "../../styles/theme";

const DropdownContainer = styled.div`
  label {
    font-weight: 400;
    display: block;
    margin-bottom: 7px;
  }
  select {
    width: 100%;
    padding: 0 1rem;
    border-width: 1px;
    border-color: ${theme.colors.black};
    border-radius: 0.3rem;
    border-style: solid;
    font-weight: 300;
    ${formHeight}
    ${fontBody}
  }
  option {
    width: 50%;
    font-size: inherit;
    font-weight: inherit;
  }
`;

const Dropdown = (props) => {
  return (
    <DropdownContainer>
      <label htmlFor="height">{props.label}</label>
      <select id={props.id} onChange={props.onChange} value={props.value}>
        {props.children}
      </select>
    </DropdownContainer>
  );
};

export default Dropdown;
