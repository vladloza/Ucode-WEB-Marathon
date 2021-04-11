<?php
require_once(__DIR__. "/../view/View.php");
interface ControllerInterface
{
    public function __construct();

    public function execute();
}
class Main implements ControllerInterface {
    private $view;
    public function __construct(){
        $this->view = new View("/templates/main.html");
    }
    public function execute(){
        $this->view->render();
    }
}