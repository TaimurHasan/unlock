import React, { useState } from "react";
import ReactInputVerificationCode from 'react-input-verification-code';
import { checkEquality } from "../utils/algo";
import { AiFillLock, AiFillUnlock } from 'react-icons/ai'
import "../css/Input.css"
  

const Input = ({ combo, succeeded, setSucceeded, number, setNumber }) => {

    const [failed, setFailed] = useState(false);

    const handleChange = (value) => {
        setNumber(value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(checkEquality(combo, number)) {
            setSucceeded(true)
        } else {
            setFailed(true);
            setSucceeded(false);
            setTimeout(() => setFailed(false), 1000);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className={`inputBox ${failed && "failedBox"} ${succeeded && "succeededBox"}`}>
                <ReactInputVerificationCode
                    autoFocus
                    placeholder='-'
                    length={3} 
                    onChange={handleChange}
                    value={number}
                />
            </div>
            <button 
                className={`unlock ${failed && "locked"} ${succeeded && "unlocked"}`} 
                type="submit"
                disabled={succeeded}
            >
                {succeeded ? (
                    <AiFillUnlock size="30px"/>
                ) : (
                    <AiFillLock size="30px"/>
                )}
            </button>
        </form>
        
    )
};

export default Input;