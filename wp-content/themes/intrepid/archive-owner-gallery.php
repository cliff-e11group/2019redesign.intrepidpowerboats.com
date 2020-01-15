<?php
get_header();
the_post();

//allow for deletion of images as well

$logged_in = is_user_logged_in();

if (!$logged_in){
    wp_redirect( site_url() );
    exit;
}

$user_id = get_current_user_id();
$user_type = bbp_get_user_display_role( $user_id );
$accepted_users = array('keymaster', 'participant');

if( !in_array( strtolower($user_type), $accepted_users) ){
    wp_redirect( site_url() );
    exit;
}


$placeholder = get_field('video_placeholder_image', 'option');

?>

<main class="main">
    <section class="hero hero--inner" style="background-image:url(<?php echo STYLEDIR; ?>/uploads/our-models-bg-image.jpg);">
        <div class="container">
            <div class="hero__content">
                <h1 class="hero__title">Owner's Portal</h1>
                <div class="hero__description">
                    <p>Gallery</p>
                </div>
            </div>
        </div>
    </section>
    <section class="owners-portal">
        <nav class="nav-block">
            <div class="nav-block__toggle active"><span class="nav-block__active-tab">Gallery</span><span class="icon-close icon-close--white"></span></div>
            <div class="nav-block__inner">
                <div class="container">
                    <ul class="model-nav resp-tabs-list hor_1">
                        <li class="model-nav__item">
                            <a href="<?php echo site_url('forums'); ?>">Forum</a>
                        </li>
                        <li class="model-nav__item resp-tab-active">
                            <a href="<?php echo site_url('owner-gallery'); ?>">Gallery</a>
                        </li>
                    </ul>
                </div>
                <a href="#owners-portal__upload" data-fancybox="" class="sticky-btn">Upload Photo/Video<svg class="icon icon-arrow-up" aria-hidden="true" role="img">
                    <use xlink:href="#icon-arrow-up" x="0" y="0"></use>
                </svg></a>
            </div>
        </nav>

            <div id="childTab">
            <!-- <div class="portal-gallery__nav">
                <a href="#my-gallery" class="portal-gallery__nav-link portal-gallery__nav-link--active">My Gallery</a>
                <a href="#community-gallery" class="portal-gallery__nav-link">Community Gallery</a>
            </div> -->
                <ul class="resp-tabs-list hor_child_1">
                    <li> My Gallery </li>
                    <li> Community Gallery </li>
                </ul>

                <div class="resp-tabs-container hor_child_1">
                    <div class="container">

                    <div class="portal-gallery">
                        <?php
                        $args = array(
                            'post_type' => 'owner-gallery',
                            'post_status' => 'publish',
                            'posts_per_page' => -1,
                            'meta_query'    => array(
                                'relation' => 'AND',
                                array(
                                    'key' => 'owner',
                                    'value' => $user_id,
                                ),
                                array(
                                    'key' => 'visibility',
                                    'value' => 'private',
                                ),
                            )
                        );
                        $loop = new WP_Query($args);
                        ?>

                        <?php if ($loop->have_posts()): ?>
                            <?php while ($loop->have_posts()): $loop->the_post(); ?>
                                <?php
                                $post_id = get_the_ID();

                                $image_id = get_post_meta($post_id, 'image_id', true);
                                $image_url = wp_get_attachment_url($image_id);

                                $video_id = get_post_meta($post_id, 'video_id', true);
                                $video_url = wp_get_attachment_url($video_id);

                                ?>

                                    <a href="<?php echo $video_url ? $video_url : $image_url; ?>" data-fancybox="gallery" style="background-image: url(<?php echo $image_url ? $image_url : $placeholder['url']; ?>);" class="portal-gallery__item">
                                    <?php if($video_url) : ?>
                                        <span class="portal-gallery__play-btn"></span>
                                    <?php endif; ?></a>

                            <?php endwhile; ?>

                            <div class="portal-gallery__prompt-wrap">
                                <a href="#owners-portal__upload" class="btn btn--dark" data-fancybox>UPLOAD PHOTO/VIDEO</a>
                            </div>

                        <?php else : ?>
                            <div class="portal-gallery__prompt-wrap">
                                <p class="portal-gallery__upload-prompt">SHARE YOUR DREAMS AND ADVENTURES WITH THE INTREPID COMMUNITY</p>
                                <a href="#owners-portal__upload" class="btn btn--dark" data-fancybox>UPLOAD PHOTO/VIDEO</a>
                            </div>
                        <?php endif; wp_reset_query()?>
                        </div>
                    </div>


                    <div class="container">
                        <div class="portal-gallery community-gallery">
                        <?php
                        $comm_args = array(
                            'post_type' => 'owner-gallery',
                            'post_status' => 'publish',
                            'posts_per_page' => -1,
                            'meta_query'    => array(
                                array(
                                    'key' => 'visibility',
                                    'value' => 'public',
                                ),
                            )
                        );
                        $comm_loop = new WP_Query($comm_args);
                        ?>

                        <?php if ($comm_loop->have_posts()): ?>
                            <?php while ($comm_loop->have_posts()): $comm_loop->the_post(); ?>
                                <?php
                                $post_id = get_the_ID();

                                $image_id = get_post_meta($post_id, 'image_id', true);
                                $image_url = wp_get_attachment_url($image_id);

                                $video_id = get_post_meta($post_id, 'video_id', true);
                                $video_url = wp_get_attachment_url($video_id);
                                ?>

                                    <a
                                        href="<?php echo $video_url ? $video_url : $image_url; ?>"
                                        data-fancybox="gallery"
                                        style="background-image: url(<?php echo $image_url ? $image_url : $placeholder['url']; ?>);"
                                        class="portal-gallery__item">
                                        <?php if($video_url) : ?>
                                            <span class="portal-gallery__play-btn"></span>
                                        <?php endif; ?>
                                    </a>

                            <?php endwhile; ?>

                                <div class="portal-gallery__prompt-wrap">
                                    <a href="#owners-portal__upload" class="btn btn--dark" data-fancybox>UPLOAD PHOTO/VIDEO</a>
                                </div>

                            <?php else : ?>
                                <div class="portal-gallery__prompt-wrap">
                                    <p class="portal-gallery__upload-prompt">SHARE YOUR DREAMS AND ADVENTURES WITH THE INTREPID COMMUNITY</p>
                                    <a href="#owners-portal__upload" class="btn btn--dark" data-fancybox>UPLOAD PHOTO/VIDEO</a>
                                </div>
                            <?php endif; ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="owners-portal__upload" id="owners-portal__upload" style="display: none;">
            <div class="container">
                <div class="owner-portal__form-wrap">
                    <form action="<?php echo esc_url( admin_url('admin-post.php') ); ?>" class="owner-portal__form" method="post" id="owner-gallery-video" enctype="multipart/form-data">
                        <!-- action  -->
                        <input type="hidden" name="action" value="owner_gallery_upload_action">
                        <input type="hidden" name="user_id" value="<?php echo $user_id; ?>">

                        <!-- nonce -->
                        <input type="hidden" name="owner_gallery_upload_nonce" value="<?php echo wp_create_nonce('owner-gallery-upload-nonce'); ?>"/>

                        <!-- image file  -->
                        <div class="owners-portal__form-input owners-portal__input-file">
                            <label for="owner_gallery_upload_image">Upload a photo to your gallery</label>
                            <input type="file" size="60" name="owner_gallery_upload_image" id="owner_gallery_upload_image" required>
                        </div>

                        <div class="owners-portal__form-input owners-portal__input-radio">
                            <!-- private or public  -->
                            <div class="owners-portal__radio">
                                <label for="public">Share this photo with the community</label>
                                <input type="radio" name="visibility_level" id="public" value="public" required>
                            </div>

                            <div class="owners-portal__radio">
                                <label for="private">Keep this photo private</label>
                                <input type="radio" name="visibility_level" value="private" id="private">
                            </div>
                        </div>

                        <div class="owners-portal__form-input">
                            <label for="owner_gallery_upload_caption"><span class="accessible-text">Add a comment about this video</span></label>
                            <textarea name="owner_gallery_upload_caption" id="owner_gallery_upload_caption" cols="30" rows="10" placeholder="Add a comment about this photo"></textarea>
                        </div>

                        <!-- submit  -->
                        <input type="submit" id="owner_gallery_upload_image_submit" name="owner_gallery_upload_image_submit" class="btn owners-portal__form-button" value="Upload Image">
                    </form>
                </div>


                <!-- video form  -->
                <div class="owner-portal__form-wrap">
                    <form action="<?php echo esc_url( admin_url('admin-post.php') ); ?>" method='post' id="owner-gallery-image" class="owner-portal__form" enctype="multipart/form-data">
                        <!-- action  -->
                        <input type="hidden" name="action" value="owner_gallery_upload_video_action">
                        <input type="hidden" name="video_user_id" value="<?php echo $user_id; ?>">

                        <!-- nonce -->
                        <input type="hidden" name="owner_gallery_upload_video_nonce" value="<?php echo wp_create_nonce('owner-gallery-upload-video-nonce'); ?>"/>

                        <!-- video file  -->
                        <div class="owners-portal__form-input owners-portal__input-file">
                            <label for="owner_gallery_upload_video">Upload a video to your gallery</label>
                            <input type="file" size="60" name="owner_gallery_upload_video" id="owner_gallery_upload_video" required>
                        </div>

                        <!-- optional placeholder  -->
                        <div class="owners-portal__form-input owners-portal__input-file">
                            <label for="owner_gallery_upload_video_placeholder">Upload a placeholder image for your video</label>
                            <input type="file" size="60" name="owner_gallery_upload_video_placeholder" id="owner_gallery_upload_video_placeholder">
                        </div>

                        <!-- private or public  -->
                        <div class="owners-portal__form-input owners-portal__input-radio">
                            <div class="owners-portal__radio">
                                <label for="video_visibility_level_public">Share this video with the community</label>
                                <input type="radio" name="video_visibility_level" id="video_visibility_level_public" value="public" required>
                            </div>

                            <div class="owners-portal__radio">
                                <label for="video_visibility_level_private">Keep this video private</label>
                                <input type="radio" name="video_visibility_level" value="private" id="video_visibility_level_private">
                            </div>
                        </div>

                        <div class="owners-portal__form-input">
                            <label for="owner_gallery_upload_video_caption">
                                <span class="accessible-text">Add a comment about this video</span>
                            </label>
                            <textarea name="owner_gallery_upload_video_caption" id="owner_gallery_upload_video_caption" cols="30" rows="10" placeholder="Add a comment about this video"></textarea>
                        </div>

                        <!-- submit  -->
                        <input type="submit" id="owner_gallery_upload_video_submit" name="owner_gallery_upload_video_submit" class="owners-portal__form-button" value="Upload Image">
                    </form>
                </div>

            </div>

        </div>
    </section>
</main>

<?php get_footer(); ?>
