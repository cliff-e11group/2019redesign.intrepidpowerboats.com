$(function () {

    var $addButton = $('[data-class="owner-portal__add-section"]');

    var getNumericPart = function(id) {
        var $num = parseInt(id.replace(/[^\d]+/, ''));
        return $num;
    }

    if($addButton.length > 0){

        $addButton.each(function(){
            var $this = $(this);

            $this.click(function(){
                var $form = $this.parents('.owner-portal__form'),
                $lastSection = $form.find('.owners-portal__form-section').last(),
                newId = getNumericPart($lastSection.attr('id')) + 1,
                idString = 'owners-portal__image-form-section';


                //clone last section
                var $newSection = $lastSection.clone();

                //change id
                $newSection.attr('id', idString + '-' + newId);

                //clear input values
                var $newInputs = $newSection.find('input'),
                $newTextArea = $newSection.find('textarea');

                //change names/ids of inputs inside
                $newInputs.each(function(){
                    var newName = $(this).attr('name').replace(/\d+/g, newId);
                    $(this).attr('name', newName);
                    $(this).prop('checked', false);

                    if(!$(this).is('input:radio')) {
                        $(this).val('');
                        $(this).attr('id', newName);
                    }

                });
                $newTextArea.each(function(){
                    var newName = $(this).attr('name').replace(/\d+/g, newId);
                    $(this).attr('name', newName);
                    $(this).attr('id', newName);
                    $(this).val('');
                });

                var $removeButton = $newSection.find('[data-class="owner-portal__remove-section"]');
                $removeButton.css('display', 'block').on('click', function(){
                    $(this).parents('.owners-portal__form-section').remove();
                });

                //apend to last section
                $newSection.insertAfter($lastSection);


                //change button to plural on adding another upload field
                $submitButton = $form.find('[data-class="owner-portal__submit"]');
                submitText = $submitButton.val();

                if($('.owners-portal__form-section').length > 1 && $submitButton.val().slice(-1) !== 's'){
                    var oldText = $submitButton.val();
                    $submitButton.val(oldText + 's');
                }


            });
        });
    }

});


//fix ids on form
