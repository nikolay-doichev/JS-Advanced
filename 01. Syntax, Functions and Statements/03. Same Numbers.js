function sameNumbers(number){
    let numbers = number.toString().split('');
    let areEqual = true;
    let sumOfNumbers = 0;

    for(let i = 0; i < numbers.length; i++){
        if (areEqual) {
            areEqual = numbers[i] === numbers[0];
        }
        sumOfNumbers += +numbers[i];
    }

    console.log(areEqual);
    console.log(sumOfNumbers);
}

console.log(sameNumbers(22222));