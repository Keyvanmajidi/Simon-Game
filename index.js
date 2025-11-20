var level = 0;
var gamePattern = [];
var userPattern = [];
var started = false;
var buttonColors = ["green", "red", "yellow", "blue"];

// ---------------- Detecting keydown & Initializing the game --------------------- 

document.addEventListener("keydown" , function(event){
    if (!started) {
        
        started = true;        
        level = 0;            
        gamePattern = [];   
        nextSequence();         
    }    
});
// --------------------------- Detecting touch -------------------------------
document.addEventListener("touchstart", function() {
    if (!started) {
        started = true;        
        level = 0;            
        gamePattern = [];   
        nextSequence();         
    }
});
// --------------------------- Going next step -------------------------------
function nextSequence () {
    level++;
    document.getElementById("level-title").textContent = "Level " + level;
    userPattern = [];
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    boxAnimation(randomChosenColor);
    makeSound(randomChosenColor);

}
// --------------------- Detecting clicking ------------------------
for (var i = 0 ; i < document.querySelectorAll(".btn").length ; i++) {

    document.querySelectorAll(".btn")[i].addEventListener("click" , function(){

        var userChosenColor = this.id;
        userPattern.push(userChosenColor);
        makeSound(userChosenColor);
        checkAnswer(userPattern.length - 1);
        boxAnimation(userChosenColor);
    })
}
// ------------------------ Checking the answer -------------------------
function checkAnswer (currentIndex) {
    if (userPattern[currentIndex] === gamePattern[currentIndex]){

        if (userPattern.length === gamePattern.length){
            setTimeout (function(){
                nextSequence();
            },1000);
        }
    } else {
        makeSound("wrong");
        backGroundAnimation("background");
        document.getElementById("level-title").textContent = "Game Over, Press Any Key to Restart";
        startOver();
    }
}
// -------------------------------- Restart the game -----------------------
function startOver () {
    level = 0;
    gamePattern = [];
    userPattern = [];
    started = false;
}

// ------------------------------Playing proper sounds ----------------------
function makeSound(button) {

    switch(button) {
        case "green":
            var soundGreen = new Audio ("./green.mp3");
            soundGreen.play();
            break;

        case "red":
            var soundRed = new Audio ("./red.mp3");
            soundRed.play();
            break;
        
        case "yellow":
            var soundYellow = new Audio ("./yellow.mp3");
            soundYellow.play();
            break;

        case "blue":
            var soundBlue = new Audio ("./blue.mp3");
            soundBlue.play();
            break;
        
        default:
            var soundWrong = new Audio ("./wrong.mp3");
            soundWrong.play();
        break;
    }

}

function boxAnimation(currentBox){
    var activeBox = document.getElementById(currentBox);
    activeBox.classList.add("pressed");
    setTimeout ( function(){
        activeBox.classList.remove("pressed");

    },100)
}

function backGroundAnimation (id) {
    var bg = document.getElementById(id);
    bg.classList.add("bg-flash");
    setTimeout ( function(){
        bg.classList.remove("bg-flash");
    },100)
}


    
