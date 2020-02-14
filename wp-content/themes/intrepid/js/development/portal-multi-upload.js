$(function () {
    if( $('.owner-portal__form').length > 0 ){
        $('.owner-portal__form').each(function(e){
            $(this).submit(function(e){
                $(this).find('input[type="submit"]').val('Loading...');
            });

        });
    }
});

