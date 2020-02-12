<section class="hero">
    <div class="heroVideo__container">
        <?php if ($data['placeholder_video']) : ?>
            <div id="heroVideo">
                <iframe src="<?php echo $data['placeholder_video'];?>?autoplay=1&controls=0&rel=0&loop=1&playlist=EgdxLgHiRGo&showinfo=0&modestbranding=1&mute=1" frameborder="0" allow="autoplay; encrypted-media; gyroscope;" ></iframe>
            </div>
        <?php endif; ?>
    </div>
    <div class="hero__placeholder" <?php echo $data['placeholder_image'] ? 'style="background-image:url(' . $data['placeholder_image']['url'].')"' : ''; ?>>
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



<!-- <script src="https://player.vimeo.com/api/player.js"></script>
<script>
    var options = {
        url: "https://vimeo.com/383542432",
        background: true
    };

    var videoPlayer = new Vimeo.Player('heroVideo', options);
</script> -->
