<?php
$load = $_COOKIE["load"];
if(!$load)
    $load = 0;
setcookie("load", ++$load, time() + 60);
echo "<h1>Cookie counter</h1>";
echo "This page was loaded $load time(s) in last minute";
?>