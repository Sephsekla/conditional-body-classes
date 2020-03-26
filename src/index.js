console.log("script");


$ = jQuery;

$(document).ready(function(){

    $(".cbc-set").each(function(){
        $(this).find(".cbc-operator").change(function(){
            alert("change");
        })
    });


    /*$(".cbc-conditions > select").attr('disabled','disabled');
    $(".cbc-conditions > select").hide(); */
})