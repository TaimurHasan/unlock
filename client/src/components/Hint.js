import React from "react";

const Hint = ({ description, number }) => {
    return (
        <div className="hintDiv">
            <h2>{number}</h2>
            <p>
                {description}
            </p>
        </div>
    )
};

export default Hint;