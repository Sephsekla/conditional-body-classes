console.log(ccsVars);


$ = jQuery;

$(document).ready(function () {


    $('#ccs-class-rules').on('change',".ccs-operator",function(){
        
        let set = $(this).parent('.ccs-set');
        let conditions = $(set).find('.ccs-conditions');
        let index = $(set).attr('data-index');


        $.ajax({
            type: "post",
            //dataType: "json",
            url: ccsVars.ajaxurl,
            data: {
                action: "ccs_update_condition",
                index: index,
                value: $(this).val(),
                label: $(set).attr('data-label'),
            },
            success: function (response) {
               
                    $(conditions).html(response);

                
            }
        })




    })


    $('#ccs-class-rules').on('click',".remove",function(){
        let set = $(this).parent('.ccs-set');
        $(set).remove();
        console.log("remove");


    });


        $("#add").click(function () {

            let index = 0, set = this;

                $('.ccs-set').each(function() {
                    var value = parseFloat($(this).attr('data-index'));
                    index = (value > index) ? value : index;
                  });
            

                  index++;
           
    
                $.ajax({
                    type: "post",
                    //dataType: "json",
                    url: ccsVars.ajaxurl,
                    data: {
                        action: "ccs_add_class",
                        index: index,
                        label: $(set).attr('data-label'),
                        option: $(set).attr('data-option'),
                        textarea: "textarea" === $(set).attr('data-type')
                    },
                    success: function (response) {
                       
                            $('#ccs-class-rules').append(response);
    
                        
                    }
                });
    
    



    });

});