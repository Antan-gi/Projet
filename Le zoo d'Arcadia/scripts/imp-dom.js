fetch('/public/DOM/D-index.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('i-p').innerHTML = data;
  })
  .catch(error => {
    console.error('Erreur lors de la récupération ou du traitement du fichier :', error);
  });

  fetch('/public/DOM/text.txt')
  .then(response => response.text())
  .then(data => {
    document.getElementById('p2').innerHTML = data;
  })
  .catch(error => {
    console.error('Erreur lors de la récupération ou du traitement du fichier :', error);
  });

  fetch('/public/DOM/D-theme.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('TH').innerHTML = data;
  })
  .catch(error => {
    console.error('Erreur lors de la récupération ou du traitement du fichier :', error);
  });

  fetch('/public/DOM/D-login.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('LG').innerHTML = data;
  })
  .catch(error => {
    console.error('Erreur lors de la récupération ou du traitement du fichier :', error);
  });

  

/*
  fetch('../assets/Img/img2.jpeg')
  .then(response => response.blob())
  .then(blob => {
    // Utilisation de URL.createObjectURL pour créer une URL locale
    let imageUrl = URL.createObjectURL(blob);

    // Utilisation de l'URL pour définir la source de l'image
    let imgElement = document.createElement('img');
    imgElement.src = imageUrl;

    // Insérer l'élément img dans le DOM où vous le souhaitez
    document.getElementById('b1-1').appendChild(imgElement);
  })
  .catch(error => {
    console.error('Erreur lors de la récupération ou du traitement du fichier :', error);
  });*/

  