<?php
get_header();
the_post();
global $post;
if ($post->post_parent > 0) {
    $parents = get_post_ancestors($post->ID);
    $parent = array_pop($parents);
} else {
    $parent = $post->post_parent;
}
?>
<main class="main page-default">
    <?php if(is_bbpress()) : ?>
    <div class="container">
        <div class=""><?php the_content(); ?></div>
    </div>
    <?php else : ?>
    <div class="container">
        <div class="entry-content"><?php the_content(); ?></div>
    </div>
    <?php endif; ?>
    <?php if (!post_password_required(get_the_ID()) && !post_password_required($parent)) : ?>
    <?php include('modules/flex-content/flex-content.php') ?>
    <?php endif; ?>
</main>
<?php get_footer(); ?>
