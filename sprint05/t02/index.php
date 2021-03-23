<?php
function checkDivision($a = 1, $b = 60) {
    $add = false;
    for($i = $a; $i <= $b; $i++ ) {
        $str = 'The number ' . $i;
        if($i % 2 === 0) {
            $str .= " is divisible by 2";
            $add = True;
        }
        if($i % 3 === 0) {
            if($add === True)
                $str .= ",";
            $str .= " is divisible by 3";
            $add = True;
        }
        if($i % 10 === 0) {
            if ($add === True) {
                $str .= ",";
            }
            $str .= " is divisible by 10";
            $add = True;
        }
        if($i % 2 !== 0 && $i % 3 !== 0 && $i % 10 !== 0)
            $str .= " -";
        echo $str;
        echo "\n";
    }
}
