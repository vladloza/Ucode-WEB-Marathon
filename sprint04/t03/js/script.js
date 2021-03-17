let images = ["assets/images/spider_man.png", "assets/images/super_man.png", "assets/images/bat_man.jpg", "assets/images/iron_man.jpg"];
let current = document.getElementsByTagName('img')[0];
let interval = 0;

function change(dir) {
    let i = 0;
    if (dir == 'left')
        i = (i == images.length - 1) ? i = 0 : i--;
    else if (dir == 'right')
        i = (i == images.length - 1) ? i = 0 : i++;
    img.setAttribute('src', images[i]);
    clearInterval(interval);
}

document.getElementById('left').onclick = () => change('left');
document.getElementById('right').onclick = () => change('right');
interval = setInterval(change, 3000, 'right');