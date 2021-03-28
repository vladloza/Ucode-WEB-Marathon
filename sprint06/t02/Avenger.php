<?php


class Avenger
{
    public $name;
    public $alias;
    public $gender;
    public $age;
    public $power = array();
    public $hp;

    public function __construct($name, $alias, $gender, $age, array $power, $hp)
    {
        $this->name = $name;
        $this->alias = $alias;
        $this->gender = $gender;
        $this->age = $age;
        $this->power = $power;
        $this->hp = $hp;
    }


    public function __invoke()
    {
        echo "$this->alias\n" . implode("\n", $this->power) . "\n\n";
    }

    public function __toString(): string
    {
        return "name: $this->name\ngender: $this->gender\nage: $this->age\n";
    }
}