document.getElementById('addImageForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Récupérer les valeurs du formulaire
    const imageUrl = document.getElementById('imageUrl').value;
    const imageAlt = document.getElementById('imageAlt').value;

    // Protection XSS: Désinfecter les entrées utilisateur
    const sanitizedUrl = sanitizeInput(imageUrl);
    const sanitizedAlt = sanitizeInput(imageAlt);

    // Vérifier si l'URL est valide avant d'ajouter
    if (!isValidUrl(sanitizedUrl)) {
        alert('URL d\'image invalide');
        return;
    }

    // Ajouter l'image à la galerie
    const gallery = document.getElementById('gallery');
    const imgElement = document.createElement('img');
    imgElement.src = sanitizedUrl;
    imgElement.alt = sanitizedAlt;
    gallery.appendChild(imgElement);

    // Réinitialiser le formulaire
    document.getElementById('addImageForm').reset();
});

// Fonction pour désinfecter les entrées utilisateur
function sanitizeInput(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
}

// Vérifier si une URL est valide
function isValidUrl(url) {
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
}
