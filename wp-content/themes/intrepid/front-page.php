<?php
get_header();
the_post();
?>
<?php get_header(); ?>

<main class="main">
    <section class="hero" style="background-image:url(<?php echo STYLEDIR; ?>/uploads/Intrepid_Boat.jpg);">
        <div class="container">
            <div class="hero__content">
                <h1 class="hero__title"><strong>The Intrepid</strong> Difference</h1>
                <a data-fancybox href="https://vimeo.com/160120764" class="play-btn">Play Video</a>
            </div>
        </div>
    </section>
    <section class="intro-block">
        <div class="container">
            <h2 class="intro-block__title">Custom craftsmanship and design that follow an uncompromising set of specifications. <strong>Yours.</strong></h2>
            <a class="icon-link" href="<?php echo site_url('boats'); ?>">
                View all models
            </a>
        </div>
    </section>
    <section class="grid-block">
        <div class="container">
            <div class="grid-block__item grid-block__item--1" style="background-image: url('<?php echo STYLEDIR; ?>/uploads/grid-image1.jpg');">
                <div class="grid-block__content">
                    <h2 class="grid-block__title">One of a kind</h2>
                    <p>We don’t make boats the way they could be made, we make them the way they should be made.</p>
                    <a class="btn" href="">Custom made</a>
                </div>
            </div>
            <div class="grid-block__item grid-block__item--2" style="background-image: url('<?php echo STYLEDIR; ?>/uploads/grid-image2.jpg');">
                <div class="grid-block__content">
                    <h2 class="grid-block__title">One of a kind</h2>
                    <p>No two Intrepids are alike. We constantly chase innovation and champion new technologies to consistently lead the industry in performance, comfort, safety and style.</p>
                    <a class="btn" href="">Our craftmanship</a>
                </div>
            </div>
            <div class="grid-block__item grid-block__item--3" style="background-image: url('<?php echo STYLEDIR; ?>/uploads/grid-image3.jpg');">
                <div class="grid-block__content">
                    <h2 class="grid-block__title">World class service</h2>
                    <p>Description of the service department here.</p>
                    <a class="btn" href="">Our service</a>
                </div>
            </div>
            <div class="grid-block__item grid-block__item--4" style="background-image: url('<?php echo STYLEDIR; ?>/uploads/grid-image4.jpg');">
                <div class="grid-block__content">
                    <h2 class="grid-block__title">Full line brochure</h2>
                    <p>A full PDF view of our entire custom made fleet.</p>
                    <a class="btn" href="">Download PDF</a>
                </div>
            </div>
            <div class="grid-block__item grid-block__item--5" style="background-image: url('<?php echo STYLEDIR; ?>/uploads/grid-image5.jpg');">
                <div class="grid-block__content">
                    <h2 class="grid-block__title">Intrepid gear</h2>
                    <p>Get the latest gear and accessories from Intrepid.</p>
                    <a class="btn" href="">See the gear</a>
                </div>
            </div>
        </div>
    </section>
    <div class="newsletter-block">
        <h3 class="newsletter-block__title">
            Newsletter Signup <svg class="icon icon-arrow-up" aria-hidden="true" role="img">
            <use xlink:href="#icon-arrow-up" x="0" y="0"></use>
        </svg>
        </h3>
        <div class="newsletter-block__content">
            <div class="newsletter-block__description">
                <p>Stay up to date with all the latest Intrepid information! In our newsletter you'll hear from the President of Intrepid, Ken Clinton, as well as other team members.</p>
                <span class="newsletter-block__info">Enter Information Below:</span>
            </div>
            <div class="gf_browser_chrome gform_wrapper">
                <a id="gf_3" class="gform_anchor"></a>
                <form method="post" enctype="multipart/form-data" target="gform_ajax_frame_3" id="gform_3" action="#">
                    <div class="gform_body">
                        <ul class="gform_fields top_label form_sublabel_below description_below">
                            <li class="gfield field__firstname field_sublabel_below field_description_below gfield_visibility_visible">
                                <label class="gfield_label" for="input_3_8">First Name</label>
                                <div class="ginput_container ginput_container_text">
                                    <input name="input_8" id="input_3_8" type="text" value="" class="medium" tabindex="5" placeholder="First Name" aria-invalid="false">
                                </div>
                            </li>
                            <li class="gfield field__lastname field_sublabel_below field_description_below gfield_visibility_visible">
                                <label class="gfield_label" for="input_3_9">Last Name</label>
                                <div class="ginput_container ginput_container_text">
                                    <input name="input_9" id="input_3_9" type="text" value="" class="medium" tabindex="6" placeholder="Last Name" aria-invalid="false">
                                </div>
                            </li>
                            <li class="gfield field__email gfield_contains_required field_sublabel_below field_description_below gfield_visibility_visible">
                                <label class="gfield_label" for="input_3_5">Work Email<span class="gfield_required">*</span></label>
                                <div class="ginput_container ginput_container_email">
                                    <input name="input_5" id="input_3_5" type="email" value="" class="medium" tabindex="9" placeholder="Work Email" aria-required="true" aria-invalid="false">
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="gform_footer top_label">
                        <input type="submit" class="gform_button button" value="Submit" tabindex="11">
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="language-switcher">
        <h3 class="language-switcher__title">
            Select Language <svg class="icon icon-arrow-up" aria-hidden="true" role="img">
            <use xlink:href="#icon-arrow-up" x="0" y="0"></use>
        </svg>
        </h3>
        <ul class="language-switcher__list">
            <li class="language-switcher__list-item"><a href="#">English</a></li>
            <li class="language-switcher__list-item"><a href="#">French</a></li>
            <li class="language-switcher__list-item"><a href="#">Germany</a></li>
            <li class="language-switcher__list-item"><a href="#">English</a></li>
        </ul>
    </div>
</main>

<?php get_footer(); ?>
