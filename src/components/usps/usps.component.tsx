import React from "react";
import cx from "classnames";

type UspsItem = { icon: string; text: string };

export type UspsProps = {
    uspsList: UspsItem[];
};

export const Usps: React.FC<UspsProps> = ({ uspsList }) => {
    return (
        <ul className="usps padding-wrapper">
            {uspsList.map((item, i) => {
                return (
                    <li key={i} className="usps__item">
                        <i className={cx("icofont-" + item.icon)} />
                        <span>{item.text}</span>
                    </li>
                );
            })}
        </ul>
    );
};
