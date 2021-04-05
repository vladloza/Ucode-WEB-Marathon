<?php
abstract class Model {
    protected $connection;
    protected $table;
    public function __construct() {
        setTable();
        setConnection();
    }
    protected function setTable($table)
    {
        $this->table = $table;
    }
    protected function setConnection() {
        $this->connection = new DatabaseConnection("127.0.0.1", 3306, "vloza", "securepass", "ucode_web");
    }
    abstract protected function find($id);
    abstract protected function delete();
    abstract protected function save();
}
