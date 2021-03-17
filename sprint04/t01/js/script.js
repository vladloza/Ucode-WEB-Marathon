function withoutClass() {
    let listed = document.getElementsByTagName('li');
    for (let i of listed) {
        if (i.classList.length == 0 && !i.classList.contains('good') && !i.classList.contains('evil') && !i.classList.contains('unknown'))
            i.classList.add("unknown");
        i.append(document.createElement('div'));
        if (!i.dataset['element']) {
            i.dataset['element'] = 'none';
            let div = document.createElement('div');
            let line = document.createElement('div');
            div.classList.add('none');
            div.classList.add('elem');
            line.classList.add('line');
            i.querySelector('div').append(div);
            div.append(line);
        }
        else {
            let data = i.dataset.element.split(' ');
            data.forEach((k) => {
                let div = document.createElement('div');
                div.classList.add(k, 'elem');
                i.querySelector('div').append(div);
            })
        }
    }
}
withoutClass();
