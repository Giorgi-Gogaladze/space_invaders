export default class Player {

    rigthPressed = false;
    leftPressed = false;

    constructor(canvas, velocity){
        this.canvas = canvas;
        this.velocity = velocity;

        this.x = this.canvas.width /2;
        this.y = this.canvas.height -75;
        this.width = 50;
        this.height = 48;
        this.image = new Image();
        this.image.src = 'images/player.png';

        document.addEventListener('keydown', this.keydown);
        document.addEventListener('keyup', this.keyup);

    }

    draw(ctx) {
        this.move();
        this.collideWithWalls();
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    collideWithWalls(){
        if(this.x < 0){
            this.x = 0;
        }
        if(this.x > this.canvas.width-this.width){
            this.x = this.canvas.width - this.width;
        }
    }
    move() {
        if( this.rigthPressed){
            this.x += this.velocity
        }
        else if (this.leftPressed){
            this.x += -this.velocity;
        }
    }

    keydown = event => {
        if(event.code == 'ArrowRight'){
            this.rigthPressed = true;
        }
        else if(event.code == 'ArrowLeft'){
            this.leftPressed = true;
        }
    }

    keyup = event => {
        if(event.code == 'ArrowRight'){
            this.rigthPressed = false;
        } else if(event.code == 'ArrowLeft'){
            this.leftPressed = false;
        }
    }
}