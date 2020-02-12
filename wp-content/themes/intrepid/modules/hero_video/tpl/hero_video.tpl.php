<section class="hero">
    <div class="heroVideo__container">
        <?php if ($data['placeholder_video']) : ?>
            <div id="heroVideo"></div>
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

<script type="text/javascript">
    if (!window['YT']) {var YT = {loading: 0,loaded: 0};}if (!window['YTConfig']) {var YTConfig = {'host': 'http://www.youtube.com'};}if (!YT.loading) {YT.loading = 1;(function(){var l = [];YT.ready = function(f) {if (YT.loaded) {f();} else {l.push(f);}};window.onYTReady = function() {YT.loaded = 1;for (var i = 0; i < l.length; i++) {try {l[i]();} catch (e) {}}};YT.setConfig = function(c) {for (var k in c) {if (c.hasOwnProperty(k)) {YTConfig[k] = c[k];}}};var a = document.createElement('script');a.type = 'text/javascript';a.id = 'www-widgetapi-script';a.src = 'https://s.ytimg.com/yts/jsbin/www-widgetapi-vflJZLJqh/www-widgetapi.js';a.async = true;var c = document.currentScript;if (c) {var n = c.nonce || c.getAttribute('nonce');if (n) {a.setAttribute('nonce', n);}}var b = document.getElementsByTagName('script')[0];b.parentNode.insertBefore(a, b);})();}
</script>


<?php

if (!empty($data['placeholder_video'])) :
    $video_id = str_replace('https://www.youtube/embed/', '', $data['placeholder_video']);
    wp_localize_script('scripts', 'video_id',  $video_id);
endif;
