import React from "react";
import Image from "next/image";
import cx from "classnames";
import Button from "../link/button.component";

interface InfoBlockPropsBase {
    title: string;
    children: string | React.ReactNode;
    card?: boolean;
    bgColor?: "main" | "second" | "highlight";
    className?: string;
}

interface InfoBlockPropsWithButton extends InfoBlockPropsBase {
    buttonText: string;
    href: string;
}

interface InfoBlockPropsWithImg extends InfoBlockPropsBase {
    image: string;
    alt: string;
    imagePosition: "left" | "right";
}

type InfoBlockPropsWithEveryting = InfoBlockPropsBase & InfoBlockPropsWithButton & InfoBlockPropsWithImg;

type InfoBlockProps =
    | InfoBlockPropsBase
    | InfoBlockPropsWithImg
    | InfoBlockPropsWithButton
    | InfoBlockPropsWithEveryting;

const InfoBlock: React.FC<InfoBlockProps> = (props) => {
    return (
        <div
            className={cx(
                "info-block",
                props.className,
                "imagePosition" in props && "info-block--image",
                "card" in props && "info-block--card margin-wrapper",
                "bgColor" in props && "info-block--" + props.bgColor,
            )}
        >
            <div
                className={cx(
                    "info-block__main",
                    "buttonText" in props && "info-block__main--has-button",
                    "imagePosition" in props && "info-block__main--image-" + props.imagePosition,
                )}
            >
                <h3 className="info-block__title">{props.title}</h3>
                <div className="info-block__content">{props.children}</div>
                {"buttonText" in props && (
                    <div className="info-block__button-container">
                        <Button href={props.href}>{props.buttonText}</Button>
                    </div>
                )}
            </div>
            {"image" in props && (
                <aside className="info-block__aside">
                    <Image
                        className="info-block__image"
                        src={props.image}
                        alt={props.alt}
                        layout="fill"
                        objectFit="cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        objectPosition="bottom"
                        placeholder="blur"
                        blurDataURL="/image/blur.jpg"
                    />
                </aside>
            )}
        </div>
    );
};

export default InfoBlock;
