<section class="contact-form">
    <div class="container">
        <div class="contact-form__phone--mobile">
            <h2 class="toggle-content__title">Call Us Direct</h2>

            <?php if ($data['mobile_buttons']) : ?>
                <ul class="phone-list">
                    <?php foreach($data['mobile_buttons'] as $button) : ?>
                        <li class="phone-list__item">
                            <?php if ($button['title']) : ?>
                                <span class="phone-list__label">
                                    <?php echo $button['title']; ?>
                                </span>
                            <?php endif; ?>

                            <?php if ($button['phone_number']) : ?>
                                <a class="phone-list__number" href="tel:<?php echo $button['phone_number']; ?>"><?php echo $button['phone_number']; ?></a>
                            <?php endif; ?>
                        </li>
                    <?php endforeach; ?>
                </ul>
            <?php endif; ?>
        </div>

        <?php if ($data['intro']) : ?>
            <p class="contact-form__title">
                <?php echo $data['intro']; ?>
            </p>
        <?php endif; ?>

        <div class="contact-form__inner">
            <div class="toggle-nav">
                <?php if($data['leadoff_label']) : ?>
                    <h2 class="toggle-nav__title"><?php echo $data['leadoff_label'];?></h2>
                <?php endif; ?>

                <span class="fake-select">Select a Department</span>
                <ul class="toggle-list">

                    <?php if($data['leadoff_title']) : ?>
                        <li class="toggle-list__item active"><?php echo $data['leadoff_title'];?></li>
                    <?php endif; ?>

                    <?php foreach( $data['form_content'] as $form => $item) : ?>
                        <li class="toggle-list__item"><?php echo $item['label']; ?></li>
                    <?php endforeach; ?>
                </ul>
            </div>
            <ul class="toggle-content">
                <?php if ($data['leadoff_content']) : ?>
                    <li class="toggle-content__item active">
                        <?php if ($data['leadoff_title']) : ?>
                            <span class="toggle-content__title"><?php echo $data['leadoff_title'];?></span>
                        <?php endif; ?>
                        <?php echo $data['leadoff_content']; ?>
                    </li>
                <?php endif; ?>

                <?php foreach( $data['form_content'] as $form => $item): ?>
                    <li class="toggle-content__item">
                        <?php if ($item['title']) : ?>
                            <h3 class="form__title"><?php echo $item['title'];?></h3>
                        <?php endif; ?>

                        <?php echo $item['content']; ?>
                    </li>
                <?php endforeach; ?>

            </ul>
        </div>
    </div>
</section>