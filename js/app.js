// Enemies our player must avoid
var Enemy = function(x, y) { //I added this.x and this.y
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // var obj = {};
    // obj.move = function() {
    //   obj.loc++;
    // };
    // return obj; //I added lines 5-9 so far they do nothing
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.x = x; //
    this.y = y;//
    this.speed = 1;//
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    //math.random function?
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y) {
  //add player class info
  this.x = x;
  this.y = y; //i added does nothing
  this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function() {
    //add the code here does nothing
};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y); //i added does nothing
};

Player.prototype.handleInput = function () {
  //is this right? add the rest of the code. does nothing currently
};
 var player = new Player(200, 400); //i added does nothing
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [
  new Enemy(000, 60),
  new Enemy(000, 140),
  new Enemy(000, 230) //I added this it does nothing
];


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
