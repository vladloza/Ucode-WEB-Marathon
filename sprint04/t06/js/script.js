let imgs = document.querySelectorAll('img');

let loaded = 0;

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
}

let handleImg = function(picture, observer) {
    picture.forEach(onePicture => {
        if ((onePicture.intersectionRatio > 0) && (onePicture.target.getAttribute("src") !== onePicture.target.getAttribute("data-src"))) {
            loadImage(onePicture.target);
        }
    })
}

let removeView = function(){
    document.getElementsByClassName("view")[0].style.display = "none";
}

let loadImage = function (image) {
    loaded++;
    image.src = image.getAttribute('data-src');
    document.getElementsByClassName("loaded")[0].innerHTML = loaded;
    if (loaded === 20) {
        document.getElementsByClassName("view")[0].style.background = "green";
        setTimeout(removeView, 3000);
    }
}

let observer = new IntersectionObserver(handleImg, options);

imgs.forEach(img => {
    observer.observe(img);
})