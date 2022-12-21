import React from "react";
import styled from "styled-components";
import { useState } from "react";

const StyledAccordionItem = styled.div`
  p {
    margin-top: 10px;
  }
  header {
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
  }
`;

export type FaqItemProps = {
  question: string;
  answer: string;
};

export const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <StyledAccordionItem>
      <header>
        <button
          onClick={() => {
            setIsExpanded(!isExpanded);
          }}
        >
          <h4>{question}</h4>
          <span>{!isExpanded ? "+" : "-"}</span>
        </button>
      </header>
      <section hidden={!isExpanded}>
        <p>{answer}</p>
      </section>
    </StyledAccordionItem>
  );
};
