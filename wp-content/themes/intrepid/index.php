<?php
    get_header();
    global $paged;
?>
<main class="main page-news-archive">

    <?php
        $heroPostID = array();

        $featured_args = array(
            'posts_per_page' => 1,
            'post_type' => 'post',
            'order'=>'DESC',
            );
        $featured_news_query = new WP_Query($featured_args);
        ?>

        <?php if ($featured_news_query->have_posts()): ?>
            <?php while ($featured_news_query->have_posts()): $featured_news_query->the_post();
            $heroPostID[] = $post->ID; ?>
                <section class="hero hero--inner hero--inner-large" style="background-image:url(<?php echo get_the_post_thumbnail_url(); ?>);">
                    <div class="container">
                        <img class="hero__mobile-image" src="<?php echo get_the_post_thumbnail_url(); ?>" alt="news_hero" />
                        <?php
                            $subtitle = get_field('news_subtitle');
                            $link = get_the_permalink();
                        ?>
                        <div class="hero-post">
                            <h1 class="hero-post__title">
                                <a href="<?php echo $link; ?>"><?php echo get_the_title(); ?></a>
                            </h1>

                            <?php if ($subtitle) : ?>
                                <span class="hero-post__meta"><?php echo $subtitle; ?></span>
                            <?php endif; ?>

                            <div class="hero-post__description">
                                <?php echo get_the_excerpt(); ?>
                            </div>
                            <a href="<?php echo $link; ?>" class="btn">View Article</a>
                        </div>
                    </div>
                </section>
            <?php endwhile; ?>

        <?php endif; wp_reset_query()?>


    <section class="layout">
        <div class="container">
            <div class="sidebar layout__one-third">
                <div class="instagram-block">
                    <!-- <figure class="instagram-block__thumbnail">
                        <a href="#" target="_blank"><img src="<?php// echo STYLEDIR; ?>/uploads/instagram-img.jpg" alt="instagram-img" /></a>
                        <a class="instagram-block__icon" href="#" target="_blank">
                            <svg class="icon icon-instagram" aria-hidden="true" role="img">
                                <use xlink:href="#icon-instagram" x="0" y="0"></use>
                            </svg>
                        </a>
                    </figure> -->
                    <?php echo do_shortcode('[instagram-feed type=user layout=carousel imagepadding=0 num=1 nummobile=1 cols=1 colsmobile=1 carouselrows=1 carouselautoplay=true carouseltime=3000 lightboxcomments=true showcaption=false showlikes=false showfollow=false width=100 widthunit=% autoscroll=true]'); ?>
                    <?php
                    $insta = get_field('instagram_link', 'option');
                    ?>
                    <?php if ($insta) : ?>
                        <a class="instagram-block__link" href="<?php echo $insta; ?>" target="_blank">@intrepidpowerboats</a>
                    <?php endif; ?>
                </div>

                <!-- SIDEBAR CATS -->
                <?php
                    $cat_args = array(
                        'type' => 'post',
                        'exclude' => array('1'),
                    );
                    $cats = get_categories($cat_args);
                ?>
                <?php if (!empty($cats)) : ?>
                    <div class="category-block">
                        <h4 class="widget-title">Categories<span class="icon-close icon-close--white"></span></h4>
                        <ul class="category-list">
                        <?php foreach($cats as $cat) : ?>
                            <li class="category-list__item"><a href="<?php echo get_category_link( $cat->term_id ) ; ?> "><?php echo $cat->name ; ?> </a></li>
                        <?php endforeach; ?>
                        </ul>
                    </div>
                <?php endif; ?>

                <div class="social-block social-block--dark">
                    <h4 class="widget-title">Connect</h4>
                    <div class="social-links">
                        <?php
                            $facebook = get_field('facebook_link', 'option');
                            $twitter = get_field('twitter_link', 'option');
                            $youtube = get_field('youtube_link', 'option');
                        ?>
                        <?php if ($facebook) : ?>
                        <a href="<?php echo $facebook; ?>" target="_blank">
                            <svg class="icon icon-facebook" aria-hidden="true" role="img">
                                <use xlink:href="#icon-facebook" x="0" y="0"></use>
                            </svg>
                        </a>
                        <?php endif; ?>

                        <?php if ($insta) : ?>
                        <a href="<?php echo $insta; ?>" target="_blank">
                            <svg class="icon icon-instagram" aria-hidden="true" role="img">
                                <use xlink:href="#icon-instagram" x="0" y="0"></use>
                            </svg>
                        </a>
                        <?php endif; ?>

                        <?php if ($youtube) : ?>
                        <a href="<?php echo $youtube; ?>" target="_blank">
                            <svg class="icon icon-youtube" aria-hidden="true" role="img">
                                <use xlink:href="#icon-youtube" x="0" y="0"></use>
                            </svg>
                        </a>
                        <?php endif; ?>

                        <?php if ($twitter) : ?>
                        <a href="<?php echo $twitter; ?>" target="_blank">
                            <svg class="icon icon-twitter" aria-hidden="true" role="img">
                                <use xlink:href="#icon-twitter" x="0" y="0"></use>
                            </svg>
                        </a>
                        <?php endif; ?>
                    </div>
                </div>
            </div>

        <?php
        $category_id = array();
        if(is_category()) {
            $categories = get_the_category();
            $category_id = array($categories[0]->cat_ID);
        }
            $older_args = array(
                'posts_per_page'	=> 4,
                'post_type'		=> 'post',
                'post_status'	=> 'publish',
                'post__not_in' 	=> $heroPostID,
                'category__in' 	=> $category_id,
            );

            $older_posts = new WP_Query($older_args);
            ?>

            <?php if ($older_posts->have_posts()): ?>
                <div class="post-list layout__two-third">
                    <h2 class="section-title section-title--gray">Latest News</h2>
                    <div class="post-list__wrap">
                    <?php while ($older_posts->have_posts()): $older_posts->the_post(); ?>

                    <?php
                        $link = get_the_permalink();
                        $subtitle = get_field('subtitle');
                    ?>

                    <article class="post">
                        <figure class="post__image">
                            <a href="<?php echo $link; ?>">
                                <?php echo get_the_post_thumbnail('', 'featured-thumb'); ?>
                            </a>
                        </figure>
                        <div class="post__content">
                            <h3 class="post__title">
                                <a href="<?php echo $link; ?>"><?php echo get_the_title(); ?></a>
                            </h3>
                            <span class="post__meta"><?php echo $subtitle; ?></span>
                            <div class="post__description">
                                <?php echo get_the_excerpt(); ?>
                            </div>
                            <div class="btn-holder">
                                <a href="<?php echo $link; ?>" class="btn btn--dark btn--large-mobile">Read More</a>
                            </div>
                        </div>
                    </article>

                    <?php endwhile; ?>

                </div>
                <?php endif; ?>
            <?php wp_reset_query(); ?>
            <?php
            // global $wp_query;
            if (  $older_posts->max_num_pages > 1 ) : ?>
                <div class="load-more" >
                    <button  class="btn btn--fullwidth btn--outline btn--outline-dark btn--large-mobile" data-class="load-more">Load More</button>
                    </div>
                </div>
            <?php endif; ?>

            </div>

        </div>
    </section>
</main>
<?php get_footer(); ?>
