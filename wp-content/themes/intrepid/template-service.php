<?php
/**
* Template Name: Service
*/
get_header();
the_post();
$page = get_the_id();

$title = get_field('page_title');
$tagline = get_field('page_tagline');
?>
<?php get_header(); ?>
<main class="main">
    <?php e11_page_details(array(), true, 'get_field', $page, ''); ?>

   <?php e11_hero(array(), true, 'get_field', $page, ''); ?>

   <?php e11_content_and_dropdowns(array(), true, 'get_field', $page, ''); ?>

   <?php e11_locations_and_customer_service(array(), true, 'get_field', $page, ''); ?>


</main>
<?php get_footer(); ?>
