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

    var $cat_filters = $('[data-filter-category]');
    if($cat_filters.length > 0){
        $cat_filters.each(function(){
            var $this = $(this);

            $this.on('click', function(){
                var filterValue = $this.data('filter-category');
                $grid.isotope({filter: '.' + filterValue});
            });
        });
        $grid.imagesLoaded().progress(function () {
            $grid.isotope('layout');
        });
    }





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


    if ($(".compare-mode--active").length > 0) {
        $('.model-list__block').on('click', function () {
            var selected = $('body').find('.selected');
            var data = selected.find('img').data();
            var newHtml = "<div class=\"module-comparision__item\">" +
            "<div class=\"model-list__image\">" +
            "    <img src=\"" + data['imgSrc'] + "\" alt=\"" + data['alt'] + "\">" +
            "</div>" +
            "<div class=\"model-list__detail\">" +
            "    <div class=\"model-list__title\">" +
            "        <h3>" + data['title'] + "</h3>" +
            "        <span class=\"model-list__trigger\">" +
            "        </span>" +
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
            var select_length = selected.length;
            $(".module-comparision__list").append(newHtml);
            if (select_length > 1) {
                $('.module-btn-box').fadeIn("slow");
                $('.module-selection-count a').text("COMPARE THESE " + select_length + ' MODELS');
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
            });
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
                    },
                    {
                        breakpoint: 400,
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

    $(".mobile-nav__toggle").click(function(e) {

        $('.menu-item-has-children').each(function (index, value) {
            if ( $(this).children('a').hasClass( "menu-open" ) ) {
                $(this).children('.sub-menu').css({height:'auto'});
            }else{
                $(this).children('.sub-menu').css({"height": "0"});
            }
        });

    });

    if ($(".menu-item-has-children ").length > 0) {
        $('.primary-nav li.menu-item-has-children > a').append('<button class="nav__parent-arrow--mobile" data-class="mobile-nav-dropdown-toggle"><svg class="icon icon-arrow-up" aria-hidden="true" role="img"><use xlink:href="#icon-arrow-up" x="0" y="0"></use></svg></button>');
        $(".nav__parent-arrow--mobile").click(function(e) {
            e.preventDefault();
            if ( $(this).parent().hasClass( "menu-open" ) ) {
                $(this).parent().siblings(".sub-menu").animate({"left": "100vw", "height": "0"},350);
                $(this).parent().removeClass('menu-open');
                $(this).closest('.menu-item-has-children').removeClass('menu-open-parent');
                $(this).closest('.menu-item-has-children').siblings().show();
                $('.secondary-nav, .social-block').show();
            }else{
                $(this).parent().addClass('menu-open');
                $(this).closest('.menu-item-has-children').addClass('menu-open-parent');
                var heightfull=$(this).parent().siblings(".sub-menu").css({height:'auto'}).height();
                $(this).parent().siblings(".sub-menu").animate({"left": "0", "height": heightfull },350);
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
        activate: function(event) { // Callback function if tab is switched
            $('.option-slider')[0].slick.refresh();
            var $tab = $(this);
            $active_tab_text = $tab.text();
            //console.log($active_tab_text);
            if($active_tab_text != ' Virtual Tour ' && $active_tab_text != ' Gallery '){
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
        infinite: false,
        speed: 1000,
        pauseOnFocus: false,
        pauseOnHover: true,
        pauseOnArrowsHover: true,
        slidesToShow: 3,
        slidesToScroll:1,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll:1,
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
        slidesToScroll:1,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll:1,
                }

            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll:1,
                }

            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll:1,
                }

            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll:1,
                }

            }
        ]
    });

    $('.toggle-list__item').on('click', function () {
        $(".toggle-nav__title").hide();
        $(".contact-form__title").removeClass('contact-form__title--hide');
        $(".contact-form__title:first-child").addClass('contact-form__title--hide');
        $(".toggle-list__item, .toggle-content__item").siblings().removeClass('active');
        var index = $( ".toggle-list__item" ).index( this );
        $(this).addClass('active');
        $(".toggle-content__item").eq( index ).addClass('active');
        $active_text = $(this).text();
        $('.fake-select').text($active_text);
        $(this).parent().removeClass('active');
        $(this).parent().prev().addClass('active');
    });

    $('.fake-select').on('click', function () {
        $(this).next().toggleClass('active');
    });

    $('.service-form__trigger').on('click', function () {
        $(this).toggleClass('active');
        $(this).closest(".service-form").children(".service-form__content").slideToggle();
    });

    $('.custom-tab__nav-item:first-child a').addClass('active');
    $('.custom-tab__content-item:first-child').addClass('active');
    $('.custom-tab__nav-item a').click(function(e){
        e.preventDefault();
        $('.custom-tab__nav-item a').removeClass('active');
        $(this).addClass('active');
        var tagid = $(this).attr('href');
        $('.custom-tab__content-item').removeClass('active').addClass('hide');
        $(tagid).addClass('active').removeClass('hide');
    });

    $('.custom-tab-slider').slick({
        dots: false,
        arrows: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    centerMode: true,
                    slidesToShow: 3,
                    slidesToScroll:1,
                }

            }
        ]
    });

    $('.custom-tab-slider').on('click', '.slick-slide', function (e) {
        e.stopPropagation();
        var index = $(this).data("slick-index");
        if ($('.custom-tab-slider').slick('slickCurrentSlide') !== index) {
            $('.custom-tab-slider').slick('slickGoTo', index);
        }
    });

});



