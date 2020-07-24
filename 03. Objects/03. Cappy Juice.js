function cappyJoice(input = []) {
    let storedFruits = {};
    let producedBottels = {};

    for (let index = 0; index < input.length; index++) {
        const currentFruit = input[index].split(' => ');
        let fruit = currentFruit[0];
        let fruitValue = Number(currentFruit[1]);

        if (storedFruits[fruit] === undefined) {
            storedFruits[fruit] = fruitValue;
        } else {
            storedFruits[fruit] += fruitValue;
        }

        if (storedFruits[fruit] >= 1000) {
            const bottles = Math.floor(storedFruits[fruit] / 1000);
            producedBottels[fruit] = bottles;
        }

    }
    for (const key in producedBottels) {

        console.log(`${key} => ${producedBottels[key]}`);
    }
}

cappyJoice(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
);