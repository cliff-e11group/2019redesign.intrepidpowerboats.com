<section class="hero hero--inner" style="background-image:url(<?php echo STYLEDIR; ?>/uploads/our-models-bg-image.jpg);">
    <div class="container">
        <div class="hero__content">
            <h1 class="hero__title"><?php echo $data['title'] ? $data['title'] : get_the_title(); ?></h1>
            <div class="hero__description">
                <?php if ($data['tagline']): ?>
                    <p><?php echo $data['tagline']; ?></p>
                <?php endif; ?>
            </div>
        </div>
    </div>
</section>