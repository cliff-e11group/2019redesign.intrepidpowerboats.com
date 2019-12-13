<?php
get_header();
the_post();
$page = get_the_ID();
?>
<?php get_header(); ?>

<main class="main">

    <?php e11_hero_video(array(), true, 'get_field', $page, ''); ?>

    <?php e11_intro_block(array(), true, 'get_field', $page, ''); ?>

    <?php e11_grid_block(array(), true, 'get_field', $page, ''); ?>


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
