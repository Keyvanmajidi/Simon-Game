let level = 1;
let gameStarted = false;


document.addEventListener("keydown" , function() {

    if (!gameStarted){
        startGame();
    }
});

function startGame() {
    gameStarted = true;
    document.getElementById("level-title").textContent = "Level " + level;
    var randNum = Math.floor( Math.random * 4) + 1;

}

for (var i = 0; i < document.querySelectorAll(".btn").length; i++ ) {


    document.querySelectorAll(".btn")[i].addEventListener("click" , function() {

        if (gameStarted){
            gameOver();
        }
        var buttonId = this.id;
        makeSound(buttonId);
        gameOver(buttonId);
    } );

function gameOver() {
    document.getElementById("level-title").textContent = "Game Over, Press Any Key to Restart";
    var soundGameOver = new Audio ("./wrong.mp3");
    soundGameOver.play();

}

    // function makeSound(button) {

    //     switch(button) {
    //         case "green":
    //             var soundGreen = new Audio ("./green.mp3");
    //             soundGreen.play();
    //             break;

    //         case "red":
    //             var soundRed = new Audio ("./red.mp3");
    //             soundRed.play();
    //             break;
            
    //         case "yellow":
    //             var soundYello = new Audio ("./yellow.mp3");
    //             soundYello.play();
    //             break;

    //         case "blue":
    //             var soundBlue = new Audio ("./blue.mp3");
    //             soundBlue.play();
    //             break;
            
    //         default: console.log(buttonId);
    //         break;
    //     }

    // }
}

    
