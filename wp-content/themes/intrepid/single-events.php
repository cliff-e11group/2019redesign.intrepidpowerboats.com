<?php
get_header();
the_post();
$page = get_the_ID();

?>
<main class="main page-events-single">


    <?php
    $content_blocks = get_field('content_blocks');
    ?>

    <?php if ($content_blocks) : ?>
        <?php foreach($content_blocks as $content) : ?>

            <section class="content-block">
                <div class="container">
                    <?php if ($content['title']) : ?>
                        <h2 class="content-block__title"><?php echo $content['title']; ?>
                        </h2>
                    <?php endif; ?>

                    <?php if ($content['content']) : ?>
                        <div class="sub-container">
                            <?php echo $content['content']; ?>
                        </div>
                    <?php endif; ?>

                </div>
            </section>

        <?php endforeach; ?>
    <?php endif; ?>


</main>
<?php get_footer();
