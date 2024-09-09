<?php

$servername = "localhost";
$username = "ibanez"; 
$password = "pixar"; 
$dbname = "le zoo d'arcadia";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connexion échouée: " . $conn->connect_error);
}
?>
