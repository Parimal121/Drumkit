
var numberOfDrumButtons = document.querySelectorAll(".drum").length;


for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);


    });
}

document.addEventListener("keydown", function(event){

    makeSound(event.key);
    buttonAnimation(event.key);
}); 


function makeSound(key){
    
    switch (key) {

        case "w": var crash = new Audio('sounds/tom-1.mp3');
            crash.play();
            break;

        case "a": var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;

        case "s": var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;

        case "d": var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;

        case "j": var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;

        case "k": var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;

        case "l": var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        default:
            break;
    }

}

function buttonAnimation(currentKey){

   var activeButton = document.querySelector("." + currentKey);

   activeButton.classList.add("pressed");

   setTimeout(function() {
     
   activeButton.classList.remove("pressed");
   }, 100 );


}




































// var allButton = document.getElementsByTagName("button");

// var button1 = allButton[0].addEventListener("click", clickable );
// var button2 = allButton[1].addEventListener("click", clickable );
// var button3 = allButton[2].addEventListener("click", clickable );
// var button4 = allButton[3].addEventListener("click", clickable );
// var button5 = allButton[4].addEventListener("click", clickable );
// var button6 = allButton[5].addEventListener("click", clickable );
// var button7 = allButton[6].addEventListener("click", clickable);


// function clickable(){
//     alert ( " I got Clicked!");
// }




// document.querySelector("button").addEventListener("click", function(){
//     alert (" I got clicked!");
// });


