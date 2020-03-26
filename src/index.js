console.log("script");


$ = jQuery;

$(document).ready(function(){

    $(".cbc-set").each(function(){

        let conditions = $(this).find('.cbc-conditions');
        let index = $(this).attr('data-index');

        $(this).find(".cbc-operator").change(function(){
            
            $(conditions).html($(this).val());



        })
    });


    /*$(".cbc-conditions > select").attr('disabled','disabled');
    $(".cbc-conditions > select").hide(); */
})