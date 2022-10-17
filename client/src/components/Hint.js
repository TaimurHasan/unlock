import React from "react";
import '../css/Hint.css'

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