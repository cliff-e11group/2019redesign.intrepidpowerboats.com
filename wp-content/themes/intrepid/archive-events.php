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

                        ?>
                        <span class="column-block__date"><?php echo $final_start_date; ?> - <?php echo $final_end_date; ?></span>
                    <div class="column-block__content">
                        <?php echo get_field('event_description'); ?>
                    </div>
                    <div class="btn-group">
                        <a href="<?php echo $link; ?>" class="btn btn--outline">More Info</a>
                    </div>
                </div>
                <?php endwhile; ?>
            </div>
        <?php endif; ?>

        </div>
    </section>
</main>

<?php get_footer(); ?>
