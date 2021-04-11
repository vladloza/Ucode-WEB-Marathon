<?php
abstract class Model {
    protected $connection;
    protected $table;
    public function __construct() {
        $this->setTable("users");
        $this->setConnection();
    }
    public function setConnection() {
        $this->connection = new DatabaseConnection("127.0.0.1", 3306, "vloza", "Securepass1_", "sword");
    }
    protected function setTable($table)
    {
        $this->table = $table;
    }
    abstract protected function find($id);
    abstract protected function delete();
    abstract protected function save();
}
