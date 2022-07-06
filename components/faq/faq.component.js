import React from "react";
import styled from "styled-components";
import AccordionItem from "../accordion/accordionItem.component";

const StyledFaq = styled.div`
  margin-left: ${({ theme }) => theme.pagePadding};
  margin-right: ${({ theme }) => theme.pagePadding};
  display: flex;
  flex-direction: row;
  margin-top: 80px;
  margin-bottom: 80px;


  h2 {
    font-size: 2rem;
    width: 50%;
  }
  ul {
    width: 50%;
  }
  li{
      padding: 15px 0;
  }
`;

const Faq = () => {
  return (
    <StyledFaq>
      <h2>Frequendly A Q</h2>
      <ul>
        <li>
          <AccordionItem title="Hoeveel weegt een bak?" text="Dat is moeilijk te zeggen. Het hangt af van de houtsoort, de grote van de bak en de hoogte. Je kunt een schatting zien als je de bak configureerd." />
        </li>
        <li>
        <AccordionItem title="Hoe zwaar is nou zo'n een bak" text="Dat is moeilijk te zeggen. Het hangt af van de houtsoort, de grote van de bak en de hoogte. Je kunt een schatting zien als je de bak configureerd." />
        </li>
        <li>
        <AccordionItem title="Als je naar he gewicht kijkt, waar moet ik dan aan denken?" text="Dat is moeilijk te zeggen. Het hangt af van de houtsoort, de grote van de bak en de hoogte. Je kunt een schatting zien als je de bak configureerd." />
        </li>
      </ul>
    </StyledFaq>
  );
};

export default Faq;
