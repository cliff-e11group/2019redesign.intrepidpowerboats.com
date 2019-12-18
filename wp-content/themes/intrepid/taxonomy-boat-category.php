<?php
get_header();
the_post();
$cat_id = get_queried_object()->term_id;
$cat = get_term_by('id', $cat_id, 'boat-category');
$full_id = $cat->taxonomy . '_' . $cat_id;
$hero_image = get_field('boat_cat_hero_image', $full_id);
$tagline = get_field( 'boat_cat_tagline',  $full_id);

?>


<main class="main">
    <section class="hero hero--inner" style="background-image:url(<?php echo STYLEDIR; ?>/uploads/our-models-bg-image.jpg);">
        <div class="container">
            <div class="hero__content">
                <h1 class="hero__title"><?php echo single_term_title(); ?></h1>
                <div class="hero__description">
                    <p><?php echo $tagline; ?></p>
                </div>
            </div>
        </div>
    </section>
    <div class="model-intro">
        <div class="model-intro__thumbnail" style="background-image:url(<?php echo $hero_image['url']; ?>)"></div>
        <div class="container">
            <div class="model-intro__content">
                <p><?php echo $cat->description; ?></p>
            </div>
        </div>
    </div>

    <div class="content-wrap">
        <?php
        $boat_cat_content = get_field('boat_other_content_section', $full_id);
        ?>
        <?php $count = 0; ?>
        <?php foreach($boat_cat_content as $content) : ?>
            <?php
            if($content['include_boats']) :
                $count++;
            endif; ?>


            <section class="content-block">
                <div class="container">
                    <?php if ($content['title']) : ?>
                        <h2 class="content-block__title"><?php echo $content['title']; ?>
                        </h2>
                    <?php endif; ?>

                    <?php if ($content['content']) : ?>
                        <div class="sub-container">
                            <?php echo $content['content']; ?>
                        </div>
                    <?php endif; ?>

                    <?php if($content['include_boats'] && $count <= 1) : ?>

                        <?php
                        $boat_args = array(
                            'post_type' => 'boats',
                            'tax_query' => array(
                                    array(
                                        'taxonomy' => 'boat-category',
                                        'field' => 'slug',
                                        'terms' => $cat->slug,
                                    ),
                                ),
                            );

                            $boat_cat_query = new WP_Query($boat_args);
                        ?>

                        <?php if($boat_cat_query->have_posts()): ?>
                            <?php while ($boat_cat_query->have_posts()): $boat_cat_query->the_post(); ?>

                            <?php
                                $title = get_the_title();
                                $brochure = get_field('quick_statistics_brochure');
                            ?>

                            <!-- boat_category_description -->
                            <div class="column-model">
                                <div class="column-model__item">
                                    <figure class="column-model__thumbnail">
                                        <?php echo get_the_post_thumbnail($post, 'boat-cat-pullin'); ?>
                                    </figure>
                                    <div class="column-model__title-wrap">
                                        <h2 class="column-model__title"><?php echo $title; ?></h2>
                                        <span class="column-model__trigger"></span>
                                    </div>
                                    <div class="column-model__content">
                                        <?php echo get_field('boat_category_description'); ?>
                                        <?php if ($brochure) : ?>
                                            <a href="<?php echo $brochure['url']; ?>" class="btn btn--dark">Download Brochure</a>
                                        <?php endif; ?>
                                    </div>
                                </div>
                            </div>
                            <?php endwhile; ?>
                        <?php endif; ?>

                    <?php endif; ?>
                </div>
            </section>
        <?php endforeach; ?>

    </div>

</main>

<?php get_footer(); ?>

