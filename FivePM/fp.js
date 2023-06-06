
////// GLOBAL VARIABLES
var canvas;
var ctx;
var w = 1000;
var h = 600;

var xP;
var yP;

var sec = 30;
var timer;
var working = false;
var matchSec = 30;

var counter = 0;

var audio = new Audio("../imagesPP/gameNoise.mp3"); //(4)
var guide = document.getElementById("p2").innerHTML = "Press the Start button to begin!";;

var uniqueArray = new Array(); //(3)
uniqueArray[0] = new Image();
uniqueArray[0].src = "../imagesPP/00_angel.png";
uniqueArray[1] = new Image();
uniqueArray[1].src = "../imagesPP/00_bird.png";
uniqueArray[2] = new Image();
uniqueArray[2].src = "../imagesPP/00_bunny.png";
uniqueArray[3] = new Image();
uniqueArray[3].src = "../imagesPP/00_cat.png";
uniqueArray[4] = new Image();
uniqueArray[4].src = "../imagesPP/00_dolphin.png";
uniqueArray[5] = new Image();
uniqueArray[5].src = "../imagesPP/00_duck.png";
uniqueArray[6] = new Image();
uniqueArray[6].src = "../imagesPP/00_elephant.png";
uniqueArray[7] = new Image();
uniqueArray[7].src = "../imagesPP/00_heart.png";
uniqueArray[8] = new Image();
uniqueArray[8].src = "../imagesPP/00_seahorse.png";
uniqueArray[9] = new Image();
uniqueArray[9].src = "../imagesPP/00_star.png";

var regularArray = new Array(); //(3)
regularArray[0] = new Image();
regularArray[0].src = "../imagesPP/01.png";
regularArray[1] = new Image();
regularArray[1].src = "../imagesPP/02.png";
regularArray[2] = new Image();
regularArray[2].src = "../imagesPP/03.png";
regularArray[3] = new Image();
regularArray[3].src = "../imagesPP/04.png";
regularArray[4] = new Image();
regularArray[4].src = "../imagesPP/05.png";
regularArray[5] = new Image();
regularArray[5].src = "../imagesPP/06.png";
regularArray[6] = new Image();
regularArray[6].src = "../imagesPP/07.png";
regularArray[7] = new Image();
regularArray[7].src = "../imagesPP/08.png";
regularArray[8] = new Image();
regularArray[8].src = "../imagesPP/09.png";
regularArray[9] = new Image();
regularArray[9].src = "../imagesPP/10.png";

var uniqueObj = {
    "x1": 0,
    "x2": 900,
    "x3": 0,
    "x4": 900,
    "x5": 0,
    "x6": 900,
    "x7": 0,
    "x8": 900,
    "x9": 0,
    "x10": 900,
    "y1": rand(500),
    "y2": rand(500),
    "y3": rand(500),
    "y4": rand(500),
    "y5": rand(500),
    "y6": rand(500),
    "y7": rand(500),
    "y8": rand(500),
    "y9": rand(500),
    "y10": rand(500),
    "changeX1": rand(3),
    "changeX2": rand(3),
    "changeX3": rand(3),
    "changeX4": rand(3),
    "changeX5": rand(3),
    "changeX6": rand(3),
    "changeX7": rand(3),
    "changeX8": rand(3),
    "changeX9": rand(3),
    "changeX10": rand(3),
    "img1": randi(uniqueArray.length),
    "img2": randi(uniqueArray.length),
    "img3": randi(uniqueArray.length),
    "img4": randi(uniqueArray.length),
    "img5": randi(uniqueArray.length),
    "img6": randi(uniqueArray.length),
    "img7": randi(uniqueArray.length),
    "img8": randi(uniqueArray.length),
    "img9": randi(uniqueArray.length),
    "img10": randi(uniqueArray.length)
}

var regularObj = {
    "x1": 0,
    "x2": 900,
    "x3": 0,
    "x4": 900,
    "x5": 0,
    "x6": 900,
    "x7": 0,
    "x8": 900,
    "x9": 0,
    "x10": 900,
    "y1": rand(500),
    "y2": rand(500),
    "y3": rand(500),
    "y4": rand(500),
    "y5": rand(500),
    "y6": rand(500),
    "y7": rand(500),
    "y8": rand(500),
    "y9": rand(500),
    "y10": rand(500),
    "changeX1": rand(3),
    "changeX2": rand(3),
    "changeX3": rand(3),
    "changeX4": rand(3),
    "changeX5": rand(3),
    "changeX6": rand(3),
    "changeX7": rand(3),
    "changeX8": rand(3),
    "changeX9": rand(3),
    "changeX10": rand(3),
    "img1": randi(uniqueArray.length),
    "img2": randi(uniqueArray.length),
    "img3": randi(uniqueArray.length),
    "img4": randi(uniqueArray.length),
    "img5": randi(uniqueArray.length),
    "img6": randi(uniqueArray.length),
    "img7": randi(uniqueArray.length),
    "img8": randi(uniqueArray.length),
    "img9": randi(uniqueArray.length),
    "img10": randi(uniqueArray.length)
}

var o1 = { //hand
    "x": 0,
    "y": 0,
    "w": 500,
    "h": 300,
    "c": 180,
    "a": 0.5,
    "d": 3,
    "angle": 0,
    "changle": 15
}

var o2 = { //sun
    "x": 100,
    "y": 100,
    "r": 30
}

//document.querySelector("#myCanvas").onclick = click;
//document.onkeydown = moveShape;
document.querySelector("#myCanvas").onmousemove = moveHand;
document.querySelector("#myCanvas").onclick = points;
document.querySelector("#buttonS").onclick = start;
document.querySelector("#buttonR").onclick = reset;




////// EXECUTABLE CODE
setUpCanvas();

animationLoop();



////// FUNCTIONS
function animationLoop(){
    clear(); 
    background();  


    if (working == true){
        sun();
        unique();
        uniqueMove();
        bounce(uniqueObj);
        regular();
        regularMove();
        bounce(regularObj);
        collisionOdd();
        collisionEven();

        hand(o1);
    }
    
    // console.log(xP, yP);
    requestAnimationFrame(animationLoop);
}

//collision and following cursor
function collisionOdd(){
    //
    if (uniqueObj.x1 + 100 > regularObj.x2 &&
        uniqueObj.x1 < regularObj.x2 + 100 && 
        uniqueObj.y1 < regularObj.y2 + 100 && 
        uniqueObj.y1 + 100 > regularObj.y2){ //x1 vs x2
            uniqueObj.changeX1 *= -1;            
            regularObj.changeX2 *= -1;
        }
    if (uniqueObj.x3 + 100 > regularObj.x2 && 
        uniqueObj.x3 < regularObj.x2 + 100 && 
        uniqueObj.y3 < regularObj.y2 + 100 && 
        uniqueObj.y3 + 100 > regularObj.y2){ //x3 vs x2
        uniqueObj.changeX3 *= -1;            
        regularObj.changeX2 *= -1;
    }
    if (uniqueObj.x5 + 100 > regularObj.x2 && 
        uniqueObj.x5 < regularObj.x2 + 100 && 
        uniqueObj.y5 < regularObj.y2 + 100 && 
        uniqueObj.y5 + 100 > regularObj.y2){ //x5 vs x2
        uniqueObj.changeX5 *= -1;            
        regularObj.changeX2 *= -1;
    }
    if (uniqueObj.x7 + 100 > regularObj.x2 && 
        uniqueObj.x7 < regularObj.x2 + 100 && 
        uniqueObj.y7 < regularObj.y2 + 100 && 
        uniqueObj.y7 + 100 > regularObj.y2){ //x7 vs x2
        uniqueObj.changeX7 *= -1;            
        regularObj.changeX2 *= -1;
    }
    if (uniqueObj.x9 + 100 > regularObj.x2 && 
        uniqueObj.x9 < regularObj.x2 + 100 && 
        uniqueObj.y9 < regularObj.y2 + 100 && 
        uniqueObj.y9 + 100 > regularObj.y2){ //x9 vs x2
        uniqueObj.changeX9 *= -1;            
        regularObj.changeX2 *= -1;
    }

    //
    if (uniqueObj.x1 + 100 > regularObj.x4 && 
        uniqueObj.x1 < regularObj.x4 + 100 && 
        uniqueObj.y1 < regularObj.y4 + 100 && 
        uniqueObj.y1 + 100 > regularObj.y4){ //x1 vs x4
        uniqueObj.changeX1 *= -1;            
        regularObj.changeX4 *= -1;
    }
    if (uniqueObj.x3 + 100 > regularObj.x4 && 
        uniqueObj.x3 < regularObj.x4 + 100 && 
        uniqueObj.y3 < regularObj.y4 + 100 && 
        uniqueObj.y3 + 100 > regularObj.y4){ //x3 vs x4
        uniqueObj.changeX3 *= -1;            
        regularObj.changeX4 *= -1;
    }
    if (uniqueObj.x5 + 100 > regularObj.x4 && 
        uniqueObj.x5 < regularObj.x4 + 100 && 
        uniqueObj.y5 < regularObj.y4 + 100 && 
        uniqueObj.y5 + 100 > regularObj.y4){ //x5 vs x4
        uniqueObj.changeX5 *= -1;            
        regularObj.changeX4 *= -1;
    }
    if (uniqueObj.x7 + 100 > regularObj.x4 && 
        uniqueObj.x7 < regularObj.x4 + 100 && 
        uniqueObj.y7 < regularObj.y4 + 100 && 
        uniqueObj.y7 + 100 > regularObj.y4){ //x7 vs x4
        uniqueObj.changeX7 *= -1;            
        regularObj.changeX4 *= -1;
    }
    if (uniqueObj.x9 + 100 > regularObj.x4 && 
        uniqueObj.x9 < regularObj.x4 + 100 && 
        uniqueObj.y9 < regularObj.y4 + 100 && 
        uniqueObj.y9 + 100 > regularObj.y4){ //x9 vs x4
        uniqueObj.changeX9 *= -1;            
        regularObj.changeX4 *= -1;
    }

    //
    if (uniqueObj.x1 + 100 > regularObj.x6 && 
        uniqueObj.x1 < regularObj.x6 + 100 && 
        uniqueObj.y1 < regularObj.y6 + 100 && 
        uniqueObj.y1 + 100 > regularObj.y6){ //x1 vs x6
        uniqueObj.changeX1 *= -1;            
        regularObj.changeX6 *= -1;
    }
    if (uniqueObj.x3 + 100 > regularObj.x6 &&
        uniqueObj.x3 < regularObj.x6 + 100 &&  
        uniqueObj.y3 < regularObj.y6 + 100 && 
        uniqueObj.y3 + 100 > regularObj.y6){ //x3 vs x6
        uniqueObj.changeX3 *= -1;            
        regularObj.changeX6 *= -1;
    }
    if (uniqueObj.x5 + 100 > regularObj.x6 && 
        uniqueObj.x5 < regularObj.x6 + 100 && 
        uniqueObj.y5 < regularObj.y6 + 100 && 
        uniqueObj.y5 + 100 > regularObj.y6){ //x5 vs x6
        uniqueObj.changeX5 *= -1;            
        regularObj.changeX6 *= -1;
    }
    if (uniqueObj.x7 + 100 > regularObj.x6 && 
        uniqueObj.x7 < regularObj.x6 + 100 && 
        uniqueObj.y7 < regularObj.y6 + 100 && 
        uniqueObj.y7 + 100 > regularObj.y6){ //x7 vs x6
        uniqueObj.changeX7 *= -1;            
        regularObj.changeX6 *= -1;
    }
    if (uniqueObj.x9 + 100 > regularObj.x6 && 
        uniqueObj.x9 < regularObj.x6 + 100 && 
        uniqueObj.y9 < regularObj.y6 + 100 && 
        uniqueObj.y9 + 100 > regularObj.y6){ //x9 vs x6
        uniqueObj.changeX9 *= -1;            
        regularObj.changeX6 *= -1;
    }

    //
    if (uniqueObj.x1 + 100 > regularObj.x8 && 
        uniqueObj.x1 < regularObj.x8 + 100 && 
        uniqueObj.y1 < regularObj.y8 + 100 && 
        uniqueObj.y1 + 100 > regularObj.y8){ //x1 vs x8
        uniqueObj.changeX1 *= -1;            
        regularObj.changeX8 *= -1;
    }
    if (uniqueObj.x3 + 100 > regularObj.x8 && 
        uniqueObj.x3 < regularObj.x8 + 100 && 
        uniqueObj.y3 < regularObj.y8 + 100 && 
        uniqueObj.y3 + 100 > regularObj.y8){ //x1 vs x8
        uniqueObj.changeX3 *= -1;            
        regularObj.changeX8 *= -1;
    }
    if (uniqueObj.x5 + 100 > regularObj.x8 &&
        uniqueObj.x5 < regularObj.x8 + 100 &&  
        uniqueObj.y5 < regularObj.y8 + 100 && 
        uniqueObj.y5 + 100 > regularObj.y8){ //x1 vs x8
        uniqueObj.changeX5 *= -1;            
        regularObj.changeX8 *= -1;
    }
    if (uniqueObj.x7 + 100 > regularObj.x8 && 
        uniqueObj.x7 < regularObj.x8 + 100 && 
        uniqueObj.y7 < regularObj.y8 + 100 && 
        uniqueObj.y7 + 100 > regularObj.y8){ //x1 vs x8
        uniqueObj.changeX7 *= -1;            
        regularObj.changeX8 *= -1;
    }
    if (uniqueObj.x9 + 100 > regularObj.x8 && 
        uniqueObj.x9 < regularObj.x8 + 100 && 
        uniqueObj.y9 < regularObj.y8 + 100 && 
        uniqueObj.y9 + 100 > regularObj.y8){ //x1 vs x8
        uniqueObj.changeX9 *= -1;            
        regularObj.changeX8 *= -1;
    }

    //
    if (uniqueObj.x1 + 100 > regularObj.x10 && 
        uniqueObj.x1 < regularObj.x10 + 100 && 
        uniqueObj.y1 < regularObj.y10 + 100 && 
        uniqueObj.y1 + 100 > regularObj.y10){ //x1 vs x10
        uniqueObj.changeX1 *= -1;            
        regularObj.changeX10 *= -1;
    }
    if (uniqueObj.x3 + 100 > regularObj.x10 && 
        uniqueObj.x3 < regularObj.x10 + 100 && 
        uniqueObj.y3 < regularObj.y10 + 100 && 
        uniqueObj.y3 + 100 > regularObj.y10){ //x3 vs x10
        uniqueObj.changeX3 *= -1;            
        regularObj.changeX10 *= -1;
    }
    if (uniqueObj.x5 + 100 > regularObj.x10 && 
        uniqueObj.x5 < regularObj.x10 + 100 && 
        uniqueObj.y5 < regularObj.y10 + 100 && 
        uniqueObj.y5 + 100 > regularObj.y10){ //x5 vs x10
        uniqueObj.changeX5 *= -1;            
        regularObj.changeX10 *= -1;
    }
    if (uniqueObj.x7 + 100 > regularObj.x10 && 
        uniqueObj.x7 < regularObj.x10 + 100 && 
        uniqueObj.y7 < regularObj.y10 + 100 && 
        uniqueObj.y7 + 100 > regularObj.y10){ //x7 vs x10
        uniqueObj.changeX7 *= -1;            
        regularObj.changeX10 *= -1;
    }
    if (uniqueObj.x9 + 100 > regularObj.x10 && 
        uniqueObj.x9 < regularObj.x10 + 100 && 
        uniqueObj.y9 < regularObj.y10 + 100 && 
        uniqueObj.y9 + 100 > regularObj.y10){ //x9 vs x10
        uniqueObj.changeX9 *= -1;            
        regularObj.changeX10 *= -1;
    }
}

function collisionEven(){
    if (uniqueObj.x2 < regularObj.x1 + 100 && 
        uniqueObj.x2 + 100 > regularObj.x1 && 
        uniqueObj.y2 < regularObj.y1 + 100 && 
        uniqueObj.y2 + 100 > regularObj.y1){ //x2 vs x1
            uniqueObj.changeX2 *= -1;            
            regularObj.changeX1 *= -1;
    }
    if (uniqueObj.x2 < regularObj.x3 + 100 && 
        uniqueObj.x2 + 100 > regularObj.x3 && 
        uniqueObj.y2 < regularObj.y3 + 100 && 
        uniqueObj.y2 + 100 > regularObj.y3){ //x2 vs x3
            uniqueObj.changeX2 *= -1;            
            regularObj.changeX3 *= -1;
    }
    if (uniqueObj.x2 < regularObj.x5 + 100 && 
        uniqueObj.x2 + 100 > regularObj.x5 && 
        uniqueObj.y2 < regularObj.y5 + 100 && 
        uniqueObj.y2 + 100 > regularObj.y5){ //x2 vs x1
            uniqueObj.changeX2 *= -1;            
            regularObj.changeX5 *= -1;
    }
    if (uniqueObj.x2 < regularObj.x7 + 100 && 
        uniqueObj.x2 + 100 > regularObj.x7 && 
        uniqueObj.y2 < regularObj.y7 + 100 && 
        uniqueObj.y2 + 100 > regularObj.y7){ //x2 vs x1
            uniqueObj.changeX2 *= -1;            
            regularObj.changeX7 *= -1;
    }
    if (uniqueObj.x2 < regularObj.x9 + 100 && 
        uniqueObj.x2 + 100 > regularObj.x9 && 
        uniqueObj.y2 < regularObj.y9 + 100 && 
        uniqueObj.y2 + 100 > regularObj.y9){ //x2 vs x1
            uniqueObj.changeX2 *= -1;            
            regularObj.changeX9 *= -1;
    }

    //
    if (uniqueObj.x4 < regularObj.x1 + 100 && 
        uniqueObj.x4 + 100 > regularObj.x1 && 
        uniqueObj.y4 < regularObj.y1 + 100 && 
        uniqueObj.y4 + 100 > regularObj.y1){ //x4 vs x1
            uniqueObj.changeX4 *= -1;            
            regularObj.changeX1 *= -1;
    }
    if (uniqueObj.x4 < regularObj.x3 + 100 && 
        uniqueObj.x4 + 100 > regularObj.x3 && 
        uniqueObj.y4 < regularObj.y3 + 100 && 
        uniqueObj.y4 + 100 > regularObj.y3){ //x4 vs x3
            uniqueObj.changeX4 *= -1;            
            regularObj.changeX3 *= -1;
    }
    if (uniqueObj.x4 < regularObj.x5 + 100 && 
        uniqueObj.x4 + 100 > regularObj.x5 && 
        uniqueObj.y4 < regularObj.y5 + 100 && 
        uniqueObj.y4 + 100 > regularObj.y5){ //x4 vs x5
            uniqueObj.changeX4 *= -1;            
            regularObj.changeX5 *= -1;
    }
    if (uniqueObj.x4 < regularObj.x7 + 100 && 
        uniqueObj.x4 + 100 > regularObj.x7 && 
        uniqueObj.y4 < regularObj.y7 + 100 && 
        uniqueObj.y4 + 100 > regularObj.y7){ //x4 vs x7
            uniqueObj.changeX4 *= -1;            
            regularObj.changeX7 *= -1;
    }
    if (uniqueObj.x4 < regularObj.x9 + 100 &&
        uniqueObj.x4 + 100 > regularObj.x9 &&  
        uniqueObj.y4 < regularObj.y9 + 100 && 
        uniqueObj.y4 + 100 > regularObj.y9){ //x4 vs x9
            uniqueObj.changeX4 *= -1;            
            regularObj.changeX9 *= -1;
    }

    //
    if (uniqueObj.x6 < regularObj.x1 + 100 && 
        uniqueObj.x6 + 100 > regularObj.x1 && 
        uniqueObj.y6 < regularObj.y1 + 100 && 
        uniqueObj.y6 + 100 > regularObj.y1){ //x6 vs x1
            uniqueObj.changeX6 *= -1;            
            regularObj.changeX1 *= -1;
    }
    if (uniqueObj.x6 < regularObj.x3 + 100 &&
        uniqueObj.x6 + 100 > regularObj.x3 &&  
        uniqueObj.y6 < regularObj.y3 + 100 && 
        uniqueObj.y6 + 100 > regularObj.y3){ //x6 vs x3
            uniqueObj.changeX6 *= -1;            
            regularObj.changeX3 *= -1;
    }
    if (uniqueObj.x6 < regularObj.x5 + 100 && 
        uniqueObj.x6 + 100 > regularObj.x5 && 
        uniqueObj.y6 < regularObj.y5 + 100 && 
        uniqueObj.y6 + 100 > regularObj.y5){ //x6 vs x5
            uniqueObj.changeX6 *= -1;            
            regularObj.changeX5 *= -1;
    }
    if (uniqueObj.x6 < regularObj.x7 + 100 && 
        uniqueObj.x6 + 100 > regularObj.x7 && 
        uniqueObj.y6 < regularObj.y7 + 100 && 
        uniqueObj.y6 + 100 > regularObj.y7){ //x6 vs x7
            uniqueObj.changeX6 *= -1;            
            regularObj.changeX7 *= -1;
    }
    if (uniqueObj.x6 < regularObj.x9 + 100 && 
        uniqueObj.x6 + 100 > regularObj.x9 && 
        uniqueObj.y6 < regularObj.y9 + 100 && 
        uniqueObj.y6 + 100 > regularObj.y9){ //x6 vs x9
            uniqueObj.changeX6 *= -1;            
            regularObj.changeX9 *= -1;
    }

    //
    if (uniqueObj.x8 < regularObj.x1 + 100 && 
        uniqueObj.x8 + 100 > regularObj.x1 && 
        uniqueObj.y8 < regularObj.y1 + 100 && 
        uniqueObj.y8 + 100 > regularObj.y1){ //x8 vs x1
            uniqueObj.changeX8 *= -1;            
            regularObj.changeX1 *= -1;
    }
    if (uniqueObj.x8 < regularObj.x3 + 100 && 
        uniqueObj.x8 + 100 > regularObj.x3 && 
        uniqueObj.y8 < regularObj.y3 + 100 && 
        uniqueObj.y8 + 100 > regularObj.y3){ //x8 vs x3
            uniqueObj.changeX8 *= -1;            
            regularObj.changeX3 *= -1;
    }
    if (uniqueObj.x8 < regularObj.x5 + 100 && 
        uniqueObj.x8 + 100 > regularObj.x5 && 
        uniqueObj.y8 < regularObj.y5 + 100 && 
        uniqueObj.y8 + 100 > regularObj.y5){ //x8 vs x5
            uniqueObj.changeX8 *= -1;            
            regularObj.changeX5 *= -1;
    }
    if (uniqueObj.x8 < regularObj.x7 + 100 && 
        uniqueObj.x8 + 100 > regularObj.x7 && 
        uniqueObj.y8 < regularObj.y7 + 100 && 
        uniqueObj.y8 + 100 > regularObj.y7){ //x8 vs x7
            uniqueObj.changeX8 *= -1;            
            regularObj.changeX7 *= -1;
    }
    if (uniqueObj.x8 < regularObj.x9 + 100 && 
        uniqueObj.x8 + 100 > regularObj.x9 && 
        uniqueObj.y8 < regularObj.y9 + 100 && 
        uniqueObj.y8 + 100 > regularObj.y9){ //x8 vs x9
            uniqueObj.changeX8 *= -1;            
            regularObj.changeX9 *= -1;
    }

    //
    if (uniqueObj.x10 < regularObj.x1 + 100 && 
        uniqueObj.x10 + 100 > regularObj.x1 && 
        uniqueObj.y10 < regularObj.y1 + 100 && 
        uniqueObj.y10 + 100 > regularObj.y1){ //x10 vs x1
            uniqueObj.changeX10 *= -1;            
            regularObj.changeX1 *= -1;
    }
    if (uniqueObj.x10 < regularObj.x3 + 100 && 
        uniqueObj.x10 + 100 > regularObj.x3 && 
        uniqueObj.y10 < regularObj.y3 + 100 && 
        uniqueObj.y10 + 100 > regularObj.y3){ //x10 vs x3
            uniqueObj.changeX10 *= -1;            
            regularObj.changeX3 *= -1;
    }
    if (uniqueObj.x10 < regularObj.x5 + 100 &&
        uniqueObj.x10 + 100 > regularObj.x5 &&  
        uniqueObj.y10 < regularObj.y5 + 100 && 
        uniqueObj.y10 + 100 > regularObj.y5){ //x10 vs x5
            uniqueObj.changeX10 *= -1;            
            regularObj.changeX5 *= -1;
    }
    if (uniqueObj.x10 < regularObj.x7 + 100 &&
        uniqueObj.x10 + 100 > regularObj.x7 &&  
        uniqueObj.y10 < regularObj.y7 + 100 && 
        uniqueObj.y10 + 100 > regularObj.y7){ //x10 vs x7
            uniqueObj.changeX10 *= -1;            
            regularObj.changeX7 *= -1;
    }
    if (uniqueObj.x10 < regularObj.x9 + 100 && 
        uniqueObj.x10 + 100 > regularObj.x9 && 
        uniqueObj.y10 < regularObj.y9 + 100 && 
        uniqueObj.y10 + 100 > regularObj.y9){ //x10 vs x9
            uniqueObj.changeX10 *= -1;            
            regularObj.changeX9 *= -1;
    }
}

function moveHand(mouseEvent){ // (1)
    var c = document.querySelector("#myCanvas");
    var cLeft = 0;
    var cTop = 0;

    while (c.offsetParent) {
        cLeft += c.offsetLeft;
        cTop += c.offsetTop;
        c = c.offsetParent;
    }

    if (mouseEvent) {
        xPos = mouseEvent.pageX;
        yPos = mouseEvent.pageY;
    }
    else {
        xPos = window.event.x + document.body.scrollLeft - 2;
        yPos = window.event.y + document.body.scrollTop - 2;
    }

    xPos -= cLeft;
    yPos -= cTop;
    document.querySelector("#myCanvas").innerHTML = xPos + ", " + yPos;
    xP = xPos;
    yP = yPos;

}

//points
function points(event){
    // console.log(event.offsetY, event.offsetX, uniqueObj.y1, event.offsetY);
    if(event.offsetX > uniqueObj.x1 && event.offsetX < uniqueObj.x1+100 
        && event.offsetY > uniqueObj.y1 && event.offsetY < uniqueObj.y1+100){
        uniqueObj.x1 = 1200;
        uniqueObj.changeX1 = 0;
        counter++;
        guide = document.getElementById("p2").innerHTML = "++";
        // console.log(counter);
    }
    if(event.offsetX > uniqueObj.x2 && event.offsetX < uniqueObj.x2+100 
        && event.offsetY > uniqueObj.y2 && event.offsetY < uniqueObj.y2+100){
        uniqueObj.x2 = 1200;
        uniqueObj.changeX2 = 0;
        counter++;
        guide = document.getElementById("p2").innerHTML = "++";
    }
    if(event.offsetX > uniqueObj.x3 && event.offsetX < uniqueObj.x3+100 
        && event.offsetY > uniqueObj.y3 && event.offsetY < uniqueObj.y3+100){
        uniqueObj.x3 = 1200;
        uniqueObj.changeX3 = 0;
        counter++;
        guide = document.getElementById("p2").innerHTML = "++";
    }
    if(event.offsetX > uniqueObj.x4 && event.offsetX < uniqueObj.x4+100 
        && event.offsetY > uniqueObj.y4 && event.offsetY < uniqueObj.y4+100){
        uniqueObj.x4 = 1200;
        uniqueObj.changeX4 = 0;
        counter++;
        guide = document.getElementById("p2").innerHTML = "++";
    }
    if(event.offsetX > uniqueObj.x5 && event.offsetX < uniqueObj.x5+100 
        && event.offsetY > uniqueObj.y5 && event.offsetY < uniqueObj.y5+100){
        uniqueObj.x5 = 1200;
        uniqueObj.changeX5 = 0;
        counter++;
        guide = document.getElementById("p2").innerHTML = "++";
    }
    if(event.offsetX > uniqueObj.x6 && event.offsetX < uniqueObj.x6+100 
        && event.offsetY > uniqueObj.y6 && event.offsetY < uniqueObj.y6+100){
        uniqueObj.x6 = 1200;
        uniqueObj.changeX6 = 0;
        counter++;
        guide = document.getElementById("p2").innerHTML = "++";
    }
    if(event.offsetX > uniqueObj.x7 && event.offsetX < uniqueObj.x7+100 
        && event.offsetY > uniqueObj.y7 && event.offsetY < uniqueObj.y7+100){
        uniqueObj.x7 = 1200;
        uniqueObj.changeX7 = 0;
        counter++;
        guide = document.getElementById("p2").innerHTML = "++";
    }
    if(event.offsetX > uniqueObj.x8 && event.offsetX < uniqueObj.x8+100 
        && event.offsetY > uniqueObj.y8 && event.offsetY < uniqueObj.y8+100){
        uniqueObj.x8 = 1200;
        uniqueObj.changeX8 = 0;
        counter++;
        guide = document.getElementById("p2").innerHTML = "++";
    }
    if(event.offsetX > uniqueObj.x9 && event.offsetX < uniqueObj.x9+100 
        && event.offsetY > uniqueObj.y9 && event.offsetY < uniqueObj.y9+100){
        uniqueObj.x9 = 1200;
        uniqueObj.changeX9 = 0;
        counter++;
        guide = document.getElementById("p2").innerHTML = "++";
    }
    if(event.offsetX > uniqueObj.x10 && event.offsetX < uniqueObj.x10+100 
        && event.offsetY > uniqueObj.y10 && event.offsetY < uniqueObj.y10+100){
        uniqueObj.x10 = 1200;
        uniqueObj.changeX10 = 0;
        counter++;
        guide = document.getElementById("p2").innerHTML = "++";
    }

    //regular clouds
    if(event.offsetX > regularObj.x1 && event.offsetX < regularObj.x1+100 
        && event.offsetY > regularObj.y1 && event.offsetY < regularObj.y1+100){
        regularObj.x1 = 1200;
        regularObj.changeX1 = 0;
        counter--;
        guide = document.getElementById("p2").innerHTML = "--";
    }
    if(event.offsetX > regularObj.x2 && event.offsetX < regularObj.x2+100 
        && event.offsetY > regularObj.y2 && event.offsetY < regularObj.y2+100){
        regularObj.x2 = 1200;
        regularObj.changeX2 = 0;
        counter--;
        guide = document.getElementById("p2").innerHTML = "--";
    }
    if(event.offsetX > regularObj.x3 && event.offsetX < regularObj.x3+100 
        && event.offsetY > regularObj.y3 && event.offsetY < regularObj.y3+100){
        regularObj.x3 = 1200;
        regularObj.changeX3 = 0;
        counter--;
        guide = document.getElementById("p2").innerHTML = "--";
    }
    if(event.offsetX > regularObj.x4 && event.offsetX < regularObj.x4+100 
        && event.offsetY > regularObj.y4 && event.offsetY < regularObj.y4+100){
        regularObj.x4 = 1200;
        regularObj.changeX4 = 0;
        counter--;
        guide = document.getElementById("p2").innerHTML = "--";
    }
    if(event.offsetX > regularObj.x5 && event.offsetX < regularObj.x5+100 
        && event.offsetY > regularObj.y5 && event.offsetY < regularObj.y5+100){
        regularObj.x5 = 1200;
        regularObj.changeX5 = 0;
        counter--;
        guide = document.getElementById("p2").innerHTML = "--";
    }
    if(event.offsetX > regularObj.x6 && event.offsetX < regularObj.x6+100 
        && event.offsetY > regularObj.y6 && event.offsetY < regularObj.y6+100){
        regularObj.x6 = 1200;
        regularObj.changeX6 = 0;
        counter--;
        guide = document.getElementById("p2").innerHTML = "--";
    }
    if(event.offsetX > regularObj.x7 && event.offsetX < regularObj.x7+100 
        && event.offsetY > regularObj.y7 && event.offsetY < regularObj.y7+100){
        regularObj.x7 = 1200;
        regularObj.changeX7 = 0;
        counter--;
        guide = document.getElementById("p2").innerHTML = "--";
    }
    if(event.offsetX > regularObj.x8 && event.offsetX < regularObj.x8+100 
        && event.offsetY > regularObj.y8 && event.offsetY < regularObj.y8+100){
        regularObj.x8 = 1200;
        regularObj.changeX8 = 0;
        counter--;
        guide = document.getElementById("p2").innerHTML = "--";
    }
    if(event.offsetX > regularObj.x9 && event.offsetX < regularObj.x9+100 
        && event.offsetY > regularObj.y9 && event.offsetY < regularObj.y9+100){
        regularObj.x9 = 1200;
        regularObj.changeX9 = 0;
        counter--;
        guide = document.getElementById("p2").innerHTML = "--";
    }
    if(event.offsetX > regularObj.x10 && event.offsetX < regularObj.x10+100 
        && event.offsetY > regularObj.y10 && event.offsetY < regularObj.y10+100){
        regularObj.x10 = 1200;
        regularObj.changeX10 = 0;
        counter--;
        guide = document.getElementById("p2").innerHTML = "--";
    }

    //sun
    if(event.offsetX > 170 && event.offsetX < 230
        && event.offsetY > 70 && event.offsetY < 130){
        guide = document.getElementById("p2").innerHTML = "YEOWCH!";
        counter -= 100;
    }

    return guide
}

//other shapes
function hand(o){
    o.x = xP;
    o.y = yP;

    ctx.beginPath();
    ctx.moveTo(o.x-285,o.y-475); //a
    ctx.lineTo(o.x-430,o.y-260); //b
    ctx.lineTo(o.x-50,o.y-485); //c
    ctx.lineTo(o.x,o.y-490); //d
    ctx.lineTo(o.x+65,o.y-480); //e
    ctx.lineTo(o.x+130,o.y-400); //f
    ctx.lineTo(o.x+265,o.y-310); //g
    ctx.lineTo(o.x+370,o.y-210); //h
    ctx.lineTo(o.x+410,o.y-200); //i
    ctx.lineTo(o.x+400,o.y-225) //j
    ctx.lineTo(o.x+475,o.y-310); //k
    ctx.lineTo(o.x+570,o.y-330); //l
    ctx.lineTo(o.x+620,o.y-300); //m
    ctx.lineTo(o.x+625,o.y-200); //n
    ctx.lineTo(o.x+620,o.y-130); //o
    ctx.lineTo(o.x+575,o.y-65); //p
    ctx.lineTo(o.x+590,o.y+15); //q
    ctx.lineTo(o.x+635,o.y+70); //r
    ctx.lineTo(o.x+570,o.y+225); //s
    ctx.lineTo(o.x+360,o.y+410); //t
    ctx.lineTo(o.x+150,o.y+550); //u
    ctx.lineTo(o.x+115,o.y+625); //v
    ctx.lineTo(o.x-1000,o.y+625); //w
    ctx.lineTo(o.x-980,o.y+440); //x
    ctx.lineTo(o.x-975,o.y+15); //y
    ctx.lineTo(o.x-1000,o.y-65); //z
    ctx.lineTo(o.x-1000,o.y-625); //A
    ctx.lineTo(o.x-865,o.y-265); //B
    ctx.lineTo(o.x-800,o.y-625); //C
    ctx.lineTo(o.x-580,o.y-625); //D
    ctx.lineTo(o.x-635,o.y-475); //E
    ctx.lineTo(o.x-480,o.y-625); //F
    ctx.lineTo(o.x-150,o.y-625); //G
    ctx.lineTo(o.x-260,o.y-580); //H
    ctx.lineTo(o.x-285,o.y-475); //a
    ctx.closePath();

    ctx.moveTo(o.x,o.y);
    ctx.lineTo(o.x+30,o.y-360);
    ctx.lineTo(o.x+25,o.y-225);
    ctx.lineTo(o.x-25,o.y-180);
    ctx.lineTo(o.x-60,o.y-155);
    ctx.lineTo(o.x-160,o.y-125);
    ctx.lineTo(o.x-225,o.y-180);
    ctx.lineTo(o.x-160,o.y-110);
    ctx.lineTo(o.x-145,o.y-55);
    ctx.lineTo(o.x-170,o.y);
    ctx.lineTo(o.x-240,o.y+55);
    ctx.lineTo(o.x-320,o.y+35);
    ctx.lineTo(o.x-260,o.y+70);
    ctx.lineTo(o.x-50,o.y+200);
    ctx.lineTo(o.x-15,o.y+245);
    ctx.lineTo(o.x+210,o.y+130);
    ctx.lineTo(o.x+190,o.y+105);
    ctx.lineTo(o.x+180,o.y+75);
    ctx.lineTo(o.x+200,o.y-80);
    ctx.lineTo(o.x+210,o.y-110);
    ctx.lineTo(o.x+250,o.y-145);
    ctx.lineTo(o.x+200,o.y-125);
    ctx.lineTo(o.x+165,o.y-120);
    ctx.lineTo(o.x+130,o.y-135);
    ctx.lineTo(o.x+40,o.y-220);
    ctx.lineTo(o.x+30,o.y-360);
    ctx.closePath();

    ctx.fillStyle = "#000000";
    ctx.fill();
}

function sun(){
    ctx.beginPath();
    ctx.arc(200,100,30,0, 2*Math.PI);
    ctx.fillStyle = "hsl(51, 100%, 52%)";
    ctx.fill();
}

//moving and bouncing
function uniqueMove(){
    if(sec == matchSec-5 || sec<matchSec-5){ //25sec
        uniqueObj.x1 += uniqueObj.changeX1;
        uniqueObj.x2 += uniqueObj.changeX2;
    }
    if(sec == matchSec-10 || sec<matchSec-10){ //20sec
        uniqueObj.x3 += uniqueObj.changeX3;
        uniqueObj.x4 += uniqueObj.changeX4;
    }
    if(sec == matchSec-15 || sec<matchSec-15){ //15sec
        uniqueObj.x5 += uniqueObj.changeX5;
        uniqueObj.x6 += uniqueObj.changeX6;
    }
    if(sec == matchSec-20 || sec<matchSec-20){ //10sec
        uniqueObj.x7 += uniqueObj.changeX7;
        uniqueObj.x8 += uniqueObj.changeX8;
    }
    if(sec == matchSec-25 || sec<matchSec-25){ //5sec
        uniqueObj.x9 += uniqueObj.changeX9;
        uniqueObj.x10 += uniqueObj.changeX10;
    }
}

function regularMove(){
    if(sec == matchSec-5 || sec<matchSec-5){ //25sec
        regularObj.x1 += regularObj.changeX1;
        regularObj.x2 += regularObj.changeX2;
    }
    if(sec == matchSec-10 || sec<matchSec-10){ //20sec
        regularObj.x3 += regularObj.changeX3;
        regularObj.x4 += regularObj.changeX4;
    }
    if(sec == matchSec-15 || sec<matchSec-15){ //15sec
        regularObj.x5 += regularObj.changeX5;
        regularObj.x6 += regularObj.changeX6;
    }
    if(sec == matchSec-20 || sec<matchSec-20){ //10sec
        regularObj.x7 += regularObj.changeX7;
        regularObj.x8 += regularObj.changeX8;
    }
    if(sec == matchSec-25 || sec<matchSec-25){ //5sec
        regularObj.x9 += regularObj.changeX9;
        regularObj.x10 += regularObj.changeX10;
    }
}

function bounce(o){   
    if(o.x1 > 900 || o.x1 < 0){
        o.changeX1 *= -1;
    }
    if(o.x2 > 900 || o.x2 < 0){
        o.changeX2 *= -1;
    }
    if(o.x3 > 900 || o.x3 < 0){
        o.changeX3 *= -1;
    }
    if(o.x4 > 900 || o.x4 < 0){
        o.changeX4 *= -1;
    }
    if(o.x5 > 900 || o.x5 < 0){
        o.changeX5 *= -1;
    }
    if(o.x6 > 900 || o.x6 < 0){
        o.changeX6 *= -1;
    }
    if(o.x7 > 900 || o.x7 < 0){
        o.changeX7 *= -1;
    }
    if(o.x8 > 900 || o.x8 < 0){
        o.changeX8 *= -1;
    }
    if(o.x9 > 900 || o.x9 < 0){
        o.changeX9 *= -1;
    }
    if(o.x10 > 900 || o.x10 < 0){
        o.changeX10 *= -1;
    }
}

//drawing images
function unique(){
    if(sec == matchSec-5 || sec<matchSec-5){ //25sec
        ctx.drawImage(uniqueArray[uniqueObj.img1], uniqueObj.x1, uniqueObj.y1);
        ctx.drawImage(uniqueArray[uniqueObj.img2], uniqueObj.x2, uniqueObj.y2);  
    }
    if(sec == matchSec-10 || sec<matchSec-10){ //20sec
        ctx.drawImage(uniqueArray[uniqueObj.img3], uniqueObj.x3, uniqueObj.y3);
        ctx.drawImage(uniqueArray[uniqueObj.img4], uniqueObj.x4, uniqueObj.y4);  
    }
    if(sec == matchSec-15 || sec<matchSec-15){ //15sec
        ctx.drawImage(uniqueArray[uniqueObj.img5], uniqueObj.x5, uniqueObj.y5);
        ctx.drawImage(uniqueArray[uniqueObj.img6], uniqueObj.x6, uniqueObj.y6);  
    }
    if(sec == matchSec-20 || sec<matchSec-20){ //10sec
        ctx.drawImage(uniqueArray[uniqueObj.img7], uniqueObj.x7, uniqueObj.y7);
        ctx.drawImage(uniqueArray[uniqueObj.img8], uniqueObj.x8, uniqueObj.y8);  
    }
    if(sec == matchSec-25 || sec<matchSec-25){ //5sec
        ctx.drawImage(uniqueArray[uniqueObj.img9], uniqueObj.x9, uniqueObj.y9);
        ctx.drawImage(uniqueArray[uniqueObj.img10], uniqueObj.x10, uniqueObj.y10);  
    }
}

function regular(){
    if(sec == matchSec-5 || sec<matchSec-5){ //20sec
        ctx.drawImage(regularArray[regularObj.img1], regularObj.x1, regularObj.y1);
        ctx.drawImage(regularArray[regularObj.img2], regularObj.x2, regularObj.y2);  
    }
    if(sec == matchSec-10 || sec<matchSec-10){ //20sec
        ctx.drawImage(regularArray[regularObj.img3], regularObj.x3, regularObj.y3);
        ctx.drawImage(regularArray[regularObj.img4], regularObj.x4, regularObj.y4);  
    }
    if(sec == matchSec-15 || sec<matchSec-15){ //20sec
        ctx.drawImage(regularArray[regularObj.img5], regularObj.x5, regularObj.y5);
        ctx.drawImage(regularArray[regularObj.img6], regularObj.x6, regularObj.y6);  
    }
    if(sec == matchSec-20 || sec<matchSec-20){ //20sec
        ctx.drawImage(regularArray[regularObj.img7], regularObj.x7, regularObj.y7);
        ctx.drawImage(regularArray[regularObj.img8], regularObj.x8, regularObj.y8);  
    }
    if(sec == matchSec-25 || sec<matchSec-25){ //20sec
        ctx.drawImage(regularArray[regularObj.img9], regularObj.x9, regularObj.y9);
        ctx.drawImage(regularArray[regularObj.img10], regularObj.x10, regularObj.y10);  
    }
}


//start and restart
function reset(){
    working = false;
    uniqueObj.img = randi(uniqueArray.length);
    counter = 0;


    uniqueObj.x1 = 0;
    uniqueObj.x2 = 900;
    uniqueObj.x3 = 0;
    uniqueObj.x4 = 900;
    uniqueObj.x5 = 0;
    uniqueObj.x6 = 900;
    uniqueObj.x7 = 0;
    uniqueObj.x8 = 900;
    uniqueObj.x9 = 0;
    uniqueObj.x10 = 900;
    uniqueObj.changeX1 = rand(3);
    uniqueObj.changeX2 = rand(3);
    uniqueObj.changeX3 = rand(3);
    uniqueObj.changeX4 = rand(3);
    uniqueObj.changeX5 = rand(3);
    uniqueObj.changeX6 = rand(3);
    uniqueObj.changeX7 = rand(3);
    uniqueObj.changeX8 = rand(3);
    uniqueObj.changeX9 = rand(3);
    uniqueObj.changeX10 = rand(3);

    regularObj.x1 = 0;
    regularObj.x2 = 900;
    regularObj.x3 = 0;
    regularObj.x4 = 900;
    regularObj.x5 = 0;
    regularObj.x6 = 900;
    regularObj.x7 = 0;
    regularObj.x8 = 900;
    regularObj.x9 = 0;
    regularObj.x10 = 900;
    regularObj.changeX1 = rand(3);
    regularObj.changeX2 = rand(3);
    regularObj.changeX3 = rand(3);
    regularObj.changeX4 = rand(3);
    regularObj.changeX5 = rand(3);
    regularObj.changeX6 = rand(3);
    regularObj.changeX7 = rand(3);
    regularObj.changeX8 = rand(3);
    regularObj.changeX9 = rand(3);
    regularObj.changeX10 = rand(3);

    audio.pause();
    audio.load();


    guide = document.getElementById("p2").innerHTML = "Press the Start button to begin!";
    clearInterval(timer);    
    // console.log(working);
    return working, counter, uniqueObj.x1, uniqueObj.x2, uniqueObj.x3, uniqueObj.x4, uniqueObj.x5, uniqueObj.x5, uniqueObj.x6,
        uniqueObj.x7, uniqueObj.x8, uniqueObj.x9, uniqueObj.x10, uniqueObj.changeX1, uniqueObj.changeX2, uniqueObj.changeX3, uniqueObj.changeX4, 
        uniqueObj.changeX5, uniqueObj.changeX6, uniqueObj.changeX7, uniqueObj.changeX8, uniqueObj.changeX9, uniqueObj.changeX10, regularObj.x1, regularObj.x2, 
        regularObj.x3, regularObj.x4, regularObj.x5, regularObj.x5, regularObj.x6, regularObj.x7, regularObj.x8, regularObj.x9, regularObj.x10, 
        regularObj.changeX1, regularObj.changeX2, regularObj.changeX3, regularObj.changeX4, regularObj.changeX5, regularObj.changeX6, regularObj.changeX7, 
        regularObj.changeX8, regularObj.changeX9, regularObj.changeX10, guide
}

function start(){ //(2)
    sec = 30;
    guide = document.getElementById("p2").innerHTML = "Go Go Go!";
    timer = setInterval(function(){
    sec--;
    if (sec >= 10){
        document.getElementById("timer").innerHTML="00:"+sec;
    }
    if (sec < 10){
        document.getElementById("timer").innerHTML="00:0"+sec;
    }
    if (sec == 0) {
        audio.pause();
        audio.load();
        clearInterval(timer);
        working = false;
        if (counter == 10){
            guide = document.getElementById("p2").innerHTML = "CONGRATULATIONS! You got "+counter+" points!";
        }
        if (counter < 10 && counter > 0){
            guide = document.getElementById("p2").innerHTML = "You got "+counter+" points!";
        }
        if (counter == 0){
            guide = document.getElementById("p2").innerHTML = "You got "+counter+" points. Did you press too much or not enough?";
        }
        if (counter < 0){
            guide = document.getElementById("p2").innerHTML = "You got "+counter+" points. wowie maybe next time?";
        }
        if (counter <= -100){
            guide = document.getElementById("p2").innerHTML = "You got "+counter+" points. Love staring at the sun dontcha?";
        }
        // console.log(counter);
    }}, 1000); 
    audio.play();   
    working = true;
    // console.log("start");
    return working, sec, guide
}

//setup
function background(){
    ctx.beginPath();
    ctx.rect(0, 0, w, h);
    ctx.fillStyle = "hsl(202, 100%, 68%)";
    ctx.fill();
    
}

function clear(){
    ctx.clearRect(0,0,w,h);
}

function rand(r){
    var result = Math.random()*r;
    return result
}

function randN(r){
    var result = Math.random()*r - r/2;
    return result
}

function randi(r){
    var result = Math.floor(Math.random()*r);
    return result
}

function setUpCanvas(){
    canvas = document.querySelector("#myCanvas");
    ctx = canvas.getContext("2d");
    canvas.width = w;
    canvas.height = h;
    canvas.style.border = "2px solid black";
}



console.log("Final Project");



////// REFERENCES

//(1) https://nerdparadise.com/programming/javascriptmouseposition
// This helped me connect my shape to the cursor

//(2) https://stackoverflow.com/questions/15606480/how-does-setinterval-work-with-button-onclick
//https://stackoverflow.com/questions/31559469/how-to-create-a-simple-javascript-timer
// These helped me figure out how to create my timer

//(3) https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_animations
// https://www.codegrepper.com/code-examples/javascript/array+of+images+javascript
// These assisted me in learning how to put images into arrays

//(4)https://stackoverflow.com/questions/9419263/how-to-play-audio
// this taught me how to add audio

//(5)https://www.w3schools.com/js/js_htmldom_html.asp
// This showed me how to change texts



////// UNUSED CODE
//document.querySelector("#myCanvas").addEventListener("mousemove", setMousePosition, false);
// function setMousePosition(e) {
//     console.log(canvasPos.x);        

//     mouseX = e.clientX - canvasPos.x;
//     mouseY = e.clientY - canvasPos.y;
// } 

// function getPosition(el) {
//     var xPosition = 0;
//     var yPosition = 0;
   
//     while (el) {
//       xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
//       yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
//       el = el.offsetParent;    

//     }

//     return {
//       "x": xPosition,
//       "y": yPosition
//     };
//   }

// if (timeStart == true){
//     timer = setInterval(countdown, 1000);
//     console.log(sec);
// }    

// var timeUni = setInterval(function(){
        // for(let i=0;i<uniqueArray.length;i++){
            // if (tell == true){
            // ctx.drawImage(uniqueArray[0], uniqueObj.x, uniqueObj.y);}
            // if (sec == 0) {
            //     clearInterval(timeUni);
            // }
            // console.log(uniqueArray[num]);
        // }
    // }, 2000);
    
// function cloudObj(a, x, y, dx, dy){
//     a.push({
//         "x": x,
//         "y": y,
//         "r": 50,
//         "a": 1,
//         "changeX": dx,
//         "changeY": dy,
//     })
// }

// function teller(){     
//     if (sec%2 == 0 && sec>0){
//         tell = true;
//     }
//     // console.log(tell);
//     return tell
// }    

// for(var i = 0; i<6; i++){
        
    //     // var randAr = randi(uniqueArray.length);
    //     if(){ //25sec
            
            
    //     } 
    //     else{

    //     }
        
    // }

        // var remove = uniqueObj.img1
        // index = uniqueArray.indexOf(uniqueObj);
        // uniqueArray.splice(index, remove);

    // var index = 0;
    // if(sec == matchSec-5 || sec<matchSec-5){ //20sec
    //     ctx.drawImage(uniqueArray[uniqueObj.img+1], uniqueObj.xx, uniqueObj.yy); 
    //     ctx.drawImage(uniqueArray[uniqueObj.img], uniqueObj.x, uniqueObj.y);}
    // if(sec == matchSec-10 || sec<matchSec-10){ //15sec
    //     ctx.drawImage(uniqueArray[uniqueObj.img+2], uniqueObj.xxx, uniqueObj.yyy);
    //     ctx.drawImage(uniqueArray[uniqueObj.img], uniqueObj.x, uniqueObj.y);}
    // if(sec == matchSec-15 || sec<matchSec-15){ //10sec
    //     ctx.drawImage(uniqueArray[uniqueObj.img+2], uniqueObj.xxx, uniqueObj.yyy);
    //     ctx.drawImage(uniqueArray[uniqueObj.img], uniqueObj.x, uniqueObj.y);}
    // if(sec == matchSec-20 || sec<matchSec-20){ //5sec
    //     ctx.drawImage(uniqueArray[uniqueObj.img+2], uniqueObj.xxx, uniqueObj.yyy);
    //     ctx.drawImage(uniqueArray[uniqueObj.img], uniqueObj.x, uniqueObj.y);}    
    
    // if (tell == true && working == true){
        
    // }    

    // return uniqueObj.x1, uniqueObj.x2, uniqueObj.x3, uniqueObj.x4, uniqueObj.x5, uniqueObj.x5, uniqueObj.x6,
    // uniqueObj.x7, uniqueObj.x8, uniqueObj.x9, uniqueObj.x10, uniqueObj.changeX1, uniqueObj.changeX2, uniqueObj.changeX3, uniqueObj.changeX4, 
    // uniqueObj.ChangeX5, uniqueObj.ChangeX6, uniqueObj.changeX7, uniqueObj.changeX8, uniqueObj.changeX9, uniqueObj.changeX10, regularObj.x1, regularObj.x2, 
    // regularObj.x3, regularObj.x4, regularObj.x5, regularObj.x5, regularObj.x6, regularObj.x7, regularObj.x8, regularObj.x9, regularObj.x10, 
    // regularObj.ChangeX1, regularObj.ChangeX2, regularObj.ChangeX3, regularObj.ChangeX4, regularObj.changeX5, regularObj.changeX6, regularObj.changeX7, 
    // regularObj.ChangeX8, regularObj.ChangeX9, regularObj.ChangeX10

