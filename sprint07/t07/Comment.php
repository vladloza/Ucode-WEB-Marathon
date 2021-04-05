<?php

class Comment
{
    private $date;
    private $text;

    public function __construct($text)
    {
        $this->date = date('Y-m-d');
        $this->text = $text;
    }

    public function getDate()
    {
        return $this->date;
    }

    public function getText()
    {
        return $this->text;
    }

}