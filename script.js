
// Create window.prompt to grab user input.
// Compare User input to computer random input.
// Alert to lost, win, or ties. Conditional Statement to determine.
// Show Scoreboard.
// Window.confirm() to ask if user wants to play again. If true; play again, false. exit.

var userInput = prompt("Enter R, P or S");
var userPoints = 0;
var compPoints = 0;
var gameTie = 0;

while (userInput != "R" && userInput != "P" && userInput != "S") {
    userInput = prompt("Please choose R, P or S");
}

var compChoice = ["R", "P", "S"];
var compRandom = Math.floor((Math.random()) * 2);

console.log(compChoice[compRandom]);

if (userInput === compChoice) {
    console.log("Tied!")
    gameTie++;
}
else if (userInput === "P") {
    if (compChoice === "S") {
        alert("You lose!");
        compPoints++;
    }
    else if (compChoice === "R") {
        alert("You win!");
        userPoints++;
    }
}

else if (userInput === "R") {
    if (compChoice === "P") {
        alert("You lose!");
        compPoints++;
    }
    else if (compChoice === "S") {
        alert("You win!");
        userPoints++;
    }
}

else if (userInput === "S") {
    if (compChoice === "R") {
        alert("You lose!");
        compPoints++;
    }
    else if (compChoice === "P") {
        alert("You win!");
        userPoints++;
    }
}


window.prompt();
