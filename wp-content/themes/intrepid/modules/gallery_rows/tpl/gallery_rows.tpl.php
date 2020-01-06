<div class="gallery-grid">
    <div class="container">
        <?php foreach($data['gallery_rows'] as $gallery_row): ?>

            <!-- two equal images  -->
            <?php if( $gallery_row['row_type'] ===  'two_images_equal') :
            ?>
                <?php foreach( $gallery_row['two_equal_images'] as $image) : ?>
                    <div class="gallery-grid__item gallery-grid__item--half">
                        <a href="<?php echo $image['sizes']['hero']; ?>" data-fancybox="gallery" style="background-image: url(<?php echo $image['sizes']['gallery-half']; ?>);">
                            <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" class="accessible-text">
                        </a>
                    </div>
                <?php endforeach; ?>

            <?php endif; ?>

            <!-- video  -->
            <?php if( $gallery_row['row_type'] ===  'video') :
                $video_link = $gallery_row['video']['video_link'];
                $placeholder = $gallery_row['video']['placeholder_image'];
            ?>

                <div class="gallery-grid__item gallery-grid__item--full gallery-grid__item--video">
                    <a data-fancybox="gallery" href="<?php echo $video_link; ?>" style="background-image: url(<?php echo $placeholder['url']; ?>);">
                        <span class="play-btn">Play Video</span>
                        <img src="<?php echo $placeholder['url']; ?>" alt="<?php echo $placeholder['alt']; ?>" class="accessible-text">
                        <div class="overlay-content">
                            <img src="<?php echo IMAGES; ?>/amazing-with-text.png" alt="Proof that amazing takes time">
                        </div>
                    </a>
                </div>
            <?php endif; ?>

            <!-- three images  -->
            <?php if( $gallery_row['row_type'] ===  'three_images_equal') : ?>
                <?php foreach($gallery_row['three_equal_images'] as $image): ?>

                    <div class="gallery-grid__item gallery-grid__item--one-third">
                        <a href="<?php echo $image['sizes']['hero']; ?>" data-fancybox="gallery" style="background-image: url(<?php echo $image['sizes']['gallery-one-third']; ?>);">
                            <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" class="accessible-text">
                        </a>
                    </div>
                <?php endforeach; ?>
            <?php endif; ?>

            <!-- large left  -->

            <?php if( $gallery_row['row_type'] ===  'two_images__larger_left') : ?>
                <?php
                    $left_image = $gallery_row['two_images_large_left']['left_image'];
                    $right_image = $gallery_row['two_images_large_left']['right_image'];
                ?>

                <div class="gallery-grid__item gallery-grid__item--two-third">
                    <a href="<?php echo $left_image['sizes']['hero']; ?>" data-fancybox="gallery" style="background-image: url(<?php echo $image['sizes']['gallery-two-third']; ?>);">
                        <img src="<?php echo $left_image['url']; ?>" alt="<?php echo $left_image['alt']; ?>" class="accessible-text">
                    </a>
                </div>

                <div class="gallery-grid__item gallery-grid__item--one-third">
                    <a href="<?php echo $right_image['sizes']['hero']; ?>" data-fancybox="gallery" style="background-image: url(<?php echo $image['sizes']['gallery-one-third']; ?>);">
                        <img src="<?php echo $right_image['url']; ?>" alt="<?php echo $right_image['alt']; ?>" class="accessible-text">
                    </a>
                </div>


            <?php endif; ?>

            <?php if( $gallery_row['row_type'] ===  'two_images__larger_right') : ?>
                <?php
                    $left_image = $gallery_row['two_images_large_right']['left_image'];
                    $right_image = $gallery_row['two_images_large_right']['right_image'];
                ?>

                <div class="gallery-grid__item gallery-grid__item--one-third">
                    <a href="<?php echo $left_image['sizes']['hero']; ?>" data-fancybox="gallery" style="background-image: url(<?php echo $image['sizes']['gallery-one-third']; ?>);">
                        <img src="<?php echo $left_image['url']; ?>" alt="<?php echo $left_image['alt']; ?>" class="accessible-text">
                    </a>
                </div>

                <div class="gallery-grid__item gallery-grid__item--two-third">
                    <a href="<?php echo $right_image['sizes']['hero']; ?>" data-fancybox="gallery" style="background-image: url(<?php echo $image['sizes']['gallery-two-third']; ?>);">
                        <img src="<?php echo $right_image['url']; ?>" alt="<?php echo $right_image['alt']; ?>" class="accessible-text">
                    </a>
                </div>
            <?php endif; ?>

        <?php endforeach; ?>

        <div class="btn-wrap">
            <a href="#" class="scroll-to-top"><svg class="icon icon-arrow-up" aria-hidden="true" role="img">
                <use xlink:href="#icon-arrow-up" x="0" y="0"></use>
            </svg>Back to Top</a>
            <a href="#" class="btn btn--dark">Contact a sales representative</a>
        </div>
    </div>
</div>
