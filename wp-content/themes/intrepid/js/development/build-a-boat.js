$(function () {

    $('.page__single--boat').e11_BuildABoat();

    var $spinner__toggle = $('.spinner__toggle'),
        $spinnerView = $('#spinner-view'),
        $spinner__close = $('.spinner__close');

    if ($spinner__toggle.length > 0 && $spinnerView.length > 0) {
        var $heroModel = $('.hero--model'),
            $spinner__toggleContainer = $('.spinner__toggle.icon-close'),
            $spinnerView__instructions = $('.spinner-view__instructions'),
            setSpinnerPositions = function () {
                $spinner__toggleContainer.css({
                    'top' : $spinnerView.offset().top
                });
                $spinnerView__instructions.css({
                    'top' : $spinnerView.offset().top + $spinnerView.outerHeight()
                });
        };

        $spinner__toggle.on('click', function () {
            setSpinnerPositions();
            $heroModel.toggleClass('spinner-active');
        });

        $(window).resize(function () {
            setTimeout(function () {
                setSpinnerPositions();
            }, 150);
        });

        $spinner__close.on('click', function () {
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



    //
    // Email Options
    //
    var $emailOptionsForm = $('#gform_8'),
        $emailOptionsFormSubmit = $emailOptionsForm.find('#gform_submit_button_8'),
        $emailOptionsChoice = $('[data-form-wrap="1"] .option-list__item'),
        $formOptionsInput = $emailOptionsForm.find('.gfield.input-options textarea'),
        $formEmailChoiceInput = $emailOptionsForm.find('.gfield.input-email-choice');

    if ($emailOptionsChoice.length > 0) {
        $emailOptionsChoice.on('click', function () {
            var $this = $(this),
                $emailChoice = $this.data('email-choice');

            $this.toggleClass('selected');
            $this.siblings().removeClass('selected');

            // Email Options Form Inputs
            $formEmailChoiceInput.find('input[value="' + $emailChoice + '"]').prop('checked', true);
        });

        $emailOptionsFormSubmit.click(function (e) {
            e.preventDefault();
            // Form data - Options
            var $emailOptions = $('.model-option.model-option--main .option-list__item.boatOption.selected');
            if ($emailOptions.length > 0) {
                var $emailOptionsData = [];

                $emailOptions.each(function () {
                    $emailOptionsData.push($(this).find('.option-list__text').text());
                });

                $emailOptionsData = $emailOptionsData.join('\n');
                $formOptionsInput.val($emailOptionsData);
            }

            $emailOptionsForm.trigger('submit');
        });
    }

    var $successClass = 'bab-form-submitted-';

    $(document).bind('gform_post_render', function (event, form_id, current_page) {
        $('body').addClass($successClass + form_id);
    });

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
            this.$nav = this.$el.find('.step-nagivation--alt');
            this.$steps = $('[data-class="step"]');
            this.$prev = this.$el.find('[data-class="prev"]');
            this.$next = this.$el.find('[data-class="next"]');
            this.$prevText = this.$nav.find('.step-prev').find('span');
            this.$nextText = this.$nav.find('.step-next');
            this.skipText = 'Skip this step >';
            this.nextText = 'Next step >';
            this.$formBoatNameInput = self.$el.find('.gfield.input-boat-name input');
            this.activeClass = 'step__item--active';
            this.finishClass = 'build-a-boat--finish';
            this.startClass = 'build-a-boat--start';
            this.endClass = 'build-a-boat--end';
            this.activeItem = 0;

            this.$items.click(function () {
                self.deactivateItem(self.activeItem);
                self.activeItem = $(this).index();
                self.activateItem(self.activeItem);
                self.updateNav();
            });

            this.$prev.on('click', function () {
                self.deactivateItem(self.activeItem);
                self.activeItem--;
                self.activateItem(self.activeItem);
                self.updateNav();
            });

            this.$next.on('click', function () {
                self.deactivateItem(self.activeItem);
                self.activeItem++;
                self.activateItem(self.activeItem);
                self.updateNav();
            });

            //
            //EXTERIOR - Color Picker
            //
            this.$stepColorMod = false;
            this.$colorBlock = this.$el.find('.color-block');
            this.$mobileBlockActiveHolder = this.$el.find('.mobile__active-holder');
            this.mobileBlockActiveClass = 'mobile__active-holder--active';
            this.$colorPicker = this.$el.find('#color-picker');
            this.$colorItems = this.$el.find('.area-list__item');
            this.$colorPalette = this.$el.find('.color-palette');
            this.$colorPaletteClear = this.$el.find('.color-block__picker--clear');
            this.$colorPaletteWhite = this.$el.find('.color-block__picker--white');
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

            //Mobile controls
            this.$mobileBlockActiveHolder.click(function () {
                $(this).closest('[data-class="step"]').toggleClass(self.mobileBlockActiveClass)
            });

            // Activate color picker
            var colorPicker = new iro.ColorPicker('#color-picker', {
                width: 180,
                color: '#ffffff'
            });

            this.$mobileBlockActiveHolderColor = $('.color-block .mobile__active-holder');

            function onColorChange(color, changes) {
                self.$activeColorItem.find('.area-list__color-box').css('background', color.hexString);
                self.$mobileBlockActiveHolderColor.find('.area-list__color-box').css('background', color.hexString);
                self.updateBoatLayerColor(self.$boatLayer, {'fill': color.hexString});
                if(self.$stepColorMod == false) {
                    self.$nextText.text(self.nextText);
                    self.$stepColorMod = true;
                }
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

                self.$mobileBlockActiveHolderColor.html($this.children().clone());
                self.$colorBlock.addClass(self.mobileBlockActiveClass);
            });

            this.$colorPaletteClear.on('click', function (e) {
                e.preventDefault();
                self.$activeColorItem.find('.area-list__color-box').css({
                    'background': ''
                });
                self.$mobileBlockActiveHolder.find('.area-list__color-box').css({
                    'background': ''
                });
                self.updateBoatLayerColor(self.$boatLayer, {'fill': 'none'});
            });

            this.$colorPaletteWhite.on('click', function (e) {
                e.preventDefault();
                self.$activeColorItem.find('.area-list__color-box').css({
                    'background': '#ffffff'
                });
                self.$mobileBlockActiveHolder.find('.area-list__color-box').css({
                    'background': '#ffffff'
                });
                self.updateBoatLayerColor(self.$boatLayer, {'fill': '#ffffff'});
                colorPicker.color.rgbString = 'rgb(255, 255, 255)';
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
            this.$stepMotorMod = false;
            this.motorColorContainer = this.$el.find('.motor-color__container');
            this.$motorImgContainer = this.$el.find('.motor-thumbnail');
            this.$motorImg = this.$motorImgContainer.find('img');
            this.$motorOption = this.$el.find('.motor-option');
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

                self.$motorOption.find('.mobile__active-holder .area-list__title').text($this.find('.motor-option__list-title').text());
                self.$motorOption.find('.mobile__active-holder .area-list__color-box').css('background', $this.find('.motor-color__item.active .motor-color__title').text());
                self.$motorOption.addClass(self.mobileBlockActiveClass);

                if(self.$stepMotorMod == false) {
                    self.$nextText.text(self.nextText);
                    self.$stepMotorMod = true;
                }

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

                self.$motorOption.find('.mobile__active-holder .area-list__color-box').css('background', $this.find('.motor-color__title').text());
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
            this.$stepOptionsMod = false;
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

                    if(self.$stepOptionsMod == false) {
                        self.$nextText.text(self.nextText);
                        self.$stepOptionsMod = true;
                    }
                });
            });

            this.$optionSection = self.$el.find('.model-option');
            this.$optionItemTitle = self.$optionSection.find('.option-title');
            this.$optionItemMobileHolder = self.$optionSection.find('.mobile__active-holder');
            this.$optionItemActiveMobileTitle = self.$optionSection.find('.area-list__title');
            this.$optionSectionActiveMobileClass = 'model-options--active';

            this.$optionItemTitle.click(function () {
                var $this = $(this),
                    $container = $this.closest('div');

                $container.addClass(self.$optionSectionActiveMobileClass);
                self.$optionSection.addClass(self.mobileBlockActiveClass);
                self.$optionItemActiveMobileTitle.text($this.text());
            });

            this.$optionItemMobileHolder.click(function () {
                self.$optionItemTitle.closest('div').each(function () {
                    $(this).removeClass(self.$optionSectionActiveMobileClass);
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

            $('.bab-form__refresh a').click(function () {
                location.reload(true);
            });

        },
        processImage: function (img) {
            var that = this;

            var boatImage = document.querySelector("#bab-image svg");
            var xmlImage = new XMLSerializer().serializeToString(boatImage);
            xmlImage = xmlImage.replace(/xmlns=\"http:\/\/www\.w3\.org\/2000\/svg\"/, "");
            var xmlData = JSON.stringify({svgElement: xmlImage});
            console.log(xmlData);
            $.ajax({
                url: "https://wt-e853d581b8c1ce10789506e9fec791ab-0.sandbox.auth0-extend.com/async-svg-canvas",
                data: xmlData,
                contentType: 'application/json',
                dataType: 'json',
                type: 'POST',
                success: function(data) {
                    uploadImage(data.image);
                },
                fail: function (data) {
                    console.error("Failed to parse SVG to PNG");
                }
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
                if(this.$stepColorMod) {
                    this.$nextText.text(this.nextText);
                } else {
                    this.$nextText.text(this.skipText);
                }
            } else {
                this.$nav.find('.step-prev span').text(this.$items.eq(this.activeItem).attr('data-label-back'));
                this.$nav.removeClass(this.startClass);
            }

            if (this.activeItem === 1) {
                if (this.$stepMotorMod) {
                    this.$nextText.text(this.nextText);
                } else {
                    this.$nextText.text(this.skipText);
                }
            }

            // Add class if at second last step
            if (this.activeItem === 2) {
                this.$nav.addClass(this.finishClass);

                if(this.$stepOptionsMod) {
                    this.$nextText.text(this.nextText);
                } else {
                    this.$nextText.text(this.skipText);
                }
            } else {
                this.$nav.removeClass(this.finishClass);
            }

            // Add class if at last step
            if (this.activeItem === 3) {
                this.$nav.addClass(this.endClass);
            } else {
                this.$nav.removeClass(this.endClass);
            }
        },
        activateItem: function (i) {
            this.$items.eq(i).addClass(this.activeClass);
            this.$steps.eq(i).addClass(this.activeClass);

            if (this.activeItem === 2) {
                if ($(window).width() > 767) {
                    var settings = {
                        autoplay: false,
                        autoplaySpeed: 3000,
                        dots: true,
                        arrows: true,
                        draggable: false,
                        infinite: false,
                        speed: 1000,
                        pauseOnFocus: false,
                        pauseOnHover: true,
                        pauseOnArrowsHover: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        responsive: [
                            {
                                breakpoint: 1100,
                                settings: {
                                    slidesToShow: 2,
                                    slidesToScroll: 1,
                                },

                            },
                            {
                                breakpoint: 768,
                                settings: 'unslick'
                            }
                        ]
                    };

                    $('.option-slider')[1].slick.refresh(settings);
                }
            }
            if (this.activeItem === 3) {
                this.$buildABoat.addClass(this.endClass);
                this.updateForm();
            } else {
                this.$buildABoat.removeClass(this.endClass);
            }
        },
        deactivateItem: function (i) {
            this.$items.eq(i).removeClass(this.activeClass);
            this.$steps.eq(i).removeClass(this.activeClass);
        }
    };

    $.e11.fn.pluginGenerator(BuildABoat);

})
(jQuery, window, document);
