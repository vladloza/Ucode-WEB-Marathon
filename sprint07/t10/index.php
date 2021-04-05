<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Make square image</title>
</head>
<body>

<div class="center">
    <h1>Make square image</h1>
    <form action="index.php" method="post">
        <input name="image_url" placeholder="Image url..." size="40"><br><br>
        <input type="submit" value="GO">
    </form>
</div>
<?php


function getExtencion($url) {
    return(array_pop(explode(".", $url)));
}

function createImage($url) {
    $extencion = getExtencion($url);
    $imageOriginal = null;
    if ($extencion == "png") {
        $imageOriginal = imagecreatefrompng($url);
    }
    else if ($extencion == "jpeg" || $extencion == "jpg") {
        $imageOriginal = imagecreatefromjpeg($url);
    }
    return $imageOriginal;

}

function saveImage($url, $resource, $color = "-original") {
    $extencion = getExtencion($url);
    $descriptor = 0;

    if ($extencion == "png") {
        $descriptor = fopen(image . $color . ".png", "w");
        imagepng($resource, image . $color . ".png");
    }
    else if ($extencion == "jpeg") {
        $descriptor = fopen(image . $color . ".jpeg", "w");
        imagejpeg($resource, image . $color . ".jpeg");
    }
    else if ($extencion == "jpg") {
        $descriptor = fopen(image . $color . ".jpg", "w");
        imagejpeg($resource, image . $color . ".jpg");
    }
    fclose($descriptor);
}

?>


<?php
    if ($_POST) {
        $imageOriginal = createImage($_POST["image_url"]);

        saveImage($_POST["image_url"], $imageOriginal);
        

        $imageRed = createImage($_POST["image_url"]);
        imagefilter($imageRed, IMG_FILTER_COLORIZE, 256, 0, 0);
        saveImage($_POST["image_url"], $imageRed, "-red");

        $imageGreen = createImage($_POST["image_url"]);
        imagefilter($imageGreen, IMG_FILTER_COLORIZE, 0, 256, 0);
        saveImage($_POST["image_url"], $imageGreen, "-green");

        $imageBlue = createImage($_POST["image_url"]);
        imagefilter($imageBlue, IMG_FILTER_COLORIZE, 0, 0, 256);
        saveImage($_POST["image_url"], $imageBlue, "-blue");


        imagedestroy($imageOriginal);
        imagedestroy($imageRed);
        imagedestroy($imageGreen);
        imagedestroy($imageBlue);
    }

?>

<?php

if ($_POST) {
    $extencion = getExtencion($_POST["image_url"]);
    echo '<img src="image-original.' . $extencion . '" alt="No photo! Incorrect URL!">';
    echo '<img src="image-red.' . $extencion . '" alt="No photo! Incorrect URL!">';
    echo '<img src="image-green.' . $extencion . '" alt="No photo! Incorrect URL!">';   
    echo '<img src="image-blue.' . $extencion . '" alt="No photo! Incorrect URL!">';
}

?>
    
</body>
</html>
