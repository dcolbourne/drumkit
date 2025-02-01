// document.querySelector("button").addEventListener("click", function () {
//     alert("I got clicked!");
// });

// document.querySelector(".w").addEventListener("click", function () {
//     var crashAudio = new Audio("./sounds/crash.mp3");
//     crashAudio.play();
// });

// document.querySelector(".a").addEventListener("click", function () {
//     var kickBassAudio = new Audio("./sounds/kick-bass.mp3");
//     kickBassAudio.play();
// });

// document.querySelector(".s").addEventListener("click", function () {
//     var snareAudio = new Audio("./sounds/snare.mp3");
//     snareAudio.play();
// });

// document.querySelector(".d").addEventListener("click", function () {
//     var tom1Audio = new Audio("./sounds/tom-1.mp3");
//     tom1Audio.play();
// });

// document.querySelector(".j").addEventListener("click", function () {
//     var tom2Audio = new Audio("./sounds/tom-2.mp3");
//     tom2Audio.play();
// });

// document.querySelector(".k").addEventListener("click", function () {
//     var tom3Audio = new Audio("./sounds/tom-3.mp3");
//     tom3Audio.play();
// });

// document.querySelector(".l").addEventListener("click", function () {
//     var tom4Audio = new Audio("./sounds/tom-4.mp3");
//     tom4Audio.play();;
// });


var drumSelect = 0;
var audioPath = "./sounds/";

var numDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var crashAudio = new Audio("./sounds/crash.mp3");
        crashAudio.play();    
    }
}   
