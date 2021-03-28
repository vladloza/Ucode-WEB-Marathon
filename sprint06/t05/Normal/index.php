<?php
namespace Space\Normal;
use  DateTime;
function calculate_time() {
    $start = new DateTime('1939-01-01');
    $nowadays = new DateTime('now');
    return $start->diff($nowadays);
}