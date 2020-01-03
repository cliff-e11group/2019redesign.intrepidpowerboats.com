<?php
/**
* Template Name: Contact
*/
get_header();
the_post();
?>
<?php get_header(); ?>
<main class="main">
    <section class="hero hero--inner" style="background-image:url(<?php echo STYLEDIR; ?>/uploads/our-models-bg-image.jpg);">
        <div class="container">
            <div class="hero__content">
                <h1 class="hero__title">Contact Us</h1>
                <div class="hero__description">
                    <p>World Class <strong>Service.</strong></p>
                </div>
            </div>
        </div>
    </section>
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
                                        <option value="model-410">MODEL: 410 EVOLUTION</option>
                                        <option value="model-410">MODEL: 410 EVOLUTION</option>
                                        <option value="model-410">MODEL: 410 EVOLUTION</option>
                                        <option value="model-410">MODEL: 410 EVOLUTION</option>
                                    </select>
                                </li>
                                <li class="form__field">
                                    <textarea placeholder="Questions or Comments? Let us know here."></textarea>
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
    <section class="company-block">
        <div class="container">
            <h2 class="company-block__title">Office Location and Hours</h2>
            <div class="company-info">
                <div class="company-info__item">
                    <figure class="company-info__map">
                        <a href="#" target="_blank">
                            <img src="<?php echo STYLEDIR; ?>/uploads/google-map.jpg" alt="map"/>
                        </a>
                    </figure>
                    <h3 class="company-info__title">Sales Headquarters</h3>
                    <address class="company-info__address">
                        805 NE 3RD Street<br>
                        Dania, FL 33004<br>
                        <a class="company-info__direction" href="" target="_blank">Driving Directions</a>
                    </address>
                    <a class="company-info__phone" href="tel:9543244196">954.324.4196</a>
                    <div class="company-info__office-hr">
                        <span class="label">Hours:</span>
                        <p>MON-FRI – 8AM TO 5PM<br>
                            SAT – 9AM TO 4PM<br>
                            SUN – BY APPOINTMENT
                        </p>
                    </div>
                </div>
                <div class="company-info__item">
                    <figure class="company-info__map">
                        <a href="#" target="_blank">
                            <img src="<?php echo STYLEDIR; ?>/uploads/google-map.jpg" alt="map"/>
                        </a>
                    </figure>
                    <h3 class="company-info__title">Service Location</h3>
                    <address class="company-info__address">805 NE 3RD Street<br>Dania, FL 33004<br>
                        <a class="company-info__direction" href="" target="_blank">Driving Directions</a>
                    </address>

                    <a class="company-info__phone" href="tel:9543244196">954.324.4196</a>
                    <div class="company-info__office-hr">
                        <span class="label">Hours:</span>
                        <p>MON-FRI – 8AM TO 5PM<br>
                        </p>
                    </div>
                </div>
                <div class="company-info__item">
                    <figure class="company-info__map">
                        <a href="#" target="_blank">
                            <img src="<?php echo STYLEDIR; ?>/uploads/google-map.jpg" alt="map"/>
                        </a>
                    </figure>
                    <h3 class="company-info__title">Manufacturing Facility</h3>
                    <address class="company-info__address">805 NE 3RD Street<br>Dania, FL 33004<br>
                        <a class="company-info__direction" href="" target="_blank">Driving Directions</a>
                    </address>
                    <a class="company-info__phone" href="tel:9543244196">954.324.4196</a>
                </div>
            </div>
        </div>
    </section>
    <section class="team-block">
        <div class="container">
            <div class="team-block__two-third">
                <div class="team-block__category">
                    <h2 class="team-block__category-title">Sales Team</h2>
                    <ul class="member-list member-list--two-col">
                        <li class="member member-list__item">
                            <figure class="member__image">
                                <img src="<?php echo STYLEDIR; ?>/uploads/mike.jpg" alt="mike" />
                            </figure>
                            <div class="member__details">
                                <h3 class="member__name">Mike Obolsky</h3>
                                <span class="member__designation">Senior VP</span>
                                <a class="member__phone" href="tel:9543244196">954.324.4196</a>
                                <span class="member__email"><a href="">mike@intrepidpowerboats.com</a></span>
                            </div>
                        </li>
                        <li class="member member-list__item">
                            <figure class="member__image">
                                <img src="<?php echo STYLEDIR; ?>/uploads/mike.jpg" alt="mike" />
                            </figure>
                            <div class="member__details">
                                <h3 class="member__name">Mike Obolsky</h3>
                                <span class="member__designation">Senior VP</span>
                                <a class="member__phone" href="tel:9543244196">954.324.4196</a>
                                <span class="member__email"><a href="">mike@intrepidpowerboats.com</a></span>
                            </div>
                        </li>
                        <li class="member member-list__item">
                            <figure class="member__image">
                                <img src="<?php echo STYLEDIR; ?>/uploads/mike.jpg" alt="mike" />
                            </figure>
                            <div class="member__details">
                                <h3 class="member__name">Mike Obolsky</h3>
                                <span class="member__designation">Senior VP</span>
                                <a class="member__phone" href="tel:9543244196">954.324.4196</a>
                                <span class="member__email"><a href="">mike@intrepidpowerboats.com</a></span>
                            </div>
                        </li>
                        <li class="member member-list__item">
                            <figure class="member__image">
                                <img src="<?php echo STYLEDIR; ?>/uploads/mike.jpg" alt="mike" />
                            </figure>
                            <div class="member__details">
                                <h3 class="member__name">Mike Obolsky</h3>
                                <span class="member__designation">Senior VP</span>
                                <a class="member__phone" href="tel:9543244196">954.324.4196</a>
                                <span class="member__email"><a href="">mike@intrepidpowerboats.com</a></span>
                            </div>
                        </li>
                        <li class="member member-list__item">
                            <figure class="member__image">
                                <img src="<?php echo STYLEDIR; ?>/uploads/mike.jpg" alt="mike" />
                            </figure>
                            <div class="member__details">
                                <h3 class="member__name">Mike Obolsky</h3>
                                <span class="member__designation">Senior VP</span>
                                <a class="member__phone" href="tel:9543244196">954.324.4196</a>
                                <span class="member__email"><a href="">mike@intrepidpowerboats.com</a></span>
                            </div>
                        </li>
                        <li class="member member-list__item">
                            <figure class="member__image">
                                <img src="<?php echo STYLEDIR; ?>/uploads/mike.jpg" alt="mike" />
                            </figure>
                            <div class="member__details">
                                <h3 class="member__name">Mike Obolsky</h3>
                                <span class="member__designation">Senior VP</span>
                                <a class="member__phone" href="tel:9543244196">954.324.4196</a>
                                <span class="member__email"><a href="">mike@intrepidpowerboats.com</a></span>
                            </div>
                        </li>
                        <li class="member member-list__item">
                            <figure class="member__image">
                                <img src="<?php echo STYLEDIR; ?>/uploads/mike.jpg" alt="mike" />
                            </figure>
                            <div class="member__details">
                                <h3 class="member__name">Mike Obolsky</h3>
                                <span class="member__designation">Senior VP</span>
                                <a class="member__phone" href="tel:9543244196">954.324.4196</a>
                                <span class="member__email"><a href="">mike@intrepidpowerboats.com</a></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="team-block__one-third">
                <div class="team-block__category">
                    <h2 class="team-block__category-title">Customer Service</h2>
                    <ul class="member-list">
                        <li class="member member-list__item">
                            <figure class="member__image">
                                <img src="<?php echo STYLEDIR; ?>/uploads/mike.jpg" alt="mike" />
                            </figure>
                            <div class="member__details">
                                <h3 class="member__name">Mike Obolsky</h3>
                                <span class="member__designation">Senior VP</span>
                                <a class="member__phone" href="tel:9543244196">954.324.4196</a>
                                <span class="member__email"><a href="">mike@intrepidpowerboats.com</a></span>
                            </div>
                        </li>
                        <li class="member member-list__item">
                            <figure class="member__image">
                                <img src="<?php echo STYLEDIR; ?>/uploads/mike.jpg" alt="mike" />
                            </figure>
                            <div class="member__details">
                                <h3 class="member__name">Mike Obolsky</h3>
                                <span class="member__designation">Senior VP</span>
                                <a class="member__phone" href="tel:9543244196">954.324.4196</a>
                                <span class="member__email"><a href="">mike@intrepidpowerboats.com</a></span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="team-block__category">
                    <h2 class="team-block__category-title">Manufacturing Team</h2>
                    <ul class="member-list">
                        <li class="member member-list__item">
                            <figure class="member__image">
                                <img src="<?php echo STYLEDIR; ?>/uploads/mike.jpg" alt="mike" />
                            </figure>
                            <div class="member__details">
                                <h3 class="member__name">Mike Obolsky</h3>
                                <span class="member__designation">Senior VP</span>
                                <a class="member__phone" href="tel:9543244196">954.324.4196</a>
                                <span class="member__email"><a href="">mike@intrepidpowerboats.com</a></span>
                            </div>
                        </li>
                        <li class="member member-list__item">
                            <figure class="member__image">
                                <img src="<?php echo STYLEDIR; ?>/uploads/mike.jpg" alt="mike" />
                            </figure>
                            <div class="member__details">
                                <h3 class="member__name">Mike Obolsky</h3>
                                <span class="member__designation">Senior VP</span>
                                <a class="member__phone" href="tel:9543244196">954.324.4196</a>
                                <span class="member__email"><a href="">mike@intrepidpowerboats.com</a></span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </section>
</main>
<?php get_footer(); ?>
