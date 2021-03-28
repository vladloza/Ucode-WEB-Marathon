<?php
namespace Space\Quantum;
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