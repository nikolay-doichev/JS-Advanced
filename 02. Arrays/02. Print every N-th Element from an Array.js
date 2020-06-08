function printNthElement(input){
 let step = parseInt(input.pop());

    for (let index = 0; index < input.length; index+=step) {
        console.log(input[index])
        
    }
}

printNthElement(['5','20','31','4','20','2'])