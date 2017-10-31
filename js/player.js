/**
 * Created by Basti on 2017-10-31.
 */
Game.prototype.renderWalls = function () {
    var self = this
    this.bricksPlacementArray.forEach(function(arrayRow, indexY){
        arrayRow.forEach(function(isBrick, indexX){
            if(isBrick){
                self.renderWallBrick(indexX,indexY)
            }
        })
    })
}



Game.prototype.changePlayerPositon = function (newX, newY) {
    if (newX >= 0
        &&
        newY >= 0
        &&
        newX < this.boardArray[0].length
        &&
        newY < this.boardArray.length
        &&
        this.boardArray[newY][newX] === 0
    ) {
        this.playerPosition.x = newX
        this.playerPosition.y = newY
    }
    this.render(this.boardArray, this.playerPosition)
}

Game.prototype.renderPlayer = function (x , y) {
    var xPos = this.step * x
    var yPos = this.step * y
    var player = document.createElement('div')
    player.className = 'wall-brick'
    player.style.backgroundColor = 'transparent';
    player.style.position = 'absolute'
    player.style.width =  this.step + '%'
    player.style.height = this.step + '%'
    player.style.left = xPos + '%'
    player.style.top = yPos + '%'
    this.board.appendChild(player)
}