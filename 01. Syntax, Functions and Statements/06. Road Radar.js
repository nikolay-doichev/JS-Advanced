function roadRadar(input) {
    let currentSpeed = parseInt(input[0]);
    let speedLimit = 0;
    let area = input[1];

    let speedWarning = '';

    if (area == 'residential') {
        speedLimit = 20;
        if (currentSpeed - speedLimit > 0 && currentSpeed - speedLimit <= 20) {
            speedWarning = 'speeding'
        }
        else if (currentSpeed - speedLimit > 20 && currentSpeed - speedLimit <= 40) {
            speedWarning = 'excessive speeding'
        } else if (currentSpeed - speedLimit > 40) {
            speedWarning = 'reckless driving'
        }
    } else if (area == 'city') {
        speedLimit = 50;
        if (currentSpeed - speedLimit > 0 && currentSpeed - speedLimit <= 20) {
            speedWarning = 'speeding'
        }
        else if (currentSpeed - speedLimit > 20 && currentSpeed - speedLimit <= 40) {
            speedWarning = 'excessive speeding'
        } else if (currentSpeed - speedLimit > 40) {
            speedWarning = 'reckless driving'
        }
    } else if (area == 'interstate') {
        speedLimit = 90;
        if (currentSpeed - speedLimit > 0 && currentSpeed - speedLimit <= 20) {
            speedWarning = 'speeding'
        }
        else if (currentSpeed - speedLimit > 20 && currentSpeed - speedLimit <= 40) {
            speedWarning = 'excessive speeding'
        } else if (currentSpeed - speedLimit > 40) {
            speedWarning = 'reckless driving'
        }
    } else if (area == 'motorway') {
        speedLimit = 130;
        if (currentSpeed - speedLimit > 0 && currentSpeed - speedLimit <= 20) {
            speedWarning = 'speeding'
        }
        else if (currentSpeed - speedLimit > 20 && currentSpeed - speedLimit <= 40) {
            speedWarning = 'excessive speeding'
        } else if (currentSpeed - speedLimit > 40) {
            speedWarning = 'reckless driving'
        }
    }

    return speedWarning
}

console.log(roadRadar([1200, 'city']));