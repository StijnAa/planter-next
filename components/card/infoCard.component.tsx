import React from "react";
import styled from "styled-components";
import ButtonLink from "../link/buttonLink.component";
import Image from "next/image";
import theme from "../../styles/theme";

const InfoCardContainer = styled.div<InfoCardContainerProps>`
  overflow: hidden;
  display: grid;
  grid-template-columns: ${({ imagePosition }: InfoCardContainerProps) =>
    imagePosition == "none" ? "1fr" : "1fr 1fr"};

  background-color: ${theme.colors.white};

  @media only screen and (max-width: ${theme.small}) {
  }

  @media only screen and (max-width: ${theme.tablet}) {
    grid-template-columns: 1fr;
    grid-template-rows: ${({ imagePosition }: InfoCardContainerProps) =>
      imagePosition == "none" ? "1fr" : "1fr 1fr"};
  }

  @media only screen and (max-width: ${theme.mobile}) {
  }

  main {
    margin: 4rem;
    justify-items: stretch;
    margin-left: ${({ imagePosition }) =>
      imagePosition !== "left" && theme.padding.desktop};
    margin-right: ${({ imagePosition }) =>
      imagePosition !== "right" && theme.padding.desktop};

    order: ${({ imagePosition }: InfoCardContainerProps) =>
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

type InfoCardContainerProps = {
  imagePosition: "left" | "right" | "none";
  hasButton: boolean;
};

type InfoCardPropsTypeA = {
  title: string;
  p: string;
  src: string;
  alt: string;
  imagePosition: InfoCardContainerProps["imagePosition"];
};

type InfoCardPropsTypeB = {
  title: string;
  p: string;
  buttonText: string;
  href: string;
  src: string;
  alt: string;
  imagePosition: InfoCardContainerProps["imagePosition"];
};

type InfoCardPropsTypeC = {
  title: string;
  p: string;
  buttonText: string;
  href: string;
};

type InfoCardPropsTypeD = {
  title: string;
  p: string;
};

type InfoCardProps =
  | InfoCardPropsTypeA
  | InfoCardPropsTypeB
  | InfoCardPropsTypeC
  | InfoCardPropsTypeD;

const InfoCard: React.FC<InfoCardProps> = (props) => {
  return (
    <InfoCardContainer
      imagePosition={"imagePosition" in props ? props.imagePosition : "none"}
      hasButton={"buttonText" in props}
    >
      <main>
        <h3>{props.title}</h3>
        <p>{props.p}</p>
        {"buttonText" in props && (
          <ButtonLink href={props.href}>{props.buttonText}</ButtonLink>
        )}
      </main>
      {"src" in props && (
        <aside>
          <Image
            src={props.src}
            alt={props.alt}
            layout="fill"
            objectFit="cover"
          />
        </aside>
      )}
    </InfoCardContainer>
  );
};

export default InfoCard;
