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

                //get all new inputs
                var $newInputs = $newSection.find('input'),
                    $newTextField = $newSection.find('textarea');
                // console.log($newInputs);

                //change names/ids of inputs inside
                $newInputs.each(function(){
                    // var nameString = ''
                    // $(this).attr('name', $(this).attr('name' + '-' + newId));
                    // console.log($(this));
                    // $(this).val('');
                });

                //append remove button to new section
                var removeButton = '<button class=" btn btn--dark" type="button" data-class="owner-portal__remove-section" style="margin-bottom: 10px;">remove this section</button>';
                $newSection.append(removeButton);

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

    var $removeButton = $('[data-class="owner-portal__remove-section"]');

    $(document).on('click', $removeButton, function(){
        console.log($(this).parents('.owners-portal__form-section'));
        $(this).parents('.owners-portal__form-section').remove();
    });
});


//add ability to remove added setion
//clear out chosen file and other inputs when new section added
