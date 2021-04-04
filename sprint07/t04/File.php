<?php
class File {
	public $name;

	public function __construct($name){
		$this->name = $name;
	}

	public function read(){
		$file = fopen($this->name,'r');
		$res = "";
		while (!feof($file)){
			$res .= fgets($file);
		}
		fclose($file);
		return $res;
	}

	public function write($str){
		if (!file_exists('tmp')){
			mkdir('tmp');
		}
		file_put_contents($this->name,$str,FILE_APPEND);
	}

	public function delete(){
		unlink($this->name);
		$this->__destruct();
	}

	public function __destruct(){
		unset($this->name);
	}
}
?>