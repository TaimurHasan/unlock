import React, { useState } from "react";
import ReactInputVerificationCode from 'react-input-verification-code';
import { checkEquality } from "../utils/algo";
import { AiFillLock, AiFillUnlock } from 'react-icons/ai'
import "../css/Input.css"
  

const Input = ({ combo }) => {
    const [number, setNumber] = useState([]);
    const [failed, setFailed] = useState(false);
    const [succeeded, setSucceeded] = useState(false);

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
                    length={3} 
                    onChange={handleChange}
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