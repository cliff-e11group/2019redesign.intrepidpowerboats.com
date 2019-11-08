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

        init: function() {

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

        },
        updateNav: function() {
            if(this.activeItem === 0) {
                this.$nav.addClass(this.startClass);
            } else {
                this.$nav('.step-prev').text(this.$items.eq(this.activeItem).attr('data-label-back'));
                this.$nav.removeClass(this.startClass);
            }

            if(this.activeItem === (this.$steps.length - 1)) {
                this.$nav.addClass(this.endClass);
            } else {

                this.$nav.removeClass(this.endClass);
            }
        },
        activateItem: function(i) {
            this.$items.eq(i).addClass(this.activeClass);
            this.$steps.eq(i).addClass(this.activeClass);
        },
        deactivateItem: function(i) {
            this.$items.eq(i).removeClass(this.activeClass);
            this.$steps.eq(i).removeClass(this.activeClass);
        }
    };

    $.e11.fn.pluginGenerator(BuildABoat);

})
(jQuery, window, document);
