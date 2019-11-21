<?php
get_header();
the_post();
?>
<main class="main page-events-single">
    <section class="hero hero--inner hero--news-single" style="background-image:url(<?php echo STYLEDIR; ?>/uploads/news_hero.jpg);">
        <img class="hero__mobile-image" src="<?php echo STYLEDIR; ?>/uploads/news_hero_mobile.jpg" alt="news_hero" />
        <a href="#" class="arrow-link"><svg class="icon icon-arrow-up" aria-hidden="true" role="img"><use xlink:href="#icon-arrow-up" x="0" y="0"></use></svg>Back to main page</a>
    </section>
    <section class="layout layout--reverse">
        <div class="container">
            <div class="sidebar layout__one-third">
                <div class="article-block">
                    <h2 class="section-title section-title--gray">More Events</h2>
                    <ul class="article-list">
                        <li class="article-list__item">
                            <h3 class="article-list__title"><a href="#">Event Title</a></h3>
                            <p class="article-list__short-desc">Let me start this month’s newsletter by inviting everyone to the Palm Beach Boat Show which runs from Thursday, March 28th through Sun ...</p>
                            <a href="#" class="link">Read More</a>
                        </li>
                        <li class="article-list__item">
                            <h3 class="article-list__title"><a href="#">Event Title</a></h3>
                            <p class="article-list__short-desc">We scheduled this newsletter to go out Thanksgiving morning because it is a great time for us to give thanks to all towards the new boat ...</p>
                            <a href="#" class="link">Read More</a>
                        </li>
                        <li class="article-list__item">
                            <h3 class="article-list__title"><a href="#">Event Title</a></h3>
                            <p class="article-list__short-desc">On February 1st, 2018 Intrepid would like to invite you to our Pre Miami International Boat Show Event located ...</p>
                            <a href="#" class="link">Read More</a>
                        </li>
                        <li class="article-list__item">
                            <h3 class="article-list__title"><a href="#">Event Title</a></h3>
                            <p class="article-list__short-desc">Let me start this month’s newsletter by inviting everyone to the Palm Beach Boat Show which runs from Thursday, March 28th through Sun ...</p>
                            <a href="#" class="link">Read More</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="layout__two-third">
                <h1 class="page-title">Sample Event</h1>
                <div class="newsletter-article">
                    <article class="newsletter-article__item entry-content">
                        <div class="post-author">
                            <figure class="post-author__photo">
                                <img src="<?php echo STYLEDIR; ?>/uploads/author.jpg" alt="author" />
                            </figure>
                            <span class="post-author__name">
                                Ken Clinton, President
                            </span>
                        </div>
                        <span class="post-date">
                            April 20, 2019
                        </span>
                        <div class="content-block">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut risus vitae tellus efficitur condimentum sed et ipsum. Proin condimentum iaculis euismod. Nulla facilisi. Aenean risus dolor, maximus in sollicitudin eu, dictum sed erat. Ut scelerisque blandit est, sed aliquam nisi viverra nec. Fusce gravida tempus orci, eget lacinia urna commodo ac. Curabitur et magna eros. Integer sagittis sagittis metus non tristique. Vivamus sit amet venenatis eros. Aliquam dolor nisl, vestibulum sed metus et, luctus pulvinar nisl. Curabitur dignissim hendrerit lacus, id vehicula lectus. Donec condimentum commodo magna, elementum imperdiet neque varius at. Quisque dignissim placerat posuere. Pellentesque eu erat imperdiet, dignissim magna vitae, gravida tellus. Praesent eu orci nec tortor rutrum venenatis.</p>
                            <p>Proin volutpat justo at mauris vulputate, at eleifend mauris efficitur. Nulla ex risus, bibendum ut mi vel, tempus aliquam elit. Nam in libero purus. Vivamus et consectetur nisi, in varius metus. In mollis velit a diam pulvinar ullamcorper ut et lorem. Integer ut felis non ipsum pretium faucibus. Nunc lacinia quis erat in fermentum. Praesent molestie dui justo, ut pharetra sapien lacinia quis. Vestibulum in venenatis sem. Fusce sit amet leo id risus aliquet consectetur. Nullam lacinia porttitor orci eu feugiat. In iaculis velit sit amet odio imperdiet ultricies. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec non odio nec arcu semper gravida. Aliquam sit amet ante neque.</p>
                        </div>
                        <div class="slider-wrap">
                            <div class="image-slider">
                                <div>
                                    <img src="<?php echo STYLEDIR; ?>/uploads/slider-image1.jpg" alt="slider-image1" />
                                </div>
                                <div>
                                    <img src="<?php echo STYLEDIR; ?>/uploads/slider-image2.jpg" alt="slider-image2" />
                                </div>
                                <div>
                                    <img src="<?php echo STYLEDIR; ?>/uploads/slider-image3.jpg" alt="slider-image3" />
                                </div>
                            </div>
                            <span class="slider-caption">Photos from the palm beach show</span>
                        </div>
                        <div class="content-block">
                            <p>Proin volutpat justo at mauris vulputate, at eleifend mauris efficitur. Nulla ex risus, bibendum ut mi vel, tempus aliquam elit. Nam in libero purus. Vivamus et consectetur nisi, in varius metus. In mollis velit a diam pulvinar ullamcorper ut et lorem. Integer ut felis non ipsum pretium faucibus. Nunc lacinia quis erat in fermentum. Praesent molestie dui justo, ut pharetra sapien lacinia quis. Vestibulum in venenatis sem. Fusce sit amet leo id risus aliquet consectetur. Nullam lacinia porttitor orci eu feugiat. In iaculis velit sit amet odio imperdiet ultricies. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec non odio nec arcu semper gravida. Aliquam sit amet ante neque.</p>
                        </div>
                    </article>
                </div>
                <div class="scroll-top">
                    <a href="#" class="scroll-to-top scroll-to-top--small"><svg class="icon icon-arrow-up" aria-hidden="true" role="img">
                        <use xlink:href="#icon-arrow-up" x="0" y="0"></use>
                    </svg>Back to Top</a>
                </div>
            </div>
        </div>
    </section>
    <div class="instagram-feed">
        <h2 class="instagram-feed__title"><span>Latest Updates on</span><a href="#" target="_blank">@intrepidpowerboats</a></h2>
        <div class="feed-carousel">
            <div class="feed-carousel__item"><img src="<?php echo STYLEDIR; ?>/uploads/instagram-image1.jpg" alt="instagram-image1"/> </div>
            <div class="feed-carousel__item"><img src="<?php echo STYLEDIR; ?>/uploads/instagram-image2.jpg" alt="instagram-image1"/> </div>
            <div class="feed-carousel__item"><img src="<?php echo STYLEDIR; ?>/uploads/instagram-image3.jpg" alt="instagram-image1"/> </div>
            <div class="feed-carousel__item"><img src="<?php echo STYLEDIR; ?>/uploads/instagram-image4.jpg" alt="instagram-image1"/> </div>
            <div class="feed-carousel__item"><img src="<?php echo STYLEDIR; ?>/uploads/instagram-image5.jpg" alt="instagram-image1"/> </div>
        </div>
    </div>
    <div class="column-content">
        <div class="container">
            <div class="category-block category-block--large">
                <h4 class="widget-title">Categories<span class="icon-close icon-close--white"></span></h4>
                <ul class="category-list">
                    <li class="category-list__item"><a href="#">Newsletter</a></li>
                    <li class="category-list__item"><a href="#">Factory Updates</a></li>
                    <li class="category-list__item"><a href="#">General News</a></li>
                </ul>
            </div>
            <div class="subscribe-block">
                <h2 class="subscribe-block__title">Stay Updated</h2>
                <span class="subscribe-block__description">Get all the latest updates from our team directly into your inbox.</span>
                <div class="gf_browser_chrome gform_wrapper">
                    <form method="post" action="#">
                        <div class="gform_body">
                            <ul class="gform_fields">
                                <li class="gfield">
                                    <label class="gfield_label">Email Address</label>
                                    <div class="ginput_container ginput_container_email">
                                        <input name="input_1" type="email" value="" class="medium" tabindex="7" placeholder="Email Address" aria-invalid="false">
                                    </div>
                                </li>
                                <li class="gfield gfield_html">
                                    <span class="form-note">*Submitting will automatically subscribe you to our email newsletters, updates, and more!</span>
                                </li>
                            </ul>
                        </div>
                        <div class="gform_footer top_label">
                            <input type="submit" class="gform_button button" value="Submit" tabindex="8">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</main>
<?php get_footer();
