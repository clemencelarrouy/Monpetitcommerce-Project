// Jquery Mon Petit Commerce

// pour eviter d'avoir à charger dans toutes les pages tous les fichiers Jquery et Javascripts afin d'optimiser la vitesse de chargement, le script "Imprimer la page" a été directement placé dans le footer.

//chargement de la page
$(document).ready(function () {
  console.log("page html chargé");

  //changement photo sur les fiches produits
  $(document).ready(function () {
    $("#imgnav").find(".imageclickable").attr("width", 100);
  });

  $(document).on("click", ".imageclickable", function () {
    //$(this).width(600);
    $("#imggrande").empty();
    $("#imggrande").append(
      "<input type='image'  alt='Login' class='imageclickable' src='" +
        $(this).attr("src") +
        "'>"
    );
    $("#imggrande").find("input").attr("width", 400);
  });

  //// onglet description composition dans les fiches produits
  $("#monOnglet").tabs();

  /// date picker dans la page personal shopper
  $("input.date_calendrier").datepicker();
});

// top

$("#demo").badge(4, "top");
