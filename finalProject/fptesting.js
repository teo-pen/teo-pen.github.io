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
var drawers;
var tell = false;

var uniqueArray = new Array(); //(3)
// uniqueArray[0] = new Image();
// uniqueArray[0].src = "../imagesPP/00_angel.png";
// uniqueArray[1] = new Image();
// uniqueArray[1].src = "../imagesPP/00_bird.png";
// uniqueArray[2] = new Image();
// uniqueArray[2].src = "../imagesPP/00_bunny.png";
// uniqueArray[3] = new Image();
// uniqueArray[3].src = "../imagesPP/00_cat.png";
// uniqueArray[4] = new Image();
// uniqueArray[4].src = "../imagesPP/00_dolphin.png";
// uniqueArray[5] = new Image();
// uniqueArray[5].src = "../imagesPP/00_duck.png";
// uniqueArray[6] = new Image();
// uniqueArray[6].src = "../imagesPP/00_elephant.png";
// uniqueArray[7] = new Image();
// uniqueArray[7].src = "../imagesPP/00_heart.png";
// uniqueArray[8] = new Image();
// uniqueArray[8].src = "../imagesPP/00_seahorse.png";
// uniqueArray[9] = new Image();
// uniqueArray[9].src = "../imagesPP/00_star.png";

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
    "x": rand(w),
    "y": rand(h),
    "changeX": rand(10),
    "img": 5
}

var regularObj = {
    "x": rand(w),
    "y": rand(h),
    "changeX": rand(10),
    "img": regularArray.length
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
document.querySelector("#buttonS").onclick = start;
document.querySelector("#buttonR").onclick = reset;




////// EXECUTABLE CODE
setUpCanvas();


animationLoop();



////// FUNCTIONS
function animationLoop(){
    clear(); 
    background();  

    // if (tell == true && working == true){
        
    // }    
    if (working == true){
        sun();
        unique();
        hand(o1);
        console.log(working);
    }
    
    // console.log(xP, yP);


    requestAnimationFrame(animationLoop);
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
    ctx.arc(100,100,30,0, 2*Math.PI);
    ctx.fillStyle = "hsl(51, 100%, 52%)";
    ctx.fill();
}

function move(o){
    o.x += o.changeX;
    // o.y += o.changeY;
}

// function unique(){
//     // setTimeout(function(){
//         ctx.drawImage(uniqueArray[uniqueObj.img], uniqueObj.x, uniqueObj.y); 
//     // }, 2000);
    
// }

function unique(num){
    //putting x number of objects into an array
    for(var i=0;i<num;i++){
        uniqueArray.push({
            "x": w,
            "y": h,
            "dx": randN(0),
            "img": []
        })
    }
}

// function teller(){     
//     if (sec%2 == 0 && sec>0){
//         tell = true;
//     }
//     // console.log(tell);
//     return tell
// }

function reset(){
    working = false;
    uniqueObj.img = randi(uniqueArray.length);
    uniqueObj.x = randi(w);   
    uniqueObj.y = randi(h);  
    clearInterval(timer);    
    // console.log(working);
    return working
}

function start(){ //(2)
    sec = 30;
    timer = setInterval(function(){
    sec--;
    if (sec >= 10){
        document.getElementById("timer").innerHTML="00:"+sec;
    }
    if (sec < 10){
        document.getElementById("timer").innerHTML="00:0"+sec;
    }
    if (sec == 0) {
        clearInterval(timer);
        working = false;
    }}, 1000);    
    working = true;
    console.log("start");
    return working, sec
}

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
