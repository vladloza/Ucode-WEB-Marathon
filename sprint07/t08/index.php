<h1>Show other sites</h1>
<form>
    <input type="url" name="url" placeholder="input url">
    <input type="submit" name="submit" value="go">
    <a href="./index.php">BACK</a>
</form>
<?php
if($_GET) {
    $url = $_GET["url"];
    if($url) {
        echo "<hr>url: $url <hr>";
        $content = file_get_contents($url);
        $content = str_replace("<", "&lt;", $content);
        $content = str_replace(">", "&gt;", $content);
        $content = nl2br($content);
        echo "$content";
    }
}

