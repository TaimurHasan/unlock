import React, { useEffect, useState } from "react";
import {
    placeOneRightAtRightPlace
} from '../utils/algo';

const HintOne = ({ combo }) => {
    const [hintOne, setHintOne] = useState([])

    useEffect(() => {
        setHintOne(placeOneRightAtRightPlace(combo))
    }, [combo])

    return (
        <div>
            <h1>{hintOne}</h1>
            <p>
                This number contains one right number in the right spot
            </p>
        </div>
    )
};

export default HintOne;