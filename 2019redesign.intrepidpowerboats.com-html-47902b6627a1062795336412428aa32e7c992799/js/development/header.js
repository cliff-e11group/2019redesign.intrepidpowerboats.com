$(function () {

    $('.header').e11_MobileNav();

});

(function ($, window, document, undefined) {

    var name = 'MobileNav';

    function MobileNav(element, index, options) {
        this.$el = $(element);
        this.options = $.extend({}, $.e11.fn[name].defaults, options);
        this.init();
    }

    MobileNav.prototype = {

        name: name,

        init: function () {

            var self = this;

            this.$toggle = this.$el.find('[data-class="nav__toggle"]');

            this.activeClass = 'nav__visible';

            this.$toggle.on('click', function (e) {
                e.preventDefault();

                $('body').toggleClass(self.activeClass);
                $(this).children('.mobile-nav__header').text($(this).children('.mobile-nav__header').text() == 'close' ? 'menu' : 'close');
            });
        }
    };

    $.e11.fn.pluginGenerator(MobileNav);

})
(jQuery, window, document);
