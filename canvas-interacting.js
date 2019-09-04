//selecting html canvas tag
let canvas = document.querySelector('canvas');

//setting the width of the canvas via js.
canvas.width = window.innerWidth;

//setting canvas height;
canvas.height = window.innerHeight -6 ;

let c = canvas.getContext('2d');

/////////////EventListner/////////////////
    //step one create an object will hold the value of x & y of the mouse.
    let mouse = {
        x : undefined,
        y : undefined
    };

    let maxRadius = 40;
    //coloring each circle - creating array

    let colorArr = ['#FF4858' , '#1B7F79' , '#00CCC0' , '#72F2EB' , '#747F7F' ];

    //event listner itself
    window.addEventListener('mousemove' , function(event){
        //here we got the x & y of the mouse.
        mouse.x = event.x; //if you console.log(event) you will find all the propoerties incl. x & y;
        mouse.y = event.y;
    });

    /*when resizing the window the page will be updated automatically
    with the new size without refreshing the page 
    */
    window.addEventListener('resize', function(){
        //setting the width of the canvas via js.
        canvas.width = window.innerWidth;

        //setting canvas height;
        canvas.height = window.innerHeight;

        /*
        to ensure that the circles are being generated dynamically
        each time the browser gets resized we need to add few 
        initialization techiniques.
        call function ==> init();
        */
       init();
    });

    ///////////////////Circles Implementation////////////////////////////
class Circle{
    constructor(x,y, valX , valY , radius){
        this.x = x;
        this.y = y;
        this.valX = valX;
        this.valY = valY;
        this.radius = radius;
        //setting minimum size of the circle;
        this.minRadius = radius;
        /* math.random return decimal values
        Math.floor ==> and we want to make sure we are getting whole numbers for the index for the array.
        this changes the decimal number to the lowest whole number(عدد صحيح) possbile like 0.5 will be 0 */
        this.color =  colorArr[Math.floor(Math.random() * colorArr.length)]
    }
    draw(){
        c.beginPath();
        c.arc(this.x,this.y, this.radius, 0 , Math.PI * 2 , false );
        /*get number without decimal to access the array ( 7araka zai el loop);
        the code this way will cause blinking the colors will keep resetting over and over
        because the draw() function is called inside Update function,
        and update function keeps called .
        to fix this move the below line outside the function in the constructor function
        ==>c.fillStyle = colorArr[Math.floor(Math.random() * colorArr.length)]
        
        */
       c.fillStyle = this.color;
        c.fill();
        
    }
     update(){
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.valX =  -this.valX;
        }
    
        if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.valY =  -this.valY;
        }
        this.x += this.valX;
        this.y += this.valY; 

        /////////////EventListner - comparing the space of mouse(x y) and every circle(x y)///////////
        //here i am saying if the space between the mouse & circle is < 50
        /* the condition after && ==> refers to if (this.x = 200) and (mouse.x = 100)
        this will result the score to be -100 and this will make all the circles to the right of 
        our mouse will increase uncontrollably. and we need the range of 50 only, that's why we add
        the conditions after &&
        ==> be ma3na ana 3ayez akon 50px 2imin el kora we 50px shemal el kora , el kora nafsaha hia el axis 
        50 to the right ( + ) we 50 to the left bel minus  
        */
        if(mouse.x - this.x < 50 && mouse.x - this.x > -50
        && mouse.y - this.y < 50 && mouse.y - this.y > -50){ 
            //add condition to increase to a max limit
            //only increase radius of each individual circle if each indi. circle radius is < 40
            if(this.radius < maxRadius) {
                this.radius +=1;
            }
        } 
        // we need to make sure the circles do not decrease pass a certain point 
        //3ashan hatefdal tesghar leghayet lama ta5tafi fa ba7ot limit.
        else if( this.radius > this.minRadius) {
            this.radius -=1;
        }


        this.draw();
    }

}


// copied inside the init() function below
// let circleArr = [];

// for (let i = 0; i < 500; i++) {
//     /*adding random number to radius , math.random(betraga3 0 to 1)
//     then multiply by 3 or 4 then add 1 because if random returns 0 
//     then at least the number will be 1;*/
//     let radius = Math.random() * 3 +2;

//     let x = Math.random() * (innerWidth - radius * 2) + radius;
//     let y = Math.random() * (innerHeight - radius * 2) + radius ;
//     let valX = (Math.random() - 0.5) * 2;
//     let valY = (Math.random() - 0.5) * 2;

//     circleArr.push(new Circle(x, y , valX , valY, radius));
    
// }



        /*we are going basically be resetting the circle 
        we are going to call all what's inside the above loop
        over and over again each time we resize our browser 
        replacing our circles with the new circles at new positions 
        so they will be always filling the entire screen 
        */

    let circleArr = [];
    function init(){
        /*here we ar cleaning the array of the circles because 
        when resize not to add hundreds of top of each other 
        to be with each refresh we have a same number (500) not 
        500 + 500 + 500 ..with each resize
        */
       circleArr = [];
        for (let i = 0; i < 500; i++) {
            /*adding random number to radius , math.random(betraga3 0 to 1)
            then multiply by 3 or 4 then add 1 because if random returns 0 
            then at least the number will be 1;*/
            let radius = Math.random() * 3 +2;

            let x = Math.random() * (innerWidth - radius * 2) + radius;
            let y = Math.random() * (innerHeight - radius * 2) + radius ;
            let valX = (Math.random() - 0.5) * 2;
            let valY = (Math.random() - 0.5) * 2;

            circleArr.push(new Circle(x, y , valX , valY, radius));
            
        }

        
    }

function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0 , 0, innerWidth , innerHeight);

    for (let j = 0; j < circleArr.length; j++) {
        circleArr[j].update();
        
    }
}
init();
animate();
