<?php
class Users extends Model {
    private $id;
    private $login;
    private $password;
    private $fullName;
    private $email;
    private $connetion;

    public function __construct()
    {
        parent::__construct("users");
        $this->setConnection();
        $this->connected = $this->connection->connection;
    }
    public function createUser($login, $password, $fullName, $email) {
        $this->login = $login;
        $this->password = $password;
        $this->fullName = $fullName;
        $this->email = $email;
    }
    public function find($id) {
            $array = mysqli_query($this->connected, "SELECT * FROM " . $this->table . " WHERE id = $id" . ";");
            if ($array) {
                $result = mysqli_fetch_assoc($idArr);
                $this->id = $result["id"];
                $this->login = $result["login"];
                $this->password = $result["password"];
                $this->fullName = $result["fullName"];
                $this->email = $result["email"]; 
            }
    }
    public function delete() {
            $array = mysqli_query($this->connected, "SELECT id FROM " . $this->table . " WHERE id = " . $this->id . ";");
            $tableRow = mysqli_fetch_assoc($array);
            if (!$tableRow["login"]) {
                mysqli_query($this->connected, "DELETE name FROM " . $this->table . " WHERE id = " . $this->id . ";");
                $this->id = null;
                $this->login = null;
                $this->password = null;
                $this->fullName = null;
                $this->email = null;
            }
    }
    public function setConnection() {
        $this->connection = new DatabaseConnection("127.0.0.1", 3306, "vloza", "Securepass1_", "sword");
    }
    public function findUsername() {
        $request = "SELECT login FROM users WHERE login = "  . "\"" . $_POST['login'] . "\";";
        $login = mysqli_query($this->connected,$request);
        if ($login->num_rows > 0)
            return true;
        return false;
    }
    public function checkPass() {
        $request = "SELECT password FROM users WHERE login = "  . "\"" . $_POST['login'] . "\";";
        $pass = mysqli_query($this->connected,$request);
        $pass = $pass->fetch_all()[0];
        if($_POST['password'] == $pass[0]) {
            return true;
        }
        return false;
    }
    public function getPass() {
        $request = "SELECT password FROM users WHERE EmailAddress = "  . "\"" . $_POST['email'] . "\";";
        $pass = mysqli_query($this->connected,$request);
        $pass = $pass->fetch_all()[0];
        return $pass[0];
    }
    public function findEmail() {
        $request = "SELECT * FROM users WHERE EmailAddress = "  . "\"" . $_POST['email'] . "\";";
        $mail = mysqli_query($this->connected,$request);
        if ($mail->num_rows > 0)
            return true;
        return false;
    }
    public function getStatus() {
        $request = "SELECT status FROM users WHERE login = "  . "\"" . $_POST['login'] . "\";";
        $status = mysqli_query($this->connected,$request);
        $status = $status->fetch_all()[0];
        return $status[0];
    }
    public function save() {
        $request = "INSERT INTO users (login, password, FullName, EmailAddress)
        VALUES(" . "'" . $this->connected->escape_string($this->login) . "','" . 
        $this->connected->escape_string($this->password)  . "','" . 
        $this->connected->escape_string($this->fullName)  . "','" . 
        $this->connected->escape_string($this->email) . "');";
        $this->connected->query($request);
        $this->connected->commit();
    }
}