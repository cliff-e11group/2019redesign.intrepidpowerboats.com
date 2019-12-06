$(function () {

    var $landingHero = $('.landing-hero');

    if ($landingHero.length > 0) {
        var $landingHero__item = $landingHero.find('.landing-hero__item'),
            activeAboutClass = 'landing-hero__item--active';

        $landingHero__item.each(function () {
            var $this = $(this),
                $landingHero__content = $this.find('.landing-hero__content'),
                $siblings = $this.siblings();

            $landingHero__content.on('mouseover', function () {
                $siblings.removeClass(activeAboutClass);
                $this.addClass(activeAboutClass);
            });
        });
    }

});
