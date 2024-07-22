<?php
require_once('connexion.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $nomPseudo = $_POST['nomPseudo'];
    $motDePasse = password_hash($_POST['motDePasse'], PASSWORD_DEFAULT); // Hacher le mot de passe
    $sql = "INSERT INTO utilisateurs (email, nom_pseudo, mot_de_passe) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $email, $nomPseudo, $motDePasse);
    
    if ($stmt->execute()) {
       
        header('Location: compte_cree.php');
        exit();
    } else {
        echo "Erreur lors de la création du compte : " . $conn->error;
    }
    
    $stmt->close();
$conn->close();
?>
