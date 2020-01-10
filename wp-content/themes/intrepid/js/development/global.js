jQuery(document).ready(function ($) {

    $(window).scroll(function () {
        doAnimateCss();
    });

    doAnimateCss();

    function doAnimateCss() {
        $('[data-animate-css]').each(function () {
            if ($(this).is(':in-viewport')) {
                animateCss($(this));
            }
        })
    }

    function animateCss(elements) {
        elements.each(function () {
            $(this).css('animation-delay', $(this).attr('data-animate-css-delay'));
            $(this).addClass('animated ' + $(this).attr('data-animate-css'));
            $(this).css('visibility', 'visible');
        })
    }

    // init Isotope
    // var $grid = $('.model-list__grid').isotope({
    //     itemSelector: '.model-list__block',
    //     layoutMode: 'fitRows',
    //     isFitWidth: true,
    // });
    var $grid = $('.model-list__grid').isotope({
        itemSelector: '.model-list__block',
        percentPosition: true,
        masonry: {
            columnWidth: '.grid-sizer',
            gutter: '.gutter-sizer'
        }
    });

    // filter functions
    var filterFns = {
        // show if number is greater than 50
        length: function () {
            var number = $(this).find('.length .detail').text();
            return parseInt(number, 10) == 40;
        },
        // show if name ends with -ium
        ium: function () {
            var name = $(this).find('.length .detail').text();
            return name.match(/40$/);
        },
        // flatten object by concatting values
        concatValues: function (obj) {
            var value = '';
            for (var prop in obj) {
                value += obj[prop];
            }
            return value;
        }
    };

    // bind filter on select change
    var selected_length_filter;
    $('.filters-select').on('change', function () {
        // get filter value from option value
        var filterValue = this.value;
        selected_length_filter = filterValue;

        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue;
        var filters = [filterValue, selected_cat_filter];

        if (selected_cat_filter) {
            var finalFilterValue = filterFns.concatValues(filters);
        } else {
            var finalFilterValue = filterValue;
        }

        $grid.isotope({filter: finalFilterValue});

    });
    $grid.imagesLoaded().progress(function () {
        $grid.isotope('layout');
    });

    var $cat_filters = $('[data-filter-category]');
    if ($cat_filters.length > 0) {

        var selected_cat_filter;

        $cat_filters.each(function () {
            var $this = $(this);

            $this.on('click', function () {
                var filterValue = $this.data('filter-category'),
                    $container = $(this).closest('li'),
                    $siblings = $container.siblings('.filter-type__container');

                selected_cat_filter = filterValue;

                $siblings.removeClass('filter-type--active');
                $container.addClass('filter-type--active');

                var filters = [filterValue, selected_length_filter];

                if (selected_length_filter) {
                    var finalFilterValue = filterFns.concatValues(filters);
                } else {
                    var finalFilterValue = filterValue;
                }
                $grid.isotope({filter: finalFilterValue});

            });
        });
        $grid.imagesLoaded().progress(function () {
            $grid.isotope('layout');
        });
    }


    $('.filters-select').select2();

    var $modelList__block = $('.model-list__block');

    if ($modelList__block.length > 0) {
        $modelList__block.each(function () {
            var $this = $(this),
                $modelList__trigger = $this.find('.model-list__trigger-container'),
                $sliblings = $this.siblings('.model-list__block');

            $modelList__trigger.on('click', function () {
                $sliblings.removeClass('active');
                $this.toggleClass('active');
            });
        });
    }

    $('.motor-list__trigger-container').on('click', function () {
        $(this)
            .closest(".motor-list__content").toggleClass('active')
            .closest(".motor-list__item").toggleClass('active');
        $(this).closest(".motor-list__content").children(".motor-list__description").slideToggle(200);
    });

    $('.column-model__trigger').on('click', function () {
        $(this).closest(".column-model__item").toggleClass('active');
        $(this).closest(".column-model__item").children(".column-model__content").slideToggle();
    });

    $('.compare-mode--active .model-list__image').on('click', function () {
        $(this).parent().toggleClass('selected');
    });

    $('.newsletter-block__title, .language-switcher__title').on('click', function () {
        $(this).parent().siblings().removeClass('active');
        $(this).parent().toggleClass('active');
    });

    if ($(window).width() > 1100) {
        $(".mega-menu li:not(:last) a").on({
            "mouseover": function () {
                image_url = $(this).data('src');
                $(".menu-content").addClass('active');
                $(".menu-content").children().hide();
                $(".menu-content").css({'background': 'url(' + image_url + ') no-repeat center center / cover'});
            },
            "mouseout": function () {
                $(".menu-content").children().show();
                $(".menu-content").css({'background': 'none'});
                $(".menu-content").removeClass('active');
            }
        });
    }

    $('.filter-list__toggle, .category-block .widget-title').on('click', function () {
        $(this).toggleClass('active');
        $(this).next().toggleClass('active')
    });

    var $compareMode = $('[data-class="compare-mode"]'),
        $modelList__grid = $('.model-list__grid');

    if ($compareMode.length > 0 && $modelList__grid.length > 0) {
        var compareModeActiveClass = 'compare-mode--active';

        $compareMode.on('click', function (e) {
            e.preventDefault();
            $modelList__grid.toggleClass(compareModeActiveClass);
        });

        $('.model-list__compare').on('click', function () {
            var $this = $(this),
                $container = $this.closest('.model-list__block'),
                data = $container.find('img').data();

            var newHtml = "<div class=\"module-comparision__item\">" +
                "<div class=\"model-list__image\">" +
                "    <img src=\"" + data['imgSrc'] + "\" alt=\"" + data['alt'] + "\">" +
                "</div>" +
                "<div class=\"model-list__detail\">" +
                "    <div class=\"model-list__title\">" +
                "        <h3>" + data['title'] + "</h3>" +
                "        <button class=\"model-list__trigger-container\"><span class=\"model-list__trigger\"></span></button>" +
                "    </div>" +
                "    <div class=\"model-list-hidden__content\">" +
                "        <div class=\"model-list-stat__container\">" +
                "            <h4>" + data['secondaryTitle'] + "</h4>" +
                "            <ul>" +
                "                <li>" +
                "                    <div class=\"title\">" + data['liTitle_1'] + "</div>" +
                "                    <div class=\"detail\">" + data['liDesc_1'] + "</div>" +
                "                </li>" +
                "                <li>" +
                "                    <div class=\"title\">" + data['liTitle_2'] + "</div>" +
                "                    <div class=\"detail\">" + data['liDesc_1'] + "</div>" +
                "                </li>" +
                "                <li>" +
                "                    <div class=\"title\">" + data['liTitle_3'] + "</div>" +
                "                    <div class=\"detail\">" + data['liDesc_1'] + "</div>" +
                "                </li>" +
                "                <li>" +
                "                    <div class=\"title\">" + data['liTitle_4'] + "</div>" +
                "                    <div class=\"detail\">" + data['liDesc_1'] + "</div>" +
                "                </li>" +
                "            </ul>" +
                "        </div>" +
                "        <div class=\"model-list-cta__container\">" +
                "            <a href=\"#\" class=\"btn btn--outline\">" + data['btn_txt'] + "</a>" +
                "        </div>" +
                "    </div>" +
                "</div>" +
                "</div>";
            // var select_length = selected.length;
            // $(".module-comparision__list").append(newHtml);
            // if (select_length > 1) {
            //     $('.module-btn-box').fadeIn("slow");
            //     $('.module-selection-count a').text("COMPARE THESE " + select_length + ' MODELS');
            // } else {
            //     $('.module-btn-box').fadeOut("slow");
            // }
        });
    }


    // $('.compare-btn').on('click', function () {
    //     var length = $('body').find('.selected').length;
    //     var modalContainer = $('.module-comparision__block.module-item-box');
    //     modalContainer.css('opacity', 0);
    //     $('.module-comparision__list').on('init', function (event, slick) {
    //         $('.module-item-box').hide(function () {
    //             modalContainer.css('opacity', 1);
    //             $('.module-item-box').slideDown("slow");
    //         });
    //     });
    //     $('.module-item-box').slideDown("slow", function () {
    //         $('.module-comparision__list').slick({
    //             infinite: false,
    //             slidesToShow: 4,
    //             slidesToScroll: 1,
    //             responsive: [
    //                 {
    //                     breakpoint: 800,
    //                     settings: {
    //                         slidesToShow: 3,
    //                         slidesToScroll: 3,
    //                     }
    //                 },
    //                 {
    //                     breakpoint: 600,
    //                     settings: {
    //                         slidesToShow: 1,
    //                         slidesToScroll: 1
    //                     }
    //                 },
    //                 {
    //                     breakpoint: 400,
    //                     settings: {
    //                         slidesToShow: 1,
    //                         slidesToScroll: 1
    //                     }
    //                 }
    //             ]
    //         });
    //     });
    // });
    // $('.module-comparision__block.module-item-box .close').on('click', function () {
    //     $('.module-item-box').slideUp("slow");
    //     $('.module-comparision__list').slick('destroy');
    // });
    // $('.module-comparision__block.module-btn-box .close').on('click', function () {
    //     $('.model-list__block').removeClass('selected');
    //     $('.module-comparision__block').fadeOut("slow");
    //     $('.module-comparision__list').slick('destroy');
    // });

    $(".mobile-nav__toggle").click(function (e) {

        $('.menu-item-has-children').each(function (index, value) {
            if ($(this).children('a').hasClass("menu-open")) {
                $(this).children('.sub-menu').css({height: 'auto'});
            } else {
                $(this).children('.sub-menu').css({"height": "0"});
            }
        });

    });

    if ($(".menu-item-has-children ").length > 0) {
        $('.primary-nav li.menu-item-has-children > a')
            .prepend('<svg class="icon icon-arrow-up" aria-hidden="true" role="img"><use xlink:href="#icon-arrow-up" x="0" y="0"></use></svg>')
            .append('<button class="nav__parent-arrow--mobile" data-class="mobile-nav-dropdown-toggle"></button>');
        $(".nav__parent-arrow--mobile").click(function (e) {
            e.preventDefault();
            if ($(this).parent().hasClass("menu-open")) {
                $(this).parent().siblings(".sub-menu").animate({"left": "100vw", "height": "0"}, 350);
                $(this).parent().removeClass('menu-open');
                $(this).closest('.menu-item-has-children').removeClass('menu-open-parent');
                $(this).closest('.menu-item-has-children').siblings().show();
                $('.secondary-nav, .social-block').show();
            } else {
                $(this).parent().addClass('menu-open');
                $(this).closest('.menu-item-has-children').addClass('menu-open-parent');
                var heightfull = $(this).parent().siblings(".sub-menu").css({height: 'auto'}).height();
                $(this).parent().siblings(".sub-menu").animate({"left": "0", "height": heightfull}, 350);
                $(this).closest('.menu-item-has-children').siblings().hide();
                $('.secondary-nav, .social-block').hide();
            }

        });
    }

    $('.form-toggle').on('click', function (e) {
        e.preventDefault();
        $(this).parent().toggleClass('active');
    });

    $('#parentTab').easyResponsiveTabs({
        type: 'default', //Types: default, vertical, accordion
        width: 'auto', //auto or any width like 600px
        fit: true, // 100% fit in a container
        tabidentify: 'hor_1', // The tab groups identifier
        activate: function (event) { // Callback function if tab is switched
            $('.option-slider')[0].slick.refresh();
            var $tab = $(this);
            $active_tab_text = $tab.text();
            //console.log($active_tab_text);
            if ($active_tab_text != ' Virtual Tour ' && $active_tab_text != ' Gallery ') {
                $('.nav-block__toggle, .nav-block__inner').toggleClass('active');
                $(".nav-block__active-tab").text($active_tab_text);
            }

        }
    });

    // Child Tab
    $('#childTab').easyResponsiveTabs({
        type: 'default',
        width: 'auto',
        fit: true,
        tabidentify: 'hor_child_1', // The tab groups identifier
    });

    $active_text = $(".model-nav__item.resp-tab-active").text();
    $(".nav-block__active-tab").text($active_text);

    var $modelNav__item = $('.model-nav__item'),
        $overviewNav__item = $('.overview-nav__item a');

    if ($overviewNav__item.length > 0 && $modelNav__item.length > 0) {
        $overviewNav__item.on('click', function (e) {
            e.preventDefault();
            var $target = $(this).data('target');

            if ($target !== undefined) {
                $('[data-class="' + $target + '"]').trigger('click');
                var $subtarget = $(this).data('subtarget');
                if ($subtarget !== undefined) {
                    $('[data-class="' + $subtarget + '"]').trigger('click');
                }
            }
        });
    }

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
    var slickClients = $('.option-slider').slick(settings);
    $(window).on('resize', function () {
        if ($(window).width() > 768 && !slickClients.hasClass('slick-initialized')) {
            $('.option-slider').slick(settings);
        }
    });


    $('.motor-thumbnail .icon-close').on('click', function () {
        $(this).toggleClass('active');
        $(this).closest(".motor-option__inner").children('.motor-option__description').slideToggle();
    });

    $('.nav-block__toggle').on('click', function () {
        $(this).toggleClass('active');
        $(this).next('.nav-block__inner').toggleClass('active');
    });

    $('.scroll-to-top').on('click', function (e) {
        e.preventDefault();
        window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    });

    $('.image-slider').slick({
        autoplay: false,
        autoplaySpeed: 1000,
        dots: false,
        arrows: true,
        draggable: false,
        fade: false,
        speed: 500,
    });

    $('.feed-carousel').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        dots: false,
        arrows: true,
        draggable: false,
        speed: 1000,
        pauseOnFocus: false,
        pauseOnHover: true,
        pauseOnArrowsHover: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }

            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }

            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }

            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }

            }
        ]
    });

    var $toggleList__item = $('.toggle-list__item');

    if ($toggleList__item.length > 0) {
        var activeToggle = 0,
            $contactForm__title = $('.contact-form__title'),
            $fakeSelect = $('.fake-select'),
            $toggleList = $('.toggle-list'),
            activeToggleClass = 'active',
            activeToggleTitleClass = 'contact-form__title--active';

        $toggleList__item.each(function () {
            var $this = $(this),
                toggleIndex = $this.index(),
                $toggleItems = $this.siblings(),
                $toggleContent__item = $('.toggle-content__item').eq(toggleIndex),
                $fakeSelectText = $fakeSelect.text();

            $this.on('click', function () {
                if ($this.hasClass(activeToggleClass)) {
                    $this.removeClass(activeToggleClass);
                    $toggleContent__item.removeClass(activeToggleClass);
                    $('.toggle-content__item').eq(0).addClass(activeToggleClass);

                    if ($contactForm__title.length > 0) {
                        $contactForm__title.removeClass(activeToggleTitleClass);
                    }
                    $fakeSelect.text($fakeSelectText);

                } else {
                    $toggleItems.removeClass(activeToggleClass);
                    $('.toggle-content__item').eq(0).removeClass(activeToggleClass);
                    $('.toggle-content__item').eq(activeToggle).removeClass(activeToggleClass);

                    if ($contactForm__title.length > 0) {
                        $contactForm__title.addClass(activeToggleTitleClass);
                    }
                    $this.addClass(activeToggleClass);
                    $toggleContent__item.addClass(activeToggleClass);
                    $fakeSelect.text($this.text());
                }

                $toggleList.removeClass(activeToggleClass);

                activeToggle = toggleIndex;
            })
        });

        if ($fakeSelect.length > 0) {
            $fakeSelect.on('click', function () {
                $toggleList.toggleClass(activeToggleClass);
            });
        }
    }

    // $('.toggle-list__item').on('click', function () {
    //     $(".toggle-nav__title").hide();
    //     $(".contact-form__title").removeClass('contact-form__title--hide');
    //     $(".contact-form__title:first-child").addClass('contact-form__title--hide');
    //     $(".toggle-list__item, .toggle-content__item").siblings().removeClass('active');
    //     var index = $(".toggle-list__item").index(this);
    //     $(this).addClass('active');
    //     $(".toggle-content__item").eq(index).addClass('active');
    //     $active_text = $(this).text();
    //     $('.fake-select').text($active_text);
    //     $(this).parent().removeClass('active');
    //     $(this).parent().prev().addClass('active');
    // });

    $('.service-form__trigger').on('click', function () {
        $(this).toggleClass('active');
        $(this).closest(".service-form").children(".service-form__content").slideToggle();
    });

    $('.custom-tab__bg.tab-0').addClass('active');
    $('.custom-tab__nav-item:first-child a').addClass('active');
    $('.custom-tab__content-item:first-child').addClass('active');
    $('.custom-tab__nav-item a').click(function (e) {
        e.preventDefault();
        $('.custom-tab__nav-item a').removeClass('active');
        $(this).addClass('active');
        var tagid = $(this).attr('href');
        $('.custom-tab__content-item').removeClass('active').addClass('hide');
        $('.custom-tab__bg').removeClass('active').addClass('hide');
        $('.' + tagid).addClass('active').removeClass('hide');

    });

    $('.custom-tab-slider').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 768,
                settings: 'unslick'
            }
        ]
    });

    $('.model-option .form-wrap .option-list__item').on('click', function () {
        $(this).siblings().removeClass('selected');
    });

    $('.custom-tab-slider').on('click', '.slick-slide', function (e) {
        e.stopPropagation();
        var index = $(this).data("slick-index");
        if ($('.custom-tab-slider').slick('slickCurrentSlide') !== index) {
            $('.custom-tab-slider').slick('slickGoTo', index);
        }
    });

    var $deckPoint__container = $('.deck-point__container');

    if ($deckPoint__container.length > 0) {
        var activeDeckPoint = undefined,
            activeDeckContainer = undefined;
        $deckPoint__container.each(function () {
            var $this = $(this),
                $deckPointInfo = $this.find('.deck-block__info'),
                $deckPointClose = $this.find('.close'),
                $deckPoint = $this.find('.deck-point'),
                $siblings = $this.siblings('.deck-point__container'),
                activeClass = 'deck-point--active';

            $deckPoint.on('click', function () {
                if (activeDeckPoint !== undefined && activeDeckContainer !== undefined) {
                    activeDeckContainer.removeClass(activeClass);
                    activeDeckPoint.removeClass(activeClass);
                    activeDeckPoint.appendTo(activeDeckContainer);
                }

                if ($this.hasClass(activeClass)) {
                    $this.removeClass(activeClass);
                    $deckPointInfo.removeClass(activeClass);
                    $deckPointInfo.appendTo($this);

                } else {
                    $siblings.removeClass(activeClass);
                    $this.addClass(activeClass);
                    $deckPointInfo.appendTo('body');
                    $deckPointInfo.addClass(activeClass);
                }
                activeDeckContainer = $this;
                activeDeckPoint = $deckPointInfo;
            });

            $deckPointClose.on('click', function () {
                $this.removeClass(activeClass);
                $deckPointInfo.removeClass(activeClass);
                $deckPointInfo.appendTo($this);
            });
        });
    }

    $(".nav-block").stick_in_parent({
        offset_top: $('.header').outerHeight()
    });
});



