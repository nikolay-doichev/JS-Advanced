function rotate(input = []){
    let countOfRotation = (parseInt(input.pop())% input.length);

    for (let index = 0; index < countOfRotation; index++) {
        input.unshift(input.pop()); //'Apple',Banana','Orange','Coconut','Apple'
        
    }
    console.log(input.join(' '))
}

rotate(['Banana','Orange','Coconut','Apple','15']);