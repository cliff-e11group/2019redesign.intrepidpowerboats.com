<div class="gallery-grid">
    <div class="container">
    <?php foreach($data['gallery_rows'] as $gallery_row): ?>

        <!-- two equal images  -->
        <?php if( $gallery_row['row_type'] ===  'two_images_equal') :
        ?>
            <?php foreach( $gallery_row['two_equal_images'] as $image) : ?>
                <div class="gallery-grid__item gallery-grid__item--half">
                    <a href="<?php echo $image['url']; ?>" data-fancybox="gallery">
                        <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
                    </a>
                </div>
            <?php endforeach; ?>

        <?php endif; ?>

        <!-- video  -->
        <?php if( $gallery_row['row_type'] ===  'video') :
            $video_link = $gallery_row['video']['video_link'];
            $placeholder = $gallery_row['video']['placeholder_image'];
            echo $video_link;
        ?>

            <div class="gallery-grid__item gallery-grid__item--full gallery-grid__item--video">
                <?php if ($placeholder) : ?>
                    <img src="<?php echo $placeholder['url']; ?>" alt="<?php echo $placeholder['alt']; ?>" />
                <?php endif; ?>
                <a data-fancybox="gallery" href="<?php echo $video_link; ?>" class="play-btn">Play Video</a>

                <div class="overlay-content">
                    <img src="<?php echo $placeholder['url']; ?>" alt="<?php echo $placeholder['alt']; ?>">
                </div>

            </div>
        <?php endif; ?>

        <!-- three images  -->
        <?php if( $gallery_row['row_type'] ===  'three_images_equal') : ?>
            <?php foreach($gallery_row['three_equal_images'] as $image): ?>

                <div class="gallery-grid__item gallery-grid__item--one-third">
                    <a href="<?php echo $image['url']; ?>" data-fancybox="gallery">
                        <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>" />
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
                <a href="<?php echo $left_image['url']; ?>" data-fancybox="gallery">
                    <img src="<?php echo $left_image['url']; ?>" alt="<?php echo $left_image['alt']; ?>" />
                </a>
            </div>

            <div class="gallery-grid__item gallery-grid__item--one-third">
                <a href="<?php echo $right_image['url']; ?>" data-fancybox="gallery">
                    <img src="<?php echo $right_image['url']; ?>" alt="<?php echo $right_image['alt']; ?>" />
                </a>
            </div>


        <?php endif; ?>

        <?php if( $gallery_row['row_type'] ===  'two_images__larger_right') : ?>
            <?php
                $left_image = $gallery_row['two_images_large_right']['left_image'];
                $right_image = $gallery_row['two_images_large_right']['right_image'];
            ?>

            <div class="gallery-grid__item gallery-grid__item--one-third">
                <a href="<?php echo $left_image['url']; ?>" data-fancybox="gallery">
                    <img src="<?php echo $left_image['url']; ?>" alt="<?php echo $left_image['alt']; ?>" />
                </a>
            </div>

            <div class="gallery-grid__item gallery-grid__item--two-third">
                <a href="<?php echo $right_image['url']; ?>" data-fancybox="gallery">
                    <img src="<?php echo $right_image['url']; ?>" alt="<?php echo $right_image['alt']; ?>" />
                </a>
            </div>
        <?php endif; ?>


    <?php endforeach; ?>

</div>