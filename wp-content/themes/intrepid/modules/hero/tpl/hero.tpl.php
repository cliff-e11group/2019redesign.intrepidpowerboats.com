<div class="model-intro">
    <?php $bg_image = $data['image']; ?>
    <div class="model-intro__thumbnail" style="background-image:url(<?php echo $bg_image ? $bg_image : ''; ?>);"></div>
    <div class="container">
        <?php if ($data['title'] || $data['content']) : ?>
            <div class="model-intro__content" style="right: 130px;">
                <p>
                    <?php if ($data['title']) : ?>
                        <strong><?php echo $data['title']; ?></strong><br>
                    <?php endif; ?>
                    <?php if ($data['content']) : ?>
                        <?php echo $data['content']; ?>
                    <?php endif; ?>
                </p>
            </div>
        <?php endif; ?>
    </div>
</div>