$(function () {

    $('.page__single--boat').e11_BuildABoat();

    var $spinner__toggle = $('.spinner__toggle'),
        $spinnerView = $('#spinner-view');

    if ($spinner__toggle.length > 0 && $spinnerView.length > 0) {
        var $heroModel = $('.hero--model');

        $spinner__toggle.on('click', function () {
            $heroModel.toggleClass('spinner-active');
        });

        $spinnerView.spritespin({
            source: view_360_urls,
            animate: false,
            responsive: true,
            sizeMode: 'fill',
            sense: -1
        });
    }

});

(function ($, window, document, undefined) {

    var name = 'BuildABoat';

    function BuildABoat(element, index, options) {
        this.$el = $(element);
        this.options = $.extend({}, $.e11.fn[name].defaults, options);
        this.init();
    }

    BuildABoat.prototype = {

        name: name,

        init: function () {

            var self = this;

            // Toggle BAB module
            this.$toggle = this.$el.find('[data-class="build-a-boat-toggle"]');
            this.$buildABoat = this.$el.find('.build-a-boat');
            this.$buildABoatNameForm = this.$el.find('.form--sticky');
            this.$buildABoatNameInput = this.$buildABoatNameForm.find('input[name="boat-name"]');
            this.$buildABoatName = this.$el.find('.custom-hero__title strong');
            this.$editModelName = this.$el.find('.icon-box--edit');
            this.activeBABModelNameClass = 'build-a-boat--modelName';
            this.activeBABClass = 'build-a-boat--active';

            this.$editModelName.on('click', function (e) {
                e.preventDefault();

                self.$buildABoat.toggleClass(self.activeBABModelNameClass);
            });

            this.$buildABoatNameForm.on('submit', function (e) {
                e.preventDefault();
                self.$buildABoatName.text(self.$buildABoatNameInput.val());
                self.$buildABoat.removeClass(self.activeBABModelNameClass);
                self.$formBoatNameInput.val(' - ' + self.$buildABoatNameInput.val());
            });


            //Share on facebook
            this.$shareFacebook = this.$el.find('.icon-box--facebook');

            this.$shareFacebook.click(function (e) {
                e.preventDefault();
                // var elem = $(this);
                // postToFeed(elem.data('title'), elem.data('desc'), elem.prop('href'), elem.data('image'));
                //
                // return false;
            });

            this.$toggle.on('click', function (e) {
                e.preventDefault();

                var BABpadding = $('.header').outerHeight(true),
                    BABpaddingAdminbarHeight = 0,
                    $BABwpadminbar = $('#wpadminbar'),
                    BABpaddingTranslateBarHeight = 0,
                    $BABtranslateBar = $('.goog-te-banner-frame');

                if ($BABwpadminbar.length > 0) {
                    BABpaddingAdminbarHeight = $BABwpadminbar.outerHeight();
                }

                if ($BABtranslateBar.length > 0) {
                    BABpaddingTranslateBarHeight = $BABtranslateBar.outerHeight();
                }

                BABpadding = BABpadding + BABpaddingAdminbarHeight + BABpaddingTranslateBarHeight;

                $('body').toggleClass(self.activeBABClass);
                self.$buildABoat.css('top', BABpadding);
            });

            //Navigate through BAB steps
            this.$items = this.$el.find('.form-step .step__item');
            this.$nav = this.$el.find('.step-nagivation');
            this.$steps = $('[data-class="step"]');
            this.$prev = this.$el.find('[data-class="prev"]');
            this.$next = this.$el.find('[data-class="next"]');
            this.$prevText = this.$nav.find('.step-prev').find('span');
            this.$nextText = this.$nav.find('.step-next').find('span');
            this.$formBoatNameInput = self.$el.find('.gfield.input-boat-name input');
            this.activeClass = 'step__item--active';
            this.finishClass = 'build-a-boat--finish';
            this.startClass = 'build-a-boat--start';
            this.endClass = 'build-a-boat--end';
            this.activeItem = 0;

            this.$prev.on('click', function () {
                self.deactivateItem(self.activeItem);
                self.activeItem--;
                self.activateItem(self.activeItem);
                self.updateNav();
                self.$buildABoat.removeClass(self.endClass);
            });

            this.$next.on('click', function () {
                self.deactivateItem(self.activeItem);
                self.activeItem++;
                self.activateItem(self.activeItem);
                self.updateNav();

                if (self.activeItem === 3) {
                    self.$buildABoat.addClass(self.endClass);
                    self.updateForm();
                }
            });

            //
            //EXTERIOR - Color Picker
            //
            this.$colorPicker = this.$el.find('#color-picker');
            this.$colorItems = this.$el.find('.area-list__item');
            this.$colorPalette = this.$el.find('.color-palette');
            this.$colorPaletteClear = this.$el.find('.color-block__picker--clear');
            this.$reflection = this.$el.find('#reflection');
            this.$recentColors = this.$el.find('#recent-colors');
            this.colorItemActiveClass = 'active';
            this.$activeColorItem = this.$colorItems.eq(0);
            this.boatLayer = this.$activeColorItem.attr('data-boat-layer');
            this.$boatLayer = $("#" + self.boatLayer).find('path');

            this.$reflection.css({
                'display': 'block',
                'opacity': 0.2
            });

            // Activate color picker
            var colorPicker = new iro.ColorPicker('#color-picker', {
                width: 180,
                color: '#ffffff'
            });

            function onColorChange(color, changes) {
                self.$activeColorItem.find('.area-list__color-box').css('background', color.hexString);
                self.updateBoatLayerColor(self.$boatLayer, {'fill': color.hexString});
            }

            colorPicker.on('color:change', onColorChange);

            this.$colorItems.each(function () {
                var $this = $(this),
                    $defaultColor = $this.data('default-color');

                if ($defaultColor) {
                    var $colorBox = $this.find('.area-list__color-box'),
                        $boatColorLayer = $this.data('boat-layer');

                    $colorBox.css('background', $defaultColor);
                    self.updateBoatLayerColor($("#" + $boatColorLayer).find('path, polygon'), {'fill': $defaultColor});
                }

            });

            // Toggle between active color item
            this.$colorItems.on('click', function () {
                var $this = $(this),
                    activeColor = undefined,
                    recentColor = self.$activeColorItem.find('.area-list__color-box').css('background-color');

                // If color was chosen, add it to recently used colors
                if (recentColor !== 'undefined' && recentColor !== 'rgba(0, 0, 0, 0)') {
                    var $recentColors = self.$recentColors.find('.color-list__item'),
                        recentColors = [];

                    // Build array of recent colors
                    $recentColors.each(function () {
                        recentColors.push($(this).css('background-color'));
                    });

                    // If color is already in recent colors, do nothing
                    if ($.inArray(recentColor, recentColors) === -1) {
                        self.$colorPalette.addClass('has-recent-colors');
                        self.$recentColors.prepend('<li class="color-list__item" style="background-color: ' + recentColor + ';"></li>')

                        // If 6 or more recent colors exist, remove the oldest one
                        if ($recentColors.length >= 8) {
                            $recentColors.last().remove();
                        }
                    }
                }

                // Activate the clicked color item
                $this
                    .addClass(self.colorItemActiveClass)
                    .siblings().removeClass(self.colorItemActiveClass);

                // Update active color item so picker can update correct item
                self.$activeColorItem = $this;
                self.boatLayer = self.$activeColorItem.attr('data-boat-layer');
                self.$boatLayer = $("#" + self.boatLayer).find('path, polygon');
            });

            this.$colorPaletteClear.on('click', function (e) {
                e.preventDefault();
                self.$activeColorItem.find('.area-list__color-box').css({
                    'background': ''
                });
                self.updateBoatLayerColor(self.$boatLayer, {'fill': 'none'});
            });

            // Listen for click of recent colors
            $(document).on('click', '.color-list__item', function () {
                var recentlyUsedColor = $(this).css('background-color');

                // Update active color item with chosen color
                self.$activeColorItem.find('.area-list__color-box').css('background', recentlyUsedColor);
                colorPicker.color.rgbString = recentlyUsedColor;
                self.updateBoatLayerColor(self.$boatLayer, {'fill': recentlyUsedColor});
            });

            //
            // MOTORS
            //
            this.motorColorContainer = this.$el.find('.motor-color__container');
            this.$motorImgContainer = this.$el.find('.motor-thumbnail');
            this.$motorImg = this.$motorImgContainer.find('img');
            this.$motorDescription = this.$el.find('.motor-option__description');
            this.$motorItems = this.$el.find('.motor-option__list-item');
            this.motorItemActiveClass = 'active';
            this.$activeMotorItem = this.$el.find('.motor-option__list-item.active');

            this.$motorColors = this.$el.find('.motor-color__item');
            this.motorColorActiveClass = 'active';
            this.$activeMotorColor = this.$activeMotorItem.find('.motor-color__item.active');

            this.activeMotorLayer = this.$activeMotorColor.data('motor-layer');
            this.activeMotorImg = this.$activeMotorColor.data('motor-image');

            // Hide all boat motors except active boat motor
            this.$motorColors.each(function () {
                var motorLayer = $(this).data('motor-layer');
                // Hide motor
                self.updateBoatLayerMotor(self.$el.find("#" + motorLayer), {
                    'display': 'none',
                    'opacity': 0
                });
            });

            // Toggle between active motor item
            this.$motorItems.on('click', function () {
                var $this = $(this),
                    $desc = $this.find('.motor__description'),
                    $motorColors = $this.find('.motor-color'),
                    $activeMotor = $this.find('.motor-color__item.active'),
                    $activeMotorColor = $activeMotor.data('motor-layer'),
                    $activeMotorImg = $activeMotor.data('motor-image');

                // Activate the clicked motor item
                $this
                    .addClass(self.motorItemActiveClass)
                    .siblings().removeClass(self.motorItemActiveClass);

                self.$motorImgContainer.addClass('motor-thumbnail--active');

                self.$motorImg.attr('src', $activeMotorImg);
                self.motorColorContainer.html($motorColors.clone(true));
                self.$motorDescription.html($desc.clone());

                if (self.activeMotor !== undefined) {
                    self.updateBoatLayerMotor(self.activeMotor, {
                        'display': 'none',
                        'opacity': 0
                    });
                }

                self.activeMotor = self.$el.find("#" + $activeMotorColor);
                self.updateBoatLayerMotor(self.activeMotor, {
                    'display': 'block',
                    'opacity': 1
                });
            });

            // Toggle between active motor color
            this.$motorColors.on('click', function () {
                var $this = $(this),
                    $activeMotorColor = $this.data('motor-layer'),
                    $activeMotorImg = $this.data('motor-image');

                // Activate the clicked motor item
                $this
                    .addClass(self.motorColorActiveClass)
                    .siblings().removeClass(self.motorColorActiveClass);

                self.$motorImg.attr('src', $activeMotorImg);
                self.updateBoatLayerMotor(self.activeMotor, {
                    'display': 'none',
                    'opacity': 0
                });
                self.activeMotor = self.$el.find("#" + $activeMotorColor);
                self.updateBoatLayerMotor(self.activeMotor, {
                    'display': 'block',
                    'opacity': 1
                });
            });

            // Activate active motor
            // this.activeMotor = self.$el.find("#" + this.activeMotorLayer);
            // this.updateBoatLayerMotor(this.activeMotor, {
            //     'display': 'block',
            //     'opacity': 1
            // });
            // this.$motorImg.attr('src', this.activeMotorImg);
            // this.motorColorContainer.html(this.$activeMotorItem.find('.motor-color').clone(true));
            // this.$motorDescription.html(this.$activeMotorItem.find('.motor__description').clone());


            //
            // Options
            //
            this.$optionItems = self.$el.find('.boatOption');

            // Hide all options on load
            this.$optionItems.each(function () {
                var $this = $(this),
                    userChoices = $this.closest('.option-list').data('user-choices'),
                    $optionLayer = $this.attr('data-boat-layer');

                userChoices = userChoices.toString();

                $this.on('click', function () {
                    var $this = $(this),
                        $optionDisplay = 'none',
                        $optionOpacity = '0';

                    $this.toggleClass('selected');

                    if (userChoices === '1') {
                        var $siblings = $this.siblings();

                        if ($siblings.length > 0) {
                            $siblings.removeClass('selected');

                            $siblings.each(function () {
                                var $this = $(this),
                                    $siblingLayer = $this.attr('data-boat-layer');

                                if ($siblingLayer != 'undefined' || $siblingLayer != '' || $siblingLayer != null) {
                                    var $boatOptionLayer = self.$el.find("#" + $siblingLayer);
                                    if ($boatOptionLayer !== 'undefined') {

                                        self.updateBoatLayerOption($boatOptionLayer, {
                                            'display': 'none',
                                            'opacity': 0
                                        });
                                    }
                                }
                            });
                        }
                    }

                    if ($optionLayer != 'undefined' || $optionLayer != '' || $optionLayer != null) {
                        var $boatOptionLayer = self.$el.find("#" + $optionLayer);
                        if ($boatOptionLayer !== 'undefined') {
                            $optionDisplay = $this.hasClass('selected') ? 'block' : 'none';
                            $optionOpacity = $this.hasClass('selected') ? 1 : 0;

                            self.updateBoatLayerOption($boatOptionLayer, {
                                'display': $optionDisplay,
                                'opacity': $optionOpacity
                            });
                        }
                    }
                });

            });

            //
            // Make It Yours
            //
            this.$form = self.$el.find('#gform_7');
            this.$formSubmit = self.$form.find('#gform_submit_button_7');
            this.$contactItems = self.$el.find('.contact-block .option-list__item');

            this.$formSubmit.click(function (e) {
                e.preventDefault();
                self.$formSubmit.val('Loading...');
                self.processImage();
            });

            this.$contactItems.on('click', function () {
                var $this = $(this);

                $this.toggleClass('selected');
                $this.siblings().removeClass('selected');
            });

            // Form inputs
            this.$formMotorInput = self.$el.find('.gfield.input-motor input');
            this.$formOptionsInput = self.$el.find('.gfield.input-options textarea');
            this.$formEmailChoiceInput = self.$el.find('.gfield.input-email-choice');
            this.$formImageInput = self.$el.find('.gfield.input-boat-image input');
            this.$formEmailChoices = self.$el.find('.email-input__choice');

            this.$formEmailChoices.on('click', function () {
                var $emailChoice = $(this).data('email-choice');

                self.$formEmailChoiceInput.find('input[value="' + $emailChoice + '"]').prop('checked', true);
            });

            var $successClass = 'bab-form-submitted';

            $(document).bind('gform_post_render', function () {
                $('body').addClass($successClass);
            });

            $('.bab-form__refresh a').click(function () {
                location.reload(true);
            });

        },
        processImage: function (img) {
            var that = this;

            var $screenshot = $("#bab-image svg").get(0);

            // turn DOM markup into canvas
            html2canvas($screenshot, {
                imageTimeout: 0,
                scale: 1,
                allowTaint: true
            }).then(function (canvas) {
                // convert to image
                //var img = Canvas2Image.convertToImage(canvas, w, h);
                var img = canvas.toDataURL("image/jpg");

                // save as image
                // Canvas2Image.saveAsImage(canvas, w, h, type, f);

                uploadImage(img);
            });

            var uploadImage = function (img) {

                $.ajax({
                    url: localized.ajaxurl, // AJAX handler
                    data: {
                        'action': 'e11_upload_baseImage',
                        'img': img,
                        'title': 'BAB-image'
                    },
                    dataType: 'json',
                    type: 'POST',
                    beforeSend: function () {
                        // button.text('Loading...');
                    },
                    success: function (data) {
                        if (data) {
                            console.log(data);
                            that.$formImageInput.val(data['boat_url'][0]);

                        } else {
                            console.log('no data');
                        }
                        that.$form.trigger('submit');
                    }
                });

            };
        },
        updateForm: function () {
            // Form data - Motor
            this.$formMotor = this.$el.find('.motor-option__list-item.active');
            if (this.$formMotor.length > 0) {
                this.$formMotorData = this.$formMotor.find('.motor-option__list-title').text();
                this.$formMotorInput.val(this.$formMotorData);
            }

            // Form data - Options
            this.$formOptions = this.$el.find('.model-option.model-option--alt .option-list__item.boatOption.selected');
            if (this.$formOptions.length > 0) {
                this.$formOptionsData = [];
                var that = this;
                this.$formOptions.each(function () {
                    that.$formOptionsData.push($(this).find('.option-list__text').text());
                });

                that.$formOptionsData = that.$formOptionsData.join('\n');
                console.log(that.$formOptionsData);
                this.$formOptionsInput.val(that.$formOptionsData);
            }
        },
        updateBoatLayerColor: function (layer, css) {
            layer.css(css);
        },
        updateBoatLayerMotor: function (layer, css) {
            layer.css(css);
        },
        updateBoatLayerOption: function (layer, css) {
            layer.css(css);
        },
        updateNav: function () {
            // Add class if at first step
            if (this.activeItem === 0) {
                this.$nav.addClass(this.startClass);
            } else {
                this.$nav.find('.step-prev span').text(this.$items.eq(this.activeItem).attr('data-label-back'));
                this.$nav.removeClass(this.startClass);
            }

            // Add class if at second last step
            if (this.activeItem === (this.$steps.length - 2)) {
                this.$nav.addClass(this.finishClass);
            } else {
                this.$nav.removeClass(this.finishClass);
            }

            // Add class if at last step
            if (this.activeItem === (this.$steps.length - 1)) {
                this.$nav.addClass(this.endClass);
            } else {
                this.$nav.removeClass(this.endClass);
            }
        },
        activateItem: function (i) {
            this.$items.eq(i).addClass(this.activeClass);
            this.$steps.eq(i).addClass(this.activeClass);
            $('.option-slider')[1].slick.refresh();
        },
        deactivateItem: function (i) {
            this.$items.eq(i).removeClass(this.activeClass);
            this.$steps.eq(i).removeClass(this.activeClass);
        }
    };

    $.e11.fn.pluginGenerator(BuildABoat);

})
(jQuery, window, document);
