<section class="grid-block">
        <div class="container">
            <?php if($data['top_blocks']) : ?>
                <?php foreach($data['top_blocks'] as $block) : ?>
                    <?php $count = 1; ?>
                        <div class="grid-block__item grid-block__item--<?php echo $count; ?>" style="background-image: url('<?php echo $block['image']['url']; ?>" >
                            <div class="grid-block__content">
                                <div class="grid-block__inner">
                                <?php if($block['title']) : ?>
                                    <h2 class="grid-block__title"><?php echo $block['title']; ?></h2>
                                <?php endif; ?>

                                <?php if($block['content']) : ?>
                                    <p><?php echo $block['content']; ?></p>
                                <?php endif; ?>
                                </div>
                                <?php if($block['link']) : ?>
                                    <a class="btn--cover"
                                    href="<?php echo $block['link']['url']; ?>"
                                    target="<?php echo $block['link']['target']; ?>" >
                                        <span class="btn"><?php echo $block['link']['title']; ?></span>
                                    </a>
                                <?php endif; ?>

                            </div>
                        </div>
                    <?php $count++; ?>
                <?php endforeach; ?>
            <?php endif; ?>

            <?php if ($data['bottom_block_1']) : ?>
                <div class="grid-block__item grid-block__item--3" style="background-image: url('<?php echo $data['bottom_block_1']['image']['url']; ?>">
                    <div class="grid-block__content">
                        <div class="grid-block__inner">
                        <?php if($data['bottom_block_1']['title']) : ?>
                            <h2 class="grid-block__title"><?php echo $data['bottom_block_1']['title']; ?></h2>
                        <?php endif; ?>

                        <?php if($data['bottom_block_1']['content']) : ?>
                            <p><?php echo $data['bottom_block_1']['content']; ?></p>
                        <?php endif; ?>
                        </div>
                        <?php if($data['bottom_block_1']['link']) : ?>
                            <a class="btn--cover"
                            href="<?php echo $data['bottom_block_1']['link']['url']; ?>"
                            target="<?php echo $data['bottom_block_1']['link']['target']; ?>" >
                                <span class="btn"><?php echo $data['bottom_block_1']['link']['title']; ?></span>
                            </a>
                        <?php endif; ?>
                    </div>
                </div>
            <?php endif; ?>

            <?php if ($data['bottom_block_2']) : ?>
                <div class="grid-block__item grid-block__item--4" style="background-image: url('<?php echo $data['bottom_block_2']['image']['url']; ?>">
                    <div class="grid-block__content">
                        <div class="grid-block__inner">
                        <?php if($data['bottom_block_2']['title']) : ?>
                            <h2 class="grid-block__title"><?php echo $data['bottom_block_2']['title']; ?></h2>
                        <?php endif; ?>

                        <?php if($data['bottom_block_2']['content']) : ?>
                            <p><?php echo $data['bottom_block_2']['content']; ?></p>
                        <?php endif; ?>
                        </div>
                        <?php if($data['bottom_block_2']['link']) : ?>
                            <a class="btn--cover"
                            href="<?php echo $data['bottom_block_2']['link']['url']; ?>"
                            target="<?php echo $data['bottom_block_2']['link']['target']; ?>" >
                                <span class="btn"><?php echo $data['bottom_block_2']['link']['title']; ?></span>
                            </a>
                        <?php endif; ?>
                    </div>
                </div>
            <?php endif; ?>

            <?php if ($data['bottom_block_3']) : ?>
                <div class="grid-block__item grid-block__item--5" style="background-image: url('<?php echo $data['bottom_block_3']['image']['url']; ?>">
                    <div class="grid-block__content">
                        <div class="grid-block__inner">
                        <?php if($data['bottom_block_3']['title']) : ?>
                            <h2 class="grid-block__title"><?php echo $data['bottom_block_3']['title']; ?></h2>
                        <?php endif; ?>

                        <?php if($data['bottom_block_3']['content']) : ?>
                            <p><?php echo $data['bottom_block_3']['content']; ?></p>
                        <?php endif; ?>
                        </div>
                        <?php if($data['bottom_block_3']['link']) : ?>
                            <a class="btn--cover"
                            href="<?php echo $data['bottom_block_3']['link']['url']; ?>"
                            target="<?php echo $data['bottom_block_3']['link']['target']; ?>" >
                                <span class="btn"><?php echo $data['bottom_block_3']['link']['title']; ?></span>
                            </a>
                        <?php endif; ?>
                    </div>
                </div>
            <?php endif; ?>

        </div>
    </section>
