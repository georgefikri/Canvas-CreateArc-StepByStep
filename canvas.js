//selecting html canvas tag
let canvas = document.querySelector('canvas');

//setting the width of the canvas via js.
canvas.width = window.innerWidth;

//setting canvas height;
canvas.height = window.innerHeight;


//with canvas , if i use var C ==> this will mean context
let c = canvas.getContext('2d');

//change the color of the share rectangle i drew.
c.fillStyle = 'orange';
//fillRect ( function in canvas takes 4 parameters draws rectangular - x, y , width , height) 
c.fillRect(100,100,100,100);
//if i add fillStyle before each one i can change it's color
c.fillStyle = 'yellow';
c.fillRect(400,100,100,100);
c.fillStyle = 'blue';
c.fillRect(250,300,100,100);


/////////////////////// Draw a  Line //////////////////////
//every parameter ( x , y) x first , y second 
c.beginPath();
//starting point 
c.moveTo(50,300);
//create a line to a new point 
c.lineTo(300,100);
c.lineTo(300,400);
//to add color to the lines i drew
c.strokeStyle = "red";
//stroke ( like in photoshop) ==> without that one the draw will not appear
c.stroke();

///////////////////////////Arc/circle//////////////////////////////////
//use this to not merge any previous drawing
/*
c.beginPath();
c.arc( 400 , 300 , 30 , 0 , Math.PI *2 , false)
//add color
c.strokeStyle = "grey";
//adding stroke like photoshop;
c.stroke(); 
*/

/////////////////creating multiple circles//////////////////
    //step 1: for loop
    //step 2: use math.random to set the values of x & y.
    //math.random : return a value from 0 to 1=> 0,1 0,2 .... 1

for (let i = 0; i < 3; i++) {
    /*
    to make the circles spread out ( x & y be3ard we tol el shasha a3mel X * 3ard
     el shasha ) y * tol el shasha
    */
    let x  = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight ;
    let arrCol = ['green' , 'blue' , 'red'];
    c.beginPath(); 
    c.arc( x , y , 30 , 0 , Math.PI *2 , false)
    //add color
    c.strokeStyle = arrCol[i]
    //adding stroke like photoshop;
    c.stroke();
}