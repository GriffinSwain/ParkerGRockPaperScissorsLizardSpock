// alert("BAZINGA");
// In PVP make timer that counts down from 5, automatically submitting when it gets to zero
//Make little animation of the hand sign emojis attacking each other to display who won or lost; maybe call a random photo API as battlefield

let body = document.getElementById("body");

//Select Screen Variables
//Character Selector
let one1 = document.getElementById("btnradio1");
let one2 = document.getElementById("btnradio2");
let one3 = document.getElementById("btnradio3");
let one4 = document.getElementById("btnradio4");
let one5 = document.getElementById("btnradio5");
let one6 = document.getElementById("btnradio6");
let one7 = document.getElementById("btnradio7");
let one8 = document.getElementById("btnradio8");

let two1 = document.getElementById("btnradio21");
let two2 = document.getElementById("btnradio22");
let two3 = document.getElementById("btnradio23");
let two4 = document.getElementById("btnradio24");
let two5 = document.getElementById("btnradio25");
let two6 = document.getElementById("btnradio26");
let two7 = document.getElementById("btnradio27");
let two8 = document.getElementById("btnradio28");

//Best Of x selector
let bestOf1 = document.getElementById("btnradio31");
let bestOf5 = document.getElementById("btnradio32");
let bestOf7 = document.getElementById("btnradio33");

//2nd Player Selector
let cpu = document.getElementById("btnradio41");
let human = document.getElementById("btnradio42");

let gameContainer = document.getElementById("gameContainer");
let selectionContainer = document.getElementById("selectionContainer");
let championChoice = document.getElementById("championChoice");
let cpuGame = document.getElementById("cpuGame");

let injectHere = document.getElementById("injectHere");
let beginButton = document.getElementById("beginButton");
let beginText = document.getElementById("beginText");

// Main Game Variables

//Player Character Images
let firstPlayerImg = document.getElementById("firstPlayerImg");
let secondPlayerImg = document.getElementById("secondPlayerImg");
let cpuPlayerImg = document.getElementById("cpuPlayerImg");

// Getting player game selection
let Rock1 = document.getElementById("vbtn-radio1");
let Paper1 = document.getElementById("vbtn-radio2");
let Scissors1 = document.getElementById("vbtn-radio3");
let Lizard1 = document.getElementById("vbtn-radio4");
let Spock1 = document.getElementById("vbtn-radio5");
let Rock2 = document.getElementById("vbtn-radio21");
let Paper2 = document.getElementById("vbtn-radio22");
let Scissors2 = document.getElementById("vbtn-radio23");
let Lizard2 = document.getElementById("vbtn-radio24");
let Spock2 = document.getElementById("vbtn-radio25");

let submitButton = document.getElementById("submitButton")
let submitButtonText = document.getElementById("submitButtonText");
let gameBackground = document.getElementById("gameBackground");
let playerTwoContainer = document.getElementById("playerTwoContainer");
let gameScore1 = document.getElementById("gameScore1");
let gameScore2 = document.getElementById("gameScore2");
let cpuScore = document.getElementById("cpuScore");
let gameChoice = document.getElementById("gameChoice");
let gameChoice2 = document.getElementById("gameChoice2");
let cpuChoice = document.getElementById("cpuChoice");
let playerOne = document.getElementById("playerOne");
let playerTwo = document.getElementById("playerTwo");
let gameBlocker = document.getElementById("gameBlocker");
let gameBlocker2 = document.getElementById("gameBlocker2");


let character1 = "";
let character2 = "";
let choice1 = "";
let choice2 = "";
let winner = "";
let winScore = 3;
let score1 = 0;
let score2 = 0;
let textScore1 = "";
let textScore2 = "";
let secondPlayer = "CPU";
let cpuAPIUrl = "";

var audio = new Audio('Assets/BigBangThemeSong.mp3');


// Temporary code to allow me to work on the second page without it going back to the first page constantly

body.onload = music();

function music(){
        audio.play(); 
}

// body.onload = SecondPage();

// function SecondPage(){
//     selectionContainer.className = "pageWaiting";
//     gameContainer.className = "pageDisplay";
//     submitButton.className = "btn btn-primary gameButton";
//     gameBackground.className = "gameHero";
//     secondPlayerImg.className = "gameCharacterImg2";
// }

if (winner == ""){
    cpuAPI();
}

beginButton.addEventListener("click", function(){
    
    selectionContainer.className = "pageWaiting";
    gameContainer.className = "pageDisplay";
    submitButton.className = "btn btn-dark gameButton";
    gameBackground.className = "gameHero";
    
    if (secondPlayer == "Human"){
        playerTwoContainer.className = "container-fluid d-flex playerTwo";

        cpuGame.className = "hide";
    }
    if (secondPlayer == "CPU"){
        secondPlayerImg.className = "gameCharacterImg2";
    }


    switch(character1){
        case "Sheldon":
        firstPlayerImg.src = "./Assets/Sheldor.png";
        firstPlayerImg.className = 'gameCharacterImg imageFlip';
        break;
        case "Leonard":
        firstPlayerImg.src = "./Assets/Leonurd.png";
        firstPlayerImg.className = 'gameCharacterImg';
        break;
        case "Penny":
        firstPlayerImg.src = "./Assets/Peni.png";
        firstPlayerImg.className = 'gameCharacterImg';
        break;
        case "Raj":
        firstPlayerImg.src = "./Assets/Raj.png";
        firstPlayerImg.className = 'gameCharacterImg imageFlip';
        break;
        case "Howard":
        firstPlayerImg.src = "./Assets/Howerd.png";
        firstPlayerImg.className = 'gameCharacterImg imageFlip';
        break;
        case "Bernadette":
        firstPlayerImg.src = "./Assets/Burnadebt.png";
        firstPlayerImg.className = 'gameCharacterImg imageFlip';
        break;
        case "Amy":
        firstPlayerImg.src = "./Assets/Amee.png";
        firstPlayerImg.className = 'gameCharacterImg';
        break;
        case "YoungSheldon":
        firstPlayerImg.src = "./Assets/YUNGSHELDON.png";
        firstPlayerImg.className = 'gameCharacterImg';
        break;
    }
    switch(character2){
        case "Sheldon":
        secondPlayerImg.src = "./Assets/Sheldor.png";
        cpuPlayerImg.src = "./Assets/Sheldor.png";
        secondPlayerImg.className = 'gameCharacterImg2';
        cpuPlayerImg.className = 'cpuCharacterImg';
        break;
        case "Leonard":
        secondPlayerImg.src = "./Assets/Leonurd.png";
        cpuPlayerImg.src = "./Assets/Leonurd.png";
        secondPlayerImg.className = 'gameCharacterImg2 imageFlip';
        cpuPlayerImg.className = 'cpuCharacterImg imageFlip';
        break;
        case "Penny":
        secondPlayerImg.src = "./Assets/Peni.png";
        cpuPlayerImg.src = "./Assets/Peni.png";
        secondPlayerImg.className = 'gameCharacterImg2 imageFlip';
        cpuPlayerImg.className = 'cpuCharacterImg imageFlip';
        break;
        case "Raj":
        secondPlayerImg.src = "./Assets/Raj.png";
        cpuPlayerImg.src = "./Assets/Raj.png";
        secondPlayerImg.className = 'gameCharacterImg2';
        cpuPlayerImg.className = 'cpuCharacterImg';
        break;
        case "Howard":
        secondPlayerImg.src = "./Assets/Howerd.png";
        cpuPlayerImg.src = "./Assets/Howerd.png";
        secondPlayerImg.className = 'gameCharacterImg2';
        cpuPlayerImg.className = 'cpuCharacterImg';
        break;
        case "Bernadette":
        secondPlayerImg.src = "./Assets/Burnadebt.png";
        cpuPlayerImg.src = "./Assets/Burnadebt.png";
        secondPlayerImg.className = 'gameCharacterImg2';
        cpuPlayerImg.className = 'cpuCharacterImg';
        break;
        case "Amy":
        secondPlayerImg.src = "./Assets/Amee.png";
        cpuPlayerImg.src = "./Assets/Amee.png";
        secondPlayerImg.className = 'gameCharacterImg2 imageFlip';
        cpuPlayerImg.className = 'cpuCharacterImg imageFlip';
        break;
        case "YoungSheldon":
        secondPlayerImg.src = "./Assets/YUNGSHELDON.png";
        cpuPlayerImg.src = "./Assets/YUNGSHELDON.png";
        secondPlayerImg.className = 'gameCharacterImg2 imageFlip';
        cpuPlayerImg.className = 'cpuCharacterImg imageFlip';
        break;
    }
})

//Select Screen Buttons

bestOf1.addEventListener("click", function(){
    winScore = 1;
})

bestOf5.addEventListener("click", function(){
    winScore = 3;
})

bestOf7.addEventListener("click", function(){
    winScore = 4;
})

cpu.addEventListener("click", function(){
    secondPlayer = "CPU";
})

human.addEventListener("click", function(){
    secondPlayer = "Human";
})



one1.addEventListener("click", function(){
    character1 = "Sheldon";
    if (character2 != ""){
        championChoice.className = "selectChampion mt-2";
        beginText.className = "selectHeader heartbeat";
    }
})

one2.addEventListener("click", function(){
    character1 = "Leonard";
    if (character2 != ""){
        championChoice.className = "selectChampion mt-2";
        beginText.className = "selectHeader heartbeat";
    }
})

one3.addEventListener("click", function(){
    character1 = "Penny";
    if (character2 != ""){
        championChoice.className = "selectChampion mt-2";
        beginText.className = "selectHeader heartbeat";
    }
})

one4.addEventListener("click", function(){
    character1 = "Raj";
    if (character2 != ""){
        championChoice.className = "selectChampion mt-2";
        beginText.className = "selectHeader heartbeat";
    }
})

one5.addEventListener("click", function(){
    character1 = "Howard";
    if (character2 != ""){
        championChoice.className = "selectChampion mt-2";
        beginText.className = "selectHeader heartbeat";
    }
})

one6.addEventListener("click", function(){
    character1 = "Bernadette";
    if (character2 != ""){
        championChoice.className = "selectChampion mt-2";
        beginText.className = "selectHeader heartbeat";
    }
})

one7.addEventListener("click", function(){
    character1 = "Amy";
    if (character2 != ""){
        championChoice.className = "selectChampion mt-2";
        beginText.className = "selectHeader heartbeat";
    }
})

one8.addEventListener("click", function(){
    character1 = "YoungSheldon";
    if (character2 != ""){
        championChoice.className = "selectChampion mt-2";
        beginText.className = "selectHeader heartbeat";
    }
})


two1.addEventListener("click", function(){
    character2 = "Sheldon";
    if (character1 != ""){
        championChoice.className = "selectChampion mt-2";
        beginText.className = "selectHeader heartbeat";
    }
})

two2.addEventListener("click", function(){
    character2 = "Leonard";
    if (character1 != ""){
        championChoice.className = "selectChampion mt-2";
        beginText.className = "selectHeader heartbeat";
    }
})

two3.addEventListener("click", function(){
    character2 = "Penny";
    if (character1 != ""){
        championChoice.className = "selectChampion mt-2";
        beginText.className = "selectHeader heartbeat";
    }
})

two4.addEventListener("click", function(){
    character2 = "Raj";
    if (character1 != ""){
        championChoice.className = "selectChampion mt-2";
        beginText.className = "selectHeader heartbeat";
    }
})

two5.addEventListener("click", function(){
    character2 = "Howard";
    if (character1 != ""){
        championChoice.className = "selectChampion mt-2";
        beginText.className = "selectHeader heartbeat";
    }
})

two6.addEventListener("click", function(){
    character2 = "Bernadette";
    if (character1 != ""){
        championChoice.className = "selectChampion mt-2";
        beginText.className = "selectHeader heartbeat";
    }
})

two7.addEventListener("click", function(){
    character2 = "Amy";
    if (character1 != ""){
        championChoice.className = "selectChampion mt-2";
        beginText.className = "selectHeader heartbeat";
    }
})

two8.addEventListener("click", function(){
    character2 = "YoungSheldon";
    if (character1 != ""){
        championChoice.className = "selectChampion mt-2";
        beginText.className = "selectHeader heartbeat";
    }
})

// CPU Game

function urlCall(url) {
    fetch(url).then(
        response => response.text()
    ).then(
        data => {
            choice2 = data;
            console.log(data);
        }
    )
}

function cpuAPI(){
    cpuAPIUrl = "https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption";
    urlCall(cpuAPIUrl);
}

// 2 Player Game Buttons

Rock1.addEventListener("click", function(){
    choice1 = "Rock";
    gameBlocker.className = "gameBlocker";
})
Paper1.addEventListener("click", function(){
    choice1 = "Paper";
    gameBlocker.className = "gameBlocker";
})
Scissors1.addEventListener("click", function(){
    choice1 = "Scissors";
    gameBlocker.className = "gameBlocker";
})
Lizard1.addEventListener("click", function(){
    choice1 = "Lizard";
    gameBlocker.className = "gameBlocker";
})
Spock1.addEventListener("click", function(){
    choice1 = "Spock";
    gameBlocker.className = "gameBlocker";
})
Rock2.addEventListener("click", function(){
    choice2 = "Rock";
    gameBlocker2.className = "gameBlocker2";
})
Paper2.addEventListener("click", function(){
    choice2 = "Paper";
    gameBlocker2.className = "gameBlocker2";
})
Scissors2.addEventListener("click", function(){
    choice2 = "Scissors";
    gameBlocker2.className = "gameBlocker2";
})
Lizard2.addEventListener("click", function(){
    choice2 = "Lizard";
    gameBlocker2.className = "gameBlocker2";
})
Spock2.addEventListener("click", function(){
    choice2 = "Spock";
    gameBlocker2.className = "gameBlocker2";
})

submitButton.addEventListener("click", function(){

    if (secondPlayer == "CPU"){
        cpuAPI();
    }

    SelectWinner()
    KeepScore()
    gameBlocker.className = "hide";
    gameBlocker2.className = "hide";

    if (score1 == winScore){
        winner = "Player 1";
        alert(winner + " has won the game! Refresh the page to play again!");
        submitButtonText.textContent = "Player 1 Wins!"
    }
    if (score2 == winScore){
        if (secondPlayer == "Human"){
            winner = "Player 2";
            submitButtonText.textContent = "Player 2 Wins!"
            alert(winner + " has won the game! Refresh the page to play again!");
        }else{ 
            winner = "The Computer"
            alert(winner + " has won the game! Refresh the page to play again!");
            submitButtonText.textContent = "CPU Wins!"
        }
    }


    console.log(score1);
    console.log(score2);
    console.log(winner);

    gameScore1.textContent = score1;
    gameScore2.textContent = score2;
    cpuScore.textContent = score2;
    if (character1 != "Raj"){

        switch(choice1){
            case "Rock": gameChoice.textContent = "✊🏻";
            break;
            
            case "Paper": gameChoice.textContent = "✋🏻";
            break;
            
            case "Scissors": gameChoice.textContent = "✌🏻";
            break;
            
        case "Lizard": gameChoice.textContent = "🤏🏻";
        break;

        case "Spock": gameChoice.textContent = "🖖🏻";
        break;
    }
    }else{
        switch(choice1){
            case "Rock": gameChoice.textContent = "✊🏾";
            break;
            
            case "Paper": gameChoice.textContent = "✋🏾";
            break;
            
            case "Scissors": gameChoice.textContent = "✌🏾";
            break;
            
        case "Lizard": gameChoice.textContent = "🤏🏾";
        break;

        case "Spock": gameChoice.textContent = "🖖🏾";
        break;
    }
    }

    if (character2 != "Raj"){
    switch(choice2){
        case "Rock": 
        gameChoice2.textContent = "✊🏻";
        cpuChoice.textContent = "✊🏻";
        break;

        case "Paper": 
        gameChoice2.textContent = "✋🏻";
        cpuChoice.textContent = "✋🏻";
        break;

        case "Scissors": 
        gameChoice2.textContent = "✌🏻";
        cpuChoice.textContent = "✌🏻";
        break;

        case "Lizard": 
        gameChoice2.textContent = "🤏🏻";
        cpuChoice.textContent = "🤏🏻";
        break;

        case "Spock": 
        gameChoice2.textContent = "🖖🏻";
        cpuChoice.textContent = "🖖🏻";
        break;
    }
}else{
    switch(choice2){
        case "Rock": 
        gameChoice2.textContent = "✊🏾";
        cpuChoice.textContent = "✊🏾";
        break;
        
        case "Paper": 
        gameChoice2.textContent = "✋🏾";
        cpuChoice.textContent = "✋🏾";
        break;
        
        case "Scissors": 
        gameChoice2.textContent = "✌🏾";
        cpuChoice.textContent = "✌🏾";
        break;
        
    case "Lizard": 
    gameChoice2.textContent = "🤏🏾";
    cpuChoice.textContent = "🤏🏾";
    break;

    case "Spock": 
    gameChoice2.textContent = "🖖🏾";
    cpuChoice.textContent = "🖖🏾";
    break;
}
}
})

function KeepScore(){
    switch (winner){

        case "Player1": score1++;
        // gameScore1.className = "gameScore";
        submitButtonText.textContent = "Player 1 point"
        // gameScore1.className = "gameScore zoomer";
        break;
        
        case "Player2": score2++;
        if (secondPlayer == "CPU"){
            // cpuScore.className = "cpuScore";
            submitButtonText.textContent = "CPU's point"
        //     cpuScore.className = "cpuScore zoomer";
        }
        if (secondPlayer == "Human"){
            // gameScore2.className = "gameScore2";
            submitButtonText.textContent = "Player 2 point"
        //     gameScore2.className = "gameScore2 zoomer";
        }
        break;

        case "Tie":
        break;
    }
}


function SelectWinner(){

if (choice1 == "Rock")
{
    switch (choice2){
        
        case "Rock": winner = "Tie";
        break;

        case "Paper": winner = "Player2";
        break;
        
        case "Scissors": winner = "Player1";
        break;
        
        case "Lizard": winner = "Player1";
        break;
        
        case "Spock": winner = "Player2";
        break;
        
        default:
        break;
    }
}
if (choice1 == "Paper")
{
    switch (choice2){
        
        case "Rock": winner = "Player1";
        break;

        case "Paper": winner = "Tie";
        break;
        
        case "Scissors": winner = "Player2";
        break;
        
        case "Lizard": winner = "Player2";
        break;
        
        case "Spock": winner = "Player1";
        break;

        default:
        break;
    }
}

if (choice1 == "Scissors")
{
    switch (choice2){
        
        case "Rock": winner = "Player2";
        break;

        case "Paper": winner = "Player1";
        break;
        
        case "Scissors": winner = "Tie";
        break;
        
        case "Lizard": winner = "Player1";
        break;
        
        case "Spock": winner = "Player2";
        break;

        default:
        break;
    }
}

if (choice1 == "Lizard")
{
    switch (choice2){
        
        case "Rock": winner = "Player2";
        break;
        
        case "Paper": winner = "Player1";
        break;
        
        case "Scissors": winner = "Player2";
        break;
        
        case "Lizard": winner = "Tie";
        break;
        
        case "Spock": winner = "Player1";
        break;

        default:
            break;
        }
    }
    
    if (choice1 == "Spock")
    {
        switch (choice2){
            
            case "Rock": winner = "Player1";
            break;
            
            case "Paper": winner = "Player2";
            break;
            
            case "Scissors": winner = "Player1";
            break;
            
            case "Lizard": winner = "Player2";
            break;
        
            case "Spock": winner = "Tie";
        break;
        
        default:
            break;
        }
    }
}