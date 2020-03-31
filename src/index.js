console.log(ccsVars);


$ = jQuery;

$(document).ready(function () {


    $('.ccs-rule-wrapper').on('change',".ccs-operator",function(){
        
        let set = $(this).closest('.ccs-set');
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
                option: $(set).closest('.ccs-rule-wrapper').attr('data-option'),
            },
            success: function (response) {
               
                    $(conditions).html(response);

                
            }
        })




    })


    $('.ccs-rule-wrapper').on('click',".remove",function(){
        let set = $(this).closest('.ccs-set');
        $(set).remove();
        console.log("remove");


    });


        $(".add").click(function (e) {

            e.preventDefault();

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

                            let container = $(set).attr('href');
                       
                            $(container).append(response);
    
                        
                    }
                });
    
    



    });

});