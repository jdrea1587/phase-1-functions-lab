const headquarters = 42;
const feet = 264;

function distanceFromHqInBlocks(distance) {
    if (distance > 42) {
        return distance - headquarters;
    }
    else if (distance < 42){
        return headquarters -distance;
    }
}

function distanceFromHqInFeet (distance) {
    return distanceFromHqInBlocks(distance) * feet;
}

function distanceTravelledInFeet (headquarters, travel) {
    if (travel > headquarters){
        return (travel - headquarters) * feet;
    }
    else {
        return (headquarters - travel) * feet;
    }
}

function calculatesFarePrice (start, destination) {
    const sumFeet = distanceTravelledInFeet(start, destination)
    let cost = 0;
    if (sumFeet < 400) {
        return 0;
    }
    else if ((sumFeet >= 400) && (sumFeet <= 2000)) {
        return cost = (sumFeet - 400) * .02;
    }
    else if ((sumFeet > 2000) && (sumFeet < 2500)) {
        return 25;
    }
    else if (sumFeet > 2500) {
        return 'cannot travel that far';
    }
}