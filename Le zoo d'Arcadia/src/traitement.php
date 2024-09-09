<?php
session_start();
require 'db.php'; 

$response = array();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['motDePasse'];

 
    $stmt = $pdo->prepare('SELECT * FROM users WHERE email = ?');
    $stmt->execute([$email]);
    $user = $stmt->fetch();

    if ($user && password_verify($password, $user['password'])) {
        // Connexion réussie
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['username'] = $user['username'];
        $response['success'] = "1";
    } else {
        // Connexion échouée
        $response['success'] = "0";
        $response['message'] = 'Email ou mot de passe incorrect.';
    }
} else {
    $response['success'] = "0";
    $response['message'] = 'Méthode de requête invalide.';
}

echo json_encode($response);
?>

