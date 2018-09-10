$(document).ready(function(){
    console.log(apiKey);

    var apiKey="0ab55f3eb3f88236784a773210cfad1b";

    $("#search-button").click(function() {
        console.log("botón de search clicleado");
        var search = $("#search").val();
        
        var $characters = $("#characters");
        $characters.html("<h1>Searching</h1>");