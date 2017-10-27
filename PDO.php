<?php
// Déclaration des différentes variables utiles à la connexion
$serveur = "localhost";
$base = 'DesChiffresEtDesLettres';
$utilisateur = 'root';
$motDePasse = 'root';

// création d'une connexion
try {
    $dns = "mysql:host=$serveur;dbname=$base";
    $conn = new PDO( $dns, $utilisateur, $motDePasse );
    echo "ok";
} catch ( Exception $e ) {
    echo "Connexion MySQL impossible : ", $e->getMessage();
    die();
}
?>