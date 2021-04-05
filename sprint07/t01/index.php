<?php
    session_start();
    if ($_POST) {
        if ($_POST["forget"] == "true") {
            session_destroy();
            echo("Session forgot!");
        }
        else {
            $_SESSION["data"] = json_encode($_POST);
        }
    }
    else {
        if (isset($_SESSION["data"])) {
            $data = json_decode($_SESSION["data"], true);
        }
        else {
            echo("
            <h1>Session for new</h1>
                <form action=\"index.php\" method=\"post\">
                    <fieldset>
                        <legend>About the HERO</legend>
                            <p>
                                <span>Real Name</span>
                                <input type=\"text\" name=\"realName\" size=\"18\" autofocus>
                                <span>Current alias</span>
                                <input type=\"text\" name=\"alias\" size=\"18\">
                                <span>Age</span>
                                <input type=\"number\" name=\"age\" min=\"1\" max=\"999\" step=\"1\">
                                <br><br>
                                <span>About</span>
                                <textarea name=\"about\" id=\"about\" cols=\"70\" rows=\"5\" maxlength=\"500\" placeholder=\"Information about the superhero, max 500 symbols\"></textarea>
                                <br>
                            </p>
                            <p>
                                <span>Photo:</span>
                                <input type=\"file\" name=\"photo\">
                            </p>
                    </fieldset>
                    <fieldset>
                        <legend>Powers</legend>
                            <p>
                                <input type=\"checkbox\">
                                <label>Strength</label>
                                <input type=\"checkbox\">
                                <label>Speed</label>
                                <input type=\"checkbox\">
                                <label>Intelligence</label>
                                <input type=\"checkbox\">
                                <label>Teleportation</label>
                                <input type=\"checkbox\">
                                <label>Immortal</label>
                                <input type=\"checkbox\">
                                <label>Another</label>
                                <br>
                            </p>
                            <p>
                                <span>Level of control:</span>
                                <input type=\"range\" name=\"control\" min=\"1\" max=\"10\" step=\"1\" value=\"1\">
                            </p>
                    </fieldset>
                    <fieldset id=\"powers\">
                        <legend>Origin of Powers</legend>
                            <p>
                                <input type=\"radio\" name=\"powers\" value=\"Unknown\">
                                <span>Unknown</span>
                                <input type=\"radio\" name=\"powers\" value=\"Like a goast\">
                                <span>Like a goast</span>
                                <input type=\"radio\" name=\"powers\" value=\"I am in comics\">
                                <span>I am in comics</span>
                                <input type=\"radio\" name=\"powers\" value=\"I have fan club\">
                                <span>I have fan club</span>
                                <input type=\"radio\" name=\"powers\" value=\"Superstar\">
                                <span>Superstar</span>
                            </p>
                    </fieldset>
                    <p>
                    <button type=\"reset\" value=\"CLEAR\">CLEAR</button>
                    <input type=\"submit\" value=\"SEND\">
                    </p>
                </form>
            ");
        }
    }
?>