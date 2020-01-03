<?php
/**
* Template Name: About Interior
*/
get_header();
the_post();
?>
<?php get_header(); ?>
<main class="main">
    <?php
    $about_interior_hero_title = get_field('about_interior_hero_title');
    $about_interior_hero_description = get_field('about_interior_hero_description');
    $about_interior_hero_link = get_field('about_interior_hero_link');
    $about_interior_hero_image = get_field('about_interior_hero_image');
    $about_interior_hero_leadoff = get_field('about_interior_hero_leadoff');
    ?>
    <section class="primary-block">
        <div class="container">
            <figure class="primary-block__image">
                <img src="<?php echo STYLEDIR; ?>/uploads/boat-image1.jpg" alt="boat-image1" />
            </figure>
            <div class="primary-block__content">
                <h2 class="primary-block__title">One of a kind. <strong>One at a time.</strong></h2>
                <div class="primary-block__description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at odio id ipsum volutpat dapibus sagittis et urna. Vestibulum nec volutpat risus. Cras nec eros turpis. Aenean at egestas erat, ut dictum ante. Mauris nisl mi, suscipit sed libero eu, tincidunt sagittis dui. Sed at blandit eros, eget malesuada dui.</p>
                </div>
                <a href="https://www.youtube.com/watch?time_continue=3&v=zlsp9Mo0NuE&feature=emb_title" data-fancybox="" class="btn btn--dark btn--large-mobile">Watch our brand video</a>
            </div>
            <div class="primary-block__sticky-box primary-block__sticky-box--dark">
                <p>Whatever you can do, or dream you can, begin it.</p>
                <p><strong>Boldness has genius, power and magic in it.</strong></p>
            </div>
        </div>
    </section>
    <?php
    $about_interior_slider = get_field('about_interior_slider');
    if( !empty($about_interior_slider) ) :
    ?>
    <section class="custom-tab" style="background-image:url(<?php echo STYLEDIR; ?>/uploads/fishing.jpg);">
        <?php $about_interior_slider_count = 0; foreach($about_interior_slider as $about_interior_slide) :
        $about_interior_slide_background_image = $about_interior_slide['background_image'];
        $about_interior_slide_background_video = $about_interior_slide['background_video'];
        ?>
        <?php if($about_interior_slide_background_image) : ?>
        <div class="custom-tab__bg tab-<?php echo $about_interior_slider_count; ?>" style="background-image: url(<?php echo $about_interior_slide_background_image['sizes']['hero']; ?>);">
            <?php if($about_interior_slide_background_video) : ?>
            <video class="custom-tab__bg-video" autoplay muted loop>
                <source src="<?php echo $about_interior_slide_background_video['url']; ?>" type="video/mp4">
            </video>
            <?php endif; ?>
        </div>
        <?php endif; ?>
        <?php $about_interior_slider_count++; endforeach; ?>
        <div class="container">
            <div class="custom-tab__wrap">
                <h2 class="custom-tab__title">Versatility</h2>
                <div class="custom-tab__nav custom-tab-slider">
                    <?php $about_interior_slider_count = 0; foreach($about_interior_slider as $about_interior_slide) : ?>
                    <div class="custom-tab__nav-item"><a href="tab-<?php echo $about_interior_slider_count; ?>"><?php echo $about_interior_slide['nav_label']; ?></a></div>
                    <?php $about_interior_slider_count++; endforeach; ?>
                </div>
                <div class="custom-tab__content">
                    <?php $about_interior_slider_count = 0; foreach($about_interior_slider as $about_interior_slide) :
                    $about_interior_slide_content = $about_interior_slide['content'];
                    $about_interior_slide_background_link = $about_interior_slide['link'];
                    ?>
                    <div id="tab-<?php echo $about_interior_slider_count; ?>" class="tab-<?php echo $about_interior_slider_count; ?> custom-tab__content-item">
                        <div class="custom-tab__content-item--inner">
                            <?php if($about_interior_slide_content) : echo $about_interior_slide_content; endif; ?>
                            <?php if($about_interior_slide_background_link) : ?>
                            <a href="<?php echo $about_interior_slide_background_link['url']; ?>" class="btn btn--outline btn--light btn--large-mobile" target="<?php echo $about_interior_slide_background_link['target']; ?>"><?php echo $about_interior_slide_background_link['title']; ?></a>
                            <?php endif; ?>
                        </div>
                    </div>
                    <?php $about_interior_slider_count++; endforeach; ?>
                </div>
            </div>
        </div>
    </section>
    <?php endif; ?>
    <section class="media-content">
        <div class="container">
            <div class="media-content__item media-content__item--sticky-image">
                <figure class="media-content__thumbnail">
                    <img src="<?php echo STYLEDIR; ?>/uploads/boat-image2.jpg" alt="boat-image2" />
                    <div class="thumbnail-sticky thumbnail-sticky--bottom-right" style="background-image:url('<?php echo STYLEDIR; ?>/uploads/boat-image3.png');">
                    </div>
                </figure>
                <div class="media-content__details">
                    <h2 class="media-content__title">Any color, anywhere.</h2>
                    <div class="media-content__description">
                        <p>Boat hull color can be anything you like. It’s applied with Imron™ paint to produce a deeper gloss and it’s easier to maintain than a gel coat. Engines can also be painted to match your new Intrepid.</p>
                    </div>
                </div>
            </div>
            <div class="media-content__item media-content__item--sticky-image">
                <figure class="media-content__thumbnail">
                    <img src="<?php echo STYLEDIR; ?>/uploads/boat-image4.jpg" alt="boat-image4" />
                    <div class="thumbnail-sticky thumbnail-sticky--top-right" style="background-image:url('<?php echo STYLEDIR; ?>/uploads/boat-engine1.jpg');">
                    </div>
                </figure>
                <div class="media-content__details">
                    <h2 class="media-content__title">Customizable Technology.</h2>
                    <p>TChoose between custom consoles, windshields and hard or canvas tops. We’ll also manufacture custom seats specifically for your boat. Just pick the fabric, color and pattern, including pleats, piping, rolls, stitching and more.</p>
                </div>
            </div>
            <div class="media-content__item">
                <figure class="media-content__thumbnail">
                    <img src="<?php echo STYLEDIR; ?>/uploads/boat-at-night.jpg" alt="boat-at-night" />
                </figure>
                <div class="media-content__details">
                    <h2 class="media-content__title">Engines Galore.</h2>
                    <p>Every Intrepid is installed with the engine brand of your choice.</p>
                </div>
            </div>
            <div class="media-content__item">
                <figure class="media-content__thumbnail">
                    <img src="<?php echo STYLEDIR; ?>/uploads/happy-customer.jpg" alt="happy-customer" />
                </figure>
                <div class="media-content__details">
                    <h2 class="media-content__title">World Class Service.</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et rutrum arcu. Donec faucibus molestie nisl, elementum facilisis diam finibus in. Aliquam a scelerisque eros.</p>
                    <a href="<?php echo site_url('service'); ?>" class="btn btn--dark btn--large-mobile">Learn more about our service department</a>
                </div>
            </div>
        </div>
    </section>
    <section class="content-block">
        <div class="container">
            <h2 class="content-block__title">Owner<strong>Privileges</strong>
            </h2>
            <div class="sub-container">
                <p>Entering the Intrepid family is unlike any other experience. It is a highly collaborative one. Before we lay a finger on a piece of equipment, we want your fingerprint on the design first. So we work one-on-one with our customers to learn what they want and hope for in their new Intrepid before we build it.</p>
                <p>You’ll be involved throughout the process as your boat evolves into a craft that is very much your own. Unique and unlike any other. As is the customer service we provide to each owner no matter how long you own an Intrepid.</p>
            </div>
        </div>
    </section>
    <section class="content-block content-block--bottom-space">
        <div class="container">
            <h2 class="content-block__title">Hear it from<strong>Our Owners</strong>
            </h2>
            <div class="sub-container sub-container--review">
                <img src="<?php echo STYLEDIR; ?>/uploads/reviews.jpg" alt="reviews" />
            </div>
        </div>
    </section>
</main>
<?php get_footer(); ?>
