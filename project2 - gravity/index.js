let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

let arrColors = [
    '#A93331',
    '#FF7E7C',
    '#F6615F',
    '#20A94B',
    '#5FF68E'
]

class circle{
    constructor(x , y , addx , addy , radius){
        this.x  = x;
        this.y = y;
        this.addx = addx;
        this.addy = addy;
        this.radius = radius;
        this.color = arrColors[Math.floor(Math.random() * arrColors.length)]
    }
     
    draw(){
            //draw circle;
            c.beginPath();
            c.arc(this.x , this.y  , this.radius , 0  , Math.PI * 2, false);
            c.fillStyle = this.color;
            c.fill();
            c.stroke();
    }

    update(){
        this.draw();
        if(this.y + this.radius + this.addy > innerHeight) {
            this.addy = -this.addy * 0.8 ;
        } else {
            this.addy +=1;
        }

        if(this.x + this.radius  + this.addx > innerWidth || this.x - this.radius <= 0 ){
            this.addx = -this.addx
        }
    
        this.y += this.addy;
    }
}

let instArr = [];
function init(){

  instArr=[];
for(let i = 0 ; i < 100; i++){
    let radius = Math.random() * 25;
    //vars for the arc.
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() *(innerHeight - radius * 2) + radius ;
    // let y = 300;
    let addx = ( Math.random() - 0.5 ) * 7;
    //let addy = ( Math.random() - 0.5 ) * 10;
    let addy = 1;
    

    instArr.push(new circle(x , y , addx , addy, radius));
}



}
init();

function animate(){

    requestAnimationFrame(animate);
    c.clearRect(0 , 0 , innerWidth , innerHeight)

    for(let j = 0 ; j < instArr.length ; j++){
        instArr[j].update();
    }
   

}

window.addEventListener('click', function(){
    init();
})
animate();
