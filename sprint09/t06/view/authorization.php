<?php
require_once("/Users/vloza/Desktop/web/srint09/t06/model/DatabaseConnection.php");
require_once("/Users/vloza/Desktop/web/srint09/t06/model/Model.php");
require_once("/Users/vloza/Desktop/web/srint09/t06/model/Users.php");

if($_POST) {
    $user = new Users();
    if(!$user->findUsername()) {
        echo "<script>alert('Login is not registered');</script>";
        die();
    }
    if(!$user->checkPass()) {
        echo "<script>alert('Incorrect password');</script>";
        die();
    }
    $status = $user->getStatus();
    echo "<script>alert('You are logged in');</script>";
    echo "<link rel=\"stylesheet\" href=\"templates/style/style.css\"><style>.hide { display: none; } p { color: white; font-size: 25px;}</style>";
    echo "<form><p>Your login: " . $_POST['login'] . "</p><p> Your status: " . $status . "</p><input type=\"submit\" value=\"Log out\"></form>";
}
else {
    echo("<style>" . file_get_contents("/Users/vloza/Desktop/web/srint09/t06/view/templates/style/style.css") . "</style>");
    echo(file_get_contents("/Users/vloza/Desktop/web/srint09/t06/view/templates/login.html"));
}
