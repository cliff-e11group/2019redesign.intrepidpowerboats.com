<?php

// Template Name: Boat Category
get_header();
the_post();
$page = get_the_ID();
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
    <?php if ( !empty($hero_image) ) : ?>
        <div class="model-intro">
            <div class="model-intro__thumbnail" style="background-image:url(<?php echo $hero_image['url']; ?>)"></div>
            <div class="container">
                <div class="model-intro__content">
                    <p><?php echo $description; ?></p>
                </div>
            </div>
        </div>
    <?php endif; ?>

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

                        <!-- make sure include boats is set, and that it doesn't appear more than once -->
                        <?php if($content['include_boats'] && $count <= 1) : ?>

                            <?php
                            $boats = get_field('boats');
                            $total_boats = count($boats);
                            ?>

                            <?php if( !empty($boats) && ($total_boats < 6 )): ?>

                                <!-- if boat count is less than six -->
                                <div class="column-model">

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
                                                <figure class="column-model__thumbnail" style="background-image: url('<?php echo $image['sizes']['boat-cat-pullin']; ?>');">
                                                    <span class="accessible-text"><?php echo $image['alt']; ?></span>
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

                                </div>

                            <?php endif; ?>



                            <!-- if there are more than six boats, we need to split into two cols -->

                            <?php if( !empty($boats) && ($total_boats >= 6 )) :

                                $half = $total_boats / 2;

                                $col_left = array_slice($boats, 0, ($half));
                                $col_right = array_slice($boats, ($half));

                            ?>
                                <div class="column-model column-model--two-col">

                                <div class="column-model__left">

                                <?php foreach ($col_left as $boat) : ?>

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
                                                <figure class="column-model__thumbnail" style="background-image: url('<?php echo $image['sizes']['boat-cat-pullin']; ?>');">
                                                    <span class="accessible-text"><?php echo $image['alt']; ?></span>
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

                                <div class="column-model__right">

                                <?php foreach ($col_right as $boat) : ?>

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
                                                <figure class="column-model__thumbnail" style="background-image: url('<?php echo $image['sizes']['boat-cat-pullin']; ?>');">
                                                    <span class="accessible-text"><?php echo $image['alt']; ?></span>
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

                            </div>

                            <?php //endif; ?>



                        <?php //endif; ?>
                    </div>
                </section>
            <?php endforeach; ?>
        <?php endif; ?>

    </div>

</main>

<?php get_footer(); ?>

