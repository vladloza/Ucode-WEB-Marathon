<?php
trait Update {
    protected $arr = array("2 x Repulsors",
        "M134 7.62mm Minigun",
        "2 x FN F2000 Tacticals$",
        "Sidewinder \"Ex-Wife\" Self-Guided Missile",
        "M24 Shotgun",
        "Milkor MGL 40mm Grenade Launcher",);
    public function makeBoom() {
        MarkII::makeBoom();
        print_r($this->arr);
    }
}