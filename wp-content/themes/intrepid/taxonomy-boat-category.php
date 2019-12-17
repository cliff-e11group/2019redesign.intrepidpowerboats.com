<?php
get_header();
the_post();
$cat_id = get_queried_object()->term_id;
$cat = get_term_by('id', $cat_id, 'boat-category');
$full_id = $cat->taxonomy . '_' . $cat_id;
$hero_image = get_field('boat_cat_hero_image', $full_id);
$tagline = get_field( 'boat_cat_tagline',  $full_id);
// echo '<pre>'; print_r($cat);

?>


<main class="main">
    <section class="hero hero--inner" style="background-image:url(<?php echo STYLEDIR; ?>/uploads/our-models-bg-image.jpg);">
        <div class="container">
            <div class="hero__content">
                <h1 class="hero__title"><?php echo single_term_title(); ?></h1>
                <div class="hero__description">
                    <p><?php echo $tagline; ?></p>
                </div>
            </div>
        </div>
    </section>
    <div class="model-intro">
        <div class="model-intro__thumbnail" style="background-image:url(<?php echo $hero_image['url']; ?>)"></div>
        <div class="container">
            <div class="model-intro__content">
                <p><?php echo $cat->description; ?></p>
            </div>
        </div>
    </div>


    <div class="content-wrap">
        <section class="content-block">
            <div class="container">
                <div class="sub-container">
                    <p>At Intrepid Powerboats, we consider exactly how each and every Intrepid will be used as we we work one-on-one with new boat owners to custom build their one-of-a-kind marine crafts. Whether you’re looking to dive in the Caribbean, fish in the Gulf or race in the Atlantic, our thoughtfully-appointed and versatile vessels will help you make the most of every moment on the water.</p>
                </div>
            </div>
        </section>
        <section class="content-block">
            <div class="container">
                <h2 class="content-block__title">Why choose
                    <strong>a sport yacht?</strong>
                </h2>
                <div class="sub-container">
                    <p>Not sure if a sport yacht is for you? We invite you to get acquainted with the various models Intrepid builds and custom rigs for a variety of offshore activities.</p>
                    <p>Sport yachts are ideal for boaters who yearn to voyage. The comfortable cabin creates a luxurious home away from home ideal for both long-haul excursions and relaxing day trips. A well-crafted sport yacht can be rigged for activities like diving, swimming, snorkeling and sport fishing without sacrificing comfort for entertaining, cruising and traveling. The versatile sport yacht can be enjoyed by individuals, couples and families, depending on the boat’s size.</p>
                    <p>While some recreational boaters are content with small vessels for days on the lake or river, offshore adventurers appreciate a sport yacht’s versatility and the freedom to travel via the world’s open waterways. With the ability to explore deeper waters and to travel further than a conventional day boat, a sport yacht creates exciting recreational opportunities and enhances your cruising experiences.</p>
                    <p>When determining which type of boat is best suited for you, consider what your passions are and how you want to spend your time on the water. A sport yacht is extremely versatile, so while it may not be the ideal vessel for someone who is only interested in sport fishing, it can be custom rigged for maximum fishability while maintaining comfort for cruising and relaxing. By determining what your offshore priorities are, you’ll be able to work with the Intrepid team to design your perfect marine craft complete with all the necessary features to meet your personal boating goals.</p>
                </div>
            </div>
        </section>
        <section class="content-block">
            <div class="container">
                <h2 class="content-block__title">Customization Matters —
                    <strong>make it yours</strong>
                </h2>
                <div class="sub-container">
                    <p>Not sure if a sport yacht is for you? We invite you to get acquainted with the various models Intrepid builds and custom rigs for a variety of offshore activities.</p>
                    <p>Sport yachts are ideal for boaters who yearn to voyage. The comfortable cabin creates a luxurious home away from home ideal for both long-haul excursions and relaxing day trips. A well-crafted sport yacht can be rigged for activities like diving, swimming, snorkeling and sport fishing without sacrificing comfort for entertaining, cruising and traveling. The versatile sport yacht can be enjoyed by individuals, couples and families, depending on the boat’s size.</p>
                    <p>While some recreational boaters are content with small vessels for days on the lake or river, offshore adventurers appreciate a sport yacht’s versatility and the freedom to travel via the world’s open waterways. With the ability to explore deeper waters and to travel further than a conventional day boat, a sport yacht creates exciting recreational opportunities and enhances your cruising experiences.</p>
                    <p>When determining which type of boat is best suited for you, consider what your passions are and how you want to spend your time on the water. A sport yacht is extremely versatile, so while it may not be the ideal vessel for someone who is only interested in sport fishing, it can be custom rigged for maximum fishability while maintaining comfort for cruising and relaxing. By determining what your offshore priorities are, you’ll be able to work with the Intrepid team to design your perfect marine craft complete with all the necessary features to meet your personal boating goals.</p>
                </div>
            </div>
        </section>
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
        <section class="content-block">
            <div class="container">
                <h2 class="content-block__title">Customize your center console boat<br>
                    <strong>to make it yours</strong>
                </h2>
                <div class="sub-container">
                    <p>Intrepid proudly partners with customers to personalize each and every marine craft to create custom center console boats as unique as their owners. From engine brand to hull color and upholstery to fishing amenities, your personal style will be reflected in your one-of-a-kind Intrepid.</p>
                    <p>Not sure if a center console boat is the right type of vessel for you? No problem! Our <strong>sales representatives</strong> are happy to help you discover your ideal boat, whether it’s a walkaround, a center console, a sport yacht or a cuddy.</p>
                    <a href="#" class="btn btn--dark">Contact a sales representative</a>
                </div>

            </div>
        </section>
    </div>

</main>

<?php get_footer(); ?>
