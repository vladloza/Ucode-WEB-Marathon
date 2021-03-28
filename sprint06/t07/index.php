<?php
echo "Name of script: " . $_SERVER['SCRIPT_NAME'] . "<br>Arguments passed to script:" . $_SERVER['argv'] . "<br>IP: " . $_SERVER['HTTP_HOST'] .
"<br>Host name: " . $_SERVER['SERVER_NAME'] . "<br>Protocol: " . $_SERVER['SERVER_PROTOCOL'] . "<br>Query method: " . $_SERVER['REQUEST_METHOD'] . 
"<br>User agent: " . $_SERVER['HTTP_USER_AGENT'] . "<br>Client ip: " . $_SERVER['REMOTE_ADDR'] . "<br>Passed url: " . $_SERVER['PATH_INFO'];  