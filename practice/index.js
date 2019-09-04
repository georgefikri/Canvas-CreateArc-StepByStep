let canvas = document.querySelector('canvas');
let c = canvas.getContext('2d');

//width & height take full page.
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse = {
    x : undefined,
    y : undefined
}

let colorArr = ['#FF4858' , '#1B7F79' , '#00CCC0' , '#72F2EB' , '#747F7F' ];
let maxRadius = 40;

window.addEventListener('mousemove',  function(event){
    mouse.x = event.x;
    mouse.y = event.y;
})

window.addEventListener('resize', function(){
    //setting the width of the canvas via js.
    canvas.width = window.innerWidth;

    //setting canvas height;
    canvas.height = window.innerHeight;

   init();
});

class Circle{
    constructor(x , y , plusX , plusY , radius){
        this.x = x;
        this.y = y;
        this.plusX = plusX;
        this.plusY = plusY;
        this.radius = radius;
        this.minRadius = radius;
        this.color = colorArr[Math.floor(Math.random() * colorArr.length)]
        }


        draw(){
            c.beginPath();
            c.arc(this.x , this.y , this.radius, 0 , Math.PI * 2, false);
            c.fillStyle= this.color;;
            c.fill();

        }

        update(){
            if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
                this.plusX = -this.plusX;
            }
            if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
                this.plusY = -this.plusY;
            }

            this.x += this.plusX;
            this.y += this.plusY;

            if(mouse.x - this.x < 50 && mouse.x - this.x > -50 &&
                mouse.y - this.y < 50 && mouse.y - this.y > -50  
            ) {
                if(this.radius < maxRadius) this.radius +=1;
                
            } else if (this.radius > this.minRadius){
                this.radius -= 1;
            }


            this.draw();
        }
}


let newIns = [];
function init(){
    newIns = [];
    for (let i = 0; i < 500 ; i++) {
        let radius = Math.random() * 3 +2;;
        let x = Math.random() * (window.innerWidth - radius * 2) + radius;
        let y = Math.random() * (window.innerHeight - radius * 2) + radius;
        let plusX = ( Math.random() * 0.5 ) * 2 ;
        let plusY = ( Math.random() * 0.5 ) * 2 ;
        newIns.push(new Circle(x , y, plusX , plusY , radius))

    }
}



function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0 , innerWidth , innerHeight);

    for(let j = 0 ; j < newIns.length ; j++){
        newIns[j].update();
    }

 
}

animate();