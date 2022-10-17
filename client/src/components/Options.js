import React from "react";
import { AiOutlineReload, AiOutlineInfoCircle } from 'react-icons/ai';
import "../css/Options.css";

import {
    createNumber
} from '../utils/algo'

const Options = ({ setCombo, setSucceeded, setNumber, setModalOpen }) => {

    const handleClick = (e) => {
        e.preventDefault();
        setCombo(createNumber());
        setSucceeded(false);
        setNumber('');
    }

    const handleModal = (e) => {
        setModalOpen(true);
    }

    return (
        <div className="optionsBar">
            <button 
                className="optionsBtn"
                onClick={handleModal}
            >
                <AiOutlineInfoCircle size="25px"/>
            </button>
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