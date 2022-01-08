class Grid{
    constructor(Nx,Ny,space_x,space_y){
        this.block_space_x = space_x
        this.block_space_y = space_y;
        this.Nx = Nx;
        this.Ny = Ny;
        this.block_w = (width -(Nx+1)*this.block_space_x)/Nx;
        this.block_h = (height/2-50 -(Ny+1)*this.block_space_y)/Ny;
        this.grid = [];
        this.initGrid();

    }
    initGrid(){
        const {block_space_x,block_space_y,block_w,block_h,Nx,Ny,grid,_randomColor} = this;
        for(let i=0;i<Ny;i++){
            grid.push([]);
            for(let j=0;j<Nx;j++){
                grid[i].push({
                    x:block_space_x*(j+1)+block_w*(j),
                    y:block_space_y*(i+1)+block_h*(i),
                    broken:false,
                    color:`hsl(${_randomColor(1,360)},${_randomColor(0,100)}%,${_randomColor(40,100)}%)`,
                })
            
            }
        }

    }
    _randomColor(min,max){
        return Math.floor(Math.random()*(max-min)+min) ;
    }
    draw(ctx){
        const {block_w,block_h,Nx,Ny,grid} = this;
        for(let i=0;i<Ny;i++){
            for(let j=0;j<Nx;j++){
                if(!grid[i][j].broken){
                     ctx.beginPath();
                     ctx.fillStyle = grid[i][j].color;
                     ctx.fillRect(grid[i][j].x,grid[i][j].y,block_w,block_h)
                }
               
            }
        }
    }
}