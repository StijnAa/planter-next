import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

const UspsContainer = styled.ul`
  background-color: ${theme.colors.white};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-left: ${theme.padding.desktop};
  padding-right: ${theme.padding.desktop};
  padding-top: 20px;
  padding-bottom: 20px;
  @media only screen and (max-width: ${theme.small}) {
    padding-left: ${theme.padding.small};
    padding-right: ${theme.padding.small};
  }
  @media only screen and (max-width: ${theme.tablet}) {
    padding-left: ${theme.padding.tablet};
    padding-right: ${theme.padding.tablet};
  }
  @media only screen and (max-width: ${theme.mobile}) {
    padding-left: ${theme.padding.mobile};
    padding-right: ${theme.padding.mobile};
  }
`;

const UspsItem = styled.li`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;
  i {
    margin: 0 15px 0 0;
  }
  span {
    font-weight: 500;
  }
  @media only screen and (max-width: ${theme.mobile}) {
    flex-direction: column;
    padding: 0 10px;
    i {
      margin: 0 0 0 0;
    }
  }
`;

const Usps = () => {
  return (
    <UspsContainer>
      <UspsItem>
        <i className="icofont-star " />
        <span>+500 tevreden klanten</span>
      </UspsItem>
      <UspsItem>
        <i className="icofont-delivery-time " />
        <span>2-3 weken levertijd</span>
      </UspsItem>
      <UspsItem>
        <i className="icofont-magic " />
        <span>Door jou ontworpen</span>
      </UspsItem>
    </UspsContainer>
  );
};

export default Usps;
