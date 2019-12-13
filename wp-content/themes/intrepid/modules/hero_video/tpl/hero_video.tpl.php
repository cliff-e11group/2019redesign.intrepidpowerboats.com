<section class="hero" style="background-image:url(<?php echo $data['placeholder']['sizes']['hero']; ?>">
    <div class="container">
        <?php if ($data['video'] || $data['title']) : ?>
            <div class="hero__content">
                <?php if ($data['title']) : ?>
                    <!-- <h1 class="hero__title"><strong>The Intrepid</strong> Difference</h1> -->
                    <h1 class="hero__title"><?php echo $data['title']; ?></h1>

                <?php endif; ?>
                <?php if ($data['video']) : ?>
                    <a data-fancybox href="<?php echo $data['video']; ?>" class="play-btn">Play Video</a>
                <?php endif; ?>
            </div>
        <?php endif; ?>
    </div>
</section>
