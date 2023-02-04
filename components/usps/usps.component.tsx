import cx from "classnames";
import React from "react";

type UspsItem = { icon: string; text: string };

export type UspsProps = {
  uspsList: UspsItem[];
};

export const Usps: React.FC<UspsProps> = ({ uspsList }) => {
  return (
    <ul className="usps">
      {uspsList.map((item, i) => {
        return (
          <li key={i}>
            <i className={cx("icofont-" + item.icon)} />
            <span>{item.text}</span>
          </li>
        );
      })}
    </ul>
  );
};
