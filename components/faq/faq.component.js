import React from "react";
import styled from "styled-components";
import AccordionItem from "../accordion/accordionItem.component";
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
