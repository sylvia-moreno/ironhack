// Rover Object Goes Here
// ======================
var rover = { direction: 'N', y: 0, x: 0, travelLog: [] };
var lastTravelLogVal = null;
// ======================

//function that manages left rotation 
function turnLeft(rover) {
    switch (rover.direction) {
        case "N":
            rover.direction = 'W';
            break;
        case "W":
            rover.direction = 'S';
            break;
        case "E":
            rover.direction = 'N';
            break;
        case "S":
            rover.direction = 'W';
            break;
        default:
            rover.direction = 'N';
    }
    console.log('the rover turn left to the direction', rover.direction);
    console.log('left rover position: ', rover.direction)
}

//function that manages right rotation 
function turnRight(rover) {
    switch (rover.direction) {
        case "N":
            rover.direction = 'E';
            break;
        case "W":
            rover.direction = 'N';
            break;
        case "E":
            rover.direction = 'S';
            break;
        case "S":
            rover.direction = 'E';
            break;
        default:
            rover.direction = 'N';
    }
    console.log('the rover turn right to the direction', rover.direction);
    console.log('right rover position: ', rover.direction);
}

//function that manages move forward (front) 
function moveForward(rover) {
    var travelLogTracking = rover.travelLog.push([rover.x, rover.y]);

    if (rover.direction === 'W') {
        rover.x -= 1,
            travelLogTracking,
            console.log('the rover’s coordinates is', [rover.x, rover.y])
    } else if (rover.direction === 'N') {
        rover.y -= 1,
            travelLogTracking,
            console.log('the rover’s coordinates is', [rover.x, rover.y])
    } else if (rover.direction === 'S') {
        rover.y += 1,
            travelLogTracking,
            console.log('the rover’s coordinates is', [rover.x, rover.y])
    } else if (rover.direction === 'E') {
        rover.x += 1,
            travelLogTracking,
            console.log('the rover’s coordinates is', [rover.x, rover.y])
    } else {
        rover.x -= 1,
            travelLogTracking,
            console.log('the rover’s coordinates is', [rover.x, rover.y])
    }
    console.log(rover)
}

//function that manages back forward mouvement 
function moveBackward(rover) {
    var travelLogTracking = rover.travelLog.push([rover.x, rover.y]);

    if (rover.direction === 'W') {
        rover.x += 1,
            travelLogTracking,
            console.log('the rover’s coordinates is', [rover.x, rover.y])
    } else if (rover.direction === 'N') {
        rover.y += 1,
            travelLogTracking,
            console.log('the rover’s coordinates is', [rover.x, rover.y])
    } else if (rover.direction === 'S') {
        rover.y -= 1,
            travelLogTracking,
            console.log('the rover’s coordinates is', [rover.x, rover.y])
    } else if (rover.direction === 'E') {
        rover.x -= 1,
            travelLogTracking,
            console.log('the rover’s coordinates is', [rover.x, rover.y])
    } else {
        rover.x -= 1,
            travelLogTracking,
            console.log('the rover’s coordinates is', [rover.x, rover.y])
    }
    console.log(rover)
}

//function that manages the commands that are passed as parameters and selects the right action 
function commands(myCommand) {
    var arrCommand = [];
    var stringAutorize = ['f', 'l', 'r', 'b'];

    myCommand.split('').forEach(function(command) {
        if (!stringAutorize.includes(command)) {
            console.log('you have entered unauthorized letter')
        } else {
            arrCommand.push(command)
        }
    });

    for (var i = 0; i < arrCommand.length; i++) {
        if (arrCommand[i] === 'f') {
            moveForward(rover)
        } else if (arrCommand[i] === 'r') {
            turnRight(rover)
        } else if (arrCommand[i] === 'l') {
            turnLeft(rover)
        } else if (arrCommand[i] === 'b') {
            moveBackward(rover)
        }
    }
}
commands('rffrfflfrfbf');