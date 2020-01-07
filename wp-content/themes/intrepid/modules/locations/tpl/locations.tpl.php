<section class="company-block">
    <div class="container">
        <h2 class="company-block__title">Office Location and Hours</h2>
        <div class="company-info">
            <?php foreach($data['locations'] as $location) : ?>

                <div class="company-info__item">
                    <?php if ($location['map']) : ?>
                        <figure class="company-info__map">
                            <!-- <a href="#" target="_blank">
                                <img src="<?php //echo STYLEDIR; ?>/uploads/google-map.jpg" alt="map"/>
                            </a> -->
                            <img src="<?php echo $location['map']['url']; ?>" alt="<?php echo $location['map']['alt']; ?>">
                        </figure>
                    <?php endif; ?>

                    <?php if ( $location['title'] ): ?>
                        <h3 class="company-info__title"><?php echo $location['title']; ?></h3>
                    <?php endif; ?>


                    <?php if ($location['address'] || $location['address_2'] ): ?>
                        <address class="company-info__address">
                            <?php if ($location['address']  ): ?>
                                <?php echo $location['address']; ?>
                            <?php endif; ?>

                            <?php if ($location['address_2']  ): ?>
                                <br><?php echo $location['address_2']; ?>
                            <?php endif; ?>

                            <?php if ($location['directions']) : ?>
                                <br>
                                <a class="company-info__direction" href="<?php echo $location['directions']['url']; ?>" target="_blank">Driving Directions</a>
                            <?php endif; ?>
                        </address>
                    <?php endif; ?>

                    <?php if ($location['phone_number'] ): ?>
                        <a class="company-info__phone" href="tel:<?php echo $location['phone_number']; ?>"><?php echo $location['phone_number']; ?></a>
                    <?php endif; ?>

                    <?php if ( $location['hours'] ): ?>
                        <div class="company-info__office-hr">
                            <span class="label">Hours:</span>
                            <p>
                                <?php foreach($location['hours'] as $hours) : ?>
                                    <?php echo $hours['hours'];?>
                                    <br>
                                <?php endforeach; ?>
                            </p>
                        </div>
                    <?php endif; ?>

                </div>

            <?php endforeach; ?>
        </div>
    </div>
</section>