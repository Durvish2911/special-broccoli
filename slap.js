var I1 =" ";
var I2 =" ";
var I3 =" ";
var I4 =" ";
var I5 =" ";
var I6 =" ";
function preload(){
I1= loadImage("book.jpeg");
I2= loadImage("bottle.jpeg");
I3= loadImage("suitcase.jpeg");
I4= loadImage("mouse.jpeg");
I5= loadImage("macbook.jpeg");
I6= loadImage("monitot.jpeg");
}
function draw(){
    pacifier.classify(I1,fun1);
    pacifier.classify(I2,fun2);
    pacifier.classify(I3,fun3);
    pacifier.classify(I4,fun4);
    pacifier.classify(I5,fun5);
    pacifier.classify(I6,fun6);
}
function setup(){
 pacifier=ml5.imageClassifier('mobileNet',crazy_games_com);
}
function crazy_games_com(){
    console.log("biology is my favorite subject");
}
function fun1 (error,results) {
    if (error) {
        console.error(error);
    } else {
        document.getElementById("pan_cake").innerHTML= results[0].label;
    }
}
function fun2 (error,results) {
    if (error) {
        console.error(error);
    } else {
        document.getElementById("pan_cake1").innerHTML= results[0].label;
    }
}
function fun3 (error,results) {
    if (error) {
        console.error(error);
    } else {
        document.getElementById("pan_cake2").innerHTML= results[0].label;
    }
}
function fun4 (error,results) {
    if (error) {
        console.error(error);
    } else {
        document.getElementById("pan_cake3").innerHTML= results[0].label;
    }
}
function fun5 (error,results) {
    if (error) {
        console.error(error);
    } else {
        document.getElementById("pan_cake4").innerHTML= results[0].label;
    }
}
function fun6 (error,results) {
    if (error) {
        console.error(error);
    } else {
        document.getElementById("pan_cake5").innerHTML= results[0].label;
    }
}