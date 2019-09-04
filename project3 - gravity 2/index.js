//select canvas tag
let canvas = document.querySelector('canvas');
let h1 = document.querySelector('h1')

//set canvas width & height to 100%;
canvas.width = window.innerWidth;
canvas.height= window.innerHeight;

//context object
let c = canvas.getContext('2d');

////////////////////draw arc/circle + vars//////////////////////

window.addEventListener('click' ,() => {
    reInitialize();
});

window.addEventListener('resize' ,() => {
    reInitialize();
});

class Circle{
    constructor(x , y , xx , yy , radius){
        this.x = x;
        this.y = y;
        this.xx = xx;
        this.yy = yy;
        this.radius = radius;
    }

    draw(){
        c.beginPath();
        c.arc(this.x, this.y , this.radius, 0 , Math.PI *2 , false);
        c.fillStyle = 'orange'; 
        c.fill();
        c.stroke();
    
    }

    update(){
        this.draw();

        if( this.y + this.radius + this.yy > innerHeight ){
            this.yy = -this.yy * 0.8;
        } 
        else {
            this.yy +=1
        }
    
        if(this.x + this.radius + this.xx > innerWidth || this.x - this.radius < 0){
            this.xx= -this.xx;
        }
    
        this.y += this.yy  * 0.5;
    
    }
}

let multiple = [];
function reInitialize(){
    multiple = [];
    for(let i = 0 ; i < 200 ; i++){
        //vars
        let radius = Math.random() * 20;
        //var x & y with space left - right - top - bottom
        let x = Math.random() * (innerWidth - radius * 2) + radius  ;
        let y = Math.random() * (innerHeight - radius *  2 ) + radius   ;
        let yy = 3;
        let xx = 1;

        multiple.push( new Circle(x , y , xx , yy , radius));

    }
}




//increase y;

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0 , 0, innerWidth , innerHeight);

    for(let j = 0 ; j < multiple.length ; j++){
        multiple[j].update();
    }
}
reInitialize();
animate();