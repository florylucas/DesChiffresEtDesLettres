
(function () {
    var compteur=1;

    var voyelle = function (){

        var lesvoyelles = ["a","e","i","o","u","y"];
        var rdmvoy = Math.floor(Math.random() * 6);
        var voyaleat = lesvoyelles[rdmvoy].toUpperCase();
        return voyaleat;
    };
    $("#voyelle").click(function(){

        var lavoy = voyelle();
        console.log(compteur);
        $("#l"+compteur).html(lavoy);
        compteur++;
        if(compteur>9) {
            $("#msgerror").html("Le tableau est plein !");
            document.getElementById("consonne").setAttribute("disabled", "disabled");
            document.getElementById("voyelle").setAttribute("disabled", "disabled");
        }

        $.ajax({
            method: "GET",
            url: "traitement.php",
            data: { "lettre": lavoy}
        })
            .done(function(e) {
                console.log("data " + e );
            });
    })

    var consonne = function (){

        var lesconsonnes = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","z"];
        var rdmcons = Math.floor(Math.random() * 20);
        var consaleat = lesconsonnes[rdmcons].toUpperCase();
        return consaleat;
    };
    $("#consonne").click(function(){

        var lacons = consonne();
        console.log(compteur);
        $("#l"+compteur).html(lacons);
        compteur++;
        if(compteur>9) {
            $("#msgerror").html("Le tableau est plein !");
            document.getElementById("consonne").setAttribute("disabled", "disabled");
            document.getElementById("voyelle").setAttribute("disabled", "disabled");
        }

        $.ajax({
            method: "GET",
            url: "traitement.php",
            data: { "lettre": lacons}
        })
            .done(function(e) {
                console.log("data " + e );
            });

    })

    $("#reset").click(function(){
        window.location.reload();
    })


})();