<?php
function firstUpper($str) : string {
    return ucfirst(strtolower(rtrim(ltrim($str))));
}
