var game = new Game(800, 600, Phaser.AUTO, '', {preload: preload, create: create, update: update, render: render});
function preload() {
    game.load.image('obrazek', './image/obrazek.png');
}
function create() {
    game.add.image(0, 0, 'obrazek');
}
function update() {}
function render() {}
