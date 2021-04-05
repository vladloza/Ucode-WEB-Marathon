CREATE DATABASE IF NOT EXISTS ucode_web;
CREATE USER IF NOT EXISTS 'vloza'@'localhost' IDENTIFIED BY 'password';
GRANT ALL ON ucode_web.* TO 'vloza'@'localhost';