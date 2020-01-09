<section class="hero">
    <div class="heroVideo__container">
        <div id="heroVideo"></div>
    </div>
    <div class="container">
        <?php if ($data['video'] || $data['title']) : ?>
            <div class="hero__content">
                <?php if ($data['title']) : ?>
                    <h1 class="hero__title"><?php echo $data['title']; ?></h1>

                <?php endif; ?>
                <?php if ($data['video']) : ?>
                    <a href="<?php echo $data['video']; ?>" data-fancybox  class="play-btn"><span>Play Video</span></a>
                <?php endif; ?>
            </div>
        <?php endif; ?>
    </div>
</section>

<script src="https://player.vimeo.com/api/player.js"></script>
<script>
    var options = {
        url: "https://vimeo.com/383542432",
        background: true
    };

    var videoPlayer = new Vimeo.Player('heroVideo', options);
</script>
