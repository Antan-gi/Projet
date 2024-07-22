<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Le zoo d'Arcadia</title>
    <?php
if (isset($pageTitle)) {
    if ($pageTitle == 'Index.php') {
        echo '<link rel="stylesheet" href="../assets/css/styles-index.css">';
    } elseif ($pageTitle == 'theme.php') {
        echo '<link rel="stylesheet" href="../assets/css/styles-theme.css">';
    } elseif ($pageTitle == 'login.php') {
        echo '<link rel="stylesheet" href="../assets/css/styles-login.css">';
    }
}
?>
</head>
<body>
<header>
        <nav class="navbar" role="navigation" aria-label="Main navigation">
            <tilte id="title">Le zoo d'Arcadia</tilte>
            <a href="index.php" class="navbar-brand"> 
            </a>
            <div class="menu-container">
            <button class="menu-logo" aria-label="Toggle menu">
                    <img src="../assets/Img/logo.jpg" alt="Menu">
                </button>
                <ul class="navbar-nav">
                    <li class="nav-item"><a href="../public/Index.php" class="nav-link">Accueil</a></li>
                    <li class="nav-item"><a href="../public/services.php" class="nav-link">Services</a></li>
                    <li class="nav-item"><a href="../public/theme.php" class="nav-link">Thème</a></li>
                    <li class="nav-item"><a href="../public/contact.php" class="nav-link">Contact</a></li>
                    <li class="nav-item"><a href="../public/login.php" class="nav-link">Login</a></li>
                    
                </ul>
            </div>
        </nav>
    </header>