<?php
class Tower extends Building {
    private $elevator = False;
    private $arc_capacity = 0;
    private $height = 0.0;
    public function hasElevator() {
        return $this->elevator;
    }
    public function setElevator($boolean) {
        $this->elevator = $boolean;
    }
    public function getArcCapacity() {
        return $this->arc_capacity;
    }
    public function setArcCapacity($num) {
        $this->arc_capacity = $num;
    }
    public function getHeight() {
        return $this->height;
    }
    public function setHeight($num) {
        $this->height = $num;
    }
    public function getFloorHeight() : float {
        return height / $this->floors;
    }
    public function toString(): string
    {
        $props = [
            "Elevator: " . $this->elevator,
            "Arc capacity: " . $this->arc_capacity,
            "Height: " . $this->height
        ];
        echo parent::toString();
        $str="";
        foreach ($props as $p)
            $str = $str . $p . "\n";
        return $str;
    }
}