
<div class="content-wrap">
    <section class="content-block">
        <div class="container">
            <?php if ($data['intro']) : ?>
                <div class="sub-container">
                    <?php echo $data['intro']; ?>
                </div>
            <?php endif; ?>
        </div>
    </section>

    <?php foreach($data['content'] as $content) : ?>
        <section class="content-block">
            <div class="container">
                <?php if ($content['title']) : ?>
                    <h2 class="content-block__title"><?php echo $content['title']; ?><br>
                    </h2>
                <?php endif; ?>

                <?php if ($content['inner_content']) : ?>

                    <?php foreach($content['inner_content'] as $inner_content) : ?>
                        <!-- regular content  -->
                        <?php if ($inner_content['acf_fc_layout'] === 'content') : ?>
                            <div class="sub-container">
                                <?php echo $inner_content['content']; ?>
                            </div>
                        <?php endif; ?>

                        <!-- accordion content  -->
                        <?php if ($inner_content['acf_fc_layout'] === 'accordion') : ?>
                            <div class="column-model">
                                <div class="column-model__item">
                                    <div class="accordion__container">
                                        <div data-aria-accordion data-transition>
                                            <h3 data-aria-accordion-heading><?php echo $inner_content['title']; ?></h3>
                                            <div data-aria-accordion-panel>
                                                <?php echo $inner_content['content']; ?>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        <?php endif; ?>

                        <!-- IMAGE CONTENT  -->
                        <?php if ($inner_content['acf_fc_layout'] === 'image') : ?>
                            <div class="column-model">
                                <div class="column-model__item">
                                    <figure class="column-model__thumbnail">
                                        <img src="<?php echo$inner_content['image']['url']; ?>" alt="<?php echo $inner_content['image']['alt']; ?>" />
                                    </figure>
                                </div>
                            </div>
                        <?php endif; ?>
                    <?php endforeach; ?>

                <?php endif; ?>

            </div>
        </section>
    <?php endforeach; ?>
</div>



        <section class="content-block">
            <div class="container">
                <h2 class="content-block__title">available
                    <strong>sport yacht models</strong>
                </h2>
                <div class="sub-container">
                    <p>You can choose from three Intrepid sport yacht models to serve as the canvas for your personalized marine craft. Each Intrepid boat is carefully crafted to your specifications with customizable features including hull color, engine brand, console style, seating and upholstery, storage options, fishing features and more. <strong>For more information, contact a sales representative today.</strong></p>
                </div>
                <div class="column-model">
                    <div class="column-model__item">
                        <figure class="column-model__thumbnail">
                            <img src="<?php echo STYLEDIR; ?>/uploads/410-evolution-large.jpg" alt="410-evolution" />
                        </figure>
                        <div class="column-model__title-wrap">
                            <h2 class="column-model__title">410 Evolution</h2>
                            <span class="column-model__trigger"></span>
                        </div>
                        <div class="column-model__content">
                            <p>Leave everyone in your wake while enjoying a smooth, serene ride. The 475SY is the longest Intrepid model at 47 feet 6 inches—the additional length, however, doesn’t jeopardize its performance. Cruise at 43 knots and enjoy amazing vistas wherever your heart takes you.</p>
                            <p>You’ll be amazed at how spacious this boat feels below deck. With two private staterooms, the 475SY is ideal for families and those who enjoy yachting with friends. Convertible seating creates sleeping room for 6. Enjoy drinks in the cabin or relax on the sundeck—there’s room for everyone on the 475 Sport Yacht.</p>
                            <p>Three or four motors will propel your 475SY through the water—the choice is yours. Flanked by dive platforms and equipped with a folding swim ladder and an optional anchor, you can safely and easily stop for a quick dip wherever your travels take you.</p>
                            <a href="#" class="btn btn--dark">Download Brochure</a>
                        </div>
                    </div>
                    <div class="column-model__item">
                        <figure class="column-model__thumbnail">
                            <img src="<?php echo STYLEDIR; ?>/uploads/430-sport-yacht-large.jpg" alt="430-sport-yacht" />
                        </figure>
                        <div class="column-model__title-wrap">
                            <h2 class="column-model__title">430 Sport Yacht</h2>
                            <span class="column-model__trigger"></span>
                        </div>
                        <div class="column-model__content">
                            <p>Leave everyone in your wake while enjoying a smooth, serene ride. The 475SY is the longest Intrepid model at 47 feet 6 inches—the additional length, however, doesn’t jeopardize its performance. Cruise at 43 knots and enjoy amazing vistas wherever your heart takes you.</p>
                            <p>You’ll be amazed at how spacious this boat feels below deck. With two private staterooms, the 475SY is ideal for families and those who enjoy yachting with friends. Convertible seating creates sleeping room for 6. Enjoy drinks in the cabin or relax on the sundeck—there’s room for everyone on the 475 Sport Yacht.</p>
                            <p>Three or four motors will propel your 475SY through the water—the choice is yours. Flanked by dive platforms and equipped with a folding swim ladder and an optional anchor, you can safely and easily stop for a quick dip wherever your travels take you.</p>
                            <a href="#" class="btn btn--dark">Download Brochure</a>
                        </div>
                    </div>
                    <div class="column-model__item">
                        <figure class="column-model__thumbnail">
                            <img src="<?php echo STYLEDIR; ?>/uploads/475-sport-yacht-large.jpg" alt="475-sport-yacht" />
                        </figure>
                        <div class="column-model__title-wrap">
                            <h2 class="column-model__title">475 sport yacht</h2>
                            <span class="column-model__trigger"></span>
                        </div>
                        <div class="column-model__content">
                            <p>Leave everyone in your wake while enjoying a smooth, serene ride. The 475SY is the longest Intrepid model at 47 feet 6 inches—the additional length, however, doesn’t jeopardize its performance. Cruise at 43 knots and enjoy amazing vistas wherever your heart takes you.</p>
                            <p>You’ll be amazed at how spacious this boat feels below deck. With two private staterooms, the 475SY is ideal for families and those who enjoy yachting with friends. Convertible seating creates sleeping room for 6. Enjoy drinks in the cabin or relax on the sundeck—there’s room for everyone on the 475 Sport Yacht.</p>
                            <p>Three or four motors will propel your 475SY through the water—the choice is yours. Flanked by dive platforms and equipped with a folding swim ladder and an optional anchor, you can safely and easily stop for a quick dip wherever your travels take you.</p>
                            <a href="#" class="btn btn--dark">Download Brochure</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

