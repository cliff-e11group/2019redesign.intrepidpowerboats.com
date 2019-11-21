<?php
get_header();
the_post();
?>

<main class="main page-events-archive">
    <section class="hero hero--inner" style="background-image:url(<?php echo STYLEDIR; ?>/uploads/our-models-bg-image.jpg);">
        <div class="container">
            <div class="hero__content">
                <h1 class="hero__title hero__title--no-line">Our Events</h1>
            </div>
        </div>
    </section>
    <section class="column-block">
        <div class="container">
            <h2 class="section-title">Upcoming Events</h2>
            <div class="column-block__wrap">
                <div class="column-block__item">
                    <figure class="column-block__thumbnail">
                        <a href="<?php echo site_url('events/sample-event'); ?>">
                            <img src="<?php echo STYLEDIR; ?>/uploads/beach.jpg" alt="Beach"/>
                        </a>
                    </figure>
                    <h2 class="column-block__title">
                        <a href="<?php echo site_url('events/sample-event'); ?>">Intrepid Owner's Rendevous</a>
                    </h2>
                    <span class="column-block__date">July 12 - 14, 2019</span>
                    <div class="column-block__content">
                        <p>Join us for the first ever Intrepid Owners Rendezvous at Hawks Cay Resort July 12th-14th. It’s going to be a full weekend of fun, relaxation and entertainment exclusively for Intrepid owners. Reserve your spot now for this inaugural event before May 17th. We hope to see you there for an unforgettable weekend.</p>
                    </div>
                    <div class="btn-group">
                        <a href="#" class="btn btn--outline">Reserve a Spot</a>
                        <a href="<?php echo site_url('events/sample-event'); ?>" class="btn btn--outline">More Info</a>
                    </div>
                </div>
                <div class="column-block__item">
                    <figure class="column-block__thumbnail">
                        <a href="<?php echo site_url('events/sample-event'); ?>">
                            <img src="<?php echo STYLEDIR; ?>/uploads/beach.jpg" alt="Beach"/>
                        </a>
                    </figure>
                    <h2 class="column-block__title">
                        <a href="<?php echo site_url('events/sample-event'); ?>">Intrepid Owner's Rendevous</a>
                    </h2>
                    <span class="column-block__date">July 12 - 14, 2019</span>
                    <div class="column-block__content">
                        <p>Fort Lauderdale, Florida, the "Yachting Capital of the World" will host the 60th annual Fort Lauderdale International Boat Show on October 30 - Nov 3, 2019.</p>
                        <p>Every year, the show exhibits a vast array of the industry's latest boats and yachts of all sizes, worldwide debuts, plus a medley of marine products and accessories to enhance the nautical lifestyle. From yacht builders and designers to exotic cars and brokerage yachts, this show has something for everyone!</p>
                    </div>
                    <div class="btn-group">
                        <a href="<?php echo site_url('events/sample-event'); ?>" class="btn btn--outline">More Info</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>
