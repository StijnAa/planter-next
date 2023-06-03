import React from "react";

const ColorPreview: React.FC = () => {
  return (
    <ul className="color-preview">
      <li className="color-preview__item main" />
      <li className="color-preview__item second" />
      <li className="color-preview__item highlight" />
      <li className="color-preview__item white" />
      <li className="color-preview__item grey" />
      <li className="color-preview__item black" />
    </ul>
  );
};

export default ColorPreview;
