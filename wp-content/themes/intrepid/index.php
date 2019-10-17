<?php get_header(); ?>
<main class="page__blog">
    <div class="container">
        <?php if ( have_posts() ) : ?>

            <?php while ( have_posts() ) : the_post(); ?>

                <?php the_title(); ?>
                <?php the_content(); ?>

        <?php endwhile; ?>

        <?php  else : ?>

        <?php echo 'Not Found.'; ?>

        <?php endif; ?>
    </div>
</main>
<?php get_footer(); ?>
