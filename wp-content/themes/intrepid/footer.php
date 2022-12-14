<footer class="footer">
    <div class="container">
        <div class="footer-links">
            <h4 class="block-title">Main Menu</h4>

            <?php
                $args = array(
                    'container' => false,
                    'menu_class' => 'footer-links__list',
                    'theme_location' => 'footer-menu-1',
                    'before' =>  '<li class="footer-links__item">',
                    'after' => '</li>'
                );
                wp_nav_menu($args);
            ?>

        </div>

        <?php
            $phone_numbers = get_field('footer_phone_numbers', 'option');
            $email = get_field('email_address', 'option');
        ?>

        <?php if( !empty($phone_numbers) || !empty($email)) : ?>
            <div class="contact-list">
                <h4 class="block-title">Contact Us</h4>
                <ul class="contact-list__wrap">
                    <?php if($email) : ?>
                        <li class="contact-list__item"><a href="<?php echo site_url('contact'); ?>">Direct Message</a></li>
                    <?php endif; ?>

                    <?php if($phone_numbers) : ?>
                        <?php foreach ($phone_numbers as $phone_number) : ?>
                            <li class="contact-list__item">
                                <span class="contact-list__item-label"><?php echo $phone_number['title']; ?></span>
                                <a href="tel:<?php echo $phone_number['phone_number']; ?>"><?php echo $phone_number['phone_number']; ?></a>
                            </li>
                        <?php endforeach; ?>
                    <?php endif; ?>
                </ul>
            </div>
        <?php endif; ?>

        <?php
            $facebook = get_field('facebook_link', 'option');
            $insta = get_field('instagram_link', 'option');
            $youtube = get_field('youtube_link', 'option');
            $twitter = get_field('twitter_link', 'option');
        ?>

        <?php if ($facebook || $insta || $youtube || $twitter) : ?>
        <div class="social-block">
            <h4 class="block-title">Connect</h4>
            <div class="social-links">
                <?php if ($facebook) :?>
                    <a href="<?php echo $facebook; ?>" target="_blank">
                        <svg class="icon icon-facebook" aria-hidden="true" role="img">
                            <use xlink:href="#icon-facebook" x="0" y="0"></use>
                        </svg>
                    </a>
                <?php endif; ?>

                <?php if ($insta) :?>
                    <a href="<?php echo $insta; ?>" target="_blank">
                        <svg class="icon icon-instagram" aria-hidden="true" role="img">
                            <use xlink:href="#icon-instagram" x="0" y="0"></use>
                        </svg>
                    </a>
                <?php endif; ?>

                <?php if ($youtube) :?>
                    <a href="<?php echo $youtube; ?>" target="_blank">
                        <svg class="icon icon-youtube" aria-hidden="true" role="img">
                            <use xlink:href="#icon-youtube" x="0" y="0"></use>
                        </svg>
                    </a>
                <?php endif; ?>

                <?php if ($twitter) :?>
                    <a href="<?php echo $twitter; ?>" target="_blank">
                        <svg class="icon icon-twitter" aria-hidden="true" role="img">
                            <use xlink:href="#icon-twitter" x="0" y="0"></use>
                        </svg>
                    </a>
                <?php endif; ?>

            </div>
        </div>

        <?php endif; ?>

        <div class="footer-logo">
            <a href="<?php echo site_url(); ?>">
                <img src="<?php echo IMAGES; ?>/logo.svg" alt="Intrepid Powerboats" />
            </a>
            <span class="copyright-text">Copyright <?php echo date("Y"); ?></span>
        </div>
    </div>
</footer><!--.footer-->

</div><!-- #page -->
<?php wp_footer(); ?>
<svg xmlns="http://www.w3.org/2000/svg" style="height:0;position:absolute;width:0">
    <defs>
        <symbol id="icon-facebook" viewBox="0 0 16 28">
            <title>facebook</title>
            <path d="M14.984 0.187v4.125h-2.453c-1.922 0-2.281 0.922-2.281 2.25v2.953h4.578l-0.609 4.625h-3.969v11.859h-4.781v-11.859h-3.984v-4.625h3.984v-3.406c0-3.953 2.422-6.109 5.953-6.109 1.687 0 3.141 0.125 3.563 0.187z"></path>
        </symbol>
        <symbol id="icon-twitter" viewBox="0 0 32 32">
            <title>twitter</title>
            <path d="M28.711 9.482c0.020 0.284 0.020 0.569 0.020 0.853 0 8.67-6.599 18.66-18.66 18.66-3.716 0-7.168-1.076-10.071-2.944 0.528 0.061 1.036 0.081 1.584 0.081 3.066 0 5.888-1.035 8.142-2.802-2.883-0.061-5.3-1.949-6.132-4.548 0.406 0.061 0.812 0.102 1.239 0.102 0.589 0 1.178-0.081 1.726-0.223-3.005-0.609-5.259-3.249-5.259-6.437v-0.081c0.873 0.487 1.888 0.792 2.964 0.832-1.766-1.178-2.924-3.188-2.924-5.462 0-1.218 0.325-2.335 0.893-3.31 3.228 3.98 8.081 6.579 13.523 6.863-0.101-0.487-0.162-0.995-0.162-1.502 0-3.614 2.924-6.558 6.558-6.558 1.888 0 3.594 0.792 4.792 2.071 1.482-0.284 2.904-0.832 4.162-1.584-0.487 1.523-1.523 2.802-2.883 3.614 1.32-0.142 2.599-0.508 3.777-1.015-0.893 1.299-2.010 2.457-3.289 3.391z"></path>
        </symbol>
        <symbol id="icon-instagram" viewBox="0 0 32 32">
            <title>instagram</title>
            <path d="M26.607 25.464v-11.571h-2.411q0.357 1.125 0.357 2.339 0 2.25-1.143 4.152t-3.107 3.009-4.286 1.107q-3.518 0-6.018-2.42t-2.5-5.848q0-1.214 0.357-2.339h-2.518v11.571q0 0.464 0.313 0.777t0.777 0.313h19.089q0.446 0 0.768-0.313t0.321-0.777zM21.536 15.946q0-2.214-1.616-3.777t-3.902-1.563q-2.268 0-3.884 1.563t-1.616 3.777 1.616 3.777 3.884 1.563q2.286 0 3.902-1.563t1.616-3.777zM26.607 9.518v-2.946q0-0.5-0.357-0.866t-0.875-0.366h-3.107q-0.518 0-0.875 0.366t-0.357 0.866v2.946q0 0.518 0.357 0.875t0.875 0.357h3.107q0.518 0 0.875-0.357t0.357-0.875zM29.714 5.804v20.393q0 1.446-1.036 2.482t-2.482 1.036h-20.393q-1.446 0-2.482-1.036t-1.036-2.482v-20.393q0-1.446 1.036-2.482t2.482-1.036h20.393q1.446 0 2.482 1.036t1.036 2.482z"></path>
        </symbol>
        <symbol id="icon-youtube" viewBox="0 0 28 28">
            <title>youtube</title>
            <path d="M11.109 17.625l7.562-3.906-7.562-3.953v7.859zM14 4.156c5.891 0 9.797 0.281 9.797 0.281 0.547 0.063 1.75 0.063 2.812 1.188 0 0 0.859 0.844 1.109 2.781 0.297 2.266 0.281 4.531 0.281 4.531v2.125s0.016 2.266-0.281 4.531c-0.25 1.922-1.109 2.781-1.109 2.781-1.062 1.109-2.266 1.109-2.812 1.172 0 0-3.906 0.297-9.797 0.297v0c-7.281-0.063-9.516-0.281-9.516-0.281-0.625-0.109-2.031-0.078-3.094-1.188 0 0-0.859-0.859-1.109-2.781-0.297-2.266-0.281-4.531-0.281-4.531v-2.125s-0.016-2.266 0.281-4.531c0.25-1.937 1.109-2.781 1.109-2.781 1.062-1.125 2.266-1.125 2.812-1.188 0 0 3.906-0.281 9.797-0.281v0z"></path>
        </symbol>
        <symbol id="icon-arrow-up" viewBox="0 0 32 32">
            <title>arrow up</title>
            <path d="M30 22l-13.999-14-14 14z"></path>
        </symbol>
        <symbol id="icon-compare-models" viewBox="0 0 32 32">
            <title>Compare Models</title>
            <path fill="#000" d="M7.377 2.838v17.556h-5.568v-17.556h5.568zM8.968 0.444h-8.75v21.944h8.75v-21.944z"></path>
            <path fill="#000" d="M20.925 2.838v17.556h-5.568v-17.556h5.568zM22.516 0.444h-8.75v21.944h8.75v-21.944z"></path>
            <path fill="#000" d="M33.909 2.838v17.556h-5.568v-17.556h5.568zM35.5 0.444h-8.75v21.944h8.75v-21.944z"></path>
            <path fill="#000" d="M3.268 31.556c-0.204 0-0.407-0.083-0.57-0.25l-1.954-2c-0.326-0.333-0.326-0.833 0-1.167s0.814-0.333 1.14 0l1.384 1.417 4.315-4.417c0.326-0.333 0.814-0.333 1.14 0s0.326 0.833 0 1.167l-4.885 5c-0.163 0.167-0.366 0.25-0.57 0.25z"></path>
            <path fill="#000" d="M29.518 31.556c-0.204 0-0.407-0.083-0.57-0.25l-1.954-2c-0.326-0.333-0.326-0.833 0-1.167s0.814-0.333 1.14 0l1.384 1.417 4.315-4.417c0.326-0.333 0.814-0.333 1.14 0s0.326 0.833 0 1.167l-4.885 5c-0.163 0.167-0.366 0.25-0.57 0.25z"></path>
        </symbol>
        <symbol id="icon-how-they-are-made" viewBox="0 0 32 32">
            <title>How they are made</title>
            <path fill="#000" d="M26.524 19.010v-4.799h-2.139c-0.195-0.682-0.47-1.34-0.82-1.959l1.515-1.491-3.449-3.395-1.512 1.51c-0.627-0.348-1.296-0.618-1.99-0.806v-2.122h-4.877v2.105c-0.693 0.192-1.361 0.463-1.99 0.808l-1.515-1.491-3.446 3.391 1.512 1.488c-0.354 0.618-0.63 1.277-0.821 1.961h-2.136v4.799h2.139c0.195 0.682 0.47 1.34 0.82 1.959l-1.515 1.491 3.446 3.391 1.512-1.488c0.628 0.348 1.298 0.62 1.993 0.808v2.102h4.877v-2.105c0.693-0.192 1.361-0.463 1.99-0.807l1.515 1.491 3.446-3.391-1.512-1.488c0.354-0.618 0.63-1.277 0.821-1.961h2.136zM15.69 22.506c-3.309 0-5.991-2.64-5.991-5.896s2.683-5.896 5.992-5.896c3.309 0 5.991 2.64 5.991 5.896-0.004 3.255-2.684 5.893-5.992 5.896z"></path>
            <path fill="#000" d="M1.407 21.579c-0.283 0-0.533-0.182-0.616-0.448-1.321-4.232-0.722-8.819 1.643-12.584s6.267-6.343 10.704-7.072c0.352-0.057 0.684 0.177 0.741 0.523s-0.18 0.673-0.532 0.73c-4.069 0.669-7.648 3.033-9.817 6.487s-2.719 7.661-1.507 11.542c0.060 0.193 0.024 0.402-0.098 0.564s-0.314 0.258-0.519 0.258v0z"></path>
            <path fill="#000" d="M15.69 31.95c-4.604 0.003-8.974-2-11.933-5.47-0.229-0.268-0.193-0.668 0.079-0.894s0.679-0.191 0.908 0.076c2.696 3.157 6.664 4.991 10.855 5.018s8.182-1.758 10.919-4.881c0.233-0.265 0.64-0.295 0.91-0.066s0.3 0.63 0.067 0.895c-2.961 3.38-7.271 5.323-11.805 5.322z"></path>
            <path fill="#000" d="M29.648 22.507c-0.212 0-0.411-0.103-0.531-0.275s-0.147-0.392-0.071-0.587c1.526-3.932 1.186-8.329-0.928-11.988s-5.78-6.195-9.994-6.915c-0.228-0.038-0.417-0.192-0.497-0.405s-0.039-0.452 0.109-0.627c0.148-0.175 0.379-0.258 0.606-0.219 4.595 0.783 8.592 3.549 10.898 7.538s2.677 8.784 1.012 13.071c-0.096 0.246-0.335 0.408-0.603 0.408z"></path>
            <path fill="#000" d="M13.307 4.152c-0.261 0-0.496-0.155-0.596-0.392s-0.045-0.51 0.14-0.692l0.951-0.936-1.015-0.999c-0.252-0.248-0.252-0.65 0-0.898s0.66-0.248 0.912 0l1.927 1.897-1.864 1.834c-0.121 0.119-0.285 0.186-0.456 0.186z"></path>
            <path fill="#000" d="M28.969 23.607l-0.991-2.403c-0.133-0.325 0.026-0.694 0.356-0.826s0.705 0.024 0.84 0.348l0.506 1.227 1.33-0.531c0.33-0.131 0.705 0.026 0.839 0.35s-0.025 0.694-0.354 0.826l-2.526 1.009z"></path>
            <path fill="#000" d="M3.168 27.429c-0.195 0-0.38-0.087-0.502-0.236s-0.17-0.345-0.129-0.532l0.572-2.623 2.577 0.544c0.348 0.074 0.569 0.411 0.495 0.754s-0.417 0.561-0.766 0.488l-1.315-0.278-0.301 1.381c-0.064 0.292-0.326 0.501-0.63 0.502z"></path>
        </symbol>
        <symbol id="icon-full-line-brochure" viewBox="0 0 32 32">
            <title>Full Line Brochure</title>
            <path fill="#000" d="M0.093 3.437h17.824v28.162h-17.824v-28.162z"></path>
            <path fill="#000" d="M35.293 28.668c0 0.209-0.1 0.419-0.25 0.576s-0.349 0.209-0.549 0.209c-5.842-0.262-10.185 1.047-12.732 2.199h15.478v-28.214h-1.947v25.231z"></path>
            <path fill="#000" d="M33.795 27.83v-27.324c-2.147-0.105-8.987-0.209-14.379 2.617v27.9c2.147-1.204 7.040-3.35 14.379-3.193z"></path>
        </symbol>
        <symbol id="icon-compare" viewBox="0 0 32 32">
            <title>compare</title>
            <path d="M6.288 3.967v16.050h-5.091v-16.050h5.091zM7.742 1.778h-8v20.064h8v-20.064zM18.674 3.967v16.050h-5.091v-16.050h5.091zM20.129 1.778h-8v20.064h8v-20.064zM30.545 3.967v16.050h-5.091v-16.050h5.091zM32 1.778h-8v20.064h8v-20.064zM2.531 30.222c-0.205-0.002-0.39-0.090-0.521-0.228l-0-0-1.786-1.829c-0.138-0.136-0.223-0.325-0.223-0.533s0.085-0.397 0.223-0.533l0-0c0.297-0.305 0.744-0.305 1.042 0l1.265 1.295 3.945-4.038c0.298-0.305 0.745-0.305 1.042 0 0.138 0.136 0.223 0.325 0.223 0.533s-0.085 0.397-0.223 0.533l-0 0-4.466 4.571c-0.131 0.139-0.316 0.226-0.521 0.229h-0zM26.531 30.222c-0.205-0.002-0.39-0.090-0.521-0.228l-0-0-1.787-1.829c-0.138-0.136-0.223-0.325-0.223-0.533s0.085-0.397 0.223-0.533l0-0c0.297-0.305 0.744-0.305 1.042 0l1.265 1.295 3.945-4.038c0.298-0.305 0.745-0.305 1.042 0 0.138 0.136 0.223 0.325 0.223 0.533s-0.085 0.397-0.223 0.533l-0 0-4.466 4.571c-0.131 0.139-0.316 0.226-0.521 0.229h-0z"></path>
        </symbol>
        <symbol id="icon-gear" viewBox="0 0 32 32">
            <title>gear</title>
            <path d="M26.524 19.010v-4.8h-2.139c-0.216-0.747-0.495-1.397-0.843-2.002l0.023 0.044 1.515-1.49-3.45-3.395-1.511 1.509c-0.571-0.323-1.232-0.599-1.928-0.792l-0.063-0.015v-2.121h-4.877v2.105c-0.693 0.192-1.361 0.463-1.99 0.807l-1.515-1.49-3.446 3.391 1.512 1.488c-0.329 0.563-0.609 1.215-0.805 1.901l-0.015 0.061h-2.138v4.799h2.139c0.195 0.682 0.47 1.339 0.82 1.958l-1.515 1.49 3.447 3.392 1.511-1.488c0.629 0.347 1.298 0.619 1.993 0.807v2.103h4.877v-2.106c0.759-0.213 1.42-0.488 2.038-0.832l-0.047 0.024 1.515 1.49 3.447-3.392-1.513-1.488c0.329-0.563 0.609-1.214 0.806-1.9l0.015-0.061h2.136zM15.69 22.506c-3.309 0-5.991-2.64-5.991-5.896s2.683-5.896 5.991-5.896c3.31 0 5.992 2.64 5.992 5.897-0.005 3.255-2.684 5.892-5.992 5.895z"></path>
            <path d="M1.407 21.579c-0.001 0-0.002 0-0.003 0-0.286 0-0.528-0.186-0.612-0.443l-0.001-0.005c-0.436-1.349-0.688-2.901-0.688-4.512 0-2.994 0.869-5.784 2.367-8.134l-0.036 0.061c2.366-3.764 6.267-6.342 10.704-7.071 0.032-0.006 0.069-0.009 0.107-0.009 0.316 0 0.579 0.228 0.633 0.528l0.001 0.004c0.005 0.030 0.008 0.065 0.008 0.101 0 0.317-0.232 0.58-0.535 0.628l-0.004 0c-4.070 0.669-7.648 3.034-9.818 6.488-1.341 2.099-2.137 4.658-2.137 7.404 0 1.477 0.231 2.901 0.658 4.236l-0.027-0.098c0.059 0.192 0.024 0.402-0.098 0.564-0.12 0.157-0.307 0.258-0.518 0.258-0 0-0.001 0-0.001 0h0zM15.69 31.951c-4.604 0.003-8.974-2-11.933-5.471-0.093-0.109-0.15-0.252-0.15-0.408 0-0.195 0.089-0.37 0.229-0.485l0.001-0.001c0.112-0.093 0.257-0.149 0.415-0.149 0.196 0 0.373 0.087 0.492 0.224l0.001 0.001c2.697 3.158 6.665 4.992 10.855 5.018 4.19 0.027 8.182-1.758 10.918-4.881 0.233-0.265 0.64-0.294 0.911-0.066s0.299 0.631 0.067 0.896c-2.961 3.379-7.27 5.322-11.805 5.321zM29.648 22.507c-0 0-0.001 0-0.002 0-0.218 0-0.411-0.107-0.528-0.272l-0.001-0.002c-0.071-0.1-0.114-0.225-0.114-0.36 0-0.082 0.016-0.16 0.044-0.232l-0.002 0.004c1.527-3.931 1.186-8.329-0.928-11.988s-5.781-6.195-9.996-6.914c-0.229-0.038-0.415-0.193-0.496-0.401l-0.002-0.004c-0.025-0.065-0.040-0.141-0.040-0.22 0-0.155 0.057-0.298 0.15-0.407l-0.001 0.001c0.12-0.14 0.298-0.229 0.496-0.229 0.039 0 0.077 0.003 0.114 0.010l-0.004-0.001c4.594 0.783 8.592 3.547 10.898 7.537 1.282 2.176 2.039 4.793 2.039 7.588 0 1.973-0.377 3.857-1.064 5.585l0.036-0.102c-0.097 0.241-0.329 0.408-0.6 0.408-0.001 0-0.002 0-0.003 0h0z"></path>
            <path d="M13.306 4.153c-0.001 0-0.002 0-0.002 0-0.265 0-0.493-0.16-0.592-0.388l-0.002-0.004c-0.031-0.072-0.049-0.155-0.049-0.243 0-0.176 0.072-0.335 0.189-0.449l0-0 0.951-0.936-1.015-0.998c-0.117-0.114-0.189-0.273-0.189-0.449s0.072-0.335 0.189-0.449l0-0c0.118-0.115 0.279-0.186 0.456-0.186s0.339 0.071 0.456 0.186l-0-0 1.928 1.896-1.864 1.834c-0.117 0.115-0.278 0.186-0.455 0.186-0 0-0.001 0-0.001 0h0zM28.969 23.607l-0.991-2.404c-0.029-0.070-0.046-0.152-0.046-0.237 0-0.266 0.165-0.494 0.399-0.587l0.004-0.002c0.072-0.030 0.155-0.047 0.242-0.047 0.267 0 0.496 0.161 0.596 0.391l0.002 0.004 0.506 1.227 1.33-0.531c0.071-0.029 0.154-0.047 0.241-0.047 0.267 0 0.497 0.162 0.596 0.392l0.002 0.004c0.030 0.071 0.047 0.153 0.047 0.239 0 0.266-0.165 0.493-0.397 0.586l-0.004 0.002-2.525 1.008zM3.168 27.429c-0.001 0-0.001 0-0.002 0-0.201 0-0.381-0.091-0.5-0.235l-0.001-0.001c-0.089-0.107-0.142-0.247-0.142-0.398 0-0.047 0.005-0.094 0.015-0.138l-0.001 0.004 0.571-2.624 2.576 0.544c0.348 0.074 0.57 0.411 0.496 0.754-0.068 0.29-0.324 0.502-0.629 0.502-0.048 0-0.096-0.005-0.141-0.015l0.004 0.001-1.315-0.277-0.302 1.381c-0.067 0.289-0.322 0.502-0.627 0.502-0.001 0-0.002 0-0.003 0h0z"></path>
        </symbol>
        <symbol id="icon-brochure" viewBox="0 0 32 32">
            <title>brochure</title>
            <path d="M0.080 5.232h15.278v24.139h-15.278zM30.251 26.858c-0.007 0.193-0.087 0.367-0.214 0.494l0-0c-0.128 0.134-0.3 0.179-0.471 0.179-5.007-0.224-8.73 0.898-10.913 1.884h13.266v-24.183h-1.669v21.626z"></path>
            <path d="M28.967 26.139v-23.419c-1.84-0.090-7.704-0.179-12.325 2.244v23.914c1.84-1.031 6.033-2.871 12.325-2.736z"></path>
        </symbol>
    </defs>
</svg>
</body>
</html>
