import React from "react";
import { AiOutlineReload } from 'react-icons/ai';
import "../css/Options.css";

import {
    createNumber
} from '../utils/algo'

const Options = ({ setCombo, setSucceeded }) => {

    const handleClick = (e) => {
        e.preventDefault();
        setCombo(createNumber());
        setSucceeded(false);
    }

    return (
        <div className="optionsBar">
            <button 
                className="optionsBtn"
                onClick={handleClick}
            >
                <AiOutlineReload size="25px"/>
            </button>
        </div>
    )
};

export default Options;