<?php
class View{
    private $link;
    public function __construct($link){
        $this->link = $link;
    }
    public function render() {
        echo(file_get_contents(__DIR__ . $this->link));
    }
}