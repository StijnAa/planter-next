import React, { useState } from "react";
import cx from "classnames";
import TextLink from "../link/textLink.component";

type navProps = {
    linksList?: { text: string; href: string }[];
};

const defaultNavList = [
    { text: "Houtkeuze", href: "/hout" },
    { text: "Bezorging", href: "/bezorging" },
    { text: "Contact", href: "/contact" },
    { text: "Over Planter", href: "/over-planter" },
];

const Navbar: React.FC<navProps> = ({ linksList = defaultNavList }) => {
    const [hambugerOpen, setHambugerOpen] = useState(false);

    const hambugerClickHandler = () => {
        setHambugerOpen(!hambugerOpen);
    };

    return (
        <div className="navigation-container padding-wrapper">
            <nav className="navigation">
                <button className="navigation__hambuger-button" type="button" onClick={hambugerClickHandler}>
                    <i className="icofont-navigation" />
                </button>
                <TextLink className="navigation__logo" href="/">
                    planter.
                </TextLink>
                <ul className={cx("navigation__list", hambugerOpen && "navigation__list--open")}>
                    {linksList.map((item, i) => {
                        return (
                            <li key={i} className="navigation__list-item">
                                <TextLink className="navigation__nav-link" href={item.href}>
                                    {item.text}
                                </TextLink>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
};
export default Navbar;
