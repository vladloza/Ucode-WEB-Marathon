function style(name, size, space, color) {
    hero.innerHTML = name;
    hero.style.fontSize = size;
    hero.style.letterSpacing = space;
    document.getElementById('lab').style.backgroundColor = color;
}
function transformation() {
    let hero = document.getElementById('hero');
    if(hero.textContent === 'Bruce Banner')
        style('Hulk', '130px', '6px', '#70964b');
    else if(hero.textContent === 'Hulk')
        style('Bruce Banner', '60px', '2px', '#ffb300');
}