
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
    this.playerPosition = JSON.parse(JSON.stringify(initialPlayerPosition));
    this.init()

}

Game.prototype.renderPlayer = function (x , y) {
    var xPos = this.step * 7
    var yPos = this.step * y
    var player = document.createElement('div')
    player.className = 'wall-brick'
    player.style.backgroundColor = 'red';
    player.style.position = 'absolute'
    player.style.width =  this.step + '%'
    player.style.height = this.step + '%'
    player.style.left = xPos + '%'
    player.style.top = yPos + '%'
    this.board.appendChild(player)

}

Game.prototype.init = function () {

    var self = this

    $(document).keydown(function (event) {
        var newPlayerPosition
        switch (event.key) {
            case 'ArrowLeft':
                newPlayerPosition = {
                    x: self.playerPosition.x - 1,
                    y: self.playerPosition.y
                }
                break;
            case 'ArrowUp':
                newPlayerPosition = {
                    x: self.playerPosition.x,
                    y: self.playerPosition.y - 1
                }
                break;
            case 'ArrowRight':
                newPlayerPosition = {
                    x: self.playerPosition.x + 1,
                    y: self.playerPosition.y
                }
                break;
            case 'ArrowDown':
                newPlayerPosition = {
                    x: self.playerPosition.x,
                    y: self.playerPosition.y + 1
                }
                break;
            default: return; // exit this handler for other keys
        }

        self.changePlayerPositon(newPlayerPosition.x, newPlayerPosition.y, self.playerPosition, self.boardArray)

        event.preventDefault(); // prevent the default action (scroll / move caret)
    });

    this.render(this.boardArray, this.playerPosition)
}