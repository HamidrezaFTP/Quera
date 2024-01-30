const square = document.getElementById('square');
let shiftPressed = false;

square.style.position = "relative";
square.style.left = '0px';
square.style.top = '0px';

document.addEventListener('keyup', function(e) {
    if(e.key == "ArrowRight") {
        if(shiftPressed) {
            square.style.left = parseInt(square.style.left) + 10 + 'px';
        } else {
            square.style.left = parseInt(square.style.left) + 1 + 'px';
        }
    }else if(e.key === "ArrowLeft") {
        if(shiftPressed) {
            square.style.left = parseInt(square.style.left) - 10 + 'px';
        } else {
            square.style.left = parseInt(square.style.left) - 1 + 'px';
        }
    }else if(e.key === "ArrowUp") {
        if(shiftPressed) {
            square.style.top = parseInt(square.style.top) - 10 + 'px';
        } else {
            square.style.top = parseInt(square.style.top) - 1 + 'px';
        }
    }else if(e.key === "ArrowDown") {
        if(shiftPressed) {
            square.style.top = parseInt(square.style.top) + 10 + 'px';
        } else {
            square.style.top = parseInt(square.style.top) + 1 + 'px';
        }
    }
    else if(e.key === "Shift") {
        shiftPressed = false;
    }
});

document.addEventListener("keydown", function(e) {
    if(e.key === "Shift") {
        shiftPressed = true;
    }
})
