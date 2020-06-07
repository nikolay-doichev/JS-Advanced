function timeToWalk(steps, stepLenght, speed){
    let totalLenght = steps * stepLenght;
    let totalRestInMinutes = Math.floor(totalLenght / 500);

    let timeForTraveling = totalLenght / speed / 1000 * 60;

    let totalTimeInSeconds = Math.ceil((timeForTraveling + totalRestInMinutes) * 60);

    let result = new Date(null, null, null, null, null, totalTimeInSeconds);

    return result.toTimeString().split(' ')[0];
}

console.log(timeToWalk(4000, 0.60, 5))