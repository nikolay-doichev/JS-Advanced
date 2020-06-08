function extraction(input = []){
    let array = [];
    let maxValue = Number.MIN_SAFE_INTEGER;

    input.forEach(element => {
        if (element >= maxValue) {
            array.push(element)
            maxValue = element
        }
    })

    console.log(array.join('\n'));
}

function extraction(input = []){
    
     let output = input.reduce((acc,curr) =>{

        const lastElement = acc[acc.length - 1];

        if(curr >= lastElement || lastElement === undefined){
            acc.push(curr)
        }

        return acc;

    }, []);

    console.log(output.join('\n'))
}

extraction([1, 3, 8, 4, 10, 12, 3, 2, 24])