import React from "react";
import Link from "next/link";
import cx from "classnames";

export type ButtonProps = {
  href?: string;
  onClick?: () => {};
  children: React.ReactNode;
};

const ButtonComponent: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button className="planter-button" onClick={onClick}>
      {children}
    </button>
  );
};

const ButtonLink: React.FC<ButtonProps> = ({ href, children }) => {
  return (
    <div className={cx("planter-button")}>
      <Link href={href} passHref legacyBehavior>
        <a>{children}</a>
      </Link>
    </div>
  );
};

const Button: React.FC<ButtonProps> = ({ onClick, href, children }) => {
  return href ? (
    <ButtonLink href={href}>{children}</ButtonLink>
  ) : (
    <ButtonComponent onClick={onClick}>{children}</ButtonComponent>
  );
};

export default Button;
