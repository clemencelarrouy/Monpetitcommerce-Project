// Jquery Mon Petit Commerce 
$(document).ready(function() {
    console.log('page html chargé');
    

//////////////////////////////////////////////// MATRICE FICHE PRODUIT 

    $(document).ready(function(){
      $("#imgnav").find(".imageclickable").attr('width',100);
    });
  
    $(document).on('click','.imageclickable',function(){
      //$(this).width(600);
      $("#imggrande").empty();
      $("#imggrande").append("<input type='image'  alt='Login' class='imageclickable' src='"+$(this).attr('src')+"'>");
      $("#imggrande").find("input").attr("width",400);
  
    });

//// onglet description composition 
$("#monOnglet").tabs();

/// date picker 
$('input.date_calendrier').datepicker(); 



});