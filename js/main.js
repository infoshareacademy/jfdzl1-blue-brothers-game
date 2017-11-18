var map = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [0, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 0],
    [0, 10, 1, 0, 0, 0, 0, 0, 6, 10, 5, 10, 8, 0, 0, 0, 0, 0, 2, 10, 0],
    [0, 10, 0, 10, 10, 10, 10, 10, 10, 10, 0, 10, 10, 10, 10, 10, 10, 10, 0, 10, 0],
    [0, 10, 0, 11, 8, 0, 0, 0, 6, 10, 0, 10, 8, 0, 0, 0, 6, 11, 0, 10, 0],
    [0, 10, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 10, 0],
    [0, 10, 4, 0, 0, 0, 0, 0, 6, 10, 0, 10, 8, 0, 0, 0, 0, 0, 3, 10, 0],
    [0, 10, 10, 11, 10, 10, 10, 10, 10, 10, 0, 10, 10, 10, 10, 10, 10, 11, 10, 10, 0],
    [0, 10, 1, 0, 0, 0, 0, 0, 6, 10, 0, 10, 8, 0, 0, 0, 0, 0, 2, 10, 0],
    [0, 10, 0, 10, 10, 10, 10, 10, 10, 10, 0, 10, 10, 10, 10, 10, 10, 10, 0, 10, 0],
    [0, 10, 0, 11, 8, 0, 0, 0, 6, 10, 0, 10, 8, 0, 0, 0, 6, 11, 0, 10, 0],
    [0, 10, 0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0, 10, 0],
    [0, 10, 4, 0, 0, 0, 0, 0, 6, 10, 7, 10, 8, 0, 0, 0, 0, 0, 3, 10, 0],
    [0, 11, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 0],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [0, 11, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 0],
    [0, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 11, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3]

]
var car = {
    x: 1,
    y: 1
}
var score = 500;


var police = {
    x: 19,
    y: 13
}

// druga policja pozycja
var police2 = {
    x: 1,
    y: 13
}

// trzecai policja pozycja
var police3 = {
    x: 19,
    y: 1
}



function displayCar() {
    document.getElementById('car').style.left = car.x * 20 + "px";
    document.getElementById('car').style.top = car.y * 20 + "px";
}

function displayPolice() {
    document.getElementById('police').style.left = police.x * 20 + "px";
    document.getElementById('police').style.top = police.y * 20 + "px";
}
// druga policja wielkość diva
function displayPolice2() {
    document.getElementById('police2').style.left = police2.x * 20 + "px";
    document.getElementById('police2').style.top = police2.y * 20 + "px";
}
// trzecia policja wielkość diva
function displayPolice3() {
    document.getElementById('police3').style.left = police2.x * 20 + "px";
    document.getElementById('police3').style.top = police2.y * 20 + "px";
}


function displayScore() {
    document.getElementById('score').innerHTML = score;
}

function displayMap() {
    var output = '';
    for (var i = 0; i < map.length; i++) {
        output += "\n<div class='row'>\n"
        for (var j = 0; j < map[i].length; j++) {
            if (map[i][j] == 0)
                output += "<div class='brick'></div>";
            else if (map[i][j] == 1)
                output += "<div class='brick lefttop'></div>";
            else if (map[i][j] == 2)
                output += "<div class='brick righttop'></div>";
            else if (map[i][j] == 3)
                output += "<div class='brick rightbottom'></div>";
            else if (map[i][j] == 4)
                output += "<div class='brick leftbottom'></div>";
            else if (map[i][j] == 5)
                output += "<div class='brick top'></div>";
            else if (map[i][j] == 6)
                output += "<div class='brick right'></div>";
            else if (map[i][j] == 7)
                output += "<div class='brick bottom'></div>";
            else if (map[i][j] == 8)
                output += "<div class='brick left'></div>";
            else if (map[i][j] == 9)
                output += "<div class='empty'></div>";
            else if (map[i][j] == 10)
                output += "<div class='road'></div>";
            else if (map[i][j] == 11)
                output += "<div class='fuel'></div>";
        }
        output += "\n</div>"
    }
    $('#map').html(output);
}

document.onkeydown = function (e) {
    if (e.keyCode == 37 && (map[car.y][car.x - 1] == 9 || map[car.y][car.x - 1] == 10 || map[car.y][car.x - 1] == 11)) {
        $('#car').removeClass('right');
        $('#car').removeClass('up');
        $('#car').removeClass('down');
        $('#car').addClass('left');
        car.x--;
        score -= 5;
    }
    else if (e.keyCode == 39 && (map[car.y][car.x + 1] == 9 || map[car.y][car.x + 1] == 10 || map[car.y][car.x + 1] == 11)) {
        $('#car').removeClass('left');
        $('#car').removeClass('up');
        $('#car').removeClass('down');
        $('#car').addClass('right');
        car.x++;
        score -= 5;
    }
    else if (e.keyCode == 38 && (map[car.y - 1][car.x] == 9 || map[car.y - 1][car.x] == 10 || map[car.y - 1][car.x] == 11)) {
        $('#car').removeClass('right');
        $('#car').removeClass('up');
        $('#car').removeClass('left');
        $('#car').addClass('down');
        car.y--;
        score -= 5;
    }
    else if (e.keyCode == 40 && (map[car.y + 1][car.x] == 9 || map[car.y + 1][car.x] == 10 || map[car.y + 1][car.x] == 11)) {
        $('#car').removeClass('right');
        $('#car').removeClass('left');
        $('#car').removeClass('down');
        $('#car').addClass('up');
        car.y++;
        score -= 5;

    }
    if (map[car.y][car.x] == 11) {
        map[car.y][car.x] = 9;
        score += 50;
        displayMap();
        displayScore();
    }
    displayCar();
    checkend()
    displayScore();

};


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
    checkend();



}

//druga policja ruch policji
function PoliceMove2() {
    var newDirection = getRandom();


    if (

        ((currentDirection == 1 || currentDirection == 2) && (map[police2.y + 1][police2.x] == 9 || map[police2.y + 1][police2.x] == 10 || map[police2.y + 1][police2.x] == 11 || map[police2.y + 1][police2.x] == 12 || map[police2.y - 1][police2.x] == 9 || map[police2.y - 1][police2.x] == 10 || map[police2.y - 1][police2.x] == 11 || map[police2.y - 1][police2.x] == 12))
        ||

        ((currentDirection == 3 || currentDirection == 4) && (map[police2.y][police2.x + 1] == 9 || map[police2.y][police2.x + 1] == 10 || map[police2.y][police2.x + 1] == 11 || map[police2.y][police2.x + 1] == 12 || map[police2.y][police2.x - 1] == 9 || map[police2.y][police2.x - 1] == 10 || map[police2.y][police2.x - 1] == 11 || map[police2.y][police2.x - 1] == 12))
    ) {

        while (newDirection == currentDirection) {
            newDirection = getRandom();
        }

        currentDirection = newDirection;
    }

    if (currentDirection == 1 && (map[police2.y][police2.x - 1] == 9 || map[police2.y][police2.x - 1] == 10 || map[police2.y][police2.x - 1] == 11 || map[police2.y][police2.x - 1] == 12)) {
        police2.x--;

    } else if (currentDirection == 2 && (map[police2.y][police2.x + 1] == 9 || map[police2.y][police2.x + 1] == 10 || map[police2.y][police2.x + 1] == 11 || map[police2.y][police2.x + 1] == 12)) {

        police2.x++;
    } else if (currentDirection == 3 && (map[police2.y - 1][police2.x] == 9 || map[police2.y - 1][police2.x] == 10 || map[police2.y - 1][police2.x] == 11 || map[police2.y - 1][police2.x] == 12)) {

        police2.y--;
    } else if (currentDirection == 4 && (map[police2.y + 1][police2.x] == 9 || map[police2.y + 1][police2.x] == 10 || map[police2.y + 1][police2.x] == 11 || map[police2.y + 1][police2.x] == 12)) {

        police2.y++;
    }

    displayPolice2();
    checkend();
}

//trzecia policja ruch policji
function PoliceMove3() {
    var newDirection = getRandom();


    if (

        ((currentDirection == 1 || currentDirection == 2) && (map[police3.y + 1][police3.x] == 9 || map[police3.y + 1][police3.x] == 10 || map[police3.y + 1][police3.x] == 11 || map[police3.y + 1][police3.x] == 12 || map[police3.y - 1][police3.x] == 9 || map[police3.y - 1][police3.x] == 10 || map[police3.y - 1][police3.x] == 11 || map[police3.y - 1][police3.x] == 12))
        ||

        ((currentDirection == 3 || currentDirection == 4) && (map[police3.y][police3.x + 1] == 9 || map[police3.y][police3.x + 1] == 10 || map[police3.y][police3.x + 1] == 11 || map[police3.y][police3.x + 1] == 12 || map[police3.y][police3.x - 1] == 9 || map[police3.y][police3.x - 1] == 10 || map[police3.y][police3.x - 1] == 11 || map[police3.y][police3.x - 1] == 12))
    ) {

        while (newDirection == currentDirection) {
            newDirection = getRandom();
        }

        currentDirection = newDirection;
    }

    if (currentDirection == 1 && (map[police3.y][police3.x - 1] == 9 || map[police3.y][police3.x - 1] == 10 || map[police3.y][police3.x - 1] == 11 || map[police3.y][police3.x - 1] == 12)) {
        police3.x--;

    } else if (currentDirection == 2 && (map[police3.y][police3.x + 1] == 9 || map[police3.y][police3.x + 1] == 10 || map[police3.y][police3.x + 1] == 11 || map[police3.y][police3.x + 1] == 12)) {

        police3.x++;
    } else if (currentDirection == 3 && (map[police3.y - 1][police3.x] == 9 || map[police3.y - 1][police3.x] == 10 || map[police3.y - 1][police3.x] == 11 || map[police3.y - 1][police3.x] == 12)) {

        police3.y--;
    } else if (currentDirection == 4 && (map[police3.y + 1][police3.x] == 9 || map[police3.y + 1][police3.x] == 10 || map[police3.y + 1][police3.x] == 11 || map[police3.y + 1][police3.x] == 12)) {

        police3.y++;
    }

    displayPolice3();
    checkend();
}



function checkend() {
    console.log(police.x , police.y, car.x, car.y);
    if ((car.x == police.x) && (car.y == police.y)) {
        gameover("Crashed");;

    }
//druga policja wysypanie się po zderzeniu
    if ((car.x == police2.x) && (car.y == police2.y)) {
        gameover("Crashed");;

    }

    //trzecia policja wysypanie się po zderzeniu
    if ((car.x == police3.x) && (car.y == police3.y)) {
        gameover("Crashed");;

    }


    if (score == 0)  {
        gameover("End fuel");
    }



}

function gameover(msg) {
    alert("Wasted!" + ' ' + msg);
    car.x = 1;
    car.y = 1;
    score = 500;
    displayCar()

}

$('#start-button').on('click' , function() {
        $('#start-screen').addClass('hidden');
});

setInterval(PoliceMove, 250)
// druga policja szybkość porusania się
setInterval(PoliceMove2, 250)
// trzecia policja szybkość porusania się
setInterval(PoliceMove3, 250)


$(document).ready(function () {
    displayMap();
    displayCar();
    displayScore();

})