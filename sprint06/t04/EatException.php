<?php


class EatException extends Exception
{
    public $message = "No more junk food, dumpling";

    public function __construct()
    {
        parent::__construct($this->message);
    }

}