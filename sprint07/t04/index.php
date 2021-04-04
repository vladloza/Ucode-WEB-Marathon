<?php
function autoload($pClassName)
{
include(__DIR__ . '/' . $pClassName . '.php');
}
spl_autoload_register("autoload");
echo "<h1>Files</h1>";
echo "<form>File name: <input type=\"text\" name=\"file_name\"> Content: <textarea name=\"content\"></textarea> <input type=\"submit\" name=\"show\" value=\"Create file\"></form>\n";
if(isset($_GET['show'])){
    $file = new File('tmp/' . $_GET['file_name']);
    $file->write($_GET['content']);
    if ((scandir('tmp') != false) && (count(scandir('tmp')) != 0)){
        echo "<h2>List of files</h2>";
        $dir = new FileList('tmp');
        $dir->toList();
    }
}
else if (isset($_GET['delete'])){
    $selected = new File('tmp/' . $_GET['file']);
    $selected->delete();
    if ((scandir('tmp') != false) && (count(scandir('tmp')) != 0)){
        echo "<h2>List of files</h2>";
        $dir = new FileList('tmp');
        $dir->toList();
    }
}
else if (isset($_GET['file'])){
    if ((scandir('tmp') != false) && (count(scandir('tmp')) != 0)){
        echo "<h2>List of files</h2>";
        $dir = new FileList('tmp');
        $dir->toList();
        echo "<h2>Selected file: \"" . $_GET['file'] . "\"</h2>";
        echo "<form><input type=\"hidden\" name=\"file\" value=\"" . $_GET['file'] . "\"><input type=\"submit\" name=\"delete\" value=\"Delete\">";
        $selected = new File('tmp/' . $_GET['file']);
        echo "<p>Content: " . $selected->read() . "</p>";
    }
}
?>