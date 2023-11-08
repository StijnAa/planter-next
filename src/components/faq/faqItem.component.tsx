import { useState } from "react";
import cx from "classnames";

export type FaqItemProps = {
    question: string;
    answer: string;
};

export const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <li className="faq-item">
            <button
                type="button"
                className="faq-item__button"
                onClick={() => {
                    setIsExpanded(!isExpanded);
                }}
            >
                <h4 className="faq-item__question">{question}</h4>
                <span className="faq-item__indicator">{isExpanded ? "-" : "+"}</span>
            </button>
            <p className={cx("faq-item__answer", isExpanded && "faq-item__answer--expanded")}>{answer}</p>
        </li>
    );
};
