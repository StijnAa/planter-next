import React, { ReactElement } from "react";
import Button from "../link/button.component";
import cx from "classnames";

type HeroProps = {
  textPosition: "left" | "center";
  size: "big" | "small";
  title: string;
  buttonText?: string;
  href?: string;
  img?: ReactElement;
};

const Hero: React.FC<HeroProps> = (props) => {
  return (
    <section className={cx("hero", "hero--" + props.size)}>
      <main className="hero__container">
        <h1 className={cx("hero__title", "hero__title--" + props.textPosition)}>
          {props.title}
        </h1>
        {"buttonText" in props && (
          <Button href={props.href}>{props.buttonText}</Button>
        )}
      </main>
      <div className="hero__img">{props.img && props.img}</div>
    </section>
  );
};

export default Hero;
