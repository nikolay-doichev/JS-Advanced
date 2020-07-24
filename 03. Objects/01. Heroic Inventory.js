function heroicInventory(input = []) {
    return JSON.stringify(input.reduce((acc, heroStr, i, arr) => {
        let [heroName, level, items] = heroStr.split('/');
        acc.push({name: heroName, level : parseInt(level), items: items.split(',')})
 
        return acc;
}, []))
}

console.log(heroicInventory(
    ['Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, DestructionSword',
        'Hes / 1 / Desolator, Sentinel, Antara']
));