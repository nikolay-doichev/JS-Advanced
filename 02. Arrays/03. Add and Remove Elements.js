function addAndRemoveElements(input){
    let outputArray = [];

    for (let index = 0; index < input.length; index++) {
        const command = input[index];

        if (command === 'add') {
            outputArray.push(index + 1);
        } else if (command === 'remove') {
            outputArray.pop();
        }
    }

    console.log(outputArray.length > 0 ? outputArray.join('\n') : 'Empty');
}

addAndRemoveElements(['add', 
'add', 
'remove', 
'add', 
'add']
);