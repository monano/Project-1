<!-- heading section -->
# Three Mens Morris Game

This is a two players game that start with each player having 3 stones to place it on the board,
The winner is the first player to align their three pieces on a vertical line or horizontal line.

<!-- unorder list -->
## Technologis Used
* Java Script
* Jquery
* HTML
* CSS

## Game Wireframe and User Stories
<!-- images -->
### Wireframe
![Game Wireframe](images/Game-Wireframe.png)

### User Stories
1. Game start with two players each player have three stones.
2. Players start placing thier stones on the empty game board reciprocally, while trying to make it hard for the othor player to make a mill.
3. First player to place thier stone is the one to start to move any stone belong to thim.
4. Players can move thier stones one step horizontally or vertically.
5. Player must move the stones aiming to make a mill.
6. Player who make mill first win.

## Four Days Of Coding
### Day One
    -HTML/CSS
        * Design the board game, writing the needed HTML elements and CSS classes to be used for the game.
    -Js/Jquery
        * Declaring the needed variables to be used by the functions.
        * Writing the code for the functions: place stone and check winner.
### Day Two
    -HTML/CSS
        * Design the start page that shows when user first open the game site.
    -Js/Jquery
        * Declaring the needed variables to be used by the functions.
        * Writing the code for the functions: select stone and move stone.
### Day Three
    -HTML/CSS
        * Added a section for the players labels that hold their color and scores, and the message section to show which player win.
    -Js/Jquery
        * Added the needed code lines for the players scores and message sections.
### Day Four <last day>
    -HTML/CSS
        * Design How to play button and an instructions page, Added3 the animate classes for the message section on CSS and HTML.
    -Js/Jquery
        * Fixing the reselect a stone problem.
<!-- order list -->
<!-- 
1. JS
2. Jquery
3. Html/Css 
-->


<!-- sperator line -->
<!-- --- -->

## Snippet Of The Code
### Place Stones On Board Function
```js
const placeStones = function (e) {
    /*this function will allow players to place theirs stones on the gameboard
    and will color the circles depending on the turn of player
    and will not allow players to form mill from the start of the game*/
    
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
                            'unallowed move',
                            'you can not place the stone here',
                            'warning'
                          )
                    takenpoints[indexOfPoint] = 0;
                } else {
                    $(e.target).removeClass("normal stonOnMove whiteStone");
                    $(e.target).addClass("blackStone");
                    blackStones--;
                    blackPlayerTurn = false;
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
                            'unallowed move',
                            'you can not place the stone here',
                            'warning'
                          )
                    takenpoints[indexOfPoint] = 0;
                } else {
                    $(e.target).removeClass("normal stonOnMove blackStone");
                    $(e.target).addClass("whiteStone");
                    whiteStones--;
                    blackPlayerTurn = true;}}}}
    if (blackStones == 0 && whiteStones == 0) {
        endPlaceStone = true;
        return round();
    }

}
```

## Challenges 
* Figuring out how to code the functions for the game, especially the move stone function.
* Fixing the reselect problem.
* Making the game a multi round game.

## Features and Improvements to be in Three Mens Morris Game V2 
* Adding a multi size gameboard with more stones to play with.
* Adding a multi shape gameboard.
* Adding an images for the stone instead of colors.
* Put the name of the players on the player label section.
* Make the player choose their stones icone.
* Adding more animation in the game.
* Adding interactive sounds to the game.



## Links
<!-- links -->
[Three Mens Morris game](https://en.wikipedia.org/wiki/Three_men%27s_morris)

[animate css code](https://tobiasahlin.com/moving-letters/#6)

[sweet alert](https://sweetalert2.github.io/)