<?php
require_once("/Users/vloza/Desktop/web/srint09/t06/model/DatabaseConnection.php");
require_once("/Users/vloza/Desktop/web/srint09/t06/model/Model.php");
require_once("/Users/vloza/Desktop/web/srint09/t06/model/Users.php");

if($_POST) {
    $user = new Users();
    if($user->findUsername()) {
        echo "<script>alert('This login is taken');</script>";
        die();
    }
    else if($user->findEmail()) {
        echo "<script>alert('This email is taken');</script>";
        die();
    }
    $user->createUser($_POST["login"], $_POST["password"], $_POST["FullName"], $_POST["email"]);
    $user->save();
    echo("<style>" . file_get_contents("/Users/vloza/Desktop/web/srint09/t06/view/templates/style/style.css") . "</style>");
    echo(file_get_contents(__DIR__."/templates/login.html"));
}