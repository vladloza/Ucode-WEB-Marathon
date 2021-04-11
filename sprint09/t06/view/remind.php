<?php
require_once("/Users/vloza/Desktop/web/srint09/t06/model/DatabaseConnection.php");
require_once("/Users/vloza/Desktop/web/srint09/t06/model/Model.php");
require_once("/Users/vloza/Desktop/web/srint09/t06/model/Users.php");

if($_POST) {
    $user = new Users();
    if(!$user->findEmail()) {
        echo "<script>alert('Such mail is not registered');</script>";
        die();
    }
    $pass = $user->getPass();
    mail($_POST["email"], 'Remind Password', "Your password: $pass");
}