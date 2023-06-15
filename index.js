var numberOfdrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfdrumButtons; i++) {
    
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttoninnerHTML = this.innerHTML;
            makeSound(buttoninnerHTML);
            buttonAnimation(buttoninnerHTML);

    });

}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key){
    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3")
            audio.play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3")
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3")
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3")
            tom4.play();
            break;

        case "j":
            var sanre = new Audio("sounds/snare.mp3")
            sanre.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3")
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3")
            kick.play();
            break;

    }
}


function buttonAnimation(currentkey){
    var activebutton = document.querySelector("."+ currentkey);
    activebutton.classList.add("pressed");
    
    setTimeout( function ()
    {
        activebutton.classList.remove("pressed");
    },100);

}