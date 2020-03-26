console.log(cbcVars);


$ = jQuery;

$(document).ready(function () {

    $(".cbc-set").each(function () {

        let conditions = $(this).find('.cbc-conditions');
        let index = $(this).attr('data-index');
        let set = this;

        $(set).find(".cbc-operator").change(function () {

            $.ajax({
                type: "post",
                //dataType: "json",
                url: cbcVars.ajaxurl,
                data: {
                    action: "cbc_update_condition",
                    index: index,
                    value: $(this).val(),
                    label: $(set).attr('data-label'),
                },
                success: function (response) {
                   
                        $(conditions).html(response);

                    
                }
            })


        })

        $(set).find(".remove").click(function () {

            $(set).remove();


        })


    });


    /*$(".cbc-conditions > select").attr('disabled','disabled');
    $(".cbc-conditions > select").hide(); */
})