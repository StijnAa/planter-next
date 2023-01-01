import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  background-color: ${theme.colors.white};
  border-radius: 0.8rem;
  i {
    animation: spin 2s linear infinite;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  h3 {
    margin-bottom: 2rem;
  }

  margin-bottom: 4rem;
  margin-left: ${theme.padding.desktop};
  margin-right: ${theme.padding.desktop};
  @media only screen and (max-width: ${theme.small}) {
    margin-left: ${theme.padding.small};
    margin-right: ${theme.padding.small};
  }
  @media only screen and (max-width: ${theme.tablet}) {
    border-radius: 0;
    margin-left: 0;
    margin-right: 0;
  }
  @media only screen and (max-width: ${theme.mobile}) {
  }
`;

const Loading: React.FC = () => {
  return (
    <LoadingContainer>
      <h3>Verzenden</h3>
      <i className="icofont-ui-laoding"></i>
    </LoadingContainer>
  );
};

export default Loading;
