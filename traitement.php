<?php
include 'PDO.php';
if(!empty($_GET['lettre'])){
    $lettre=$_GET['lettre'];
    $req=$conn->prepare( 'UPDATE Lettres SET iteration=iteration+1 WHERE lettre= :lettre');
    try {
        $donnees=array(
            'lettre'=>$lettre
        );
        $success = $req->execute($donnees);
    }
    catch (Exception $e) {
        echo 'erreur : ', $e->getMessage();
    }
}
?>