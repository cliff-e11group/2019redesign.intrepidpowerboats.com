<section class="generalContent generalContent--<?php echo $data['gen_content_number_of_columns']; ?> entry-content">
    <div class="l-container">
        <div class="generalContent--inner">
            <?php echo $data['content']; ?>
        </div>
        <?php if( ($data['gen_content_number_of_columns'] == 2 || $data['gen_content_number_of_columns'] == 3) && $data['content_col_2']) : ?>
        <div class="generalContent--inner">
            <?php echo $data['content_col_2']; ?>
        </div>
        <?php endif; ?>
        <?php if($data['gen_content_number_of_columns'] == 3 && $data['content_col_3']) : ?>
        <div class="generalContent--inner">
            <?php echo $data['content_col_3']; ?>
        </div>
        <?php endif; ?>
    </div>
</section>
