function fruit(kindOfFruit, weightInGrams, pricePerKilograms){
    let weightInKg = Number(weightInGrams/1000);
    let totalCost = Number(weightInKg * pricePerKilograms).toFixed(2);

    return `I need $${totalCost} to buy ${weightInKg.toFixed(2)} kilograms ${kindOfFruit}.`;
}

console.log(fruit('orange', 2500, 1.80));