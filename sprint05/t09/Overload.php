<?php

class Overload
{
    private $arr = array();
    public function __set($name, $str) {
        $this->arr[$name] = $str;
    }
    public function __isset($name) : bool {
        $this->arr[$name] = "NO SET";
        return true;
    }
    public function __get($name) {
        return array_key_exists($name, $this->arr) ? $this->arr[$name] : "NO DATA";
    }
    public function __unset($name) {
        $this->arr[$name] = NULL;
    }
}