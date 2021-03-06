// Enemies our player must avoid
class Enemy {
    constructor(x, y, speed) {
        // Variables applied to each of our instances go here,
        // we've provided one for you to get started
        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images
        this.sprite = 'images/enemy-bug.png';
        this.x = x;
        this.y = y;
        this.speed = speed;
    }
    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
        this.x += this.speed * dt;
        if (this.x > 500) {
            this.x = -50;
            this.speed = 100 + Math.floor(Math.random() * 300);
        }
        ;
        if (player.x < this.x + 80 && player.x + 80 > this.x && player.y < this.y + 60 &&60 + player.y > this.y) {
            player.x = 202;
            player.y = 405;
        }
        ;
    }
    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}



// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
class Player {
    constructor(x, y) {
        this.sprite = 'images/char-boy.png';
        this.x = x;
        this.y = y;
       
    }
    update(dt) {
    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    handleInput(moving) {
        if (moving == 'left' && this.x > 0) {
            this.x -= 102;
        }
        ;
        if (moving == 'right' && this.x < 305) {
            this.x += 102;
        }
        ;
        if (moving == 'up' && this.y > 0) {
            this.y -= 83;
        }
        ;
        if (moving == 'down' && this.y < 305) {
            this.y += 83;
        }
        ;
        if (this.y < 0) {
            setTimeout(() => {
                this.x = 200;
                this.y = 400;
            }, 1000);
            
        }
        ;
    }
}



var player = new Player(202, 405);
var enemy1 = new Enemy(-100,60);
var enemy2 = new Enemy(-600,60);
var enemy3 = new Enemy(-165,140);
var enemy4 = new Enemy(-500,140);
var enemy5 = new Enemy(-200,220);
var enemy6 = new Enemy(-400,220);
var player = new Player(200,400);
var allEnemies = [enemy1,enemy2,enemy3,enemy4,enemy5,enemy6];
var enemiesPosition = [50, 150, 230];


enemiesPosition.forEach(movingHorizontal => {
    var enemy = new Enemy(0, movingHorizontal, 120)
    allEnemies.push(enemy);
});



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

