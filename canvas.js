const canvas = document.querySelector('canvas');
canvas.width = 500;
canvas.height = 500;
const {width,height} = canvas;
ctx = canvas.getContext('2d');
const FPS = 20;
let score = 0;
const html_score = document.getElementById('score');
html_score.innerHTML = score;
const paddle = new Paddle(100);
const grid = new Grid(5,6,10,10)
const ball = new Ball(250,300)
const animate = ()=>{
    ctx.fillStyle = 'rgba(0,0,0,0.3)'
    ctx.fillRect(0,0,width,height);
    paddle.draw(ctx);
    grid.draw(ctx)
    ball.draw(ctx);

    ball.update()
    ball.hitsPaddle(paddle)
    ball.hitsBlock(grid)
    setTimeout(()=>{
        requestAnimationFrame(animate)
    },1000/FPS)

}
animate();