const canvas = document.getElementById("canvas");
const cs=67; //cell size

const pen = canvas.getContext('2d');  //by default the color is black

pen.fillRect(50, 50, cs, cs);

//pen.fillStyle="red" //changing red

let init_x=50;
let init_y=50;

function init(){    


}

function draw(){
    pen.clearRect(0, 0, W, H);
    pen.fillRect(curr_x, curr_y, cs, cs);
}

function update(){
    curr_x = curr_x + cs;
}

function gameLoop(){
    
    update()
    draw()

}

init()  
const id=setInterval(gameLoop,200)