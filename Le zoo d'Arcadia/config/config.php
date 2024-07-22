<?php
// config.php

$servername = "localhost";
$username = "ibanez"; 
$password = "pixar"; 
$dbname = "le zoo d'arcadia";

// Connexion à la base de données
$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifiez la connexion
if ($conn->connect_error) {
    die("Connexion échouée: " . $conn->connect_error);
}
?>
