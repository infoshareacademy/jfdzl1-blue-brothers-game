function Game(container, bricksPlacementArray) {
    this.board = null
    this.container = container
    this.bricksPlacementArray = bricksPlacementArray
    this.step = 5
    this.init()
}
Game.prototype.init = function () {
    this.renderBoard()
    this.renderWalls()
}
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
Game.prototype.renderBoard = function () {
    this.board = document.createElement('div')
    this.board.className = 'board'
    this.board.style.position = 'relative'
    this.board.style.width = '50vw'
    this.board.style.height = '50vw'
    this.board.style.backgroundColor = 'white'
    this.container.appendChild(this.board)
}
Game.prototype.renderWallBrick = function (x, y) {
    var xPos = this.step * x
    var yPos = this.step * y
    var brick = document.createElement('div')
    brick.className = 'wall-brick'
    brick.style.backgroundColor = 'black';
    brick.style.position = 'absolute'
    brick.style.width =  this.step + '%'
    brick.style.height = this.step + '%'
    brick.style.left = xPos + '%'
    brick.style.top = yPos + '%'
    this.board.appendChild(brick)
}
var exampleArr = [
    [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
]
var game1 = new Game(document.querySelector('.game-container'), exampleArr)