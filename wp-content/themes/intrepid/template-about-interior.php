<?php
/**
* Template Name: About Interior
*/
get_header();
the_post();
$page = get_the_ID();

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
            <?php if ($about_interior_hero_image ): ?>
                <figure class="primary-block__image">
                    <img src="<?php echo $about_interior_hero_image['url']; ?>" alt="<?php echo $$about_interior_hero_image['alt']; ?>" />
                </figure>
            <?php endif; ?>
            <div class="primary-block__content">
                <?php if ($about_interior_hero_title ): ?>
                <h2 class="primary-block__title"><?php echo $about_interior_hero_title; ?></h2>
                <?php endif; ?>

                <?php if ($about_interior_hero_description ): ?>
                    <div class="primary-block__description">
                        <?php echo $about_interior_hero_description; ?>
                    </div>
                <?php endif; ?>
                <?php if ($about_interior_hero_link ): ?>
                    <a href="<?php echo $about_interior_hero_link['url']; ?>" target="<?php echo $about_interior_hero_link['target']; ?>" data-fancybox="" class="btn btn--dark btn--large-mobile">Watch our brand video</a>
                <?php endif; ?>
            </div>

            <?php if ($about_interior_hero_leadoff ): ?>
                <div class="primary-block__sticky-box primary-block__sticky-box--dark">
                    <?php echo $about_interior_hero_leadoff; ?>
                </div>
            <?php endif; ?>
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
        <?php
            $content_section_1_title = get_field('about_interior_content_section_1_title');
            $content_section_1_desc = get_field('about_interior_content_section_1_description');
            $content_section_1_image_1 = get_field('about_interior_content_section_1_image_1');
            $content_section_1_image_2 = get_field('about_interior_content_section_1_image_2');
        ?>
        <div class="container">
            <?php if ( $content_section_1_title || $content_section_1_desc) : ?>
                <div class="media-content__item media-content__item--sticky-image">
                    <figure class="media-content__thumbnail">
                        <?php if ($content_section_1_image_1): ?>
                        <img src="<?php echo $content_section_1_image_1['url']; ?>" alt="<?php echo $content_section_1_image_1['alt']; ?>" />
                        <?php endif; ?>

                        <?php if ($content_section_1_image_2): ?>
                            <div class="thumbnail-sticky thumbnail-sticky--bottom-right" style="background-image:url('<?php echo $content_section_1_image_2['url']; ?>');">
                        <?php endif; ?>
                        </div>
                    </figure>
                    <div class="media-content__details">
                        <?php if ($content_section_1_title): ?>
                            <h2 class="media-content__title"><?php echo $content_section_1_title; ?></h2>
                        <?php endif; ?>

                        <?php if ($content_section_1_desc): ?>
                            <div class="media-content__description">
                                <p><?php echo $content_section_1_desc ; ?></p>
                            </div>
                        <?php endif; ?>
                    </div>
                </div>
            <?php endif; ?>


            <?php
                $content_section_2_title = get_field('about_interior_content_section_2_title');
                $content_section_2_desc = get_field('about_interior_content_section_2_description');
                $content_section_2_image_1 = get_field('about_interior_content_section_2_image_1');
                $content_section_2_image_2 = get_field('about_interior_content_section_2_image_2');
            ?>

            <?php if ($content_section_2_title || $content_section_2_desc ) : ?>

                <div class="media-content__item media-content__item--sticky-image">
                    <figure class="media-content__thumbnail">
                        <?php if ($content_section_2_image_1) :?>
                            <img src="<?php echo $content_section_2_image_1['url']; ?>" alt="<?php echo $content_section_2_image_1['alt']; ?>" />
                        <?php endif; ?>

                        <?php if ($content_section_2_image_2): ?>
                            <div class="thumbnail-sticky thumbnail-sticky--top-right" style="background-image:url('<?php echo $content_section_2_image_2['url']; ?>');">
                        <?php endif; ?>

                        </div>
                    </figure>

                    <div class="media-content__details">
                        <?php if ($content_section_2_title): ?>
                            <h2 class="media-content__title"><?php echo $content_section_2_title;?> </h2>
                        <?php endif; ?>

                        <?php if ($content_section_2_desc): ?>
                            <p><?php echo $content_section_2_desc; ?></p>
                        <?php endif; ?>

                    </div>
                </div>

            <?php endif; ?>

            <?php
                $content_section_3_title = get_field('about_interior_content_section_3_title');
                $content_section_3_desc = get_field('about_interior_content_section_3_description');
                $content_section_3_image_1 = get_field('about_interior_content_section_3_image_1');

            ?>

            <?php if($content_section_3_title || $content_section_3_desc) : ?>
                <div class="media-content__item">
                    <?php if ($content_section_3_image_1) : ?>
                        <figure class="media-content__thumbnail">
                            <img src="<?php echo $content_section_3_image_1['url'] ;?>" alt="<?php echo $content_section_3_image_1['alt'] ;?>" />
                        </figure>
                    <?php endif; ?>

                    <div class="media-content__details">
                        <?php if ($content_section_3_title) : ?>
                            <h2 class="media-content__title"><?php echo $content_section_3_title; ?></h2>
                        <?php endif; ?>

                        <?php if ($content_section_3_desc) : ?>
                            <p><?php echo $content_section_3_desc; ?></p>
                        <?php endif; ?>
                    </div>
                </div>
            <?php endif; ?>

            <?php
                $content_section_4_title = get_field('about_interior_content_section_4_title');
                $content_section_4_desc = get_field('about_interior_content_section_4_description');
                $content_section_4_image_1 = get_field('about_interior_content_section_4_image_1');
                $content_section_4_link = get_field('about_interior_content_section_4_link');
            ?>

            <?php if ($content_section_4_title || $content_section_4_desc) : ?>
                <div class="media-content__item">
                    <?php if ($content_section_4_image_1) : ?>
                        <figure class="media-content__thumbnail">
                            <img src="<?php echo $content_section_4_image_1['url']; ?>" alt="<?php echo $content_section_4_image_1['alt']; ?>" />
                        </figure>
                    <?php endif; ?>

                    <div class="media-content__details">
                        <?php if ($content_section_4_title) : ?>
                            <h2 class="media-content__title"><?php echo $content_section_4_title; ?></h2>
                        <?php endif; ?>

                        <?php if ($content_section_4_desc) : ?>
                            <p><?php echo $content_section_4_desc; ?></p>
                        <?php endif; ?>

                        <?php if ($content_section_4_link) : ?>
                            <a href="<?php echo $content_section_4_link['url'] ?>" target="<?php echo $content_section_4_link['url'] ?>" class="btn btn--dark btn--large-mobile"><?php echo $content_section_4_link['title'] ?></a>
                        <?php endif; ?>
                    </div>
                </div>
            <?php endif; ?>

        </div>
    </section>

    <?php e11_content_and_dropdowns(array(), true, 'get_field', $page, ''); ?>

</main>
<?php get_footer(); ?>
