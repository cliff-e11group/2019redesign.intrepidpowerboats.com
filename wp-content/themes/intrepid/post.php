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