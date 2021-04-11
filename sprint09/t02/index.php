<?php
require_once(__DIR__. "/connection/DatabaseConnection.php");
require_once(__DIR__. "/models/Model.php");
require_once(__DIR__. "/models/Users.php");
echo(file_get_contents("index.html"));

if($_POST) {
    $user = new Users();
    if(!$user->findEmail()) {
        echo "<script>alert('Such mail is not registered');</script>";
        die();
    }
    $pass = $user->getPass();
    mail($_POST["email"], 'Remind Password', "Your password: $pass");
}