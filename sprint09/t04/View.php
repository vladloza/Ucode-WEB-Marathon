<?php
class View {
    private $link;
    public function __constructor($link) {
        $this->link = $link;
    }
    public function render() {
        echo(file_get_contents($this->link));
    }
}