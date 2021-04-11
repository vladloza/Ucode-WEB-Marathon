<?php
require_once("Router.php");
if($_GET) {
    $router = new Router();
    $router->setParams();
    $router->printParams();
}