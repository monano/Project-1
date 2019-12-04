//declaring the variables will be needed for this game
const points = ['p11', 'p12', 'p13', 'p21', 'p22', 'p23', 'p31', 'p32', 'p33']; // the id for the circles divs
let takenpoints = [0, 0, 0, 0, 0, 0, 0, 0, 0] // to get the colored circles (black=1, white=2, empty=0 )
let blackStones = 3; //number of stones to be placed on the gameboard
let whiteStones = 3; //number of stones to be placed on the gameboard
let isBlackMill = false; //the black player winning state
let isWhiteMill = false; //the white player winning state
let blackPlayerTurn = true; //the players turn (true = black turn to play, false = white turn to play)
let endPlaceStone = false; //state of placing stones on gameboard
let isOnMove = false; // state of a stone
let onMoveStone = -1; // index of the stone on move
let whiteScore = 0;
let blackScore = 0;
let blackScoreText = $("#blackScore");
let whiteScoreText = $("#whiteScore");
let msgToPlayers = $(".msg");
let rounds = 1;


const loadPage = function () { //when page load this function will be called 
    $(".startGame").removeClass("onload"); // display the start page 
}
const howPage = function () { // display the Instructions page and hide the start page
    $(".startGame").addClass("onload");
    $(".gameboard").addClass("onload");
    $(".HowToPlayPage").removeClass("onload");
}
const loadGame = function () { // display the gameboard page and hide the start page
    $(".startGame").addClass("onload");
    $(".HowToPlayPage").addClass("onload");
    $(".gameboard").removeClass("onload");
    msgToPlayers.text("Game Is On !");
}
const backToMainPage = function () { //display the Start Page page and hide the Instructions Page
    $(".gameboard").addClass("onload");
    $(".HowToPlayPage").addClass("onload");
    $(".startGame").removeClass("onload");
}
$("body").onload = loadPage();
$("button").on("click", loadGame);
$(".btnHowToPlay").on("click", howPage);
$(".btnBack").on("click", backToMainPage);

const checkWinner = function () {
    /* 
    this function will check is there a black mill or white mill and return the winner 
    and increase the winner score and set the turn to playe to the winner
    */
    let Winner = "";
    if (takenpoints[0] == 1 && takenpoints[1] == 1 && takenpoints[2] == 1 ||
        takenpoints[3] == 1 && takenpoints[4] == 1 && takenpoints[5] == 1 ||
        takenpoints[6] == 1 && takenpoints[7] == 1 && takenpoints[8] == 1 ||
        takenpoints[0] == 1 && takenpoints[3] == 1 && takenpoints[6] == 1 ||
        takenpoints[1] == 1 && takenpoints[4] == 1 && takenpoints[7] == 1 ||
        takenpoints[2] == 1 && takenpoints[5] == 1 && takenpoints[8] == 1) {
        Winner = "Black Player Win ^_^";
        isBlackMill = true;
        blackPlayerTurn = true;
        blackScoreText.text(function () { // show score on the player lable div 
            rounds++;
            return " " + ++blackScore;
        });
    }
    if (takenpoints[0] == 2 && takenpoints[1] == 2 && takenpoints[2] == 2 ||
        takenpoints[3] == 2 && takenpoints[4] == 2 && takenpoints[5] == 2 ||
        takenpoints[6] == 2 && takenpoints[7] == 2 && takenpoints[8] == 2 ||
        takenpoints[0] == 2 && takenpoints[3] == 2 && takenpoints[6] == 2 ||
        takenpoints[1] == 2 && takenpoints[4] == 2 && takenpoints[7] == 2 ||
        takenpoints[2] == 2 && takenpoints[5] == 2 && takenpoints[8] == 2) {
        Winner = "White Player Win ^_^";
        isWhiteMill = true;
        blackPlayerTurn = false;
        whiteScoreText.text(function () { // show score on the player lable div 
            rounds++;
            return " " + ++whiteScore
        });
    }
    return Winner;
}
const printWinner = function () { //this function will show the winning msg on the msg div
    let msg = checkWinner();
    msgToPlayers.text(msg);
    clearGameBoard();
}
const selectStoneToMove = function (e) { // this function will allow the user to select a stone to move 
    let indexOfPoint = points.indexOf(e.currentTarget.id); //take the div id of the stone to move
    if (takenpoints[indexOfPoint] === 1 && blackPlayerTurn) { //check is the circle clicked is black and is the black player turn then change the circle color to gray
        isOnMove = true;
        onMoveStone = indexOfPoint;
        $(e.target).removeClass("blackStone whiteStone");
        $(e.target).addClass("stonOnMove");
        // $(e.target).css("color","rgba(165, 158, 151, 0.5)");
        //console.log("b");
        // blackPlayerTurn=false;
    } else if (takenpoints[indexOfPoint] === 2 && !blackPlayerTurn) { //check is the circle clicked is white and is the white player turn then change the circle color to gray
        isOnMove = true;
        onMoveStone = indexOfPoint;
        $(e.target).removeClass("whiteStone blackStone");
        $(e.target).addClass("stonOnMove");
        //$(e.target).css("color","rgba(165, 158, 151, 0.5)");
        //console.log("w");
        //blackPlayerTurn=true;
    }

}
const selectStoneNewPlace = function (e) {
    /* 
    this function will allow the user to select a new plase for the stone and 
    will not allow the player to move the stone diagonally and will call the setNextMove function
    */
    let indexOfPoint = points.indexOf(e.currentTarget.id);
    if (takenpoints[indexOfPoint] === 0) {
        if (onMoveStone == 0 && (indexOfPoint == 1 || indexOfPoint == 3)) {
            setNextMove(e, true);
        } else if (onMoveStone == 1 && (indexOfPoint == 0 || indexOfPoint == 2 || indexOfPoint == 4)) {
            setNextMove(e, true);
        } else if (onMoveStone == 2 && (indexOfPoint == 1 || indexOfPoint == 5)) {
            setNextMove(e, true);
        } else if (onMoveStone == 3 && (indexOfPoint == 0 || indexOfPoint == 4 || indexOfPoint == 6)) {
            setNextMove(e, true);
        } else if (onMoveStone == 4 && (indexOfPoint == 1 || indexOfPoint == 3 || indexOfPoint == 5 || indexOfPoint == 7)) {
            setNextMove(e, true);
        } else if (onMoveStone == 5 && (indexOfPoint == 2 || indexOfPoint == 4 || indexOfPoint == 8)) {
            setNextMove(e, true);
        } else if (onMoveStone == 6 && (indexOfPoint == 3 || indexOfPoint == 7)) {
            setNextMove(e, true);
        } else if (onMoveStone == 7 && (indexOfPoint == 4 || indexOfPoint == 6 || indexOfPoint == 8)) {
            setNextMove(e, true);
        } else if (onMoveStone == 8 && (indexOfPoint == 5 || indexOfPoint == 7)) {
            setNextMove(e), true;
        } else {
            setNextMove(e, false);
        }
    }
}
// const startGameMessage = function () { //this function will show the a msg on the msg div
//     msgToPlayers.text("Game Is On !");
// }
const placeStones = function (e) {
    /*
    this function will allow players to place theirs stones on the gameboard
    and will color the circles depending on the turn of player
    and will not allow players to form mill from the start of the game
    */
    let indexOfPoint = points.indexOf(e.currentTarget.id);
    if (blackPlayerTurn) {
        if (blackStones != 0) {
            if (takenpoints[indexOfPoint] === 0) {
                takenpoints[indexOfPoint] = 1;
                if (takenpoints[0] == 1 && takenpoints[1] == 1 && takenpoints[2] == 1 ||
                    takenpoints[3] == 1 && takenpoints[4] == 1 && takenpoints[5] == 1 ||
                    takenpoints[6] == 1 && takenpoints[7] == 1 && takenpoints[8] == 1 ||
                    takenpoints[0] == 1 && takenpoints[3] == 1 && takenpoints[6] == 1 ||
                    takenpoints[1] == 1 && takenpoints[4] == 1 && takenpoints[7] == 1 ||
                    takenpoints[2] == 1 && takenpoints[5] == 1 && takenpoints[8] == 1) {
                    Swal.fire(
                        "you can't place the stone here",
                        '',
                        'warning'
                    )
                    //alert("you can not place stone here !")
                    takenpoints[indexOfPoint] = 0;
                } else {
                    $(e.target).removeClass("normal stonOnMove whiteStone");
                    $(e.target).addClass("blackStone");
                    //$(e.target).css("color","black");
                    // takenpoints[indexOfPoint] = 1;
                    blackStones--;
                    blackPlayerTurn = false;
                    //if (blackStones === 0) {
                    //blackPlayerTurn = false;
                    //}
                }
            }
        }
    } else {
        if (whiteStones != 0) {
            if (takenpoints[indexOfPoint] === 0) {
                takenpoints[indexOfPoint] = 2;
                if (takenpoints[0] == 2 && takenpoints[1] == 2 && takenpoints[2] == 2 ||
                    takenpoints[3] == 2 && takenpoints[4] == 2 && takenpoints[5] == 2 ||
                    takenpoints[6] == 2 && takenpoints[7] == 2 && takenpoints[8] == 2 ||
                    takenpoints[0] == 2 && takenpoints[3] == 2 && takenpoints[6] == 2 ||
                    takenpoints[1] == 2 && takenpoints[4] == 2 && takenpoints[7] == 2 ||
                    takenpoints[2] == 2 && takenpoints[5] == 2 && takenpoints[8] == 2) {
                    Swal.fire(
                        "you can't place the stone here",
                        '',
                        'warning'
                    )
                    //alert("you can not place stone here !")
                    takenpoints[indexOfPoint] = 0;
                } else {
                    $(e.target).removeClass("normal stonOnMove blackStone");
                    $(e.target).addClass("whiteStone");
                    //$(e.target).css("color","white");
                    // takenpoints[indexOfPoint] = 2;
                    whiteStones--;
                    blackPlayerTurn = true;

                }
            }
        }
    }

    if (blackStones == 0 && whiteStones == 0) {
        endPlaceStone = true;
        // blackPlayerTurn=true;
        return round();
    }

}

function game(e) { //this function will be called when players click on circles and 
    //it calls all function needed for playing depending on the conditions
    if (endPlaceStone === false) {
        placeStones(e);
    } else {
        if (isOnMove == false) {
            selectStoneToMove(e);
        } else {
            selectStoneNewPlace(e)
        }
    }
}

$(".points-line div").on("click", game)

const clearPreviousPoint = function () { //this function will change the circle color to normal after the player move the stone from it
    $(".stonOnMove").addClass("normal");
}
const setNextMove = function (e, isallowed) { // this function will be called in selectStoneNewPlace function to change the color of circle 
    // to the color of player stone that move to its new place and will call clearPreviousPoint function
    if (!isallowed) {
        // $(".points-line div").off();
        // $(".points-line div").on("click", game)
        console.log("set back color " + isOnMove)
        $("#" + points[onMoveStone] + " .circle").removeClass("stonOnMove");
        if (takenpoints[onMoveStone] == 1) {
            $("#" + points[onMoveStone] + " .circle").addClass("blackStone");
        } else if (takenpoints[onMoveStone] == 2) {
            $("#" + points[onMoveStone] + " .circle").addClass("whiteStone");
        }
        isOnMove = false;
    } else {
        let indexOfPoint = points.indexOf(e.currentTarget.id);
        takenpoints[onMoveStone] = 0;
        isOnMove = false;
        $(e.target).removeClass("normal stonOnMove blackStone whiteStone");
        if (blackPlayerTurn) {
            $(e.target).addClass("blackStone");
            blackPlayerTurn = false;
            takenpoints[indexOfPoint] = 1;
        } else {
            $(e.target).addClass("whiteStone");
            blackPlayerTurn = true;
            takenpoints[indexOfPoint] = 2;
        }
        clearPreviousPoint();
        printWinner();
    }
}
const clearGameBoard = function () { // this function will clear the gameboard to start a new game when any of the players win
    $(".points-line div").off()
    $(".points-line div").on("click", game)
    if (isBlackMill || isWhiteMill) {
        isWhiteMill = false;
        isBlackMill = false;
        endPlaceStone = false;
        blackStones = 3;
        whiteStones = 3;
        setTimeout(function () {
            //$(".circle").removeClass("blackStone whiteStone stonOnMove");
            $(".circle").addClass("normal");
            round();
        }, 1600);
        takenpoints = takenpoints.map(x => 0);
    }

}
const round = function () {
    msgToPlayers.text("Round " + rounds + " Start");
}

// trying codes
// Wrap every letter in a span
let textWrapper = document.querySelector('.msg .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({
        loop: true
    })
    .add({
        targets: '.msg .letter',
        translateY: ["30px", 0],
        translateZ: 0,
        duration: 950,
        delay: (el, i) => 50 * i
    });