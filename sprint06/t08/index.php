<?php
    echo("
    <h1>What Thanos did for the Soul Stone?</h1>
    <form>
        <div>
            <input type=\"radio\" id=\"1\" name=\"first\">
            <label for=\"1\">Jumped from the mountain</label>
            <br>
            <input type=\"radio\" id=\"2\" name=\"second\">
            <label for=\"2\">Made stone keeper to jump from the mountain</label>
            <br>
            <input type=\"radio\" id=\"3\" name=\"third\">
            <label for=\"3\">Pushed Gamora off the mountain</label>
        </div>
        <div>
            <button type=\"submit\" style=\"margin-top: 15px;\">I made a choice!</button>
        </div>
    </form>
    ");
@$first = $_GET['first'];
@$second = $_GET['second'];
@$third = $_GET['third'];
if($first == true || $second == true) echo "Shame on you. Go and watch avengers";
else if($third == true) echo "Wow, congratulations! You are a true Avengers fan"; 