console.log(cbcVars);


$ = jQuery;

$(document).ready(function () {


    $('#cbc-class-rules').on('change',".cbc-operator",function(){
        
        let set = $(this).parent('.cbc-set');
        let conditions = $(set).find('.cbc-conditions');
        let index = $(set).attr('data-index');


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


    $('#cbc-class-rules').on('click',".remove",function(){
        let set = $(this).parent('.cbc-set');
        $(set).remove();
        console.log("remove");


    });


        $("#add").click(function () {

            let index = 0, set = this;

                $('.cbc-set').each(function() {
                    var value = parseFloat($(this).attr('data-index'));
                    index = (value > index) ? value : index;
                  });
            

                  index++;
           
    
                $.ajax({
                    type: "post",
                    //dataType: "json",
                    url: cbcVars.ajaxurl,
                    data: {
                        action: "cbc_add_class",
                        index: index,
                        label: $(set).attr('data-label'),
                    },
                    success: function (response) {
                       
                            $('#cbc-class-rules').append(response);
    
                        
                    }
                });
    
    



    });

});