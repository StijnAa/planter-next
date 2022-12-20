import React from "react";
import styled from "styled-components";
import theme from "../../styles/theme";
import Image from "next/image";

const ShoppingItemContainer = styled.li`
  overflow: hidden;
  width: 100%;
  background-color: ${theme.colors.white};
  box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.05);
  border-radius: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 0 2rem 0;
  background-color: ${theme.colors.white};
  @media only screen and (max-width: ${theme.small}) {
    margin: 0 0 1.6rem 0;
  }
  @media screen and (max-width: ${theme.tablet}) {
    margin: 0 0 1.4rem 0;
  }
  @media only screen and (max-width: ${theme.mobile}) {
    margin: 0 0 1rem 0;
  }
  section {
    padding: 50px;
    display: grid;
    grid-template-rows: 1fr auto 1fr;
    grid-template-columns: 5fr 1fr;
    gap: 20px;
    @media only screen and (max-width: ${theme.small}) {
      padding: 40px;
    }
    @media screen and (max-width: ${theme.tablet}) {
      padding: 30px;
    }
    @media only screen and (max-width: ${theme.mobile}) {
      padding: 20px;
    }
  }

  header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    i {
      line-height: 25px;
    }
  }
`;

const ImageContainer = styled.a`
  position: relative;
`;
const EditButton = styled.div`
  grid-column-start: 2;
  grid-row-start: 3;
  justify-self: end;
  align-self: end;
`;
const TrashButton = styled.button`
  grid-column-start: 2;
  grid-row-start: 1;
  justify-self: end;
`;
const DuplicateButton = styled.button`
  grid-column-start: 2;
  grid-row-start: 2;
  justify-self: end;
`;

const ShoppingItem = (props) => {
  return (
    <ShoppingItemContainer>
      <ImageContainer href={props.href ? props.href : "#"}>
        <Image
          src={props.src ? props.src : "/img/demoImg1.jpg"}
          alt={props.alt}
          layout="fill"
          objectFit="cover"
        />
      </ImageContainer>

      <section>
        <header>
          <h2>€1200</h2>
        </header>
        <TrashButton>
          <i className="icofont-ui-delete" />
        </TrashButton>
        <DuplicateButton>
          <i className="icofont-ui-copy" />
        </DuplicateButton>
        <EditButton>
          <i className="icofont-ui-edit" />
        </EditButton>
        <main>
          <ul>
            <li>Bamboe Bak</li>
            <li>L:200cm B:120cm H:60cm</li>
          </ul>
        </main>
      </section>
    </ShoppingItemContainer>
  );
};

export default ShoppingItem;
