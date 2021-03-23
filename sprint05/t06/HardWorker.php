<?php
class HardWorker {
    private $name;
    private $age;
    private $salary;
    public function setName($str) {
        $this->name = $str;
    }
    public function getName() {
        return $this->name;
    }
    public function setAge($num) {
        return $this->age = $num;
    }
    public function getAge() {
        return $this->age;
    }
    public function setSalary($num) {
        if($num > 100 || $num < 10000)
            $this->salary = $num;
    }
    public function getSalary() {
        return $this->salary;
    }
    public function toArray() {
        return array(
            "name" => $this->name,
            "age" => $this->age,
            "salary" => $this->salary
        );
    }
}