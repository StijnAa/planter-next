import React from "react";

const Loading: React.FC = () => {
    return (
        <div className="loading-spinner">
            <h3 className="loading-spinner__text">Verzenden</h3>
            <i className="loading-spinner__icon icofont-ui-laoding" />
        </div>
    );
};

export default Loading;
