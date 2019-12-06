<?php
/**
* Template Name: Service
*/
get_header();
the_post();
?>
<?php get_header(); ?>
<main class="main">
    <section class="hero hero--inner" style="background-image:url(<?php echo STYLEDIR; ?>/uploads/our-models-bg-image.jpg);">
        <div class="container">
            <div class="hero__content">
                <h1 class="hero__title">Our Service</h1>
                <div class="hero__description">
                    <p>As legendary as the boats themselves.</p>
                </div>
            </div>
        </div>
    </section>
    <div class="model-intro">
        <div class="model-intro__thumbnail" style="background-image:url(<?php echo STYLEDIR; ?>/uploads/service-hero.jpg);"></div>
        <div class="container">
            <div class="model-intro__content" style="right: 130px;">
                <p><strong>Jane S. Palm Beach FL</strong><br>This intrepid is great, and I have so much fun on it.</p>
            </div>
        </div>
    </div>
    <div class="content-wrap">
        <section class="content-block">
            <div class="container">
                <h2 class="content-block__title">Legendary
                    <strong>Support Teams</strong>
                </h2>
                <div class="sub-container">
                    <p>When we sell an Intrepid, our relationship with our customers doesn’t end. Far from it. Our customer support program is legendary for going well beyond the extra mile to ensure the absolute comfort, safety, and convenience of our owners. And it starts with one of the industry’s most comprehensive warranty programs, and goes full circle to provide advice and service to you, whether it’s the day you first step aboard your Intrepid or 10 years later.</p>
                </div>
                <div class="service-form">
                    <div class="service-form__title-wrap">
                        <h2 class="service-form__title">Contact Service</h2>
                        <span class="service-form__trigger icon-plus"></span>
                    </div>
                    <div class="service-form__content">
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
                                    <input type="text" name="hull_id" value="HULL ID #FL-5401239124">
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
                    </div>
                </div>
            </div>
        </section>
        <section class="content-block">
            <div class="container">
                <h2 class="content-block__title">The best warranty on land for your
                    <strong>Time on the water</strong>
                </h2>
                <div class="sub-container">
                    <p>Hands down, you will not find a more comprehensive warranty out there. Because for as long as you own and intrepid, it’s covered. No matter what. </p>
                </div>
            </div>
        </section>
        <section class="content-block">
            <div class="container">
                <h2 class="content-block__title">Service on land
                    <strong>To get you back on the water</strong>
                </h2>
                <div class="sub-container">
                    <p>For service and repair, owners enjoy a direct relationship with the dedicated service teams in our Dania and Largo, Florida facilities. We offer dockside service to local customers with a fully stocked service vehicle. Connections to a global network of service facilities and boat yards ensure that a global service and support system is always available. And we always keep a carefully archived file on each boat we build to enable us to advise service technicians anywhere in the world.</p>
                </div>
            </div>
        </section>
    </div>
    <section class="customer-support">
        <div class="container">
            <div class="customer-support__location">
                <h2 class="customer-support__title">Location and Hours</h2>
                <div class="company-info__item company-info__item--fullwidth">
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
            </div>
            <div class="customer-support__team">
                <h2 class="customer-support__title">Customer Service</h2>
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
    </section>
</main>
<?php get_footer(); ?>
