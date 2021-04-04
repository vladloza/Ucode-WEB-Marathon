<?php
class FileList {
	public $dir;

	public function toList(){
		if ($open = scandir($this->dir)) {
			echo "<ul>\n";
			foreach ($open as $k => $v) {
				if ($v != "." && $v != "..") {
					echo "<li><a href=\"?file=" . $v . "\">" . $v . "</a></li>";
				}
			}
			echo "</ul>\n";
		}
	}

	public function __construct($dir){
		$this->dir = $dir;
	}

	public function __destruct(){
		unset($this->dir);
	}
}
?>