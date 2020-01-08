<?php foreach($data['locations'] as $location) : ?>

    <section class="customer-support">
        <div class="container">
            <div class="customer-support__location">
                <h2 class="customer-support__title">Location and Hours</h2>

                <div class="company-info__item company-info__item--fullwidth">
                    <?php if ($location['map']) : ?>
                        <figure class="company-info__map">
                            <!-- <a href="#" target="_blank">
                                <img src="<?php //echo STYLEDIR; ?>/uploads/google-map.jpg" alt="map"/>
                            </a> -->
                            <img src="<?php echo $location['map']['sizes']['map']; ?>" alt="<?php echo $location['map']['alt']; ?>">
                        </figure>
                    <?php endif; ?>
                    <h3 class="company-info__title">Service Location</h3>
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
                            <p><?php echo  $location['hours'];?>
                            </p>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
            <?php
                $agents = $location['customer_service_agents'];
            ?>

            <?php if ($agents) : ?>
            <div class="customer-support__team">
                <h2 class="customer-support__title">Customer Service</h2>
                <ul class="member-list">
                    <?php foreach($agents as $agent) : ?>

                        <li class="member member-list__item">
                            <?php if ($agent['image']) : ?>
                                <figure class="member__image">
                                    <img src="<?php echo $agent['image']['sizes']['team-member'];?>" alt="<?php echo $agent['image']['alt'];?>" />
                                </figure>
                            <?php endif; ?>

                            <div class="member__details">
                                <?php if ($agent['name']) : ?>
                                    <h3 class="member__name"><?php echo $agent['name']; ?></h3>
                                <?php endif; ?>

                                <?php if ($agent['title']) : ?>
                                    <span class="member__designation"><?php echo $agent['title']; ?></span>
                                <?php endif; ?>

                                <?php if ($agent['phone_number']) : ?>
                                    <a class="member__phone" href="tel:<?php echo $agent['phone_number']; ?>"><?php echo $agent['phone_number']; ?></a>
                                <?php endif; ?>

                                <?php if ($agent['email']) : ?>
                                    <span class="member__email"><a href="mailto:<?php echo $agent['email']; ?>"><?php echo $agent['email']; ?></a></span>
                                <?php endif; ?>
                            </div>
                        </li>

                    <?php endforeach; ?>

                </ul>
            </div>
            <?php endif; ?>
        </div>
    </section>

<?php endforeach; ?>