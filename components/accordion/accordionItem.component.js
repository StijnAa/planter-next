import React from "react";
import styled from "styled-components";
import { useState } from "react";
import theme from "../../styles/theme";

const StyledAccordionItem = styled.div`
  p {
    margin-top: 10px;
  }
`;
const TitleContainer = styled.div`
  & > button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    text-align: left;
    & > h4 {
      display: inline;
      font-weight: 400;
    }
    & > span {
      margin-left: 20px;
    }
  }
`;

const AccordionItem = ({ title, text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <StyledAccordionItem>
      <TitleContainer>
        <button
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
        >
          <h4>{title}</h4>
          <span>{!isExpanded ? "+" : "-"}</span>
        </button>
      </TitleContainer>
      <section hidden={!isExpanded}>
        <p>{text}</p>
      </section>
    </StyledAccordionItem>
  );
};

export default AccordionItem;
