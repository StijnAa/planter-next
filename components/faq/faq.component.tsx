import React from "react";
import styled from "styled-components";
import { FaqItem, FaqItemProps } from "./faqItem.component";
import theme from "../../styles/theme";

const StyledFaq = styled.div`
  margin-left: ${theme.padding.desktop};
  margin-right: ${theme.padding.desktop};
  display: flex;
  flex-direction: row;
  margin-top: 80px;
  margin-bottom: 80px;
  h2 {
    width: 100%;
  }

  ul {
    width: 100%;
  }
  li {
    padding: 15px 0;
  }
  @media only screen and (max-width: ${theme.small}) {
    margin-left: ${theme.padding.small};
    margin-right: ${theme.padding.small};
  }
  @media only screen and (max-width: ${theme.tablet}) {
    flex-direction: column;
    align-items: center;
    margin-left: ${theme.padding.tablet};
    margin-right: ${theme.padding.tablet};
    h2 {
      margin-bottom: 1rem;
    }
  }
  @media only screen and (max-width: ${theme.mobile}) {
    margin-left: ${theme.padding.mobile};
    margin-right: ${theme.padding.mobile};
  }
`;

type FaqProps = {
  title: string;
  faqItems: FaqItemProps[];
};

const Faq: React.FC<FaqProps> = ({ title, faqItems }) => {
  return (
    <StyledFaq>
      <h2>{title}</h2>
      <ul>
        {faqItems.map(({ question, answer }: FaqItemProps, index: number) => {
          return (
            <li key={"faqItem-" + index}>
              <FaqItem question={question} answer={answer} />
            </li>
          );
        })}
      </ul>
    </StyledFaq>
  );
};

export default Faq;
