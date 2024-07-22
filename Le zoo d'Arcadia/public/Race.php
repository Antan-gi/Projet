<?php include('../includes/Header.php'); ?>

<div class="encadre"> 
    <div><img class="encadre img" src='../assets/Img/lama.png'></div>
    
    <div class="encadre1"> 
        <p class="p3">Espace réservé aux vétérinaires</p>
        <?php if ($_SESSION['role'] === 'veterinaire') : ?>
            <form id="formVeterinaires">
                <textarea class="txta1" name="veterinairesInfo" id="veterinairesInfo" rows="4" cols="50"></textarea><br>
                <button type="submit">Mettre à jour</button>
            </form>
        <?php else : ?>
            <textarea class="txta1" name="veterinairesInfo" id="veterinairesInfo" rows="4" cols="50" readonly disabled>Contenu réservé aux vétérinaires</textarea><br>
        <?php endif; ?>
    </div>
    <div class="encadre2"> 
        <p class="p3">Espace d'écriture animal</p>
    </div>
    
    <div class="encadre3"> 
        <p class="p3">Espace réservé aux personnels</p>
        <?php if ($_SESSION['role'] === 'personnel') : ?>
            <form id="formPersonnels">
                <textarea name="personnelsInfo" id="personnelsInfo" rows="4" cols="50"></textarea><br>
                <button type="submit">Mettre à jour</button>
            </form>
        <?php else : ?>
            <textarea name="personnelsInfo" id="personnelsInfo" rows="4" cols="50" readonly disabled>Contenu réservé aux personnels</textarea><br>
        <?php endif; ?>
    </div>
</div>

<?php include('../includes/footer.php'); ?>

