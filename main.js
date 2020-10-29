
// jer doms chatvirtavs da mere javascripts(tavis dazgveva)
$(document).ready(function(){ 
    
    $("#burger").on("click", function(e){
        // console.log(e); // all events
       
        if($(this).hasClass("active")){
            $(this).removeClass("active");
        }else{
            $(this).addClass("active");
        };
        if($("#navigation").hasClass("active")){
            $("#navigation").removeClass("active");
        }else{
            $("#navigation").addClass("active");
        };
    });
});

// $("#navigation").on("click", function(){
//     $(this).addClass("active");
// });
$("#tr-box-1").mouseover( function(){
    $(this).addClass("active");
});

