///last thing change css to addclass and fix the clear game board
const points = ['p11', 'p12', 'p13', 'p21', 'p22', 'p23', 'p31', 'p32', 'p33'];
let takenpoints = [0, 0, 0, 0, 0, 0, 0, 0, 0]
const numOfStones = 6;
let blackStones = 3;
let whiteStones = 3;
let isBlackMill = false;
let isWhiteMill = false;
let blackPlayerTurn = true;
let whitePlayerTurn = false;
let endPlaceStone = false;
let isOnMove = false;
let onMoveStone = -1;
let blackScoreText = $("#blackScore");
let whiteScoreText = $("#whiteScore");
let whiteScore =0;
let blackScore =0;
let msgToPlayers = $(".msgToPlayers p");
//console.log(blackScore,whiteScore,msgToPlayers);

const loadPage = function () {
    $(".startGame").removeClass("onload");
//     $(".container").html(`
//     <div class="startGame">
//     <button type="button" class="btnStart">Start Game</button>
// </div>
//     `)
 }
const loadGame = function () {

    $(".startGame").addClass("onload");
    $(".gameboard").removeClass("onload");
}

$("body").onload = loadPage();
$("button").on("click", loadGame);
// loadGame()
const checkWinner = function () {
   // console.log("in check function/ "+takenpoints);
    let Winner = "";
    if (takenpoints[0] == 1 && takenpoints[1] == 1 && takenpoints[2] == 1 ||
        takenpoints[3] == 1 && takenpoints[4] == 1 && takenpoints[5] == 1 ||
        takenpoints[6] == 1 && takenpoints[7] == 1 && takenpoints[8] == 1 ||
        takenpoints[0] == 1 && takenpoints[3] == 1 && takenpoints[6] == 1 ||
        takenpoints[1] == 1 && takenpoints[4] == 1 && takenpoints[7] == 1 ||
        takenpoints[2] == 1 && takenpoints[5] == 1 && takenpoints[8] == 1) {
        Winner = "Black Player Win ^_^";
        isBlackMill=true;
        blackPlayerTurn=true;
        console.log(takenpoints);
        blackScoreText.text(function() {
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
        isWhiteMill=true;
        blackPlayerTurn=false;
        console.log(takenpoints);
        whiteScoreText.text(function(){
            return " "+ ++whiteScore
        });
    }
    //console.log("in check function ending");
    
    return Winner;

}
const printWinner = function(){
   // console.log("in print function");
    let msg = checkWinner();
    //console.log(msg);
    msgToPlayers.text(msg);
    clearGameBoard();
}
const selectStoneToMove = function (e) {
    //console.log("inside move function start /"+ takenpoints)
    let indexOfPoint = points.indexOf(e.currentTarget.id);
    if (takenpoints[indexOfPoint] === 1 && blackPlayerTurn) {
        isOnMove = true;
        onMoveStone = indexOfPoint;
        $(e.target).removeClass("blackStone whiteStone");
        $(e.target).addClass("stonOnMove");
       // $(e.target).css("color","rgba(165, 158, 151, 0.5)");
        //console.log("b");
       // blackPlayerTurn=false;
    }
       else if(takenpoints[indexOfPoint] === 2 && !blackPlayerTurn) {
        isOnMove = true;
        onMoveStone = indexOfPoint;
        $(e.target).removeClass("whiteStone blackStone");
        $(e.target).addClass("stonOnMove");
        //$(e.target).css("color","rgba(165, 158, 151, 0.5)");
        //console.log("w");
        //blackPlayerTurn=true;
    }
    //console.log(onMoveStone);
    //console.log("inside move function end")

        //         if(blackPlayerTurn){
        //            $(e.target).addClass("blackStone");
        //            blackPlayerTurn=false;
        //            whitePlayerTurn=true;
        //            takenpoints[indexOfPoint]=1;
        //            console.log(takenpoints);
        //         }
        //         else{
        //            $(e.target).addClass("whiteStone");
        //            blackPlayerTurn=true;
        //            whitePlayerTurn=false;
        //            takenpoints[indexOfPoint]=1;
        //            console.log(takenpoints);
        //         }

    
}
const selectStoneNewPlace = function (e) {
   // console.log("inside next move function start  /"+takenpoints )
    let indexOfPoint = points.indexOf(e.currentTarget.id);
    // console.log("---------")
    // console.log(onMoveStone)
    // console.log(indexOfPoint)
    // console.log("---------")
    if (takenpoints[indexOfPoint] === 0) {
        if (onMoveStone == 0 && (indexOfPoint == 1 || indexOfPoint == 3)) {
            // console.log("hi")
            // console.log("0");
            setNextMove(e);
        }
        else if (onMoveStone == 1 && (indexOfPoint == 0 || indexOfPoint == 2 || indexOfPoint == 4)) {
            // console.log("1");
            setNextMove(e);
        }
        else if (onMoveStone == 2 && (indexOfPoint == 1 || indexOfPoint == 5)) {
            // console.log("2");
            setNextMove(e);
        }
        else if (onMoveStone == 3 && (indexOfPoint == 0 || indexOfPoint == 4 || indexOfPoint == 6)) {
            // console.log("3");
            setNextMove(e);
        }
        else if (onMoveStone == 4 && (indexOfPoint == 1 || indexOfPoint == 3 || indexOfPoint == 5 || indexOfPoint == 7)) {
            // console.log("4");
            setNextMove(e);
        }
        else if (onMoveStone == 5 && (indexOfPoint == 2 || indexOfPoint == 4 || indexOfPoint == 8)) {
            // console.log("5");
            setNextMove(e);
        }
       else if (onMoveStone == 6 && (indexOfPoint == 3 || indexOfPoint == 7)) {
            // console.log("6");
            setNextMove(e);
        }
        else if (onMoveStone == 7 && (indexOfPoint == 4 || indexOfPoint == 6 || indexOfPoint == 8)) {
            // console.log("7");
            setNextMove(e);
        }
        else if (onMoveStone == 8 && (indexOfPoint == 5 || indexOfPoint == 7)) {
            // console.log("8");
            setNextMove(e);
        }
    }
    // console.log("inside next move function end")
}
const startGameMessage = function () {
    msgToPlayers.text("Game Is On !");
    // console.log("Game Is On !");
}
const placeStones = function (e) {
    
    //console.log("in place stones ");
    let indexOfPoint = points.indexOf(e.currentTarget.id);
    if (blackPlayerTurn) {
        // console.log("in place stones 2222 ");
        if (blackStones != 0) {
            // console.log("in place stones 333333");
            if (takenpoints[indexOfPoint] === 0) {
                // console.log("in place stones444444 ");
                takenpoints[indexOfPoint] = 1;
                if (takenpoints[0] == 1 && takenpoints[1] == 1 && takenpoints[2] == 1 ||
                    takenpoints[3] == 1 && takenpoints[4] == 1 && takenpoints[5] == 1 ||
                    takenpoints[6] == 1 && takenpoints[7] == 1 && takenpoints[8] == 1 ||
                    takenpoints[0] == 1 && takenpoints[3] == 1 && takenpoints[6] == 1 ||
                    takenpoints[1] == 1 && takenpoints[4] == 1 && takenpoints[7] == 1 ||
                    takenpoints[2] == 1 && takenpoints[5] == 1 && takenpoints[8] == 1) {
                    alert("you can not place stone here !")
                    takenpoints[indexOfPoint] = 0;
                    // console.log("in place stones 55555555 ");
                } else {
                    $(e.target).removeClass("normal stonOnMove whiteStone");
                    $(e.target).addClass("blackStone");
                    //$(e.target).css("color","black");
                    // takenpoints[indexOfPoint] = 1;
                    blackStones--;
                    blackPlayerTurn = false;
                    //if (blackStones === 0) {
                        //blackPlayerTurn = false;
                        // console.log("in place stones 666666666 ");
                    //}
                }
            }
        }
    } else {
        // console.log("in place stones w 11111111 ");
        if (whiteStones != 0) {
            // console.log("in place stones w22222222 ");
            if (takenpoints[indexOfPoint] === 0) {
                // console.log("in place stones w333333333 ");
                takenpoints[indexOfPoint] = 2;
                if (takenpoints[0] == 2 && takenpoints[1] == 2 && takenpoints[2] == 2 ||
                    takenpoints[3] == 2 && takenpoints[4] == 2 && takenpoints[5] == 2 ||
                    takenpoints[6] == 2 && takenpoints[7] == 2 && takenpoints[8] == 2 ||
                    takenpoints[0] == 2 && takenpoints[3] == 2 && takenpoints[6] == 2 ||
                    takenpoints[1] == 2 && takenpoints[4] == 2 && takenpoints[7] == 2 ||
                    takenpoints[2] == 2 && takenpoints[5] == 2 && takenpoints[8] == 2) {
                    alert("you can not place stone here !")
                    // console.log("in place stones w4444444 ");
                    takenpoints[indexOfPoint] = 0;
                } else {
                    $(e.target).removeClass("normal stonOnMove blackStone");
                    $(e.target).addClass("whiteStone");
                    //$(e.target).css("color","white");
                    // takenpoints[indexOfPoint] = 2;
                    whiteStones--;
                    blackPlayerTurn = true;
                    // console.log("in place stones w5555555555 ");
                    
                }
            }
        }
    }

    if (blackStones == 0 && whiteStones == 0) {
        endPlaceStone = true;
       // blackPlayerTurn=true;
        return startGameMessage();
    }

}

//document.getElementById("p11").addEventListener("click",addBlack);
function game(e) {
    // console.log(blackPlayerTurn)
    // console.log(e.target);
    // console.log("in click /"+endPlaceStone);

    if (endPlaceStone === false) {
        placeStones(e);
    } 
    else {
        if (isOnMove == false) {
            //console.log("on move")
            selectStoneToMove(e);
        } else {
            //console.log("chose next move")
            selectStoneNewPlace(e)
        }        
    }
}
$(".points-line div").on("click", game)

const clearPreviousPoint = function () {
    // $(".stonOnMove").css("color", "rgb(221, 94, 20)")
     $(".stonOnMove").addClass("normal");
   
}
const setNextMove = function (e) {
    // console.log("in set next move function /"+takenpoints)
    let indexOfPoint = points.indexOf(e.currentTarget.id);
    takenpoints[onMoveStone] = 0;
    isOnMove = false;
    // console.log(blackPlayerTurn);
    $(e.target).removeClass("normal stonOnMove blackStone whiteStone");
    if(blackPlayerTurn){
        $(e.target).addClass("blackStone");
    blackPlayerTurn=false;
    takenpoints[indexOfPoint] = 1;
    }
    else{
        
    $(e.target).addClass("whiteStone");
    blackPlayerTurn=true;
    takenpoints[indexOfPoint] = 2;
}
    clearPreviousPoint();
    printWinner();
}
const clearGameBoard =function(){
     $(".points-line div").off()
     $(".points-line div").on("click", game)
    // console.log("black/"+isBlackMill+"white/"+isWhiteMill)
    if(isBlackMill||isWhiteMill){
        isWhiteMill=false;
        isBlackMill=false;
        endPlaceStone=false;
        blackStones=3;
        whiteStones=3;
        //console.log("endPlaceStone"+endPlaceStone)
       setTimeout(function(){
        //$(".circle").removeClass("blackStone whiteStone stonOnMove");
           $(".circle").addClass("normal");
            
        },800);
       takenpoints=takenpoints.map(x => 0);
    //    console.log("Game board is clear /"+takenpoints);
      
    }
  
}
// $(".points-line div").on("click", function(e){
//     moveStones(e);
// })