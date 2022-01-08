class Ball{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.vx = 5;
        this.vy = -5;
        this.r = 10;

    }
    draw(ctx){
        const {x,y,r} = this;
        ctx.beginPath();
        ctx.fillStyle = 'red';
        ctx.arc(x,y,r,Math.PI*2,false);
        ctx.lineWidth = 0;
        ctx.fill()
       
    }
    collisionDetection(){
        const {x,y,r} = this;
        if(x -r<=0 || x +r>=width) this.vx*=-1;
        if(y -r<=0) this.vy*=-1;
    }
    hitsPaddle(paddle){
        const {x,y,r} = this;
        if(y +r>= height-paddle.h){
            if(x>= paddle.x && x<= paddle.x+paddle.w){
                
                this.vy=-Math.abs(this.vy);
            }
        }
         if(y>=height){
             alert('you lose................');
             window.location.reload();

         }
       
    }
    hitsBlock(grid){
        const {x,y,r} = this;
        const gridArray = grid.grid;
        gridArray.forEach(line => {
            line.forEach(block=>{
               if(!block.broken){
                    let tmpX = x;
                    let tmpY = y;
                    //collosest edge
                    //left or right side
                    if(x < block.x) tmpX = block.x;
                    else if(x> block.x +grid.block_w){
                                  tmpX =  block.x +grid.block_w;
                            }
                    //top or bottom side
                    if(y< block.y) tmpY = block.y;
                    else if(y> block.y +grid.block_h) tmpY = block.y +grid.block_h;

                    const dx = x - tmpX;
                    const dy = y - tmpY;
                    const dist = Math.sqrt(Math.pow(dx,2)+Math.pow(dy,2));

                    if(dist<=r){
                 
                        this.vy*=-1;
                        block.broken = true;
                        score++;
                        html_score.innerHTML = score;
                        }
               }
             
            })
             
          
        });
    }
    update(){
        this.x += this.vx;
        this.y += this.vy;
        this.collisionDetection()
    }
}