<?php
// Inclure le fichier de connexion à la base de données
require_once('connexion.php');

// Vérifier si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $email = $_POST['email'];
    $nomPseudo = $_POST['nomPseudo'];
    $motDePasse = password_hash($_POST['motDePasse'], PASSWORD_DEFAULT); // Hacher le mot de passe
    
    // Préparer une requête d'insertion
    $sql = "INSERT INTO utilisateurs (email, nom_pseudo, mot_de_passe) VALUES (?, ?, ?)";
    
    // Préparer la déclaration SQL sécurisée
    $stmt = $conn->prepare($sql);
    
    // Liaison des paramètres et exécution de la requête
    $stmt->bind_param("sss", $email, $nomPseudo, $motDePasse);
    
    if ($stmt->execute()) {
        // Redirection vers une page de succès ou un message de succès
        header('Location: compte_cree.php');
        exit();
    } else {
        echo "Erreur lors de la création du compte : " . $conn->error;
    }
    
    // Fermer la déclaration préparée
    $stmt->close();
}

// Fermer la connexion à la base de données
$conn->close();
?>
