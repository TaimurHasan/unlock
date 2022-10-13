export const createNumber = () => {
    let comboArr = [];

    while(comboArr.length < 3) {
    const rand = (Math.floor(Math.random() * 9 + 1));

    // ensure no duplicate numbers
    if (!comboArr.includes(rand)) {
        comboArr.push(rand);
    }
    }

    return comboArr;
}

export const placeOneRightAtRightPlace = (combo) => {
    const arr = [];
    const rand = Math.floor(Math.random() * 3);
    
    while (arr.length < 3) {
        const rand2 = Math.floor(Math.random() * 9 + 1);

        if(!combo.includes(rand2) && !arr.includes(rand2)) {
            arr.push(rand2)
        };
    }

    arr[rand] = combo[rand]
    
    return arr;
};

export const placeOneRightAtWrongPlace = (combo) => {
    const arr = [];
    const rand = Math.floor(Math.random() * 3);

    while (arr.length < 3) {
        const rand2 = Math.floor(Math.random() * 9 + 1);

        if(!combo.includes(rand2) && !arr.includes(rand2)) {
            arr.push(rand2)
        };
    };

    const rightNum = combo[rand];

    let rand3 = rand;
    
    while (rand3 === rand) {
        rand3 = Math.floor(Math.random() * 3);
    };

    arr[rand3] = rightNum;

    return arr;
}