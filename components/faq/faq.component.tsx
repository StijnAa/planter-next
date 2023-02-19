import React from "react";
import { FaqItem, FaqItemProps } from "./faqItem.component";

type FaqProps = {
  title: string;
  faqItems: FaqItemProps[];
};

const Faq: React.FC<FaqProps> = ({ title, faqItems }) => {
  return (
    <div className="faq margin-wrapper">
      <h2 className="faq__title">{title}</h2>
      <ul className="faq__list">
        {faqItems.map(({ question, answer }: FaqItemProps, index: number) => {
          return (
            <div className="faq__question-container" key={index}>
              <FaqItem question={question} answer={answer} />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Faq;
