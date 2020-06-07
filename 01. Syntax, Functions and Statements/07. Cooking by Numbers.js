function cookingByNumbers(input) {
    let number = parseInt(input[0]);

    for (let index = 1; index < input.length; index++) {

        let command = input[index];

        switch (command) {
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number++;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number *= 0.8;
                break;

            default:
                break;
        }

        console.log(number)
    }
}

cookingByNumbers(['32', 'chop','chop','chop','chop','chop']);

function cookingByNumbersVersion2(input){
    let number = parseInt(input[0]);

    let functions = {
        chop: (x) => x / 2,
        dice: (x) => Math.sqrt(x),
        spice: (x) => x++,
        bake: (x) => x * 3,
        fillet: (x) => x * 0.8,
    }

    for (let index = 1; index < input.length; index++) {
        number = functions[input[index]](number)
        console.log(number);
    }
}

cookingByNumbersVersion2(['32', 'chop','chop','chop','chop','chop']);