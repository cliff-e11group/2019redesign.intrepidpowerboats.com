<?php
/**
* Template Name: Contact
*/
get_header();
the_post();
$page = get_the_ID();
?>
<?php get_header(); ?>
<main class="main">
    <?php e11_page_details(array(), true, 'get_field', $page, ''); ?>

    <?php e11_leadoff_and_forms(array(), true, 'get_field', $page, ''); ?>

    <?php e11_locations(array(), true, 'get_field', $page, ''); ?>

    <?php e11_teams(array(), true, 'get_field', $page, ''); ?>

</main>
<?php get_footer(); ?>
