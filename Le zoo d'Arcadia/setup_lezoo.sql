
CREATE DATABASE lezoo;
USE lezoo;

CREATE TABLE animaux (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(100),
    espece VARCHAR(100),
    age INT
);

CREATE TABLE soins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    animal_id INT,
    description TEXT,
    date_soin DATE,
    FOREIGN KEY (animal_id) REFERENCES animaux(id)
);

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);



CREATE USER 'admin'@'localhost' IDENTIFIED BY 'admin_password';
GRANT ALL PRIVILEGES ON lezoo.* TO 'admin'@'localhost';


CREATE USER 'user'@'localhost' IDENTIFIED BY 'user_password';
GRANT SELECT ON lezoo.* TO 'user'@'localhost';


CREATE USER 'veterinaire'@'localhost' IDENTIFIED BY 'veterinaire_password';
GRANT SELECT, INSERT, UPDATE, DELETE ON lezoo.soins TO 'veterinaire'@'localhost';
GRANT SELECT ON lezoo.animaux TO 'veterinaire'@'localhost';


CREATE USER 'personnel'@'localhost' IDENTIFIED BY 'personnel_password';
GRANT SELECT, INSERT, UPDATE, DELETE ON lezoo.animaux TO 'personnel'@'localhost';

FLUSH PRIVILEGES;
/*mysql -u root -p < setup_lezoo.sql*/
/*geré avec phpmyadmin*/
/*password = Pixar2999#*/
