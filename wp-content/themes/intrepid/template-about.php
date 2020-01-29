<?php
/**
* Template Name: About
*/
get_header();
the_post();
$page = get_the_id();
?>
<?php get_header(); ?>
<main class="main">
    <h1 class="accessible-text"><?php the_title(); ?></h1>
    <?php e11_hero_image_columns(array(), true, 'get_field', $page, ''); ?>

</main>
<?php get_footer(); ?>
