<?php
/**
* Template Name: Contact
*/
get_header();
the_post();
$page = get_the_ID();
?>
<?php get_header(); ?>
<main class="main">
    <?php e11_page_details(array(), true, 'get_field', $page, ''); ?>

    <section class="contact-form">
        <div class="container">
            <div class="contact-form__phone--mobile">
                <h2 class="toggle-content__title">Call Us Direct</h2>
                <ul class="phone-list">
                    <li class="phone-list__item">
                                    <span class="phone-list__label">
                                        Sales
                                    </span>
                        <a class="phone-list__number" href="tel:9543244196">954.324.4196</a>
                    </li>
                    <li class="phone-list__item">
                                    <span class="phone-list__label">
                                        Service
                                    </span>
                        <a class="phone-list__number" href="tel:9543244196">954.324.4196</a>
                    </li>
                    <li class="phone-list__item">
                                    <span class="phone-list__label">
                                        General Inquiry
                                    </span>
                        <a class="phone-list__number" href="tel:9543244196">954.324.4196</a>
                    </li>
                </ul>
            </div>
            <p class="contact-form__title">
                <span>Please select the type of inquiry.</span>
                <span>Fill the form out below for any type of inquiry and we will get back to you shortly.</span>
            </p>
            <div class="contact-form__inner">
                <div class="toggle-nav">
                    <h2 class="toggle-nav__title">Message us Directly</h2>
                    <span class="fake-select">Select a Department</span>
                    <ul class="toggle-list">
                        <li class="toggle-list__item active">Message us Directly</li>
                        <li class="toggle-list__item">Sales Department</li>
                        <li class="toggle-list__item">Service Department</li>
                        <li class="toggle-list__item">General Inquiry</li>
                        <li class="toggle-list__item">Careers Department</li>
                    </ul>
                </div>
                <ul class="toggle-content">
                    <li class="toggle-content__item active">
                        <span class="toggle-content__title">Call Us Direct</span>
                        <ul class="phone-list">
                            <li class="phone-list__item">
                                    <span class="phone-list__label">
                                        Sales
                                    </span>
                                <a class="phone-list__number" href="tel:9543244196">954.324.4196</a>
                            </li>
                            <li class="phone-list__item">
                                    <span class="phone-list__label">
                                        Service
                                    </span>
                                <a class="phone-list__number" href="tel:9543244196">954.324.4196</a>
                            </li>
                            <li class="phone-list__item">
                                    <span class="phone-list__label">
                                        General Inquiry
                                    </span>
                                <a class="phone-list__number" href="tel:9543244196">954.324.4196</a>
                            </li>
                        </ul>
                    </li>
                    <li class="toggle-content__item">
                        <form class="form" action="#" method="post">
                            <h3 class="form__title">Your information</h3>
                            <?php echo do_shortcode('[gravityform id="2" title="false" description="false" ajax="true"]'); ?>
                        </form>
                        <p class="department-phone">By Phone - <a href="tel:9543244196">954.324.4196</a></p>
                    </li>
                    <li class="toggle-content__item">
                        <form class="form" action="#" method="post">
                            <h3 class="form__title">Your information</h3>
                            <ul class="form-fields">
                                <li class="form__field">
                                    <input type="text" name="txt_name" value="William Rossiter">
                                </li>
                                <li class="form__field">
                                    <input type="email" name="email_add" value="william@slicecreates.com">
                                </li>
                                <li class="form__field">
                                    <input type="text" name="phone_no" value="HULL ID #FL-5401239124">
                                </li>
                                <li class="form__field">
                                    <input type="text" name="phone_no" placeholder="Phone(XXX-XXX-XXXX)">
                                </li>
                                <li class="form__field">
                                    <textarea placeholder="Questions or Comments?">I want to schedule an appointment to talk about more customization of my boat.</textarea>
                                </li>
                                <li class="form__field form__field--captcha">
                                    <span class="required-symbol">* Required Fields</span>
                                    <img src="<?php echo STYLEDIR; ?>/uploads/newCaptcha.png" alt="captcha" />
                                </li>
                                <li class="form__field form__field--submit">
                                    <input class="button button--small" type="submit" value="Send Message">
                                </li>
                            </ul>
                        </form>
                        <span class="department-phone">By Phone - <a href="tel:9543244196">954.324.4196</a></span>
                    </li>
                    <li class="toggle-content__item">
                        <form class="form" action="#" method="post">
                            <h3 class="form__title">Your information</h3>
                            <ul class="form-fields">
                                <li class="form__field">
                                    <input type="text" name="txt_name" value="William Rossiter">
                                </li>
                                <li class="form__field">
                                    <input type="email" name="email_add" value="william@slicecreates.com">
                                </li>
                                <li class="form__field">
                                    <input type="text" name="phone_no" placeholder="Phone(XXX-XXX-XXXX)">
                                </li>
                                <li class="form__field">
                                    <textarea placeholder="Questions or Comments?"></textarea>
                                </li>
                                <li class="form__field form__field--captcha">
                                    <span class="required-symbol">* Required Fields</span>
                                    <img src="<?php echo STYLEDIR; ?>/uploads/newCaptcha.png" alt="captcha" />
                                </li>
                                <li class="form__field form__field--submit">
                                    <input class="button button--small" type="submit" value="Send Message">
                                </li>
                            </ul>
                        </form>
                        <span class="department-phone">By Phone - <a href="tel:9543244196">954.324.4196</a></span>
                    </li>
                    <li class="toggle-content__item">
                        <form class="form" action="#" method="post">
                            <h3 class="form__title">Your information</h3>
                            <ul class="form-fields">
                                <li class="form__field">
                                    <input type="text" name="txt_name" value="William Rossiter">
                                </li>
                                <li class="form__field">
                                    <input type="email" name="email_add" value="william@slicecreates.com">
                                </li>
                                <li class="form__field">
                                    <input type="text" name="phone_no" placeholder="Phone(XXX-XXX-XXXX)">
                                </li>
                                <li class="form__field form__field-select">
                                    <select class="custom-select">
                                        <option value="engineer">Position: Engineer</option>
                                        <option value="engineer">Position: Engineer</option>
                                    </select>
                                </li>
                                <li class="form__field form__field-upload">
                                    <input class="custom-upload" type="file" name="file-upload" />
                                </li>
                                <li class="form__field">
                                    <textarea placeholder="Tell us a brief summary of how you can make a difference at Intrepid."></textarea>
                                </li>
                                <li class="form__field form__field--captcha">
                                    <span class="required-symbol">* Required Fields</span>
                                    <img src="<?php echo STYLEDIR; ?>/uploads/newCaptcha.png" alt="captcha" />
                                </li>
                                <li class="form__field form__field--submit">
                                    <input class="button button--small" type="submit" value="Send Message">
                                </li>
                            </ul>
                        </form>
                        <span class="department-phone">By Phone - <a href="tel:9543244196">954.324.4196</a></span>
                    </li>
                </ul>
            </div>

        </div>
    </section>

    <?php e11_locations(array(), true, 'get_field', $page, ''); ?>

    <?php e11_teams(array(), true, 'get_field', $page, ''); ?>

</main>
<?php get_footer(); ?>
