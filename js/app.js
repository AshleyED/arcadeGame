// Enemies our player must avoid
var Enemy = function(x, y, speed) { //I added this.x and this.y
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
    this.speed = Math.floor(Math.random() * 125) + 5;//
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += (this.speed +100) * dt
    if (this.x > 600) {
      this.x = -100;
      this.speed = (Math.floor(Math.random() * 200) + 25);
  }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x, y, speed) {
  //add player class info
  this.x = x;
  this.y = y;
  this.speed = 1;
  this.sprite = 'images/char-boy.png';
};

Player.prototype.reset = function () {
  this.x = 200;
  this.y = 400;
};

Player.prototype.update = function() {
    //add the code here does nothing
//    if (Player.y === Enemy.y && Player.x === Enemy.x) {
//      this.x = 200;
//      this.y = 400;
//  }
  if (player.y < -8) {
    player.reset();
  }
  if (player.x < enemy1.x + 70 &&
   player.x + 70 > enemy1.x &&
   player.y < enemy1.y + 70 &&
   70 + player.y > enemy1.y) {
     player.reset();
  } else if (player.x < enemy2.x + 70 &&
   player.x + 70 > enemy2.x &&
   player.y < enemy2.y + 70 &&
   70 + player.y > enemy2.y) {
     player.reset();
  } else if (player.x < enemy3.x + 70 &&
   player.x + 70 > enemy3.x &&
   player.y < enemy3.y + 70 &&
   70 + player.y > enemy3.y) {
     player.reset();
  }
};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function (key) {
  if (key === 'left' && this.x > 0) {
    this.x -= 100
  } else if (key === 'right' && this.x < 400) {
    this.x += 100
  } else if (key === 'up' && this.y > 0) {
    this.y -= 82
  } else if (key === 'down' && this.y < 400) {
    this.y += 82
  }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var enemy1 = new Enemy (000, 60, 10);
var enemy2 = new Enemy (000, 145, 10);
var enemy3 = new Enemy (000, 230, 10);
var allEnemies = [
  enemy1,
  enemy2,
  enemy3
];

var player = new Player(200, 400);
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
