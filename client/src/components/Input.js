import React, { useState } from "react";
import ReactInputVerificationCode from 'react-input-verification-code';
  

const Input = () => {
    const [number, setNumber] = useState([]);

    const handleChange = (value) => {
        setNumber(value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(number)
    }

    return (
        <form onSubmit={handleSubmit}>
            <ReactInputVerificationCode length={3} onChange={handleChange}/>
            <button type="submit">Unlock</button>
        </form>
        
    )
};

export default Input;