// Main Game Variables

//Player Character Images
let firstPlayerImg = document.getElementById("firstPlayerImg");
let secondPlayerImg = document.getElementById("secondPlayerImg");

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

//
let character1 = "";
let character2 = "";
let choice1 = "";
let choice2 = "";
let winner = "";
let score1 = 0;
let score2 = 0;
let secondPlayer = "CPU";
let bestOf = 5;


// beginButton.addEventListener("click", function(){
//     getHtml()
// })


// function getHtml(){
//     fetch("./data.html").then(
//         response => response.text()
//     ).then(
//         data => injectHere.innerHTML = data
//         //This will keep creating new cards with one click
//         //data => injectHere.innerHTML += data
//     )
// }




//Select Screen Buttons

// one1.addEventListener("click", function(){
//     character1 = "Sheldon";
//     console.log(character1);
// })

// one2.addEventListener("click", function(){
//     character1 = "Leonard";
//     console.log(character1);
// })

// one3.addEventListener("click", function(){
//     character1 = "Penny";
//     console.log(character1);
// })

// one4.addEventListener("click", function(){
//     character1 = "Raj";
//     console.log(character1);
// })

// one5.addEventListener("click", function(){
//     character1 = "Howard";
//     console.log(character1);
// })

// one6.addEventListener("click", function(){
//     character1 = "Bernadette";
//     console.log(character1);
// })

// one7.addEventListener("click", function(){
//     character1 = "Amy";
//     console.log(character1);
// })

// one8.addEventListener("click", function(){
//     character1 = "YoungSheldon";
//     console.log(character1);
// })


// two1.addEventListener("click", function(){
//     character2 = "Sheldon";
//     console.log(character2);
// })

// two2.addEventListener("click", function(){
//     character2 = "Leonard";
//     console.log(character2);
// })

// two3.addEventListener("click", function(){
//     character2 = "Penny";
//     console.log(character2);
// })

// two4.addEventListener("click", function(){
//     character2 = "Raj";
//     console.log(character2);
// })

// two5.addEventListener("click", function(){
//     character2 = "Howard";
//     console.log(character2);
// })

// two6.addEventListener("click", function(){
//     character2 = "Bernadette";
//     console.log(character2);
// })

// two7.addEventListener("click", function(){
//     character2 = "Amy";
//     console.log(character2);
// })

// two8.addEventListener("click", function(){
//     character2 = "YoungSheldon";
//     console.log(character2);
// })

// Main Game Buttons

function MoveChoice(){
Rock1.addEventListener("click", function(){
    choice1 = "Rock";
})
Paper1.addEventListener("click", function(){
    choice1 = "Paper";
})
Scissors1.addEventListener("click", function(){
    choice1 = "Scissors";
})
Lizard1.addEventListener("click", function(){
    choice1 = "Lizard";
})
Spock1.addEventListener("click", function(){
    choice1 = "Spock";
})
Rock2.addEventListener("click", function(){
    choice2 = "Rock";
})
Paper2.addEventListener("click", function(){
    choice2 = "Paper";
})
Scissors2.addEventListener("click", function(){
    choice2 = "Scissors";
})
Lizard2.addEventListener("click", function(){
    choice2 = "Lizard";
})
Spock2.addEventListener("click", function(){
    choice2 = "Spock";
})

submitButton.addEventListener("click", function(){
    SelectWinner()
    KeepScore()
    console.log(score1);
    console.log(score2);
    console.log(winner);
    
})
}

function KeepScore(){
    switch (winner){

        case "Player1": score1++;
        break;
        
        case "Player2": score2++;
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

export {MoveChoice, SelectWinner, KeepScore}