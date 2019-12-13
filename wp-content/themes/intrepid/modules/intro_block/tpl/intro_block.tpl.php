<section class="intro-block">
    <div class="container">
        <?php if($data['content']) : ?>
            <h2 class="intro-block__title"><?php echo $data['content']; ?></h2>
        <?php endif; ?>

        <?php if($data['link']) : ?>
            <a class="icon-link" href="<?php echo $data['link']['url']; ?>" target="<?php echo $data['link']['target']; ?>">
            <?php echo $data['link']['title']; ?>
        </a>
        <?php endif; ?>


    </div>
</section>

