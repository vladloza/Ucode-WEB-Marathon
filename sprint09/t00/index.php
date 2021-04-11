<?php
require_once(__DIR__. "/connection/DatabaseConnection.php");
require_once(__DIR__. "/models/Model.php");
require_once(__DIR__. "/models/Users.php");
echo(file_get_contents("index.html"));

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
}