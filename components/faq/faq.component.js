import React from "react";
import styled from "styled-components";
import AccordionItem from "../accordion/accordionItem.component";

const StyledFaq = styled.div`
  margin-left: ${({ theme }) => theme.padding.desktop};
  margin-right: ${({ theme }) => theme.padding.desktop};
  display: flex;
  flex-direction: row;
  margin-top: 80px;
  margin-bottom: 80px;

  h2 {
    font-size: 2.4rem;
    width: 100%;
  }
  ul {
    width: 100%;
  }
  li {
    padding: 15px 0;
  }
  @media only screen and (max-width: ${({ theme }) => theme.small}) {
    margin-left: ${({ theme }) => theme.padding.small};
    margin-right: ${({ theme }) => theme.padding.small};
    h2 {
      font-size: 2rem;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.tablet}) {
    flex-direction: column;
    align-items: center;
    margin-left: ${({ theme }) => theme.padding.tablet};
    margin-right: ${({ theme }) => theme.padding.tablet};
    h2 {
      font-size: 1.7rem;
      margin-bottom: 1rem;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    margin-left: ${({ theme }) => theme.padding.mobile};
    margin-right: ${({ theme }) => theme.padding.mobile};
  }
`;

const Faq = () => {
  return (
    <StyledFaq>
      <h2>Frequendly A Q</h2>
      <ul>
        <li>
          <AccordionItem
            title="Hoeveel weegt een bak?"
            text="Dat is moeilijk te zeggen. Het hangt af van de houtsoort, de grote van de bak en de hoogte. Je kunt een schatting zien als je de bak configureerd."
          />
        </li>
        <li>
          <AccordionItem
            title="Hoe zwaar is nou zo'n een bak"
            text="Dat is moeilijk te zeggen. Het hangt af van de houtsoort, de grote van de bak en de hoogte. Je kunt een schatting zien als je de bak configureerd."
          />
        </li>
        <li>
          <AccordionItem
            title="Als je naar he gewicht kijkt, waar moet ik dan aan denken?"
            text="Dat is moeilijk te zeggen. Het hangt af van de houtsoort, de grote van de bak en de hoogte. Je kunt een schatting zien als je de bak configureerd."
          />
        </li>
      </ul>
    </StyledFaq>
  );
};

export default Faq;
