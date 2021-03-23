<?php
class StrFrequency {
    public function __construct(string $str)
    {
        $this->str = $str;
    }
    public function letterFrequencies() {
        $upper = strtoupper($this->str);
        $letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        $letterFrequencies = array();

        for ($i = 0; $i < strlen($letters); $i++) {
            $count = 0;
            for ($j = 0; $j < strlen($upper); $j++) {
                if ($letters[$i] == $upper[$j]) {
                    $count++;
                }
            }
            if ($count != 0) {
                $letterFrequencies[$letters[$i]] = $count;
            }
        }
        return $letterFrequencies;
    }
    public function WordFrequencies() {
        $str = preg_replace("/[^a-z\d]/i", ' ', $this->str);
        return array_count_values(str_word_count(strtoupper($str),1));
    }
    public function reverseString() {
        $str = preg_replace("/[^a-z]/i", ' ', $this->str);
        return strrev($str);
    }
}