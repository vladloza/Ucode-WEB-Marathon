<?php
function calculate_time() {
    $start = new DateTime('1939-01-01');
    $nowadays = new DateTime('now');
    return $start->diff($nowadays);
}
$time = calculate_time();
$str = "In real life you were absent for ". $time->format("%Y") . " years, ".$time->format("%m") . " months, ". $time->format("%d") . " days";
$html = "<!DOCTYPE html>
<html>

<head>
<meta charset=\"utf-8\">
<title>Quantum space</title>
</head>

<body>
<p>$str</p></body>

</html>
";
echo $html;