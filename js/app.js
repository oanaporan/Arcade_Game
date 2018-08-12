// Enemies the player must avoid
class Enemy { 
    constructor (x, y, speed, allEnemies = []) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.allEnemies = allEnemies;
    // The image/sprite for our enemies, this uses
    // a helper provided to easily load images
        this.sprite = 'images/enemy-bug.png';
    }
    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {


          // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
        
    }
    // Draw the enemy on screen
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

};

const enemies = new Enemy();
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.sprite = 'images/char-boy.png';
    }
    update() {

    }
    // Draw the player on screen
    render() {
            ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }


    }
    handleInput() {


    }
};

const player = new Player();


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
