import React from "react";
import styled from "styled-components";
import ButtonLink from "../link/buttonLink.component";
import Image from "next/image";
import theme from "../../styles/theme";

const BigCardContainer = styled.div<BigCardContainerProps>`
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: ${theme.colors.white};
  border-radius: 0.8rem;
  margin: 4rem 0;
  margin-left: ${theme.padding.desktop};
  margin-right: ${theme.padding.desktop};

  @media only screen and (max-width: ${theme.small}) {
    margin-left: ${theme.padding.small};
    margin-right: ${theme.padding.small};
    grid-template-columns: ${(props) =>
      props.imagePosition == "left" ? "2fr 1fr" : "1fr 2fr"};
  }

  @media only screen and (max-width: ${theme.tablet}) {
    margin-left: ${theme.padding.tablet};
    margin-right: ${theme.padding.tablet};
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media only screen and (max-width: ${theme.mobile}) {
    margin-left: ${theme.padding.mobile};
    margin-right: ${theme.padding.mobile};
  }

  main {
    margin: ${(hasButton) => (hasButton ? "6rem 0" : "8rem 0")};
    padding: 3rem;
    justify-items: stretch;
    order: ${({ imagePosition }: BigCardContainerProps) =>
      imagePosition == "left" ? "3" : "1"};

    & > p {
      margin-top: 1rem;
    }

    & > a {
      margin-top: 2rem;
    }

    @media only screen and (max-width: ${theme.small}) {
      margin: ${(hasButton) => (hasButton ? "2rem 0" : "5rem 0")};
      padding: 2rem;

      & > p {
        margin-top: 1rem;
      }
    }

    @media only screen and (max-width: ${theme.tablet}) {
      margin: ${(hasButton) => (hasButton ? "2rem 0" : "4rem 0")};
      order: 3;
      width: 100%;
      text-align: center;
    }

    @media only screen and (max-width: ${theme.mobile}) {
      margin: ${(hasButton) => (hasButton ? "0" : "2rem 0")};
    }
  }

  aside {
    width: 100%;
    position: relative;
    order: 2;
  }
`;

type BigCardContainerProps = {
  imagePosition: "left" | "right";
  hasButton: boolean;
};

type BigCardPropsTypeA = {
  title: string;
  p: string;
  src: string;
  alt: string;
  imagePosition: BigCardContainerProps["imagePosition"];
};

type BigCardPropsTypeB = {
  title: string;
  p: string;
  buttonText: string;
  href: string;
  src: string;
  alt: string;
  imagePosition: BigCardContainerProps["imagePosition"];
};

type BigCardProps = BigCardPropsTypeA | BigCardPropsTypeB;

const BigCard: React.FC<BigCardProps> = (props) => {
  return (
    <BigCardContainer
      imagePosition={props.imagePosition}
      hasButton={"buttonText" in props}
    >
      <main>
        <h3>{props.title}</h3>
        <p>{props.p}</p>
        {"buttonText" in props && (
          <ButtonLink href={props.href}>{props.buttonText}</ButtonLink>
        )}
      </main>
      <aside>
        <Image
          src={props.src}
          alt={props.alt}
          layout="fill"
          objectFit="cover"
        />
      </aside>
    </BigCardContainer>
  );
};

export default BigCard;
