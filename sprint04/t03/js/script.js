let images = ["assets/images/bat_man.jpg", "assets/images/spider_man.png", "assets/images/super_man.png", "assets/images/iron_man.jpg"];
let current = document.getElementsByTagName('img')[0];
let interval = 0;
current.setAttribute('src', images[0]);
let i = 0;
function change(dir) {
    if (dir === 'left') {
        if(i === 0)
            i = images.length - 1;
        else i--;
    }
    else if (dir === 'right') {
        i === (images.length - 1) ? i = 0 : i++;
    }
    current.setAttribute('src', images[i]);
    clearInterval(interval); 
    interval = setInterval(change, 3000, 'right');
}

document.getElementById('left').onclick = () => change('left');
document.getElementById('right').onclick = () => change('right');
interval = setInterval(change, 3000, 'right');