var map = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2 ],
    [0, 9, 10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,0 ],
    [0, 10,1, 0, 0, 0, 0, 0, 6, 10,5, 10,8, 0, 0, 0, 0, 0, 2, 10,0 ],
    [0, 10,0, 10,10,10,10,10,10,10,0, 10,10,10,10,10,10,10,0, 10,0 ],
    [0, 10,0, 11,8, 0, 0, 0, 6, 10,0, 10,8, 0, 0, 0, 6, 11,0, 10,0 ],
    [0, 10,0, 10,10,10,10,10,10,10,0, 10,10,10,10,10,10,10,0, 10,0 ],
    [0, 10,4, 0, 0, 0, 0, 0, 6, 10,0, 10,8, 0, 0, 0, 0, 0, 3, 10,0 ],
    [0, 10,10,10,10,10,10,10,10,10,0, 10,10,10,10,10,10,10,10,10,0 ],
    [0, 10,1, 0, 0, 0, 0, 0, 6, 10,0, 10,8, 0, 0, 0, 0, 0, 2, 10,0 ],
    [0, 10,0, 10,10,10,10,10,10,10,0, 10,10,10,10,10,10,10,0, 10,0 ],
    [0, 10,0, 11,8, 0, 0, 0, 6, 10,0, 10,8, 0, 0, 0, 6, 11,0, 10,0 ],
    [0, 10,0, 10,10,10,10,10,10,10,0, 10,10,10,10,10,10,10,0, 10,0 ],
    [0, 10,4, 0, 0, 0, 0, 0, 6, 10,7, 10,8, 0, 0, 0, 0, 0, 3, 10,0 ],
    [0, 10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,0 ],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3 ]
]
var car = {
    x: 1,
    y: 1
}
var score = 0 ;
function displayCar(){
    document.getElementById('car').style.left = car.x*20+"px";
    document.getElementById('car').style.top = car.y*20+"px";
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
                output += "<div class='coin'></div>";
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
    $(document).ready(function(){
    displayMap();
    displayCar();
})