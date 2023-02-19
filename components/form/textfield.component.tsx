import React from "react";

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

export type TextfieldProps = {
  label: string;
  id: string;
  type: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Textfield: React.FC<TextfieldProps> = ({
  label,
  id,
  type,
  onChange,
  value,
  ...props
}) => {
  return (
    <TextfieldLabel>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        onChange={onChange}
        value={value}
        {...props}
      />
    </TextfieldLabel>
  );
};

export default Textfield;
