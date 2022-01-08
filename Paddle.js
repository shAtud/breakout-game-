class Paddle{
    constructor(x){
        this.x = x;
        this.vx = 10;
        this.w = width*0.2;
        this.h = 15;
        this.y = height - this.h;
        this.input()

    }
    draw(ctx){
        this.collisionDetection();
        const {x,y,w,h} = this;
        ctx.beginPath();
        ctx.fillStyle = 'blue';
        ctx.fillRect(x,y,w,h);
    }
    collisionDetection(){
        const {x,w} = this;
        if( x<=0) {
            this.x = 0;
        }
        if(x + w >= height){
            this.x = height -w;
        }
    }
    input(){
        window.addEventListener('keydown',e=>{
            if(e.key === 'a'){
                this.x -= this.vx;
            }
            if(e.key === 'd'){
                this.x += this.vx;
            }
        })
    }
}