import React, { useEffect, useState } from "react";

const HintOne = ({ combo }) => {
    const [hintOne, setHintOne] = useState([])

    useEffect(() => {
        const placeOneRight = () => {
            const arr = [];
            const rand = Math.floor(Math.random() * 3);
            console.log(rand)
            while (arr.length < 3) {
                const rand2 = Math.floor(Math.random() * 9 + 1);

                if(!combo.includes(rand2)) {
                    arr.push(rand2)
                };
            }

            arr[rand] = combo[rand]
            setHintOne(arr)
        };

        placeOneRight();
    }, [combo])

    return (
        <>
            <div>
                {combo}
            </div>
            <div>
                {hintOne}
            </div>
        </>
    )
};

export default HintOne;