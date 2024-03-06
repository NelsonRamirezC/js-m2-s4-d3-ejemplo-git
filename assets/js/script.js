$(function(){

    $("#tituloPrincipal").on("click", function () {
        $("#tituloPrincipal").toggleClass("rojo");
    })


    $("#switchContactosSubtitulo").on("click", function(){
        $("#contactosSubtitulo").toggle("slow");
    })


    $("#contactos p").on("dblclick", function(){
        $(this).hide("slow");
    })

})
