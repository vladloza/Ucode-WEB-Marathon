<?php
use DateTime;
function calculate_time() {
    $days = 0;
  $date = date_diff(new DateTime(), new DateTime("1939-01-01"));
  $days += $date->format("%Y");
  $days *= 12;
  $days += $date->format("%m");
  $days *= 31;
  $days += $date->format("%d");
  $res = [intdiv(intdiv(intdiv($days,7),31),12),(intdiv(intdiv($days,7),31) - intdiv(intdiv(intdiv($days,7),31),12) * 12), (intdiv($days,7) - intdiv(intdiv($days,7),31) * 31)];
  return $res;
}
$time = calculate_time();
$str = "In quantum space you were absent for ". $time[0] . " years, ".$time[1] . " months, ". $time[2] . " days";
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