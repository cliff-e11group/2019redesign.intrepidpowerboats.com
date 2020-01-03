<?php foreach($data['content'] as $content) : ?>
    <section class="content-block">
        <div class="container">
            <?php if ($content['title']) : ?>
                <h2 class="content-block__title"><?php echo $content['title']; ?></h2>
            <?php endif; ?>

            <?php if ($content['inner_content']) : ?>
                <div class="sub-container">
                    <?php foreach($content['inner_content'] as $inner_content) : ?>
                        <!-- regular content  -->
                        <?php if ($inner_content['acf_fc_layout'] === 'content') : ?>
                            <?php echo $inner_content['general_content']; ?>
                        <?php endif; ?>

                        <!-- accordion content  -->
                        <?php if ($inner_content['acf_fc_layout'] === 'panel') : ?>
                            <div class="accordion__container">
                                <div data-aria-accordion data-transition>
                                    <h3 data-aria-accordion-heading><?php echo $inner_content['panel_title']; ?></h3>
                                    <div data-aria-accordion-panel>
                                        <?php echo $inner_content['panel_content']; ?>
                                    </div>
                                </div>
                            </div>
                        <?php endif; ?>
                    <?php endforeach; ?>
                </div>
            <?php endif; ?>

        </div>
    </section>
<?php endforeach; ?>

