<div class="post-author">
    <?php if($data['image']) : ?>
        <figure class="post-author__photo">
            <img src="<?php echo $data['image']['url']; ?>" alt="<?php echo $data['image']['alt']; ?>" />
        </figure>
    <?php endif; ?>

    <?php if($data['name']) : ?>
        <span class="post-author__name">
            <?php echo $data['name'] ; ?>
        </span>
    <?php endif; ?>
</div>