<section class="team-block">
    <div class="container">
        <?php if ( $data['featured_team'] ) : ?>
            <?php
                $team = $data['featured_team'];
            ?>
            <?php if (!empty($team) ) : ?>

                <div class="team-block__two-third">
                    <div class="team-block__category">

                        <?php if ($data['featured_team_title']) : ?>
                            <h2 class="team-block__category-title"><?php echo $data['featured_team_title']; ?></h2>
                        <?php endif; ?>

                        <ul class="member-list member-list--two-col">
                            <?php foreach($team as $team_member) : ?>
                                <li class="member member-list__item">
                                    <?php if ($team_member['image']) : ?>
                                        <figure class="member__image">
                                            <img src="<?php echo $team_member['image']['sizes']['team-member']; ?>" alt="<?php echo $team_member['image']['alt']; ?>" />
                                        </figure>
                                    <?php endif; ?>

                                    <div class="member__details">
                                        <?php if ($team_member['name']) : ?>
                                            <h3 class="member__name"><?php echo $team_member['name']; ?></h3>
                                        <?php endif; ?>

                                        <?php if ($team_member['title']) : ?>
                                            <p class="member__designation"><?php echo $team_member['title']; ?></p>
                                        <?php endif; ?>

                                        <?php if ($team_member['phone']) : ?>
                                        <p class="member__phone">
                                            <?php if($team_member['phone_link']) : ?>
                                            <a href="tel:<?php echo $team_member['phone_link']; ?>">
                                            <?php endif; ?>
                                                <?php echo $team_member['phone']; ?>
                                            <?php if($team_member['phone_link']) : ?>
                                            </a>
                                            <?php endif; ?>
                                        </p>
                                        <?php endif; ?>

                                        <?php if ($team_member['email']) : ?>
                                            <p class="member__email"><a href="mailto:<?php echo $team_member['email']; ?>"><?php echo $team_member['email']; ?></a></p>
                                        <?php endif; ?>
                                    </div>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                    </div>
                </div>

            <?php endif; ?>
        <?php endif; ?>


        <?php if ( $data['team'] ) : ?>

            <div class="team-block__one-third">

                <?php foreach($data['team'] as $team) : ?>

                    <?php if (!empty($team['team_members']) ) : ?>

                        <div class="team-block__category">
                            <?php if ($team['team_title']) : ?>
                                <h2 class="team-block__category-title"><?php echo $team['team_title']; ?></h2>
                            <?php endif; ?>
                            <ul class="member-list">
                                <?php foreach($team['team_members'] as $team_member) : ?>
                                    <li class="member member-list__item">
                                        <?php if ($team_member['image']) : ?>
                                            <figure class="member__image">
                                                <img src="<?php echo $team_member['image']['sizes']['team-member']; ?>" alt="<?php echo $team_member['image']['alt']; ?>" />
                                            </figure>
                                        <?php endif; ?>

                                        <div class="member__details">
                                            <?php if ($team_member['name']) : ?>
                                                <h3 class="member__name"><?php echo $team_member['name']; ?></h3>
                                            <?php endif; ?>

                                            <?php if ($team_member['title']) : ?>
                                                <p class="member__designation"><?php echo $team_member['title']; ?></p>
                                            <?php endif; ?>

                                            <?php if ($team_member['phone_number']) : ?>
                                            <p class="member__phone">
                                                <?php if($team_member['phone_number_link']) : ?>
                                                <a href="tel:<?php echo $team_member['phone_number_link']; ?>">
                                                <?php endif; ?>
                                                    <?php echo $team_member['phone_number']; ?>
                                                <?php if($team_member['phone_number_link']) : ?>
                                                </a>
                                                <?php endif; ?>
                                            </p>
                                            <?php endif; ?>

                                            <?php if ($team_member['email']) : ?>
                                                <p class="member__email"><a href="mailto:<?php echo $team_member['email']; ?>"><?php echo $team_member['email']; ?></a></p>
                                            <?php endif; ?>
                                        </div>
                                    </li>

                                <?php endforeach; ?>
                            </ul>
                        </div>

                    <?php endif; ?>

                <?php endforeach; ?>

            </div>

        <?php endif; ?>

    </div>
</section>
