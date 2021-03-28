<?php
class Team
{
    private $id;
    private $avengers = array();
    private $losses = 0;

    public function __construct($id, $avengers)
    {
        $this->id = $id;
        $this->avengers = $avengers;
    }

    public function battle($damage)
    {
        foreach ($this->avengers as $av) {
            $av->hp = $av->hp - $damage;
            if($av->hp <= 0)
                $this->losses++;
        }
    }

    public function calculate_losses($cloned_team)
    {
        if($this->losses == 0)
            echo "We haven't lost anyone in this battle!\n";
        else echo "In this battle we lost $this->losses Avenger(s)\n";
    }
}