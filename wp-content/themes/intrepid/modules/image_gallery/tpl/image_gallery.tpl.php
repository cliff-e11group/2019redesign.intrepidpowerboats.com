<div class="slider-wrap">
    <div class="image-slider">
        <?php foreach($data['gallery'] as $image) : ?>
            <img src="<?php echo $image['image']['sizes']['image-gallery']; ?>" alt="<?php echo $image['image']['alt']; ?>" />
        <?php endforeach; ?>
        <div>

    </div>
    <?php if ($data['caption']) : ?>
    <span class="slider-caption"><?php echo $data['caption']; ?></span>
<?php endif; ?>
</div>
