// Make Drum Sounds
function makeSound(key) {
    switch(key) {
        case "w" :
        var tom1 =  new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

        case "a" :
        var tom2 =  new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

        case "s" :
        var tom3 =  new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

        case "d" :
        var tom4 =  new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

        case "j" :
        var snare =  new Audio("sounds/snare.mp3");
        snare.play();
        break;

        case "k" :
        var crash =  new Audio("sounds/crash.mp3");
        crash.play();
        break;

        case "l" :
        var kickBass =  new Audio("sounds/kick-bass.mp3");
        kickBass.play();
        break;
    }
}

//Detect which button is clicked
var noOfButtons = document.querySelectorAll(".drum").length;
console.log(noOfButtons);
for(let i =0;i < noOfButtons; i++) {
    console.log(i);
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonText = document.querySelectorAll(".drum")[i].innerHTML;
        makeSound(buttonText);
        animation(buttonText);
    })
}

//Detect which button is pressed
document.addEventListener("keydown",function(event) {
    makeSound(event.key);
    animation(event.key);
});

function animation(currKey) {
    document.querySelector("."+currKey).classList.add("pressed");
    setTimeout(function() {
        document.querySelector("."+currKey).classList.remove("pressed");
    },100);
}