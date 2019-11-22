<?php
get_header();
the_post();
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
                            <a href="<?php echo site_url('gallery'); ?>">Gallery</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="container">
            <div class="portal-gallery__nav">
                <a href="/" class="portal-gallery__nav-link portal-gallery__nav-link--active">My Gallery</a>
                <a href="/" class="portal-gallery__nav-link">Community Gallery</a>
            </div>
            <section class="portal-gallery">
                <a href="<?php echo STYLEDIR; ?>/uploads/article-image1.jpg" data-fancybox="gallery" style="background-image: url(<?php echo STYLEDIR; ?>/uploads/article-image1.jpg);" class="portal-gallery__item"></a>
                <a href="<?php echo STYLEDIR; ?>/uploads/article-image2.jpg" data-fancybox="gallery" style="background-image: url(<?php echo STYLEDIR; ?>/uploads/article-image2.jpg);" class="portal-gallery__item"></a>
                <a href="<?php echo STYLEDIR; ?>/uploads/article-image3.jpg" data-fancybox="gallery" style="background-image: url(<?php echo STYLEDIR; ?>/uploads/article-image3.jpg);" class="portal-gallery__item"></a>
                <a href="<?php echo STYLEDIR; ?>/uploads/article-image4.jpg" data-fancybox="gallery" style="background-image: url(<?php echo STYLEDIR; ?>/uploads/article-image4.jpg);" class="portal-gallery__item"></a>
                <a href="<?php echo STYLEDIR; ?>/uploads/article-image4.jpg" data-fancybox="gallery" style="background-image: url(<?php echo STYLEDIR; ?>/uploads/article-image4.jpg);" class="portal-gallery__item"></a>
                <a href="<?php echo STYLEDIR; ?>/uploads/article-image3.jpg" data-fancybox="gallery" style="background-image: url(<?php echo STYLEDIR; ?>/uploads/article-image3.jpg);" class="portal-gallery__item"></a>
                <a href="<?php echo STYLEDIR; ?>/uploads/article-image2.jpg" data-fancybox="gallery" style="background-image: url(<?php echo STYLEDIR; ?>/uploads/article-image2.jpg);" class="portal-gallery__item"></a>
                <a href="<?php echo STYLEDIR; ?>/uploads/article-image1.jpg" data-fancybox="gallery" style="background-image: url(<?php echo STYLEDIR; ?>/uploads/article-image1.jpg);" class="portal-gallery__item"></a>
                <a href="<?php echo STYLEDIR; ?>/uploads/article-image1.jpg" data-fancybox="gallery" style="background-image: url(<?php echo STYLEDIR; ?>/uploads/article-image1.jpg);" class="portal-gallery__item"></a>
                <a href="<?php echo STYLEDIR; ?>/uploads/article-image2.jpg" data-fancybox="gallery" style="background-image: url(<?php echo STYLEDIR; ?>/uploads/article-image2.jpg);" class="portal-gallery__item"></a>
                <a href="<?php echo STYLEDIR; ?>/uploads/article-image3.jpg" data-fancybox="gallery" style="background-image: url(<?php echo STYLEDIR; ?>/uploads/article-image3.jpg);" class="portal-gallery__item"></a>
                <a href="<?php echo STYLEDIR; ?>/uploads/article-image4.jpg" data-fancybox="gallery" style="background-image: url(<?php echo STYLEDIR; ?>/uploads/article-image4.jpg);" class="portal-gallery__item"></a>
            </section>
        </div>
    </section>
</main>

<?php get_footer(); ?>
