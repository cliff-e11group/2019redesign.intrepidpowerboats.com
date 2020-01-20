<?php
get_header();
the_post();
?>

<main class="main">
    <section class="hero hero--inner" style="background-image:url(<?php echo STYLEDIR; ?>/uploads/our-models-bg-image.jpg);">
        <div class="container">
            <div class="hero__content">
                <h1 class="hero__title">OUR MODELS</h1>
                <?php $tagline = get_field('boat_archive_tagline', 'option');
                if($tagline) : ?>
                <div class="hero__description">
                <!-- boat_archive_tagline -->
                    <p><?php echo $tagline; ?></p>
                </div>
                <?php endif; ?>
            </div>
        </div>
    </section>
    <section class="model-list__container">
        <div class="model-list__filter">
            <div class="container">
                <a href="#" class="filter-list__toggle">
                    FILTERS <span class="icon-plus"></span>
                </a>
                <?php
                $boat_lengths = get_terms('boat-length');
                $boat_cats = get_terms('boat-category');
                ?>

                <ul class="model-list__filter-items">
                <!-- boat lengths  -->
                    <?php if ($boat_lengths) : ?>
                        <li>LENGTH:
                            <select class="filters-select">
                                <option value="*">ALL</option>
                                <?php foreach($boat_lengths as $boat_length) : ?>
                                    <option value=".<?php echo preg_replace("/[^0-9]/", "", $boat_length->name ); ?>"><?php echo $boat_length->name; ?></option>
                                <?php endforeach; ?>
                            </select>
                        </li>
                    <?php endif; ?>

                    <!-- boat categories  -->
                    <?php if ($boat_cats) : ?>
                    <li class="filter-type__container filter-type--active"><a href="#" data-filter-category="*" class="filter-type">All Types</a></li>
                        <?php foreach($boat_cats as $boat_cat) : ?>
                            <li class="filter-type__container"><a href="#" class="filter-type" data-filter-category=".<?php echo $boat_cat->slug; ?>"><?php echo $boat_cat->name; ?></a></li>
                        <?php endforeach; ?>
                    <?php endif; ?>
                </ul>
            </div>
        </div>

        <!-- start boat models  -->


        <?php
        $model_args = array(
            'post_type' => 'boats',
            'post_status' => 'publish',
            'orderby' => 'title',
            'order' => 'ASC',
            'posts_per_page' => -1
        );
        $model_query = new WP_Query($model_args);
        ?>

        <?php if ($model_query->have_posts()): ?>
            <div class="container model-list__grid">
                <div class="grid-sizer"></div>
                <div class="gutter-sizer"></div>

                <?php while ($model_query->have_posts()): $model_query->the_post(); ?>
                <?php
                $link = get_the_permalink();
                $title = get_the_title();
                $thumb = get_the_post_thumbnail_url($post->ID,'boat-archive');
                //boat length
                $boat_length = get_the_terms($post->ID, 'boat-length');
                $lengths = array();
                foreach($boat_length as $term => $value) {
                    array_push($lengths, $value->slug);
                }

                //boat category
                $boat_category = get_the_terms($post->ID, 'boat-category');
                $cats = array();
                foreach($boat_category as $term => $value) {
                    array_push($cats, $value->slug);
                }
                ?>
                <div class="model-list__block <?php echo implode(' ', $lengths); ?> <?php echo implode(' ', $cats); ?>">
                    <div class="model-list__image">
                        <a href="<?php echo $link; ?>">
                            <img src="<?php echo $thumb; ?>" alt="<?php echo $title; ?>"
                                 data-img-src="<?php echo $thumb; ?>" data-alt ="Model <?php echo $title; ?>" data-title="<?php echo $title; ?>"
                                 data-link="<?php echo $link; ?>">
                        </a>
                        <button class="model-list__compare">
                            <span class="accessible-text">Compare boat</span>
                        </button>
                    </div>
                    <div class="model-list__detail">
                        <div class="model-list__title-wrap">
                            <h3 class="model-list__title"><?php echo $title; ?></h3>
                            <button class="model-list__trigger-container">
                                <span class="model-list__trigger"></span>
                            </button>
                        </div>
                        <?php
                        $stats = get_field('quick_statistics');
                        $brochure = get_field('quick_statistics_brochure');
                        ?>
                        <div class="model-list-hidden__content" style="display: none">
                            <div class="model-list-stat__container">
                                <h4 class="data-title">STATISTICS</h4>
                                <ul class="data-list">
                                    <?php foreach($stats as $stat) : ?>
                                        <li class="data-list__item">
                                            <span class="data-list__title"><?php echo $stat['label']; ?></span>
                                            <span class="data-list__value"><?php echo $stat['value'];?></span>
                                        </li>
                                    <?php endforeach; ?>
                                </ul>
                            </div>
                            <div class="model-list-cta__container">
                                <a href="<?php echo $link; ?>" class="btn btn--outline">Visit model page</a>
                                <?php if($brochure) : ?>
                                    <a href="<?php echo $brochure['url']; ?>" target="_blank" class="model-list-cta__link">DOWNLOAD BROCHURE</a>
                                <?php endif; ?>
                            </div>
                        </div>
                    </div>
                </div>

                <?php endwhile; ?>
            </div>
        <?php endif; wp_reset_query()?>


        <!-- end boat models  -->

        <div class="module-comparision__block module-btn-box" style="display: none;">
            <div class="container">
                <div class="module-selection-count">
                    <a href="javascript:void(0);" class="btn btn--outline btn--dark btn--large compare-btn">COMPARE THESE 4 MODELS</a>
                </div>
                <div class="panel-close text--right">
                    <a href="javascript:void(0);" class="close">CLOSE <span class="icon-close"></span></a>
                </div>
            </div>
        </div>
        <div class="module-comparision__block module-item-box " style="display: none">
            <div class="container">
                <div class="panel-close text--right">
                    <a href="#" class="close">CLOSE <span class="icon-close"></span></a>
                </div>
                <div class="module-comparision__list">

                </div>
            </div>
        </div>

    </section>
    <div class="icon-list">
        <div class="container">
            <div class="icon-list__item">
                <a href="#" data-class="compare-mode">
                    <div class="icon-container">
                        <svg class="icon icon-compare" aria-hidden="true" role="img">
                            <use xlink:href="#icon-compare" x="0" y="0"></use>
                        </svg>
                    </div>
                    <span class="icon-list__title">COMPARE MODELS</span>
                </a>
            </div>
            <?php
                $link_one = get_field('boat_archive_link_one', 'option');
            ?>
            <?php if ($link_one) : ?>
                <div class="icon-list__item">
                    <div class="icon-container">
                        <a href="<?php echo $link_one['url']; ?>" target="<?php echo $link_one['target']; ?>">
                            <div class="icon-container">
                                <svg class="icon icon-brochure" aria-hidden="true" role="img">
                                    <use xlink:href="#icon-brochure" x="0" y="0"></use>
                                </svg>
                            </div>
                            <span class="icon-list__title"><?php echo $link_one['title']; ?></span>
                        </a>
                    </div>
                </div>
            <?php endif; ?>

            <?php
                $link_two = get_field('boat_archive_link_two', 'option');
            ?>
            <?php if ($link_two) : ?>
                <div class="icon-list__item">
                    <a href="<?php echo $link_two['url']; ?>" target="<?php echo $link_two['target']; ?>">
                        <div class="icon-container">
                            <svg class="icon icon-gear" aria-hidden="true" role="img">
                                <use xlink:href="#icon-gear" x="0" y="0"></use>
                            </svg>
                        </div>
                        <span class="icon-list__title"><?php echo $link_two['title']; ?></span>
                    </a>
                </div>
            <?php endif; ?>

        </div>
    </div>

    <?php e11_content_and_dropdowns(array(), true, 'get_field', 'options', 'content_and_dropdowns_section_'); ?>


</main>

<?php get_footer(); ?>
