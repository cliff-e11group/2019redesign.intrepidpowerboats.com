<div class="slider-wrap">
    <div class="image-slider">
        <?php foreach($data['gallery'] as $image) : ?>
            <img src="<?php echo $image['sizes']['image-gallery']; ?>" alt="<?php echo $image['alt']; ?>">
        <?php endforeach; ?>
    </div>
</div>
