<?php
require_once(__DIR__. "/connection/DatabaseConnection.php");
require_once(__DIR__. "/models/Model.php");
require_once(__DIR__. "/models/Users.php");
echo(file_get_contents("index.html"));

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
    echo "<style>.hide { display: none; } p { color: white; font-size: 25px;}</style>";
    echo "<form><p>Your login: " . $_POST['login'] . "</p><p> Your status: " . $status . "</p><input type=\"submit\" value=\"Log out\"></form>";
}


