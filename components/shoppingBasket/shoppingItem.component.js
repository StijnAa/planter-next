import React from "react";
import styled from "styled-components";
import ButtonLink from "../link/buttonLink.component";

const StyledItem = styled.li`
  width: 100%;
  background-color: white;
  box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.05);
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  height: 200px;
  margin-top: 60px;
  section {
    width: 70%;
    padding: 30px;
  }

  header {
    width: 100%;
    display: flex;
    flex-direction: row;
    & > h2 {
    }
    & > button {
      margin-left: auto;
    }
  }
  &:last-of-type{
    margin-bottom: 60px;
  }
  a{
    font-size: 0.8rem;
    padding: 0.4rem 1rem;
  }
`;

const Img = styled.div`
  background-image: url("./img/demoImg1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 30%;
  border-top-left-radius: inherit;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: inherit;
`;

const ShoppingItem = () => {
  return (
    <StyledItem>
      <Img />
      <section>
        <header>
          <h2>Bamboe Bak</h2>
          <button>
            <i className="icofont-trash" />
          </button>
        </header>
        <div>
          <h3>E1200</h3>
          <p></p>
          <p>L:200cm B:70cm H:38cm</p>
          <ButtonLink>Edit</ButtonLink>
        </div>
      </section>
    </StyledItem>
  );
};

export default ShoppingItem;
