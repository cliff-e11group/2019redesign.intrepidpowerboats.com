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

    <?php e11_hero_image_columns(array(), true, 'get_field', $page, ''); ?>

</main>
<?php get_footer(); ?>
