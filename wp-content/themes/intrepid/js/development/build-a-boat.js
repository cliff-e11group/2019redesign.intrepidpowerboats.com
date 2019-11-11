$(function () {

    $('.page__single--boat').e11_BuildABoat();

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
            this.activeBABClass = 'build-a-boat--active';

            this.$toggle.on('click', function (e) {
                e.preventDefault();

                $('body').toggleClass(self.activeBABClass);
            });

            //Navigate through BAB steps
            this.$items = this.$el.find('.form-step .step__item');
            this.$nav = this.$el.find('.step-nagivation');
            this.$steps = $('[data-class="step"]');
            this.$prev = this.$el.find('[data-class="prev"]');
            this.$next = this.$el.find('[data-class="next"]');
            this.$prevText = this.$nav.find('.step-prev').find('span');
            this.$nextText = this.$nav.find('.step-next').find('span');
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
            this.$colorPicker = this.$el.find('#color-picker');
            this.$colorItems = this.$el.find('.area-list__item');
            this.$colorPalette = this.$el.find('.color-palette');
            this.$recentColors = this.$el.find('#recent-colors');
            this.colorItemActiveClass = 'active';
            this.$activeColorItem = this.$colorItems.eq(0);
            this.boatLayer = this.$activeColorItem.attr('data-boat-layer');
            this.$boatLayer = $("#" + self.boatLayer).find('path');

            // Toggle between active color item
            this.$colorItems.on('click', function () {
                var $this = $(this),
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

            // Activate color picker
            this.$colorPicker
                .wheelColorPicker({
                    'format': 'css',
                    'layout': 'block',
                    'sliders': 'w',
                    'autoresize': false
                })
                .on('colorchange', function (e) {
                    var $this = $(this),
                        color = $this.wheelColorPicker('value'),
                        alpha = $this.wheelColorPicker('color').a;

                    // Update active color item with chosen color
                    self.$activeColorItem.find('.area-list__color-box').css('background', color);
                    self.updateBoatLayerColor(self.$boatLayer, color);
                });

            // Listen for click of recent colors
            $(document).on('click', '.color-list__item', function () {
                var recentlyUsedColor = $(this).css('background-color');

                // Update active color item with chosen color
                self.$activeColorItem.find('.area-list__color-box').css('background', recentlyUsedColor);
                self.$colorPicker.wheelColorPicker('setValue', recentlyUsedColor);

                self.updateBoatLayerColor(self.$boatLayer, recentlyUsedColor);
            });

            //
            // MOTORS
            //
            this.$motorItems = this.$el.find('.motor-option__list-item');
            this.motorItemActiveClass = 'active';
            this.$activeMotorItem = this.$motorItems.eq(0);

            this.$motorColors = this.$el.find('.motor-color__item');
            this.motorColorActiveClass = 'active';
            this.$activeMotorColor = this.$motorColors.eq(0);

            this.boatMotorLayer = this.$activeMotorItem.attr('data-boat-layer');
            this.boatMotorColorLayer = this.$activeMotorColor.attr('data-boat-layer');

            // Hide all boats except active boat motor
            this.$motorItems.each(function () {
                var $this = $(this),
                    motor = $this.attr('data-boat-layer');

                self.$motorColors.each(function () {
                    var color = $(this).attr('data-boat-layer');
                    // Hide motor
                    self.updateBoatLayerMotor(self.$el.find("#" + motor + "-" + color), '0');
                });
            });

            // Activate first motor
            this.$boatMotorLayer = this.$el.find("#" + self.boatMotorLayer + "-" + self.boatMotorColorLayer);
            self.updateBoatLayerMotor(this.$boatMotorLayer, '1');

            // Toggle between active motor item
            this.$motorItems.on('click', function () {
                var $this = $(this);

                // Activate the clicked motor item
                $this
                    .addClass(self.motorItemActiveClass)
                    .siblings().removeClass(self.motorItemActiveClass);

                // Hide old motor
                self.updateBoatLayerMotor(self.$boatMotorLayer, '0');

                // Update active layer
                self.$activeMotorItem = $this;
                self.boatMotorLayer = self.$activeMotorItem.attr('data-boat-layer');
                self.$boatMotorLayer = self.$el.find("#" + self.boatMotorLayer + "-" + self.boatMotorColorLayer);

                // Show new motor
                self.updateBoatLayerMotor(self.$boatMotorLayer, '1');
            });

            // Toggle between active motor item
            this.$motorColors.on('click', function () {
                var $this = $(this);

                // Activate the clicked motor item
                $this
                    .addClass(self.motorColorActiveClass)
                    .siblings().removeClass(self.motorColorActiveClass);

                // Hide old motor
                self.updateBoatLayerMotor(self.$boatMotorLayer, '0');

                // Update active layer
                self.$activeMotorColor = $this;
                self.boatMotorColorLayer = self.$activeMotorColor.attr('data-boat-layer');
                self.$boatMotorLayer = self.$el.find("#" + self.boatMotorLayer + "-" + self.boatMotorColorLayer);

                // Show new motor
                self.updateBoatLayerMotor(self.$boatMotorLayer, '1');
            });

        },
        updateBoatLayerColor: function (layer, color) {
            layer.css('fill', color);
        },
        updateBoatLayerMotor: function (layer, opacity) {
            layer.css('opacity', opacity);
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
            $('.option-slider')[1].slick.refresh();
            this.$items.eq(i).addClass(this.activeClass);
            this.$steps.eq(i).addClass(this.activeClass);
        },
        deactivateItem: function (i) {
            this.$items.eq(i).removeClass(this.activeClass);
            this.$steps.eq(i).removeClass(this.activeClass);
        }
    };

    $.e11.fn.pluginGenerator(BuildABoat);

})
(jQuery, window, document);
