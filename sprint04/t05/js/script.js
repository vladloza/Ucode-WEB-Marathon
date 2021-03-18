let f
let block
document.addEventListener('mouseup', () => {
    f = false
});
document.addEventListener('mousemove', function (event) {
    if (f) {
        block.style.left = (event.clientX - 100) + "px"
        block.style.top = (event.clientY - 100) + "px"
    }
});

function moveDiamond(id) {
    if (!id.classList.contains("nomove")) {
        block = id
        f = true;
    }
}

const listDiamond = document.getElementsByClassName('block');


let clicked = function(id){
    if (document.getElementById(id).classList.contains('nomove')){
        document.getElementById(id).classList.remove('nomove');
    }
    else {
        document.getElementById(id).classList.add('nomove');
    }
}