var drumButtons = document.getElementsByClassName("drum")

for (let x = 0; x < drumButtons.length; x ++) {
    drumButtons[x].addEventListener("click", function() {      // listens for button clicks on all buttons
        playAudio(this.innerHTML)                              // sends key input to playAudio function
    });
}

document.addEventListener("keydown", function(event) {              // listens for keyboard input on website
    playAudio((event.key).toLowerCase())                            // sends key input to playAudio function
})

function playAudio(keyVal) { 
    /*
        Function plays audio according to keys pressed or clicked by the user
    */                               
    switch(keyVal) {                                
        case 'w':
            var audio = new Audio("/sounds/crash.mp3");
            audio.play();
            break;
        case 'a':
            var audio = new Audio("/sounds/kick-bass.mp3");
            audio.play();
            break;
        case 's':
            var audio = new Audio("/sounds/snare.mp3");
            audio.play();
            break;
        case 'd':
            var audio = new Audio("/sounds/tom-1.mp3");
            audio.play();
            break;
        case 'j':
            var audio = new Audio("/sounds/tom-2.mp3");
            audio.play();
            break;
        case 'k':
            var audio = new Audio("/sounds/tom-3.mp3");
            audio.play();
            break;
        case 'l':
            var audio = new Audio("/sounds/tom-4.mp3");
            audio.play();
            break;
    }   
}

