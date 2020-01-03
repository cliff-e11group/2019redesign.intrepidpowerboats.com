<?php
get_header();
the_post();
$page_title = get_the_title();

?>
<main class="main page-news-single">
    <section class="hero hero--inner hero--news-single" style="background-image:url(<?php echo get_the_post_thumbnail_url(); ?>);">
        <img class="hero__mobile-image" src="<?php echo get_the_post_thumbnail_url(); ?>" alt="news_hero" />
        <a href="<?php echo site_url('news'); ?>" class="arrow-link"><svg class="icon icon-arrow-up" aria-hidden="true" role="img"><use xlink:href="#icon-arrow-up" x="0" y="0"></use></svg>Back to main page</a>
    </section>
    <section class="layout layout--reverse">
        <div class="container">
            <div class="sidebar layout__one-third">
                <div class="article-block">

                    <?php
                        $current_cats = get_the_category();

                        $cat_ids = array();

                        foreach ($current_cats as $current_cat){
                            array_push($cat_ids, $current_cat->term_id);
                        }

                        $related_args = array(
                            'posts_per_page' => 4,
                            'post_type' => 'post',
                            'order'=>'DESC',
                            'category__in' => $cat_ids,

                            );

                        $related_posts = new WP_Query($related_args);
                    ?>

                    <?php if ($related_posts->have_posts()): ?>
                        <h2 class="section-title section-title--gray">Related Articles</h2>
                        <ul class="article-list">
                            <?php while ($related_posts->have_posts()): $related_posts->the_post(); ?>
                            <li class="article-list__item">
                                <?php $link = get_the_permalink(); ?>
                                <h3 class="article-list__title"><a href="<?php echo $link; ?>"><?php echo get_the_title(); ?></a></h3>
                                <p class="article-list__short-desc">
                                    <?php echo get_the_excerpt(); ?>
                                <a href="<?php echo $link; ?>" class="link">Read More</a>
                            </li>
                            <?php endwhile; ?>
                        </ul>

                    <?php endif; wp_reset_query()?>

                </div>
            </div>

            <!-- MAIN POST CONTENT -->
            <div class="layout__two-third">
                <div class="page-header">
                    <h1 class="page-title"><?php echo $page_title; ?></h1>
                    <p class="post-date"><?php echo get_the_date(); ?></p>
                </div>
                <div class="newsletter-article">
                    <article class="newsletter-article__item entry-content">
                        <div class="post-author">
                            <?php $subtitle_image = get_field('news_subtitle_image'); ?>
                            <figure class="post-author__photo">
                                <img src="<?php echo $subtitle_image['url']; ?>" alt="<?php echo $subtitle_image['alt']; ?>" />
                            </figure>
                            <span class="post-author__name">
                                <?php echo get_field('news_subtitle'); ?>
                            </span>
                        </div>

                        <!-- START FLEX CONTENT -->

                        <?php include('modules/flex-content/flex-content.php') ?>

                    </article>

                </div>
                <div class="scroll-top">
                    <a href="#" class="scroll-to-top scroll-to-top--small"><svg class="icon icon-arrow-up" aria-hidden="true" role="img">
                        <use xlink:href="#icon-arrow-up" x="0" y="0"></use>
                    </svg>Back to Top</a>
                </div>
            </div>
        </div>
    </section>
    <div class="instagram-feed">
        <h2 class="instagram-feed__title"><span>Latest Updates on</span><a href="#" target="_blank">@intrepidpowerboats</a></h2>
        <div class="feed-carousel">
            <div class="feed-carousel__item"><img src="<?php echo STYLEDIR; ?>/uploads/instagram-image1.jpg" alt="instagram-image1"/> </div>
            <div class="feed-carousel__item"><img src="<?php echo STYLEDIR; ?>/uploads/instagram-image2.jpg" alt="instagram-image1"/> </div>
            <div class="feed-carousel__item"><img src="<?php echo STYLEDIR; ?>/uploads/instagram-image3.jpg" alt="instagram-image1"/> </div>
            <div class="feed-carousel__item"><img src="<?php echo STYLEDIR; ?>/uploads/instagram-image4.jpg" alt="instagram-image1"/> </div>
            <div class="feed-carousel__item"><img src="<?php echo STYLEDIR; ?>/uploads/instagram-image5.jpg" alt="instagram-image1"/> </div>
        </div>
    </div>
    <div class="column-content">
        <div class="container">
            <?php
                $cat_args = array('post');
                $cats = get_categories($cat_args);
            ?>
                <?php if (!empty($cats)) : ?>
            <div class="category-block category-block--large">
                <h4 class="widget-title">Categories<span class="icon-close icon-close--white"></span></h4>
                <ul class="category-list">
                    <?php foreach($cats as $cat) : ?>
                        <li class="category-list__item"><a href="<?php echo get_category_link( $cat->term_id ) ; ?>"><?php echo $cat->name ; ?></a></li>
                    <?php endforeach; ?>
                </ul>
            </div>
            <?php endif; ?>


            <div class="subscribe-block">
                <h2 class="subscribe-block__title">Stay Updated</h2>
                <span class="subscribe-block__description">Get all the latest updates from our team directly into your inbox.</span>
                <div class="gf_browser_chrome gform_wrapper">
                    <form method="post" action="#">
                        <div class="gform_body">
                            <ul class="gform_fields">
                                <li class="gfield">
                                    <label class="gfield_label">Email Address</label>
                                    <div class="ginput_container ginput_container_email">
                                        <input name="input_1" type="email" value="" class="medium" tabindex="7" placeholder="Email Address" aria-invalid="false">
                                    </div>
                                </li>
                                <li class="gfield gfield_html">
                                    <span class="form-note">*Submitting will automatically subscribe you to our email newsletters, updates, and more!</span>
                                </li>
                            </ul>
                        </div>
                        <div class="gform_footer top_label">
                            <input type="submit" class="gform_button button" value="Submit" tabindex="8">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</main>
<?php get_footer();
