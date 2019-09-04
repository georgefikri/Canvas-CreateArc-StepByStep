//selecting html canvas tag
let canvas = document.querySelector('canvas');

//setting the width of the canvas via js.
canvas.width = window.innerWidth;

//setting canvas height;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

let x = Math.random() * innerWidth;
let y = Math.random() * innerHeight ;
let radius = 30;

/*I'm using math.random * - 0.5 here because the max value i get from random() is 1.
to make the ball bounce all way to left and right if i got 0 the x val will be -0.5 
so it will 
hit the border(to go out but our if will not allow) and bounce back inside the window ,
 and same way for y.
*/
let increaseX = (Math.random() - 0.5) * 7;
let increaseY = (Math.random() - 0.5) * 7;
function animate(){
    requestAnimationFrame(animate)
    /* here each time the function gets called we are clearing the canvas ( removing old canvas elly kan mawgod abl man7arako le odam aw le 2ia heta) */
    c.clearRect(0 , 0, innerWidth , innerHeight);
    c.beginPath();
    c.arc(x,y,radius, 0 , Math.PI * 2 , false );
    c.strokeStyle = 'red';
    c.stroke();
    
    /* if x moves to the right and hits the right edge of the screen -inner width reflects decrease (increaseX) is what makes the circle moves on the x axis.
    
    x-radius < 0: is when the circle hits the left side , which means when x keeps decreasing until it becomes less than 0 , ( ya3ni te5bat fel shasha min el shemal)
    */
    if(x + radius > innerWidth || x - radius < 0){
        increaseX =  -increaseX;
    }

    /* same as X , when x Hits the top reflects back , same when hits the bottom   */
    if(y + radius > innerHeight || y - radius < 0){
        increaseY =  -increaseY;
    }


    /* here we are increasing the value of x & y everytime the function gets called.
    and since this function animate() gets called by requestAnimationFrame , it gets called time after time to infinity so the circle keeps moving */
    x += increaseX;
    y += increaseY; 
}

animate();
