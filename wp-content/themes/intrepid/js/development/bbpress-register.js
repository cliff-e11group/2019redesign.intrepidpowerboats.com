jQuery(document).ready(function ($) {

    var $form = $('#register-new-user'),
    $hullNumber = $form.find('#user_hull_number'),
    $usertype = $form.find('#user_type'),
    $inputs = $form.find('input');

    if('owner' === $usertype.val()){
        $hullNumber.parent().css('display', 'block');
        $hullNumber.prop('required', true);
    }

    $usertype.change(function(){
        if('owner' === $usertype.val()){
            $hullNumber.parent().css('display', 'block');
            $hullNumber.prop('required', true);
        } else{
            $hullNumber.parent().css('display', 'none');
            $hullNumber.prop('required', false);
        }
    });

    var $submitBtn = $form.find('.user-submit');

    if($submitBtn.length > 0){
        $submitBtn.click(function(e){
            e.preventDefault();

            var errorFeedback = '<p class="error-feedback">All fields must be filled out to register for the Owner Portal</p>';
            var readyForSubmit = true;

            $inputs.each(function(){
                var $this = $(this),
                isEmpty = false,
                hasError = false;

                if('user_hull_number' === $this.attr('name') ){
                    return;
                }

                if('hidden' === $this.attr('type') ){
                    return;
                }

                if( !$this.val() || '' === $this.val() ) {
                    isEmpty = true;
                }

                if( $this.siblings('.error-feedback').length > 0 ){
                    hasError = true;
                }

                if(isEmpty){
                    readyForSubmit = false;
                }

                if( !hasError && isEmpty){
                    $this.after(errorFeedback);
                } else if (hasError && !isEmpty){
                    $this.siblings('.error-feedback').remove();
                }


                console.log( readyForSubmit);

            });

            var hullNumberExists = true;

            if('owner' === $usertype.val() && (!$hullNumber || '' === $hullNumber.val() ) ){
                if(!$hullNumber.siblings('.error-feedback').length > 0 ){
                    $hullNumber.after('<p class="error-feedback">You must enter a hull number to register as an owner.</p>');
                }
                hullNumberExists = false;
            } else{
                $hullNumber.siblings('.error-feedback').remove();
            }

            // console.log(readyForSubmit, hullNumberExists);

            if(readyForSubmit && hullNumberExists){
                $form.submit();
            }
        })
    }

});
