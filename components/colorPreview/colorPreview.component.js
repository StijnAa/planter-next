import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

const Colors = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  height: 400px;
`;

const Color = styled.li`
  background-color: ${({ color }) => color};
`;

const ColorPreview = () => {
  return (
    <Colors>
      <Color color={theme.colors.main}></Color>
      <Color color={theme.colors.second}></Color>
      <Color color={theme.colors.highlight}></Color>
      <Color color={theme.colors.white}></Color>
      <Color color={theme.colors.grey}></Color>
      <Color color={theme.colors.black}></Color>
    </Colors>
  );
};

export default ColorPreview;
