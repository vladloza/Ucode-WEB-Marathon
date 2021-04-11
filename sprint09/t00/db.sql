CREATE DATABASE IF NOT EXISTS sword;
ALTER USER 'vloza'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Securepass1_';
GRANT ALL ON sword.* TO 'vloza'@'localhost';
use sword;
CREATE TABLE IF NOT EXISTS users
(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    login VARCHAR(30) UNIQUE ,
    password VARCHAR(30),
    FullName VARCHAR(50),
    EmailAddress VARCHAR(30),
    status ENUM("admin", "user") DEFAULT "user"
);