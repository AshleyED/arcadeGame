//Global game score variable, begins at 0
var gameScore = 0;

//Global star count variable, begins at 0
var starCount = 0;

//End of game function, calculates when you reach the goal and congratulates the player
var endGame = function () {
  if (gameScore > 199 && starCount > 9) {
    console.log('You won!');
    $('.winner').text(' CONGRATULATIONS, YOU DID IT! Keep playing for an even higher score!!');
  }
};

// Enemy object. Function takes into account coordinates, speed, and image
var Enemy = function(x, y, speed) {
  this.x = x;
  this.y = y;
  this.speed = Math.floor(Math.random() * 125) + 5;
  this.sprite = 'images/enemy-bug.png';
};

// Updates each enemy's position, resets at a random speed each time it's called
Enemy.prototype.update = function(dt) {
  this.x += (this.speed +100) * dt;
  if (this.x > 600) {
    this.x = -100;
    this.speed = (Math.floor(Math.random() * 200) + 125);
  }
};

// Draws the enemy on the screen
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Player object. Function takes into account coordinates and image
var Player = function(x, y) {
  this.x = x;
  this.y = y;
  this.sprite = 'images/char-horn-girl.png';
};

//Function resets player to original (x,y) location when called
Player.prototype.reset = function () {
  this.x = 200;
  this.y = 400;
};

//Function updates the player's location. If player reaches the water or is hit by an enemy,
//function calls this.reset and resets player to original (x,y) coordinates. Also calculates
//score and runs the endGame function if applicable
Player.prototype.update = function() {
  if (this.y < -8) {
    this.reset();
    gameScore += 10;
    console.log(gameScore);
    $('.display').text(gameScore);
    endGame();
  }
  if (this.x < enemy1.x + 70 &&
   this.x + 70 > enemy1.x &&
   this.y < enemy1.y + 70 &&
   70 + this.y > enemy1.y) {
     gameScore -= 5;
     console.log(gameScore);
     $('.display').text(gameScore);
     this.reset();
  } else if (this.x < enemy2.x + 70 &&
   this.x + 70 > enemy2.x &&
   this.y < enemy2.y + 70 &&
   70 + this.y > enemy2.y) {
     gameScore -= 5;
     console.log(gameScore);
     $('.display').text(gameScore);
     this.reset();
  } else if (this.x < enemy3.x + 70 &&
   this.x + 70 > enemy3.x &&
   this.y < enemy3.y + 70 &&
   70 + this.y > enemy3.y) {
     gameScore -= 5;
     console.log(gameScore);
     $('.display').text(gameScore);
     this.reset();
  }
};

//Draws player image
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Controls player's arrow movements (up, down, left, right)
Player.prototype.handleInput = function (key) {
  if (key === 'left' && this.x > 0) {
    this.x -= 100;
  } else if (key === 'right' && this.x < 400) {
    this.x += 100;
  } else if (key === 'up' && this.y > 0) {
    this.y -= 82;
  } else if (key === 'down' && this.y < 400) {
    this.y += 82;
  }
};

//Star object. Takes into consideration coordinates and image
var Star = function (x, y) {
  this.x = x;
  this.y = y;
  this.sprite = 'images/Star.png';
};

//Draws star image
Star.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//Randomly chooses new location(x,y) coordinates for star
//Assistance with function provided by Matthew Prather-Guide
Star.prototype.reset = function () {
  this.x = [0, 100, 200, 300, 400][Math.floor(5* Math.random())];
  this.y = [60, 145, 230][Math.floor(3* Math.random())];
};

//Function updates thestar's location. If player touches the star, function
//calls this.reset and resets player to original (x,y) coordinates. Also
//calculates score and runs the endGame function if applicable
Star.prototype.update = function () {
  if (this.x < player.x + 70 &&
   this.x + 70 > player.x &&
   this.y < player.y + 70 &&
   70 + this.y > player.y) {
     gameScore += 2;
     console.log(gameScore);
     $('.display').text(gameScore);
     starCount += 1;
     $('.stardisplay').text(starCount);
     console.log(starCount);
     this.reset();
     endGame();
  }
  if (this.x < enemy1.x + 70 &&
   this.x + 70 > enemy1.x &&
   this.y < enemy1.y + 70 &&
   70 + this.y > enemy1.y) {
     this.reset();
  } else if (this.x < enemy2.x + 70 &&
   this.x + 70 > enemy2.x &&
   this.y < enemy2.y + 70 &&
   70 + this.y > enemy2.y) {
     this.reset();
  } else if (this.x < enemy3.x + 70 &&
   this.x + 70 > enemy3.x &&
   this.y < enemy3.y + 70 &&
   70 + this.y > enemy3.y) {
     this.reset();
  }
};

// Enemy array, instantiated from Enemy object. Creates three enemies
var enemy1 = new Enemy (0, 60, 10);
var enemy2 = new Enemy (0, 145, 10);
var enemy3 = new Enemy (0, 230, 10);
var allEnemies = [enemy1, enemy2, enemy3];

//Player variable, instantiated from Player object. Creates one player
var player = new Player(200, 400);

//Star variable, instantiated from Star object. Creates one star
var star = new Star(100, 75);

// This listens for key presses and sends the keys to the
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down'
  };

  player.handleInput(allowedKeys[e.keyCode]);
});

//Solution to preventing arrow key scrolling found on Stack Overflow:
//http://stackoverflow.com/questions/8916620/disable-arrow-key-scrolling-in-users-browser
window.addEventListener('keydown', function(e) {
  if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
  }
}, false);
