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
        }
    };
    // bind filter on select change
    $('.filters-select').on('change', function () {
        // get filter value from option value
        var filterValue = this.value;
        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue;
        $grid.isotope({filter: filterValue});
    });
    $grid.imagesLoaded().progress(function () {
        $grid.isotope('layout');
    });


    $('.filters-select').select2();

    $('.model-list__trigger').on('click', function () {
        $(this).closest(".model-list__block").toggleClass('active');
    });

    $('.motor-list__trigger').on('click', function () {
        $(this)
            .closest(".motor-list__content").toggleClass('active')
            .closest(".motor-list__item").toggleClass('active');
        $(this).closest(".motor-list__content").children(".motor-list__description").slideToggle(200);
    });

    $('.column-model__trigger').on('click', function () {
        $(this).closest(".column-model__item").toggleClass('active');
        $(this).closest(".column-model__item").children(".column-model__content").slideToggle();
    });

    $('.option-list__item').on('click', function () {
        $(this).toggleClass('selected');
    });

    $('.compare-mode--active .model-list__image').on('click', function () {
        $(this).parent().toggleClass('selected');
    });

    $('.newsletter-block__title, .language-switcher__title').on('click', function () {
        $(this).parent().siblings().removeClass('active');
        $(this).parent().toggleClass('active');
    });

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

    $('.filter-list__toggle').on('click', function () {
        $(this).toggleClass('active');
        $(this).next().toggleClass('active')
    });


    if ($(".compare-mode--active").length > 0) {
        $('.model-list__block').on('click', function () {
            var selected = $('body').find('.selected');
            var data = selected.find('img').data();
            //console.log(data);
            var newHtml = '<div class="module-comparision__item"> ' +
                '<div class="model-list__image"> ' +
                '<img src="' + data['imgSrc'] + '" alt="' + data['alt'] + '"> ' +
                '</div> ' +
                '<div class="model-list__detail"> ' +
                '<div class="model-list__title-wrap"> ' +
                '<h3 class="model-list__title">' + data['title'] + '</h3> ' +
                '<span class="model-list__trigger"> ' +
                '</span> ' +
                '</div> ' +
                '<div class="model-list-hidden__content"> ' +
                '<div class="model-list-stat__container"> ' +
                '<h4>' + data['secondaryTitle'] + '</h4> ' +
                '<ul> ' +
                '<li> ' +
                '<div class="title">' + data['liTitle_1'] + '</div> ' +
                '<div class="detail">' + data['liDesc_1'] + '</div> ' +
                '</li> ' +
                '<li> ' +
                '<div class="title">' + data['liTitle_2'] + '</div> ' +
                '<div class="detail">' + data['liDesc_1'] + '</div> ' +
                '</li> ' +
                '<li> ' +
                '<div class="title">' + data['liTitle_3'] + '</div> ' +
                '<div class="detail">' + data['liDesc_1'] + '</div> ' +
                '</li> ' +
                '<li> ' +
                '<div class="title">' + data['liTitle_4'] + '</div> ' +
                '<div class="detail">' + data['liDesc_1'] + '</div> ' +
                '</li> ' +
                '</ul> ' +
                '</div> ' +
                '<div class="model-list-cta__container"> ' +
                '<a href="#" class="btn btn--outline">' + data['btn_txt'] + '</a> ' +
                '</div> ' +
                '</div> ' +
                '</div> ' +
                '</div>';
            var select_length = selected.length;
            $(".module-comparision__list").append(newHtml);
            if (select_length > 1) {
                $('.module-btn-box').fadeIn("slow");
                $('.module-selection-count a').text('COMPARE THESE ' + select_length + ' MODELS');
            } else {
                $('.module-btn-box').fadeOut("slow");
            }
        });
    }


    $('.compare-btn').on('click', function () {
        var length = $('body').find('.selected').length;
        var modalContainer = $('.module-comparision__block.module-item-box');
        modalContainer.css('opacity', 0);
        $('.module-comparision__list').on('init', function (event, slick) {
            $('.module-item-box').hide(function () {
                modalContainer.css('opacity', 1);
                $('.module-item-box').slideDown("slow");
            })
        });
        $('.module-item-box').slideDown("slow", function () {
            $('.module-comparision__list').slick({
                infinite: false,
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 800,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        });
    });
    $('.module-comparision__block.module-item-box .close').on('click', function () {
        $('.module-item-box').slideUp("slow");
        $('.module-comparision__list').slick('destroy');
    });
    $('.module-comparision__block.module-btn-box .close').on('click', function () {
        $('.model-list__block').removeClass('selected');
        $('.module-comparision__block').fadeOut("slow");
        $('.module-comparision__list').slick('destroy');
    });

    if ($(".menu-item-has-children ").length > 0) {
        $('.primary-nav li.menu-item-has-children > a').append('<button class="nav__parent-arrow--mobile" data-class="mobile-nav-dropdown-toggle"><svg class="icon icon-arrow-up" aria-hidden="true" role="img"><use xlink:href="#icon-arrow-up" x="0" y="0"></use></svg></button>');
        $(".nav__parent-arrow--mobile").click(function (e) {
            e.preventDefault();
            $("li.menu-item-has-children .sub-menu")
                .not(this)
                .slideUp();
            $("li.menu-item-has-children .nav__parent-arrow--mobile").removeClass(
                "menu-open"
            );
            if (
                $(this).parent()
                    .siblings(".sub-menu")
                    .is(":visible")
            ) {
                $(this).parent()
                    .siblings(".sub-menu")
                    .slideUp();
                $(this).parent().removeClass("menu-open");
            } else {
                $(this).parent()
                    .siblings(".sub-menu")
                    .slideDown();
                $(this).parent().addClass("menu-open");
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

    var settings = {
        autoplay: false,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true,
        draggable: false,
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

});



