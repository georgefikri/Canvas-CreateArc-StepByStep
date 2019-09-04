//selecting html canvas tag
let canvas = document.querySelector('canvas');

//setting the width of the canvas via js.
canvas.width = window.innerWidth;

//setting canvas height;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

// function Circle(x,y, valX , valY , radius){
//     this.x = x;
//     this.y = y;
//     this.valX = valX;
//     this.valY = valY;
//     this.radius = radius;

//     this.draw = function(){
//         c.beginPath();
//         c.arc(this.x,this.y, this.radius, 0 , Math.PI * 2 , false );
//         c.strokeStyle = 'red';
//         c.stroke();
//     }
//      this.update = function(){
//         if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
//             valX =  -valX;
//         }
    
//         if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
//             valX =  -valX;
//         }
//         this.x += this.valX;
//         this.y += this.valY; 
//     }
// }


// let x = Math.random() * innerWidth;
// let y = Math.random() * innerHeight ;
// let radius = 30;
// let valX = (Math.random() - 0.5) * 7;
// let valY = (Math.random() - 0.5) * 7;

class Circle{
    constructor(x,y, valX , valY , radius){
        this.x = x;
        this.y = y;
        this.valX = valX;
        this.valY = valY;
        this.radius = radius;
    }
    draw(){
        c.beginPath();
        c.arc(this.x,this.y, this.radius, 0 , Math.PI * 2 , false );
        c.strokeStyle = 'red';
        c.stroke();
    }
     update(){
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.valX =  -this.valX;
        }
    
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.valX =   -this.valX;
        }
        this.x += this.valX;
        this.y += this.valY; 

        this.draw();
    }

}



let circleArr = [];

for (let i = 0; i < 100; i++) {
    let radius = 30;
    let x = Math.random() * (innerWidth - radius * 2) + radius;
    let y = Math.random() * (innerHeight - radius * 2) + radius ;
    let valX = (Math.random() - 0.5) * 2;
    let valY = (Math.random() - 0.5) * 2;

    circleArr.push(new Circle(x, y , valX , valY, radius));
    
}



function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0 , 0, innerWidth , innerHeight);

    for (let j = 0; j < circleArr.length; j++) {
        circleArr[j].update();
        
    }
}

animate();
