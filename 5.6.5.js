jQuery(document).ready(function() {
    var p = $.ajax({
            type: "GET",
            url: "/texto"
        });
           
       p.done(function(msg){
           $("#text").html(msg);
       });
    $('#boton a').click(function(){
           var p = $.ajax({
            type: "GET",
            url: "/texto1"
            });
           
             p.done(function(msg){
                $("#text1").html(msg);
            });
    });

    $('#boton1 a').click(function(){
           var p = $.ajax({
            type: "GET",
            url: "/texto2"
            });
           
             p.done(function(msg){
                $("#text2").html(msg);
            });
             p.fail(function() {
                $("#text2").html( "error 404 not found" );
              })
    });
	
});
