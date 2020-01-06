<section class="landing-hero landing-hero--alt">
    <div class="container">
        <?php if($data['column_1']) : ?>
            <div class="landing-hero__item landing-hero__item--active">
                <div class="landing-hero__item-bg" style="background-image:url('<?php echo $data['column_1']['image']['url']; ?>')"></div>

                <div class="landing-hero__content landing-hero__content--fade">
                    <?php if($data['column_1']['title']) : ?>
                        <h2 class="landing-hero__title"><?php echo $data['column_1']['title']; ?></h2>
                    <?php endif; ?>

                    <?php if($data['column_1']['content']) : ?>
                        <div class="landing-hero__description">
                            <?php echo $data['column_1']['content']; ?>
                        </div>
                    <?php endif; ?>

                    <?php if($data['column_1']['link']) : ?>
                        <a class="landing-hero__link" href="<?php echo $data['column_1']['link']['url']; ?>" target="?php echo $data['column_1']['link']['target']; ?>">
                            <span class="btn btn--outline btn--light"><?php echo $data['column_1']['link']['title']; ?></span>
                        </a>
                    <?php endif; ?>
                </div>
            </div>
        <?php endif; ?>

        <?php if($data['column_2']) : ?>
            <div class="landing-hero__item">
                <div class="landing-hero__item-bg" style="background-image:url('<?php echo $data['column_2']['image']['url']; ?>')"></div>
                <div class="landing-hero__content">
                    <?php if ($data['column_2']['title']) : ?>
                        <h2 class="landing-hero__title"><?php echo $data['column_2']['title']; ?></h2>
                    <?php endif; ?>

                    <?php if ($data['column_2']['content']) : ?>
                        <div class="landing-hero__description">
                        <?php echo $data['column_2']['content']; ?>
                    </div>
                    <?php endif; ?>

                    <?php if ($data['column_2']['link']) : ?>
                        <a class="landing-hero__link" href="<?php echo $data['column_2']['link']['url']; ?>" target="<?php echo $data['column_2']['link']['target']; ?>">
                            <span class="btn btn--outline btn--light"><?php echo $data['column_2']['link']['title']; ?></span>
                        </a>
                    <?php endif; ?>


                </div>
            </div>
        <?php endif; ?>

        <?php if($data['intro_text']): ?>
            <div class="landing-hero__intro">
                <?php echo $data['intro_text']; ?>
            </div>
        <?php endif; ?>

    </div>
</section>


