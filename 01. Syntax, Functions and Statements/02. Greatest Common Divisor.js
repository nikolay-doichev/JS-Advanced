function gcd(firstNumber, secondNumber){
    let maxGcd = Number.MIN_SAFE_INTEGER;

    if (firstNumber > secondNumber) {
        for (let index = 0; index < firstNumber; index++) {
            if (firstNumber % index === 0 && secondNumber % index === 0) {
                maxGcd = index
            }
        }

    } else {
        for (let index = 0; index < secondNumber; index++) {
            if (firstNumber % index === 0 && secondNumber % index === 0) {
                maxGcd = index;
            }
        }
    }

    console.log(maxGcd);
}

gcd(2154,458);