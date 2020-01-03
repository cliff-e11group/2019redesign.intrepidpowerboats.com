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

        <?php
        $args = array(
            'post_type' => 'events',
            'post_status' => 'publish',
            'posts_per_page' => -1,
            'meta_query' => array(
                array(
                    'key' => 'event_end_date',
                    'value' => date('Ymd'),
                    'type' => 'DATE',
                    'compare' => '>='
                ),
            ),
        );
        $loop = new WP_Query($args);
        ?>

        <?php if ($loop->have_posts()): ?>
            <div class="column-block__wrap">
                <?php while ($loop->have_posts()): $loop->the_post(); ?>
                <?php
                $link = get_the_permalink();
                $title = get_the_title();
                ?>
                <div class="column-block__item">
                    <figure class="column-block__thumbnail">
                        <a href="<?php echo $link; ?>">
                            <?php echo get_the_post_thumbnail($post, 'event-archive'); ?>
                        </a>
                    </figure>
                    <h2 class="column-block__title">
                        <a href="<?php echo $link; ?>"><?php echo $title; ?></a>
                    </h2>
                        <?php

                        $start_date = get_field('event_start_date');
                        $end_date = get_field('event_end_date');
                        $same_date = true;

                        if ($start_date !== $end_date){
                            $same_date = false;
                            $start_date = explode( ' ', get_field('event_start_date') );
                            $end_date =  explode( ' ', get_field('event_end_date') );

                            if($start_date[0] === $end_date[0] && $start_date[2] === $end_date[2]){
                                unset($start_date[2]);
                                unset($end_date[0]);

                                $final_start_date = str_replace( ',', '', implode(' ', $start_date ));
                                $final_end_date = implode(' ', $end_date);
                            } else{
                                $final_start_date = implode(' ', $start_date );
                                $final_end_date = implode(' ', $end_date);
                            }
                        }
                        ?>
                        <?php if ($start_date || $final_start_date) : ?>
                            <span class="column-block__date"><?php echo $same_date ? $start_date : $final_start_date; ?>
                            <?php echo !($same_date) ?'- '. $final_end_date: ''; ?></span>
                        <?php endif; ?>
                    <div class="column-block__content">
                        <?php echo get_field('event_description'); ?>
                    </div>
                    <div class="btn-group">
                        <?php
                        $event_external_link = get_field('event_external_link');
                        if($event_external_link) :
                        ?>
                        <a href="<?php echo $event_external_link['url']; ?>" target="_blank" class="btn btn--outline-dark btn--outline"><?php echo $event_external_link['title']; ?></a>
                        <?php endif; ?>
                        <a href="<?php echo $link; ?>" class="btn btn--outline-dark btn--outline">More Info</a>
                    </div>
                </div>
                <?php endwhile; ?>
            </div>
        <?php else : ?>
            <div class="no-events">
                <p>Sorry, there are currently no upcoming events.</p>
                <div class="no-events__newsletter">
                    <p>Please sign up for our Newsletter to learn about future events!</p>
                    <?php echo do_shortcode('[gravityform id="1" title="false" description="false" ajax="true"]'); ?>
                </div>
            </div>
        <?php endif; ?>

        </div>
    </section>
</main>

<?php get_footer(); ?>
