import React from "react";
import styled from "styled-components";

const UspsContainer = styled.ul`
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-left: ${({ theme }) => theme.pagePadding};
  padding-right: ${({ theme }) => theme.pagePadding};
  padding-top: 20px;
  padding-bottom: 20px;
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const UspsItem = styled.li`
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: center;
  i {
    font-size: 2rem;
    margin: 0 15px 0 0;
  }
  @media only screen and (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    padding: 0 10px;
    span {
      font-size: 0.7rem;
    }
    i {
      font-size: 1.4rem;
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
