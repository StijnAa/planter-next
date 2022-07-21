import React from "react";
import styled from "styled-components";
import { useState } from "react";

const StyledAccordionItem = styled.div`
    p{
        font-weight: 300;
    }`;
const TitleContainer = styled.div`
  & > button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    text-align: left;
    h3 {
      display: inline;
    }
    span {
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
          <h3>{title}</h3>
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
