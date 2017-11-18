
var map = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2 ],
    [0, 9, 10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,0 ],
    [0, 10,1, 0, 0, 0, 0, 0, 6, 10,5, 10,8, 0, 0, 0, 0, 0, 2, 10,0 ],
    [0, 10,0, 10,10,10,10,10,10,10,0, 10,10,10,10,10,10,10,0, 10,0 ],
    [0, 10,0, 11,8, 0, 0, 0, 6, 10,0, 10,8, 0, 0, 0, 6, 11,0, 10,0 ],
    [0, 10,0, 10,10,10,10,10,10,10,10, 10,10,10,10,10,10,10,0, 10,0 ],
    [0, 10,4, 0, 0, 0, 0, 0, 6, 10,0, 10,8, 0, 0, 0, 0, 0, 3, 10,0 ],
    [0, 10,10,10,10,10,10,10,10,10,0, 10,10,10,10,10,10,10,10,10,0 ],
    [0, 10,1, 0, 0, 0, 0, 0, 6, 10,0, 10,8, 0, 0, 0, 0, 0, 2, 10,0 ],
    [0, 10,0, 10,10,10,10,10,10,10,0, 10,10,10,10,10,10,10,0, 10,0 ],
    [0, 10,0, 11,8, 0, 0, 0, 6, 10,0, 10,8, 0, 0, 0, 6, 11,0, 10,0 ],
    [0, 10,0, 10,10,10,10,10,10,10,10, 10,10,10,10,10,10,10,0, 10,0 ],
    [0, 10,4, 0, 0, 0, 0, 0, 6, 10,7, 10,8, 0, 0, 0, 0, 0, 3, 10,0 ],
    [0, 11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,0 ],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3 ],
    [0, 11,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,0 ],
    [0, 10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,0 ],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3 ]

]
var car = {
    x: 1,
    y: 1
}
var score = 0 ;


var police = {
    x: 19,
    y: 13
}


function displayCar(){
    document.getElementById('car').style.left = car.x*19+"px";
    document.getElementById('car').style.top = car.y*20+"px";
}

function displayPolice(){
    document.getElementById('police').style.left = police.x*20+"px";
    document.getElementById('police').style.top = police.y*20+"px";
}


function displayScore(){
    document.getElementById('score').innerHTML = score;
}
function displayMap(){
    var output = '';
    for(var i=0; i<map.length; i++){
        output += "\n<div class='row'>\n"
        for(var j=0; j<map[i].length; j++){
            if(map[i][j] == 0)
                output += "<div class='brick'></div>";
            else if(map[i][j] == 1)
                output += "<div class='brick lefttop'></div>";
            else if(map[i][j] == 2)
                output += "<div class='brick righttop'></div>";
            else if(map[i][j] == 3)
                output += "<div class='brick rightbottom'></div>";
            else if(map[i][j] == 4)
                output += "<div class='brick leftbottom'></div>";
            else if(map[i][j] == 5)
                output += "<div class='brick top'></div>";
            else if(map[i][j] == 6)
                output += "<div class='brick right'></div>";
            else if(map[i][j] == 7)
                output += "<div class='brick bottom'></div>";
            else if(map[i][j] == 8)
                output += "<div class='brick left'></div>";
            else if(map[i][j] == 9)
                output += "<div class='empty'></div>";
            else if(map[i][j] == 10)
                output += "<div class='road'></div>";
            else if(map[i][j] == 11)
                output += "<div class='fuel'></div>";
        }
        output += "\n</div>"
    }
    $('#map').html(output);
}
document.onkeydown = function(e) {
    if (e.keyCode == 37 && (map[car.y][car.x - 1] == 9 || map[car.y][car.x - 1] == 10 || map[car.y][car.x - 1] == 11)) {
        $('#car').removeClass('right');
        $('#car').removeClass('up');
        $('#car').removeClass('down');
        $('#car').addClass('left');
        car.x--;
    }
    else if (e.keyCode == 39 && (map[car.y][car.x + 1] == 9 || map[car.y][car.x + 1] == 10 || map[car.y][car.x + 1] == 11)) {
        $('#car').removeClass('left');
        $('#car').removeClass('up');
        $('#car').removeClass('down');
        $('#car').addClass('right');
        car.x++;
    }
    else if (e.keyCode == 38 && (map[car.y - 1][car.x] == 9 || map[car.y - 1][car.x] == 10 || map[car.y - 1][car.x] == 11)) {
        $('#car').removeClass('right');
        $('#car').removeClass('up');
        $('#car').removeClass('left');
        $('#car').addClass('down');
        car.y--;
    }
    else if (e.keyCode == 40 && (map[car.y + 1][car.x] == 9 || map[car.y + 1][car.x] == 10 || map[car.y + 1][car.x] == 11)) {
        $('#car').removeClass('right');
        $('#car').removeClass('left');
        $('#car').removeClass('down');
        $('#car').addClass('up');
        car.y++;
    }
    if(map[car.y][car.x] == 11){
        map[car.y][car.x] = 9;
        score+=50;
        displayMap();
        displayScore();
    }
    displayCar()
}


function getRandom() {
    var random = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
    return random;
}

var currentDirection = 1;

function PoliceMove() {
    var newDirection = getRandom();


    if (

        ((currentDirection == 1 || currentDirection == 2) && (map[police.y + 1][police.x] == 9 || map[police.y + 1][police.x] == 10 || map[police.y + 1][police.x] == 11 || map[police.y + 1][police.x] == 12 || map[police.y - 1][police.x] == 9 || map[police.y - 1][police.x] == 10 || map[police.y - 1][police.x] == 11 || map[police.y - 1][police.x] == 12))
        ||

        ((currentDirection == 3 || currentDirection == 4) && (map[police.y][police.x + 1] == 9 || map[police.y][police.x + 1] == 10 || map[police.y][police.x + 1] == 11 || map[police.y][police.x + 1] == 12 || map[police.y][police.x - 1] == 9 || map[police.y][police.x - 1] == 10 || map[police.y][police.x - 1] == 11 || map[police.y][police.x - 1] == 12))
    ) {

        while (newDirection == currentDirection) {
            newDirection = getRandom();
        }

        currentDirection = newDirection;
    }

    if (currentDirection == 1 && (map[police.y][police.x - 1] == 9 || map[police.y][police.x - 1] == 10 || map[police.y][police.x - 1] == 11 || map[police.y][police.x - 1] == 12)) {
        police.x--;

    } else if (currentDirection == 2 && (map[police.y][police.x + 1] == 9 || map[police.y][police.x + 1] == 10 || map[police.y][police.x + 1] == 11 || map[police.y][police.x + 1] == 12)) {

        police.x++;
    } else if (currentDirection == 3 && (map[police.y - 1][police.x] == 9 || map[police.y - 1][police.x] == 10 || map[police.y - 1][police.x] == 11 || map[police.y - 1][police.x] == 12)) {

        police.y--;
    } else if (currentDirection == 4 && (map[police.y + 1][police.x] == 9 || map[police.y + 1][police.x] == 10 || map[police.y + 1][police.x] == 11 || map[police.y + 1][police.x] == 12)) {

        police.y++;
    }

    displayPolice();

}

setInterval(PoliceMove, 500)

$(document).ready(function(){
    displayMap();
    displayCar();
    displayScore();
})