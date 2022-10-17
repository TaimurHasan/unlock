import React from "react";
import '../css/Instructions.css'

const Instructions = ({ setModalOpen }) => {
    return (
        <div 
            className="instruction-modal"
            onClick={() => setModalOpen(false)}
        >
            <div className="modal-text">
                <h3>How to Play</h3>
                <p>
                    Unlock is a quick number-based puzzle. 
                    You are provided with four hints to solve a three-step lock combination.
                    Hints one through three all contain 1 or more numbers that belong in the correct combination.
                    Hint four contains no numbers that belong in the combination.
                    You have unlimited attempts and no time limit, so really it's a no-pressure situation,
                    but choose your strategy wisely!
                </p>
                <p>
                    For any questions, suggestions, or bugs, reach out to <a href="mailto:taimurhasan11@gmail.com">taimurhasan11@gmail.com!</a>
                </p>
            </div>
        </div>
    )
};

export default Instructions;