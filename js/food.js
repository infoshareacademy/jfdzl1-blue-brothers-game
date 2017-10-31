/**
 * Created by Basti on 2017-10-31.
 */

Game.prototype.renderFood = function () {
    var self = this
    this.foodPlacementArray.forEach(function(arrayRow, indexY){
        arrayRow.forEach(function(isBrick, indexX){
            if(isBrick){
                self.renderWallBrick(indexX,indexY)
            }
        })
    })
}


Game.prototype.renderFood = function (x,y) {
    var xPos = this.step * x
    var yPos = this.step * y
    this.board = document.createElement('div');
    this.board.className = 'food';
    this.board.style.position = 'relative';
    this.board.style.width = '1.59vw';
    this.board.style.height = '1.25vw';
    this.board.style.backgroundColor = 'white';
    //this.board.style.imageOrientation = '';
    this.board.style.backgroundImage = "url('https://raw.githubusercontent.com/infoshareacademy/jfdzl1-blue-brothers-game/game_board/image/aha-soft-food-hamburger.ico')";
    //this.board.style.backgroundSize = '';
    this.board.appendChild(food)
}



Game.prototype.init = function () {

    this.renderFood = this.startRenderingFood()

    this.render(this.board)
}

Game.prototype.startRenderingFood = function () {
    this.board = this.board.map(function (arrayRow) {
        var isFood = Math.round(Math.random()) // radomize 0 and 1 with 25% chance of 1
        return array.slice(1).concat([isFood])
    });
    this.render()
}
