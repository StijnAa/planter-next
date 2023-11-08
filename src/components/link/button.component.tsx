import React from "react";
import { UrlObject } from "url";
import Link from "next/link";
import cx from "classnames";

export type ButtonProps = {
    href?: string | UrlObject;
    onClick?: () => void;
    children: React.ReactNode;
};

const ButtonComponent: React.FC<ButtonProps> = ({ onClick, children }) => {
    return (
        <button className="planter-button" type="button" onClick={onClick}>
            {children}
        </button>
    );
};

const ButtonLink: React.FC<ButtonProps> = ({ href, children }) => {
    if (!href) return <></>;

    return (
        <div className={cx("planter-button")}>
            <Link href={href} passHref legacyBehavior>
                <a>{children}</a>
            </Link>
        </div>
    );
};

const Button: React.FC<ButtonProps> = (props) => {
    return "href" in props ? (
        <ButtonLink href={props.href}>{props.children}</ButtonLink>
    ) : (
        <ButtonComponent onClick={props.onClick}>{props.children}</ButtonComponent>
    );
};

export default Button;
