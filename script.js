
// Create window.prompt to grab user input.
// Compare User input to computer random input.
// Alert to lost, win, or ties. Conditional Statement to determine.
// Show Scoreboard.
// Window.confirm() to ask if user wants to play again. If true; play again, false. exit.


var userPoints = 0;
var compPoints = 0;
var gameTie = 0;

function playAgain() {
    var yes = confirm("Play Again?");
    if(yes){
        playGame();
    }
    else {
        window.alert("Thanks for playing!");
    }  
};



function playGame() {

    var userInput = prompt("Please choose R, P or S");
    var options = ["R", "P", "S"];
    userInput = userInput.toUpperCase();

    while (userInput != "R" && userInput != "P" && userInput != "S") {
        userInput = prompt("Please choose R, P or S");
    }


    var compRandom = Math.floor((Math.random()) * 2);
    var compChoice = options[compRandom];

    if (userInput === compChoice) {
        window.alert("Tied!")
        gameTie++;
    }
    else if ((userInput === "P" && compChoice === "S") || (userInput === "R" && compChoice === "P") || (userInput === "S" && compChoice === "R")) {
        window.alert("You lose!");
        compPoints++;
    }
    else if ((userInput === "P" && compChoice === "R") || (userInput === "R" && compChoice === "S") || (userInput == "S" && compChoice === "P")) {
        window.alert("You win!");
        compPoints++;
    }


    alert(
        "Wins: " + userPoints + "\n Losses: " + compPoints + "\n Ties: " + gameTie
    );

    playAgain();
};


playGame();

// window.prompt();
