/**
 * Created by MITTAL on 11-Sep-16.
 */

var x = [ 0, 1, 2, 3, 4, 5];
var y = [ 0, 1, 2, 3, 4, 5];
var isPlaced = false;
var currentX;
var currentY;
var currentDirection;

var stdin = process.openStdin();

stdin.addListener("data", function(d) {
    var input = d.toString().trim();

    switch (input)
        {
            case "LEFT":
                if(isPlaced == true) {
                    switch (currentDirection)
                    {
                        case "NORTH":
                            currentDirection = "WEST";
                            break;
                        case "EAST":
                            currentDirection = "NORTH";
                            break;
                        case "WEST":
                            currentDirection = "SOUTH";
                            break;
                        case "SOUTH":
                            currentDirection = "EAST";
                            break;
                        default:
                            console.log("Wrong Direction");
                    }

                } else {
                    console.log("Please place the robot first");
                }

                break;
            case "RIGHT":
                if(isPlaced == true) {
                    switch (currentDirection)
                    {
                        case "NORTH":
                            currentDirection = "EAST";
                            break;
                        case "EAST":
                            currentDirection = "SOUTH";
                            break;
                        case "WEST":
                            currentDirection = "NORTH";
                            break;
                        case "SOUTH":
                            currentDirection = "WEST";
                            break;
                        default:
                            console.log("Wrong Direction");
                    }

                } else {
                    console.log("Please place the robot first");
                }
                break;
            case "MOVE":
                if(isPlaced == true) {
                    switch (currentDirection)
                    {
                        case "NORTH":
                            if(currentY==5){
                                console.log("Command Refused - Robot tried to get off the table. Please enter another command");
                            } else {
                                currentY++;
                            }
                            break;
                        case "EAST":
                            if(currentX==5) {
                                console.log("Command Refused - Robot tried to get off the table. Please enter another command");
                            }
                            else {
                                currentX++;
                            }
                            break;
                        case "WEST":
                            if(currentX==0) {
                                console.log("Command Refused - Robot tried to get off the table. Please enter another command");
                            }
                            else {
                                currentX--;
                            }
                            break;
                        case "SOUTH":
                            if(currentY==0) {
                                console.log("Command Refused - Robot tried to get off the table. Please enter another command");
                            }
                            else {
                                currentY--;
                            }
                            break;
                        default:
                            console.log("Wrong Direction");
                    }
                } else {
                    console.log("Please place the robot first");
                }
                break;
            case "REPORT":
                if(isPlaced == true) {
                        console.log(currentX + "," + currentY + "," + currentDirection);
                        process.exit(0);
                } else {
                    console.log("Please place the robot first");
                }

    break;
            default:
                if (input.substring(0, 5) == "PLACE")
                {
                    placeROBOT(input);
                }
                else
                {
                    isValid = false;
                }
                break;
        }

        function placeROBOT (input) {
            if(input.substring(6, 7)>5 || input.substring(6, 7)<0 ) {
                console.log("Value on X axis exceeded. Please place the robot ob 5x5 table.");
            } else {
                currentX = x[input.substring(6, 7)];
            }
            if(input.substring(8, 9)>5 || input.substring(8, 9)<0) {
                console.log("Value on X axis exceeded. Please place the robot ob 5x5 table.");
            } else {
                currentY = y[input.substring(8, 9)];
            }
            currentDirection = input.substring(10, 16);
            isPlaced = true;
    }
});