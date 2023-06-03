import Link from "next/link";
import React from "react";
import cx from "classnames";

export type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

export const TextLink: React.FC<TextLinkProps> = (props) => {
  return (
    <div className={cx(props.className, "link__inherit")}>
      <Link href={props.href} passHref legacyBehavior>
        <a>{props.children}</a>
      </Link>
    </div>
  );
};

export default TextLink;
