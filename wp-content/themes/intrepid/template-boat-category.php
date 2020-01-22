<?php

// Template Name: Boat Category
get_header();
the_post();
$page = get_the_ID();
$cat_id = get_field('select_boat_category');
$hero_image = get_field('boat_cat_hero_image');
$tagline = get_field( 'tagline' );
$description = get_field( 'description' );
?>


<main class="main">
    <section class="hero hero--inner" style="background-image:url(<?php echo STYLEDIR; ?>/uploads/our-models-bg-image.jpg);">
        <div class="container">
            <div class="hero__content">
                <h1 class="hero__title"><?php echo get_the_title(); ?></h1>
                <?php if($tagline) : ?>
                <div class="hero__description">
                    <p><?php echo $tagline; ?></p>
                </div>
                <?php endif; ?>
            </div>
        </div>
    </section>
    <div class="model-intro">
        <div class="model-intro__thumbnail" style="background-image:url(<?php echo $hero_image['url']; ?>)"></div>
        <div class="container">
            <div class="model-intro__content">
                <p><?php echo $description; ?></p>
            </div>
        </div>
    </div>

    <div class="content-wrap">
        <?php
        $boat_cat_content = get_field('boat_other_content_section');
        ?>
        <?php $count = 0; ?>
        <?php if (!empty($boat_cat_content)) : ?>
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
                            $boats = get_field('boats');
                            ?>

                            <?php if( !empty($boats)): ?>

                                <div class="column-model <?php echo (count($boats) >= 6) ? 'column-model--two-col' : ''; ?>">

                                <?php foreach ($boats as $boat) : ?>

                                    <?php if ( !empty($boat) ) : ?>

                                    <?php
                                        $title = $boat['title'];
                                        $brochure = $boat['brochure'];
                                        $image = $boat['image'];
                                        $description = $boat['description'];

                                    ?>

                                    <!-- boat_category_description -->
                                        <div class="column-model__item">
                                            <?php if ($image) : ?>
                                                <figure class="column-model__thumbnail">
                                                    <img src="<?php echo $image['sizes']['boat-cat-pullin']; ?>" alt="<?php echo $image['alt']; ?>">
                                                </figure>
                                            <?php endif; ?>

                                            <?php if ($title || $description) : ?>
                                                <div class="column-model__title-wrap">
                                                    <?php if($title) : ?>
                                                        <h2 class="column-model__title"><?php echo $title; ?></h2>
                                                    <?php endif; ?>

                                                    <?php if ($brochure || $description) : ?>
                                                    <span class="column-model__trigger"></span>

                                                    <?php endif; ?>
                                                </div>
                                            <?php endif; ?>

                                            <?php if ($brochure || $description) : ?>

                                                <div class="column-model__content">
                                                    <?php echo $description; ?>

                                                <?php if ($brochure) : ?>
                                                        <a href="<?php echo $brochure['url']; ?>" class="btn btn--dark">Download Brochure</a>
                                                    <?php endif; ?>
                                                </div>
                                            <?php endif; ?>
                                        </div>

                                    <?php endif; ?>

                                <?php endforeach; ?>

                            <?php endif; ?>

                            </div>

                        <?php endif; ?>
                    </div>
                </section>
            <?php endforeach; ?>
        <?php endif; ?>

    </div>

</main>

<?php get_footer(); ?>

