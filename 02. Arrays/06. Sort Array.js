function sortArrayes(input = []) {
    let newArray = input
    .sort((firstName, secondName) => firstName.length - secondName.length ||
                                     firstName.localeCompare(secondName))

    console.log(newArray.join('\n'))
}

sortArrayes(
    [
        'Isacc',
        'Theodor',
        'Jack',
        'Harrison',
        'George']

);